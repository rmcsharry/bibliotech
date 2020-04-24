import * as React from 'react'
import Helmet from 'react-helmet'

import { config } from '../../../config'

interface IProps {
  description?: string
  lang?: string
  meta?: any // eslint-disable-line
  title: string
  pageUrl?: string
}

const {
  siteTitle,
  siteDescription,
  siteLanguage,
  siteUrl,
  author,
  siteIcons: { image },
  googleSearchConsoleTag,
} = config

const SEO: React.FC<IProps> = ({
  description: metaDescription = siteDescription,
  lang = siteLanguage,
  meta = [],
  title = siteTitle,
  pageUrl,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title !== siteTitle ? `%s | ${siteTitle}` : `%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: pageUrl || siteUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: title !== siteTitle ? `article` : `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:url`,
          content: pageUrl || siteUrl,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: googleSearchConsoleTag.name,
          content: googleSearchConsoleTag.content,
        },
      ].concat(meta)}
      // We add the 800 weight because the bootstrap theme we chose does not include it
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap',
        },
      ]}
      // moved to gatsby-browser.js as a local dependency instead of CDN (as it will then live wherever we deploy the site)
      // link={[
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://bootswatch.com/4/lux/bootstrap.min.css'
      //   }
      // ]}
    />
  )
}

export default SEO
