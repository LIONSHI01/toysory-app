import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeItemFromFav,
  addItemToFav,
} from "../../../store/user/user.action";
import { selectFavArr } from "../../../store/user/user.selector";

// import CategoryBar from "../../../components/CategoryBar/CategoryBar";
// import Header from "../../../components/Header/Header";
// import Hero from "../../../components/Hero/Hero";
// import Sidebar from "../../../components/Navigation/sidebar/Sidebar";

import { CategoryBar, Header, Hero, Sidebar } from "../../../components/index";

import ProductList from "../../../components/Product/ProductList/ProductList";
import heroImg from "../../../assets/img/hero-3.webp";
import classes from "./index.module.scss";

const FavoritePage = () => {
  const favItems = useSelector(selectFavArr);
  const categories = [...new Set(favItems?.map((item) => item.category))];

  return (
    <div>
      <Hero banner={heroImg} />
      <Header primary="My Favorite" secondary="Shopping" />
      <div className="container">
        <main className={classes.products__main}>
          <Sidebar categories={categories} />
          <div className={classes.products__content}>
            <CategoryBar category="All Products" />
            <ProductList products={favItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default FavoritePage;
