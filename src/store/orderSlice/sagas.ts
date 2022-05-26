import { resetQuestions, setGivenAnswers, GetQuestions, restoreOffer } from './../offerSlice/index';
import { setAdditionalAction, setStep } from '../offerSlice';
import { customErrors } from './../../helpers/getCustomError';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrChangeOrder, GetOrder, setItemNumber, setOrderNumber, SendPhoto, GetItemStatus } from './index';
import {  call, put, select, takeLatest, takeLeading } from "redux-saga/effects";
import { orderApi } from "../../api";
import { GetOrderRequest, Order, CreateOrderResponse, SendPhotoData, OrderRequest } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from "..";
import { redirectTo } from '../viewSlice';

function* createOrderWorker() {
    const state: RootState = yield select();
    const orderNumber = state.order.order.number;
    const createOrderStatus = state.order.order.status;

    if (createOrderStatus === "success") {
        return;
    }
    
    const response: CreateOrderResponse = yield call((orderNumber ? orderApi.addItemToOrder : orderApi.createOrder), state);

    if (response.status === "success") {
        yield put(CreateOrChangeOrder.success(response.data));
        const itemNumber = response.data?.itemNumber;
        const orderNumber = response.data?.number;
        if (itemNumber && orderNumber) {
            yield put(CreateOrChangeOrder.fulfill())
            yield put(restoreOffer());
            yield put(redirectTo(`/order/${orderNumber}/${itemNumber}`));
            return
        }
        yield put(setStep("questions"));
    }
    if (response.status === "error") {
        yield put(CreateOrChangeOrder.failure(response.errors));
        yield put(setStep("createOrderFailure"))
    };

    yield put(CreateOrChangeOrder.fulfill())
};

function* getOrderWorker({ payload }: PayloadAction<GetOrderRequest | undefined>) {
    const state: RootState = yield select();
    const orderNumber = payload?.orderNumber ?? state.order.order.number;
    const itemNumber = payload?.itemNumber ?? state.order.order.itemNumber;
    const user = state.user.user;
    const errors = [];
    if (!orderNumber) errors.push(customErrors.noOrderId);
    if (!user) errors.push(customErrors.noUser);

    if (errors.length) {
        yield put(GetOrder.failure(errors))
    } else {
        if (!orderNumber || !user) return;
        const response: ResponseData<Order> = yield call(orderApi.getOrderData, orderNumber, user, itemNumber);

        if (response.status === "success") {
            yield put(restoreOffer());
            yield put(GetOrder.success({ data: response.data, itemNumber }));
        }

        if (response.status === "error") {
            yield put(GetOrder.failure(response.errors))
        }

        yield put(GetOrder.fulfill());
        yield put(setAdditionalAction());

    }
}

function* sendPhotoWorker({ payload }: PayloadAction<SendPhotoData>) {
    const state: RootState = yield select();
    const user = state.user.user;

    const { itemNumber, orderNumber, files } = payload

    if (!user) {
        yield put(SendPhoto.failure([customErrors.noUser]));
        return;
    }

    if (!files || !itemNumber || !orderNumber) {
        yield put(SendPhoto.failure(["Ошибка загрузки картинок"]));
        return;
    }

    const response: ResponseData<any> = yield call(orderApi.sendPhoto, files, orderNumber, itemNumber, user);

    if (response.status === "success") {
        yield put(setAdditionalAction());
        yield put(SendPhoto.success(response.data));
        yield put(GetQuestions.request())
     };

    if (response.status === "error") {
        yield put(SendPhoto.failure(response.errors))
    };

    yield put(SendPhoto.fulfill())
};

function* getItemStatusRequestWorker ({ payload }: PayloadAction<OrderRequest<{}>>) {
    const state: RootState = yield select();

    if (!state) return;
    if (!state.order) return;
    if (!state.order.order) return;

    const user = state.user.user;

    const { itemNumber, orderNumber } = payload;
    if (!orderNumber || !itemNumber || !user) return;
    const response : ResponseData<{status: string}> = yield call(orderApi.getItemStatus, orderNumber, user, itemNumber);

    if (response.status === "success") {
        yield put(GetItemStatus.success(response.data));
    }
    if (response.status === "error") {
        yield put(GetItemStatus.failure(response.errors))
    };

    yield put(GetItemStatus.fulfill())
}

function* getOrderSuccessWorker({ payload } : PayloadAction<{data: Order, itemNumber?: string}>) {
    const state : RootState = yield select();
    const { qrCode, order } = state.order;
    const orderData = payload.data;
    const currentItem = orderData.items.find(item => item.itemNumber === payload.itemNumber);
    if (currentItem) {
        if (currentItem.status === "F") {
            yield put(setStep("summary"));
        }
        yield put(resetQuestions());
        yield put(setGivenAnswers({
            combinationId: qrCode ? undefined : currentItem.combinationId,
            combinationCode: qrCode ?? currentItem.combinationCode,
            answers: []
        }));
    };
}

export default function* orderSagas() {
    yield takeLeading(CreateOrChangeOrder.REQUEST, createOrderWorker);
    yield takeLatest(GetOrder.REQUEST, getOrderWorker)
    yield takeLeading(SendPhoto.REQUEST, sendPhotoWorker);
    yield takeLeading(GetItemStatus.REQUEST, getItemStatusRequestWorker);
    yield takeLatest(GetOrder.SUCCESS, getOrderSuccessWorker)
}