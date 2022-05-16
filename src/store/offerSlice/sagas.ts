import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrder, makeAdditionAction } from './index';
import { takeLeading, call, put, select, takeEvery } from "redux-saga/effects";
import { GetQuestions, setDeviceInfo, setStep } from ".";
import { deviceApi, orderApi} from "../../api";
import { AdditionActions, CreateOrderResponse, QuestionsResponse, RequestAnswers } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from "..";
import { formatRequestAnswer } from "../../components/Offer/helpers/formatRequestAnswer";


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
        }
    };
    if (response.status === "error") {
        yield put(GetQuestions.failure(response.errors))
    }
    yield put(GetQuestions.fulfill())
}

function* createOrderWorker() {
    const state: RootState = yield select();
    const response: ResponseData<CreateOrderResponse> = yield call(orderApi.createOrder, state);

    if (response.status === "success") {
        yield put(CreateOrder.success(response.data))
    }
    if (response.status === "error") {
        yield put(CreateOrder.failure(response.errors));
    };

    yield put(CreateOrder.fulfill())
};

function* makeAdditionActionWorker({ payload } : PayloadAction<AdditionActions>) {
    switch (payload) {
        case "createOrder":
            yield put(CreateOrder.request())
    }
}

export default function* offerSagas() {
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeLeading(CreateOrder.REQUEST, createOrderWorker);
    yield takeEvery(makeAdditionAction, makeAdditionActionWorker)
}