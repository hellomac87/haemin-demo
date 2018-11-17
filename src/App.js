import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/common/Header';
import Carousel from './components/main/Carousel';
import Categories from './components/main/Categories';
import SeachBestStore from './components/main/SeachBestStore'

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/stores" component={Stores} />
        </div>
      </Router>
    );
  }
}

class Main extends Component{
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
  componentDidMount(){
    console.log('main component mount');
  }
  render(){
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

class Stores extends Component {
  componentDidMount(){
    console.log('main component mount');
  }
  render(){
    return (
      <div className="App">
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
    );
  }
  
}

export default App;
