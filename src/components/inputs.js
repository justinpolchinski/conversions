import React, { Component } from "react";

class Inputs extends Component{
    
    
    state={
        feetOrInches: "",
        cmL : 0,
        cmW : 0,
        cmH : 0,
        InchesL: 0,
        InchesW: 0,
        InchesH: 0
    }
    constructor(props) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        
        this.setState({value: event.target.value});
        console.log(event.target.id);
        // this.setState({[event.target.id] : event.target.value})
        console.log(this.state.cmL);
        var cmToInch = 0.393701;
        //event.preventDefault();
        var centi = parseInt(event.target.value);
        var inchesResult = Math.ceil(centi * cmToInch);
        var cmResult = Math.ceil(centi/cmToInch);
        console.log(this.input);
        if(event.target.id === "cmL" || event.target.id === "cmW" || event.target.id === "cmH"){
            this.setState({[event.target.id] : inchesResult});
            this.setState({feetOrInches:"Inches"})
            console.log("cm to inches: " + this.state[event.target.id])
            
        }  
        if(event.target.id === "InchesL" || event.target.id === "InchesW" || event.target.id === "InchesH"){
            this.setState({[event.target.id] : cmResult});
            this.setState({feetOrInches:"cm"})
            console.log("cm to inches: " + this.state[event.target.id])
            
        }  
        
      
      }
   
    render (){
        return (
            <div className="boxed mt-5 row">
            <form className="font-weight-bold col-lg-4">
                <span  >Input length in {this.props.um}: </span><br/>
                <input type="text"id={this.props.um +"L"} value={this.props.value}  um={this.props.um+"L"} ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input width in {this.props.um}: </span><br/>
                <input id= {this.props.um+"W"}  um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input height in {this.props.um}: </span><br/>
                <input id={this.props.um+"H"} um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
            </form>
            <div className="h3 mt-5 resultStyle" >Length Width Height {this.state.feetOrInches}: {this.state[this.props.um+"L"]} x {this.state[this.props.um+"W"]} x {this.state[this.props.um+"H"]} </div>
            </div>
        )
    }
}

export default Inputs;