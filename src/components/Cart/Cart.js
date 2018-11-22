import React, { Component } from 'react';
import classNames from 'classnames';
import './Cart.scss';
import CartItem from './CartItem';

class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartList : [
                {
                    id:1,
                    url: 'https://cdn.dominos.co.kr/admin/upload/goods/20180827_eMt877Eq.jpg',
                    menuName: '더블배럴 콤비네이션 피자',
                    price: 24000,
                    option : [],
                    quantity: 1
                },
                {
                    id: 2,
                    url: 'https://cdn.dominos.co.kr/admin/upload/goods/20180827_4idTw405.jpg',
                    menuName: '싱글배럴 콤비네이션 피자',
                    price: 23000,
                    option: [],
                    quantity: 2
                }
            ],
            totalPrice : 0,
            totalQuantity : 0,
        }
    }

    calcTotal = () => {
        const { cartList } = this.state;
        let totalPrice = 0;
        let totalQuantity = 0;

        for (const item of cartList){
            totalPrice += item.price * item.quantity;
            totalQuantity += item.quantity;
        }

        this.setState({
            totalPrice,
            totalQuantity 
        });
    }

    componentDidMount(){
        this.calcTotal();
    }

    
    render() {
        const { cartList, totalPrice, totalQuantity } = this.state;
        return (
            <div className={classNames('cart')}>
                <CartHeader/>
                <ul>
                    {
                        cartList.map(cartItem => {
                            return (
                                <CartItem cartItem={cartItem} key={cartItem.id}/>
                            )
                        })
                    }
                    
                </ul>
                <div className={classNames('total-price')}>
                    주문금액 : {totalPrice}
                </div>
                <button className={classNames('order-button')}>
                    {totalQuantity} 개 주문하기 {totalPrice}
                </button>
            </div>
        );
    }
}

const CartHeader = () => {
    return(
        <div className={classNames('cart-header')}>
            <button className={classNames('prev-btn')}>prev</button>
            <h1>장바구니</h1>
        </div>
    )
}

export default Cart;