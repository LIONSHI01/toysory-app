import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { urlFor } from "../../lib/client";
import {
  addItemToCart,
  minusItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = ({ product }) => {
  const { name, salePrice, thumbImage, slug, quantity } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));
  const minusFromCartHandler = () =>
    dispatch(minusItemFromCart(cartItems, product));
  const removeFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, product));

  return (
    <div className="cartItem">
      <div className="cartItem__product-image">
        <Image
          src={urlFor(thumbImage && thumbImage[0])}
          width={150}
          height={150}
          objectFit="cover"
          alt="product img"
        />
      </div>
      <div className="cartItem__content">
        <div className="cartItem__top">
          <Link href={`/product/${slug.current}`}>
            <h4 className="cartItem__productName">{name}</h4>
          </Link>
          <span
            className="cartItem__deleteButton"
            onClick={removeFromCartHandler}
          >
            <AiOutlineDelete className="cartItem__delete-icon" />
          </span>
        </div>
        <div className="cartItem__bottom">
          <div className="cartItem__qty-box">
            <span
              className="cartItem__btn-minus"
              onClick={minusFromCartHandler}
            >
              <AiOutlineMinus className="cartItem__icon-minus" />
            </span>
            <span className="cartItem__qty">{quantity}</span>
            <span className="cartItem__btn-plus">
              <AiOutlinePlus
                className="cartItem__icon-plus"
                onClick={addToCartHandler}
              />
            </span>
          </div>
          <span className="cartItem__price">$HK {salePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
