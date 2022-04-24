import { takeLeading, call, put, select } from "redux-saga/effects";
import { CheckImei, setImeiValue } from ".";
import { phoneAPI } from "../../api/phone";
import { PhoneInfo } from "./types";
import { ResponseData } from "../../api/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

function* checkImeiWorker ({ payload } : PayloadAction<string>) {
    const state : RootState = yield select();
    const response: ResponseData<PhoneInfo> = yield call(phoneAPI.getModelByImei, payload, state.user.user);
    if (response.status === "success") {
        yield put(CheckImei.success(response.data))
        yield put(setImeiValue(payload))
    }
    if (response.status === "error") {
        yield put(CheckImei.failure(response.errors))
    }
    yield put(CheckImei.fulfill())
}

export default function* offerSagas () {
    yield takeLeading(CheckImei.REQUEST, checkImeiWorker)
}