# Datadog

Datadog offers monitoring, observability, and security for cloud-scale applications, unifying metrics, logs, and traces to help teams detect issues and optimize performance

- **Category:** server monitoring
- **Auth:** OAUTH2, API_KEY, BEARER_TOKEN
- **Composio-managed OAuth available?** No
- **Tools:** 65
- **Triggers:** 0
- **Slug:** `DATADOG`
- **Version:** 20260826_00

## Tools

### Aggregate logs

**Slug:** `DATADOG_AGGREGATE_LOGS`

Aggregate Datadog logs without downloading raw events. Use for counts, unique values, percentiles, numeric statistics, grouped breakdowns, and values over time. Use DATADOG_SEARCH_LOGS only when individual log messages are required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | object | No | Continues an alphabetically sorted aggregate query. |
| `filter` | object | No | Log query, time range, indexes, and storage tier to analyze. |
| `compute` | array | No | Calculations to perform; defaults to total log count. |
| `group_by` | array | No | Facets used to divide results into buckets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Dashboard

**Slug:** `DATADOG_CREATE_DASHBOARD`

Create a dashboard in Datadog. Dashboards provide customizable visualizations for monitoring your infrastructure, applications, and business metrics in a unified view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Tags to associate with the dashboard |
| `title` | string | Yes | Dashboard title |
| `widgets` | array | Yes | List of widgets to include in the dashboard |
| `description` | string | No | Dashboard description |
| `layout_type` | string ("ordered" | "free") | No | Dashboard layout type. |
| `notify_list` | array | No | List of users to notify of dashboard changes |
| `template_variables` | array | No | Template variables for dynamic dashboards |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create downtime

**Slug:** `DATADOG_CREATE_DOWNTIME`

Creates a new downtime in Datadog to suppress alerts during maintenance windows or planned outages. Useful for preventing false alarms during deployments or maintenance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | No | UNIX timestamp when downtime should end |
| `scope` | array | Yes | Scope to apply downtime to (host, service, or monitor tags) |
| `start` | integer | No | UNIX timestamp when downtime should start. If not provided, starts immediately |
| `message` | string | No | Message to include with the downtime |
| `timezone` | string | No | Timezone for the downtime (e.g., 'UTC', 'America/New_York') |
| `monitor_id` | integer | No | Monitor ID to schedule downtime for (optional, can use scope instead) |
| `recurrence` | object | No | Downtime recurrence configuration. |
| `monitor_tags` | array | No | Monitor tags to match for downtime |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On-Call escalation policy

**Slug:** `DATADOG_CREATE_ESCALATION_POLICY`

Creates a Datadog On-Call escalation policy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The Datadog On-Call escalation policy to create (JSON:API `data` object). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create event

**Slug:** `DATADOG_CREATE_EVENT`

Creates a new event in Datadog. Events are useful for tracking deployments, outages, configuration changes, and other important occurrences.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `host` | string | No | Host name associated with the event |
| `tags` | array | No | List of tags to associate with the event |
| `text` | string | Yes | Event text/description (supports Markdown) |
| `title` | string | Yes | Event title (limited to 100 characters) |
| `priority` | string ("normal" | "low") | No | Event priority. |
| `alert_type` | string ("error" | "warning" | "info" | "success") | No | Alert type. |
| `device_name` | string | No | Device name associated with the event |
| `date_happened` | integer | No | UNIX timestamp when the event occurred. If not provided, current time is used |
| `aggregation_key` | string | No | Key for aggregating events together |
| `source_type_name` | string | No | Source type name (e.g., 'jenkins', 'docker', 'ansible') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create monitor

**Slug:** `DATADOG_CREATE_MONITOR`

Creates a new Datadog monitor to track metrics, logs, or other data sources with configurable alerting thresholds and notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the monitor |
| `tags` | array | No | List of tags to assign to the monitor |
| `type` | string ("metric alert" | "service check" | "event alert" | "query alert" | "composite" | "log alert") | Yes | Type of monitor. |
| `query` | string | Yes | Query that defines what the monitor tracks Query syntax must match the monitor `type` exactly — a mismatch will cause creation to fail. |
| `message` | string | No | Message to include in notifications (supports @mentions and markdown) |
| `options` | object | No | Monitor configuration options. |
| `priority` | integer | No | Priority level (1-5, where 1 is highest) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On-Call notification channel

