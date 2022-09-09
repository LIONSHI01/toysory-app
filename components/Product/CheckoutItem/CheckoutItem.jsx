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
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import classes from "./CheckoutItem.module.scss";

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
    <div className={classes.cartItem}>
      <div className={classes.cartItem__name_box}>
        <div className={classes.cartItem__img_box}>
          <Image
            src={urlFor(thumbImage && thumbImage[0])}
            width={70}
            height={70}
            alt="PRODUCT NAME"
          />
        </div>
        <Link href={`/product/${slug.current}`}>
          <a className={classes.cartItem__name}>{name}</a>
        </Link>
      </div>
      <span>{selectType ? `Types: ${selectType}` : ""}</span>
      <span>{`HK$ ${salePrice}`}</span>
      <div className={classes.cartItem__qty_box}>
        <span>Amount :</span>
        <span
          className={classes.cartItem__minus}
          onClick={minusFromCartHandler}
        >
          <AiOutlineMinus className={classes.cartItem__amountIcon} />
        </span>
        <span className={classes.cartItem__number}>{quantity}</span>

        <span className={classes.cartItem__plus} onClick={addToCartHandler}>
          <AiOutlinePlus className={classes.cartItem__amountIcon} />
        </span>
      </div>
      <span>{`HK$ ${subTotal}`}</span>
      <div
        className={classes.cartItem__btn_remove}
        onClick={removeFromCartHandler}
      >
        <MdDelete className={classes.cartItem__remove_icon} />
      </div>
    </div>
  );
};

export default CheckoutItem;
