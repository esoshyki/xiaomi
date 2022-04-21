import { createSelector } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';
import { RootState } from '..';
import { User, UserState, ErrorType, LoginData } from "./types";

const initialState: UserState = {
    user: null,
    login: {
        pending: false,
        show: false
    },
    checkAuth: {
        pending: false
    },
    logout: {
        pending: false,
    }
}

export const Login = createRoutine("user/Login");
export const CheckAuth = createRoutine("user/Check-auth");
export const Logout = createRoutine("user/Logout");

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleLogin(state, { payload } : PayloadAction<boolean>) {
            state.login.show = payload
        },
        setUser(state, { payload } : PayloadAction<User | null>) {
            state.user = payload
        }
    },
    extraReducers: {
        [Login.REQUEST](state) {
            state.login.pending = true;
            state.checkAuth.result = undefined
        },
        [Login.SUCCESS](state, { payload } : PayloadAction<User>) {
            state.user = payload;
            state.login.result = "success";
            state.login.pending = false
            state.login.show = false;
        },
        [Login.FAILURE](state, { payload } : PayloadAction<ErrorType<LoginData>>) {
            state.login.pending = false;
            state.login.result = "error";
            state.login.errors = payload;
        },
        [CheckAuth.REQUEST](state) {
            state.checkAuth.pending = true;
        },
        [CheckAuth.SUCCESS](state) {
            state.checkAuth.pending = false;
            state.checkAuth.result = "success"
            if (state.user) {
                state.user.isAuthorised = true;
            }
        },
        [CheckAuth.FAILURE](state) {
            state.user = null;
            state.checkAuth.result = "error"
            state.checkAuth.pending = false;
        },
        [Logout.REQUEST](state) {
            state.logout.pending = true
        },
        [Logout.SUCCESS](state) {
            state.logout.pending = false;
            state.user = null;
        },
        [Logout.FAILURE](state) {
            state.logout.pending = false
        }
    }
})

export const getUserData = createSelector(
    (state: RootState) => state.user,
    user => user,
)

export const {
    toggleLogin,
    setUser
} = userSlice.actions

export default userSlice.reducer;