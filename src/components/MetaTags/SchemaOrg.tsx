import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

interface SchemaOrgProps {
  title: string
  author: string
  siteUrl: string
  datePublished?: string
  dateModified?: string
  defaultTitle: string
  description: string
  image: string
  isArticle?: boolean
  url: string
}

export const SchemaOrg: FunctionComponent<SchemaOrgProps> = React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    dateModified,
    defaultTitle,
    description,
    image,
    isArticle,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ]

    const schema = isArticle
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: 'https://zander.wtf/blog',
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Zander',
              logo: {
                '@type': 'ImageObject',
                url: 'https://zander.wtf/opengraph.jpg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
            datePublished,
            dateModified: dateModified ?? datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
