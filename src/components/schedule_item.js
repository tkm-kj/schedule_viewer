import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScheduleItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.creator}</td>
        <td>{this.props.startAt}</td>
        <td>{this.props.endAt}</td>
      </tr>
    )
  }
}
ScheduleItem.propTypes = {
  name: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired
}

export default ScheduleItem;
