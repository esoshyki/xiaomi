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
        deviceInfo: null,
        changeQuestionsContent: false
    };

export const GetQuestions = createRoutine("offer/Get-Questions");

export const giveAnswerRequest = createAction<GivenAnswer>("offer/Get-Question-Request")

const offerSlice = createSlice({
    name: "offer",
    initialState: initialState,
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
            state.changeQuestionsContent = false
        },
        setGivenAnswers(state: OfferState, { payload } : PayloadAction<GivenAnswers>) {
            state.givenAnswers = payload;
        },
        setTreeProps(state: OfferState, { payload }: PayloadAction<SetTreeDataProps>) {
            const { combinationId, offerId, additionalAction, combinationCode } = payload;
            if (combinationId) state.givenAnswers.combinationId = combinationId;
            if (combinationCode) state.givenAnswers.combinationCode = combinationCode;
            if (offerId) state.givenAnswers.offerId = offerId;
            if (additionalAction) state.givenAnswers.additionalAction = additionalAction;
        },
        setGetQuestionLoading(state: OfferState, { payload } : PayloadAction<boolean>) {
            state.getQuestions.loading = payload;
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
        resetQuestions(state: OfferState) {
            state.questionsData = null;
            state.questionsTree = null;
            state.getQuestions.result = null;
        } ,
        setCombinationsId(state: OfferState, { payload }: PayloadAction<string | undefined>) {
            state.givenAnswers.combinationId = payload;
        },
        setCombinationCode(state: OfferState, { payload } : PayloadAction<string | undefined>) {
            state.givenAnswers.combinationCode = payload
        },
        setOfferId(state: OfferState, { payload }: PayloadAction<string | undefined>) {
            state.givenAnswers.offerId = payload;
        },
        setStep(state: OfferState, { payload }: PayloadAction<OfferSteps>) {
            state.step = payload;
        },
        setDeviceInfo(state: OfferState, { payload }: PayloadAction<DeviceInfo>) {
            state.deviceInfo = payload
        },
        restoreOffer(state: OfferState) {state = Object.assign(state, initialState)},
        makeAdditionAction(state: OfferState, { payload } : PayloadAction<MakeAdditionAction>) {
            state.givenAnswers.additionalAction = undefined;
        },
        uploadImage(state: OfferState, { payload } : PayloadAction<ImageFile>) {
            state.images.push(payload)
        }
    },
    extraReducers: {
        [GetQuestions.REQUEST](state) {
            state.getQuestions.result = null;
            state.getQuestions.loading = true
        },
        [GetQuestions.FAILURE](state, { payload }: PayloadAction<ServerError[]>) {
            state.getQuestions.result = "error";
            state.getQuestions.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload }: PayloadAction<QuestionsResponse>) {
            state.getQuestions.result = "success"
            state.getQuestions.errors = [];
            if (!payload.questionsData) {
                return;
            }
            if (!Object.keys(payload.questionsData).every(el => Object.keys(state.questionsData || {}).includes(el))) {
                state.questionsData = payload.questionsData;
            }
            state.questionsTree = payload.questionsTree;
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
    (state: RootState) => ({offer: state.offer, view: state.view, order: state.order}),
    data => ({
        offer: data.offer,
        orderData: data.order.order.data,
        redirectTo: data.view.redirectTo
    })
)

export const getChangeContent = createSelector(
    (state: RootState) => state.offer,
    offer => offer.changeQuestionsContent
)

export const getQuestionTree = createSelector(
    (state: RootState) => state.offer,
    offer => offer.questionsTree
)

export const getQuestionData = createSelector(
    (state: RootState) => state.offer,
    offer => offer.questionsData
)

export const getQuestionsPending = createSelector(
    (state: RootState) => state.offer,
    offer => offer.getQuestions.loading
)

export const getGivenAnswers = createSelector(
    (state: RootState) => state.offer,
    offer => offer.givenAnswers
)

export const getOfferStep = createSelector(
    (state: RootState) => state.offer,
    offer => offer.step
)

export const getAdditionAction = createSelector(
    (state: RootState) => state.offer,
    offer => offer.givenAnswers.additionalAction
)

export const getCombinationCode = createSelector(
    (state: RootState) => state.offer,
    offer => offer.givenAnswers.combinationCode
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
    setGivenAnswers,
    resetQuestions,
    setGetQuestionLoading,
    setCombinationCode
} = offerSlice.actions

export default offerSlice.reducer;