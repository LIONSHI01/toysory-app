import React from "react";
import Link from "next/link";

import classes from "./Sidebar.module.scss";

const Sidebar = ({ categories }) => {
  // const displayCategory = categories?.map((category) =>
  //   category.replace("-", " ")
  // );

  return (
    <aside className={classes.sidebar}>
      <h3 className={classes.sidebar__heading}>Toy Stories</h3>
      {categories?.map((category, i) => (
        <Link key={i} href={`/category/${category}`}>
          <div className={classes.sidebar__category}>
            <h4>{category.replace("-", " ")}</h4>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
