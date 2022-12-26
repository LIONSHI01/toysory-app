import React from "react";
import Link from "next/link";

// import classes from "./Sidebar.module.scss";
import { SidebarContainer } from "./Sidebar.styles";

const Sidebar = ({ categories }) => {
  return (
    <SidebarContainer>
      <h3 className="sidebar__heading">Toy Stories</h3>
      {categories?.map((category, i) => (
        <Link key={i} href={`/category/${category}`}>
          <div className="sidebar__category">
            <h4>{category.replace("-", " ")}</h4>
          </div>
        </Link>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
