import React, { useState } from 'react'

import SignUpForm from '../components/forms/sign-up'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/sign-in-with-google'
import { withFirebase } from '../firebase'
import WaitSpinner from '../components/wait-spinner'
import SignUpCTA from '../components/sign-up-cta'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledFormContainer } from '../helpers/styled-form-container'
import { StyledBackgroundWrapper } from '../helpers/styled-background-wrapper'

interface IProps {
  firebase: any
}

const SignUp: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = (value: React.SetStateAction<boolean>) => {
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
          <br />
          <SignInWithGoogle />
          <SignUpCTA signup={true} terms={true} />
        </StyledBackgroundWrapper>
      </StyledBackgroundImage>
    </Layout>
  )
}

export default withFirebase(SignUp)
