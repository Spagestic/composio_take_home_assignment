# Monday

monday.com is a customizable work management platform for project planning, collaboration, and automation, supporting agile, sales, marketing, and more

- **Category:** project management
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 126
- **Triggers:** 0
- **Slug:** `MONDAY`
- **Version:** 20260918_00

## Frequently Asked Questions

### Why do I see "App is not installed" when connecting Monday?

Monday requires the OAuth app to be installed in the target workspace before users can authorize their accounts. If the app is not installed, Monday can stop the connection flow with an "App is not installed" message.

![Monday authorization screen showing that the app is not installed before authorization can continue.](/images/kb/toolkits/monday/monday-app-not-installed.png)

A Monday workspace admin only needs to install the app once per workspace. After the admin approves the installation, users in that workspace can connect their Monday accounts normally.

If you are using the Composio-managed Monday app, ask a Monday workspace admin to install it with this link: `https://auth.monday.com/oauth2/authorize?client_id=96b038435fc029e045f9ba800e66fefa&response_type=install`.

We are working on making this flow smoother so developers do not need to manually share the install link.

### How do I set up custom OAuth credentials for Monday.com?

For a step-by-step guide on creating and configuring your own Monday.com OAuth credentials, see [How to create OAuth2 credentials for Monday](https://composio.dev/auth/monday).

For a custom Monday OAuth app, add the Composio redirect URL/callback URL to the Monday app settings. After the OAuth flow completes, the access token is populated automatically.

### How do Monday scopes work?

Monday scopes are configured on the Monday OAuth app and picked up during authorization. For the common connection flow, you do not need to configure scopes separately in the auth config.

If you are using the Composio-managed Monday app, use the default scope setup. If you are creating your own Monday OAuth app, configure the scopes you need in Monday. If you intentionally want to request only a subset of the OAuth app's scopes, configure that subset in the auth config; otherwise, leave the auth config scope field alone.

## Tools

### Get account trigger statistics

**Slug:** `MONDAY_ACCOUNT_TRIGGER_STATISTICS`

Tool to retrieve statistics about account-level triggers and automations. Use when you need to monitor trigger execution metrics including success rates, failure counts, and total execution numbers.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Activate users

**Slug:** `MONDAY_ACTIVATE_USERS`

Tool to activate or reactivate users in a Monday.com account. Use when you need to enable user accounts that were previously deactivated. Cannot be used to activate your own account. Requires account management permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | List of user IDs to activate. Maximum of 200 user IDs per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add subscribers to board

**Slug:** `MONDAY_ADD_SUBSCRIBERS_TO_BOARD`

Tool to add users as subscribers to a Monday.com board. Use when granting subscriber or owner access to specific users on a board. Note: This mutation is deprecated - consider using add_users_to_board instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("owner" | "subscriber") | No | Role for the added users on the board. Possible values: 'owner' or 'subscriber'. Defaults to 'subscriber'. |
| `board_id` | integer | Yes | The board's unique identifier. |
| `user_ids` | array | Yes | Array of user unique identifiers to add as subscribers to the board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add subscribers to object

**Slug:** `MONDAY_ADD_SUBSCRIBERS_TO_OBJECT`

Tool to add subscribers or owners to a monday.com object. Use when you need to grant users notification access or ownership permissions to a specific object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the object to add subscribers to. |
| `kind` | string ("owner" | "subscriber") | No | The role to assign to users. Defaults to 'subscriber' if not specified. 'owner' grants full control permissions, 'subscriber' grants notification access only. |
| `user_ids` | array | Yes | Array of user identifiers to add as subscribers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add teams to board

**Slug:** `MONDAY_ADD_TEAMS_TO_BOARD`

Tool to add teams to a Monday.com board with specified permission levels. Use when you need to associate teams with a board as owners or subscribers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string | No | Role for the added teams on the board. Possible values: 'owner' or 'subscriber'. If not specified, teams will be added as subscribers. |
| `board_id` | integer | Yes | Unique identifier of an existing Monday.com board. |
| `team_ids` | array | Yes | List of unique identifiers for existing Monday.com teams. Pass -1 to subscribe all account members to the board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add users to board

**Slug:** `MONDAY_ADD_USERS_TO_BOARD`

Adds users to a Monday.com board with a specified role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("owner" | "subscriber") | No | Role for the added users on the board. |
| `board_id` | integer | Yes | Unique identifier of an existing Monday.com board. |
| `user_ids` | array | Yes | List of unique identifiers for existing Monday.com users. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add users to team

**Slug:** `MONDAY_ADD_USERS_TO_TEAM`

Tool to add users to a Monday.com team. Use when updating team membership by adding user(s).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | Unique identifier of an existing Monday.com team. |
| `user_ids` | array | Yes | List of unique identifiers for existing Monday.com users. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add users to workspace

**Slug:** `MONDAY_ADD_USERS_TO_WORKSPACE`

Tool to add one or more users to a workspace. Use when inviting existing users to collaborate in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("owner" | "subscriber") | No | The role to assign to the users in the workspace. 'owner' grants full control over the workspace. 'subscriber' grants access to view and collaborate on boards within the workspace. |
| `user_ids` | array | Yes | List of numeric user IDs to add to the workspace. You can get user IDs from the list_users action or from board subscribers. |
| `workspace_id` | integer | Yes | The unique numeric ID of the workspace to add users to. You can get workspace IDs from the get_workspaces action or from board details. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Aggregate board data

**Slug:** `MONDAY_AGGREGATE_DATA`

Tool to aggregate data across Monday.com boards using groupings and aggregation functions like COUNT, SUM, MEAN, MIN, MAX. Use when you need to compute metrics, counts, or summaries from board data with optional filtering and grouping.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | object | Yes | Aggregation query configuration including data source, selections, grouping, and filters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get app subscription

**Slug:** `MONDAY_APP_SUBSCRIPTION`

Tool to retrieve current app subscription data for the account. Use when you need to check subscription status, billing period, trial status, or pricing information. Must be called within app context using account authentication token.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive board

**Slug:** `MONDAY_ARCHIVE_BOARD`

Archives a specified, existing, and unarchived board in Monday.com; archived boards can typically be restored later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | Identifier of the board to be archived; it must exist and not already be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive item

**Slug:** `MONDAY_ARCHIVE_ITEM`

Archives an existing Monday.com item, moving it from active board views to the archive where it can be potentially restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | Yes | Unique identifier of the Monday.com item to archive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive object

**Slug:** `MONDAY_ARCHIVE_OBJECT`

Archives a Monday.com object by changing its state to archived rather than permanently deleting it. Use when you need to remove objects from active use while preserving the ability to restore them later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Monday.com object to archive. Can be an ID for various object types like boards, items, or workspaces. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive workspace

**Slug:** `MONDAY_ARCHIVE_WORKSPACE`

Tool to archive a Monday.com workspace. Use when you want to soft-remove a workspace from view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_id` | string | Yes | The unique identifier of the workspace to archive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get audit logs

**Slug:** `MONDAY_AUDIT_LOGS`

Tool to retrieve detailed security-related activity records for a Monday.com account. Use when you need to audit user actions, security events, or account activity. Requires Enterprise plan and account admin permissions with manage_account_security scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1). |
| `limit` | integer | No | Number of log entries to return per page. |
| `events` | array | No | Array of specific event types to retrieve (e.g., 'login', 'logout'). |
| `user_id` | string | No | Filter audit logs for a specific user by their ID. |
| `end_time` | string | No | Filter logs up to this date/time (ISO8601 format). |
| `ip_address` | string | No | Filter logs by specific IP address. |
| `start_time` | string | No | Filter logs from this date/time onwards (ISO8601 format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get document blocks

**Slug:** `MONDAY_BLOCKS`

Tool to retrieve document block data from workdocs via the API. Returns block metadata including type, content, position, and creation info. Use when you need to fetch content blocks from Monday.com documents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination, starting at 1. Defaults to 1. |
| `limit` | integer | No | Maximum number of blocks to return per document. Defaults to 25. |
| `doc_ids` | array | Yes | List of document IDs to retrieve blocks from. At least one doc ID is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get boards

**Slug:** `MONDAY_BOARDS`

Tool to retrieve board data via the Monday.com API. Returns core metadata (id, name, state, kind, hierarchy type, workspace) about one or multiple boards with filtering options by state, board kind, hierarchy type, and workspace. For structural details, column configurations, or ownership info, use dedicated board enrichment tools.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | List of specific board IDs to retrieve. Provide to filter by board IDs. |
| `page` | integer | No | Page number for pagination; starts at 1. |
| `limit` | integer | No | Maximum number of boards to return. Default is 25. |
| `state` | string ("active" | "archived" | "deleted" | "all") | No | Filter boards by state. Valid values: 'active', 'archived', 'deleted', 'all'. Default is 'active'. |
| `order_by` | string ("created_at" | "used_at") | No | Sort boards by 'created_at' or 'used_at' in descending order. |
| `board_kind` | string ("private" | "public" | "share") | No | Filter boards by type. Valid values: 'private', 'public', 'share'. |
| `workspace_ids` | array | No | List of workspace IDs to filter boards by workspace. |
| `hierarchy_type` | array | No | Filter boards by hierarchy type. Can include 'classic', 'multi_level', or both. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Change simple column value

**Slug:** `MONDAY_CHANGE_SIMPLE_COLUMN_VALUE`

Changes a specific column's value for a Monday.com item using a simple string, suitable for Text, Status, or Dropdown columns; can create new labels if `create_labels_if_missing` is true for Status/Dropdown columns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | New string value. For Status columns: use either a label name (e.g., 'Done', 'Working on it') or an index number as string (e.g., '1'). For Dropdown columns: use the label name. For Text columns: use plain text. |
| `item_id` | integer | Yes | The unique identifier of the item for which the column value will be updated. |
| `board_id` | integer | Yes | The unique identifier of the board where the item and column are located. |
| `column_id` | string | Yes | Identifier of the column to change; typically a Text, Status, or Dropdown column. |
| `create_labels_if_missing` | boolean | No | For Status/Dropdown columns: when true (default), the label will be matched or created if it doesn't exist. Set to false only when using index values or when you want strict label matching. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get board columns

**Slug:** `MONDAY_COLUMNS`

Tool to retrieve column metadata from boards via the GraphQL API. Returns array of column information including type, title, settings, and capabilities. Use when you need to inspect board structure or column configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_ids` | array | Yes | Array of board IDs to retrieve columns from. Must provide at least one board ID. |
| `column_ids` | array | No | Optional array of specific column IDs to filter. Column IDs are strings (1-20 characters, lowercase letters and underscores only). |
| `column_types` | array | No | Optional array of column types to filter. Available types: auto_number, button, checkbox, color_picker, board_relation, country, creation_log, date, dependency, dropdown, email, file, formula, hour, item_id, last_updated, link, location, long_text, mirror, doc, name, numbers, people, phone, progress, rating, status, tag, text, timeline, timerange, vote, week, world_clock. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get connection board IDs

**Slug:** `MONDAY_CONNECTION_BOARD_IDS`

Tool to retrieve board IDs associated with connection columns. Use when you need to discover which boards can be linked through connection columns. Queries boards and filters for connection columns (board_relation type) to extract the configured board IDs from their settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of boards to retrieve. Defaults to 25 if not specified. |
| `board_ids` | array | No | List of specific board IDs to query. If not provided, queries all accessible boards up to the limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get connections

**Slug:** `MONDAY_CONNECTIONS`

Tool to retrieve connection data for integrations with external services. Use when you need to inspect or manage integrations like Gmail, Slack, or other external service connections. Returns a list of connections with details about authentication, state, and associated accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page index for offset-based pagination (starts at 1). Use this for traditional page-by-page navigation. |
| `order` | string | No | Ordering of returned connections. Use field name for ascending (e.g., 'createdAt') or prefix with '-' for descending (e.g., '-createdAt'). |
| `page_size` | integer | No | Records per page for offset-based pagination. Determines how many connections are returned per page. |
| `pagination` | object | No | Cursor-based pagination configuration. |
| `connection_state` | string | No | Filter by connection state (e.g., 'active', 'inactive'). Only connections matching this state will be returned. |
| `with_automations` | boolean | No | Include connections with automations attached. Set to true to only return connections that have automations. |
| `with_partial_scopes` | boolean | No | Include connections created with partial scopes. When true, connections with limited permissions are included. |
| `with_state_validation` | boolean | No | Validate connection state before returning. When true, the API validates each connection's current state. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Connect project to portfolio

**Slug:** `MONDAY_CONNECT_PROJECT_TO_PORTFOLIO`

Links an existing project board to a portfolio board for centralized management. Requires boards:write scope and Enterprise plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_board_id` | integer | Yes | The unique identifier of the project board to connect to the portfolio. |
| `portfolio_board_id` | integer | Yes | The unique identifier of the portfolio board to which the project will be linked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Convert board to project

**Slug:** `MONDAY_CONVERT_BOARD_TO_PROJECT`

Converts a regular Monday.com board into a project board with advanced project management features. Use when upgrading a board to enable project-specific capabilities like timeline views, project status tracking, and owner assignments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board to convert to a project. |
| `column_mappings` | object | Yes | Mapping configuration specifying which existing columns should be used for project-specific fields (status, timeline, owner). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a Monday board

**Slug:** `MONDAY_CREATE_BOARD`

Creates a Monday.com board; `template_id` if used must be accessible, and `folder_id` must be in `workspace_id` if both are provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | No | ID of the folder for the board. If `workspace_id` is absent, the board uses this folder's containing workspace. If `workspace_id` is present, this folder must be within the specified workspace. |
| `board_kind` | string ("public" | "private" | "share") | Yes | The kind of board to create, determining its visibility and access. |
| `board_name` | string | Yes | The name for the new board. |
| `description` | string | No | Description for the new board. |
| `template_id` | integer | No | ID of an accessible template to use for the new board. |
| `workspace_id` | integer | No | Numeric ID of the workspace for the board. Use MONDAY_GET_WORKSPACES action to retrieve valid workspace IDs. This field is optional - if omitted, the board is created in the default workspace. If `folder_id` is given, this workspace must contain that folder. |
| `board_owner_ids` | array | No | User IDs to be assigned as owners of the board. |
| `board_subscriber_ids` | array | No | User IDs to be subscribed to the board. |
| `board_subscriber_teams_ids` | array | No | Team IDs to be subscribed to the board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create column

**Slug:** `MONDAY_CREATE_COLUMN`

Creates a new column with a specified type and title on a monday.com board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Title for the new column. |
| `board_id` | integer | Yes | Unique identifier of the board for the new column. Note: Subitems boards are not supported; use create_subitem mutation instead. |
| `defaults` | string | No | JSON string with default values or settings, often for 'status' or 'dropdown' types to define labels. Example: '''{"labels": ["To Do", "In Progress", "Done"]}''' |
| `column_type` | string ("status" | "text" | "long_text" | "numbers" | "date" | "dropdown" | "people" | "timeline" | "link" | "email" | "phone" | "rating" | "checkbox" | "country" | "file" | "hour" | "week" | "item_id" | "location" | "name" | "tags" | "vote" | "world_clock" | "creation_log" | "last_updated" | "auto_number" | "formula" | "connect_boards" | "button" | "time_tracking") | Yes | Type of the column. Must be a valid GraphQL enum token in snake_case format (e.g., 'long_text', not 'text_long' or 'long-text'). Supported types include: status, text, long_text, numbers, date, dropdown, people, timeline, link, email, phone, rating, checkbox, country, file, hour, week, item_id, location, name, tags, vote, world_clock, creation_log, last_updated, auto_number, formula, connect_boards, button, time_tracking. Note: 'person' is not a valid column type. |
| `description` | string | No | Description for the new column. |
| `after_column_id` | string | No | ID of an existing column after which the new column will be inserted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create custom activity

**Slug:** `MONDAY_CREATE_CUSTOM_ACTIVITY`

Tool to create a custom activity in the Monday.com Emails & Activities app. Use when you need to define a new activity type with specific color and icon for tracking interactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The custom activity's name. Must be non-empty. |
| `color` | string ("BRINK_PINK" | "CELTIC_BLUE" | "CORNFLOWER_BLUE" | "DINGY_DUNGEON" | "GO_GREEN" | "GRAY" | "LIGHT_DEEP_PINK" | "LIGHT_HOT_PINK" | "MAYA_BLUE" | "MEDIUM_TURQUOISE" | "PARADISE_PINK" | "PHILIPPINE_GREEN" | "PHILIPPINE_YELLOW" | "SLATE_BLUE" | "VIVID_CERULEAN" | "YANKEES_BLUE" | "YELLOW_GREEN" | "YELLOW_ORANGE") | Yes | The custom activity's color. Must be one of the predefined color values. |
| `icon_id` | string ("ASCENDING" | "CAMERA" | "CONFERENCE" | "FLAG" | "GIFT" | "HEADPHONES" | "HOMEKEYS" | "LOCATION" | "NOTEBOOK" | "PAPERPLANE" | "PLANE" | "PLIERS" | "TRIPOD" | "TWOFLAGS" | "UTENSILS") | Yes | The custom activity's icon. Must be one of the predefined icon values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a Monday dashboard

**Slug:** `MONDAY_CREATE_DASHBOARD`

Tool to create a Monday.com dashboard with associated boards. Use when you need to establish a new dashboard in a workspace with specific board visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("PRIVATE" | "PUBLIC") | No | The dashboard's visibility. Valid values: PRIVATE (default) or PUBLIC. |
| `name` | string | Yes | The dashboard's name. Maximum 255 characters. |
| `board_ids` | array | Yes | The unique identifier(s) of the board(s) to associate with the dashboard. Must provide at least one valid board ID. |
| `workspace_id` | integer | Yes | The unique identifier of the workspace to create the dashboard in. Use -1 for the main workspace. |
| `board_folder_id` | integer | No | The unique identifier of the folder to create the dashboard in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create doc

**Slug:** `MONDAY_CREATE_DOC`

Tool to create a new doc in Monday.com. Use when you need to add a doc to a workspace or into a doc column on an item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("private" | "public" | "share") | No | Access level of the new doc in workspace. Choose one of 'private', 'public', or 'share'. |
| `name` | string | No | Title of the new doc. Required with workspace_id and kind for workspace location. |
| `item_id` | integer | No | ID of the item containing the doc column. Required with column_id for board location. |
| `column_id` | string | No | ID of the monday doc column on the item (e.g., 'monday_doc'). Required with item_id for board location. |
| `workspace_id` | integer | No | ID of the workspace where the doc will be created. Required with name and kind for workspace location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a folder

**Slug:** `MONDAY_CREATE_FOLDER`

Tool to create a new folder in a Monday.com workspace to organize boards. Use when you need to structure boards within a workspace by grouping them into folders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The folder's name. |
| `color` | string ("DONE_GREEN" | "DARK_RED" | "LIPSTICK" | "SALADISH" | "EGG_YOK" | "WORKING_ORANGE" | "DARK_ORANGE" | "PEACH" | "SUNSET" | "STUCK_RED" | "SOFIA_PINK" | "PURPLE" | "DARK_PURPLE" | "BERRY" | "ROYAL" | "BLUISH_PURPLE" | "NAVY" | "BRIGHT_BLUE" | "DARK_BLUE" | "AQUAMARINE" | "CHILI_BLUE" | "RIVER" | "WINTER" | "EXPLOSIVE" | "TESLA" | "LIPSTICK_LIGHT" | "BUBBLE") | No | The folder's color. |
| `workspace_id` | integer | Yes | The unique identifier of the workspace to create the new folder in. |
| `parent_folder_id` | integer | No | The ID of the folder you want to nest the new one under. Use this to create subfolder hierarchies. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create group

**Slug:** `MONDAY_CREATE_GROUP`

Creates a new group with the given `group_name` on an existing Monday.com board, identified by its `board_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | The unique identifier of the Monday.com board where the new group will be created. |
| `group_name` | string | Yes | The desired name for the new group to be created on the board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create item

**Slug:** `MONDAY_CREATE_ITEM`

Creates a new item on a Monday.com board, optionally assigning it to a group and setting column values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | The board's unique identifier. Note: Subitems boards are not supported for this action; use create_subitem mutation instead. |
| `group_id` | string | No | Optional group ID where the item will be created. |
| `item_name` | string | Yes | Name of the new item. Maximum length is 256 characters. |
| `column_values` | string | No | Column values for the new item. Accepts either a JSON string or an object/dict. Keys must be valid column IDs and values must match the column type. For date columns, use nested structure: {"date": {"date": "YYYY-MM-DD"}}. For people columns, use array of person IDs: {"person": {"personsAndTeams": [{"id": 123, "kind": "person"}]}}. For status columns, use index or label: {"status": {"index": 0}} or {"status": {"label": "Done"}}. Example: {"date": {"date": "2023-12-01"}} or {"status": {"index": 0}}. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Item From Natural Language

**Slug:** `MONDAY_CREATE_ITEM_FROM_NL`

Creates a new item on a Monday.com board from a natural language description. Fetches the board's column schema at runtime, uses an LLM to generate the column values and extract the item name, and creates the item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | The Monday.com board ID where the item will be created. |
| `group_id` | string | No | Optional group ID where the item will be created within the board. |
| `nl_query` | string | Yes | Natural language description of the item to create. Must include an item name. Example: 'Create item: Fix login bug, status Working on it, priority High, due date 2025-03-15'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create notification

**Slug:** `MONDAY_CREATE_NOTIFICATION`

Tool to send a notification to a user. Use when you need to alert a user about a board, item, or update. Call after obtaining the user and target IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The notification text to display. |
| `user_id` | integer | Yes | The recipient user's unique identifier (ID). |
| `target_id` | integer | Yes | The target's unique identifier (ID). If target_type is Post, use an update or reply ID; if Project, use an item or board ID. |
| `target_type` | string ("Post" | "Project") | Yes | The notification target type: 'Post' for updates/replies or 'Project' for items/boards. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create object

**Slug:** `MONDAY_CREATE_OBJECT`

Tool to create any Monday.com object via GraphQL mutation. Use when you need to create workspaces, boards, items, columns, docs, updates, webhooks, or other Monday.com objects using custom GraphQL queries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | GraphQL mutation query to create an object. Must start with 'mutation'. For read queries, use the appropriate query tool instead. Examples: 'mutation { create_workspace(name: "My Workspace", kind: open) { id name } }' or 'mutation { create_item(board_id: 123, item_name: "Task") { id name } }' |
| `variables` | object | No | Optional GraphQL variables object to pass with the query. Use this to parameterize your mutation instead of hardcoding values in the query string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create tag

**Slug:** `MONDAY_CREATE_TAG`

Tool to create a new tag or return an existing tag. Use when you need to label items with color-coded tags on a public or private board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | No | Optional board ID for a private tag; omit for a public tag. |
| `tag_name` | string | Yes | Name of the tag to create; must be non-empty. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create timeline item

**Slug:** `MONDAY_CREATE_TIMELINE_ITEM`

Tool to create a new timeline item in the Emails & Activities app on a Monday.com item. Use when you need to establish a timeline event or activity on an item. Note: Timeline items created via this action won't trigger automations that run when a new E&A timeline item is created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | URL to add. |
| `phone` | string | No | Phone number to add. This input isn't verified as a phone number. |
| `title` | string | Yes | The new timeline item's title. |
| `content` | string | No | The new timeline item's content. |
| `item_id` | integer | Yes | The ID of the item to create the new timeline item on. Must be a valid item identifier. |
| `summary` | string | No | The new timeline item's summary. Maximum 255 characters. |
| `location` | string | No | Location data to add. This input isn't verified as a location. |
| `timestamp` | string | Yes | The new timeline item's creation time. Must be in ISO8601 format (e.g., 2024-12-10T10:00:00Z). |
| `time_range` | object | No | Time range for a timeline item. |
| `custom_activity_id` | string | Yes | The ID of the new timeline item's custom activity. Required identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create update

**Slug:** `MONDAY_CREATE_UPDATE`

Tool to create a new update for an item or reply to an existing update. Use after determining the target item or update to comment on.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The update's text content. |
| `item_id` | integer | No | ID of the item to post the update on. |
| `parent_id` | integer | No | ID of the parent update to reply under. |
| `use_app_info` | boolean | No | If true, attribute the update to the app rather than the current user (API version 2025-10+). |
| `mentions_list` | array | No | List of entities to mention in the update. |
| `original_creation_date` | string | No | Original creation date in DD-MM-YYYY format (API version 2025-10+). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invite and create a Monday user

**Slug:** `MONDAY_CREATE_USER`

Tool to invite and create a new user. Use when you need to programmatically add new users to your Monday account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emails` | array | Yes | List of email addresses to invite and create. |
| `product` | string ("crm" | "dev" | "forms" | "knowledge" | "service" | "whiteboard" | "workflows" | "work_management") | No | Product to invite the user to; allowed values: 'crm', 'dev', 'forms', 'knowledge', 'service', 'whiteboard', 'workflows', 'work_management'. |
| `user_role` | string ("ADMIN" | "GUEST" | "MEMBER" | "VIEW_ONLY") | No | Role to assign to the invited user; allowed values: 'ADMIN', 'GUEST', 'MEMBER', 'VIEW_ONLY'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a Monday workspace

**Slug:** `MONDAY_CREATE_WORKSPACE`

Tool to create a Monday.com workspace. Use when you need to programmatically add a workspace after planning your project structure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("open" | "closed") | Yes | The visibility kind of the workspace; allowed values: 'open' or 'closed'. |
| `name` | string | Yes | The name for the new workspace. |
| `description` | string | No | Optional description for the new workspace. |
| `account_product_id` | string | No | Optional account product ID under which to create the workspace (API v2025-07+). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom activity

**Slug:** `MONDAY_CUSTOM_ACTIVITY`

Tool to retrieve custom activity data from the Emails & Activities app. Use when you need to list available custom activities with their metadata. Returns up to 50 activities per query.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deactivate users

**Slug:** `MONDAY_DEACTIVATE_USERS`

Tool to deactivate users from a monday.com account. Use when you need to remove users from the account; only admins can perform this action, and users cannot deactivate themselves. Deactivating a user also deactivates their integrations and automations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | Array of user identifiers to deactivate. Maximum 200 users per request. Note: Cannot deactivate yourself, and only admins can execute this action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete asset

**Slug:** `MONDAY_DELETE_ASSET`

Tool to remove uploaded files. Since monday.com doesn't provide a direct asset deletion API, this tool deletes the enclosing update or clears files from a File column. Both operations are permanent and irreversible; confirm with the user before invoking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | No | Deletion strategy: 'update' to delete the update, or 'column' to clear a File column |
| `item_id` | integer | No | Item ID whose File column should be cleared (used when target is 'column'). |
| `asset_id` | integer | Yes | The unique identifier of the asset related to the removal operation. |
| `board_id` | string | No | Board ID of the item (used when target is 'column'). |
| `column_id` | string | No | File column ID to clear (used when target is 'column'). For example: 'files'. |
| `update_id` | integer | No | ID of the update that contains the attachment to remove (used when target is 'update'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete board

**Slug:** `MONDAY_DELETE_BOARD`

Tool to permanently delete a board from your Monday.com account. Use when you need to remove a board permanently after verifying its ID. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete column

**Slug:** `MONDAY_DELETE_COLUMN`

Deletes a specified column from a Monday.com board; this action is destructive and cannot be undone via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board from which the column will be deleted. |
| `column_id` | string | Yes | The unique identifier of the column to be deleted from the specified board. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Activity

**Slug:** `MONDAY_DELETE_CUSTOM_ACTIVITY`

Tool to delete a custom activity from the Emails & Activities app. Use when you need to remove a custom activity by its unique identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The custom activity's unique identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete doc

**Slug:** `MONDAY_DELETE_DOC`

Tool to delete a Monday.com doc by its ID. Use when you need to remove a doc that is no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | Unique identifier of the Monday.com doc to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete folder

**Slug:** `MONDAY_DELETE_FOLDER`

Tool to permanently delete a folder and all its contents from a Monday.com workspace. Use when you need to remove a folder along with all nested subfolders and boards. This action is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | Yes | The unique identifier of the folder to be deleted. This will permanently remove the folder and all its nested contents including subfolders and boards. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete group

**Slug:** `MONDAY_DELETE_GROUP`

Permanently deletes an existing group (and its items) from an existing board in Monday.com.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | Unique identifier of the board containing the group. |
| `group_id` | string | Yes | Unique identifier of the group to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete item

**Slug:** `MONDAY_DELETE_ITEM`

Permanently deletes an existing Monday.com item; this action is irreversible via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | string | Yes | The unique identifier of the Monday.com item to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete object

**Slug:** `MONDAY_DELETE_OBJECT`

Tool to permanently delete a Monday.com object with a 30-day recovery grace period. Use when you need to remove any object type from Monday.com by its unique identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Monday.com object to delete. Can be an ID for various object types like boards, items, or workspaces. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete subscribers from board

**Slug:** `MONDAY_DELETE_SUBSCRIBERS_FROM_BOARD`

Tool to remove subscribers from a Monday.com board. Use when revoking subscriber access for specific users on a board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The board's unique identifier. |
| `user_ids` | array | Yes | Array of user unique identifiers to remove as subscribers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete tag

**Slug:** `MONDAY_DELETE_TAG`

Tool to remove a tag from an item in Monday.com. Important: Monday.com's GraphQL API does not provide a mutation to delete a tag from the account. Tags are account-level entities shared across boards. This action can remove a tag from a specific item by updating its tags column to exclude the given tag_id. To do so, provide item_id and board_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | integer | Yes | The unique identifier of the tag to remove. |
| `item_id` | integer | No | The item ID to remove the tag from. If provided, the tag will be removed from this item's tags column. If omitted, the action will report that account-level tag deletion is not supported. |
| `board_id` | integer | No | The board ID where the item lives. Required when item_id is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete team

**Slug:** `MONDAY_DELETE_TEAM`

Tool to delete an existing team; use when you need to permanently remove a team by its ID after confirming it’s no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | The unique identifier of the team to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete teams from board

**Slug:** `MONDAY_DELETE_TEAMS_FROM_BOARD`

Tool to remove teams from a board; use when you need to revoke team access to a specific board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board from which teams will be removed. |
| `team_ids` | array | Yes | List of unique identifiers for the teams to remove from the board. Multiple teams can be removed in a single operation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete teams from workspace

**Slug:** `MONDAY_DELETE_TEAMS_FROM_WORKSPACE`

Tool to remove teams from a workspace. Use when revoking workspace access for specific teams.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_ids` | array | Yes | The unique identifiers of the teams to remove from the workspace. |
| `workspace_id` | integer | Yes | The workspace's unique identifier from which teams will be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete timeline item

**Slug:** `MONDAY_DELETE_TIMELINE_ITEM`

Tool to delete a timeline item from the Emails & Activities app. Use when you need to remove an existing timeline event or activity from a Monday.com item. This action is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the timeline item to delete. Must be a valid UUID string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete update

**Slug:** `MONDAY_DELETE_UPDATE`

Tool to delete an update by its ID. Use when an update is no longer relevant. Use after confirming deletion is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `update_id` | integer | Yes | The unique identifier of the update to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete workspace

**Slug:** `MONDAY_DELETE_WORKSPACE`

Tool to permanently delete a workspace by its ID. Use when a workspace is no longer needed. Use after confirming deletion is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_id` | string | Yes | The unique identifier of the workspace to permanently delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Monday docs

**Slug:** `MONDAY_DOCS`

Tool to retrieve Monday.com document data via the API. Use when you need to fetch documents with filtering by IDs, object IDs, workspace IDs, or with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | List of document IDs to retrieve. These are the internal IDs shown in the top-left corner when developer mode is enabled. |
| `page` | integer | No | Page number for pagination. Starts at 1. Use in combination with 'limit' to retrieve large result sets. |
| `limit` | integer | No | Maximum number of documents to retrieve per page. Must be between 1 and 100. Defaults to 25. |
| `order_by` | string ("created_at" | "used_at") | No | Field to order results by. 'created_at' sorts by creation time, 'used_at' sorts by last access time. Newest first by default. Not applied when 'ids' parameter is used. |
| `object_ids` | array | No | List of object IDs (board or item IDs) associated with the documents. These are the IDs that appear in URLs and doc column values. |
| `workspace_ids` | array | No | List of workspace IDs to filter documents. Only documents within these workspaces will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate board

**Slug:** `MONDAY_DUPLICATE_BOARD`

Tool to duplicate a Monday.com board with its structure and optionally items and updates. Use when you need to create a copy of an existing board. Duplication is asynchronous and may take time to complete for large boards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board to duplicate. This board must exist. |
| `folder_id` | integer | No | Destination folder ID within workspace. Required when moving to another workspace. |
| `board_name` | string | No | Name for the new board. If omitted, a name will be auto-generated. |
| `workspace_id` | integer | No | Destination workspace ID. If omitted, the board will be duplicated to the original workspace. |
| `duplicate_type` | string ("duplicate_board_with_structure" | "duplicate_board_with_pulses" | "duplicate_board_with_pulses_and_updates") | Yes | Specifies what to include in the duplicate: structure only, structure and items, or structure, items, and updates. |
| `keep_subscribers` | boolean | No | Whether to copy subscribers from the original board. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate item

**Slug:** `MONDAY_DUPLICATE_ITEM`

Duplicates an item on a Monday.com board, optionally including its updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | Yes | The unique identifier of the item to be duplicated. This item must exist on the specified `board_id`. |
| `board_id` | integer | Yes | The unique identifier of the board containing the item to be duplicated. This board must exist. |
| `with_updates` | boolean | No | If true, item updates (e.g., comments, replies) are duplicated with the item; if false, the new item is created without any updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit update

**Slug:** `MONDAY_EDIT_UPDATE`

Tool to modify the text content of an existing update on an item. Use when you need to correct or change a previously posted update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The update's unique identifier. |
| `body` | string | Yes | The update's new text content. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get account info

**Slug:** `MONDAY_GET_ACCOUNT_INFO`

Retrieve account metadata and settings for the authenticated Monday.com account. Use this action to inspect account configuration such as: - Account name, slug, and tier - Active member count - Calendar preferences (first day of week, timeline weekends) - Active products and billing plan details Requires the 'account:read' OAuth scope.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get board activity logs

**Slug:** `MONDAY_GET_ACTIVITY_LOGS`

Tool to retrieve activity logs from a specific Monday.com board. Use when you need to track changes, user actions, or board history for auditing or analytics purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | string | No | End timestamp for filtering activity logs (ISO8601 DateTime format). |
| `from` | string | No | Start timestamp for filtering activity logs (ISO8601 DateTime format). |
| `page` | integer | No | Page number for pagination (starts at 1). |
| `limit` | integer | No | Number of activity logs to return. Default is 25. |
| `board_id` | string | Yes | The unique identifier of the board to fetch activity logs from. Required. |
| `item_ids` | array | No | Filter events by specific item IDs. |
| `user_ids` | array | No | Filter events by specific user IDs. |
| `group_ids` | array | No | Filter events by specific group IDs. |
| `column_ids` | array | No | Filter events by specific column IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get API version

**Slug:** `MONDAY_GET_API_VERSION`

Tool to retrieve the Monday.com API version in use. Use when you need to check which API version is currently active for debugging or compatibility purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get assets

**Slug:** `MONDAY_GET_ASSETS`

Tool to retrieve file/asset metadata from monday.com by asset IDs. Returns file information including URL, name, size, extension, and thumbnails for images. Asset IDs originate from updates, update replies, or file-type columns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of asset IDs to retrieve. Must contain at least one ID. Asset IDs from file-type column values may be embedded in nested JSON strings and must be parsed before use. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get board views

**Slug:** `MONDAY_GET_BOARD_VIEWS`

Tool to retrieve board view data via GraphQL API. Returns array of board view metadata including type, settings, filters, and access levels. Must be nested within a boards query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_ids` | array | Yes | List of board IDs to retrieve views from. Must contain at least one board ID. |
| `view_type` | string | No | Optional filter to retrieve specific view type. Valid types: 'TABLE', 'FORM', 'DASHBOARD', 'APP'. If not specified, all views are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get favorites

**Slug:** `MONDAY_GET_FAVORITES`

Tool to retrieve all favorited items for the authenticated user. Use when you need to query items that have been marked as favorites.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folders

**Slug:** `MONDAY_GET_FOLDERS`

Tool to retrieve folder data from workspaces with filtering and pagination options. Use when you need to list folders from specific workspaces or filter by folder IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | Specific folder identifiers to retrieve. If not provided, all folders will be returned. |
| `page` | integer | No | Page number for pagination, starts at 1. |
| `limit` | integer | No | Number of folders to return. Default is 25, maximum is 100. |
| `workspace_ids` | array | No | Workspace identifiers to filter folders. Pass [None] to get folders from the Main Workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get form details

**Slug:** `MONDAY_GET_FORM`

Tool to retrieve form metadata via the API using the form's unique token from the URL. Returns form configuration, questions, and settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_token` | string | Yes | The form's unique string token, located in the form's URL after '/forms/' and before the '?' parameter. Use this to identify and retrieve the specific form. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get items by IDs

**Slug:** `MONDAY_GET_ITEMS`

Tool to retrieve specific items by their IDs from Monday.com, returning metadata including name, timestamps, state, board, and group information. Use when you need to fetch detailed information about specific items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of item IDs to retrieve. Maximum of 100 IDs at one time. |
| `page` | integer | No | Page number for pagination, starting at 1. |
| `limit` | integer | No | Number of items to return. Default is 25, maximum is 100. |
| `newest_first` | boolean | No | When true, orders the results with recently created items first. |
| `exclude_nonactive` | boolean | No | When true, filters out inactive, deleted, or orphaned items from the results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get current user

**Slug:** `MONDAY_GET_ME`

Tool to fetch the current authenticated user's profile and permissions. Use when you need to retrieve user metadata before performing other operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `api_version` | string | No | Optional Monday API version header (e.g., '2025-04'). Overrides default if provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get mutation complexity

**Slug:** `MONDAY_GET_MUTATION_COMPLEXITY`

Tool to get complexity data of mutations in Monday.com. Use when you need to track API quota usage or monitor rate limits for mutation operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | GraphQL mutation string that includes the complexity meta-field. The complexity field can be added to any mutation to track API quota usage. Format: mutation { complexity { query before after reset_in_x_seconds } <mutation_operation> { fields } }. Example: mutation { complexity { query before after reset_in_x_seconds } create_item(board_id: 123, item_name: "Test") { id } } |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get query complexity

**Slug:** `MONDAY_GET_QUERY_COMPLEXITY`

Tool to retrieve complexity data and cost metrics for Monday.com API operations. Use when you need to monitor API rate limits and complexity budget usage.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tags

**Slug:** `MONDAY_GET_TAGS`

Tool to retrieve tags from the account. Use when you need to list all tags or filter by specific IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | Optional list of tag IDs to filter; only tags matching these IDs will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get teams

**Slug:** `MONDAY_GET_TEAMS`

Tool to retrieve teams from Monday.com. Use when you need an overview of teams in your account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | Optional list of team IDs to filter by. If omitted, all teams are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get update replies

**Slug:** `MONDAY_GET_UPDATE_REPLIES`

Retrieves updates and their replies for a specific Monday.com item. Use this to fetch conversation threads and discussions attached to an item, including all replies to each update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination, starts at 1. |
| `limit` | integer | No | Number of updates to return per page. Maximum 100, default 25. |
| `item_id` | string | Yes | The unique identifier of the item to fetch updates and replies for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get item updates

**Slug:** `MONDAY_GET_UPDATES`

Tool to retrieve updates for a specific item. Use when you need to fetch the conversation history tied to an item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1). |
| `limit` | integer | No | Number of updates to return per page (max 100, default 25). |
| `item_id` | string | Yes | The unique identifier of the item to fetch updates for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get API versions

