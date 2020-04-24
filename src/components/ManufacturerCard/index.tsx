import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import labels from '../../../content/site/labels'
import IEdge from '../../types/edge'

const HeaderStyle = {
  color: 'white',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

const ManufacturerCard: React.FC<IEdge> = ({ node }) => {
  const name = node.data.Manufacturer || labels.notAvailable
  const thumbnail = node.data.Logo ? node.data.Logo[0].thumbnails?.full : null
  console.log('NODE', node)
  return (
    <Card style={{ width: '18rem' }} className="shadow bg-white m-2 m-md-3 m-xl-4">
      {/* <Card.Header className="bg-primary" style={HeaderStyle}>{name}</Card.Header> */}
      <Card.Img variant="top" src={thumbnail?.url} className="p-4" />
      <Card.Body className="d-flex flex-column mt-auto justify-content-end">
        <Card.Title className="font-weight-bold">{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  )
}
// justify-content: flex-end;
//     display: flex;
//     align-items: flex-end;
//     flex-direction: column;
export default ManufacturerCard
