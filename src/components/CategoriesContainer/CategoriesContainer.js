import "./CategoriesContainer.scss";
import { CATEGORIES } from "../../utils/constants";

import React, {useState} from "react";
import {useSelector} from "react-redux";
import { availableItemsSelector } from "../../redux/ducks/search/search_selectors";
import FilteredItemsSection from "../FilteredItemsSection/FilteredItemsSection";

const CategoriesContainer = () => {

  const itemsArray = useSelector(availableItemsSelector)
  const [filteredItems, setFilteredItems] = useState([])


  const handleCategoryClick = (e) => {
    e.preventDefault()
    setFilteredItems(itemsArray.filter((innerItem) => innerItem.type === e.target.innerText));
  }


  return (
      <>
    <div className="categories-container">
      {CATEGORIES.map((item, index) => (
        <div className="categories-container__element" key={index} onClick={handleCategoryClick}>
          <img
            className="categories-element__icon"
            src={item.icon}
            alt={item.name}
          />
          <span className="categories-element__text">{item.name}</span>
        </div>
      ))}
    </div>
        {!!filteredItems.length && <FilteredItemsSection items={filteredItems}/>}
      </>
  );
};

export default CategoriesContainer;
