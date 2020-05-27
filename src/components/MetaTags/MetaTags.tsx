import React, { FunctionComponent, ReactElement, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { MetaTagsProps } from './MetaTags.models'
import { SchemaOrg } from './SchemaOrg'
import { useThemeUI } from 'theme-ui'

export const MetaTags: FunctionComponent<MetaTagsProps> = ({
  seoData,
  lang = 'en',
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
            opengraphImage
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
    url = `${md.siteUrl}/blog/${slug}`
  } else if (slug) {
    url = `${md.siteUrl}/${slug}`
  }

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        defaultTitle={md.title}
        titleTemplate="%s — zander.wtf"
      >
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={ogImage} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <link rel="author" href="Zander Martineau" />
        <link rel="me" href="https://github.com/mrmartineau" type="text/html" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isArticle && <meta property="og:type" content="article" />}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@MrMartineau" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:widgets:theme" content="dark" />

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
