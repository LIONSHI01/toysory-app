import React from "react";

const InputForm = ({ label, ...otherProps }) => {
  return (
    <div className="inputForm">
      {/* <label className="inputForm__label">{label}</label> */}
      <input className="inputForm__input" {...otherProps} />
    </div>
  );
};

export default InputForm;
