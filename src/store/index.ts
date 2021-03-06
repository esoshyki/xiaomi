import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import themeSliceReducer from "./themeSlice"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import offerSlice from "./offerSlice";
import viewSlice from "./viewSlice";
import orderSlice from "./orderSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}

const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["user"]
}

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    theme: themeSliceReducer,
    user: persistReducer(userPersistConfig, userSlice),
    offer: offerSlice,
    order: orderSlice,
    view: viewSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store