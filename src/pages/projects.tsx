import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { ProjectsList } from '../components/ProjectsList'
import { Heading } from 'theme-ui'

const Writing: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Projects',
        description: 'Past client and open-source projects',
      }}
    >
      <section>
        <Heading variant="pageHeading" as="h1">
          Projects
        </Heading>
        <ProjectsList />
      </section>
    </Layout>
  )
}

export default Writing
