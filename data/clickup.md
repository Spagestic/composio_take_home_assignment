# ClickUp

ClickUp unifies tasks, docs, goals, and chat in a single platform, allowing teams to plan, organize, and collaborate across projects with customizable workflows

- **Category:** productivity
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 164
- **Triggers:** 21
- **Slug:** `CLICKUP`
- **Version:** 20260807_00

## Tools

### Add dependency

**Slug:** `CLICKUP_ADD_DEPENDENCY`

Adds a 'waiting on' or 'blocking' dependency to a task, requiring either `depends_on` (task becomes waiting on) or `dependency_of` (task becomes blocking), but not both; `team_id` is required if `custom_task_ids` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Unique identifier of the task to which a dependency relationship will be added. |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true to look up tasks by custom IDs (unique per team). |
| `depends_on` | string | No | ID of the task that `task_id` will depend on ('waiting on' relationship). Use this or `dependency_of`, not both. |
| `dependency_of` | string | No | ID of the task that will depend on `task_id` ('blocking' relationship). Use this or `depends_on`, not both. |
| `custom_task_ids` | boolean | No | If true, `task_id` and related task IDs are custom (text-based), requiring `team_id`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add guest to folder

**Slug:** `CLICKUP_ADD_GUEST_TO_FOLDER`

Adds a guest to a folder with specified permissions; requires a ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `guest_id` | string | Yes | The unique identifier of the guest user to be added to the folder. |
| `folder_id` | string | Yes | The unique identifier of the folder to which the guest will be added. |
| `include_shared` | boolean | No | If `true`, include shared item details (API default if parameter is omitted); if `false`, exclude them. |
| `permission_level` | string | Yes | Permission level for the guest. Options are 'read' (view only), 'comment', 'edit', or 'create' (full access). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add guest to list

**Slug:** `CLICKUP_ADD_GUEST_TO_LIST`

Shares a ClickUp List with an existing guest user, granting them specified permissions; requires the Workspace to be on the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The unique identifier of the List to which the guest will be added. |
| `guest_id` | string | Yes | The unique identifier of the guest user to be added to the List. |
| `include_shared` | boolean | No | A boolean indicating whether to include details of items shared with the guest in the response. Set to `false` to exclude these details. If not provided or set to `true` (the API default), shared item details are included. |
| `permission_level` | string | Yes | The permission level to be granted to the guest on this List. Accepted values are: `read` (view-only), `comment` (can add comments), `edit` (can edit existing items), or `create` (full access, including creating new items). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add guest to task

**Slug:** `CLICKUP_ADD_GUEST_TO_TASK`

Assigns a guest to a task with specified permissions; requires ClickUp Enterprise Plan, and `team_id` if `custom_task_ids` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task to which the guest will be added. |
| `team_id` | string | No | Required if `custom_task_ids` is `true` to correctly identify the task when using a custom task ID. |
| `guest_id` | string | Yes | The unique identifier of the guest user to be added to the task. |
| `include_shared` | boolean | No | Optional. If set to `false`, details of items already shared with the guest will be excluded. The API defaults to `true` if this parameter is not explicitly set to `false`. |
| `custom_task_ids` | boolean | No | Optional. Set to `true` if you are referencing the task by its custom task ID. If `true`, `team_id` must also be provided. |
| `permission_level` | string | Yes | Permission level for the guest on this task. Must be one of: `read` (view only), `comment` (view and comment), `edit` (view, comment, and edit), or `create` (full permissions). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add tags from time entries

**Slug:** `CLICKUP_ADD_TAGS_TO_TIME_ENTRIES`

Associates a list of specified tags with one or more time entries within a given Team (Workspace).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | A list of tag objects to add to the time entries. Each object should define the tag, typically including a 'name', and optionally 'tag_fg' (foreground color hex code) and 'tag_bg' (background color hex code). |
| `team_id` | integer | Yes | The ID of the Team (Workspace) where the time entries are located. |
| `time_entry_ids` | array | Yes | A list of unique string identifiers for the time entries to which the tags will be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add tag to task

**Slug:** `CLICKUP_ADD_TAG_TO_TASK`

Adds an existing tag to a specified task; team_id is required if custom_task_ids is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task to which the tag will be added. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`. |
| `team_id` | integer | No | The ID of the team (formerly Workspace) to which the task belongs. This is required only if `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=123`. |
| `tag_name` | string | Yes | The name of the tag to add to the task. The tag must already exist in the workspace. |
| `custom_task_ids` | boolean | No | A boolean flag indicating whether the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add task link

**Slug:** `CLICKUP_ADD_TASK_LINK`

Links two existing and accessible ClickUp tasks, identified by `task_id` (source) and `links_to` (target).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the source task. |
| `team_id` | integer | No | The ID of the team, used when `custom_task_ids` is true to identify tasks by custom IDs. For example: `custom_task_ids=true&team_id=123`. |
| `links_to` | string | Yes | The ID of the target task. |
| `custom_task_ids` | boolean | No | Set to `true` to indicate that `task_id` and `links_to` are custom task IDs rather than standard numerical IDs. If `true`, `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add task to list

**Slug:** `CLICKUP_ADD_TASK_TO_LIST`

