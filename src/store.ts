import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
 import commonSlice from './components/features/commonSlice'
import thunk from 'redux-thunk'
import authSlice from "./components/features/auth/authSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        commonslice: commonSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(thunk, apiSlice.middleware),
    devTools: true
})