import React from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import State from './State';

class Map extends React.Component {
  constructor() {
    super();
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
      return <State path={path} key={i} />;
    });
    return states;
  }

  render() {
    return (
      <svg id="map-container" width={ 1500 } height={ 500 } viewBox="0 0 1000 800">
        <g id="states-container">
          {this.generateStatePath(d3.geoPath(), this.state.us)}
        </g>
      </svg>
    );
  }
}

export default Map;
