import React, { useEffect, useState } from 'react'
import { EmailService } from '../../services/email.service'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DesktopLogo from '../DesktopLogo'

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
}
const EmailNotVerified: React.FC<IProps> = ({ authUser }) => {
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
            <h4 className="text-center mb-4 text-white">Please verify your email address</h4>
            <h6 className="text-center mb-4 text-white">Check your inbox and spam folders</h6>
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
