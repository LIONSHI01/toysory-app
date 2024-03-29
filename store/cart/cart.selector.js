export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) =>
  state.cart.cartItems?.reduce(
    (currTotal, item) => currTotal + item.quantity,
    0
  );
export const selectCartTotal = (state) =>
  state.cart.cartItems?.reduce(
    (currTotal, item) => currTotal + item.quantity * item.salePrice,
    0
  );
