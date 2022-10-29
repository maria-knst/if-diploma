import "./TopSection.scss";

import React from "react";
import Header from "../Header/Header";

import backgroundImage from "../../images/Top-background.jpg";
import Button from "../Button/Button";

const TopSection = () => {
  return (
    <header
      className="top-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="container top-section__container">
        <h1>NEW COLLECTION</h1>
        <p className='top-section__text'>
          Our easiest chuck-on-and-go staples come with a serious style heritage {<br/>}
          that’s liberating, sexy, comfy and supremely cool.
        </p>
        <Button text='SHOP NEW ARRIVALS' color='#FFFFFF'/>
      </div>
    </header>
  );
};

export default TopSection;
