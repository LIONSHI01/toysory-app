import React from "react";

import { client } from "../../lib/client";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Navigation/sidebar/Sidebar";

import ProductList from "../../components/Product/ProductList/ProductList";
import heroImg from "../../assets/img/hero-3.webp";
import classes from "./index.module.scss";
import Meta from "../../components/Meta";

const Product = ({ products, categories }) => {
  return (
    <div>
      <Meta
        title="All Products"
        keywords="Educational, Toys, Experts, Children"
        description="You can find all the trendy products from here!"
      />
      <Hero banner={heroImg} />
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
    revalidate: 3600,
  };
};

export default Product;
