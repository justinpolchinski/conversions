import React, { Component } from "react";

class FeetInputs extends Component{
    
    
    state={
        InchesfL: 0,
        InchesfW: 0,
        InchesfH: 0,
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
        
        console.log(this.state.cmL);
        var cmToInch = 0.393701;
        var ftToInch = (event.target.value * 12)/cmToInch;
        var centi = parseInt(event.target.value);
        
        var cmResult = centi/cmToInch;
        console.log(this.input);
        
        if(event.target.id === "InchesL" || event.target.id === "InchesW" || event.target.id === "InchesH"){
            if(event.target.id === "InchesL"){
                cmResult = cmResult + this.state.InchesfL;
                this.setState({[event.target.id] : Math.ceil(cmResult)})
                console.log("cm to inches: " + this.state[event.target.id])
            }
            if(event.target.id === "InchesW"){
                cmResult = cmResult + this.state.InchesfW;
                this.setState({[event.target.id] : Math.ceil(cmResult)})
                console.log("cm to inches: " + this.state[event.target.id])
            }
            if(event.target.id === "InchesH"){
                cmResult = cmResult + this.state.InchesfH;
                this.setState({[event.target.id] : Math.ceil(cmResult)})
                console.log("cm to inches: " + this.state[event.target.id])
            }
        }  
        if(event.target.id === "InchesfL" || event.target.id === "InchesfW" || event.target.id === "InchesfH"){
            this.setState({[event.target.id] : ftToInch})
            console.log("feet to inches: " + this.state[event.target.id])
            
        }  
        
      
      }
   
    render (){
        return (
            <div>
            <form  className="font-weight-bold">
            <span>Input Length Feet: </span>
                <input type="text"id={this.props.um +"fL"} value={this.props.value}  um={this.props.um+"L"} ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input Length  {this.props.um}: </span>
                <input id= {this.props.um+"L"}  um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input Width Feet: </span>
                <input id={this.props.um+"fW"} um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input Width {this.props.um}: </span>
                <input type="text"id={this.props.um +"W"} value={this.props.value}  um={this.props.um+"L"} ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input Height Feet: </span>
                <input id= {this.props.um+"fH"}  um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
                <span>Input Height {this.props.um}: </span>
                <input id={this.props.um+"H"} um={this.props.um}ref={this.input} onChange={this.handleChange}></input>
                <br />
            </form>
            <div >{this.state[this.props.um+"L"]} x {this.state[this.props.um+"W"]} x {this.state[this.props.um+"H"]} </div>
            </div>
        )
    }
}

export default FeetInputs;