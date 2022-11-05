import "./LogInSection.scss";

import React from "react";
import Button from "../Button/Button";
import BlackButton from "../BlackButton/BlackButton";

const LogInSection = ({ setAuthorize }) => {
  return (
    <div className="login_section">
      <div className="login_container">
        <div className='login_title'>
          <h4 className="login_inner-title">CREATE ACCOUNT</h4>
          <div className="login__close"></div>
        </div>
        <form>
          <input className='login_input' type='text' name='firstName' placeholder='First Name' required/>
          <input className='login_input' type='text' name='lastName' placeholder='Last Name' required/>
          <input className='login_input' type='email' name='email' placeholder='Email' required/>
          <input className='login_input' type='password' name='password' placeholder='Password' required/>
          <label className='login_checkbox-label' htmlFor="login_checkbox">
            <input type="checkbox" id='login_checkbox' />
            <div className="highload"></div>
            <span className='checkbox-span'>Let&apos;s get personal! We&apos;ll send you only the good stuff: <br />
            Exclusive early access to Sale, new arrivals and promotions. No nasties.</span>
          </label>
            <p>By signing up you agree to Terms of Service and Privacy Policy</p>
            <BlackButton>SIGN UP</BlackButton>
        </form>
        <a href="#">I HAVE AN ACCOUNT</a>
      </div>
    </div>
  );
};

export default LogInSection;
