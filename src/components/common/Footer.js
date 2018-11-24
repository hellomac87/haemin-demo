import React, { Component } from 'react';
import classNames from 'classnames';

import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className={classNames('footer')}>
                <ul className="links">
                    <li>사업자정보확인</li>
                    <li>이용약관</li>
                    <li>전자금융거래 이용약관</li>
                    <li>개인정보 처리방침</li>
                </ul>
                <div className="corp">
                    <div className="head">
                        (사) Status 404
                    </div>
                    <div className="body">
                        Status 404는 통신판매중개자이며 통신판매의 당사자가 아납니다. <br/>
                        따라서 Status 404는 상품거래정보 및 거래에 대한 책임을 지지 않습니다.
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;