import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../../store/cart/cart.selector";

import { ImArrowLeft2, BsBagPlus } from "../../ReactIcons/index";

import { setIsCartOpen } from "../../../store/cart/cart.action";
import CartItem from "../CartItem";
import { CartBarContainer } from "./CartBar.styles";

const CartBar = () => {
  const disptach = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const closeCartHandler = () => {
    disptach(setIsCartOpen(false));
  };

  return (
    <CartBarContainer isOpen={isCartOpen}>
      <div className="cartbar">
        <div className="cartbar__goback-box" onClick={closeCartHandler}>
          <ImArrowLeft2 className="cartbar__back-icon" />
          <span className="cartbar__backText">Back To Shopping</span>
          <span className="cartbar__itemQty">{`(${
            cartCount ?? 0
          } items)`}</span>
        </div>

        {cartItems?.length >= 1 ? (
          <>
            <div className="cartItemList">
              {cartItems?.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>
            <div className="cartItem__summary">
              <span className="cartbar__total">{`Total HK$ ${cartTotal}`}</span>
            </div>
            <Link href="/cart">
              <a className="cartbar__checkout-btn" onClick={closeCartHandler}>
                Check out &rarr;
              </a>
            </Link>
          </>
        ) : (
          <div className="cartItem__emptyBox">
            <BsBagPlus className="cartItem__emptyBox-icon" />
            <span className="cartItem__emptyBox-text">Your cart is Empty</span>
          </div>
        )}
      </div>
    </CartBarContainer>
  );
};

export default CartBar;
