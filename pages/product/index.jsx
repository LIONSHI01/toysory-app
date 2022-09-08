import React from "react";

import { client } from "../../lib/client";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Navigation/sidebar/Sidebar";

import ProductList from "../../components/Product/ProductList/ProductList";

import classes from "./index.module.scss";

const Product = ({ products, categories }) => {
  return (
    <div>
      <Hero />
      <Header primary="All Products" secondary="Shopping" />
      <div className="container">
        <main className={classes.products__main}>
          <Sidebar categories={categories} />
          <div className={classes.products__content}>
            <CategoryBar category="All Products" />
            <ProductList products={products} />
          </div>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const categories = [...new Set(products.map((product) => product.category))];
  return {
    props: { products, categories },
  };
};

export default Product;
