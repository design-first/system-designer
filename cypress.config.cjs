const { defineConfig } = require('cypress')
const webpack = require('@cypress/webpack-preprocessor')
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
  projectId: '558dq3',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config)
      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: {
              extensions: ['.js'],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      )

      return config
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
