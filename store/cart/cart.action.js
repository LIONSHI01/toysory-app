import { createAction } from "../../lib/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd, inputQty) => {
  const existProduct = cartItems.find((item) => item._id === productToAdd._id);
  console.log(inputQty);
  if (existProduct) {
    return cartItems.map((item) =>
      item._id === productToAdd._id
        ? { ...item, quantity: item.quantity + inputQty }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: inputQty }];
};
const minusCartItem = (cartItems, productToAdd) => {
  const existProduct = cartItems.find((item) => item._id === productToAdd._id);

  if (existProduct.quantity > 1) {
    return cartItems.map((item) =>
      item._id === productToAdd._id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems;
};

const removeCartItem = (cartItems, productToRemove) =>
  cartItems.filter((item) => item._id !== productToRemove._id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, product, inputQty = 1) => {
  const newCartItems = addCartItem(cartItems, product, inputQty);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const minusItemFromCart = (cartItems, product) => {
  const newCartItems = minusCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
