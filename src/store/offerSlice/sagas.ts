import { takeLeading, call, put, select, takeEvery } from "redux-saga/effects";
import { GetQuestions, setCombinationsId, setDeviceInfo, setStep } from ".";
import { phoneAPI } from "../../api/phone";
import { OfferSteps, QuestionsResponse, RequestAnswers } from "./types";
import { ResponseData } from "../../api/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { formatRequestAnswer } from "../../components/Offer/helpers/formatRequestAnswer";

function* getQuestionsWorker ({ payload } : PayloadAction<string>) {
    const state : RootState = yield select();
    const answers : RequestAnswers = yield call(formatRequestAnswer, state);
    const response: ResponseData<QuestionsResponse> = yield call(phoneAPI.getQuestions, state.user.user, answers);
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

function* setStepWorker ({ payload } : PayloadAction<OfferSteps>) {

};


export default function* offerSagas () {
    yield takeLeading(GetQuestions.REQUEST, getQuestionsWorker);
    yield takeEvery(setStep, setStepWorker)
}