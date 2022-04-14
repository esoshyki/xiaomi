import { call, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components";
import { getTheme } from ".";

function* setThemeWorker (action: PayloadAction<DefaultTheme>) {
    const { spaces } = action.payload;
    yield call(console.log, spaces)    
};

export function* themeWatcher() {
    yield takeEvery(getTheme.SUCCESS, setThemeWorker)
}