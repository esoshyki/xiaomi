import { RootState } from '..';
import { createAction, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AdditionActions, Order, CreateOrderResponse, DeviceInfo, GivenAnswer, OfferState, OfferSteps, QuestionsResponse, QuestionTree, ServerError, SetTreeDataProps, GetOrderRequest } from './types';
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
    photoFront: null,
    photoBack: null,
    givenAnswers: {
        answers: []
    },
    currentGivenAnswers: {
        answers: []
    },
    deviceInfo: null,
    order: {
        orderNumber: "",
        itemHash: "",
        data: null,
        loading: false,
        status: null,
        errors: []
    }
}

export const CreateOrder = createRoutine("offer/Create-Order");
export const GetQuestions = createRoutine("offer/Get-Questions");
export const GetOrder = createRoutine("offer/Get-Order");

const offerSlice = createSlice({
    name: "offer",
    initialState: { ...initialState },
    reducers: {
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
        setPhotoFront(state: OfferState, { payload }: PayloadAction<string | null>) {
            state.photoFront = payload;
            state.step = "photo-back"
        },
        setPhotoBack(state: OfferState, { payload }: PayloadAction<string | null>) {
            state.photoBack = payload;
            state.step = "pending"
        },
        makeAdditionAction(state: OfferState, { payload } : PayloadAction<AdditionActions>) {
            state.givenAnswers.additionalAction = undefined;
        },
        setOrderNumber(state: OfferState, { payload } : PayloadAction<string> ) {
            state.order.orderNumber = payload
        },
        setItemHash(state: OfferState, { payload } : PayloadAction<string>) {
            state.order.itemHash = payload
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
        [CreateOrder.REQUEST](state) {
            state.createOrder.result = null;
            state.createOrder.loading = true;
        },
        [CreateOrder.FAILURE](state, { payload }: PayloadAction<ServerError[]>) {
            state.createOrder.result = "error";
            state.createOrder.errors = payload;
        },
        [CreateOrder.SUCCESS](state, { payload }: PayloadAction<CreateOrderResponse>) {
            state.createOrderData = payload.data;
        },
        [CreateOrder.FULFILL](state) {
            state.createOrder.loading = false;
        },
        [GetOrder.REQUEST](state, { payload } : PayloadAction<GetOrderRequest | undefined>) {
            state.order.loading = true;
        },
        [GetOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [GetOrder.SUCCESS](state, { payload }: PayloadAction<Order>) {
            state.order.data = payload;
        },
        [GetOrder.FULFILL](state) {
            state.order.loading = false
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
    setQuestionsTree,
    setOfferId,
    giveAnswer,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    setDeviceInfo,
    setTreeProps,
    makeAdditionAction,
    resetAdditionActions,
    setOrderNumber,
    setItemHash
} = offerSlice.actions

export default offerSlice.reducer;