import React, {Component} from 'react';
import classNames from 'classnames';
import Header from '../common/Header';
import Carousel from './Carousel';
import Categories from './Categories';
import SeachBestStore from './SeachBestStore'
import NoticeList from './NoticeList'

import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        
        return (
            <div className={classNames('main')}>
                <Header />
                <Carousel />
                <Categories />
                <SeachBestStore />
                <NoticeList/>
            </div>

        )
    }
}

export default Main;