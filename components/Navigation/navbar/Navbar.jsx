import React, { useState, useEffect } from "react";
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
// import styles from "./Navbar.module.scss";
import logoImg from "../../../assets/brand/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { status, data: session } = useSession();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const openCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));
  const signOutHandler = () => signOut({ callbackUrl: "/" });

  useEffect(() => {
    const setNavSticky = () => {
      if (window.scrollY >= 134) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", setNavSticky, true);
  });

  return (
    <nav className={`${sticky ? "navbar sticky" : "navbar"}`}>
      <div className="container">
        <div className="navbar__container">
          <Link href="/">
            <div className="navbar__logoBox">
              <Image
                src={logoImg}
                objectFit="contain"
                alt="Smartdragon Logo"
                className="navbar__logo"
              />
            </div>
          </Link>
          <ul className="navbar__links">
            <li>
              <Link href="/product">
                <a className="navbar__link">Markeplace</a>
              </Link>
            </li>
            <li>
              <div className="navbar__authentication">
                {status === "unauthenticated" || status === "loading" ? (
                  <>
                    <Link href="/auth/signin">
                      <a className="navbar__login">Sign In</a>
                    </Link>
                    <Link href="/auth/register">
                      <a className="navbar__register">Register</a>
                    </Link>
                  </>
                ) : (
                  <div className="navbar__accountBox">
                    <Link href="/account">
                      <a className="navbar__account">Account</a>
                    </Link>
                    <a className="navbar__signout" onClick={signOutHandler}>
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="navbar__cart" onClick={openCartHandler}>
                <BsHandbag className="navbar__icon" />
                <span className="navbar__cartQty">{cartCount}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
