import "./BasketContainer.scss";

import React from "react";
import { Link } from "react-router-dom";
import { getArrayOfSizes } from "../../utils/functions";
import {
  addToBasket,
  removeFromBasket,
} from "../../redux/ducks/basketAdditing/basket_actions";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/ducks/favouritesAdditing/favourites_actions";
import { useDispatch } from "react-redux";
import BlackButton from "../BlackButton/BlackButton";

const BasketContainer = ({ items, favourites }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = (e, id) => {
    e.preventDefault();
    if (favourites) {
      dispatch(removeFromFavourites(id));
    } else {
      dispatch(removeFromBasket(id));
    }
  };

  const handleAddClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToBasket(item));
  };

  return (
    <>
      {items.map((item) => (
        <div className="basket_element" key={item.id}>
          <div className="basket_element-info">
            <Link to={`/catalog/${item.id}`} className="basket-item_icon">
              <img src={item.images[0]} alt="item icon" />
            </Link>
            <div className="basket-item_description">
              <div className="basket-item_description-name">{item.name}</div>
              <div className="basket-item_description-price">
                {item.price.currency} ${item.price.value}
              </div>
              <div className="basket-item_description-parameters">
                <div className="color-parameter">
                  COLOR:{" "}
                  <select name="COLOR">
                    <option value="1">{item.color.name.toUpperCase()}</option>
                  </select>
                </div>

                <div className="size-parameter">
                  SIZE:{" "}
                  <select name="SIZE">
                    {getArrayOfSizes(item.availableSizes[0]).map(
                      (innerItem, index) => (
                        <option key={index + 1} value={index + 1}>
                          {innerItem.toUpperCase()}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div className="quantity-parameter">
                  QUANTITY:{" "}
                  <select name="QUANTITY">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div
            className="basket-elem__remove"
            onClick={(ev) => handleRemoveClick(ev, item.id)}
          >
            {favourites && (
              <BlackButton
                classNames="basket-elem__add"
                onClick={(e) => handleAddClick(e, item)}
              >
                ADD TO BAG
              </BlackButton>
            )}
            <>
              <div className="basket-elem__remove-block"></div>
              <p>REMOVE</p>
            </>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketContainer;
