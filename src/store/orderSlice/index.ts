import { OfferState } from './../offerSlice/types';
import { RootState } from '..';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { OrderState, CreateOrderResponse, GetOrderRequest, Order, OrderItem } from './types';
import { createRoutine } from 'redux-saga-routines';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: OrderState = {
    order: {
        itemNumber: "",
        number: "",
        data: null,
        status: null,
        loading: false,
        errors: []
    },
    currentItem: null,
    sendPhoto: {
        status: null,
        loading: false
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
            state.order.number = payload
        },
        setItemNumber(state: OrderState, { payload } : PayloadAction<string>) {
            state.order.itemNumber = payload
        },
        setCurrentItem(state: OrderState, { payload } : PayloadAction<OrderItem | null>) {
            state.currentItem = payload
        },
        setCurrentItemStatus(state: OrderState, { payload } : PayloadAction<string>) {
            if (state.currentItem) {
                state.currentItem.status = payload;
            }
        }
    },
    extraReducers: {
        [CreateOrder.REQUEST](state) {
            state.order.loading = true;
        },
        [CreateOrder.FAILURE](state, { payload }: PayloadAction<string[]>) {
            state.order.status = "error";
            state.order.errors = payload;
        },
        [CreateOrder.SUCCESS](state, { payload }: PayloadAction<CreateOrderResponse>) {
            state.order.status = "success";
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
            state.sendPhoto.loading = true
        },
        [SendPhoto.FAILURE](state, { payload } : PayloadAction<string[]>) {
            state.order.errors = payload;
            state.sendPhoto.status = "error"
        },
        [SendPhoto.SUCCESS](state) {
            state.sendPhoto.status = "success";
        },
        [SendPhoto.FULFILL](state) {
            state.sendPhoto.loading = false
        }
    }
});

export const getOrderData = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.order
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

export const getOrdersData = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.orders
);

export const getOrderPending = createSelector(
    (state: RootState) => state.order,
    order => order.order.loading
);

export const getCurrentItem = createSelector(
    (state: RootState) => state.order,
    order => order.currentItem
)

export const getCreateOrderResult = createSelector(
    (state: RootState) => state.order,
    orderData => ({
        status: orderData.order.status, 
        itemNumber: orderData.order.itemNumber,
        orderNumber: orderData.order.number
    })
)

export const getOrderSendPhotosStatus = createSelector(
    (state: RootState) => state.order,
    orderData => orderData.sendPhoto.status,
)

export const {
    setOrderNumber,
    setItemNumber,
    setCurrentItem,
    setCurrentItemStatus
} = orderSlice.actions

export default orderSlice.reducer;

