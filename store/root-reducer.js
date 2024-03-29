import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
});
