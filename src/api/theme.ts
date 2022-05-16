import axios, { AxiosResponse } from 'axios'
import { DefaultTheme } from 'styled-components';
import { ResponseData } from './types';
import { ThemesResponse } from '../store/themeSlice/types';

const baseURL = "https://test-server-tau.vercel.app";
// const baseURL = "https://rostok-partners.dev-bitrix.by/api/"

const api = axios.create({
    baseURL
})

const getThemes = async () : Promise<ResponseData<ThemesResponse>> => {
    try {
        const response : AxiosResponse<ResponseData<ThemesResponse>> = await api.get("/theme");
        const data = response.data;
        return {
            data: data.data,
            errors: data.errors,
            status: data.status,
        }

    } catch (error: any) {
        return {
            data: null,
            errors: [error.message],
            status: "error"
        }
    }
};

const getTheme = async (id: number) : Promise<ResponseData<{ theme: DefaultTheme }>> => {
    try {
        const response : AxiosResponse<ResponseData<{ theme: DefaultTheme }>> = await api.get("/theme?id=" + id);

        const data: ResponseData<{ theme: DefaultTheme }> = response.data;

        return {
            data: data.data,
            errors: data.errors,
            status: data.status
        }

    } catch (error: any) {
        return {
            data: null,
            errors: [error.message],
            status: "error"
        }
    }
};

export const themeApi = {
    getThemes,
    getTheme
}