import { createSlice } from "@reduxjs/toolkit";

export const searchHistory = createSlice({
    name: "searchHistory",
    initialState: [],
    reducers: {
        setSearch: (state, actions) => {
            const isSearched = state.find(actions.payload)
            if (!isSearched) {
                state.push(actions.payload)
            }
        }
    }
})

export default searchHistory.reducer