**Slug:** `DATADOG_CREATE_NOTIFICATION_CHANNEL`

Creates an On-Call notification channel for a Datadog user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The On-Call notification channel to create (JSON:API `data` object). |
| `user_id` | string | Yes | Unique identifier of the Datadog user who will own the On-Call notification channel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On-Call notification rule

**Slug:** `DATADOG_CREATE_NOTIFICATION_RULE`

Creates an On-Call notification rule for a Datadog user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The On-Call notification rule to create (JSON:API `data` object). |
| `user_id` | string | Yes | Unique identifier of the Datadog user whose On-Call notification rule will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On-Call schedule

**Slug:** `DATADOG_CREATE_SCHEDULE`

Creates a Datadog On-Call schedule.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The Datadog On-Call schedule to create (JSON:API `data` object). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SLO

**Slug:** `DATADOG_CREATE_SLO`

Create a Service Level Objective (SLO) in Datadog. SLOs help you define and track reliability targets for your services, enabling data-driven decisions about service quality and reliability investments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | SLO display name |
| `tags` | array | No | Tags to associate with the SLO (format: 'key:value') |
| `type` | string ("metric" | "monitor") | Yes | SLO type. |
| `query` | object | No | Query specification for metric-based SLOs. |
| `groups` | array | No | List of groups for the SLO scope |
| `thresholds` | array | Yes | List of SLO target thresholds |
| `description` | string | No | Optional description of the SLO |
| `monitor_ids` | array | No | Monitor IDs for monitor-based SLOs |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Synthetic API Test

**Slug:** `DATADOG_CREATE_SYNTHETIC_API_TEST`

Create a synthetic API test in Datadog. Creates a new synthetic API test that continuously monitors API endpoints from multiple locations worldwide. Useful for proactive monitoring of API uptime, performance, and functionality.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the synthetic test |
| `tags` | array | No | Tags to associate with the test |
| `type` | string | No | Type of synthetic test (always 'api' for API tests) |
| `config` | object | Yes | Test configuration including request and assertions |
| `status` | string ("live" | "paused") | No | Test status. |
| `message` | string | No | Message to include in notifications |
| `options` | object | Yes | Test execution options |
| `subtype` | string ("http" | "ssl" | "tcp" | "dns" | "icmp") | No | Subtype of test. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook

**Slug:** `DATADOG_CREATE_WEBHOOK`

Create a webhook in Datadog. Registers a named destination endpoint; each monitor must explicitly reference the webhook by name in its message or notification settings for alerts to be delivered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | URL endpoint for the webhook Must be a reachable HTTPS endpoint. |
| `name` | string | Yes | Name of the webhook |
| `payload` | string | No | Custom payload template (optional) |
| `encode_as` | string | No | Encoding type: 'json' or 'form' |
| `custom_headers` | string | No | Custom headers in JSON format (optional) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Dashboard

**Slug:** `DATADOG_DELETE_DASHBOARD`

Delete a dashboard in Datadog. Permanently removes a dashboard from your organization. This action cannot be undone. Use with caution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dashboard_id` | string | Yes | Dashboard ID to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete On-Call escalation policy

**Slug:** `DATADOG_DELETE_ESCALATION_POLICY`

Deletes a Datadog On-Call escalation policy by ID. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `policy_id` | string | Yes | Unique identifier of the Datadog On-Call escalation policy to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete monitor

**Slug:** `DATADOG_DELETE_MONITOR`

Deletes a Datadog monitor permanently. Use with caution as this action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `force` | boolean | No | Force delete the monitor (skip confirmation) |
| `monitor_id` | integer | Yes | The ID of the monitor to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete On-Call notification channel

**Slug:** `DATADOG_DELETE_NOTIFICATION_CHANNEL`

Deletes an On-Call notification channel for a Datadog user. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the user who owns the On-Call notification channel to delete. |
| `channel_id` | string | Yes | Unique identifier of the On-Call notification channel to delete for the user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete On-Call notification rule

**Slug:** `DATADOG_DELETE_NOTIFICATION_RULE`

Deletes an On-Call notification rule for a Datadog user. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule_id` | string | Yes | Unique identifier of the On-Call notification rule to permanently delete. |
| `user_id` | string | Yes | Unique identifier of the user who owns the On-Call notification rule to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete On-Call schedule

