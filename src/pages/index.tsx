import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { ProjectsList } from '../components/ProjectsList'

interface HomeProps {
  data: {
    articles: {
      edges: {
        node: {
          frontmatter: {
            title: string
            subtitle: string
            date: string
            dateTimestamp: string
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
      <ArticleList />

      <TitleSeparator>Projects</TitleSeparator>
      <ProjectsList />

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
            date(formatString: "Do MMMM YYYY")
            dateTimestamp: date
          }
        }
      }
    }
  }
`
