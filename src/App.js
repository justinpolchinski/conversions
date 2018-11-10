import React, { Component } from 'react';
import Inputs from "./components/inputs.js";
import FeetInputs from "./components/feetinputs.js";
import HideButton from "./components/hideButton.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HideButton btnName="Cm to Inches"/>
        <div id="divCmToInches">
          <h2>Centimeters to Inches:</h2>
          <Inputs  um="cm"/>
          <br/>
        </div>
        <HideButton btnName="Feet and Inches to Centimeters"/>
        <div id="ftInchesToCm">
          <h2>Feet and Inches to Centimeters:</h2>
          <FeetInputs um="Inches"/>
          <br />
        </div>
        <HideButton btnName="Inches to Centimeters"/>
        <div id="InchesToCm">
          <h2>Inches to Centimeters:</h2>
          <Inputs um="Inches"/>
        </div>
      </div>
    );
  }
}

export default App;
