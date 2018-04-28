import React, { Component } from 'react';
import Station from './components/Station';
import IconButton from 'material-ui/IconButton';
import SwapHoriz from 'material-ui-icons/SwapHoriz';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
    };
  }

  handleSwap = () => {
    this.setState({
      origin: this.state.destination,
      destination: this.state.origin,
    });
  }

  handleOnChangeStation = location => event => {
    this.setState({ [location]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <h1 className="title">Encuentra tu horario</h1>
        </header>
        <datalist id="stations">
          <option value="Internet Explorer"></option>
          <option value="Firefox"></option>
          <option value="Google Chrome"></option>
          <option value="Opera"></option>
          <option value="Safari"></option>
        </datalist>
        <main id="main">
          <section className="user-actions">
            <Station
              location="origin"
              value={this.state.origin}
              onChange={this.handleOnChangeStation}
            />
            <IconButton className="swap" aria-label="Swap" onClick={this.handleSwap}>
              <SwapHoriz />
            </IconButton>
            <Station
              location="destination"
              value={this.state.destination}
              onChange={this.handleOnChangeStation}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
