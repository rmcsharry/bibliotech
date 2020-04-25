import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import labels from '../../../content/site/labels'
import IEdge from '../../types/edge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TitleStyle = {
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.25rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginBottom: '2rem',
}
const ManufacturerCard: React.FC<IEdge> = ({ node }) => {
  const name = node.data.Manufacturer || labels.notAvailable
  const thumbnail = node.data.Logo ? node.data.Logo[0].thumbnails?.full : null
  const classifications = node.data.MASTER_FORMAT_CLASSIFICATION
  console.log('NODE', node)
  return (
    <Card style={{ width: '18rem', placeContent: 'flex-end' }} className="shadow bg-white m-2 m-md-3 m-xl-4">
      <Row xs={1}>
        <Col xs={12}>
          <Card.Img variant="top" src={thumbnail?.url} className="p-4" />
        </Col>

        <Col xs={12}>
          <Card.Body className="d-flex flex-column mt-auto">
            <Card.Title className="font-weight-bold" style={TitleStyle}>
              {name}
            </Card.Title>
            <Card.Text>
              {classifications.length > 1 ? <h6>Classifications:</h6> : <h6>Classification:</h6>}
              <ul>
                {classifications.map(item => {
                  return <li key={item}>{item}</li>
                })}
              </ul>
            </Card.Text>

            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
// justify-content: flex-end;
//     display: flex;
//     align-items: flex-end;
//     flex-direction: column;
export default ManufacturerCard
