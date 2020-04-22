import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  background: black;
  height: 4rem;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Jm|F Technical Documentation Solutions Inc. 2018; 347 Jane St. Toronto, ON; M6S 3z3
      Tel: (647) 243-2759.
    </StyledFooter>
  )
}

export default Footer
