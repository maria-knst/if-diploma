import "./BlackButton.scss";

import React from "react";

const BlackButton = ({ children, onClick, classNames }) => {
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default BlackButton;
