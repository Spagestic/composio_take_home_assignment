# Pylon MCP

Pylon is an AI-native B2B customer support platform that unifies ticketing, chat, knowledge base, and account intelligence across channels like Slack Connect, Microsoft Teams, email, and in-app chat.

- **Category:** model context protocol
- **Auth:** DCR_OAUTH
- **Composio-managed OAuth available?** No
- **Tools:** 12
- **Triggers:** 0
- **Slug:** `PYLON_MCP`
- **Version:** 20260427_00

## Tools

### Create issue

**Slug:** `PYLON_MCP_CREATE_ISSUE`

Create a new issue/ticket in Pylon. Requires an organization ID, account ID, title, and body HTML. Optionally specify requester, priority, assignee, team, and tags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | An array of tags to set on the issue. |
| `title` | string | Yes | The title of the issue. Required. |
| `team_id` | string | No | The ID of the team to assign the issue to. |
| `priority` | string ("urgent" | "high" | "medium" | "low") | No | The priority of the issue. |
| `body_html` | string | Yes | The HTML content of the body of the issue. Required. |
| `account_id` | string | Yes | The ID of the account that this issue belongs to. Required. |
| `assignee_id` | string | No | The ID of the user to assign the issue to. |
| `requester_id` | string | No | The ID of the requester (contact) that this issue is on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | object | Yes | The created issue summary. Use issue://{orgId}/{id} resource for full details. |
| `success` | boolean | Yes | Whether the creation was successful. |

### Get account

**Slug:** `PYLON_MCP_GET_ACCOUNT`

Get full details for a Pylon customer account. Pass either the account ID (UUID) or external ID. Returns account details including name, domain, owner, tags, custom fields, and linked channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | Yes | The account ID (UUID) or external ID. |

### Get contact

**Slug:** `PYLON_MCP_GET_CONTACT`

