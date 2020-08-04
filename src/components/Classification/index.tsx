import React from 'react'
import { IClassification } from '../../types/edge'
import BodySection from '../body-section'

interface IProps {
  classifications: [IClassification]
}

const Classification: React.FC<IProps> = ({ classifications }) => {
  if (!classifications == null || classifications == undefined)
    return (
      <BodySection title="'MASTERFORMAT No.'">
        <em>
          <p>- Not available -</p>
        </em>
      </BodySection>
    )
  const list = classifications.map((item, index) => {
    return (
      <li key={`${item.recordId}-${index}`}>
        <p className="mb-0 font-weight-bold">{item.data.Section_Name}</p>
        <p className="mb-0">{item.data.Section_No}</p>
      </li>
    )
  })

  return (
    <BodySection title={'MASTERFORMAT No.'}>
      <ul style={{ listStyle: 'square' }}>{list}</ul>
    </BodySection>
  )
}

export default Classification
