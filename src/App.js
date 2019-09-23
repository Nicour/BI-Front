import React from 'react';
import  { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'milligram';
import './App.css';

import GnomoDetails from './pages/GnomoDetails';

import Brastlewark from './components/Brastlewark';
import DetailsRoute from './components/DetailsRoute'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Brastlewark path="/" exact component={Brastlewark}/>
            <DetailsRoute exact path="/gnomes/:id" component={GnomoDetails}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;