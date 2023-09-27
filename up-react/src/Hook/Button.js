import React, { Component } from "react";

export default class Button extends Component{
    constructor(){
        super();
        this.state = {
            buttonText: 'Click'
        };
    }
    heandlerClick = () => {
        this.setState({buttonText:'On clicked'});
    }
    render(){
        return <button onClick={this.heandlerClick}>{this.state.buttonText}</button>
    }
}