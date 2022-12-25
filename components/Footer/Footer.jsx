import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./Footer.module.scss";
import logoImage from "../../assets/brand/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__main}>
          <div className={styles.footer__logo_col}>
            <Link href="/">
              <div className={styles.footer__logo}>
                <Image
                  src={logoImage}
                  alt="logo"
                  width="80%"
                  height="80%"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
          <ul className={styles.footer__links_col}>
            <li>
              <Link href="/">
                <a className={styles.footer__link}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.footer__link}>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.footer__link}>Shopping Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.footer__link}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.footer__link}>Contact</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.footer__medias_col}>
            <li>
              <Link href="/">
                <BsTwitter className={styles.footer__icon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <ImFacebook className={styles.footer__icon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiFillInstagram className={styles.footer__icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
