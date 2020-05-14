import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box, Text, Heading } from 'theme-ui'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { ProjectsList } from '../components/ProjectsList'
import { Feeds } from '../components/Feeds'

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
      <section>
        <Box sx={{ p: 4, my: 9 }}>
          <Heading as="h1" variant="introTitle">
            <Text variant="introSuperTitle">Hello, my name is Zander</Text>I
            make websites
          </Heading>
          <Box sx={{ maxWidth: '70ch' }}>
            <Text variant="introDescription">
              I'm a contract front-end developer based in London. I’m a little
              bit obsessed with design systems and have far too many
              side-projects on the go at one time.
            </Text>
          </Box>
        </Box>
      </section>

      <section>
        <TitleSeparator title="Words" />
        <ArticleList />
      </section>

      <section>
        <TitleSeparator title="Projects" />
        <ProjectsList />
      </section>

      <section>
        <TitleSeparator title="Feeds" />
        <Feeds />
      </section>
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
