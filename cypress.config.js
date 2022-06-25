const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '558dq3',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
