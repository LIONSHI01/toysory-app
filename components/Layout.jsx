import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Footer from "./Navigation/footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navigation/navbar/Navbar";
import CartBar from "./Product/CartBar/CartBar";

const Layout = ({ children }) => {
  // Add LOADING screen on route change event
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

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
