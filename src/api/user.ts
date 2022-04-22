import { ResponseData } from './types';
import { api } from "./instance";
import { AxiosResponse } from 'axios';
import { User } from '../store/userSlice/types';

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

export type LogoutResponseData = {
    isAuthorised: boolean,
    id: number | null
}

const urls = {
    login: "/auth/login/",
    checkAuth: "/auth/checkauth/",
    logout: "/auth/logout/"
}

const login = async (data: FormData): Promise<ResponseData<LoginResponseData>> => {

    try {
        const response: AxiosResponse<ResponseData<LoginResponseData>> = await api.post(urls.login, data, {
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

const logout = async (user: User): Promise<ResponseData<LogoutResponseData>> => {

    const { auth_param_name, auth_param_value } = user;

    const formData = new FormData();
    formData.set(auth_param_name, auth_param_value);

    try {
        const response: AxiosResponse<ResponseData<LogoutResponseData>> = await api.post(urls.logout, formData);

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

const checkAuth = async (user: User): Promise<ResponseData<CheckAuthResponseData>> => {

    const { auth_param_name, auth_param_value } = user;

    const formData = new FormData();
    formData.set(auth_param_name, auth_param_value);

    try {
        const response: AxiosResponse<ResponseData<CheckAuthResponseData>> = await api.post(urls.checkAuth, formData);

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
    logout,
    checkAuth
}