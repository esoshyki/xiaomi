import { customErrors } from './../../helpers/getCustomError';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrder, GetOrder, makeAdditionAction } from './index';
import { takeLeading, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { GetQuestions, setDeviceInfo, setStep } from ".";
import { deviceApi, orderApi} from "../../api";
import { AdditionActions, GetOrderRequest, Order, QuestionsResponse, RequestAnswers } from "./types";
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
    const response: ResponseData<GetOrderRequest> = yield call(orderApi.createOrder, state);

    if (response.status === "success") {
        yield put(CreateOrder.success(response.data));
        const itemHash = response.data?.itemHash;
        const orderNumber = response.data?.orderNumber;

        if (itemHash && orderNumber) {
            yield put(GetOrder.request({ itemHash, orderNumber }))
        }
    }
    if (response.status === "error") {
        yield put(CreateOrder.failure(response.errors));
    };

    yield put(CreateOrder.fulfill())
};

function* getOrderWorker({ payload } : PayloadAction<GetOrderRequest | undefined>) {
    yield put(GetOrder.request());
    const state: RootState = yield select();
    const orderNumber = payload?.orderNumber ?? state.offer.createOrderData?.orderNumber;
    const itemHash = payload?.itemHash ?? state.offer.createOrderData?.itemHash;
    const user = state.user.user;
    const errors = [];
    if (!orderNumber) errors.push(customErrors.noOrderId);
    if (!itemHash) errors.push(customErrors.noItemHash);
    if (!user) errors.push(customErrors.noUser);

    if (errors.length) {
        yield put(GetOrder.failure(errors))
    } else {
        if (!orderNumber || !itemHash || !user) return;
        const response: ResponseData<Order> = yield call(orderApi.getOrderData, orderNumber, itemHash, user);

        if (response.status === "success") {
            yield put(GetOrder.success(response.data))
        }

        if (response.status === "error") {
            yield put(GetOrder.failure(response.errors))
        }

        yield put(GetOrder.fulfill())
    }

}

function* makeAdditionActionWorker({ payload } : PayloadAction<AdditionActions>) {
    switch (payload) {
        case "createOrder":
            yield put(CreateOrder.request())
    }
}

export default function* offerSagas() {
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeLeading(CreateOrder.REQUEST, createOrderWorker);
    yield takeEvery(makeAdditionAction, makeAdditionActionWorker);
    yield takeLatest(CreateOrder.SUCCESS, getOrderWorker)
}