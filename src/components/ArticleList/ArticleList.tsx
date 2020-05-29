import React, { FunctionComponent, Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ArticleListItem } from '../ArticleListItem'

interface ArticleListProps {
  exclude?: string
}

interface Articlesinterface {
  articles: {
    edges: {
      node: {
        frontmatter: {
          title: string
          subtitle: string
          date: string
          dateTimestamp: string
          slug: string
        }
        timeToRead: string
      }
    }[]
  }
}

export const ArticleList: FunctionComponent<ArticleListProps> = () => {
  const { articles } = useStaticQuery<Articlesinterface>(
    graphql`
      query {
        articles: allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/(words)/" }
            frontmatter: { published: { ne: false } }
          }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                subtitle
                date(formatString: "Do MMMM YYYY")
                dateTimestamp: date
              }
            }
          }
        }
      }
    `
  )

  return (
    <Fragment>
      {articles.edges.map((item, index) => {
        const { title, subtitle, date, slug } = item.node.frontmatter
        return (
          <ArticleListItem
            key={index}
            slug={slug}
            title={title}
            subtitle={subtitle}
            date={date}
          />
        )
      })}
    </Fragment>
  )
}
