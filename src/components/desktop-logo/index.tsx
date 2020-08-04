import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import styled from '@emotion/styled'
import { mq } from '../../helpers/mq'

const StyledDesktopImage = styled(Image)`
  display: none !important;

  ${mq('lg')} {
    display: inline-block !important;
  }
`

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}

const DesktopLogo: React.FC<{}> = ({}) => {
  const data = useStaticQuery<IQuery>(graphql`
    query DesktopLogoQuery {
      logo: file(absolutePath: { regex: "/bibliotech-logo.png/" }) {
        childImageSharp {
          fixed(width: 120, height: 44) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledDesktopImage fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
    </>
  )
}

export default DesktopLogo
