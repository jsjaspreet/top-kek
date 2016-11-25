import React from 'react'
import { connect } from 'react-redux'
import { galleryStyle, columnStyle } from './styles'
import Meme from '../Meme'

const MemeGallery = ({ memeLinks, memeThumbnailLinks }) => {
  const memes = memeThumbnailLinks.map((memeLink, index) => <Meme key={index} memeSrc={memeLink}/>)
  const firstColumn = memes.slice(0, 3)
  const secondColumn = memes.slice(3, 6)
  const thirdColumn = memes.slice(6, 9)

  return (
    <div style={galleryStyle}>
      <div style={columnStyle}>
        {
          firstColumn
        }
      </div>
      <div style={columnStyle}>
        {
          secondColumn
        }
      </div>
      <div style={columnStyle}>
        {
          thirdColumn
        }
      </div>
    </div>
  )
}

function mapStateToProps({ memeLinks, memeThumbnailLinks }) {
  return {
    memeLinks,
    memeThumbnailLinks
  }
}
export default connect(mapStateToProps)(MemeGallery)

