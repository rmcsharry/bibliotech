import React from 'react'

import Layout from '../components/Layout'
import ContactUsForm from '../components/forms/contact-us'
import SignUpCTA from '../components/sign-up-cta'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledBackgroundWrapper } from '../helpers/styled-background-wrapper'
import { StyledFormContainer } from '../helpers/styled-form-container'

class ContactUs extends React.Component<{}> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <>
        <Layout title={'Contact Us'}>
          <StyledBackgroundImage imageName="library">
            <StyledBackgroundWrapper minHeight="77vh">
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
