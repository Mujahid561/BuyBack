import {configureStore} from "@reduxjs/toolkit"

import productReducer from "./reducers/productReducer"
import favoriteReducer from "./reducers/favoriteReducer";
import cartReducer from "./reducers/cartReducer";

const store=configureStore({
    reducer:{
       
        product:productReducer,
        favorite:favoriteReducer,
        cart:cartReducer
    },
    intitialState:{
        data:[]
    }
});

export default store