import React, { Component } from 'react';
import Inputs from "./components/inputs.js";
import FeetInputs from "./components/feetinputs.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Inputs  um="cm"/>
        <br/>
        <FeetInputs um="Inches"/>
        <br />
        <Inputs um="Inches"/>
      </div>
    );
  }
}

export default App;
