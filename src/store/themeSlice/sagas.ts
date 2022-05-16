import { call, takeLeading, put } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { getTheme, getThemes } from ".";
import { themeApi } from "../../api/";
import { ResponseData } from "../../api/types";
import { ThemesResponse } from "./types";

function* getThemesWork() {
    yield put(getThemes.trigger());
    const response: ResponseData<ThemesResponse> = yield call(themeApi.getThemes);
    if (response.status === "success") {
        yield put(getThemes.success(response.data));
    }
    else if (response.status === "error") {
        yield put(getThemes.failure(response.errors));
    } else {
        yield put(getThemes.fulfill(response));
    }
    }


function* getThemeWork({ payload }: PayloadAction<number>) {
    yield put(getTheme.trigger());
    const response: ResponseData<{ theme: DefaultTheme} > = yield call(
        themeApi.getTheme,
        payload
    );
    if (response.status === "success") {
        yield put(getTheme.success(response.data?.theme));
    }
    if (response.status === "error") {
        yield put(getTheme.failure(response.errors));
    }
    yield put(getTheme.fulfill());
}

export function* themeWatcher() {
    yield takeLeading(getThemes.REQUEST, getThemesWork);
    yield takeLeading(getTheme.REQUEST, getThemeWork);
}
