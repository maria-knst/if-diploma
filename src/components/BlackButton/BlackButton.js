import "./BlackButton.scss";

import React from "react";

const BlackButton = ({ children, onClick, type, classNames }) => {
  return (
    <button className={classNames} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default BlackButton;
