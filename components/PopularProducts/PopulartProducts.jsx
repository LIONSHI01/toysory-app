import Link from "next/link";
import React from "react";

// import styles from "./PopularProducts.module.scss";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";
import { ListContainer, Container } from "./PopularProducts.styles";

const PopularProducts = ({ products }) => {
  // Display FIRST 5 product only
  const popularProducts = products.slice(0, 5);
  return (
    <ListContainer>
      <div className="popularProducts">
        <Container>
          <div className="popularProducts__container">
            <div className="popularProducts__heading_box">
              <h2 className="popularProducts__heading">Products</h2>
              <span className="popularProducts__text">/-Popular-/</span>
            </div>
            <div className="popularProducts__list">
              {popularProducts?.map((product) => (
                <ProductPreviewCard key={product._id} product={product} />
              ))}
            </div>
            <Link href="/product">
              <a className="btn">More</a>
            </Link>
          </div>
        </Container>
      </div>
    </ListContainer>
  );
};

export default PopularProducts;
