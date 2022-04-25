import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { OfferState, OfferSteps, PhoneInfo } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

const initialState: OfferState = {
    step: OfferSteps.imei,
    IMEI: "",
    result: null,
    loading: false,
    errors: [],
    phone: null
}

export const CheckImei = createRoutine("offer/Check-Imei");
export const GetQuestions = createRoutine("offer/Get-Questions");

const offerSlice = createSlice({
    name: "offer",
    initialState,
    reducers: {
        setImeiValue(state, { payload } : PayloadAction<string>) {
            state.IMEI = payload
        },
        setStep(state, { payload } : PayloadAction<OfferSteps>) {
            state.result = null;
            state.errors = [];
            state.loading = false;
            state.step = payload;
            switch (payload) {
                case OfferSteps.imei:
                    state.IMEI = ""
            }
        }
    }, 
    extraReducers: {
        [CheckImei.REQUEST](state) {
            state.result = null;
            state.loading = true;
        },
        [CheckImei.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.result = "error";
            state.errors = payload
        },
        [CheckImei.SUCCESS](state, { payload } : PayloadAction<PhoneInfo[]>) {
            state.result = "success"
            state.errors = []
            state.phone = payload
            state.step = OfferSteps.isYourPhone
        },
        [CheckImei.FULFILL](state) {
            state.loading = false
        },
        [GetQuestions.REQUEST](state) {
            state.result = null;
            state.loading = true;
        },
        [GetQuestions.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.result = "error";
            state.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<any>) {
            state.result = "success"
            state.errors = [];
        },
        [GetQuestions.FULFILL](state) {
            state.loading = false
        }
    }
});

export const getOfferData = createSelector(
    (state: RootState) => state.offer,
    offer => offer
)

export const { 
    setImeiValue,
    setStep
} = offerSlice.actions

export default offerSlice.reducer;