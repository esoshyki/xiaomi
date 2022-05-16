import { collectCreateOrderData } from './helpers/collectCreateOrderData';
import { CreateOrderResponse, OfferState } from './../store/offerSlice/types';
import { RequestAnswers } from '../store/offerSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { collectFormData, getErrorResponse } from './helpers/collectFormData';
import { User } from "../store/userSlice/types"
import { N } from '../store/types';
import { RootState } from '../store';

const createOrder = async (state: RootState): Promise<ResponseData<CreateOrderResponse>> => {

    try {
        const response: AxiosResponse<ResponseData<CreateOrderResponse>> = await api.post("/orderrequest/create/", collectCreateOrderData(state), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const orderApi = {
    createOrder
}