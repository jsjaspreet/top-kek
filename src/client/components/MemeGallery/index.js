import React from 'react'
import { connect } from 'react-redux'
import { galleryStyle } from './styles'
import Meme from '../Meme'

const MemeGallery = ({ memeLinks }) => {
  const memes = memeLinks.map((memeLink, index) => <Meme key={index} memeSrc={memeLink}/>)
  return (
    <div style={galleryStyle}>
      {memes}
    </div>
  )
}

function mapStateToProps({ memeLinks }) {
  return {
    memeLinks
  }
}
export default connect(mapStateToProps)(MemeGallery)

