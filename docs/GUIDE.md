# Full Guide — QA Agent Template

> Back to the [README](../README.md). This guide documents every config and knowledge file in detail.

This template allows you to use Claude and Playwright MCP as an autonomous QA Engineer capable of:

- Learning an application through Exploratory Testing
- Building a persistent knowledge base
- Reusing application knowledge across releases
- Executing Smoke Tests
- Executing Regression Testing
- Validating specific changes
- Capturing evidence automatically
- Measuring performance and stability
- Generating PDF reports with screenshots and metrics
- Updating application documentation automatically

---

# 📊 Project Status

| Component | Status | Notes |
|-----------|--------|-------|
| Framework Setup | ✅ Complete | Ready to use |
| Configuration Files | ⏳ Pending | See Quick Start section |
| Documentation | ✅ Complete | All templates ready |
| Prompts | ✅ Complete | All testing modes available |
| Playwright Setup | ✅ Complete | Config and auth structure ready |
| Authentication | ⏳ Pending | Generate after first run |

---

# Architecture

```text
qa-ai-automation-framework/
│
├── CLAUDE_CONTEXT.md (✓ Ready)
├── CLAUDE_SYSTEM_PROMPT.md (✓ Ready)
├── CLAUDE_REPORTING.md (✓ Ready)
├── README (✓ You are here)
├── package.json (✓ Ready)
│
├── project_config/ (⚠ NEEDS CONFIG)
│   ├── application.yaml (TODO)
│   ├── credentials.yaml (TODO)
│   ├── environments.yaml (TODO)
│   ├── test-data.yaml (TODO)
│   └── reporting.yaml (TODO)
│
├── prompts/ (✓ Complete)
│   ├── exploratory.md
│   ├── smoke.md
│   ├── regression.md
│   ├── change_validation.md
│   ├── generate_report.md
│   └── user_guide.md
│
├── knowledge/ (✓ Auto-generated)
│   ├── app_map.md
│   ├── business_rules.md
│   ├── exploratory_report.md
│   ├── known_issues.md
│   ├── report_requirements.md
│   ├── testing_scope.md
│   ├── ui_inventory.md
│   ├── user_flows.md
│   └── releases/
│       └── v1.0.md
│
├── playwright/ (✓ Setup)
│   ├── playwright.config.ts
│   ├── auth/
│   │   └── admin.json (TODO - Generate after first login)
│   ├── fixtures/
│   └── tests/
│
├── reports/ (✓ Ready)
│   ├── generated/ (Auto-generated reports)
│   ├── evidence/ (Auto-generated screenshots)
│   └── templates/
│       ├── detailed_report.md
│       ├── executive_report.md
│       └── metrics_report.md
│
├── screenshots/ (✓ Ready)
│   └── baseline/
│       ├── execution/
│       └── comparisons/
│
└── output/
    ├── logs/
    ├── metrics/
    └── temp/
```

---

# ⚡ Quick Start - Files to Complete

**Priority 1 - Essential Configuration:**

1. [project_config/application.yaml](../project_config/application.yaml) - Application details
2. [project_config/credentials.yaml](../project_config/credentials.example.yaml) - Test user credentials
3. [project_config/environments.yaml](../project_config/environments.yaml) - Environment URLs

**Priority 2 - Testing Configuration:**

4. [project_config/test-data.yaml](../project_config/test-data.yaml) - Reusable test data
5. [project_config/reporting.yaml](../project_config/reporting.yaml) - Report settings
6. [knowledge/testing_scope.md](../knowledge/testing_scope.md) - Define test scope
7. [knowledge/known_issues.md](../knowledge/known_issues.md) - Document existing bugs

**Priority 3 - Authentication:**

8. Generate [playwright/auth/admin.json](../playwright/auth/admin.json) - After first successful login

---

---

# Initial Setup

## Prerequisites

Install:

