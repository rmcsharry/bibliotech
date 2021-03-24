import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/page-title'
import { AboutPageQuery } from './__generated__/AboutPageQuery'
import StyledBackgroundImage from '../components/styled-background-image'
import { StyledBackgroundWrapper } from '../helpers/styled-background-wrapper'
import { StyledPageContainer } from '../helpers/styled-page-container'

interface IPageQuery {
  data: AboutPageQuery
}

class AboutPage extends React.Component<IPageQuery> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data } = this.props
    const mdContent = data?.content?.fields?.markdownContent?.childMarkdownRemark?.html ?? ''
    return (
      <>
        <Layout title={'About Us'}>
          <StyledBackgroundImage imageName="library">
            <StyledBackgroundWrapper minHeight="77vh">
              <StyledPageContainer>
                <PageTitle title={'About Bibliotech'} />
                {/* <object type="text/html" data={url}></object> */}
                {<div dangerouslySetInnerHTML={{ __html: mdContent }}/>}
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
  query AboutPageQuery {
    content: airtableHtmlContent(data: { Name: { eq: "About Us" } }) {
      fields {
        markdownContent {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
