import React, { Component} from 'react';
import {UserProvider} from './contexts/UserContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main/Main';
import Stores from './components/Stores/Stores';
import Cart from './components/Cart';
import Login from './components/Auth/Login';
// import Join from './components/Auth/Join';
import UserModal from './components/common/UserModal';
import Footer from './components/common/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <UserProvider>
            <div className="App">
              <Route path="/" exact render={() => <Main />} />
              <Route path="/stores" component={Stores} />
              {/* FIXME :: cart 컴포넌트는 url 변경을 통해 접근하는 것이 아니기 때문에 Route 방식으로 작성하지 않는다 */}
              <Route path="/cart" render={() => <Cart />} />
              <Route path="/login" component={Login} />
              {/* <Route path="/Join" component={Join} /> */}
              <UserModal />
              <Footer/>
            </div>
          </UserProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;
