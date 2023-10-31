const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://jobs.crelate.com/portal/prediktive/job/apply/u18r6ppsndskraozxnkmzzo5ny",
    env: {
     'browserPermissions': {
     'geolocation': 'allow',
      }
    },
    chromeWebSecurity:false,
  },
});
