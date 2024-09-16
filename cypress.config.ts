import { defineConfig } from "cypress";
import dotenv from 'dotenv';

if (process.env.NODE_ENV) {
  dotenv.config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`
  })
} else {
  dotenv.config()
}

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: true,
    overwrite: true,
    showPassed: true,
    showFailed: true,
    reportPageTitle: 'Cypress_Demo_Results'
  },
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      logLevel: "VERBOSE",
      feTrainingBaseUrl: process.env.FETRAINING_BASE_URL,
      paraBankBaseUrl: process.env.PARABANK_BASE_URL,
    },
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});
