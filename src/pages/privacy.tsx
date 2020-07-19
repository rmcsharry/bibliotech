import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PageTitle from '../components/PageTitle'
import { PrivacyPageQuery } from './__generated__/PrivacyPageQuery'
import StyledBackgroundImage from '../components/StyledBackgroundImage'
import { StyledBackgroundWrapper } from '../helpers/StyledBackgroundWrapper'
import { StyledPageContainer } from '../helpers/StyledPageContainer'

interface IPageQuery {
  data: PrivacyPageQuery
}

class PrivacyPage extends React.Component<IPageQuery> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data } = this.props
    const url = data.content.data.Attachments[0].url

    return (
      <>
        <Layout title={'Privacy Policy'}>
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

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPageQuery {
    content: airtableHtmlContent(data: { Name: { eq: "Privacy Policy" } }) {
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