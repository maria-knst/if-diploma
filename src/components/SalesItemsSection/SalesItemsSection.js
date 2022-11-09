import "./SalesItemsSection.scss";

import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ItemsSliderContainer from "../ItemsSliderContainer/ItemsSliderContainer";
import { CLOTHES_ITEMS, BASE_PATH } from "../../utils/constants";

const SalesItemsSection = () => {
  const [itemsArray, setItemsArray] = useState([]);

  const getItems = async () => {
    const res = await fetch(BASE_PATH);
    const result = await res.json();
    setItemsArray(result);
  };

  useEffect(() => {
    getItems();
  }, []);


  return (
    <div className="sales-section">
      <div className="container">
        <Title>
          #MODNIKKY<b>_Sale</b>
        </Title>
        <ItemsSliderContainer elements={itemsArray} />
      </div>
    </div>
  );
};

export default SalesItemsSection;
