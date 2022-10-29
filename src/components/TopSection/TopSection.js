import "./TopSection.scss";

import React from "react";
import Header from "../Header/Header";

import Button from "../Button/Button";

const TopSection = () => {
  const buttonColor = (window.screen.width < 600) ? '#000F08' : '#FFFFFF';

  return (
    <header
      className="top-section"
    >
      <Header />
      <div className="top-section__container">
        <div className="container">
          <h1>NEW  {<br className='top-section__title-separator'/>} COLLECTION</h1>
          <p className='top-section__text'>
            Our easiest chuck-on-and-go staples come with a serious style heritage {<br className='top-section__separator'/>}
            that’s liberating, sexy, comfy and supremely cool.
          </p>
          <Button text='SHOP NEW ARRIVALS' color={buttonColor}/>
        </div>
      </div>
    </header>
  );
};

export default TopSection;
