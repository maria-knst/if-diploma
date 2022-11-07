import "./ItemAdditionalElem.scss";
import React, { useState } from "react";

const ItemAdditionalElem = ({ title, info, id }) => {
  const [isActive, setActive] = useState(false);

  const handleActiveClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="item_additional">
      <div className="addit-info__name" onClick={handleActiveClick}>
        <div
          className={`${
            isActive ? "addit-info__elem_active" : "addit-info__elem"
          }`}
        ></div>
        <p className="addit-info__title">{title}</p>
      </div>
      <p className={`${isActive ? "addit-info_active" : "addit-info"}`}>
        {info}
      </p>
    </div>
  );
};

export default ItemAdditionalElem;
