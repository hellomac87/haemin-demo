import React, { Component } from 'react';
import StoresHeader from './StoresHeader';
import './Stores.scss';

class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['한식', '분식', '돈까스·회·일식', '치킨', '피자', '중국집', '족발·보쌈', '야식', '찜·탕', '도시락', '카페·디저트', '패스트푸드', '프랜차이즈', '맛집랭킹'],
            currentCategory: null,
            currentLists: null,
        }
    }
    componentDidMount() {
        // 현재 카테고리 설정하기
        this.setState({
            currentCategory: '한식',
            currentLists: [
                {
                    id: 1,
                    mainUrl: 'https://www.bloter.net/wp-content/uploads/2018/01/unnamed.png',
                    title: '가게이름',
                    description: '가게설명',
                    likes: 100,
                    reviews: 100
                },
                {
                    id: 2,
                    mainUrl: 'https://www.bloter.net/wp-content/uploads/2018/01/unnamed.png',
                    title: '가게이름2',
                    description: '가게설명2',
                    likes: 100,
                    reviews: 100
                }
            ]
        });
        // 현재 카테고리 설정을 바탕으로 현재 리스트 설정하기
    }
    render() {
        const { lists, currentCategory, currentLists } = this.state;
        return (
            <div className="stores">
                <StoresHeader lists={lists} currentCategory={currentCategory}/>
                <ul>
                    {
                        currentLists && currentLists.map((list,index) => {
                            return (
                                <li key={list.id}>
                                    <img src={list.mainUrl} />
                                    <div>{list.title}</div> 
                                    <div>{list.description}</div> 
                                    <div>{list.likes}</div> 
                                    <div>{list.reviews}</div> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        );
    }
}

export default Stores;