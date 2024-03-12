import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import isClicked from "./isClicked";
import searchHistory from "./searchHistory";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        clicked: isClicked,
        searchHistory: searchHistory
    }
});