**Slug:** `DATADOG_DELETE_SCHEDULE`

Deletes a Datadog On-Call schedule by ID. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schedule_id` | string | Yes | Unique identifier of the Datadog On-Call schedule to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Dashboard

**Slug:** `DATADOG_GET_DASHBOARD`

Get a specific dashboard from Datadog. Retrieves detailed information about a dashboard including its widgets, layout, template variables, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dashboard_id` | string | Yes | Dashboard ID to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On-Call escalation policy

**Slug:** `DATADOG_GET_ESCALATION_POLICY`

Retrieves a Datadog On-Call escalation policy by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `policy_id` | string | Yes | Unique identifier of the On-Call escalation policy to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get monitor

**Slug:** `DATADOG_GET_MONITOR`

Retrieves detailed information about a specific Datadog monitor, including its current state, configuration, and any active downtimes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `monitor_id` | integer | Yes | The ID of the monitor to retrieve Use DATADOG_LIST_MONITORS to discover valid integer IDs if unknown. |
| `group_states` | array | No | Filter by group states when retrieving monitor details. Valid values: 'all', 'alert', 'warn', 'no data' |
| `with_downtimes` | boolean | No | Include downtime information in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On-Call notification channel

**Slug:** `DATADOG_GET_NOTIFICATION_CHANNEL`

Retrieves an On-Call notification channel for a user by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the user whose On-Call notification channel you want to retrieve. |
| `channel_id` | string | Yes | Unique identifier of the On-Call notification channel to retrieve for the user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On-Call notification rule

**Slug:** `DATADOG_GET_NOTIFICATION_RULE`

Retrieves an On-Call notification rule for a user by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule_id` | string | Yes | Unique identifier of the On-Call notification rule to retrieve for the user. |
| `user_id` | string | Yes | Unique identifier of the user whose On-Call notification rule should be fetched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On-Call schedule

**Slug:** `DATADOG_GET_SCHEDULE`

Retrieves a Datadog On-Call schedule by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schedule_id` | string | Yes | Unique identifier of the On-Call schedule to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get scheduled on-call user

**Slug:** `DATADOG_GET_SCHEDULED_ON_CALL_USER`

