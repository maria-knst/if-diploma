import "./SalesItemsSection.scss";

import React from "react";
import Title from "../Title/Title";
import ItemsSliderContainer from "../ItemsSliderContainer/ItemsSliderContainer";
import { CLOTHES_ITEMS } from "../../utils/utils";

const SalesItemsSection = () => {
  return (
    <div className='sales-section'>
      <div className="container">
        <Title>
          #MODNIKKY<b>_Sale</b>
        </Title>
        <ItemsSliderContainer elements={CLOTHES_ITEMS} />
      </div>
    </div>
  );
};

export default SalesItemsSection;
