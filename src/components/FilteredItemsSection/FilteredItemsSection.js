import "./FilteredItemsSection.scss";

import React, { useState } from "react";
import ItemElement from "../ItemElement/ItemElement";
import Button from "../Button/Button";
import Title from "../Title/Title";

const FilteredItemsSection = ({ items }) => {
  const [showingAmount, setShowingAmount] = useState(8);

  const getPartOfItems = () => {
    return items.slice(0, showingAmount);
  };

  const handleMoreClick = (e) => {
    e.preventDefault();
    setShowingAmount(showingAmount + 8);
  };

  return (
    <div className="filtered-items_section">
      {(items.length === 0) ?
          <div className='filtered-items_empty'>
            {`No products found`}
          </div>
          :
          <>
            <Title>{items[0].type}</Title>
            <div className="filtered-items_container">
              {getPartOfItems(items).map((innerItem, index) => (
                  <ItemElement item={innerItem} key={`${innerItem.id}index`} />
              ))}
            </div>

            {items.length > 8 && (
                <div className="button_container" onClick={handleMoreClick}>
                  <Button text="Show more" isDark={true} />
                </div>
            )}
          </>
      }

    </div>
  );
};

export default FilteredItemsSection;
