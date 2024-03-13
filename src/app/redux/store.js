import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import isClicked from "./isClicked";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        clicked: isClicked,
    }
});
