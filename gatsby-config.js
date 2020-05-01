const remarkSlug = require('remark-slug')
const remarkEmoji = require('remark-emoji')
const squeezeParagraphs = require('remark-squeeze-paragraphs')
const remarkTruncateLinks = require('remark-truncate-links').remarkTruncateLinks

module.exports = {
  siteMetadata: {
    title: `Zander Martineau`,
    description: `My personal site`,
    siteUrl: `http://zander.wtf/`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `words`,
        path: `${__dirname}/content/words`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    `gatsby-plugin-redirects`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ],
}
