export type CreateOrderRequest = {
    combinationId?: string
    offerId?: string
    deviceId?: string
    questions: {[questionId: string] : string}
    productId?: string
    combination?: string
}

export type CreateOrderResponseData = {
    number: string
    itemNumber: string
    success: boolean
}

export type CreateOrderResponse = {
    status: "success" | "error"
    data?: CreateOrderResponseData,
    errors: string[]
};

export type GetOrderRequest = {
    orderNumber: string
    itemNumber: string
};


type ApiResponse<T> = {
    status: "success" | "error"
    data: T
    errors: string[]
}

export type OrderItem = {
    price: number
    name: string
    image: string
    itemNumber: string
    status: string
    combinationCode?: string
    combinationId?: string
    answers: Array<{
        name: string,
        value: string
    }>
}

export type Order = {
    number: string
    amount: string
    currency: string
    status: string
    items: OrderItem[]
}

export type GetOrderResponse = ApiResponse<Order>

export type OrderState = {
    order: {
        number: string
        itemNumber: string
        data: Order | null,
        status: "success" | "error" | null
        loading: boolean,
        errors: string[]
    },
    currentItem: OrderItem | null,
    sendPhoto: {
        status: "success" | "error" | null
        loading: boolean
    }
    orders: Order[],
}