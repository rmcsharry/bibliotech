import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SignInForm from '../components/Forms/SignIn'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/SignInWithGoogle'
import { withFirebase } from '../contexts/Firebase'
import WaitSpinner from '../components/WaitSpinner'
import { FluidObject } from 'gatsby-image'
import SignUpCTA from '../components/SignUpCTA'
import StyledBackgroundImage from '../components/StyledBackgroundImage'
import { StyledFormContainer } from '../helpers/StyledFormContainer'
import { StyledBackgroundWrapper } from '../helpers/StyledBackgroundWrapper'

interface IProps {
  firebase: any
}

interface IQuery {
  hero: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const SignIn: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'Login'}>
      <StyledBackgroundImage imageName="library">
        {isShowOverlay ? <WaitSpinner /> : null}
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
