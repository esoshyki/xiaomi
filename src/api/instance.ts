import axios from "axios"
import qs from 'qs'

axios.defaults.paramsSerializer = params => qs.stringify(params)

const baseURL = "http://rostok-partners.dev-bitrix.by/api/"

export const api = axios.create({
    baseURL,
})

