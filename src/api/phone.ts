import { QuestionsResponse, RequestAnswers } from './../store/offerSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { collectFormData, getErrorResponse } from './helpers';
import { User } from "../store/userSlice/types"
import { N } from '../store/types';

const getModelByImei = async (imei: string, user: N<User>): Promise<ResponseData<any>> => {
    if (!user) return getErrorResponse();
    try {
        const response: AxiosResponse<ResponseData<any>> = await api.post("/phonedata/getmodelbyimei/", collectFormData({ imei }, user))
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
};

const getQuestions = async (user: N<User>, answers: RequestAnswers): Promise<ResponseData<QuestionsResponse>> => {
    if (!user) return getErrorResponse();

    const _answers = Object.keys(answers).length !== 0 ? answers : "[]"

    try {
        const response: AxiosResponse<ResponseData<QuestionsResponse>> = await api.post("/devicedata/getquestions/", collectFormData({ answers: _answers }, user), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

const getPhoneVariants = async (phoneId: string, user: N<User>): Promise<ResponseData<any>> => {
    if (!user) return getErrorResponse();
    try {
        const response: AxiosResponse<ResponseData<any>> = await api.post("/phonedata/getvariants/", collectFormData({ id: phoneId }, user));
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
