import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moon from './components/Moon';
import Grater from './components/Grater';
import Mound from './components/Mound';
import Cheese from './components/Cheese';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    number: 0,
    moonY: 500,
    x:0,
    left: false,
    right: true,
    stringCheese: null,
    moreStringCheese: null,
    cheese: true
  };
}

_onMouseMove(e){
  if(e.clientX){
    this.setState({ x: e.clientX })
  }else if(e.targetTouches){
    this.setState({ x: e.targetTouches[0].clientX })
    e.preventDefault();
  }
}

subtractMoon = () => {
  this.setState((prevState,props) => {
    if(prevState.cheese){
      return({
        moonY: parseInt(prevState.moonY)-5,
        stringCheese: [],
        cheese: !prevState.cheese
      });
    }else {
      return({
        moonY: parseInt(prevState.moonY)-5,
        moreStringCheese: [],
        cheese: !prevState.cheese
      });
    }
  },()=>{this.addStringCheese();})
}

addStringCheese = (cheese) => {
  this.setState((prevState,props)=>{
    let number = Math.floor(Math.random()*5)+4;
    while(prevState.number === number){
      number = Math.floor(Math.random()*5)+4;
    }
    let newStringCheese = [];
    for(let s=0;s<number;s++){
      newStringCheese = [...newStringCheese,
      <Cheese 
        top={parseInt(prevState.moonY)-5} 
        animate={this.state.right} 
        leftNum={Math.random()*300 + 200} 
        imageIndex={Math.floor(Math.random()*3)} 
        animDelay={Math.random()*0.25+'s'}/>];
    }
    if(prevState.cheese){
      return({
        number: number,
        moreStringCheese : newStringCheese
      });
    }else{
      return({
        number: number,
        stringCheese : newStringCheese
      });
    }
  });
}

  render() {
    const x = this.state.x;
    if(this.state.moonY>0){
      if(x<300 && this.state.right){
        this.setState({left: true,right: false});
      }else if(x>450 && this.state.left){
        this.setState({left: false,right: true},this.subtractMoon);
      }
    }

    const ground = {
      'z-index' : '10',
      position: 'absolute',
      width: '100%',
      height: '50%',
      'background-color' : 'grey',
      'margin-top' : '960px'
    }

    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)} onTouchMove={this._onMouseMove.bind(this)}>
        <div style={ground}></div>
        <Moon moonY={this.state.moonY} />
        <Grater xpos={x} />
        {this.state.stringCheese}
        {this.state.moreStringCheese}
        <Mound />
      </div>
    );
  }
}

export default App;
