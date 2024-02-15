import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [
            {
                id: 1,
                name: "پیتزا",
                price: 200000,
                info: "پنیر پیتزا، سس مخصوص، ژامبون، فلفل دلمه ای، گوجه فرنگی، خمیر پیتزا",
                image: "https://cdn.snappfood.ir/641x641/cdn/23/69/44/vendor/625952b52d8e8.jpeg",
                count: 1
            }
        ]
    },
    reducers: {
        addToCart: (state, actions) => {
            const index = state.cart.findIndex( item => item.id === actions.payload.id )
            console.log(index);
            const isNotFound = index == -1
            if (isNotFound) {
                state.cart.push({...actions.payload, count: 1})
            }
            else{
                state.cart[index].count += 1
            }
            console.log(state.cart);
        },
        decrease: (state, actions) => {
            const index = state.cart.findIndex( item => item.id === actions.payload.id )
            state.cart[index].count -= 1
        }
    }
})

export default cartSlice.reducer