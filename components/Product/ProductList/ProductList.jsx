import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import { ListContainer } from "./ProductList.styles";

const ProductList = ({ products }) => {
  return (
    <ListContainer>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ListContainer>
  );
};

export default ProductList;
