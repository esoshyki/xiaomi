import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import themeSliceReducer from "./themeSlice"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import userSlice from "./userSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        user: userSlice
    },
    middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store