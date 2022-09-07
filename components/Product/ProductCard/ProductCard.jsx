import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../../lib/client";

import {
  BsHeartFill,
  BsFillBagCheckFill,
  BsCartCheckFill,
} from "react-icons/bs";

import { MdShoppingCart } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";

// CSS file in /styles folder
const ProductCard = ({ product }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { thumbImage, salePrice, name, slug } = product;

  return (
    <div className="ProductCard">
      <div className="ProductCard__image">
        <Image
          src={urlFor(thumbImage && thumbImage[0])}
          alt="PRODUCT NAME"
          height={320}
          width={320}
          objectFit="cover"
        />

        <span className="ProductCard__viewmore">View more</span>
      </div>
      <h4 className="ProductCard__name">{name}</h4>
      <div className="ProductCard__shopping">
        <div className="ProductCard__icon_box">
          <MdShoppingCart className="ProductCard__icon" />
        </div>
        <span className="ProductCard__price">HKD$ {salePrice}</span>
      </div>

      <div className="ProductCard__buttons">
        <button type="button" className="ProductCard__add_to_favorite">
          <BsHeartFill className="ProductCard__button_icon" />
          <span className="ProductCard__buttonText">Favorite</span>
        </button>
        <Link href={`/product/${slug.current}`}>
          <button type="button" className="ProductCard__details_btn">
            <GiMagnifyingGlass className="ProductCard__button_icon" />
            <span className="ProductCard__buttonText">Details</span>
          </button>
        </Link>
      </div>
      <div className={`dropdownBox ${isDropdown ? "active" : ""}`}>
        <div className="dropdownBox__shopping_btns">
          <button type="button" className="dropdownBox__add_to_cart">
            <BsCartCheckFill className="dropdownBox__button_icon" />
            <span className="dropdownBox__buttonText">Add to Cart</span>
          </button>
          <button type="button" className="dropdownBox__buy_now">
            <BsFillBagCheckFill className="dropdownBox__button_icon" />
            <span className="dropdownBox__buttonText">Buy Now</span>
          </button>
        </div>
        <div
          className="dropdownBox__dropdown"
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <FaAngleDown className="dropdownBox__dropdown_icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
