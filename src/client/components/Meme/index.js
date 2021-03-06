import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { memeStyle } from './styles'

class Meme extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { memeSrc, browser } = this.props
    const showDialog = browser.width > 800
    const fullSrc = memeSrc.split("-thumbnails")
                           .join("")
                           .replace("us-west-2", "us-west-1")
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div style={memeStyle}>
        <img src={memeSrc}
             onTouchTap={this.handleOpen}
             style={{
               cursor: "pointer"
             }}
             className="animated fadeIn"/>
        {
          showDialog ?
            <Dialog
              actions={actions}
              modal={false}
              autoScrollBodyContent={true}
              contentStyle={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                paddingLeft: '10%',
                maxWidth: '90%',
                top: 0
              }}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <img src={fullSrc} className="animated fadeIn"/>
            </Dialog>
            : null
        }
      </div>
    )
  }
}

function mapStateToProps({ browser }) {
  return {
    browser
  }
}

export default connect(mapStateToProps)(Meme)
