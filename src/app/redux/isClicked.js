import { createSlice } from "@reduxjs/toolkit";

export const isClicked = createSlice({
    name: "isClicked",
    initialState: {
        darkBackground: false,
        foodInfo: false,
        history: false,
        search: false
    },
    reducers: {
        isClickedHandlerFood: (state) => {
            state.darkBackground = true
            state.foodInfo = true
        },
        isClickedHandlerHistory: (state) => {
            state.darkBackground = true
            state.history = true
        },
        isClickedHandlerSearch: (state) => {
            state.darkBackground = true
            state.search = !state.search
        },
        closeHandler: (state) => {
            state.darkBackground = false
            state.foodInfo = false
            state.history = false
            state.search = false
        }
    }
})

export default isClicked.reducer