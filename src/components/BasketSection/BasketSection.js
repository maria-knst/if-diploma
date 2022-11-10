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

const BasketSection = ({ items }) => {

    const isAuthorize = useSelector(isAuthorizeSelector);
    const proccedMessage = useSelector(proccedMessageSelector)
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        return items.reduce((acc, innerItem) => (acc + Number(innerItem.price.value)), 0);
    }

    const handleRemoveClick = (e, id) => {
        e.preventDefault()
        dispatch(removeFromBasket(id))
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

                {items.map((item) => (
                    <div className="basket_element" key={item.id}>
                        <div className="basket_element-info">
                            <Link to={`/catalog/${item.id}`} className="basket-item_icon">
                                <img src={item.images[0]} alt="item icon" />
                            </Link>
                            <div className="basket-item_description">
                                <div className="basket-item_description-name">{item.name}</div>
                                <div className="basket-item_description-price">
                                    {item.price.currency} ${item.price.value}
                                </div>
                                <div className="basket-item_description-parameters">
                                    <div className="color-parameter">
                                        COLOR: {' '}
                                        <select name="COLOR">
                                            <option value="1">{item.color.name.toUpperCase()}</option>
                                        </select>
                                    </div>

                                    <div className="size-parameter">
                                        SIZE: {' '}
                                        <select name="SIZE">
                                            {getArrayOfSizes(item.availableSizes[0]).map(
                                                (innerItem, index) => (
                                                    <option key={index + 1} value={index + 1}>
                                                        {innerItem.toUpperCase()}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>

                                    <div className='quantity-parameter'>QUANTITY: {' '}
                                        <select name='QUANTITY'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="basket-elem__remove" onClick={(ev) => handleRemoveClick(ev, item.id)}>
                            <div className="basket-elem__remove-block"></div>
                            <p>REMOVE</p>
                        </div>
                    </div>
                ))}

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
