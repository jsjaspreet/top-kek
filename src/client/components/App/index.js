import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainAppStyle } from './styles'
import AppTitle from '../AppTitle'
import * as actions from '../../actions'

class App extends Component {

  componentWillMount() {
    this.props.getMemeLinks()
  }

  render() {
    return (
      <div style={mainAppStyle}>
        <AppTitle title="TOP KEKKLE"/>
      </div>
    )
  }
}

function mapStateToProps({memeLinks}) {
  return {
    memeLinks
  }
}

export default connect(mapStateToProps, actions)(App)
