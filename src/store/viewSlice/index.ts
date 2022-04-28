import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ViewState } from './types';
const initialState: ViewState = {
    showMenu: false,
    animationOpen: false,
    animationClose: false
}

const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        showMenu(state) {
            state.showMenu = true
        },
        hideMenu(state) {
            state.showMenu = false
        },
        animationOpen(state) {
            state.animationOpen = true;
        },
        animationClose(state) {
            state.animationClose = true;
        },
        animationClear(state) {
            state.animationClose = false;
            state.animationOpen = false;
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
    animationClear
} = viewSlice.actions;

export default viewSlice.reducer;