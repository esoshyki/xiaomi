export type CreateOrChangeOrderRequest = {
    combinationId?: string
    number?: string
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
    create?: true
    qrCode?: string
};

export type OrderRequest<T> = {
    orderNumber?: string
    itemNumber?: string
} & T

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
    amount: number
    currency: string
    status: string
    items: OrderItem[]
}

export type DeleteItemResponseData = {
    item: boolean
    order: boolean
} | null

export type DeleteItemResponse = {
    status: "success" | "error" | null,
    data: DeleteItemResponseData
    errors: string[]
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
    deleteItem: {
        result: "success" | "error" | null,
        loading: boolean,
        errors: string[]
        data: DeleteItemResponseData,
        itemNumber: string | null
    }
    qrCode?: string
}