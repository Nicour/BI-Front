import React from 'react';
import  { Component } from 'react';
import 'milligram';
import './App.css';


import Brastlewark from './pages/Brastlewark';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Brastlewark path="/" exact component={Brastlewark}/>
      </div>
    )
  }
}

export default App;