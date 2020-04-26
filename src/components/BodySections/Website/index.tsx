import React from 'react'
import BodySection from '../../BodySection'

interface IProps {
  address: string
}

const Website: React.FC<IProps> = ({ address }) => {
  const url = address.includes('http') ? address : `https://${address}`

  return (
    <BodySection title={'Website'}>
      <a className="pl-4" href={url}>
        {url}
      </a>
    </BodySection>
  )
}

export default Website
