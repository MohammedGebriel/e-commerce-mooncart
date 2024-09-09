import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,   
    },
    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemList.push({
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
        removeFromItem(state,action) {
            const existingItem = state.itemList.find((item)=> item.id === action.payload);
            if(existingItem.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== action.payload);
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        },
        removeAllFromCart(state,action) {
            state.itemList = state.itemList.filter((item)=> item.id !== action.payload)
            state.totalQuantity -= state.itemList.reduce((acc,item) => acc + item.quantity,0)
        },
        clearCart(state) {
            state.itemList = [],
            state.totalQuantity = 0
        },
    }

});

export const {clearCart,addToCart,removeFromItem,removeAllFromCart} = cartSlice.actions

export default cartSlice.reducer

