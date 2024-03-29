import React, { Fragment } from 'react'

import { IFile } from '../../../../types/edge'
import { style } from 'typestyle'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.5rem',
})

interface IProps {
  downloads: [IFile]
}

const Downloadables: React.FC<IProps> = ({ downloads }) => {
  const files = downloads?.map((item, index) => {
    return (
      <Fragment key={`file-${item.id}`}>
        <a href={item.url}>
          <img
            className="p-2 mb-1 w-25 mx-auto"
            src={item.thumbnails.large.url}
            alt={`downloadable file ${index}`}
          ></img>
          <span style={{ color: 'blue' }}>{item.filename}</span>
        </a>
      </Fragment>
    )
  })

  return <Fragment>{files}</Fragment>
}

export default Downloadables