**Slug:** `MONDAY_GET_VERSIONS`

Tool to retrieve data about available API versions. Use when you need to check which API versions are supported by Monday.com.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get view schema by type

**Slug:** `MONDAY_GET_VIEW_SCHEMA_BY_TYPE`

Tool to retrieve type-specific board view configuration schemas via GraphQL API. Use when you need to understand the structure and available settings for creating or updating board views of a specific type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("TABLE" | "FORM" | "DASHBOARD" | "APP") | Yes | Specifies which view type's schema to retrieve. Determines the structure of configuration settings returned. |
| `mutation_type` | string ("CREATE" | "UPDATE") | Yes | Indicates whether the schema is for CREATE or UPDATE operations. Different mutation types may expose different configuration options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get webhooks

**Slug:** `MONDAY_GET_WEBHOOKS`

Tool to retrieve webhooks for a board. Use when you need to list all webhooks on a board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board to fetch webhooks for. |
| `app_webhooks_only` | boolean | No | Return only webhooks created by the calling app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workspaces

**Slug:** `MONDAY_GET_WORKSPACES`

Tool to retrieve workspaces. Use when you need to list workspaces with optional filtering, pagination, or ordering after authentication.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | List of specific workspace IDs to return. Provide to filter by workspace IDs. |
| `kind` | string ("open" | "closed") | No | Filter by workspace kind. Valid values: 'open' or 'closed'. |
| `page` | integer | No | Pagination page number; starts at 1. |
| `limit` | integer | No | Maximum number of workspaces to return. Default is 25. |
| `state` | string ("active" | "archived" | "deleted" | "all") | No | Filter by workspace state. Valid values: 'active', 'all', 'archived', 'deleted'. |
| `order_by` | string | No | Field to order by. Currently only 'created_at' is supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Import doc from HTML

