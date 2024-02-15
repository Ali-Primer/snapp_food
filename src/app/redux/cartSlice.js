import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, actions) => {
            const index = state.cart.findIndex(item => item.id === actions.payload.id)
            console.log(index);
            const isNotFound = index == -1
            if (isNotFound) {
                state.cart.push({ ...actions.payload, count: 1 })
            }
            else {
                state.cart[index].count += 1
            }
            console.log(state.cart);
        },
        decrease: (state, actions) => {
            const index = state.cart.findIndex(item => item.id === actions.payload.id)
            state.cart[index].count -= 1
        },
        delete: (state, actios) => {
            const index = state.cart.findIndex(item => item.id === actios.payload.id)
            state.cart.splice(index, 1)
        },
        deleteAll: (state) => {
            state.cart = []
        }
    }
})

export default cartSlice.reducer