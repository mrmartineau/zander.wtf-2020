import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectsList } from '../components/ProjectsList'
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
        <Heading variant="pageHeading">Projects</Heading>
        <ProjectsList />
      </section>
    </Layout>
  )
}

export default Writing
