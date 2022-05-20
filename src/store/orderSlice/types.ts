export type CreateOrderRequest = {
    combinationId?: string
    offerId?: string
    deviceId?: string
    questions: {[questionId: string] : string}
    productId?: string
    combination?: string
}

export type CreateOrderResponse = {
    status: "success" | "error"
    data?: GetOrderRequest,
    errors: string[]
};

export type GetOrderRequest = {
    orderNumber: string
    itemHash: string
};


type ApiResponse<T> = {
    status: "success" | "error"
    data: T
    errors: string[]
}

export type Order = {
    id: string
    number: string
    amount: string
    currency: string
    status: string
    property: {
        id: string
        name: string
        type: string
        value: string
    }
    items: Array<{
        id: number
        product_id: number
        price: number
        name: string
        quantity: number
        property: Array<{
            id: string
            code: string
            name: string
            value: string
        }>
    }>
}

export type GetOrderResponse = ApiResponse<Order>

export type OrderState = {
    order: {
        orderNumber: string
        itemHash: string
        data: Order | null,
        status: "success" | "error" | null
        loading: boolean,
        errors: string[]
    }
    orders: Order[],
}