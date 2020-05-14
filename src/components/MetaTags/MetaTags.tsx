import React, { FunctionComponent, ReactElement } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { MetaTagsProps } from './MetaTags.models'

export const MetaTags: FunctionComponent<MetaTagsProps> = ({
  seoData,
  lang = 'en',
  extraMetatags = [],
}): ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            # opengraphImage
          }
        }
      }
    `
  )

  const title: string = seoData?.metaTitle ?? site.siteMetadata.title
  const description: string =
    seoData?.metaDescription ?? site.siteMetadata.description
  const ogTitle: string = seoData?.opengraphTitle ?? title
  const ogDescription: string = seoData?.opengraphDescription ?? description
  const ogImage: string =
    seoData?.opengraphImage?.file?.url ?? site.siteMetadata.opengraphImage
  const twitterTitle: string = seoData?.twitterCardTitle ?? title
  const twitterDescription: string =
    seoData?.twitterCardDescription ?? description
  const twitterImage: string = seoData?.twitterCardImage?.file?.url ?? ogImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: ogDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: twitterTitle,
        },
        {
          name: `twitter:description`,
          content: twitterDescription,
        },
        {
          name: `twitter:image`,
          content: twitterImage,
        },
        {
          name: `twitter:widgets:theme`,
          content: 'light',
        },
        ...extraMetatags,
      ]}
    >
      <link rel="stylesheet" href="https://use.typekit.net/eld0ezk.css" />
    </Helmet>
  )
}
