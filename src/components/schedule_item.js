import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ScheduleItem extends Component {
  constructor(props) {
    super(props)
    this.state = {ongoing: false}
    this.checkOngoing = this.checkOngoing.bind(this)
  }

  componentDidMount() {
    this.checkOngoing();
  }

  componentWillReceiveProps() {
    this.checkOngoing();
  }

  checkOngoing() {
    this.setState({
      ongoing: this.props.currentTime >= moment(this.props.startAt) && this.props.currentTime < moment(this.props.endAt)
    });
  }

  render() {
    return (
      <tr style={{color: this.state.ongoing ? 'red' : ''}}>
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
