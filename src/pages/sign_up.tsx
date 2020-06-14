import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SignUpForm from '../components/Forms/SignUp'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/SignInWithGoogle'
import { withFirebase } from '../contexts/Firebase'
import WaitSpinner from '../components/WaitSpinner'
import BgImage from '../components/BgImage'
import styled from '@emotion/styled'
import { FluidObject } from 'gatsby-image'
import SignUpCTA from '../components/SignUpCTA'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  max-width: 360px;
  max-height: calc(100vh + 155px);
  background: hsl(0, 0%, 91%);
  padding: 1rem 0;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 10px;
  p {
    font-weight: 800;
    margin-left: 35px;
  }
  box-shadow: 0 0.5rem 1rem hsla(0, 0%, 0%, 0.15) !important;
`
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

const SignUp: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)
  const heroImage = useStaticQuery<IQuery>(graphql`
    query SignUpBgImageQuery {
      hero: file(relativePath: { eq: "library_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'SignUp'}>
      <BgImage
        fluid={heroImage.hero.childImageSharp.fluid}
        title={''}
        height={'calc(100vh - 145px)'}
        mobileHeight={'calc(100vh + 145px)'}
        overlayColor={'hsla(0, 0%, 0%, 0.5)'}
      >
        {isShowOverlay ? <WaitSpinner /> : null}
        <StyledContainer>
          <p>Please sign up.</p>
          <SignUpForm firebase={firebase} parentCallback={value => handleCallback(value)} />
        </StyledContainer>
        <br></br>
        <SignInWithGoogle />
        <SignUpCTA signup={true} terms={true} />
      </BgImage>
    </Layout>
  )
}

export default withFirebase(SignUp)
