import { customErrors } from './../../helpers/getCustomError';
import { PayloadAction } from '@reduxjs/toolkit';
import { CreateOrder, GetOrder, setItemHash, setOrderNumber, SendPhoto } from './index';
import { takeLeading, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { GetQuestions } from '../offerSlice';
import { orderApi} from "../../api";
import { GetOrderRequest, Order } from "./types";
import { ResponseData } from "../../api/types";
import { RootState } from "..";
import { resetAdditionActions } from '../offerSlice/'

function* createOrderWorker() {
    const state: RootState = yield select();
    const response: ResponseData<GetOrderRequest> = yield call(orderApi.createOrder, state);

    if (response.status === "success") {
        yield put(CreateOrder.success(response.data));
        const itemHash = response.data?.itemHash;
        const orderNumber = response.data?.orderNumber;

        if (itemHash && orderNumber) {
            yield put(GetOrder.request({ itemHash, orderNumber }));
            yield put(setOrderNumber(orderNumber));
            yield put(setItemHash(itemHash));
        }
    }
    if (response.status === "error") {
        yield put(CreateOrder.failure(response.errors));
    };

    yield put(CreateOrder.fulfill())
};

function* getOrderWorker({ payload } : PayloadAction<GetOrderRequest | undefined>) {
    const state: RootState = yield select();
    const orderNumber = payload?.orderNumber ?? state.order.order.orderNumber;
    const itemHash = payload?.itemHash ?? state.order.order.itemHash;
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
            yield put(resetAdditionActions());
            yield put(GetOrder.success(response.data));
        }

        if (response.status === "error") {
            yield put(GetOrder.failure(response.errors))
        }

        yield put(GetOrder.fulfill())
    }
}

function* createOrderSuccessWorker() {
    yield put(GetQuestions.request())
}

function* sendPhotoWorker ({ payload } : PayloadAction<File[] | undefined>) {
    const state: RootState = yield select();
    const user = state.user.user;
    const { itemHash, orderNumber } = state.order.order;
    const { images } = state.offer;

    if (!user) {
        yield put(SendPhoto.failure([customErrors.noUser]));
        return;
    }

    if (!payload) {
        yield put(SendPhoto.failure(["Ошибка загрузки картинок"]));
        return;
    }

    const response: ResponseData<any> = yield call(orderApi.sendPhoto, payload, orderNumber, itemHash, user);

    if (response.status === "success") {
        yield put(SendPhoto.success(response.data))
    };

    if (response.status === "error") {
        yield put(SendPhoto.failure(response.errors))
    }
};

export default function* orderSagas() {
    yield takeLeading(CreateOrder.REQUEST, createOrderWorker);
    yield takeLeading(GetOrder.REQUEST, getOrderWorker)
    yield takeLatest(CreateOrder.fulfill, createOrderSuccessWorker);
    yield takeLeading(SendPhoto.REQUEST, sendPhotoWorker)
}