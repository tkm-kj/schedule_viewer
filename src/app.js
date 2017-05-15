import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import Schedule from './components/schedule'
import schedules from './data/schedules'

class App extends Component {
  constructor() {
    super();
    this.state = {currentTime: moment()}
  }

  componentDidMount() {
    setInterval(() => {
      return this.setState({currentTime: moment()});
    }, 1000);
  }

  render() {
    return (
      <Schedule items={schedules} currentTime={this.state.currentTime} />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
