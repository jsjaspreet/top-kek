import React from 'react'
import { memeStyle } from './styles'

export default ({memeSrc}) => {
  return (
    <img src={memeSrc} style={memeStyle}/>
  )
}