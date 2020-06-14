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
interface IProps {
  signup: boolean
  terms: boolean
}

const SignUpCTA: React.FC<IProps> = ({ signup, terms }) => {
  return (
    <>
      <StyledSignUp>
        {terms ? (
          <>
            <span className="mb-1">
              By creating an account, you agree to the <Link to="/terms">Terms of Service.</Link>
            </span>
          </>
        ) : null}
        {signup ? (
          <span>
            Do you already have an account?&nbsp;
            <Link to="/sign_in">Sign in</Link>
          </span>
        ) : (
          <span>
            Don't have an account yet?&nbsp;
            <Link to="/sign_up">Sign up for free</Link>
          </span>
        )}
      </StyledSignUp>
    </>
  )
}

export default SignUpCTA
