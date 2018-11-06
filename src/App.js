import React, { Component } from 'react';
import Inputs from "./components/inputs.js";
import FeetInputs from "./components/feetinputs.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Centimeters to Inches</h2>
        <Inputs  um="cm"/>
        <br/>
        <h2>Feet and Inches to Centimeters</h2>
        <FeetInputs um="Inches"/>
        <br />
        <h2>Inches to Centimeters</h2>
        <Inputs um="Inches"/>
      </div>
    );
  }
}

export default App;
