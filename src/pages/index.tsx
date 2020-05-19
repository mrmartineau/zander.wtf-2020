import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Box, Text, Heading } from 'theme-ui'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'
import { Feeds } from '../components/Feeds'
import { ArrowDown } from '../components/Icons/ArrowDown'

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
    <Layout
      seoData={{
        title: 'Hello, my name is Zander. I make websites',
        description: 'I am a contract front-end developer based in London.',
      }}
    >
      <section>
        <Box sx={{ p: 4, mt: 6 }}>
          <Heading as="h1" variant="introTitle">
            <Text variant="introSuperTitle">Hello, my name is Zander</Text>I
            make websites
          </Heading>
          <Text variant="introDescription" sx={{ maxWidth: 'contentMaxWidth' }}>
            I am a contract front-end developer based in London. I’m a little
            bit obsessed with design systems and have far too many side-projects
            on the go at one time.
          </Text>
        </Box>
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
