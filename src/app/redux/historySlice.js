import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: "history",
    initialState: [],
    reducers: {
        addToHistory: (state, actions) => {
            state.push({
                id: Math.floor(Math.random() * 1000),
                foods: actions.payload.foods,
                totalPrice: actions.payload.totalPrice,
            })
        }
    }
})

export default historySlice.reducer