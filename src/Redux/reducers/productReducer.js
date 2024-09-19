import { createSlice } from "@reduxjs/toolkit";

const product=createSlice({
    name:"product",
    initialState:{
        data:[]
    },
    reducers:{
        ProductData:(state,action)=>{
            if(state.data.length===0){
                state.data.push(action.payload)
            }
            
           
        }
    }
})
export const {ProductData}=product.actions;
export default product.reducer