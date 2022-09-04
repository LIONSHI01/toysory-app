import React from "react";
import Footer from "./Navigation/footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navigation/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
