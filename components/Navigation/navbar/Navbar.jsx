import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../../store/cart/cart.action";
import { BsHandbag } from "react-icons/bs";
import styles from "./Navbar.module.scss";
import logoImg from "../../../assets/brand/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const openCartHandler = () => dispatch(setIsCartOpen(true));

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
              <Link href="/product">
                <a className={styles.navbar__link}>Markeplace</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className={styles.navbar__link}>Blog</a>
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
            <li>
              <div className={styles.navbar__cart} onClick={openCartHandler}>
                <BsHandbag className={styles.navbar__icon} />
                <span className={styles.navbar__cartQty}>0</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