Gets the currently scheduled on-call user for a Datadog On-Call schedule.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schedule_id` | string | Yes | Unique identifier of the On-Call schedule whose currently scheduled on-call user you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Service Dependencies

**Slug:** `DATADOG_GET_SERVICE_DEPENDENCIES`

Get service dependency mapping from Datadog APM. This action retrieves the dependency graph for a specific service, showing both upstream services (that call this service) and downstream services (that this service calls). It's essential for: - Understanding the blast radius of service failures - Identifying critical dependencies during incidents - Analyzing service communication patterns - Planning architectural changes - Monitoring service health in context The dependency information includes call rates, error rates, and latency metrics to help assess the health of service relationships. Requires APM instrumentation on the target service; uninstrumented services return empty or incomplete dependency data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `env` | string | No | Environment to filter by Strongly recommended: omitting this aggregates data across all environments, producing noisy results that obscure meaningful dependency relationships. |
| `service` | string | Yes | The service name to get dependencies for |
| `end_time` | integer | No | End time as UNIX timestamp (seconds) |
| `start_time` | integer | No | Start time as UNIX timestamp (seconds) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Synthetics Locations

**Slug:** `DATADOG_GET_SYNTHETICS_LOCATIONS`

Tool to retrieve all available public and private locations for Synthetic tests in Datadog. Use when you need a list of location identifiers for creating or managing synthetic tests.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get host tags

**Slug:** `DATADOG_GET_TAGS`

Retrieves all tags associated with a specific host in Datadog. Useful for understanding host metadata and organizing infrastructure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | No | Source of tags to retrieve (e.g., 'users', 'chef', 'puppet') |
| `host_name` | string | Yes | Name of the host to get tags from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team on-call users

**Slug:** `DATADOG_GET_TEAM_ON_CALL_USERS`

Gets the current on-call users for a Datadog On-Call team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique identifier of the team whose current on-call users you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On-Call team routing rules

**Slug:** `DATADOG_GET_TEAM_ROUTING_RULES`

Gets the Datadog On-Call routing rules configured for a team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | Unique identifier of the On-Call team whose routing rules you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Trace by ID

**Slug:** `DATADOG_GET_TRACE_BY_ID`

DEPRECATED: Use DATADOG_SEARCH_TRACES instead. Get detailed information about a specific trace by its ID. This action retrieves comprehensive details about a distributed trace, including all spans, timing information, errors, and metadata. It's essential for: - Deep diving into specific request flows during incidents - Understanding the complete journey of a problematic request - Analyzing performance bottlenecks in detail - Correlating errors across services - Debugging complex distributed system issues The trace ID is typically obtained from logs, error reports, or trace search results. Use targeted time windows to avoid rate limiting; prefer narrow ranges over full 15-day spans when the approximate trace time is known.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to_time` | string | No | End time for the search window. Supports ISO8601, date math (e.g., 'now'), or timestamps in milliseconds. Defaults to current time. |
| `trace_id` | string | Yes | The unique trace ID to retrieve |
| `from_time` | string | No | Start time for the search window. Supports ISO8601, date math (e.g., 'now-1h', 'now-15d'), or timestamps in milliseconds. Defaults to 15 days ago. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get usage summary

**Slug:** `DATADOG_GET_USAGE_SUMMARY`

Retrieves usage summary information from Datadog including API calls, hosts, containers, and other billable usage metrics. Useful for cost monitoring and usage analysis. Months with no activity return empty payloads on success; absent data is expected, not an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_month` | string | No | End month in YYYY-MM format. If not provided, uses start_month |
| `start_month` | string | Yes | Start month in YYYY-MM format |
| `include_org_details` | boolean | No | Include organization details in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Tags

**Slug:** `DATADOG_LIST_ALL_TAGS`

List all tags from Datadog. Tags help organize and filter your infrastructure and applications. This action shows all tags in use across your organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | No | Filter tags by source (e.g., 'chef', 'puppet', 'users', 'datadog') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List API Keys

**Slug:** `DATADOG_LIST_API_KEYS`

List API keys in Datadog. Retrieves all API keys in the organization for security auditing, access management, and key rotation planning. Helps maintain security posture by tracking key usage and ownership. Response contains sensitive key metadata (names, owners, last-used timestamps); restrict tool access to authorized personnel and handle output securely.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("created_at" | "last4" | "modified_at" | "name") | No | Sort field. |
| `page_size` | integer | No | Number of API keys to return per page (default 20, max 1000) |
| `page_number` | integer | No | Page number to retrieve (0-indexed) |
| `filter_created_at_end` | string | No | ISO timestamp to filter keys created before this time |
| `filter_modified_at_end` | string | No | ISO timestamp to filter keys modified before this time |
| `filter_created_at_start` | string | No | ISO timestamp to filter keys created after this time |
| `filter_modified_at_start` | string | No | ISO timestamp to filter keys modified after this time |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List APM Services

**Slug:** `DATADOG_LIST_APM_SERVICES`

List APM services from Datadog. Application Performance Monitoring (APM) provides deep visibility into your applications, helping you track performance, errors, and dependencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `env` | string | No | Environment filter (e.g., 'production', 'staging'). Use '*' to return services across all environments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AWS Integration

**Slug:** `DATADOG_LIST_AWS_INTEGRATION`

List AWS integrations in Datadog. Retrieves all configured AWS account integrations, showing which AWS accounts are monitored by Datadog and their configuration settings. Useful for cloud infrastructure management and ensuring comprehensive monitoring coverage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role_name` | string | No | Filter by specific AWS IAM role name |
| `account_id` | string | No | Filter by specific AWS account ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List dashboards

