import { CheckAuth } from './index';
import { ResponseData } from './../../api/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLeading, call, put } from '@redux-saga/core/effects';
import { Login } from '.';
import { LoginData } from './types';
import { userAPI, LoginResponseData, CheckAuthResponseData } from '../../api/user';

function* loginRequestWorker ({payload} : PayloadAction<FormData>) {
    const response: ResponseData<LoginResponseData> = yield call(userAPI.login, payload);
    if (response.status === "success") {
        yield put(Login.success(response.data))
    }
    if (response.status === "error" || response.statusCode === 500) {
        yield put(Login.failure(response.errors))
    }
}

function* checkAuthWorker ({ payload } : PayloadAction<{
    sessid: string
    sessName: string
}>) {
    const { sessid, sessName } = payload;
    const response: ResponseData<CheckAuthResponseData> = yield call(userAPI.checkAuth, sessid, sessName);

    if (response.status === "success") {
        const { isAuthorised } = response.data || {};
        if (isAuthorised) {
            yield put(CheckAuth.success())
        } else {
            yield put(CheckAuth.failure())
        }
    } else {
        yield put(CheckAuth.failure())
    }
}

export function* userSagas() {
    yield takeLeading(Login.REQUEST, loginRequestWorker);
    yield takeLeading(CheckAuth.REQUEST, checkAuthWorker);
}