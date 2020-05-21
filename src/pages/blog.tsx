import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Hello, my name is Zander. I make websites',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
      <section>
        <Heading variant="pageHeading">Blog</Heading>
        <ArticleList />
      </section>
    </Layout>
  )
}

export default Writing
