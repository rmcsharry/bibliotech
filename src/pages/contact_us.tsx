import React from 'react'

import Layout from '../components/Layout'
import ContactUsForm from '../components/Forms/ContactUs'
import SignUpCTA from '../components/SignUpCTA'
import StyledBackgroundImage from '../components/StyledBackgroundImage'
import { StyledBackgroundWrapper } from '../helpers/StyledBackgroundWrapper'
import { StyledFormContainer } from '../helpers/StyledFormContainer'

class ContactUs extends React.Component<{}> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <>
        <Layout title={'Contact Us'}>
          <StyledBackgroundImage imageName="library">
            <StyledBackgroundWrapper>
              <StyledFormContainer>
                <p>Please provide your comments below.</p>
                <ContactUsForm />
              </StyledFormContainer>
              <SignUpCTA signup={true} terms={false} />
            </StyledBackgroundWrapper>
          </StyledBackgroundImage>
        </Layout>
      </>
    )
  }
}

export default ContactUs
