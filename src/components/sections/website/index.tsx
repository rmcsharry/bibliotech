import React from 'react'
import Section from '../../section'
import { OutboundLink } from 'gatsby-plugin-gtag'

interface IProps {
  address: string
}

const Website: React.FC<IProps> = ({ address }) => {
  const url = address ? (address.includes('http') ? address : `https://${address}`) : null

  return (
    <Section title={'Website'}>
      <OutboundLink href={url} className="pl-4" target="_blank">
        {url ? url : 'TBD'}
      </OutboundLink>
    </Section>
  )
}

export default Website
