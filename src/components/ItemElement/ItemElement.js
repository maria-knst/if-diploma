import React from "react";
import "./ItemElement.scss";

import like from "../../images/Like.svg";

const PlaceElement = ({ item }) => {
  return (
    <div className="item__element">
      <div className="image__container">
        <img src={item.imageUrl} className="places__image" alt="home-img" />
        <img src={like} className="image_like" alt="Like" />
        <div className="item__add-layer">
          <button>ADD TO BAG</button>
        </div>
          <div className='item_discount'>-{(100 - (item.lowPrice * 100 / item.price)).toFixed(0)}%</div>
      </div>
      <div className="places__home-description">
        <p className="price__label">${item.price}</p>
        <p className="low-price__label">${item.lowPrice}</p>
      </div>
    </div>
  );
};

export default PlaceElement;
