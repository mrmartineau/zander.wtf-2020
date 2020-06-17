import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ArticleList } from '../components/ArticleList'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Blog',
        description: 'Articles and nerdery',
        opengraphImage: 'blog.jpg',
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
