import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

import { navbarItems } from "../../assets/constants";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import logoImg from "../../assets/brand/logo.png";
import { BsHandbag, FiMenu } from "../ReactIcons/index";
import { MobileSideBar } from "..";
import { NavbarContainer } from "./Navbar.styles";

const Navbar = () => {
  // CONFIGURATION
  const { status, data: session } = useSession();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  // STATES
  const [sticky, setSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // HANDLERS
  const openCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));
  const signOutHandler = async () => {
    await signOut({ redirect: false });
    Router.push("/");
  };

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
    <>
      <MobileSideBar showup={showMobileNav} setShowup={setShowMobileNav} />
      <NavbarContainer sticky={sticky}>
        <div className="navbar">
          <div className="navbar__container">
            <div
              className="navbar__mobileNavBtn"
              onClick={() => setShowMobileNav((prev) => !prev)}
            >
              <FiMenu size={25} />
            </div>
            <Link href="/">
              <div className="navbar__logoBox">
                <Image
                  src={logoImg}
                  objectFit="cover"
                  alt="toysory Logo"
                  className="navbar__logo"
                />
              </div>
            </Link>

            <ul className="navbar__links">
              {navbarItems.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url}>
                    <a className="navbar__link">{title}</a>
                  </Link>
                </li>
              ))}

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
            </ul>
            <div className="navbar__cart" onClick={openCartHandler}>
              <BsHandbag className="navbar__icon" />
              <span className="navbar__cartQty">{cartCount}</span>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
