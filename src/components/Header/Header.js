import "./Header.scss";
import logo from "../../images/brand-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import shoppingBag from "../../images/shopping-cart-icon.svg";

import React from "react";
import { Link } from "react-router-dom";
import like from "../../images/Like.svg";

const Header = ({ isDark }) => {
  return (
    <div className="header">
      <nav className="headerItem">
        <div className="headerMenu"></div>
        <ul className="headerList headerList__nav">
          <li className={`${isDark && "li-dark"}`}>NEW ARRIVALS</li>
          <li className={`${isDark && "li-dark"}`}>SHOP</li>
          <li className={`${isDark && "li-dark"}`}>COLLECTIONS</li>
        </ul>
      </nav>

      <Link to="/" className="headerItem headerItem-logo">
        <svg
          className={`headerItem__logo ${isDark && "headerItem__logo-dark"}`}
        >
          <use href={`${logo}#main-logo`} />
        </svg>
      </Link>

      <div className={`headerItem`}>
        <ul className="headerList">
          <Link className={`header-link ${isDark && "header-link_dark"}`}>
            <img className="headerIcon" src={searchIcon} alt="search" />
            <span className="mobileHidden">SEARCH</span>
          </Link>
          <Link
            to="/authorization"
            className={`mobileHidden header-link ${
              isDark && "header-link_dark"
            }`}
          >
            <div className="header_sign-in">SIGN IN</div>
          </Link>
          <Link className={`header-link ${isDark && "header-link_dark"}`}>
            <span className="bagText mobileHidden ">
              BAG (<span>2</span>)
            </span>
            <img className="bagIcon headerIcon" src={shoppingBag} alt="bag" />
          </Link>
          <Link className={`header-link ${isDark && "header-link_dark"}`}>
            <svg className="headerIcon headerIcon-like">
              <use href={`${like}#like_logo`} />
            </svg>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
