import React, { Component } from 'react';
import { render } from 'react-dom';
import Schedule from './components/schedule'

class App extends Component {
  static get SCHEDULE_ITEMS() {
    return [
      {
        name: 'schedule1',
        creator: 'Takumi Kaji',
        startAt: '2017-05-14 23:00',
        endAt: '2017-05-15 00:00',
      },
      {
        name: 'schedule2',
        creator: 'Takumi Kaji',
        startAt: '2017-05-15 00:00',
        endAt: '2017-05-15 02:00',
      }
    ]
  };

  render() {
    return (
      <Schedule items={App.SCHEDULE_ITEMS} />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
