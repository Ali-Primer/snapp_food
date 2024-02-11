import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [
            {
                id: 1,
                name: "پیتزا",
                price: 200,
                info: "پنیر پیتزا، سس مخصوص، ژامبون، فلفل دلمه ای، گوجه فرنگی، خمیر پیتزا",
                image: "https://cdn.snappfood.ir/641x641/cdn/23/69/44/vendor/625952b52d8e8.jpeg"
            }
        ]
    },
    reducers:{
        
    }
})