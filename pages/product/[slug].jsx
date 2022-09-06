import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdSmartToy } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  BsHeartFill,
  BsFillBagCheckFill,
  BsCartCheckFill,
} from "react-icons/bs";

import { client, urlFor } from "../../lib/client";
import Sidebar from "../../components/Navigation/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ProductBanner from "../../assets/img/hero-2.jpg";

// import PdImg from "../../assets/img/products/product-01/4.jpg";
// import PdImg2 from "../../assets/img/products/product-01/1.jpg";
// import PdImg3 from "../../assets/img/products/product-01/3.jpg";
import styles from "./product-details.module.scss";

const ProductDetails = ({ product, products }) => {
  const {
    thumbImage,
    detailImage,
    name,
    originalPrice,
    salePrice,
    description,
    specification,
  } = product;

  return (
    <div>
      <Hero banner={ProductBanner} />
      <header>
        <div className="container">
          <div className={styles.heading}>
            <h2 className={styles.heading__primary}>Shopping</h2>
            <span className={styles.heading__secondary}>
              /-Product Details-/
            </span>
          </div>
        </div>
      </header>
      <div className="container">
        <main className={styles.main}>
          <Sidebar />
          <section className={styles.product}>
            <div className={styles.product__category}>
              <div className={styles.product__category_title}>
                <div className={styles.product__category_icon_box}>
                  <MdSmartToy className={styles.product__category_icon} />
                </div>
                <span className={styles.product__category_name}>
                  Category Name
                </span>
              </div>
            </div>
            <div className={styles.intro}>
              <div className={styles.intro__image}>
                <Image
                  src={urlFor(thumbImage && thumbImage[0]).url()}
                  // objectFit="cover"
                  // layout="fill"
                  width={800}
                  height={800}
                  alt="product name"
                ></Image>
              </div>
              <div className={styles.intro__content}>
                <h1 className={styles.intro__name}>{name}</h1>
                <span className={styles.intro__setPrice}>
                  Original Price : HK$ {originalPrice}
                </span>
                <span className={styles.intro__salePrice}>
                  Sale Price : <span>HK$ {salePrice} </span>{" "}
                </span>

                {specification?.length >= 1 && (
                  <div className={styles.intro__specifications}>
                    <span>Specifications :</span>
                    <select name="specs" id="specs">
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
                  <span className={styles.intro__minus}>
                    <AiOutlineMinus className={styles.intro__amountIcon} />
                  </span>
                  <input
                    type="number"
                    className={styles.intro__number}
                    defaultValue="1"
                    // value="1"
                  />

                  <span className={styles.intro__plus}>
                    <AiOutlinePlus className={styles.intro__amountIcon} />
                  </span>
                </div>
                <div className={styles.intro__buttons}>
                  <button type="button" className={styles.intro__add_to_cart}>
                    <BsCartCheckFill className={styles.intro__button_icon} />
                    <span className={styles.intro__buttonText}>
                      Add to Cart
                    </span>
                  </button>
                  <button type="button" className={styles.intro__buy_now}>
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
              </div>
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
                      src={urlFor(image).url()}
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

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // Fetch ONE product data with slug
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  // Fetch ALL products data
  const productsQuery = '*[_type=="product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
