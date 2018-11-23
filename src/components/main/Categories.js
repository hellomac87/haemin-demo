import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import './Categories.scss';

import hansikSvg from 'svg/ca-hansik.svg';
import bunsikSvg from 'svg/ca-bunsik.svg';
import ilsikSvg from 'svg/ca-ilsik.svg';
import chickenSvg from 'svg/ca-chicken.svg';
import pizzaSvg from 'svg/ca-pizza.svg';
import chineseSvg from 'svg/ca-chinese.svg';
import zokbalSvg from 'svg/ca-zokbal.svg';
import yasikSvg from 'svg/ca-yasik.svg';
import zzigeaSvg from 'svg/ca-zzigea.svg';
import dosirakSvg from 'svg/ca-dosirak.svg';
import desertSvg from 'svg/ca-desert.svg';
import fastfoodSvg from 'svg/ca-fastfood.svg';
import franchiseSvg from 'svg/ca-franchise.svg';
import matzipSvg from 'svg/ca-matzip.svg';

// FIXME :: 위와같이 img, 혹은 svg 파일을 그대로 임포트해서 사용해야 할지, 다른 방식은 없는지 고민해봐야함

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    name: '한식',
                    img: hansikSvg
                },
                {
                    name: '분식',
                    img: bunsikSvg
                },
                {
                    name: '돈까스·회·일식',
                    img: ilsikSvg
                },
                {
                    name: '치킨',
                    img: pizzaSvg
                },
                {
                    name: '피자',
                    img: chickenSvg
                },
                {
                    name: '중국집',
                    img: chineseSvg
                },
                {
                    name: '족발·보쌈',
                    img: zokbalSvg
                },
                {
                    name: '야식',
                    img: yasikSvg
                },
                {
                    name: '찜·탕',
                    img: zzigeaSvg
                },
                {
                    name: '도시락',
                    img: dosirakSvg
                },
                {
                    name: '카페·디저트',
                    img: desertSvg
                },
                {
                    name: '패스트푸드',
                    img: fastfoodSvg
                },
                {
                    name: '프랜차이즈',
                    img: franchiseSvg
                },
                {
                    name: '맛집랭킹',
                    img: matzipSvg
                },
            ]
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
                                <Link to="/stores">
                                    <img src={list.img} alt="icon" />
                                    <span  className={classNames('category-item-name')}>
                                        {list.name}
                                    </span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Categories;