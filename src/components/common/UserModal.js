import React, { Component } from 'react';
import {withUser} from '../../contexts/UserContext';
import './UserModal.scss';
import classNames from 'classnames';

class UserModal extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            pointList: [
                {
                    id: 1,
                    name: '포인트',
                    active:false,
                    count: null
                },
                {
                    id: 2,
                    name: '쿠폰함',
                    active:false,
                    count: null
                },
                {
                    id: 3,
                    name: '장바구니',
                    active:false,
                    count: null
                },
                {
                    id: 4,
                    name: '바로결재내역',
                    active:false,
                    count: null
                },
                {
                    id: 5,
                    name: '단골매장',
                    active:false,
                    count: null
                },
                {
                    id: 6,
                    name: '리뷰관리',
                    active:false,
                    count: null
                }
            ]
        }
    }
    
    render() {
        const {pointList} = this.state;
        const { handleMenuActive, menuActive, user } = this.props;
        return (
            <div className={classNames('user-modal', { 'active': menuActive })}>
                menu
                <button onClick={handleMenuActive}>close</button>
                <div className={classNames('user-modal-header')}>
                    <div className="avartar">
                        avartar
                    </div>
                    <div className="display-name">
                        {user.displayName}
                    </div>
                    <div className="name">
                        {user.username}
                    </div>
                </div>
                <ul className={classNames('user-modal-point-list')}>
                    {
                        pointList.map(p => <li className={classNames('user-modal-point-item')} key={p.id}>{p.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default withUser(UserModal);