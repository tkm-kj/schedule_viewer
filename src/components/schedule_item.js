import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ScheduleItem extends Component {
  constructor(props) {
    super(props)
    this.checkActive = this.checkActive.bind(this)
  }

  checkActive() {
    return this.props.currentTime >= moment(this.props.startAt) && this.props.currentTime < moment(this.props.endAt)
  }

  render() {
    return (
      <tr style={{color: this.checkActive() ? 'red' : ''}}>
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
  endAt: PropTypes.string.isRequired,
  currentTime: PropTypes.object.isRequired
}

export default ScheduleItem;
