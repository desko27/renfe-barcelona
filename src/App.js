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

  handleOnChangeStation = location => value => {
    this.setState({ [location]: value });
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <h1 className="title">Encuentra tu horario</h1>
        </header>
        <main id="main" className="container">
          <section className="user-actions">
            <div className="station-selector">
              <Station
                location="origin"
                value={this.state.origin}
                onChange={this.handleOnChangeStation('origin')}
              />
            </div>
            <IconButton
              className="swap"
              aria-label="Swap"
              onClick={this.handleSwap}
            >
              <SwapHoriz />
            </IconButton>
            <div className="station-selector">
              <Station
                location="destination"
                value={this.state.destination}
                onChange={this.handleOnChangeStation('destination')}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
