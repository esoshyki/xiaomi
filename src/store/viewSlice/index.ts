import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ViewState } from './types';
const initialState: ViewState = {
    showMenu: false
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
        }
    }
});

export const getViewData = createSelector(
    (state: RootState) => state.view,
    view => view
);

export const { 
    showMenu,
    hideMenu
} = viewSlice.actions;

export default viewSlice.reducer;