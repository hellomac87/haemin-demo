import React, { Component } from 'react';
import classNames from 'classnames';
import './Categories.scss';

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: ['한식', '분식', '돈까스·회·일식', '치킨', '피자', '중국집', '족발·보쌈', '야식', '찜·탕', '도시락', '카페·디저트','패스트푸드','프랜차이즈','맛집랭킹']
        }
    }
    render() {
        const {lists} = this.state;
        return (
            <ul className={classNames('categories')}>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index} className={classNames('category-item')}>
                                <span className={classNames('category-item-name')}>{list}</span>
                            </li>
                        )
                })
                }
            </ul>
        );
    }
}

export default Categories;