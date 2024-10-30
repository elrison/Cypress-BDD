const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  e2e: {
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.feature', // Ajuste para detectar arquivos .feature
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }
  },
})
