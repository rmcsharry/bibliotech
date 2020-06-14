import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

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
      <a href="http://www.jmfservices.net" className="text-white" style={{ textDecoration: 'underline' }}>
        © {new Date().getFullYear()} JmF Technical Documentation Solutions
      </a>
      <Link to="/terms" className="text-white" style={{ textDecoration: 'underline' }}>
        Terms of Service
      </Link>
    </StyledFooter>
  )
}

export default Footer
