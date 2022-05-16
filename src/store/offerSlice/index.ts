import { RootState } from '..';
import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { CreateOrderResponse, DeviceInfo, GivenAnswer, OfferState, OfferSteps, QuestionsResponse, QuestionTree, ServerError, SetTreeDataProps } from './types';
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
        errors: []
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
    questionsReceived: 0
}

export const CreateOrder = createRoutine("offer/Create-Order");
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
            if (answerIndex >= 0) {
                state.currentGivenAnswers.answers[currentAnswerIndex] = payload
            } else {
                state.currentGivenAnswers.answers.push(payload)
            }
        },
        setTreeProps(state: OfferState, { payload } : PayloadAction<SetTreeDataProps>) {
            const { combinationId, offerId, additionalAction } = payload;
            if (combinationId) state.givenAnswers.combinationId = combinationId;
            if (offerId) state.givenAnswers.offerId = offerId;
            if (additionalAction) state.givenAnswers.additionAction = additionalAction;
        },
        setQuestionsTree(state: OfferState, { payload } : PayloadAction<N<QuestionTree>>) {
            state.questionsTree = payload
        },
        setCombinationsId(state: OfferState, { payload } : PayloadAction<string | undefined>) {
            state.givenAnswers.combinationId = payload;
            state.currentGivenAnswers.combinationId = payload;
        },
        setOfferId(state: OfferState, { payload } : PayloadAction<string | undefined>) {
            state.givenAnswers.offerId = payload;
            state.currentGivenAnswers.offerId = payload;
        },
        setStep(state: OfferState, { payload } : PayloadAction<OfferSteps>) {
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
            state.getQuestions.result = null;
            state.getQuestions.loading = true;
        },
        [GetQuestions.FAILURE](state, { payload } : PayloadAction<ServerError[]>) {
            state.getQuestions.result = "error";
            state.getQuestions.errors = payload
        },
        [GetQuestions.SUCCESS](state, { payload } : PayloadAction<QuestionsResponse>) {
            state.getQuestions.result = "success"
            state.getQuestions.errors = [];
            state.questionsData = payload.questionsData;
            state.questionsTree = payload.questionsTree;
            state.currentGivenAnswers = { answers: [] }
            state.questionsReceived += Object.keys(payload.questionsData || {}).length
        },
        [GetQuestions.FULFILL](state) {
            state.getQuestions.loading = false
            if (state.step === "start") {
                state.step = "questions"
            }
        },
        [CreateOrder.REQUEST](state) {
            state.createOrder.result = null;
            state.getQuestions.loading = true;
        },
        [CreateOrder.FAILURE](state, { payload } : PayloadAction<ServerError[]>) {
            state.createOrder.result = "error";
            state.createOrder.errors = payload;
        },
        [CreateOrder.SUCCESS](state, { payload } : PayloadAction<CreateOrderResponse>) {
            state.createOrderData = payload;
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
    setTreeProps
} = offerSlice.actions

export default offerSlice.reducer;