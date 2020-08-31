import React from 'react'
import styled from '@emotion/styled'

const SectionStyle = styled.div({
  marginBottom: '2rem',
})

interface IProps {
  title: string
  children: Object
}

const Section: React.FC<IProps> = ({ title, children }) => {
  return (
    <SectionStyle>
      <h6>{title}</h6>
      {children}
    </SectionStyle>
  )
}

export default Section
