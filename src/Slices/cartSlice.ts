import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product } from "./productSlice";
import {toast} from "react-toastify";

interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    cartItems: CartItem[]
};

const initialState: CartState = {
    cartItems: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const item = action.payload;
            let productItem = state.cartItems.find(prod => prod.id === item.id);
            if(productItem) {
                productItem.quantity += 1;
                toast.success("Item updated", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });
            } else {
                state.cartItems = [{...item, quantity: 1}, ...state.cartItems];
                toast.success("Added to cart successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                })
            }
        },
        incrementQty(state, action) {
            const item = action.payload;
            let productItem = state.cartItems.find(prod => prod.id === item.id);
            if(productItem) {
                productItem.quantity += 1;
            }

        },
        decrementQty(state, action: {payload: Product}) {
            const item = action.payload;
            let productItem = state.cartItems.find(prod => prod.id === item.id);
            if(productItem) {
                if(productItem.quantity > 1) {
                    productItem.quantity -= 1
                } else {
                    toast.warning("Quantity can not be negative", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 1000,
                        
                    });
                }
            }
        },
        removeFromCart(state, action: {payload: Product}) {
            const item = action.payload;
            state.cartItems = state.cartItems.filter(prod => prod.id !== item.id);
            toast.success('Item successfully removed', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            })
        }
    }
});

export const {addToCart, incrementQty, decrementQty, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;