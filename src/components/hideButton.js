import React, { Component } from "react";

function changeDisplay(theId){
    var x = document.getElementById(theId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
class HideButton extends Component{
    
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        //console.log(event.target.id);
        if(event.target.id==="Cm to Inches"){
            console.log(event.target.id);
            changeDisplay("divCmToInches");

        }
        if(event.target.id==="Feet and Inches to Centimeters"){
            console.log(event.target.id);
            changeDisplay("ftInchesToCm");

        }
        if(event.target.id==="Inches to Centimeters"){
            console.log(event.target.id);
            changeDisplay("InchesToCm");

        }
        
    }
    render() {
        return <button  id={this.props.btnName} onClick={this.handleClick}>{this.props.btnName}</button>;
    }
    }
export default HideButton;