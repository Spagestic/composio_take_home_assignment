# Jira

A tool for bug tracking, issue tracking, and agile project management.

- **Category:** project management
- **Auth:** OAUTH2, S2S_OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 103
- **Triggers:** 17
- **Slug:** `JIRA`
- **Version:** 20260915_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Jira?

For a step-by-step guide on creating and configuring your own Jira OAuth credentials with Composio, see [How to create OAuth credentials for Jira](https://composio.dev/auth/jira).

### What is the difference between JQL GET, JQL POST, and Search Issues?

JQL GET and POST target the same search functionality but use different HTTP methods. POST supports complex queries in the request body. Search Issues uses JQL POST under the hood with extra parameters and filters. For consistent results, prefer POST for complex queries. Use the `fields` parameter to request specific fields, or `["*all"]` to request all fields.

## Tools

### Add Attachment

**Slug:** `JIRA_ADD_ATTACHMENT`

Uploads and attaches a file to a Jira issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_key` | string | Yes | The ID or key of the Jira issue to which the attachment will be added. |
| `file_to_upload` | object | Yes | File to be attached to the Jira issue. Supports various formats including images, documents, and other file types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Comment

**Slug:** `JIRA_ADD_COMMENT`

Adds a comment using Atlassian Document Format (ADF) for rich text to an existing Jira issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | string | Yes | The comment text. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), lists, and @mentions. To mention users, use @username for single-word names or @"Display Name" for names with spaces. Plain URLs are not hyperlinked; use `[text](url)` format for clickable links. |
| `issue_id_or_key` | string | Yes | The ID or key of the issue to add the comment to. |
| `visibility_type` | string | No | Specifies the type of visibility restriction for the comment. Valid values are 'group' or 'role'. If this field is used, `visibility_value` must also be provided. IMPORTANT: 'group' visibility requires group-level visibility to be enabled in the Jira instance settings by an administrator. For 'role' visibility, use JIRA_GET_PROJECT_ROLES action to discover valid role names for the project. |
| `visibility_value` | string | No | Name of the group or role that can view the comment (required if visibility_type is set). IMPORTANT: These values are instance-specific and vary by Jira configuration. For role visibility: Use JIRA_GET_PROJECT_ROLES with your project key to discover valid role names (e.g., 'Administrator', 'Member', 'Viewer'). For group visibility: Use JIRA_GET_ALL_GROUPS to list available groups. Common roles include 'Administrator', 'Member', 'Viewer' but actual names depend on your project configuration. |
| `additional_properties` | object | No | Additional properties to include in the comment request body. This can be used to pass extra fields supported by the Jira API that are not explicitly defined, such as 'properties' for EntityProperty objects. Format: {'properties': [{'key': 'myKey', 'value': {'myValue': 123}}]}. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Users to Project Role

**Slug:** `JIRA_ADD_USERS_TO_PROJECT_ROLE`

Adds users and optionally groups to a project role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role_id` | integer | Yes | The ID of the project role to add users to. Use get_project_roles action to find available role IDs. |
| `group_ids` | array | No | Optional list of group IDs to add to the project role. Mutually exclusive with group_names (Jira's ActorsMap rejects sending both). |
| `group_names` | array | No | Optional list of group names to add to the project role. Mutually exclusive with group_ids (Jira's ActorsMap rejects sending both). |
| `user_account_ids` | array | No | List of Atlassian account IDs of users to add to the project role. Must be Atlassian account IDs (alphanumeric strings), not email addresses or display names; use JIRA_FIND_USERS to resolve account IDs first. Optional, but at least one of user_account_ids, group_names, or group_ids must be provided. |
| `project_id_or_key` | string | Yes | The project ID (numeric) or project key (e.g., 'PROJ') of the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add User to Group

**Slug:** `JIRA_ADD_USER_TO_GROUP`

Adds a user to a Jira group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | string | No | The ID of the group to add the user to. Either group_name or group_id must be provided. |
| `account_id` | string | Yes | The Atlassian account ID of the user to add to the group. |
| `group_name` | string | No | The name of the group to add the user to. Either group_name or group_id must be provided. Must be an exact match; prefer group_id for precision. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Watcher to Issue

**Slug:** `JIRA_ADD_WATCHER_TO_ISSUE`

Adds a user to an issue's watcher list by account ID. Requires the authenticated user to have permission to view the issue and manage watchers; insufficient permissions may result in silent failure or an error response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The Atlassian Account ID (accountId) of the user to be added as a watcher. Important: Usernames cannot be used due to Jira API privacy changes; the accountId is required. Resolve the accountId first using JIRA_GET_CURRENT_USER (for the calling user) or JIRA_FIND_USERS (for other users) before calling this tool. |
| `issue_id_or_key` | string | Yes | The ID (a numerical identifier, e.g., '10000') or key (a project-prefixed string, e.g., 'PROJ-123') of the Jira issue to which the watcher will be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Worklog

**Slug:** `JIRA_ADD_WORKLOG`

Tool to add a worklog entry to a Jira issue. Use when logging time spent on an issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information about the worklog in the response. Accepts 'properties'. |
| `comment` | object | No | Atlassian Document Format comment structure. |
| `started` | string | No | The datetime when the work was started in ISO 8601 format (e.g., '2024-01-15T09:00:00.000+0000'). If not provided, the current time is used. |
| `reduce_by` | string | No | Amount to reduce the remaining estimate if adjust_estimate is 'manual' (e.g., '1h 30m', '2d'). |
| `time_spent` | string | No | The time spent as a Jira duration string (e.g., '2h 30m', '1d', '45m'). Either this or time_spent_seconds must be provided. |
| `visibility` | object | No | Details about the visibility restriction of a worklog. |
| `new_estimate` | string | No | The new remaining estimate if adjust_estimate is 'new' (e.g., '2h', '3d 4h'). |
| `notify_users` | boolean | No | Whether to notify users watching the issue about this worklog. |
| `adjust_estimate` | string ("new" | "leave" | "manual" | "auto") | No | Options for adjusting the issue's remaining estimate when adding a worklog. |
| `issue_id_or_key` | string | Yes | The ID or key of the Jira issue to add the worklog to. |
| `time_spent_seconds` | integer | No | The time in seconds spent working on the issue. Either this or time_spent must be provided. |
| `override_editable_flag` | boolean | No | Whether to add the worklog even if the issue is not editable (e.g., closed). Requires admin permissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Analyse Jira Expression

**Slug:** `JIRA_ANALYSE_EXPRESSION`

Analyses Jira expressions for syntax validation, type checking, and complexity analysis. Use when you need to validate Jira expression syntax before using it in automation rules, custom fields, or workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `check` | string ("syntax" | "type" | "complexity") | No | Type of check to perform on the expression. |
| `expressions` | array | Yes | The list of Jira expressions to analyse. Each expression will be checked according to the specified check type. |
| `context_variables` | object | No | Context variables and their types. The type checker assumes that common context variables (such as 'issue' or 'project') are available in context and sets their type. Use this property to override the default types or provide details of new variables. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assign Issue

**Slug:** `JIRA_ASSIGN_ISSUE`

Assigns a Jira issue to a user, default assignee, or unassigns; supports email/name lookup.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | No | The Atlassian Account ID of the user to assign the issue to. Use `'-1'` (as a string) to assign to the project's default assignee. Provide `None` (Python null, which translates to JSON null) or omit this field to unassign the issue. Takes precedence over assignee_name if provided. JIRA_FIND_USERS may return multiple matches or omit emails due to privacy restrictions; verify the correct account_id before assigning. |
| `assignee_name` | string | No | Name of the user to assign the issue to. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if account_id is also provided. On Jira Cloud, privacy settings may cause lookup failures; prefer resolving `account_id` via JIRA_FIND_USERS first and passing it directly. |
| `issue_id_or_key` | string | Yes | The ID or key of the issue to be assigned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Create Issues

**Slug:** `JIRA_BULK_CREATE_ISSUE`

Creates multiple Jira issues (up to 50 per call) with full feature support including markdown, assignee resolution, and priority handling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issues` | array | Yes | List of issues to be created (1 to 50 per request). Each issue definition follows the same structure as the single create issue action. For subtasks, include parent_key to specify the parent issue. IMPORTANT: Priority names are instance-specific - use JIRA_GET_ISSUE_EDIT_META or try submitting to discover available values from the error message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check User Permissions

**Slug:** `JIRA_CHECK_PERMISSIONS`

Check user permissions for global and project-level operations in Jira. Use this action to verify whether a user has specific permissions at the system level or within projects. Useful for authorization checks before performing operations, or for auditing user access rights.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | No | The account ID of the user to check permissions for. If not provided, checks permissions for the currently authenticated user. Account ID format: '712020:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' or '5b10a2844c20165700ede21g'. |
| `global_permissions` | array | No | List of global (system-level) permission keys to check (e.g., 'ADMINISTER', 'SYSTEM_ADMIN', 'CREATE_SHARED_OBJECTS', 'MANAGE_GROUP_FILTER_SUBSCRIPTIONS'). These permissions apply to the entire Jira instance. |
| `project_permissions` | array | No | List of project-level permission checks. Each item specifies permissions to validate along with optional project and issue IDs for context. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Board

**Slug:** `JIRA_CREATE_BOARD`

Creates a new Jira board (kanban, scrum, or agility) with optional filter and location configuration. Use this action when you need to set up a new board for a project or create a personal board for tracking work. The board will organize and visualize issues based on the specified filter or project context.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new board. Choose a clear, descriptive name that helps users identify the board's purpose. |
| `type` | string ("kanban" | "scrum" | "agility") | Yes | Type of board to create. 'kanban' for continuous flow boards, 'scrum' for sprint-based boards, 'agility' for basic agile boards. |
| `filterId` | integer | No | ID of an existing Jira filter to use as the board's issue source. The filter defines which issues appear on the board. Use JIRA_LIST_FILTERS or JIRA_GET_FILTER_FAVOURITE to find filter IDs. |
| `location` | object | No | Location configuration for the board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Group

**Slug:** `JIRA_CREATE_GROUP`

Creates a new group in Jira with the specified name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the group to create. Must be unique within the Jira instance. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Issue

**Slug:** `JIRA_CREATE_ISSUE`

Creates a new Jira issue (e.g., bug, task, story) in a specified project. IMPORTANT: Different Jira projects may have custom required fields beyond the standard ones (summary, project_key, issue_type). If issue creation fails with 'field X is required', use JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS (requires projectIdOrKey and issueTypeId parameters) to discover available fields for your project, or check your Jira project's configuration. Custom fields can be provided via the 'additional_properties' parameter as a JSON string (e.g., '{"customfield_12345": "value"}'). Rapid bulk creation may trigger HTTP 429 rate limiting; throttle calls and use exponential backoff on 429 responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `labels` | array | No | List of labels to categorize the issue; new labels are created if they don't exist. |
| `parent` | string | No | Parent issue key (e.g., 'PROJ-123') or issue ID. IMPORTANT: This field should ONLY be used when creating sub-task issue types (e.g., 'Sub-task', 'Subtask'). It is required for sub-tasks. Jira enforces strict hierarchy rules: standard issue types (Task, Story, Bug) can ONLY have Sub-tasks as children, not other standard issues. Epics can have Stories/Tasks/Bugs as children. Attempting to set a parent on a non-sub-task issue type or using an incompatible parent-child combination will result in a hierarchy error. The parent must be an existing issue in the same project. NOTE: Alternative field names 'parent_key' and 'parent_id' are also accepted and will be automatically mapped to this field. |
| `summary` | string | Yes | REQUIRED. Brief, descriptive title for the issue. This is the main headline that will appear in Jira (e.g., 'Fix login button not working', 'Add user profile page'). |
| `assignee` | string | No | Account ID of the user to assign the issue to. Must be a valid Jira account ID in one of these formats: (1) Cloud format with tenant ID and UUID: '712020:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', or (2) Legacy 24-character hex string: '5b10a2844c20165700ede21g'. IMPORTANT: Do NOT pass email addresses here - use assignee_name field for emails. The account ID is validated to ensure the user exists and can be assigned to issues in the target project. Use JIRA_FIND_USERS to get valid account IDs. Takes precedence over assignee_name if both are provided. NOTE: Some Jira projects (especially Jira Service Management/Service Desk projects) may not allow setting the assignee at issue creation time because the field isn't on the project's create screen. If this occurs, the issue will be created successfully without the assignee, and you'll need to set the assignee separately using JIRA_ASSIGN_ISSUE after creation. |
| `due_date` | string | No | Expected resolution date in YYYY-MM-DD format. |
| `priority` | string | No | Priority level for the issue. Can be either a priority name or a valid priority ID from the Jira instance. IMPORTANT: Priority names are completely instance-specific and vary by Jira configuration (e.g., some instances use 'Highest'/'High'/'Medium'/'Low'/'Lowest', while others use 'P0'/'P1'/'P2'/'P3'/'P4', or custom names). It is strongly recommended to either: (1) check available priorities for your instance first using JIRA_GET_ISSUE_EDIT_META or by inspecting existing issues, or (2) omit this field if unsure. When the global priority endpoint is available, the value is validated against available priorities. If validation is unavailable (404), the value is passed through to Jira for validation. |
| `reporter` | string | No | Account ID of the user reporting the issue. Defaults to the API request user if unspecified. |
| `versions` | array | No | List of IDs for versions affected by this issue; versions must exist in the project. |
| `sprint_id` | integer | No | ID of the sprint to assign this issue to. The issue will be added to the specified sprint if provided. |
| `components` | array | No | List of component IDs (e.g., '10000'); components must already exist in the project. |
| `issue_type` | string | Yes | REQUIRED. Type of the issue - must be valid for the target project as available types vary by project configuration. CRITICAL: Always use JIRA_GET_ISSUE_TYPES to check valid types for your project BEFORE creating issues. Can be either a type name (e.g., 'Task', 'Story', 'Epic') or type ID (e.g., '10001'). Common types include Task, Story, Epic, and Bug, but NOT ALL projects support all types. Issue type names are localized based on your Jira instance's language settings (e.g., 'Task' in English, 'Задача' in Russian, 'Tâche' in French). Using the issue type ID is language-independent and more reliable. |
| `description` | string | No | Detailed description of the issue. Accepts either: (1) A plain text or Markdown string (converted to ADF internally), or (2) A pre-formatted Atlassian Document Format (ADF) dict with keys 'type'='doc', 'version'=1, and 'content' array. When passing ADF directly, formatting is preserved as-is. |
| `environment` | string | No | Environment details. Accepts either: (1) A plain text or Markdown string (converted to ADF internally), or (2) A pre-formatted Atlassian Document Format (ADF) dict with keys 'type'='doc', 'version'=1, and 'content' array. When passing ADF directly, formatting is preserved as-is. |
| `project_key` | string | Yes | REQUIRED. Key of the Jira project where the issue will be created (e.g., 'KAN', 'DEV', 'PROJ'). This is the short uppercase code that appears in issue keys like 'PROJ-123'. Must be an existing project key in your Jira instance. Use JIRA_GET_ALL_PROJECTS to list available projects if you don't know the key. |
| `fix_versions` | array | No | List of IDs for versions where the issue is/will be fixed; versions must exist in the project. |
| `assignee_name` | string | No | Name or email of the user to assign the issue to. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if assignee (account ID) is also provided. NOTE: Slack user IDs (e.g., 'U02QWF25EQ6') are not supported - use the Jira user's email, display name, or account ID instead. NOTE: Some Jira projects (especially Jira Service Management/Service Desk projects) may not allow setting the assignee at issue creation time because the field isn't on the project's create screen. If this occurs, the issue will be created successfully without the assignee, and you'll need to set the assignee separately using JIRA_ASSIGN_ISSUE after creation. |
| `additional_properties` | string | No | JSON string of additional fields to set on the issue. Use this for custom fields or any fields not covered by the standard parameters (e.g., Story Points, custom text fields, etc.). Format: '{"customfield_10104": 5, "customfield_10200": "value"}'. Rich text custom fields (textarea type) accept plain text or Markdown - they are automatically converted to Atlassian Document Format (ADF). You can also pass ADF directly as a JSON object. Use JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS (requires projectIdOrKey and issueTypeId parameters) to discover available custom fields and their IDs - this is the recommended tool for creation-specific metadata. NOTE: The 'resolution' field cannot be set at issue creation - it can only be set during workflow transitions (e.g., when moving an issue to Done/Closed status). If 'resolution' is included, it will be automatically filtered out. IMPORTANT: Keys must use numeric IDs (e.g., 'customfield_10104'), NOT display names — using display names causes 400 Unknown field errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Link Issues

**Slug:** `JIRA_CREATE_ISSUE_LINK`

Links two Jira issues using a specified link type with optional comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | string | No | An optional textual comment to add to the created issue link, providing additional context. |
| `link_type` | string | No | The name of the issue link type to create (e.g., 'Blocks', 'Relates', 'Duplicate', 'Cloners'). Provide either link_type or link_type_id. Use the JIRA_GET_ISSUE_LINK_TYPES action to retrieve valid link type names for your Jira instance. |
| `link_type_id` | string | No | The ID of the issue link type to create (preferred over link_type when known, as it is unambiguous). Provide either link_type or link_type_id. Use JIRA_GET_ISSUE_LINK_TYPES to retrieve valid link type IDs. |
| `inward_issue_key` | string | Yes | The key of the issue that initiates the link relationship (the 'source' issue). For example, if creating a 'Blocks' link from Issue A to Issue B, Issue A is the inward issue. |
| `outward_issue_key` | string | Yes | The key of the issue that is the target of the link relationship (the 'destination' issue). For example, if creating a 'Blocks' link from Issue A to Issue B, Issue B is the outward issue. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get JQL Autocomplete Data

**Slug:** `JIRA_CREATE_JQL_AUTOCOMPLETEDATA`

Retrieves JQL autocomplete reference data including reserved words, field names, and function names. Use when building JQL query editors or validating JQL syntax.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_ids` | array | No | List of project IDs used to filter the visible field details returned. Only fields visible in these projects will be included. |
| `include_collapsed_fields` | boolean | No | Include collapsed fields for fields that have non-unique names. Set to true to include fields with duplicate names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project

**Slug:** `JIRA_CREATE_PROJECT`

Creates a new Jira project with required lead, template, and type configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Unique key for the project. Must be unique across all Jira projects. Must be uppercase letters only, no spaces or special characters. |
| `url` | string | No | Optional URL for the project, like a Confluence space link or external website. |
| `name` | string | Yes | Human-readable name for the project. |
| `avatar_id` | integer | No | Optional ID of an existing avatar for the project. |
| `category_id` | integer | No | Optional ID of an existing project category. |
| `description` | string | No | Optional detailed textual description of the project. |
| `assignee_type` | string ("PROJECT_LEAD" | "UNASSIGNED") | No | Default assignee for new issues: 'PROJECT_LEAD' (assigns to project lead) or 'UNASSIGNED' (issues remain unassigned). |
| `lead_account_id` | string | Yes | Atlassian Account ID (not username or email) of the project lead. Must be a valid account ID from your Jira instance, typically in format like '712020:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. |
| `project_type_key` | string ("business" | "software" | "service_desk") | Yes | Type of project. Must match the template prefix: 'business' for jira-core-project-templates, 'software' for greenhopper templates, 'service_desk' for servicedesk templates. |
| `permission_scheme` | integer | No | Optional ID of an existing permission scheme that is accessible in your Jira instance. The scheme ID must exist and you must have permission to use it. If invalid or inaccessible, project creation will fail. |
| `notification_scheme` | integer | No | Optional ID of an existing notification scheme that is accessible in your Jira instance. The scheme ID must exist and you must have permission to use it. If invalid or inaccessible, project creation will fail. |
| `project_template_key` | string | Yes | Key of the project template. MUST be compatible with project_type_key. Valid combinations: For 'business': 'com.atlassian.jira-core-project-templates:jira-core-project-management', 'com.atlassian.jira-core-project-templates:jira-core-simplified-process-control'. For 'software': 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban', 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum', 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic'. For 'service_desk': 'com.atlassian.servicedesk:simplified-it-service-desk', 'com.atlassian.servicedesk:simplified-internal-service-desk'. |
| `additional_properties` | object | No | Additional properties to include in the project creation request. Use this for any extra fields supported by the Jira API that are not covered by the standard parameters. Provide as a dictionary with field names and their values (using camelCase for field names as expected by the Jira API). IMPORTANT: The scheme fields (fieldConfigurationScheme, workflowScheme, issueTypeScreenScheme, issueTypeScheme) cannot be used when projectTemplateKey is provided - they are mutually exclusive. If you include these fields alongside a project template, they will be automatically removed. Note: The Jira API may ignore unsupported fields. |
| `issue_security_scheme` | integer | No | Optional ID of an existing issue security scheme that is accessible in your Jira instance. The scheme ID must exist and you must have permission to use it. If invalid or inaccessible, project creation will fail. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Sprint

**Slug:** `JIRA_CREATE_SPRINT`

Creates a new sprint on a Jira board with optional start/end dates and goal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `goal` | string | No | Primary objective or goal for the sprint. |
| `name` | string | Yes | Name for the new sprint. Must be 30 characters or less. |
| `end_date` | string | No | Intended end date and time for the sprint (ISO 8601 format). |
| `start_date` | string | No | Intended start date and time for the sprint (ISO 8601 format). |
| `origin_board_id` | integer | Yes | Identifier of the Jira board for the new sprint. You can find board IDs using the JIRA_LIST_BOARDS action. |
| `additional_properties` | object | No | Additional properties to include in the sprint creation request. Use this for any extra fields supported by the Jira API that are not covered by the standard parameters. Provide as a dictionary with field names and their values. Note: Jira Cloud has strict schema validation and may reject unknown properties with a 400 error. This field is primarily useful for Jira Server/Data Center deployments or future API additions. Use with caution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Version

**Slug:** `JIRA_CREATE_VERSION`

Creates a new version for releases or milestones in a Jira project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new version. It is recommended that version names be unique within a project. |
| `archived` | boolean | No | Indicates if the version is marked as archived. |
| `released` | boolean | No | Indicates if the version is marked as released. |
| `project_id` | integer | Yes | Numeric ID of the Jira project to which this version will be added. The project must exist. |
| `start_date` | string | No | Start date for work on the version (YYYY-MM-DD format). |
| `description` | string | No | Textual description for the version, providing more context about its purpose or content. |
| `release_date` | string | No | Release date for the version (YYYY-MM-DD format). Relevant if the version is marked as released or has a planned release. |
| `additional_properties` | object | No | Additional properties to include in the version creation request. Use this for any extra fields supported by the Jira API that are not covered by the standard parameters. Provide as a dictionary with field names and their values. Note: Jira Cloud has strict schema validation and may reject unknown properties with a 400 error. This field is primarily useful for Jira Server/Data Center deployments or future API additions. Use with caution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Attachment

**Slug:** `JIRA_DELETE_ATTACHMENT`

Permanently deletes an attachment from Jira by its ID. This action is irreversible — the attachment cannot be recovered once removed. Use this action when you need to remove an unwanted file from a Jira issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | string | Yes | The unique identifier of the attachment to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Comment

**Slug:** `JIRA_DELETE_COMMENT`

Deletes a specific comment from a Jira issue using its ID and the issue's ID/key; requires user permission to delete comments on the issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the comment to be deleted (e.g., '10001'). |
| `issueIdOrKey` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue from which the comment will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Issue

**Slug:** `JIRA_DELETE_ISSUE`

Permanently and irreversibly deletes a Jira issue by its ID or key. Obtain explicit user confirmation before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `delete_subtasks` | boolean | No | If true, the issue's subtasks are also deleted. If false and the issue has subtasks, the deletion will fail. |
| `issue_id_or_key` | string | Yes | The ID or key of the issue to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Version

**Slug:** `JIRA_DELETE_VERSION`

Deletes a Jira version and optionally reassigns its issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version_id` | string | Yes | The unique identifier of the version to be deleted. |
| `move_fix_issues_to` | string | No | The ID of an alternative version to which issues with the deleted version as their fix version will be moved. If unspecified or null, these issues will remain unassigned from a fix version. |
| `move_affected_issues_to` | string | No | The ID of an alternative version to which issues with the deleted version as their affected version will be moved. If unspecified or null, these issues will remain unassigned from an affected version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Worklog

**Slug:** `JIRA_DELETE_WORKLOG`

Deletes a worklog from a Jira issue with estimate adjustment options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `worklog_id` | string | Yes | The ID of the specific worklog entry to be deleted from the issue. |
| `increase_by` | string | No | Amount to increase the remaining estimate if `adjust_estimate` is 'manual' (e.g., '1h 30m', '5d'). |
| `new_estimate` | string | No | Value for the new remaining estimate if `adjust_estimate` is 'new' (e.g., '2h', '3d 4h'). |
| `notify_users` | boolean | No | If users watching the issue should be notified by email about the worklog deletion. |
| `adjust_estimate` | string ("new" | "leave" | "manual" | "auto") | No | Options for adjusting the issue's remaining estimate after deleting a worklog. |
| `issue_id_or_key` | string | Yes | The ID or key of the Jira issue from which the worklog will be deleted. |
| `override_editable_flag` | boolean | No | If true, allows deletion of the worklog even if the issue is in a closed status, potentially bypassing workflow restrictions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Issue

**Slug:** `JIRA_EDIT_ISSUE`

Updates an existing Jira issue with field values and operations. Supports direct field parameters (summary, description, assignee, priority, etc.) that are merged with the fields parameter. Direct parameters take precedence.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | JSON string of fields for direct updates (e.g., summary, description). When including assignee in this object, you may provide either: (a) an accountId object '{"assignee": {"accountId": "<id>"}}', (b) a string email/display name '{"assignee": "user@example.com"}' or '{"assignee": "Full Name"}', or (c) null to unassign. String values are resolved to accountId automatically. See Jira's 'edit issue metadata' for available fields. Use `update` for more complex operations like list modifications. IMPORTANT: The 'status' field cannot be updated via this action - use JIRA_TRANSITION_ISSUE action instead to change issue status. Rich text fields (description, environment, and custom textarea fields) support plain text or Markdown - they are automatically converted to Atlassian Document Format (ADF). You can also pass ADF directly as a JSON object. |
| `labels` | array | No | List of labels to set for the issue (replaces existing labels). New labels are created if they don't exist. |
| `update` | string | No | JSON string for granular field operations (e.g., adding/removing labels, modifying list items). See Jira documentation for operation structure. |
| `summary` | string | No | Brief, descriptive title for the issue. |
| `assignee` | string | No | User to assign the issue to. Can be either an account ID (e.g., '5b10a2844c20165700ede21g') or name/email (e.g., 'john@company.com', 'John Doe'). When user email visibility is restricted, account ID is required. The system will auto-detect the type and search accordingly. Provide null or an empty string to unassign. Prefer using account ID when available to avoid visibility restrictions. |
| `due_date` | string | No | Expected resolution date in YYYY-MM-DD format. Use null to remove due date. |
| `description` | string | No | Detailed description of the issue. Supports Markdown formatting including **bold**, *italic*, `code`, links [text](url), and lists. Note: Jira enforces size limits on the description field (typically ~32,767 characters, varies by instance). For very large content, consider splitting across comments or using attachments. |
| `notify_users` | boolean | No | If true, sends notification email to watchers. Setting to `False` requires admin or project admin permissions. |
| `return_issue` | boolean | No | If true, response includes full updated issue details; if false, response is minimal. |
| `issue_id_or_key` | string | Yes | ID or key of the Jira issue to be edited. |
| `sprint_id_or_name` | string | No | Sprint to assign this issue to. Can be either a sprint ID (e.g., '123', '456') or sprint name (e.g., 'Sprint 1', 'Release Sprint'). The sprint must exist and be accessible. Use JIRA_LIST_SPRINTS to find available sprints. |
| `priority_id_or_name` | string | No | Priority level for the issue. Can be either a priority ID (e.g., '1', '2') or priority name (e.g., 'High', 'Medium', 'Low'). |
| `additional_properties` | object | No | Additional properties to include in the request body. This can be used to pass extra fields supported by the Jira API that are not explicitly defined, such as custom fields or other issue properties. These are merged into the 'fields' object in the request. Format: {'customfield_12345': 'value', 'components': [{'name': 'Backend'}]}. |
| `override_editable_flag` | boolean | No | If true, bypasses editable flag restrictions. Requires admin permissions. |
| `override_screen_security` | boolean | No | If true, bypasses screen security restrictions. Requires admin permissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Evaluate Jira Expression

**Slug:** `JIRA_EVALUATE_JIRA_EXPRESSION`

Tool to evaluate Jira expressions using the enhanced search API. Use when you need to extract or transform data from Jira using Jira expression language. Useful for complex data queries, transformations, and building custom objects from Jira data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information in the response. This parameter accepts 'meta.complexity' that returns information about the expression complexity, such as the number of expensive operations used and how close the expression is to reaching the complexity limit. Useful when designing and debugging your expressions. |
| `context` | object | No | Context in which the Jira expression is evaluated. |
| `expression` | string | Yes | The Jira expression to evaluate. Jira expressions allow you to extract and transform data from Jira. For example: 'issue.key' returns the issue key, 'issue.issueType.name' returns the issue type name, or complex expressions like '{ key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id) }' to build custom objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Fetch Issues

**Slug:** `JIRA_FETCH_BULK_ISSUES`

Tool to bulk fetch multiple Jira issues by their IDs or keys (max 100 per call). Use when you need to retrieve details for multiple issues efficiently in a single API call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | A list of expand options to include additional information about issues. Available options: 'renderedFields' (HTML-rendered field values), 'names' (display name of each field), 'schema' (field type schema), 'transitions' (all possible transitions), 'operations' (all possible operations), 'editmeta' (edit metadata), 'changelog' (recent updates, max 40), 'versionedRepresentations' (versioned field values). |
| `fields` | array | No | A list of fields to return for each issue. This parameter accepts field names or IDs. Special values: '*all' returns all fields, '*navigable' returns navigable fields (default), prefix with minus to exclude (e.g., '-description' excludes description). Examples: ['summary', 'comment'] returns only summary and comments; ['-description'] returns all navigable fields except description; ['*all', '-comment'] returns all fields except comments. |
| `properties` | array | No | A list of issue property keys to include in the results. Maximum 5 issue property keys can be specified. |
| `fieldsByKeys` | boolean | No | If true, reference fields by their key (rather than ID). Default is false. |
| `issueIdsOrKeys` | array | Yes | REQUIRED. An array of issue IDs or issue keys to fetch. You can mix issue IDs and keys in the same query. Minimum 1 issue, maximum 100 issues per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Users (Deprecated)

**Slug:** `JIRA_FIND_USERS`

DEPRECATED: Use JIRA_FIND_USERS2 instead. Searches for Jira users by email or display name to find account IDs; essential for assigning issues, adding watchers, and other user-related operations. Broad queries may return multiple matches — always disambiguate using full email before selecting an account_id. Results may include app/bot accounts; verify account_type is a human user before use in downstream operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | A query string that is matched against user attributes. This can be used to search by display name or email address. For example, 'john@company.com' to find a user by email. At least one of 'query' or 'account_id' must be provided. Plain-text only — JQL-style functions like currentUser() are unsupported and return no results. Email fields in results may be redacted due to privacy settings; use display_name for disambiguation when email is unavailable. |
| `active` | boolean | No | Filter users by active status. When true, only active users are returned. When false, only inactive users are returned. If not provided, the search returns active users. |
| `start_at` | integer | No | The 0-based index of the first item to return in the page of results. Used for pagination. |
| `account_id` | string | No | The account ID to search for. Use this to get user details when you already have the account ID. At least one of 'query' or 'account_id' must be provided. |
| `max_results` | integer | No | The maximum number of items to return per page. Defaults to 50. Maximum allowed is typically 1000. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Users 2

**Slug:** `JIRA_FIND_USERS2`

Tool to find users in Jira by query string, account ID, or property search. Use when you need to search for users to assign to issues, add as watchers, or perform other user-related operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | A query string that is matched against user attributes (displayName, and emailAddress) to find relevant users. The string can match the prefix of the attribute's value. For example, 'john' matches a user with a displayName of 'John Smith' and a user with an emailAddress of 'johnson@example.com'. Required, unless accountId or property is specified. |
| `startAt` | integer | No | The index of the first item to return in a page of filtered results (page offset). |
| `property` | string | No | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of 'nested' from {"something":{"nested":1,"other":2}} use 'thepropertykey.something.nested=1'. Required, unless accountId or query is specified. |
| `username` | string | No | This parameter is no longer available. See the deprecation notice for details. |
| `accountId` | string | No | A query string that is matched exactly against a user accountId. Required, unless query or property is specified. |
| `maxResults` | integer | No | The maximum number of items to return per page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Users For Picker

**Slug:** `JIRA_FIND_USERS_FOR_PICKER`

Find users for picker components by matching query against user attributes like display name and email.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. |
| `avatarSize` | string | No | The size of the avatar to return. Only used when `show_avatar` is true. |
| `maxResults` | integer | No | The maximum number of items to return. The total number of matched users is returned in `total`. Defaults to 50. |
| `showAvatar` | boolean | No | Include the URI to the user's avatar. Defaults to false. |
| `excludeAccountIds` | array | No | A list of account IDs to exclude from the search results. Cannot be provided with `exclude`. |
| `excludeConnectUsers` | boolean | No | Exclude Connect app users from the search results. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Groups

**Slug:** `JIRA_GET_ALL_GROUPS`

Retrieves a page of groups from the Jira instance. Useful for resolving correct group names or IDs before passing them to other tools. Some returned groups are system-managed and may be inaccessible via other group operations. Use `start_at`/`max_results` to page through results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start_at` | integer | No | The 0-based index of the first item to return in the page of results. Defaults to 0. To paginate, use `next_start_at` from the response (or increment `start_at` by `max_results`); stop when `has_next_page` is false. |
| `max_results` | integer | No | The maximum number of items to return per page. Defaults to 50. The Jira instance might have its own maximum limit for this value. A single page is returned per call; use `has_next_page`/`next_start_at` to fetch more. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Issue Type Schemes

**Slug:** `JIRA_GET_ALL_ISSUE_TYPE_SCHEMES`

Retrieves all Jira issue type schemes with optional filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The list of issue type scheme IDs to filter results. Returns only schemes with these IDs. |
| `start_at` | integer | No | The index of the first item to return in a page of results (page offset). Default is 0. |
| `max_results` | integer | No | The maximum number of items to return per page. Default is 50, maximum is 100. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all projects

**Slug:** `JIRA_GET_ALL_PROJECTS`

Retrieves all visible projects using the modern paginated Jira API with server-side filtering and pagination support. Results reflect only projects the authenticated user can access — small or empty result sets may indicate permission restrictions, not absence of projects. An empty `values` array means no projects matched the filters; relax `query`, `status`, or `categoryId` if unexpected. Project keys are mutable; prefer the stable numeric project ID for durable references in follow-up calls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | DEPRECATED: Use 'query' parameter instead. The project name (or part of it) to filter the results. This will be mapped to the 'query' parameter. |
| `query` | string | No | Filter the results using a query string. Projects with a name or key that contains the query string are returned. The search is case-insensitive. May return multiple partial matches — verify the correct project by exact name or key before using the result. Use the returned project ID or key to pass to tools like JIRA_GET_PROJECT that require a stable identifier. |
| `action` | string ("view" | "browse" | "edit" | "create") | No | Action types for filtering projects by user permissions. |
| `expand` | string | No | A comma-separated list of entities to expand in the response for additional project details. Valid options include: `description` (to include the project description), `issueTypes` (to include all issue types associated with the project), `lead` (to include information about the project lead), and `projectKeys` (to include all project keys associated with the project). |
| `status` | array | No | EXPERIMENTAL. Filter results by project status. Valid values: 'live', 'archived', 'deleted'. |
| `orderBy` | string | No | Order the results by a field. Valid values: 'category', 'issueCount', 'key', 'lastIssueUpdatedTime', 'name', 'owner', 'archivedDate', 'deletedDate'. Prefix with '-' for descending order. |
| `startAt` | integer | No | The index of the first item to return in a page of results (page offset). The base index is 0. |
| `categoryId` | integer | No | The ID of the project category to filter by. |
| `maxResults` | integer | No | The maximum number of projects to return per page. Maximum allowed value is 100. |
| `properties` | array | No | A list of project property keys to include in the response for each project, allowing retrieval of custom project entity properties. For example, if a project has a property with key 'com.example.property', including this key here as part of the list will return its value. Provide as a list of strings, e.g., `['property1', 'property2']`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Statuses

**Slug:** `JIRA_GET_ALL_STATUSES`

Retrieves all issue statuses associated with workflows from Jira. Returns global statuses that may not be valid for every project or workflow scheme; verify a returned status is applicable to the specific project before use.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Users

**Slug:** `JIRA_GET_ALL_USERS`

Retrieves all users from the Jira instance including active, inactive, app accounts, and system accounts, with pagination support. On Jira Cloud, fields like `email_address` may be redacted due to privacy settings — never treat them as guaranteed present. Successful responses may silently omit users due to permission restrictions; a smaller-than-expected result set may reflect access limits, not absence of users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start_at` | integer | No | The 0-based index of the first item to return in the page of results. Defaults to 0. To paginate, increment `start_at` by `max_results` each request (or use `next_start_at` from the response); stop when `has_next_page` is false. |
| `max_results` | integer | No | The maximum number of items to return per page. Defaults to 50. The Jira instance might have its own maximum limit for this value. A single page is returned per call; use `has_next_page`/`next_start_at` from the response to fetch subsequent pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment

**Slug:** `JIRA_GET_ATTACHMENT`

Retrieves the binary content of a Jira attachment by ID. Use when you need to download a specific file attached to an issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_name` | string | Yes | Desired filename for the downloaded attachment. |
| `attachment_id` | string | Yes | The unique identifier of the attachment to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment Meta

**Slug:** `JIRA_GET_ATTACHMENT_META`

Tool to retrieve Jira attachment settings including upload limits and enabled status. Use when you need to check if attachments are enabled or determine the maximum file size allowed.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Comment

**Slug:** `JIRA_GET_COMMENT`

Retrieves a specific comment by ID from a Jira issue with optional expansions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Optional. Sections to expand, e.g., 'renderedBody' for HTML. See Jira API docs for other values. |
| `comment_id` | string | Yes | Unique ID of the comment to retrieve. |
| `issue_id_or_key` | string | Yes | ID or key of the Jira issue (e.g., '10000' or 'PROJ-123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Component

**Slug:** `JIRA_GET_COMPONENTS`

Tool to retrieve components from Jira projects with search and filtering. Use when you need to list or find components across projects, optionally filtered by project IDs/keys or search query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Filter the results using a literal string. Components with a matching name or description are returned (case insensitive). |
| `orderBy` | string ("description" | "-description" | "+description" | "name" | "-name" | "+name") | No | Enum for orderBy parameter values. |
| `startAt` | integer | No | The index of the first item to return in a page of results (page offset). Used for pagination. |
| `maxResults` | integer | No | The maximum number of items to return per page. Used for pagination. |
| `projectIdsOrKeys` | array | No | The project IDs and/or project keys (case sensitive) to filter components by. Returns components from all projects if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Create Field Metadata for Issue Type

**Slug:** `JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS`

Tool to retrieve field metadata for a specific issue type in a project. Use this to discover required fields, allowed values, and field configurations before creating issues of a specific type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `startAt` | integer | No | The index of the first item to return in a page of results (page offset). Default is 0. |
| `maxResults` | integer | No | The maximum number of items to return per page. Default is 50. Maximum allowed value is 200. |
| `issueTypeId` | string | Yes | The issue type ID. This is the numeric identifier for the issue type (e.g., '10001' for Task, '10002' for Story). Use JIRA_GET_ISSUE_TYPES to discover available issue type IDs for a project. |
| `projectIdOrKey` | string | Yes | The ID or key of the project. For example, '10000' or 'KAN'. Use the project key (e.g., 'KAN') for easier identification, or the numeric project ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current User

**Slug:** `JIRA_GET_CURRENT_USER`

Retrieves detailed information about the currently authenticated Jira user. The returned `accountId` is the correct identifier for fields like `lead_account_id` in JIRA_CREATE_PROJECT, JIRA_ADD_WATCHER_TO_ISSUE, and JIRA_REMOVE_WATCHER_FROM_ISSUE — never use email or username in those fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Comma-separated list of user properties to expand, e.g., 'groups', 'applicationRoles'. Omitting this parameter returns only the base user profile without group membership or role data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Dashboards

**Slug:** `JIRA_GET_DASHBOARDS`

Tool to list and search Jira dashboards visible to the current user. Use when you need to discover available dashboards, filter by ownership or favorites, or retrieve dashboard details including permissions and popularity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string ("my" | "favourite") | No | Filter options for dashboard search. |
| `startAt` | integer | No | The index of the first item to return in a page of results (page offset). Defaults to 0 if not specified. |
| `maxResults` | integer | No | The maximum number of items to return per page. Defaults to 20 if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Favorite Filters

**Slug:** `JIRA_GET_FAVORITE_FILTERS`

Tool to retrieve favorite filters for the current user. Use when you need to discover which saved filters the user has marked as favorites.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include: 'sharedUsers' (returns users the filter is shared with, limited to 1000; append [start-index:end-index] for pagination, e.g., 'sharedUsers[1001:2000]'), 'subscriptions' (returns users subscribed to the filter, limited to 1000; append [start-index:end-index] for pagination, e.g., 'subscriptions[1001:2000]'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fields

**Slug:** `JIRA_GET_FIELDS`

Tool to retrieve Jira issue fields metadata. Use before editing an issue to discover custom field IDs and names. Custom fields are addressed as customfield_XXXXX in API calls and cf[XXXXX] in JQL; using display names instead causes 400 Unknown field errors. Returns global metadata — cross-reference with JIRA_GET_ISSUE_EDIT_META before editing, as globally visible fields not listed there will also cause 400 errors when sent to JIRA_EDIT_ISSUE. Results are scoped to the authenticated user's permissions, so field sets may differ between users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_type` | string | No | Filter fields by issue type. Can be issue type ID (e.g., '10001') or name (e.g., 'Bug', 'Task', 'Story'). Requires 'project_id' to be specified. |
| `project_id` | string | No | Filter fields by project ID (e.g., '10000'). |
| `custom_only` | boolean | No | If true, returns only custom fields; otherwise returns all fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom fields paginated

**Slug:** `JIRA_GET_FIELDS_PAGINATED`

Tool to retrieve Jira fields in pages. Use when you need to filter or page through custom and system fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | Filter fields by their IDs. Provide a list of field ID strings. |
| `type` | array | No | Filter fields by type. One or more of 'custom' or 'system'. |
| `query` | string | No | Case-insensitive partial match string for field names or descriptions. |
| `expand` | array | No | Additional information to include in the response; comma-separated options. |
| `orderBy` | string ("contextsCount" | "-contextsCount" | "+contextsCount" | "lastUsed" | "-lastUsed" | "+lastUsed" | "name" | "-name" | "+name" | "screensCount" | "-screensCount" | "+screensCount" | "projectsCount" | "-projectsCount" | "+projectsCount") | No | Order the results by the selected field. Prefix with '-' or '+' for descending/ascending. |
| `startAt` | integer | No | The index of the first item to return in a page of results. Default is 0. |
| `maxResults` | integer | No | The maximum number of items to return per page. Default is 50. |
| `projectIds` | array | No | Filter fields by these project IDs. Inaccessible projects are excluded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Filter

**Slug:** `JIRA_GET_FILTER`

Retrieves a specific Jira saved filter by ID, including its JQL and sharing metadata, to reuse in subsequent searches. Use when you need to fetch filter details or extract the JQL query to run searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the filter to retrieve (numeric string, e.g., '10000'). |
| `expand` | string | No | Use expand to include additional information about the filter. Available expansions include 'sharedUsers' (users the filter is shared with), 'subscriptions' (filter subscriptions). Provide as a comma-separated list (e.g., 'sharedUsers,subscriptions'). |
| `overrideSharePermissions` | boolean | No | Set to true to override share permissions and retrieve filters not shared with the user. Requires administrative privileges. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Group

**Slug:** `JIRA_GET_GROUP`

Retrieves details of a specific Jira group by name or ID. Use JIRA_GET_ALL_GROUPS to discover valid group names/IDs first. Some system-managed groups may be inaccessible due to permission restrictions even when name/ID is known.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Additional properties to expand in the response. Use 'users' to include group members. Useful for verifying membership state after group modification operations. |
| `group_id` | string | No | The unique ID of the group to retrieve. Either group_name or group_id must be provided. |
| `group_name` | string | No | The name of the group to retrieve. Either group_name or group_id must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Service Management Info

**Slug:** `JIRA_GET_INFO`

Retrieves runtime information for the Jira Service Management instance. Use when you need to check the version, build date, or license status.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue

**Slug:** `JIRA_GET_ISSUE`

Retrieves a Jira issue by ID or key with customizable fields and expansions. Request only needed fields and expansions to avoid large responses. Use specific `customfield_*` keys in `fields` to verify updated values programmatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | A comma-separated list of entities to include with the issue. To retrieve update history, include 'changelog' in this list (e.g., 'changelog'). Other common expansions include 'renderedFields' (HTML content), 'transitions' (available workflows), and 'operations' (available actions). |
| `fields` | array | No | A list of field names or IDs to return for the issue. If omitted or empty, a default set of fields (often all fields or all navigable fields) is returned. For specific fields, provide a list like `["summary", "status"]`. |
| `issue_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue to retrieve. |
| `properties` | array | No | A list of issue property keys to include in the response. Issue properties are extra key-value data attached to an issue, often by apps. Example: `["jira.meta.data", "com.example.custom.info"]`. |
| `fields_by_keys` | boolean | No | If true, the strings in the `fields` parameter are interpreted as field keys (e.g., 'summary') instead of field IDs (e.g., 'customfield_10000'). Default is false (uses field IDs). |
| `update_history` | boolean | No | Controls whether viewing the issue adds it to the user's 'Recently viewed' list. This does not control inclusion of update history in the response. To include update history, use the 'expand' parameter with 'changelog'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Create Issue Metadata (Deprecated)

**Slug:** `JIRA_GET_ISSUE_CREATE_METADATA`

DEPRECATED: Use JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS instead. This action wraps the deprecated query-based GET /issue/createmeta endpoint. Tool to retrieve issue creation metadata for Jira projects (available projects, issue types, and required fields).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information about issue metadata in the response. This parameter accepts 'projects.issuetypes.fields', which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the 'fields' and 'update' fields in Create issue and Create issues endpoints. |
| `projectIds` | array | No | List of project IDs to filter the results. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, 'projectIds=10000,10001&projectIds=10020,10021'. This parameter may be provided with 'projectKeys'. |
| `projectKeys` | array | No | List of project keys to filter the results. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, 'projectKeys=proj1,proj2&projectKeys=proj3'. This parameter may be provided with 'projectIds'. |
| `issuetypeIds` | array | No | List of issue type IDs to filter the results. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, 'issuetypeIds=10000,10001&issuetypeIds=10020,10021'. This parameter may be provided with 'issuetypeNames'. |
| `issuetypeNames` | array | No | List of issue type names to filter the results. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, 'issuetypeNames=name1,name2&issuetypeNames=name3'. This parameter may be provided with 'issuetypeIds'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Edit Meta

**Slug:** `JIRA_GET_ISSUE_EDIT_METADATA`

Tool to retrieve editable fields for a Jira issue. Use before running an edit action to fetch custom field metadata and required fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue to inspect. |
| `override_editable_flag` | boolean | No | Skip workflow/step editability checks when true. Intended for apps with Administer Jira permission. |
| `override_screen_security` | boolean | No | Skip screen and field-configuration visibility checks when true. Intended for apps with Administer Jira permission. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Link Types

**Slug:** `JIRA_GET_ISSUE_LINK_TYPES`

Retrieves all configured issue link types from Jira.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get issue picker

**Slug:** `JIRA_GET_ISSUE_PICKER_SUGGESTIONS`

Tool to get issue picker suggestions from Jira. Use when you need to search for issues and get auto-completion suggestions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | A string to match against text fields in the issue such as title, description, or comments. |
| `currentJQL` | string | No | A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead. |
| `showSubTasks` | boolean | No | Indicate whether to include subtasks in the suggestions list. |
| `currentIssueKey` | string | No | The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query. |
| `currentProjectId` | string | No | The ID of a project that suggested issues must belong to. |
| `showSubTaskParent` | boolean | No | When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Property

**Slug:** `JIRA_GET_ISSUE_PROPERTY`

Retrieves a custom property from a Jira issue by key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `property_key` | string | Yes | The key of the issue property to retrieve. Property keys are often dot-separated, like 'com.example.property.key'. |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'TEST-123') of the Jira issue. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Resolutions

**Slug:** `JIRA_GET_ISSUE_RESOLUTIONS`

Retrieves all available issue resolution types from Jira.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get issue types

**Slug:** `JIRA_GET_ISSUE_TYPES`

Retrieves all Jira issue types available to the user using the modern API v3 endpoint; results vary based on 'Administer Jira' global or 'Browse projects' project permissions. Response includes two shapes: global issue types (no scope field) and project-scoped types (include scope.project.id); deduplicate by id, not name. Always use issuetype.id (not display name) when referencing issue types in other API calls to avoid validation errors.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Watchers

**Slug:** `JIRA_GET_ISSUE_WATCHERS`

Retrieves users watching a Jira issue for update notifications. Watcher data access may be restricted by Jira permissions. Returns all watchers; filter client-side by `accountId` to check if a specific user is watching.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id_or_key` | string | Yes | The ID or key of the Jira issue for which to retrieve watchers. This can be the numerical ID (e.g., '10000') or the human-readable key (e.g., 'PROJ-123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Worklogs (Deprecated)

**Slug:** `JIRA_GET_ISSUE_WORKLOGS`

DEPRECATED: Use JIRA_GET_WORKLOG instead. This action is deprecated because it lacks the expand parameter for worklog properties. Use JIRA_GET_WORKLOG which provides the same functionality plus the ability to expand worklog properties using the 'expand' parameter. Legacy description: Retrieves worklogs for a Jira issue with user permission checks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start_at` | integer | No | Index of the first worklog to return (for pagination). Defaults to 0. |
| `max_results` | integer | No | Maximum number of worklogs to return per page. Defaults to a system-defined limit. |
| `started_after` | integer | No | Filters worklogs to include only those started after this Unix timestamp (milliseconds). |
| `started_before` | integer | No | Filters worklogs to include only those started before this Unix timestamp (milliseconds). |
| `issue_id_or_key` | string | Yes | The ID or key of the issue for which worklogs are to be fetched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get JQL autocomplete reference data

**Slug:** `JIRA_GET_JQL_AUTOCOMPLETEDATA`

Tool to retrieve JQL autocomplete reference data. Use when you need to discover available JQL fields, functions, and reserved words for building queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get JQL autocomplete suggestions

**Slug:** `JIRA_GET_JQL_AUTOCOMPLETEDATA_SUGGESTIONS`

Tool to get JQL field auto-complete suggestions. Use when building JQL queries to discover valid field values or predicate options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fieldName` | string | No | The name of the field for which to get suggestions. |
| `fieldValue` | string | No | The partial field item name entered by the user to filter suggestions. |
| `predicateName` | string | No | The name of the CHANGED operator predicate for which suggestions are generated. Valid values: 'by', 'from', 'to'. |
| `predicateValue` | string | No | The partial predicate item name entered by the user to filter suggestions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get My Permissions

**Slug:** `JIRA_GET_MY_PERMISSIONS`

Tool to retrieve the user's permissions in Jira. Use when checking what actions the authenticated user can perform in a specific context (project, issue, or comment).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issueId` | string | No | The ID of the issue. |
| `issueKey` | string | No | The key of the issue. Ignored if `issueId` is provided. |
| `commentId` | string | No | The ID of the comment. |
| `projectId` | string | No | The ID of the project. |
| `projectKey` | string | No | The key of the project. Ignored if `projectId` is provided. |
| `permissions` | string | Yes | A comma-separated list of permission keys to check. Required: the API returns 400 if omitted. To get the list of available permissions, use the Get all permissions action. |
| `projectUuid` | string | No | The UUID of the project. |
| `projectConfigurationUuid` | string | No | The UUID of the project configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Locale Preference

**Slug:** `JIRA_GET_MYPREFERENCES_LOCALE`

Tool to retrieve the locale preference of the currently authenticated Jira user. Use when you need to know the user's language and regional settings.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Permissions

**Slug:** `JIRA_GET_PERMISSIONS`

Tool to retrieve all available Jira permissions. Use when you need to list all permission types that exist in Jira, including project and global permissions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Permitted Projects

**Slug:** `JIRA_GET_PERMITTED_PROJECTS`

Tool to retrieve projects where the current user has specific permissions. Use when you need to find which projects a user can access with certain permission levels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `permissions` | array | Yes | A list of permission keys to filter projects. Only projects where the user has ALL specified permissions will be returned. Common permission keys: BROWSE_PROJECTS, CREATE_ISSUES, EDIT_ISSUES, DELETE_ISSUES, ADMINISTER_PROJECTS, ASSIGN_ISSUES, CLOSE_ISSUES, TRANSITION_ISSUES. See Jira's project permissions documentation for the full list of valid keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project

**Slug:** `JIRA_GET_PROJECT`

Retrieves details of a Jira project by its ID or key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information about project in the response. Available options: description, issueTypes, lead, projectKeys, issueTypeHierarchy. |
| `properties` | string | No | A comma-separated list of project properties to return for the project. Maximum 100 keys can be specified. |
| `project_id_or_key` | string | Yes | The project ID (numeric) or project key (e.g., 'PROJ') of the project to retrieve. Prefer the numeric ID for durable references, as project keys are mutable and can be renamed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Roles

**Slug:** `JIRA_GET_PROJECT_ROLES`

Retrieves all available roles for a Jira project. Role IDs are project-specific and must not be reused across projects; call this action per project to obtain correct role IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_key` | string | Yes | The project ID (numeric) or project key (e.g., 'PROJ') of the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Templates

**Slug:** `JIRA_GET_PROJECT_TEMPLATES`

Retrieves available Jira project templates for creating projects. Returns template keys that can be used with the Create Project action. Use this action when you need to discover valid project template keys before creating a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_type_key` | string | No | Filter templates by project type key. Valid values: 'software', 'business', 'service_desk', 'product_discovery'. If not provided, returns templates for all project types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Type

**Slug:** `JIRA_GET_PROJECT_TYPE`

Retrieves detailed information about a specific Jira project type by its key. Use when you need to get metadata about project types like software, service desk, business, or product discovery projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_type_key` | string ("software" | "service_desk" | "business" | "product_discovery") | Yes | The key of the project type to retrieve. Valid values are: software (for software projects), service_desk (for service desk projects), business (for business projects), or product_discovery (for product discovery projects). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Versions

**Slug:** `JIRA_GET_PROJECT_VERSIONS`

Retrieves all versions for a Jira project with optional expansion. Use version IDs from the response (not names) when setting fixVersions or affectedVersions on issues — submitting names alone causes 400 validation errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Comma-separated string of properties to expand for each version (e.g., 'operations', 'issuesstatus'). |
| `project_id_or_key` | string | Yes | The ID or unique key of the Jira project for which versions are to be retrieved. For example, '10000' or 'PROJECTKEY'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Recent Projects

**Slug:** `JIRA_GET_RECENT_PROJECTS`

Retrieves a list of projects recently accessed by the authenticated user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include: description (returns the project description), projectKeys (returns all project keys associated with a project), lead (returns information about the project lead), issueTypes (returns all issue types associated with the project), url (returns the URL associated with the project), permissions (returns the permissions associated with the project), insight (EXPERIMENTAL - returns the insight details of total issue count and last issue update time for the project), * (returns the project with all available expand options). |
| `properties` | array | No | EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Remote Links

**Slug:** `JIRA_GET_REMOTE_ISSUE_LINKS`

Retrieves links from a Jira issue to external resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `global_id` | string | No | Optional. The global ID of a specific remote issue link to retrieve, provided by the external linking application. If specified, only the remote issue link matching this global ID is returned. |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJECT-123') of the Jira issue for which to retrieve remote links. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Server Info

**Slug:** `JIRA_GET_SERVER_INFO`

Tool to retrieve Jira instance server information. Use when you need details about the Jira version, build, deployment type, or server configuration.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Service Desk Request Type Fields

**Slug:** `JIRA_GET_SERVICE_DESK_REQUEST_TYPE_FIELDS`

Tool to retrieve JSM request type field metadata for filling out portal requests. Use when you need to know which fields are required and their valid values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `requestTypeId` | string | Yes | The ID of the request type (e.g., '25'). |
| `serviceDeskId` | string | Yes | The ID or project key of the service desk (e.g., '10' or 'SD'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Sprint

**Slug:** `JIRA_GET_SPRINT`

Retrieves detailed information about a specific sprint by its ID. Use this action when you need to fetch a single sprint's details directly by ID, such as checking sprint status, dates, goal, or metadata. For finding sprint IDs, use JIRA_LIST_SPRINTS first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sprint_id` | integer | Yes | The unique identifier of the sprint to retrieve. Use JIRA_LIST_SPRINTS to find sprint IDs for a board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get System Avatars

**Slug:** `JIRA_GET_SYSTEM_AVATARS`

Tool to retrieve all system avatars for a specific type (issuetype, project, user, or priority). Use when you need to get a list of available default avatars that can be assigned to Jira entities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("issuetype" | "project" | "user" | "priority") | Yes | The avatar type to retrieve system avatars for. Options: issuetype, project, user, priority. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transitions

**Slug:** `JIRA_GET_TRANSITIONS`

Retrieves available workflow transitions for a Jira issue. Always use the numeric `id` from the response when calling JIRA_TRANSITION_ISSUE — transition IDs are project/workflow-specific and must not be hardcoded or reused across different issues or projects. When multiple transitions share similar names, use `id` to disambiguate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | A comma-separated list of properties to expand in the response. Use 'transitions.fields' to include the fields associated with each transition, providing details on what input is expected or allowed. |
| `transition_id` | string | No | The ID of a specific transition to retrieve. If provided, only details for this transition are returned. |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue for which to retrieve transitions. |
| `skip_remote_only_condition` | boolean | No | If true, conditions defined by remote apps that only run remotely will be skipped during evaluation. |
| `sort_by_ops_bar_and_status` | boolean | No | If true, sorts the returned transitions by their order in the operations bar and then by status category. |
| `include_unavailable_transitions` | boolean | No | If true, transitions that are not currently available for the issue (e.g., due to unmet conditions) will be included in the response. Use this as a diagnostic step when an expected target status is missing from the default response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Universal Avatar Type Owner

**Slug:** `JIRA_GET_UNIVERSAL_AVATAR_TYPE_OWNER`

Tool to retrieve all avatars (system and custom) for a specific type and entity in Jira. Use when you need to view available avatar options for projects, issue types, or priorities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("project" | "issuetype" | "priority") | Yes | The avatar type. Must be one of: project, issuetype, or priority. |
| `entityId` | string | Yes | The ID of the item the avatar is associated with (e.g., project ID, issue type ID, or priority ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Universal Avatar View Type

**Slug:** `JIRA_GET_UNIVERSAL_AVATAR_VIEW_TYPE`

Tool to retrieve the default avatar image for a specific type (project, issuetype, or priority) from Jira. Use when you need to download the default avatar for a type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `size` | string ("xsmall" | "small" | "medium" | "large" | "xlarge") | No | The size of the avatar image. |
| `type` | string ("issuetype" | "project" | "priority") | Yes | The icon type of the avatar (issuetype, project, or priority). |
| `format` | string ("png" | "svg") | No | The format of the avatar image. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Groups

**Slug:** `JIRA_GET_USER_GROUPS`

Retrieves all groups for a specific Jira user by account ID. Use this action when you need to check group membership for a particular user, verify permissions, or audit user access. Essential for understanding which groups a user belongs to before performing group-related operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The Atlassian account ID of the user whose groups you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Avatar Image

**Slug:** `JIRA_GET_VIEW_TYPE_AVATAR`

Tool to retrieve a specific avatar image by type and ID from Jira. Use when you need to download avatar images for projects, issue types, or priorities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the avatar. |
| `size` | string ("xsmall" | "small" | "medium" | "large" | "xlarge") | No | The size of the avatar image. |
| `type` | string ("issuetype" | "project" | "priority") | Yes | The icon type of the avatar (issuetype, project, or priority). |
| `format` | string ("png" | "svg") | No | The format of the avatar image. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Issue Votes

**Slug:** `JIRA_GET_VOTES`

Fetches voting details for a Jira issue; requires voting to be enabled in Jira's general settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id_or_key` | string | Yes | The ID or key of the Jira issue (e.g., 'PROJ-123' or '10000'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Worklogs

**Slug:** `JIRA_GET_WORKLOG`

Retrieves worklogs for a specified Jira issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | A comma-separated list of worklog properties to expand in the response. For instance, 'properties' can be used to include custom fields associated with the worklogs. Refer to the Jira API documentation for other possible values. |
| `start_at` | integer | No | The 0-based index of the first worklog to return. Used for pagination to retrieve results beyond the initial page. For example, if `maxResults` is 50, `startAt=50` retrieves the second page. |
| `max_results` | integer | No | The maximum number of worklogs to return per page. Used for pagination. If not specified, a Jira-defined default is used (e.g., 50). |
| `started_after` | integer | No | Filters worklogs to include only those started on or after this specified date and time. Provide as a Unix timestamp in milliseconds (milliseconds since January 1, 1970, 00:00:00 UTC). |
| `started_before` | integer | No | Filters worklogs to include only those started on or before this specified date and time. Provide as a Unix timestamp in milliseconds (milliseconds since January 1, 1970, 00:00:00 UTC). |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10001') or key (e.g., 'PROJECT-123') of the Jira issue for which to retrieve worklogs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Projects (Deprecated)

**Slug:** `JIRA_LIST_ALL_PROJECTS`

DEPRECATED: Use JIRA_GET_ALL_PROJECTS instead. Tool to list all projects accessible to the user. Wraps the deprecated GET /project endpoint; prefer the paginated JIRA_GET_ALL_PROJECTS (GET /project/search).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include: `description` (Returns the project description), `issueTypes` (Returns all issue types associated with the project), `lead` (Returns information about the project lead), `projectKeys` (Returns all project keys associated with the project). |
| `recent` | integer | No | Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session. |
| `properties` | array | No | A list of project properties to return for the project. This parameter accepts a comma-separated list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Boards

**Slug:** `JIRA_LIST_BOARDS`

Retrieves paginated Jira boards with filtering and sorting options. Use `start_at` and `max_results` together, looping through pages to retrieve all results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filters results to boards whose name contains the string (case-insensitive). Board names do not necessarily correspond to project keys; enumerate all boards to confirm the correct match. |
| `type` | string ("scrum" | "kanban") | No | Filters results to boards of the specified type. Valid values: 'scrum', 'kanban'. Other types (e.g., 'simple') are not filterable server-side; filter those from the response. |
| `order_by` | string | No | Field to order boards by (e.g., 'name', '-name' for descending). Refer to Jira API docs for all sortable fields. |
| `start_at` | integer | No | Index of the first board to return (0-based) for pagination. |
| `max_results` | integer | No | Maximum number of boards to return per page. |
| `include_private` | boolean | No | Include private boards in the results. |
| `project_key_or_id` | string | No | Filters results to boards for the specified project. Must be a project KEY (e.g., 'KAN', 'PROJ') or numeric project ID (e.g., '10000'). Do NOT use the project name (e.g., 'My Project') - use the short key instead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Comments by IDs

**Slug:** `JIRA_LIST_COMMENTS`

Tool to retrieve multiple comments by their IDs in a single request. Use when you need to fetch specific comments efficiently. Supports up to 1000 comment IDs per request with optional expansion for rendered HTML and properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | The list of comment IDs to retrieve. A maximum of 1000 IDs can be specified. |
| `expand` | string | No | Use expand to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include: 'renderedBody' (returns the comment body rendered in HTML), 'properties' (returns the comment's properties). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Jira Filters

**Slug:** `JIRA_LIST_FILTERS`

Tool to search and list Jira saved filters (saved searches) visible to the current user. Use when you need to discover existing filters, find filters by name or owner, or get filter details including JQL queries and sharing permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | Filter results by filter IDs. Multiple IDs can be provided. |
| `owner` | string | No | Filter results by owner username. This parameter cannot be used with the accountId parameter. |
| `expand` | string | No | Comma-separated list of properties to expand in the response. Valid values: description, favourite, favouritedCount, jql, owner, searchUrl, sharePermissions, subscriptions, viewUrl. |
| `groupId` | string | No | Filter results by group ID. Filters are returned if they are shared with the specified group. |
| `orderBy` | string | No | Order the results by a field. Valid values: description, favourite_count, is_favourite, id, name, owner. Add '-' prefix for descending order. |
| `startAt` | integer | No | The 0-based index of the first item to return in the page of results. Used for pagination. |
| `accountId` | string | No | Filter results by owner account ID. |
| `groupname` | string | No | Filter results by group name. Filters are returned if they are shared with the specified group. |
| `projectId` | integer | No | Filter results by project ID. Filters are returned if they are shared with the specified project. |
| `filterName` | string | No | Filter results by filter name. Partial matches are supported. |
| `maxResults` | integer | No | The maximum number of items to return per page. Maximum value is typically 50. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Groups (Picker)

**Slug:** `JIRA_LIST_GROUPS_PICKER`

Tool to search and list groups using Jira's picker endpoint. Use when you need to find groups by name or get a filtered list of groups.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | The string to find in group names. Use this to search for groups matching a specific text. |
| `exclude` | array | No | A list of group names to exclude from the result. As a group's name can change, use of 'exclude_id' is recommended to identify a group. This parameter cannot be used with 'exclude_id' parameter. |
| `exclude_id` | array | No | A list of group IDs to exclude from the result. This parameter cannot be used with the 'exclude' parameter. |
| `max_results` | integer | No | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property 'jira.ajax.autocomplete.limit'. |
| `case_insensitive` | boolean | No | Whether the search for groups should be case insensitive. Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Issue Comments

**Slug:** `JIRA_LIST_ISSUE_COMMENTS`

Retrieves paginated comments from a Jira issue with optional ordering. Paginate by incrementing `start_at` by `max_results` until the cumulative count reaches the `total` field in the response. A response with `total=0` and an empty comments array means the issue has no comments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | Use 'renderedBody' to include the HTML-rendered version of the comment body in the response. |
| `order_by` | string | No | Specifies the field to sort comments by; use 'created' for ascending by creation date (currently the only supported value). |
| `start_at` | integer | No | The 0-based index of the first comment to return. |
| `max_results` | integer | No | The maximum number of comments to return per page. Note: Jira Cloud enforces a maximum of ~100 comments per page for this endpoint, regardless of the requested value. |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue from which to retrieve comments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Project Types

**Slug:** `JIRA_LIST_PROJECT_TYPES`

Retrieves all Jira project types available in the instance. Use when you need to discover available project types or list all types without filtering by a specific key.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Sprints

**Slug:** `JIRA_LIST_SPRINTS`

Retrieves paginated sprints from a Jira board with optional state filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | Filters sprints by state. Accepts single value ('active') or comma-separated values ('active,closed'). Valid states: 'future', 'active', 'closed'. Returns all states if omitted. |
| `board_id` | integer | Yes | Unique identifier of the Jira board. Must be a Scrum board ID; Kanban boards do not support sprints and will return no results. Use JIRA_LIST_BOARDS to identify the correct board. |
| `start_at` | integer | No | 0-based starting index for pagination. Increment by `max_results` each iteration; stop when response field `isLast` is true. |
| `max_results` | integer | No | Maximum number of sprints per page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move Issues to Sprint

**Slug:** `JIRA_MOVE_ISSUE_TO_SPRINT`

Moves one or more Jira issues to a specified active sprint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issues` | array | Yes | A list of issue keys (e.g., 'PROJ-123') to be moved to the specified sprint. |
| `sprint_id` | integer | Yes | Unique identifier for the target sprint. Must belong to the same board/project as the issues being moved. |
| `rank_after_issue` | string | No | The issue key or ID to rank the moved issues after. If specified, the moved issues will be placed immediately after this issue in the sprint backlog. |
| `rank_before_issue` | string | No | The issue key or ID to rank the moved issues before. If specified, the moved issues will be placed immediately before this issue in the sprint backlog. |
| `rank_custom_field_id` | integer | No | The ID of the rank custom field to use for ordering. This is typically the 'Rank' field ID in your Jira instance. Only needed if you have multiple rank fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Parse JQL Queries

**Slug:** `JIRA_PARSE_JQL_QUERIES`

Parse and validate JQL queries, returning their abstract syntax tree structure along with any errors or warnings. Use when you need to validate JQL syntax or understand query structure before execution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queries` | array | Yes | A list of JQL queries to parse. Each query string must be non-empty and will be validated according to the validation parameter. |
| `validation` | string ("strict" | "warn" | "none") | No | How to validate the JQL queries and treat the validation results. 'strict': Returns all errors; if validation fails, the query structure is not returned. 'warn': Returns all errors; if validation fails but the JQL query is correctly formed, the query structure is returned. 'none': No validation is performed; if JQL query is correctly formed, the query structure is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove User from Group

**Slug:** `JIRA_REMOVE_USER_FROM_GROUP`

Removes a user from a Jira group. This is a destructive operation that revokes group-based permissions; confirm intent before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | string | No | The ID of the group to remove the user from. Either group_name or group_id must be provided. |
| `account_id` | string | Yes | The Atlassian account ID of the user to remove from the group. System and app accounts cannot be modified; attempting removal returns a 400 'User not modifiable' error. |
| `group_name` | string | No | The name of the group to remove the user from. Either group_name or group_id must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove User from Project Role

**Slug:** `JIRA_REMOVE_USER_FROM_PROJECT_ROLE`

Removes a user or group from a project role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role_id` | integer | Yes | The ID of the project role to remove the user from. Use get_project_roles action to find available role IDs. |
| `group_name` | string | No | The name of the group to remove from the project role. Either user_account_id or group_name must be provided. |
| `user_account_id` | string | No | The Atlassian account ID of the user to remove from the project role. Either user_account_id or group_name must be provided. |
| `project_id_or_key` | string | Yes | The project ID (numeric) or project key (e.g., 'PROJ') of the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Watcher from Issue

**Slug:** `JIRA_REMOVE_WATCHER_FROM_ISSUE`

Removes a user from an issue's watcher list by account ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The account ID of the user to remove from the issue's watchers list. Must be an account ID, not a username; retrieve via JIRA_GET_CURRENT_USER or JIRA_FIND_USERS. |
| `issue_id_or_key` | string | Yes | The ID or key of the issue. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Approximate Count

**Slug:** `JIRA_SEARCH_APPROXIMATE_COUNT`

Count issues matching a JQL query using approximate count endpoint. Use when you need a fast count of issues without retrieving full issue details. The JQL query must be bounded (include at least one search restriction).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jql` | string | Yes | A JQL (Jira Query Language) expression to search for issues. For performance reasons, this parameter requires a bounded query - a query with a search restriction (e.g., 'project = KAN', 'assignee = currentUser()', 'status = Done'). Unbounded queries like empty strings or queries with only 'ORDER BY' clauses are not allowed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Dashboards

**Slug:** `JIRA_SEARCH_DASHBOARDS`

Tool to search for Jira dashboards with filtering, sorting, and pagination support. Use when you need to find dashboards by name, owner, sharing permissions, or status. Supports filtering by owner account ID, group, project, and dashboard name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | string | No | User name used to return dashboards with the matching owner.name. This parameter is deprecated due to privacy changes - use accountId instead. Cannot be used with accountId parameter. |
| `expand` | string | No | Comma-separated list of properties to expand. Options: description, owner, viewUrl, favourite, favouritedCount, sharePermissions, editPermissions, isWritable. |
| `status` | string ("active" | "archived" | "deleted") | No | Enum for dashboard status filter. |
| `groupId` | string | No | Group ID used to return dashboards that are shared with a group matching sharePermissions.group.groupId. Cannot be used with groupname parameter. |
| `orderBy` | string ("description" | "-description" | "+description" | "id" | "-id" | "+id" | "name" | "-name" | "+name" | "owner" | "-owner" | "+owner") | No | Enum for dashboard ordering options. |
| `startAt` | integer | No | The index of the first item to return in a page of results (page offset). |
| `accountId` | string | No | User account ID used to return dashboards with the matching owner.accountId. This parameter cannot be used with the owner parameter. |
| `groupname` | string | No | Group name used to return dashboards that are shared with a group matching sharePermissions.group.name. As a group's name can change, use of groupId is recommended. Cannot be used with groupId parameter. |
| `projectId` | integer | No | Project ID used to return dashboards that are shared with a project matching sharePermissions.project.id. |
| `maxResults` | integer | No | The maximum number of items to return per page. |
| `dashboardName` | string | No | String used to perform a case-insensitive partial match with dashboard name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Issues Using JQL (GET)

**Slug:** `JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET`

Searches for Jira issues using JQL with pagination and field selection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jql` | string | No | Jira Query Language (JQL) string for searching issues. REQUIRED if `next_page_token` is not provided. Provide this parameter to start a search. To continue a paginated search with a raw Jira token, provide both the original JQL and `next_page_token`; tokens returned by this action already include that context. IMPORTANT: JQL must include at least one search restriction (filter condition such as project, status, assignee, issuetype, labels, created, updated, etc.). Unbounded queries containing only ORDER BY clauses (e.g., 'order by created DESC') are rejected by the API. Always include a filter like 'project = X' or 'status = Open'. NOTE: This action uses Jira's enhanced search API which has stricter JQL syntax requirements than the Jira UI. |
| `expand` | string | No | Comma-separated list of entities to expand within issues (e.g., `renderedFields`, `changelog`). |
| `fields` | array | No | Specific issue fields to retrieve (e.g., `summary`, `customfield_10010`, `*all`, `*navigable`). Defaults if omitted. |
| `fail_fast` | boolean | No | Fail early on certain errors during search. |
| `properties` | array | No | List of issue property keys (key-value metadata) to retrieve. |
| `max_results` | integer | No | Maximum issues to retrieve per page. Must be at least 1. Note: Jira Cloud typically limits results to 100 per request for performance reasons. |
| `fields_by_keys` | boolean | No | Set to `True` to identify fields by keys (e.g., 'customfield_10000') instead of IDs. |
| `next_page_token` | string | No | Pagination token from a previous enhanced search response. Use the token returned by this action to continue without resending JQL. If you pass a raw Jira nextPageToken, also pass the original JQL. |
| `reconcile_issues` | array | No | List of issue IDs to enable read-after-write reconciliation during search. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Issues Using JQL Enhanced (POST)

**Slug:** `JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST`

DEPRECATED: Use JIRA_SEARCH_ISSUES instead. Searches for Jira Cloud issues using Enhanced JQL via POST request; supports eventual consistency and token-based pagination. Use this POST endpoint for long/complex JQL to avoid HTTP 414 errors on GET-based search. IMPORTANT: This action is for Jira Cloud only and will not work with Jira Server or Data Center instances.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jql` | string | No | The JQL (Jira Query Language) query string to use for the search. Must be bounded (for example, include a restriction like 'project = KAN'); unbounded queries such as empty JQL or only 'order by ...' are not accepted. Provide either this 'jql' (for the first page) or 'nextPageToken' (to continue pagination). Use only valid JQL field names (e.g., 'project', 'assignee', 'status', 'created', 'updated', 'reporter', 'priority', 'issuetype', 'summary', 'description', 'key', 'labels', 'component', 'fixVersion', 'resolution', 'sprint', 'timespent', 'worklogDate', 'worklogAuthor', 'worklogComment'). Note that some fields like 'worklogDate' require time-tracking to be enabled in the Jira instance. |
| `expand` | string | No | A comma-separated list of entities to expand in the response (e.g., 'names', 'schema', 'transitions', 'changelog'). |
| `fields` | array | No | A list of fields to return for each issue (e.g., 'summary', 'status', 'assignee', '*navigable'). |
| `maxResults` | integer | No | The maximum number of issues to return per page (1-5000). In practice, values above 100 may be ignored by the API; total results per JQL query are capped at ~10,000 regardless of pagination. |
| `properties` | array | No | A list of issue property keys to return for each issue. |
| `fieldsByKeys` | boolean | No | If true, treats values in 'fields' as keys (e.g., 'customfield_10000'). |
| `nextPageToken` | string | No | Opaque token received from a previous response to continue pagination. Tokens returned by this action include the original search context and can be passed alone. Raw Jira nextPageToken values require the original JQL too. IMPORTANT: Tokens are short-lived and expire quickly. They must be used immediately within the same search session. If you receive a 'token is invalid or expired' error, restart the search from the beginning with a fresh JQL query (do not reuse old tokens). |
| `reconcileIssues` | array | No | List of issue IDs to reconcile for read-after-write consistency (maximum 50). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search issues

**Slug:** `JIRA_SEARCH_ISSUES`

Advanced Jira issue search supporting structured filters and raw JQL. At least one filter parameter (e.g., jql, project_key, updated_after) is required; calls with no parameters will be rejected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `jql` | string | No | Raw JQL (Jira Query Language) query for advanced users. Takes precedence over filters. Can be a complete JQL query with filters and/or ORDER BY clause, or just an ORDER BY clause. CRITICAL JQL SYNTAX RULES - Every comparison needs field + operator + value: (1) WRONG: '("val1" OR "val2")' - bare values without field reference cause 'Expecting operator' errors. (2) RIGHT: 'status = "val1" OR status = "val2"' - each value has field and operator. (3) BETTER: 'status IN ("val1", "val2", "val3")' - use IN for multiple values on same field. (4) Text search uses ~: 'summary ~ "keyword"' or 'text ~ "keyword"'. (5) Valid operators: =, !=, <, >, <=, >=, ~, !~, IN, NOT IN, IS, IS NOT. COMMON MISTAKE: Do NOT pass ('value1' OR 'value2') - this is invalid. Instead use: field IN ('value1', 'value2') or field = 'value1' OR field = 'value2'. |
| `fields` | array | No | List of fields to return for each issue (for example: summary, status, assignee). If omitted, a sensible default set is requested to populate common fields. |
| `labels` | array | No | Filter by labels (all labels must match). |
| `assignee` | string | No | Filter by assignee. Can be account ID (e.g., '712020:abc...'), email (e.g., 'john@company.com'), display name (e.g., 'John Doe'), or 'unassigned'. |
| `max_results` | integer | No | Maximum number of issues to return per page. Capped at 100 per page; total results per JQL query capped at ~10,000. Use next_page_token to paginate. |
| `project_key` | string | No | Filter by project key (e.g., 'PROJ'). |
| `text_search` | string | No | Search in summary and description text. |
| `created_after` | string | No | Filter issues created after this date. Supports YYYY-MM-DD format or relative dates like '-30m' (last 30 minutes), '-7d' (last 7 days), '-1w' (last week), '-1M' (last month). |
| `updated_after` | string | No | Filter issues updated after this date. Supports YYYY-MM-DD format or relative dates like '-30m' (last 30 minutes), '-7d' (last 7 days), '-1w' (last week), '-1M' (last month). |
| `created_before` | string | No | Filter issues created before this date (YYYY-MM-DD format). |
| `updated_before` | string | No | Filter issues updated before this date (YYYY-MM-DD format). |
| `next_page_token` | string | No | Cursor token used to fetch the next page when using enhanced search. Tokens returned by this action include the original search context and can be passed alone. Raw Jira nextPageToken values require the same JQL or filters used for the original search. |
| `sprint_id_or_name` | string | No | Filter by sprint. Can be sprint ID (e.g., '123') or name (e.g., 'Sprint 1', 'Release Sprint'). |
| `status_id_or_name` | string | No | Filter by status. Can be either a status ID (e.g., '10001') or name (e.g., 'To Do', 'In Progress', 'Done'). |
| `preserved_order_by` | string | No | Internal: preserved ORDER BY clause from ORDER-BY-only JQL input |
| `priority_id_or_name` | string | No | Filter by priority. Can be either a priority ID (e.g., '1', '2') or name (e.g., 'High', 'Medium', 'Low'). |
| `issue_type_id_or_name` | string | No | Filter by issue type. Can be either an issue type ID (e.g., '10001') or name (e.g., 'Bug', 'Task', 'Story'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Notification for Issue

**Slug:** `JIRA_SEND_NOTIFICATION_FOR_ISSUE`

Sends a customized email notification for a Jira issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | object | Yes | A `NotificationRecipients` object specifying who should receive the notification. At least one recipient category (e.g., reporter, assignee, a user, or a group) within this object must be configured. |
| `subject` | string | Yes | The subject line for the email notification. |
| `restrict` | object | No | Optional restrictions defining who can receive the notification. If specified, notifications are sent only to users who meet the criteria in `groups` (if provided) AND `permissions` (if provided), AND also have general permission to view the issue. |
| `html_body` | string | No | The HTML content of the email notification. This field is optional unless `restrict` is used, in which case it becomes mandatory. It is recommended to also provide `text_body` for email clients that do not support HTML. |
| `text_body` | string | Yes | The plain text content of the email notification. This field is always mandatory. |
| `issue_id_or_key` | string | Yes | The ID (e.g., '10000') or key (e.g., 'PROJ-123') of the Jira issue for which the notification will be sent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Transition Issue

**Slug:** `JIRA_TRANSITION_ISSUE`

Transitions a Jira issue to a different workflow state, with support for transition name lookup and user assignment by email. IMPORTANT: Only fields that are on the transition's screen can be set during the transition. Which fields are available depends on the Jira workflow configuration and varies per project. Use JIRA_GET_TRANSITIONS with expand='transitions.fields' to check which fields a transition supports. If a field (e.g., assignee) is not on the transition screen, use a JIRA_EDIT_ISSUE action after the transition to set other fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | string | No | Optional comment to add during the transition. Supports Markdown-style formatting that is automatically converted to Atlassian Document Format (ADF). Supported formatting: **bold** (wrap text in double asterisks), *italic* or _italic_ (single asterisks or underscores), `inline code` (backticks), [link text](https://url) for hyperlinks, bullet lists (lines starting with -, *, or +), and numbered lists (lines starting with 1., 2., etc.). Example: 'Fixed **critical** bug in `user.login()` method. See [docs](https://example.com) for details.' |
| `assignee` | string | No | Account ID of the user to assign the issue to during transition. Takes precedence over assignee_name. |
| `resolution` | string | No | Resolution to set when CLOSING an issue (e.g., 'Done', 'Fixed', 'Won't Do'). IMPORTANT: Only use this when transitioning to a final status like 'Done', 'Closed', or 'Resolved'. Do NOT set this for intermediate transitions like 'In Progress', 'In Review', or 'To Do' - resolution is only available when completing/closing an issue. |
| `assignee_name` | string | No | Name of the user to assign the issue to during transition. Can be either an email address (e.g., 'john@company.com') or display name (e.g., 'John Doe'). The system will auto-detect the type and search accordingly. Ignored if assignee (account ID) is provided. |
| `issue_id_or_key` | string | Yes | The ID or key of the issue to transition. |
| `transition_fields` | object | No | Fields to include in the transition payload. Use this for fields that appear on the transition screen and may be required by the workflow (e.g., 'timetracking', custom fields). Format: {'timetracking': {'originalEstimate': '2h'}, 'customfield_10001': 'value'}. For time tracking, use format like '1d 2h' (1 day 2 hours), '30m' (30 minutes), or '1w' (1 week). Note: assignee, resolution, and comment are handled by dedicated parameters and don't need to be included here. |
| `additional_properties` | object | No | Additional properties to include at the top level of the transition request body. This can be used to pass extra fields supported by the Jira API that are not explicitly defined, such as 'historyMetadata' for audit trail customization or 'properties' for entity properties. Format: {'historyMetadata': {'type': 'myplugin:type'}, 'properties': [{'key': 'myKey', 'value': {...}}]}. |
| `transition_id_or_name` | string | Yes | The ID or name of the transition to apply. IMPORTANT: Transition names are workflow-specific and vary between Jira projects (e.g., one project may have 'In Progress' while another has 'In Development'). It is strongly recommended to first retrieve available transitions for the issue using JIRA_GET_TRANSITIONS or JIRA_GET_ISSUE (with expand='transitions') to ensure you use a valid transition name for this specific issue's workflow. Available transitions also depend on the issue's *current status*, not just the project — never reuse cached transition IDs across different issues or statuses. When multiple transitions share similar names, prefer the numeric ID to avoid applying the wrong state change. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Comment

**Slug:** `JIRA_UPDATE_COMMENT`

Updates text content or visibility of an existing Jira comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | The unique ID of the comment to be updated. |
| `comment_text` | string | Yes | The new text content for the comment. This will replace the existing comment body. Supports plain text and basic formatting like *bold*, _italic_, and @mentions. Mentions support two formats: @username (no spaces) and @"Display Name" (quoted to allow spaces). Quoted mentions like @"John Doe" are converted to rich mentions where possible. |
| `notify_users` | boolean | No | A boolean flag indicating whether to send notifications to users about the comment update. Defaults to True. |
| `issue_id_or_key` | string | Yes | The ID or key of the Jira issue where the comment is located. This can be the numerical ID or the project key followed by the issue number (e.g., 'PROJ-123'). |
| `visibility_type` | string | No | Optional. The type of visibility restriction to apply to the comment. If provided, `visibility_value` must also be specified. Valid values are 'group' or 'role'. |
| `visibility_value` | string | No | Optional. The name of the group or role to restrict comment visibility to. Required if `visibility_type` is specified. For 'group' type, provide the group name (e.g., 'jira-administrators'). For 'role' type, provide the project role name (e.g., 'Administrators'). |
| `additional_properties` | string | No | JSON string of comment properties as key-value pairs. Values can be any JSON type (strings, numbers, objects, arrays, booleans, null). Note: Primitive values (strings, numbers, booleans, null) and arrays are automatically wrapped in {"value": ...} to match Jira's entity property requirements. Object values are passed through as-is. Format: '{"property_key": "string value"}' or '{"property_key": {"custom": "object"}}'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `JIRA_WHO_AM_I`

Return the Atlassian (Jira) sites accessible to the connection. Identity is workspace-level.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Comment Created

**Slug:** `JIRA_COMMENT_CREATED`

**Type:** webhook

Triggers when a comment is posted on a Jira issue. Can deliver comments
on issues the connected account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the commented issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. A comment on an unassigned issue matches nobody, so setting this excludes them. Leave unset to receive comments regardless of assignee. |
| `comment_author` | string | No | Only fire for comments written by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive comments from anyone. |
| `issue_type` | string | No | Only fire for comments on issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive comments on every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `status` | string | No | Only fire when the commented issue is in this status, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive comments whatever the issue's status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | object | Yes | The comment the event is about. |
| `issue` | object | Yes | The issue the comment is on. |

### Comment Deleted

**Slug:** `JIRA_COMMENT_DELETED`

**Type:** webhook

Triggers when a comment is deleted from a Jira issue. The deleted
comment's text still arrives. Can deliver comments on issues the connected
account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the commented issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. A comment on an unassigned issue matches nobody, so setting this excludes them. Leave unset to receive comments regardless of assignee. |
| `comment_author` | string | No | Only fire for comments written by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive comments from anyone. |
| `issue_type` | string | No | Only fire for comments on issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive comments on every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `status` | string | No | Only fire when the commented issue is in this status, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive comments whatever the issue's status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | object | Yes | The comment the event is about. |
| `issue` | object | Yes | The issue the comment is on. |

### Comment Updated

**Slug:** `JIRA_COMMENT_UPDATED`

**Type:** webhook

Triggers when an existing comment on a Jira issue is edited. The payload
carries the comment as it now reads, not what it said before. Can deliver
comments on issues the connected account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the commented issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. A comment on an unassigned issue matches nobody, so setting this excludes them. Leave unset to receive comments regardless of assignee. |
| `comment_author` | string | No | Only fire for comments written by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive comments from anyone. |
| `issue_type` | string | No | Only fire for comments on issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive comments on every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `status` | string | No | Only fire when the commented issue is in this status, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive comments whatever the issue's status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | object | Yes | The comment the event is about. |
| `issue` | object | Yes | The issue the comment is on. |

### Issue Created

**Slug:** `JIRA_ISSUE_CREATED`

**Type:** webhook

Triggers when an issue is created in Jira, including a sub-task. Can
deliver issues the connected account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id' — an accountId cannot be typed from memory. An unassigned issue matches nobody, so setting this excludes them. Leave unset to receive issues regardless of assignee. |
| `issue_type` | string | No | Only fire for issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `reporter` | string | No | Only fire when the issue was reported by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive issues from any reporter. |
| `status` | string | No | Only fire when the issue's status is this, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive issues in any status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | object | Yes | The issue the event is about. |
| `user` | object | Yes | Whoever's action produced the event. |

### Issue Deleted

**Slug:** `JIRA_ISSUE_DELETED`

**Type:** webhook

Triggers when an issue is deleted from Jira. The deleted issue's full
field set still arrives, so the filters below apply to it as usual. Can
deliver issues the connected account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id' — an accountId cannot be typed from memory. An unassigned issue matches nobody, so setting this excludes them. Leave unset to receive issues regardless of assignee. |
| `issue_type` | string | No | Only fire for issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `reporter` | string | No | Only fire when the issue was reported by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive issues from any reporter. |
| `status` | string | No | Only fire when the issue's status is this, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive issues in any status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue` | object | Yes | The issue the event is about. |
| `user` | object | Yes | Whoever's action produced the event. |

### Issue Updated

**Slug:** `JIRA_ISSUE_UPDATED`

**Type:** webhook

Triggers when a field on an existing issue changes — its status, assignee,
or anything else on the issue. One edit can change several fields and arrives
as one event; creating a sub-task also updates its parent. Commenting does not
fire it. Can deliver issues the connected account cannot open in Jira itself.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | string | No | Only fire when the issue is assigned to this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id' — an accountId cannot be typed from memory. An unassigned issue matches nobody, so setting this excludes them. Leave unset to receive issues regardless of assignee. |
| `changed_field` | string | No | Only fire when this field is among the fields that changed, by field id — 'status', 'assignee', 'priority', 'summary', 'labels', 'duedate', 'description', 'resolution'. One edit can change several fields at once and the trigger fires if any of them matches. A custom field uses its id ('customfield_10020'); find it with JIRA_GET_FIELDS. Leave unset to fire on any change. |
| `issue_type` | string | No | Only fire for issues of this type, by name. Use JIRA_GET_ISSUE_TYPES to list the types configured on this site. Leave unset to receive every issue type. |
| `project_id` | integer | Yes | The Jira project to watch, as its NUMERIC project id (e.g. 10705) and not the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Required: this trigger fires only for issues in this project, so create one trigger per project you want to watch. |
| `reporter` | string | No | Only fire when the issue was reported by this person, by Atlassian accountId. Use JIRA_FIND_USERS with query='<name or email>' and take 'account_id'. Leave unset to receive issues from any reporter. |
| `status` | string | No | Only fire when the issue's status is this, by name. Use JIRA_GET_ALL_STATUSES to list this site's statuses. Leave unset to receive issues in any status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changelog` | object | Yes | What the edit changed. |
| `issue` | object | Yes | The issue the event is about. |
| `user` | object | Yes | Whoever's action produced the event. |

### Sprint Closed

**Slug:** `JIRA_SPRINT_CLOSED`

**Type:** webhook

Triggers when a sprint is completed and moves into the closed state.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | No | Only fire for sprints belonging to this board, by numeric board id. A sprint event carries no project, so the board is the only way to narrow it; use JIRA_LIST_BOARDS to find the id. Leave unset to receive sprint events from every board on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sprint` | object | Yes | The sprint the event is about. |

### Sprint Created

**Slug:** `JIRA_SPRINT_CREATED`

**Type:** webhook

Triggers when a sprint is created on a Jira board. Creating a sprint does
not start it — watch Sprint Started for that.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | No | Only fire for sprints belonging to this board, by numeric board id. A sprint event carries no project, so the board is the only way to narrow it; use JIRA_LIST_BOARDS to find the id. Leave unset to receive sprint events from every board on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sprint` | object | Yes | The sprint the event is about. |

### Sprint Started

**Slug:** `JIRA_SPRINT_STARTED`

**Type:** webhook

Triggers when a sprint moves into the active state.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | No | Only fire for sprints belonging to this board, by numeric board id. A sprint event carries no project, so the board is the only way to narrow it; use JIRA_LIST_BOARDS to find the id. Leave unset to receive sprint events from every board on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sprint` | object | Yes | The sprint the event is about. |

### Sprint Updated

**Slug:** `JIRA_SPRINT_UPDATED`

**Type:** webhook

Triggers when a sprint's name, goal, dates or state changes. Starting a
sprint also fires this when the same call changed another field; closing one
does not.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | No | Only fire for sprints belonging to this board, by numeric board id. A sprint event carries no project, so the board is the only way to narrow it; use JIRA_LIST_BOARDS to find the id. Leave unset to receive sprint events from every board on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `oldValue` | object | Yes | The sprint as it was before the update. |
| `sprint` | object | Yes | The sprint the event is about. |

### Version Created

**Slug:** `JIRA_VERSION_CREATED`

**Type:** webhook

Triggers when a project version is created in Jira.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |

### Version Deleted

**Slug:** `JIRA_VERSION_DELETED`

**Type:** webhook

Triggers when a project version is deleted outright. A version that
disappeared because it was merged into another one fires Version Merged
instead.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |

### Version Merged

**Slug:** `JIRA_VERSION_MERGED`

**Type:** webhook

Triggers when a project version is merged into another one, carrying both
the version that went away and the one that survived.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mergedTo` | object | Yes | The version that survived the merge. |
| `version` | object | Yes | The version the event is about. |

### Version Moved

**Slug:** `JIRA_VERSION_MOVED`

**Type:** webhook

Triggers when a project version is reordered within its project's release
list.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |

### Version Released

**Slug:** `JIRA_VERSION_RELEASED`

**Type:** webhook

Triggers when a project version is marked released.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |

### Version Unreleased

**Slug:** `JIRA_VERSION_UNRELEASED`

**Type:** webhook

Triggers when a released project version is put back to unreleased.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |

### Version Updated

**Slug:** `JIRA_VERSION_UPDATED`

**Type:** webhook

Triggers when a project version's name, description or dates change.
Releasing and un-releasing a version each fire this as well, alongside
Version Released and Version Unreleased.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | No | Only fire for versions in this Jira project, given as the NUMERIC project id (e.g. 10705). A version event carries only the id and never the project key. Call JIRA_GET_ALL_PROJECTS with query='<your project key or name>' and take the 'id' off the result. Leave unset to receive version events from every project on the site. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | object | Yes | The version the event is about. |
