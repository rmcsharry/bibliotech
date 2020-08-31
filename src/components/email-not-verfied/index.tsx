import React, { useState, useEffect } from 'react'
import { EmailService } from '../../services/email.service'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DesktopLogo from '../desktop-logo'

const StyledOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-x: hidden;
  transition: 0.2s;
`

interface IProps {
  authUser: any
  isVerifyFailed?: boolean
}
const EmailNotVerified: React.FC<IProps> = ({ authUser, isVerifyFailed }) => {
  const [isSentAgain, setIsSentAgain] = useState(false)
  const [buttonText, setButtonText] = useState('Click to resend')

  useEffect(() => {
    EmailService.sendEmailVerification(authUser)
  }, [])

  const sendAgain = () => {
    EmailService.sendEmailVerification(authUser)
    setIsSentAgain(true)
    setButtonText('Email sent')
  }

  return (
    <StyledOverlay>
      <Container className="d-flex flex-column h-75">
        <Row className="mx-auto mt-4">
          <DesktopLogo></DesktopLogo>
        </Row>
        <Row className="mx-auto my-auto">
          <Col className="align-self-center">
            {isVerifyFailed ? (
              <>
                <h4 className="text-center mb-4 text-white">Sorry but it seems that link has expired</h4>
                <h6 className="text-center mb-4 text-white">We have sent you a new link.</h6>
              </>
            ) : (
              <>
                <h4 className="text-center mb-4 text-white">Thanks for signing up for Bibliotech!</h4>
                <h6 className="text-center mb-4 text-white">We have sent you a link to verify your email address.</h6>
              </>
            )}
            <h6 className="text-center mb-4 text-white">Don't forget to check your spam folder</h6>
          </Col>
        </Row>
        <Row className="mx-auto my-auto">
          <Col className="align-self-center">
            <Button variant="secondary" onClick={() => sendAgain()} disabled={isSentAgain}>
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </StyledOverlay>
  )
}

export default EmailNotVerified
