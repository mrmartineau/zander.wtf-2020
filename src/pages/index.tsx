import React, { FunctionComponent } from 'react'
import { Box, Text, Heading, Link } from 'theme-ui'
import { Layout } from '../components/Layout'
import { Link as GatsbyLink } from 'gatsby'

const Home: FunctionComponent = () => (
  <Layout
    seoData={{
      title: 'Hello, my name is Zander. I make websites',
      description: 'I am a contract product engineer based in London.',
      opengraphImage: 'home.jpg',
    }}
  >
    <section>
      <Box sx={{ p: 'padding', mt: 6 }}>
        <Heading as="h1" variant="introTitle">
          <Text variant="introSuperTitle">Hello, my name is Zander</Text>
          <span>I</span> <span>m</span>
          <span>a</span>
          <span>k</span>
          <span>e</span> <span>w</span>
          <span>e</span>
          <span>b</span>
          <span>s</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
        </Heading>
        <Text variant="introDescription" sx={{ maxWidth: 'contentMaxWidth' }}>
          &hellip;and{' '}
          <Link href="https://github.com/mrmartineau">other things</Link> for
          the web. I am a contract product engineer based in London working on
          apps and design systems by day, and side-projects by night. Feel free
          to say{' '}
          <Link href="mailto:hi@zander.wtf?subject=Hi&body=Hi%20Zander...">
            hello
          </Link>
          , fork my <Link href="https://github.com/mrmartineau">code</Link>,
          read my{' '}
          <Link href="/blog" as={GatsbyLink}>
            blog
          </Link>{' '}
          or share my <Link href="https://twitter.com/mrmartineau">tweets</Link>
          .
        </Text>
      </Box>
    </section>
  </Layout>
)

export default Home
