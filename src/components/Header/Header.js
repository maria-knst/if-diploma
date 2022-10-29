import "./Header.scss";
import logo from "../../images/brand-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import wishlistIcon from "../../images/wishlist-icon.svg";
import shoppingBag from '../../images/shopping-cart-icon.svg'

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="headerItem">
        <div className="headerMenu"></div>
        <ul className="headerList headerList__nav">
          <li>NEW ARRIVALS</li>
          <li>SHOP</li>
          <li>COLLECTIONS</li>
        </ul>
      </nav>
      <div className="headerItem">
        <img className='headerItem__logo' src={logo} alt="logo" />
      </div>
      <div className="headerItem">
        <ul className="headerList">
          <li>
            <img className='headerIcon' src={searchIcon} alt="search" />
            <span className='mobileHidden'>SEARCH</span>
          </li>
          <li className='mobileHidden'><span>SIGN IN</span></li>
          <li>
            <span className='bagText mobileHidden'>BAG (<span>2</span>)</span>
              <img className='bagIcon headerIcon' src={shoppingBag} alt="bag"/>
          </li>
          <li>
            <img className='headerIcon' src={wishlistIcon} alt="wishList" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
