import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './schedule_item';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.items.map((item, i) =>
      <ScheduleItem name={item.name} creator={item.creator} startAt={item.startAt} endAt={item.endAt} currentTime={this.props.currentTime} key={i} />
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <table>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    )
  }
}
Schedule.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  currentTime: PropTypes.object.isRequired,
}

export default Schedule;
