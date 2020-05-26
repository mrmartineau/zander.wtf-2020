import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Blog',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
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
