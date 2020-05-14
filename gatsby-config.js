const remarkSlug = require('remark-slug')
const remarkEmoji = require('remark-emoji')
const squeezeParagraphs = require('remark-squeeze-paragraphs')
const remarkTruncateLinks = require('remark-truncate-links').remarkTruncateLinks

module.exports = {
  siteMetadata: {
    title: `Zander Martineau`,
    description: `My personal site`,
    siteUrl: `http://zander.wtf/`,
    author: 'Zander Martineau',
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
        gatsbyRemarkPlugins: ['gatsby-remark-embed-gist'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ],
}