Get full details for a Pylon contact (customer). Pass the contact ID (UUID). Returns contact details including name, email, account, and custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact` | string | Yes | The contact ID (UUID). |

### Get issue

**Slug:** `PYLON_MCP_GET_ISSUE`

Get full details for a Pylon support issue/ticket. Pass either the issue ID (UUID) or issue number. Returns title, body, state, metadata, custom fields, and nested account/assignee/requester info.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | string | Yes | The issue ID (UUID) or issue number. |

### Get issue messages

**Slug:** `PYLON_MCP_GET_ISSUE_MESSAGES`

Get the full message history for a Pylon issue. Pass either the issue ID (UUID) or issue number. Returns all messages in chronological order with author info.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | string | Yes | The issue ID (UUID) or issue number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | Yes | Number of messages. |
| `issue_id` | string | Yes | The issue ID. |
| `messages` | array | Yes | Messages in chronological order. |

### Get me

**Slug:** `PYLON_MCP_GET_ME`

Get the currently authenticated user's details. Returns the user's name, email, role, and teams. No parameters required.

### Get user

**Slug:** `PYLON_MCP_GET_USER`

Get full details for a Pylon user (team member). Pass the user ID (UUID). Returns user details including name, email, role, and teams.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | The user ID (UUID). |

### Search accounts

**Slug:** `PYLON_MCP_SEARCH_ACCOUNTS`

Search for customer accounts in Pylon. Returns a lightweight summary of accounts matching the specified filters. Supports filtering by custom fields using the custom_field_filters parameter - pass the custom field slug as the field name. For user-type custom fields (e.g. Salesforce AE owner), you can pass a Pylon user name or user ID as the value. Supports cursor-based pagination - use the returned cursor to fetch additional pages. To get full account details including custom fields, external IDs, and linked channels, use the account resource: account://{accountId}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter by account name (partial match). |
| `tags` | string | No | Filter by tags. Returns accounts containing any of the specified tags. |
| `limit` | integer | No | Maximum number of accounts to return (default 25, max 100). |
| `owner` | string | No | Filter by account owner. Accepts a user ID or name (partial match). |
| `cursor` | string | No | Cursor for pagination. Use the cursor from a previous response to get the next page. |
| `domain` | string | No | Filter by domain (accounts containing this domain). |
| `external_id` | string | No | Filter by external ID. |
| `custom_field_filters` | string | No | Filter by custom fields. Each filter specifies a custom field slug, operator, and value(s). For user-type fields, pass a Pylon user name or ID as the value - names will be resolved to Pylon user IDs automatically. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | Yes | The number of accounts returned. |
| `cursor` | string | No | Cursor for the next page. Pass this as the cursor input to get more results. |
| `accounts` | array | Yes | Lightweight account summaries. Use account://{id} resource for full details. |
| `has_next_page` | boolean | Yes | Whether there are more results available. |

### Search issues

**Slug:** `PYLON_MCP_SEARCH_ISSUES`

Search for issues/tickets in Pylon. Returns a lightweight summary of issues matching the specified filters. Supports cursor-based pagination - use the returned cursor to fetch additional pages. To get full issue details including body, custom fields, and nested account/assignee/requester info, use the issue resource: issue://{issueId}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Filter by tags. Returns issues containing any of the specified tags. |
| `type` | string ("conversation" | "ticket") | No | Filter by issue type. |
| `limit` | integer | No | Maximum number of issues to return (default 25, max 100). |
| `cursor` | string | No | Cursor for pagination. Use the cursor from a previous response to get the next page. |
| `states` | string | No | Filter by issue states. |
| `account` | string | No | Filter by account. Accepts either an account ID or a name (partial match). |
| `assignee` | string | No | Filter by assignee. Accepts either a user ID or a name (partial match). |
| `requester` | string | No | Filter by requester. Accepts either a contact ID or a name (partial match). |
| `created_after` | string | No | Filter for issues created after this time (RFC3339 format). |
| `created_before` | string | No | Filter for issues created before this time (RFC3339 format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | Yes | The number of issues returned. |
| `cursor` | string | No | Cursor for the next page. Pass this as the cursor input to get more results. |
| `issues` | array | Yes | Lightweight issue summaries. Use issue://{id} resource for full details. |
| `has_next_page` | boolean | Yes | Whether there are more results available. |

### Update account

**Slug:** `PYLON_MCP_UPDATE_ACCOUNT`

Update an existing customer account in Pylon. You can update the name, owner, tags, and custom fields. Use the get_custom_fields tool with object_type 'account' to discover available custom field slugs. Use the get_account tool to get full account details before updating.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the account. |
| `tags` | string | No | An array of tags to set on the account. This replaces all existing tags. |
| `owner_id` | string | No | The ID of the user to set as owner. Pass empty string to remove owner. |
| `account_id` | string | Yes | The ID or name of the account to update. Required. |
| `custom_fields` | object | No | Custom field values to set. Keys are custom field slugs (use get_custom_fields with object_type 'account' to discover available slugs), values are the field values to set. For multi-select fields, use comma-separated values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | object | Yes | The updated account summary. Use account://{id} resource for full details. |
| `success` | boolean | Yes | Whether the update was successful. |

### Update issue

**Slug:** `PYLON_MCP_UPDATE_ISSUE`

Update an existing issue/ticket in Pylon. You can update the state, assignee, team, and tags. Use the issue resource (issue://{issueId}) to get full issue details before updating.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | An array of tags to set on the issue. This replaces all existing tags. |
| `state` | string | No | The state to set the issue to. Standard values: new, waiting_on_you, waiting_on_customer, on_hold, closed. Custom status slugs are also accepted. |
| `team_id` | string | No | The ID of the team to assign the issue to. Pass empty string to remove team assignment. |
| `issue_id` | string | Yes | The ID or number of the issue to update. Required. |
| `assignee_id` | string | No | The ID of the user to assign the issue to. Pass empty string to unassign. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | object | Yes | The updated issue summary. Use issue://{id} resource for full details. |
| `success` | boolean | Yes | Whether the update was successful. |

### Upload account files

**Slug:** `PYLON_MCP_UPLOAD_ACCOUNT_FILES`

Upload one or more files (e.g. PDFs) into the Files tab of an account. Files with a matching filename are overwritten. Max 5 files per call, max 10 MB per file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | array | Yes | Files to upload. 1 to 5 files per call. |
| `account_id` | string | Yes | The ID or external ID of the account to upload files to. Required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | array | Yes |  |
| `success` | boolean | Yes |  |
