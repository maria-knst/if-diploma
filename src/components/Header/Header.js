import "./Header.scss";
import logo from "../../images/brand-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import wishlistIcon from "../../images/wishlist-icon.svg";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className='headerItem'>
        <ul className="headerList">
          <li>NEW ARRIVALS</li>
          <li>SHOP</li>
          <li>COLLECTIONS</li>
        </ul>
      </nav>
      <div className='headerItem'>
        <img src={logo} alt="logo" />
      </div>
      <div className='headerItem'>
        <ul className="headerList">
          <li>
            <img src={searchIcon} alt="search" />
            SEARCH
          </li>
          <li>SIGN IN</li>
          <li>
            BAG (<span>2</span>)
          </li>
          <li>
            <img src={wishlistIcon} alt="wishList" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
