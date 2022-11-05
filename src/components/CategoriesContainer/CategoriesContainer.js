import "./CategoriesContainer.scss";
import { CATEGORIES } from "../../utils/constants";

import React from "react";

const CategoriesContainer = () => {
  return (
    <div className="categories-container">
      {CATEGORIES.map((item, index) => (
        <div className="categories-container__element" key={index}>
          <img
            className="categories-element__icon"
            src={item.icon}
            alt={item.name}
          />
          <span className="categories-element__text">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
