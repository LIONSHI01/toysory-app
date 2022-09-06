import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductList.module.scss";
const ProductList = ({ products }) => {
  return (
    <div className={classes.productList}>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
