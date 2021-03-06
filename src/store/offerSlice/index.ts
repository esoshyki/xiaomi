import { RootState } from '..';
import { createAction, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AdditionActions, 
    DeviceInfo, 
    GivenAnswer, 
    ImageFile, 
    OfferState, 
    OfferSteps, 
    QuestionsResponse, 
    QuestionTree, 
    ServerError, 
    SetTreeDataProps, 
    MakeAdditionAction, 
    GivenAnswers,
    SendPhotoData
} from './types';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';
import { N } from '../types'

const initialState: OfferState = {
    step: "start",
    getQuestions: {
        result: null,
        errors: []
    },
    createOrder: {
        result: null,
        errors: [],
    },
    sendPhoto: {
        result: null,
        errors: []
    },
    pending: false,
    questionOrder: 0,
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
export const SendPhoto = createRoutine("offer/Send-Photo")

export const giveAnswerRequest = createAction<GivenAnswer>("offer/Get-Question-Request");

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
        setGivenAnswers(state: OfferState, { payload }: PayloadAction<GivenAnswers>) {
            state.givenAnswers = payload;
        },
        setTreeProps(state: OfferState, { payload }: PayloadAction<SetTreeDataProps>) {
            const { combinationId, offerId, additionalAction, combinationCode } = payload;
            if (combinationId) state.givenAnswers.combinationId = combinationId;
            if (combinationCode) state.givenAnswers.combinationCode = combinationCode;
            if (offerId) state.givenAnswers.offerId = offerId;
            if (additionalAction) state.givenAnswers.additionalAction = additionalAction;
        },
        setGetQuestionLoading(state: OfferState, { payload }: PayloadAction<boolean>) {
            state.pending = payload;
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
        },
        setCombinationsId(state: OfferState, { payload }: PayloadAction<string | undefined>) {
            state.givenAnswers.combinationId = payload;
        },
        setCombinationCode(state: OfferState, { payload }: PayloadAction<string | undefined>) {
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
        restoreOffer(state: OfferState) { state = Object.assign(state, initialState) },
        makeAdditionAction(state: OfferState, { payload }: PayloadAction<MakeAdditionAction>) {
            state.givenAnswers.additionalAction = undefined;
        },
        uploadImage(state: OfferState, { payload }: PayloadAction<ImageFile>) {
            state.images.push(payload)
        },
        addNewDevice(state: OfferState) {
            state.step = "start";
            state.givenAnswers = {
                answers: []
            };
            state.questionsData = null;
            state.questionsTree = null;
            state.deviceInfo = null;
        },
        setQuestionOrder(state: OfferState, { payload }: PayloadAction<number>) {
            state.questionOrder = payload
        }
    },
    extraReducers: {
        [GetQuestions.REQUEST](state) {
            state.getQuestions.result = null;
            state.pending = true
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
            state.pending = false
            if (state.step === "start") {
                state.step = "questions"
            }
        },
        [SendPhoto.REQUEST](state, { payload }: PayloadAction<SendPhotoData>) {
            state.pending = true
        },
        [SendPhoto.FAILURE](state, { payload }: PayloadAction<ServerError[]>) {
            state.sendPhoto.errors = payload;
            state.sendPhoto.result = "error"
        },
        [SendPhoto.SUCCESS](state) {
            state.sendPhoto.result = "success";
        },
        [SendPhoto.FULFILL](state) {
            state.pending = false
        },
    }
});

export const getQuestionsResult = createSelector(
    (state: RootState) => state.offer,
    offer => offer.getQuestions.result
)

export const getOfferData = createSelector(
    (state: RootState) => ({ offer: state.offer, view: state.view, order: state.order }),
    data => ({
        offer: data.offer,
        orderData: data.order.order.data,
        isLoading: data.offer.pending || data.order.order.loading,
        redirectTo: data.view.redirectTo
    })
)

export const getSendPhotoStatus = createSelector(
    (state: RootState) => state.offer,
    offer => offer.sendPhoto.result
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
    setCombinationCode,
    addNewDevice,
    setQuestionOrder
} = offerSlice.actions

export default offerSlice.reducer;