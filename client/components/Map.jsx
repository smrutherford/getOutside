import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import State from './State';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { us: [] };
    this.generateStatePath = this.generateStatePath.bind(this);
  }

  componentDidMount() {
    d3.json('https://d3js.org/us-10m.v1.json')
      .then((us) => {
        this.setState({ us: feature(us, us.objects.states).features });
      })
      .catch((err) => {
        console.log('could not get U.S. json: ', err);
      });
  }

  generateStatePath(geoPath, data) { 
    const states = data.map((feature, i) => {
      const path = geoPath(feature);
      return (
        <State
          key={feature.id}
          path={path}
          stateId={feature.id}
          updateResults={this.props.updateResults}
        />
      );
    });
    return states;
  }

  render() {
    return (
      <svg width={1140} height={600} viewBox="0 0 950 600">
        <g id="states-container">
          {this.generateStatePath(d3.geoPath(), this.state.us)}
        </g>
      </svg>
    );
  }
}

Map.propTypes = {
  updateResults: PropTypes.func.isRequired,
};

export default Map;
