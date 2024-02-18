import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../db/Restaurant";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        selected: {}
    },
    reducers: {
        addToCart: (state, actions) => {
            const index = state.cart.findIndex(item => item.id === actions.payload.id)
            const isNotFound = index == -1
            if (isNotFound) {
                state.cart.push({ ...actions.payload, count: 1 })
            }
            else {
                state.cart[index].count += 1
            }
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
        },
        clicked: (state, actions) => {
            const foodId = actions.payload.id
            const foundFood = Restaurant.flatMap(restaurant => restaurant.foods).find(food => food.id === foodId)
            if (foundFood) {
                state.selected = foundFood
                console.log(state.selected);
            } else {
                console.log("food not found");
            }
        }
    }
})

export default cartSlice.reducer