**Slug:** `DATADOG_LIST_DASHBOARDS`

Lists all Datadog dashboards with basic information. Useful for dashboard management and getting an overview of available dashboards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | Maximum number of dashboards to return (for pagination) |
| `start` | integer | No | Offset for pagination; skip this many dashboards before returning results |
| `filter_shared` | boolean | No | Filter dashboards by shared status |
| `filter_deleted` | boolean | No | Include deleted dashboards in the results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List events

**Slug:** `DATADOG_LIST_EVENTS`

Lists events from Datadog within a specified time range. Events track important occurrences like deployments, outages, and configuration changes. Combining multiple filters (tags, sources, priority) with narrow time ranges may return empty results even when events exist — start with broad filters and narrow incrementally. Large time ranges with minimal filtering can return very high event volumes; tune tags, sources, and start/end before processing results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | Yes | End time as UNIX timestamp |
| `page` | integer | No | Page number for pagination |
| `tags` | array | No | Filter by tags |
| `start` | integer | Yes | Start time as UNIX timestamp |
| `sources` | string | No | Filter by event sources (comma-separated) |
| `priority` | string ("normal" | "low") | No | Filter by event priority. |
| `unaggregated` | boolean | No | Get unaggregated events (default: false) |
| `exclude_aggregate` | boolean | No | Exclude aggregated events |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List hosts

**Slug:** `DATADOG_LIST_HOSTS`

Lists all hosts in your Datadog infrastructure with detailed information including metrics, tags, and status. Useful for infrastructure monitoring and management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | Number of hosts to return (max 1000) |
| `start` | integer | No | Starting position for pagination |
| `filter` | string | No | Filter hosts by tags or attributes |
| `sort_dir` | string ("asc" | "desc") | No | Sort direction. |
| `sort_field` | string ("status" | "name" | "cpu" | "iowait" | "load") | No | Field to sort by. |
| `from_timestamp` | integer | No | Start time as UNIX timestamp for host activity |
| `include_hosts_metadata` | boolean | No | Include hosts metadata in response |
| `include_muted_hosts_data` | boolean | No | Include data for muted hosts |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Incidents

**Slug:** `DATADOG_LIST_INCIDENTS`

List incidents from Datadog. Incident Management helps you track, manage, and resolve incidents efficiently with comprehensive timeline and impact tracking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("public_id" | "-public_id") | No | Sort order for incidents by public ID. |
| `include` | string | No | Related resources to include (e.g., 'users,attachments') |
| `page_size` | integer | No | Number of incidents per page (1-100, default: 25) |
| `page_offset` | integer | No | Page offset for pagination (default: 0) |
| `filter_query` | string | No | Filter query for incidents (e.g., 'state:active') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Log Indexes

**Slug:** `DATADOG_LIST_LOG_INDEXES`

Tool to retrieve a list of all log indexes configured in Datadog, including their names and configurations. Use before DATADOG_SEARCH_LOGS to identify the correct index name; searching without specifying the right index can hide valid logs and increase usage costs across high-volume indexes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List active metrics

**Slug:** `DATADOG_LIST_METRICS`

Discover metric names by listing actively reporting metrics since a given timestamp. Use when you need to find what metrics exist before querying timeseries data with DATADOG_QUERY_METRICS.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `host` | string | No | Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag. |
| `tag_filter` | string | No | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions (e.g., 'env:prod AND service:api'). Cannot be combined with other filters. |
| `from_timestamp` | integer | Yes | Seconds since Unix epoch. Specifies the starting point for listing actively reporting metrics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List monitors

**Slug:** `DATADOG_LIST_MONITORS`

Get all monitor details. This endpoint allows you to retrieve information about all monitors configured in your organization. You can filter by group states, name, tags, and use pagination to manage large result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter monitors by name (substring match) |
| `page` | integer | No | The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination. Both `page` and `page_size` must be set together to enable pagination; omitting either returns all monitors unpaginated. Iterate through pages (starting at 0) until a page returns fewer than `page_size` results to ensure all monitors are retrieved. |
| `tags` | array | No | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example host:host0. |
| `id_offset` | integer | No | Monitor ID offset for pagination |
| `page_size` | integer | No | The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without pagination. Page size is capped at 100. |
| `group_states` | array | No | When specified, shows additional information about the group states. Choose one or more from Alert, Warn, or No Data. |
| `monitor_tags` | array | No | A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example service:my-app. |
| `with_downtimes` | boolean | No | If this argument is set to true, then the returned data includes all current downtimes for the monitor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On-Call notification channels

