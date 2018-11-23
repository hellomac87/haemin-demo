import React, {Component} from 'react';
import Header from '../common/Header';
import Carousel from './Carousel';
import Categories from './Categories';
import SeachBestStore from './SeachBestStore'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        
        return (
            <div>
                <Header />
                <Carousel />
                <Categories />
                <SeachBestStore />
            </div>

        )
    }
}

export default Main;