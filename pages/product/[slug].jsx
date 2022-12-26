import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  BsHeartFill,
  BsFillBagCheckFill,
  BsCartCheckFill,
} from "../../components/ReactIcons/index";

import ProductBanner from "../../assets/img/hero-2.jpg";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { client, urlFor } from "../../lib/client";

import {
  Sidebar,
  Hero,
  CategoryBar,
  Header,
  Meta,
  Button,
} from "../../components/index";

import { ProductDetailsPageContainer } from "../../styles/ProductDetails.styles";

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
    category,
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
    <>
      <Meta
        title={name}
        keywords={`${category}, Educational, Toys, Experts, Children`}
        description={description}
      />
      <Hero banner={urlFor(bannerImage?.[0]) || ProductBanner} />
      <Header primary="Shopping" secondary="Product Details" />
      <ProductDetailsPageContainer>
        <div className="container">
          <main className="product">
            <div className="sidebar-container">
              <Sidebar categories={categories} />
            </div>
            <section className="product__main">
              <CategoryBar category={category} />

              <div className="intro">
                <div className="intro__image">
                  <Image
                    src={urlFor(thumbImage?.[0])}
                    width={800}
                    height={800}
                    alt="product name"
                  />
                </div>

                <form className="intro__content">
                  <h1 className="intro__name">{name}</h1>
                  <span className="intro__setPrice">
                    Original Price : HK$ {originalPrice}
                  </span>
                  <span className="intro__salePrice">
                    Sale Price : <span>HK$ {salePrice}</span>
                  </span>

                  {specification?.length >= 1 && (
                    <div className="intro__specifications">
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

                  <div className="intro__amount">
                    <span>Amount :</span>
                    <span className="intro__minus" onClick={minusQty}>
                      <AiOutlineMinus className="intro__amountIcon" />
                    </span>
                    <input
                      type="number"
                      className="intro__number"
                      name="quantity"
                      min={1}
                      value={quantity}
                      onChange={onChangeFormHandler}
                    />

                    <span className="intro__plus" onClick={plusQty}>
                      <AiOutlinePlus className="intro__amountIcon" />
                    </span>
                  </div>
                  <div className="intro__buttons">
                    <Button
                      color="grey"
                      height="4.5rem"
                      width="100%"
                      onClick={submitHandler}
                      type="button"
                    >
                      <BsCartCheckFill />
                      <span>Add to Cart</span>
                    </Button>

                    <Button
                      color="grey"
                      height="4.5rem"
                      width="100%"
                      onClick={buyNowHandler}
                      type="button"
                    >
                      <BsFillBagCheckFill />
                      <span>Buy Now</span>
                    </Button>

                    <Button
                      color="red"
                      height="4.5rem"
                      width="100%"
                      type="button"
                    >
                      <BsHeartFill />
                      <span>Add to Favorite</span>
                    </Button>
                  </div>
                </form>
              </div>
              <div className="details">
                <div className="details__heading">Details</div>
                <p className="details__desc">
                  <span>Description:</span>
                  <br />
                  {description}
                </p>
                <div className="details__imageGroup">
                  {detailImage?.map((image, i) => (
                    <div key={i} className="details__imageBox">
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
      </ProductDetailsPageContainer>
    </>
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

  if (!product) return { notFound: true };

  return {
    props: {
      product,
      categories,
    },

    revalidate: 1800,
  };
};

export default ProductDetails;
