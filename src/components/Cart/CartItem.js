import React from 'react';
import classNames from 'classnames';

const CartItem = (props) => {
    const { cartItem } = props;
    return (
        <li className={classNames('cart-item')}>
            <div className={classNames('img')}>
                <img src={cartItem.url} alt={cartItem.menuName} />
            </div>
            
            <div>
                {cartItem.menuName}
            </div>
            
            <div>
                {cartItem.price}
            </div>
            
            <div>
                {cartItem.quantity}
            </div>
            
            <button>삭제</button>
        </li>
    );
};

export default CartItem;