import "./FooterSection.scss";

import React from "react";
import FooterBlock from "../FooterBlock/FooterBlock";
import { FOOTER_SERVICE, FOOTER_INFO } from "../../utils/utils";

import facebookLogo from "../../images/facebok-logo.svg";
import instagramLogo from "../../images/instagram-logo.svg";
import odnoclassLogo from "../../images/odnoclass-logo.svg";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <FooterBlock title="CUSTOMER SERVICE">
          {FOOTER_SERVICE.map((item, index) => (
            <a href={item.link} key={index}>
              {item.title}
            </a>
          ))}
        </FooterBlock>
        <FooterBlock title="INFO">
          {FOOTER_INFO.map((item, index) => (
            <a href={item.link} key={index}>
              {item.title}
            </a>
          ))}
        </FooterBlock>
        <FooterBlock title="FOLLOW US">
          <a href="#">
            <img src={facebookLogo} alt="FACEBOOK" />
            <span>FACEBOOK</span>
          </a>
          <a href="#">
            <img src={odnoclassLogo} alt="ODNOKLASSNIKI" />
            <span>ODNOKLASSNIKI</span>
          </a>
          <a href="#">
            <img src={instagramLogo} alt="INSTAGRAM" />
            <span>INSTAGRAM</span>
          </a>
        </FooterBlock>
        <FooterBlock title="CONTACT US">
          <a href="mailto:hello@modnikky.com">hello@modnikky.com</a>
          <a href="tel:+7 910 832 26XX">+7 910 832 26XX</a>
          <a href="#">Visit us at Shalalaeva 23, Bologoe, Russia</a>
        </FooterBlock>
      </div>
    </footer>
  );
};

export default FooterSection;
