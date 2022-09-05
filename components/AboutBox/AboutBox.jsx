import React from "react";
import Link from "next/link";

import styles from "./AboutBox.module.scss";
import aboutImg from "../../assets/img/about-1.jpg";
import newsImg from "../../assets/img/news-1.jpg";
import Image from "next/image";

const AboutBox = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__container}>
          <div className={styles.about__about_us}>
            <div className={styles.about__image_box}>
              <Image
                src={newsImg}
                alt="News photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.about__content_box}>
              <h3 className={styles.about__heading}>
                <span className={styles.about__heading_primary}>
                  What&#39;s News
                </span>
                <span className={styles.about__heading_secondary}>
                  / Updates /
                </span>
              </h3>
              <p className={styles.about__paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                est atque aspernatur officia, repudiandae nisi illum ullam
                corporis debitis illo ducimus explicabo inventore! Dolorem
                aperiam corporis officia asperiores in eos!
              </p>
              <Link href="/">
                <a className={styles.about__btn_more}>More</a>
              </Link>
            </div>
          </div>
          <div className={styles.about__about_us}>
            <div className={styles.about__image_box}>
              <Image
                src={aboutImg}
                alt="About Us photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.about__content_box}>
              <h3 className={styles.about__heading}>
                <span className={styles.about__heading_primary}>About Us</span>
                <span className={styles.about__heading_secondary}>
                  / Education Expert /
                </span>
              </h3>
              <p className={styles.about__paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                est atque aspernatur officia, repudiandae nisi illum ullam
                corporis debitis illo ducimus explicabo inventore! Dolorem
                aperiam corporis officia asperiores in eos!
              </p>
              <Link href="/">
                <a className={styles.about__btn_more}>More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
