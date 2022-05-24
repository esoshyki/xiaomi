import { resetQuestions, setGivenAnswers } from './../offerSlice/index';
import { setAdditionalAction, setStep } from '../offerSlice';
import { customErrors } from './../../helpers/getCustomError';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrder, GetOrder, setItemNumber, setOrderNumber, SendPhoto, setCurrentItem, GetItemStatus } from './index';
import {  call, put, select, takeEvery } from "redux-saga/effects";
import { orderApi } from "../../api";
import { GetOrderRequest, Order, CreateOrderResponse, OrderState } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from "..";
import { User } from '../userSlice/types';

function* getOrderData() {
    const state: RootState = yield select();
    yield state.order;
}

function* getUserData() {
    const state: RootState = yield select();
    yield state.user.user
}

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
        yield put(setStep("questions"));
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
            yield put(GetOrder.success(response.data));
        }

        if (response.status === "error") {
            yield put(GetOrder.failure(response.errors))
        }

        yield put(GetOrder.fulfill());
        yield put(setAdditionalAction());

        const currentItem = response.data?.items.find(item => item.itemNumber === itemNumber);
        if (currentItem) {
            if (currentItem.status === "F") {
                yield put(setStep("summary"));
                yield put(setCurrentItem(currentItem));
            }
            yield put(resetQuestions());
            yield put(setGivenAnswers({
                combinationId: currentItem.combinationId,
                combinationCode: currentItem.combinationCode,
                answers: []
            }));
            yield put(setCurrentItem(currentItem));
        }
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
        yield put(setAdditionalAction());
        yield put(SendPhoto.success(response.data));
     };

    if (response.status === "error") {
        yield put(SendPhoto.failure(response.errors))
    };

    yield put(SendPhoto.fulfill())
};

function* getItemStatusRequestWorker () {
    const orderData: OrderState = yield getOrderData();
    const user: User | null = yield getUserData();
    const { itemNumber, number: orderNumber } = orderData.order;
    if (!orderNumber || !itemNumber || !user) return;
    const response : ResponseData<{status: string}> = yield call(orderApi.getItemStatus, orderNumber, itemNumber, user);

    if (response.status === "success") {
        yield put(GetItemStatus.success(response.data));
    }
    if (response.status === "error") {
        yield put(GetItemStatus.failure(response.errors))
    };

    yield put(GetItemStatus.fulfill())
}

export default function* orderSagas() {
    yield takeEvery(CreateOrder.REQUEST, createOrderWorker);
    yield takeEvery(GetOrder.REQUEST, getOrderWorker)
    yield takeEvery(CreateOrder.fulfill, createOrderSuccessWorker);
    yield takeEvery(SendPhoto.REQUEST, sendPhotoWorker);
    yield takeEvery(GetItemStatus.REQUEST, getItemStatusRequestWorker)
}