import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import { setCartItemsFromLocalStorage } from "../store/cart/cart.action";
import { setFavItemsFromLocalStorage } from "../store/user/user.action";
import Footer from "./Navigation/footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navigation/navbar/Navbar";
import CartBar from "./Product/CartBar/CartBar";

const Layout = ({ children }) => {
  // Add LOADING screen on route change event
  Router.onRouteChangeStart = () => {
    NProgress.start();
    toast.success("loading...", {
      style: { fontSize: "20px" },
    });
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
    </>
  );
};

export default Layout;
