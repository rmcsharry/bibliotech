import React from 'react'
import BodySection from '../../BodySection'
import { ITechRep } from '../../../types/edge'
import Rep from './Rep'

interface IProps {
  reps: [ITechRep]
}

const TechReps: React.FC<IProps> = ({ reps }) => {
  const techReps = reps.map(rep => {
    return (
      <ul style={{ listStyle: 'square' }} key={rep.data.Email}>
        <Rep rep={rep} />
      </ul>
    )
  })
  return <BodySection title={'Technical Representatives'}>{techReps}</BodySection>
}

export default TechReps
