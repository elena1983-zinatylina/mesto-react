
import React from 'react';
import logo from '../images/';


const Header = () => {
    return (
        <header className="header">
            <img  className="header__logo" 
             src={logo}
             alt="Логотип сайта Место Россия." 
            />
        </header>
    );
}

export default Header;