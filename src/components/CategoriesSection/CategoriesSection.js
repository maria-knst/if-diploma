import './CategoriesSection.scss'

import React from 'react';
import Title from "../Title/Title";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";

const CategoriesSection = () => {
    return (
        <div className='container'>
            <Title>Shop by the <b>Category</b></Title>
            <CategoriesContainer />
        </div>
    );
};

export default CategoriesSection;