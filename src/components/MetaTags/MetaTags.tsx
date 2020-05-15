import React, { FunctionComponent, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
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

  const title: string = seoData?.title ?? site.siteMetadata.title
  const description: string =
    seoData?.description ?? site.siteMetadata.description
  const ogTitle: string = seoData?.opengraphTitle ?? title
  const ogDescription: string = seoData?.opengraphDescription ?? description
  const ogImage: string =
    seoData?.opengraphImage ?? site.siteMetadata.opengraphImage
  const twitterTitle: string = ogTitle
  const twitterDescription: string = ogDescription
  const twitterImage: string = ogImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle="Hello, my name is Zander. I make websites"
      titleTemplate="%s — zander.wtf"
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
          content: 'dark',
        },
        ...extraMetatags,
      ]}
    />
  )
}
