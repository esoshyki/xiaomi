import { RootState } from '..';
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, CreateOrderResponse, GetOrderRequest, Order, OrderRequest, DeleteItemResponseData } from './types';
import { createRoutine } from 'redux-saga-routines';

const initialState : OrderState = {
    order: {
        itemNumber: "",
        number: "",
        data: null,
        status: null,
        loading: false,
        errors: []
    },
    deleteItem: {
        loading: false,
        result: null,
        errors: [],
        data: null,
        itemNumber: null
    }
}

export const GetOrder = createRoutine("order/Get-Order");
export const CreateOrChangeOrder = createRoutine("order/Create-Or-Change-Order");
export const GetItemStatus = createRoutine("order/Get-Item-Status");
export const DeleteItem = createRoutine("order/Delete-Item")

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        setOrderNumber(state: OrderState, { payload } : PayloadAction<string> ) {
            state.order.number = payload
        },
        setItemNumber(state: OrderState, { payload } : PayloadAction<string>) {
            state.order.itemNumber = payload
        },
        setOrderStatus(state: OrderState, { payload } : PayloadAction<"success" | "error" | null>) {
            state.order.status = payload
        },
        setQrCode(state: OrderState, { payload } : PayloadAction<string | undefined>) {
            state.qrCode = payload;
        },
        restoreOrderState(state: OrderState) {state = Object.assign(state, initialState)},
        setDeleteItemNumber(state: OrderState, { payload } : PayloadAction<string | null>) {
            state.deleteItem.itemNumber = payload;
        }
    },
    extraReducers: {
        [CreateOrChangeOrder.REQUEST](state, { payload } : PayloadAction<OrderRequest<{}>>) {
            state.order.loading = true;
        },
        [CreateOrChangeOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [CreateOrChangeOrder.SUCCESS](state, { payload }: PayloadAction<CreateOrderResponse>) {
            state.order.status = "success";
        },
        [CreateOrChangeOrder.FULFILL](state) {
            state.order.loading = false;
        },
        [GetOrder.REQUEST](state, { payload } : PayloadAction<GetOrderRequest | undefined>) {
            state.order.loading = true;
        },
        [GetOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [GetOrder.SUCCESS](state, { payload }: PayloadAction<{data: Order, create?: true}>) {
            state.order.data = payload.data;
        },
        [GetOrder.FULFILL](state) {
            state.order.loading = false
        },
        [GetItemStatus.REQUEST](state) {
            state.order.loading = true
        },
        [GetItemStatus.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.order.errors = payload
        },
        [GetItemStatus.SUCCESS](state, { payload } : PayloadAction<{status: string}>) {
            if (state.order.data) {
                if (state.order.data.status !== payload.status) {
                    state.order.data.status = payload.status
                }
             }
        },
        [GetItemStatus.FULFILL](state) {
            state.order.loading = false;
        },
        [DeleteItem.REQUEST](state) {
            state.deleteItem.loading = true
        },
        [DeleteItem.SUCCESS](state, { payload } : PayloadAction<DeleteItemResponseData>) {
            state.deleteItem.data = payload
        },
        [DeleteItem.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.deleteItem.errors = payload
        },
        [DeleteItem.FULFILL](state) {
            state.deleteItem.loading = false
            state.deleteItem.itemNumber = null;
        }
    }
});

export const getOrderItemData = createSelector(
    (state: RootState) => state.order,
    order => ({
        orderData: order.order.data,
        isLoading: order.order.loading,
        errors: order.order.errors
    })
)

export const getOrderData = createSelector(
    (state: RootState) => state.order,
    orderData => orderData
)

export const getOrderErrors = createSelector(
    (state: RootState) => state.order,
    order => order.order.errors
)

export const getOrderResponseData = createSelector(
    (state: RootState) => state.order,
    order => order.order.data
)

export const getOrderNumber = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.order.number
)

export const getItemNumber = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.order.itemNumber
)

export const getOrderPending = createSelector(
    (state: RootState) => state.order,
    order => order.order.loading
);

export const getCreateOrderResult = createSelector(
    (state: RootState) => state.order,
    orderData => ({
        status: orderData.order.status, 
        itemNumber: orderData.order.itemNumber,
        orderNumber: orderData.order.number
    })
)

export const getQrCode = createSelector(
    (state: RootState) => state.order,
    order => order.qrCode
)

export const getDeleteData = createSelector(
    (state: RootState) => state.order,
    order => ({...order.deleteItem, orderNumber: order.order.data?.number})
)

export const {
    setOrderNumber,
    setItemNumber,
    restoreOrderState,
    setQrCode,
    setOrderStatus,
    setDeleteItemNumber
} = orderSlice.actions

export default orderSlice.reducer;