- NodeJS 20+ ([Download](https://nodejs.org/))
- Playwright
- Claude Desktop or Claude Code with Playwright MCP support

Verify installation:

```bash
node --version
npm --version
```

---

## Install Dependencies

```bash
npx playwright install

claude mcp add playwright npx @playwright/mcp@latest

code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
```

---

## Configure Playwright MCP

Create `.mcp.json` in the project root:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

---

## Load Claude System Context

1. Open Claude Desktop or Claude Code
2. Load `CLAUDE_SYSTEM_PROMPT.md` into your context
3. Reference `CLAUDE_CONTEXT.md` and `CLAUDE_REPORTING.md` as needed

---

# Files You Must Complete

See **Quick Start - Files to Complete** section above for priority order.

The following files require manual configuration before testing can begin:

---

## Priority 1: Essential Configuration

### project_config/application.yaml

Contains:

- Application name
- Application URL
- Login URL
- Application description

Example:

```yaml
application:
  name: "My Application"
  url: "https://app.example.com"
  login_url: "https://app.example.com/login"
  description: "Main web application"
```

---

### project_config/credentials.yaml

Contains test user accounts.

**WARNING:** Do not commit real credentials to version control.

Example:

```yaml
users:
  admin:
    username: admin@test.com
    password: SecurePassword123!
  
  tester:
    username: tester@test.com
    password: SecurePassword123!
  
  readonly:
    username: readonly@test.com
    password: SecurePassword123!
```

---

### project_config/environments.yaml

Contains environment URLs for different deployment stages.

Example:

```yaml
environments:
  dev:
    url: "https://dev.example.com"
    api_url: "https://api-dev.example.com"
  
  qa:
    url: "https://qa.example.com"
    api_url: "https://api-qa.example.com"
  
  staging:
    url: "https://staging.example.com"
    api_url: "https://api-staging.example.com"
  
  prod:
    url: "https://example.com"
    api_url: "https://api.example.com"
```

---

## Priority 2: Testing Configuration

### project_config/test-data.yaml

Contains reusable test data for form filling and validation.

Example:

```yaml
test_data:
  user:
    first_name: "John"
    last_name: "Doe"
    email: "john.doe@test.com"
  
  company:
    name: "Test Company"
    industry: "Technology"
  
  product:
    name: "Test Product"
    price: 99.99
```

---

### project_config/reporting.yaml

Controls report generation settings.

Example:

```yaml
reporting:
  include_screenshots: true
  include_performance_metrics: true
  include_console_errors: true
  include_network_logs: false
  pdf_format: true
  
  failure_threshold:
    critical: 0
    high: 5
  
  performance_thresholds:
    login_time_ms: 5000
    dashboard_load_ms: 8000
```

---

### knowledge/testing_scope.md

Define what to test and what not to test.

Critical for guiding Claude's testing efforts.

Example:

```markdown
# Critical Flows

- User Login
- Dashboard Access
- User Creation
- Report Generation

# Important Flows

- User Edit
- User Deactivation
- Report Filtering

# Out of Scope

- Mobile testing
- API testing (covered separately)
- Performance load testing
- Third-party integrations

# Supported Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)

# Screen Resolutions

- Desktop: 1920x1080
- Tablet: 768x1024
```

---

### knowledge/known_issues.md

Document existing bugs to prevent false positives in testing.

This is critical - it prevents Claude from repeatedly reporting the same issue.

Example:

```markdown
# Known Issues

## Issue 1: Dashboard Widget Loading Delay
- **Module:** Dashboard
- **Issue:** Loading takes 8-10 seconds after login
- **Severity:** Medium
- **Status:** In Progress (scheduled for v1.2)
- **Workaround:** Refresh the page

## Issue 2: CSV Export Unicode Characters
- **Module:** Reports
- **Issue:** Special characters are corrupted in CSV exports
- **Severity:** Low
- **Status:** Open
- **Workaround:** Use PDF export instead

## Issue 3: Console Warning on Mobile
- **Module:** General
- **Issue:** DevTools warning appears on mobile devices
- **Severity:** Low
- **Status:** Open
- **Note:** Non-critical, does not affect functionality
```

---

## Priority 3: Authentication Setup

### playwright/auth/admin.json

Created automatically during first login setup.

**Do not manually edit.**

To generate:

```bash
npx playwright codegen https://your-app-url.com/login
```

Then:
1. Login manually
2. After login, close the browser
3. Save the generated `auth.json` to `playwright/auth/admin.json`

This enables persistent authentication across test runs.

---

---

# Files Generated Automatically By Claude

The following files are automatically created and updated by Claude during Exploratory and Testing executions.

**Do not manually edit these files** - they represent the learned application knowledge.

---

## knowledge/app_map.md

Auto-generated application structure map.

Contains modules, pages, and navigation hierarchy discovered during exploratory testing.

Example:

```markdown
# Application Map

## Authentication
- Login Page
- Forgot Password Page

## Dashboard
- Overview Widget
- Reports Widget
- Tasks Widget

## User Management
- Users List
- User Detail
- Create User Dialog

## Reports
- Reports Dashboard
- Report Builder
- Report History
```

---

## knowledge/user_flows.md

Auto-generated discovered workflows.

Contains step-by-step user journeys identified during testing.

Example:

```markdown
# Create User

1. Navigate to User Management
2. Click "New User" button
3. Complete user form:
   - First Name
   - Last Name
   - Email
   - Role (Admin/User/ReadOnly)
4. Click "Create" button
5. Verify confirmation message
6. User appears in users list

# Generate Report

1. Navigate to Reports
2. Click "New Report"
3. Select report type
4. Configure filters
5. Click "Generate"
6. Download or view results
```

---

## knowledge/business_rules.md

Auto-generated business rules discovered during testing.

Example:

```markdown
# Business Rules

## User Management
- Only admins can create users
- Users must have unique email addresses
- Deactivated users cannot login

## Reports
- Reports older than 90 days auto-delete
- Maximum 10 concurrent report generations
- Export formats: PDF, Excel, CSV

## Permissions
- Admin: Full access
- User: Can view own data only
- ReadOnly: View-only access, no modifications
```

---

## knowledge/ui_inventory.md

Auto-generated inventory of UI components found during testing.

Example:

```markdown
# UI Components

## Form Elements
- Text Input Fields
- Dropdown Selectors
- Date Pickers
- Checkboxes
- Radio Buttons

## Tables
- Users Table (Columns: Name, Email, Role, Status)
- Reports Table (Columns: Name, Type, Created, Status)

## Buttons
- Primary: Create, Save, Delete
- Secondary: Cancel, Reset
- Tertiary: Help, Export

## Dialogs
- Confirmation dialogs
- Error messages
- Success notifications
```

---

## knowledge/exploratory_report.md

Auto-generated report of exploratory testing findings.

Contains discovered features, test results, and observations.

---

## knowledge/releases/v1.0.md

Auto-updated release notes and version history.

Example:

```markdown
# Version 1.0

**Release Date:** 2026-06-01

## New Features
- User Management Module
- Report Generation
- Dashboard Overview

## Bug Fixes
- Login timeout issue
- Export button styling

## Affected Flows
- Authentication
- User Management
- Reports

## Testing Coverage
- 45 test cases
- 2 known issues
```

---

---

# First Time Usage

## Setup Checklist

- [ ] Install NodeJS 20+ and Playwright
- [ ] Complete [project_config/application.yaml](../project_config/application.yaml)
- [ ] Complete [project_config/credentials.yaml](../project_config/credentials.example.yaml)
- [ ] Complete [project_config/environments.yaml](../project_config/environments.yaml)
- [ ] Complete [project_config/test-data.yaml](../project_config/test-data.yaml)
- [ ] Complete [project_config/reporting.yaml](../project_config/reporting.yaml)
- [ ] Complete [knowledge/testing_scope.md](../knowledge/testing_scope.md)
- [ ] Complete [knowledge/known_issues.md](../knowledge/known_issues.md)
- [ ] Configure Playwright MCP in Claude Desktop or Claude Code
- [ ] Load CLAUDE_SYSTEM_PROMPT.md into Claude context

## Initial Context Loading

Once configuration is complete:

1. Open Claude Desktop or Claude Code
2. Load `CLAUDE_SYSTEM_PROMPT.md` into your context
3. Send Claude this message:

```text
Load context:

1. Read CLAUDE_CONTEXT.md
2. Read CLAUDE_REPORTING.md
3. Read project_config/application.yaml
4. Read project_config/credentials.yaml
5. Read project_config/environments.yaml
6. Read project_config/test-data.yaml
7. Read project_config/reporting.yaml
8. Read knowledge/testing_scope.md
9. Read knowledge/known_issues.md
10. Read prompts/user_guide.md

Confirm all configuration files are loaded and ready.
```

---

---

# Build Application Knowledge

Run:

```text
Execute prompts/exploratory.md
```

Claude should:

1. Open the application
2. Login
3. Explore modules
4. Discover workflows
5. Discover forms
6. Discover tables
7. Capture screenshots
8. Generate documentation

Generated files:

```text
knowledge/app_map.md

knowledge/user_flows.md

knowledge/business_rules.md

knowledge/ui_inventory.md

knowledge/exploratory_report.md
```

---

# Create Baseline Screenshots

Exploratory execution should also generate:

```text
screenshots/baseline/
```

Example:

```text
login.png

dashboard.png

users.png

reports.png
```

These screenshots become the visual baseline.

---

# Create Persistent Login Session

Recommended.

Create Playwright storage state:

```bash
npx playwright codegen https://your-app-url.com/login
```

Login manually.

Save:

```text
playwright/auth/admin.json
```

Configure:

```typescript
use: {
  storageState: './playwright/auth/admin.json'
}
```

This avoids repeated login during future executions.

---

# Smoke Testing

Execute:

```text
Execute prompts/smoke.md
```

Expected validations:

- Login
- Dashboard
- Main navigation

---

# Regression Testing

Execute:

```text
Execute prompts/regression.md
```

Claude will:

- Read application knowledge
- Execute critical flows
- Validate business rules
- Detect regressions
- Capture evidence
- Generate reports

---

# Validate Specific Changes

Example:

```text
Execute prompts/change_validation.md

Change:

User Creation form was redesigned.
```

Claude will:

- Identify impacted modules
- Identify impacted flows
- Execute targeted testing
- Report risks and regressions

---

# Generate Reports

Execute:

```text
Execute prompts/generate_report.md
```

Generated outputs:

```text
reports/generated/
```

Example:

```text
2026-06-12_smoke_report.pdf

2026-06-12_regression_report.pdf

2026-06-12_change_validation_report.pdf
```

---

# Report Contents

Reports should contain:

## Executive Summary

- Environment
- Version
- Execution date
- Overall status

---

## Functional Results

- Tests executed
- Passed
- Failed
- Blocked

---

## Screenshots

Evidence for:

- Successful tests
- Failed tests
- UI differences

---

## Performance Metrics

Examples:

- Login load time
- Dashboard load time
- Page response times

---

## Browser Console Findings

Examples:

- JavaScript errors
- JavaScript warnings


---

## Defects

Classification:

- Critical
- High
- Medium
- Low

Each defect should include:

- Description
- Expected result
- Actual result
- Reproduction steps
- Screenshot

---

## Recommendations

Claude should provide:

- Risks
- Impacted areas
- Suggested regression coverage
- Release recommendations

---

# Release Tracking

Store release notes in:

```text
knowledge/releases/
```

Example:

```text
v1.0.md
v1.1.md
v1.2.md
```

Each file should contain:

```markdown
# Version 1.2

Changes:

- New Reports Module
- User Search Improvement

Affected Flows:

- Reports
- User Management
```

Claude can compare current behavior against previous releases.

---

# Recommended Workflow

## New Application

```text
1. Complete configuration files

2. Configure Playwright MCP

3. Load Claude context

4. Execute exploratory.md

5. Review generated documentation

6. Approve baseline screenshots
```

---

## New Release

```text
1. Update release notes

2. Execute regression.md

3. Review generated report

4. Review findings

5. Update knowledge if needed
```

---

## Specific Change

```text
1. Describe the change

2. Execute change_validation.md

3. Review report

4. Validate impacted flows
```

---

# Best Practices

✓ Keep credentials updated

✓ Update release notes every release

✓ Review baseline screenshots periodically

✓ Keep [knowledge/known_issues.md](../knowledge/known_issues.md) current - this prevents false positives

✓ Re-run [prompts/exploratory.md](../prompts/exploratory.md) after major redesigns

✓ Use persistent authentication ([playwright/auth/admin.json](../playwright/auth/admin.json))

✓ Store generated reports as release evidence

✓ Treat [knowledge/](../knowledge/) files as Claude's application memory

---

# 📋 Configuration Reference

## Files That Need to Be Filled

| File | Purpose | Priority | Status |
|------|---------|----------|--------|
| [project_config/application.yaml](../project_config/application.yaml) | Application details and URLs | P1 | TODO |
| [project_config/credentials.yaml](../project_config/credentials.example.yaml) | Test user credentials | P1 | TODO |
| [project_config/environments.yaml](../project_config/environments.yaml) | Environment URLs | P1 | TODO |
| [project_config/test-data.yaml](../project_config/test-data.yaml) | Reusable test data | P2 | TODO |
| [project_config/reporting.yaml](../project_config/reporting.yaml) | Report generation settings | P2 | TODO |
| [knowledge/testing_scope.md](../knowledge/testing_scope.md) | Define test scope and critical flows | P2 | TODO |
| [knowledge/known_issues.md](../knowledge/known_issues.md) | Document existing bugs | P2 | TODO |
| [playwright/auth/admin.json](../playwright/auth/admin.json) | Persistent login session | P3 | AUTO |

---

## Files Ready to Use

| File | Purpose | Status |
|------|---------|--------|
| [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md) | Claude system instructions | ✅ Ready |
| [CLAUDE_CONTEXT.md](../CLAUDE_CONTEXT.md) | Context loading instructions | ✅ Ready |
| [CLAUDE_REPORTING.md](../CLAUDE_REPORTING.md) | Reporting guidelines | ✅ Ready |
| [prompts/exploratory.md](../prompts/exploratory.md) | Exploratory testing prompt | ✅ Ready |
| [prompts/smoke.md](../prompts/smoke.md) | Smoke testing prompt | ✅ Ready |
| [prompts/regression.md](../prompts/regression.md) | Regression testing prompt | ✅ Ready |
| [prompts/change_validation.md](../prompts/change_validation.md) | Change validation prompt | ✅ Ready |
| [prompts/generate_report.md](../prompts/generate_report.md) | Report generation prompt | ✅ Ready |
| [prompts/user_guide.md](../prompts/user_guide.md) | Usage guide | ✅ Ready |

---

# 📚 Reference by Use Case

## Starting with a New Application

1. Complete all Priority 1 files
2. Complete all Priority 2 files
3. Send to Claude: `Execute prompts/exploratory.md`
4. Review generated knowledge files
5. Approve baseline screenshots
6. You're ready for regression testing!

## Testing a New Release

1. Update release notes in [knowledge/releases/](../knowledge/releases/)
2. Send to Claude: `Execute prompts/regression.md`
3. Review generated report
4. Update [knowledge/known_issues.md](../knowledge/known_issues.md) if needed

## Testing a Specific Change

1. Describe the change to Claude
2. Send: `Execute prompts/change_validation.md`
3. Review focused test results

## Generating Reports

1. Send to Claude: `Execute prompts/generate_report.md`
2. Find PDF reports in [reports/generated/](../reports/generated/)

---

# Expected Outcome

After several executions, Claude becomes progressively more efficient because it relies on:

- Existing application maps
- Existing workflows
- Existing business rules
- Existing screenshots
- Existing release history

instead of rediscovering the application from scratch during every test cycle.

This significantly reduces token consumption while increasing testing consistency and regression coverage.