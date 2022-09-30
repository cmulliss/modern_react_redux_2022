import React, { Component } from 'react'
import './App.css'
import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }
  // geolocation doesn't want to be initialised in the render method, means that the instant the App component turns up on screen will attempt to to get the users current location, will run some time in the future.
  // needs componentDidMount or cannot call setState on unmounted component
  // lifecycle method initialises state!
  // do your data loading inside componentDidMount()
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  componentDidUpdate() {}
  // render method alone, about returning some jsx, not doing other stuff.
  render() {
    if (this.state.errorMessage && this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}

export default App
// first callback is success callback
// 2nd is failure callback
// there is a lag before result from geolocation api

// default lat to null as will be a number

// only want to show error message if an error

/* <h1>Seasons</h1>
        <div>
          Latitude: {this.state.lat}
          <br />
          Longitude: {this.state.lon}
          <br />
          Error: {this.state.errorMessage}
        </div> */
