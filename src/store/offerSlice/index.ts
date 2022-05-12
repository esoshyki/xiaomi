import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { GivenAnswer, OfferState, OfferSteps, QuestionsResponse } from './types';
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
    answersGiven: [],
    questionsGiven: [],
    givenAnswers: {
        answers: []
    }
}

export const CheckImei = createRoutine("offer/Check-Imei");
export const GetQuestions = createRoutine("offer/Get-Questions");

const offerSlice = createSlice({
    name: "offer",
    initialState: {...initialState},
    reducers: {
        giveAnswer(state, { payload } : PayloadAction<GivenAnswer>) {
            const answerIndex = state.givenAnswers.answers.findIndex(el => el.questionId === payload.questionId);
            if (answerIndex >= 0) {
                state.givenAnswers.answers[answerIndex] = payload
            } else {
                state.givenAnswers.answers.push(payload)
            }
        },
        setCombinationsId(state, { payload } : PayloadAction<string | undefined>) {
            state.givenAnswers.currentCombinationId = payload;
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
        [GetQuestions.REQUEST](state) {
            state.result = null;
            state.loading = true;
        },
        [GetQuestions.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.result = "error";
            state.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<QuestionsResponse>) {
            state.result = "success"
            state.errors = [];
            state.questionsData = payload.questionsData;
            state.questionsTree = payload.questionsTree;
            state.answersGiven = [];
            state.questionsGiven = [];
            state.answers = null;
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