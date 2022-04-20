export type ResponseData<T> = {
    data: T | null
    errors: string[]
    status: "success" | "error",
    statusCode?: number
}

export type ThemesRepsonse = {
    id: number
    title: string
};
