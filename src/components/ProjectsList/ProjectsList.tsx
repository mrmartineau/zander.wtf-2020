import React, { FunctionComponent, Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ProjectListItem } from '../ProjectListItem'

export interface ProjectFrontmatter {
  title: string
  description: string
  subtitle: string
  date: string
  dateTimestamp: string
  year: string
  slug: string
  images?: any[]
  info?: {
    key: string
    value: string
    link?: string
  }[]
}

interface ProjectInterface {
  work: {
    edges: {
      node: {
        frontmatter: ProjectFrontmatter
        body: any
      }
    }[]
  }
}

export const ProjectsList: FunctionComponent = () => {
  const { work } = useStaticQuery<ProjectInterface>(
    graphql`
      query {
        work: allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                subtitle
                date(formatString: "Do MMMM YYYY")
                year: date(formatString: "YYYY")
                dateTimestamp: date
                description
                images {
                  name
                  path {
                    childImageSharp {
                      fixed(
                        height: 800
                        traceSVG: { color: "#573ede" }
                        quality: 75
                      ) {
                        ...GatsbyImageSharpFixed_withWebp_tracedSVG
                      }
                      resize(height: 800) {
                        src
                      }
                    }
                  }
                }
                info {
                  key
                  value
                  link
                }
              }
              body
            }
          }
        }
      }
    `
  )

  return (
    <Fragment>
      {work.edges.map((item, index) => {
        return (
          <ProjectListItem
            key={index}
            frontmatter={item.node.frontmatter}
            body={item.node.body}
          />
        )
      })}
    </Fragment>
  )
}
