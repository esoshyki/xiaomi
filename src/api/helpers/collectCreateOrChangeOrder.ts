import { formatCreateOrChangeOrderRequest } from '../../components/Offer/helpers/formatCreateOrderRequest';
import { toFormData } from './toFormData';
import { connectUserData } from './collectUserData';
import { RootState } from "../../store";

export const collectCreateOrChangeOrderData = (state: RootState, orderNumber?: string) => {
    const formData = toFormData({data: formatCreateOrChangeOrderRequest(state, orderNumber)});
    connectUserData(state.user, formData)
    return formData
}