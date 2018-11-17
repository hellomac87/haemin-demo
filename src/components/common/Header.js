import React from 'react';
import './Header.scss';

const Header = (props) => {
    const {user} = props;
    return (
        <div className="header">
            <h1>{user.shortAddress}</h1>
            <button className="address-search-btn">v</button>
        </div>
    );
};

export default Header;