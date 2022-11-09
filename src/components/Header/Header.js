import "./Header.scss";
import logo from "../../images/brand-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import shoppingBag from "../../images/shopping-cart-icon.svg";

import React, {useState} from "react";
import { Link } from "react-router-dom";
import like from "../../images/Like.svg";

const Header = ({ isDark }) => {

  const [searchValue, setSearchValue] = useState('ENTER SEARCH TERMS')
  const [activeSearch, setActiveSearch] = useState(false)

  const handleChange = (e) =>{
    e.preventDefault()
    setSearchValue(e.target.value)
  }

  const handleSearchOpenClick = () => {
    setActiveSearch(true);
  }

  const handleSearchCloseClick = ()=>{
    setActiveSearch(false);
  }

  return (
    <div className="header">
      <nav className="headerItem">
        <div className={`headerMenu ${isDark && 'headerMenu-dark'}`}></div>
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
          <Link className={`header-link ${isDark && "header-link_dark"}`} onClick={handleSearchOpenClick}>
            <svg className={`headerIcon headerIcon-search  ${isDark && 'headerIcon-dark'}`}>
              <use href={`${searchIcon}#searchLogo`} />
            </svg>
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
          <Link to='/basket' className={`header-link ${isDark && "header-link_dark"}`}>
            <span className="bagText mobileHidden ">
              BAG (<span>2</span>)
            </span>
            <svg className={`bagIcon headerIcon ${isDark && 'headerIcon-dark'}`}>
              <use href={`${shoppingBag}#bagIcon`} />
            </svg>
          </Link>
          <Link className={`header-link ${isDark && "header-link_dark"}`}>
            <svg className={`headerIcon headerIcon-like ${isDark && 'headerIcon-dark'}`}>
              <use href={`${like}#like_logo`} />
            </svg>
          </Link>
        </ul>

      </div>

      <div className={`${activeSearch ? 'header_modal-search_active' :  'header_modal-search'}`}>
        <div className="header_modal-close-block" onClick={handleSearchCloseClick}></div>
        <input type="text" placeholder='ENTER SEARCH TERMS' value={searchValue} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Header;
