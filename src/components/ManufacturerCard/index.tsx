import React, { useRef } from 'react'
import Card from 'react-bootstrap/Card'
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay'
import labels from '../../../content/site/labels'
import IEdge from '../../types/edge'
import { Link } from 'gatsby'
import Classification from '../Classification'

const TitleStyle = {
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.25rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

const ManufacturerCard: React.FC<IEdge> = ({ node }) => {
  const name = node.data.Manufacturer || labels.notAvailable
  const thumbnail = node.data.Logo ? node.data.Logo[0].thumbnails?.full : null
  const classifications = node.data.MASTER_FORMAT_CLASSIFICATION
  const recordId = node.recordId
  const target = useRef(null)

  return (
    <>
      <Card
        ref={target}
        style={{ width: '18rem', placeContent: 'flex-end' }}
        className="shadow bg-white m-2 m-md-3 m-xl-4"
      >
        <div style={{ height: '14rem' }} className="mx-auto d-flex align-items-center">
          <Card.Img variant="top" src={thumbnail?.url} className="p-4 mw-100 mh-100" />
        </div>
        <Card.Body className="d-flex flex-column mt-2 justify-content-end bg-light">
          <Card.Title className="font-weight-bold" style={TitleStyle}>
            {name}
          </Card.Title>
          <div className="d-flex flex-grow-1 flex-column mb-4 mt-2 px-1">
            <Classification classifications={classifications} />
          </div>
          <Link className="btn btn-primary" to={`/manufacturer/${recordId}`}>
            View Details
          </Link>
        </Card.Body>
      </Card>
      <Overlay target={target.current} placement="right">
        {props => <Tooltip id="overlay-example">{name}</Tooltip>}
      </Overlay>
    </>
  )
}

export default ManufacturerCard
