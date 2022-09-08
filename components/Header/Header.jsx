import React from "react";

import classes from "./Header.module.scss";

const Header = ({ primary, secondary }) => {
  const displayPrimary = primary.replace("-", " ");

  return (
    <header>
      <div className="container">
        <div className={classes.heading}>
          <h2 className={classes.heading__primary}>{displayPrimary}</h2>
          <span className={classes.heading__secondary}>/-{secondary}-/</span>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  primary: "Shopping",
  secondary: "Product Details",
};

export default Header;
