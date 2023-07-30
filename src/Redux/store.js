import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";




const store= configureStore({
    reducer:{
        cart:cartSlice,
    },


})

export default store;