Adds an existing task to an additional ClickUp List; the "Tasks in Multiple Lists" ClickApp must be enabled in the Workspace for this.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | integer | Yes | Unique identifier of the List to which the task will be added. |
| `task_id` | string | Yes | Unique identifier of the task to add to the List (actual task ID, not Custom Task ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task attachment

**Slug:** `CLICKUP_ATTACHMENTS_UPLOAD_FILE_TO_TASK_AS_ATTACHMENT`

DEPRECATED: Use `create_task_attachment` to upload a file to a task; requires `multipart/form-data`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task to which the attachment will be added. |
| `team_id` | string | No | The ID of the team. This is required and used only if `custom_task_ids` is `true` to help locate the task by its custom ID. For example: `custom_task_ids=true&team_id=123`. |
| `attachment` | object | Yes | The file to be uploaded as an attachment. Note: Files stored in the cloud (URLs) cannot be used - actual file content must be provided. |
| `custom_task_ids` | boolean | No | If `true`, indicates that `task_id` should be interpreted as a custom task ID instead of the default ClickUp task ID. If this is `true`, `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get authorized teams workspaces

**Slug:** `CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST`

DEPRECATED: Use `get_authorized_teams_workspaces` instead to retrieve Workspaces (Teams) accessible to the authenticated user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Doc Page

**Slug:** `CLICKUP_CLICK_UP_UPDATE_DOC_PAGE`

Tool to update/edit a ClickUp Doc page's title and/or content via the v3 Docs API. Use when you need to modify a Doc page's name or content programmatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new title/name for the page. If not provided, the page name will not be changed. |
| `doc_id` | string | Yes | The unique identifier for the document containing the page. |
| `content` | string | No | The new content for the page in markdown format. If not provided, the page content will not be changed. Use this field to update, replace, or append to the page content. |
| `page_id` | string | Yes | The unique identifier for the page to update. |
| `workspace_id` | string | Yes | The workspace ID containing the document. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a time entry

**Slug:** `CLICKUP_CREATE_A_TIME_ENTRY`

Creates a new time entry for a specified team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | No | Alias for `stop`. The end time of the time entry, as a Unix timestamp in milliseconds. If both `start` and `end` are provided, the API will use these to determine the entry's actual duration, potentially overriding the `duration` field sent in the request. |
| `tid` | string | No | The ID of the task to associate this time entry with. If `custom_task_ids` is `true`, this should be the custom task ID. |
| `stop` | integer | No | The stop time of the time entry, as a Unix timestamp in milliseconds. If both `start` and `stop` are provided, the API will use these to determine the entry's actual duration, potentially overriding the `duration` field sent in the request. |
| `tags` | array | No | An array of Tag objects to apply to the time entry. Each Tag object should define 'name' (string), 'tag_fg' (hex color string for foreground), and 'tag_bg' (hex color string for background). This feature is available for users on the ClickUp Business Plan and above. |
| `start` | integer | Yes | The start time of the time entry, as a Unix timestamp in milliseconds. |
| `team_Id` | string | Yes | The Workspace ID (also called Team ID in ClickUp API) where the time entry will be added. This goes in the URL path. |
| `team_id` | string | No | The ID of the Team, required only if `custom_task_ids` is set to `true`. This specifies the team context for the custom task ID. Example: `custom_task_ids=true&team_id=123`. |
| `assignee` | integer | No | The user ID of the person to assign this time entry to. Workspace owners and admins can assign to any user ID. Workspace members can only assign to their own user ID. |
| `billable` | boolean | No | Indicates whether the time entry is billable. Set to `true` if billable, `false` or omit if not. |
| `duration` | integer | Yes | The duration of the time entry in milliseconds. Note: If `start` and `end` (or `stop`) times are also provided in the request, the ClickUp API will calculate the duration based on `start` and `end`/`stop`, and this `duration` field's value might be ignored or overridden by the server. |
| `description` | string | No | An optional description for the time entry. |
| `custom_task_ids` | boolean | No | If `true`, the `tid` parameter will be interpreted as a custom task ID. If this is `true`, the `team_id` query parameter must also be provided to specify the team context for the custom task ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create chat channel

**Slug:** `CLICKUP_CREATE_CHAT_CHANNEL`

Tool to create a chat channel in a ClickUp workspace. Use when you need to set up a new communication channel for team collaboration with configurable visibility.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the chat channel being created. |
| `topic` | string | No | The topic of the chat channel being created. |
| `user_ids` | array | No | Optionally specify unique user IDs to add to the channel, up to 100. |
| `visibility` | string ("PUBLIC" | "PRIVATE") | No | Visibility level for the chat channel. |
| `description` | string | No | The description for the chat channel being created. |
| `workspace_id` | integer | Yes | The ID of the Workspace where the chat channel will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create chat message

**Slug:** `CLICKUP_CREATE_CHAT_MESSAGE`

Tool to send a message in a ClickUp chat channel. Use when you need to post messages to team chat channels. Supports both regular messages and structured posts with optional assignments, followers, and reactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("message" | "post") | Yes | The type of message: 'message' for regular text messages, 'post' for structured posts. |
| `content` | string | Yes | The full content of the message to be created. Supports markdown formatting. |
| `assignee` | string | No | The user ID of the person to assign this message to. |
| `followers` | array | No | List of user IDs to follow this message (max 10). |
| `post_data` | object | No | Data for post-type messages. |
| `reactions` | array | No | Reactions to add to the message at creation time (max 10). |
| `channel_id` | string | Yes | The ID of the Channel where the message will be sent. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `content_format` | string ("text/md" | "text/plain") | No | Format of the message content. |
| `group_assignee` | string | No | The group ID to assign this message to. |
| `triaged_action` | integer | No | The triaged action applied to the message: 1 or 2. |
| `triaged_object_id` | string | No | The message triaged action object ID. |
| `triaged_object_type` | integer | No | The message triaged action object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create chat reaction

**Slug:** `CLICKUP_CREATE_CHAT_REACTION`

Tool to add a reaction to a ClickUp chat message. Use when you need to react to a message with an emoji.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reaction` | string | Yes | The emoji reaction to add, in shortcode format (e.g., '+1', '-1', 'thumbsup', 'heart', 'smile'). Use GitHub-style shortcodes without colons. |
| `message_id` | string | Yes | The ID of the chat message to react to. |
| `workspace_id` | integer | Yes | The ID of the Workspace containing the chat message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create chat view comment

**Slug:** `CLICKUP_CREATE_CHAT_VIEW_COMMENT`

Posts a new comment to a specified ClickUp Chat view; the 'view_id' must correspond to an existing and accessible Chat view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | The unique identifier of the Chat view where the comment will be posted. |
| `notify_all` | boolean | Yes | If `True`, notifications for this comment will be sent to all members of the Chat view, including the comment creator. If `False`, notifications will follow standard ClickUp behavior. |
| `comment_text` | string | Yes | The text content of the comment to be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create checklist

**Slug:** `CLICKUP_CREATE_CHECKLIST`

Creates a new checklist with a specified name within an existing task, which can be identified by its standard ID or a custom task ID (if `custom_task_ids` is true, `team_id` is also required).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new checklist. |
| `task_id` | string | Yes | Unique identifier of the task for the new checklist; can be a standard or custom task ID (if `custom_task_ids` is true). |
| `team_id` | string | No | Team's unique identifier; required only if `custom_task_ids` is true. |
| `custom_task_ids` | boolean | No | If true, `task_id` is treated as a custom task ID, requiring `team_id`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create checklist item

**Slug:** `CLICKUP_CREATE_CHECKLIST_ITEM`

Creates a new checklist item within a specified, existing checklist, optionally setting the item's name and assigning it to a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new checklist item. |
| `assignee` | integer | No | User ID of the ClickUp user to whom this item will be assigned. If omitted, the item will be unassigned. |
| `checklist_id` | string | Yes | UUID of the parent checklist where the new item will be created; this checklist must already exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create direct message channel

**Slug:** `CLICKUP_CREATE_DIRECT_MESSAGE_CHANNEL`

Tool to create a direct message channel in ClickUp. Use when you need to start a direct message conversation with up to 15 users. A Self DM is created when no user IDs are provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | No | The unique user IDs of participants in the direct message chat, up to 15. A Self DM is created when no user IDs are provided. |
| `workspace_id` | integer | Yes | The ID of the Workspace where the direct message channel will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Doc

**Slug:** `CLICKUP_CREATE_DOC`

Tool to create a new ClickUp Doc in a Workspace (v3 Docs API) and return the new doc_id for follow-up page/content operations. Use when you need to create a new document in ClickUp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name/title for the new document. |
| `parent_id` | string | No | Optional parent location ID (space, folder, or list ID) where the doc should be created. If omitted, the doc will be created at the workspace level. |
| `parent_type` | string ("space" | "folder" | "list") | No | Type of parent location. Required if parent_id is provided. Must be 'space', 'folder', or 'list'. |
| `workspace_id` | string | Yes | The workspace ID where the document will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Doc Page

**Slug:** `CLICKUP_CREATE_DOC_PAGE`

Tool to create a page in a ClickUp Doc (v3 Docs API). Use when you need to add a new page to an existing document, either as a root page or as a sub-page under a parent page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the new page. If not provided, page will be created with an empty name. |
| `doc_id` | string | Yes | The ID of the doc in format '{alphanumeric_prefix}-{number}' (e.g., '2kz0k9bp-1096'). To get a valid doc_id, use CLICKUP_CLICK_UP_SEARCH_DOCS or extract from a ClickUp Doc URL. |
| `content` | string | No | The content of the new page. Supports markdown or plain text based on content_format. |
| `sub_title` | string | No | The subtitle of the new page. |
| `workspace_id` | integer | Yes | The ID of the Workspace. Obtain this from the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST or CLICKUP_CLICK_UP_SEARCH_DOCS action. |
| `content_format` | string ("text/md" | "text/plain") | No | The format the page content is in. Defaults to 'text/md' for markdown. |
| `parent_page_id` | string | No | The ID of the parent page. If provided, the new page will be created as a sub-page. If omitted, this will be a root page in the Doc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create folder

**Slug:** `CLICKUP_CREATE_FOLDER`

Creates a new ClickUp Folder within the specified Space, which must exist and be accessible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the Folder to be created. |
| `space_id` | string | Yes | Numerical ID of the Space in which to create the Folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create folderless list

**Slug:** `CLICKUP_CREATE_FOLDERLESS_LIST`

Creates a new folderless list (a list not part of any Folder) directly within a specified ClickUp Space.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new folderless list. |
| `status` | string | No | List color (e.g., 'red', 'blue_blended'), distinct from task statuses within the list. Null for no color. |
| `content` | string | No | Description for the list (plain text or markdown). |
| `assignee` | integer | No | `user_id` of the list owner. Null for no specific owner. |
| `due_date` | integer | No | Due date for the list (POSIX timestamp in milliseconds). |
| `priority` | integer | No | Priority level: `1` (Urgent), `2` (High), `3` (Normal), `4` (Low). Null to remove priority. |
| `space_id` | string | Yes | Identifier of the Space for the new folderless list. |
| `due_date_time` | boolean | No | Indicates if `due_date` includes time (`true`) or is all-day (`false`). Required if `due_date` is set. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create folder view

**Slug:** `CLICKUP_CREATE_FOLDER_VIEW`

Creates a new, highly customizable view within a specific ClickUp folder using its `folder_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new view. |
| `type` | string | Yes | The type of view to create. Options include: `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, or `gantt`.  |
| `folder_id` | string | Yes | Numeric ID of the folder where the new view will be created. |
| `divide__dir` | null | No | This field must be `null` (None). It is intended for specifying sort direction within divided sections, but its configuration is not fully detailed. |
| `filters__op` | string | No | Operator for combining filters. The available operator (`op`) values are `AND` and `OR`. Required when any filter parameter is provided. |
| `divide__field` | null | No | This field must be `null` (None). It is intended for view division features (e.g., swimlanes) whose specific configuration via this parameter is not fully detailed. |
| `grouping__dir` | integer | No | Set a group sort order. Use `1` for ascending (e.g., urgent priority at top of the view, and tasks with no priority at the bottom) or `-1` to reverse the order (e.g., tasks with no priority at the top). Required when any grouping parameter is provided. |
| `columns__fields` | array | No | Array of field objects to display as columns in the view. Each element must be an object. Custom Fields require the `_cf` prefix followed by the Custom Field ID (e.g., `_cf_xxxxxxxx`). |
| `filters__fields` | array | No | Fields to filter by. Each element represents a filter condition. View the list of available fields in ClickUp's API documentation. Required when any filter parameter is provided. |
| `filters__search` | string | No | Text string to search for within tasks, comments, and subtasks in the view. Required when any filter parameter is provided. |
| `grouping__field` | string | No | Field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`. When any grouping parameter is provided, `grouping__field`, `grouping__dir`, `grouping__collapsed`, and `grouping__ignore` are all required. |
| `sorting__fields` | array | No | Fields to sort tasks by. Each element must be an object with 'field' and 'dir' properties. 'dir' should be 1 for ascending or -1 for descending. Refer to ClickUp API for the exact structure. |
| `grouping__ignore` | boolean | No | If `true`, tasks with no value for the `grouping__field` will not be grouped and will appear in a separate 'Ungrouped' section. Required when any grouping parameter is provided. |
| `divide__collapsed` | array | No | Array of identifiers for divided sections to collapse by default, or null if no sections should be collapsed. |
| `grouping__collapsed` | array | No | An array of group identifiers (e.g., status names like 'Open', assignee IDs as strings like '123') that should be initially collapsed in the view. These identifiers depend on the `grouping__field` used. Required when any grouping parameter is provided. |
| `filters__show__closed` | boolean | No | If `true`, tasks with a closed status are included in the view. |
| `settings__me__comments` | boolean | No | In 'Me Mode', if `true`, show only comments where the current user is mentioned or assigned. |
| `settings__me__subtasks` | boolean | No | In 'Me Mode', if `true`, show only subtasks assigned to the current user. |
| `settings__show__images` | boolean | No | If `true`, display task cover images or image attachments. |
| `settings__me__checklists` | boolean | No | In 'Me Mode', if `true`, show only checklists assigned to the current user. |
| `settings__show__subtasks` | integer | No | Controls subtask visibility. Acceptable integer values are `1` (show subtasks as separate tasks), `2` (expand subtasks under parent tasks), or `3` (collapse subtasks under parent tasks).  |
| `team__sidebar__assignees` | array | No | List of user IDs (as strings). Tasks assigned to these users will appear in the 'Assignees' section of the team sidebar. |
| `settings__show__assignees` | boolean | No | If `true`, display task assignees. |
| `settings__show__task__locations` | boolean | No | If `true`, display the List, Folder, and Space location for tasks. When any settings parameter is provided, a complete settings object with all settings keys is required. |
| `settings__show__closed__subtasks` | boolean | No | If `true`, include closed subtasks in the view. |
| `team__sidebar__unassigned__tasks` | boolean | No | If `true`, unassigned tasks will be shown in the team sidebar. |
| `team__sidebar__assigned__comments` | boolean | No | If `true`, comments assigned to users will be shown in the team sidebar. |
| `settings__collapse__empty__columns` | string | No | Specifies whether to collapse columns with no tasks (e.g., in Board view). Common string values are 'true' or 'false'. |
| `settings__show__subtask__parent__names` | boolean | No | If `true`, display parent task names for subtasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create goal

**Slug:** `CLICKUP_CREATE_GOAL`

Creates a new goal in a ClickUp Team (Workspace).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the goal. |
| `color` | string | Yes | Hex color string to associate with the goal. |
| `owners` | array | Yes | List of user IDs to be assigned as owners of the goal. |
| `team_id` | string | Yes | Numeric ID of the ClickUp Team (Workspace) where the goal will be created. |
| `due_date` | integer | Yes | Due date for the goal, as a Unix timestamp in milliseconds. |
| `description` | string | Yes | Detailed description for the goal. |
| `multiple_owners` | boolean | Yes | Set to `true` if the goal will have multiple owners; `false` for a single owner. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create key result

**Slug:** `CLICKUP_CREATE_KEY_RESULT`

Creates a new Key Result (Target) for a specified Goal in ClickUp to define and track measurable objectives towards achieving that Goal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the new Key Result. |
| `type` | string | Yes | Specifies the type of the Key Result, which determines how progress is tracked. Supported types: 'number', 'currency', 'boolean', 'percentage', 'automatic'. |
| `unit` | string | Yes | The unit of measurement for Key Results of type 'number', 'currency', or 'percentage' (e.g., '$', '%', 'items'). This may not be applicable for 'boolean' or 'automatic' types where progress is count-based. |
| `owners` | array | Yes | A list of numerical user IDs to be assigned as owners of this Key Result. |
| `goal_id` | string | Yes | The unique identifier (UUID) of the parent Goal for which this Key Result is being created. |
| `list_ids` | array | Yes | An array of List UUIDs to link to this Key Result. Can be used with 'automatic' type Key Results to track progress based on tasks within these lists. |
| `task_ids` | array | Yes | An array of task UUIDs to link to this Key Result. Often used when `type` is 'automatic' to track progress via the completion status of these linked tasks. |
| `steps_end` | integer | Yes | The target value indicating Key Result completion. For 'boolean' type, use 1 for true/complete. For 'automatic' type, this is often the total count of items to complete (e.g., number of linked tasks). |
| `steps_start` | integer | Yes | The initial value for tracking Key Result progress. For 'boolean' type, use 0 for false/incomplete, 1 for true/complete. For 'automatic' type, this is often the initial count (e.g., 0). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create list

**Slug:** `CLICKUP_CREATE_LIST`

Creates a new list in ClickUp within an existing folder. This action requires a folder_id - lists cannot be created directly in a Space using this action. If you need to create a list directly in a Space (without placing it in a folder), use the 'CLICKUP_CREATE_FOLDERLESS_LIST' action with space_id instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name to be assigned to the new list. |
| `status` | string | No | Optional. Defines the list's color in the ClickUp UI (e.g., 'red', 'blue'). **Important:** This 'status' refers to the visual color of the list itself, not the workflow statuses (like 'To Do', 'In Progress') of tasks within the list. |
| `content` | string | No | Optional descriptive content or notes for the list. |
| `assignee` | integer | No | Optional. Numerical user ID of the assignee. |
| `due_date` | integer | No | Optional due date for the list, represented as a POSIX timestamp in milliseconds. For example, `1695110307000` for September 19, 2023, 07:58:27 AM GMT. |
| `priority` | integer | No | Optional priority level for the list. Integer values map to: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low). |
| `folder_id` | string | Yes | The unique numerical identifier of the folder where the new list will be created. Note: This action creates a list within an existing folder. A folder_id is required and space_id cannot be used. If you want to create a list directly in a Space (without a folder), use the 'CLICKUP_CREATE_FOLDERLESS_LIST' action instead. |
| `due_date_time` | boolean | No | Optional. A boolean flag indicating whether the `due_date` includes a specific time. If `True`, the time component of `due_date` is respected. If `False` or not provided, the list is considered due on the entire day specified by `due_date`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create list comment

**Slug:** `CLICKUP_CREATE_LIST_COMMENT`

Adds a new comment with specific text to an existing and accessible ClickUp List, assigns it to a user, and sets notification preferences for all list members.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Unique identifier of the ClickUp list where the comment will be posted. |
| `assignee` | integer | No | User ID to assign this comment to, converting it into an actionable item. If omitted, creates an unassigned comment. |
| `notify_all` | boolean | No | If true, notifications are sent to everyone including the creator. If false or omitted, default notification rules apply. |
| `comment_text` | string | Yes | Text content of the comment. Supports ClickUp formatting (mentions, markdown). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create list from template in folder

**Slug:** `CLICKUP_CREATE_LIST_FROM_TEMPLATE`

Creates a new list from a template in a specified ClickUp folder. Use this when you need to instantiate a list based on an existing template within a folder structure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new list created from the template. |
| `folder_id` | integer | Yes | The ID of the folder where the list will be created. |
| `template_id` | string | Yes | The ID of the template to use for creating the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create list view

**Slug:** `CLICKUP_CREATE_LIST_VIEW`

Creates a new, customizable view (e.g., list, board, calendar) within a specified ClickUp List, requiring an existing list_id accessible by the user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new view. |
| `type` | string | Yes | View type (e.g., `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, `gantt`). |
| `list_id` | string | Yes | Numeric ID of the List where the new view will be created. |
| `divide__dir` | integer | No | Direction for secondary grouping: `1` for ascending, `-1` for descending. |
| `filters__op` | string | No | Logical operator for combining filters: `AND` for all conditions, `OR` for any condition. |
| `divide__field` | string | No | Field for secondary grouping (dividing tasks within primary groups). |
| `grouping__dir` | integer | No | Group sort order: `1` for ascending (e.g., urgent priority top), `-1` for descending (e.g., no priority top). |
| `columns__fields` | array | No | Array of column field objects. Each object must have 'field' (e.g., 'name', 'status', 'assignee', 'dueDate', or '_cf_FIELD_ID' for Custom Fields). |
| `filters__fields` | array | No | Array of filter field objects. Each object must have 'field' (e.g., 'assignee', 'status', 'priority', 'tags'), 'op' (e.g., 'EQ', 'NOT', 'IN', 'ANY'), and 'values' (array of filter values). Required when any filter parameter is provided. |
| `filters__search` | string | No | Search string to filter tasks by name or content. |
| `grouping__field` | string | No | Field for grouping tasks (e.g., `none`, `status`, `priority`, `assignee`, `tag`, `dueDate`). |
| `sorting__fields` | array | No | Array of sort field objects. Each object must have 'field' (e.g., 'dateCreated', 'name', 'dueDate', 'priority') and optionally 'dir' (1 for ascending, -1 for descending). |
| `grouping__ignore` | boolean | No | If `true`, hides tasks not falling into any specified group. |
| `divide__collapsed` | array | No | Array of identifiers for divided sections to collapse by default, or null if no sections should be collapsed. |
| `grouping__collapsed` | array | No | List of group identifiers (e.g., status names, assignee IDs) to collapse by default. |
| `filters__show__closed` | boolean | No | If `true`, includes closed tasks in the view. |
| `settings__me__comments` | boolean | No | If `true`, enables 'Me Mode' for comments, filtering to tasks where the current user is involved in comments. |
| `settings__me__subtasks` | boolean | No | If `true`, enables 'Me Mode' for subtasks, filtering to subtasks assigned to the current user. |
| `settings__show__images` | boolean | No | If `true`, displays cover images or image attachments for tasks. |
| `settings__me__checklists` | boolean | No | If `true`, enables 'Me Mode' for checklists, filtering to tasks with checklists assigned to the current user. |
| `settings__show__subtasks` | integer | No | Subtask visibility: `1` (separate tasks), `2` (expanded under parent), `3` (collapsed under parent). |
| `team__sidebar__assignees` | array | No | List of user IDs for quick assignee filtering in the team sidebar. |
| `settings__show__assignees` | boolean | No | If `true`, shows assignees' avatars or names on tasks. |
| `settings__show__task__locations` | boolean | No | If `true`, displays task's location (e.g., List, Folder, Space) in the view. |
| `settings__show__closed__subtasks` | boolean | No | If `true`, displays closed subtasks in the view. |
| `team__sidebar__unassigned__tasks` | boolean | No | If `true`, team sidebar includes filter for unassigned tasks. |
| `team__sidebar__assigned__comments` | boolean | No | If `true`, team sidebar includes filter for tasks with assigned comments. |
| `settings__collapse__empty__columns` | string | No | Controls collapsing of empty columns. Values like 'true', 'false', or specific keywords (see ClickUp API). |
| `settings__show__subtask__parent__names` | boolean | No | If `true`, displays parent task names alongside subtasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Location Chat Channel

**Slug:** `CLICKUP_CREATE_LOCATION_CHAT_CHANNEL`

Tool to create a Channel on a Space, Folder, or List in ClickUp. Use when you need to create a location-based chat channel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | No | The topic/name of the chat channel being created. |
| `location` | object | Yes | The location (space, folder, or list) where the channel will be created. |
| `user_ids` | array | No | Optionally specify unique user IDs to add to the channel, up to 100. |
| `visibility` | string ("PUBLIC" | "PRIVATE") | No | Visibility setting for the chat channel. |
| `description` | string | No | The description for the chat channel being created. |
| `workspace_id` | string | Yes | The ID of the Workspace where the channel will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create reply message

**Slug:** `CLICKUP_CREATE_REPLY_MESSAGE`

Tool to create a reply to a chat message in ClickUp. Use when replying to an existing chat message. Requires workspace_id, message_id, type, and content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("message" | "post") | Yes | The type of message. |
| `content` | string | Yes | The full content of the message to be created. |
| `assignee` | string | No | The possible assignee of the message. |
| `followers` | array | No | The ids of the followers of the message. |
| `post_data` | object | No | Data for post-type messages. |
| `reactions` | array | No | The reactions to the message that exist at creation time. |
| `message_id` | string | Yes | The ID of the specified message to reply to. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `content_format` | string ("text/md" | "text/plain") | No | Format of the message content. |
| `group_assignee` | string | No | The possible group assignee of the message. |
| `triaged_action` | integer | No | The triaged action applied to the message. 1 or 2. |
| `triaged_object_id` | string | No | The message triaged action object id. |
| `triaged_object_type` | integer | No | The message triaged action object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create space

**Slug:** `CLICKUP_CREATE_SPACE`

Creates a new ClickUp Space within a specified Workspace, allowing feature configuration which defaults to Workspace settings if unspecified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new Space. |
| `team_id` | string | Yes | Numeric ID of the Workspace (Team) for the new Space. |
| `multiple_assignees` | boolean | Yes | Enable/disable multiple assignees for tasks in this Space. |
| `features__tags__enabled` | boolean | No | Enable/disable Tags. Defaults to Workspace setting if `None`. |
| `features__checklists__enabled` | boolean | No | Enable/disable Checklists. Defaults to Workspace setting if `None`. |
| `features__due__dates__enabled` | boolean | No | Enable/disable Due Dates. Defaults to Workspace setting if `None`. |
| `features__portfolios__enabled` | boolean | No | Enable/disable Portfolios. Defaults to Workspace setting if `None`. |
| `features__custom__fields__enabled` | boolean | No | Enable/disable Custom Fields. Defaults to Workspace setting if `None`. |
| `features__due__dates__start__date` | boolean | No | Enable/disable Start Date for Due Dates (if Due Dates enabled). Defaults to Workspace setting if `None`. |
| `features__time__tracking__enabled` | boolean | No | Enable/disable Time Tracking. Defaults to Workspace setting if `None`. |
| `features__time__estimates__enabled` | boolean | No | Enable/disable Time Estimates. Defaults to Workspace setting if `None`. |
| `features__dependency__warning__enabled` | boolean | No | Enable/disable Dependency Warning (shows conflict warnings). Defaults to Workspace setting if `None`. |
| `features__remap__dependencies__enabled` | boolean | No | Enable/disable Remap Dependencies (auto-adjusts task dates). Defaults to Workspace setting if `None`. |
| `features__due__dates__remap__due__dates` | boolean | No | Enable/disable subtask due date remapping (if Due Dates enabled). Defaults to Workspace setting if `None`. |
| `features__due__dates__remap__closed__due__date` | boolean | No | Enable/disable closed subtask due date remapping (if Due Dates & subtask remapping enabled). Defaults to Workspace setting if `None`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create space tag

**Slug:** `CLICKUP_CREATE_SPACE_TAG`

Creates a new tag (name, foreground color, background color) in an existing ClickUp Space.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Numeric ID of the Space to create the tag in. |
| `tag__name` | string | Yes | Name for the new tag. This parameter maps to the nested `tag.name` field in the API request. |
| `tag__tag_bg` | string | Yes | Hexadecimal background color for the tag. This parameter maps to the nested `tag.tag_bg` field in the API request. |
| `tag__tag_fg` | string | Yes | Hexadecimal foreground (text) color for the tag. This parameter maps to the nested `tag.tag_fg` field in the API request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create space view

