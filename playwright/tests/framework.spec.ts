import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const root = path.resolve(__dirname, '../..');
const read = (p: string) => fs.readFileSync(path.join(root, p), 'utf8');

test.describe('framework integrity', () => {
  for (const file of [
    'project_config/application.yaml',
    'project_config/environments.yaml',
    'project_config/test-data.yaml',
    'project_config/reporting.yaml',
    'project_config/credentials.example.yaml',
  ]) {
    test(`${file} is valid YAML`, () => {
      expect(() => parse(read(file))).not.toThrow();
    });
  }

  test('agent instruction files exist', () => {
    for (const file of ['CLAUDE.md', 'CLAUDE_SYSTEM_PROMPT.md', 'CLAUDE_CONTEXT.md', 'CLAUDE_REPORTING.md']) {
      expect(fs.existsSync(path.join(root, file)), file).toBe(true);
    }
  });

  test('every job referenced in the user guide has a prompt file', () => {
    const guide = read('prompts/user_guide.md');
    const prompts = [...guide.matchAll(/prompts\/([\w-]+\.md)/g)].map((m) => m[1]);
    expect(prompts.length).toBeGreaterThan(0);
    for (const p of prompts) {
      expect(fs.existsSync(path.join(root, 'prompts', p)), p).toBe(true);
    }
  });

  test('every file CLAUDE_CONTEXT.md asks the agent to read exists (or has an example)', () => {
    const files = read('CLAUDE_CONTEXT.md')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => /^(project_config|knowledge)\/[\w.-]+\.(ya?ml|md)$/.test(l));
    for (const f of files) {
      const example = f.replace(/\.yaml$/, '.example.yaml');
      expect(fs.existsSync(path.join(root, f)) || fs.existsSync(path.join(root, example)), f).toBe(true);
    }
  });

  test('real credentials are git-ignored', () => {
    expect(read('.gitignore')).toContain('project_config/credentials.yaml');
  });
});
