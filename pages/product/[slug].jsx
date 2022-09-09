import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  BsHeartFill,
  BsFillBagCheckFill,
  BsCartCheckFill,
} from "react-icons/bs";

import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { client, urlFor } from "../../lib/client";
import Sidebar from "../../components/Navigation/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ProductBanner from "../../assets/img/hero-2.jpg";
import CategoryBar from "../../components/CategoryBar/CategoryBar";

import styles from "./product-details.module.scss";
import Header from "../../components/Header/Header";

const ProductDetails = ({ product, categories }) => {
  const {
    thumbImage,
    detailImage,
    name,
    originalPrice,
    salePrice,
    description,
    specification,
    bannerImage,
  } = product;

  // Add item to cart
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Set up Form state
  const INITIAL_FORM_STATE = {
    quantity: 1,
    selectType: specification && specification[0],
  };

  const [formField, setFormField] = useState(INITIAL_FORM_STATE);
  const { quantity, selectType } = formField;

  const onChangeFormHandler = (e) => {
    const { value, name } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const plusQty = () => setFormField({ ...formField, quantity: +quantity + 1 });

  const minusQty = () => {
    if (quantity > 1) {
      setFormField({ ...formField, quantity: +quantity - 1 });
    }
  };

  // Dispatch Actions
  const submitHandler = () => {
    if (+quantity >= 1) {
      const updatedProduct = {
        ...product,
        selectType,
      };

      dispatch(addItemToCart(cartItems, updatedProduct, Number(quantity)));
      setFormField(INITIAL_FORM_STATE);
      toast.success(
        `Added ${+quantity} ${product.name.toUpperCase()} to Cart!`,
        {
          style: { fontSize: "20px" },
        }
      );
    } else {
      toast.error(`Sorry, AMOUNT should be > 1`, {
        style: { fontSize: "20px" },
      });
    }
  };

  const buyNowHandler = () => {
    if (+quantity >= 1) {
      const updatedProduct = {
        ...product,
        selectType,
      };

      dispatch(addItemToCart(cartItems, updatedProduct, Number(quantity)));
      dispatch(setIsCartOpen(true));
      setFormField(INITIAL_FORM_STATE);
    } else {
      toast.error(`Sorry, AMOUNT should be > 1`, {
        style: { fontSize: "20px" },
      });
    }
  };

  return (
    <div>
      <Hero banner={urlFor(bannerImage && bannerImage[0]) || ProductBanner} />
      <Header primary="Shopping" secondary="Product Details" />
      <div className="container">
        <main className={styles.product__main}>
          <Sidebar categories={categories} />
          <section className={styles.product}>
            <CategoryBar category="Category name" />

            <div className={styles.intro}>
              <div className={styles.intro__image}>
                <Image
                  src={urlFor(thumbImage && thumbImage[0])}
                  width={800}
                  height={800}
                  alt="product name"
                ></Image>
              </div>

              <form className={styles.intro__content}>
                <h1 className={styles.intro__name}>{name}</h1>
                <span className={styles.intro__setPrice}>
                  Original Price : HK$ {originalPrice}
                </span>
                <span className={styles.intro__salePrice}>
                  Sale Price :<span>HK$ {salePrice}</span>
                </span>

                {specification?.length >= 1 && (
                  <div className={styles.intro__specifications}>
                    <span>Specifications :</span>
                    <select
                      name="selectType"
                      id="specs"
                      onChange={onChangeFormHandler}
                    >
                      <option defaultValue disabled value="">
                        Please select type
                      </option>
                      {specification.map((spec, i) => (
                        <option key={i} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className={styles.intro__amount}>
                  <span>Amount :</span>
                  <span className={styles.intro__minus} onClick={minusQty}>
                    <AiOutlineMinus className={styles.intro__amountIcon} />
                  </span>
                  <input
                    type="number"
                    className={styles.intro__number}
                    name="quantity"
                    min={1}
                    value={quantity}
                    onChange={onChangeFormHandler}
                  />

                  <span className={styles.intro__plus} onClick={plusQty}>
                    <AiOutlinePlus className={styles.intro__amountIcon} />
                  </span>
                </div>
                <div className={styles.intro__buttons}>
                  <button
                    type="button"
                    className={styles.intro__add_to_cart}
                    onClick={submitHandler}
                  >
                    <BsCartCheckFill className={styles.intro__button_icon} />
                    <span className={styles.intro__buttonText}>
                      Add to Cart
                    </span>
                  </button>
                  <button
                    type="button"
                    className={styles.intro__buy_now}
                    onClick={buyNowHandler}
                  >
                    <BsFillBagCheckFill className={styles.intro__button_icon} />
                    <span className={styles.intro__buttonText}>Buy Now</span>
                  </button>
                  <button
                    type="button"
                    className={styles.intro__add_to_favorite}
                  >
                    <BsHeartFill className={styles.intro__button_icon} />
                    <span className={styles.intro__buttonText}>
                      Add to Favorite
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.details}>
              <div className={styles.details__heading}>Details</div>
              <p className={styles.details__desc}>
                <span>Description:</span>
                <br />
                {description}
              </p>
              <div className={styles.details__imageGroup}>
                {detailImage?.map((image, i) => (
                  <div key={i} className={styles.details__imageBox}>
                    <Image
                      src={urlFor(image)}
                      width={800}
                      height={800}
                      alt={`${name} ${i}`}
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Link href="/">
              <a className={`btn`}>back</a>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"] {
    slug{
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  // console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // Fetch ONE product data with slug
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const product = await client.fetch(query);

  // Fetch All products for Category list
  const allProductsQuery = `*[_type=="product"]`;
  const allProducts = await client.fetch(allProductsQuery);
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  return {
    props: {
      product,
      categories,
    },
  };
};

export default ProductDetails;
