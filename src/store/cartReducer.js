import { createSlice } from "@reduxjs/toolkit";
const initialCartState={
    cocart:false,
    CartArray:[]
}
//title, price, description
const cartreducer=createSlice({
    name:'ShopingCart',
    initialState:initialCartState,
    reducers:{
        cartHandler(state){
            console.log('hia')
            state.cocart=!state.cocart;
        },
        addToCartArray(state,actions){
            const existingProdcut=state.CartArray.find((product)=>product.title===actions.payload.title);
            if(existingProdcut){
                existingProdcut.quantity++;
            }else{
                state.CartArray.push(actions.payload);
            }

        },
        increamentQuantity(state,actions){
            const existingProdcut=state.CartArray.find((product)=>product.title===actions.payload.title);
            existingProdcut.quantity++;

        },
        decrementQuantity(state,actions){
            const existingProdcut=state.CartArray.find((product)=>product.title===actions.payload.title);
            existingProdcut.quantity--;
        }
    } 
})

export const cartActions=cartreducer.actions;

export default cartreducer.reducer;

