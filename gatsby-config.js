module.exports = {
  siteMetadata: {
    title: 'Cloud Pak for MCM 2.x on Skytap',
    description: 'DemoHub for Cloud Pak for Watson AIOps',
    keywords: 'ibm,mcm,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.com/ibm-garage-tsa/cp4mcm-demohub',
      subDirectory: '/',
      branch: 'master'
    },
  },
}
],
pathPrefix: "/cp4mcm-demohub",
};
