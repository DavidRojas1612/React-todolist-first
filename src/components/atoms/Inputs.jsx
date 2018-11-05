import React from "react";

const Input = ({ onKeyDown, placeholder, type, id }) => (
  <input id={id} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
);

export default Input;
