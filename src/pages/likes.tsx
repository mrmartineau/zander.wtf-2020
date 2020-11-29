import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { Feed } from '../components/Feed'
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
        <Feed />
      </section>
    </Layout>
  )
}

export default Writing
