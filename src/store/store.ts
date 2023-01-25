import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../Slices/productSlice";
import cartReducer from "../Slices/cartSlice"

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
export const selectcart = (state: RootState) => state.cart.cartItems;
export const selectProducts = (state: RootState) => state.product.products;