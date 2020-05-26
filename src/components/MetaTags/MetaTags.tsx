import React, { FunctionComponent, ReactElement, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { MetaTagsProps } from './MetaTags.models'
import { SchemaOrg } from './SchemaOrg'
import { useThemeUI } from 'theme-ui'

export const MetaTags: FunctionComponent<MetaTagsProps> = ({
  seoData,
  lang = 'en',
  extraMetatags = [],
  isArticle = false,
}): ReactElement => {
  const { theme } = useThemeUI()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            # opengraphImage
          }
        }
      }
    `
  )

  const md = site.siteMetadata

  const title: string = seoData?.title ?? md.title
  const description: string = seoData?.description ?? md.description
  const ogTitle: string = seoData?.opengraphTitle ?? title
  const ogDescription: string = seoData?.opengraphDescription ?? description
  const ogImage: string = seoData?.opengraphImage ?? md.opengraphImage
  const twitterTitle: string = ogTitle
  const twitterDescription: string = ogDescription
  const twitterImage: string = ogImage

  let url = md.siteUrl
  const slug = seoData?.slug ?? ''

  if (isArticle) {
    url = `${md.siteUrl}/writing/${slug}`
  } else if (slug) {
    url = `${md.siteUrl}/${slug}`
  }

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        defaultTitle={md.title}
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
            content: md.author,
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
      >
        <link
          rel="alternate"
          href="/atom.xml"
          type="application/atom+xml"
          title="RSS Feed"
        />
        <meta name="theme-color" content={theme?.colors?.primary} />
        {seoData?.canonical && (
          <link rel="canonical" href={seoData.canonical}></link>
        )}
      </Helmet>
      <SchemaOrg
        isArticle={isArticle}
        url={url}
        title={title}
        image={ogImage}
        description={description}
        datePublished={seoData?.datePublished}
        dateModified={seoData?.dateModified}
        siteUrl={md.siteUrl}
        author={md.author}
        defaultTitle={md.title}
      />
    </Fragment>
  )
}
