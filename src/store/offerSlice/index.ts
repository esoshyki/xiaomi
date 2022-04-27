import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { OfferState, OfferSteps, PhoneInfo, QuestionGroup, GivenAnswer } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

const initialState: OfferState = {
    step: OfferSteps.imei,
    IMEI: "",
    result: null,
    loading: false,
    errors: [],
    phone: null,
    questions: null,
    variants: null,
    variant: null,
    hint: "",
    currentQuestion: null,
    currentQuestionGroup: null,
    givenAnswers: {}
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
        },
        setCurrentQuestionGroup(state, { payload } : PayloadAction<number>) {
            state.currentQuestionGroup = payload;
            state.currentQuestion = 0;
        },
        setCurrentQuestion(state, { payload } : PayloadAction<number>) {
            state.currentQuestion = payload
        },
        giveAnswer(state, { payload } : PayloadAction<{groupId: number, answer: GivenAnswer}>) {
            const { groupId, answer } = payload;
            if (state.givenAnswers[groupId]) {
                state.givenAnswers[groupId].push(answer)
            } else {
                state.givenAnswers[groupId] = [answer]
            }
        },
        changeAnswer(state, { payload } : PayloadAction<{groupId: number, answer: GivenAnswer}>) {
            const { groupId, answer } = payload;
            if (state.givenAnswers[groupId]) {
                const givenAnswerIdx = state.givenAnswers[groupId].findIndex(el => el.questionId === answer.questionId);
                if (givenAnswerIdx >= 0) {
                    state.givenAnswers[groupId][givenAnswerIdx] = answer
                } else {
                    state.givenAnswers[groupId].push(answer);
                }
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
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<QuestionGroup[]>) {
            state.result = "success"
            state.errors = [];
            state.questions = payload;
            state.step = OfferSteps.questions;
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
    setImeiValue,
    setStep,
    setCurrentQuestionGroup,
    setCurrentQuestion,
    giveAnswer,
    changeAnswer
} = offerSlice.actions

export default offerSlice.reducer;