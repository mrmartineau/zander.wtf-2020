import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { Heading } from 'theme-ui'
import { Helmet } from 'react-helmet'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Hello, my name is Zander. I make websites',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <section>
        <Heading variant="pageHeading" as="h1">
          Blog
        </Heading>
        <ArticleList />
      </section>
    </Layout>
  )
}

export default Writing
