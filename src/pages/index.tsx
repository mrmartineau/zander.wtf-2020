import React, { FunctionComponent } from 'react'
import { Box, Text, Heading, Link } from 'theme-ui'
import { Layout } from '../components/Layout'

const Home: FunctionComponent = () => (
  <Layout
    seoData={{
      title: 'Hello, my name is Zander. I make websites',
      description: 'I am a contract front-end developer based in London.',
      opengraphImage: 'home.jpg',
    }}
  >
    <section>
      <Box sx={{ p: 'padding', mt: 6 }}>
        <Heading as="h1" variant="introTitle">
          <Text variant="introSuperTitle">Hello, my name is Zander</Text>
          <span>I</span> <span>make</span> <span>websites</span>
        </Heading>
        <Text variant="introDescription" sx={{ maxWidth: 'contentMaxWidth' }}>
          &hellip;and web apps, and{' '}
          <Link href="https://github.com/mrmartineau">other things</Link> for
          the web. I’m a little bit obsessed with design systems and am trying
          to curb my side-project addiction.
        </Text>
      </Box>
    </section>
  </Layout>
)

export default Home
