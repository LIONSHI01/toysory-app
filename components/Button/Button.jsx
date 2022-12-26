import React from "react";

import { ButtonWrapper } from "./Button.styles";

const Button = ({ children, color, height, width, ...otherProps }) => {
  return (
    <ButtonWrapper color={color} height={height} width={width} {...otherProps}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
