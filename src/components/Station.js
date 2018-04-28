import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Lock from 'material-ui-icons/Lock';
import LockOpen from 'material-ui-icons/LockOpen';

class Station extends Component {
  constructor() {
    super();
    this.state = {
      labels: {
        origin: 'Origen',
        destination: 'Destino',
      },
      locked: false,
    }
  }

  handleLock = () => {
    this.setState({ locked: !this.state.locked });
  }

  render() {
    return (
      <div className="Station">
        <TextField
          label={this.state.labels[this.props.location]}
          value={this.props.value}
          onChange={this.props.onChange(this.props.location)}
          inputProps={{
            list: "stations",
          }}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle lock station"
                  onClick={this.handleLock}
                >
                  {this.state.locked ? <Lock /> : <LockOpen />}
                </IconButton>
              </InputAdornment>
          }}
        />
      </div>
    )
  }
}

export default Station;
