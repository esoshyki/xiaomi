import { collectGetOrderData } from './helpers/collectGetOrderData';
import { collectCreateOrderData } from './helpers/collectCreateOrderData';
import { collectFormData } from './helpers/collectFormData';
import { GetOrderRequest, Order } from './../store/orderSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { getErrorResponse } from './helpers/collectFormData';
import { RootState } from '../store';
import { User } from '../store/userSlice/types';
import { ImageFile } from '../store/offerSlice/types';

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
        const response: AxiosResponse<ResponseData<Order>> = await api.post("/orderrequest/getorder/", collectGetOrderData(orderNumber, itemHash, user), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const sendPhoto = async (photos: File[], orderNumber: string, itemHash: string, user: User) : Promise<ResponseData<any>> => {
    try {
        const response: AxiosResponse<ResponseData<any>> = await api.post("/orderrequest/addfile/", collectFormData(
            { photos, orderNumber, itemHash} ,  user ));

        return response.data;
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const orderApi = {
    createOrder,
    getOrderData,
    sendPhoto
}