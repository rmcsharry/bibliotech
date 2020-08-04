import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { TermsPageQuery } from './__generated__/TermsPageQuery'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledBackgroundWrapper } from '../helpers/styled-background-wrapper'
import { StyledPageContainer } from '../helpers/styled-page-container'

interface IPageQuery {
  data: TermsPageQuery
}

class AboutPage extends React.Component<IPageQuery> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data } = this.props
    const url = data.content.data.Attachments[0].url

    return (
      <>
        <Layout title={'Terms & Conditions'}>
          <StyledBackgroundImage imageName="library">
            <StyledBackgroundWrapper minHeight="77vh">
              <StyledPageContainer>
                {/* <PageTitle title={'About Bibliotech'} /> */}
                <object type="text/html" data={url}></object>
                {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
              </StyledPageContainer>
            </StyledBackgroundWrapper>
          </StyledBackgroundImage>
        </Layout>
      </>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query TermsPageQuery {
    content: airtableHtmlContent(data: { Name: { eq: "Terms and Conditions" } }) {
      data {
        Attachments {
          filename
          type
          url
        }
        Name
        Content
      }
    }
  }
`
