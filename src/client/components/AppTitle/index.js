import React from 'react'
import ReactFittext from 'react-fittext'
import { titleStyle } from './styles'

export default ({ title }) => (<ReactFittext maxFontSize={90}>
<h1 style={titleStyle}>
  { title }
</h1>
</ReactFittext>)
