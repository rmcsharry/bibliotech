import React, { useState } from 'react'

import SignUpForm from '../components/forms/sign-up'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/sign-in-with-google'
import { withFirebase } from '../contexts/firebase'
import WaitSpinner from '../components/wait-spinner'
import SignUpCTA from '../components/sign-up-cta'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledFormContainer } from '../helpers/StyledFormContainer'
import { StyledBackgroundWrapper } from '../helpers/StyledBackgroundWrapper'

interface IProps {
  firebase: any
}

const SignUp: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'SignUp'}>
      <StyledBackgroundImage imageName="library">
        {isShowOverlay ? <WaitSpinner text="Authorizing..." /> : null}
        <StyledBackgroundWrapper minHeight="77vh">
          <StyledFormContainer>
            <p>Please sign up.</p>
            <SignUpForm firebase={firebase} parentCallback={value => handleCallback(value)} />
          </StyledFormContainer>
          <br></br>
          <SignInWithGoogle />
          <SignUpCTA signup={true} terms={true} />
        </StyledBackgroundWrapper>
      </StyledBackgroundImage>
    </Layout>
  )
}

export default withFirebase(SignUp)
