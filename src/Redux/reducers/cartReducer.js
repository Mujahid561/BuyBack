import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    data: [],
    length: [],
  },
  reducers: {
    AddCartItem: (state, action) => {
      state.data.push(action.payload);
    },
    FetchItems: (state, action) => {
        
      state.length.push(action.payload);
    },
    DeleteCartItem: (state, action) => {
      
      let filteredData = state.length.filter((elem) => {
        
        return elem[0]?.ProductId  !== action.payload;
      });
 
   
      state.length = filteredData;
    },
    ClearCartItems: (state, action) => {
        state.length.length=0
    }
  },
});
export const { AddCartItem, DeleteCartItem, ClearCartItems, FetchItems } =
  cart.actions;
export default cart.reducer;
