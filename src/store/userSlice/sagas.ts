import { CheckAuth, Logout } from './index';
import { ResponseData } from './../../api/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeLeading, call, put, select } from '@redux-saga/core/effects';
import { Login } from '.';
import { userAPI, LoginResponseData, CheckAuthResponseData } from '../../api/user';
import { RootState } from '..';

function* loginRequestWorker({ payload }: PayloadAction<FormData>) {
    const response: ResponseData<LoginResponseData> = yield call(userAPI.login, payload);
    if (response.status === "success") {
        yield put(Login.success(response.data))
    }
    if (response.status === "error" || response.statusCode === 500) {
        yield put(Login.failure(response.errors))
    }
}

function* checkAuthWorker() {
    const state: RootState = yield select()
    const user = state.user.user;
    if (!user) {
        yield put(CheckAuth.failure())
    } else {
        const response: ResponseData<CheckAuthResponseData> = yield call(userAPI.checkAuth, user);

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
}

function* logoutWorker () {
    const state: RootState = yield select()
    const user = state.user.user;
    if (!user) {
        yield put(Logout.success())
    } else {
        yield call(userAPI.logout, user);
        yield put(Logout.success())
    }
}

export function* userSagas() {
    yield takeLeading(Login.REQUEST, loginRequestWorker);
    yield takeLeading(CheckAuth.REQUEST, checkAuthWorker);
    yield takeLeading(Logout.REQUEST, logoutWorker)
}