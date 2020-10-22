import React from 'react'
import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CaretLeftFill } from 'react-bootstrap-icons/'
import { navigate } from 'gatsby'

const ReturnFooter: React.FC = () => {
  const go = destination => {
    if (typeof window !== 'undefined') navigate(destination)
  }

  return (
    <Row>
      <Col className="text-center">
        <Button className="ml-4" onClick={() => go('/manufacturers')}>
          <CaretLeftFill style={{ marginTop: '-5px', marginRight: '2px' }} />
          RETURN TO THE LIBRARY
        </Button>
      </Col>
    </Row>
  )
}

export default ReturnFooter
