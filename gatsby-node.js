const path = require('path')

const DEFAULT_BASE_PATH = '/'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const mdxDocs = await graphql(
    `
      {
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/(words)/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
              }
              id
            }
          }
        }
      }
    `
  )

  if (mdxDocs.errors) {
    throw mdxDocs.errors
  }

  const allPosts = mdxDocs.data.allMdx.edges

  // Create post pages
  allPosts.forEach((post, index) => {
    const { slug } = post.node.frontmatter
    const previous =
      index === allPosts.length - 1 ? null : allPosts[index + 1].node
    const next = index === 0 ? null : allPosts[index - 1].node
    createPage({
      path: `blog/${slug}`,
      component: path.join(__dirname, './src/layouts', 'article.tsx'),
      context: {
        id: post.node.id,
        previous,
        next,
        slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const typeDefs = [
    `type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }`,
    `type Frontmatter @infer {
      images: [File!]! @fileByRelativePath,
    }`,
  ]

  createTypes(typeDefs)
}
