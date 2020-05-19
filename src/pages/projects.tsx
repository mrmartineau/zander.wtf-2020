import React, { FunctionComponent } from 'react'
import { TitleSeparator } from '../components/TitleSeparator'
import { Layout } from '../components/Layout'
import { ProjectsList } from '../components/ProjectsList'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Hello, my name is Zander. I make websites',
        description: "I'm a contract front-end developer based in London.",
      }}
    >
      <section>
        <TitleSeparator title="Projects" />
        <ProjectsList />
      </section>
    </Layout>
  )
}

export default Writing
