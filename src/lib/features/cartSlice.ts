"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  quantity: number;
  price: number;
  subprice: number;
  productid: string;
  coverimage: string;
  name: string;
  prescritption?: boolean;

  variant?: [
    {
      variant_type: "size";
      value: string;
      price: number;
    },
    {
      variant_type: "color";
      value: string;
      price: number;
    },
    {
      variant_type: "brand";
      value: string;
      price: number;
    },
  ];
}
export interface Order {
  userid: string;
  total_amount: number;
  delivery_fee: number;
  prescription_needed: boolean;
  couponid: string | null;
  coupon_used: boolean;
  trackingid: string;
  items: Product[];
  addressid: string;
  report: [{ name: string; upload: string }];
  nin: string;
}

export interface CartState {
  cart: Product[];
}
const initialState: CartState = {
  cart: [],
};
export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.productid === action.payload.productid,
      );
      if (existingItem) {
        state.cart = state.cart.map(
          (item) =>
            item.productid === action.payload.productid
              ? { ...item, quantity: action.payload.quantity }
              : item,
          // ? { ...item, quantity: item.quantity! + 1 }
          // : item,
        );
      } else {
        state.cart = [...state.cart, { ...action.payload }];
      }
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.productid === action.payload.productid,
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.productid === action.payload.productid
            ? { ...item, quantity: action.payload.quantity }
            : item,
        );
      } else {
        state.cart = [...state.cart, { ...action.payload }];
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (item) => item.productid !== action.payload,
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },
    filterCart: (state) => {
      state.cart = state.cart.filter((item) => item.quantity > 0);
    },
  },
});

export const { addToCart, decrement, clearCart, filterCart } =
  CartSlice.actions;
export default CartSlice.reducer;
