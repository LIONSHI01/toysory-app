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

import { CategoryPageContainer } from "../../styles/Category.styles";

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
      <CategoryPageContainer>
        <div className="container">
          <main className="main">
            <div className="sidebar-container">
              <Sidebar categories={categories} />
            </div>
            <div className="content">
              <CategoryBar category={category} />
              <ProductList products={products} />
            </div>
          </main>
        </div>
      </CategoryPageContainer>
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
