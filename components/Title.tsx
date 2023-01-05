import React from 'react'
import styled from 'styled-components'

interface TitleProps {
    title: String
    subtitle?: String
}

const Title = ({ title } : TitleProps) => {
  return (
    <TextTitle>
        {title}
    </TextTitle>
  )
}

export default Title

const TextTitle = styled.div`
  font-size: 3.5vw;
  height: auto;
  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`