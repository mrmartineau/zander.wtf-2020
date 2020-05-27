import React, { FunctionComponent } from 'react'
import { Heading, Box, Container } from 'theme-ui'
import { Layout } from '../components/Layout'
import { Age } from '../components/Age'

const Bamber: FunctionComponent = () => {
  return (
    <Layout
      seoData={{
        title: 'Bamber Moses Martineau',
        description: 'Born on: August 23rd, 2017 at 6:24:00 AM GMT+1',
        slug: 'bamber',
      }}
    >
      <Box
        as="header"
        sx={{
          bg: 'mastheadBackground',
          color: 'mastheadText',
          p: 6,
          mb: 8,
          textAlign: 'center',
        }}
      >
        <Heading variant="articleTitle" as="h1">
          Bamber Moses Martineau
        </Heading>
        <Heading as="h2" variant="articleSubTitle">
          Born on: August 23rd, 2017 at 6:24:00 AM GMT+1
        </Heading>
      </Box>
      <Container as="article" sx={{ maxWidth: 'contentMaxWidth' }}>
        <Age dob="2017-08-23T06:24" />
      </Container>
    </Layout>
  )
}

export default Bamber
