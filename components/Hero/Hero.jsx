import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/img/hero-3.webp";

const Hero = ({ banner, size }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__conatiner">
          <div
            className={`hero__imageBox ${
              size === "big" ? "hero__image-big" : "hero__image-small"
            }`}
          >
            <Image
              src={banner}
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="hero__image"
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
