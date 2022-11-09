import React, { useEffect, useState } from "react";
import "./ItemPage.scss";
import Header from "../Header/Header";
import SignUpSection from "../SignUpSection/SignUpSection";
import FooterSection from "../FooterSection/FooterSection";
import { useParams } from "react-router";

import { BASE_PATH, fake_info } from "../../utils/constants";
import BlackButton from "../BlackButton/BlackButton";

import like from "../../images/Like.svg";
import ItemAdditionalElem from "../ItemAdditionalElem/ItemAdditionalElem";
import {getArrayOfSizes} from "../../utils/functions";

const initialItem = {
  id: "5cd9a543-e4a3-4aa7-afa7-a78cf716ad9s",
  type: "Dresses",
  name: "SATIN EFFECT TUNIC DRESS",
  price: {
    currency: "USD",
    value: "4990",
  },
  color: {
    name: "Orange",
    hex: "#ED7C00",
  },
  availableSizes: ["XS, S, M, L, XL, XXL"],
  description:
    "SLEEVELESS TUNIC DRESS WITH V-NECKLINE AND WIDE ARM HOLES. FRONT PLEATS. ASYMMETRIC HEM.",
  images: [
    "https://res.cloudinary.com/intellectfox/image/upload/v1619551443/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_1.jpg",
    "https://res.cloudinary.com/intellectfox/image/upload/v1619551814/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_2.jpg",
  ],
};

const ItemPage = ({ isAuthorize }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(initialItem);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLiked(!liked);
  };

  const getElementByID = async (id) => {
    const request = await fetch(BASE_PATH);
    const result = await request.json();
    setItem(result.find((item) => item.id === id));
  };



  useEffect(() => {
    getElementByID(itemId);
  }, []);

  return (
    <>
      <Header isDark={true} />
      <div className="item-page__section">
        <div className="item__container">
          <div className="item_icons">
            <img src={item.images[0]} alt="icon" />
            <img
              className="item_icons-second"
              src={item.images[1]}
              alt="icon"
            />
          </div>
          <div className="item_description">
            <h4 className="item__name">{item.name}</h4>
            <div className="item__price">
              {item.price.currency} {item.price.value}
            </div>
            <button className="item_preorder">PRE-ORDER</button>
            <div className="item-color__container">
              <h5>COLOR</h5>
              <div>
                <div
                  className="item-color_block"
                  title={item.color.name}
                  style={{ background: `${item.color.hex}` }}
                ></div>
              </div>
            </div>
            <div className="item-size__container">
              <h5>SIZE</h5>
              <div>
                {getArrayOfSizes(item.availableSizes[0]).map(
                  (sizeElem, index) => (
                    <label
                      className="item-size__checkbox-label"
                      htmlFor={`item-size__checkbox${index}`}
                      key={index}
                    >
                      <input
                        className="item-size__checkbox"
                        name="sizes"
                        id={`item-size__checkbox${index}`}
                        type="radio"
                      />
                      <span>{sizeElem}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div className="item_buttons">
              <BlackButton classNames="item_add">ADD TO BAG</BlackButton>
              <BlackButton classNames="item_like">
                <svg
                  className={`item_like-svg ${
                    liked && "item_like-svg_clicked"
                  }`}
                  onClick={handleLikeClick}
                >
                  <use href={`${like}#like_logo`} />
                </svg>
              </BlackButton>
            </div>

            <div className="item_additional-info">
              <ItemAdditionalElem
                title="PRODUCT DESCRIPTION"
                info={fake_info}
                id={1}
              />
              <ItemAdditionalElem
                title="SHIPPING & RETURNS"
                info={fake_info}
                id={2}
              />
              <ItemAdditionalElem
                title="FABRIC COMPOSITION"
                info={fake_info}
                id={3}
              />
            </div>
          </div>
        </div>
      </div>
      {!isAuthorize && <SignUpSection />}
      <FooterSection />
    </>
  );
};

export default ItemPage;
