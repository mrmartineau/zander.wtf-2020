import React, { FunctionComponent, Fragment } from 'react'
import { Heading, Box, Flex, Link, Styled, Image } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import Img from 'gatsby-image'

import { ProjectFrontmatter } from '../ProjectsList/ProjectsList'
import { ProjectListItemTitle } from '../ProjectListItemTitle'
import { Separator } from '../Separator'

interface WorkListItemProps {
  frontmatter: ProjectFrontmatter
  body: string
}

export const ProjectListItem: FunctionComponent<WorkListItemProps> = ({
  frontmatter,
  body,
}) => {
  console.log('frontmatter', frontmatter)
  return (
    <Box
      as="details"
      sx={{
        borderBottom: '2px solid #fff',
      }}
      // open
    >
      <Box
        as="summary"
        sx={{
          p: 4,
          listStyle: 'none',
          '&::-webkit-details-marker': {
            display: 'none',
          },
          '&:hover': {
            cursor: 'pointer',
          },
          '&:hover h3,&:focus h3': {
            color: 'hsla(0,0%,95%,.01)',
            textShadow: 'none',
            MozTextStrokeColor: '#fff',
            WebkitTextStrokeColor: '#fff',
            textStrokeColor: '#fff',
            MozTextStrokeWidth: '1px',
            WebkitTextStrokeWidth: '1px',
            textStrokeWidth: '1px',
          },
        }}
      >
        <ProjectListItemTitle
          title={frontmatter.title}
          year={frontmatter.year}
        />
      </Box>

      <Separator sx={{ m: 0, ml: 4 }} />

      <Box
        sx={{
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: '70ch' }}>
          <Heading variant="projectListItemDescription" as="h4">
            {frontmatter.description}
          </Heading>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>

        <Box sx={{ overflowX: 'auto' }}>
          {frontmatter.images && (
            <Flex sx={{}}>
              {frontmatter.images.map(item => (
                <Image
                  src={item.path.childImageSharp.resize.src}
                  alt={item.name}
                  sx={{
                    height: ['300px', '550px'],
                    maxWidth: 'unset !important',
                    minWidth: 'unset !important',
                    mr: 5,
                  }}
                  key={item.name}
                  loading="lazy"
                />
              ))}
            </Flex>
          )}
        </Box>

        {frontmatter.info && (
          <Fragment>
            <Separator />
            <Box sx={{ maxWidth: '70ch' }}>
              <Styled.h4>Project info</Styled.h4>
              <dl>
                {frontmatter.info.map(({ key, value, link }, index) => (
                  <Box
                    key={index}
                    sx={{ display: [null, 'flex'], fontSize: 1 }}
                  >
                    <Box
                      sx={{
                        fontStyle: 'italic',
                        display: [null, 'block'],
                        width: [null, '150px'],
                        marginRight: [null, '1rem'],
                        marginBottom: [null, '0.5rem'],
                        flexShrink: [null, 0],
                      }}
                    >
                      {key}
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      {link ? <Link href={link}>{value}</Link> : value}
                    </Box>
                  </Box>
                ))}
              </dl>
            </Box>
          </Fragment>
        )}
      </Box>
    </Box>
  )
}
