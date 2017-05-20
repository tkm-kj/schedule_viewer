import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScheduleItem from './schedule_item';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.items.map((item, i) => {
      return <ScheduleItem name={item.name} creator={item.creator} startAt={item.startAt} endAt={item.endAt} key={i} currentTime={this.props.currentTime} />
    });
  }
  render() {
    return (
      <table>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}
Schedule.propTypes = {
  items: PropTypes.array.isRequired,
  currentTime: PropTypes.object.isRequired
}

export default Schedule;