**Slug:** `MONDAY_IMPORT_DOC_FROM_HTML`

Tool to import HTML content into a new Monday.com doc, converting it to doc blocks. Use when you need to create a doc from HTML content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `html` | string | Yes | The HTML content to convert into a new doc. Supports style/format text, emoji, quote, table, list, code, divider, and title/header text. |
| `kind` | string ("private" | "public" | "share") | No | Document access level - private, public, or share. If omitted, defaults to workspace settings. |
| `title` | string | No | The new document's title. If omitted, the title will be inferred from the provided HTML content. |
| `folder_id` | integer | No | The unique identifier of the folder to create the doc in. If omitted, the document will be created at the root level of the workspace. |
| `workspace_id` | integer | Yes | The unique identifier of the workspace to create the doc in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get items page

**Slug:** `MONDAY_ITEMS_PAGE`

Tool to retrieve items from a Monday.com board (or group) with server-side filtering, full column_values, and cursor-based pagination via items_page and next_items_page queries. Use when you need paginated access to board items with detailed column data and optional filtering/sorting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of items to return per page. Default is 25, maximum is 500 per Monday.com API limits. |
| `cursor` | string | No | Opaque pagination cursor from previous response. When provided, retrieves the next page using next_items_page query. Cursors are cached for 60 minutes. If provided, board_id and query_params are ignored. |
| `board_id` | integer | No | The board's unique identifier. Required for initial fetch (when cursor is not provided). Ignored if cursor is provided. |
| `group_id` | string | No | Optional group ID to filter items within a specific group. Only used for initial fetch (when cursor is not provided). If provided, queries items within the group instead of the entire board. |
| `query_params` | object | No | Query parameters for filtering and sorting items. |
| `include_column_values` | boolean | No | Whether to include column_values in the response. When false, only returns id and name for each item. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Like update

