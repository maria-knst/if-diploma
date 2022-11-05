import React from "react";

import "./Button.scss";

const Button = ({ text }) => {


  return (
    <button className="myButton">
      {text}
    </button>
  );
};

export default Button;
