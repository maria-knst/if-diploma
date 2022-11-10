import "./Header.scss";
import logo from "../../images/brand-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import shoppingBag from "../../images/shopping-cart-icon.svg";

import React, {useState} from "react";
import { Link } from "react-router-dom";
import like from "../../images/Like.svg";
import { isAuthorizeSelector } from "../../redux/ducks/authorization/authoriz_selectors";
import { basketDataLengthSelector } from "../../redux/ducks/basketAdditing/basket_selectors";
import {useDispatch, useSelector} from "react-redux";
import {setAuthorize} from "../../redux/ducks/authorization/authoriz_actions";
import {useNavigate} from "react-router";
import {generateSearchingString} from "../../redux/ducks/searchingString/searchingString_actions";

const Header = ({ isDark }) => {

  const [searchValue, setSearchValue] = useState('ENTER SEARCH TERMS')
  const [activeSearch, setActiveSearch] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorize = useSelector(isAuthorizeSelector);
  const basketLength = useSelector(basketDataLengthSelector);

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

  const handleAuthorizeClick = () => {
    if(isAuthorize){
      dispatch(setAuthorize(false));
      navigate('/')
    }else{
      navigate('/authorization')
    }
  }

  const handleKeyDown = (e) =>{
    if(e.code === 'Enter'){
      dispatch(generateSearchingString(e.target.value));
      console.log(e.target.value);
      e.target.value = '';
      setActiveSearch(false);
    }
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
          <li
              onClick={handleAuthorizeClick}
            className={`mobileHidden header-link ${
              isDark && "header-link_dark"
            }`}
          >
            <div className="header_sign-in">SIGN <span>{isAuthorize ? 'OUT' : 'IN'}</span></div>
          </li>
          <Link to='/basket' className={`header-link ${isDark && "header-link_dark"}`}>
            <span className="bagText mobileHidden ">
              BAG (<span>{basketLength}</span>)
            </span>
            <svg className={`bagIcon headerIcon ${isDark && 'headerIcon-dark'}`}>
              <use href={`${shoppingBag}#bagIcon`} />
            </svg>
          </Link>
          <Link to='/favorites' className={`header-link ${isDark && "header-link_dark"}`}>
            <svg className={`headerIcon headerIcon-like ${isDark && 'headerIcon-dark'}`}>
              <use href={`${like}#like_logo`} />
            </svg>
          </Link>
        </ul>

      </div>

      <div className={`${activeSearch ? 'header_modal-search_active' :  'header_modal-search'}`}>
        <div className="header_modal-close-block" onClick={handleSearchCloseClick}></div>
        <input type="text" placeholder='ENTER SEARCH TERMS' value={searchValue} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
};

export default Header;
