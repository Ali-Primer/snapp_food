import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import isClicked from "./isClicked";
import historySlice from "./historySlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        clicked: isClicked,
        history: historySlice
    }
});
