import React from "react";

import { client } from "../../lib/client";

import {
  CategoryBar,
  Header,
  Hero,
  Sidebar,
  ProductList,
  Meta,
} from "../../components/index";

import heroImg from "../../assets/img/hero-3.webp";

import { ProductsPageContainer } from "../../styles/Products.styles";

const Product = ({ products, categories }) => {
  return (
    <>
      <Meta
        title="All Products"
        keywords="Educational, Toys, Experts, Children"
        description="You can find all the trendy products from here!"
      />
      <ProductsPageContainer>
        <Hero banner={heroImg} />
        <Header primary="All Products" secondary="Shopping" />
        <div className="container">
          <main className="products__main">
            <div className="products__sidebarContainer">
              <Sidebar categories={categories} />
            </div>
            <div className="products__content">
              <CategoryBar category="All Products" />
              <ProductList products={products} />
            </div>
          </main>
        </div>
      </ProductsPageContainer>
    </>
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
