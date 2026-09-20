# Netlify MCP

Deploy, inspect, and manage Netlify sites, builds, environment configuration, and development workflows through Netlify's hosted MCP server.

- **Category:** developer tools
- **Auth:** DCR_OAUTH
- **Composio-managed OAuth available?** No
- **Tools:** 9
- **Triggers:** 0
- **Slug:** `NETLIFY_MCP`
- **Version:** 20260910_00

## Tools

### Get-netlify-coding-context

**Slug:** `NETLIFY_MCP_GET_NETLIFY_CODING_CONTEXT`

ALWAYS call when writing code. Required step before creating or editing any type of functions, Netlify sdk/library usage, etc. Use other operations for project management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creationType` | string ("serverless" | "edge-functions" | "blobs" | "image-cdn" | "forms" | "db") | Yes |  |

### Netlify-deploy-services-reader

**Slug:** `NETLIFY_MCP_NETLIFY_DEPLOY_SERVICES_READER`

Select and run one of the following Netlify read operations (read-only) get-deploy, get-deploy-for-site

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-deploy-services-updater

**Slug:** `NETLIFY_MCP_NETLIFY_DEPLOY_SERVICES_UPDATER`

Select and run one of the following Netlify write operations deploy-site

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | object | Yes |  |

### Netlify-extension-services-reader

**Slug:** `NETLIFY_MCP_NETLIFY_EXTENSION_SERVICES_READER`

Select and run one of the following Netlify read operations (read-only) get-extensions, get-full-extension-details

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-extension-services-updater

**Slug:** `NETLIFY_MCP_NETLIFY_EXTENSION_SERVICES_UPDATER`

Select and run one of the following Netlify write operations change-extension-installation, initialize-database

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-project-services-reader

**Slug:** `NETLIFY_MCP_NETLIFY_PROJECT_SERVICES_READER`

Select and run one of the following Netlify read operations (read-only) get-project, get-projects, get-forms-for-project

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-project-services-updater

**Slug:** `NETLIFY_MCP_NETLIFY_PROJECT_SERVICES_UPDATER`

Select and run one of the following Netlify write operations update-visitor-access-controls, update-forms, manage-form-submissions, update-project-name, manage-env-vars, create-new-project

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-team-services-reader

**Slug:** `NETLIFY_MCP_NETLIFY_TEAM_SERVICES_READER`

Select and run one of the following Netlify read operations (read-only) get-teams, get-team, get-team-env-vars

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | string | Yes |  |

### Netlify-user-services-reader

**Slug:** `NETLIFY_MCP_NETLIFY_USER_SERVICES_READER`

Select and run one of the following Netlify read operations (read-only) get-user

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectSchema` | object | Yes |  |
