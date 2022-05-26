import { RootState } from './../../../store/index';
import { CreateOrChangeOrderRequest } from '../../../store/orderSlice/types';
import { collectAnswers } from './collectAnswers';

export const formatCreateOrChangeOrderRequest = (state: RootState) : CreateOrChangeOrderRequest => {
    const { givenAnswers, deviceInfo } = state.offer;
    const { combinationId, offerId } = givenAnswers;
    const orderNumber = state.order.order.number;

    const obj: CreateOrChangeOrderRequest = {
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

    if (orderNumber) {
        obj.number = orderNumber
    }

    obj.questions = collectAnswers(givenAnswers.answers.filter(ans => !ans.answerId))
    
    return obj
}