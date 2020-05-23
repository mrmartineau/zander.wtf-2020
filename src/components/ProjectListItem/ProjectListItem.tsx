import React, { FunctionComponent, Fragment } from 'react'
import { Heading, Box, Flex, Link, Styled, Image } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
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
  return (
    <Box
      as="details"
      sx={{
        borderBottom: theme => `1px solid ${theme.colors.text}`,
        '&:hover': {
          bg: 'primary',
        },
        '&[open]:hover': {
          bg: 'background',
        },
      }}
      // open
    >
      <Box
        as="summary"
        sx={{
          p: 'padding',
          overflowX: 'hidden',
          // whiteSpace: ['unset', 'pre'],
          '&::-webkit-details-marker': {
            display: 'none',
          },
          '&::-moz-details-marker': {
            display: 'none',
          },
          '&::details-marker': {
            display: 'none',
          },
          '&::marker': {
            display: 'none',
          },
          '&:hover': {
            cursor: 'pointer',
          },
          ':not([open]) &:hover h3': {
            variant: 'text.projectListItemTitleActive',
          },
        }}
      >
        <ProjectListItemTitle
          title={frontmatter.title}
          year={frontmatter.year}
        />
      </Box>

      <Separator sx={{ m: 0, ml: 'padding' }} />

      <Box sx={{ p: 'padding' }}>
        <Box sx={{ maxWidth: 'contentMaxWidth' }}>
          {frontmatter.description && (
            <Heading variant="projectListItemDescription" as="h4">
              {frontmatter.description}
            </Heading>
          )}
          <MDXRenderer>{body}</MDXRenderer>
        </Box>

        <Box
          sx={{
            overflowX: 'auto',
            '::-webkit-scrollbar': {
              width: '0.8rem',
              height: '0.8rem',
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: 'scrollbarBg',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'scrollbar',
            },
          }}
        >
          {frontmatter.images && (
            <Flex tabIndex={0}>
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
            <Box sx={{ maxWidth: 'contentMaxWidth' }}>
              <Styled.h4>Project info</Styled.h4>
              <dl>
                {frontmatter.info.map(({ key, value, link }, index) => (
                  <Box
                    key={index}
                    sx={{ display: [null, 'flex'], fontSize: 1 }}
                  >
                    <Box
                      as="dt"
                      sx={{
                        variant: 'text.monoVariantItalic',
                        display: [null, 'block'],
                        width: [null, '150px'],
                        marginRight: [null, '1rem'],
                        marginBottom: [null, '0.5rem'],
                        flexShrink: [null, 0],

                        opacity: '0.8',
                      }}
                    >
                      {key}
                    </Box>
                    <Box as="dd" sx={{ mb: 3 }}>
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
