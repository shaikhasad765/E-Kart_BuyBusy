// Importing the required functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

// Configuring the Redux store
const store = configureStore({
    // Defining the reducers that will manage the state
    reducer: {
        cart: cartSlice, // Using the cartSlice reducer to manage the cart state
    },
});

// Exporting the configured store
export default store;
