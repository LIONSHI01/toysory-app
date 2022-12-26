import React from "react";
import { ButtonWrapper } from "./IconButton.styles";
const IconButton = ({ children, size, ...otherProps }) => {
  return (
    <ButtonWrapper size={size} {...otherProps}>
      {children}
    </ButtonWrapper>
  );
};

export default IconButton;
