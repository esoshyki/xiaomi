export type User = {
    auth_param_name: string
    auth_param_value: string
    isAuthorised: boolean
    image?: string
    userName?: string
}

export type ErrorFieldKey<T> = keyof (T & { catched: string })

export type ErrorType = {
    message: string
}[]

export type LoginData = {
    login: string
    password: string
}

export type UserState = {
    user: User | null
    login: {
        pending: boolean,
        result?: "success" | "error"
        errors?: ErrorType
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