**Slug:** `MONDAY_LIKE_UPDATE`

Tool to like an update on an item. Use when you want to express approval or acknowledgment of an update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `update_id` | integer | Yes | The unique identifier of the update to like. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List board items

**Slug:** `MONDAY_LIST_BOARD_ITEMS`

DEPRECATED: Use MONDAY_ITEMS_PAGE instead, which supports cursor-based pagination. This tool may silently omit items on larger boards. Results include archived and deleted items by default — filter by state to retrieve only active items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the Monday.com board from which to retrieve items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Monday boards (Deprecated)

**Slug:** `MONDAY_LIST_BOARDS`

DEPRECATED: Use MONDAY_BOARDS instead. Retrieves a list of boards from a Monday.com account, supporting pagination and filtering by state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Increment until an empty response is returned to exhaust results; limit of 50–100 reduces total calls. |
| `limit` | integer | No | Maximum number of boards to retrieve per page. |
| `state` | string | No | Filters boards by their state. Valid states: 'active', 'archived', 'deleted', or 'all'. Default 'active' excludes archived and deleted boards; use 'all' for a complete board inventory. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List columns (Deprecated)

**Slug:** `MONDAY_LIST_COLUMNS`

DEPRECATED: Use MONDAY_COLUMNS instead. Lists all columns and their properties for a specified Monday.com `board_id`; the board must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | The unique identifier of the board from which to retrieve the columns. Retrieve dynamically; do not hardcode, as board and column IDs are environment-specific. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List groups

