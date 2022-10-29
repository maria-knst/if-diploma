import React from 'react';

import './Button.scss'

const Button = ({text, color}) => {

    const divStyle = {
        color: `${color}`,
        border: `2px solid ${color}`,
    };


    return (
        <button className='myButton' style={divStyle}>
            {text}
        </button>
    );
};

export default Button;