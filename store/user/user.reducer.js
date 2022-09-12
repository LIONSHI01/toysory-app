import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_USER_STATES = {
  favItems: [],
};

export const userReducer = (state = INITIAL_USER_STATES, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_FAVORITES:
      return {
        ...state,
        favItems: payload,
      };

    default:
      return state;
  }
};

// export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;
//   switch (type) {
//     case PRODUCT_ACTION_TYPES.GET_ALL_PRODUCTS:
//       return {
//         ...state,
//         allProductsArr: payload,
//       };

//     default:
//       return state;
//   }
// };