**Slug:** `MONDAY_LIST_GROUPS`

Tool to retrieve all groups of a specified board. Use when you need to list groups on a board after confirming its board ID. Response is nested under data → boards[0] → groups; confirm boards[0] exists before accessing groups.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board from which to retrieve groups. |
| `group_ids` | array | No | Optional list of specific group IDs to filter the results; provide to retrieve only these groups. Invalid or non-existent group IDs silently return an empty array rather than an error; always verify the returned groups array is non-empty before indexing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List items

**Slug:** `MONDAY_LIST_ITEMS`

Retrieves specified subitems from Monday.com using their IDs, returning raw JSON. Returned `column_values` fields (`text`, `value`) are frequently null or JSON-encoded strings (including numbers as quoted strings); null-check and JSON-decode before use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_ids` | array | Yes | Subitem IDs to retrieve. For large sets, batch IDs into smaller requests to avoid response truncation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List items by column values

**Slug:** `MONDAY_LIST_ITEMS_BY_COLUMN_VALUES`

Tool to search for items on a Monday.com board based on column values using the items_page_by_column_values query. Use when you need to find items matching specific column criteria (e.g., status="Done", name contains "Task 1"). For initial requests, provide columns; for pagination, use the cursor from the previous response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of items to return per page. Default is 25, maximum is 500. |
| `cursor` | string | No | Opaque pagination cursor from previous response. Use instead of columns for paginated requests. When provided, columns parameter is ignored. |
| `columns` | array | No | Array of column filters to search by. Required for initial request (when cursor is not provided). Uses AND logic between filters and ANY_OF logic within each filter. Cannot be used with cursor. |
| `board_id` | string | Yes | The board's unique identifier. Required for all requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subitems by parent

**Slug:** `MONDAY_LIST_SUBITEMS_BY_PARENT`

Tool to retrieve subitems nested under parent items via GraphQL API. Use when you need to list subitems and their column values for specific parent items. Monday's API requires querying subitems through their parent items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `parent_item_ids` | array | Yes | Array of parent item IDs whose subitems should be retrieved. Required. |
| `include_column_values` | boolean | No | Whether to include column_values (id, text, value) for each subitem. Defaults to true. |
| `include_parent_fields` | boolean | No | Whether to include parent item's id and name in the response. Defaults to true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List team members

**Slug:** `MONDAY_LIST_TEAM_MEMBERS`

Tool to list members of a specified team. Use when you need to retrieve all users in a given Monday.com team after confirming its team ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_ids` | array | No | List of team IDs to filter. If omitted, all teams are returned. |
| `user_filters` | object | No | Filters to apply when querying team users. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List users

