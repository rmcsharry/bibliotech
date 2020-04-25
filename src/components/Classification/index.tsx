import React from 'react'
import { IClassification } from '../../types/edge'

interface IProps {
  classifications: [IClassification]
}

const Classification: React.FC<IProps> = ({ classifications }) => {
  const list = classifications.map((item, index) => {
    return (
      <li key={`${item.recordId}-${index}`}>
        <p className="mb-0 font-weight-bold">{item.data.Section_Name}</p>
        <p className="mb-0">{item.data.Section_No}</p>
      </li>
    )
  })

  return (
    <>
      {classifications.length > 1 ? <h6>Classifications:</h6> : <h6>Classification:</h6>}
      <ul>{list}</ul>
    </>
  )
}

export default Classification
