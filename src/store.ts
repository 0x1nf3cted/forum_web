import {configureStore} from '@reduxjs/toolkit'
import commonReducer from './components/features/commonstate';
import userReducer from './components/features/user/UserSlice';

export const store = configureStore({
    reducer:{
        commonState: commonReducer,
        user: userReducer
    }
  })

