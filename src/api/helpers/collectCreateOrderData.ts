import { connectUserData } from './collectUserData';
import { RootState } from "../../store";

export const collectCreateOrderData = (state: RootState) => {
    const { givenAnswers } = state.offer;
    const { offerId, combinationId } = givenAnswers;
    const formData = new FormData();
    if (offerId) formData.set("offerId", offerId);
    if (combinationId) formData.set("combinationId", combinationId);
    connectUserData(state.user, formData)

    return formData
}