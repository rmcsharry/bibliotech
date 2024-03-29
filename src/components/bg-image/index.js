import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

//REF: https://markoskon.com/gatsby-background-image-example/
const Parent = styled.div`
  position: relative;
  background-color: ${props => props.bc};
`

const FakeBgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.height};
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }

  @media screen and (max-width: 600px) {
    height: ${props => props.mobileHeight};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const BgImage = ({ fluid, title, height, mobileHeight, overlayColor, children, className }) => (
  <Parent bc={overlayColor}>
    <FakeBgImage fluid={fluid} title={title} height={height} mobileHeight={mobileHeight} />
    <Content className={className}>{children}</Content>
  </Parent>
)
BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}
BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: 'transparent',
  children: null,
  className: null,
}

export default BgImage
