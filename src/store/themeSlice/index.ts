import { createSelector, createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { defaultTheme } from "../../theme/defaultTheme";
import { createRoutine } from 'redux-saga-routines'

interface ThemeState {
    theme: DefaultTheme;
}

const initialState: ThemeState = {
    theme: defaultTheme
};

export const getTheme = createRoutine('theme/GET')

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        [getTheme.SUCCESS]: (state, { payload }: PayloadAction<DefaultTheme>) => {
            state.theme = payload
        }
    },
});

export const getThemeData = createSelector(
    (state: RootState) => state.theme,
    theme => theme
)

export default themeSlice.reducer