import React from "react";

import { HeaderContainer } from "./Header.styles";

const Header = ({ primary, secondary }) => {
  const displayPrimary = primary.replace("-", " ");

  return (
    <HeaderContainer>
      <div className="container">
        <div className="heading">
          <h2 className="heading__primary">{displayPrimary}</h2>
          <span className="heading__secondary">{`/-${secondary}-/`}</span>
        </div>
      </div>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  primary: "Shopping",
  secondary: "Product Details",
};

export default Header;
