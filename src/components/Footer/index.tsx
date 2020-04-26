import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  background: black;
  min-height: 4rem;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`

const Footer: React.FC = () => {
  return <StyledFooter>© {new Date().getFullYear()} The MF Data Tool</StyledFooter>
}

export default Footer
