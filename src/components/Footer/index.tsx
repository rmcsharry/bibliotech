import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  background: black;
  min-height: 4rem;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
  padding: 0 1rem;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} JmF Technical Documentation Solutions</span>
      <span>Terms of Service</span>
    </StyledFooter>
  )
}

export default Footer
