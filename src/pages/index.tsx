import React, { FunctionComponent } from 'react'
import { Box, Text, Heading } from 'theme-ui'
import { Layout } from '../components/Layout'

const Home: FunctionComponent = () => (
  <Layout
    seoData={{
      title: 'Hello, my name is Zander. I make websites',
      description: 'I am a contract front-end developer based in London.',
    }}
  >
    <section>
      <Box sx={{ p: 'padding', mt: 6 }}>
        <Heading as="h1" variant="introTitle">
          <Text variant="introSuperTitle">Hello, my name is Zander</Text>
          {'I make websites'.split('').map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Heading>
        <Text variant="introDescription" sx={{ maxWidth: 'contentMaxWidth' }}>
          ..and other tools for the web developers. I’m a little bit obsessed
          with design systems and have a few too many side-projects on the go.
        </Text>
      </Box>
    </section>
  </Layout>
)

export default Home
