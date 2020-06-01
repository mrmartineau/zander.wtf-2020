const remarkSlug = require('remark-slug')
const remarkEmoji = require('remark-emoji')
const squeezeParagraphs = require('remark-squeeze-paragraphs')
const remarkTruncateLinks = require('remark-truncate-links').remarkTruncateLinks

module.exports = {
  siteMetadata: {
    title: 'Hello, my name is Zander. I make websites',
    description: `Zander Martineau's personal site`,
    siteUrl: `https://zander.wtf/`,
    author: 'Zander Martineau',
    opengraphImage: '/opengraph.jpg',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-performance-metrics`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `words`,
        path: `${__dirname}/content/words`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/article.tsx'),
        },
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [
          remarkSlug,
          remarkEmoji,
          squeezeParagraphs,
          [remarkTruncateLinks, { style: 'smart' }],
        ],
        gatsbyRemarkPlugins: [
          'gatsby-remark-embed-gist',
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035,
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 10,
                  sort: { fields: frontmatter___date, order: DESC }
                  filter: { fileAbsolutePath: { regex: "/(words)/" } frontmatter: { published: { ne: false } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        slug
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/atom.xml',
            title: "Zander Martineau's Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zander Martineau`,
        short_name: `zander.wtf`,
        description: `Zander Martineau's personal site`,
        start_url: `/`,
        background_color: `#15181C`,
        theme_color: `#15181C`,
        display: `standalone`,
        icon: `static/logo.png`,
        lang: 'en',
      },
    },
    {
      resolve: '@bundle-analyzer/gatsby-plugin',
      options: { token: '2d209a59baf37ae884f704c5f8c0d2757c1667b5' },
    },
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
