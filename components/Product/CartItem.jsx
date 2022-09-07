import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import testImg from "../../assets/img/product-preview/preview-1.jpg";

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__product-image">
        <Image
          src={testImg}
          width={150}
          height={150}
          objectFit="cover"
          alt="product img"
        />
      </div>
      <div className="cartItem__content">
        <div className="cartItem__top">
          <Link href={`/product/slug`}>
            <h4 className="cartItem__productName">PRODUCT NAME</h4>
          </Link>
          <span className="cartItem__deleteButton">
            <AiOutlineDelete className="cartItem__delete-icon" />
          </span>
        </div>
        <div className="cartItem__bottom">
          <div className="cartItem__qty-box">
            <span className="cartItem__btn-minus">
              <AiOutlineMinus className="cartItem__icon-minus" />
            </span>
            <input type="number" className="cartItem__qty" defaultValue="1" />
            <span className="cartItem__btn-plus">
              <AiOutlinePlus className="cartItem__icon-plus" />
            </span>
          </div>
          <span className="cartItem__price">$HK 49</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
