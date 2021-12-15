import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/AllClearButton';
import React, {Component} from 'react';
import * as math from 'mathjs' //Import Mathjs to complete calculations from a string

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val =>{
    this.setState({input: this.state.input + val});
  }

  handleEqual = () =>{
    var equation = this.state.input.replace(/x/g, "*")
    this.setState({input: math.evaluate(equation)})
  }

  handlePositiveNegitive = () =>{
    this.setState({input: this.state.input + "-"})
  }

  render(){
    return (
      <div className="App">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <ClearButton handleClear={()=> this.setState({input: ""})}>C</ClearButton>
            <Button handleClick = {() => this.handlePositiveNegitive()}>±</Button>
            <Button handleClick = {this.addToInput}>%</Button>
            <Button handleClick = {this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick = {this.addToInput}></Button>
            <Button handleClick = {this.addToInput}>0</Button>
            <Button handleClick = {this.addToInput}>.</Button>
            <Button handleClick = {() => this.handleEqual()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
