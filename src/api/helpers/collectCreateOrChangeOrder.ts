import { formatCreateOrChangeOrderRequest } from '../../components/Offer/helpers/formatCreateOrderRequest';
import { toFormData } from './toFormData';
import { connectUserData } from './collectUserData';
import { RootState } from "../../store";

export const collectCreateOrChangeOrderData = (state: RootState) => {
    const formData = toFormData({data: formatCreateOrChangeOrderRequest(state)});
    connectUserData(state.user, formData)
    return formData
}