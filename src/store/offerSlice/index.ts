import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { OfferState, OfferSteps, QuestionsResponse } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

const initialState: OfferState = {
    step: "questions",
    result: null,
    loading: false,
    errors: [],
    questionsData: null,
    questionsTree: null,
    answers: null,
    hint: "",
    currentQuestion: null,
    currentQuestionGroup: null,
    photoFront: null,
    photoBack: null,
}

export const CheckImei = createRoutine("offer/Check-Imei");
export const GetQuestions = createRoutine("offer/Get-Questions");

const offerSlice = createSlice({
    name: "offer",
    initialState: {...initialState},
    reducers: {
        giveAnswer(state, { payload } : PayloadAction<{questionId: number, answer: number | string}>) {
            if (state.answers) {
                state.answers[payload.questionId] = payload.answer
            } else {
                state.answers = {
                    [payload.questionId] : payload.answer
                }
            }
            state.lastGivenQuestion = payload.questionId;
        },
        setCombinationsId(state, { payload } : PayloadAction<number>) {
            if (state.answers) {
                state.answers.combinationId = payload
            } else {
                state.answers = {
                    combinationId: payload
                }
            }
        },
        setStep(state, { payload } : PayloadAction<OfferSteps>) {
            state.result = null;
            state.errors = [];
            state.loading = false;
            state.step = payload;
        },
        setCurrentQuestionGroup(state, { payload } : PayloadAction<number>) {
            state.currentQuestionGroup = payload;
            state.currentQuestion = 0;
        },
        setCurrentQuestion(state, { payload } : PayloadAction<number>) {
            state.currentQuestion = payload
        },
        restoreOffer: () => ({...initialState}),
        setPhotoFront(state, { payload } : PayloadAction<string | null>) {
            state.photoFront = payload;
            state.step = "photo-back"
        },
        setPhotoBack(state, { payload } : PayloadAction<string | null>) {
            state.photoBack = payload;
            state.step = "pending"
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
        [CheckImei.SUCCESS](state, { payload } : PayloadAction<{}>) {
            state.result = "success"
            state.errors = []
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
            console.log(payload);
            state.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<QuestionsResponse>) {
            state.result = "success"
            state.errors = [];
            state.questionsData = payload.questionsData;
            state.questionsTree = payload.questionsTree;
            state.currentQuestion = 0;
            state.currentQuestionGroup = 0;
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
    setStep,
    setCombinationsId,
    setCurrentQuestionGroup,
    setCurrentQuestion,
    giveAnswer,
    restoreOffer,
    setPhotoFront,
    setPhotoBack
} = offerSlice.actions

export default offerSlice.reducer;