export type ResponseData<T> = {
    data: T | null
    errors: string[]
    status: "success" | "error"
}

export type ThemesRepsonse = {
    id: number
    title: string
};
