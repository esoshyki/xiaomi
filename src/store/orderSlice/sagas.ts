import { setAdditionalAction, setQuestionsTree, setStep } from '../offerSlice';
import { customErrors } from './../../helpers/getCustomError';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrder, GetOrder, setItemNumber, setOrderNumber, SendPhoto } from './index';
import { takeLeading, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { orderApi } from "../../api";
import { GetOrderRequest, Order, CreateOrderResponse } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from "..";
import { resetAdditionActions } from '../offerSlice/'

function* createOrderWorker() {
    const state: RootState = yield select();
    const response: CreateOrderResponse = yield call(orderApi.createOrder, state);
    yield put(setStep("createOrder"));

    if (response.status === "success") {
        yield put(CreateOrder.success(response.data));
        const itemNumber = response.data?.itemNumber;
        const orderNumber = response.data?.number;

        if (itemNumber && orderNumber) {
            yield put(setOrderNumber(orderNumber));
            yield put(setItemNumber(itemNumber));
        }
    }
    if (response.status === "error") {
        yield put(CreateOrder.failure(response.errors));
        yield put(setStep("createOrderFailure"))
    };

    yield put(CreateOrder.fulfill())
};

function* getOrderWorker({ payload }: PayloadAction<GetOrderRequest | undefined>) {
    const state: RootState = yield select();
    const orderNumber = payload?.orderNumber ?? state.order.order.number;
    const itemNumber = payload?.itemNumber ?? state.order.order.itemNumber;
    const user = state.user.user;
    const errors = [];
    if (!orderNumber) errors.push(customErrors.noOrderId);
    if (!itemNumber) errors.push(customErrors.noItemHash);
    if (!user) errors.push(customErrors.noUser);

    if (errors.length) {
        yield put(GetOrder.failure(errors))
    } else {
        if (!orderNumber || !itemNumber || !user) return;
        const response: ResponseData<Order> = yield call(orderApi.getOrderData, orderNumber, itemNumber, user);

        if (response.status === "success") {
            yield put(resetAdditionActions());
            yield put(GetOrder.success(response.data));
            yield put(setQuestionsTree(null));
        }

        if (response.status === "error") {
            yield put(GetOrder.failure(response.errors))
        }

        yield put(GetOrder.fulfill())
    }
}

function* createOrderSuccessWorker() {

}

function* sendPhotoWorker({ payload }: PayloadAction<File[] | undefined>) {
    const state: RootState = yield select();
    const user = state.user.user;
    const { itemNumber, number } = state.order.order;

    if (!user) {
        yield put(SendPhoto.failure([customErrors.noUser]));
        return;
    }

    if (!payload) {
        yield put(SendPhoto.failure(["Ошибка загрузки картинок"]));
        return;
    }

    const response: ResponseData<any> = yield call(orderApi.sendPhoto, payload, number, itemNumber, user);

    if (response.status === "success") {
        yield put(SendPhoto.success(response.data));
        yield put(setAdditionalAction());
    };

    if (response.status === "error") {
        yield put(SendPhoto.failure(response.errors))
    };

    yield put(SendPhoto.fulfill())
};

export default function* orderSagas() {
    yield takeLeading(CreateOrder.REQUEST, createOrderWorker);
    yield takeLeading(GetOrder.REQUEST, getOrderWorker)
    yield takeLatest(CreateOrder.fulfill, createOrderSuccessWorker);
    yield takeLeading(SendPhoto.REQUEST, sendPhotoWorker)
}