import { createSlice } from '@reduxjs/toolkit'


const wishSlice = createSlice({
    name: 'cart',
    initialState: {
        wishList: [],
        totalQuantity: 0,   
    },
    reducers: {
        addToWish(state,action) {
            const newItem = action.payload;
            const existingItem = state.wishList.find((item) => item.id === newItem.id);
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.wishList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    cover: newItem.images,
                })
            }
            state.totalQuantity++;
        },
        removeFromWish(state,action) {
            const existingItem = state.wishList.find((item)=> item.id === action.payload);
            if(existingItem.quantity === 1) {
                state.wishList = state.wishList.filter((item) => item.id !== action.payload);
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        },
        removeAllFromWish(state,action) {
            state.wishList = state.wishList.filter((item)=> item.id !== action.payload)
            state.totalQuantity -= state.wishList.reduce((acc,item) => acc + item.quantity,0)
        },
        clearCart(state) {
            state.wishList = [],
            state.totalQuantity = 0
        },
    }

});

export const {clearCart,addToWish,removeFromWish,removeAllFromWish} = wishSlice.actions

export default wishSlice.reducer

