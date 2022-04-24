import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { collectFormData } from './helpers';
import { PhoneInfo } from '../store/offerSlice/types';
import { User } from "../store/userSlice/types"
import { N } from '../store/types';

const getModelByImei = async (imei: string, user: N<User>): Promise<ResponseData<PhoneInfo>> => {
    if (!user) {
        return {
            data: null,
            errors: ["Please, log in"],
            status: "error",
            statusCode: 401
        }
    }
    try {
        const response: AxiosResponse<ResponseData<PhoneInfo>> = await api.post("/phonedata/getmodelbyimei/", collectFormData({ imei, ...user }))
        return response.data
    } catch (error: any) {
        return {
            data: null,
            errors: [error.message],
            status: "error",
            statusCode: 500
        }
    }
};

export const phoneAPI = {
    getModelByImei
}
