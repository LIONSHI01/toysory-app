import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.action";
import { ImArrowLeft2 } from "react-icons/im";
import CartItem from "../CartItem";

const CartBar = () => {
  const disptach = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const closeCartHandler = () => {
    disptach(setIsCartOpen(false));
  };

  return (
    <div className={`cartbar ${isCartOpen ? "open" : ""}`}>
      <div className="cartbar__goback-box" onClick={closeCartHandler}>
        <ImArrowLeft2 className="cartbar__back-icon" />
        <span className="cartbar__backText">Back To Shopping</span>
        <span className="cartbar__itemQty">(0 items)</span>
      </div>
      <div className="cartItemList">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartItem__summary">
        <span className="cartbar__total">Total $200</span>
      </div>
      <Link href="/">
        <a className="cartbar__checkout-btn">Check out</a>
      </Link>
    </div>
  );
};

export default CartBar;
