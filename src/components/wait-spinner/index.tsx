import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
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

export default function WaitSpinner({ text }) {
  return (
    <StyledOverlay>
      <Container className="d-flex flex-column h-75">
        <Row className="mx-auto mt-4">
          <DesktopLogo></DesktopLogo>
        </Row>
        <Row className="mx-auto my-auto">
          <Col className="align-self-center">
            <h4 className="text-center mb-4 text-white">{text}</h4>
            <Row>
              <Spinner animation="border" variant="danger" className="mx-auto" />
            </Row>
            <h4 className="text-center mt-4 text-white">Please wait</h4>
          </Col>
        </Row>
      </Container>
    </StyledOverlay>
  )
}
