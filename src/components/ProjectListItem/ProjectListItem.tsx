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
        borderBottom: '1px solid',
        borderBottomColor: 'text',
        '&:hover,&:focus': {
          color: 'primary',
        },
        '&[open]:hover,&[open]:focus-visible': {
          color: 'text',
          bg: 'background',
        },
      }}
    >
      <Box
        as="summary"
        sx={{
          p: 'padding',
          overflowX: 'hidden',
          // whiteSpace: ['unset', 'pre'],
          '&::-webkit-details-marker': {
            display: 'none',
            content: "''",
          },
          '&::-moz-details-marker': {
            display: 'none',
            content: "''",
          },
          '&::details-marker': {
            display: 'none',
            content: "''",
          },
          '&::marker': {
            display: 'none',
            content: "''",
          },
          '&:hover': {
            cursor: 'pointer',
            color: 'primary',
          },
          '&:focus-visible': {
            outline: 0,
            color: 'primary',
          },
          '&:focus': {
            outline: 0,
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

        {frontmatter.images && (
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
            <Flex tabIndex={0}>
              {frontmatter.images.map(item => (
                <Image
                  src={item?.path?.childImageSharp?.resize?.src}
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
          </Box>
        )}

        {(frontmatter.info || frontmatter.logo) && (
          <Box sx={{ maxWidth: 'contentMaxWidth' }}>
            <Styled.h2>Project info</Styled.h2>

            {frontmatter.logo && (
              <Image
                src={frontmatter.logo.childImageSharp.original.src}
                alt={`${frontmatter.title} logo`}
                sx={{
                  my: 4,
                  borderRadius: 'sm',
                  maxWidth: '375px',
                }}
                loading="lazy"
              />
            )}

            {frontmatter.info && (
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
            )}
          </Box>
        )}
      </Box>
    </Box>
  )
}
