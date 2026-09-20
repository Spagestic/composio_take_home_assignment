# Asana

Tool to help teams organize, track, and manage their work.

- **Category:** project management
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 153
- **Triggers:** 6
- **Slug:** `ASANA`
- **Version:** 20260819_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Asana?

For a step-by-step guide on creating and configuring your own Asana OAuth credentials with Composio, see [How to create OAuth credentials for Asana](https://composio.dev/auth/asana).

## Tools

### Add Followers to Project

**Slug:** `ASANA_ADD_FOLLOWERS_TO_PROJECT`

Tool to add followers to a project in Asana. Use this tool when you need to add one or more users as followers to a specific project. Followers will receive notifications when tasks are added to the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `followers` | string | Yes | A string identifying users. These can either be the string "me", an email, or the gid of a user. For multiple followers, use a comma-separated string. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Followers to Task

**Slug:** `ASANA_ADD_FOLLOWERS_TO_TASK`

Tool to add followers to a task in Asana. Use this tool when you need to add one or more users as followers to a specific task. This will notify them of updates to the task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | The globally unique identifier for the task. |
| `followers` | array | Yes | An array of user GIDs to add as followers to the task. For example: ["12345", "67890"]. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. For example ["followers", "assignee"]. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add item to portfolio

**Slug:** `ASANA_ADD_ITEM_TO_PORTFOLIO`

Add a project (or other supported item) to an Asana portfolio using the native addItem endpoint. Use when a workflow needs to attach a newly created project to a portfolio without using ASANA_SUBMIT_PARALLEL_REQUESTS.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item` | string | Yes | The globally unique identifier (GID) of the item to add to the portfolio. Typically a project GID, but can be any supported portfolio item type. Must be a numeric string. |
| `insert_after` | string | No | GID of a portfolio item after which to insert the new item. Mutually exclusive with `insert_before`. |
| `insert_before` | string | No | GID of a portfolio item before which to insert the new item. Mutually exclusive with `insert_after`. |
| `portfolio_gid` | string | Yes | The globally unique identifier (GID) of the portfolio to add the item to. Must be a numeric string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Members to Project

**Slug:** `ASANA_ADD_MEMBERS_TO_PROJECT`

Tool to add users to a project in Asana. Use this tool when you need to add one or more users as members to a specific project. Members can view and contribute to the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `members` | string | Yes | An array of strings identifying users. These can either be the string "me", an email, or the gid of a user. For example: "521621,621373" or "me,user@example.com". |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. For example: ["members", "name", "archived"]. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Project to Task

**Slug:** `ASANA_ADD_PROJECT_FOR_TASK`

Tool to add a project to a task in Asana. Use when you need to associate a task with a project. Optionally position the task within the project using insert_before, insert_after, or section parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project` | string | Yes | The globally unique identifier for the project to add to the task. |
| `section` | string | No | A section in the project to insert the task into. The task will be inserted at the bottom of the section unless combined with `insert_before: null` (end of section) or `insert_after: null` (beginning of section). Can also be combined with non-null `insert_before` or `insert_after` to position relative to a task within the section. |
| `task_gid` | string | Yes | The globally unique identifier for the task to add a project to. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `insert_after` | string | No | A task in the project to insert the task after, or `null` to insert at the beginning of the list. When used with `section`, `null` will insert at the beginning of the specified section, otherwise the task must be in the specified section. |
| `insert_before` | string | No | A task in the project to insert the task before, or `null` to insert at the end of the list. When used with `section`, `null` will insert at the end of the specified section, otherwise the task must be in the specified section. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Supporting Relationship to Goal

**Slug:** `ASANA_ADD_SUPPORTING_RELATIONSHIP`

Tool to add a supporting goal relationship to a goal. Use when you want to link a project, task, portfolio, or another goal as a supporting resource to a specific goal in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The request data for adding a supporting relationship. |
| `goal_gid` | string | Yes | Globally unique identifier for the goal. |
| `opt_fields` | array | No | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Tag to Task

**Slug:** `ASANA_ADD_TAG_TO_TASK`

Tool to add an existing tag to a task in Asana. Use when you need to add a tag for prioritization, routing, or automation workflows. Tags cannot be added via Update Task, so this dedicated endpoint is required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_gid` | string | Yes | The globally unique identifier for the tag to add. The tag must already exist in the workspace. |
| `task_gid` | string | Yes | The globally unique identifier for the task. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. Limited utility for this endpoint as it returns an empty data block. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format with proper line breaking and indentation for readability. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Task Dependencies

**Slug:** `ASANA_ADD_TASK_DEPENDENCIES`

Tool to add dependency relationships to an Asana task. Use when you need to mark one or more tasks as prerequisites (dependencies) for another task, ensuring the dependency tasks must be completed first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | The globally unique identifier for the task that will depend on other tasks. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. By default, the response returns a compact representation of the task. Use this to retrieve additional fields such as 'name', 'assignee', 'due_on', 'dependencies', etc. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format with proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `dependencies` | array | Yes | An array of task GIDs that the target task depends on (i.e., these tasks must be completed before the target task can be started). Each GID should be a valid task identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add task to section

**Slug:** `ASANA_ADD_TASK_TO_SECTION`

Adds an existing task to a section, optionally positioning it before or after another task in that section; if no position is specified, the task is added to the end.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | The GID of the existing task to add to the section. Must be a numeric string. |
| `section_gid` | string | Yes | The GID of the target section. Must be a section GID (not a project or task GID). Use GET_SECTIONS_IN_PROJECT to retrieve valid section GIDs from a project. |
| `insert_after` | string | No | GID of a task in the section after which to insert the current task. Mutually exclusive with insert_before. |
| `insert_before` | string | No | GID of a task in the section before which to insert the current task. Mutually exclusive with insert_after. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add User for Team

**Slug:** `ASANA_ADD_USER_TO_TEAM`

Tool to add a user to a team in Asana. Use this when you need to add a user to a specific team by providing their user GID, email, or "me" for the current user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add User for Workspace

**Slug:** `ASANA_ADD_USER_TO_WORKSPACE`

Tool to add a user to a workspace or organization in Asana. Use this when you need to add a user to a specific workspace by providing their user GID, email, or "me" for the current user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Approve Access Request

**Slug:** `ASANA_APPROVE_ACCESS_REQUEST`

Tool to approve an access request in Asana. Use when you need to grant access to a resource that requires approval workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format with proper line breaking and indentation for readability. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `access_request_gid` | string | Yes | Globally unique identifier for the access request to approve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Access Request

**Slug:** `ASANA_CREATE_ACCESS_REQUEST`

Tool to create an access request in Asana. Use when you need to request access to a project or portfolio that you don't currently have access to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | The globally unique identifier (gid) of the access requestable object that the user is requesting access to. Supports projects and portfolios. |
| `message` | string | No | The optional message to include with the access request. This can be used to provide context or additional information about the request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Allocation

**Slug:** `ASANA_CREATE_ALLOCATION`

Creates a new allocation. Use when you need to schedule or assign a specific amount of a user's time per week to a task or project within a defined period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notes` | string | No | Any additional notes related to the allocation. |
| `end_on` | string | Yes | The end date of the allocation. The format is YYYY-MM-DD. |
| `start_on` | string | Yes | The start date of the allocation. The format is YYYY-MM-DD. |
| `effort_type` | string ("hours" | "percent") | Yes | The unit type for tracking effort on the allocation. Must be either 'hours' or 'percent'. |
| `project_gid` | string | No | The project GID for which this allocation is being made. If provided, the allocation will be linked to this project. |
| `assignee_gid` | string | Yes | The ID of the user to whom the allocation is assigned. This can be the user's GID or the string 'me' to refer to the authenticated user. |
| `effort_value` | number | Yes | The numeric effort value for the allocation. Represents hours per week if effort_type is 'hours', or percentage if effort_type is 'percent'. |
| `workspace_gid` | string | Yes | The ID of the workspace where the allocation will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a project

**Slug:** `ASANA_CREATE_A_PROJECT`

Creates a new Asana project in the specified workspace. Requires a `workspace` GID, and additionally a `team` GID if the workspace is an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Data payload for the new project. |
| `opt_fields` | array | No | Array of optional properties to include in the response. |
| `opt_pretty` | boolean | No | True for human-readable JSON response (debugging only due to size/processing). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a tag in a workspace

**Slug:** `ASANA_CREATE_A_TAG_IN_A_WORKSPACE`

Creates a new tag, with properties like name and color defined in the request body, within a specific Asana workspace (using `workspace_gid`); this tag helps categorize tasks, is confined to the workspace, and is not automatically applied to tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The properties for the tag creation, including name (required), color (optional), and notes (optional). |
| `opt_fields` | array | No | Comma-separated string of fields from `OptFieldsEnm0` (e.g., 'name', 'color') to include in the response; returns a compact representation by default. |
| `opt_pretty` | boolean | No | If true, pretty-prints the JSON response; useful for debugging but may increase response size. |
| `workspace_gid` | string | Yes | The globally unique identifier (GID) for the workspace or organization in which to create the tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task in asana with specific details

**Slug:** `ASANA_CREATE_A_TASK`

Creates a new Asana task; requires 'workspace', 'parent', or 'projects' for association, and 'followers', 'projects', 'tags' are set only at creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Task details for creation. |
| `opt_fields` | array | No | List of optional field names to include in the response. Common fields include: name, assignee, due_on, completed, projects, memberships, memberships.section, memberships.section.name, etc. For section information, use memberships.section or memberships.section.name. Default is compact resource. |
| `opt_pretty` | boolean | No | Provides 'pretty' JSON output with line breaks/indentation. Useful for debugging; may increase response time/size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Attachment for Object

**Slug:** `ASANA_CREATE_ATTACHMENT_FOR_OBJECT`

Tool to upload an attachment or link an external resource to a task, project, or project_brief in Asana. Use when you need to attach a file or external URL to any Asana object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | The URL of the external resource being attached. Required for attachments of type 'external'. Mutually exclusive with 'file'. |
| `file` | object | No | Required for 'asana' attachments. This field should be provided when uploading a file. Mutually exclusive with 'url'. |
| `name` | string | No | The name of the external resource being attached. Required for attachments of type 'external'. For file uploads, this is optional and will be derived from the file if not provided. |
| `parent` | string | Yes | Required identifier of the parent task, project, or project_brief, as a string. This is the GID of the object to attach the file or URL to. |
| `connect_to_app` | boolean | No | Optional. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. This property can only be set if an OAuth token is used to authenticate the request. |
| `resource_subtype` | string ("asana" | "external") | No | The type of the attachment. Must be 'asana' for file uploads or 'external' for URL attachments. If not specified, a file attachment of type 'asana' will be assumed. Note that if the value is 'external', 'name' and 'url' must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Attachment for Task

**Slug:** `ASANA_CREATE_ATTACHMENT_FOR_TASK`

Tool to upload an attachment to a task. Use when you need to attach a file to a specific task in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | The file to upload. |
| `parent_gid` | string | Yes | Globally unique identifier for the parent task or comment. |
| `connect_to_app` | boolean | No | Whether to connect the attachment to the app. If true, the attachment will be displayed in the Asana UI as an app attachment. If false, the attachment will be displayed as a regular file attachment. Defaults to true. |
| `resource_subtype` | string | No | The type of the attachment. Must be one of the given values. If not specified, a regular file attachment will be created. If 'asana' is specified, the attachment will be a link to another Asana task. If 'external' is specified, the attachment will be a link to an external resource. If 'gdrive' is specified, the attachment will be a link to a Google Drive file. If 'box' is specified, the attachment will be a link to a Box file. If 'dropbox' is specified, the attachment will be a link to a Dropbox file. If 'vimeo' is specified, the attachment will be a link to a Vimeo video. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Field

**Slug:** `ASANA_CREATE_CUSTOM_FIELD`

Tool to create a new custom field in a workspace. Use when you need to define a new field for tracking specific information within Asana tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The custom field object to create. |
| `opt_fields` | array | No | Comma-separated list of properties to include in the response. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Enum Option for Custom Field

**Slug:** `ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD`

Tool to create a new enum option for a custom field in Asana. Use this when you need to add a new selectable option to an existing custom field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The enum option to create. |
| `opt_fields` | array | No | Defines fields to return. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `custom_field_gid` | string | Yes | Globally unique identifier for the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Membership

**Slug:** `ASANA_CREATE_MEMBERSHIP`

Tool to create a membership by adding a user or team to a project, goal, or portfolio. Use when you need to grant access to an Asana resource.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role of the member in the parent resource. This is an optional parameter. |
| `member` | string | Yes | GID of the member (user or team) to add to the parent resource. Must be a numeric GID string (e.g., '1210124065021206'). |
| `parent` | string | Yes | GID of the parent resource (project, goal, or portfolio) to add the member to. Must be a numeric GID string (e.g., '1210474562469922'). |
| `opt_pretty` | boolean | No | Provides 'pretty' output with proper line breaking and indentation for debugging. May increase response size. |
| `access_level` | string | No | Access level for the member in the parent resource. Common values: 'admin', 'editor', 'commenter', 'viewer'. Defaults to 'editor' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project Brief

**Slug:** `ASANA_CREATE_PROJECT_BRIEF`

Tool to create a project brief for a project. Use when you need to add a detailed explanation (what and why) to a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `html_text` | string | Yes | Rich text content wrapped in HTML body tag. The content must be wrapped in a <body> tag, e.g., '<body>Project brief content here</body>'. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Available options: html_text, permalink_url, project, project.name, text, title |
| `opt_pretty` | boolean | No | Provides 'pretty' output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project for team

**Slug:** `ASANA_CREATE_PROJECT_FOR_TEAM`

Tool to create a project in a team. Use when you need to create a new project within a specific Asana team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Project data payload containing the project details to create. |
| `team_gid` | string | Yes | Globally unique identifier for the team. This is the team where the project will be created. |
| `opt_fields` | array | No | Array of optional field names to include in the response (e.g., 'name', 'notes', 'owner', 'workspace.name'). By default, some properties are excluded. |
| `opt_pretty` | boolean | No | Provides 'pretty' output with proper line breaking and indentation for debugging. Note: increases response size and processing time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project for workspace

**Slug:** `ASANA_CREATE_PROJECT_FOR_WORKSPACE`

Tool to create a project in a workspace. Use when you need to create a new project within a specific Asana workspace. Note: The team field is required when creating projects in workspaces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Project data payload containing the project details to create. |
| `opt_fields` | array | No | Array of optional field names to include in the response (e.g., 'name', 'notes', 'owner', 'team.name', 'workspace.name'). By default, some properties are excluded. |
| `opt_pretty` | boolean | No | Provides 'pretty' output with proper line breaking and indentation for debugging. Note: increases response size and processing time. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization where the project will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project Status Update

**Slug:** `ASANA_CREATE_PROJECT_STATUS_UPDATE`

Tool to create a new status update on a project. Use when you need to communicate the current status, progress, or any blockers related to a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The HTML content of the status update. |
| `color` | string ("GREEN" | "YELLOW" | "RED" | "BLUE" | "COMPLETE") | Yes | Color of the status update. Supported values: GREEN, YELLOW, RED, BLUE, COMPLETE. |
| `title` | string | Yes | The title of the project status update. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |
| `status_type` | string ("on_track" | "at_risk" | "off_track" | "on_hold" | "complete") | Yes | The type of status. Must be one of: on_track, at_risk, off_track, on_hold, complete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a section in a project

**Slug:** `ASANA_CREATE_SECTION_IN_PROJECT`

Creates a new SECTION (not a task) in a project. Sections are organizational containers within a project used to group and categorize tasks (e.g., 'To Do', 'In Progress', 'Done', 'Backlog'). The new section can be optionally positioned relative to an existing section in the same project. IMPORTANT: This action creates SECTIONS only. Do NOT use this action to create tasks. To create a task, use the ASANA_CREATE_A_TASK action instead. Task-related fields like 'assignee', 'notes', 'due_date', 'description' are NOT supported by this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new section. This is a section name (e.g., 'To Do', 'In Progress'), NOT a task name. |
| `project_gid` | string | Yes | GID of the project where the section will be created. Must be a valid project GID. |
| `insert_after` | string | No | GID of an existing section to insert the new section after; if omitted (and `insert_before` is also omitted), the new section is added at the end. |
| `insert_before` | string | No | GID of an existing section to insert the new section before; if omitted, the new section is added at the end. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Status Update for Object

**Slug:** `ASANA_CREATE_STATUS_FOR_OBJECT`

Tool to create a status update on a project, portfolio, or goal. Use when you need to communicate progress, blockers, or current state to all followers of an object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The text content of the status update. This is the body of the status update that will be sent to all followers of the parent object. |
| `title` | string | No | The title of the status update. If not provided, Asana may auto-generate a title based on the status_type. |
| `parent` | string | Yes | Globally unique identifier (GID) of the object to create a status update on. Can be a project, portfolio, or goal GID. GIDs are long numeric strings (e.g., '1210124791807961'). |
| `opt_fields` | array | No | List of optional field names to include in the response. Common fields include: gid, title, text, status_type, created_at, created_by, author, parent, resource_subtype, html_text, etc. |
| `opt_pretty` | boolean | No | Provides 'pretty' JSON output with line breaks and indentation. Useful for debugging; may increase response time and size. |
| `status_type` | string ("on_track" | "at_risk" | "off_track" | "on_hold" | "complete") | Yes | The type of status update. Must be one of: on_track (project is on track), at_risk (project is at risk), off_track (project is off track), on_hold (project is on hold), complete (project is complete). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create subtask

**Slug:** `ASANA_CREATE_SUBTASK`

Creates a new Asana subtask under an existing parent task (`task_gid`); `due_on` and `due_at` are mutually exclusive and cannot be set simultaneously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the subtask to be created. |
| `notes` | string | No | Optional descriptive text for the subtask. |
| `due_at` | string | No | Optional due date and time for the subtask in ISO 8601 format (e.g., YYYY-MM-DDTHH:mm:ssZ), which is more specific than `due_on`. |
| `due_on` | string | No | Optional due date for the subtask in YYYY-MM-DD format, representing the end of the day for the task. |
| `assignee` | string | No | User to assign to this subtask. Accepts either a numeric user GID (e.g., '1234567890123456') or the special value 'me' for the authenticated user. If not provided, the subtask will be unassigned. |
| `task_gid` | string | Yes | The numeric Global ID (GID) of the parent task under which the subtask will be created. Must be a numeric string (digits only). Special values like 'me' are not accepted. |
| `completed` | boolean | No | Optional flag to mark the subtask as completed upon creation. Defaults to false if not specified. |
| `followers` | array | No | Optional array of user Global IDs (GIDs) to add as followers to the subtask. Followers receive notifications about subtask updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a tag

**Slug:** `ASANA_CREATE_TAG`

Tool to create a new tag in an Asana workspace. Use when you need to create a tag for categorizing tasks. Tags help organize and filter tasks across projects but are not automatically applied to any tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The properties for the tag to be created. |
| `opt_fields` | array | No | List of field names to include in the response. Common fields: color, created_at, followers, name, notes, permalink_url, workspace. |
| `opt_pretty` | boolean | No | If true, provides pretty-printed JSON response. Useful for debugging but may increase response size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task comment

**Slug:** `ASANA_CREATE_TASK_COMMENT`

Adds a new text comment (story) to an existing Asana task, appearing in its activity feed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The plain text content of the comment to be posted on the task. HTML or rich text is not supported via this field. |
| `task_id` | string | Yes | The globally unique identifier (GID) of the Asana task to which the comment will be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Team

**Slug:** `ASANA_CREATE_TEAM`

Tool to create a new team in an Asana workspace. Use when you need to establish a new team for collaboration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The request data for creating a team. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Allocation

**Slug:** `ASANA_DELETE_ALLOCATION`

Tool to delete an allocation by its ID. Use this when you need to remove a specific resource allocation in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `allocation_gid` | string | Yes | Globally unique identifier for the allocation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Attachment

**Slug:** `ASANA_DELETE_ATTACHMENT`

Tool to delete an attachment by its globally unique identifier. Use when you need to remove an existing attachment from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `attachment_gid` | string | Yes | Globally unique identifier for the attachment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Field

**Slug:** `ASANA_DELETE_CUSTOM_FIELD`

Tool to delete a custom field by its globally unique identifier. Use when you need to remove an existing custom field from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_field_gid` | string | Yes | Globally unique identifier for the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Membership

**Slug:** `ASANA_DELETE_MEMBERSHIP`

Tool to delete a membership by its GID. Use this when you need to remove a user or team's access to a project, portfolio, goal, or custom field in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `membership_gid` | string | Yes | Globally unique identifier for the membership. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a project

**Slug:** `ASANA_DELETE_PROJECT`

Delete a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Project Brief

**Slug:** `ASANA_DELETE_PROJECT_BRIEF`

Tool to delete a project brief by its GID. Use when you need to remove a project brief from Asana. Note: This requires the project_brief_gid (not the project_gid).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_brief_gid` | string | Yes | Globally unique identifier for the project brief to delete. Must be a numeric string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Project Status

**Slug:** `ASANA_DELETE_PROJECT_STATUS`

Tool to delete a project status by its GID. Use when you need to remove a specific project status update from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_status_gid` | string | Yes | Globally unique identifier for the project status to delete. Must be a numeric string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a section

**Slug:** `ASANA_DELETE_SECTION`

Tool to delete a section by its GID. Use when you need to permanently remove a section from a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `section_gid` | string | Yes | The globally unique identifier for the section to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Status Update

**Slug:** `ASANA_DELETE_STATUS_UPDATE`

Tool to delete a status update by its GID. Use when you need to remove a specific status update from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `status_update_gid` | string | Yes | Globally unique identifier for the status update to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Story

**Slug:** `ASANA_DELETE_STORY`

Tool to delete a story by its GID. Use when you need to remove a story from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `story_gid` | string | Yes | Globally unique identifier for the story. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a Tag

**Slug:** `ASANA_DELETE_TAG`

Tool to delete a specific tag by its GID. Use when you need to remove an existing tag from Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_gid` | string | Yes | The globally unique identifier for the tag. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a task

**Slug:** `ASANA_DELETE_TASK`

Delete a task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | Globally unique identifier for the task to delete. Must be a numeric string. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate Project

**Slug:** `ASANA_DUPLICATE_PROJECT`

Duplicate a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the new project. |
| `team` | string | No | Globally unique identifier for the team that the new project will belong to. |
| `include` | array | No | A list of elements to be included in the duplication. |
| `project_gid` | string | Yes | Globally unique identifier for the project to be duplicated. |
| `schedule_dates` | object | No | Scheduling information for the new project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate Task

**Slug:** `ASANA_DUPLICATE_TASK`

Duplicate a task

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the new task. |
| `include` | array | No | A comma-separated string of properties to copy from the original task. |
| `task_gid` | string | Yes | The globally unique identifier for the task to be duplicated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Access Requests

**Slug:** `ASANA_GET_ACCESS_REQUESTS`

Tool to retrieve access requests for a target object. Use when you need to get pending access requests for a specific resource like a project or portfolio.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | No | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `target` | string | Yes | Globally unique identifier for the target object. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Allocation

**Slug:** `ASANA_GET_ALLOCATION`

Get an allocation by ID. Use when you need to retrieve the details of a specific allocation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `allocation_gid` | string | Yes | Globally unique identifier for the allocation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Allocations

**Slug:** `ASANA_GET_ALLOCATIONS`

Tool to get multiple allocations. Requires either 'parent' (project GID) OR both 'assignee' AND 'workspace' together.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. |
| `offset` | string | No | Offset token. |
| `parent` | string | No | Globally unique identifier for the project to filter allocations by. Required if 'assignee' and 'workspace' are not both provided. |
| `assignee` | string | No | Globally unique identifier for the user or placeholder the allocation is assigned to. Must be provided together with 'workspace' if 'parent' is not specified. |
| `workspace` | string | No | Globally unique identifier for the workspace. Must be provided together with 'assignee' if 'parent' is not specified. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a project

**Slug:** `ASANA_GET_A_PROJECT`

Retrieves a specific Asana project by its `project_gid`, with an option to include additional fields for comprehensive details using `opt_fields`; this action does not return tasks within the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | Defines a comma-separated list of optional fields for a more detailed project representation in the response, beyond the default compact view. |
| `opt_pretty` | boolean | No | Pretty-prints the JSON response for readability, useful for debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. Must be a numeric string (e.g., '1234567890123456'). Use ASANA_GET_MULTIPLE_PROJECTS or ASANA_GET_WORKSPACE_PROJECTS to retrieve valid project IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a task

**Slug:** `ASANA_GET_A_TASK`

Retrieves full details for a specified task GID accessible by the user; use `opt_fields` to customize returned data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | Globally unique identifier (GID) of the task. |
| `opt_fields` | array | No | Array of field names to include in the response for more detailed data beyond the default compact representation. Only specific field paths listed in the OptFieldsEnm0 enum are supported (not arbitrary nested paths). Examples of valid fields: assignee, due_on, name, notes, custom_fields.name, followers.name, parent.name. |
| `opt_pretty` | boolean | No | If true, formats JSON response with indentation for readability; for debugging, as it increases response size/time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment

**Slug:** `ASANA_GET_ATTACHMENT`

Tool to get a single attachment by its globally unique identifier. Use when you need to retrieve details about a specific file attached to a task or project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | string | No | A comma-separated list of fields to include in the response. For example: "name,size,url". |
| `attachment_gid` | string | Yes | The globally unique identifier for the attachment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Audit Log Events

**Slug:** `ASANA_GET_AUDIT_LOG_EVENTS`

Tool to get audit log events for a workspace. Use when you need to retrieve a log of actions performed within a specific Asana workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `end_at` | string | No | Filter to events created before this time (exclusive). |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `start_at` | string | No | Filter to events created after this time (inclusive). |
| `actor_gid` | string | No | Filter to events triggered by the actor with this ID. |
| `actor_type` | string | No | Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If actor_gid is included, this should be excluded. |
| `event_type` | string | No | Filter to events of this type. Refer to the supported audit log events for a full list of values. |
| `resource_gid` | string | No | Filter to events with this resource ID. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a user task list

**Slug:** `ASANA_GET_A_USER_TASK_LIST`

Retrieves a specific user's task list from Asana by its `user_task_list_gid`, optionally returning extended details like name, owner, and workspace if specified in `opt_fields`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace` | string | Yes | The GID of the workspace to filter the user task list. |
| `opt_fields` | array | No | A list of optional field names to include in the response. By default, the response is compact and excludes some properties. Use this parameter to retrieve additional details. For example, to include the owner and workspace, provide `["owner", "workspace"]` as the value for this field. |
| `opt_pretty` | boolean | No | Set to true to receive the API response in a pretty-printed JSON format. This is useful for debugging but may increase response size and processing time. |
| `user_task_list_gid` | string | Yes | The user GID (not task list GID) to retrieve the task list for. This endpoint retrieves a user's task list by user GID, not by task list GID. Use 'me' for the authenticated user or a specific user GID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get current user

**Slug:** `ASANA_GET_CURRENT_USER`

Retrieves the authenticated user's full record, including accessible workspaces, often used as an initial call to establish user context for subsequent operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Field

**Slug:** `ASANA_GET_CUSTOM_FIELD`

Tool to get a single custom field by its globally unique identifier. Use when you need to retrieve the complete metadata and properties of a specific custom field in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. |
| `custom_field_gid` | string | Yes | Globally unique identifier for the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Fields for Workspace

**Slug:** `ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE`

Tool to get all custom fields in a workspace. Use when you need to retrieve a list of custom fields associated with a specific workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. |
| `opt_fields` | array | No | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Types

**Slug:** `ASANA_GET_CUSTOM_TYPES`

Tool to get all custom types associated with a project. Use when you need to retrieve custom types that extend Asana objects for categorization purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `project` | string | Yes | Globally unique identifier for the project, which is used as a filter when retrieving all custom types. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Events on a Resource

**Slug:** `ASANA_GET_EVENTS`

Retrieve events on a resource to monitor changes. Use when you need to track activity or changes related to a specific Asana resource like a task, project, or tag.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sync` | string | No | A sync token received from a previous events GET request. If provided, the API will return only events that have occurred since the sync token was created. If omitted, the API will return all events. |
| `opt_fields` | array | No | Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `resource_gid` | string | Yes | Globally unique identifier for the resource. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Favorites for User

**Slug:** `ASANA_GET_FAVORITES_FOR_USER`

Tool to get a user's favorites within a specified workspace. Returns favorites ordered as they appear in the user's Asana sidebar.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. Note: You can only pass in an offset that was returned to you via a previously paginated request. |
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `workspace` | string | Yes | The workspace in which to get favorites. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `resource_type` | string ("portfolio" | "project" | "tag" | "task" | "user" | "project_template") | No | The resource type of favorites to be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Goal

**Slug:** `ASANA_GET_GOAL`

Retrieve the full record for a single goal by its GID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `goal_gid` | string | Yes | Globally unique identifier for the goal. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. Example: "name,notes,due_on" |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Goal Relationships

**Slug:** `ASANA_GET_GOAL_RELATIONSHIPS`

Tool to retrieve goal relationships. Use when you need to get the relationships associated with a specific goal in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of objects to return per page. |
| `offset` | string | No | Offset token for pagination. |
| `goal_gid` | string | Yes | The globally unique identifier for the goal. |
| `opt_fields` | array | No | Defines fields to return. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Goals

**Slug:** `ASANA_GET_GOALS`

Tool to retrieve multiple goals. Requires exactly one scope parameter (workspace, team, portfolio, or project) to be specified. Can be optionally filtered by time period or archived status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | Globally unique identifier for the team. Exactly one of workspace, team, portfolio, or project must be specified. |
| `limit` | integer | No | The number of results to return. |
| `offset` | string | No | Offset token for pagination. |
| `project` | string | No | Globally unique identifier for the project. Exactly one of workspace, team, portfolio, or project must be specified. |
| `archived` | boolean | No | Filter to archived goals. |
| `portfolio` | string | No | Globally unique identifier for the portfolio. Exactly one of workspace, team, portfolio, or project must be specified. |
| `workspace` | string | No | Globally unique identifier for the workspace or organization. Exactly one of workspace, team, portfolio, or project must be specified. |
| `opt_fields` | array | No | Defines fields to return. Some requests support structured objects supporting cascades of multiple objects separated by commas; "data.gid" will return the gid field of the data object or "data.subtask.gid" will return the gid field of the subtask object. |
| `time_period` | string | No | Globally unique identifier for the time period. |
| `is_workspace_level` | boolean | No | Filter to goals at the workspace level. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Job

**Slug:** `ASANA_GET_JOB`

Tool to retrieve a job by its globally unique identifier. Use when you need to check the status of asynchronous operations like task duplication, project instantiation, or exports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_gid` | string | Yes | Globally unique identifier for the job. |
| `opt_fields` | array | No | A comma-separated list of properties to include in the response. This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | If true, provides "pretty" (i.e., human-readable) JSON output. Formatting dates and times as human-readable strings, numbers as strings, and including newlines and indentation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Membership

**Slug:** `ASANA_GET_MEMBERSHIP`

Tool to retrieve a single membership by its ID. Use this when you need to get details about a specific membership relationship between a user/team and a goal, project, portfolio, or custom field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `membership_gid` | string | Yes | Globally unique identifier for the membership. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Memberships

**Slug:** `ASANA_GET_MEMBERSHIPS`

Tool to retrieve memberships for goals, projects, portfolios, or custom fields. Use this to find out who has access to a specific Asana resource or what resources a specific user/team has access to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of results to return per page. |
| `member` | string | No | GID of the member (user or team) to filter memberships. |
| `offset` | string | No | Offset token for pagination. |
| `parent` | string | No | GID of the parent resource (e.g., project_gid, goal_gid, portfolio_gid, or custom_field_gid) to filter memberships. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response (e.g., "parent,member,access_level,parent.name,member.name"). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple projects

**Slug:** `ASANA_GET_MULTIPLE_PROJECTS`

Returns a list of projects filtered by workspace or team (one required), with optional archived status filter, supporting pagination for large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | GID of the team to filter projects by. Either workspace OR team is REQUIRED. GIDs are numeric strings (digits only, e.g., '1205029116228052'). |
| `limit` | integer | No | Number of projects to return per page (1-100). |
| `offset` | string | No | Pagination offset token (JWT format) from a previous response's `next_page.offset` field. IMPORTANT: Use the COMPLETE token exactly as returned - tokens are long strings (~150-200 characters) with three base64 sections separated by dots (header.payload.signature). Do NOT truncate or modify the token. |
| `archived` | boolean | No | Filter projects by archived status: `True` for archived only, `False` for unarchived only. |
| `workspace` | string | No | GID of the workspace or organization to filter projects by. Either workspace OR team is REQUIRED. GIDs are numeric strings (digits only, e.g., '1205029116228052'). To find your workspace GID, call GET /workspaces. |
| `opt_fields` | array | No | Array of optional properties to include for richer project details, as the default response is compact. This is an array, not a comma-separated string. See `OptFieldsEnm0` for available fields. |
| `opt_pretty` | boolean | No | Return JSON in a 'pretty' format (indented, line breaks). For debugging only due to increased response size/time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple tasks

**Slug:** `ASANA_GET_MULTIPLE_TASKS`

Retrieves a list of tasks, allowing filtering by assignee (requires `workspace`), project, section, `completed_since`, and `modified_since`; `workspace` also requires `assignee`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | Tag GID to filter tasks. Mutually exclusive with project, section, user_task_list, or assignee+workspace. |
| `limit` | integer | No | Number of task objects to return per page (1-100). Required when using assignee+workspace; defaults to 50 if omitted for that filter combination. |
| `offset` | string | No | Offset token for pagination, from next_page in a previous response. WARNING: Tokens expire after a short time. Use fresh tokens from recent API responses; do not cache for extended periods. If a token expires, restart pagination from the first page (omit offset). |
| `project` | string | No | Project GID to filter tasks. Mutually exclusive with section, tag, user_task_list, or assignee+workspace. |
| `section` | string | No | Section GID to filter tasks. Mutually exclusive with project, tag, user_task_list, or assignee+workspace. |
| `assignee` | string | No | User identifier: 'me' for current user or a numeric GID. Must be used with `workspace`. When using assignee+workspace, always set a `limit` (defaults to 50 if omitted). |
| `workspace` | string | No | Workspace GID. Must be used with `assignee`. Mutually exclusive with project, section, tag, or user_task_list. |
| `opt_fields` | array | No | Optional fields to include. Use 'projects' (plural) for project data. See OptFieldsEnm0 for valid values. |
| `opt_pretty` | boolean | No | Format JSON output with indentation for debugging (may increase response time/size). |
| `modified_since` | string | No | ISO 8601 date-time. Returns tasks modified since this time (includes property/association changes). |
| `user_task_list` | string | No | User task list GID to filter tasks. Mutually exclusive with project, section, tag, or assignee+workspace. |
| `completed_since` | string | No | Filter for tasks incomplete or completed since this ISO 8601 date-time or 'now'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple users

**Slug:** `ASANA_GET_MULTIPLE_USERS`

Returns a list of users in an Asana workspace or organization, optionally filtered by workspace or team GID, with support for pagination and specifying optional fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | The GID of the Asana team. Required when the authenticated user belongs to multiple workspaces (at least one of 'workspace' or 'team' must be provided). Filters results to users in this team. |
| `limit` | integer | No | The maximum number of user objects to return per page (1-100). |
| `offset` | string | No | Opaque token for pagination to retrieve the subsequent page of results. |
| `workspace` | string | No | The GID of the Asana workspace or organization. Required when the authenticated user belongs to multiple workspaces (at least one of 'workspace' or 'team' must be provided). Filters results to users in this workspace. |
| `opt_fields` | array | No | A list of optional field names to include in the response for each user. Available fields include 'email', 'name', 'photo' (and its specific sizes like 'photo.image_1024x1024'), 'workspaces', 'uri', and 'offset'. |
| `opt_pretty` | boolean | No | Return the response in a human-readable JSON format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple workspaces

**Slug:** `ASANA_GET_MULTIPLE_WORKSPACES`

Retrieves all workspaces accessible by the authenticated user, returning an empty list if the user has no accessible workspaces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of workspace objects to return per page. Must be an integer between 1 and 100, inclusive.  |
| `offset` | string | No | An opaque token used for pagination, obtained from the 'next_page' object in a previous response. If not provided, the first page of results is returned. Note: Pass only an offset token from a previous paginated request for this endpoint.  |
| `opt_fields` | array | No | A comma-separated list of optional properties to include in the response. By default, only a compact representation of the resource is returned. Available options: 'email_domains', 'is_organization', 'name', 'offset', 'path', 'uri'. |
| `opt_pretty` | boolean | No | Set to true to receive the response in a human-readable JSON format with proper line breaking and indentation. Useful for debugging, but may increase response time and size.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Portfolio

**Slug:** `ASANA_GET_PORTFOLIO`

Retrieve the full record for a single portfolio by its GID. Use this when you need to get detailed information about a specific portfolio.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. Max 100. |
| `offset` | string | No | Offset token for pagination. |
| `opt_fields` | array | No | Defines fields to return. Example: ["name", "color", "due_on"] |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `portfolio_gid` | string | Yes | Globally unique identifier for the portfolio. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Portfolio Items

**Slug:** `ASANA_GET_PORTFOLIO_ITEMS`

Retrieve items in a portfolio. Use this to get a list of projects or other portfolios contained within a specific portfolio.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of results to return per page. |
| `offset` | string | No | Offset token to request next page. |
| `opt_fields` | array | No | Fields to include in response. Common fields: archived, color, created_at, current_status_update, due_on, members, name, notes, owner, start_on, team, workspace. |
| `portfolio_gid` | string | Yes | Globally unique identifier for the portfolio. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Portfolio Memberships

**Slug:** `ASANA_GET_PORTFOLIO_MEMBERSHIPS`

Tool to retrieve multiple portfolio memberships. Use this tool when you need to list memberships for a specific portfolio, a user within a portfolio, or a user across all portfolios in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | No | A string identifying a user. This can either be the string "me", an email, or the GID of a user. |
| `limit` | integer | No | Results per page. The number of objects to return per page. Must be between 1 and 100, inclusive. |
| `offset` | string | No | Offset token. An offset to paginate from. This can be retrieved from the ‘next_page’ field in the previous response. |
| `portfolio` | string | No | The GID of the portfolio to filter memberships on. |
| `workspace` | string | No | The GID of the workspace to filter memberships on. |
| `opt_fields` | array | No | Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Portfolios

**Slug:** `ASANA_GET_PORTFOLIOS`

Retrieve multiple portfolios. Use when you need to list portfolios within a specific workspace, optionally filtered by owner.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of objects to return per page. Must be between 1 and 100. |
| `owner` | string | Yes | The user GID who owns the portfolio. Use 'me' to refer to the current authenticated user. This parameter is required by the Asana API. |
| `offset` | string | No | An offset token for pagination. |
| `workspace` | string | Yes | The workspace or organization GID to filter portfolios on. Must be a non-empty numeric GID (e.g., '1205766922013215'). |
| `opt_fields` | array | No | Fields to include in the response. For example: ['name', 'color', 'owner']. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Brief

**Slug:** `ASANA_GET_PROJECT_BRIEF`

Tool to retrieve a project brief by its GID. Use when you need to get the detailed explanation (what and why) of a project. Note: Requires the project_brief_gid (not the project_gid). First call 'Get a project' with opt_fields=['project_brief'] to obtain the project_brief_gid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Available options: text |
| `opt_pretty` | boolean | No | Provides 'pretty' output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_brief_gid` | string | Yes | Globally unique identifier for the project brief. This is NOT the project GID. Must be a numeric string. To obtain a project_brief_gid, first call 'Get a project' with opt_fields=['project_brief'] to retrieve the project's brief object, which contains the project_brief_gid. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Membership

**Slug:** `ASANA_GET_PROJECT_MEMBERSHIP`

Tool to get a project membership by ID. Use when you need to retrieve details of a specific project membership.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_membership_gid` | string | Yes | Globally unique identifier for the project membership. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Memberships For Project

**Slug:** `ASANA_GET_PROJECT_MEMBERSHIPS`

Tool to get memberships from a specific project. Use when you need to see who has access to a project and their permission levels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | No | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Projects for Task

**Slug:** `ASANA_GET_PROJECTS_FOR_TASK`

Tool to get all projects a task is in. Use when you need to retrieve project associations for a specific task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* |
| `task_gid` | string | Yes | The task to operate on. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Projects for Team

**Slug:** `ASANA_GET_PROJECTS_FOR_TEAM`

Tool to get a list of projects for a specific team in Asana. Use when you need to retrieve project details associated with a team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. |
| `archived` | boolean | No | Only return projects whose `archived` field takes on the value of this parameter. |
| `team_gid` | string | Yes | Globally unique identifier for the team. Must be a numeric string (digits only). |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Status

**Slug:** `ASANA_GET_PROJECT_STATUS`

Tool to retrieve the full record for a single project status by its GID. Use when you need to get the details of a specific project status update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | Fields to include in the response. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `project_status_gid` | string | Yes | Globally unique identifier for the project status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Status Updates

**Slug:** `ASANA_GET_PROJECT_STATUS_UPDATES`

Tool to get status updates for a specific project. Use when you need to retrieve the latest or historical status reports associated with an Asana project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to paginate from. This can be retrieved from the 'next_page' field in a previous response. |
| `opt_fields` | array | No | Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Adds indentation and newlines to the response. This can be useful when debugging but increases the response size. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Multiple Project Templates

**Slug:** `ASANA_GET_PROJECT_TEMPLATES`

Tool to retrieve multiple project templates. Use when you need to list available project templates in a workspace or team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. |
| `team_gid` | string | No | Globally unique identifier for the team. Recommended when working with organizations. REQUIRED: At least one of workspace_gid or team_gid must be provided. Accepts both 'team_gid' and 'team' as parameter names. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response. For example: name,description,owner,team,public |
| `workspace_gid` | string | No | Globally unique identifier for a regular workspace (not an organization). Only accepts workspace GIDs - organization GIDs will be rejected. For organizations, use team_gid instead. REQUIRED: At least one of workspace_gid or team_gid must be provided. Accepts both 'workspace_gid' and 'workspace' as parameter names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Templates for Team

**Slug:** `ASANA_GET_PROJECT_TEMPLATES_FOR_TEAM`

Tool to get a team's project templates in Asana. Use when you need to retrieve project templates associated with a specific team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. Note: You can only pass in an offset that was returned to you via a previously paginated request. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Reactions on Object

**Slug:** `ASANA_GET_REACTIONS_ON_OBJECT`

Tool to get reactions with a specific emoji base character on an object. Use when you need to retrieve user reactions (emoji responses) on a status update or story.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `target` | string | Yes | Globally unique identifier for object to fetch reactions from. Must be a GID for a status update or story. |
| `emoji_base` | string | Yes | Only return reactions with this emoji base character. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Section

**Slug:** `ASANA_GET_SECTION`

Retrieve the full record for a single section by its GID. Use this when you need to get details about a specific section within a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `section_gid` | string | Yes | The globally unique identifier for the section. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sections in a project

**Slug:** `ASANA_GET_SECTIONS_IN_PROJECT`

Returns compact records for all sections (used to group tasks) in a specified project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of sections to return per page (1-100). |
| `offset` | string | No | Token for pagination to retrieve the next page of results. |
| `project_gid` | string | Yes | Globally unique identifier (GID) of the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Status Update

**Slug:** `ASANA_GET_STATUS`

Tool to retrieve the full record for a single status update by its GID. Use when you need to get the details of a specific status update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format with proper line breaking and indentation. |
| `status_update_gid` | string | Yes | Globally unique identifier for the status update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Status Updates

**Slug:** `ASANA_GET_STATUS_UPDATES`

Retrieve status updates from an object. Use when you need to get the latest or historical status updates for a specific project, portfolio, or goal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of items to return per page. The value must be between 1 and 100. |
| `offset` | string | No | An offset token returned from a previous query that had a `next_page` property. This is used for pagination. |
| `parent` | string | Yes | Globally unique identifier (GID) of the object (project, portfolio, or goal) from which to fetch status updates. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response. This allows customization of the returned data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Stories for Task

**Slug:** `ASANA_GET_STORIES_FOR_TASK`

Tool to get stories (comments, status updates, etc.) for a task. Use when you need to retrieve the history or discussion associated with a specific task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of results per page (between 1 and 100). |
| `offset` | string | No | Offset token for pagination. |
| `task_gid` | string | Yes | The GID of the task to get stories from. |
| `opt_fields` | array | No | A comma-separated list of optional properties to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Story

**Slug:** `ASANA_GET_STORY`

Tool to retrieve a story. Use when you need to get the complete record for a single story.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `story_gid` | string | Yes | Globally unique identifier for the story. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response. |
| `opt_pretty` | boolean | No | Provides "pretty" output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tag

**Slug:** `ASANA_GET_TAG`

Tool to get a single tag by its globally unique identifier. Use when you need to retrieve detailed information about a specific tag.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_gid` | string | Yes | Globally unique identifier for the tag. |
| `opt_fields` | array | No | A comma-separated list of properties to include in the response. |
| `opt_pretty` | boolean | No | If true, provides "pretty" (i.e., human-readable) JSON output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tags

**Slug:** `ASANA_GET_TAGS`

Get multiple tags in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. |
| `offset` | string | No | Offset token for pagination. |
| `workspace` | string | No | The GID of the workspace to filter tags on. |
| `opt_fields` | array | No | Comma-separated list of optional properties to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tags for Task

**Slug:** `ASANA_GET_TAGS_FOR_TASK`

Tool to get all tags associated with a specific task. Use when you need to retrieve tags for categorization, filtering, or understanding task organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token for pagination. An offset to the next page returned by the API. |
| `task_gid` | string | Yes | Globally unique identifier for the task. |
| `opt_fields` | array | No | A comma-separated list of properties to include in the response. |
| `opt_pretty` | boolean | No | If true, provides "pretty" (i.e., human-readable) JSON output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tags For Workspace

**Slug:** `ASANA_GET_TAGS_FOR_WORKSPACE`

Tool to get all tags in a specific workspace. Use when you need to retrieve tags for categorizing tasks within a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Attachments

**Slug:** `ASANA_GET_TASK_ATTACHMENTS`

Tool to get the list of attachments for a given task, project, or project_brief. Use when you need to retrieve files attached to a specific Asana object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of results per page. |
| `offset` | string | No | An offset token, used for pagination to retrieve the next page of results. If not provided or empty, the first page of results is returned. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response for each attachment. Possible fields include: `created_at`, `download_url`, `host`, `name`, `parent`, `parent.name`, `permanent_url`, `resource_subtype`, `size`, `view_url`. |
| `parent_gid` | string | Yes | The GID of the task, project, or project_brief to fetch attachments from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Counts For Project

**Slug:** `ASANA_GET_TASK_COUNTS_FOR_PROJECT`

Tool to get task count statistics for a project. Use when you need to retrieve the number of tasks, completed tasks, incomplete tasks, and milestone counts for a specific Asana project. Note that all fields are excluded by default - you must specify them in opt_fields to get any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | Comma-separated list of fields to include in the response. Available fields: num_tasks, num_completed_tasks, num_incomplete_tasks, num_milestones, num_completed_milestones, num_incomplete_milestones. All fields are excluded by default, so you must opt in using this parameter to get any information from this endpoint. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tasks for tag

**Slug:** `ASANA_GET_TASKS_FOR_TAG`

Tool to retrieve tasks associated with a specific Asana tag by tag GID. Use when you need to list all tasks that have been tagged with a particular label.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. Note: You can only pass in an offset that was returned to you via a previously paginated request. |
| `tag_gid` | string | Yes | Globally unique identifier for the tag. |
| `opt_fields` | array | No | This endpoint returns a compact representation of a resource by default. To include optional properties, set this query parameter to a comma-separated list of the properties you wish to include (e.g., 'name', 'completed', 'due_on', 'assignee'). |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tasks for user task list

**Slug:** `ASANA_GET_TASKS_FOR_USER_TASK_LIST`

Tool to retrieve tasks from a user task list by user task list GID. Use when you need to list tasks assigned to a specific user's task list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. Note: You can only pass in an offset that was returned to you via a previously paginated request. |
| `opt_fields` | array | No | This endpoint returns a compact representation of a resource. To include additional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `completed_since` | string | No | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string (ISO 8601 format) or the keyword 'now'. |
| `user_task_list_gid` | string | Yes | Globally unique identifier (GID) of the user task list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve tasks for project

**Slug:** `ASANA_GET_TASKS_FROM_A_PROJECT`

Retrieves tasks from a specified Asana project, allowing filtering by completion status and selection of optional fields for detailed responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tasks to return per page. Defaults to 100 to enable pagination and avoid API errors on large projects. |
| `offset` | string | No | Opaque pagination token from a previous response's 'next_page.offset' field. Must be passed exactly as received without any modification or truncation. If omitted or empty, returns the first page. Tokens expire after some time. |
| `opt_fields` | array | No | Optional fields for a detailed task representation (e.g., 'assignee', 'due_on'), as tasks are compact by default. Refer to Asana API docs for all field names. |
| `opt_pretty` | boolean | No | If true, returns human-readable JSON; useful for debugging but increases response size. |
| `project_gid` | string | Yes | Globally unique identifier (GID) of the project. |
| `completed_since` | string | No | Filters tasks: returns incomplete tasks or those completed after the specified ISO 8601 date-time (e.g., '2023-10-26T10:00:00Z') or 'now'. If omitted or empty, no completion filter is applied. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tasks from a section

**Slug:** `ASANA_GET_TASKS_FROM_SECTION`

Tool to retrieve tasks that belong to a specific Asana section (column/header) by section GID. Use when you need to list tasks within a particular section, such as for agenda or carryover workflows. Board view only feature.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tasks to return per page (1-100). |
| `offset` | string | No | Opaque pagination token from a previous response's 'next_page.offset' field. Must be passed exactly as received without any modification or truncation. If omitted or empty, returns the first page. Tokens expire after some time. |
| `opt_fields` | array | No | Optional fields for a detailed task representation (e.g., 'assignee', 'due_on', 'completed_at'). By default, tasks are returned in compact format. Use this to request specific fields. Refer to Asana API docs for all available field names. |
| `opt_pretty` | boolean | No | If true, returns human-readable JSON; useful for debugging but increases response size. |
| `section_gid` | string | Yes | Globally unique identifier (GID) of the section. |
| `completed_since` | string | No | Filters tasks: returns incomplete tasks or those completed after the specified ISO 8601 date-time (e.g., '2023-10-26T10:00:00Z') or 'now'. Omit to retrieve all tasks in the section. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Subtasks

**Slug:** `ASANA_GET_TASK_SUBTASKS`

Tool to retrieve multiple task subtasks from a workspace. Use when you need to list or find available task subtasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `task_gid` | string | Yes | The globally unique identifier for the task. |
| `opt_fields` | array | No | Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Templates

**Slug:** `ASANA_GET_TASK_TEMPLATES`

Tool to retrieve multiple task templates from a workspace. Use when you need to list or find available task templates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of objects to return per page. |
| `offset` | string | No | Offset token for pagination. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. For example: 'name,created_at,created_by'. |
| `project_gid` | string | No | Globally unique identifier for the project. One of project or workspace must be specified. |
| `workspace_gid` | string | No | Globally unique identifier for the workspace. One of project or workspace must be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team

**Slug:** `ASANA_GET_TEAM`

Tool to retrieve details of a specific team by its GID. Use when you need to fetch information about a particular team in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths. The id of included objects will always be returned, regardless of the field options. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Membership

**Slug:** `ASANA_GET_TEAM_MEMBERSHIP`

Tool to retrieve a complete team membership record by its GID. Use when you need to fetch details about a specific team membership in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `team_membership_gid` | string | Yes | Globally unique identifier for the team membership. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Memberships

**Slug:** `ASANA_GET_TEAM_MEMBERSHIPS`

Tool to retrieve compact team membership records. Use when you need to list members of a team, teams a user belongs to, or all team memberships in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | The team to filter memberships to. |
| `user` | string | No | A user gid to filter memberships to. |
| `limit` | integer | No | Results per page. |
| `offset` | string | No | Offset token. |
| `workspace` | string | No | The workspace to filter memberships to. |
| `opt_fields` | array | No | Defines fields to return. |
| `opt_pretty` | boolean | No | Adds indentation to JSON response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Memberships for Team

**Slug:** `ASANA_GET_TEAM_MEMBERSHIPS_FOR_TEAM`

Tool to get memberships from a specific team. Use when you need to retrieve the list of users who are members of a particular team, including their membership details such as admin status and guest status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Memberships For User

**Slug:** `ASANA_GET_TEAM_MEMBERSHIPS_FOR_USER`

Tool to get team memberships for a specific user. Use when you need to retrieve all teams that a user belongs to within a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `workspace` | string | Yes | Globally unique identifier for the workspace. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Teams for User

**Slug:** `ASANA_GET_TEAMS_FOR_USER`

Tool to get teams for a specific user in an organization. Returns the team records for all teams in the organization or workspace to which the given user is assigned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `organization` | string | Yes | The workspace or organization to filter teams on. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get teams in workspace

**Slug:** `ASANA_GET_TEAMS_IN_WORKSPACE`

Returns the compact records for all teams in the workspace visible to the authorized user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token from a previous API response for pagination to retrieve the next page of results. If an offset is not passed in, the API will return the first page of results. |
| `workspace_gid` | string | Yes | The Global ID (GID) of the workspace to get teams from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Period

**Slug:** `ASANA_GET_TIME_PERIOD`

Tool to retrieve the full record for a single time period by its GID. Use when you need to fetch detailed information about a specific time period, including its start/end dates, display name, and parent period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | Comma-separated list of fields to include in the response. |
| `opt_pretty` | boolean | No | Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. |
| `time_period_gid` | string | Yes | Globally unique identifier for the time period. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Periods

**Slug:** `ASANA_GET_TIME_PERIODS`

Tool to retrieve compact or full representations of time periods. Use this when you need to fetch information about specific time periods, such as their start and end dates, display names, and parent periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. |
| `end_on` | string | No | The last day of the time period, YYYY-MM-DD. |
| `offset` | string | No | Offset token for pagination. |
| `start_on` | string | No | The first day of the time period, YYYY-MM-DD. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response. |
| `opt_pretty` | boolean | No | Provides the response in "pretty" output. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Tracking Entries

**Slug:** `ASANA_GET_TIME_TRACKING_ENTRIES`

Tool to get multiple time tracking entries across workspace, tasks, or projects. Use when you need to retrieve time tracking information for filtering by workspace, task, portfolio, user, or date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task` | string | No | Globally unique identifier for the task to filter time tracking entries by. |
| `user` | string | No | Globally unique identifier for the user to filter time tracking entries by. |
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* |
| `portfolio` | string | No | Globally unique identifier for the portfolio to filter time tracking entries by. |
| `workspace` | string | No | Globally unique identifier for the workspace. At least one of entered_on_start_date or entered_on_end_date must be provided when filtering by workspace. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `attributable_to` | string | No | Globally unique identifier for the project the time tracking entries are attributed to. |
| `entered_on_end_date` | string | No | The end date for filtering time tracking entries by when they were entered. |
| `entered_on_start_date` | string | No | The start date for filtering time tracking entries by when they were entered. |
| `timesheet_approval_status` | string | No | Globally unique identifier for the timesheet approval status to filter time tracking entries by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Tracking Entries for Task

**Slug:** `ASANA_GET_TIME_TRACKING_ENTRIES_FOR_TASK`

Tool to get time tracking entries for a task. Use when you need to retrieve time tracking information recorded on a specific task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* |
| `task_gid` | string | Yes | The task to operate on. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Objects via Typeahead

**Slug:** `ASANA_GET_TYPEAHEAD_OBJECTS`

Tool to retrieve objects in a workspace via a typeahead search algorithm. Use when you need to quickly find objects like tasks, projects, users, etc., based on a search string. This is useful for implementing auto-completion features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. |
| `query` | string | No | The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `resource_type` | string ("custom_field" | "goal" | "project" | "project_template" | "portfolio" | "tag" | "task" | "team" | "user") | No | The type of values the typeahead should return. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `ASANA_GET_USER`

Get a user by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User in Workspace

**Slug:** `ASANA_GET_USER_FOR_WORKSPACE`

Tool to get a user in a workspace or organization by their GID. Use when you need to retrieve details about a specific user within a workspace context.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Users for Team

**Slug:** `ASANA_GET_USERS_FOR_TEAM`

Get users in a team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The maximum is 2000. |
| `offset` | string | No | Offset token. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Users in Workspace

**Slug:** `ASANA_GET_USERS_FOR_WORKSPACE`

Get users in a workspace or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token for pagination requests. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. In the case of JSON this means doing proper line breaking and indentation to make it readable. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Task List

**Slug:** `ASANA_GET_USER_TASK_LIST`

Tool to get a single user task list by its globally unique identifier. Use when you need to retrieve information about a specific user's My Tasks list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `user_task_list_gid` | string | Yes | Globally unique identifier for the user task list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhooks

**Slug:** `ASANA_GET_WEBHOOKS`

Tool to retrieve multiple webhooks in a workspace. Use when you need to list all webhooks for a workspace or filter webhooks by a specific resource.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token for pagination. An offset to the next page returned by the API. |
| `resource` | string | No | Only return webhooks for the given resource. |
| `workspace` | string | Yes | The workspace to query for webhooks in. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace

**Slug:** `ASANA_GET_WORKSPACE`

Tool to retrieve details of a specific workspace by its GID. Use when you need to get information about a particular Asana workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This results in a compact response, suitable for data-transfer sensitive applications. Valid values are: gid, name, resource_type, email_domains, is_organization. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Formatting dates and times as human-readable strings, numbers as strings, and including newlines and indentation. The default value is false. |
| `workspace_gid` | string | Yes | The globally unique identifier of the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Membership

**Slug:** `ASANA_GET_WORKSPACE_MEMBERSHIP`

Tool to retrieve a specific workspace membership by its GID. Use when you need to get details about a user's membership in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `workspace_membership_gid` | string | Yes | Globally unique identifier for the workspace membership. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Memberships

**Slug:** `ASANA_GET_WORKSPACE_MEMBERSHIPS`

Tool to retrieve the workspace memberships for a specific workspace. Use when you need to list members of a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | No | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. |
| `opt_fields` | array | No | Defines fields to return. Some requests return compact representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should return for each object. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Memberships For User

**Slug:** `ASANA_GET_WORKSPACE_MEMBERSHIPS_FOR_USER`

Tool to retrieve workspace memberships for a specific user. Use when you need to list all workspaces a user is a member of.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Results per page. The number of objects to return per page. The value must be between 1 and 100. |
| `offset` | string | No | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. |
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Projects

**Slug:** `ASANA_GET_WORKSPACE_PROJECTS`

Tool to retrieve the projects associated with a specific workspace. Use when you need to list all projects within a given Asana workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return per page. For workspaces with many projects, this parameter is required to avoid pagination errors. Use the offset parameter to retrieve additional pages. |
| `offset` | string | No | Offset token for pagination. |
| `opt_expand` | array | No | Fields to expand in the response. |
| `opt_fields` | array | No | Fields to include in the response. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder Enum Option for Custom Field

**Slug:** `ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD`

Tool to reorder an existing enum option within a custom field by moving it before or after another specified enum option. Use when you need to change the order/position of options in an enum or multi_enum custom field. Note: To create new enum options, use 'Create Enum Option for Custom Field' action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data for the enum option to be inserted or reordered. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `custom_field_gid` | string | Yes | Globally unique identifier for the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move or Insert Section in Project

**Slug:** `ASANA_INSERT_SECTION_FOR_PROJECT`

Tool to move or reorder an existing section within a project by repositioning it before or after another section. Use when you need to change the position/order of sections in a project. Note: This action moves existing sections only. To create new sections, use 'Create Section in Project' action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data specifying which section to move and where to position it. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Instantiate Project Template

**Slug:** `ASANA_INSTANTIATE_PROJECT_TEMPLATE`

Instantiate (create) a real Asana project from a project template, returning the async job record. Use when you need to create a new project from a template with specific date and role assignments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the new project that will be created from the template. |
| `team` | string | No | Globally unique identifier for the team that the new project will belong to. Required if the template is a team template. |
| `is_strict` | boolean | No | If true, requires all date and role variables from the template to be provided. If false or omitted, missing variables will use defaults. |
| `opt_fields` | array | No | Optional fields to include in the response. Common values: gid, status, new_project, new_project_template. |
| `opt_pretty` | boolean | No | If true, returns human-readable JSON response (for debugging only due to size/processing impact). |
| `privacy_setting` | string ("public_to_workspace" | "private_to_team" | "private") | No | Privacy setting for the new project. If not specified, inherits from template or team settings. |
| `requested_dates` | array | No | Array of date variable assignments. Required if the template includes date variables and is_strict is true. |
| `requested_roles` | array | No | Array of role assignments mapping template roles to specific users. |
| `project_template_gid` | string | Yes | Globally unique identifier for the project template to instantiate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reject access request

**Slug:** `ASANA_REJECT_ACCESS_REQUEST`

Tool to reject an access request. Use when you need to deny a user's request for access to a project or resource.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `access_request_gid` | string | Yes | Globally unique identifier for the access request to reject. Must be a numeric string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Follower From Task

**Slug:** `ASANA_REMOVE_FOLLOWER_FROM_TASK`

Tool to remove one or more followers from a task. Use when you need to update the list of users following a specific task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_gid` | string | Yes | The globally unique identifier for the task. |
| `followers` | array | Yes | An array of user GIDs to remove as followers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Followers For Project

**Slug:** `ASANA_REMOVE_FOLLOWERS_FOR_PROJECT`

Tool to remove followers from a project in Asana. Use when you need to remove one or more users as followers from a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `followers` | string | Yes | A comma-separated string of user identifiers. These can be the string "me", an email, or the gid of a user. For example: "521621,621373" or "me,user@example.com". |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Item from Portfolio

**Slug:** `ASANA_REMOVE_ITEM_FROM_PORTFOLIO`

Tool to remove an item (e.g., a project) from an Asana portfolio. Use to undo/cleanup portfolio membership, support moves between portfolios, or enforce portfolio hygiene.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item` | string | Yes | The globally unique identifier (GID) of the item (project or portfolio) to remove from the portfolio. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. Limited utility for this endpoint as it returns an empty data block. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format with proper line breaking and indentation for readability. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `portfolio_gid` | string | Yes | The globally unique identifier for the portfolio. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Members from Project

**Slug:** `ASANA_REMOVE_MEMBERS_FOR_PROJECT`

Tool to remove users from a project in Asana. Use this tool when you need to remove one or more users as members from a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `members` | string | Yes | A comma-separated string of user identifiers. These can be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_gid` | string | Yes | Globally unique identifier for the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Project from Task

**Slug:** `ASANA_REMOVE_PROJECT_FROM_TASK`

Tool to remove a project from a task in Asana. Use this when you need to disassociate a task from a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project` | string | Yes | The project to remove the task from. |
| `task_gid` | string | Yes | The task to operate on. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Tag from Task

**Slug:** `ASANA_REMOVE_TAG_FROM_TASK`

Tool to remove an existing tag from a task in Asana. Use this tool when you need to detach a tag from a specific task for cleanup or retagging automation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | Yes | The globally unique identifier for the tag to remove from the task. |
| `task_gid` | string | Yes | The globally unique identifier for the task. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove User For Team

**Slug:** `ASANA_REMOVE_USER_FOR_TEAM`

Tool to remove a user from a team. Use when you need to revoke team membership for a specific user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | A string identifying a user. This can either be the string 'me', an email, or the gid of a user. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove User from Workspace

**Slug:** `ASANA_REMOVE_USER_FOR_WORKSPACE`

Tool to remove a user from a workspace or organization. Use when you need to revoke a user's access to a specific workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_pretty` | boolean | No | Provides "pretty" output. Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Tasks in Workspace

**Slug:** `ASANA_SEARCH_TASKS_IN_WORKSPACE`

Tool to search tasks across a workspace with advanced filters. Use when performing complex queries such as overdue tasks, by project or custom field, for reporting or automation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | No | Search for tasks containing this text in name or notes. At least one search filter must be provided. |
| `limit` | integer | No | Maximum number of results to return (1-100). |
| `opt_fields` | array | No | Additional fields to include in each task object; see Asana API docs for available fields. |
| `opt_pretty` | boolean | No | Pretty-print the JSON response with indentation (useful for debugging). |
| `assignee_any` | array | No | Return tasks assigned to any of these user GIDs; use 'me' for current user or 'null' for unassigned tasks. At least one search filter must be provided. |
| `projects_any` | array | No | Return tasks in any of these project GIDs. Must contain valid numeric Asana project identifiers (e.g., '1205766922013215'). At least one search filter (projects_any, assignee_any, resource_subtype, or text) must be provided. |
| `workspace_gid` | string | Yes | Numeric GID of the workspace to search. Must be a valid numeric workspace identifier (e.g., '1205766922013215'). Note: Unlike assignee_any, 'me' is not a valid value for workspace_gid - use a numeric GID obtained from the workspaces endpoint. |
| `resource_subtype` | string | No | Filter by task subtype: 'default_task' for regular tasks, 'milestone' for milestones. At least one search filter must be provided. |
| `composio_execution_message` | string | No | Message explaining any automatic modifications made to the request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set parent for task

**Slug:** `ASANA_SET_PARENT_FOR_TASK`

Tool to set the parent of a task in Asana. Use when you need to make a task a subtask of another task or remove the parent relationship.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `parent` | string | Yes | The GID of the new parent task, or 'null' to remove the parent. Setting a parent makes this task a subtask of the parent. |
| `task_gid` | string | Yes | The globally unique identifier (GID) of the task to set the parent for. |
| `opt_fields` | string | No | Comma-separated list of fields to include in the response. By default, the response returns a compact representation of the task. Use this to retrieve additional fields such as 'name', 'parent', 'parent.name', etc. |
| `opt_pretty` | boolean | No | Provides 'pretty' output with proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `insert_after` | string | No | A subtask GID of the parent to insert the task after, or 'null' to insert at the beginning of the subtask list. If not provided, the task will be inserted at an appropriate position. |
| `insert_before` | string | No | A subtask GID of the parent to insert the task before, or 'null' to insert at the end of the subtask list. If not provided, the task will be inserted at an appropriate position. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit Parallel Requests (Batch API)

**Slug:** `ASANA_SUBMIT_PARALLEL_REQUESTS`

Tool to submit multiple Asana API requests in parallel using the Batch API. Use when you need to perform several operations efficiently, such as fetching multiple tasks or creating multiple subtasks at once.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Contains the list of actions to be performed in parallel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Allocation

**Slug:** `ASANA_UPDATE_ALLOCATION`

Tool to update an existing allocation by its ID. Use this when you need to modify details like the start date, end date, effort, or assignee for an allocation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data to update the allocation with. |
| `opt_fields` | array | No | A comma-separated list of fields to include in the response. |
| `opt_pretty` | boolean | No | If true, the response will be in a human-readable format. |
| `allocation_gid` | string | Yes | Globally unique identifier for the allocation to be updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a task

**Slug:** `ASANA_UPDATE_A_TASK`

Updates attributes of an existing Asana task identified by its task_gid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | An object containing the fields of the task to update. |
| `task_gid` | string | Yes | The GID of the task to update. |
| `opt_fields` | array | No | Array of optional properties to include in the response object. By default, a compact representation of the task is returned. Use this to retrieve additional fields. The elements of this list should be valid field names for the task resource. This is an array, not a comma-separated string. |
| `opt_pretty` | boolean | No | If true, the response JSON will be 'pretty-printed' with indentation and line breaks, making it more readable. This is useful for debugging but may increase response time and size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Field

**Slug:** `ASANA_UPDATE_CUSTOM_FIELD`

Tool to update a custom field by its globally unique identifier. Use when you need to modify properties of an existing custom field in Asana.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data to update the custom field with. |
| `opt_fields` | array | No | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `custom_field_gid` | string | Yes | Globally unique identifier for the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Enum Option

**Slug:** `ASANA_UPDATE_ENUM_OPTION`

Tool to update an enum option for a custom field. Use when you need to modify the name, color, or enabled status of an existing enum option.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data to update the enum option with. |
| `opt_fields` | array | No | Defines the fields to be returned in the response. |
| `opt_pretty` | boolean | No | Provides “pretty” output. Formatting of the result will follow JSON pretty print conventions (line breaks and indentation). |
| `enum_option_gid` | string | Yes | Globally unique identifier for the enum option. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a project

**Slug:** `ASANA_UPDATE_PROJECT`

Update a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the project. Note: User task lists (My Tasks) are special system-managed projects whose names cannot be changed. Attempting to rename a user task list will result in an error. |
| `team` | string | No | The GID of the team that this project is shared with. |
| `color` | string | No | Color of the project. |
| `notes` | string | No | Free-form textual information associated with the project (its description). |
| `owner` | string | No | The GID of the new owner of the project. May be null. |
| `due_on` | string | No | The day on which this project is due. This takes a date with format YYYY-MM-DD. |
| `public` | boolean | No | True if the project is public to its team. |
| `archived` | boolean | No | True if the project is archived, false if not. |
| `due_date` | string | No | The localized day on which this project is due. This takes a date with format YYYY-MM-DD. |
| `start_on` | string | No | The day on which work for this project begins, or null if the project has no start date. This takes a date with YYYY-MM-DD format. |
| `html_notes` | string | No | [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML. |
| `is_template` | boolean | No | [Opt In](/docs/input-output-options). True if the project is a template. |
| `project_gid` | string | Yes | The GID of the project to update. |
| `default_view` | string | No | The default view (list, board, calendar, or timeline) of a project. |
| `custom_fields` | object | No | An object where each key is the GID of a custom field and its corresponding value is the new value for that custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Brief

**Slug:** `ASANA_UPDATE_PROJECT_BRIEF`

Tool to update a project brief by its GID. Use when you need to modify the content/description of a project brief. Note: Requires the project_brief_gid (not the project_gid). First call 'Get a project' with opt_fields=['project_brief'] to obtain the project_brief_gid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | No | The plain text content of the project brief. This field updates the main content/description of the project brief. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. Available options: html_text, permalink_url, project, project.name, text, title |
| `opt_pretty` | boolean | No | Provides 'pretty' output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `project_brief_gid` | string | Yes | Globally unique identifier for the project brief. This is NOT the project GID. Must be a numeric string. To obtain a project_brief_gid, first call 'Get a project' with opt_fields=['project_brief'] to retrieve the project's brief object, which contains the project_brief_gid. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Section

**Slug:** `ASANA_UPDATE_SECTION`

Update a section's name or position within a project. Use when you need to rename a section or reorder sections by specifying insert_before or insert_after.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the section. This is the text displayed as the section header. Cannot be an empty string. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output with proper line breaking and indentation. Advisable only during debugging as it increases response time and size. |
| `section_gid` | string | Yes | The globally unique identifier for the section to update. |
| `insert_after` | string | No | An existing section within this project after which the section should be inserted. Cannot be provided together with insert_before. |
| `insert_before` | string | No | An existing section within this project before which the section should be inserted. Cannot be provided together with insert_after. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Story

**Slug:** `ASANA_UPDATE_STORY`

Tool to update a story on a task. Use when you need to modify the text, html_text, or pin status of an existing story. Only comment stories can have text/html_text updated, and only comment and attachment stories can be pinned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | An object containing the fields of the story to update. |
| `story_gid` | string | Yes | Globally unique identifier for the story. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tag

**Slug:** `ASANA_UPDATE_TAG`

Tool to update an existing tag by its globally unique identifier. Use when you need to change the name or color of a tag.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | An object containing the fields to update. |
| `tag_gid` | string | Yes | The globally unique identifier for the tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a team

**Slug:** `ASANA_UPDATE_TEAM`

Tool to update details of an existing team. Use when you need to change a team's name, description, or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name of the team. |
| `team_gid` | string | Yes | Globally unique identifier for the team. |
| `opt_fields` | array | No | Defines fields to return. |
| `opt_pretty` | boolean | No | Provides “pretty” output. |
| `description` | string | No | The new description of the team. |
| `organization` | string | No | GID of the organization to which the team belongs. This is the GID of an organization, not its name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User

**Slug:** `ASANA_UPDATE_USER`

Update a user's custom fields. Note: Asana's API has very limited user update capabilities - most user properties are read-only and managed by users themselves.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `workspace` | string | No | The workspace to filter results on. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides 'pretty' output. Provides the response in a 'pretty' format. In the case of JSON this means doing proper line breaking and indentation to make it readable. |
| `custom_fields` | object | No | An object where each key is a custom field GID and the value is the new value for that custom field. Note: User objects have very limited update capabilities in Asana's API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User for Workspace

**Slug:** `ASANA_UPDATE_USER_FOR_WORKSPACE`

Tool to update a user in a workspace or organization. Use when you need to modify user-specific custom field values for a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_gid` | string | Yes | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| `opt_fields` | array | No | This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. |
| `opt_pretty` | boolean | No | Provides "pretty" output. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| `custom_fields` | object | No | Object mapping custom field GIDs to their values for the user. Values depend on field type: enum fields use option GIDs (strings), text fields use strings, number fields use numbers. |
| `workspace_gid` | string | Yes | Globally unique identifier for the workspace or organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a webhook

**Slug:** `ASANA_UPDATE_WEBHOOK`

Tool to update an existing Asana webhook's filter configuration. Use when you need to modify which events trigger webhook notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filters` | array | No | Array of WebhookFilter objects to specify which events should trigger this webhook. If a webhook event passes any of the filters, the event will be delivered; otherwise no event will be sent. Each filter can specify resource_type, resource_subtype, action, and/or fields to match. |
| `opt_fields` | array | No | Array of optional field names to include in the response. Common fields include: 'active', 'created_at', 'filters', 'last_failure_at', 'last_success_at', 'resource', 'target'. |
| `opt_pretty` | boolean | No | If true, the response JSON will be 'pretty-printed' with indentation and line breaks for readability. Useful for debugging but may increase response time and size. |
| `webhook_gid` | string | Yes | Globally unique identifier for the webhook to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Attachment Added to Task

**Slug:** `ASANA_TASK_ATTACHMENT_ADDED`

**Type:** webhook

Triggers when an attachment is added to a task.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_gid` | string | Yes | GID of the attachment |
| `attachment_subtype` | string | No | Subtype of the attachment (e.g. 'external') |
| `created_at` | string | Yes | Timestamp of the event |
| `task_gid` | string | Yes | GID of the task the attachment was added to |
| `user_gid` | string | No | GID of the user who added the attachment |

### New Comment on Task

**Slug:** `ASANA_TASK_COMMENT_ADDED`

**Type:** webhook

Triggers when a comment is added to a task in a project.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at` | string | Yes | Timestamp of the event |
| `story_gid` | string | Yes | GID of the comment story |
| `task_gid` | string | Yes | GID of the task the comment was added to |
| `user_gid` | string | No | GID of the user who posted the comment |

### New Task Created

**Slug:** `ASANA_TASK_CREATED`

**Type:** webhook

Triggers when a new task is created in a project.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at` | string | Yes | Timestamp of the event |
| `project_gid` | string | Yes | GID of the project the task was added to |
| `task_gid` | string | Yes | GID of the created task |
| `user_gid` | string | No | GID of the user who created the task |

### Task Moved to Section

**Slug:** `ASANA_TASK_MOVED_TO_SECTION`

**Type:** webhook

Triggers when a task is moved to a section in a project.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |
| `section_gid` | string | No | Asana GID of the destination section (numeric string, e.g. '1214062125915600'). Find it via GET /projects/{project_gid}/sections or from the Asana UI section URL. Must be a GID — section names are not accepted. Only triggers when a task is moved to this specific section. If empty, triggers for any section move. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at` | string | Yes | Timestamp of the event |
| `section_gid` | string | Yes | GID of the destination section |
| `task_gid` | string | Yes | GID of the task that was moved |
| `user_gid` | string | No | GID of the user who moved the task |

### Tag Added to Task

**Slug:** `ASANA_TASK_TAG_ADDED`

**Type:** webhook

Triggers when a tag is added to a task.

Note: Asana's event structure is inverted for tag events — the resource
is the task and the parent is the tag. So parent.gid gives the tag GID.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |
| `tag_gid` | string | No | Asana GID of the tag (numeric string, e.g. '1214062370176213'). Find it via GET /workspaces/{workspace_gid}/tags. Must be a GID — tag names (e.g. 'urgent') are not accepted. Only triggers when this specific tag is added. If empty, triggers for any tag. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at` | string | Yes | Timestamp of the event |
| `tag_gid` | string | Yes | GID of the tag that was added |
| `task_gid` | string | Yes | GID of the task the tag was added to |
| `user_gid` | string | No | GID of the user who added the tag |

### Task Updated

**Slug:** `ASANA_TASK_UPDATED`

**Type:** webhook

Triggers when a task is updated in a project.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Only trigger when one of these fields changes (e.g. ['assignee', 'due_on', 'name']). If not set, triggers on any field change. |
| `project_gid` | string | Yes | Asana GID of the project to monitor (numeric string, e.g. '1213430481840948'). Find it via the Asana REST API (GET /workspaces/{workspace_gid}/projects) or from the Asana project URL (https://app.asana.com/0/{project_gid}/...). Must be a GID — project names are not accepted. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `change_action` | string | Yes | The change action (e.g. 'changed') |
| `change_field` | string | Yes | Name of the field that changed |
| `created_at` | string | Yes | Timestamp of the event |
| `new_value` | object | No | New value of the field, if available |
| `task_gid` | string | Yes | GID of the updated task |
| `user_gid` | string | No | GID of the user who made the change |
