import { useDispatch } from "react-redux";

import { client } from "../lib/client";

import { setAllProducts } from "../store/product/product.action";
import AboutBox from "../components/AboutBox/AboutBox";
import PopularProducts from "../components/PopularProducts/PopulartProducts";
import Hero from "../components/Hero/Hero";

const Home = ({ products }) => {
  const dispatch = useDispatch();
  dispatch(setAllProducts(products));

  return (
    <main className="main">
      <Hero />
      <AboutBox />
      <PopularProducts products={products} />
    </main>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
