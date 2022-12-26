import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/img/hero-3.webp";

import { HeroContainer } from "./Hero.styles";

const Hero = ({ banner, size = "small" }) => {
  return (
    <HeroContainer size={size}>
      <div className="hero">
        <div className="container">
          <div className="hero__conatiner">
            <div className={"hero__imageBox"}>
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
      </div>
    </HeroContainer>
  );
};

Hero.defaultProps = {
  banner: HeroImage,
};

export default Hero;
