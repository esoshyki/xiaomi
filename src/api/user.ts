import { ResponseData } from './types';
import { LoginData } from "../store/userSlice/types";
import { api } from "./instance";
import { AxiosResponse } from 'axios';
import qs from 'qs'

export type LoginResponseData = {
    isAuthorised: boolean,
    id: number,
    sessName: string
    sessid: string
}

export type CheckAuthResponseData = {
    isAuthorised: boolean,
    id: number | null
}

const urls = {
    login: "/auth/login/",
    checkAuth: "/auth/checkauth/"
}

const login = async (data: FormData) : Promise<ResponseData<LoginResponseData>> => {
    try {
        const response:  AxiosResponse<ResponseData<LoginResponseData>> = await api.post(urls.login, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        return response.data
    } catch (error: any) {
        return ({
            data: null,
            status: "error",
            statusCode: 500,
            errors: [error.message]
        })
    }
};

const checkAuth = async (sessid: string, sessName: string) : Promise<ResponseData<CheckAuthResponseData>> => {
    try {
        const response:  AxiosResponse<ResponseData<CheckAuthResponseData>> = await api.post(urls.checkAuth, undefined, {
            headers: {
                "X-Bitrix-Csrf-Token" : sessid,
                "Content-Type": "application/x-www-form-urlencoded"
            },
        });

        return response.data
    } catch (error: any) {
        return ({
            data: null,
            status: "error",
            statusCode: 500,
            errors: [error.message]
        })
    }
};

export const userAPI = {
    login,
    checkAuth
}