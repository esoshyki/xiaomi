import { PayloadAction } from '@reduxjs/toolkit';
import { giveAnswer, giveAnswerRequest, hideQuestionContent, makeAdditionAction, setGetQuestionLoading } from './index';
import { call, put, select, takeEvery, delay, takeLatest } from "redux-saga/effects";
import { GetQuestions, setDeviceInfo, setStep } from ".";
import { deviceApi } from "../../api";
import { GivenAnswer, MakeAdditionAction, OfferState, QuestionsResponse, RequestAnswers } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from '..';
import { formatRequestAnswer } from "../../components/Offer/helpers/formatRequestAnswer";
import { CreateOrChangeOrder, SendPhoto, setQrCode } from '../orderSlice';
import { redirectTo } from '../viewSlice';

function* getQuestionsWorker({ payload } : PayloadAction<{ orderNumber?: string, itemNumber?: string }>) {
    const { orderNumber, itemNumber } = payload;
    const state: RootState = yield select();
    const answers: RequestAnswers = yield call(formatRequestAnswer, state);
    const qrCode = state.order.qrCode;
    const response: ResponseData<QuestionsResponse> = yield call(deviceApi.getQuestions, state.user.user, answers);
    if (response?.data?.complete) {
        yield put(redirectTo("/order/" + orderNumber + "/" + (itemNumber)));
        yield put(setStep("summary"));
    }
    if (response?.status === "success") {
        yield put(GetQuestions.success(response.data))
        if (response?.data?.deviceInfo && !Array.isArray(response.data.deviceInfo)) {
            yield put(setDeviceInfo(response.data.deviceInfo))
        } else {
            // yield put(GetQuestions.failure(customErrors.deviceNotFound))
        }
    };
    if (response?.status === "error") {
        yield put(GetQuestions.failure(response.errors))
    }
    yield put(GetQuestions.fulfill());

    if (qrCode) {
        yield put(setStep("questions"));
    }
}

function* makeAdditionActionWorker({ payload } : PayloadAction<MakeAdditionAction>) {
    const { itemNumber, orderNumber } = payload;
    console.log(itemNumber, orderNumber);
    console.log(payload.action);
    switch (payload.action) {
        case "createOrder":
            yield put(CreateOrChangeOrder.request({ orderNumber, itemNumber }))
            break
        case "addPhoto":
            yield put(SendPhoto.request({
                files: payload.images,
                itemNumber: payload.itemNumber,
                orderNumber: payload.orderNumber
            }));
            break
    }
}

function* giveAnswerRequestWorker({ payload } : PayloadAction<GivenAnswer>) {
    yield put(hideQuestionContent());
    yield delay(400);
    yield put(giveAnswer(payload))
}

export default function* offerSagas() {
    yield takeLatest(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeEvery(makeAdditionAction, makeAdditionActionWorker);
    yield takeEvery(giveAnswerRequest, giveAnswerRequestWorker)
}