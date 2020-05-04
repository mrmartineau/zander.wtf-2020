import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Heading, Box } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ArticleProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
      body: any
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
    frontmatter: { title },
    body,
  } = data.mdx

  return (
    <article>
      <Box as="header" mb={4}>
        <Heading as="h1" variant="noteTitle">
          {title}
        </Heading>
      </Box>

      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`
