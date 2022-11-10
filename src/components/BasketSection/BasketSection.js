import "./BasketSection.scss";

import React from "react";
import Header from "../Header/Header";
import FooterSection from "../FooterSection/FooterSection";
import SignUpSection from "../SignUpSection/SignUpSection";
import {getArrayOfSizes} from "../../utils/functions";
import BlackButton from "../BlackButton/BlackButton";

import maestro from '../../images/maestro-logo.svg'
import visa from '../../images/visa-logo.svg'

import { isAuthorizeSelector } from "../../redux/ducks/authorization/authoriz_selectors";
import {useDispatch, useSelector} from "react-redux";
import {removeFromBasket} from "../../redux/ducks/basketAdditing/basket_actions";
import {Link} from "react-router-dom";
import {basketPosted} from "../../redux/ducks/proccedBasket/procced_actions";
import {proccedMessageSelector} from "../../redux/ducks/proccedBasket/procced_selectors";
import BasketContainer from "../BasketContainer/BasketContainer";

const BasketSection = ({ items }) => {

    const isAuthorize = useSelector(isAuthorizeSelector);
    const proccedMessage = useSelector(proccedMessageSelector)
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        return items.reduce((acc, innerItem) => (acc + Number(innerItem.price.value)), 0);
    }


    const handleProccedClick = (e) => {
        e.preventDefault()
        const resArray = []
        for (const it of items){
            resArray.push(it.id)
        }
        dispatch(basketPosted(resArray))
    }

    const getPrettierMessage = (mes) => {
        const res = JSON.parse(mes);
        return res.message;
    }

  return (
    <div className="basket-section">
      <Header isDark={true} />

        { proccedMessage.length ?
            <div className="basket_container">
                <div className="basket__title">
                    <h6>{getPrettierMessage(proccedMessage)}</h6>
                </div>
            </div>
            :
            <div className="basket_container">
                <div className="basket__title">
                    <h6>BAG</h6>
                    <p>
                        <span>{items.length}</span> items
                    </p>
                </div>

                <BasketContainer items={items}/>

                <div className='basket_payment'>
                    <h3>Total USD ${getTotalPrice().toFixed(2)}</h3>
                    <BlackButton onClick={handleProccedClick}>PROCEED TO CHECKOUT</BlackButton>
                    <div className='type_of_payment'>
                        <div><img src={maestro} alt="Maestro"/></div>
                        <div><img src={visa} alt="Visa"/></div>
                    </div>
                </div>
            </div>
        }
      {!isAuthorize && <SignUpSection />}
      <FooterSection />
    </div>
  );
};

export default BasketSection;
