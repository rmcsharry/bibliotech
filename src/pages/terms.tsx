import React from 'react'
import Layout from '../components/Layout'
import StyledBackgroundImage from '../components/StyledBackgroundImage'
import { StyledBackgroundWrapper } from '../helpers/StyledBackgroundWrapper'

const Terms: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout title={'Terms'}>
        <StyledBackgroundImage imageName="coffee">
          <StyledBackgroundWrapper minHeight="82vh">
            <h1 className="text-white">Coming soon</h1>
          </StyledBackgroundWrapper>
        </StyledBackgroundImage>
      </Layout>
    </>
  )
}

export default Terms
