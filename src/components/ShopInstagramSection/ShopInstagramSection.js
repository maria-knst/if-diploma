import "./ShopInstagramSection.scss";
import arrow from "../../images/Arrow.svg";
import { SHOP_ICONS } from "../../utils/constants";

import React from "react";

const ShopInstagramSection = () => {
  return (
    <div className="shop_insta-section">
      <div className="container">
        <div className="shop_titles">
          <a href="#" className="shop_ref">SHOP INSTAGRAM</a>
          <a href="#" className="shop_ref">SHOP
              <img src={arrow} alt=">" className='shop_ref-icon' />
          </a>
        </div>
        <div className="shop-grid__container">
          {SHOP_ICONS.map((item, index) => (
            <div className={`shop-grid__container_elem grid_elem${index}`} key={item.id}>
              <img src={item.imageURL} alt="img" />
            </div>
          ))}
        </div>
          <a href="#" className="shop_last-ref">#MODNIKKY</a>
      </div>
    </div>
  );
};

export default ShopInstagramSection;
