import { createSlice } from "@reduxjs/toolkit";

export const isClicked = createSlice({
    name: "isClicked",
    initialState: false,
    reducers: {
        isClickedHandler: (state) => {
            return true
        },
        closeHandler: (state) => {
            return false
        }
    }
})

export default isClicked.reducer