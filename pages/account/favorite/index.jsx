import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeItemFromFav,
  addItemToFav,
} from "../../../store/user/user.action";
import { selectFavArr } from "../../../store/user/user.selector";

import {
  CategoryBar,
  Header,
  Hero,
  Sidebar,
  Meta,
} from "../../../components/index";

import ProductList from "../../../components/Product/ProductList/ProductList";
import heroImg from "../../../assets/img/hero-3.webp";
import { FavoritesPageContainer } from "../../../styles/Favorites.styles";

const FavoritePage = () => {
  const favItems = useSelector(selectFavArr);
  const categories = [...new Set(favItems?.map((item) => item.category))];

  return (
    <>
      <Meta title="Favorites" />
      <Hero banner={heroImg} />
      <Header primary="My Favorite" secondary="Shopping" />
      <FavoritesPageContainer>
        <div className="container">
          <main className="main">
            <div className="sidebar-container">
              <Sidebar categories={categories} />
            </div>
            <div className="content">
              <CategoryBar category="Favorite Products" />
              <ProductList products={favItems} />
            </div>
          </main>
        </div>
      </FavoritesPageContainer>
    </>
  );
};

export default FavoritePage;
