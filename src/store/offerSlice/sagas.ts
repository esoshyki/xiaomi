import { takeLeading, call, put, select } from "redux-saga/effects";
import { CheckImei, GetQuestions, setImeiValue } from ".";
import { phoneAPI } from "../../api/phone";
import { PhoneInfo, QuestionGroup } from "./types";
import { ResponseData } from "../../api/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

function* checkImeiWorker ({ payload } : PayloadAction<string>) {
    const state : RootState = yield select();
    const response: ResponseData<PhoneInfo[]> = yield call(phoneAPI.getModelByImei, payload, state.user.user);
    if (response.status === "success") {
        yield put(CheckImei.success(response.data))
        yield put(setImeiValue(payload))
    }
    if (response.status === "error") {
        yield put(CheckImei.failure(response.errors))
    }
    yield put(CheckImei.fulfill())
}

function* getQuestionsWorker ({ payload } : PayloadAction<string>) {
    const state : RootState = yield select();
    const response: ResponseData<QuestionGroup[]> = yield call(phoneAPI.getQuestions, payload, state.user.user);
    if (response.status === "success") {
        yield put(GetQuestions.success(response.data))
    };
    if (response.status === "error") {
        yield put(GetQuestions.failure(response.errors))
    }
    yield put(GetQuestions.fulfill())
}

export default function* offerSagas () {
    yield takeLeading(CheckImei.REQUEST, checkImeiWorker);
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
}