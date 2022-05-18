import { collectGetOrderData } from './helpers/collectGetOrderData';
import { collectCreateOrderData } from './helpers/collectCreateOrderData';
import { GetOrderRequest, Order } from './../store/offerSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { getErrorResponse } from './helpers/collectFormData';
import { RootState } from '../store';
import { User } from '../store/userSlice/types';

const createOrder = async (state: RootState): Promise<ResponseData<GetOrderRequest>> => {

    try {
        const response: AxiosResponse<ResponseData<GetOrderRequest>> = await api.post("/orderrequest/create/", collectCreateOrderData(state), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getOrderData = async (orderNumber: string, itemHash: string, user: User): Promise<ResponseData<Order>> => {
    try {
        const response: AxiosResponse<ResponseData<Order>> = await api.post("/orderrequest/getorder", collectGetOrderData(orderNumber, itemHash, user), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const orderApi = {
    createOrder,
    getOrderData
}