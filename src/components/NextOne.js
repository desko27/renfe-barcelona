import React, { Component } from 'react';
import moment from 'moment';
import './NextOne.css';

class NextOne extends Component {
  render() {
    // decide what's the "next one"
    const { schedules } = this.props;
    let willRender = true;
    let nextOne;

    if (!Array.isArray(schedules) || schedules.length === 0) {
      willRender = false;
    } else {
      const now = moment();
      let found = false;

      schedules.forEach(async s => {
        const start = moment(`${moment().format('YYYY-MM-DD')} ${s.departure}`);
        if (!found && start > now) {
          found = true;
          nextOne = s;
        }
      });
    }

    if (willRender) {
      return (
        <div className="NextOne">
          <div className="row">
            <div className="col-md-4">
              <div className="nextone-box nextone-line">
                <div className="label">Línea</div>
                <div className="value">{nextOne.line}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nextone-box nextone-hour">
                <div className="label">Salida</div>
                <div className="value">{nextOne.departure}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nextone-box nextone-timer">
                <div className="label">Quedan</div>
                <div className="value">{nextOne.departure}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default NextOne;
