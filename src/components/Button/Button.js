import React from "react";

import "./Button.scss";

const Button = ({ text, color }) => {
  const borderWidth = window.screen.width < 600 ? 1 : 2;

  const divStyle = {
    color: `${color}`,
    border: `${borderWidth}px solid ${color}`,
  };

  return (
    <button className="myButton" style={divStyle}>
      {text}
    </button>
  );
};

export default Button;
