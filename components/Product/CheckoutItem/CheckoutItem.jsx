import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../../store/cart/cart.selector";

import {
  addItemToCart,
  minusItemFromCart,
  removeItemFromCart,
} from "../../../store/cart/cart.action";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../../../lib/client";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  MdDelete,
} from "../../ReactIcons/index";

// import classes from "./CheckoutItem.module.scss";
import { ItemContainer } from "./CheckoutItem.styles";

const CheckoutItem = ({ product }) => {
  const { name, salePrice, thumbImage, slug, quantity, subTotal, selectType } =
    product;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));
  const minusFromCartHandler = () =>
    dispatch(minusItemFromCart(cartItems, product));
  const removeFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, product));

  return (
    <ItemContainer>
      <div className="cartItem">
        <div className="cartItem__name_box">
          <div className="cartItem__img_box">
            <Image
              src={urlFor(thumbImage && thumbImage[0])}
              alt="PRODUCT NAME"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <Link href={`/product/${slug.current}`}>
            <a className="cartItem__name">{name}</a>
          </Link>
        </div>
        <span className="cartItem__specifications">
          {selectType ? `Types: ${selectType}` : ""}
        </span>
        <span className="cartItem__unitPrice">{`HK$ ${salePrice}`}</span>
        <div className="cartItem__qty_box">
          <span>Amount</span>
          <div className="cartItem__qty_box__adjuster">
            <span className="cartItem__minus" onClick={minusFromCartHandler}>
              <AiOutlineMinus className="cartItem__amountIcon" />
            </span>
            <span className="cartItem__number">{quantity}</span>

            <span className="cartItem__plus" onClick={addToCartHandler}>
              <AiOutlinePlus className="cartItem__amountIcon" />
            </span>
          </div>
        </div>
        <span className="cartItem__subTotal">{`HK$ ${subTotal}`}</span>
        <div className="cartItem__btn_remove" onClick={removeFromCartHandler}>
          <MdDelete className="cartItem__remove_icon" />
        </div>
      </div>
    </ItemContainer>
  );
};

export default CheckoutItem;
