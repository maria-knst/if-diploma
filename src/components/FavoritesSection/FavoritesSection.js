import "./FavoritesSection.scss";

import React from "react";
import Header from "../Header/Header";
import SignUpSection from "../SignUpSection/SignUpSection";
import FooterSection from "../FooterSection/FooterSection";
import { useSelector } from "react-redux";
import { isAuthorizeSelector } from "../../redux/ducks/authorization/authoriz_selectors";
import BasketContainer from "../BasketContainer/BasketContainer";

const FavoritesSection = ({ items }) => {
  const isAuthorize = useSelector(isAuthorizeSelector);

  return (
    <div className="favourites_section">
      <Header isDark={true} />
        <div className='favourites_container'>
            <BasketContainer items={items} favourites={true}/>
        </div>
      {!isAuthorize && <SignUpSection />}
      <FooterSection />
    </div>
  );
};

export default FavoritesSection;
