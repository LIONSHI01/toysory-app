import React from "react";
import Link from "next/link";

import aboutImg from "../../assets/img/about-1.jpg";
import newsImg from "../../assets/img/news-1.jpg";
import Image from "next/image";
import { AboutBoxContainer, SectionContainer } from "./AboutBox.styles";

const AboutBox = () => {
  return (
    <AboutBoxContainer>
      <div className="about">
        <SectionContainer>
          <div className="about__container">
            <div className="about__about_us">
              <div className="about__image_box">
                <Image
                  src={newsImg}
                  alt="News photo"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="about__content_box">
                <h3 className="about__heading">
                  <span className="about__heading_primary">
                    What&#39;s News
                  </span>
                  <span className="about__heading_secondary">/ Updates /</span>
                </h3>
                <p className="about__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  est atque aspernatur officia, repudiandae nisi illum ullam
                  corporis debitis illo ducimus explicabo inventore! Dolorem
                  aperiam corporis officia asperiores in eos!
                </p>
                <Link href="/">
                  <a className="about__btn_more">More</a>
                </Link>
              </div>
            </div>
            <div className="about__about_us">
              <div className="about__image_box">
                <Image
                  src={aboutImg}
                  alt="About Us photo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="about__content_box">
                <h3 className="about__heading">
                  <span className="about__heading_primary">About Us</span>
                  <span className="about__heading_secondary">
                    / Education Expert /
                  </span>
                </h3>
                <p className="about__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  est atque aspernatur officia, repudiandae nisi illum ullam
                  corporis debitis illo ducimus explicabo inventore! Dolorem
                  aperiam corporis officia asperiores in eos!
                </p>
                <Link href="/">
                  <a className="about__btn_more">More</a>
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </AboutBoxContainer>
  );
};

export default AboutBox;
