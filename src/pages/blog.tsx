import React, { FunctionComponent } from 'react'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Hello, my name is Zander. I make websites',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
      <section>
        <TitleSeparator title="Blog" />
        <ArticleList />
      </section>
    </Layout>
  )
}

export default Writing