**Slug:** `CLICKUP_CREATE_SPACE_VIEW`

Creates a customizable view (e.g., List, Board, Gantt) within a specified ClickUp Space, allowing configuration of grouping, sorting, filtering, and display settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the new view. |
| `type` | string | Yes | The type of view to create. Valid options include: `list`, `board`, `calendar`, `table`, `timeline`, `workload`, `activity`, `map`, `conversation`, or `gantt`. |
| `space_id` | string | Yes | The unique identifier of the Space where the new view will be created. |
| `divide__dir` | null | No | Sort order for divided sections. Must be `None` if included, as sort direction for divisions may not be applicable here. |
| `filters__op` | string | No | Logical operator (`AND` or `OR`) for combining filters. When ANY filter parameter is provided, ALL filter fields (op, fields, search, show_closed) are required. Defaults to 'AND' if not specified when other filter fields are present. |
| `divide__field` | null | No | Field to divide tasks by. Must be `None` if included, as division by field may not be applicable for Space views via this action. |
| `grouping__dir` | integer | No | Group sort order: `1` for ascending, `-1` for descending. Required when any grouping parameter is provided. |
| `columns__fields` | array | No | Field identifiers for columns. Use standard field names (e.g., 'status') or Custom Field IDs with `_cf` prefix (e.g., 'ID_cf'). |
| `filters__fields` | array | No | Fields to apply filters on. When ANY filter parameter is provided, ALL filter fields (op, fields, search, show_closed) are required. Defaults to empty array if not specified when other filter fields are present. Refer to ClickUp API documentation for available filterable fields and their syntax. |
| `filters__search` | string | No | A search string to filter tasks by keywords or specific criteria within the view. When ANY filter parameter is provided, ALL filter fields (op, fields, search, show_closed) are required. Defaults to empty string if not specified when other filter fields are present. |
| `grouping__field` | string | No | The field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`. When any grouping parameter is provided, `grouping__field`, `grouping__dir`, `grouping__collapsed`, and `grouping__ignore` are all required. |
| `sorting__fields` | array | No | Fields to sort tasks by (e.g., `dueDate`, `priority`). Refer to ClickUp API documentation for a complete list of sortable fields. |
| `grouping__ignore` | boolean | No | If `True`, tasks not matching grouping criteria are hidden; otherwise, they are shown in a default group. Required when any grouping parameter is provided. |
| `divide__collapsed` | array | No | Array of identifiers for divided sections to collapse by default, or null if no sections should be collapsed. |
| `grouping__collapsed` | array | No | A list of string identifiers for groups that should be collapsed by default (e.g., status names like 'Closed', or assignee user IDs if grouping by assignee). Required when any grouping parameter is provided. |
| `filters__show__closed` | boolean | No | If `True`, closed tasks are included in the view. When ANY filter parameter is provided, ALL filter fields (op, fields, search, show_closed) are required. Defaults to false if not specified when other filter fields are present. |
| `settings__me__comments` | boolean | No | If `True`, in 'Me Mode', this setting filters for or highlights tasks where the current user has made comments. When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |
| `settings__me__subtasks` | boolean | No | If `True`, in 'Me Mode', this setting filters for or highlights subtasks assigned to the current user. When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |
| `settings__show__images` | boolean | No | If `True`, displays cover images or image attachments directly on task cards in the view. When ANY settings parameter is provided, ALL settings fields are required. Defaults to true if not specified when other settings fields are present. |
| `settings__me__checklists` | boolean | No | If `True`, in 'Me Mode', this setting filters for or highlights tasks with checklist items assigned to the current user. When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |
| `settings__show__subtasks` | integer | No | How subtasks are displayed: `1` (show as separate tasks), `2` (show expanded under parent task), or `3` (show collapsed under parent task). When ANY settings parameter is provided, ALL settings fields are required. Defaults to 1 if not specified when other settings fields are present. |
| `team__sidebar__assignees` | array | No | A list of user IDs (as strings) to filter by in the team sidebar. |
| `settings__show__assignees` | boolean | No | If `True`, displays task assignees in the view (e.g., on task cards). When ANY settings parameter is provided, ALL settings fields are required. Defaults to true if not specified when other settings fields are present. |
| `settings__show__task__locations` | boolean | No | If `True`, displays the task's location (List, Folder, Space). When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |
| `settings__show__closed__subtasks` | boolean | No | If `True`, includes closed subtasks in the view according to other filter criteria. When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |
| `team__sidebar__unassigned__tasks` | boolean | No | If `True`, shows unassigned tasks in the team sidebar. |
| `team__sidebar__assigned__comments` | boolean | No | If `True`, shows tasks with comments assigned to the current user in the team sidebar. |
| `settings__collapse__empty__columns` | string | No | If 'true', collapses empty columns (e.g., status columns with no tasks). Use string 'true' or 'false'. When ANY settings parameter is provided, ALL settings fields are required. Defaults to 'false' if not specified when other settings fields are present. |
| `settings__show__subtask__parent__names` | boolean | No | If `True`, displays the parent task name next to subtasks for clarity. When ANY settings parameter is provided, ALL settings fields are required. Defaults to false if not specified when other settings fields are present. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a task

**Slug:** `CLICKUP_CREATE_TASK`

Creates a new ClickUp task in a specific list, optionally as a subtask if a `parent` task ID (which cannot be a subtask itself and must be in the same list) is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the new task. |
| `tags` | array | No | Tag names to apply. |
| `parent` | string | No | ID of an existing task to be the parent (creating a subtask). Parent must not be a subtask and must be in the same list. |
| `status` | string | No | Status name for the task. IMPORTANT: Each ClickUp list has its own unique status configuration. Common names like 'todo', 'done', or 'in progress' often do NOT exist - you must use the exact status names (case-sensitive) configured in the target list. To get valid statuses, call GET /list/{list_id} and check the 'statuses' array in the response for available status names. If omitted, uses the list's default status (recommended when valid statuses are unknown). |
| `list_id` | string | Yes | The ID of the list where the task will be created. |
| `team_id` | string | No | Team ID, required only if `custom_task_ids` is `true`. |
| `due_date` | integer | No | Due date as a Unix timestamp in milliseconds. |
| `links_to` | string | No | ID of an existing task to link as a dependency. |
| `priority` | integer | No | Priority level: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low). |
| `assignees` | array | No | User IDs to assign to the task. |
| `notify_all` | boolean | No | `True` to send notifications to all task watchers, including the creator. |
| `start_date` | integer | No | Start date as a Unix timestamp in milliseconds. |
| `description` | string | No | Task's detailed description. |
| `custom_fields` | array | No | Custom fields to apply. See ClickUp API for structure. |
| `due_date_time` | boolean | No | `True` if `due_date` includes a specific time, `false` if it's an all-day task. |
| `time_estimate` | integer | No | Estimated time to complete, in milliseconds. |
| `custom_item_id` | integer | No | Custom task type ID. Omit or use `null` for standard tasks (recommended). Custom task types including Milestones (ID `1`) are subject to workspace plan quotas. Only specify a custom_item_id if you have confirmed the workspace has available quota for that task type. Use GET /team/{team_id}/custom_item to check available custom task types and their quotas. |
| `custom_task_ids` | boolean | No | Enables referencing tasks by custom task ID; requires `team_id` if `true`. |
| `start_date_time` | boolean | No | `True` if `start_date` includes a specific time, `false` if it's an all-day task. |
| `check_required_custom_fields` | boolean | No | `True` to enforce filling all required Custom Fields upon creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task attachment

**Slug:** `CLICKUP_CREATE_TASK_ATTACHMENT`

Uploads a file as an attachment to a specified ClickUp task using multipart/form-data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task to which the attachment will be added. |
| `team_id` | string | No | The ID of the team. This is required and used only if `custom_task_ids` is `true` to help locate the task by its custom ID. For example: `custom_task_ids=true&team_id=123`. |
| `attachment` | object | Yes | The file to be uploaded as an attachment. Note: Files stored in the cloud (URLs) cannot be used - actual file content must be provided. |
| `custom_task_ids` | boolean | No | If `true`, indicates that `task_id` should be interpreted as a custom task ID instead of the default ClickUp task ID. If this is `true`, `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task comment

**Slug:** `CLICKUP_CREATE_TASK_COMMENT`

Adds a comment to a ClickUp task; `team_id` is required if `custom_task_ids` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Unique task identifier for the comment. Can be standard or custom if `custom_task_ids` is true. |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true to locate the task by its custom ID. |
| `assignee` | integer | Yes | The user ID of the person to whom this specific comment should be assigned or mentioned. This assigns the comment, not the task. |
| `notify_all` | boolean | Yes | If `true`, notifications for this comment will be sent to all users watching the task, including the comment's creator. If `false`, notifications will be sent according to standard ClickUp notification rules (e.g., to mentioned users, comment assignee). |
| `comment_text` | string | Yes | The text content for the comment. Supports ClickUp's comment formatting (e.g., mentions, markdown). |
| `custom_task_ids` | boolean | No | Set to `true` to indicate that the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task from template

**Slug:** `CLICKUP_CREATE_TASK_FROM_TEMPLATE`

Creates a new task in a specified ClickUp list from a task template, using the provided name for the new task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new task created from the template. |
| `list_id` | string | Yes | Numeric ID of the ClickUp list for task creation, found in the list's URL. |
| `template_id` | string | Yes | Unique string ID of the task template to use. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create team

**Slug:** `CLICKUP_CREATE_TEAM`

Creates a new team (user group) with specified members in a Workspace; member IDs must be for existing users, and be aware that adding view-only guests as paid members may incur extra charges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new team (user group). |
| `members` | array | Yes | User IDs to be initial members of the new team (user group). |
| `team_id` | string | Yes | Workspace ID where the team (user group) will be created (this is referred to as 'Team ID' in the ClickUp API). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create threaded comment

**Slug:** `CLICKUP_CREATE_THREADED_COMMENT`

Tool to create a threaded reply to a comment in ClickUp. Use when you need to respond to an existing comment with context.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | integer | No | The user ID of the person to assign this reply to. |
| `comment_id` | string | Yes | The ID of the parent comment to reply to. |
| `notify_all` | boolean | Yes | If true, notifications for this reply will be sent to all users watching the parent comment or task. If false, notifications will be sent according to standard ClickUp notification rules. |
| `comment_text` | string | Yes | The text content of the reply. Supports ClickUp's comment formatting (e.g., mentions, markdown). |
| `group_assignee` | string | No | The group ID to assign this reply to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create webhook

**Slug:** `CLICKUP_CREATE_WEBHOOK`

Creates a ClickUp webhook for a Team (Workspace) to notify a public URL on specified events (at least one, or '*' for all), optionally scoped to a Space, Folder, List, or Task; the endpoint must accept requests from dynamic IPs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `events` | array | Yes | Event types to subscribe to; use '*' for all events on the resource. Examples: 'taskCreated', 'taskUpdated'. |
| `list_id` | string | No | Optional. ID of the List to scope the webhook; triggers only for events in this List. |
| `task_id` | string | No | Optional. ID of the Task to scope the webhook; triggers only for events for this Task. |
| `team_id` | string | Yes | ID of the Team (Workspace) for the webhook. |
| `endpoint` | string | Yes | Publicly accessible URL for ClickUp to send POST notifications for subscribed events. |
| `space_id` | string | No | Optional. ID of the Space to scope the webhook; triggers only for events in this Space. |
| `folder_id` | string | No | Optional. ID of the Folder to scope the webhook; triggers only for events in this Folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create workspace Everything level view

**Slug:** `CLICKUP_CREATE_WORKSPACE_EVERYTHING_LEVEL_VIEW`

Creates a new, customizable view (e.g., List, Board) at the 'Everything' level for a specified Team (Workspace ID), encompassing all tasks within that Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new view. |
| `type` | string | Yes | Type of view to create (e.g., list, board, calendar). |
| `team_id` | string | Yes | Team (Workspace) ID where the 'Everything' level view will be created. |
| `divide__dir` | null | No | Sort direction for divided sections: `1` for ascending, `-1` for descending. |
| `filters__op` | string | No | Logical operator for combining filters (`AND` or `OR`). |
| `divide__field` | null | No | Field to divide the view by, creating separate sections (e.g., 'priority', 'status'). |
| `grouping__dir` | integer | No | Sort order for grouped tasks: `1` for ascending, `-1` for descending. |
| `columns__fields` | array | No | Columns to display and their order. Prefix Custom Fields with `_cf`. For specific configurations, use a JSON object string. |
| `filters__fields` | array | No | Fields to apply filters on. See ClickUp API docs for filterable fields. |
| `filters__search` | string | No | Search term to filter tasks by name, description, etc. |
| `grouping__field` | string | No | Field to group tasks by (e.g., status, priority). |
| `sorting__fields` | array | No | Fields to sort tasks by. See ClickUp API docs for sortable fields. |
| `grouping__ignore` | boolean | No | If true, tasks in closed statuses are excluded from grouping. |
| `divide__collapsed` | array | No | List of division identifiers to be collapsed by default. Must be an array (e.g., []) or null, not a boolean. |
| `grouping__collapsed` | array | No | List of group identifiers (e.g., status names, assignee IDs) to be collapsed by default. |
| `filters__show__closed` | boolean | No | If true, include tasks with 'Closed' status in the view. |
| `settings__me__comments` | boolean | No | If true, 'Me Mode' filters for tasks commented on by the current user. |
| `settings__me__subtasks` | boolean | No | If true, 'Me Mode' filters for subtasks assigned to the current user. |
| `settings__show__images` | boolean | No | If true, show task cover images or attachment previews. |
| `settings__me__checklists` | boolean | No | If true, 'Me Mode' filters for tasks where current user is assigned to checklist items. |
| `settings__show__subtasks` | integer | No | Subtask display mode: `1` (separate), `2` (expand), `3` (collapse). |
| `team__sidebar__assignees` | array | No | List of user IDs to filter tasks by in the team sidebar. |
| `settings__show__assignees` | boolean | No | If true, display task assignees. |
| `settings__show__task__locations` | boolean | No | If true, display breadcrumb path (Space > Folder > List) for each task. |
| `settings__show__closed__subtasks` | boolean | No | If true, show closed subtasks according to `settings_show_subtasks`. |
| `team__sidebar__unassigned__tasks` | boolean | No | If true, team sidebar includes filter for unassigned tasks. |
| `team__sidebar__assigned__comments` | boolean | No | If true, team sidebar includes filter for tasks with assigned comments. |
| `settings__collapse__empty__columns` | string | No | If true, collapse or hide empty columns. |
| `settings__show__subtask__parent__names` | boolean | No | If true, display parent task name next to subtasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete chat channel

**Slug:** `CLICKUP_DELETE_CHAT_CHANNEL`

Tool to delete a chat channel in ClickUp. Use when you need to permanently remove a chat channel from a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel_id` | string | Yes | The ID of the chat channel to delete. |
| `workspace_id` | integer | Yes | The ID of the Workspace containing the chat channel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete chat message

**Slug:** `CLICKUP_DELETE_CHAT_MESSAGE`

Tool to delete a chat message in ClickUp. Use when you need to permanently remove a specific message from a workspace chat.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message_id` | string | Yes | The ID of the specified message. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete chat reaction

**Slug:** `CLICKUP_DELETE_CHAT_REACTION`

Tool to delete a reaction from a chat message in ClickUp. Use when you need to remove an emoji reaction that was previously added to a chat message.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reaction` | string | Yes | The name of the reaction emoji to remove from the message (e.g., 'heart', 'thumbsup', 'smile'). Use the exact emoji name as it appears in ClickUp. |
| `message_id` | string | Yes | The ID of the chat message from which to remove the reaction. |
| `workspace_id` | string | Yes | The ID of the Workspace containing the chat message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete checklist

**Slug:** `CLICKUP_DELETE_CHECKLIST`

Permanently deletes an existing checklist identified by its `checklist_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `checklist_id` | string | Yes | The unique identifier (UUID) of the checklist to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete checklist item

**Slug:** `CLICKUP_DELETE_CHECKLIST_ITEM`

Permanently deletes an existing item, identified by `checklist_item_id`, from an existing checklist, identified by `checklist_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `checklist_id` | string | Yes | Unique identifier (UUID) of the checklist containing the item to be deleted. |
| `checklist_item_id` | string | Yes | Unique identifier (UUID) of the specific checklist item to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete comment

**Slug:** `CLICKUP_DELETE_COMMENT`

Deletes an existing comment from a task using its `comment_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | The unique identifier of the comment to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete dependency

**Slug:** `CLICKUP_DELETE_DEPENDENCY`

