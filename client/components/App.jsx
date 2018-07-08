import React, { Component } from 'react';
import Map from './Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Get Outside</h3>
        <p>Select a state to see its National Parks</p>
        <Map />
        <div>Results</div>
        <div>Powered by the National Park Service API</div>
        <div>&copy;Stacey Rutherford</div>
      </div>
    );
  }
}

export default App;
