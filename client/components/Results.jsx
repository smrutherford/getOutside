import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

const Results = (props) => {
  const style = {
    display: props.results.stateName === '' ? 'none' : 'block',
  };
  return (
    <div style={style}>
      <p>Here are the National Parks in {props.results.stateName}:</p>
      <Result parks={props.results.parks} />
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.shape({
    stateName: PropTypes.string.isRequired,
    parks: PropTypes.array.isRequired,
  }).isRequired,
};

export default Results;
