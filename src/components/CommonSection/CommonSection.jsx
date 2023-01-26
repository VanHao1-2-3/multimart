import React from 'react'
import { CommonContainer, Img } from './CommonSectionStyle'
const CommonSection = ({title}) => {
  return (
    <CommonContainer>
    <h1>{title}</h1>
    </CommonContainer>
  )
}

export default CommonSection