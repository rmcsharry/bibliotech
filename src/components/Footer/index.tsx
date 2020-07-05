import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StyledFooter = styled.footer`
  background: black;
  min-height: 4rem;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
  padding: 0 1rem;
  a {
    margin-right: 10px;
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <OutboundLink href="http://www.jmfservices.net" className="text-white" style={{ textDecoration: 'underline' }}>
        © {new Date().getFullYear()} JmF Technical Documentation Solutions
      </OutboundLink>
      <div>
        <Link to="/terms" className="text-white" style={{ textDecoration: 'underline' }}>
          Terms of Service
        </Link>
        <Link to="/privacy" className="text-white" style={{ textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
      </div>
    </StyledFooter>
  )
}

export default Footer
