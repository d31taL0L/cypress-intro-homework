const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/react/dist/',
    
    defaultCommandTimeout: 10000,

    pageLoadTimeout: 60000,

    viewportWidth: 1280,
    viewportHeight: 720,
    
    screenshotOnRunFailure: true,

    video: true,

    slowTestThreshold: 10000,
    
    setupNodeEvents(on, config) {
    },
  },
})
