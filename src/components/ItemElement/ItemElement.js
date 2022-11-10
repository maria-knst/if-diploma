import React, { useState } from "react";
import "./ItemElement.scss";

import like from "../../images/Like.svg";
import { Link } from "react-router-dom";
import {addToBasket} from "../../redux/ducks/basketAdditing/basket_actions";
import {useDispatch} from "react-redux";

const PlaceElement = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.innerText = 'ADDED';
    dispatch(addToBasket(item));
  }

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
          <button onClick={handleAddClick}>ADD TO BAG</button>
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
