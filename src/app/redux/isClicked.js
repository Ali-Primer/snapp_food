import { createSlice } from "@reduxjs/toolkit";

export const isClicked = createSlice({
    name: "isClicked",
    initialState: false,
    reducers: {
        isClickedHandler: (state) => {
            return true; // Return a new state value
        },
        closeHandler: (state) => {
            return false; // Return a new state value
        }
    }
})

export default isClicked.reducer