import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import Board from './components/board'
import schedules from './data/schedules'

class App extends Component {
  constructor() {
    super();
    this.state = {currentTime: moment()}
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      return this.setState({currentTime: moment()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Board schedules={schedules} currentTime={this.state.currentTime} />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
