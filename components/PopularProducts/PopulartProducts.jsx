import Link from "next/link";
import React from "react";

import styles from "./PopularProducts.module.scss";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";

const PopularProducts = ({ products }) => {
  // Display FIRST 5 product only
  const popularProducts = products.slice(0, 5);
  return (
    <section className={styles.popularProducts}>
      <div className="container">
        <div className={styles.popularProducts__container}>
          <div className={styles.popularProducts__heading_box}>
            <h2 className={styles.popularProducts__heading}>Products</h2>
            <span className={styles.popularProducts__text}>/-Popular-/</span>
          </div>
          <div className={styles.popularProducts__list}>
            {popularProducts?.map((product) => (
              <ProductPreviewCard key={product._id} product={product} />
            ))}
          </div>
          <Link href="/product">
            <a className="btn">More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
