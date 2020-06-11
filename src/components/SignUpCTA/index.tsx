import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: white;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  span,
  a {
    color: white;
  }
  a {
    text-decoration: underline;
  }
`

const SignUpCTA: React.FC<{}> = () => {
  return (
    <>
      <StyledSignUp>
        <span>
          Don't have an account yet?&nbsp;
          <Link to="/sign_up">Sign up for free</Link>
        </span>
      </StyledSignUp>
    </>
  )
}

export default SignUpCTA
