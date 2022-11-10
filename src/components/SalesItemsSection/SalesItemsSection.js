import "./SalesItemsSection.scss";

import React, { useEffect} from "react";
import Title from "../Title/Title";
import ItemsSliderContainer from "../ItemsSliderContainer/ItemsSliderContainer";
import {useDispatch, useSelector} from "react-redux";
import {availableItemsSelector} from "../../redux/ducks/search/search_selectors";
import {searchDataRequested} from "../../redux/ducks/search/search_actions";

const SalesItemsSection = () => {
  const itemsArray = useSelector(availableItemsSelector);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(searchDataRequested())
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
