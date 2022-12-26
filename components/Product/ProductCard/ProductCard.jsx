import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { selectFavArr } from "../../../store/user/user.selector";
import { addItemToFav } from "../../../store/user/user.action";
import { selectCartItems } from "../../../store/cart/cart.selector";
import { addItemToCart, setIsCartOpen } from "../../../store/cart/cart.action";

import { urlFor } from "../../../lib/client";

import { CardContainer } from "./ProductCard.styles";

import {
  BsHeartFill,
  BsFillBagCheckFill,
  BsCartCheckFill,
  MdShoppingCart,
  FaAngleDown,
  GiMagnifyingGlass,
} from "../../ReactIcons/index";

// CSS file in /styles folder
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { thumbImage, salePrice, name, slug } = product;

  const [isDropdown, setIsDropdown] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const favItems = useSelector(selectFavArr);

  const addToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast.success(`Added ${product.name.toUpperCase()} to Cart!`, {
      style: { fontSize: "20px" },
    });
  };

  const addToFav = () => {
    dispatch(addItemToFav(favItems, product));
    toast.success(`Added ${product.name.toUpperCase()} to Favorite!`, {
      style: { fontSize: "20px" },
    });
  };

  const buyNowHandler = () => {
    dispatch(addItemToCart(cartItems, product));
    dispatch(setIsCartOpen(true));
  };

  return (
    <CardContainer>
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
          <button
            type="button"
            className="ProductCard__add_to_favorite"
            onClick={addToFav}
          >
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
            <button
              type="button"
              className="dropdownBox__add_to_cart"
              onClick={addToCart}
            >
              <BsCartCheckFill className="dropdownBox__button_icon" />
              <span className="dropdownBox__buttonText">Add to Cart</span>
            </button>
            <button
              type="button"
              className="dropdownBox__buy_now"
              onClick={buyNowHandler}
            >
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
    </CardContainer>
  );
};

export default ProductCard;
