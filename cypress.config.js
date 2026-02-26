const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  video: true,
  //fixturesFolder: false,
});