Removes a dependency relationship for a task. Provide exactly one of: `depends_on` to remove a 'waiting on' dependency (task_id is blocked by another task), or `dependency_of` to remove a 'blocking' dependency (another task is blocked by task_id). `team_id` is required if `custom_task_ids` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Identifier of the task from which the dependency relationship will be removed. |
| `team_id` | string | No | Numeric team ID, required only when `custom_task_ids` is true to scope custom task IDs. |
| `depends_on` | string | No | Identifier of the task that `task_id` depends on (i.e., `task_id` is waiting on this task). Provide this to remove a 'waiting on' dependency. Mutually exclusive with `dependency_of` - exactly one must be provided. |
| `dependency_of` | string | No | Identifier of the task that depends on `task_id` (i.e., this task is blocked by `task_id`). Provide this to remove a 'blocking' dependency. Mutually exclusive with `depends_on` - exactly one must be provided. |
| `custom_task_ids` | boolean | No | If true, interprets `task_id` and the dependency task ID as custom task IDs; `team_id` also required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete folder

**Slug:** `CLICKUP_DELETE_FOLDER`

Permanently and irreversibly deletes a specified folder and all its contents (Lists, Tasks) if the folder_id exists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | The unique numerical identifier of the folder to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete goal

**Slug:** `CLICKUP_DELETE_GOAL`

Permanently removes an existing Goal, identified by its `goal_id`, from the Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `goal_id` | string | Yes | The unique identifier (UUID) of the Goal to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete key result

**Slug:** `CLICKUP_DELETE_KEY_RESULT`

Deletes an existing Key Result, also referred to as a Target within a Goal, identified by its `key_result_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key_result_id` | string | Yes | The unique identifier (UUID) of the Key Result to be deleted. This is often referred to as a 'Target' in the context of Goals. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete list

**Slug:** `CLICKUP_DELETE_LIST`

Permanently deletes an existing List and all its contents; this action is destructive and irreversible via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The unique numerical identifier of the List to be deleted. This ID can be found by navigating to the List in ClickUp; the ID is often present in the URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete space

**Slug:** `CLICKUP_DELETE_SPACE`

Permanently deletes a specified Space in ClickUp; this action is irreversible as the Space cannot be recovered via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Unique numerical ID of the Space to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete space tag

**Slug:** `CLICKUP_DELETE_SPACE_TAG`

Deletes a Tag from a Space, identified by `tag_name` in path; precise matching of Tag details in the request body (`tag_name_1`, `tag_tag_fg`, `tag_tag_bg`) is generally required for successful deletion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Numeric identifier of the Space from which the Tag will be deleted. |
| `tag_name` | string | Yes | Name of the Tag to be deleted, used in the URL path to identify it. |
| `tag__name` | string | No | Name of the Tag in the request body. Though schema-optional, generally required by the API to match the Tag's actual name for successful deletion. |
| `tag__tag__bg` | string | No | Background color of the Tag in HEX format (e.g., '#FF5733') in the request body. Though schema-optional, generally required by the API for successful deletion. |
| `tag__tag__fg` | string | No | Foreground (text) color of the Tag in HEX format (e.g., '#FFFFFF') in the request body. Though schema-optional, generally required by the API for successful deletion. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete task

**Slug:** `CLICKUP_DELETE_TASK`

