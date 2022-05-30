import { collectGetOrderData } from './helpers/collectGetOrderData';
import { collectCreateOrChangeOrderData } from './helpers/collectCreateOrChangeOrder';
import { collectFormData } from './helpers/collectFormData';
import { DeleteItemResponse, GetOrderRequest, Order } from './../store/orderSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { Axios, AxiosResponse } from 'axios';
import { getErrorResponse } from './helpers/collectFormData';
import { RootState } from '../store';
import { User } from '../store/userSlice/types';
import { ImageFile } from '../store/offerSlice/types';

const createOrder = async (state: RootState): Promise<ResponseData<GetOrderRequest>> => {

    try {
        const response: AxiosResponse<ResponseData<GetOrderRequest>> = await api.post("/orderrequest/create/", collectCreateOrChangeOrderData(state), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const addItemToOrder = async (state: RootState, orderNumber?: string): Promise<ResponseData<GetOrderRequest>> => {

    try {
        const response: AxiosResponse<ResponseData<GetOrderRequest>> = await api.post("/orderrequest/additem/", collectCreateOrChangeOrderData(state, orderNumber), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getOrderData = async (orderNumber: string, user: User, itemNumber?: string): Promise<ResponseData<Order>> => {
    try {
        const response: AxiosResponse<ResponseData<Order>> = await api.post("/orderrequest/getorder/", collectGetOrderData(orderNumber, user, itemNumber), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getItemStatus = async (orderNumber: string, user: User, itemNumber: string) : Promise<ResponseData<{status: string}>> => {
    try {
        const response: AxiosResponse<ResponseData<{status: string}>> = await api.post("/orderrequest/getitemstatus/", collectGetOrderData(orderNumber, user, itemNumber), {});
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const sendPhoto = async (images: File[], orderNumber: string, itemNumber: string, user: User ) : Promise<ResponseData<any>> => {
    try {
        const response: AxiosResponse<ResponseData<any>> = await api.post("/orderrequest/addfile/", collectFormData(
            { images, number: orderNumber, itemNumber } ,  user ));

        return response.data;
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const deleteItem = async (orderNumber: string, itemNumber: string, user: User) : Promise<DeleteItemResponse> => {
    try {
        const response: AxiosResponse<DeleteItemResponse> = await api.post("/orderrequest/deleteitem/", collectFormData({
            number: orderNumber,
            itemNumber
        }, user));

        return response.data

    } catch (error: any) {
        return ({
            data: null,
            errors: [error.message],
            status: "error"
        })
    }
}

export const orderApi = {
    createOrder,
    getOrderData,
    sendPhoto,
    getItemStatus,
    addItemToOrder,
    deleteItem
}