import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const ThankYou: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout title={'Thank you'}>
        <PageTitle title={'Your message was sent'} />
        <br></br>
        <Container fluid>
          <Row className="justify-content-center">
            <h5>Thank you for contacting us.</h5>
          </Row>
          <br></br>
          <Row className="justify-content-center">
            <p>We will respond as soon as we can.</p>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default ThankYou