Permanently deletes a task, using its standard ID or a custom task ID (requires `custom_task_ids=true` and `team_id`).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Unique ID of the task to delete. Can be a standard ID or a custom task ID (if custom, `custom_task_ids` must be `true`). |
| `team_id` | string | No | Team ID. Required only if `custom_task_ids` is `true` to identify the team for the custom task ID. |
| `custom_task_ids` | boolean | No | Set to `true` if `task_id` is a custom ID (requires `team_id` if `true`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete task link

**Slug:** `CLICKUP_DELETE_TASK_LINK`

Deletes an existing link, effectively a dependency or relationship, between two ClickUp tasks; set `custom_task_ids=true` and provide `team_id` if using custom task IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the first task involved in the link. If `custom_task_ids` is `true`, this should be its custom task ID. |
| `team_id` | string | No | The numerical ID of the team. This parameter is required and used only when `custom_task_ids` is set to `true` to correctly scope the custom task IDs. For example: `custom_task_ids=true&team_id=123`. |
| `links_to` | string | Yes | The ID of the second task involved in the link. If `custom_task_ids` is `true`, this should be its custom task ID. |
| `custom_task_ids` | boolean | No | If `task_id` and `links_to` refer to custom task IDs (rather than standard ClickUp task IDs), this parameter must be set to `true`. Setting this to `true` also requires `team_id` to be provided. Defaults to `false` if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete team

**Slug:** `CLICKUP_DELETE_TEAM`

Permanently deletes an existing Team (user group) from the Workspace using its `group_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | string | Yes | The unique string identifier for the Team (user group) to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a time entry

**Slug:** `CLICKUP_DELETE_TIME_ENTRY`

Deletes an existing time entry, specified by `timer_id`, from a Workspace identified by `team_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique identifier of the Workspace from which the time entry will be deleted. |
| `timer_id` | string | Yes | Unique identifier of the time entry to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete time tracked

**Slug:** `CLICKUP_DELETE_TIME_TRACKED`

Deletes a time-tracked interval from a task; use this legacy endpoint for older time tracking systems.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Task ID; can be standard or custom if `custom_task_ids` is set to true. |
| `team_id` | string | No | The ID of the team. This is required only if `custom_task_ids` is set to `true` to correctly identify the task using its custom ID. For example: `custom_task_ids=true&team_id=123`. |
| `interval_id` | string | Yes | ID of the time tracking interval (entry) to be deleted. |
| `custom_task_ids` | boolean | No | Set to `true` if `task_id` refers to a custom task ID. If `true`, `team_id` must also be provided. If omitted or `false`, `task_id` is treated as a standard ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete view

**Slug:** `CLICKUP_DELETE_VIEW`

Permanently and irreversibly deletes an existing View in ClickUp, identified by its `view_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | The unique identifier of the View to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete webhook

**Slug:** `CLICKUP_DELETE_WEBHOOK`

Permanently removes an existing webhook, specified by its ID, thereby ceasing all its event monitoring and notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | The unique identifier (UUID) of the webhook to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get accessible custom fields

**Slug:** `CLICKUP_GET_ACCESSIBLE_CUSTOM_FIELDS`

Retrieves all accessible Custom Field definitions for a specified ClickUp List using its `list_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Numeric ID of the specific ClickUp List. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get access token

**Slug:** `CLICKUP_GET_ACCESS_TOKEN`

Exchanges a ClickUp OAuth 2.0 authorization code (obtained after user consent) for an access token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | Authorization code from ClickUp's authorization server, typically a query parameter to your redirect URI after user consent. |
| `client_id` | string | Yes | Client ID for your registered ClickUp OAuth application. |
| `client_secret` | string | Yes | Client Secret for your registered ClickUp OAuth application. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all tags from time entries

**Slug:** `CLICKUP_GET_ALL_TAGS_FROM_TIME_ENTRIES`

Retrieves all unique tags applied to time entries within a specified ClickUp Team (Workspace).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique numerical identifier of the ClickUp Team (Workspace) for which to retrieve time entry tags. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get authorized teams workspaces

**Slug:** `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES`

Retrieves a list of Workspaces (Teams) the authenticated user can access.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get authorized user

**Slug:** `CLICKUP_GET_AUTHORIZED_USER`

Retrieves the details of the currently authenticated ClickUp user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get bulk tasks time in status

**Slug:** `CLICKUP_GET_BULK_TASKS_TIME_IN_STATUS`

Retrieves the time spent in each status for multiple tasks; requires the 'Total time in Status' ClickApp to be enabled in the Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | No | The ID of the team to which the custom task IDs belong. This field is required and used only when the `custom_task_ids` parameter is set to `true`. |
| `task_ids` | string | Yes | A comma-separated string of task IDs (e.g., 'taskID1,taskID2') for which to retrieve time in status data. You can include up to 100 task IDs per request. |
| `custom_task_ids` | boolean | No | Set to `true` if `task_ids` refer to custom task IDs instead of standard task IDs. If `true`, `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat channel

**Slug:** `CLICKUP_GET_CHAT_CHANNEL`

Retrieves details for a specific chat channel in a ClickUp Workspace. Use when you need information about a particular chat channel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel_id` | string | Yes | The ID of the specified Channel. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `description_format` | string ("text/md" | "text/plain") | No | Format options for the channel description. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat channel followers

**Slug:** `CLICKUP_GET_CHAT_CHANNEL_FOLLOWERS`

Tool to retrieve followers of a ClickUp chat channel. Use when you need to list users following a specific channel in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. Default is 50, max is 100. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. Use the next_cursor value from the previous response. |
| `channel_id` | string | Yes | The ID of the chat channel. Format example: '4-90165816748-8'. |
| `workspace_id` | integer | Yes | The ID of the Workspace containing the chat channel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat channel members

**Slug:** `CLICKUP_GET_CHAT_CHANNEL_MEMBERS`

Tool to get members of a chat channel. Use when you need to retrieve the list of members in a specific ClickUp chat channel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. Default is 50, max is 100. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. |
| `channel_id` | string | Yes | The ID of the specified Channel. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat channels

**Slug:** `CLICKUP_GET_CHAT_CHANNELS`

Tool to retrieve chat channels in a ClickUp workspace. Use when you need to list available chat channels, DMs, or group chats in a workspace. Supports pagination via cursor and filtering by follower status, closed channels, and recent activity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. |
| `cursor` | string | No | Used to request the next page of results. |
| `is_follower` | boolean | No | Only return Channels the user is following. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `channel_types` | string | No | Specify the types of Channels to return from the request. |
| `include_closed` | boolean | No | Include DMs/Group DMs that have been explicitly closed. |
| `description_format` | string ("text/md" | "text/plain") | No | Format options for channel descriptions. |
| `with_message_since` | integer | No | Only return Channels with at least one message since the given timestamp (Unix milliseconds). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat message reactions

**Slug:** `CLICKUP_GET_CHAT_MESSAGE_REACTIONS`

Tool to retrieve reactions on a ClickUp chat message. Use when you need to see who reacted to a message and with what emoji.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. Defaults to 50. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. Use the `next_cursor` from the previous response to paginate through reactions. |
| `message_id` | string | Yes | The ID of the specified chat message. |
| `workspace_id` | integer | Yes | The ID of the Workspace containing the chat message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat message replies

**Slug:** `CLICKUP_GET_CHAT_MESSAGE_REPLIES`

Retrieves replies to a chat message in ClickUp. Use when you need to fetch responses to a specific message in a workspace chat.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. |
| `message_id` | string | Yes | The ID of the specified message. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `content_format` | string ("text/md" | "text/plain") | No | Content format for message replies. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat messages

**Slug:** `CLICKUP_GET_CHAT_MESSAGES`

Tool to retrieve messages from a ClickUp chat channel. Use when you need to fetch chat messages for a specific channel within a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. |
| `channel_id` | string | Yes | The ID of the Channel where the messages live. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `content_format` | string ("text/md" | "text/plain") | No | Format options for message content. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat message tagged users

**Slug:** `CLICKUP_GET_CHAT_MESSAGE_TAGGED_USERS`

Tool to retrieve users tagged in a ClickUp chat message. Use when you need to get a list of users mentioned in a specific chat message.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to fetch for this page. |
| `cursor` | string | No | The cursor to use to fetch the next page of results. |
| `message_id` | string | Yes | The ID of the specified message. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get chat view comments

**Slug:** `CLICKUP_GET_CHAT_VIEW_COMMENTS`

Retrieves comments from a specified Chat view in ClickUp, supporting pagination via `start` and `start_id` to fetch comments older than the default 25 most recent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | integer | No | Unix timestamp (milliseconds) to filter comments created at or after this time. For pagination, typically used with `start_id`. |
| `view_id` | string | Yes | Unique identifier of the Chat view from which to retrieve comments. |
| `start_id` | string | No | Comment ID to act as a cursor for pagination, used with `start` to retrieve comments after this ID that also meet the `start` time condition. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom roles

**Slug:** `CLICKUP_GET_CUSTOM_ROLES`

Retrieves all Custom Roles, which allow granular permission configurations, for a specified Workspace (Team).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique identifier of the Workspace (Team) for which to retrieve custom roles. |
| `include_members` | boolean | No | If true, includes members assigned to each custom role in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom task types

**Slug:** `CLICKUP_GET_CUSTOM_TASK_TYPES`

Retrieves all custom task types available within a specified Workspace (team_id).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Numeric ID of the Workspace (formerly Team) for which to retrieve custom task types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Doc Content

**Slug:** `CLICKUP_GET_DOC_CONTENT`

Tool to fetch the full content of a ClickUp Doc including metadata and all page contents in markdown format. Use when you need to read or summarize a Doc's content given workspace_id and doc_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | The unique ClickUp Doc ID in format '{alphanumeric_prefix}-{number}' (e.g., '2kz0k9bp-1376'). IMPORTANT: Numeric-only IDs (e.g., '4017245840171325375') are View IDs, NOT Doc IDs, and will fail. To get a valid doc_id, use CLICKUP_CLICK_UP_SEARCH_DOCS or extract from a ClickUp Doc URL (format: app.clickup.com/{workspace_id}/v/dc/{doc_id}). |
| `page_ids` | array | No | Optional list of specific page IDs to fetch. If provided, only these pages will be retrieved. If omitted, all pages in the doc will be fetched. Page IDs follow the same format as doc_id (e.g., '2kz0k9bp-416'). |
| `workspace_id` | string | Yes | The numeric workspace ID containing the document. Obtain this from the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST or CLICKUP_CLICK_UP_SEARCH_DOCS action. |
| `include_page_listing_only` | boolean | No | If true, only fetch the list of pages without their content. Useful for discovering page structure without the full content retrieval overhead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Doc Page Content

**Slug:** `CLICKUP_GET_DOC_PAGE_CONTENT`

Tool to fetch a single ClickUp Doc page's content and metadata by workspace_id + doc_id + page_id (v3 Docs API). Use when you need to read the content of a specific page without fetching the entire Doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | The unique ClickUp Doc ID in format '{alphanumeric_prefix}-{number}' (e.g., '2kz0k9bp-1376'). To get a valid doc_id, use CLICKUP_CLICK_UP_SEARCH_DOCS or extract from a ClickUp Doc URL. |
| `page_id` | string | Yes | The unique page ID to retrieve, following the same format as doc_id (e.g., '2kz0k9bp-416'). Obtain from CLICKUP_CLICK_UP_GET_DOC_CONTENT with include_page_listing_only=true or from the Doc's page structure. |
| `workspace_id` | string | Yes | The numeric workspace ID containing the document. Obtain this from the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST or CLICKUP_CLICK_UP_SEARCH_DOCS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Doc Page Listing

**Slug:** `CLICKUP_GET_DOC_PAGE_LISTING`

Tool to fetch the page listing structure of a ClickUp Doc by workspace_id and doc_id. Use when you need to discover the hierarchical structure of pages and subpages within a Doc without fetching the actual content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | The unique ClickUp Doc ID in format '{alphanumeric_prefix}-{number}' (e.g., '2kz0k9bp-1096'). To get a valid doc_id, use CLICKUP_CLICK_UP_SEARCH_DOCS or extract from a ClickUp Doc URL. |
| `workspace_id` | string | Yes | The numeric workspace ID containing the document. Obtain this from the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST or CLICKUP_CLICK_UP_SEARCH_DOCS action. |
| `max_page_depth` | integer | No | The maximum depth to fetch pages/subpages. A value less than 0 does not limit the depth. Defaults to -1 (unlimited depth). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Doc Pages

**Slug:** `CLICKUP_GET_DOC_PAGES_PUBLIC`

Tool to fetch pages belonging to a ClickUp Doc. Use when you need to list all pages in a doc with their content and structure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | The ID of the doc in format '{alphanumeric_prefix}-{number}' (e.g., '2kz0k9bp-1096'). To get a valid doc_id, use CLICKUP_CLICK_UP_SEARCH_DOCS or extract from a ClickUp Doc URL. |
| `workspace_id` | string | Yes | The ID of the Workspace. Obtain this from the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST or CLICKUP_CLICK_UP_SEARCH_DOCS action. |
| `content_format` | string ("text/md" | "text/plain") | No | Content format options for page content. |
| `max_page_depth` | integer | No | The maximum depth to fetch pages/subpages. A value less than 0 does not limit the depth. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get filtered team tasks

**Slug:** `CLICKUP_GET_FILTERED_TEAM_TASKS`

Retrieves a paginated list of tasks (up to 100 per page) from a specified workspace based on various filter criteria, respecting user access permissions. Unexpectedly missing tasks may indicate permission restrictions rather than filter issues. Task comments are not included; use CLICKUP_GET_TASK_COMMENTS for complete context. No keyword/text search is supported; filter client-side on returned results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page to fetch (starts at 0). Increment until the response's `last_page` field is true or the returned tasks list is empty to avoid silently missing tasks. |
| `tags` | array | No | Filter by tag names. |
| `parent` | string | No | Filter by parent task ID to retrieve its subtasks. |
| `reverse` | boolean | No | If true, tasks are displayed in reverse order. |
| `team_Id` | string | Yes | The Workspace ID (called 'team_id' in ClickUp API v2). This is a numeric string. To find your Workspace ID, use the 'Get Authorized Teams (Workspaces)' endpoint or check Settings > Workspace Settings in the ClickUp UI. |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true, for custom task ID context. Distinct from the required `team_Id` path parameter (Workspace ID); do not confuse these — this optional numeric string is only used for custom task ID resolution. Example: '9001'. |
| `list_ids` | array | No | Filter by List IDs. Must be numeric IDs (e.g., '123456789'). You can get numeric List IDs from the Get Lists endpoint. |
| `order_by` | string ("id" | "created" | "updated" | "due_date") | No | Order tasks by this field. Default: `created`. |
| `statuses` | array | No | Filter by task statuses (e.g., 'to do', 'in progress'). Values must exactly match workspace-configured status strings; mismatches silently return empty results. |
| `subtasks` | boolean | No | If true, include subtasks. Excluded by default. |
| `assignees` | array | No | Filter by assignee User IDs. Must be numeric IDs (e.g., '123456789'). You can get numeric User IDs from endpoints like Get List Members or Get Task Members. |
| `space_ids` | array | No | Filter by Space IDs. Must be numeric IDs (e.g., '123456789'). You can get numeric Space IDs from the Get Spaces endpoint. |
| `due_date_gt` | integer | No | Filter by due date greater than this Unix timestamp (milliseconds). |
| `due_date_lt` | integer | No | Filter by due date less than this Unix timestamp (milliseconds). |
| `project_ids` | array | No | Filter by Folder (Project) IDs. Must be numeric IDs (e.g., '123456789'). You can get numeric Folder IDs from the Get Folders endpoint. |
| `custom_items` | array | No | Filter by custom item types (e.g., 0 for tasks, 1 for Milestones, other numbers for custom types defined in Workspace). |
| `date_done_gt` | integer | No | Filter by completion date greater than this Unix timestamp (milliseconds). |
| `date_done_lt` | integer | No | Filter by completion date less than this Unix timestamp (milliseconds). |
| `custom_fields` | array | No | Filter by custom fields. Each string in the list is a JSON object defining a single filter condition. Example for one string in the list: '''{"field_id": "unique_field_id", "operator": "=", "value": "desired_value"}'''. Incorrect `field_id` values or unsupported operator strings produce 400 errors or silently empty results; retrieve valid `field_id`s from workspace custom field configuration. |
| `include_closed` | boolean | No | If true, include closed tasks. Excluded by default. |
| `custom_task_ids` | boolean | No | Set to true to use custom task IDs in filters instead of global task IDs. Requires `team_id` for context. |
| `date_created_gt` | integer | No | Filter by creation date greater than this Unix timestamp (milliseconds). |
| `date_created_lt` | integer | No | Filter by creation date less than this Unix timestamp (milliseconds). |
| `date_updated_gt` | integer | No | Filter by update date greater than this Unix timestamp (milliseconds). |
| `date_updated_lt` | integer | No | Filter by update date less than this Unix timestamp (milliseconds). |
| `include_markdown_description` | boolean | No | If true, return task descriptions in Markdown format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folder

**Slug:** `CLICKUP_GET_FOLDER`

Retrieves detailed information about a specific folder in ClickUp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | The unique identifier of the folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Folder Available Fields

**Slug:** `CLICKUP_GET_FOLDER_AVAILABLE_FIELDS`

Tool to view custom fields available in a ClickUp folder. Use to discover what custom fields can be used when working with tasks in this folder. Only returns folder-level custom fields, not list-level fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | The ID of the folder to retrieve available custom fields from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folderless lists

**Slug:** `CLICKUP_GET_FOLDERLESS_LISTS`

Retrieves all Lists within a specified Space that are not located in any Folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter by archived status. Set to `true` to retrieve archived Lists, `false` or omit to retrieve unarchived Lists. |
| `space_id` | string | Yes | The ID of the Space from which to retrieve folderless Lists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folders

**Slug:** `CLICKUP_GET_FOLDERS`

Retrieves Folders within a specified ClickUp Space, ensuring `space_id` is valid, with an option to filter by archived status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter Folders by archived status. `True` for archived, `False` for unarchived. Omit to return both. |
| `space_id` | string | Yes | The unique numeric identifier of the Space from which to retrieve Folders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folder views

**Slug:** `CLICKUP_GET_FOLDER_VIEWS`

Retrieves all configured views (like List, Board, Calendar) for a specified, existing Folder in ClickUp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | Yes | ID of the Folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get goal

**Slug:** `CLICKUP_GET_GOAL`

Retrieves detailed information for an existing ClickUp Goal, specified by its unique `goal_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `goal_id` | string | Yes | The unique identifier (UUID) of the Goal to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get goals

**Slug:** `CLICKUP_GET_GOALS`

Retrieves goals for a specified ClickUp Workspace (Team); the `team_id` must be valid and accessible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique numerical identifier of the Workspace (Team) for which to retrieve goals. |
| `include_completed` | boolean | No | If true, include completed goals in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get guest

**Slug:** `CLICKUP_GET_GUEST`

Call this to retrieve detailed information for a specific guest within a Team (Workspace), ensuring the `guest_id` is valid for the given `team_id`; this action requires the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique identifier for the Team (Workspace) to which the guest belongs. |
| `guest_id` | string | Yes | The unique identifier for the guest whose information is to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list

**Slug:** `CLICKUP_GET_LIST`

Retrieves detailed information for an existing List in ClickUp, identified by its unique `list_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The unique identifier for the List to retrieve. This ID can be found by right-clicking a List in the ClickUp sidebar, selecting 'Copy link', and the ID is the last part of the URL after '/l/' or '/li/'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list comments

**Slug:** `CLICKUP_GET_LIST_COMMENTS`

Retrieves comments for a specific ClickUp List, supporting pagination using `start` (timestamp) and `start_id` (comment ID) to fetch earlier comments; omits them for the latest 25.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | integer | No | Unix timestamp (milliseconds) of a comment's creation date. |
| `list_id` | string | Yes | The unique identifier for the list from which to retrieve comments. |
| `start_id` | string | No | ID of a specific comment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list members

**Slug:** `CLICKUP_GET_LIST_MEMBERS`

Retrieves all members of a specific, existing ClickUp List by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Unique identifier of the ClickUp List. Found by extracting the numerical ID from the List's URL in ClickUp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lists

**Slug:** `CLICKUP_GET_LISTS`

Retrieves all lists within a specified, existing ClickUp folder, optionally filtering by archived status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter lists by archived status. If `true`, returns archived lists; if `false` or omitted, returns unarchived lists. |
| `folder_id` | string | Yes | The unique identifier of the Folder from which to retrieve lists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list views

**Slug:** `CLICKUP_GET_LIST_VIEWS`

Retrieves all task and page views for a specified and accessible ClickUp List.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The ID of the List for which to retrieve views. This is the numeric ID of the list, often found at the end of the list's URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get running time entry

**Slug:** `CLICKUP_GET_RUNNING_TIME_ENTRY`

Retrieves the currently active time entry for a user in a Workspace; a negative 'duration' in its data indicates it's running, and the response may be empty if no entry is active.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | Unique identifier for the Workspace (Team). |
| `assignee` | integer | No | Identifier of the user for the time entry; defaults to the authenticated user if not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shared hierarchy

**Slug:** `CLICKUP_GET_SHARED_HIERARCHY`

Retrieves the hierarchy of tasks, Lists, and Folders shared with the authenticated user within an existing ClickUp Team (Workspace), identified by its `team_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique numerical ID of the ClickUp Team (Workspace) for which to fetch the shared hierarchy. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get space

**Slug:** `CLICKUP_GET_SPACE`

Retrieves detailed information for an existing Space in a ClickUp Workspace, identified by its unique space_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Unique ID of the Space to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get space available fields

**Slug:** `CLICKUP_GET_SPACE_AVAILABLE_FIELDS`

Retrieves all custom fields available in a ClickUp Space, identified by space_id. Returns Space-level custom fields only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | integer | Yes | The unique numerical identifier of the Space for which custom fields are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get spaces

**Slug:** `CLICKUP_GET_SPACES`

Retrieves Spaces for a Team ID; member information for private Spaces is returned only if the authenticated user is a member.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Identifier for the Team (Workspace). Obtain valid workspace IDs using the GET /team endpoint. |
| `archived` | boolean | No | Filter by archived status (`true` for archived, `false` for active); API default if omitted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get space tags

**Slug:** `CLICKUP_GET_SPACE_TAGS`

Retrieves all tags for tasks within a specified ClickUp Space, requiring a valid `space_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | The unique numerical identifier of the Space for which tags are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get space views

**Slug:** `CLICKUP_GET_SPACE_VIEWS`

Retrieves all task and page views for a specified Space ID in ClickUp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | ID of the Space to retrieve views from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get post subtype IDs

**Slug:** `CLICKUP_GET_SUBTYPES`

Tool to retrieve post subtype IDs (Announcement, Discussion, Idea, Update) for a ClickUp Workspace. Use when you need subtype IDs to send messages with type: post.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_type` | string ("post" | "ai" | "syncup" | "ai_via_brain") | Yes | The type of comment to retrieve subtypes for. Use 'post' to get subtype IDs for Announcement, Discussion, Idea, and Update post types. |
| `workspace_id` | integer | Yes | ID of the logged-in user's Workspace. Obtain this from the get_authorized_teams_workspaces action or similar workspace listing endpoints. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get task

**Slug:** `CLICKUP_GET_TASK`

Retrieves comprehensive details for a ClickUp task by its ID, supporting standard or custom task IDs (requires `team_id` for custom IDs).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task to retrieve. This can be the standard ClickUp task ID or a custom task ID if `custom_task_ids` is set to `true` (in which case `team_id` is also required). |
| `team_id` | integer | No | The ID of the team. This parameter is required and used only when `custom_task_ids` is set to `true` to identify the custom task ID within that specific team. For example: `custom_task_ids=true&team_id=123`. |
| `custom_task_ids` | boolean | No | Set to `true` to indicate that the `task_id` provided is a custom task ID. If `true`, `team_id` must also be provided. If omitted or `false` (default), `task_id` is treated as a standard task ID. |
| `include_subtasks` | boolean | No | Set to `true` to include subtasks in the task details response. If omitted or `false` (default), subtasks are not included. |
| `include_markdown_description` | boolean | No | Set to `true` to return the task description in Markdown format. If omitted or `false` (default), the description is returned in plain text. For example: `?include_markdown_description=true`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get task comments

**Slug:** `CLICKUP_GET_TASK_COMMENTS`

Retrieves up to 25 comments for a specified task, supporting pagination using `start` and `start_id` to fetch older comments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | integer | No | Unix timestamp (in milliseconds) of the oldest visible comment, used with `start_id` for paginating older comments. |
| `task_id` | string | Yes | Unique identifier of the task. Can be a standard or custom task ID (if `custom_task_ids` is true). |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true. |
| `start_id` | string | No | ID of the oldest visible comment, used with `start` for paginating older comments. |
| `custom_task_ids` | boolean | No | Indicates if `task_id` is a custom task ID; if true, `team_id` is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get task members

**Slug:** `CLICKUP_GET_TASK_MEMBERS`

Retrieves users with explicit access (directly assigned or shared) to a specific existing task, excluding users with inherited permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task for which to retrieve members. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tasks

**Slug:** `CLICKUP_GET_TASKS`

Retrieves tasks from a specified ClickUp list; only tasks whose home is the given list_id are returned. Closed and archived tasks are excluded by default. Key task attributes may appear only in the response `custom_fields` array, not top-level fields. Fields like `space`, `folder`, `list`, and `custom_type` may be absent; apply null checks. High-volume paginated calls may return HTTP 429; honor the `Retry-After` header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | The page number of results to fetch, starting at 0. Each page can contain up to 100 tasks. Iterate pages until the response `last_page` flag is true or the returned tasks list is empty to avoid silently missing tasks. |
| `tags` | array | No | Filter tasks by a list of tag names. Use URL encoding for tags with spaces (e.g., 'this%20tag'). |
| `list_id` | string | Yes | The ID of the list to retrieve tasks from. To find the list_id, copy the link to the list from the ClickUp UI; the list_id is the number following '/li' in the URL. Pass as a numeric string (e.g., '123456789'). |
| `reverse` | boolean | No | Display tasks in reverse order based on the 'order_by' field. |
| `archived` | boolean | No | Include or exclude archived tasks. |
| `order_by` | string | No | Field to order tasks by. Valid options are: 'id', 'created', 'updated', and 'due_date'. |
| `statuses` | array | No | Filter tasks by their status. Pass a list of status strings. Use URL encoding for statuses with spaces (e.g., 'to%20do'). To include closed tasks, use the `include_closed` parameter. Values must match workspace configuration exactly (case-sensitive, including spacing); mismatches return empty results silently. |
| `subtasks` | boolean | No | Include subtasks in the results. |
| `assignees` | array | No | Filter tasks by assignee user IDs. Accepts a single ID or a list of IDs. IDs can be numeric (e.g., 212519251) or strings (e.g., '212519251'). |
| `due_date_gt` | integer | No | Filter tasks with a due date greater than the provided Unix timestamp in milliseconds. |
| `due_date_lt` | integer | No | Filter tasks with a due date less than the provided Unix timestamp in milliseconds. |
| `custom_items` | array | No | Filter by custom task types. For example: `?custom_items[]=0&custom_items[]=1300`. Including `0` returns tasks. Including `1` returns Milestones. Including any other number returns the custom task type as defined in your Workspace. |
| `date_done_gt` | integer | No | Filter tasks with a completion date greater than the provided Unix timestamp in milliseconds. |
| `date_done_lt` | integer | No | Filter tasks with a completion date less than the provided Unix timestamp in milliseconds. |
| `custom_fields` | array | No | Filter tasks by custom field values. Provide a list of JSON strings, each defining a custom field filter. Example for a single filter: '[{"field_id":"field_id_1","operator":"=","value":"field_value_1"}]'. For multiple filters: '[{"field_id":"field_id_1","operator":"=","value":"field_value_1"}, {"field_id":"field_id_2","operator":"<","value":5}]'. See ClickUp API documentation for more on filtering with Custom Fields. |
| `include_closed` | boolean | No | Include tasks with a closed status. Closed tasks are excluded by default; set to true to include them. |
| `date_created_gt` | integer | No | Filter tasks with a creation date greater than the provided Unix timestamp in milliseconds. |
| `date_created_lt` | integer | No | Filter tasks with a creation date less than the provided Unix timestamp in milliseconds. |
| `date_updated_gt` | integer | No | Filter tasks with an update date greater than the provided Unix timestamp in milliseconds. |
| `date_updated_lt` | integer | No | Filter tasks with an update date less than the provided Unix timestamp in milliseconds. |
| `include_markdown_description` | boolean | No | Return task descriptions in Markdown format. Use the response `text_content` field instead when plain text is needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get task templates

**Slug:** `CLICKUP_GET_TASK_TEMPLATES`

Retrieves task templates for a specified Workspace (Team ID), supporting pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | Yes | Page number for paginating through templates (starts from 0). |
| `team_id` | string | Yes | Unique identifier of the Workspace (Team) to retrieve task templates from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get task s time in status

**Slug:** `CLICKUP_GET_TASK_TIME_IN_STATUS`

Retrieves the duration a task has spent in each status, provided the 'Total time in Status' ClickApp is enabled for the Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task. This can be the standard task ID or a custom task ID if `custom_task_ids` is true. |
| `team_id` | integer | No | The ID of the team (Workspace) to which the task belongs. This is required only when `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=1234567`. |
| `custom_task_ids` | boolean | No | If set to `true`, the `task_id` parameter will be interpreted as a custom task ID. When using custom task IDs, the `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team available fields

**Slug:** `CLICKUP_GET_TEAM_AVAILABLE_FIELDS`

Retrieves all custom fields available in a ClickUp Workspace (Team), identified by team_id. Returns Workspace-level custom fields only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | The unique numerical identifier of the Workspace (Team) for which custom fields are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get teams

**Slug:** `CLICKUP_GET_TEAMS`

Retrieves user groups (Teams) from a ClickUp Workspace, typically requiring `team_id` (Workspace ID), with an option to filter by `group_ids`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | ID of the ClickUp Workspace (Team ID) from which to retrieve user groups. Must be a positive integer greater than 0. Use the CLICKUP_AUTHORIZATION_GET_WORK_SPACE_LIST action to retrieve available workspace IDs. |
| `group_ids` | string | No | Comma-separated string of user group IDs to filter results; if omitted, all user groups in the Workspace are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get threaded comments

**Slug:** `CLICKUP_GET_THREADED_COMMENTS`

Retrieves threaded replies to a parent comment. Use when you need to fetch conversation threads under a specific comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | Unique identifier of the parent comment to retrieve replies for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get time entries within a date range

**Slug:** `CLICKUP_GET_TIME_ENTRIES_IN_DATE_RANGE`

Retrieves time entries for a specified Team (Workspace ID) within a date range (defaults to the last 30 days for the authenticated user if dates are omitted); active timers are indicated by negative durations in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | No | Filter time entries to include only those associated with tasks in a specific List ID. |
| `task_id` | string | No | Filter time entries to include only those associated with a specific task ID. Use with `custom_task_ids` if referring to a custom ID. |
| `team_Id` | string | Yes | The Workspace ID (also called Team ID in ClickUp API) for which to retrieve time entries. This goes in the URL path. |
| `team_id` | string | No | The ID of the Team (Workspace) to use for context when `custom_task_ids` is `true`. This helps resolve custom task IDs. Example: `custom_task_ids=true&team_id=123`. |
| `assignee` | string | No | Filter time entries by user ID(s). For multiple assignees, provide a comma-separated string of user IDs. Example: `1234,9876`. Note: Access to other users' time entries typically requires Workspace Owner/Admin privileges. |
| `end_date` | integer | No | The end date of the date range for filtering time entries, specified as a Unix timestamp in milliseconds. If omitted, defaults to the current date. |
| `space_id` | string | No | Filter time entries to include only those associated with tasks in a specific Space ID. |
| `folder_id` | string | No | Filter time entries to include only those associated with tasks in a specific Folder ID. |
| `start_date` | integer | No | The start date of the date range for filtering time entries, specified as a Unix timestamp in milliseconds. If omitted, defaults to 30 days prior to the current date. |
| `custom_task_ids` | boolean | No | Set to `true` if the `task_id` parameter refers to a custom task ID. If `true`, the `team_id` query parameter must also be provided for context. |
| `include_task_tags` | boolean | No | If true, includes task tags in the response for time entries associated with tasks. |
| `include_location_names` | boolean | No | If true, includes the names of the List, Folder, and Space in the response, along with their respective IDs (`list_id`, `folder_id`, `space_id`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get singular time entry

**Slug:** `CLICKUP_GET_TIME_ENTRY`

Fetches a specific time entry by its ID for a given team; a negative duration in the response indicates an active timer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | Unique identifier for the Team (Workspace). |
| `timer_id` | string | Yes | Unique identifier of the time entry. Can be obtained from the 'Get Time Entries Within a Date Range' action. |
| `include__task` | boolean | No | If true and the time entry is associated with a task, includes task details in the response. |
| `include_location_names` | boolean | No | If true, includes names of the List, Folder, and Space associated with the time entry, alongside their IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get time entry history

**Slug:** `CLICKUP_GET_TIME_ENTRY_HISTORY`

Retrieves the modification history for an existing time entry within a specific ClickUp Team (Workspace).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique identifier for the Team (Workspace) containing the time entry. |
| `timer_id` | string | Yes | Unique identifier of the time entry for which to retrieve history. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tracked time

**Slug:** `CLICKUP_GET_TRACKED_TIME`

Retrieves tracked time for a task using a legacy endpoint; prefer newer Time Tracking API endpoints for managing time entries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task for which to retrieve tracked time. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`. |
| `team_id` | string | No | The ID of the team. This is required and used only when the `custom_task_ids` parameter is set to `true`. For example: `custom_task_ids=true&team_id=123`. |
| `custom_task_ids` | boolean | No | Set to `true` if the `task_id` provided is a custom task ID. If `true`, the `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user

**Slug:** `CLICKUP_GET_USER`

Retrieves detailed information for a specific user within a ClickUp Workspace (Team), available only for Workspaces on the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | ID of the Team (Workspace) containing the user. |
| `user_id` | string | Yes | ID of the user whose details are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get view

**Slug:** `CLICKUP_GET_VIEW`

Fetches details for a specific ClickUp view, identified by its `view_id`, which must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | The unique identifier for the ClickUp view to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get view tasks

**Slug:** `CLICKUP_GET_VIEW_TASKS`

Retrieves all tasks visible in a specified ClickUp view, respecting its applied filters, sorting, and grouping.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | Yes | The page number of the results to retrieve. Used for pagination if the number of tasks exceeds the limit per page. Starts at 0. |
| `view_id` | string | Yes | The unique identifier for a task view from which to retrieve tasks. Only task views are supported: list, board, calendar, table, timeline, workload, activity, map, or gantt. Page views (such as Docs, Whiteboards, and Chat) are not supported and will return an error. To find valid task views, use the Get Space Views, Get Folder Views, or Get List Views actions and filter by view type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get webhooks

**Slug:** `CLICKUP_GET_WEBHOOKS`

Fetches webhooks for a Team (Workspace), returning only those created by the authenticated user via API, for a `team_id` they can access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique ID of the Team (Workspace) to retrieve webhooks for. Obtain valid workspace IDs using the 'get_authorized_teams_workspaces' action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workspace everything level views

**Slug:** `CLICKUP_GET_WORKSPACE_EVERYTHING_LEVEL_VIEWS`

Retrieves all task and page views at the 'Everything Level' (a comprehensive overview of all tasks across all Spaces) for a specified ClickUp Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | Numeric ID of the Workspace (often referred to as Team ID) for which to retrieve Everything Level views. |
| `archived` | boolean | No | Filter for archived views. Set to true to include only archived views, false to exclude archived views, or omit to include all views. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workspace plan

**Slug:** `CLICKUP_GET_WORKSPACE_PLAN`

Retrieves the details of the current subscription plan for a specified ClickUp Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique identifier for the Workspace (formerly known as Team). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workspace seats

**Slug:** `CLICKUP_GET_WORKSPACE_SEATS`

Retrieves seat utilization (used, total, available for members/guests) for a ClickUp Workspace (Team) ID, which must be for an existing Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Numeric ID of the Workspace (Team). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invite guest to workspace

**Slug:** `CLICKUP_INVITE_GUEST_TO_WORKSPACE`

Invites a guest by email to a ClickUp Workspace (Team) on an Enterprise Plan, setting initial permissions and optionally a custom role; further access configuration for specific items may require separate actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Email address of the guest to invite to the Workspace. |
| `team_id` | string | Yes | Unique identifier for the Workspace (Team) to which the guest will be invited. |
| `can_edit_tags` | boolean | Yes | If `true`, the guest has permission to edit tags. |
| `custom_role_id` | integer | No | Optional ID of a custom role to assign to the guest, for granular permission control beyond default guest permissions. Only available on Business Plus Plan (one custom role) or Enterprise Plan (unlimited custom roles). |
| `can_create_views` | boolean | Yes | If `true`, the guest has permission to create views. |
| `can_see_time_spent` | boolean | Yes | If `true`, the guest has permission to see time spent on tasks. |
| `can_see_time_estimated` | boolean | Yes | If `true`, the guest has permission to see time estimated for tasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invite user to workspace

**Slug:** `CLICKUP_INVITE_USER_TO_WORKSPACE`

Invites a user via email to a ClickUp Workspace (Team), optionally granting admin rights or a custom role; requires an Enterprise Plan for the Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin` | boolean | Yes | Grant administrative privileges to the invited user. |
| `email` | string | Yes | Email address of the user to invite. |
| `team_id` | string | Yes | Unique identifier of the Workspace (Team) to which the user will be invited. |
| `custom_role_id` | integer | No | Optional custom role ID to assign; if omitted and custom roles are enabled, the default member role is used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move task to new home list

**Slug:** `CLICKUP_MOVE_TASK_TO_HOME_LIST`

Tool to move a task to a new home List using ClickUp Public API v3. Use when you need to change a task's home list (not just add to additional lists).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The destination list ID to move the task to. This will become the task's new home list. |
| `task_id` | string | Yes | The task ID to move. Use actual task ID, not custom task ID. |
| `workspace_id` | string | Yes | The workspace ID containing the task. Required for v3 endpoint. |
| `status_mappings` | array | No | Array of status mapping objects to map the task's status from source list to destination list. Each object should contain 'source_status' and 'destination_status' keys. Required when the task's current status doesn't exist in the new list. |
| `move_custom_fields` | boolean | No | If true, transfer all custom fields from the current list to the destination list. If false or omitted, custom fields are not moved. |
| `custom_fields_to_move` | array | No | List of specific custom field IDs to transfer when moving the task. Only applies when move_custom_fields is true. If omitted, all custom fields are moved when move_custom_fields is true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove custom field value

**Slug:** `CLICKUP_REMOVE_CUSTOM_FIELD_VALUE`

Removes an existing value from a Custom Field on a specific task; this does not delete the Custom Field definition or its predefined options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Identifier of the task. If `custom_task_ids` is true, this is the custom task ID; otherwise, it's the standard task ID. |
| `team_id` | integer | No | Numeric ID of the team, required only if `custom_task_ids` is true to identify the task by its custom ID. |
| `field_id` | string | Yes | UUID of the Custom Field whose value will be removed from the task. |
| `custom_task_ids` | boolean | No | If true, `task_id` is a custom task ID, and `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove guest from folder

**Slug:** `CLICKUP_REMOVE_GUEST_FROM_FOLDER`

Revokes a guest's access to a specific ClickUp Folder, optionally unsharing items explicitly shared with them within it; requires an Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `guest_id` | string | Yes | Unique identifier of the guest to remove from the Folder. |
| `folder_id` | string | Yes | Unique identifier of the Folder from which to remove the guest. |
| `include_shared` | boolean | No | If `true`, items explicitly shared with the guest within this Folder are also unshared. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove guest from list

**Slug:** `CLICKUP_REMOVE_GUEST_FROM_LIST`

Revokes a guest's access to a specific List, provided the guest currently has access to this List and the Workspace is on the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | The unique identifier of the List from which the guest will be removed. |
| `guest_id` | string | Yes | The unique identifier of the guest to be removed from the List. |
| `include_shared` | boolean | No | If `false`, may alter how items shared with the guest are handled or reported during removal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove guest from task

**Slug:** `CLICKUP_REMOVE_GUEST_FROM_TASK`

Revokes a guest's access to a specific task; only available for Workspaces on the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task from which the guest will be removed. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`. |
| `team_id` | string | No | The ID of the team. This is required only when `custom_task_ids` is set to `true` and you are using a custom task ID. For example: `custom_task_ids=true&team_id=123`. |
| `guest_id` | string | Yes | The numeric ID of the guest to be removed from the task. |
| `include_shared` | boolean | No | Determines whether to include details of items shared with the guest. Set to `false` to exclude these details. Defaults to `true`. |
| `custom_task_ids` | boolean | No | Set to `true` if you are using a custom task ID for the `task_id` parameter. If `true`, `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove guest from workspace

**Slug:** `CLICKUP_REMOVE_GUEST_FROM_WORKSPACE`

Permanently removes a guest from a specified Workspace, revoking all their access; this destructive operation requires the Workspace to be on the ClickUp Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique numerical identifier for the Workspace (often referred to as 'Team' in the ClickUp API) from which the guest is to be removed. This ID specifies the scope of the removal operation. |
| `guest_id` | string | Yes | Unique numerical identifier for the guest user whose access to the specified Workspace will be revoked. This ID targets the specific guest for removal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove tag from task

**Slug:** `CLICKUP_REMOVE_TAG_FROM_TASK`

Removes a tag from a specified task by disassociating it (does not delete the tag from Workspace), succeeding even if the tag is not on the task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task from which the tag will be removed. This can be the standard task ID or a custom task ID if `custom_task_ids` is set to `true`. |
| `team_id` | string | No | The Workspace (Team) ID associated with the task. |
| `tag_name` | string | Yes | The name of the tag to remove from the task. Tag names are case-sensitive. |
| `custom_task_ids` | boolean | No | Set to `true` if you are using a custom task ID (instead of the default task ID) to identify the task. If `true`, the `team_id` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove tags from time entries

**Slug:** `CLICKUP_REMOVE_TAGS_FROM_TIME_ENTRIES`

Removes tags from specified time entries in a team, without deleting the tags from the workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | List of tags to remove, typically identified by name (e.g., `{'name': 'tag_name'}`). |
| `team_id` | string | Yes | The unique identifier for the Team (Workspace) that owns the time entries. |
| `time_entry_ids` | array | Yes | List of time entry IDs from which to remove tags. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove task from list

**Slug:** `CLICKUP_REMOVE_TASK_FROM_LIST`

Removes a task from an extra list (not its home list); the 'Tasks in Multiple Lists' ClickApp must be enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Unique numerical identifier of the list from which the task will be removed. This must be an extra list for the task, not its home list. |
| `task_id` | string | Yes | Unique identifier of the task to be removed from the specified list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove user from workspace

**Slug:** `CLICKUP_REMOVE_USER_FROM_WORKSPACE`

Deactivates a user from a specified ClickUp Workspace, revoking their access (user can be reactivated later); requires the Workspace to be on an Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique numeric identifier of the Workspace (Team) from which the user will be deactivated. |
| `user_id` | string | Yes | The unique numeric identifier of the user to be deactivated from the Workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Docs

**Slug:** `CLICKUP_SEARCH_DOCS`

Tool to search and list Docs metadata in a ClickUp workspace. Use after confirming the workspace ID to quickly locate relevant meeting notes before fetching pages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum results per page. Default: 50, max: 100. |
| `cursor` | string | No | Cursor from previous response to fetch next page. |
| `workspace_id` | string | Yes | ID of the ClickUp Workspace to list Docs from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set custom field value

**Slug:** `CLICKUP_SET_CUSTOM_FIELD_VALUE`

Sets or updates a Custom Field's value for a task; the new value (with type-dependent structure, e.g., `{"value": "text"}` or `{"value": 123, "value_options": {"currency_type":"USD"}}`) is provided in the JSON request body.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The value to set for the Custom Field. Structure depends on field type: Text/Short Text: string (e.g., 'Hello'). Number/Currency/Emoji(Rating): number (e.g., 42). Checkbox: boolean (true/false). Dropdown: option UUID string from type_config.options (e.g., '7a4e5845-8496-4b9f-9097-843b9c737692'). Date: Unix timestamp in milliseconds (e.g., 1645502400000). Email: valid email string. Phone: string with country code (e.g., '+1 123 456 7890'). URL: valid URL string. Labels: array of label UUIDs from type_config (e.g., ['label_id_1', 'label_id_2']). Users/Tasks: object with 'add' and/or 'rem' arrays of IDs (e.g., {'add': ['id1'], 'rem': ['id2']}). Location: object with 'location' (lat/lng) and 'formatted_address' (e.g., {'location': {'lat': -28.0, 'lng': 153.4}, 'formatted_address': 'Gold Coast, Australia'}). Manual Progress: object with 'current' value (e.g., {'current': 50}). |
| `task_id` | string | Yes | Task ID to update. Standard ID, or Custom Task ID if `custom_task_ids` is true. |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true. |
| `field_id` | string | Yes | UUID of the Custom Field to update (must be in standard UUID format with hyphens, e.g., '0f079e26-feef-410d-8e8d-2a21a057ee5e'). Obtainable via 'Get Accessible Custom Fields' or 'Get Task' endpoints. |
| `value_options` | object | No | Optional settings for certain field types. For Date fields: {'time': true} to display time in ClickUp UI. For Currency fields: {'currency_type': 'USD'} to specify currency. |
| `custom_task_ids` | boolean | No | If true, `task_id` is treated as a Custom Task ID, and `team_id` is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Start a time entry

**Slug:** `CLICKUP_START_TIME_ENTRY`

Starts a new time entry (timer) in the specified Team (Workspace), optionally associating it with a task, adding a description, setting billable status, or applying tags (tags feature requires Business Plan or higher).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tid` | string | No | The ID of the task to associate with this time entry. If `custom_task_ids` is true, this should be the custom task ID. |
| `tags` | array | No | Array of tag objects (each with "name", optionally "tag_bg", "tag_fg" for colors) to apply. This feature requires Business Plan or higher. E.g., `[{"name": "Urgent", "tag_bg": "#FF0000"}]`. |
| `team_Id` | string | Yes | The Workspace ID (also called Team ID in ClickUp API) for this time entry. This goes in the URL path. |
| `team_id` | string | No | The ID of the team for resolving custom task IDs. Required only if `custom_task_ids` is set to `true`. For example: `custom_task_ids=true&team_id=123`. |
| `billable` | boolean | No | Specifies if the time entry is billable. |
| `description` | string | No | Description for the time entry. |
| `custom_task_ids` | boolean | No | If set to `true`, the `tid` field will be interpreted as a custom task ID. Requires `team_id` query parameter to be set for custom task ID resolution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Stop a time entry

**Slug:** `CLICKUP_STOP_TIME_ENTRY`

Stops the authenticated user's currently active time entry in the specified Team (Workspace), which requires an existing time entry to be running.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique numeric identifier of the Team (Workspace) where the time entry is being tracked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Track time

**Slug:** `CLICKUP_TRACK_TIME`

Records a time entry for a task using ClickUp's legacy time tracking system; newer endpoints are generally recommended.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | Yes | The end time of the time entry, as a Unix timestamp in milliseconds. |
| `time` | integer | Yes | The duration of the time entry, in milliseconds. If `start` and `end` are both provided, this `time` field is ignored. If `time` is passed with `start` but no `end`, then `end` will be calculated. If `time` is passed with `end` but no `start`, then `start` will be calculated. |
| `start` | integer | Yes | The start time of the time entry, as a Unix timestamp in milliseconds. |
| `task_id` | string | Yes | The unique identifier of the task to track time for. |
| `team_id` | string | No | The ID of the team. Required and used only if `custom_task_ids` is set to `true` to identify the task by its custom ID. For example: `custom_task_ids=true&team_id=123`. |
| `custom_task_ids` | boolean | No | If `true`, the `task_id` is treated as a custom task ID. Requires `team_id` to be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update chat channel

**Slug:** `CLICKUP_UPDATE_CHAT_CHANNEL`

Tool to update a ClickUp chat channel's properties including name, topic, description, visibility, and location. Use when you need to modify an existing chat channel's settings. The endpoint requires both workspace_id and channel_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The updated name of the Chat channel. |
| `topic` | string | No | The updated topic of the Chat channel. |
| `location` | object | No | Location information for the chat channel. |
| `channel_id` | string | Yes | The ID of the specified Channel. |
| `visibility` | string ("PUBLIC" | "PRIVATE") | No | Visibility setting for chat channel. |
| `description` | string | No | The updated description of the Chat channel. |
| `workspace_id` | integer | Yes | The ID of the Workspace. |
| `content_format` | string ("text/md" | "text/plain") | No | Content format for channel messages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update chat message

**Slug:** `CLICKUP_UPDATE_CHAT_MESSAGE`

Tool to update a ClickUp chat message's content, assignee, or resolved status via the v3 API. Use when you need to edit an existing chat message.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | No | The full content of the message to be updated. Maximum 40,000 characters. If not provided, message content will not be changed. |
| `assignee` | string | No | The possible assignee of the message. User ID as string. |
| `resolved` | boolean | No | The resolved status of the message. Set to true to mark as resolved, false to mark as unresolved. |
| `post_data` | object | No | Post data subtype information. |
| `message_id` | string | Yes | The ID of the message to update. |
| `workspace_id` | string | Yes | The ID of the Workspace containing the chat message. Numeric string. |
| `content_format` | string ("text/md" | "text/plain") | No | Content format enum for chat messages. |
| `group_assignee` | string | No | The possible group assignee of the message. Team/group ID as string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit checklist

**Slug:** `CLICKUP_UPDATE_CHECKLIST`

Updates an existing checklist's name or position, identified by its `checklist_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the checklist. |
| `position` | integer | No | New 0-indexed display order for the checklist on a task (e.g., 0 for top). |
| `checklist_id` | string | Yes | The unique identifier (UUID) of the checklist to be edited. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit checklist item

**Slug:** `CLICKUP_UPDATE_CHECKLIST_ITEM`

Updates an existing checklist item, allowing modification of its name, assignee, resolution status, or parent item for nesting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the checklist item. |
| `parent` | string | No | The `checklist_item_id` of an existing item within the same checklist to nest this item under. |
| `assignee` | string | No | The integer user ID to assign to this checklist item. To unassign, consult ClickUp API documentation for the appropriate value (e.g., 0 or null). |
| `resolved` | boolean | No | Set to `true` to mark the item as resolved, or `false` to mark it as unresolved. |
| `checklist_id` | string | Yes | The unique identifier (UUID) of the checklist containing the item to be edited. |
| `checklist_item_id` | string | Yes | The unique identifier (UUID) of the checklist item to be edited. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update comment

**Slug:** `CLICKUP_UPDATE_COMMENT`

Updates an existing task comment's text, assignee (who must be a valid workspace member), or resolution status, requiring a valid existing comment_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assignee` | integer | Yes | User ID of the assignee for the comment. |
| `resolved` | boolean | Yes | Set to `true` to mark the comment as resolved, or `false` to mark it as unresolved. |
| `comment_id` | string | Yes | The unique identifier of the comment to be updated. |
| `comment_text` | string | Yes | The new text content for the comment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update folder

**Slug:** `CLICKUP_UPDATE_FOLDER`

Updates the name of an existing folder in ClickUp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | New name for the folder. |
| `folder_id` | string | Yes | Unique identifier of the folder to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update goal

**Slug:** `CLICKUP_UPDATE_GOAL`

Updates attributes of an existing ClickUp goal, identified by its `goal_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | New name for the goal. |
| `color` | string | Yes | New color (hex code). |
| `goal_id` | string | Yes | Unique identifier (UUID) of the goal to update. |
| `due_date` | integer | Yes | New due date (Unix timestamp in milliseconds). |
| `add_owners` | array | Yes | User IDs to add as owners. |
| `rem_owners` | array | Yes | User IDs to remove as owners. |
| `description` | string | Yes | New description for the goal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit guest on workspace

**Slug:** `CLICKUP_UPDATE_GUEST_ON_WORKSPACE`

Modifies the details and permissions of an existing guest user within a specific Workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique identifier of the Workspace (Team) where the guest belongs. Example: 123456. |
| `guest_id` | string | Yes | The unique identifier of the guest user to be edited. Example: 98765. |
| `username` | string | No | The new username to assign to the guest. Optional - only include if you want to change the guest's username. |
| `can_edit_tags` | boolean | No | Boolean flag to allow or disallow the guest to edit tags. Optional - only include if you want to change this permission. |
| `custom_role_id` | integer | No | Identifier of a custom role for the guest. Ensure this ID is valid within the workspace. Optional - only include if you want to assign/change the custom role. (Note: Business Plus Plan supports one custom role; Enterprise Plan supports unlimited). |
| `can_create_views` | boolean | No | Boolean flag to allow or disallow the guest to create views. Optional - only include if you want to change this permission. |
| `can_see_time_spent` | boolean | No | Boolean flag to allow or disallow the guest to see time spent on tasks. Optional - only include if you want to change this permission. |
| `can_see_time_estimated` | boolean | No | Boolean flag to allow or disallow the guest to see time estimated for tasks. Optional - only include if you want to change this permission. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit key result

**Slug:** `CLICKUP_UPDATE_KEY_RESULT`

Updates an existing key result's progress or note in ClickUp, where the key result measures progress towards a goal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | Yes | A note or comment to add or update for the key result. |
| `key_result_id` | string | Yes | The unique identifier (UUID) of the key result to be edited. |
| `steps_current` | integer | Yes | The current progress of steps for the key result. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update list

**Slug:** `CLICKUP_UPDATE_LIST`

Updates attributes of an existing ClickUp list, such as its name, content, due date, priority, assignee, or color status, identified by its `list_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the list. |
| `status` | string | No | Color for the list (e.g., 'red' or '#FF0000'), visually representing its status (not task status). |
| `content` | string | No | New description or informational content for the list. |
| `list_id` | string | Yes | ID of the list to be updated. |
| `assignee` | string | No | User ID to be set as the assignee for the list, replacing any existing assignee. |
| `due_date` | integer | No | New due date for the list, as a Unix timestamp in milliseconds (e.g., `1672531199000` for Dec 31, 2022, 11:59:59 PM UTC). |
| `priority` | integer | No | Priority level: `1` (Urgent), `2` (High), `3` (Normal), `4` (Low), or `0` to unset. |
| `unset_status` | boolean | No | Set to `true` to remove the list's color, overriding `status`; if `false`, `status` updates or maintains current color. |
| `due_date_time` | boolean | No | Indicates if `due_date` includes a specific time; if `false`, it's an all-day event. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update space

**Slug:** `CLICKUP_UPDATE_SPACE`

Updates an existing ClickUp Space, allowing modification of its name, color, privacy, and feature settings (ClickApps).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the Space. |
| `color` | string | Yes | The new color for the Space, in hexadecimal format. |
| `private` | boolean | Yes | Whether the Space should be private. |
| `space_id` | string | Yes | The ID of the Space to update. |
| `admin_can_manage` | boolean | No | Whether admins can manage this private Space. This is an Enterprise Plan feature. Must be omitted for non-Enterprise workspaces. |
| `multiple_assignees` | boolean | Yes | Whether tasks in this Space can have multiple assignees. |
| `features__tags__enabled` | boolean | No | Enable or disable the Tags ClickApp. When any feature parameter is provided, all feature keys must be included (due_dates, time_estimates, time_tracking, remap_dependencies, custom_fields, dependency_warning, tags, checklists, portfolios). |
| `features__due_dates__enabled` | boolean | No | Enable or disable the Due Dates ClickApp. |
| `features__checklists__enabled` | boolean | No | Enable or disable the Checklists ClickApp. |
| `features__portfolios__enabled` | boolean | No | Enable or disable the Portfolios ClickApp. |
| `features__due_dates__start_date` | boolean | No | Enable or disable Start Dates for the Due Dates ClickApp. |
| `features__custom_fields__enabled` | boolean | No | Enable or disable the Custom Fields ClickApp. |
| `features__time_tracking__enabled` | boolean | No | Enable or disable the Time Tracking ClickApp. |
| `features__time_estimates__enabled` | boolean | No | Enable or disable the Time Estimates ClickApp. |
| `features__due_dates__remap_due_dates` | boolean | No | Enable or disable remapping of due dates for the Due Dates ClickApp. |
| `features__dependency_warning__enabled` | boolean | No | Enable or disable Dependency Warning for the Task Dependencies ClickApp. |
| `features__remap_dependencies__enabled` | boolean | No | Enable or disable Remap Dependencies for the Task Dependencies ClickApp. |
| `features__due_dates__remap_closed_due_date` | boolean | No | Enable or disable remapping of closed due dates for the Due Dates ClickApp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit space tag

**Slug:** `CLICKUP_UPDATE_SPACE_TAG`

Updates an existing tag's name and colors in a ClickUp Space; requires current tag name for identification, and new values for tag name, foreground color, and background color, all of which are mandatory for the update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Unique identifier of the Space containing the tag. |
| `tag_name` | string | Yes | Current name of the tag to edit. This tag must exist within the specified Space. |
| `tag__name` | string | No | New name to assign to the tag. |
| `tag__bg__color` | string | No | New background color for the tag, specified as a hexadecimal string (e.g., '#000000'). |
| `tag__fg__color` | string | No | New foreground color for the tag, specified as a hexadecimal string (e.g., '#FFFFFF'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update task

**Slug:** `CLICKUP_UPDATE_TASK`

Updates attributes of an existing task; `team_id` is required if `custom_task_ids` is true, use a single space (" ") for `description` to clear it, and provide at least one modifiable field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New task name. |
| `parent` | string | No | ID of new parent task to make this a subtask; cannot convert subtask to regular task this way. |
| `status` | string | No | New task status (case-sensitive, must be valid in Workspace). |
| `task_id` | string | Yes | Unique task identifier; use custom task ID if `custom_task_ids` is true. |
| `team_id` | string | No | Team ID, required if `custom_task_ids` is true. |
| `archived` | boolean | No | True to archive, false to unarchive. |
| `due_date` | integer | No | New due date (Unix timestamp in milliseconds). |
| `priority` | integer | No | Priority: 1 (Urgent), 2 (High), 3 (Normal), 4 (Low). Omit or `None` to remove. |
| `start_date` | integer | No | New start date (Unix timestamp in milliseconds). |
| `description` | string | No | New task description; use a single space (" ") to clear. |
| `due_date_time` | boolean | No | True if `due_date` includes time, false if all-day. |
| `time_estimate` | integer | No | New time estimate in milliseconds. |
| `assignees__add` | array | No | List of user IDs to add as assignees. |
| `assignees__rem` | array | No | List of user IDs to remove as assignees. |
| `custom_item_id` | integer | No | Custom task type ID. Use `1` for Milestone, its ID for custom type. Omit/`None` to make regular task (API's 'null' equivalent). |
| `custom_task_ids` | boolean | No | If true, `task_id` is a custom ID and `team_id` is required. |
| `start_date_time` | boolean | No | True if `start_date` includes time, false if all-day. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update team

**Slug:** `CLICKUP_UPDATE_TEAM`

Updates an existing ClickUp User Group (Team) using its `group_id`; note that adding a view-only guest as a paid member may incur charges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the User Group (Team). |
| `handle` | string | No | The new handle for the User Group (Team), used for @mentions (e.g., '@developers'). |
| `group_id` | string | Yes | The ID of the User Group (Team) to update. |
| `members__add` | array | No | A list of user IDs to add to the User Group (Team). |
| `members__rem` | array | No | A list of user IDs to remove from the User Group (Team). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a time entry

**Slug:** `CLICKUP_UPDATE_TIME_ENTRY`

Updates an existing ClickUp time entry. Requires team_id (workspace ID) and timer_id (time entry ID). Optional fields: description, tags, tag_action, start/end times, duration, tid (task ID), billable status. Note: start and end times should be provided together. This is an Advanced Time Tracking feature that may require a Business Plan or higher.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | No | New end time (Unix timestamp in milliseconds). If provided, `start` must also be provided. |
| `tid` | string | No | The ID of the task for this time entry; if `custom_task_ids` is `true`, this should be the custom task ID. |
| `tags` | array | No | List of tag objects (e.g., `{'name': 'your-tag'}`) for the time entry. Time tracking labels are for Business Plan and above users. |
| `start` | integer | No | New start time (Unix timestamp in milliseconds). If provided, `end` must also be provided. |
| `team_id` | string | Yes | The ID of the Team (Workspace) for the time entry. Path parameter. |
| `billable` | boolean | No | Indicates whether the time entry is billable. |
| `duration` | integer | No | New duration of the time entry in milliseconds; can be an alternative to `start` and `end` times. |
| `timer_id` | string | Yes | The unique identifier of the time entry to update. Path parameter. |
| `tag_action` | string | No | Specifies how to handle `tags` (e.g., 'add', 'remove'). |
| `description` | string | No | A new description for the time entry. |
| `custom_task_ids` | boolean | No | If `true`, `tid` is interpreted as a custom task ID. When true, the team_id path parameter value will also be used as a query parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Change tag names from time entries

**Slug:** `CLICKUP_UPDATE_TIME_ENTRY_TAG`

Updates the name, background color, and/or foreground color for an existing time entry tag, identified by its current `name` and `team_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The current name of the time entry tag to be modified. |
| `tag_bg` | string | Yes | The new background color for the tag, specified as a hexadecimal color code. |
| `tag_fg` | string | Yes | The new foreground (text) color for the tag, specified as a hexadecimal color code. |
| `team_id` | string | Yes | The unique identifier of the Team (Workspace) where the time entry tag exists. |
| `new_name` | string | Yes | The new name to be assigned to the time entry tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit time tracked

**Slug:** `CLICKUP_UPDATE_TIME_TRACKED`

Edits a legacy time-tracked interval for a task (identified by `task_id` and `interval_id`) to update its start/end times and duration; `team_id` is required if `custom_task_ids` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | Yes | New end date and time for the interval as a Unix timestamp in milliseconds. |
| `time` | integer | Yes | New total duration of the time interval in milliseconds; typically the difference between `end` and `start`. |
| `start` | integer | Yes | New start date and time for the interval as a Unix timestamp in milliseconds. |
| `task_id` | string | Yes | Unique task identifier; refers to custom task ID if `custom_task_ids` is true. |
| `team_id` | integer | No | Team ID, required if `custom_task_ids` is true. |
| `interval_id` | string | Yes | Unique identifier of the time interval record to edit. |
| `custom_task_ids` | boolean | No | If true, `task_id` is treated as a custom task ID, and `team_id` must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit user on workspace

**Slug:** `CLICKUP_UPDATE_USER_ON_WORKSPACE`

Updates a user's username, admin status, or custom role in a Workspace; requires the Workspace to be on an Enterprise Plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin` | boolean | No | Set `true` to make user an admin, `false` to revoke admin privileges. Optional - only include if you want to change admin status. |
| `team_id` | string | Yes | Workspace (formerly Team) ID where the user resides. |
| `user_id` | string | Yes | ID of the user whose details are to be edited. |
| `username` | string | No | New username to assign. Optional - only include if you want to change the username. |
| `custom_role_id` | integer | No | ID of the custom role to assign, defining their permissions. Optional - only include if you want to change the custom role. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update view

**Slug:** `CLICKUP_UPDATE_VIEW`

Updates an existing ClickUp view's settings such as name, type, grouping, or filters; ensure `parent_id` and `parent_type` define a valid hierarchy, and that specified field names (e.g. for sorting, columns) are valid within the ClickUp workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the view. |
| `type` | string | Yes | The type of the view. |
| `view_id` | string | Yes | The unique identifier of the view to be updated. |
| `parent__id` | string | No | The ID of the Workspace, Space, Folder, or List where the view is located.  |
| `divide__dir` | null | No | The direction for dividing the view. Currently, this field may not be actively used or may be deprecated. |
| `filters__op` | string | No | The operator for combining filters. Available values are `AND` and `OR`. |
| `parent__type` | integer | No | The level of the Hierarchy where the view is created. Options include: Workspace (Everything Level): `7`, Space: `4`, Folder: `5`, List: `6`. |
| `divide__field` | null | No | The field to divide the view by (e.g., to create swimlanes in a board view). Currently, this field may not be actively used or may be deprecated. |
| `grouping__dir` | integer | No | The sort order for grouping. Use `1` for ascending (e.g., urgent priority at the top) or `-1` for descending (e.g., no priority at the top). |
| `columns__fields` | array | No | Fields to display as columns in the view. Custom Fields require the `_cf` prefix and their ID (e.g., `_cf_custom_field_id`). |
| `filters__fields` | array | No | Fields to apply filters on; refer to ClickUp API documentation for available fields. |
| `filters__search` | string | No | A search string to filter tasks by name or content. |
| `grouping__field` | string | No | The field to group tasks by. Options include: `none`, `status`, `priority`, `assignee`, `tag`, or `dueDate`. |
| `sorting__fields` | array | No | Fields to sort tasks by; refer to ClickUp API documentation for available filter fields. |
| `grouping__ignore` | boolean | No | If true, tasks with no value for the `grouping_field` will not be grouped. |
| `divide__collapsed` | boolean | No | Indicates if divided sections should be collapsed. Currently, this field may not be actively used or may be deprecated. |
| `grouping__collapsed` | array | No | A list of group identifiers (e.g., status names or assignee IDs) that should be collapsed by default in the view. |
| `filters__show__closed` | boolean | No | If true, closed tasks will be included in the view. |
| `settings__me__comments` | boolean | No | If true, in 'Me Mode', only comments where the current user is mentioned or involved will be shown. |
| `settings__me__subtasks` | boolean | No | If true, in 'Me Mode', only subtasks assigned to the current user will be shown. |
| `settings__show__images` | boolean | No | If true, images attached to tasks will be displayed in the view (e.g. cover images in card view). |
| `settings__me__checklists` | boolean | No | If true, in 'Me Mode', only checklists assigned to the current user will be shown. |
| `settings__show__subtasks` | integer | No | Controls how subtasks are displayed. Acceptable values are `1` (show subtasks as separate tasks), `2` (show subtasks expanded under parent task), or `3` (show subtasks collapsed under parent task). |
| `team__sidebar__assignees` | array | No | A list of assignee user IDs to feature in the team sidebar. |
| `settings__show__assignees` | boolean | No | If true, assignees will be displayed on tasks. |
| `settings__show__task__locations` | boolean | No | If true, task locations (List, Folder, Space) will be displayed. |
| `settings__show__closed__subtasks` | boolean | No | If true, closed subtasks will be included in the view. |
| `team__sidebar__unassigned__tasks` | boolean | No | If true, unassigned tasks will be shown in the team sidebar. |
| `team__sidebar__assigned__comments` | boolean | No | If true, assigned comments will be shown in the team sidebar. |
| `settings__collapse__empty__columns` | string | No | If true, columns with no tasks will be collapsed (e.g., in Board view). This might accept boolean as a string like 'true' or 'false'. |
| `settings__show__subtask__parent__names` | boolean | No | If true, parent task names will be displayed for subtasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update webhook

**Slug:** `CLICKUP_UPDATE_WEBHOOK`

Updates the endpoint URL, monitored events, and status of an existing webhook, identified by its `webhook_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `events` | array | Yes | List of event types to monitor. Use ["*"] to subscribe to all events. Common events include: taskCreated, taskUpdated, taskDeleted, taskStatusUpdated, taskAssigneeUpdated, taskDueDateUpdated, taskTagUpdated, taskMoved, taskCommentPosted, taskCommentUpdated, listCreated, listUpdated, listDeleted, folderCreated, folderUpdated, folderDeleted, spaceCreated, spaceUpdated, spaceDeleted, goalCreated, goalUpdated, goalDeleted, keyResultCreated, keyResultUpdated, keyResultDeleted. |
| `status` | string | Yes | The desired status of the webhook after the update. |
| `endpoint` | string | Yes | The new URL where the webhook payloads will be sent. |
| `webhook_id` | string | Yes | The unique identifier of the webhook to be updated. Example: 'e506-4a29-9d42-26e504e3435e'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update workspace ACL

**Slug:** `CLICKUP_UPDATE_WORKSPACE_ACL`

Updates privacy and access control list (ACL) permissions for a workspace object or location. Use this to make objects private/public or manage user/team permissions for spaces, folders, lists, tasks, and other ClickUp objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entries` | array | No | The user or user group (Team) entries to give, remove, or edit permissions. Each entry must include 'kind' (user or user_group) and 'id'. Optionally include 'permission_level' to set specific permissions. |
| `private` | boolean | No | Set the privacy of the object or location. True for private, false for public. |
| `object_id` | string | Yes | The ID of the specific object to update ACL permissions for. |
| `object_type` | string ("attachment" | "attachmentAccess" | "approval" | "banWorkspace" | "checklist" | "checklistItem" | "checklistTemplateAccess" | "comment" | "commentsLastReadAt" | "customField" | "customFieldAccess" | "customItem" | "customPermissionLevel" | "dashboard" | "dashboardAccess" | "doc" | "docAccess" | "folder" | "folderDescendantsSet" | "folderTemplateAccess" | "form" | "formulaValue" | "foundationalJob" | "goal" | "goalAccess" | "goalFolder" | "goalFolderAccess" | "hierarchy" | "list" | "listDescendantsSet" | "listDescendantsPoints" | "listDescendantsTimeEstimates" | "listTemplateAccess" | "notepad" | "page" | "pageAccess" | "post" | "reminder" | "reminderAccess" | "rolledUpFieldValue" | "scheduledComment" | "space" | "spaceDescendantsSet" | "spaceTemplateAccess" | "task" | "taskAccess" | "taskHistory" | "taskProperty" | "taskTemplateAccess" | "template" | "user" | "userAccess" | "userGroup" | "userHierarchy" | "userPresence" | "view" | "viewAccess" | "viewTemplateAccess" | "whiteboard" | "whiteboardAccess" | "widget" | "workspace" | "workspaceDescendantsSet" | "workscheduleWorkweekSchedule" | "workscheduleScheduleExceptions") | Yes | The type of object to update ACL permissions for. |
| `workspace_id` | string | Yes | The ID of the Workspace. Numeric string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Folder Created

**Slug:** `CLICKUP_FOLDER_CREATED`

**Type:** webhook

Triggers when a new Folder is created.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | No | Restrict events to this Space. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | Id of the Folder that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Folder lives in. |

### Folder Deleted

**Slug:** `CLICKUP_FOLDER_DELETED`

**Type:** webhook

Triggers when a Folder is deleted.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | No | Restrict events to this Space. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | Id of the Folder that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Folder lives in. |

### Folder Updated

**Slug:** `CLICKUP_FOLDER_UPDATED`

**Type:** webhook

Triggers when a Folder is updated (renamed, content edited, etc.).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | No | Restrict events to this Space. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | Id of the Folder that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Folder lives in. |

### List Created

**Slug:** `CLICKUP_LIST_CREATED`

**Type:** webhook

Triggers when a new List is created.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Id of the List that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the List lives in. |

### List Deleted

**Slug:** `CLICKUP_LIST_DELETED`

**Type:** webhook

Triggers when a List is deleted.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Id of the List that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the List lives in. |

### List Updated

**Slug:** `CLICKUP_LIST_UPDATED`

**Type:** webhook

Triggers when a List is updated (renamed, content edited, etc.).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes on the List — typically a single `NameChange` (rename). Each change carries its own `actor` and `occurred_at`. |
| `list_id` | string | Yes | Id of the List that was updated. |
| `team_id` | integer | Yes | Numeric Workspace id the List lives in. |

### Space Created

**Slug:** `CLICKUP_SPACE_CREATED`

**Type:** webhook

Triggers when a new Space is created in the Workspace.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Id of the Space that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Space lives in. |

### Space Deleted

**Slug:** `CLICKUP_SPACE_DELETED`

**Type:** webhook

Triggers when a Space is deleted.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Id of the Space that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Space lives in. |

### Space Updated

**Slug:** `CLICKUP_SPACE_UPDATED`

**Type:** webhook

Triggers when a Space is updated (renamed, settings changed, etc.).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | Id of the Space that triggered the event. |
| `team_id` | integer | Yes | Numeric Workspace id the Space lives in. |

### Task Assignee Updated

**Slug:** `CLICKUP_TASK_ASSIGNEE_UPDATED`

**Type:** webhook

Triggers when an assignee is added to or removed from a task.

`changes[]` carries `AssigneeAddChange` and/or `AssigneeRemoveChange`
entries. A single event may bundle multiple adds and/or removes —
for example when a workflow re-routes a task between two users in
one operation.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Comment Posted

**Slug:** `CLICKUP_TASK_COMMENT_POSTED`

**Type:** webhook

Triggers when a comment is added to a task.

`changes[]` carries one `CommentChange` entry whose `comment` field
is the typed `ClickupComment` object (id, text, user, reactions,
etc.).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Comment Updated

**Slug:** `CLICKUP_TASK_COMMENT_UPDATED`

**Type:** webhook

Triggers when an existing comment on a task is edited.

`changes[]` carries one `CommentChange` entry whose `comment` field
is the comment in its updated form.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Created

**Slug:** `CLICKUP_TASK_CREATED`

**Type:** webhook

Triggers when a new task is created in the configured Workspace.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_by` | object | No | A ClickUp user as it appears in webhook payloads.  Slimmed to the four fields a customer typically uses; ClickUp's noise (`role`, `role_subtype`, `color`, `initials`, `profile_picture_key`) is dropped on output. |
| `initial_status` | object | No | A status as it appears in webhook `before`/`after` values.  Webhook status objects omit the `id` that GET /task ships, and `status` can be `null` to represent the "no prior status" side of a creation event. |
| `occurred_at` | string | No | Millisecond-epoch time of the creation. |
| `task_id` | string | Yes | Id of the task that was created. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Deleted

**Slug:** `CLICKUP_TASK_DELETED`

**Type:** webhook

Triggers when a task is deleted.

ClickUp ships no history_items or actor info on deletes — the payload
carries only the task_id and team_id.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Id of the task that was deleted. |
| `team_id` | integer | Yes | Numeric Workspace id the task belonged to. |

### Task Due Date Updated

**Slug:** `CLICKUP_TASK_DUE_DATE_UPDATED`

**Type:** webhook

Triggers when a task's due date is set, changed, or cleared.

`changes[]` carries `DueDateChange` entries only; `before` and
`after` are millisecond-epoch strings or `null`.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Priority Updated

**Slug:** `CLICKUP_TASK_PRIORITY_UPDATED`

**Type:** webhook

Triggers when a task's priority changes.

`changes[]` carries `PriorityChange` entries only.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Status Updated

**Slug:** `CLICKUP_TASK_STATUS_UPDATED`

**Type:** webhook

Triggers when a task's status changes.

`changes[]` carries `StatusChange` entries only — ClickUp pre-filters
server-side by event type. Lower traffic than subscribing to
`CLICKUP_TASK_UPDATED` and pattern-matching `StatusChange`.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Tag Updated

**Slug:** `CLICKUP_TASK_TAG_UPDATED`

**Type:** webhook

Triggers when a tag is added to or removed from a task.

`changes[]` carries `TagAddChange` and/or `TagRemoveChange` entries.
Adds use ClickUp's `field == "tag"`, removes use the undocumented
`field == "tag_removed"`; both are normalised into the typed change
classes.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Time Estimate Updated

**Slug:** `CLICKUP_TASK_TIME_ESTIMATE_UPDATED`

**Type:** webhook

Triggers when a task's time estimate is set, changed, or cleared.

`changes[]` carries `TimeEstimateChange` entries only; `before` and
`after` are millisecond strings or `null`.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Time Tracked Updated

**Slug:** `CLICKUP_TASK_TIME_TRACKED_UPDATED`

**Type:** webhook

Triggers when a time-tracking interval is created, edited, or deleted on a task.

Fires once per interval-change. Reads ClickUp's top-level `data.description`
for the lifecycle action and `data.interval_id` for the correlation key —
these are unique to time-tracking events and are present even on Deleted
(where `history_items` is empty).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string ("Time Tracking Created" | "Time Tracking Edited" | "Time Tracking Deleted") | Yes | Which lifecycle action fired this event. |
| `actor` | object | No | A ClickUp user as it appears in webhook payloads.  Slimmed to the four fields a customer typically uses; ClickUp's noise (`role`, `role_subtype`, `color`, `initials`, `profile_picture_key`) is dropped on output. |
| `interval` | object | No | A time-tracking interval as it appears in webhook `after`.  Only this fixed set of fields ships in the webhook; description, billable, tags, and task_location require `CLICKUP_GET_TIME_ENTRY`. |
| `interval_id` | string | Yes | Stable id of the time entry. The same value flows through this entry's Created → Edited → Deleted events; use it to correlate across the lifecycle. |
| `occurred_at` | string | No | Millisecond-epoch time of the change; null on Deleted. |
| `task_id` | string | Yes | Id of the task the interval is logged on. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |

### Task Updated

**Slug:** `CLICKUP_TASK_UPDATED`

**Type:** webhook

Triggers when a task is updated.

Fires for every kind of update on the task, including comments. If
you only care about a specific property changing, prefer the
dedicated trigger (`CLICKUP_TASK_STATUS_UPDATED`, etc.) — those are
pre-filtered by ClickUp and produce less traffic.

`changes[]` can carry any FieldChange variant (`StatusChange`,
`PriorityChange`, `AssigneeAddChange`, `AssigneeRemoveChange`,
`TagAddChange`, `TagRemoveChange`, `DueDateChange`,
`TimeEstimateChange`, `TimeSpentChange`, `NameChange`,
`ContentChange`, `CommentChange`, `CustomFieldChange`).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | No | Restrict events to this Folder. Mutually exclusive with space_id and list_id. Use `CLICKUP_GET_FOLDERS` to discover valid Folder IDs. |
| `list_id` | string | No | Restrict events to this List. Mutually exclusive with space_id and folder_id. Use `CLICKUP_GET_LISTS` (or `CLICKUP_GET_FOLDERLESS_LISTS` for folderless lists) to discover valid List IDs. |
| `space_id` | string | No | Restrict events to this Space. Mutually exclusive with folder_id and list_id. Use `CLICKUP_GET_SPACES` to discover valid Space IDs. |
| `workspace_id` | string | Yes | Your ClickUp Workspace ID (the numeric `team_id`). Use `CLICKUP_GET_AUTHORIZED_TEAMS_WORKSPACES` to discover valid Workspace IDs. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changes` | array | No | Per-field changes carried by this event. Each entry is a typed change class discriminated on `field` — match on isinstance() or check `change.field` to read the typed value. Each change carries its own `actor` and `occurred_at`. |
| `task_id` | string | Yes | Id of the task this event is about. |
| `team_id` | integer | Yes | Numeric Workspace id the task lives in. |
