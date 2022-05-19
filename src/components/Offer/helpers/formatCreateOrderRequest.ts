import { RootState } from './../../../store/index';
import { CreateOrderRequest } from '../../../store/offerSlice/types';
import { off } from 'process';
import { collectAnswers } from './collectAnswers';

export const formatCreateOrderRequest = (state: RootState) : CreateOrderRequest => {
    const { givenAnswers, deviceInfo } = state.offer;
    const { combinationId, offerId } = givenAnswers;

    const obj: CreateOrderRequest = {
        questions: {}
    };

    if (combinationId) {
        obj.combinationId = combinationId;
        // obj.combination = combinationId;
    }

    if (offerId) {
        obj.offerId = offerId
        // obj.productId = offerId
    }

    if (deviceInfo?.deviceID) {
        obj.deviceId = deviceInfo.deviceID
    };

    obj.questions = collectAnswers(givenAnswers.answers.filter(ans => !ans.answerId))
    
    return obj
}