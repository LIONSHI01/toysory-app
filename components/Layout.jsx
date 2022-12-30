import React, { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";

import { useDispatch } from "react-redux";

import { setCartItemsFromLocalStorage } from "../store/cart/cart.action";
import { setFavItemsFromLocalStorage } from "../store/user/user.action";

import { Footer, Meta, Navbar, CartBar, AuthorDisplayBlock } from "./index";

const Layout = ({ children }) => {
  // STATES

  // Add LOADING screen on route change event
  Router.onRouteChangeStart = () => {
    NProgress.start();
    // toast.success("loading...", {
    //   style: { fontSize: "20px" },
    // });
  };
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  // SET UP LOCAL STORAGE for Cart State
  const dispatch = useDispatch();
  useEffect(() => {
    const localCartItems = localStorage.getItem("cartItems");
    const localFavItems = localStorage.getItem("favItems");
    if (localCartItems)
      dispatch(setCartItemsFromLocalStorage(JSON.parse(localCartItems)));

    if (localFavItems)
      dispatch(setFavItemsFromLocalStorage(JSON.parse(localFavItems)));
  });

  return (
    <>
      <Meta />

      <CartBar />
      <Navbar />
      {children}
      <Footer />
      <AuthorDisplayBlock />
    </>
  );
};

export default Layout;
