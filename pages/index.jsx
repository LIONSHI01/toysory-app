import Image from "next/image";
import styles from "../styles/Home.module.scss";

import AboutBox from "../components/AboutBox/AboutBox";
import heroImage from "../assets/img/hero.jpg";
import PopulartProducts from "../components/PopularProducts/PopulartProducts";

export default function Home() {
  return (
    <main className="main">
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__conatiner}>
            <div className={styles.hero__imageBox}>
              <Image
                src={heroImage}
                alt="logo"
                layout="fill"
                objectFit="cover"
                className={styles.hero__image}
              />
            </div>
          </div>
        </div>
      </section>
      <AboutBox />
      <PopulartProducts />
    </main>
  );
}
