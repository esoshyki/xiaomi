import { takeLeading, call, put, select, takeEvery } from "redux-saga/effects";
import { GetQuestions, setStep } from ".";
import { phoneAPI } from "../../api/phone";
import { OfferSteps, QuestionsResponse } from "./types";
import { ResponseData } from "../../api/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

function* getQuestionsWorker ({ payload } : PayloadAction<string>) {
    const state : RootState = yield select();
    const answers = state.offer.answers;
    const response: ResponseData<QuestionsResponse> = yield call(phoneAPI.getQuestions, state.user.user, answers);
    if (response.status === "success") {
        yield put(GetQuestions.success(response.data))
    };
    if (response.status === "error") {
        yield put(GetQuestions.failure(response.errors))
    }
    yield put(GetQuestions.fulfill())
}

function* setStepWorker ({ payload } : PayloadAction<OfferSteps>) {

};


export default function* offerSagas () {
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeEvery(setStep, setStepWorker)
}