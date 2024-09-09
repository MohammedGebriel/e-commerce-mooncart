// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your slice reducer
import cartSlice from './slice/cartSlice';
import WishSlice from './slice/WishSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wish: WishSlice,
    },
});

export default store;