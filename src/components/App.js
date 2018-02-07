import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import core from '../styles/core.styles';
import Name from './interactive/Name';
import Counter from './interactive/Counter';
import StringToDate from './interactive/StringToDate';

class App extends Component {
  constructor(props) {
    super();

    this.state = { ...props.appState };
    fetch('/json/state.json')
    .then(res => res.json())
    .then(json => {
      this.state = { json };
    })
    .catch(err => {  
      this.state = { ...props.appState };
    });
  }

  changeName(e) {
    e.preventDefault();
    this.state.name = e.target.value;
  }

  dateChange(e) {
    e.preventDefault();
    this.state.date = e.target.value;
  }

  add() {
    var counter = this.state.counter + 1;
    this.state.counter += 1;
  }

  subtract() {
    var counter = this.state.counter;
    counter = counter <= 0 ? 0 : -1;
    this.state.counter = counter;
  }

  render() {
    return (
      <div style={[core.container]} className="App">
        <div style={[core.questions]}>
          <Name onChange={this.changeName} value={this.state.name} />
          <Counter add={this.add} subtract={this.add} value={this.state.counter} />
          <StringToDate date={this.state.date} />
        </div>
        <div style={[core.answers]}>
          <h1 style={[core.answerPart]}>{this.state.welcome} {this.state.name}.</h1>
          <h2 style={[core.answerPart]}> Your favourite number is: {this.props.appState.counter} </h2>
          <h2 style={[core.answerPart]}> And finally you were born on a: {this.state.date} </h2>
        </div>
      </div>
    );
  }
}


App.propTypes = {
  appState: PropTypes.number.isRequired,
};

export default App;