import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
  name: "favorite",
  initialState: {
    data: [],
  },
  reducers: {
    AddFavoriteItem: (state, action) => {
      state.data.push(action.payload);
    },
    DeleteFavoriteItem: (state, action) => {
      const filteredData = state?.data.filter((elem) => {
        return elem.id !== action.payload;
      });

      state.data = filteredData;
    },
    ClearFavoriteItems: (state, action) => {
      state.data = [];
    },
  },
});
export const { AddFavoriteItem, DeleteFavoriteItem, ClearFavoriteItems } =
  favorite.actions;
export default favorite.reducer;
