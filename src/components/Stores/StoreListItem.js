import React from 'react';
import './StoreListItem.scss';

const StoreListItem = (props) => {
    const { list } = props;
    return (
        <li className="store-list-item">
            <div className="img">
                <img src={list.mainUrl} alt={list.title} />
            </div>
            <div className="info-wrap">
                <div className="title">{list.title}</div>
                <div className="info">
                    <div className="star">{list.star}</div>
                    <div className="reviews">{list.reviews}</div>
                    <div className="owners">{list.ownerReply}</div>
                </div>
                <div className="menu">{list.menu[0]}, {list.menu[1]}</div>
            </div>
            
            
            
        </li>
    )
}
export default StoreListItem;