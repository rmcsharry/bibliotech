import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import BgImage from '../components/BgImage'
import { AboutPageQuery } from './__generated__/AboutPageQuery'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  max-width: 1200px;
  max-height: calc(100vh + 155px);
  background: white;
  padding: 2rem;
  margin: 50px auto;
  opacity: 0.88;
`

interface IPageQuery {
  data: AboutPageQuery
}

class AboutPage extends React.Component<IPageQuery> {
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
            title={'About Bibliotech'}
            height={'calc(100vh - 155px)'}
            mobileHeight={'calc(100vh + 155px)'}
            overlayColor={'hsla(0, 0%, 0%, 0.5)'}
          >
            <StyledContainer>
              <PageTitle title={'About Bibliotech'} />
              <p>
                Five years ago, when I decided to quit my job and strike out on my own as an independent specifications
                writer, I was faced with a set of unique challenges.You see, my business model had me working at
                different clients’ offices throughout the week.This made it difficult to keep track of my repository of
                industry contacts, specifically manufacturers’ technical representatives.The business card or binder
                that I needed was always at a different office or lost in the shuffle.
              </p>
              <p>
                So, I set out to build a comprehensive and up-to-date database of companies and their respective
                technical representatives. This proved to be an invaluable tool as I could easily connect with my
                industry contacts, saving me and my clients countless hours. Was there an urgent question about the
                availability of a product in a certain finish? Simple, just call the rep! How long was the warranty for
                this product? Just send a quick email. Together, we solved design challenges early on before they turned
                into expensive change orders! No guesswork. With the world facing a pandemic and most of us forced to
                work from home, I realized that many people are now in the situation I was in five years ago.
              </p>
              <p>
                That is why I decided to create Bibliotech. Bibliotech is a free comprehensive library of companies and
                their associated contacts, powered by a robust search engine. Did you have to ‘evacuate’ from your
                offices with little or no warning after your province instituted a lockdown? Did you forget to pack your
                Rolodex? Then Bibliotech might be for you. If you have not, already click here to sign up.
              </p>
              <p>
                While we are not first responders, or otherwise fighting on the frontlines of this pandemic, we consider
                this our own contribution to the Covid19 response. The only way we can beat this virus is to come
                together at a time when we’re forced to remain apart. In a way, I hope that Bibliotech can help us
                achieve this.
              </p>
              <p>Keep well.</p>
              <p>Juste Fanou, CSC, BSS, WELL AP, CAPM.</p>
            </StyledContainer>
          </BgImage>
        </Layout>
      </>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    hero: file(relativePath: { eq: "library_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1180, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
