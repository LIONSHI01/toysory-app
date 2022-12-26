import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";

import getStripe from "../lib/getStripe";

import { Header, Hero } from "../components/index";
import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";

import {
  FaShippingFast,
  SiCashapp,
  MdSystemSecurityUpdateGood,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineFileDone,
} from "../components/ReactIcons/index";

import CartImg from "../assets/img/cart.webp";
import CheckoutItem from "../components/Product/CheckoutItem/CheckoutItem";
import { CartPageContainer } from "../styles/cart.styles";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...", {
      style: { fontSize: "20px" },
    });

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartPageContainer>
      <div className="cart">
        <header>
          <Hero banner={CartImg} />
          <Header primary={"Shopping Cart"} secondary={"Item List"} />
        </header>
        <main className="container">
          <div className="cart__flow-container">
            <div className="cart__flow-step">
              <span className="cart__flow-num">1</span>
              <FaShippingFast className="cart__flow-icon" />
              <span>Choose Shipping Method</span>
            </div>
            <div className="cart__flow-step">
              <span className="cart__flow-num">2</span>
              <AiOutlineFileDone className="cart__flow-icon" />
              <span>Fill In Info</span>
            </div>
            <div className="cart__flow-step">
              <span className="cart__flow-num">3</span>
              <MdSystemSecurityUpdateGood className="cart__flow-icon" />
              <span>Finish Check Out</span>
            </div>
          </div>
          {cartItems.length >= 1 ? (
            <div className="cart__shopping">
              <div className="cart__table">
                <div className="cart__title">
                  <div className="cart__title-icon-box">
                    <FaShippingFast className="cart__title-icon" />
                  </div>
                  <h4 className="cart__title-text">Cart Items</h4>
                </div>
                <div className="cart__table-head">
                  <span>Product Name</span>
                  <span className="cart__table-head_specifications">
                    Specifications
                  </span>
                  <span className="cart__table-head_unitPrice">Unit Price</span>
                  <span>Quantity</span>
                  <span className="cart__table-head_subTotal">Sub-total</span>
                  <span>Remove</span>
                </div>
                <div className="cart__table-body">
                  {cartItems?.map((product) => (
                    <CheckoutItem key={product._id} product={product} />
                  ))}
                </div>
                {cartItems.length >= 1 ? (
                  <div className="cart__sum-box">
                    <span>Total</span>
                    <span>{`HK$ ${cartTotal}`}</span>
                  </div>
                ) : (
                  <div className="cart__empty-text">
                    {"No Item Yet ! Let's Explore!"}
                  </div>
                )}
              </div>
              <div className="cart__btns-group">
                <Link href="/product">
                  <a className="cart__shopping-btn-box">
                    <AiOutlineLeft className="cart__shopping-btn-left" />
                    <span>Shopping</span>
                  </a>
                </Link>
                <div onClick={handleCheckout}>
                  <a className="cart__shopping-btn-box">
                    <span>Check Out</span>
                    <SiCashapp />
                    <AiOutlineRight className="cart__shopping-btn-right" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__empty-msg">
              <div className="cart__empty-text">
                {"No Item Yet ! Let's Explore !"}
              </div>
              <Link href="/product">
                <a className="cart__shopping-btn-box">
                  <AiOutlineLeft className="cart__shopping-btn-left" />
                  <span>Shopping</span>
                </a>
              </Link>
            </div>
          )}
        </main>
      </div>
    </CartPageContainer>
  );
};

export default Cart;
