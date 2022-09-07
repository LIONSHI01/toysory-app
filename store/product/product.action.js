import { createAction } from "../../lib/reducer.utils";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setAllProducts = (productArr) =>
  createAction(PRODUCT_ACTION_TYPES.GET_ALL_PRODUCTS, productArr);
