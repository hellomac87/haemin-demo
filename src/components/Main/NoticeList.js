import React, { Component } from 'react';
import classNames from 'classnames';
class NoticeList extends Component {
    render() {
        return (
            <ul className={classNames('notice-list')}>
                <li className={classNames('notice-list-item')}>
                    <span className="head">공지</span>
                    <span className="body">
                        배달의 민족 고객센터 상담시스템 점검 안내 (11/28(수) 새벽....)
                    </span>
                </li>
                <li className={classNames('notice-list-item')}>
                    <span className="head">이벤트</span>
                    <span className="body">
                        배민후라이드데이
                    </span>
                </li>
                <li className={classNames('notice-list-item')}>
                    <span className="head">발표</span>
                    <span className="body">
                        [당첨자공지] 세계 치킨의 날 기념 치킨푸드파이터 대회 이벤트 당첨자 공지
                    </span>
                </li>
            </ul>
        );
    }
}

export default NoticeList;