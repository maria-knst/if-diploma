import "./SignUpSection.scss";

import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {emailPosted} from "../../redux/ducks/singUpForUpdates/updates_actions";

import { messageSelector } from "../../redux/ducks/singUpForUpdates/updates_selectors";

const SignUpSection = () => {

  const dispatch = useDispatch()
  const answerMessage = useSelector(messageSelector)

  const handleJoinClick = (e) => {
    e.preventDefault()
    dispatch(emailPosted(e.target.previousElementSibling.value))
  }

  const getPrettierMessage = (mes) => {
    const res = JSON.parse(mes);
    return res.message;
  }

  return (
    <div className="sign-up__section">
      {answerMessage.length ?
          <div className="sign-up_block">
            <h3 className="sign-up__title">{getPrettierMessage(answerMessage)}</h3>
          </div>
          :
          <div className="sign-up_block">
            <h3 className="sign-up__title">SIGN UP FOR UPDATES</h3>
            <span className="sign-up__span">
          Sign up for exclusive early sale access and tailored new arrivals.
        </span>
            <div className="sign-up__input">
              <input
                  id="email_input"
                  type="email"
                  placeholder="Your email address"
              />
              <button onClick={handleJoinClick}>JOIN</button>
            </div>
          </div>
      }

    </div>
  );
};

export default SignUpSection;
