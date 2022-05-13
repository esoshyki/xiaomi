import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { DeviceInfo, GivenAnswer, OfferState, OfferSteps, QuestionsResponse, ServerError } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

const initialState: OfferState = {
    step: "start",
    result: null,
    loading: false,
    errors: [],
    questionsData: null,
    questionsTree: null,
    hint: "",
    photoFront: null,
    photoBack: null,
    givenAnswers: {
        answers: []
    },
    currentGivenAnswers: {
        answers: []
    },
    deviceInfo: null
}

export const CheckImei = createRoutine("offer/Check-Imei");
export const GetQuestions = createRoutine("offer/Get-Questions");

const offerSlice = createSlice({
    name: "offer",
    initialState: {...initialState},
    reducers: {
        giveAnswer(state: OfferState, { payload } : PayloadAction<GivenAnswer>) {
            const answerIndex = state.givenAnswers.answers.findIndex(el => el.questionId === payload.questionId);
            if (answerIndex >= 0) {
                state.givenAnswers.answers[answerIndex] = payload
            } else {
                state.givenAnswers.answers.push(payload)
            }
            const currentAnswerIndex = state.currentGivenAnswers.answers.findIndex(el => el.questionId === payload.questionId);
            if (currentAnswerIndex >= 0) {
                state.currentGivenAnswers.answers[currentAnswerIndex] = payload
            } else {
                state.currentGivenAnswers.answers.push(payload)
            }
        },
        setCombinationsId(state: OfferState, { payload } : PayloadAction<string | undefined>) {
            state.givenAnswers.combinationId = payload;
            state.currentGivenAnswers.combinationId = payload;
        },
        setStep(state: OfferState, { payload } : PayloadAction<OfferSteps>) {
            state.result = null;
            state.errors = [];
            state.loading = false;
            state.step = payload;
        },
        setDeviceInfo(state: OfferState, { payload } : PayloadAction<DeviceInfo>) {
            state.deviceInfo = payload
        },
        restoreOffer: () => ({...initialState}),
        setPhotoFront(state: OfferState, { payload } : PayloadAction<string | null>) {
            state.photoFront = payload;
            state.step = "photo-back"
        },
        setPhotoBack(state: OfferState, { payload } : PayloadAction<string | null>) {
            state.photoBack = payload;
            state.step = "pending"
        }
    }, 
    extraReducers: {
        [GetQuestions.REQUEST](state) {
            state.result = null;
            state.loading = true;
        },
        [GetQuestions.FAILURE](state, { payload } : PayloadAction<ServerError[]>) {
            state.result = "error";
            state.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<QuestionsResponse>) {
            state.result = "success"
            state.errors = [];
            state.questionsData = payload.questionsData;
            state.questionsTree = payload.questionsTree;
            state.currentGivenAnswers = {
                answers: []
            };
        },
        [GetQuestions.FULFILL](state) {
            state.loading = false
            if (state.step === "start") {
                state.step = "questions"
            }
        }
    }
});

export const getOfferData = createSelector(
    (state: RootState) => state.offer,
    offer => offer
)

export const { 
    setStep,
    setCombinationsId,
    giveAnswer,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    setDeviceInfo
} = offerSlice.actions

export default offerSlice.reducer;