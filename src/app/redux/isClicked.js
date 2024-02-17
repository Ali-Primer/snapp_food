import { createSlice } from "@reduxjs/toolkit";

export const isClicked = createSlice({
    name: "isClicked",
    initialState: false,
    reducers: {
        isClickedHandler: (state) => {
            return !state
        }
    }
})

export default isClicked.reducer