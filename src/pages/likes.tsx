import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { Feeds } from '../components/Feeds'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Likes',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
      <section>
        <Heading variant="pageHeading" as="h1">
          Likes
        </Heading>
        <Feeds />
      </section>
    </Layout>
  )
}

export default Writing
