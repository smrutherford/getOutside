import React, { Component } from 'react';
import Map from './Map';
import Results from './Results';
import key from '../../config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        stateName: '',
        parks: [],
      },
    };
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(stateName, stateAbbr) {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}&api_key=${key}`)
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Couldn't get park info: ${response.status}`);
          return;
        }
        response.json().then((res) => {
          console.log('data: ', res.data);
          this.setState({
            results: {
              stateName,
              parks: res.data,
            },
          });
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Get Outside</h3>
        <p>Select a state to see its National Parks</p>
        <Map updateResults={this.updateResults} />
        <Results results={this.state.results} />
        <div className="row">
          <div>Powered by the National Park Service API</div>
          <div>&copy;Stacey Rutherford</div>
        </div>
      </div>
    );
  }
}

export default App;
