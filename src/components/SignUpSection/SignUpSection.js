import "./SignUpSection.scss";

import React from "react";
import {useNavigate} from "react-router";

const SignUpSection = () => {

  const navigate = useNavigate()

  const handleJoinClick = (e) => {
    e.preventDefault()
    navigate('/authorization');
  }

  return (
    <div className="sign-up__section">
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
    </div>
  );
};

export default SignUpSection;
