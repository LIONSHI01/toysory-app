import React from "react";

import { client } from "../../lib/client";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Navigation/sidebar/Sidebar";

import ProductList from "../../components/Product/ProductList/ProductList";

import classes from "./index.module.scss";

const Product = ({ products }) => {
  return (
    <div>
      <Hero />
      <Header primary="All Products" secondary="Shopping" />
      <div className="container">
        <main className={classes.products__main}>
          <Sidebar />
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

  return {
    props: { products },
  };
};

export default Product;
