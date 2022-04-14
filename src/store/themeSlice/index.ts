import { createSelector, createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { defaultTheme } from "../../theme/defaultTheme";

interface ThemeState {
    theme: DefaultTheme;
}

const initialState: ThemeState = {
    theme: defaultTheme
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state, { payload }: PayloadAction<DefaultTheme>) {
            state.theme = payload;
        },
    },
});

export const getThemeData = createSelector(
    (state: RootState) => state.theme,
    theme => theme
)

export const {
    setTheme
} = themeSlice.actions

export default themeSlice.reducer