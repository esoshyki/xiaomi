import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { RootState } from "..";
import { defaultTheme } from "../../theme/defaultTheme";
import { createRoutine } from 'redux-saga-routines'
import { ThemesResponse } from "./types";

interface ThemeState {
    theme: DefaultTheme;
    themes: ThemesResponse
    errors: string[]
    loading: boolean
}

const initialState: ThemeState = {
    theme: defaultTheme,
    themes: [],
    errors: [],
    loading: false
};

export const getThemes = createRoutine('themes/GET')
export const getTheme = createRoutine("theme/GET")

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getThemes.SUCCESS]: (state, { payload } : PayloadAction<ThemesResponse>) => ({
            ...state,
            themes: payload
        }),
        [getThemes.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.errors = payload
        },
        [getThemes.TRIGGER](state) {
            state.loading = true
        },
        [getThemes.FULFILL](state) {
            state.loading = false
        },
        [getTheme.SUCCESS](state, { payload } : PayloadAction<DefaultTheme>) {
            state.theme = payload
        },
        [getTheme.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.errors = payload
        },
        [getTheme.TRIGGER](state) {
            state.loading = true
        },
        [getTheme.FULFILL](state) {
            state.loading = false
        },
    },
});

export const getThemeData = createSelector(
    (state: RootState) => state.theme,
    theme => theme
)

export default themeSlice.reducer