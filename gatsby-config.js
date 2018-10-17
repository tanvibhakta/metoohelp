module.exports = {
  siteMetadata: {
    title: '#MeToo India',
  },
  pathPrefix: "/metoohelp",

  plugins: [
  `gatsby-plugin-react-helmet`,
  {   resolve: gatsby-plugin-manifest,
    },
  'gatsby-plugin-offline',
  'babel-plugin-import',
  'gatsby-plugin-antd'
  ]

}