**Slug:** `MONDAY_LIST_USERS`

Retrieves a list of users from Monday.com. Paginate by starting at page=1, incrementing page on each request, and stopping when the returned user list is empty. An empty user list does not signify action failure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for results; starts at 1. |
| `limit` | integer | No | Maximum number of users to return per page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move item to board

**Slug:** `MONDAY_MOVE_ITEM_TO_BOARD`

Moves a Monday.com item to a specified board and group; requires the item, target board, and target group to exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | Yes | The unique identifier of the item to be moved. |
| `board_id` | integer | Yes | The unique identifier of the target board to which the item will be moved. |
| `group_id` | string | Yes | The unique identifier of the target group on the destination board where the item will be placed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move item to group

**Slug:** `MONDAY_MOVE_ITEM_TO_GROUP`

Moves an item to a different group on the same Monday.com board; the item and group must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | Yes | The unique identifier of the item to be moved. |
| `group_id` | string | Yes | The unique identifier of the target group where the item will be moved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query board mute settings

**Slug:** `MONDAY_MUTE_BOARD_SETTINGS`

Tool to query a board's notification mute settings. Use when you need to check if notifications are muted for specific boards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_ids` | array | Yes | The unique identifiers of the boards to retrieve mute settings for. This is a required non-null array of board IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pin update to top

