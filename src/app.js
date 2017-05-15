import React, { Component } from 'react';
import { render } from 'react-dom';
import Schedule from './components/schedule'
import schedules from './data/schedules'

class App extends Component {
  render() {
    return (
      <Schedule items={schedules} />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
