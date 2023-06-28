import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from "./slices/userAuth/userAuthSlice";

export default configureStore({
    reducer: {
        userAuth: userAuthReducer
    },
})