**Slug:** `MONDAY_PIN_TO_TOP`

Tool to pin an update to the top of an item. Use when you need to highlight an important update or keep it visible at the top.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | No | The unique identifier of the item. Optional parameter. |
| `update_id` | integer | Yes | The unique identifier of the update to pin to the top. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Publish object

**Slug:** `MONDAY_PUBLISH_OBJECT`

Tool to publish a Monday.com object. Use when you need to make an object publicly visible or change its state to published.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Monday.com object to publish. This is typically a board ID or document ID. The object will be made shareable/public after publishing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query dashboards

**Slug:** `MONDAY_QUERY_DASHBOARDS`

Tool to query dashboards via Monday.com objects API. Use when you need to list all dashboards with their metadata, owners, and subscribers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of dashboards to return. Limits the result set size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query sprints

**Slug:** `MONDAY_QUERY_SPRINTS`

Tool to query sprint data for agile project management from Monday.com boards. Use when you need to retrieve sprint information including sprint title, ID, color, position, archived/deleted status, and associated items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_ids` | array | Yes | List of board IDs to query sprint groups from. Sprints are implemented as groups on sprint boards. |
| `sprint_ids` | array | No | Optional list of specific sprint (group) IDs to filter the results. If not provided, all sprints on the board will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove users from team

**Slug:** `MONDAY_REMOVE_USERS_FROM_TEAM`

Tool to remove users from a Monday.com team. Use when updating team membership by removing user(s).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | Unique identifier of the existing Monday.com team. |
| `user_ids` | array | Yes | List of user IDs to remove from the team. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove users from workspace

**Slug:** `MONDAY_REMOVE_USERS_FROM_WORKSPACE`

Tool to remove users from a workspace. Use when revoking access for specific users in a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | List of unique user IDs to remove from the workspace. |
| `workspace_id` | integer | Yes | Unique identifier of the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set board permission

**Slug:** `MONDAY_SET_BOARD_PERMISSION`

Sets or updates a board's default role and permissions. Use when you need to configure default permissions for a board. Requires boards:write scope and can only be used by board owners on enterprise plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The board's unique identifier. The board must exist and you must be the board owner. |
| `basic_role_name` | string ("contributor" | "editor" | "viewer") | Yes | The role to assign. 'contributor' allows editing content, 'editor' allows editing content and structure, 'viewer' provides read-only access. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get item timeline

**Slug:** `MONDAY_TIMELINE`

Tool to retrieve an item's Email & Activities (E&A) timeline data from Monday.com. Use when you need to access CRM activity tracking and client communication history for a specific item. This returns a paginated list of timeline entries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the item from which to retrieve timeline activities. Must be a valid item ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get timeline item

**Slug:** `MONDAY_TIMELINE_ITEM`

Tool to retrieve a specific timeline item from the Emails & Activities app by ID. Use when you need to fetch metadata including content, user, title, type, and associated custom activity for a timeline item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the timeline item to retrieve. Must be a valid UUID string obtained from create_timeline_item mutation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unlike update

**Slug:** `MONDAY_UNLIKE_UPDATE`

Tool to remove a like from an update on an item. Use when you want to retract a previously expressed approval or acknowledgment of an update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `update_id` | integer | Yes | The unique identifier of the update to unlike. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unpin update from top

**Slug:** `MONDAY_UNPIN_FROM_TOP`

Tool to unpin an update from the top of an item. Use when you want to remove a pinned update from the top position of an item's updates feed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | No | The unique identifier of the item. Optional parameter. |
| `update_id` | integer | Yes | The unique identifier of the update to unpin from the top. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unpublish object

**Slug:** `MONDAY_UNPUBLISH_OBJECT`

Unpublish a Monday.com object (board, item, or workspace) to revert it from a published state. The operation will return success=true only if the object was previously published and can be unpublished. If the object is not in a publishable state or was never published, success=false is returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (numeric string) of the Monday.com object to unpublish. This can be a board ID, item ID, or workspace ID. Objects must be in a published state for unpublishing to succeed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update board

**Slug:** `MONDAY_UPDATE_BOARD`

Updates a specified attribute of an existing board on Monday.com.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | The unique identifier of the board to be updated. |
| `new_value` | string | Yes | The new value to assign to the specified board attribute. |
| `board_attribute` | string | Yes | The specific attribute of the board to update. This should be an enum value as defined by Monday.com's API and should not be enclosed in quotes in the final GraphQL mutation. Common updatable attributes include 'description' and 'communication'. Unsupported enum values may be silently ignored without returning an error, so verify the attribute name is valid before assuming the update succeeded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update board hierarchy

**Slug:** `MONDAY_UPDATE_BOARD_HIERARCHY`

Updates a board's position, workspace, or product in Monday.com. Use when you need to move a board to a different workspace or folder, assign it to a product, or reposition it relative to other boards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The board's unique identifier. |
| `attributes` | object | Yes | The board's attributes to update. At least one attribute (workspace_id, folder_id, account_product_id, or position) must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update column

**Slug:** `MONDAY_UPDATE_COLUMN`

Tool to update column title or description. Use when modifying a column’s metadata after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The new value for the specified column property. |
| `board_id` | integer | Yes | The unique identifier of the board containing the column to be updated. |
| `column_id` | string | Yes | The column's unique identifier (e.g., 'status_1', 'text_2'). |
| `column_property` | string ("description" | "title") | Yes | The metadata property to update. Must be 'description' or 'title'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a doc

**Slug:** `MONDAY_UPDATE_DOC`

Tool to update a doc's title or append markdown content. Use when renaming docs or adding Markdown blocks to existing docs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The new title for the document. |
| `doc_id` | string | Yes | The unique identifier of the Monday.com document to update. |
| `markdown` | string | No | Markdown content to append to the document. |
| `after_block_id` | string | No | Block ID after which to insert the markdown content. If omitted, content is appended at the end. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update email domain

**Slug:** `MONDAY_UPDATE_EMAIL_DOMAIN`

Tool to update users' email domains. Use when migrating users to a new email domain; requires admin privileges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | List of unique identifiers for users whose email domains will be updated. |
| `new_domain` | string | Yes | The new email domain to apply to the specified users (e.g., 'newcompany.com'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a Monday folder

**Slug:** `MONDAY_UPDATE_FOLDER`

Tool to update a Monday.com folder's properties including name, color, or parent folder. Use when you need to modify existing folder details or move folders between workspaces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the folder. |
| `color` | string | No | The folder's color. Available colors include: DONE_GREEN, DARK_RED, LIPSTICK, SALADISH, EGG_YOK, WORKING_ORANGE, DARK_ORANGE, PEACH, SUNSET, STUCK_RED, SOFIA_PINK, PURPLE, DARK_PURPLE, BERRY, ROYAL, BLUISH_PURPLE, NAVY, BRIGHT_BLUE, DARK_BLUE, AQUAMARINE, CHILI_BLUE, RIVER, WINTER, EXPLOSIVE, TESLA, LIPSTICK_LIGHT, BUBBLE. |
| `folder_id` | integer | Yes | The unique identifier of the folder to update. |
| `workspace_id` | integer | No | The unique identifier of the workspace to move the folder to. Use for cross-workspace transfers. |
| `parent_folder_id` | integer | No | The ID of the folder you want to nest the updated folder under. Use to move folder to a different parent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update group

**Slug:** `MONDAY_UPDATE_GROUP`

Tool to update an existing group on a board. Use when you need to modify a group's attribute (title, color, or position) after confirming the group ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | The unique identifier of the board containing the group. |
| `group_id` | string | Yes | The unique identifier of the group to update (use the group ID or descriptive string). |
| `new_value` | string | Yes | The new value for the specified attribute. For title or color, provide the new string value. For relative_position_after/before, provide the target group ID. |
| `group_attribute` | string | Yes | The attribute of the group to update. Must be one of: color, position, relative_position_after, relative_position_before, title. Do not enclose this enum value in quotes in the GraphQL mutation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update item

**Slug:** `MONDAY_UPDATE_ITEM`

Tool to update an existing item's column value on Monday.com. Use when setting complex column types like Timeline or People.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | New column value as a JSON-serializable object or string. This will be stringified for the GraphQL mutation. For text/number/name columns, send a plain string; for complex columns like status/timeline/people, send a JSON object (e.g., {"index": 1}). |
| `item_id` | string | Yes | ID of the item to update. |
| `board_id` | string | Yes | ID of the board containing the item. |
| `column_id` | string | Yes | The unique identifier of the column to change. |
| `create_labels_if_missing` | boolean | No | If true, creates missing labels for Status/Dropdown columns when the label does not exist. Requires permission to change board structure. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update multiple users

**Slug:** `MONDAY_UPDATE_MULTIPLE_USERS`

Tool to update one or multiple users' attributes on Monday.com. Use when you need to batch update user profiles such as name, email, title, or department.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_updates` | array | Yes | Array of user update objects, each containing user_id and the attributes to update. At least one user update must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update mute board settings

