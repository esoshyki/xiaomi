import { RootState } from '..';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { OrderState, CreateOrderResponse, GetOrderRequest, Order } from './types';
import { createRoutine } from 'redux-saga-routines';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: OrderState = {
    order: {
        orderNumber: "",
        itemHash: "",
        data: null,
        status: null,
        loading: false,
        errors: []
    },
    orders: [],

};

export const GetOrder = createRoutine("order/Get-Order");
export const CreateOrder = createRoutine("order/Create-Order");
export const SendPhoto = createRoutine("order/Send-Photo")

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderNumber(state: OrderState, { payload } : PayloadAction<string> ) {
            state.order.orderNumber = payload
        },
        setItemHash(state: OrderState, { payload } : PayloadAction<string>) {
            state.order.itemHash = payload
        }
    },
    extraReducers: {
        [CreateOrder.REQUEST](state) {
            state.order.orderNumber = "";
            state.order.itemHash = "";
            state.order.loading = true;
        },
        [CreateOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [CreateOrder.SUCCESS](state, { payload }: PayloadAction<CreateOrderResponse>) {
            state.order.itemHash = payload.data?.itemHash ?? "";
            state.order.orderNumber = payload.data?.orderNumber ?? "";

        },
        [CreateOrder.FULFILL](state) {
            state.order.loading = false;
        },
        [GetOrder.REQUEST](state, { payload } : PayloadAction<GetOrderRequest | undefined>) {
            state.order.loading = true;
        },
        [GetOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [GetOrder.SUCCESS](state, { payload }: PayloadAction<Order>) {
            state.order.data = payload;
        },
        [GetOrder.FULFILL](state) {
            state.order.loading = false
        },
        [SendPhoto.REQUEST](state, { payload } : PayloadAction<File[] | undefined>) {
            state.order.loading = true
        },
        [SendPhoto.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.order.errors = payload;
            state.order.status = "error"
        },
        [SendPhoto.SUCCESS](state) {
            state.order.status = "success";
        },
        [SendPhoto.FULFILL](state) {
            state.order.loading = false
        }
    }
});

export const getOrderData = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.order
)

export const getOrdersData = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.orders
)

export const {
    setOrderNumber,
    setItemHash
} = orderSlice.actions

export default orderSlice.reducer;

