import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Schedule from './schedule';

class Board extends Component {
  constructor(props) {
    super(props);
    this.renderSchedules = this.renderSchedules.bind(this)
  }

  renderSchedules() {
    return this.props.schedules.map((schedule, i) =>
      <Schedule name={schedule.name} items={schedule.items} currentTime={this.props.currentTime} key={i} />
    );
  }

  render() {
    return (
      <div>
        {this.renderSchedules()}
      </div>
    )
  }
}
Board.propTypes = {
  schedules: PropTypes.array.isRequired,
  currentTime: PropTypes.object.isRequired
}

export default Board;
