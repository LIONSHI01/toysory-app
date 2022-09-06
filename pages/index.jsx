import { client } from "../lib/client";

import AboutBox from "../components/AboutBox/AboutBox";
import PopularProducts from "../components/PopularProducts/PopulartProducts";
import Hero from "../components/Hero/Hero";

const Home = ({ products }) => {
  return (
    <main className="main">
      {console.log(products)}
      <Hero />
      <AboutBox />
      <PopularProducts products={products} />
    </main>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
