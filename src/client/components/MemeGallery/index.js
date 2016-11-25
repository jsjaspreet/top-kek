import React from 'react'
import { connect } from 'react-redux'
import { galleryStyle, columnStyle } from './styles'
import Meme from '../Meme'

const MemeGallery = ({ memeLinks, memeThumbnailLinks, pageCounter }) => {
  const memes = memeThumbnailLinks.map((memeLink, index) => <Meme key={index} memeSrc={memeLink}/>)
  const firstColumn = memes.slice(pageCounter, pageCounter + 3)
  const secondColumn = memes.slice(pageCounter + 3,  pageCounter + 6)
  const thirdColumn = memes.slice(pageCounter + 6, pageCounter + 9)

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

function mapStateToProps({ memeLinks, memeThumbnailLinks, pageCounter }) {
  return {
    memeLinks,
    pageCounter,
    memeThumbnailLinks
  }
}
export default connect(mapStateToProps)(MemeGallery)

