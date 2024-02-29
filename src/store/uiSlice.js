import { createSlice } from "@reduxjs/toolkit";

const Uireducer=createSlice({
    name:'UISlice',
    initialState:{notification:null},
    reducers:{
        showNotification(state,actions){
            state.notification=actions.payload
        }
    }
})

export const UiActions=Uireducer.actions;

export default Uireducer.reducer;