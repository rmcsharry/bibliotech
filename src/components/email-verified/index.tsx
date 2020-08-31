import React from 'react'
import Layout from '../Layout'
import PageTitle from '../page-title'
import Row from 'react-bootstrap/Row'
import StyledBackgroundImage from '../styled-background-image'
import { StyledBackgroundWrapper } from '../../helpers/styled-background-wrapper'
import { StyledPageContainer } from '../../helpers/styled-page-container'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'

// NOTE:
// This was the default actionURL in firebase console:
// https://bibliotech-gatsby-e1100.firebaseapp.com/__/auth/action

const StyledMessage = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 60px;
`
const StyledFootnote = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 20px;
`
interface IProps {
  authUser?: any
}

const EmailVerified: React.FC<IProps> = ({ authUser }) => {
  const go = destination => {
    if (typeof window !== 'undefined') {
      if (authUser) window.location.reload()
      else navigate(destination)
    }
  }

  return (
    <Layout title={'About Us'}>
      <StyledBackgroundImage imageName="library">
        <StyledBackgroundWrapper minHeight="77vh">
          <StyledPageContainer>
            <PageTitle title={'Thank you'} />
            <Row className="justify-content-center">
              <StyledMessage>Your email address was confirmed</StyledMessage>
            </Row>

            {authUser ? (
              <Row className="justify-content-center">
                <Button className="ml-4" onClick={() => go('/manufacturers')}>
                  ACCESS THE LIBRARY
                </Button>
              </Row>
            ) : (
              <>
                <Row className="justify-content-center">
                  <Button className="ml-4" onClick={() => go('/sign-in')}>
                    PLEASE SIGN IN
                  </Button>
                </Row>
                <Row className="justify-content-center">
                  <StyledFootnote>(as this is a different device from the one you signed up with)</StyledFootnote>
                </Row>
              </>
            )}
          </StyledPageContainer>
        </StyledBackgroundWrapper>
      </StyledBackgroundImage>
    </Layout>
  )
}

export default EmailVerified
