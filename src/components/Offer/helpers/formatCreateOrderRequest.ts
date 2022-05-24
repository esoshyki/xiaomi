import { RootState } from './../../../store/index';
import { CreateOrderRequest } from '../../../store/orderSlice/types';
import { collectAnswers } from './collectAnswers';

export const formatCreateOrderRequest = (state: RootState) : CreateOrderRequest => {
    const { givenAnswers, deviceInfo } = state.offer;
    const { combinationId, offerId } = givenAnswers;

    const obj: CreateOrderRequest = {
        questions: {}
    };

    if (combinationId) {
        obj.combinationId = combinationId;
    }

    if (offerId) {
        obj.productId = offerId
    }

    if (deviceInfo?.deviceID && !offerId) {
        obj.productId = deviceInfo.deviceID
    };

    obj.questions = collectAnswers(givenAnswers.answers.filter(ans => !ans.answerId))
    
    return obj
}