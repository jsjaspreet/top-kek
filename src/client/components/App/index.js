import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainAppStyle } from './styles'
import AppTitle from '../AppTitle'
import MemeGallery from '../MemeGallery'
import * as actions from '../../actions'

class App extends Component {

  componentWillMount() {
    this.props.getMemeLinks()
  }

  render() {
    return (
      <div style={mainAppStyle}>
        <AppTitle title="TOP KEKKLE"/>
        <MemeGallery/>
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
