import { PRODUCT_ACTION_TYPES } from "./product.types";

const PRODUCT_INITIAL_STATE = {
  allProductsArr: [],
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_ACTION_TYPES.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProductsArr: payload,
      };

    default:
      return state;
  }
};
