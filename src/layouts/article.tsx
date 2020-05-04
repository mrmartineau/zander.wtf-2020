import { graphql } from 'gatsby'
import React, { FunctionComponent, Fragment } from 'react'
import { Heading, Box, Container } from 'theme-ui'
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
        modified: string
        modifiedTimestamp: string
      }
      body: any
      timeToRead: string
    }
  }
  pageContext: {
    id: string
    previous: boolean
    next: boolean
    hasUntagged: boolean
    basePath?: string
  }
  location: {
    pathname: string
  }
}

const Article: FunctionComponent<ArticleProps> = ({ data }) => {
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
    },
    body,
    timeToRead,
  } = data.mdx

  return (
    <Layout>
      <article>
        <Container>
          <Box as="header" mb={4}>
            <Heading as="h1" variant="noteTitle">
              {title}
            </Heading>
            <Heading as="h2">{subtitle}</Heading>
            <time dateTime={dateTimestamp}>{date}</time> · Time to read:{' '}
            {timeToRead} minutes
          </Box>

          <MDXRenderer>{body}</MDXRenderer>

          <footer>
            {modified && (
              <Fragment>
                Article updated{' '}
                <time dateTime={modifiedTimestamp}>{modified}</time>
              </Fragment>
            )}
          </footer>
        </Container>
      </article>
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
        date(formatString: "Do MMM YYYY")
        dateTimestamp: date
        modified(formatString: "Do MMM YYYY")
        modifiedTimestamp: modified
      }
      timeToRead
    }
  }
`
