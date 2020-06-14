import React, { useState } from 'react'

import SignUpForm from '../components/Forms/SignUp'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/SignInWithGoogle'
import { withFirebase } from '../contexts/Firebase'
import WaitSpinner from '../components/WaitSpinner'
import styled from '@emotion/styled'
import SignUpCTA from '../components/SignUpCTA'
import StyledBackgroundImage from '../components/StyledBackgroundImage'
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
        {isShowOverlay ? <WaitSpinner /> : null}
        <StyledBackgroundWrapper>
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
