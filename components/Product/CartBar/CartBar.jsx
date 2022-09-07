import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../../store/cart/cart.selector";
import { ImArrowLeft2 } from "react-icons/im";

import { setIsCartOpen } from "../../../store/cart/cart.action";
import CartItem from "../CartItem";

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
    <div className={`cartbar ${isCartOpen ? "open" : ""}`}>
      <div className="cartbar__goback-box" onClick={closeCartHandler}>
        <ImArrowLeft2 className="cartbar__back-icon" />
        <span className="cartbar__backText">Back To Shopping</span>
        <span className="cartbar__itemQty">{`(${cartCount} items)`}</span>
      </div>
      <div className="cartItemList">
        {cartItems?.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </div>
      <div className="cartItem__summary">
        <span className="cartbar__total">{`Total HK$ ${cartTotal}`}</span>
      </div>
      <Link href="/">
        <a className="cartbar__checkout-btn">Check out</a>
      </Link>
    </div>
  );
};

export default CartBar;
