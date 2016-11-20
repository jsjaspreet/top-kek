import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
const sleepTightPupper = require('../assets/memes/sleep-tight-pupper.jpg')

class App extends Component {
  render() {
    return (
      <img src={`static/${sleepTightPupper}`}/>
    )
  }
}

export default App
