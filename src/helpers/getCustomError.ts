type ErrorTypes = "noItemHash" | "noOrderId" | "noUser"

type CustomErrors = {
    [key in ErrorTypes] : string
}

export const customErrors : CustomErrors = {
    noItemHash: "Отсутствует хэш",
    noOrderId: "Отсутствует номер заказа",
    noUser: "Войдите или зарегистрируйтесь"
}