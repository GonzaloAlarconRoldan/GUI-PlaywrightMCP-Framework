import { defineConfig, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const root = path.resolve(__dirname, '..');
const app = parse(fs.readFileSync(path.join(root, 'project_config/application.yaml'), 'utf8'))?.application ?? {};
const authState = path.join(__dirname, 'auth/admin.json');
const hasAuth = fs.existsSync(authState) && fs.statSync(authState).size > 0;

export default defineConfig({
  testDir: './tests',
  outputDir: path.join(root, 'output/temp/test-results'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: path.join(root, 'reports/generated/playwright-html'), open: 'never' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || app.base_url || undefined,
    storageState: hasAuth ? authState : undefined,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    // Validates the framework itself (config + knowledge structure). No browser needed.
    { name: 'framework', testMatch: /framework\.spec\.ts/ },
    {
      name: 'chromium',
      testIgnore: /framework\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
