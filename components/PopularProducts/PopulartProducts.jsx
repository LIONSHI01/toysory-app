import React from "react";

import styles from "./PopularProducts.module.scss";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";

const PopulartProducts = () => {
  return (
    <section className={styles.popularProducts}>
      <div className="container">
        <div className={styles.popularProducts__list}>
          <ProductPreviewCard />
          <ProductPreviewCard />
          <ProductPreviewCard />
          <ProductPreviewCard />
          <ProductPreviewCard />
        </div>
      </div>
    </section>
  );
};

export default PopulartProducts;
