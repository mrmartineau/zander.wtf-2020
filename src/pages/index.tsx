import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { ArticleListItem } from '../components/ArticleListItem'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'

interface HomeProps {
  data: {
    articles: {
      edges: {
        node: {
          frontmatter: {
            title: string
            subtitle: string
            date: string
            slug: string
          }
          timeToRead: string
        }
      }[]
    }
  }
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <Layout>
      <TitleSeparator>Words</TitleSeparator>
      <Box p={4}>
        {data.articles.edges.map((item, index) => {
          const { title, subtitle, date, slug } = item.node.frontmatter
          return (
            <ArticleListItem
              key={index}
              slug={slug}
              title={title}
              subtitle={subtitle}
              date={date}
            />
          )
        })}
      </Box>

      <TitleSeparator>Projects</TitleSeparator>
      <Box p={4}>Project list</Box>
      <TitleSeparator>Reading</TitleSeparator>
      <Box p={4}>Reading list</Box>
      <TitleSeparator>Bookmarks</TitleSeparator>
      <Box p={4}>Bookmarks</Box>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    articles: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            title
            subtitle
            date(formatString: "Do MMM YYYY")
          }
        }
      }
    }
  }
`
