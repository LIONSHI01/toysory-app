import React from "react";
// import { useSelector } from "react-redux";
// import { selectCategories } from "../../store/product/product.selector";
import { client } from "../../lib/client";
// import CategoryBar from "../../components/CategoryBar/CategoryBar";
// import Header from "../../components/Header/Header";
// import Hero from "../../components/Hero/Hero";
// import Sidebar from "../../components/Navigation/sidebar/Sidebar";
// import ProductList from "../../components/Product/ProductList/ProductList";

import {
  CategoryBar,
  Header,
  Hero,
  Sidebar,
  ProductList,
} from "../../components/index";

import classes from "./category.module.scss";
import Meta from "../../components/Meta";

const Category = ({ products, category, categories }) => {
  return (
    <>
      <Meta
        title={category}
        keywords={`${category}, Education, Toys`}
        description={`You can find all the educational toys about ${category} here!`}
      />
      <Hero />
      <Header primary={category} secondary="Shopping" />
      <div className="container">
        <main className={classes.products__main}>
          <Sidebar categories={categories} />
          <div className={classes.products__content}>
            <CategoryBar category={category} />
            <ProductList products={products} />
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product"] {
    category
  }`;
  const res = await client.fetch(query);
  const categories = res.map((item) => item.category);
  const uniqueCategory = [...new Set(categories)];

  const paths = uniqueCategory.map((category) => ({
    params: {
      category: category,
    },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  // Fetch PRODUCTS data with specific category
  const query = `*[_type=="product" && category=='${category}']`;
  const allProductsQuery = `*[_type=="product"]`;

  // Fetch Target Products
  const products = await client.fetch(query);

  // Fetch All products for Category list
  const allProducts = await client.fetch(allProductsQuery);
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  return {
    props: {
      products,
      categories,
      category,
    },
  };
};

export default Category;
