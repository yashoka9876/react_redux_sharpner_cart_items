import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import Uireducer from "./uiSlice"
const store=configureStore({
    reducer:{
        cart:cartReducer,
        uiUpdate:Uireducer
    }
})

export  default store;