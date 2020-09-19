import React from 'react'
import { ITechRep } from '../../../../types/edge'
import { Envelope } from 'react-bootstrap-icons/'
import { Phone } from 'react-bootstrap-icons/'
import { style } from 'typestyle'

interface IProps {
  rep: ITechRep
}

const BreakStyle = style({
  wordBreak: 'break-all',
})

const TechRep: React.FC<IProps> = ({ rep }) => {
  return (
    <>
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
        <a href={`mailto:${rep.data.Email}`}>{rep.data.Email}</a>
      </p>
    </>
  )
}

export default TechRep
