import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: './features/sample.feature',
  steps: './steps/steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});