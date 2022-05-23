import { QuestionsResponse, RequestAnswers } from '../store/offerSlice/types';
import { ResponseData } from './types'
import { api } from './instance';
import { AxiosResponse } from 'axios';
import { collectFormData, getErrorResponse } from './helpers/collectFormData';
import { User } from "../store/userSlice/types"
import { N } from '../store/types';

const getQuestions = async (user: N<User>, answers: RequestAnswers): Promise<ResponseData<QuestionsResponse>> => {
    if (!user) return getErrorResponse("Чтобы продолжить, войдите или зарегестрируйтесь");

    const _answers = Object.keys(answers).length !== 0 ? answers : "[]"

    try {
        const response: AxiosResponse<ResponseData<QuestionsResponse>> = await api.post("/devicedata/getquestions/", collectFormData({ answers: _answers }, user), {
        })
        return response.data
    } catch (error: any) {
        return getErrorResponse(error.message)
    }
}

export const deviceApi = {
    getQuestions,
}