**Slug:** `MONDAY_UPDATE_MUTE_BOARD_SETTINGS`

Tool to update a board's notification mute settings. Use when you need to configure notification preferences for a specific board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `enabled` | array | No | Array of custom notification settings, only applicable when mute_state is CUSTOM_SETTINGS. AUTOMATION_NOTIFY: alerts when automations trigger notify steps. IM_ASSIGNED: alerts when user is assigned. IM_MENTIONED: alerts when user is mentioned. |
| `board_id` | string | Yes | The unique identifier of the board to modify. |
| `mute_state` | string ("CURRENT_USER_MUTE_ALL" | "CUSTOM_SETTINGS" | "MENTIONS_AND_ASSIGNS_ONLY" | "MUTE_ALL" | "NOT_MUTED") | Yes | Desired mute notification state. CURRENT_USER_MUTE_ALL: suppress all notifications for current user. CUSTOM_SETTINGS: allow notifications matching enabled custom settings. MENTIONS_AND_ASSIGNS_ONLY: notify only for mentions or assignments. MUTE_ALL: suppress notifications for all users (admin only). NOT_MUTED: remove all muting restrictions (admin only). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update tag

**Slug:** `MONDAY_UPDATE_TAG`

Tool to return a tag's details or best-effort "rename" by creating or getting a tag with the requested name. The monday API does not support updating existing tag name/color.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the tag. monday API does not support renaming a tag; we will create or get a tag with this name and return it. |
| `color` | string | No | New color for the tag as a hex code (e.g., '#FFAA00'). monday API does not support changing tag colors; this parameter is ignored. |
| `tag_id` | integer | Yes | Unique identifier of the tag to update or fetch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update team

**Slug:** `MONDAY_UPDATE_TEAM`

Tool to update a team's details in Monday.com. Use after identifying the team and desired changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the team. |
| `team_id` | string | Yes | The unique identifier of the team to be updated. |
| `is_guest_team` | boolean | No | Whether the team should be marked as a guest team. |
| `parent_team_id` | string | No | ID of the new parent team if changing hierarchy. |
| `subscriber_ids` | array | No | List of user IDs to subscribe to the team. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update users role

**Slug:** `MONDAY_UPDATE_USERS_ROLE`

Tool to update users' roles to custom or default roles. Use when changing user permissions; admin-only operation. Cannot update your own role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role_id` | integer | No | Custom role ID to assign (for enterprise customers only). Either new_role or role_id must be provided. |
| `new_role` | string ("ADMIN" | "GUEST" | "MEMBER" | "VIEW_ONLY") | No | Default role to assign. Use this for standard roles. Valid values: ADMIN, GUEST, MEMBER, VIEW_ONLY. Either new_role or role_id must be provided. |
| `user_ids` | array | Yes | List of unique identifiers for users whose roles will be updated. Maximum 200 user IDs per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a Monday workspace

**Slug:** `MONDAY_UPDATE_WORKSPACE`

Tool to update a Monday.com workspace. Use when you need to modify the name, description, visibility, or product placement of an existing workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("open" | "closed") | No | The visibility kind for the workspace; 'open' or 'closed'. |
| `name` | string | No | The new name for the workspace. |
| `description` | string | No | The new description for the workspace. |
| `workspace_id` | integer | Yes | The unique identifier of the workspace to be updated. |
| `account_product_id` | string | No | The account product ID to move the workspace under (API v2025-10+). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Asset

**Slug:** `MONDAY_UPLOAD_ASSET`

Tool to upload a file to an update or file column. Use when you need to attach a file to an existing update or file column. File attachments are permanent and irreversible; confirm with the user before uploading.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | File to upload. |
| `target` | string ("update" | "column") | Yes | Where to upload the file. Use 'update' to attach the file to an existing update/comment, or 'column' to upload to a file column on an item. |
| `item_id` | integer | No | The numeric ID of the item containing the file column. Required when target is 'column'. You can get this ID from creating an item or listing board items. |
| `column_id` | string | No | The ID of the file column to upload to. Required when target is 'column'. File columns have type 'file' and can be found by listing board columns. |
| `update_id` | integer | No | The numeric ID of the update (comment) to attach the file to. Required when target is 'update'. You can get this ID from creating an update or listing updates on an item. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user connections

**Slug:** `MONDAY_USER_CONNECTIONS`

Tool to query user-specific connection data from Monday.com. Use when you need to retrieve integration connections established by the authenticated user with external services.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page index for offset-based pagination, starting from 1. Use with page_size for paginated results. |
| `order` | string | No | Ordering of returned connections. Use 'createdAt' for ascending or '-createdAt' for descending order by creation date. |
| `page_size` | integer | No | Number of records to return per page when using offset-based pagination. Use with page parameter. |
| `with_automations` | boolean | No | Include connections that have automations attached. Set to true to filter only connections with automations. |
| `with_state_validation` | boolean | No | Validate connection state before returning the result. Set to true to ensure connections are in valid state. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `MONDAY_WHO_AM_I`

Return the identity (name, email, account) of the connected monday.com account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
