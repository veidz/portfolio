import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents() {},
    specPattern: 'tests/visual/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/visual/support/e2e.ts',
    videosFolder: 'tests/visual/videos',
    screenshotsFolder: 'tests/visual/screenshots',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
})
