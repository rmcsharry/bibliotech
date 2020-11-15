import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import { IFile } from '../../../../types/edge'

interface IProps {
  companies: [string]
  logos: [IFile]
}

const Represented: React.FC<IProps> = ({ companies, logos }) => {
  const represented = companies?.map((item, index) => {
    return (
      <Fragment key={`represented-${index}`}>
        <a style={{ width: '150px' }} className="p-1" href={`https://www.bibliotech.ca/manufacturer/${item}`}>
          <img
            key={`feature-image-${index}`}
            className="p-2 mb-1 w-100 mx-auto"
            src={logos[index].thumbnails.large.url}
            alt={`represented company logo ${index}`}
          ></img>
        </a>
      </Fragment>
    )
  })

  return <Row>{represented}</Row>
}

export default Represented
