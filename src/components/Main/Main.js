import React, {Component} from 'react';
import Header from '../common/Header';
import Carousel from './Carousel';
import Categories from './Categories';
import SeachBestStore from './SeachBestStore'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                username: '이강산',
                fullAddress: '서울시 노원구 상계동 666, 주공 10단지',
                shortAddress: '상계동 666'
            }
        }
    }
    componentDidMount() {
        console.log('main component mount');
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <Header user={user} />
                <Carousel />
                <Categories />
                <SeachBestStore />
            </div>

        )
    }
}

export default Main;