import React from "react"
import './App.css';

class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    
    incrase = () => {
        this.setState({ value: this.state.value + 1});
        alert('brawo')
        
    };    
    decrese = () => {
        this.setState({value: this.state.value - 1})
        alert('świetnie')
    };
    reset = () => {
        this.setState({value: 0})
        alert('to dziala zajebiście')
    };


    render(){

    return(
    <div className = 'general'>
        <p className="value">{this.state.value}</p>
        <button onClick={this.incrase} className = 'button'>+</button> <span></span>
        <button onClick={this.decrese} className = 'button'>-</button> <span></span>
        <button onClick={this.reset} className = 'button'>reset</button> <span></span>
    </div>
) } }



export default Buttons;