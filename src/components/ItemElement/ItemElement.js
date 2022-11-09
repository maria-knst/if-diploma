import React, { useState } from "react";
import "./ItemElement.scss";

import like from "../../images/Like.svg";
import { Link } from "react-router-dom";

const PlaceElement = ({ item }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <Link to={`/catalog/${item.id}`} className="item__element">
      <div className="image__container">
        <img src={item.images[0]} className="places__image" alt="home-img" />
        <svg
          className={`image_like ${liked && "image_like-clicked"}`}
          onClick={handleLikeClick}
        >
          <use href={`${like}#like_logo`} />
        </svg>
        <div className="item__add-layer">
          <button>ADD TO BAG</button>
        </div>
        <div className="item_discount">
          -{(100 - (3000 * 100) / item.price.value).toFixed(0)}%
        </div>
      </div>
      <div className="places__home-description">
        <p className="price__label">
          {item.price.currency} {item.price.value}
        </p>
        <p className="low-price__label">USD 3000</p>
      </div>
    </Link>
  );
};

export default PlaceElement;
