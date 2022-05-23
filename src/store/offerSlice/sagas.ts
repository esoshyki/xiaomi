import { PayloadAction } from '@reduxjs/toolkit';
import { giveAnswer, giveAnswerRequest, hideQuestionContent, makeAdditionAction } from './index';
import { takeLeading, call, put, select, takeEvery, delay } from "redux-saga/effects";
import { GetQuestions, setDeviceInfo, setStep } from ".";
import { deviceApi } from "../../api";
import { GivenAnswer, MakeAdditionAction, QuestionsResponse, RequestAnswers } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from '..';
import { formatRequestAnswer } from "../../components/Offer/helpers/formatRequestAnswer";
import { CreateOrder, SendPhoto } from '../orderSlice'

function* getQuestionsWorker() {
    const state: RootState = yield select();
    const answers: RequestAnswers = yield call(formatRequestAnswer, state);
    const response: ResponseData<QuestionsResponse> = yield call(deviceApi.getQuestions, state.user.user, answers);
    if (response.data?.complete) {
        yield put(setStep("summary"));
    }
    if (response.status === "success") {
        yield put(GetQuestions.success(response.data))
        if (response.data?.deviceInfo && !Array.isArray(response.data.deviceInfo)) {
            yield put(setDeviceInfo(response.data.deviceInfo))
        } else {
            // yield put(GetQuestions.failure(customErrors.deviceNotFound))
        }
    };
    if (response.status === "error") {
        yield put(GetQuestions.failure(response.errors))
    }
    yield put(GetQuestions.fulfill())
}

function* makeAdditionActionWorker({ payload } : PayloadAction<MakeAdditionAction>) {
    console.log("saga", payload);
    switch (payload.action) {
        case "createOrder":
            yield put(CreateOrder.request());
            break
        case "addPhoto":
            yield put(SendPhoto.request(payload.images));
            break
    }
}

function* giveAnswerRequestWorker({ payload } : PayloadAction<GivenAnswer>) {
    yield put(hideQuestionContent());
    yield delay(400);
    yield put(giveAnswer(payload))
}

export default function* offerSagas() {
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeEvery(makeAdditionAction, makeAdditionActionWorker);
    yield takeEvery(giveAnswerRequest, giveAnswerRequestWorker)
}