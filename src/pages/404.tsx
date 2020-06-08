import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { Heading, Box, Styled } from 'theme-ui'

const ErrorPage: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: '404',
        description: 'This page does not exist',
      }}
    >
      <section>
        <Heading variant="pageHeading" as="h1">
          404
        </Heading>

        <Box p={4}>
          <Styled.h2>Page not found</Styled.h2>
          <Styled.p>
            Oops! This page you are looking for has been removed or relocated.
          </Styled.p>
        </Box>
      </section>
    </Layout>
  )
}

export default ErrorPage
