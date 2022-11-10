import React from "react";

import "./Button.scss";

const Button = ({ text, isDark }) => {
  return <button className={`myButton ${isDark && 'myButton-dark'}`}>{text}</button>;
};

export default Button;
