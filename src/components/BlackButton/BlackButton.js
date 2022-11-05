import './BlackButton.scss'

import React from 'react';

const BlackButton = ({ title, onClick }) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
};

export default BlackButton;