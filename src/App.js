import React, { Component } from 'react';
import Station from './components/Station';
import IconButton from 'material-ui/IconButton';
import SwapHoriz from 'material-ui-icons/SwapHoriz';
import swal from 'sweetalert';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      schedules: [],
    };
  }

  handleSwap = async () => {
    await this.setState({
      origin: this.state.destination,
      destination: this.state.origin,
    });
    this.triggerSchedulesLoading();
  }

  handleOnChangeStation = location => async value => {
    await this.setState({ [location]: value });
    this.triggerSchedulesLoading();
  }

  triggerSchedulesLoading = async () => {
    const { origin, destination } = this.state;
    const API = process.env.REACT_APP_API;

    if (origin === null || destination === null) {
      return;
    }

    let responseData;

    try {
      const response = await fetch(`${API}/schedules/${origin}/${destination}`);
      responseData = await response.json();
    } catch(e) {
      swal('Oops!', `Unexpected error ocurred: ${e}`, 'error');
      console.error(e);
    }

    this.setState({ schedules: responseData });
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
