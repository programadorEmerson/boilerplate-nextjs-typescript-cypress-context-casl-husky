/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
