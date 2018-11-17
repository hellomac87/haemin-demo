import React, { Component } from 'react';
import StoresHeader from './StoresHeader';
import './Stores.scss';

class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['한식', '분식', '돈까스·회·일식', '치킨', '피자', '중국집', '족발·보쌈', '야식', '찜·탕', '도시락', '카페·디저트', '패스트푸드', '프랜차이즈', '맛집랭킹'],
            currentCategory: null
        }
    }
    componentDidMount() {
        console.log('stores component mount');
    }
    render() {
        const { lists, currentCategory } = this.state;
        return (
            <div className="stores">
                <StoresHeader lists={lists} currentCategory={currentCategory}/>
                <div>
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                    상점페이지상점페이지상점페이지상점페이지
                </div>
            </div>
            
        );
    }
}

export default Stores;