**Slug:** `DATADOG_LIST_NOTIFICATION_CHANNELS`

Lists the On-Call notification channels configured for a Datadog user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the Datadog user whose On-Call notification channels to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On-Call notification rules

**Slug:** `DATADOG_LIST_NOTIFICATION_RULES`

Lists the On-Call notification rules configured for a Datadog user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the Datadog user whose On-Call notification rules to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Roles

**Slug:** `DATADOG_LIST_ROLES`

List roles from Datadog organization. Roles define sets of permissions that control what users can do within your Datadog organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Sort field (name, created_at, user_count) |
| `page_size` | integer | No | Number of roles per page (1-100, default: 10) |
| `filter_name` | string | No | Filter roles by name (partial match) |
| `page_number` | integer | No | Page number for pagination (default: 0) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List service checks

**Slug:** `DATADOG_LIST_SERVICE_CHECKS`

Lists service checks from Datadog. Service checks are status checks that track the health of your services and infrastructure components.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | No | End time as UNIX timestamp |
| `tags` | array | No | Filter by tags |
| `check` | string | No | Filter by service check name |
| `start` | integer | No | Start time as UNIX timestamp |
| `status` | string ("ok" | "warning" | "critical" | "unknown") | No | Filter by service check status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SLOs

**Slug:** `DATADOG_LIST_SL_OS`

List Service Level Objectives (SLOs) from Datadog. Service Level Objectives help you track the reliability and performance of your services by setting measurable targets for key metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Filter SLOs by tags using a comma-separated list (e.g., 'env:prod,team:backend') |
| `limit` | integer | No | Maximum number of SLOs to return (1-1000, default: 25) |
| `query` | string | No | Search query to filter SLOs by name or description |
| `offset` | integer | No | Number of SLOs to skip for pagination (default: 0) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Synthetics Tests

**Slug:** `DATADOG_LIST_SYNTHETICS`

List Synthetics tests from Datadog. Synthetics monitoring allows you to proactively monitor your applications and APIs by simulating user interactions and API calls from various locations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Filter tests by tags using a comma-separated list (e.g., 'env:prod,team:frontend') |
| `limit` | integer | No | Maximum number of tests to return (1-200, default: 50) |
| `offset` | integer | No | Zero-based page number for pagination (default: 0). Page 0 returns first page, page 1 returns second page, etc. |
| `locations` | string | No | Filter tests by locations using a comma-separated list |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `DATADOG_LIST_USERS`

List users from Datadog organization. User management allows you to see team members, their roles, and access levels within your Datadog organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Sort field (name, email, status, created_at) |
| `sort_dir` | string | No | Sort direction (asc or desc) |
| `page_size` | integer | No | Number of users per page (1-1000, default: 50) |
| `page_number` | integer | No | Page number for pagination (default: 0) |
| `filter_status` | string | No | Filter by user status (Active, Pending, Disabled) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhooks

**Slug:** `DATADOG_LIST_WEBHOOKS`

List webhooks from Datadog. Webhooks allow you to send notifications to external services when monitors trigger, enabling integration with your workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of webhooks to return (1-100, default: 50) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mute Monitor

**Slug:** `DATADOG_MUTE_MONITOR`

Mute a monitor in Datadog. Temporarily silences alerts from a monitor, which is useful during maintenance windows, deployments, or when investigating known issues to prevent alert fatigue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | integer | No | POSIX timestamp for when the mute should expire (optional, if not specified the monitor remains muted until manually unmuted) |
| `override` | boolean | No | Whether to override existing mute settings |
| `monitor_id` | integer | Yes | The ID of the monitor to mute |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query metrics

**Slug:** `DATADOG_QUERY_METRICS`

