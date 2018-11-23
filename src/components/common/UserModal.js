import React, { Component } from 'react';
import {withUser} from 'contexts/UserContext';
import './UserModal.scss';
import classNames from 'classnames';

const menuList = ['공지사항', '이벤트', '광고문의', '1:1 문의하기', '환경설정'];

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
                    count: 2
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
                        pointList.map(p => (
                            <li className={classNames('user-modal-point-item')} key={p.id}>
                                {p.name}
                                <span className="count">{p.count}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className={classNames('user-modal-banner')}>
                    배달의 민족 안심하고 이용하세요 <br/>
                    고객 안심 센터
                </div>
                <ul className={classNames('user-modal-menu')}>
                    {
                        menuList.map(m => (
                            <li className={classNames('user-modal-menu-item')} key={m}>{m}</li>
                        ))
                    }
                </ul>
                <div className="call-center">
                    배달의 민족 콜센터 <br/>
                    1644-0000
                </div>
            </div>
        );
    }
}

export default withUser(UserModal);