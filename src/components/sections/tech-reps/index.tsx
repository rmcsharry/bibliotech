import React from 'react'
import Section from '../../section'
import { ITechRep } from '../../../types/edge'
import TechRep from './tech-rep'

interface IProps {
  reps: [ITechRep]
}

const TechReps: React.FC<IProps> = ({ reps }) => {
  const techReps = reps.map(rep => {
    return (
      <ul style={{ listStyle: 'square' }} key={rep.data.Email}>
        <TechRep rep={rep} />
      </ul>
    )
  })
  return <Section title={'Technical Representatives'}>{techReps}</Section>
}

export default TechReps
