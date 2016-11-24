import React, { Component } from 'react'
import { mainAppStyle } from './styles'
import AppTitle from '../AppTitle'

class App extends Component {
  render() {
    return (
      <div style={mainAppStyle}>
        <AppTitle title="TOP KEKKLE"/>
      </div>
    )
  }
}

export default App
