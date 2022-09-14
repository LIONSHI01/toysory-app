import { useDispatch } from "react-redux";

import { client } from "../lib/client";

import { setAllProducts } from "../store/product/product.action";
import AboutBox from "../components/AboutBox/AboutBox";
import PopularProducts from "../components/PopularProducts/PopulartProducts";
import Hero from "../components/Hero/Hero";
import HeroImg from "../assets/img/hero.jpg";
import Meta from "../components/Meta";

const Home = ({ products }) => {
  const dispatch = useDispatch();
  dispatch(setAllProducts(products));

  return (
    <>
      <Meta title="Home" />
      <main className="main">
        <Hero banner={HeroImg} size="big" />
        <AboutBox />
        <PopularProducts products={products} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
    revalidate: 3600,
  };
};

export default Home;
