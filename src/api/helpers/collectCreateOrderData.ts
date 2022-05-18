import { formatCreateOrderRequest } from './../../components/Offer/helpers/formatCreateOrderRequest';
import { toFormData } from './toFormData';
import { connectUserData } from './collectUserData';
import { RootState } from "../../store";

export const collectCreateOrderData = (state: RootState) => {
    const formData = toFormData(formatCreateOrderRequest(state));
    connectUserData(state.user, formData)
    return formData
}