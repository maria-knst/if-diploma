import './FooterBlock.scss'

import React, {useState} from 'react';

const FooterBlock = ({ title, children }) => {

    const [isActive, setActive] = useState(false)

    const handleClick = () => {
        setActive(!isActive);
    }

    return (
        <div className='footerBlock'>
            <div className="footerTitle" onClick={handleClick}><div className={`${isActive ? 'footerPlus_active' : 'footerPlus'}`}></div>{title}</div>
            <ul className={`footerList ${isActive && 'footerList_active'}`}>
                {children}
            </ul>
        </div>
    );
};

export default FooterBlock;