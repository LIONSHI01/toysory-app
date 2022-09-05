import Image from "next/image";
import styles from "../styles/Home.module.scss";

import AboutBox from "../components/AboutBox/AboutBox";
import PopulartProducts from "../components/PopularProducts/PopulartProducts";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <AboutBox />
      <PopulartProducts />
    </main>
  );
}
