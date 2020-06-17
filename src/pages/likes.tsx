import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { Feeds } from '../components/Feeds'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Likes',
        description: "Articles I've recently read and my recent bookmarks",
        opengraphImage: 'likes.jpg',
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
