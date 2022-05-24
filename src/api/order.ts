import { collectGetOrderData } from './helpers/collectGetOrderData';
import { collectCreateOrderData } from './helpers/collectCreateOrderData';
import { collectFormData } from './helpers/collectFormData';
import { GetOrderRequest, Order } from './../store/orderSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { Axios, AxiosResponse } from 'axios';
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

const getOrderData = async (orderNumber: string, deviceId: string, user: User): Promise<ResponseData<Order>> => {
    try {
        const response: AxiosResponse<ResponseData<Order>> = await api.post("/orderrequest/getorder/", collectGetOrderData(orderNumber, deviceId, user), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getItemStatus = async (orderNumber: string, itemNumber: string, user: User) : Promise<ResponseData<{status: string}>> => {
    try {
        const response: AxiosResponse<ResponseData<{status: string}>> = await api.post("/orderrequest/getitemstatus/", collectGetOrderData(orderNumber, itemNumber, user), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const sendPhoto = async (images: File[], orderNumber: string, itemNumber: string, user: User) : Promise<ResponseData<any>> => {
    try {
        const response: AxiosResponse<ResponseData<any>> = await api.post("/orderrequest/addfile/", collectFormData(
            { images, number: orderNumber, itemNumber } ,  user ));

        return response.data;
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const orderApi = {
    createOrder,
    getOrderData,
    sendPhoto,
    getItemStatus
}