import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ContactUsForm from '../components/Forms/ContactUs'
import BgImage from '../components/BgImage'
import { ContactUsPageQuery } from './__generated__/ContactUsPageQuery'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  max-width: 400px;
  max-height: calc(100vh + 155px);
  background: hsl(0, 0%, 91%);
  padding: 1rem 0;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 10px;
  p {
    font-weight: 800;
    margin-left: 35px;
  }
  box-shadow: 0 0.5rem 1rem hsla(0, 0%, 0%, 0.15) !important;
`
const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span,
  a {
    color: white;
  }
  a {
    text-decoration: underline;
  }
`

interface IPageQuery {
  data: ContactUsPageQuery
}

class ContactUs extends React.Component<IPageQuery> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data } = this.props
    const heroImage = data?.hero?.childImageSharp

    return (
      <>
        <Layout title={'About Us'}>
          <BgImage
            fluid={heroImage.fluid}
            title={'Contact Bibliotech'}
            height={'calc(100vh - 155px)'}
            mobileHeight={'calc(100vh + 155px)'}
            overlayColor={'hsla(0, 0%, 0%, 0.5)'}
          >
            <StyledContainer>
              <p>Please provide your comments below.</p>
              <ContactUsForm />
            </StyledContainer>
            <StyledSignUp>
              <span>
                Don't have an account yet?&nbsp;
                <Link to="/sign_up">Sign up for free</Link>
              </span>
            </StyledSignUp>
          </BgImage>
        </Layout>
      </>
    )
  }
}

export default ContactUs

export const pageQuery = graphql`
  query ContactUsPageQuery {
    hero: file(relativePath: { eq: "library_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1180, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
