import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Heading, Box, Text, Container } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/Layout'

interface ArticleProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        subtitle: string
        date: string
        dateTimestamp: string
        modified?: string
        modifiedTimestamp?: string
        canonical?: string
        opengraphImage?: string
      }
      body: any
      timeToRead: string
      wordCount: {
        words: number
      }
    }
  }
  pageContext: {
    id: string
    previous: boolean
    next: boolean
    slug?: string
  }
  location: {
    pathname: string
  }
}

const Article: FunctionComponent<ArticleProps> = ({ data, pageContext }) => {
  if (!data) {
    return null
  }

  const {
    frontmatter: {
      title,
      subtitle,
      date,
      modified,
      dateTimestamp,
      modifiedTimestamp,
      canonical,
      opengraphImage,
    },
    body,
    timeToRead,
    wordCount,
  } = data.mdx

  return (
    <Layout
      seoData={{
        title,
        description: subtitle,
        datePublished: dateTimestamp,
        dateModified: modifiedTimestamp,
        slug: pageContext.slug,
        canonical,
        opengraphImage,
      }}
      isArticle={true}
    >
      <Box
        as="header"
        sx={{
          bg: 'mastheadBackground',
          color: 'mastheadText',
          p: 6,
          mb: 8,
          textAlign: 'center',
        }}
      >
        <Heading variant="articleTitle" as="h1">
          {title}
        </Heading>
        <Heading as="h2" variant="articleSubTitle">
          {subtitle}
        </Heading>
        <Text variant="articleMetadata">
          <time dateTime={dateTimestamp}>{date}</time>
          {modified && (
            <>
              {' '}
              ·{' '}
              <span>
                Updated <time dateTime={modifiedTimestamp}>{modified}</time>
              </span>{' '}
            </>
          )}
          · {timeToRead} minute{Number(timeToRead) > 1 && 's'} ·{' '}
          {wordCount.words} words
        </Text>
      </Box>
      <Container as="article" sx={{ maxWidth: 'contentMaxWidth' }}>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
        date(formatString: "Do MMMM YYYY")
        dateTimestamp: date
        modified(formatString: "Do MMMM YYYY")
        modifiedTimestamp: modified
        canonical
        opengraphImage
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`
