import React, { Component } from 'react';
import './App.css';
import Header from './Shared/Header';
import CounterCard from './CounterCard';

class App extends Component {
  state = {
    counter: 0
  }

  addOneToCounterHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  minusOneFromCounterHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <CounterCard counter={this.state.counter} add={this.addOneToCounterHandler} minus={this.minusOneFromCounterHandler}></CounterCard>
      </div>
    );
  }
}

export default App;
