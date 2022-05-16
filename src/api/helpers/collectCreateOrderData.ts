import { formatRequestAnswer } from './../../components/Offer/helpers/formatRequestAnswer';
import { toFormData } from './toFormData';
import { connectUserData } from './collectUserData';
import { RootState } from "../../store";

export const collectCreateOrderData = (state: RootState) => {
    const formData = toFormData({ answers: formatRequestAnswer(state) });
    connectUserData(state.user, formData)
    return formData
}