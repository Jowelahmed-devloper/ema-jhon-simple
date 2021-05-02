import React from 'react';
import logo from '..//../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <a href="/home"><img src={logo} alt="" /></a>
            <nav>
                <li>
                    <a href="/shop">Shop</a>
                    <a href="/reviews">Review</a>
                    <a href="/inventories">Manage Inventory</a>
                </li>
            </nav>
        </div>
    );
};

export default Header;