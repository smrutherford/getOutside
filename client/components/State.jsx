import React from 'react';
import PropTypes from 'prop-types';
import states from '../../public/us-states';


class State extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    const stateName = states[this.props.stateId].STATE_NAME;
    const stateAbbr = states[this.props.stateId].STUSAB;
    this.props.updateResults(stateName, stateAbbr);
  }

  render() {
    return (
      <path
        className="state"
        d={this.props.path}
        fill="#3D9064"
        stroke="#ffffff"
        strokeWidth={0.25}
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}

State.propTypes = {
	path: PropTypes.string.isRequired,
  stateId: PropTypes.string.isRequired,
  updateResults: PropTypes.func.isRequired,
};

export default State;

//6C7680
//#d8d4d4