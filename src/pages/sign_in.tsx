import React, { useState } from 'react'
import SignInForm from '../components/forms/sign-in'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/sign-in-with-google'
import { withFirebase } from '../contexts/firebase'
import WaitSpinner from '../components/wait-spinner'
import SignUpCTA from '../components/sign-up-cta'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledFormContainer } from '../helpers/styled-form-container'
import { StyledBackgroundWrapper } from '../helpers/styled-background-wrapper'

interface IProps {
  firebase: any
}

const SignIn: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'Login'}>
      <StyledBackgroundImage imageName="library">
        {isShowOverlay ? <WaitSpinner text="Authorizing..." /> : null}
        <StyledBackgroundWrapper minHeight="77vh">
          <StyledFormContainer>
            <p>Please sign in.</p>
            <SignInForm firebase={firebase} parentCallback={value => handleCallback(value)} />
          </StyledFormContainer>
          <br></br>
          <SignInWithGoogle />
          <SignUpCTA signup={false} terms={false} />
        </StyledBackgroundWrapper>
      </StyledBackgroundImage>
    </Layout>
  )
}

export default withFirebase(SignIn)
