import React from 'react'
import BodySection from '../../BodySection'
import { ITechRep } from '../../../types/edge'
import { Envelope } from 'react-bootstrap-icons/'
import { Phone } from 'react-bootstrap-icons/'
import { style } from 'typestyle'

interface IProps {
  reps: [ITechRep]
}

const BreakStyle = style({
  wordBreak: 'break-all',
})

const TechReps: React.FC<IProps> = ({ reps }) => {
  const techReps = reps.map(rep => {
    return (
      <ul style={{ listStyle: 'square' }} key={rep.data.Email}>
        <li className="font-weight-bold">{rep.data.Technical_Rep_Name}</li>
        <p className="mb-0 p-0">
          <span className="text-info mr-2">
            <Phone />
          </span>
          {rep.data.Cell_Number}
        </p>
        <p className={`${BreakStyle} mb-0 p-0 text-lowercase`}>
          <span className="text-info mr-2">
            <Envelope />
          </span>
          {rep.data.Email}
        </p>
      </ul>
    )
  })
  return <BodySection title={'Technical Representatives'}>{techReps}</BodySection>
}

export default TechReps
