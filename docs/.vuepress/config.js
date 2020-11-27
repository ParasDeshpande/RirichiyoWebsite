const head = require('./head');
const nav = require('./nav');
const sidebar = require('./sidebar');
const footer = require('./footer');

module.exports = {
  dest: 'public',
  theme: 'yuu',
  title: "Ririchiyo",
  description: 'A simple and easy to use discord music bot with reaction controls.',
  head,
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: 'red',
      disableThemeIgnore: true,
    },
    nav,
    sidebar,
    footer,
    logo: '/logo-circle.png',
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',
    smoothScroll: true
  },
}  
