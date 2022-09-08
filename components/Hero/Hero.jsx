import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/img/hero.jpg";
import styles from "./Hero.module.scss";

const Hero = ({ banner }) => {
  // const bannerImg = banner ? banner : HeroImage;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__conatiner}>
          <div className={styles.hero__imageBox}>
            <Image
              src={banner}
              alt="logo"
              layout="fill"
              objectFit="cover"
              className={styles.hero__image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  banner: HeroImage,
};

export default Hero;
