import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo.png';

const Header = (): JSX.Element => {
    return (
        <div className="Header">
            <div className="Header__Logo">
                <img src={logo} alt="Logo" id="logo" />
            </div>
            <div className="Header__Button">
                <button id="language-button" className="red-button">العربية</button>
            </div>
        </div>
    )
}

export default Header;