Queries Datadog metrics and returns time series data. Useful for retrieving historical metric data, creating custom dashboards, or building reports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Datadog metrics query string Broad tag filters (e.g., {*}) can return high-cardinality payloads; overly restrictive tag combinations can silently return empty series even when data exists. |
| `to_timestamp` | integer | Yes | End time as UNIX timestamp. Note: Time range cannot exceed 1 year. Must be UTC-based seconds (not milliseconds); non-UTC or millisecond values silently return empty series. |
| `from_timestamp` | integer | Yes | Start time as UNIX timestamp. Note: Time range cannot exceed 1 year. Must be UTC-based seconds (not milliseconds); non-UTC or millisecond values silently return empty series. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search logs

**Slug:** `DATADOG_SEARCH_LOGS`

Searches Datadog logs with advanced filtering capabilities. IMPORTANT NOTES: - Sort parameter is NOT supported by the Datadog Logs API and will cause errors - Time parameters must be in milliseconds (13-digit UNIX timestamps) - Limit parameter is passed as string to the API - Log content is nested under 'content' field in API response Useful for troubleshooting, monitoring application behavior, and analyzing log patterns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `index` | string | No | Index name to search in Use DATADOG_LIST_LOG_INDEXES to discover available indexes; an incorrect or omitted index can silently exclude valid logs. |
| `limit` | integer | No | Maximum number of logs to return (max 1000, default 50) |
| `query` | string | Yes | Log search query string |
| `time_to` | integer | Yes | End time as UNIX timestamp (in milliseconds). Note: Time range cannot exceed 15 days. |
| `start_at` | string | No | Pagination cursor for next page (use 'nextLogId' from previous response). IMPORTANT: Cursors expire quickly and can only be used with the exact same query and time parameters they were generated from. If you receive an 'Invalid startAt' error, omit this parameter and start a fresh search. More results are available when nextLogId is present in the response; omitting pagination silently drops those results. |
| `time_from` | integer | Yes | Start time as UNIX timestamp (in milliseconds). Note: Time range cannot exceed 15 days. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Spans Analytics

**Slug:** `DATADOG_SEARCH_SPANS_ANALYTICS`

Search and analyze span data with aggregations in Datadog. This action uses the Datadog Spans Analytics API to perform advanced queries and aggregations on trace span data. It's essential for: - Analyzing error rates and latency patterns - Understanding service dependencies and bottlenecks - Root cause analysis during incidents - Performance monitoring and optimization The API supports complex queries with grouping, filtering, and various aggregation functions similar to log analytics. The request body must conform to the `aggregate_request` schema; schema violations return "Invalid type. Expected 'aggregate_request'". If `filter` or `compute` cannot satisfy this schema, use basic trace search instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | object | Yes | Filter criteria for span search |
| `compute` | array | No | Aggregations to compute |
| `options` | object | No | Additional search options |
| `group_by` | array | No | Group by configuration for aggregations |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Traces

**Slug:** `DATADOG_SEARCH_TRACES`

Search for traces in Datadog APM. This action allows you to search for distributed traces across your services. It's essential for: - Finding specific request flows during incident investigation - Analyzing performance bottlenecks across services - Understanding error propagation through your system - Correlating user requests with backend operations Traces provide the complete picture of a request as it travels through your distributed system, making them crucial for root cause analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | object | No | Pagination options Check 'meta.page.after' or 'links.next' in the response to detect additional pages; pass the cursor value into 'page.cursor' to retrieve subsequent pages. |
| `sort` | object | No | Sort configuration for trace search. |
| `filter` | object | Yes | Filter criteria for trace search Custom span attributes must be prefixed with '@' (e.g., '@workflow_id'); omitting the prefix silently returns zero results. Use bounded UTC timestamp ranges — wide windows (e.g., 30 days) slow queries and may trigger rate-limit errors. Include 'env' and 'service' fields to avoid broad, noisy result sets. |
| `options` | object | No | Additional search options |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set On-Call team routing rules

**Slug:** `DATADOG_SET_TEAM_ROUTING_RULES`

