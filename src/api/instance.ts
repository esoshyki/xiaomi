import axios from "axios"
import qs from 'qs'

axios.defaults.paramsSerializer = params => qs.stringify(params)

const baseURL = "https://t3.rostok-partners.dev-bitrix.by/api/"

export const api = axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    },
})

