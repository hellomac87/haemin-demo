import React from 'react';
import './Header.scss';

const Header = (props) => {
    const { user, onMenuActive} = props;
    return (
        <div className="header">
            <button onClick={onMenuActive}>menu</button>
            <h1>{user.shortAddress}</h1>
            <button className="address-search-btn">v</button>
        </div>
    );
};

export default Header;