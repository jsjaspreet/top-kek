import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainAppStyle } from './styles'
import AppTitle from '../AppTitle'
import MemeGallery from '../MemeGallery'
import NavBar from '../NavBar'
import * as actions from '../../actions'

class App extends Component {

  componentWillMount() {
    this.props.getMemeLinks()
    this.props.getMemeThumbnails()
  }

  render() {
    return (
      <div style={mainAppStyle}>
        <AppTitle title="TOP KEKKLE"/>
        <NavBar/>
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
