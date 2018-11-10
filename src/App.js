import React, { Component } from 'react';
import Inputs from "./components/inputs.js";
import FeetInputs from "./components/feetinputs.js";
import HideButton from "./components/hideButton.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="row">
      <span className="h4 col-12">Double Click Button to Display Converter Click again to Hide</span>
        <div className="p-5 col-sm-12 col-md-3 col-lg-3">
          
          <HideButton btnName="Cm to Inches"/>
          <HideButton btnName="Feet and Inches to Centimeters"/>
          <HideButton btnName="Inches to Centimeters"/>
        </div>
      </div>
        <div id="divCmToInches">
          <h2>Centimeters to Inches:</h2>
          <Inputs  um="cm"/>
          <br/>
        </div>
        
        <div id="ftInchesToCm">
          <h2>Feet and Inches to Centimeters:</h2>
          <FeetInputs um="Inches"/>
          <br />
        </div>
        
        <div id="InchesToCm">
          <h2>Inches to Centimeters:</h2>
          <Inputs um="Inches"/>
        </div>
      </div>
    );
  }
}

export default App;
