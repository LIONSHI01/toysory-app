import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.action";
import { BsHandbag } from "react-icons/bs";
import styles from "./Navbar.module.scss";
import logoImg from "../../../assets/brand/logo.png";

const Navbar = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const openCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  const signOutHandler = () => signOut({ callbackUrl: "/" });

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
              <Link href="/product">
                <a className={styles.navbar__link}>Markeplace</a>
              </Link>
            </li>
            <li>
              <div className={styles.navbar__authentication}>
                {status === "unauthenticated" || status === "loading" ? (
                  <>
                    <Link href="/auth/signin">
                      <a className={styles.navbar__login}>Sign In</a>
                    </Link>
                    <Link href="/auth/register">
                      <a className={styles.navbar__register}>Register</a>
                    </Link>
                  </>
                ) : (
                  <div className={styles.navbar__accountBox}>
                    <Link href="/account">
                      <a className={styles.navbar__account}>Account</a>
                    </Link>
                    <a
                      className={styles.navbar__signout}
                      onClick={signOutHandler}
                    >
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className={styles.navbar__cart} onClick={openCartHandler}>
                <BsHandbag className={styles.navbar__icon} />
                <span className={styles.navbar__cartQty}>{cartCount}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
