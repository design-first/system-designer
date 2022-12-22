const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin }  = require ('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config)
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
