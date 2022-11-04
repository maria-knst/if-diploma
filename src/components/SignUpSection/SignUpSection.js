import "./SignUpSection.scss";

import React from "react";

const SignUpSection = () => {
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
          <button>JOIN</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
