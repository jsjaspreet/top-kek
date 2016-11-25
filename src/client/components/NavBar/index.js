import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { navStyle } from './styles'

class NavBar extends Component {
  render() {
    const { pageCounter, memeLinks } = this.props
    const totalMemes = memeLinks.length
    return (
      <div style={navStyle}>
        {
          pageCounter === 0 ? <div/> :
            <i onClick={()=>this.props.decreasePageCounter()}
               style={{ cursor: "pointer" }}
               className="fa fa-4x fa-arrow-left"
               aria-hidden="true"></i>
        }
        {
          pageCounter + 9 >= totalMemes ? <div/> :
            <i onClick={()=>this.props.increasePageCounter()}
               style={{ cursor: "pointer" }}
               className="fa fa-4x fa-arrow-right"
               aria-hidden="true"></i>
        }
      </div>
    )
  }
}

function mapStateToProps({ pageCounter, memeLinks }) {
  return {
    pageCounter,
    memeLinks
  }
}

export default connect(mapStateToProps, actions)(NavBar)
