import { RootState } from '..';
import { createAction, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AdditionActions, DeviceInfo, GivenAnswer, ImageFile, OfferState, OfferSteps, QuestionsResponse, QuestionTree, ServerError, SetTreeDataProps, MakeAdditionAction, GivenAnswers } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';
import { N } from '../types'

const initialState: OfferState = {
    step: "start",
    getQuestions: {
        result: null,
        loading: false,
        errors: []
    },
    createOrder: {
        result: null,
        loading: false,
        errors: [],
    },
    questionsData: null,
    questionsTree: null,
    hint: "",
    images: [],
    givenAnswers: {
        answers: []
    },
    currentGivenAnswers: {
        answers: []
    },
    deviceInfo: null,
    changeQuestionsContent: false
}

export const GetQuestions = createRoutine("offer/Get-Questions");

export const giveAnswerRequest = createAction<GivenAnswer>("offer/Get-Question-Request")

const offerSlice = createSlice({
    name: "offer",
    initialState: { ...initialState },
    reducers: {
        hideQuestionContent(state: OfferState) {
            state.changeQuestionsContent = true;
        },
        showQuestionContent(state: OfferState) {
            state.changeQuestionsContent = false;
        },
        giveAnswer(state: OfferState, { payload }: PayloadAction<GivenAnswer>) {
            const answerIndex = state.givenAnswers.answers.findIndex(el => el.questionId === payload.questionId);
            if (answerIndex >= 0) {
                state.givenAnswers.answers[answerIndex] = payload
            } else {
                state.givenAnswers.answers.push(payload)
            }
            const currentAnswerIndex = state.currentGivenAnswers.answers.findIndex(el => el.questionId === payload.questionId);
            if (answerIndex >= 0) {
                state.currentGivenAnswers.answers[currentAnswerIndex] = payload
            } else {
                state.currentGivenAnswers.answers.push(payload)
            }
            state.changeQuestionsContent = false
        },
        setGivenAnswers(state: OfferState, { payload } : PayloadAction<GivenAnswers>) {
            state.givenAnswers = payload;
        },
        setTreeProps(state: OfferState, { payload }: PayloadAction<SetTreeDataProps>) {
            const { combinationId, offerId, additionalAction } = payload;
            if (combinationId) state.givenAnswers.combinationId = combinationId;
            if (offerId) state.givenAnswers.offerId = offerId;
            if (additionalAction) state.givenAnswers.additionalAction = additionalAction;
        },
        resetAdditionActions(state: OfferState) {
            state.givenAnswers.additionalAction = undefined
        },
        setAdditionalAction(state: OfferState, { payload }: PayloadAction<AdditionActions | undefined>) {
            state.givenAnswers.additionalAction = payload;
        },
        setQuestionsTree(state: OfferState, { payload }: PayloadAction<N<QuestionTree>>) {
            state.questionsTree = payload
        },
        setCombinationsId(state: OfferState, { payload }: PayloadAction<string | undefined>) {
            state.givenAnswers.combinationId = payload;
            state.currentGivenAnswers.combinationId = payload;
        },
        setOfferId(state: OfferState, { payload }: PayloadAction<string | undefined>) {
            state.givenAnswers.offerId = payload;
            state.currentGivenAnswers.offerId = payload;
        },
        setStep(state: OfferState, { payload }: PayloadAction<OfferSteps>) {
            state.step = payload;
        },
        setDeviceInfo(state: OfferState, { payload }: PayloadAction<DeviceInfo>) {
            state.deviceInfo = payload
        },
        restoreOffer: () => ({ ...initialState }),
        makeAdditionAction(state: OfferState, { payload } : PayloadAction<MakeAdditionAction>) {
            state.givenAnswers.additionalAction = undefined;
        },
        uploadImage(state: OfferState, { payload } : PayloadAction<ImageFile>) {
            state.images.push(payload)
        }
    },
    extraReducers: {
        [GetQuestions.REQUEST](state) {
            state.getQuestions.loading = true;
        },
        [GetQuestions.FAILURE](state, { payload }: PayloadAction<ServerError[]>) {
            state.getQuestions.result = "error";
            state.getQuestions.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload }: PayloadAction<QuestionsResponse>) {
            state.getQuestions.result = "success"
            state.getQuestions.errors = [];
            if (!Object.keys(payload.questionsData).every(el => Object.keys(state.questionsData || {}).includes(el))) {
                state.questionsData = payload.questionsData;
            }
            state.questionsTree = payload.questionsTree;
            state.currentGivenAnswers = { answers: [] }
        },
        [GetQuestions.FULFILL](state) {
            state.getQuestions.loading = false
            if (state.step === "start") {
                state.step = "questions"
            }
        },
    }
});

export const getQuestionsResult = createSelector(
    (state: RootState) => state.offer,
    offer => offer.getQuestions.result
)

export const getOfferData = createSelector(
    (state: RootState) => state.offer,
    offer => offer
)

export const getChangeContent = createSelector(
    (state: RootState) => state.offer,
    offer => offer.changeQuestionsContent
)

export const {
    setStep,
    setCombinationsId,
    setQuestionsTree,
    setOfferId,
    giveAnswer,
    restoreOffer,
    setDeviceInfo,
    setTreeProps,
    makeAdditionAction,
    resetAdditionActions,
    uploadImage,
    hideQuestionContent,
    showQuestionContent,
    setAdditionalAction,
    setGivenAnswers
} = offerSlice.actions

export default offerSlice.reducer;