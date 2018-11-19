import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import classNames from 'classnames';
import Main from './components/Main/Main';
import Stores from './components/Stores/Stores';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuActive : false,
    }
  }

  handleMenuActive = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    })
  }

  render() {
    const {menuActive} = this.state;
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={() => <Main menuActive={menuActive} onMenuActive={this.handleMenuActive}/>}/>
          <Route path="/stores" component={Stores} />
          <Menu active={this.state.menuActive} onMenuActive={this.handleMenuActive}/>
        </div>
      </Router>
    );
  }
}
const Menu = (props) => {
  const { active, onMenuActive} = props;
  return(
    <div className={classNames('menu', {'active': active})}>
      menu
      <button onClick={onMenuActive}>close</button>
    </div>
  )
}

export default App;
