import { ServerError } from "../store/offerSlice/types";

export type ResponseData<T> = {
    data: T | null
    errors: ServerError[]
    status: "success" | "error",
    statusCode?: number
}

export type ThemesRepsonse = {
    id: number
    title: string
};
