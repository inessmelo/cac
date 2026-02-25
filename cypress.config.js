const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 880,
  viewportWidth: 1280,

  video: true,
  fixturesFolder: false,

  e2e: {
    //baseUrl: '../../src/index.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
