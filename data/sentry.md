# Sentry

Integrate Sentry to manage your error tracking and monitoring.

- **Category:** developer tools
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 211
- **Triggers:** 0
- **Slug:** `SENTRY`
- **Version:** 20260826_00

## Tools

### Access project information

**Slug:** `SENTRY_ACCESS_PROJECT_INFORMATION`

Retrieves detailed information for a Sentry project, given its existing organization and project ID or slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a symbol source to a project

**Slug:** `SENTRY_ADD_A_SYMBOL_SOURCE_TO_A_PROJECT`

Tool to add a custom symbol source to a Sentry project. Use when configuring symbol sources for crash symbolication.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Internal ID of the source. Must be distinct and cannot start with 'sentry:'. UUID generated if not provided. |
| `url` | string | No | Source URL. Required for HTTP sources. |
| `name` | string | Yes | Human-readable name of the source. |
| `type` | string ("http" | "gcs" | "s3") | Yes | Source type. Options: 'http' (SymbolServer HTTP), 'gcs' (Google Cloud Storage), 's3' (Amazon S3). |
| `bucket` | string | No | Bucket name. Required for S3 and GCS sources. |
| `prefix` | string | No | S3 or GCS prefix path. |
| `region` | string ("us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "ap-east-1" | "ap-south-1" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "cn-north-1" | "cn-northwest-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-north-1" | "sa-east-1" | "us-gov-east-1" | "us-gov-west-1") | No | AWS region enumeration for S3 sources. |
| `password` | string | No | Password for HTTP authentication. |
| `username` | string | No | Username for HTTP authentication. |
| `access_key` | string | No | AWS Access Key. Required for S3 sources. |
| `secret_key` | string | No | AWS Secret Access Key. Required for S3 sources. |
| `private_key` | string | No | GCS private key. Required for GCS sources. |
| `client_email` | string | No | GCS email for authentication. Required for GCS sources. |
| `layout__type` | string ("native" | "symstore" | "symstore_index2" | "ssqp" | "unified" | "debuginfod" | "slashsymbols") | Yes | Layout type specifying the directory structure for symbols. Required for HTTP, GCS, and S3 sources. |
| `layout__casing` | string ("default" | "uppercase" | "lowercase") | Yes | Filename casing convention for symbols. Required for HTTP, GCS, and S3 sources. |
| `filters__filetypes` | array | No | List of file types to filter. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project. |
| `filters__path_patterns` | array | No | Glob patterns for debug/code file paths. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |
| `filters__requires_checksum` | boolean | No | Whether source requires debug checksum. Default: false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add organization member via email

**Slug:** `SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL`

Invites a new member (or re-invites an existing non-accepted member) to a Sentry organization via email, allowing specification of organization and team roles.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email address of the user to invite or add to the organization. |
| `orgRole` | string ("billing" | "member" | "manager" | "owner" | "admin") | No | Primary organization-level role. `billing`: Manages payment/compliance. `member`: Views events/data. `manager`: Manages teams, projects, membership. `owner`: Unrestricted access. `admin`: Edits global integrations, manages projects/teams. Note: The `admin` role may have plan-specific restrictions; consider `manager` or `teamRoles`. |
| `reinvite` | boolean | No | If `True`, resends an invitation to a user previously invited but who has not yet accepted. |
| `teamRoles` | array | No | List of team-specific role assignments. Common roles: `contributor` (views/acts on issues, may add members per org settings) and `admin` (full team/project management). |
| `sendInvite` | boolean | No | If `True`, an invitation email is sent to the user. Set to `False` to add the member without an email notification. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the member will be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add or remove user email by id

**Slug:** `SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID`

Adds or removes a secondary email for an existing Sentry user, determined by whether the email already exists for that user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email address to be added to or removed from the user's Sentry account. Ensure this is a valid email format. |
| `user_id` | string | Yes | The unique identifier of the Sentry user (e.g., numeric ID or 'self') for whom the email address is being managed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add team member in organization

**Slug:** `SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION`

Adds an existing member of an organization to one of its teams; the member must already belong to the organization, and the team must also belong to that organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | ID of the existing organization member to be added to the team. |
| `team_id_or_slug` | string | Yes | The ID or slug of the team to which the member will be added. Slugs are typically lowercase and use hyphens. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. Slugs are typically lowercase and use hyphens. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add team to project

**Slug:** `SENTRY_ADD_TEAM_TO_PROJECT`

Grants a Sentry team access to a Sentry project within the specified Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry team that will be granted access to the project. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry project. Access will be granted to this project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry organization. This organization contains both the project and the team. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk mutate an organization's issues

**Slug:** `SENTRY_BULK_MUTATE_AN_ORGANIZATIONS_ISSUES`

Bulk mutate various attributes on issues within an organization. Use when you need to update status, priority, assignment, or other attributes for multiple issues at once. Maximum of 1000 issues can be mutated, with a 100 issue limit per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | Issue IDs to mutate. For non-status updates, this parameter is required. For status updates, it can be omitted to update all matching issues. |
| `sort` | string ("date" | "new" | "trends" | "freq" | "user" | "inbox") | No | Sort order for issues. Defaults to 'date'. |
| `inbox` | boolean | No | Mark issue as reviewed in inbox. |
| `limit` | integer | No | Maximum number of issues to affect. Default: 100, Maximum: 100. |
| `merge` | boolean | No | Merge issues together. Requires multiple issue IDs. |
| `query` | string | No | Search query for filtering issues. Defaults to 'is:unresolved' if not specified. Only used when issue IDs are not provided. |
| `status` | string ("resolved" | "unresolved" | "ignored" | "resolvedInNextRelease" | "muted") | No | New status for the issues. |
| `viewId` | string | No | View ID to apply view's query and filters. Only used when issue IDs are not provided. |
| `discard` | boolean | No | Discard the issues. |
| `hasSeen` | boolean | No | Mark the issue as seen. |
| `project` | array | No | Project IDs to filter issues by. Use -1 to include all available projects. |
| `isPublic` | boolean | No | Make the issue public or private. |
| `priority` | string ("low" | "medium" | "high") | No | Priority level for the issue. |
| `substatus` | string ("archived_until_escalating" | "archived_until_condition_met" | "archived_forever" | "escalating" | "ongoing" | "regressed" | "new") | No | Issue substatus. |
| `assignedTo` | string | No | User or team to assign the issue to. Formats: <user_id>, user:<user_id>, <username>, <email>, team:<team_id>. |
| `environment` | array | No | Environment names to filter issues by. Used to narrow down which issues to mutate. |
| `isBookmarked` | boolean | No | Bookmark or unbookmark the issue. |
| `isSubscribed` | boolean | No | Subscribe or unsubscribe from issue notifications. |
| `statusDetails` | object | No | Status details schema for issue resolution. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization containing the issues to mutate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk remove an organization's issues

**Slug:** `SENTRY_BULK_REMOVE_AN_ORGANIZATIONS_ISSUES`

Permanently removes issues from an organization. If IDs are provided, queries and filtering are ignored. Maximum of 1000 issues can be removed at once.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The list of issue IDs to be removed. If provided, queries and filtering will be ignored. If not provided, it will attempt to remove the first 1000 issues matching the query and filters. |
| `sort` | string | No | Sort order for issues. Accepts: date, freq, inbox, new, trends, user. Defaults to date if not specified. |
| `limit` | integer | No | The maximum number of issues to affect. The maximum allowed value is 100. |
| `query` | string | No | An optional search query for filtering issues. A default query will apply if no view/query is set. Only used if issue IDs are not provided. |
| `viewId` | string | No | The ID of the view to use. If no query is present, the view's query and filters will be applied. Only used if issue IDs are not provided. |
| `project` | array | No | The IDs of projects to filter by. Use -1 to include all available projects. |
| `environment` | array | No | The name of environments to filter by. Used to narrow down which issues to remove based on the environment. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization from which issues will be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an alert for an organization

**Slug:** `SENTRY_CREATE_AN_ALERT_FOR_AN_ORGANIZATION`

Creates a workflow alert for a Sentry organization using the New Monitors and Alerts system. Use when you need to set up automated alerting for issues based on trigger conditions and filters. Note: This endpoint is currently in beta and may change.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the alert. |
| `config` | object | Yes | Configuration for the alert, typically includes 'frequency' in minutes. Valid frequency values: 0 (0 min), 5 (5 min), 10 (10 min), 30 (30 min), 60 (1 hour), 180 (3 hours), 720 (12 hours), 1440 (24 hours). |
| `enabled` | boolean | No | Whether the alert is enabled or disabled. |
| `triggers` | object | Yes | The conditions on which the alert will trigger. Must include 'logicType' (one of 'any-short', 'all', or 'none') and 'conditions' array. Available trigger conditions: 'first_seen_event' (new issue created), 'issue_resolved_trigger' (issue resolved), 'reappeared_event' (issue reappears), 'regression_event' (issue regression). Each condition should have 'type', 'comparison' (true), and 'conditionResult' (true). |
| `environment` | string | No | The name of the environment for the alert to evaluate in. |
| `actionFilters` | array | Yes | The filters to run before the action will fire and the action(s) to fire. Each filter has 'logicType' ('any-short', 'all', or 'none'), 'conditions' array, and 'actions' array. Conditions can filter by: level, age_comparison, assigned_to, issue_category, issue_occurrences, issue_priority, event_frequency, tagged_event, event_attribute, latest_release, and more. Actions define what happens when conditions match: email, slack, discord, msteams, pagerduty, opsgenie, jira, github, vsts notifications, or ticket creation. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create dashboard with widgets

**Slug:** `SENTRY_CREATE_DASHBOARD_WITH_WIDGETS`

Creates a Sentry dashboard with widgets for an organization; `organization_id_or_slug` and specified `project` IDs must be valid, and `start`/`end` datetimes (if absolute range) must form a logical ISO 8601 range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Optional client-specified unique dashboard identifier; Sentry generates one if omitted. |
| `end` | string | No | Absolute end datetime (ISO 8601) for time range; 'start' must also be set for custom absolute range. |
| `utc` | boolean | No | If true, time range is UTC; otherwise, defaults to user's local time or organization settings. |
| `start` | string | No | Absolute start datetime (ISO 8601) for time range; 'end' must also be set for custom absolute range. |
| `title` | string | Yes | Title for the new dashboard. |
| `period` | string | No | Default relative time range (e.g., '24h', '7d', 'auto'); 'auto' is often 14 days. Overridden if 'start' and 'end' are provided. |
| `filters` | object | No | Additional key-value filters (Sentry search syntax for keys) for the dashboard. |
| `widgets` | array | No | List of widget configurations defining appearance, data queries, and layout. |
| `projects` | array | No | Project IDs to scope dashboard data; if empty/null, may apply to all accessible projects based on org settings. |
| `environment` | array | No | Environment names (e.g., 'production') to filter data; if empty/null, all environments included. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization where the dashboard will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create external user for organization

**Slug:** `SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION`

Links a Sentry user to an external identity provider's user within a Sentry organization; the Sentry user must be an organization member, an active integration for the provider must be configured, and `external_id` is typically required for the external user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique numeric identifier for the external actor linkage being created. Its specific use may depend on the integration or Sentry's internal handling. |
| `user_id` | integer | Yes | The numeric ID of the Sentry user to be linked with the external identity. |
| `provider` | string ("github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm") | Yes | The external identity provider. Allowed values: `github`, `github_enterprise`, `slack`, `gitlab`, `msteams`, `custom_scm`. |
| `external_id` | string | No | The user's unique identifier on the external provider's platform (e.g., GitHub user ID, Slack member ID). This ID is specific to the selected `provider`. |
| `external_name` | string | Yes | The display name of the user as known on the external provider's platform (e.g., GitHub username, Slack display name). |
| `integration_id` | integer | Yes | The numeric ID of the Sentry integration that corresponds to the specified provider and is configured for the organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization where the external user linkage will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create organization alert rule

**Slug:** `SENTRY_CREATE_ORGANIZATION_ALERT_RULE`

Creates a Sentry metric alert rule for an organization, mandating a 'critical' trigger, typically for a single project, where actions may require Sentry integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the alert rule. Maximum length of 256 characters. |
| `owner` | string | No | The ID of the Sentry team or user that owns this alert rule. Can be a numeric ID or a string in the format 'team:<team_id>' or 'user:<user_id>'. |
| `query` | string | Yes | An event search query to filter events for the alert. For example, to include only transactions with status code 400, use `http.status_code:400`. Use an empty string for no filter. |
| `dataset` | string | No | The Sentry dataset this query will execute on. Valid values include `events`, `transactions`, `metrics`, `sessions`, and `generic-metrics`. Defaults to `events` if not specified. Refer to Sentry's [Metric Alert Rule Types] documentation for valid configurations. |
| `projects` | array | Yes | A list of project slugs to filter by. For metric alerts, this list is typically limited to containing a single project slug. |
| `triggers` | array | Yes | List of trigger configurations. Each trigger must specify `label` ('critical' or 'warning'; 'critical' is mandatory), `alertThreshold` (numeric value to trigger), and `actions`. Each action specifies `type` (e.g., 'email', 'slack', 'msteams', 'pagerduty', 'sentry_app', 'sentry_notification', 'opsgenie'), `targetType` (must be lowercase, valid values: 'user', 'team', 'specific', 'sentry_app'), `targetIdentifier` (ID/name, format varies by type e.g., email string, PagerDuty integer). Optional action fields include `inputChannelId` (Slack-specific), `integrationId` (usually required, except for 'email'/'sentry_app'), `sentryAppId` (if action `type` is 'sentry_app'), and `priority` (e.g., PagerDuty 'critical', Opsgenie 'P1'). |
| `aggregate` | string | Yes | The aggregate function used in this alert rule. Valid functions include `count`, `count_unique`, `percentage`, `avg`, `apdex`, `failure_rate`, `p50`, `p75`, `p95`, `p99`, `p100`, and `percentile`. Refer to Sentry's [Metric Alert Rule Types] documentation for valid configurations based on dataset and query type. |
| `queryType` | integer | No | The type of query. If no value is provided, `queryType` defaults based on the specified `dataset`. Supported values: `0` (Error events: event.type:error), `1` (Transaction events: event.type:transaction), `2` (None: for datasets like metrics that don't use this). See Sentry's [Metric Alert Rule Types] for valid configurations. |
| `eventTypes` | array | No | A list of event types this alert will relate to. Valid values are `default` (for events captured via Capture Message), `error`, and `transaction`. |
| `timeWindow` | integer | Yes | The time period in minutes to aggregate over. Supported values: `1` (1 minute), `5` (5 minutes), `10` (10 minutes), `15` (15 minutes), `30` (30 minutes), `60` (1 hour), `120` (2 hours), `240` (4 hours), `1440` (24 hours). |
| `environment` | string | No | The name of the environment to filter by. If None or omitted, the alert rule applies to all environments. |
| `monitorType` | integer | No | Integer representing the monitor type. This determines if the alert rule is actively monitored or monitored based on a specific activation condition. Consult Sentry documentation for specific values and their meanings. |
| `thresholdType` | integer | Yes | The comparison operator for the critical and warning thresholds. `0` for 'Above' and `1` for 'Below'. The resolved threshold uses the opposite operator. For percentage change thresholds, `0` means 'Higher than' and `1` means 'Lower than'. |
| `comparisonDelta` | integer | No | Optional. The time delta in minutes for the comparison period. Required when using a percentage change threshold (e.g., 'X% higher/lower compared to `comparisonDelta` minutes ago'). Cannot be used for Crash Free Session Rate or Crash Free User Rate alerts. |
| `resolveThreshold` | integer | No | Optional. The numeric value the metric must reach to resolve an active alert. If not provided, it's automatically set based on the lowest severity trigger's `alertThreshold` and `thresholdType`. For example, if an alert triggers 'Above' 50, it might resolve 'Below' 50. If `thresholdType` is `0` (Above), `resolveThreshold` must typically be less than or equal to the critical threshold; if `thresholdType` is `1` (Below), it must be greater than or equal. |
| `activationCondition` | integer | No | Optional integer. Represents a trigger condition for when to start monitoring the alert rule, typically used when `monitorType` indicates conditional monitoring. Consult Sentry documentation for specific values. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which this alert rule belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create organization monitor

**Slug:** `SENTRY_CREATE_ORGANIZATION_MONITOR`

Creates a new monitor (type 'cron_job') within a Sentry organization to track scheduled tasks, allowing configuration of its name, slug (which must be unique if provided), status, owner, and muting preferences for incidents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The human-readable name for the monitor. This name is used in notifications and the Sentry UI. |
| `slug` | string | No | A unique identifier for the monitor within the organization. If not provided, Sentry will generate one. It must match the pattern `^[a-z][a-z0-9_\-]*$`. Changing this slug after creation requires updating any instrumented check-in calls.  |
| `owner` | string | No | The Sentry actor ID (team or user) to be designated as the owner of this monitor. Format: 'user:{user_id}' or 'team:{team_id}'. If not provided, the monitor will be unassigned. |
| `config` | object | Yes | The configuration for the monitor including schedule type, schedule, and timing settings. This is a required field. |
| `status` | string ("active" | "disabled") | No | The initial status of the monitor. 'active' monitors accept check-ins and contribute to quotas, while 'disabled' monitors do not. Allowed values: 'active', 'disabled'. Note: Monitors are typically created with 'disabled' status by default and must be activated separately. |
| `project` | string | Yes | The project slug to associate the monitor to. This is a required field. |
| `is_muted` | boolean | No | A boolean flag to control incident creation for this monitor. If true, monitor incidents (alerts) will be suppressed. Defaults to false if not provided. |
| `organization_id_or_slug` | string | Yes | The identifier (ID or slug) of the Sentry organization to which this monitor will belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create organization team

**Slug:** `SENTRY_CREATE_ORGANIZATION_TEAM`

Creates a new team in a Sentry organization, requiring either a 'slug' or 'name' to define the team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Optional. The display name for the new team. If not supplied, it's auto-generated from the `slug` (if `slug` is provided). At least one of `name` or `slug` is required to create a team. |
| `slug` | string | No | Optional. A unique, URL-friendly identifier for the new team. If not supplied, it's auto-generated from the `name` (if `name` is provided). Must adhere to the pattern: `^[a-z][a-z0-9_\-]*$`. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization where the new team will be created. This organization must already exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project key with optional rate limiting

**Slug:** `SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING`

Creates a new client key (DSN) for an existing Sentry project, with optional custom rate limit configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | An optional descriptive name for the client key. If not provided, Sentry will generate a default name. |
| `rateLimit__count` | integer | No | The maximum number of events that can be accepted for this key within the specified `rateLimit_window`. If omitted, no custom rate limit will be applied to this key. |
| `rateLimit__window` | integer | No | The time window in seconds for the `rateLimit_count`. For example, if `rateLimit_count` is 1000 and `rateLimit_window` is 3600, the key will accept up to 1000 events per hour. If omitted, no custom rate limit will be applied to this key. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry project for which the client key will be created. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project rule for alerts

**Slug:** `SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS`

Creates a Sentry project alert rule by defining conditions, actions, and optional filters using specific JSON structures (detailed in parameter descriptions) to automate responses to event patterns for an existing organization and project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Descriptive name for the alert rule. |
| `owner` | string | No | Owner ID (e.g., 'team:ID', 'user:ID'). |
| `actions` | array | Yes | List of action objects executed when conditions (and filters) are met. Each object must specify an ID (action type) and parameters. See examples for required JSON structures: **Send a notification to Suggested Assignees** - `fallthroughType` - Who the notification should be sent to if there are no suggested assignees. Valid values are `ActiveMembers`, `AllMembers`, and `NoOne`. json {     "id": "sentry.mail.actions.NotifyEmailAction",     "targetType": "IssueOwners",     "fallthroughType": "ActiveMembers" }  **Send a notification to a Member or a Team** - `targetType` - One of `Member` or `Team`. - `fallthroughType` - Who the notification should be sent to if it cannot be sent to the original target. Valid values are `ActiveMembers`, `AllMembers`, and `NoOne`. - `targetIdentifier` - The ID of the Member or Team the notification should be sent to. json {     "id": "sentry.mail.actions.NotifyEmailAction",     "targetType": "Team",     "fallthroughType": "AllMembers",     "targetIdentifier": 4524986223 }  **Send a Slack notification** - `workspace` - The integration ID associated with the Slack workspace. - `channel` - The name of the channel to send the notification to (e.g., #critical, Jane Schmidt). - `channel_id` (optional) - The ID of the channel to send the notification to. - `tags` (optional) - A string of tags to show in the notification, separated by commas (e.g., "environment, user, my_tag"). - `notes` (optional) - Text to show alongside the notification. To @ a user, include their user id like `@<USER_ID>`. To include a clickable link, format the link and title like `<http://example.com&#124;Click Here>`. json {     "id": "sentry.integrations.slack.notify_action.SlackNotifyServiceAction",     "workspace": 293854098,     "channel": "#warning",     "tags": "environment,level",     "notes": "Please <http://example.com&#124;click here> for triage information" }  **Send a Microsoft Teams notification** - `team` - The integration ID associated with the Microsoft Teams team. - `channel` - The name of the channel to send the notification to. json {     "id": "sentry.integrations.msteams.notify_action.MsTeamsNotifyServiceAction",     "team": 23465424,     "channel": "General" }  **Send a Discord notification** - `server` - The integration ID associated with the Discord server. - `channel_id` - The ID of the channel to send the notification to. - `tags` (optional) - A string of tags to show in the notification, separated by commas (e.g., "environment, user, my_tag"). json {     "id": "sentry.integrations.discord.notify_action.DiscordNotifyServiceAction",     "server": 63408298,     "channel_id": 94732897,     "tags": "browser,user" }  **Create a Jira Ticket** - `integration` - The integration ID associated with Jira. - `project` - The ID of the Jira project. - `issuetype` - The ID of the type of issue that the ticket should be created as. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the ticket as objects. json {     "id": "sentry.integrations.jira.notify_action.JiraCreateTicketAction",     "integration": 321424,     "project": "349719",     "issueType": "1" }  **Create a Jira Server Ticket** - `integration` - The integration ID associated with Jira Server. - `project` - The ID of the Jira Server project. - `issuetype` - The ID of the type of issue that the ticket should be created as. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the ticket as objects. json {     "id": "sentry.integrations.jira_server.notify_action.JiraServerCreateTicketAction",     "integration": 321424,     "project": "349719",     "issueType": "1" }  **Create a GitHub Issue** - `integration` - The integration ID associated with GitHub. - `repo` - The name of the repository to create the issue in. - `title` - The title of the issue. - `body` (optional) - The contents of the issue. - `assignee` (optional) - The GitHub user to assign the issue to. - `labels` (optional) - A list of labels to assign to the issue. json {     "id": "sentry.integrations.github.notify_action.GitHubCreateTicketAction",     "integration": 93749,     "repo": "default",     "title": "My Test Issue",     "assignee": "Baxter the Hacker",     "labels": ["bug", "p1"] }  **Create a GitHub Enterprise Issue** - `integration` - The integration ID associated with GitHub Enterprise. - `repo` - The name of the repository to create the issue in. - `title` - The title of the issue. - `body` (optional) - The contents of the issue. - `assignee` (optional) - The GitHub user to assign the issue to. - `labels` (optional) - A list of labels to assign to the issue. json {     "id": "sentry.integrations.github_enterprise.notify_action.GitHubEnterpriseCreateTicketAction",     "integration": 93749,     "repo": "default",     "title": "My Test Issue",     "assignee": "Baxter the Hacker",     "labels": ["bug", "p1"] } }  **Create an Azure DevOps work item** - `integration` - The integration ID. - `project` - The ID of the Azure DevOps project. - `work_item_type` - The type of work item to create. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the work item as objects. json {     "id": "sentry.integrations.vsts.notify_action.AzureDevopsCreateTicketAction",     "integration": 294838,     "project": "0389485",     "work_item_type": "Microsoft.VSTS.WorkItemTypes.Task" }  **Send a PagerDuty notification** - `account` - The integration ID associated with the PagerDuty account. - `service` - The ID of the service to send the notification to. - `severity` - The severity of the Pagerduty alert. This is optional, the default is `critical` for fatal issues, `error` for error issues, `warning` for warning issues, and `info` for info and debug issues. json {     "id": "sentry.integrations.pagerduty.notify_action.PagerDutyNotifyServiceAction",     "account": 92385907,     "service": 9823924,     "severity": "critical" }  **Send an Opsgenie notification** - `account` - The integration ID associated with the Opsgenie account. - `team` - The ID of the Opsgenie team to send the notification to. - `priority` - The priority of the Opsgenie alert. This is optional, the default is `P3`. json {     "id": "sentry.integrations.opsgenie.notify_action.OpsgenieNotifyTeamAction",     "account": 8723897589,     "team": "9438930258-fairy",     "priority": "P1" }  **Send a notification to a Sentry app with a custom webhook payload** - `settings` - A list of objects denoting the settings each action will be created with. All required fields must be included. - `sentryAppInstallationUuid` - The ID for the Sentry app json {     "id": "sentry.rules.actions.notify_event_sentry_app.NotifyEventSentryAppAction",     "settings": [         {"name": "title", "value": "Team Rocket"},         {"name": "summary", "value": "We're blasting off again."}     ],     "sentryAppInstallationUuid": "643522",     "hasSchemaFormConfig": true }  **Send a notification (for all legacy integrations)** json {     "id": "sentry.rules.actions.notify_event.NotifyEventAction" }    |
| `filters` | array | No | Optional list of filter objects for additional criteria after conditions are met. Each object must specify an ID (filter type) and parameters. See examples for required JSON structures: **The issue is `comparison_type` than `value` `time`** - `comparison_type` - One of `older` or `newer` - `value` - An integer - `time` - The unit of time. Valid values are `minute`, `hour`, `day`, and `week`. json {     "id": "sentry.rules.filters.age_comparison.AgeComparisonFilter",     "comparison_type": "older",     "value": 3,     "time": "week" }  **The issue has happened at least `value` times** - `value` - An integer json {     "id": "sentry.rules.filters.issue_occurrences.IssueOccurrencesFilter",     "value": 120 }  **The issue is assigned to No One** json {     "id": "sentry.rules.filters.assigned_to.AssignedToFilter",     "targetType": "Unassigned" }  **The issue is assigned to `targetType`** - `targetType` - One of `Team` or `Member` - `targetIdentifier` - The target"s ID json {     "id": "sentry.rules.filters.assigned_to.AssignedToFilter",     "targetType": "Member",     "targetIdentifier": 895329789 }  **The event is from the latest release** json {     "id": "sentry.rules.filters.latest_release.LatestReleaseFilter" }  **The issue"s category is equal to `value`** - `value` - An integer correlated with a category. Valid values are `1` (Error), `2` (Performance), `3` (Profile), `4` (Cron), and `5` (Replay). json {     "id": "sentry.rules.filters.issue_category.IssueCategoryFilter",     "value": 2 }  **The event"s tags match `key` `match` `value`** - `key` - The tag - `match` - The comparison operator. Valid values are `eq` (equals), `ne` (does not equal), `sw` (starts with), `ew` (ends with), `co` (contains), `nc` (does not contain), `is` (is set), and `ns` (is not set). - `value` - A string. Not required when `match` is `is` or `ns`. json {     "id": "sentry.rules.filters.tagged_event.TaggedEventFilter",     "key": "level",     "match": "eq",     "value": "error" }  **The event"s level is `match` `level`** - `match` - Valid values are `eq`, `gte`, and `lte`. - `level` - Valid values are `50` (fatal), `40` (error), `30` (warning), `20` (info), `10` (debug), `0` (sample). json {     "id": "sentry.rules.filters.level.LevelFilter",     "match": "gte",     "level": "50" }    |
| `frequency` | integer | Yes | Action performance interval in minutes (5-43200) once conditions are met. |
| `conditions` | array | Yes | List of condition objects defining rule triggers. Each object must specify an ID (condition type) and parameters. See examples for required JSON structures: **A new issue is created** json {     "id": "sentry.rules.conditions.first_seen_event.FirstSeenEventCondition" }  **The issue changes state from resolved to unresolved** json {     "id": "sentry.rules.conditions.regression_event.RegressionEventCondition" }  **The issue is seen more than `value` times in `interval`** - `value` - An integer - `interval` - Valid values are `1m`, `5m`, `15m`, `1h`, `1d`, `1w` and `30d` (`m` for minutes, `h` for hours, `d` for days, and `w` for weeks). json {     "id": "sentry.rules.conditions.event_frequency.EventFrequencyCondition",     "value": 500,     "interval": "1h" }  **The issue is seen by more than `value` users in `interval`** - `value` - An integer - `interval` - Valid values are `1m`, `5m`, `15m`, `1h`, `1d`, `1w` and `30d` (`m` for minutes, `h` for hours, `d` for days, and `w` for weeks). json {     "id": "sentry.rules.conditions.event_frequency.EventUniqueUserFrequencyCondition",     "value": 1000,     "interval": "15m" }  **The issue affects more than `value` percent of sessions in `interval`** - `value` - A float - `interval` - Valid values are `5m`, `10m`, `30m`, and `1h` (`m` for minutes, `h` for hours). json {     "id": "sentry.rules.conditions.event_frequency.EventFrequencyPercentCondition",     "value": 50.0,     "interval": "10m" }    |
| `actionMatch` | string ("all" | "any") | Yes | Logic for condition evaluation: 'all' (all conditions must match) or 'any' (any condition can match). NOTE: 'none' is deprecated and no longer supported. |
| `environment` | string | No | Sentry environment name for event filtering (e.g., 'production'). If omitted, applies to all environments. |
| `filterMatch` | string ("all" | "any" | "none") | No | Logic for filter evaluation ('all', 'any', 'none') for action execution. Required if 'filters' are specified. |
| `project_id_or_slug` | string | Yes | Unique identifier (ID or slug) of the Sentry project for the rule. |
| `organization_id_or_slug` | string | Yes | Unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project webhook subscription

**Slug:** `SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION`

Registers a new webhook subscription for a Sentry project to send HTTP POST notifications to a specified URL for given events, provided the project has the 'servicehooks' feature enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The fully qualified URL to which Sentry will send webhook POST requests for the subscribed events. |
| `events` | array | Yes | A list of event types to subscribe to for this webhook. Valid event types are: 'event.alert' (triggered when alerts fire) and 'event.created' (triggered when new events are processed). When any of these events occur in the project, Sentry will send a notification to the specified URL. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project for which to create the webhook. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create release deploy for org

**Slug:** `SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG`

Creates a new deploy record in Sentry to track the introduction of a release version into a specific environment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | An optional URL that provides a link to the deployment, such as a commit or a CI build page. |
| `name` | string | No | An optional human-readable name for the deploy. |
| `version` | string | Yes | The version identifier of the release to be deployed. This version must already exist in Sentry. |
| `projects` | array | No | An optional list of project slugs to associate this deploy with. If not provided, the deploy applies to all projects associated with the release. |
| `dateStarted` | string | No | An optional ISO 8601 formatted date-time string (UTC is recommended) indicating when the deployment process started. |
| `environment` | string | Yes | The name of the environment to which this release is being deployed (e.g., 'production', 'staging'). This environment must be known to Sentry. |
| `dateFinished` | string | No | An optional ISO 8601 formatted date-time string (UTC is recommended) indicating when the deployment process finished. If not provided, Sentry uses the time the deploy API call is received. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create release for organization

**Slug:** `SENTRY_CREATE_RELEASE_FOR_ORGANIZATION`

Creates a new Sentry release for an existing organization, associating it with specified projects that must belong to that organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | No | An optional commit reference, such as a branch name or a tag. This is useful if a tagged version has been provided (e.g., `version` is 'v1.0.0' and `ref` is 'refs/tags/v1.0.0').  |
| `url` | string | No | An optional URL that points to the release. This can be a link to a GitHub release, a CI build page, or an internal changelog.  |
| `refs` | array | No | An optional way to indicate the start and end commits for each repository included in a release. Head commits must include `repository` and `commit` (the HEAD SHA). They can optionally include `previousCommit` (the SHA of the HEAD of the previous release), which should be specified if this is the first time you've sent commit data. `commit` may also contain a range in the form of `previousCommit..commit`.  |
| `commits` | array | No | An optional list of commit data to be associated with the release. Commits must include the `id` parameter (the SHA of the commit). Optionally, include `repository`, `message`, `patch_set`, `author_name`, `author_email`, and `timestamp` for richer integration and better suspect commit tracking.  |
| `version` | string | Yes | A unique identifier for this release. Can be a semantic version number, a commit hash, or any other string that uniquely identifies this release.  |
| `projects` | array | Yes | A list of project slugs that are part of this release. These projects must belong to the specified organization. |
| `dateReleased` | string | No | An optional ISO 8601 timestamp indicating when the release went live. If not provided, the current time is assumed by Sentry.  |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create scim group for organization

**Slug:** `SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION`

Creates a new Sentry team (SCIM group) within an organization via the SCIM API. Requirements: - Organization must have SCIM enabled (requires Business Plan with SAML2) - Must use a SCIM bearer token (generated when SCIM is enabled) - Token must have 'team:admin' or 'team:write' scope Behavior: - A URL-friendly slug is auto-generated from displayName (e.g., 'My Team' → 'my-team') - Team is created with an empty member set - Members must be added separately through SCIM member operations - Returns SCIM 2.0 Group resource with unique ID Use this for SCIM provisioning workflows with identity providers like Okta or Azure AD.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `displayName` | string | Yes | Human-readable name for the new team. A URL-friendly slug will be auto-generated by converting to lowercase and replacing spaces with dashes (e.g., 'My Team' → 'my-team'). Must be unique within the organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization where the new team will be created. Must be an organization with SCIM enabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create sentry external issue link

**Slug:** `SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK`

Links an existing Sentry issue to an issue in an external service, or updates an existing link, requiring a configured Sentry App installation `uuid`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uuid` | string | Yes | UUID of the Sentry App installation, used to associate the external issue with the correct Sentry instance. |
| `webUrl` | string | Yes | URL of the external issue in the third-party service; should be a direct link. |
| `issueId` | integer | Yes | ID of the Sentry issue to link to the external issue. |
| `project` | string | Yes | Identifier for the project in the external service (not the Sentry project ID), e.g., JIRA project key, GitHub repository name. |
| `identifier` | string | Yes | Unique identifier for the external issue within the third-party service (e.g., JIRA issue key, GitHub issue number). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create team project for organization

**Slug:** `SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION`

Creates a new Sentry project for an existing organization and team, allowing configuration of its name, slug, platform, and default alert rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Display name for the new Sentry project. |
| `slug` | string | No | Optional unique identifier for the project (e.g., for URLs), auto-generated from the name if omitted. Pattern: `^[a-z][a-z0-9_\-]*$`. |
| `platform` | string | No | Primary platform or language (e.g., python, javascript, java) for SDK setup instructions and issue processing. |
| `default_rules` | boolean | No | Specifies whether to create default alert rules. If true (API default when parameter is omitted), an alert is triggered for every new issue. If false, no default alerts are created. |
| `team_id_or_slug` | string | Yes | ID or slug of the Sentry team to associate with the project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization where the project will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create user for SAML integration

**Slug:** `SENTRY_CREATE_USER_FOR_SAML_INTEGRATION`

Creates a new Sentry organization member via a SCIM request for SAML integration; this action does not support setting secondary emails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userName` | string | Yes | User's email address, used as the SAML identifier for the new member. |
| `sentryOrgRole` | string ("billing" | "member" | "manager" | "admin") | No | Organization role for the new member; defaults to the organization's default role. The `admin` role cannot be assigned in Business/Enterprise plans; use `TeamRoles` instead. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a custom integration

**Slug:** `SENTRY_DELETE_A_CUSTOM_INTEGRATION`

Deletes a custom integration (Sentry App) by its ID or slug. Use when you need to permanently remove a custom integration from your organization. Requires org:admin scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sentry_app_id_or_slug` | string | Yes | The ID or slug of the custom integration (Sentry App) to delete. Use the slug (e.g., 'my-integration') or UUID. Slugs are case-sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an alert

**Slug:** `SENTRY_DELETE_AN_ALERT`

⚠️ This endpoint is currently in beta and may be subject to change. Deletes an alert. Use when you need to permanently remove an alert from an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workflow_id` | integer | Yes | The ID of the alert you'd like to query. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete bulk alerts

**Slug:** `SENTRY_DELETE_BULK_ALERTS`

Bulk delete alerts for a given organization. Use when you need to delete multiple alerts at once. ⚠️ This endpoint is currently in beta and may be subject to change.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The ID of the alert you'd like to delete. Multiple IDs can be provided to delete multiple alerts at once. |
| `query` | string | No | An optional search query for filtering alerts to delete. |
| `project` | array | No | The IDs of projects to filter by. '-1' means all available projects. For example: '/?project=1234&project=56789' or '/?project=-1' |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete dsyms for project

**Slug:** `SENTRY_DELETE_DSYMS_FOR_PROJECT`

Permanently removes a specific Debug Information File (DIF), used for symbolicating crash reports, from the specified Sentry project and organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Debug Information File (DIF) to be deleted. This ID is assigned by Sentry when the file is uploaded. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project from which the Debug Information File (DIF) will be deleted. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the project belongs. Slugs are short, URL-friendly names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete external issue by uuid

**Slug:** `SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID`

Unlinks an external issue (e.g., from Jira/GitHub), identified by `external_issue_id`, from the Sentry app installation specified by `uuid`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `uuid` | string | Yes | Unique identifier (UUID) of the Sentry app installation. |
| `external_issue_id` | string | Yes | Platform-specific identifier of the external issue to be unlinked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an external team by id

**Slug:** `SENTRY_DELETE_EXTERNAL_TEAM_BY_ID`

Unlinks a previously established external team from a Sentry team; this action does not delete either the Sentry team or the external team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id_or_slug` | string | Yes | Unique identifier (ID or slug) of the Sentry team. |
| `external_team_id` | integer | Yes | Numeric ID of the external team integration, typically obtained when the link was established. |
| `organization_id_or_slug` | string | Yes | Unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete external user from organization

**Slug:** `SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION`

Deletes the link between an external user (from an integration provider like GitHub, Slack, GitLab, or MS Teams) and a Sentry user within the specified organization. This removes the association but does not delete the Sentry user itself. Requires org:admin or org:write permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `external_user_id` | integer | Yes | The unique numerical identifier of the external user linkage to delete. This ID is returned when creating an external user via the 'create_external_user_for_organization' action. |
| `organization_id_or_slug` | string | Yes | The ID or human-readable slug of the Sentry organization from which to delete the external user link. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete member from team

**Slug:** `SENTRY_DELETE_MEMBER_FROM_TEAM`

Removes an organization member from a Sentry team, revoking their team-specific permissions, provided the member is currently part of that team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | Identifier (ID) of the organization member to remove from the team (e.g., '234567'). Typically a numerical ID. |
| `team_id_or_slug` | string | Yes | Identifier (ID) or slug of the Sentry team from which the member will be removed (e.g., 'frontend-developers', '98765'). Team slugs are typically lowercase and hyphenated. |
| `organization_id_or_slug` | string | Yes | Identifier (ID) or slug of the Sentry organization (e.g., 'our-company', '123456'). Slugs are typically lowercase and hyphenated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization alert rule

**Slug:** `SENTRY_DELETE_ORGANIZATION_ALERT_RULE`

Permanently deletes a metric alert rule from a Sentry organization. This action removes the specified metric alert rule, stopping all monitoring and notifications associated with it. The deletion is immediate and cannot be undone. Metric alert rules monitor aggregated metrics (like error rates, latency, or custom metrics) and are different from issue alert rules which trigger on individual events. **Important**: Metric alert rules require a Sentry Business or Enterprise plan. If your organization is on a different plan, this endpoint will return a 404 Not Found error. **Common Use Cases**: - Cleaning up outdated or unnecessary alert rules - Removing test alert rules after validation - Decommissioning monitoring for deprecated services **Returns**: Success message on deletion (HTTP 202), or error details if the rule doesn't exist or cannot be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alert_rule_id` | integer | Yes | The numeric ID of the metric alert rule to delete. This ID can be obtained from the alert rule's URL in the Sentry UI (https://sentry.io/organizations/{org}/alerts/rules/details/{alert_rule_id}/) or by listing alert rules via the API. Note: Metric alert rules require a Business or Enterprise Sentry plan. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. The organization slug is a URL-friendly name (e.g., 'my-organization'), while the ID is a numeric string. You can find this in your Sentry organization settings URL: https://sentry.io/settings/{organization_slug}/ |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization dashboard

**Slug:** `SENTRY_DELETE_ORGANIZATION_DASHBOARD`

Deletes a custom dashboard or tombstones (marks as deleted) a pre-built dashboard within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dashboard_id` | integer | Yes | Numerical ID of the dashboard to delete. |
| `organization_id_or_slug` | string | Yes | Identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization discover query

**Slug:** `SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY`

Permanently removes a specific saved Discover query (a configuration for exploring event data) from a Sentry organization. This action requires one of the following scopes: org:admin, org:read, or org:write. The Discover saved queries feature is only available on Business and Enterprise plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query_id` | integer | Yes | The unique integer identifier of the saved Discover query that you intend to delete. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the Discover query belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization integration

**Slug:** `SENTRY_DELETE_ORGANIZATION_INTEGRATION`

Permanently removes an integration installation from a Sentry organization. This action requires the numeric integration ID, which can be obtained by first calling retrieve_organization_integrations_list. Required permissions: org:admin or org:integrations scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `integration_id` | string | Yes | The numeric ID of the integration installation on the organization. This is a string representation of a numeric value (e.g., '12345', '67890'). You can obtain integration IDs by first listing the organization's integrations using the retrieve_organization_integrations_list action. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization from which the integration will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization issue

**Slug:** `SENTRY_DELETE_ORGANIZATION_ISSUE`

Permanently deletes a specific Sentry issue, identified by its ID, from an organization; this operation is irreversible and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | string | Yes | The unique identifier (ID) of the Sentry issue to be permanently deleted. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the issue belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization member

**Slug:** `SENTRY_DELETE_ORGANIZATION_MEMBER`

Permanently removes a member from a Sentry organization, revoking their access to that organization and all its associated projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | The unique identifier (ID) of the member to be removed from the organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or the human-readable slug of the Sentry organization from which the member will be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization monitor

**Slug:** `SENTRY_DELETE_ORGANIZATION_MONITOR`

Deletes a Sentry cron monitor or, if `environment` is specified, only specific environments within that monitor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environment` | array | No | Optional list of environment names to delete; if omitted, the entire monitor (including all its environments) is deleted. |
| `monitor_id_or_slug` | string | Yes | The ID or slug of the Sentry cron monitor to be deleted. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization to which the monitor belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization release

**Slug:** `SENTRY_DELETE_ORGANIZATION_RELEASE`

Permanently and irreversibly removes a Sentry release, including all its associated files, identified by its version from the specified organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release to be deleted. This could be a semantic version (e.g., '1.0.0', 'my-app@2.3.1') or a unique commit hash. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization release file

**Slug:** `SENTRY_DELETE_ORGANIZATION_RELEASE_FILE`

Tool to delete a file from an organization release. Use when you need to remove a specific file associated with a release version in an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The ID of the file to delete. |
| `version` | string | Yes | The version identifier of the release. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the release belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete org notification action

**Slug:** `SENTRY_DELETE_ORG_NOTIFICATION_ACTION`

Deletes a specific Spike Protection Notification Action for a Sentry organization, where `action_id` must be a valid action associated with the `organization_id_or_slug`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action_id` | integer | Yes | The unique numerical identifier (ID) of the notification action to be deleted. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project by id

**Slug:** `SENTRY_DELETE_PROJECT_BY_ID`

Schedules a Sentry project for asynchronous deletion within a specified organization, hiding it from most public views once the process begins.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry project to be deleted. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project hook

**Slug:** `SENTRY_DELETE_PROJECT_HOOK`

Deletes a specific service hook from a Sentry project using its organization, project, and hook identifiers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hook_id` | string | Yes | The unique identifier (GUID) of the service hook to be deleted from the specified project. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project from which the service hook will be removed. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the project and service hook belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project issues

**Slug:** `SENTRY_DELETE_PROJECT_ISSUES`

Permanently removes specified issues from a Sentry project; if no issue IDs are provided, it removes the oldest 1000 issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | A list of specific issue IDs to be permanently removed. If not provided, the action removes the oldest 1000 issues in the project. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project from which issues will be removed. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the project and its issues belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project key

**Slug:** `SENTRY_DELETE_PROJECT_KEY`

Permanently deletes a specific client key (DSN) for a project, preventing it from being used to send events to Sentry.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key_id` | string | Yes | The ID of the client key (public DSN key) to delete. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project to which the client key belongs. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project monitor

**Slug:** `SENTRY_DELETE_PROJECT_MONITOR`

Deletes a Sentry monitor, or optionally only its specified environments, for a given project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environment` | array | No | Optional. A list of environment names. If provided, only the monitor configurations for these specific environments will be deleted. If this parameter is omitted or an empty list is passed, the entire monitor and all its environment configurations will be deleted. |
| `monitor_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry monitor to be deleted. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project to which the monitor belongs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the project and monitor belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project replay

**Slug:** `SENTRY_DELETE_PROJECT_REPLAY`

Permanently deletes a specific Sentry session replay (a video-like reproduction of user interactions, including console logs and network activity) from the specified project and organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `replay_id` | string | Yes | The unique identifier (ID) of the session replay to be deleted. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry project from which the replay will be deleted. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry organization to which the project and replay belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project rule

**Slug:** `SENTRY_DELETE_PROJECT_RULE`

Permanently deletes a specific issue alert rule from an existing project within an existing Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule_id` | integer | Yes | The numerical ID of the specific issue alert rule that needs to be deleted from the project. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project from which the alert rule will be deleted. Slugs are typically lowercase and hyphenated (e.g., 'my-web-project'). |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization that contains the project and the alert rule to be deleted. Slugs are typically lowercase and hyphenated (e.g., 'my-sentry-org'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete project team association

**Slug:** `SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION`

Revokes a team's access to a Sentry project; this operation is idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry team to be disassociated from the project. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete release file by id

**Slug:** `SENTRY_DELETE_RELEASE_FILE_BY_ID`

Permanently deletes a specific build artifact (e.g., source map, application bundle) associated with a project release.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The numeric ID of the specific file to be deleted from the release. This ID is returned when a file is uploaded or can be retrieved by listing release files. |
| `version` | string | Yes | The version identifier of the release from which the file will be deleted. This can be a semantic version, a commit hash, or any unique string identifying the release. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project to which the release belongs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the release belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a symbol source from a project

**Slug:** `SENTRY_DELETE_SYMBOL_SOURCE_FROM_PROJECT`

Deletes a custom symbol source from a Sentry project. Use when you need to remove a symbol source that is no longer needed or needs to be reconfigured.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the symbol source to delete. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project containing the symbol source. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the project belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete team by organization and team slug

**Slug:** `SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG`

Schedules a Sentry team for asynchronous deletion, which releases the team's slug for reuse upon successful scheduling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry team targeted for deletion. For example, 'frontend-devs' or '67890'. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the team belongs. For example, 'acme-corp' or '12345'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a team from an organization (SCIM v2)

**Slug:** `SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2`

Permanently and irreversibly deletes a specific team from a Sentry organization via a SCIM v2 request, provided SCIM integration is enabled for the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The ID or slug of the team to be deleted. Can be either a numeric ID (as string) or a team slug. |
| `organization_id_or_slug` | string | Yes | The ID or URL-friendly slug of the Sentry organization from which the team will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete user emails by id

**Slug:** `SENTRY_DELETE_USER_EMAILS_BY_ID`

Permanently removes a Sentry user's email address; if multiple emails exist, Sentry's API logic (e.g., primary or previously marked) determines which is deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email address to remove from the user's Sentry account. Must be a secondary email (not the primary email). |
| `user_id` | string | Yes | Unique identifier of the Sentry user. Use 'me' for the currently authenticated user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete user from org

**Slug:** `SENTRY_DELETE_USER_FROM_ORG`

Removes a SCIM-managed member from a Sentry organization that has SCIM enabled, permanently revoking their access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | The unique identifier of the organization member to remove. |
| `organization_id_or_slug` | string | Yes | The identifier or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable spike protection

**Slug:** `SENTRY_DISABLE_SPIKE_PROTECTION`

Disables Spike Protection feature for specified projects within a Sentry organization. Use this when you need to turn off spike protection for one or more projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projects` | array | Yes | List of project slugs to disable Spike Protection for; use `['$all']` to disable for all projects in the organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch alerts

**Slug:** `SENTRY_FETCH_ALERTS`

Retrieves a list of alerts (workflows) for a Sentry organization. Use to get alert configurations, statuses, and trigger details. ⚠️ Note: This endpoint is currently in beta and may be subject to change. It is supported by New Monitors and Alerts and may not be viewable in the UI today.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The ID of the alert you'd like to query. Can specify multiple IDs. |
| `query` | string | No | An optional search query for filtering alerts. |
| `sortBy` | string | No | The field to sort results by. If not specified, the results are sorted by id. Available fields are: `name`, `id`, `dateCreated`, `dateUpdated`, `connectedDetectors`, `actions`, `priorityDetector`. Prefix with `-` to sort in descending order (e.g., `-dateCreated`). |
| `project` | array | No | The IDs of projects to filter by. Use `[-1]` to include all available projects. For example: `[1234, 56789]` or `[-1]`. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch a monitor

**Slug:** `SENTRY_FETCH_A_MONITOR`

Fetches detailed information for a specific monitor (detector) within an organization. Use when you need to retrieve monitor configuration, status, or settings. This endpoint is currently in beta and is supported by New Monitors and Alerts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `detector_id` | integer | Yes | The ID of the monitor you'd like to query. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch an alert

**Slug:** `SENTRY_FETCH_AN_ALERT`

Retrieves detailed information for a specific alert workflow. Use when you need to get alert configuration, triggers, action filters, or monitoring status. This endpoint is currently in beta and supported by New Monitors and Alerts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workflow_id` | integer | Yes | The ID of the alert you'd like to query. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch an organization's monitors

**Slug:** `SENTRY_FETCH_AN_ORGANIZATIONS_MONITORS`

Retrieves monitors (detectors) for a Sentry organization. This endpoint is currently in beta and may be subject to change. Use when you need to list or query monitors for an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The ID of the monitor you'd like to query. Can specify multiple monitor IDs to filter by. |
| `query` | string | No | An optional search query for filtering monitors. |
| `sortBy` | string | No | The property to sort results by. If not specified, results are sorted by id. Available fields: name, id, type, connectedWorkflows, latestGroup, openIssues. Prefix with `-` to sort in descending order. |
| `project` | array | No | The IDs of projects to filter by. Use `-1` to include all available projects. Can specify multiple project IDs. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch issue event by id

**Slug:** `SENTRY_FETCH_ISSUE_EVENT_BY_ID`

Retrieves the 'latest', 'oldest', or 'recommended' event for a Sentry issue within an organization, optionally filtered by environment(s).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The event to retrieve. Use 'latest' for most recent, 'oldest' for first, 'recommended' for Sentry's recommended event, or a specific event ID. |
| `issue_id` | integer | Yes | The unique numerical ID of the Sentry issue for which to fetch an event. |
| `environment` | array | No | Filter by environment names; if omitted, events from all environments are considered. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the issue belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch organization alert rules

**Slug:** `SENTRY_FETCH_ORGANIZATION_ALERT_RULES`

Retrieves a list of active metric alert rules for an existing Sentry organization, identified by its ID or slug. Note: This endpoint returns metric alert rules only. If no metric alert rules exist for the organization, the API may return a 404 response which is handled gracefully by returning an empty list. For issue alert rules, use the project-level rules endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization for which alert rules are to be fetched. Slugs are typically the organization's name in lowercase, using hyphens for spaces (e.g., 'acme-corp'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch organization release threshold statuses

**Slug:** `SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES`

Retrieves derived health statuses for release thresholds in a Sentry organization for a given time range, optionally filtered by environment, project, or release; `start` and `end` times must be provided together. **`[WARNING]`**: This API is experimental (Alpha) and subject to change!

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | The inclusive end of the time series range for querying release threshold statuses. Must be in UTC ISO8601 format (e.g., '2023-01-01T23:59:59Z'). |
| `start` | string | Yes | The start of the time series range for querying release threshold statuses. Must be in UTC ISO8601 format (e.g., '2023-01-01T00:00:00Z'). |
| `release` | array | No | A list of release versions (e.g., '1.0.0', 'my-app@2.1.3') to filter the release threshold statuses by. If not provided, statuses for all releases within the time range are considered. |
| `environment` | array | No | A list of environment names (e.g., 'production', 'staging') to filter the release threshold statuses by. If not provided, statuses for all environments are considered. |
| `projectSlug` | array | No | A list of project slugs (e.g., 'frontend', 'backend-api') to filter the release threshold statuses by. If not provided, statuses for all projects in the organization are considered. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization for which to fetch release threshold statuses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch organization replay count

**Slug:** `SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT`

Retrieves the total count of session replays for a specified Sentry organization, filterable by time range, environment, project, and query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | The end timestamp for the query period, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). |
| `query` | string | No | A Sentry search query string to further filter replays. Example: `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`. Refer to Sentry documentation for detailed query syntax. |
| `start` | string | No | The start timestamp for the query period, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). |
| `project` | array | No | A list of project IDs to filter results by. Use `[-1]` to include all available projects within the organization. |
| `environment` | array | No | A list of environment names to filter results by (e.g., production, staging). |
| `statsPeriod` | string | No | A relative time period for the query, which overrides `start` and `end` if provided. Format is a number followed by `d` (days), `h` (hours), `m` (minutes), `s` (seconds), or `w` (weeks). For example, `24h` queries data from the last 24 hours. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch organization replay details

**Slug:** `SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS`

Retrieves detailed information for a specific replay session by ID within a Sentry organization, optionally filtering time-series data using `statsPeriod` or `start`/`end`, and further refining by projects, environments, or specific fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | Inclusive end of the time series range (UTC ISO8601 or epoch seconds). Use with `start`; alternative to `statsPeriod`. |
| `sort` | string | No | Field to sort replay details by (prefix with '-' for descending, e.g., '-started_at'). |
| `field` | array | No | Specific fields to include in the response (e.g., 'activity', 'browser'). See `FieldEnm` for valid fields. |
| `query` | string | No | Structured query string to filter replay details (e.g., `user.email:test@example.com`, `has:error`). |
| `start` | string | No | Start of the time series range (UTC ISO8601 or epoch seconds). Use with `end`; alternative to `statsPeriod`. |
| `cursor` | string | No | Pagination cursor for fetching the next or previous set of results. |
| `project` | array | No | List of project IDs to filter replay details by. |
| `per_page` | integer | No | Maximum number of items to return per page for pagination. |
| `replay_id` | string | Yes | ID of the specific replay session to retrieve. |
| `environment` | string | No | Environment (e.g., 'production', 'staging') to filter replay details by. |
| `statsPeriod` | string | No | Time range for series data, relative to now (e.g., `1d`, `2h`). Use if not providing `start` and `end`. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization for the replay. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch organization replay selectors

**Slug:** `SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS`

Retrieves replay selectors (CSS/DOM selectors from session replays) for a Sentry organization. Selectors include elements with dead clicks or rage clicks, useful for identifying UI issues. Returns selector details with click counts and associated project IDs. Use `statsPeriod` for time filtering (preferred over start/end).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | End of time range (UTC ISO8601 or epoch seconds). Use with `start`; not with `statsPeriod`. Note: This endpoint may not support start/end parameters - prefer using `statsPeriod` instead. |
| `sort` | string | No | Field to sort replay selectors by. Refer to Sentry API docs for available fields. |
| `query` | string | No | Sentry search query syntax for filtering. See Sentry docs for syntax/fields. |
| `start` | string | No | Start of time range (UTC ISO8601 or epoch seconds). Use with `end`; not with `statsPeriod`. Note: This endpoint may not support start/end parameters - prefer using `statsPeriod` instead. |
| `cursor` | string | No | Pagination cursor for fetching next/previous page. |
| `project` | array | No | Filter by project IDs (numeric). |
| `per_page` | integer | No | Maximum items per page (API defaults to 100 if not specified, max 100). |
| `environment` | array | No | Filter by environment names. |
| `statsPeriod` | string | No | Time range (e.g., `1d`, `2h`; m, h, d, w units). Use instead of `start`/`end`. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch project environment details

**Slug:** `SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS`

Retrieves detailed information for a specific environment within a Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environment` | string | Yes | The name of the environment (e.g., production, staging, development). |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch project ownership details

**Slug:** `SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS`

Retrieves the ownership configuration, like CODEOWNERS rules or Issue Owner settings, for a specified Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project for which ownership details are to be retrieved. This is used as a path parameter in the API request. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the project belongs. This is used as a path parameter in the API request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch project release files

**Slug:** `SENTRY_FETCH_PROJECT_RELEASE_FILES`

Retrieves artifact files (e.g., source maps, debug information files) for a specific release version in a Sentry project; requires existing organization, project, and release version with associated files.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release (e.g., '1.0.0', 'my-app@2.3.12'). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch project replay clicks

**Slug:** `SENTRY_FETCH_PROJECT_REPLAY_CLICKS`

Fetches a list of user click interactions for a specific Sentry session replay, including the clicked DOM element ID and timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Sentry search query to filter click events (e.g., `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`). |
| `cursor` | string | No | Pagination cursor to navigate through click events. |
| `per_page` | integer | No | Maximum number of click events per page (default/max 100). |
| `replay_id` | string | Yes | The ID of the Sentry session replay. |
| `environment` | array | No | List of environment names to filter click data. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch replay recording segment

**Slug:** `SENTRY_FETCH_REPLAY_RECORDING_SEGMENT`

Retrieves a specific recording segment for a Sentry replay, requiring valid organization, project, replay, and segment identifiers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `replay_id` | string | Yes | The unique identifier of the replay to retrieve. This is a 32-character hexadecimal string (UUID4) without dashes. Example: "a6ef355da2bb43f8a7825c45f98c5177". |
| `segment_id` | integer | Yes | The ID of the specific recording segment within the replay to retrieve. Segment IDs start from 0 and increment sequentially. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project to which the replay belongs. Examples: 'javascript', 'my-project'. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the replay belongs. Examples: 'sentry', 'my-org'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Tag Values for Issue

**Slug:** `SENTRY_FETCH_TAG_VALUES_FOR_ISSUE`

Retrieves a list of distinct values for a specified tag key associated with an existing Sentry issue, useful for understanding tag manifestations like browser versions or affected users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The specific tag key (e.g., 'browser', 'user_id', 'environment') for which to retrieve distinct values associated with the issue. |
| `sort` | string ("age" | "count" | "date" | "id") | No | Sort order for tag values; valid options are 'age', 'count', 'date', 'id'. Prefix with '-' for descending (e.g., '-count'); defaults to '-id'. |
| `issue_id` | integer | Yes | The unique numerical identifier of the Sentry issue for which tag values are to be fetched. |
| `environment` | array | No | A list of environment names to filter the tag values; if provided, only values from these specified environments will be returned. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get activation of alert rule for organization

**Slug:** `SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION`

DEPRECATED: Retrieves all activations for a specific metric alert rule. ⚠️ WARNING: This endpoint has been removed from Sentry as of January 2025. The AlertRuleActivations feature was never fully released and has been completely removed from the Sentry codebase (database tables dropped in migration 0814). This action is retained for backwards compatibility but will fail with 404 errors. Sources: - https://github.com/getsentry/sentry/issues/81970 - https://github.com/getsentry/sentry/pull/83280 - https://github.com/getsentry/sentry/pull/83255

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alert_rule_id` | integer | Yes | The numeric identifier of the metric alert rule whose activations are to be retrieved. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or slug of the Sentry organization to which the alert rule belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get alerts and monitors

**Slug:** `SENTRY_GET_ALERTS`

Tool to retrieve all combined alert rules and monitors for a Sentry organization. Use when you need to get a unified view of both alert rules and cron monitors. This endpoint combines results from multiple sources into a single response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | Sort fields for ordering results. Common values include 'incident_status', 'date_triggered', 'name'. |
| `team` | array | No | Filter by team slugs. Use 'unassigned' to filter for rules with no team assigned. |
| `expand` | array | No | Expand related data in the response. Can include 'latestIncident' to get latest incident details and 'lastTriggered' for last trigger timestamp. |
| `organization` | string | Yes | The organization slug or ID to fetch alerts for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get integration details by org

**Slug:** `SENTRY_GET_INTEGRATION_DETAILS_BY_ORG`

Retrieves details for a specific integration, identified by `integration_id`, installed within an existing Sentry organization, identified by `organization_id_or_slug`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `integration_id` | string | Yes | The unique numeric ID of the integration installed for the specified organization. This is the integration's internal ID (e.g., '12345'), not the provider key. To find integration IDs, use the list organization integrations endpoint. |
| `organization_id_or_slug` | string | Yes | The Sentry organization's unique ID or human-readable slug (e.g., 'the-acme-corp'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get oldest event

**Slug:** `SENTRY_GET_OLDEST_EVENT`

Retrieves the oldest (first) event associated with a Sentry issue within an organization. Use this action when you need to investigate the original occurrence of an issue to understand its root cause or initial context. This is particularly useful for debugging issues from their first appearance, analyzing initial error conditions, or determining when a problem first started occurring.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | integer | Yes | The unique numerical ID of the Sentry issue for which to retrieve the oldest event. |
| `environment` | array | No | Filter by environment names; if omitted, events from all environments are considered. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the issue belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization by id or slug

**Slug:** `SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG`

Retrieves a Sentry organization by its ID or slug; use the `detailed` parameter to optionally exclude project and team details for a more concise response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `detailed` | string | No | Optional query parameter controlling response detail level. Set to "0" to exclude project and team details for a more concise response. Set to "1" (or omit entirely) for full details including projects and teams. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization details

**Slug:** `SENTRY_GET_ORGANIZATION_DETAILS`

Retrieves Sentry organizations accessible via the current authentication, with scope varying between user (all in region) and API key (linked org only) credentials.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | boolean | No | Set to `true` to list only organizations where the authenticated user is an owner. |
| `query` | string | No | Filter results using Sentry's query syntax. Supported fields: `id` (organization ID), `slug` (organization slug), `status` (current status like 'active', 'pending_deletion'), `email` or `member_id` (member's email or ID), `platform` (project platform like 'python'), and `query` (substring match on organization name, slug, member details). |
| `cursor` | string | No | Opaque cursor for pagination to retrieve next/previous result sets. |
| `sortBy` | string | No | Sort results by 'members' (number of members), 'projects' (number of projects), or 'events' (number of events in past 24h), in descending order. Defaults to creation date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization environments

**Slug:** `SENTRY_GET_ORGANIZATION_ENVIRONMENTS`

Lists deployment environments for a Sentry organization, optionally filtered by visibility status. Environments represent deployment contexts like 'production', 'staging', or 'development' where events are tracked. By default, only visible environments are returned. Use the visibility parameter to include hidden environments or view only hidden ones.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `visibility` | string ("all" | "hidden" | "visible") | No | Filter by visibility status. Options: 'visible' (default, shows only visible environments), 'hidden' (shows only hidden environments), 'all' (shows all environments including hidden). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization issue details

**Slug:** `SENTRY_GET_ORGANIZATION_ISSUE_DETAILS`

Retrieves detailed information for a specific issue within a Sentry organization. Accepts both numeric issue IDs (e.g., '7159174717') and short IDs displayed in the Sentry UI (e.g., 'PROJECT-123', 'SENTRY-4V'). Short IDs are automatically resolved to numeric IDs before fetching issue details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | string | Yes | The issue ID. Can be either a numeric ID (e.g., '7159174717') or a short ID displayed in the Sentry UI (e.g., 'PROJECT-123', 'SENTRY-4V'). Short IDs will be automatically resolved to numeric IDs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the issue belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization release version

**Slug:** `SENTRY_GET_ORGANIZATION_RELEASE_VERSION`

Retrieves detailed information, including optional health data and statistics, for a specific release version within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("crash_free_sessions" | "crash_free_users" | "date" | "sessions" | "users") | No | Enumeration of fields for sorting release-related data. |
| `query` | string | No | Filter data for this release using Sentry's search syntax (e.g., to find specific events). See Sentry documentation for syntax. Example from Sentry: `'''(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)'''` |
| `health` | boolean | No | Include health data (e.g., crash rates, session statistics) with release details. |
| `status` | string ("archived" | "open") | No | Enumeration of release statuses. |
| `version` | string | Yes | The unique version identifier of the release. This can be a semantic version (e.g., '1.2.3'), a commit hash, or any string used to identify the release (e.g., 'backend@1.0.0-alpha'). |
| `project_id` | string | No | ID of a specific project to scope release details; if omitted, details may cover multiple projects. |
| `adoptionStages` | boolean | No | Include information about the release's adoption stages. |
| `healthStatsPeriod` | string ("14d" | "1d" | "1h" | "24h" | "2d" | "30d" | "48h" | "7d" | "90d") | No | Enumeration of time periods for release health statistics. |
| `summaryStatsPeriod` | string ("14d" | "1d" | "1h" | "24h" | "2d" | "30d" | "48h" | "7d" | "90d") | No | Enumeration of time periods for release summary statistics. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization sessions

**Slug:** `SENTRY_GET_ORGANIZATION_SESSIONS`

Retrieves time series data for an organization's Sentry project release health sessions; note session duration data (e.g., using `avg(session.duration)`) may be incomplete after Jan 12, 2023, results are capped at 10,000 data points, `statsPeriod` overrides `start`/`end` timestamps, and the `interval` parameter (default/min '1h', max '1d', format like `statsPeriod`) dictates time series resolution and must cleanly divide one day.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | End of the query period (ISO-8601 format). Ignored if `statsPeriod` is provided. |
| `field` | array | Yes | Fields for session statistics (e.g., `sum(session)`, `count_unique(user)`, `p99(session.duration)`, `crash_free_rate(user)`). Session duration aggregations may be incomplete for data after Jan 12, 2023. |
| `query` | string | No | Sentry search query to filter sessions (e.g., `(transaction:foo AND release:abc)`). See Sentry docs for syntax. |
| `start` | string | No | Start of the query period (ISO-8601 format). Ignored if `statsPeriod` is provided. |
| `groupBy` | array | No | Properties to group session data by (e.g., `project`, `release`, `environment`, `session.status`). |
| `orderBy` | string | No | Field from `field` parameter to order results by. Prefix with '-' for descending (e.g., `-sum(session)`). |
| `project` | array | No | Project IDs to filter sessions by. Use `[-1]` for all accessible projects. |
| `interval` | string | No | Time series data resolution (e.g., '1h', '1d'; format like `statsPeriod`). Minimum '1h', maximum '1d'. Must cleanly divide one day. |
| `per_page` | integer | No | Maximum number of groups (aggregated data points based on `groupBy`) per request. |
| `environment` | array | No | Environment names to filter sessions by (e.g., 'production', 'staging'). |
| `statsPeriod` | string | No | Relative query period (e.g., '24h', '7d'), overrides `start` and `end`. Uses 'd' (days), 'h' (hours), 'm' (minutes), 's' (seconds), or 'w' (weeks). |
| `includeSeries` | integer | No | Set to `0` to exclude, `1` (API default) to include time series data. |
| `includeTotals` | integer | No | Set to `0` to exclude, `1` (API default) to include totals. |
| `organization_id_or_slug` | string | Yes | Unique ID or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization stats summary

**Slug:** `SENTRY_GET_ORGANIZATION_STATS_SUMMARY`

Retrieves summarized event statistics for a Sentry organization, aggregated by project, allowing queries for event counts or unique occurrences over a specified time period and resolution, with filtering by project, category, and outcome.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | Inclusive end of the time series range (UTC ISO8601 datetime string or Unix timestamp). Use with `start` instead of `statsPeriod`. |
| `field` | string ("sum(quantity)" | "sum(times_seen)") | Yes | Aggregation field for event counts. Interpretation depends on event type: `sum(quantity)`: For attachments, total size in bytes. For sessions, total events within sessions. For others, event count. `sum(times_seen)`: Sum of unique occurrences. For sessions, count of unique sessions. For attachments, total attachments. |
| `start` | string | No | Start of the time series range (UTC ISO8601 datetime string or Unix timestamp). Use with `end` instead of `statsPeriod`. |
| `reason` | string | No | Reason an event was filtered or dropped (e.g., `project_quota`, `invalid_origin`). |
| `outcome` | string ("accepted" | "filtered" | "rate_limited" | "invalid" | "abuse" | "client_discard" | "cardinality_limited") | No | Filter by event outcome status (e.g., accepted, filtered, rate-limited). |
| `project` | array | No | List of project IDs (strings or integers) to filter by. Omit or use empty list for all projects. |
| `category` | string ("error" | "transaction" | "attachment" | "replays" | "profiles") | No | Filter by event category. If 'attachment', other categories cannot be included. If 'error', `default` and `security` are also included. |
| `download` | boolean | No | If true, triggers a CSV download of the response; otherwise JSON. |
| `interval` | string | No | Time series resolution (e.g., `1h`). Default is `1h`. Minimum `1h`. Intervals must cleanly divide one day and cannot exceed `1d`. |
| `statsPeriod` | string | No | Relative time series range (e.g., `1d`, `2h`). Units: `m`, `h`, `d`, `w`. Use instead of `start` and `end`. Defaults to `24h` if no time range is specified. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project events

**Slug:** `SENTRY_GET_PROJECT_EVENTS`

Retrieves a list of error events for a specified project within a Sentry organization, with options for pagination and detail level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | End of the query period in ISO-8601 format. Must be used with 'start' parameter. Cannot be used with 'statsPeriod' parameter. |
| `full` | boolean | No | If `True`, retrieves full event details including stacktraces; otherwise, a summary is returned. |
| `start` | string | No | Beginning of the query period in ISO-8601 format. Must be used with 'end' parameter. Cannot be used with 'statsPeriod' parameter. |
| `cursor` | string | No | Opaque cursor for pagination, pointing to the start of the next/previous page, typically from a 'Link' header. |
| `sample` | boolean | No | If `True`, returns events in a pseudo-random yet deterministic order. |
| `statsPeriod` | string | No | Time range for events in format: number + unit (d=days, h=hours, m=minutes, s=seconds, w=weeks). Cannot be used with 'start' and 'end' parameters. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project event stats

**Slug:** `SENTRY_GET_PROJECT_EVENT_STATS`

Retrieves time-series event statistics for a Sentry project. Returns an array of [timestamp, count] data points showing event volumes over time. Use this to analyze event trends, monitor error rates, or generate custom dashboards. The endpoint supports different event types (received, rejected, blacklisted, generated) and time resolutions (10s, 1h, 1d). **Important**: This endpoint may change in the future without notice. Monitor Sentry's API changelog for updates. **Common use cases**: - Monitor error rates over time - Analyze event rejection patterns - Generate custom analytics dashboards - Track event volume trends

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `stat` | string ("received" | "rejected" | "blacklisted" | "generated") | No | The type of event statistic to retrieve: 'received' (events accepted by Sentry), 'rejected' (events rejected due to rate limits/filters), 'blacklisted' (events from blocked sources), or 'generated' (events created by Sentry). If not specified, defaults to 'received'. |
| `since` | string | No | UNIX timestamp (seconds since epoch) marking the start of the query period. Must be earlier than 'until' if both are provided. If not specified, defaults to 24 hours before the current time. |
| `until` | string | No | UNIX timestamp (seconds since epoch) marking the end of the query period. Must be later than 'since' if both are provided. If not specified, defaults to the current time. |
| `resolution` | string ("10s" | "1h" | "1d") | No | Time granularity for data aggregation: '10s' (10-second intervals), '1h' (hourly intervals), or '1d' (daily intervals). Finer resolutions (10s) return more data points but may be slower. If not specified, Sentry automatically selects an appropriate resolution based on the time range. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project hook

**Slug:** `SENTRY_GET_PROJECT_HOOK`

Retrieves detailed information for an existing service hook within a Sentry project. Service hooks (webhooks) are HTTP callbacks that notify external systems when specific events occur in Sentry, such as when alerts are triggered ('event.alert') or new events are processed ('event.created'). This action requires: - Authentication with 'project:read' scope - The hook_id (GUID) of an existing service hook, typically obtained from creating a hook or listing project hooks Common use cases: - Verifying hook configuration and status - Retrieving the webhook URL and secret for external system setup - Checking which events the hook is subscribed to - Auditing hook creation timestamps Note: The 'servicehooks' feature must be enabled on your Sentry plan to create or manage hooks, though reading existing hook details may be possible depending on your API permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hook_id` | string | Yes | The unique identifier (GUID) of the service hook to be retrieved. This ID is assigned when the hook is created. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry project to which the service hook is bound. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the project and its service hook belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project list

**Slug:** `SENTRY_GET_PROJECT_LIST`

Lists all Sentry projects the authenticated token has membership access to across all organizations. IMPORTANT: This endpoint returns projects where the token's user is a member. An empty result does NOT mean no projects exist - it means the token lacks project membership. This commonly happens when: - The auth token has organization-level access but not explicit project membership - Projects exist in organizations you can access, but you're not a project member If you receive an empty list but know projects exist, use SENTRY_RETRIEVE_ORGANIZATION_PROJECTS instead, which lists all projects within a specific organization (requires organization_id_or_slug parameter).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Opaque cursor for paginating through project lists, typically obtained from pagination details in a previous API response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project monitor by id

**Slug:** `SENTRY_GET_PROJECT_MONITOR_BY_ID`

Retrieves detailed information for a specific Sentry cron monitor, provided the organization, project, and monitor exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `monitor_id_or_slug` | string | Yes | ID or slug of the Sentry cron monitor. |
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project rule details

**Slug:** `SENTRY_GET_PROJECT_RULE_DETAILS`

Retrieves detailed information for a specific issue alert rule within a Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule_id` | integer | Yes | ID of the alert rule. |
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SCIM group by team ID

**Slug:** `SENTRY_GET_SCIM_GROUP_BY_TEAM_ID`

Retrieves SCIM group information for a specific Sentry team. Returns the team's SCIM representation including ID, display name, and member list (limited to 10,000 members). Requires SCIM to be enabled for the organization (Business Plan with SAML2). Use this to query team details via the SCIM protocol for identity provider integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The ID or slug of the Sentry team to query. Can be either a numeric team ID (e.g., '4508539392294912') or a team slug (e.g., 'backend-team'). |
| `organization_id_or_slug` | string | Yes | The slug or numeric ID of the Sentry organization that owns the team. SCIM must be enabled for this organization (requires Business Plan with SAML2). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sentry app installations for organization

**Slug:** `SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION`

Retrieves a list of Sentry App installations for a given organization, which must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team members by id or slug

**Slug:** `SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG`

Retrieves all active members of a Sentry team with detailed user information, roles, and permissions. This endpoint returns members who have accepted their team invitation. Users with pending invitations are excluded from the results. Each member object includes comprehensive details such as user profile information, organization and team roles, authentication status, and membership flags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Optional pagination cursor for fetching the next page of results. Obtain this value from the 'Link' header in the previous API response. Leave empty for the first request. |
| `team_id_or_slug` | string | Yes | The ID or slug of the team. Can be either a numeric ID (e.g., '4510810786627585') or a URL-friendly slug (e.g., 'backend-team'). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. Can be either a numeric ID (e.g., '4508539392294912') or a URL-friendly slug (e.g., 'my-organization'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get who viewed replay by project

**Slug:** `SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT`

Retrieves users who viewed a specific, existing session replay within a Sentry project and organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `replay_id` | string | Yes | The unique identifier of the session replay. This is a 32-character hexadecimal string (UUIDv4 format without dashes). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Ingest event via DSN

**Slug:** `SENTRY_INGEST_EVENT_VIA_DSN`

Ingests a single custom event into a Sentry project using its DSN via the Envelope ingestion endpoint. This may create or update an issue group depending on Sentry's grouping algorithm. Note: Sentry does not provide a direct API to 'create an issue group'; issues are created from ingested events. This tool allows controlled generation of events for testing or workflows requiring synthetic events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dsn` | string | Yes | The Sentry DSN (Data Source Name) string in format: {PROTOCOL}://{PUBLIC_KEY}@{HOST}{PATH}/{PROJECT_ID}. This is used to authenticate and route the event to the correct project. |
| `tags` | object | No | Key-value pairs for tagging the event. Each tag value must be a string and less than 200 characters. |
| `extra` | object | No | Arbitrary additional metadata to attach to the event. All values will be converted to strings. |
| `level` | string ("fatal" | "error" | "warning" | "info" | "debug") | No | Event severity level. Defaults to 'error'. |
| `logger` | string | No | Logger name that created the event. |
| `message` | string | No | The error message. Either 'message' or 'exception' must be provided. Use message for simple log-like events. |
| `release` | string | No | Release version identifier for this event. |
| `user_id` | string | No | User ID for user context. |
| `event_id` | string | No | Optional event ID (32-character hex UUID without dashes). If not provided, one will be auto-generated. |
| `platform` | string | No | Platform/SDK identifier. Defaults to 'python'. |
| `user_email` | string | No | User email for user context. |
| `environment` | string | No | Environment name where the event occurred. |
| `fingerprint` | array | No | List of strings used to control event grouping/deduplication. By default, Sentry groups events by stack trace. |
| `user_username` | string | No | Username for user context. |
| `exception_type` | string | No | The exception type/class name. Required if you want to send an exception instead of a message. |
| `exception_value` | string | No | The exception message/value. Used in conjunction with exception_type. |
| `user_ip_address` | string | No | User IP address for user context. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List an organization's client keys

**Slug:** `SENTRY_LIST_AN_ORGANIZATION_S_CLIENT_KEYS`

Lists all client keys (DSNs) across all projects in an organization. Use when you need to audit keys organization-wide or filter keys by team or status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | Filter keys by team slug or ID. If provided, only keys for projects belonging to this team will be returned. |
| `cursor` | string | No | A pointer to the last object fetched and its sort order; used to retrieve the next or previous results. |
| `status` | string ("active" | "inactive") | No | Status values for filtering client keys. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List an organization's issues

**Slug:** `SENTRY_LIST_AN_ORGANIZATIONS_ISSUES`

Returns a list of issues (error groups) for an organization. Use when you need to retrieve and analyze error patterns, track unresolved issues, or monitor issue trends. Default query applies 'is:unresolved issue.priority:[high,medium]'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | Query period end time in ISO-8601 format (e.g., 2001-12-14T12:34:56.7890). |
| `sort` | string ("date" | "freq" | "inbox" | "new" | "trends" | "user") | No | Sort order for issues. |
| `limit` | integer | No | Maximum number of issues to return. Default: 100, Maximum: 100. |
| `query` | string | No | Search query for filtering issues. Defaults to 'is:unresolved issue.priority:[high,medium]'. Use an empty string to return all results. Must follow Sentry search syntax; malformed or overly narrow queries silently return empty results. |
| `start` | string | No | Query period start time in ISO-8601 format (e.g., 2001-12-14T12:34:56.7890). |
| `cursor` | string | No | Pagination cursor to retrieve next or previous results. Iterate using Link response headers until exhausted to retrieve all results. |
| `expand` | array | No | Additional data to include in the response. Valid choices: inbox, integrationIssues, latestEventHasAttachments, owners, pluginActions, pluginIssues, sentryAppIssues, sessions. |
| `viewId` | string | No | View ID to apply custom query and filters. |
| `project` | array | No | Filter issues by project IDs. Use -1 to include all available projects. |
| `collapse` | array | No | Fields to exclude from the response. Valid choices: base, filtered, lifetime, stats, unhandled. |
| `environment` | array | No | Filter issues by environment names. Pass multiple environment names to filter by multiple environments. |
| `statsPeriod` | string | No | Time period for the query (e.g., 24h, 7d, 14d). Supports d (days), h (hours), m (minutes), s (seconds), w (weeks) suffixes. Overrides start and end parameters. Affects stats display only, not which issues are returned; use start/end or filter on dateCreated/lastSeen for precise time-bounded issue sets. |
| `shortIdLookup` | string ("0" | "1") | No | Parse query for short IDs when set to 1. |
| `groupStatsPeriod` | string ("14d" | "24h" | "auto") | No | Stats timeline period. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to retrieve issues from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List a project's user feedback

**Slug:** `SENTRY_LIST_A_PROJECTS_USER_FEEDBACK`

Retrieves a list of legacy user feedback items within a Sentry project. Use when you need to see user-reported feedback on errors. Note: This returns legacy User Reports, not submissions from the User Feedback Widget.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor for retrieving the next or previous page of results. |
| `per_page` | integer | No | Maximum number of feedback items to return per page. Default: 100. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List a tag's values for an issue

**Slug:** `SENTRY_LIST_A_TAGS_VALUES_FOR_AN_ISSUE`

Returns a list of values associated with this key for an issue. Use when you need to analyze tag values, their frequency, or timeline for specific issue tags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The tag key to look the values up for (e.g., 'level', 'environment', 'browser'). |
| `issue_id` | integer | Yes | The ID of the issue to retrieve tag values for. |
| `environment` | array | No | The name of environments to filter by. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List organization dashboards

**Slug:** `SENTRY_LIST_ORGANIZATION_DASHBOARDS`

Retrieves a list of custom dashboards for a Sentry organization, with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Opaque cursor for pagination, used to retrieve the next or previous page of dashboards. Obtain from the 'Link' header or pagination metadata of a previous API response. |
| `per_page` | integer | No | Maximum number of dashboard records per page. Defaults to Sentry's setting (often 50) if unspecified. Max: 100. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization whose dashboards are to be listed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List organization members

**Slug:** `SENTRY_LIST_ORGANIZATION_MEMBERS`

Lists all members, including those with pending invitations, for a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List organization releases

**Slug:** `SENTRY_LIST_ORGANIZATION_RELEASES`

Retrieves a list of releases for an existing Sentry organization, optionally filtering by a query string that matches the start of the release version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | An optional string to filter releases. The filter performs a "starts with" match on the release version. For example, "1.0" would match "1.0.1" and "1.0-beta", while "backend-" would match "backend-v2.1". If omitted, all releases are returned. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization whose releases are to be listed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List organization repositories

**Slug:** `SENTRY_LIST_ORGANIZATION_REPOSITORIES`

Retrieves a list of version control repositories for a specific Sentry organization, which must exist and is identified by its ID or slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization for which to list repositories. The slug is the URL-friendly name of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List organizations

**Slug:** `SENTRY_LIST_ORGANIZATIONS`

Retrieves a list of organizations available to the authenticated session. Use this action when you need to discover which organizations the user has access to before performing operations on a specific organization. This is essential for organization-bound operations that require an organization_id_or_slug parameter. Note that API key requests only return the associated organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | boolean | No | Specify true to restrict results to organizations in which you are an owner. When false or omitted, returns all organizations you have access to. |
| `query` | string | No | Search query to filter organizations. Supports filtering by id, slug, status, email, member_id, and query fields. |
| `cursor` | string | No | Pagination cursor to retrieve the next or previous results. Use the cursor value from the Link header of a previous response. |
| `sortBy` | string | No | Field to sort results by in descending order. Valid values: 'members' (sort by member count) or 'events' (sort by event count). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User's Teams in Organization

**Slug:** `SENTRY_LIST_ORGANIZATION_USER_TEAMS`

Retrieves a list of all teams that the authenticated user has access to within the specified Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The unique identifier (numeric ID like '4508539392294912') or URL-friendly slug (like 'my-organization') of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List project tags

**Slug:** `SENTRY_LIST_PROJECT_TAGS`

Retrieves all tags that have been recorded for events within a Sentry project, along with statistical information for each tag. Use when you need to understand what tags are available in a project and their usage patterns. This provides an overview of tag distribution and helps identify commonly used tags for filtering and analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List project users

**Slug:** `SENTRY_LIST_PROJECT_USERS`

Retrieves users who have interacted with or are recognized within a specific Sentry project, optionally filtered by a query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | An optional query string to filter the list of users. Use prefixes like `id:`, `email:`, `username:`, or `ip:` to target specific fields. For example, `email:foo@example.com` or `username:john.doe`. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SCIM v2 organization users

**Slug:** `SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS`

Retrieves a paginated list of SCIM (System for Cross-domain Identity Management) users for a Sentry organization, allowing for filtering, pagination, and attribute exclusion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | Maximum number of user records per response (max 100). |
| `filter` | string | No | SCIM filter expression to narrow down users (e.g., `userName eq "user@example.com"`). Only `eq` operator is supported. |
| `startIndex` | integer | No | The 1-based starting index for pagination. |
| `excludedAttributes` | array | No | Attribute names to exclude from user objects; only `members` is currently supported for exclusion. |
| `organization_id_or_slug` | string | Yes | The organization's unique identifier (ID) or human-readable slug. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Seer AI models

**Slug:** `SENTRY_LIST_SEER_AI_MODELS`

Retrieves the list of AI models currently used in production in Seer. Use when you need to discover which LLM models Seer is actively using.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List teams in organization

**Slug:** `SENTRY_LIST_TEAMS_IN_ORGANIZATION`

Lists teams for an existing Sentry organization, optionally including project details and supporting pagination via a cursor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor for retrieving the next or previous page of results. |
| `detailed` | string | No | If '1', includes project details for each team. If '0' or not provided, excludes project details. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an external team

**Slug:** `SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS`

Links an external team or channel (e.g., Slack, GitHub) to an existing Sentry team, using a pre-configured integration for the specified provider and its valid Sentry integration ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string ("github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "jira_server" | "perforce" | "custom_scm") | Yes | The third-party integration provider. Supported values: github, github_enterprise, jira_server, slack, perforce, gitlab, msteams, custom_scm. |
| `external_id` | string | No | Optional: The associated user ID for the provider (e.g., Slack user ID like U123ABC456). |
| `external_name` | string | Yes | The associated name for the provider (e.g., Slack channel name like #engineering, GitHub team like @dev-team). |
| `integration_id` | integer | Yes | The Integration ID from Sentry. Use the 'retrieve_organization_integrations_list' action to find valid integration IDs for your organization. |
| `team_id_or_slug` | string | Yes | The ID or slug of the team the resource belongs to. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify organization notification action

**Slug:** `SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION`

Modifies an organization's notification action, specifically for `spike-protection` triggers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projects` | array | Yes | A list of project slugs for which this notification action will be active. For spike-protection triggers, this parameter is REQUIRED and must contain exactly one project slug. The notification action will apply only to the specified project. |
| `action_id` | integer | Yes | The unique numerical ID of the specific notification action to be modified. You can obtain this ID from the 'view_organization_notification_actions' action or from the response when creating a notification action. |
| `service_type` | string | Yes | The service through which the notification will be sent. For spike-protection triggers, use `sentry_notification` for built-in Sentry notifications. Other supported services include `slack`, `pagerduty`, and `opsgenie` (these require additional configuration via integration_id, target_identifier, and target_display parameters). |
| `trigger_type` | string | Yes | Specifies the type of event that triggers the notification. Currently, the only supported value is `spike-protection`. |
| `integration_id` | integer | No | The ID of the integration for the notification service. Required if `service_type` is `slack`, `pagerduty`, or `opsgenie`. Not needed for `sentry_notification` service type. |
| `target_display` | string | No | A human-readable name for the notification target (e.g., a Slack channel name like '#critical-alerts' or an Opsgenie team name). This is required if `service_type` is `slack` or `opsgenie`. |
| `target_identifier` | string | No | The unique identifier of the notification target within the chosen service (e.g., a Slack channel ID like 'C012AB3CD' or an Opsgenie team ID). This is required if `service_type` is `slack` or `opsgenie`. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which this notification action belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify organization settings

**Slug:** `SENTRY_MODIFY_ORGANIZATION_SETTINGS`

Updates settings for a Sentry organization, such as name, slug, member roles, privacy, and integrations; if `avatarType` is 'upload', `avatar` (base64 image) is required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A new name for the organization. |
| `slug` | string | No | A new unique slug for the organization, used in URLs. |
| `avatar` | string | No | Base64 encoded image for the organization avatar; required if `avatarType` is 'upload'. |
| `avatarType` | string ("letter_avatar" | "upload") | No | Type of organization avatar: 'letter_avatar' (initials) or 'upload' (custom image). |
| `require2FA` | boolean | No | Enforce two-factor authentication (2FA) for all members. |
| `safeFields` | array | No | List of global field names exempt from data scrubbing, ensuring their values are preserved. |
| `defaultRole` | string ("member" | "admin" | "manager" | "owner") | No | Default role for new members when they join the organization. |
| `githubPRBot` | boolean | No | Allow Sentry to comment on recent GitHub PRs suspected of introducing new issues. Requires GitHub integration. |
| `dataScrubber` | boolean | No | Enforce server-side data scrubbing for all projects based on defined rules. |
| `codecovAccess` | boolean | No | Enable Code Coverage Insights (Team plan or higher). |
| `trustedRelays` | array | No | List of local Relay configurations. Each is a dict with `name`, `publicKey`, `description`. Business/Enterprise plans. Warning: Overwrites existing configurations. |
| `cancelDeletion` | boolean | No | Cancel a pending deletion and restore the organization. |
| `debugFilesRole` | string ("member" | "admin" | "manager" | "owner") | No | Minimum role to download debug files (e.g., ProGuard mappings, source maps). |
| `hideAiFeatures` | boolean | No | Hide AI-powered features in the Sentry UI for this organization. |
| `isEarlyAdopter` | boolean | No | Opt the organization into new Sentry features before public release. |
| `openMembership` | boolean | No | Allow members to freely join any team without invitation or approval. |
| `relayPiiConfig` | string | No | JSON string defining advanced, project-specific data scrubbing rules. Applies to new events and overwrites existing advanced configuration. Warning: Updating this field overwrites all existing advanced rules. |
| `attachmentsRole` | string ("member" | "admin" | "manager" | "owner") | No | Minimum role to download event attachments (e.g., crash reports, logs). |
| `enhancedPrivacy` | boolean | No | Activate enhanced privacy controls, limiting PII and source code display (e.g., in notifications). |
| `githubOpenPRBot` | boolean | No | Allow Sentry to comment on open GitHub PRs with related error issues. Requires GitHub integration. |
| `sensitiveFields` | array | No | List of global field names whose values will be scrubbed from event data across all projects. |
| `scrapeJavaScript` | boolean | No | Allow Sentry to fetch missing JavaScript source context from public URLs if source maps are incomplete. |
| `scrubIPAddresses` | boolean | No | Prevent storage of IP addresses for new events in this organization. |
| `alertsMemberWrite` | boolean | No | Grant members `alerts:write` scope for alert rule management. |
| `allowJoinRequests` | boolean | No | Allow users to request to join the organization; admins approve/deny. |
| `allowSharedIssues` | boolean | No | Enable sharing limited issue details with anonymous users (e.g., via public links). |
| `eventsMemberAdmin` | boolean | No | Grant members `event:admin` scope to delete events. |
| `githubNudgeInvite` | boolean | No | Enable Sentry to detect GitHub committers not in Sentry org and suggest inviting them. Requires GitHub integration. |
| `storeCrashReports` | integer | No | Number of native crash reports (e.g., Minidumps) to store per issue (0=Disabled, -1=Unlimited). |
| `dataScrubberDefaults` | boolean | No | Apply Sentry's default scrubbing rules (e.g., for passwords, credit cards) to event data for all projects. |
| `issueAlertsThreadFlag` | boolean | No | Configure Sentry Slack integration to post Issue Alert replies in threads. Requires Slack integration. |
| `metricAlertsThreadFlag` | boolean | No | Configure Sentry Slack integration to post Metric Alert replies in threads. Requires Slack integration. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify release file attributes

**Slug:** `SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES`

Updates attributes (e.g., name, distribution) of a specific file within an existing release, identified by organization, version, and file ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dist` | string | No | The new distribution name for the file (e.g., build number, platform identifier). This is optional and can be used to differentiate files with the same name across different builds or platforms. |
| `name` | string | No | The new name (full path) for the file. While technically optional, the Sentry API requires this field to be provided when making updates (you can provide the current name if you don't want to change it). |
| `file_id` | string | Yes | ID of the file to modify, typically a hash or unique identifier. |
| `version` | string | Yes | Version identifier of the release. |
| `organization_id_or_slug` | string | Yes | ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mutate an organization's alerts

**Slug:** `SENTRY_MUTATE_AN_ORGANIZATION_S_ALERTS`

Bulk enable or disable alerts for an organization. Use when you need to activate or deactivate multiple alerts at once. This endpoint is in beta and may change in the future.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The IDs of specific alerts to mutate. Provide one or more alert IDs to target specific alerts. If not provided, all matching alerts will be mutated. |
| `query` | string | No | An optional search query for filtering alerts to mutate. Use this to narrow down which alerts should be enabled or disabled. |
| `enabled` | boolean | Yes | Whether to enable or disable the alerts. Set to true to enable alerts, false to disable them. |
| `project` | array | No | The IDs of projects to filter by. Use -1 to include all available projects. For example: [1234, 5678] or [-1]. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mutate an organization's monitors

**Slug:** `SENTRY_MUTATE_AN_ORGANIZATIONS_MONITORS`

Bulk enable or disable monitors for an organization. This endpoint is in beta and may change. Use when you need to enable or disable multiple monitors at once based on filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | The ID of the monitor you'd like to query. |
| `query` | string | No | An optional search query for filtering monitors. |
| `enabled` | boolean | Yes | Whether to enable or disable the monitors. |
| `project` | array | No | The IDs of projects to filter by. `-1` means all available projects. For example: `/?project=1234&project=56789` or `/?project=-1` |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch SCIM group operations

**Slug:** `SENTRY_PATCH_SCIM_GROUP_OPERATIONS`

Performs SCIM PATCH operations (RFC 7644) to update attributes of a SCIM-enabled Sentry team, provided SCIM integration is active for the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | The unique identifier of the Sentry team to be updated. |
| `Operations` | array | Yes | A list of SCIM patch operations to be applied to the team. Each operation specifies an action (e.g., add, remove, replace), a target path, and a value. Multiple operations can be provided to perform several updates in a single request. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization to which the team belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deactivate an organization member

**Slug:** `SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION`

Deactivates and permanently deletes a Sentry organization member by using a SCIM PATCH operation to set their 'active' attribute to 'false'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | The ID of the organization member to update. |
| `Operations` | array | Yes | A list of SCIM PATCH operations. For this action, must contain one operation setting the member's 'active' attribute to 'false', which deactivates and permanently deletes the member. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enable spike protection for an organization

**Slug:** `SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION`

Enables or updates Spike Protection for specified projects (or all projects using `['$all']`) within an existing Sentry organization, to which the projects must belong.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projects` | array | Yes | List of project slugs to enable Spike Protection for; use `['$all']` for all projects in the organization. |
| `organization_id_or_slug` | string | Yes | Unique ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query explore events in timeseries format

**Slug:** `SENTRY_QUERY_EXPLORE_EVENTS_IN_TIMESERIES_FORMAT`

Retrieves explore data for a given organization as a timeseries. Use this to query timeseries data for 1 or many axis, with results optionally grouped by top events depending on parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | The end of the period of time for the query, expected in ISO-8601 format. For example, `2001-12-14T12:34:56.7890`. This parameter is ignored if `statsPeriod` is provided. |
| `sort` | string | No | What to order the results of the query by. Must be something in the `field` list, excluding equations. |
| `query` | string | No | Filters results by using query syntax. Example: `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`. |
| `start` | string | No | The start of the period of time for the query, expected in ISO-8601 format. For example, `2001-12-14T12:34:56.7890`. This parameter is ignored if `statsPeriod` is provided. |
| `yAxis` | string | No | The aggregate field to create the timeseries for, defaults to `count()` when not included. |
| `dataset` | string ("logs" | "profile_functions" | "spans" | "uptime_results") | Yes | Which dataset to query. Changing datasets changes the available fields that can be queried. Options: 'logs', 'profile_functions', 'spans', 'uptime_results'. |
| `groupBy` | array | No | List of fields to group by. *Required* for topEvents queries as this and sort determine what the top events are. |
| `project` | array | No | The IDs of projects to filter by. `-1` means all available projects. For example, the following are valid parameters: `[1234, 56789]` or `[-1]`. |
| `interval` | integer | No | The size of the bucket for the timeseries to have, must be a value smaller than the window being queried. If the interval is invalid a default interval will be selected instead. |
| `topEvents` | integer | No | The number of top event results to return, must be between 1 and 10. When topEvents is passed, both sort and groupBy are required parameters. |
| `environment` | array | No | The name of environments to filter by. |
| `statsPeriod` | string | No | The period of time for the query, will override the start & end parameters. A number followed by one of: 'd' (days), 'h' (hours), 'm' (minutes), 's' (seconds), 'w' (weeks). For example, `24h` means query data starting from 24 hours ago to now. |
| `excludeOther` | string ("0" | "1") | No | Whether to include the 'other' timeseries in TopEvents queries. |
| `comparisonDelta` | integer | No | The delta in seconds to return additional offset timeseries by. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |
| `preventMetricAggregates` | string ("0" | "1") | No | Whether to throw an error when aggregates are passed. |
| `disableAggregateExtrapolation` | string ("0" | "1") | No | Whether to disable aggregate extrapolation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a custom integration by id or slug

**Slug:** `SENTRY_RETRIEVE_A_CUSTOM_INTEGRATION_BY_ID_OR_SLUG`

Retrieves detailed information about a custom integration (Sentry App) by its slug. Use this action when you need to: - Get configuration details of a custom integration including scopes, webhooks, and OAuth settings - Check the status and permissions of an integration - Retrieve integration metadata such as name, description, and avatar - Verify which events an integration subscribes to Note: Provide the integration's slug (case-sensitive), not its UUID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sentry_app_id_or_slug` | string | Yes | The URL-friendly slug of the custom integration (Sentry App) to retrieve. Note: Use the slug (e.g., 'my-integration'), not the UUID. Slugs are case-sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve aggregated test result metrics

**Slug:** `SENTRY_RETRIEVE_AGGREGATED_TEST_RESULT_METRICS`

Retrieves aggregated test result metrics for a repository, owner, and organization. Use when you need to analyze test performance and reliability metrics for a specific repository.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | string | Yes | The owner of the repository. |
| `branch` | string | No | The branch to search for results by. If not specified, the default is all branches. |
| `interval` | string | No | Time interval for results. Options: INTERVAL_30_DAY, INTERVAL_7_DAY, INTERVAL_1_DAY. If not specified, defaults to INTERVAL_30_DAY. |
| `repository` | string | Yes | The name of the repository. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve alert rule details

**Slug:** `SENTRY_RETRIEVE_ALERT_RULE_DETAILS`

Retrieves detailed information for a specific metric alert rule within a Sentry organization. Note: This endpoint is specifically for metric alert rules (organization-level alerts based on metrics like error count, latency, failure rate, etc.). For issue alert rules (project-level alerts triggered by events), use the project rules endpoint instead. The API may return 404 if: - The alert rule ID does not exist - The organization does not have metric alerts enabled - The organization does not exist or you don't have access

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alert_rule_id` | integer | Yes | The numeric ID of the metric alert rule. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a monitor

**Slug:** `SENTRY_RETRIEVE_A_MONITOR`

Retrieves detailed information for a specific monitor within an organization. Use when you need to check monitor configuration, status, schedule, environments, or alert settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environment` | array | No | Optional list of environment names to filter monitor details by. If omitted, all environments are included. |
| `monitor_id_or_slug` | string | Yes | The ID or slug of the monitor to retrieve details for. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the monitor belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve commit files for release

**Slug:** `SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE`

Retrieves files changed in commits for a specified Sentry release; the release must exist and have linked commits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release. This can be a semantic version string (e.g., '1.0.0', 'my-project@2.3.4-beta'), a descriptive name (e.g., 'backend-deploy-2024-05-20'), or a commit SHA if used as the version string (e.g., 'abcdef123456'). |
| `organization_id_or_slug` | string | Yes | The slug (e.g., `my-org-slug`) or numerical ID (e.g., `1234567`) of the Sentry organization to which the release belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve an organization's repository commits

**Slug:** `SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO`

Retrieves a list of commits for a given repository within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `repo_id` | string | Yes | The unique identifier of the repository. |
| `organization_id_or_slug` | string | Yes | The unique identifier or short name (slug) of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve custom integration issue links

**Slug:** `SENTRY_RETRIEVE_CUSTOM_INTEG_ISSUE_LINKS_GIVEN_SENTRY_ISSUE`

Retrieves all external issue links for a Sentry issue. Returns connections between the Sentry issue and external tracking systems (e.g., Jira, GitHub Issues, Linear, GitLab, Asana) created through custom integrations or Sentry Apps. Use this to see what external tickets or issues are linked to a Sentry error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | integer | Yes | The numeric ID of the Sentry issue to retrieve external issue links for. This is the numeric issue ID, not the short ID (e.g., use 7233953621, not 'PROJECT-123'). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve data forwarders for an organization

**Slug:** `SENTRY_RETRIEVE_DATA_FORWARDERS_FOR_AN_ORGANIZATION`

Returns a list of data forwarders for an organization. Use when you need to retrieve all data forwarders configured for a specific organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve dsym files for project

**Slug:** `SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT`

Retrieve a list of debug information files (dSYM files) for a specified Sentry project, used for symbolication to display human-readable stack traces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve event id for organization

**Slug:** `SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION`

Resolves a Sentry event ID to its project and issue details within an accessible Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The unique 32-character hexadecimal identifier of the Sentry event to be resolved. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization where the event occurred. This specifies the scope for the event lookup. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve files for release

**Slug:** `SENTRY_RETRIEVE_FILES_FOR_RELEASE`

Retrieves artifact files for a specific release version in a Sentry organization; the organization and release must exist, and the response `data` field will contain the file information as a dictionary.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The specific version identifier of the release. This can be a commit hash (e.g., '4018a1c'), a semantic version (e.g., '1.0.0'), a custom release name (e.g., 'my-project@1.0.0'), or the literal string 'latest'. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable name (slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve issue events by id

**Slug:** `SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID`

Retrieves events for a specified Sentry `issue_id`, which must be an existing issue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | The end timestamp for filtering events, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). If provided, `start` must also be specified. This parameter is overridden by `statsPeriod` if both are used. |
| `full` | boolean | No | If set to `true`, the full event body, including stacktraces, is included in the response for each event. If `false` or not provided (default), summarized event data is returned. |
| `query` | string | No | An optional Sentry search query string to further filter events. Uses Sentry's search syntax (e.g., 'level:error', 'user.ip:127.0.0.1', 'handled:no tag_name:tag_value'). |
| `start` | string | No | The start timestamp for filtering events, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). If provided, `end` must also be specified. This parameter is overridden by `statsPeriod` if both are used. |
| `sample` | boolean | No | If set to `true`, events are returned in a pseudo-random yet deterministic order. An identical query will consistently produce the same event sequence. Useful for obtaining a representative sample from a large number of events. |
| `issue_id` | integer | Yes | The unique numeric identifier of the Sentry issue for which to retrieve associated events. |
| `environment` | array | No | A list of environment names (e.g., 'production', 'staging') to filter events by. Only events from these specified environments will be returned. |
| `statsPeriod` | string | No | A relative time period for the query (e.g., '24h', '7d', '2w'), calculated from the current time. This overrides `start` and `end` if specified. Format is a number followed by 'd' (days), 'h' (hours), 'm' (minutes), 's' (seconds), or 'w' (weeks). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve issue hashes for organization

**Slug:** `SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION`

Retrieves a list of grouping checksums (hashes) generated by Sentry for a specific issue within an organization, used for understanding event aggregation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `full` | boolean | No | If `True`, includes comprehensive details for each hash; if `False`, returns a minimal representation. |
| `cursor` | string | No | Pagination cursor to navigate through the list of issue hashes. |
| `issue_id` | string | Yes | Identifier (ID) of the Sentry issue. |
| `organization_id_or_slug` | string | Yes | Identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve issue tag details

**Slug:** `SENTRY_RETRIEVE_ISSUE_TAG_DETAILS`

Retrieves detailed information (e.g., top values, counts) for a specific tag key on an existing Sentry issue; results are paginated (max 1000 values per page).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The specific tag key (e.g., 'browser', 'os', 'environment', 'release', custom tags) for which to retrieve detailed values; case-sensitive. |
| `issue_id` | integer | Yes | The unique numerical ID of the Sentry issue. |
| `environment` | array | No | Optional list of environment names to filter tag values; if omitted, all environments are considered. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve monitor checkins

**Slug:** `SENTRY_RETRIEVE_MONITOR_CHECKINS`

Retrieves the history of check-ins for a Sentry monitor, providing insights into the health and performance of associated scheduled tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `monitor_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry monitor. This specifies the monitor for which check-ins are to be retrieved. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry project. This specifies the project to which the monitor belongs, within the given organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization. This specifies the organization to which the project and monitor belong. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve monitor checkins by org

**Slug:** `SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG`

Retrieves check-ins (pings/heartbeats of a monitored cron job or task) for a specific monitor within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `monitor_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the monitor. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve notification action by org id

**Slug:** `SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID`

Retrieves details for a specific Spike Protection Notification Action, which defines alerts for triggered spike protection rules, within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action_id` | integer | Yes | The unique numerical identifier (ID) of the specific notification action to retrieve. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization dashboard

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD`

Fetches detailed information about a specific custom dashboard within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dashboard_id` | integer | Yes | The unique numeric identifier (ID) of the custom dashboard to retrieve within the specified organization. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization events

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_EVENTS`

Retrieves Discover event data for a Sentry organization; the `sort` field must be in the `field` list (not an equation), and `field` has a 20-item limit.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | The end timestamp for the query period, in ISO-8601 format (e.g., `2024-01-15T12:30:00Z`). This parameter is ignored if `statsPeriod` is provided. |
| `sort` | string | No | The field by which to sort the query results. Prepend with `-` for descending order (e.g., `-timestamp`). **Important:** The sort field must be included in the `field` parameter list and cannot be an equation field. |
| `field` | array | Yes | Specifies the fields, functions, or equations to include in the query results (maximum 20 items). Each item can be: - A built-in key field (e.g., `id`, `title`, `timestamp`, `project`, `user.email`, `level`, `transaction`, `platform`). - A tag, using `tag[tagName]` format (e.g., `tag[browser.name]`). - A function in `function_name(parameters,...)` format (e.g., `count()`, `count_unique(user)`, `avg(transaction.duration)`). When a function is included, results are grouped by any non-aggregate fields. - An equation, prefixed with `equation&#124;` (e.g., `equation&#124;count_if(transaction.duration,greater,300) / count() * 100`). Note: The API automatically includes `id` and `project.name` fields in responses. If a `sort` parameter is provided, the base sort field will be automatically added to this list if not already present. |
| `query` | string | No | A Sentry search query string to filter events. Example: `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`. Refer to Sentry documentation for detailed search syntax. |
| `start` | string | No | The start timestamp for the query period, in ISO-8601 format (e.g., `2024-01-01T10:00:00Z`). This parameter is ignored if `statsPeriod` is provided. |
| `project` | array | No | A list of project IDs (integers) to filter events by. Use `[-1]` to include all accessible projects. For example: `[123, 456]` or `[-1]`. |
| `per_page` | integer | No | The maximum number of event rows to return per page. Defaults to 50 if not specified. Maximum allowed value is 100. |
| `environment` | array | No | A list of environment names to filter events by (e.g., `production`, `staging`). |
| `statsPeriod` | string | No | The relative time period for the query (e.g., `24h`, `7d`, `30m`). This overrides `start` and `end` if provided. Valid suffixes: `d` (days), `h` (hours), `m` (minutes), `s` (seconds), `w` (weeks). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization for which to retrieve events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization integrations list

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST`

Retrieves a list of available integrations for an existing Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `features` | array | No | Filters integrations by their supported features. Refer to Sentry's [Integrations Documentation](/product/integrations/) for an updated list of features. Examples include: `alert-rule`, `chat-unfurl`, `codeowners`, `commits`, `data-forwarding`, `deployment`, `enterprise-alert-rule`, `enterprise-incident-management`, `incident-management`, `issue-basic`, `issue-sync`, `mobile`, `serverless`, `session-replay`, `stacktrace-link`, `ticket-rules`. |
| `providerKey` | string | No | Filters integrations by a specific provider key. Refer to Sentry's [Integrations Documentation](/product/integrations/) for an updated list of providers. |
| `includeConfig` | boolean | No | If `True`, fetches detailed third-party configurations for each integration; this may significantly increase response time. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization member

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_MEMBER`

Retrieves details for a Sentry organization member or pending invitee, including role, teams, and status, using their member ID and the organization's ID or slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | The unique identifier (ID) of the organization member whose details are to be retrieved. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization monitors

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_MONITORS`

Retrieves cron monitors for a Sentry organization, including details of nested monitor environments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | string | No | Filter by owner, using `user:<user_id>` or `team:<team_id>` format. |
| `project` | array | No | List of project IDs to filter by; use `[-1]` for all accessible projects. |
| `environment` | array | No | List of environment names (e.g., 'production', 'staging') to filter by. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization projects

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_PROJECTS`

Retrieves a list of Sentry projects for a specified organization (which must be accessible), supporting pagination via cursor. Note: The {region} placeholder in the base URL is handled by the ApiAction framework, which overrides it with the base_url from auth metadata (typically 'https://sentry.io'). This ensures correct URL construction regardless of the region placeholder in the template.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor pointing to the next or previous set of results. If omitted, the first page is returned. Typically obtained from a previous response's 'Link' header. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization relay usage

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE`

Retrieves a list of trusted Sentry Relays configured for an organization. Sentry Relay is a service that proxies events between your application and Sentry. This endpoint returns the configuration of trusted relays registered for an organization. Each trusted relay entry includes details such as the relay name, public key for authentication, and a description of its purpose. Note: This feature is typically available for organizations on Business and Enterprise plans that have Relay infrastructure enabled. Organizations without any configured relays will return an empty list. Use this to: - View all trusted relays configured for your organization - Verify relay configurations and public keys - Audit relay infrastructure setup

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug for the Sentry organization. This specifies which organization's relay usage data to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization release commits

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS`

Retrieves a list of commits for a given release version in an existing Sentry organization, if the release exists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release. This can be a version number, package name with version, or a commit hash. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization replays

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_REPLAYS`

Fetches session replays for a Sentry organization; use `statsPeriod` for relative time, or `start` and `end` (used together) for absolute time ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | Absolute inclusive end of the time series range (UTC ISO8601 or epoch seconds). Requires `start`. Conflicts with `statsPeriod`. |
| `sort` | string | No | The field to sort the replays by. Prefix with '-' for descending order (e.g., '-started_at'). Default is 'activity'. |
| `field` | array | No | Additional fields to include in the response for each replay; invalid fields are ignored. |
| `query` | string | No | Structured query string to filter replays (e.g., 'user.email:"j.doe@example.com" AND browser.name:"Chrome"'). Refer to Sentry documentation for syntax. |
| `start` | string | No | Absolute start of the time series range (UTC ISO8601 or epoch seconds). Requires `end`. Conflicts with `statsPeriod`. |
| `cursor` | string | No | Pagination cursor for fetching next/previous page. See Sentry API documentation for details. |
| `project` | array | No | A list of project IDs to filter replays by. Use -1 for all projects. |
| `per_page` | integer | No | The maximum number of replays to return per page. The default is 50, and the maximum is 100. |
| `environment` | string | No | The environment name to filter replays by (e.g., 'production', 'staging'). |
| `statsPeriod` | string | No | The relative time range for the query (e.g., `1d` for one day). Units: `m` (minutes), `h` (hours), `d` (days), `w` (weeks). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization SCIM groups

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS`

Retrieves a paginated list of SCIM groups (teams) for a Sentry organization; the `members` field in the response for each group will contain at most 10,000 members.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | The maximum number of SCIM groups to return per page. The API enforces a maximum limit of 100. |
| `filter` | string | No | A SCIM filter expression to narrow down the list of groups. Currently, only the `eq` (equals) operator is supported, e.g., `displayName eq "Engineering Team"`. |
| `startIndex` | integer | No | The 1-based index for pagination, indicating the starting point of the results to retrieve. Follows SCIM standards. |
| `excludedAttributes` | array | No | A list of attribute names to exclude from the response for each group. Currently, the only supported value for an attribute to exclude is `members`. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization for which to retrieve SCIM groups. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve organization stats v2

**Slug:** `SENTRY_RETRIEVE_ORGANIZATION_STATS_V2`

Retrieves Sentry organization event statistics; specify time range with `statsPeriod` OR both `start`/`end`; note that grouping by `project` returns a sum not a time-series, and `interval` (if used) must be 1h-1d and cleanly divide 24 hours.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | Inclusive end timestamp for the time series (ISO 8601 UTC or Unix epoch seconds). Use with `start`; alternative to `statsPeriod`. |
| `field` | string ("sum(quantity)" | "sum(times_seen)") | Yes | Metric to retrieve. `sum(quantity)` for event counts (or bytes if category is `attachment`, milliseconds if `profile_duration`). `sum(times_seen)` for unique event occurrences (or sessions/attachments). |
| `start` | string | No | Start timestamp for the time series (ISO 8601 UTC or Unix epoch seconds). Use with `end`; alternative to `statsPeriod`. |
| `reason` | string | No | Reason an event was filtered/dropped by Sentry (e.g., `filters:release_version`, `spike_protection`). Often used with outcomes like `filtered` or `rate_limited`. |
| `groupBy` | array | Yes | Dimensions to group statistics by. **IMPORTANT**: The query must include `category` either in `groupBy` OR as a filter parameter. Grouping by `project` returns a sum over the entire period, not a time series; for many projects, consider filtering by projects individually or querying them one by one to avoid missing rows. |
| `outcome` | string ("accepted" | "filtered" | "rate_limited" | "invalid" | "abuse" | "client_discard" | "cardinality_limited") | No | Filter by event outcome status (e.g., `accepted`, `filtered`, `rate_limited`), indicating how Sentry processed the event. |
| `project` | array | No | Project IDs to filter statistics by. Use `["-1"]` to include all accessible projects for the organization. |
| `category` | string ("error" | "transaction" | "attachment" | "replay" | "profile" | "profile_duration" | "monitor") | No | Filter by data category (e.g., `error`, `transaction`). **IMPORTANT**: Either this parameter OR `category` in `groupBy` is required for the query to succeed. `attachment` and `profile_duration` categories affect interpretation of `sum(quantity)` in `field` (bytes and milliseconds respectively). |
| `interval` | string | No | Time series data resolution (e.g., `1h`, `1d`). Must be between `1h` and `1d` (inclusive) and cleanly divide 24 hours (e.g., `1h`, `2h`, `6h`, `12h`, `24h`). |
| `statsPeriod` | string | No | Relative time range for statistics (e.g., `1d` for 1 day, `2w` for 2 weeks). Use `m` (minutes), `h` (hours), `d` (days), `w` (weeks). Provide this or both `start` and `end`. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve org integration config

**Slug:** `SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG`

Retrieves configuration for all integrations, or a specific integration if `providerKey` is given, for an existing Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `providerKey` | string | No | Key of a specific integration provider (e.g., 'slack', 'github', 'jira') to filter by; if omitted, returns configurations for all integrations. Refer to Sentry's documentation for supported provider keys. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization for which to retrieve integration configurations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve paginated repository tokens

**Slug:** `SENTRY_RETRIEVE_PAGINATED_REPOSITORY_TOKENS`

Retrieves a paginated list of repository tokens for a given owner. Use when you need to access repository tokens with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The number of results to return per page. Defaults to 20 if not specified. |
| `owner` | string | Yes | The owner of the repository (e.g., GitHub organization or user). |
| `cursor` | string | No | Cursor marking the position in the result set for pagination navigation. Obtain this from pageInfo in the previous response. |
| `sortBy` | string | No | Field to sort results by. Supports 'NAME' (alphabetical) or 'COMMIT_DATE' (most recent first, default). Defaults to 'COMMIT_DATE' in descending order. |
| `navigation` | string | No | Controls pagination direction. Use 'next' to fetch the next page or 'prev' to fetch the previous page. Defaults to 'next'. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization that the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project environments

**Slug:** `SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS`

Retrieves a list of environments for an existing project within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `visibility` | string ("all" | "hidden" | "visible") | No | Filters environments by their visibility status: `all`, `hidden`, or `visible`. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project for which environments are to be retrieved. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project event by id

**Slug:** `SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID`

Retrieves detailed information for a specific Sentry event using its ID, organization identifier, and project identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The hexadecimal ID of the event to retrieve, as reported by the client. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project to which the event belongs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the event belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project filter data

**Slug:** `SENTRY_RETRIEVE_PROJECT_FILTER_DATA`

Retrieves a Sentry project's current data filtering settings, used to ignore events from sources like localhost, web crawlers, or legacy browsers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | Unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | Unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project hooks

**Slug:** `SENTRY_RETRIEVE_PROJECT_HOOKS`

Return a list of service hooks (webhooks) bound to a Sentry project, used to send notifications to external services upon event occurrences.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor to retrieve the next or previous set of results (e.g., '100:0:1'). |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project issues list

**Slug:** `SENTRY_RETRIEVE_PROJECT_ISSUES_LIST`

Retrieves a list of issues for a Sentry project, defaulting to unresolved issues unless an empty `query` string is provided or specific `hashes` are used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Sentry structured search query to filter issues (e.g., "is:resolved", "error.type:TypeError"). Defaults to "is:unresolved"; `""` retrieves all issues regardless of status. IMPORTANT: Boolean operators "OR" and "AND" are NOT supported in Issue search - they will cause an error. To search multiple values for the same key, use list syntax: `key:[value1, value2]` instead of `key:value1 OR key:value2`. Use negation with `!` prefix (e.g., `!is:resolved`) to exclude results. |
| `cursor` | string | No | Pagination cursor from a previous response's `Link` header to fetch the next/previous set of issues. |
| `hashes` | string | No | Comma-separated group hashes to retrieve specific issues; incompatible with `query`. Max 100 hashes processed. |
| `statsPeriod` | string | No | Time window for calculating issue statistics (affects the timeline stats in the response, not which issues are returned). Valid values: "" (empty string to disable stats), "24h" (last 24 hours), "14d" (last 14 days). Defaults to "24h" if not provided. Other values (e.g., "7d", "1h", "30d") are not supported. |
| `shortIdLookup` | boolean | No | If `True`, enables issue lookup by short IDs; may return issues from a different project. API default is typically `False`. |
| `project_id_or_slug` | string | Yes | Unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | Unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project key details

**Slug:** `SENTRY_RETRIEVE_PROJECT_KEY_DETAILS`

Retrieves details of a specific client key (DSN) for a Sentry project, which is used by Sentry SDKs to send event data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key_id` | string | Yes | ID of the client key (DSN). |
| `project_id_or_slug` | string | Yes | ID or slug of the project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List a project's client keys

**Slug:** `SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT`

Retrieves a list of client keys (DSNs), used by Sentry SDKs to send events, for a specified project within an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor to retrieve the next or previous set of results, typically formatted as '<cursor_identifier>:<row_offset>:<is_prev>'. |
| `status` | string | No | Filter client keys by status: 'active' or 'inactive'. If unspecified, returns all keys. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project members list

**Slug:** `SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST`

Retrieves active organization members belonging to any team assigned to the specified Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The ID or human-readable slug of the Sentry project. This identifies the project for which members will be listed. |
| `organization_id_or_slug` | string | Yes | The ID or human-readable slug of the Sentry organization. This identifies the organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project release file details

**Slug:** `SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS`

Retrieves metadata (default) or raw content (if `download` is true) for a specific file within a Sentry project's release version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The unique identifier of the file associated with the release (e.g., '~/app.js.map', 'dist/bundle.js'). |
| `version` | string | Yes | The version identifier of the release (e.g., '1.0.0', 'my-app@2.3.1-beta'). |
| `download` | boolean | No | If true, returns raw file content; otherwise, returns file metadata (JSON object). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project rules by org and project id

**Slug:** `SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID`

Retrieves a list of active issue alert rules associated with a specific project within an organization. Returns all active issue alert rules configured for the specified project, including their conditions, filters, actions, and metadata. This endpoint is useful for auditing alert configurations, managing alert rules programmatically, or understanding what alerts are active in a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the project for which to retrieve alert rules. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project symbol sources

**Slug:** `SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES`

Retrieves custom symbol sources for a Sentry project, either listing all or fetching a specific one if its ID is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | ID of a specific symbol source to retrieve; if omitted, all custom symbol sources for the project are returned. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or URL-friendly slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project tag values

**Slug:** `SENTRY_RETRIEVE_PROJECT_TAG_VALUES`

Retrieves up to 1000 unique values for a specified tag key that has been recorded for events within a Sentry project. Returns an empty list if the tag key doesn't exist or has no values recorded yet.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The specific tag key for which to retrieve the associated distinct values (e.g., 'browser', 'device', 'environment'). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve project teams

**Slug:** `SENTRY_RETRIEVE_PROJECT_TEAMS`

Retrieves a list of teams with explicit access to a specific project within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve release commits

**Slug:** `SENTRY_RETRIEVE_RELEASE_COMMITS`

Retrieves a list of commits associated with a specific release version within a Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release. This can be a commit SHA, a semantic version string, or any unique string identifying the release (e.g., 'my-app@1.0.0', 'cf7f4a337311e395e5099035f904289140b37025'). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project to which the release belongs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve release deployments

**Slug:** `SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS`

Retrieves a list of all deployment records for a specific release version in an organization, detailing each deployment's environment and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | Yes | The version identifier of the release. This can be a semantic version string (e.g., '1.0.0'), a project-qualified version (e.g., 'my-project-name@1.0.0'), or a full commit SHA. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve release file by id

**Slug:** `SENTRY_RETRIEVE_RELEASE_FILE_BY_ID`

Retrieves a specific file's content or its metadata from a Sentry release, using the `download` parameter to choose between raw content or JSON metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The unique numeric identifier of the file within the specified release. This ID is returned in the 'id' field when listing release files via the 'List an Organization's Release Files' endpoint. |
| `version` | string | Yes | The version identifier of the release, such as '1.0.0', 'backend@2.3.1-beta', or a commit SHA. |
| `download` | boolean | No | Set to `true` to receive raw file content. If `false` or omitted, results in a JSON object with file metadata being returned. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve replay recording segments

**Slug:** `SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS`

Retrieves a paginated list of recording segments for a specific Sentry replay, used for reconstructing or analyzing the replay.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor obtained from previous response to retrieve the next or previous set of results. |
| `per_page` | integer | No | Number of recording segments per page (default/max is 100). |
| `replay_id` | string | Yes | The unique identifier (UUID format without hyphens) of the replay session to retrieve recording segments for. |
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve saved discover queries

**Slug:** `SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES`

Retrieves a paginated list of saved Discover queries for a Sentry organization. Returns saved query definitions that can be used to reproduce specific event searches and analyses. Supports filtering by name and sorting by various criteria (name, date, popularity, etc.). **Important**: This endpoint may return 404 if the Discover saved queries feature has been deprecated for the organization (organizations with 'discover-saved-queries-deprecation' feature flag). In such cases, the action gracefully returns an empty list with an explanatory message instead of failing. Organizations migrating to newer query systems may have this feature disabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | A string to filter saved Discover queries by their name. For example, "High CPU Usage". |
| `cursor` | string | No | An opaque pagination cursor that points to the last object fetched and its sort order. Used to retrieve the next or previous set of results. |
| `sortBy` | string | No | Field to sort results by. Defaults to sorting by query name. Valid options: `name` (alphabetical), `dateCreated` (creation date), `dateUpdated` (last modified date), `mostPopular` (by usage frequency), `recentlyViewed` (by last view date), `myqueries` (queries created by the authenticated user). |
| `per_page` | integer | No | Maximum number of saved queries to return per page. Max: 100. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization for which to retrieve saved Discover queries. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve saved discover query for organization

**Slug:** `SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION`

Retrieves a specific saved Discover query (a predefined set of filters and conditions for exploring event data) for a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query_id` | integer | Yes | The ID of the saved Discover query to retrieve. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Seer issue fix state

**Slug:** `SENTRY_RETRIEVE_SEER_ISSUE_FIX_STATE`

Retrieves the current detailed state of an AI-assisted autofix process for a Sentry issue. Use when you need to check the progress, status, root cause analysis, proposed solutions, or code modifications for an autofix operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | string | Yes | The ID of the issue to retrieve autofix state for. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the issue belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve short id for organization

**Slug:** `SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION`

Resolves a Sentry short ID (e.g., 'PROJECT-1A') to its complete issue details including organization slug, project slug, group ID, and full issue metadata. Use this to look up issue information when you have a short ID reference.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `short_id` | string | Yes | The Sentry short ID to resolve (e.g., 'PROJECT-1A', 'APP-XYZ'). |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization where the short ID will be looked up. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve source map debug event

**Slug:** `SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT`

Retrieves detailed debug information for diagnosing source map processing issues for a specific Sentry event, stack trace frame, and exception index. Note: The event must contain an exception with stack trace frames for this endpoint to return useful data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The unique identifier (ID) of the event for which source map debug information is being retrieved. |
| `frame_idx` | integer | Yes | Zero-based index of the specific stack trace frame to debug for source map resolution. Use 0 for the most recent frame. The API will return an error if the index is out of bounds. |
| `exception_idx` | integer | Yes | Zero-based index of the exception in the event's exception array to debug for source map resolution. Use 0 for the primary exception. The API will return an error if the index is out of bounds or if the event does not contain exceptions. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project to which the resource belongs. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the resource belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve team info

**Slug:** `SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG`

Retrieves detailed information for an existing Sentry team within its organization, optionally expanding related data (e.g., projects) or collapsing sections (e.g., organization details).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | string | No | A comma-separated string listing extra data sections to include in the response. Supported values are `projects` (to include details of projects associated with the team) and `externalTeams` (to include mappings to external teams). For example, 'projects,externalTeams'. |
| `collapse` | string | No | A comma-separated string listing data sections to exclude from the response. Supported value is `organization` (to exclude detailed organization information from the team details). |
| `team_id_or_slug` | string | Yes | The numeric ID or human-readable slug of the Sentry team whose details are to be retrieved. Use team slugs (e.g., 'my-team', 'engineering') or numeric IDs (e.g., '4506274564079616'). Note: UUID format identifiers are NOT supported by the Sentry API and will result in a 404 error. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization to which the team belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve team projects

**Slug:** `SENTRY_RETRIEVE_TEAM_PROJECTS`

Retrieves a list of Sentry projects for a specific team within an organization, supporting pagination via a cursor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Pagination cursor for navigating through project lists; if omitted, the first page is returned. |
| `team_id_or_slug` | string | Yes | The ID or slug of the Sentry team. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the custom integrations created by an organization

**Slug:** `SENTRY_RETRIEVE_THE_CUSTOM_INTEGS_CREATED_BY_AN_ORG`

Retrieves custom integrations (Sentry Apps) created by an organization. Use when you need to list all custom integrations that the organization has developed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve user email information

**Slug:** `SENTRY_RETRIEVE_USER_EMAIL_INFORMATION`

Retrieves a list of email addresses for an existing Sentry user, identified by their `user_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier of the Sentry user for whom to retrieve email information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve user via SCIM API

**Slug:** `SENTRY_RETRIEVE_USER_VIA_SCIM_API`

Retrieves an individual Sentry organization member's details using the SCIM v2 API. Returns a SCIM-formatted user resource containing the member's ID, username (email), email addresses, name (givenName and familyName), active status, and Sentry organization role. **Requirements**: This endpoint requires SCIM to be enabled for the organization, which requires a Business Plan subscription and SAML2 authentication enabled. A SCIM bearer token (not a regular API token) must be used for authentication. **Note**: Sentry's SCIM API does not support syncing passwords or setting user attributes other than 'active'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | Yes | The SCIM member ID (organization member ID) of the user to retrieve. This is the same as the member ID returned by the List Organization Members endpoint. |
| `organization_id_or_slug` | string | Yes | The organization's unique identifier (ID) or human-readable slug (e.g., 'acme-corp' or '1234567') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Save organization discover query

**Slug:** `SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY`

Saves a new Discover query with a unique name for a Sentry organization, allowing reuse of search criteria for analyzing event data (errors, transactions) across specified projects and environments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | End date/time for the query's time range (ISO 8601). Takes precedence over `range`. |
| `name` | string | Yes | Unique name for the saved query. |
| `query` | string | No | Search query string using Sentry's syntax (e.g., `level:error transaction:/api/v1/*`). |
| `range` | string | No | Relative time range (e.g., '24h', '7d') if `start` and `end` are not provided. |
| `start` | string | No | Start date/time for the query's time range (ISO 8601). Takes precedence over `range`. |
| `yAxis` | array | No | List of aggregate functions for the y-axis of the chart visualization. |
| `fields` | array | No | List of fields (e.g., `transaction`, `tag[tagName]`), functions (e.g., `count_if(...)`), or equations (prefixed with `equation&#124;`) to include (max 20). See Sentry documentation for details. |
| `display` | string | No | Chart visualization type. Allowed: `default`, `previous`, `top5`, `daily`, `dailytop5`, `bar`. |
| `orderby` | string | No | Field or function from `fields` list to order results by (prefix with `-` for descending). Cannot be an equation. |
| `interval` | string | No | Time series resolution for the chart (e.g., '1h', '30m', 'auto'). |
| `projects` | array | No | List of project IDs to filter by; empty list implies all projects in the organization. |
| `topEvents` | integer | No | Number of 'top events' timeseries for `top5` or `dailytop5` display types. |
| `environment` | array | No | List of environment names to filter by. |
| `queryDataset` | string ("discover" | "error-events" | "transaction-like") | No | Dataset to query: `discover` (event properties/tags), `error-events` (error data), or `transaction-like` (transaction/performance data). |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Start Seer issue fix

**Slug:** `SENTRY_START_SEER_ISSUE_FIX`

Trigger a Seer Issue Fix run for a specific issue. Use when you want to start an AI-assisted autofix process that operates asynchronously to identify root causes, propose solutions, generate code changes, and optionally create pull requests with fixes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | No | Run issue fix on a specific event. If not provided, the recommended event for the issue will be used. |
| `issue_id` | integer | Yes | The ID of the issue to trigger autofix for. |
| `instruction` | string | No | Optional custom instruction to guide the issue fix process. Provide specific guidance on how the fix should be approached. |
| `stopping_point` | string | No | Where the autofix process should stop: 'root_cause', 'solution', 'code_changes', or 'open_pr'. Defaults to root cause if not specified. |
| `pr_to_comment_on_url` | string | No | URL of a pull request where the issue fix should add comments. Must be a valid GitHub pull request URL. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the issue belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit notification action API data

**Slug:** `SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA`

Creates a Sentry notification action for 'spike-protection' triggers, requiring `integration_id` if `service_type` is 'slack', 'pagerduty', or 'opsgenie', and `target_identifier`/`target_display` if `service_type` is 'slack' or 'opsgenie'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projects` | array | No | Optional list of project slugs to scope this action; if provided, the action applies only to these projects. |
| `service_type` | string | Yes | The service for sending the notification (e.g., 'email', 'slack'). |
| `trigger_type` | string | Yes | Specifies the type of event that triggers the notification; currently, only 'spike-protection' is supported. |
| `integration_id` | integer | No | ID of the pre-configured integration. Required if `service_type` is 'slack', 'pagerduty', or 'opsgenie'. |
| `target_display` | string | No | Human-readable name for the notification target (e.g., Slack channel name). Required if `service_type` is 'slack' or 'opsgenie'. |
| `target_identifier` | string | No | Specific identifier of the notification target (e.g., Slack channel ID). Required if `service_type` is 'slack' or 'opsgenie'. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit user feedback

**Slug:** `SENTRY_SUBMIT_USER_FEEDBACK`

Submits user feedback tied to a specific Sentry event. Use when you need to associate user-reported issues with specific error events. DEPRECATED: This endpoint is maintained for legacy SDKs; new implementations should use the User Feedback Widget. Feedback must be submitted within 30 minutes of event creation and can only be modified within 5 minutes of submission.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the person submitting the feedback. |
| `email` | string | Yes | The email address of the person submitting the feedback. |
| `comments` | string | Yes | The user's feedback content describing the issue or experience. |
| `event_id` | string | Yes | The event identifier, retrievable via beforeSend callback. Must be from an event created within the last 30 minutes. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Switch team role for member

**Slug:** `SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER`

Changes a member's role within a Sentry team, ensuring the member is already part of the team and that any organization-level role restrictions are respected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamRole` | string ("contributor" | "admin") | No | Details for available team roles: `contributor` allows viewing/acting on events and most team project data; `admin` grants team administration privileges like managing projects and memberships. |
| `member_id` | string | Yes | Identifier for the organization member. |
| `team_id_or_slug` | string | Yes | Identifier (ID or slug) for the Sentry team. |
| `organization_id_or_slug` | string | Yes | Identifier (ID or slug) for the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Toggle project filter status

**Slug:** `SENTRY_TOGGLE_PROJECT_FILTER_STATUS`

Updates the status or configuration of a specific inbound data filter for a Sentry project; use `active` for most filters, or `subfilters` if `filter_id` is `legacy-browsers`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Enable (`true`) or disable (`false`) the filter. Required if `filter_id` is not `legacy-browsers`; not used if `filter_id` is `legacy-browsers` (use `subfilters` then). |
| `filter_id` | string | Yes | Identifier of the inbound data filter to update. Each `filter_id` has a specific behavior: - `browser-extensions`: Filters errors known to be caused by browser extensions. - `localhost`: Filters events originating from localhost (IPv4: `127.0.0.1`, IPv6: `::1`). - `filtered-transaction`: Filters transactions for health check and ping endpoints. - `web-crawlers`: Filters known web crawlers, as they may cause errors unlikely for normal users. - `legacy-browsers`: Filters known errors from legacy browsers (often providing less accurate context). Use `subfilters` to configure specific browsers for this filter. |
| `subfilters` | array | No | List of legacy browser subfilters to enable (unlisted ones will be disabled). Required and only used if `filter_id` is `legacy-browsers`. Available options: - `ie`: Internet Explorer (v11 and older) - `edge`: Edge (v18 and older, non-Chromium) - `safari`: Safari (v11 and older) - `firefox`: Firefox (v66 and older) - `chrome`: Chrome (v62 and older) - `opera`: Opera (v50 and older) - `android`: Android Browser (v3 and older) - `opera_mini`: Opera Mini (v34 and older) Deprecated options (still functional but may be removed in the future): - `ie_pre_9`: Internet Explorer (v8 and older) - `ie9`: Internet Explorer v9 - `ie10`: Internet Explorer v10 - `ie11`: Internet Explorer v11 - `safari_pre_6`: Safari (v5 and older) - `opera_pre_15`: Opera (v14 and older) - `opera_mini_pre_8`: Opera Mini (v8 and older) - `android_pre_4`: Android Browser (v3 and older) - `edge_pre_79`: Edge (v18 and older, non-Chromium based) |
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a monitor

**Slug:** `SENTRY_UPDATE_A_MONITOR`

Updates a monitor's configuration and settings. Use when you need to modify monitor name, schedule, check-in margin, max runtime, timezone, or alert thresholds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the monitor. Used in notifications and the Sentry UI. This is required for updating a monitor. |
| `slug` | string | No | A unique identifier for the monitor within the organization. Changing this slug requires updating any instrumented check-in calls. Must match pattern ^[a-z][a-z0-9_\-]*$. |
| `owner` | string | No | The ID of the team or user that owns the monitor. Format: 'user:{user_id}' or 'team:{team_id}'. |
| `config` | object | Yes | The configuration object for the monitor, including schedule, checkin margin, max runtime, timezone, and alert thresholds. |
| `status` | string ("active" | "disabled") | No | The status of the monitor. 'active' monitors accept events and count towards quota; 'disabled' monitors do not. |
| `project` | string | Yes | The project slug to associate the monitor with. This is required for updating a monitor. |
| `is_muted` | boolean | No | Whether to disable creation of monitor incidents. Set to true to suppress alerts for this monitor. |
| `monitor_id_or_slug` | string | Yes | The ID or slug of the monitor to update. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the monitor belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a monitor by ID

**Slug:** `SENTRY_UPDATE_A_MONITOR_BY_ID`

Updates an existing Sentry monitor (detector) for metric-based issue detection. Use when you need to modify monitor configuration, thresholds, data sources, or enable/disable the monitor. Note: This endpoint is in beta and may change.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the monitor. |
| `type` | string | Yes | The type of monitor. Must be 'metric_issue'. |
| `owner` | string | No | The user or team who owns the monitor. Can be a string or an object with type, id, name, and optional email. |
| `config` | object | No | Issue detection type configuration. |
| `enabled` | boolean | No | Set to false if you want to disable the monitor. Defaults to true. |
| `detectorId` | integer | Yes | The ID of the monitor you'd like to update. |
| `dataSources` | array | No | The data sources for the monitor to use based on what you want to measure (errors, transactions, spans, etc.). |
| `description` | string | No | A description of the monitor. Will be used in the resulting issue. |
| `conditionGroup` | object | No | Issue detection configuration for when to create an issue and at what priority level. |
| `organizationIdOrSlug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an alert by ID

**Slug:** `SENTRY_UPDATE_AN_ALERT_BY_ID`

Tool to update an existing Sentry alert (workflow) by ID. Use when you need to modify alert settings like name, filters, triggers, or configuration. Note: This endpoint is in beta and supported by New Monitors and Alerts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of the existing alert |
| `name` | string | Yes | The name of the alert |
| `config` | object | No | Typically the frequency at which the alert will fire, in minutes. Valid values: 0 (0 minutes), 5 (5 minutes), 10 (10 minutes), 30 (30 minutes), 60 (1 hour), 180 (3 hours), 720 (12 hours), 1440 (24 hours) |
| `enabled` | boolean | No | Whether the alert is enabled or disabled |
| `triggers` | object | No | The conditions on which the alert will trigger. logicType can be one of: any-short, all, or none. Common trigger types include: first_seen_event, issue_resolved_trigger, reappeared_event, regression_event |
| `environment` | string | No | The name of the environment for the alert to evaluate in |
| `workflow_id` | integer | Yes | The ID of the alert you'd like to query. |
| `action_filters` | array | No | The filters to run before the action will fire and the action(s) to fire. logicType can be one of: any-short, all, or none. See API documentation for full schema of conditions and actions. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an existing custom integration

**Slug:** `SENTRY_UPDATE_AN_EXISTING_CUSTOM_INTEGRATION`

Updates an existing custom integration (Sentry App) with new configuration. Use this action to modify integration settings such as name, scopes, webhook URL, or other configuration. You must provide the integration's slug or ID and the required fields (name and scopes).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the custom integration. This is the display name shown to users. |
| `author` | string | No | The custom integration's author name or organization. |
| `events` | array | No | Webhook events the custom integration is subscribed to (e.g., 'issue', 'comment', 'event.alert'). |
| `schema` | object | No | The UI components schema, used to render the custom integration's configuration UI elements. See Sentry's schema docs for more information. |
| `scopes` | array | Yes | The custom integration's permission scopes for API access (e.g., 'project:read', 'event:read', 'org:read'). This field is required for updating the integration. |
| `overview` | string | No | The custom integration's description or overview text. |
| `isInternal` | boolean | No | Whether or not the integration is internal only. False means the integration is public. Defaults to false if not specified. |
| `webhookUrl` | string | No | The webhook destination URL where Sentry will send event notifications. |
| `isAlertable` | boolean | No | Marks whether or not the custom integration can be used in an alert rule. Defaults to false if not specified. |
| `redirectUrl` | string | No | The post-installation redirect URL where users are sent after installing the integration. |
| `verifyInstall` | boolean | No | Whether or not an installation of the custom integration should be verified. Defaults to true if not specified. |
| `allowedOrigins` | array | No | The list of allowed origins for CORS configuration. |
| `sentry_app_id_or_slug` | string | Yes | The ID or slug of the custom integration to update. Use the slug (e.g., 'my-integration'), not the UUID. Slugs are case-sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a symbol source in a project

**Slug:** `SENTRY_UPDATE_A_PROJECTS_SYMBOL_SOURCE`

Updates an existing custom symbol source (HTTP, GCS, or S3) in a project for fetching debug symbols. Use when you need to modify the configuration of a symbol source identified by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the symbol source to update. This is passed as a query parameter. |
| `url` | string | No | Base URL for an HTTP symbol source. Required if type is 'http'. |
| `name` | string | Yes | Human-readable name for the symbol source. |
| `type` | string ("http" | "gcs" | "s3") | Yes | Type of the symbol source. Required field that determines which additional fields are needed. |
| `bucket` | string | No | Name of the GCS or S3 bucket containing symbols. Required if type is 'gcs' or 's3'. |
| `prefix` | string | No | Optional path prefix within the GCS or S3 bucket. |
| `region` | string ("us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "ap-east-1" | "ap-south-1" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "cn-north-1" | "cn-northwest-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-north-1" | "sa-east-1" | "us-gov-east-1" | "us-gov-west-1") | No | AWS region for the S3 bucket. Required if type is 's3'. |
| `password` | string | No | Password for HTTP basic authentication. Optional for HTTP sources. |
| `username` | string | No | Username for HTTP basic authentication. Optional for HTTP sources. |
| `source_id` | string | No | Optional internal ID of the source. Must be distinct from all other source IDs and cannot start with 'sentry:'. |
| `access_key` | string | No | AWS Access Key ID for S3 authentication. Required if type is 's3'. |
| `secret_key` | string | No | AWS Secret Access Key for S3 authentication. Required if type is 's3'. |
| `private_key` | string | No | Private key (PEM format) for GCS service account. Required if type is 'gcs'. |
| `client_email` | string | No | Client email for GCS service account. Required if type is 'gcs'. |
| `layout__type` | string ("native" | "symstore" | "symstore_index2" | "ssqp" | "unified" | "debuginfod" | "slashsymbols") | No | Specifies the directory structure or layout type for symbols. Required for HTTP, GCS, and S3 sources. |
| `layout__casing` | string ("lowercase" | "uppercase" | "default") | No | Specifies the filename casing convention for symbols. |
| `filters__filetypes` | array | No | List of file types to filter. Optional filtering configuration. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project containing the symbol source. |
| `filters__path_patterns` | array | No | List of glob patterns for path matching. Optional filtering configuration. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization that owns the project. |
| `filters__requires_checksum` | boolean | No | Whether debug checksums are mandatory. Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update environment visibility

**Slug:** `SENTRY_UPDATE_ENVIRONMENT_VISIBILITY`

Updates the visibility of a specific environment within a Sentry project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `isHidden` | boolean | Yes | Indicates if the environment should be hidden (`true`) or visible (`false`). |
| `environment` | string | Yes | The name of the environment to update. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update external team integration

**Slug:** `SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION`

Updates an existing external team integration's display name, provider, Sentry integration ID, or external ID; the `integration_id` must match a valid, configured Sentry integration for the organization and the specified `provider`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string ("github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm" | "jira_server" | "perforce") | Yes | Provider of the external actor; must match the provider of the integration. |
| `external_id` | string | No | Optional: External ID for the team within the provider's system, distinct from its name. |
| `external_name` | string | Yes | New display name for the team in the external provider. |
| `integration_id` | integer | Yes | Unique ID of the Sentry integration instance connecting Sentry to the external provider. |
| `team_id_or_slug` | string | Yes | ID or slug of the Sentry team. |
| `external_team_id` | integer | Yes | Unique ID of the external team object to update. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update external user for organization

**Slug:** `SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION`

Updates attributes of an existing external user linkage (identified by `external_user_id`) within a Sentry organization (specified by `organization_id_or_slug`).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique Sentry identifier of the external user record being updated. This typically matches the `external_user_id` path parameter. |
| `user_id` | integer | Yes | The Sentry user ID to be linked or that is currently linked with this external user. |
| `provider` | string ("github" | "github_enterprise" | "jira_server" | "slack" | "perforce" | "gitlab" | "msteams" | "custom_scm") | Yes | The external identity provider platform. Supported values: `github`, `github_enterprise`, `jira_server`, `slack`, `perforce`, `gitlab`, `msteams`, `custom_scm`. |
| `external_id` | string | No | The user's unique identifier on the external provider's platform (e.g., 'U123ABC' for Slack, 'github_user_123' for GitHub). This is optional. |
| `external_name` | string | Yes | The user's display name or username on the external provider platform (e.g., 'john.doe' or 'John Doe'). |
| `integration_id` | integer | Yes | The Sentry ID of the integration instance (e.g., a specific Slack workspace or GitHub organization integration) through which this external user is known. |
| `external_user_id` | integer | Yes | The unique identifier of the external user record within Sentry to update. |
| `organization_id_or_slug` | string | Yes | The unique identifier (numeric ID or string slug) of the Sentry organization to which the external user is linked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update issue attributes in organization

**Slug:** `SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION`

Updates specified attributes of an existing Sentry issue within a Sentry organization, leaving other attributes unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | The new status to assign to the issue. Valid values: "resolved", "resolvedInNextRelease", "unresolved", "ignored". |
| `hasSeen` | boolean | No | Updates if the user has seen the issue (true for seen, false for unseen). |
| `isPublic` | boolean | No | Sets the issue's visibility (true for public, false for private). |
| `issue_id` | string | Yes | The unique identifier of the issue to be updated. |
| `assignedTo` | string | No | Actor ID (e.g., 'user:1', 'team:2'), username, or email for assignment. Omit, or use an empty string or 'null' equivalent, to unassign. |
| `isBookmarked` | boolean | No | Updates the user's bookmark for the issue (true to bookmark, false to remove). |
| `isSubscribed` | boolean | No | Updates the user's notification subscription for the issue (true to subscribe, false to unsubscribe). |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or slug of the Sentry organization. |
| `statusDetails__inCommit` | string | No | The commit hash associated with the fix for this issue. |
| `statusDetails__inRelease` | string | No | The Sentry release version in which the issue is considered resolved. |
| `statusDetails__inNextRelease` | boolean | No | Specifies if the issue is resolved in the next Sentry release. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update monitor for project

**Slug:** `SENTRY_UPDATE_MONITOR_FOR_PROJECT`

Updates a monitor for a project. Use when you need to modify monitor name, schedule, check-in margin, max runtime, timezone, status, owner, or alert thresholds for a project-level monitor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the monitor. Used for notifications. Required field. |
| `slug` | string | No | Uniquely identifies your monitor within your organization. Changing this slug will require updates to any instrumented check-in calls. Must start with a lowercase letter and contain only lowercase letters, numbers, underscores, or hyphens. |
| `owner` | string | No | The ID of the team or user that owns the monitor. Format: 'user:51' or 'team:6'. |
| `config` | object | Yes | The configuration for the monitor including schedule, thresholds, and alert settings. |
| `status` | string ("active" | "disabled") | No | Status of the monitor. Disabled monitors will not accept events and will not count towards the monitor quota. |
| `project` | string | Yes | The project slug to associate the monitor to. Required field. |
| `is_muted` | boolean | No | Disable creation of monitor incidents. Set to true to suppress alerts. |
| `monitor_id_or_slug` | string | Yes | The ID or slug of the monitor to update. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project the resource belongs to. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization alert rules

**Slug:** `SENTRY_UPDATE_ORGANIZATION_ALERT_RULES`

Replaces an existing Sentry metric alert rule's configuration; fields not provided in the request are removed or reset. This action updates an existing metric alert rule. Note that this is a full replacement - any fields not provided will be removed or reset to defaults. Prerequisites: - The organization must have metric alerts feature enabled - The alert_rule_id must be a valid existing metric alert rule - Use SENTRY_FETCH_ORGANIZATION_ALERT_RULES to get existing alert rule IDs

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Descriptive name for the alert rule. |
| `owner` | string | No | Sentry actor ID (e.g., `team:123`, `user:456`) owning the rule, determining management permissions. |
| `query` | string | Yes | Sentry search query to filter events/metrics. An empty string (`''`) applies no filter. |
| `dataset` | string | No | Dataset to query (`events`, `transactions`, `metrics`, `sessions`, `generic-metrics`). Affects available fields/aggregations; see Sentry's 'Metric Alert Rule Types' docs. |
| `projects` | array | Yes | List of project slugs to scope the alert rule. |
| `triggers` | array | Yes | List of trigger configurations defining alert conditions (critical/warning labels, thresholds) and notification actions (e.g., email, Slack). `critical` label is mandatory. See Sentry API docs for full action schema. |
| `aggregate` | string | Yes | Aggregate function for the metric (e.g., `count`, `p95`). See Sentry's 'Metric Alert Rule Types' documentation for configurations based on dataset and query type. |
| `queryType` | integer | No | Query type, often related to `dataset`: `0` (error events), `1` (transaction events), `2` (none). See Sentry's 'Metric Alert Rule Types' for valid combinations. |
| `eventTypes` | array | No | Specific event types for this alert (e.g., `default`, `error`, `transaction`). |
| `timeWindow` | integer | Yes | Time window in minutes for `aggregate` computation (1, 5, 10, 15, 30, 60, 120, 240, 1440). |
| `environment` | string | No | Environment to filter events/metrics (e.g., 'production'). If omitted, applies to all environments. |
| `monitorType` | integer | No | Monitoring state of the rule (e.g., continuously active or conditionally activated via `activationCondition`). |
| `alert_rule_id` | integer | Yes | Unique numeric ID of the metric alert rule to update. |
| `thresholdType` | integer | Yes | Comparison operator for thresholds: `0` for 'Above' (metric > threshold) or 'Higher than' (percentage change), `1` for 'Below' (metric < threshold) or 'Lower than'. |
| `comparisonDelta` | integer | No | Comparison period (minutes) for percentage change thresholds (e.g., 'X% higher than Y minutes ago'). Required if `thresholdType` implies percentage change; not for 'Crash Free...' alerts. |
| `resolveThreshold` | integer | No | Metric value for alert resolution. If unspecified, derived from lowest severity trigger. If `thresholdType` is `0` ('Above'), `resolveThreshold` must be < critical threshold to resolve when metric drops below this value; if `1` ('Below'), it must be > critical threshold to resolve when metric rises above this value. |
| `activationCondition` | integer | No | Optional condition for rule activation, used with certain `monitorType` values. |
| `organization_id_or_slug` | string | Yes | Unique identifier (ID or slug) of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization dashboard

**Slug:** `SENTRY_UPDATE_ORGANIZATION_DASHBOARD`

Updates an existing custom dashboard, allowing modifications to its title, widgets, and data filters; providing `widgets`, `projects`, `environment`, `period`, `start`, `end`, or `filters` will overwrite existing settings for those fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Unique identifier for the dashboard; should match existing ID if updating. |
| `end` | string | No | The absolute end time for the dashboard's time range, in ISO 8601 format (e.g., '2023-01-02T00:00:00Z'). If provided along with 'start', `period` is ignored. Replaces the existing end time. |
| `utc` | boolean | No | A boolean indicating whether the dashboard's time range should be displayed in UTC. `True` for UTC, `False` for the user's local time. |
| `start` | string | No | The absolute start time for the dashboard's time range, in ISO 8601 format (e.g., '2023-01-01T00:00:00Z'). If provided along with 'end', `period` is ignored. Replaces the existing start time. |
| `title` | string | No | The new title for the dashboard. |
| `period` | string | No | The relative time range period for the dashboard (e.g., '24h', '7d', '30d'). Replaces the existing period. If 'start' and 'end' are set, this is ignored. |
| `filters` | object | No | A dictionary of additional filters to apply to the dashboard data, replacing existing filters. Keys are filter names, values are filter values. |
| `widgets` | array | No | A list of widget configurations to be updated or set for this dashboard. This will replace all existing widgets. |
| `projects` | array | No | A list of project IDs to filter the dashboard data by. Replaces the existing project filter. |
| `environment` | array | No | A list of environment names to filter the dashboard data by. Replaces the existing environment filter. |
| `dashboard_id` | integer | Yes | The ID of the dashboard to be updated. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization the resource belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization member role

**Slug:** `SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE`

Updates a Sentry organization member's organization-level role (`orgRole`) and/or their team roles (`teamRoles`), ensuring the initiator has permissions equivalent to both the member's current and intended new `orgRole` if `orgRole` is being modified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `orgRole` | string ("billing" | "member" | "manager" | "owner" | "admin") | No | Sets the member's new organization-level role (e.g., 'billing' for payments, 'member' for event access, 'manager' for project/team admin, 'owner' for full control). The 'admin' role is not assignable on Business/Enterprise plans; use `teamRoles` for granular admin tasks. |
| `member_id` | string | Yes | The ID of the member whose roles are to be updated. |
| `teamRoles` | array | No | List of team role assignments (each object specifying `teamSlug` and `role`). This list completely replaces existing team roles. An empty list (default) removes the member from all teams. Team roles: `contributor` (views/acts on issues), `admin` (full team/project management). |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the member belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project details

**Slug:** `SENTRY_UPDATE_PROJECT_DETAILS`

Updates a Sentry project's settings (e.g., name, slug, platform, bookmark status); `isBookmarked` can be updated with `project:read` permission, other fields typically require `project:write` or `project:admin` permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the project. |
| `slug` | string | No | The new unique identifier (slug) for the project, used in URLs and the Sentry interface. |
| `platform` | string | No | The new platform for the project (e.g., `python`, `javascript`, `java`). This helps Sentry categorize and process errors. |
| `resolveAge` | integer | No | The duration in hours after which an issue is automatically resolved if it hasn't been seen. Set to `0` to disable auto-resolution.  |
| `isBookmarked` | boolean | No | Toggles whether the project is starred (bookmarked) in the Sentry UI. |
| `highlightTags` | array | No | A list of tag keys (e.g., 'release', 'environment') to highlight on this project's issues in Sentry's UI. For example: `["release", "environment", "server_name"]`. |
| `subjectPrefix` | string | No | Custom prefix for the subject line of notification emails sent from this project. |
| `subjectTemplate` | string | No | The template for the email subject (excluding the prefix) for individual issue alerts. Available variables: `$title`, `$shortID`, `$projectID`, `$orgID`, and `${tag:key}` (e.g., `${tag:environment}`, `${tag:release}`). |
| `highlightContext` | object | No | A JSON object mapping context types (e.g., 'user', 'device') to a list of their keys to be highlighted in Sentry's UI for issues within this project. For example: `{"user": ["id", "email"], "device": ["model"]}`. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project to be updated. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project issue status and details

**Slug:** `SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS`

Bulk update attributes of issues in a Sentry project, targeting issues by a list of IDs or by a query status (which implies updating all matching issues if IDs are omitted).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | Issue IDs to update. Accepts a list of integers for bulk updates. Optional; if omitted and the 'status' query parameter (filter) is used, updates all issues matching that status. |
| `merge` | boolean | No | Set to true to merge issues, false to unmerge. If merging, ensure the target issue ID is correctly specified. |
| `status` | string | No | The new status to apply to the selected issues (request body parameter). Valid values are `"resolved"`, `"resolvedInNextRelease"`, `"unresolved"`, and `"ignored"`. |
| `hasSeen` | boolean | No | If called with user context: true to mark issue as seen by the user, false as unseen. |
| `isPublic` | boolean | No | Set to true for public, false for private. |
| `assignedTo` | string | No | Actor ID (e.g., `user:123` or `team:456`) or username for assignment. Use an empty string or null to unassign. |
| `isBookmarked` | boolean | No | If called with user context: true to bookmark issue for the user, false to remove bookmark. |
| `ignoreDuration` | integer | No | Minutes to ignore this issue (alternative to `statusDetails.ignoreDuration`). |
| `project_id_or_slug` | string | Yes | ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | ID or slug of the Sentry organization. |
| `statusDetails__inCommit` | string | No | Commit ID in which the issue is resolved. |
| `statusDetails__inRelease` | string | No | Version/release in which the issue is resolved. |
| `statusDetails__ignoreCount` | integer | No | Number of times to ignore the issue before it resurfaces. |
| `statusDetails__ignoreWindow` | integer | No | Time window (in minutes) for `ignoreCount`. |
| `statusDetails__inNextRelease` | boolean | No | Indicates if the issue is resolved in the next release. |
| `statusDetails__ignoreDuration` | integer | No | Duration (in minutes) to ignore the issue. |
| `statusDetails__ignoreUserCount` | integer | No | Number of unique users affected before a previously ignored issue resurfaces. |
| `statusDetails__ignoreUserWindow` | integer | No | Time window (in minutes) for `ignoreUserCount`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project key configuration

**Slug:** `SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION`

Updates configuration settings (e.g., name, status, rate limits, SDK options) for an existing Sentry client key (DSN), identified by `key_id`, within a specified `project_id_or_slug` and `organization_id_or_slug`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New human-readable name for the client key. Name will not be changed if omitted. |
| `key_id` | string | Yes | The ID of the client key (DSN public key) to be updated. |
| `isActive` | boolean | No | Specifies if the client key should be active (`true` to activate, `false` to deactivate). Status remains unchanged if omitted. |
| `rateLimit__count` | integer | No | Maximum number of events the key can accept within `rateLimit_window`. Uses existing settings or project defaults if omitted. |
| `browserSdkVersion` | string ("latest" | "10.x" | "9.x" | "8.x" | "7.x") | No | Sentry JavaScript SDK version for the loader ('latest', '10.x', '9.x', '8.x', or '7.x'). Current setting remains unchanged if omitted. |
| `rateLimit__window` | integer | No | Time window in seconds for `rateLimit_count` (e.g., 3600 for 1 hour). Uses existing settings or project defaults if omitted. |
| `project_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry project whose key is being updated. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the Sentry organization to which the project belongs. |
| `dynamicSdkLoaderOptions__hasDebug` | boolean | No | Enable (`true`) or disable (`false`) Debugging features for the dynamic SDK loader. Current setting remains unchanged if omitted. |
| `dynamicSdkLoaderOptions__hasReplay` | boolean | No | Enable (`true`) or disable (`false`) Session Replay for the dynamic SDK loader. Current setting remains unchanged if omitted. |
| `dynamicSdkLoaderOptions__hasPerformance` | boolean | No | Enable (`true`) or disable (`false`) Performance Monitoring for the dynamic SDK loader. Current setting remains unchanged if omitted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project ownership settings

**Slug:** `SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS`

Updates the ownership configuration settings (raw rules, fallthrough, auto-assignment, CODEOWNERS sync) for a Sentry project; omitted attributes retain their current values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `raw` | string | No | Raw Sentry ownership rule string (e.g., 'path:src/components/* #frontend') defining issue assignment based on file paths or URLs. See Sentry's Ownership Rules documentation for syntax. |
| `fallthrough` | boolean | No | If `True`, assigns issues to all project members if no ownership rule matches; if `False`, no owners are set by default in such cases. |
| `autoAssignment` | string | No | Strategy for assigning new issues not covered by ownership rules. Options: 'Auto Assign to Issue Owner', 'Auto Assign to Suspect Commits', 'Turn off Auto-Assignment'. |
| `codeownersAutoSync` | boolean | No | If `True` (default), automatically synchronizes Sentry issue ownership with the repository's CODEOWNERS file during a release. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project release file details

**Slug:** `SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS`

Updates the name (path) or distribution identifier of a specific file within an existing project release in Sentry.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dist` | string | No | The new distribution identifier for the file. Used to distinguish different builds of the same release version (e.g., build numbers or commit SHAs). WARNING: The Sentry API may not reliably update this field via the PUT endpoint; the 'name' parameter updates successfully but 'dist' may remain unchanged. At least one of 'name' or 'dist' must be provided. |
| `name` | string | No | The new name or full path for the file. Use absolute paths (e.g., '~/dist/main.js') or URLs (e.g., 'https://example.com/app.js'). At least one of 'name' or 'dist' must be provided. |
| `file_id` | string | Yes | The unique identifier of the release file to be updated. |
| `version` | string | Yes | The version identifier of the release, e.g., '1.0.0' or 'my-app@2.3.1'. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project associated with the release file. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the project belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Rule By Id

**Slug:** `SENTRY_UPDATE_PROJECT_RULE_BY_ID`

Updates an existing Sentry project issue alert rule by `rule_id`, completely overwriting it; all rule fields must be provided in the request, as omitted fields may be cleared or reset to defaults.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the alert rule. |
| `owner` | string | No | The ID of the team or user that owns this rule. Format: `team:TEAM_ID` or `user:USER_ID` or the user's email, or a team name prefixed with '#'. For example, 'user@example.com' or '#platform-team'. |
| `actions` | array | Yes | Actions performed when rule conditions and filters are met. Structure varies by action type chosen; refer to Sentry's issue alert rule documentation. |
| `filters` | array | No | Optional filters refining when the rule fires after conditions are met. Structure varies by filter type chosen; refer to Sentry's issue alert rule documentation. |
| `rule_id` | integer | Yes | The numeric ID of the alert rule to be updated. |
| `frequency` | integer | Yes | The minimum interval, in minutes, between actions for the same issue. Valid range is `5` to `43200` (30 days). |
| `conditions` | array | Yes | Conditions that trigger the rule. Structure varies by condition type chosen; refer to Sentry's issue alert rule documentation. |
| `actionMatch` | string ("all" | "any") | Yes | Specifies how conditions must align for actions: 'all' (all true), 'any' (at least one true), or 'none' (all false). |
| `environment` | string | No | Specific environment for this rule (e.g., 'production'); applies to all environments if omitted. |
| `filterMatch` | string ("all" | "any" | "none") | No | Specifies how filters (if any) must align for actions: 'all' (all true), 'any' (at least one true), or 'none' (all false). |
| `project_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID) or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update release details for organization

**Slug:** `SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION`

Updates an existing Sentry release's details for an organization, including its reference, URL, release date, associated commits, or repository references.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | No | Commit reference (e.g., a branch name, tag, or commit SHA) to associate with this release; useful if a tagged version has been provided. |
| `url` | string | No | A URL that points to the release. For instance, this can be the path to an online interface to the source code, such as a GitHub URL, or a link to a release announcement. |
| `refs` | array | No | Indicates or updates the start and end commits for each repository in a release. Head commits require ``repository`` and ``commit`` (HEAD SHA), and can optionally include ``previousCommit`` (SHA of previous release's HEAD) for initial data sends or corrections. |
| `commits` | array | No | List of commit data to associate or update for this release; can add new commits or modify existing ones if Sentry's commit tracking needs adjustment. |
| `version` | string | Yes | The version identifier of the release to be updated (e.g., '1.0.0', 'my-project@2.3.12'). This identifier must be unique within the organization. |
| `dateReleased` | string | No | ISO 8601 timestamp indicating when the release went live (e.g., '2023-10-26T10:00:00Z'). If not provided, Sentry uses the current time, but an existing dateReleased will not be overwritten unless a new value is provided. |
| `organization_id_or_slug` | string | Yes | The unique ID or human-readable slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a saved query for an organization

**Slug:** `SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION`

Updates an existing Discover saved query for a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | The specific end date and time for the query's time range, in ISO 8601 format (e.g., '2023-01-31T23:59:59Z'); used if 'range' is not provided. |
| `name` | string | Yes | The new user-defined name for the saved query. |
| `query` | string | No | The Sentry search query string to filter results (e.g., 'error.type:ZeroDivisionError browser.name:Firefox'). Refer to Sentry's search syntax documentation for details. |
| `range` | string | No | The relative time range period for this saved query (e.g., '24h', '7d', '30d'); an alternative to specific 'start' and 'end' times. |
| `start` | string | No | The specific start date and time for the query's time range, in ISO 8601 format (e.g., '2023-01-01T00:00:00Z'); used if 'range' is not provided. |
| `yAxis` | array | No | A list of aggregate functions to be plotted on the Y-axis of the chart (e.g., 'count()', 'p95(transaction.duration)'). |
| `fields` | array | No | A list of fields, functions, or equations for the query, with a maximum of 20. Each item can be: 1. A built-in key field (e.g., 'transaction'; see Sentry's properties table for event properties). 2. A tag, formatted as 'tag[tagName]' (e.g., 'tag[isEnterprise]'). 3. A function, like 'function_name(parameters,...)' (e.g., 'count_if(transaction.duration,greater,300)'; Discover groups by tags/fields when functions are used; see Sentry's query builder documentation). 4. An equation, prefixed with 'equation&#124;' (e.g., 'equation&#124;count_if(transaction.duration,greater,300) / count() * 100'; see Sentry's documentation on query equations). |
| `display` | string | No | The visualization type for the saved query chart. Allowed values are: 'default', 'previous', 'top5', 'daily', 'dailytop5', 'bar'. |
| `orderby` | string | No | Field to sort the query results by. Must be one of the items in the 'fields' list (excluding equations). Prefix with a hyphen '-' for descending order (e.g., '-count()'). |
| `interval` | string | No | The resolution of the time series for the chart (e.g., '1h', '1d', '30m'). |
| `projects` | array | No | A list of project IDs to associate with this saved query. An empty list means the query applies to all projects selected in the Sentry UI unless overridden. |
| `query_id` | integer | Yes | The unique identifier of the Discover saved query to be updated. |
| `topEvents` | integer | No | The number of top events' timeseries to be visualized on the chart. |
| `environment` | array | No | A list of environment names to filter the query by. |
| `queryDataset` | string ("discover" | "error-events" | "transaction-like") | No | The dataset to query. Note: 'discover' is deprecated; use 'error-events' or 'transaction-like' instead. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization to which the saved query belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update team information by organization id

**Slug:** `SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID`

Updates the slug for an existing team within a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The new slug for the team. Must be unique within the organization and follow the pattern: starts with a lowercase letter, followed by lowercase letters, numbers, underscores, or hyphens. |
| `team_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the team whose slug is to be updated. |
| `organization_id_or_slug` | string | Yes | The unique identifier (ID or slug) of the organization to which the team belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update user email

**Slug:** `SENTRY_UPDATE_USER_EMAIL`

Updates the primary email address for a Sentry user. The new email must already be added as a secondary email and be verified. **AUTHENTICATION REQUIREMENTS:** - Requires `user:write` scope - Typically requires a PERSONAL auth token (created from User Settings > Personal Tokens) - Internal integration tokens (organization-scoped) may not have permission for user-level operations **PREREQUISITES:** - The new email must already be added to the user's account as a secondary email - The email must be verified before it can be set as primary **COMMON ERRORS:** - 403 Forbidden: Token lacks user:write scope or is not a personal auth token - 400 Bad Request: Email is not already added to the account or is not verified

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The new primary email address to set for the user. This email must already be added as a secondary email to the user's account and be verified before it can be set as primary. The email must be in valid format (e.g., user@example.com). |
| `user_id` | string | Yes | The unique identifier of the Sentry user whose primary email address is to be updated. Can be the numerical user ID or 'me' for the authenticated user. NOTE: This endpoint requires user:write scope and typically requires a personal auth token (from User Settings > Personal Tokens) rather than an integration token. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update webhook configuration

**Slug:** `SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP`

Updates an existing Sentry service hook's target URL and subscribed event types for a given project and organization. Service hooks (webhooks) are HTTP callbacks that notify external systems when specific events occur in Sentry. This action allows you to modify the webhook's URL and change which events trigger notifications. Valid event types are: - 'event.alert': Triggered when alerts fire - 'event.created': Triggered when new events are processed Requirements: - Authentication with 'project:write' scope - The 'servicehooks' feature must be enabled for your Sentry plan - The hook_id must be a valid GUID from an existing service hook Common use cases: - Updating webhook URL when your endpoint changes - Modifying event subscriptions to receive different notification types - Reconfiguring webhooks for testing or production environments

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to which Sentry will send webhook POST requests when subscribed events occur. |
| `events` | array | Yes | A list of Sentry event types to subscribe to. Valid event types are: 'event.alert' (triggered when alerts fire) and 'event.created' (triggered when new events are processed). |
| `hook_id` | string | Yes | The unique identifier (GUID) of the service hook to be updated. |
| `project_id_or_slug` | string | Yes | The ID or slug of the project to which the service hook belongs. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization to which the service hook belongs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload dsyms file to project

**Slug:** `SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT`

Uploads a dSYM (debug symbols) zip archive, containing an Apple .dSYM folder, to the specified Sentry project for symbolicating crash reports from Apple platforms.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | No | The dSYM file to upload, provided as a zip archive of an Apple .dSYM folder containing debug symbols. |
| `project_id_or_slug` | string | Yes | Unique ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | Unique ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload file to project release

**Slug:** `SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE`

Uploads a file to a Sentry project release, for an existing organization, project, and version; uses `multipart/form-data` and the region-specific Sentry domain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dist` | string | No | Optional: Distribution identifier to distinguish multiple files of the same name within a single release (e.g., for different build variants or AB tests). |
| `file` | object | No | The file to be uploaded. |
| `name` | string | No | Optional: Name for the file, ideally an absolute path or URI (e.g., for JavaScript source maps, the full web URI to the original '.js' file). |
| `header` | string | No | Optional: Header for the file, formatted as 'Header-Key: Header-Value' (e.g., 'X-SourceMap:/url/to/sourcemap.map' for SourceMap debug images). |
| `version` | string | Yes | The version identifier of the release to associate the file with. |
| `project_id_or_slug` | string | Yes | The ID or slug of the Sentry project. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the Sentry organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload release file to organization

**Slug:** `SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION`

Uploads a new file, such as a source map or debug information, to an existing release version in a Sentry organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dist` | string | No | An optional distribution identifier for the file. This helps differentiate between multiple files with the same name within a single release, often used for build numbers or variant identifiers (e.g., Android versionCode or Xcode build number). |
| `file` | object | No | The file to be uploaded for the release. |
| `name` | string | No | The optional name of the file, which should reflect the absolute path or URI where this file will be referenced. For example, for JavaScript source maps, this could be the full web URI. |
| `header` | string | No | An optional header string or list of strings to be associated with the artifact. This can be used to specify headers like 'Content-Type' or custom metadata. For example: 'Content-Type:application/json' or ['X-SourceMap: /url/to/source.map', 'Content-Type: application/json']. |
| `version` | string | Yes | The version identifier of the release. |
| `organization_id_or_slug` | string | Yes | The ID or slug of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate credential

**Slug:** `SENTRY_VALIDATE_CREDENTIAL`

Validates Sentry API credentials by retrieving the authenticated user's information. Use this action when you need to verify that API credentials are valid and have not expired. This action returns the current user's profile along with authentication token details including scopes and expiration.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View organization notification actions

**Slug:** `SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS`

Retrieves Spike Protection notification actions for a Sentry organization, filterable by project IDs or slugs (slugs take precedence); if `triggerType` is used, it must be 'spike-protection'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project` | array | No | List of project IDs to filter notification actions. Use `[-1]` for all projects. `project_id_or_slug` takes precedence if also provided. |
| `triggerType` | string | No | Filters actions by trigger type. Currently, only 'spike-protection' is supported. |
| `project_id_or_slug` | array | No | List of project slugs to filter notification actions. Use `["$all"]` for all projects. Takes precedence over `project` if also specified. |
| `organization_id_or_slug` | string | Yes | The unique ID or slug of the Sentry organization for which to view notification actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