Replaces (sets) the On-Call routing rules for a Datadog team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The team routing rules to set (JSON:API `data` object). |
| `team_id` | string | Yes | Unique identifier of the Datadog On-Call team whose routing rules should be replaced. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit metrics

**Slug:** `DATADOG_SUBMIT_METRICS`

Submits custom metrics to Datadog. Useful for sending application-specific metrics, business KPIs, or custom performance indicators.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `series` | array | Yes | List of metric series to submit |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unmute Monitor

**Slug:** `DATADOG_UNMUTE_MONITOR`

Unmute a monitor in Datadog. Re-enables alerts from a previously muted monitor, returning it to normal monitoring and alerting behavior. Alerting resumes immediately upon call, so ensure maintenance or issue resolution is fully complete before unmuting to avoid alert storms. Use this after maintenance windows or issue resolution to resume monitoring.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `all_scopes` | boolean | No | Whether to unmute the monitor for all scopes (default: false) |
| `monitor_id` | integer | Yes | The ID of the monitor to unmute |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Dashboard

**Slug:** `DATADOG_UPDATE_DASHBOARD`

Update a dashboard in Datadog. Updates an existing dashboard with new configuration, widgets, or layout while preserving its identity and creation metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Tags to associate with the dashboard |
| `title` | string | No | Dashboard title |
| `widgets` | array | No | List of widgets to include in the dashboard |
| `description` | string | No | Dashboard description |
| `layout_type` | string | No | Dashboard layout type ('ordered' or 'free') |
| `notify_list` | array | No | List of users to notify of dashboard changes |
| `reflow_type` | string | No | Reflow type for ordered layout dashboards ('auto' or 'fixed'). Forwarded to Datadog only when set so existing values aren't clobbered. |
| `dashboard_id` | string | Yes | Dashboard ID to update |
| `is_read_only` | boolean | No | Whether the dashboard is read-only |
| `pause_auto_refresh` | boolean | No | Whether automatic refresh is paused for this dashboard. Forwarded to Datadog only when set so existing values aren't clobbered. |
| `template_variables` | array | No | Template variables for dynamic dashboards |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update On-Call escalation policy

**Slug:** `DATADOG_UPDATE_ESCALATION_POLICY`

Updates a Datadog On-Call escalation policy by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The Datadog On-Call escalation policy update (JSON:API `data` object). |
| `policy_id` | string | Yes | Unique identifier of the On-Call escalation policy to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update host tags

**Slug:** `DATADOG_UPDATE_HOST_TAGS`

Updates tags for a specific host in Datadog. This replaces all existing tags from the specified source with the new tags provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | List of tags to assign to the host (replaces existing tags) |
| `source` | string | No | Source of the tags (e.g., 'users', 'chef', 'puppet'). Defaults to 'users' |
| `host_name` | string | Yes | Name of the host to update tags for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update monitor

**Slug:** `DATADOG_UPDATE_MONITOR`

Updates an existing Datadog monitor with new configuration, thresholds, or notification settings. Only specified fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the monitor |
| `tags` | array | No | List of tags to assign to the monitor |
| `type` | string ("metric alert" | "service check" | "event alert" | "query alert" | "composite" | "log alert") | No | Type of monitor. |
| `query` | string | No | Query that defines what the monitor tracks |
| `message` | string | No | Message to include in notifications (supports @mentions and markdown) |
| `options` | object | No | Monitor update configuration options. |
| `priority` | integer | No | Priority level (1-5, where 1 is highest) |
| `monitor_id` | integer | Yes | The ID of the monitor to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update On-Call notification rule

**Slug:** `DATADOG_UPDATE_NOTIFICATION_RULE`

Updates an On-Call notification rule for a user by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The On-Call notification rule update (JSON:API `data` object). |
| `rule_id` | string | Yes | Unique identifier of the On-Call notification rule to update. |
| `user_id` | string | Yes | Unique identifier of the user whose On-Call notification rule you want to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update On-Call schedule

**Slug:** `DATADOG_UPDATE_SCHEDULE`

Updates a Datadog On-Call schedule by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The Datadog On-Call schedule update (JSON:API `data` object). |
| `schedule_id` | string | Yes | Unique identifier of the Datadog On-Call schedule to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
