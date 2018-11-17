import React, { Component, Provider } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/common/Header';
import Carousel from './components/main/Carousel';
import Categories from './components/main/Categories';
import SeachBestStore from './components/main/SeachBestStore'

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : {
        id : 1,
        username: '이강산',
        fullAddress: '서울시 노원구 상계동 666, 주공 10단지',
        shortAddress: '상계동 666'
      }
    }
  }
  render() {
    const {user} = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={user} />
          <Route path="/" exact component={Main} />
          <Route path="/stores" component={Stores} />
        </div>
      </Router>
    );
  }
}

const Main = () => {
  return(
    <div>
      <Carousel />
      <Categories />
      <SeachBestStore />
    </div>
    
  )
}

const Stores = () => {
  return(
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
  )
}

export default App;
