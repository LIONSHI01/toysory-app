import React from "react";

import { MdSmartToy } from "../ReactIcons/index";

import { CategoryBarContainer } from "./CategoryBar.styles";
const CategoryBar = ({ category }) => {
  const display = category.replace("-", " ");
  return (
    <CategoryBarContainer>
      <div className="category">
        <div className="category__title">
          <div className="category__icon_box">
            <MdSmartToy className="category__icon" />
          </div>
          <span className="category__name">{display}</span>
        </div>
      </div>
    </CategoryBarContainer>
  );
};

export default CategoryBar;
