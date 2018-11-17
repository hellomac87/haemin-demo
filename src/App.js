import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Stores from './components/Stores/Stores';

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

export default App;
