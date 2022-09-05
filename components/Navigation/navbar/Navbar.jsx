import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.scss";
import logoImg from "../../../assets/brand/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar__container}>
          <Link href="/">
            <div className={styles.navbar__logoBox}>
              <Image
                src={logoImg}
                objectFit="contain"
                alt="Smartdragon Logo"
                className={styles.navbar__logo}
              />
            </div>
          </Link>
          <ul className={styles.navbar__links}>
            <li>
              <Link href="/">
                <a className={styles.navbar__link}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navbar__link}>Markeplace</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navbar__link}>Shopping Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navbar__link}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navbar__link}>Contact</a>
              </Link>
            </li>
            <li>
              <div className={styles.navbar__authentication}>
                <Link href="/">
                  <a className={styles.navbar__login}>Log in</a>
                </Link>
                <Link href="/">
                  <a className={styles.navbar__register}>Register</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
