export type User = {
    user_id: string
    userName: string
    session_id: string
    sessName: string
    isAuthorised: boolean
    bitrix_sessid: number
    token: string
}

export type ErrorFieldKey<T> = keyof (T & { catched: string })

export type ErrorType<T> = {
    [key in ErrorFieldKey<T>]?: string[]
}

export type LoginData = {
    login: string
    password: string
}

export type UserState = {
    user: User | null
    login: {
        pending: boolean,
        result?: "success" | "error"
        errors?: ErrorType<LoginData>
        show: boolean
    }
    checkAuth: {
        pending: boolean
        result?: "success" | "error"
    },
    logout: {
        pending: boolean
        result?: "success" | "error"
    }
}