import React from "react";

import { FormContainer } from "./InputForm.styles";

const InputForm = ({ label, ...otherProps }) => {
  return (
    <FormContainer>
      {/* <label className="inputForm__label">{label}</label> */}
      <input className="inputForm__input" {...otherProps} />
    </FormContainer>
  );
};

export default InputForm;
