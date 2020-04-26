import React from 'react'
import { IClassification } from '../../types/edge'
import BodySection from '../BodySection'

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
    <BodySection title={classifications.length > 1 ? 'Classifications' : 'Classification'}>
      <ul style={{ listStyle: 'square' }}>{list}</ul>
    </BodySection>
  )
}

export default Classification
