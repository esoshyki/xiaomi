import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';
import { OfferState, OfferSteps } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OfferState = {
    step: OfferSteps.imei,
    IMEI: null
}

const offerSlice = createSlice({
    name: "offer",
    initialState,
    reducers: {

    }, 
    extraReducers: {

    }
});

export const getOfferData = createSelector(
    (state: RootState) => state.offer,
    offer => offer
)

export default offerSlice.reducer;