import React from "react";
import "./Title.scss";

const Title = ({ children }) => {
  return (
    <div className="title">
      <h4 className="title-text">{children}</h4>
    </div>
  );
};

export default Title;
