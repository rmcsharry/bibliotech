import React from 'react'
import BodySection from '../../BodySection'

interface IProps {
  address: string
}

const Website: React.FC<IProps> = ({ address }) => {
  const url = address ? (address.includes('http') ? address : `https://${address}`) : null

  return (
    <BodySection title={'Website'}>
      <a className="pl-4" href={url} target="_blank">
        {url ? url : 'TBD'}
      </a>
    </BodySection>
  )
}

export default Website
