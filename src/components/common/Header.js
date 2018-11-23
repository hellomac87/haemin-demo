import React from 'react';
import {withUser} from '../../contexts/UserContext';
import './Header.scss';

const Header = (props) => {
    const { user, handleMenuActive} = props;
    console.log(props);
    return (
        <div className="header">
            <button onClick={handleMenuActive}>menu</button>
            <h1>{user.address}</h1>
            <button className="address-search-btn">v</button>
        </div>
    );
};

export default withUser(Header);