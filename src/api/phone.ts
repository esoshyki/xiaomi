import { PhoneVariant, QuestionGroup } from './../store/offerSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { collectFormData, getErrorResponse } from './helpers';
import { PhoneInfo } from '../store/offerSlice/types';
import { User } from "../store/userSlice/types"
import { N } from '../store/types';


const getModelByImei = async (imei: string, user: N<User>): Promise<ResponseData<PhoneInfo>> => {
    if (!user) return getErrorResponse();
    try {
        const response: AxiosResponse<ResponseData<PhoneInfo>> = await api.post("/phonedata/getmodelbyimei/", collectFormData({ imei }, user))
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
};

const getQuestions = async (phoneId: string, user: N<User>): Promise<ResponseData<QuestionGroup[]>> => {
    if (!user) return getErrorResponse();
    try {
        const response: AxiosResponse<ResponseData<QuestionGroup[]>> = await api.post("/phonedata/getquestions/", collectFormData({ id: phoneId }, user))
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getPhoneVariants = async (phoneId: string, user: N<User>) : Promise<ResponseData<PhoneVariant[]>> => {
    if (!user) return getErrorResponse();
    try {
        const response: AxiosResponse<ResponseData<PhoneVariant[]>> = await api.post("/phonedata/getvariants/", collectFormData({ id: phoneId}, user));
        return response.data 
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const phoneAPI = {
    getModelByImei,
    getQuestions,
    getPhoneVariants
}
