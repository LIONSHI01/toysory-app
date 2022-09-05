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

import Hero from "../../components/Hero/Hero";
import ProductBanner from "../../assets/img/hero-2.jpg";

import PdImg from "../../assets/img/products/product-01/4.jpg";
import PdImg2 from "../../assets/img/products/product-01/1.jpg";
import PdImg3 from "../../assets/img/products/product-01/3.jpg";
import styles from "./index.module.scss";

const index = () => {
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
          <aside className={styles.sidebar}>SIDE BAR</aside>
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
                <Image src={PdImg} objectFit="cover" alt="product name"></Image>
              </div>
              <div className={styles.intro__content}>
                <h1 className={styles.intro__name}>Product Name</h1>
                <span className={styles.intro__setPrice}>
                  Original Price : HK$ 150
                </span>
                <span className={styles.intro__salePrice}>
                  Sale Price : <span>HK$ 120 </span>{" "}
                </span>

                <div className={styles.intro__specifications}>
                  <span>Specifications :</span>
                  <select name="specs" id="specs">
                    <option selected disabled value="">
                      Please select type
                    </option>
                    <option value="VALUE-1">VALUE 1</option>
                    <option value="VALUE-2">VALUE 2</option>
                    <option value="VALUE-3">VALUE 3</option>
                  </select>
                </div>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati quaerat exercitationem unde saepe, eius voluptatem
                sunt magnam temporibus rerum, minus natus inventore libero quia
                nam voluptates ab veritatis veniam? Ut!
              </p>
              <div className={styles.details__imageGroup}>
                <div className={styles.details__imageBox}>
                  <Image
                    src={PdImg2}
                    alt="Product Name image"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.details__imageBox}>
                  <Image
                    src={PdImg3}
                    alt="Product Name image"
                    objectFit="contain"
                  />
                </div>
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

export default index;
