import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ViewState } from './types';

const initialState: ViewState = {
    showMenu: false,
    animationOpen: false,
    animationClose: false,
    currentSlide: 0
}

const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        showMenu(state: ViewState) {
            state.showMenu = true
        },
        hideMenu(state: ViewState) {
            state.showMenu = false
        },
        animationOpen(state: ViewState) {
            state.animationOpen = true;
        },
        animationClose(state: ViewState) {
            state.animationClose = true;
        },
        animationClear(state: ViewState) {
            state.animationClose = false;
            state.animationOpen = false;
        },
        setSlide(state: ViewState, { payload } : PayloadAction<number>) {
            state.currentSlide = payload
        }
    }
});

export const getViewData = createSelector(
    (state: RootState) => state.view,
    view => view
);

export const { 
    showMenu,
    hideMenu,
    animationOpen,
    animationClose,
    animationClear,
    setSlide
} = viewSlice.actions;

export default viewSlice.reducer;