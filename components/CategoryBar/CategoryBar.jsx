import React from "react";
import { MdSmartToy } from "react-icons/md";

import classes from "./CategoryBar.module.scss";

const CategoryBar = ({ category }) => {
  return (
    <div className={classes.category}>
      <div className={classes.category__title}>
        <div className={classes.category__icon_box}>
          <MdSmartToy className={classes.category__icon} />
        </div>
        <span className={classes.category__name}>{category}</span>
      </div>
    </div>
  );
};

export default CategoryBar;
