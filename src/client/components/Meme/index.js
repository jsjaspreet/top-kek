import React from 'react'
import { memeStyle } from './styles'

export default ({memeSrc}) => {
  return (
    <img src={memeSrc} className="animated fadeIn" style={memeStyle}/>
  )
}