# Zendesk

Zendesk provides customer support software with ticketing, live chat, and knowledge base features, enabling efficient helpdesk operations and customer engagement

- **Category:** crm
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 457
- **Triggers:** 2
- **Slug:** `ZENDESK`
- **Version:** 20260916_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Zendesk?

For a step-by-step guide on creating and configuring your own Zendesk OAuth credentials with Composio, see [How to create OAuth credentials for Zendesk](https://composio.dev/auth/zendesk).

## Tools

### Apply Zendesk Macro Preview

**Slug:** `ZENDESK_APPLY_ZENDESK_MACRO`

Preview how a Zendesk macro would affect a ticket without actually applying it. Returns the ticket object as it would appear after the macro is applied, showing any changes to fields, comments, status, or other properties. Use this action to review macro changes before applying them to ensure the outcome is as expected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macro_id` | integer | Yes | The ID of the macro to apply. |
| `ticket_id` | integer | Yes | The ID of the ticket to preview the macro on. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Autocomplete Problems

**Slug:** `ZENDESK_AUTOCOMPLETE_PROBLEMS`

Autocomplete problems in Zendesk. Use when you need to find problem suggestions based on a partial search text for ticket categorization or troubleshooting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The text to search for in problems. Used to find matching problem suggestions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Autocomplete Users

**Slug:** `ZENDESK_AUTOCOMPLETE_USERS`

Search for Zendesk users by name prefix using the POST /api/v2/users/autocomplete endpoint. Returns an array of users whose name starts with the provided query. Use when you need to find users by name prefix for quick user lookup and autocomplete functionality.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name to search for matching users. Returns users whose name starts with the provided value. Cannot be combined with field_id/source. |
| `phone` | string | No | The phone number to search for matching users. Cannot be combined with field_id/source. |
| `filter` | string | No | Filter to apply to autocomplete results. Common values: 'assignable', 'requester', or 'dynamic_values' object. |
| `source` | string | No | The type of the object referenced by field_id. When provided, must be one of the recognized values: 'zen:user', 'zen:organization', 'zen:ticket', or 'zen:custom_object:CUSTOM_OBJECT_KEY' (also 'zen:article'/'zen:brand' for lookup fields defined on a custom object) — any other value 400s with "Parameter source must be a valid type is required". |
| `field_id` | integer | No | Field ID for lookup relationship autocomplete. If source is also provided, it must be a recognized type string — an unrecognized value 400s with "Parameter source must be a valid type is required". field_id alone (with no source) is accepted and simply returns no matches. Cannot be combined with name/phone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Host Mapping Validity for Existing Brand

**Slug:** `ZENDESK_CHECK_HOST_MAPPING_VALIDITY_FOR_EXISTING_BRAND`

Check the host mapping validity for an existing brand in Zendesk. Returns the current CNAME record, expected CNAME values, validity status, and the reason for validity or invalidity. Use this action when you need to verify that DNS records are correctly configured for an existing brand that has already been created in Zendesk. This action requires a brand ID rather than subdomain/host_mapping parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `brand_id` | integer | Yes | The ID of the brand to check host mapping validity for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Deleted Users

**Slug:** `ZENDESK_COUNT_DELETED_USERS`

Count deleted users in Zendesk. Returns the total number of deleted users. Use when you need to know how many users have been deleted for reporting, cleanup, or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count User CCD Tickets

**Slug:** `ZENDESK_COUNT_USER_CCD_TICKETS`

Count tickets where the specified user is CCD (carbon copy distribution). Returns an approximate count of tickets where the user appears in the CCD field. Use when you need to know how many tickets a user is copied on for reporting or operational purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose CCD tickets to count. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Custom Object Records

**Slug:** `ZENDESK_COUNT_ZENDESK_CUSTOM_OBJECT_RECORDS`

Count the number of records in a specific Zendesk custom object. Use when you need to determine the total number of records for a custom object type, which is useful for reporting, capacity planning, or validation before creating new records. This is a read-only, idempotent operation. Example use cases: - Check if a custom object has records before deleting - Get record count for reporting dashboards - Verify capacity before bulk operations

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Zendesk Organizations

**Slug:** `ZENDESK_COUNT_ZENDESK_ORGANIZATIONS`

Count the number of organizations in Zendesk. Returns an approximate count of organizations with the timestamp of when the count was last calculated. This is a read-only, idempotent operation. Use when you need to know the total number of organizations for reporting, capacity planning, or operational purposes. For detailed per-organization information, use ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS instead.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Access Rule

**Slug:** `ZENDESK_CREATE_ACCESS_RULE`

Create an access rule for a custom object in Zendesk. Access rules control which users can view or modify custom object records based on conditions. Use when you need to set up data access policies for custom objects, such as limiting access to records created by the current user or records assigned to specific groups. Returns the created access rule with its ID, title, description, conditions, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `access_rule` | object | Yes | The access rule definition including title, description, and conditions |
| `custom_object_key` | string | Yes | The key of the custom object to create an access rule for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Install Zendesk App

**Slug:** `ZENDESK_CREATE_APPS_INSTALLATION`

Install a Zendesk app in the account. Use when you need to add an app from the Zendesk marketplace or a private app to your Zendesk instance. You must provide the app_id; settings are optional for apps that have defaults or no configurable settings. This action is irreversible once installed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | integer | Yes | The ID of the app to install |
| `enabled` | boolean | No | Whether the app should be enabled after installation. When omitted, Zendesk's server-side default applies (currently `true` for most apps). Pass `True` or `False` to override that default explicitly. |
| `settings` | object | No | Installation settings as a flat key-value object. All apps support the 'name' setting. Example: {'name': 'My App', 'iframeURL': 'https://example.com'}. Use either 'settings' or 'settings_objects', not both. |
| `settings_objects` | array | No | Alternative format for settings using key-value objects. Use either 'settings' or 'settings_objects', not both. |
| `recurring_payment` | boolean | No | Enable recurring Stripe payment subscription for paid apps. Set to true to enable billing. |
| `role_restrictions` | array | No | List of user roles to restrict the app to. Valid values: 'end-user', 'agent', 'admin' |
| `group_restrictions` | array | No | List of Zendesk group IDs to restrict the app to. Only users in these groups can see the app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Notification to App

**Slug:** `ZENDESK_CREATE_APPS_NOTIFY`

Send a notification to currently open instances of a Zendesk app. Use when you need to push real-time notifications or data to a Zendesk app that is currently open in an agent's interface. The notification triggers an event in the app, which can then respond with custom behavior (e.g., display a popup, update UI, trigger a workflow). Only works with apps that are currently open in the Zendesk interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The message body or data to send to the app. Can be a string, number, boolean, object, array, or null. Maximum payload size is 1MB. |
| `event` | string | Yes | The name of the event that will fire in the app. This is a custom event string that the app listens for to trigger its own logic. |
| `app_id` | integer | Yes | The ID of the app to send the notification to. Set to 0 for unpublished apps in development mode. |
| `agent_id` | integer | No | The ID of a specific agent to notify. If not provided, the notification will be sent to all currently open instances of the app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Autocomplete Tags

**Slug:** `ZENDESK_CREATE_AUTOCOMPLETE_TAGS`

Search for Zendesk tags using autocomplete via POST request body. Use when you need to find tag suggestions based on a partial tag name for tagging tickets or organizing content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A substring of a tag name to search for. The API returns registered and recent tags matching this substring. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Automation

**Slug:** `ZENDESK_CREATE_AUTOMATION`

Create a new automation in Zendesk. Automations are business rules that automatically perform actions on tickets when certain conditions are met. Automations run server-side and don't require user interaction. Use this action when you need to: - Automatically assign tickets based on conditions - Change ticket priority/status based on rules - Add tags to tickets matching certain criteria - Notify agents or teams based on ticket properties - Implement escalation workflows Note: Automations must have at least one condition that is time-based (like created_at, updated_at) OR check one of: status, type, group_id, assignee_id, or requester_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the automation. Must be unique among all automations. |
| `active` | boolean | No | Whether the automation is active and will execute. Set to false to create a draft automation. |
| `actions` | array | No | List of actions the automation will perform when triggered. Each action specifies a field to modify and the value to set. |
| `position` | integer | No | The position of the automation which specifies the order it will be executed. Lower numbers execute first. If not specified, the automation is added to the end. |
| `conditions` | object | Yes | The conditions that must be met for the automation to execute. At least one 'all' condition must reference a time-based field (created_at, updated_at, etc.) or check: status, type, group_id, assignee_id, or requester_id. Omitting it would post `{"all": [], "any": []}` to Zendesk and fail server-side. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bookmark

**Slug:** `ZENDESK_CREATE_BOOKMARK`

Create a bookmark for a ticket in Zendesk. Bookmarks allow you to save references to tickets for quick access. Use this action when you need to: - Save a ticket for later reference - Mark an important ticket for quick access - Create a watchlist-like functionality for specific tickets

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to bookmark. The ticket must exist and the user must have permission to access it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Redact Zendesk Comment

**Slug:** `ZENDESK_CREATE_COMMENT_REDACTION`

Redact sensitive content from a ticket comment in Zendesk using the Agent Workspace method. Use when you need to permanently remove or hide sensitive information such as personal data, credentials, or inappropriate content from ticket comments. This action is irreversible — redacted content cannot be recovered once removed. Note: Requires Agent Workspace to be enabled and (for Enterprise accounts) agents need a custom role with redaction permissions. Closed tickets cannot have comments redacted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The exact text string to redact from the comment. Required: omitting it would send an empty payload to the redact endpoint and report success without any redaction having happened. The text must match exactly as it appears in the comment. |
| `ticket_id` | integer | Yes | The ID of the ticket containing the comment to redact. |
| `ticket_comment_id` | integer | Yes | The ID of the ticket comment to redact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Object Bulk Job

**Slug:** `ZENDESK_CREATE_CUSTOM_OBJECT_BULK_JOB`

Create a bulk job to perform batch operations (create, update, delete, upsert) on custom object records in Zendesk. Use when you need to process multiple records of a custom object type efficiently in a single API call. Returns a job ID for tracking the operation progress via GET /api/v2/custom_objects/{custom_object_key}/jobs/{job_id}.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | Array of record objects for create, update, or upsert actions. Each object contains the record attributes matching the custom object's field definitions. For delete actions, this should be an array of record IDs (strings). |
| `action` | string ("create" | "update" | "delete" | "upsert") | Yes | The bulk operation to perform. 'create' adds new records, 'update' modifies existing records, 'delete' removes records, 'upsert' creates or updates based on matching criteria. |
| `custom_object_key` | string | Yes | The key of the custom object to operate on. This is the unique identifier for the custom object type (e.g., 'car', 'product', 'order'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Object Record

**Slug:** `ZENDESK_CREATE_CUSTOM_OBJECT_RECORD`

Create a new record for a custom object in Zendesk. Use when you need to add a new entry to a custom object type. The record is identified by its unique ID returned in the response. This action creates a new custom object record and returns the complete record data including the generated ID and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | User-defined display name for the object. If autonumbering is selected for the custom object's name field, the name isn't allowed because it's automatically generated. If uniqueness is enabled, the name must be unique. |
| `external_id` | string | No | An id you can use to link custom object records to external data |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |
| `custom_object_fields` | object | No | A dictionary of custom field key-value pairs. The available fields are defined in the custom object's field definitions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Object Record Attachment

**Slug:** `ZENDESK_CREATE_CUSTOM_OBJECT_RECORD_ATTACHMENT`

Create an attachment for a custom object record in Zendesk. Use when you need to attach files (documents, images, etc.) to a custom object record. The file is uploaded as a multipart/form-data request. The response includes the attachment details and malware scan status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | The file to upload as an attachment. The file name will be used for the attachment (for example, 'document.pdf' or 'image.jpg'). |
| `record_id` | string | Yes | The id of a custom object record |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Ticket Status

**Slug:** `ZENDESK_CREATE_CUSTOM_STATUSES`

Create a new custom ticket status in Zendesk. Custom statuses allow agents to define more granular ticket states beyond the default status categories. Use when you need to add custom ticket workflow states to better reflect your support process. Both `agent_label`, `status_category`, `end_user_label`, and `description` are required. The status category determines which lifecycle phase the custom status belongs to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the custom status is active. Defaults to true. If false, the status is inactive and cannot be selected. |
| `agent_label` | string | Yes | The label displayed to agents when this custom status is shown. Maximum length is 48 characters. |
| `description` | string | Yes | The description explaining when an agent should select this custom ticket status. |
| `end_user_label` | string | Yes | The label displayed to end users (customers) when this custom status is shown. Maximum length is 48 characters. |
| `status_category` | string ("new" | "open" | "pending" | "hold" | "solved") | Yes | The status category this custom status belongs to. Must be one of: 'new', 'open', 'pending', 'hold', 'solved'. |
| `end_user_description` | string | No | The description displayed to end users (customers) about this status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deletion Schedule

**Slug:** `ZENDESK_CREATE_DELETION_SCHEDULE`

Create a new deletion schedule in Zendesk that automatically deletes records matching specified conditions on a schedule. Deletion schedules are used for data retention and cleanup policies. Use this action when you need to: - Automatically clean up old closed tickets - Remove inactive users or attachments - Enforce data retention policies - Schedule periodic deletion of bot conversations Note: The 'object' field (entity type to delete) cannot be modified after creation. Use conditions to specify which records to delete - for time-based ticket deletion, use 'duration_since_last_update'; for time-based end-user ('zen:user') deletion, use 'duration_since_last_activity' instead — both with a 'greater_than' operator and ISO 8601 duration values (e.g., 'P30D' for 30 days).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the deletion schedule. Must be descriptive so you can identify it in the Zendesk admin panel. |
| `active` | boolean | No | Whether the deletion schedule is active and will execute. Set to false to create a disabled schedule. |
| `object` | string | Yes | The entity type to delete. Cannot be modified after creation. Built-in values: 'zen:ticket' (tickets), 'zen:user' (users), 'zen:attachment' (attachments), 'zen:bot_only_conversation' (bot conversations). For custom objects, use 'zen:custom_object:CUSTOM_OBJECT_KEY' (the enum was widened to accept this documented pattern). |
| `conditions` | object | No | Conditions object for deletion schedule - defines when items should be deleted. |
| `description` | string | No | A description explaining what this deletion schedule does. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Dynamic Content Item

**Slug:** `ZENDESK_CREATE_DYNAMIC_CONTENT_ITEMS`

Create a new dynamic content item with locale variants in Zendesk. Dynamic content items enable localized content for ticket fields, macros, and other text-based content. Use when setting up multilingual support or creating template content that varies by user locale. The item's name cannot be changed after creation. Ensure the name is descriptive and follows your naming conventions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique name for the dynamic content item. This name is used to reference the item in macros, triggers, and other content. Must be unique within the account. |
| `variants` | array | Yes | Array of locale variants for this item. At least one variant is required. Each variant provides content for a specific locale. |
| `default_locale_id` | integer | Yes | The ID of the default locale for this item. Must be one of the locales the account has active. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Dynamic Content Item Variant

**Slug:** `ZENDESK_CREATE_DYNAMIC_CONTENT_ITEMS_VARIANTS`

Create a new locale variant for an existing dynamic content item in Zendesk. Use when you need to add support for a new locale to an existing dynamic content item. Note: You can only create one variant per locale per dynamic content item. Use the update action to modify existing variants.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | If true, the variant is active and usable. Set to false to create a draft variant. |
| `content` | string | Yes | The content text for this locale variant. This is the localized string that will be displayed. |
| `default` | boolean | No | If true, this is the default variant used when no matching locale is found. Only one variant should be marked as default per item. |
| `locale_id` | integer | Yes | The ID of the locale for this variant. Must be one of the locales the account has active. |
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item to add a variant to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create End User Identity

**Slug:** `ZENDESK_CREATE_END_USER_IDENTITY`

Add an identity (email or phone) to an end user's profile in Zendesk. Use when you need to link a new email address or phone number to an existing end user account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The type of identity to create. Must be one of: 'email', 'phone_number', 'twitter', 'facebook', 'google', 'agent_forwarding', 'any_channel', 'foreign', 'sdk', 'messaging'. |
| `value` | string | Yes | The identifier value (e.g., email address like 'user@example.com' or phone number in E.164 format) |
| `primary` | boolean | No | If true, marks this identity as the primary identity for the user. Writable only at creation time. |
| `user_id` | integer | Yes | The numeric ID of the end user to add the identity to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Group Membership

**Slug:** `ZENDESK_CREATE_GROUP_MEMBERSHIPS`

Create a group membership in Zendesk, assigning an agent to a group. Use when you need to add an agent to a specific group for ticket routing, permissions, or team organization. The user_id and group_id are both required parameters. Note: The user must exist and have appropriate permissions to be assigned to groups. The group must also exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `default` | boolean | No | If true, tickets assigned directly to the agent will assume this membership's group. Defaults to false. |
| `user_id` | integer | Yes | The numeric ID of the agent to assign to the group. You can find this from user search results or ticket payloads (requester_id, submitter_id, assignee_id, author_id). |
| `group_id` | integer | Yes | The numeric ID of the group to assign the agent to. You can find this from group list results or ticket group_id fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Import Tickets

**Slug:** `ZENDESK_CREATE_IMPORTS_TICKETS_CREATE_MANY`

Bulk import tickets into Zendesk by posting up to 100 ticket objects at a time. Use when migrating tickets from another system or creating multiple tickets in a single API call. The operation returns a job_status payload; the initial status is typically 'queued' or 'completed' for small batches. This action is useful for data migration, test data setup, and bulk ticket creation workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tickets` | array | Yes | Array of up to 100 ticket objects to import. Each ticket can have any valid ticket field. |
| `archive_immediately` | boolean | No | If true, any ticket created with a 'closed' status bypasses the normal ticket lifecycle and will be created directly in your ticket archive |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Many Dynamic Content Variants

**Slug:** `ZENDESK_CREATE_MANY_DYNAMIC_CONTENT_ITEMS_VARIANTS`

Create many locale variants for an existing dynamic content item in Zendesk. Use when you need to add multiple language variants to a dynamic content item in a single operation. This action is efficient for bulk-adding translations to support multilingual content. This action is idempotent - running it multiple times with the same variants will create duplicate variants if they don't already exist. Consider listing existing variants first to avoid duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `variants` | array | Yes | Array of locale variants to create. Each variant provides content for a specific locale. |
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item to add variants to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Many Zendesk Tickets

**Slug:** `ZENDESK_CREATE_MANY_TICKETS`

Create many tickets in Zendesk in a single request. Accepts an array of up to 100 ticket objects. The operation is handled asynchronously — a background job is queued and you receive a job_status payload with an initial status of 'queued' or 'working'. Poll the job_status URL or use ZENDESK_GET_APPS_JOB_STATUS to check for completion and view per-ticket results. Use when creating multiple tickets at once or seeding test data. This action is irreversible — tickets created cannot be easily undone once the job completes. Ensure the tickets list is accurate before submitting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tickets` | array | Yes | Array of ticket objects to create (max 100). Each ticket requires at minimum a 'subject' field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Many Zendesk Users

**Slug:** `ZENDESK_CREATE_MANY_USERS`

Create many users in Zendesk in a single request. Accepts up to 100 user objects. The operation is handled asynchronously — a background job is queued and you receive a job_status payload with an initial status of 'queued' or 'working'. Poll the job_status URL or use ZENDESK_GET_APPS_JOB_STATUS to check for completion and view per-user results. Use when onboarding multiple users at once or seeding test data. Note: This action is idempotent — re-running with the same external_ids may update existing users depending on Zendesk configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `users` | array | Yes | Array of user objects to create (max 100). Each user requires a 'name' field. |
| `skip_verify_email` | boolean | No | If true, do not send verification emails to new users. Passed as a URL query parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Object Trigger

**Slug:** `ZENDESK_CREATE_OBJECT_TRIGGER`

Create a new trigger for a custom object in Zendesk. Custom object triggers are business rules that automatically perform actions when certain conditions are met on custom object records. Use this action when you need to: - Send notifications when custom object records are created or updated - Automatically update fields on custom object records - Add or remove tags based on custom object conditions - Implement automated workflows for custom object data This action is idempotent - creating a trigger with the same name multiple times will result in duplicate triggers unless the name is changed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the trigger. Must be unique within the custom object. |
| `active` | boolean | No | Whether the trigger is active and will execute. Set to false to create a draft trigger. |
| `actions` | array | Yes | List of actions the trigger will perform when conditions are met. Each action specifies a field and value. |
| `position` | integer | No | The position of the trigger which specifies the order it will be executed. Lower numbers execute first. |
| `conditions` | object | Yes | The conditions that must be met for the trigger to execute. Conditions use 'all' (AND) and 'any' (OR) logic. |
| `description` | string | No | A description of what the trigger does. |
| `custom_object_key` | string | Yes | The key of the custom object to create a trigger for. This is a user-defined unique identifier for the custom object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Organization Field

**Slug:** `ZENDESK_CREATE_ORGANIZATION_FIELD`

Create a custom organization field in Zendesk. Use when you need to add a new custom field type (such as text, dropdown, checkbox, date, etc.) to track additional organization attributes. The field key must be unique and can only contain letters, numbers, and underscores.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | A unique key that identifies this custom field. Must consist of only letters, numbers, and underscores. Cannot be only numbers. |
| `tag` | string | No | Optional tag for checkbox type fields |
| `type` | string ("checkbox" | "date" | "decimal" | "dropdown" | "integer" | "lookup" | "multiselect" | "regexp" | "text" | "textarea") | Yes | The custom field type. Must be one of: checkbox, date, decimal, dropdown, integer, lookup, multiselect, regexp, text, or textarea |
| `title` | string | Yes | The title of the custom field |
| `active` | boolean | No | If true, this field is available for use. Defaults to true. |
| `position` | integer | No | Ordering of the field relative to other fields. Lower values appear first. |
| `description` | string | No | User-defined description of the field's purpose |
| `relationship_filter` | array | No | Filter definition for autocomplete in lookup fields |
| `custom_field_options` | array | No | Required for dropdown or multiselect types. Each option requires a name and value. |
| `regexp_for_validation` | string | No | Regular expression pattern for validating regexp type fields |
| `relationship_target_type` | string ("zen:user" | "zen:organization" | "zen:ticket") | No | Object type referenced for lookup fields. Can be zen:user, zen:organization, zen:ticket, or zen:custom_object:{key} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Organization Membership

**Slug:** `ZENDESK_CREATE_ORGANIZATION_MEMBERSHIPS`

Create a new organization membership in Zendesk by assigning a user to an organization. Use when you need to associate a user with an organization so they can access organization-specific tickets and data. Returns a 422 error if the user is already assigned to the organization. This action is idempotent in that creating a duplicate membership will fail with a specific error, but the operation itself is not naturally idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `default` | boolean | No | Denotes whether this is the default organization membership for the user. If set to true, this membership will be the primary organization for the user. Defaults to true if not specified. |
| `user_id` | integer | Yes | The ID of the user to assign to the organization. Must be a non-null integer. Obtain from ZENDESK_LIST_USERS or ZENDESK_SEARCH_USERS; do not guess or fabricate IDs. |
| `organization_id` | integer | Yes | The ID of the organization to assign the user to. Must be a non-null integer. Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_GET_ZENDESK_ORGANIZATION_BY_ID; do not guess or fabricate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Many Organization Memberships

**Slug:** `ZENDESK_CREATE_ORGANIZATION_MEMBERSHIPS_CREATE_MANY`

Create multiple organization memberships in Zendesk by posting up to 100 membership objects at a time. Each membership links a user to an organization. Use when onboarding multiple users to organizations in bulk, such as during team migrations or organizational restructuring. The operation returns a job_status payload; the initial status is typically 'queued' for larger batches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_memberships` | array | Yes | Array of organization membership objects to create (max 100). Each object requires user_id and organization_id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Zendesk Organizations

**Slug:** `ZENDESK_CREATE_ORGANIZATION_MERGE`

Merge two Zendesk organizations by combining all users, tickets, and data from the losing organization into the winning organization. This action is irreversible — once merged, the losing organization and all its data cannot be recovered. Use when you need to consolidate duplicate organizations or combine organization data into a single organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `winner_id` | integer | Yes | The ID of the winning organization that will receive all users and tickets from the losing organization |
| `organization_id` | integer | Yes | The ID of the organization to merge from (the losing organization that will be merged into another) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Organization Tags

**Slug:** `ZENDESK_CREATE_ORGANIZATIONS_TAGS`

Set organization tags in Zendesk by making a POST request to replace the tags on an organization. Use when you need to categorize or label organizations with specific tags for filtering and organization purposes. This operation replaces all existing tags on the organization with the new set provided. Note: This action is not idempotent as it replaces existing tags rather than adding to them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | An array of tag strings to set for the organization. Tags are used to categorize and filter organizations. Existing tags on the organization will be replaced with this new set of tags. |
| `organization_id` | integer | Yes | The ID of the organization to set tags for. Must be a non-null integer. Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_SEARCH_ZENDESK_ORGANIZATIONS; do not guess or fabricate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Organization Subscription

**Slug:** `ZENDESK_CREATE_ORGANIZATION_SUBSCRIPTION`

Create an organization subscription in Zendesk. This subscribes a user to receive notifications and updates related to a specific organization. Use when you need to add a user to an organization's subscription list so they can access organization-related resources and receive notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user who will be subscribed to the organization |
| `organization_id` | integer | Yes | The ID of the organization to subscribe the user to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Or Update Many Users

**Slug:** `ZENDESK_CREATE_OR_UPDATE_MANY_USERS`

Create or update multiple users in Zendesk in a single request. Use when you need to batch create or update up to 100 users at once. New users require a 'name' field; existing users are matched by 'id'. Returns a job_status with results for each operation. This action is idempotent — re-running with the same parameters will produce the same results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `users` | array | Yes | Array of user objects to create or update. Up to 100 users can be included. For new users, 'name' is required. For existing users, 'id' is required to identify the user to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Or Update Organization

**Slug:** `ZENDESK_CREATE_OR_UPDATE_ORGANIZATION`

Create or update a Zendesk organization in a single operation. If an organization with the same external_id already exists, it is updated. Otherwise, a new organization is created. Use when you need to ensure an organization exists without checking for duplicates first. Note: For updates, you must specify the external_id to match the existing organization. Name is not available as a matching criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A unique name for the organization. Required when creating a new organization. Note: Name is not available as a matching criteria for updates - use external_id or id instead. |
| `tags` | array | No | The tags of the organization |
| `notes` | string | No | Any notes you have about the organization |
| `details` | string | No | Any details about the organization, such as the address |
| `group_id` | integer | No | New tickets from users in this organization are automatically put in this group |
| `external_id` | string | No | A unique external id to associate organizations to an external record. The id is case-insensitive (e.g., 'company1' and 'Company1' are considered the same). Use this for matching when updating an existing organization. |
| `domain_names` | array | No | An array of domain names associated with this organization |
| `shared_tickets` | boolean | No | End users in this organization are able to see each other's tickets |
| `shared_comments` | boolean | No | End users in this organization are able to comment on each other's tickets |
| `organization_fields` | object | No | Custom fields for this organization. See custom organization fields documentation for available field definitions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or Update User

**Slug:** `ZENDESK_CREATE_OR_UPDATE_USER`

Create or update a Zendesk user. If a user with the same email or external_id exists, it updates that user. Otherwise, it creates a new user. Use when you need to upsert user records - idempotent based on email or external_id matching. Returns 200 for existing users, 201 for newly created users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | object | Yes | User object with attributes. `name` is mandatory. The user is matched by `email` or `external_id` to determine create vs update. `role` must be one of: 'end-user', 'agent', or 'admin'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Unregister Push Notification Devices

**Slug:** `ZENDESK_CREATE_PUSH_NOTIFICATION_DEVICES_DESTROY_MANY`

Bulk unregister push notification devices in Zendesk. This action is irreversible — the devices will be permanently removed from receiving push notifications and cannot be recovered once removed. Use when cleaning up obsolete device tokens or removing test devices from receiving push notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `push_notification_devices` | array | Yes | List of mobile device tokens to unregister from push notifications. These are the device tokens returned when a mobile device registers for push notifications. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Resource Collection

**Slug:** `ZENDESK_CREATE_RESOURCE_COLLECTIONS`

Create a resource collection in Zendesk. Use when you need to batch multiple operations on Zendesk resources (like tickets) into a single request. The API processes the collection as a background job and returns a job status object. Note: This action queues a background job. Poll the returned job_status.url to check when the collection has been processed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the resource collection. This is used to identify the collection. |
| `actions` | array | Yes | Array of action objects specifying what to do with the resources. Each action has a type and list of resource IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Side Conversation

**Slug:** `ZENDESK_CREATE_SIDE_CONVERSATION`

Create a private side conversation on a Zendesk ticket. Side conversations are agent-to-agent communications that don't notify the customer. Use this action when you need to discuss a ticket privately with another agent, escalate to a specialist, or coordinate on sensitive issues without customer visibility. Recipients can include Zendesk users (by ID or email), Slack channels, support groups, or Microsoft Teams channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | array | Yes | List of recipients for the side conversation. Each recipient must have at least one of: user_id, email, slack_channel_id, support_group_id, or msteams_channel_id. At least one recipient is required. |
| `body` | string | Yes | Plain text body of the initial message. This is the main content of the side conversation that recipients will see. |
| `subject` | string | No | Subject line for the side conversation. If not provided, a default subject may be used based on the parent ticket. |
| `html_body` | string | No | HTML-formatted body of the initial message. If provided, this will be used instead of the plain text body for HTML-capable clients. |
| `ticket_id` | integer | Yes | The ID of the Zendesk ticket to attach the side conversation to |
| `external_ids` | object | No | Key-value external metadata to attach to the side conversation. Use this to store custom identifiers or tags from your external systems. |
| `attachment_ids` | array | No | List of attachment file IDs to include with the message. These must be IDs from previously uploaded attachments via the CreateSideConversationAttachment action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Support Address

**Slug:** `ZENDESK_CREATE_SUPPORT_ADDRESS`

Create a new support address (recipient address) in Zendesk. Use when you need to add a new email address for receiving support requests. The email address must follow Zendesk's format (`{local-part}@{accountname}.zendesk.com`) for internal addresses, or be an existing external email with forwarding properly configured. The created address will have verification statuses that indicate whether DNS records (CNAME, SPF) are properly configured. Note that you cannot change the email address of an existing support address after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the address |
| `email` | string | Yes | The email address for the support address. Note: You cannot change the email address of an existing support address after creation. |
| `default` | boolean | No | Whether this address should be the account's default support address |
| `brand_id` | integer | No | The ID of the brand to associate with this support address. If not provided, the address will be associated with the account's default brand. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export Suspended Tickets

**Slug:** `ZENDESK_CREATE_SUSPENDED_TICKETS_EXPORT`

Export Suspended Tickets from Zendesk Support. Use when you need to export all suspended tickets for compliance review, audit purposes, or data analysis. This action enqueues a job that creates a CSV file; when complete, Zendesk emails the requester a link to download the CSV. Suspended tickets are sorted by update timestamp in ascending order. Rate limited to one request per minute. Note: This action is read-only and returns the export job status. The actual CSV will be sent via email when the job completes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket Content Pin

**Slug:** `ZENDESK_CREATE_TICKET_CONTENT_PIN`

Create a ticket content pin in Zendesk. Content pins allow you to attach helpful resources like Help Center articles or external content directly to tickets for easy reference. Use this action when you need to: - Attach a Help Center article to a ticket for context - Pin an external knowledge base article to a ticket - Add relevant documentation or resources to a support ticket

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | No | The locale for the content pin. Required when content_type is 'external_content' — Zendesk rejects external-content pins with no locale ('External contents must have locale to be able to get pinned to tickets.'). Also required when pinning articles. Format: language + underscore + locale code (e.g., 'en-us', 'fr-ca'). |
| `ticket_id` | string | Yes | The ID of the ticket to which the content pin will be added |
| `content_id` | string | Yes | The ID of the content to pin |
| `content_type` | string | Yes | The type of content being pinned. Common values include 'article' for Help Center articles and 'external_content' for external resources. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket Field

**Slug:** `ZENDESK_CREATE_TICKET_FIELD`

Create a custom ticket field in Zendesk with various field types. Use when you need to add a new custom field (such as text, dropdown, checkbox, date, numeric, regex-validated, or lookup) to capture additional information on tickets. The field title is required; description, required flag, and custom options are optional.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | For checkbox fields only. The tag added to tickets when the checkbox is selected |
| `type` | string ("text" | "textarea" | "checkbox" | "date" | "integer" | "decimal" | "regexp" | "partialcreditcard" | "multiselect" | "tagger" | "lookup") | Yes | The ticket field type. Must be one of: text, textarea, checkbox, date, integer, decimal, regexp, partialcreditcard, multiselect, tagger, or lookup |
| `title` | string | Yes | The title of the ticket field shown to agents and end users |
| `active` | boolean | No | If true, this field is available for use. Defaults to true. |
| `position` | integer | No | Relative position of the field on the ticket. Fields with lower positions appear first. |
| `required` | boolean | No | If true, agents must enter a value in this field to change the ticket status to solved. Defaults to false. |
| `description` | string | No | User-defined description explaining the purpose of this field |
| `agent_can_edit` | boolean | No | If true, agents can edit this field. Defaults to true. |
| `title_in_portal` | string | No | The title shown to end users in Help Center (may differ from agent title) |
| `agent_description` | string | No | A description of the ticket field that only agents can see |
| `visible_in_portal` | boolean | No | If true, the field is visible to end users in Help Center. Defaults to true. |
| `editable_in_portal` | boolean | No | If true, end users can edit this field in Help Center. Defaults to true. |
| `required_in_portal` | boolean | No | If true, end users must enter a value to create a request. Defaults to false. |
| `relationship_filter` | array | No | Filter definition that allows autocomplete to filter down results for lookup fields |
| `collapsed_for_agents` | boolean | No | If true, the field is hidden alongside infrequently used fields. Classic interface only. |
| `custom_field_options` | array | No | Required for multiselect and tagger types. Defines the available options for dropdown selection. |
| `regexp_for_validation` | string | No | Regular expression pattern for validating input on regexp type fields |
| `relationship_target_type` | string ("zen:user" | "zen:organization" | "zen:ticket" | "zen:custom_object:apartment") | No | The type of object referenced by lookup fields. Can be zen:user, zen:organization, zen:ticket, or zen:custom_object:{key} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket Field Option

**Slug:** `ZENDESK_CREATE_TICKET_FIELD_OPTION`

Create or update an option for a dropdown or multiselect ticket field. Use when you need to add a new selectable option to a custom ticket field of type 'multiselect' or 'tagger'. If an option with the same value already exists, it will be updated with the provided name. This action is idempotent - running it multiple times with the same value will update the existing option rather than creating duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the option displayed to agents and end users in the dropdown |
| `value` | string | Yes | The internal value of the option used when saving the ticket field selection |
| `position` | integer | No | The relative position of the option in the dropdown list. Options with lower positions appear first. |
| `allow_solving` | boolean | No | If true, selecting this option allows the ticket to be solved when the field is required to solve |
| `ticket_field_id` | integer | Yes | The ID of the ticket field to add the option to. The ticket field must be of type 'multiselect' or 'tagger'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Trigger

**Slug:** `ZENDESK_CREATE_TRIGGER`

Create a new trigger in Zendesk. Triggers are business rules that automatically perform actions on tickets when certain conditions are met. Unlike automations, triggers execute immediately when tickets are created or updated. Use this action when you need to: - Automatically change ticket status based on conditions - Assign tickets to agents or groups based on rules - Add tags to tickets matching certain criteria - Send notifications to agents, groups, or external systems - Update custom fields based on ticket properties Note: Triggers must have at least one condition in the 'all' array that references a time-based field (like created_at, updated_at) OR checks one of: status, type, group_id, assignee_id, requester_id, custom_status_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the trigger. Must be unique among all triggers. |
| `active` | boolean | No | Whether the trigger is active and will execute. Set to false to create a draft trigger. |
| `actions` | array | Yes | List of actions the trigger will perform when triggered. Each action specifies a field to modify and the value to set. |
| `conditions` | object | Yes | The conditions that must be met for the trigger to execute. At least one 'all' condition must reference a time-based field (created_at, updated_at) or check: status, type, group_id, assignee_id, requester_id, custom_status_id. |
| `category_id` | string | No | The ID of the category to assign the trigger to. Categories help organize triggers in the Zendesk admin interface. |
| `description` | string | No | A description of what the trigger does. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Trigger Categories Batch Job

**Slug:** `ZENDESK_CREATE_TRIGGER_CATEGORIES_JOB`

Create a batch job for ticket trigger categories in Zendesk. Use this action when you need to perform batch operations on multiple trigger categories at once. The action 'patch' allows updating trigger categories in bulk. Returns job status and results that can be polled for completion. Endpoint: POST /api/v2/trigger_categories/jobs

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | No | The batch action to perform on trigger categories. Currently only 'patch' is supported. |
| `trigger_category_ids` | array | Yes | List of trigger category IDs to include in the batch job |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Trigger Category

**Slug:** `ZENDESK_CREATE_TRIGGER_CATEGORY`

Create a new trigger category in Zendesk. Trigger categories are used to organize and group triggers for better management. Use when setting up automated workflows or organizing business rules. This action creates a trigger category with the specified name and optional position. The name must be unique within the account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the trigger category. Names must be unique within the account. |
| `position` | integer | No | The position of the trigger category. Triggers with lower positions are run first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Field Option

**Slug:** `ZENDESK_CREATE_USER_FIELD_OPTION`

Create or update an option for a dropdown or multiselect user field. Use when you need to add a new selectable option to a custom user field of type 'multiselect' or 'tagger'. If an option with the same value already exists, it will be updated with the provided name. This action is idempotent - running it multiple times with the same value will update the existing option rather than creating duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the option displayed to agents and end users in the dropdown |
| `value` | string | Yes | The internal value of the option used when saving the user field selection |
| `position` | integer | No | The relative position of the option in the dropdown list. Options with lower positions appear first. |
| `allow_solving` | boolean | No | If true, selecting this option allows the ticket to be solved when the field is required to solve |
| `user_field_id` | string | Yes | The ID or key of the user field to add the option to. The user field must be of type 'multiselect' or 'tagger'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Identity

**Slug:** `ZENDESK_CREATE_USER_IDENTITY`

Tool to add an identity to a user's profile in Zendesk. An agent can add multiple identities to a user (e.g., multiple email addresses). Use this when a user needs to be contacted via a new channel or needs an additional identifier. Use when you need to add an additional identity (email, phone, social) to an existing Zendesk user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("email" | "twitter" | "facebook" | "google" | "phone_number" | "agent_forwarding" | "any_channel" | "foreign" | "sdk" | "messaging") | Yes | The type of identity to create. Common types include 'email', 'twitter', 'phone_number', etc. |
| `value` | string | Yes | The identifier value for this identity, such as an email address, phone number, or social media handle. |
| `primary` | boolean | No | Set to true to make this identity the primary identity for the user. Defaults to false. Note: Primary can only be set on creation, not on update. |
| `user_id` | integer | Yes | The numeric ID of the user to add the identity to. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id) or from user search results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Profile Event

**Slug:** `ZENDESK_CREATE_USER_PROFILES_EVENTS`

Store an event against a Sunshine user profile. Creates the profile if it doesn't exist. Use when tracking user activities such as purchases, sign-ups, or custom application events. The event is associated with the profile identified by the provided identifiers. This action is useful for building user activity timelines and triggering automations based on profile events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event` | object | Yes | Event information containing the event details and properties. |
| `profile` | object | Yes | Profile information for the user who triggered the event. The profile is created if it doesn't exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Logout Many Zendesk Users

**Slug:** `ZENDESK_CREATE_USERS_LOGOUT_MANY`

Log out multiple users in Zendesk by ending their active sessions. This action is irreversible — the affected users will be logged out and will need to re-authenticate. Use when you need to immediately terminate sessions for multiple users (e.g., after security incident, offboarding, or credential revocation). The operation accepts up to 100 user IDs at a time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of up to 100 user IDs to log out. The IDs must belong to end-users or agents, not brands or organizations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Organization Membership

**Slug:** `ZENDESK_CREATE_USERS_ORGANIZATION_MEMBERSHIPS`

Create a new organization membership for a specific user in Zendesk by assigning a user to an organization. Use when you need to associate an existing user with an organization so they can access organization-specific tickets and data. This action targets a specific user by their ID. This action is idempotent in that creating a duplicate membership will fail with a specific error, but the operation itself is not naturally idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `default` | boolean | No | Denotes whether this is the default organization membership for the user. If set to true, this membership will be the primary organization for the user. Defaults to false if not specified. |
| `user_id` | integer | Yes | The ID of the user for whom to create the organization membership. Must be a non-null integer. Obtain from ZENDESK_LIST_USERS or ZENDESK_SEARCH_USERS; do not guess or fabricate IDs. |
| `organization_id` | integer | Yes | The ID of the organization to assign the user to. Must be a non-null integer. Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_GET_ZENDESK_ORGANIZATION_BY_ID; do not guess or fabricate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Users Tags

**Slug:** `ZENDESK_CREATE_USERS_TAGS`

Set tags on a Zendesk user via POST request to /api/v2/users/{user_id}/tags. Use when you need to add or update tags on a specific user. Note that this replaces all existing tags on the user with the provided set of tags. This action is idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | An array of tag names to set on the user. Existing tags will be replaced with these tags. |
| `user_id` | integer | Yes | The numeric ID of the user to set tags for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create View

**Slug:** `ZENDESK_CREATE_VIEW`

Create a new view in Zendesk. Views are saved ticket filters that help agents organize and prioritize their work. They can filter tickets by conditions like status, priority, assignee, and more. Use this action when you need to: - Create a custom view for a specific team or workflow - Set up views for different ticket priorities or statuses - Create views with restricted access for specific groups - Configure views with specific columns, grouping, and sort order Note: At minimum, the 'all' conditions must include a condition checking 'status', 'type', 'group_id', 'assignee_id', or 'requester_id'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the view. Must be unique within the account. |
| `active` | boolean | No | Whether the view is active and visible to agents. Set to false to save as a draft. |
| `output` | object | No | Output configuration for view display settings. |
| `conditions` | object | Yes | The conditions that define which tickets appear in the view. 'all' conditions must ALL be true; 'any' conditions allow OR logic. At least one 'all' condition is required. |
| `description` | string | No | The description of the view shown to agents. |
| `restriction` | object | No | Restriction settings for view access. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Preview View

**Slug:** `ZENDESK_CREATE_VIEWS_PREVIEW`

Preview a Zendesk view by constructing conditions and execution settings to see which tickets match. Use when you need to test or validate view conditions before saving, or to retrieve a live preview of tickets matching specific filter criteria without creating a permanent view. This action is useful for verifying view logic, testing conditions, and previewing results before committing to a saved view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `view` | object | Yes | The view object containing title, conditions, and execution settings to preview |
| `columns` | array | No | Optional list of column definitions to override or extend the view's columns in the output |
| `exclude` | string | No | A comma-separated list of sideloads to exclude from the response. |
| `include` | string | No | A comma-separated list of sideloads to include in the response. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Preview View Ticket Count

**Slug:** `ZENDESK_CREATE_VIEWS_PREVIEW_COUNT`

Preview ticket count for a view in Zendesk. Returns the number of tickets matching the specified conditions before saving the view. Use when you want to verify how many tickets will match a view's filter criteria before creating or updating a view. This action sends a POST request to /api/v2/views/preview/count with view conditions and returns the matching ticket count. Rate limited to 5 requests per minute, per view, per agent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `output` | object | No | Output configuration for view sorting and grouping. |
| `all_conditions` | array | Yes | Array of one or more conditions that a ticket must meet ALL of to be included. This is the 'all' array in the view object. At least one condition is required. Note: 'all' is a Python keyword, so this field is named 'all_conditions' but maps to 'all' in the API. |
| `any_conditions` | array | No | Array of conditions where a ticket meets ANY of them to be included. Optional - if not provided, only 'all_conditions' are used. Note: 'any' is a Python keyword, so this field is named 'any_conditions' but maps to 'any' in the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Zendesk Attachment

**Slug:** `ZENDESK_CREATE_ZENDESK_ATTACHMENTS`

Upload a file attachment to Zendesk. Returns an attachment object with an ID that can be used to attach the file to a ticket comment. Use when you need to add files (documents, images, logs, etc.) to Zendesk tickets. The upload token returned is valid for 60 minutes. After uploading, attach the file to a ticket by including the attachment token in your ticket comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | The file to upload to Zendesk. The file name will be used for the attachment (for example, 'document.pdf' or 'error_log.txt'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Custom Object

**Slug:** `ZENDESK_CREATE_ZENDESK_CUSTOM_OBJECT`

Create a new custom object in Zendesk. Use when you need to define a new custom object type to store and manage custom data. The key is immutable once created, so choose carefully.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object` | object | Yes | The custom object definition containing key, title, title_pluralized, and optional properties. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Custom Object Field

**Slug:** `ZENDESK_CREATE_ZENDESK_CUSTOM_OBJECT_FIELD`

Create a new field for a custom object in Zendesk. Use when you need to add a new attribute or data field to an existing custom object type. The key is immutable once created. This action is idempotent for the same key, but the key parameter must be unique per custom object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | A user-defined unique identifier for the field. Once created, this value cannot be changed. |
| `tag` | string | No | A tag associated with this field for filtering and organization |
| `type` | string | Yes | The data type of the field. Common types include: 'text', 'integer', 'boolean', 'float', 'date', 'datetime', 'tag', 'enumeration', 'relation' |
| `title` | string | Yes | Display name for the field shown in the Zendesk interface |
| `active` | boolean | No | Whether the field is active and available for use |
| `position` | integer | No | Position of the field in the field list. Lower values appear first. |
| `required` | boolean | No | Whether this field is required when creating records. Omit (None) to use Zendesk's server-side default; pass True/False to set explicitly. |
| `properties` | object | No | Additional properties for a custom object field. |
| `description` | string | No | A description of the field to help agents understand its purpose |
| `custom_object_key` | string | Yes | The key of the custom object to add the field to |
| `custom_field_options` | array | No | List of options for dropdown/enumeration type fields |
| `regexp_for_validation` | string | No | A regular expression pattern to validate the field value against |
| `relationship_target_type` | string | No | For relationship fields, the key of the target custom object type |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Group

**Slug:** `ZENDESK_CREATE_ZENDESK_GROUP`

Create a new group in Zendesk. The group name must be unique within the account. Use when organizing agents into teams for ticket assignment and routing. Returns the full group object including the assigned ID — persist it for subsequent operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the group. Must be unique within the account. Leading/trailing whitespace is trimmed. |
| `is_public` | boolean | No | If true, the group is public and visible to all agents. If false, the group is private. Note: You cannot change a private group to a public group after creation. |
| `description` | string | No | An optional description of the group explaining its purpose or responsibilities |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Import Zendesk Ticket

**Slug:** `ZENDESK_CREATE_ZENDESK_IMPORT_TICKET`

Import a ticket into Zendesk with historical timestamps. This action creates tickets with past `created_at`, `updated_at`, or `solved_at` values, useful for migrating historical data. For real-time ticket creation, use ZENDESK_CREATE_ZENDESK_TICKET. Tickets created with 'closed' status and archive_immediately=true bypass normal lifecycle and go directly to archive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tags to apply to the ticket. |
| `due_at` | string | No | Due date for the ticket in ISO 8601 format. Only applicable for task tickets. |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved" | "closed") | No | The state of the ticket. Allowed values: 'new', 'open', 'pending', 'hold', 'solved', 'closed'. |
| `subject` | string | Yes | Short summary of the issue for the imported ticket. |
| `group_id` | integer | No | The ID of the group to assign the ticket to. |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | Zendesk priority. Must be one of: 'urgent', 'high', 'normal', 'low'. Defaults to 'normal'. |
| `email_ccs` | array | No | Array of email CC objects for adding/removing email CCs. |
| `followers` | array | No | Array of follower objects for adding/removing followers. |
| `solved_at` | string | No | The time the ticket was solved (for historical imports) in ISO 8601 format. |
| `created_at` | string | No | The time the ticket was created (for historical imports) in ISO 8601 format. |
| `updated_at` | string | No | The time the ticket was last updated (for historical imports) in ISO 8601 format. |
| `assignee_id` | integer | No | The ID of the agent to assign to the ticket. |
| `description` | string | Yes | Long-form description / steps to reproduce. This becomes the initial comment on the ticket. |
| `external_id` | string | No | An external ID to link this ticket to records in another system. |
| `ticket_type` | string ("problem" | "incident" | "question" | "task") | No | The type of this ticket. Allowed values: 'problem', 'incident', 'question', 'task'. |
| `requester_id` | integer | No | The ID of the user who requested this ticket. |
| `collaborators` | array | No | Array of collaborators to CC on the ticket. Each element can be: a user ID (integer), an email address (string), or an object with 'email' and optional 'name'. |
| `custom_fields` | array | No | Array of custom field objects with 'id' and 'value' properties. |
| `collaborator_ids` | array | No | Array of user IDs to add as collaborators (CCs) on the ticket. |
| `custom_status_id` | integer | No | The custom ticket status id of the ticket. |
| `archive_immediately` | boolean | No | If true, any ticket created with a 'closed' status bypasses the normal ticket lifecycle and will be created directly in your ticket archive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Organization

**Slug:** `ZENDESK_CREATE_ZENDESK_ORGANIZATION`

Create a new organization in Zendesk. After creation, the organization ID is auto-assigned and returned. Verify the exact ID before performing downstream operations that target this organization. Multiple organizations may share similar names — always confirm the correct organization by ID. This action is irreversible — the organization cannot be recovered once deleted. Use this action when you need to register a new company, customer, or group as a Zendesk organization so you can assign users, tickets, or other resources to it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A unique name for the organization. Leading and trailing whitespace are automatically trimmed. Names differing only by whitespace are treated as duplicates. |
| `tags` | array | No | The tags of the organization |
| `notes` | string | No | Any notes you have about the organization |
| `details` | string | No | Any details about the organization, such as the address |
| `group_id` | integer | No | New tickets from users in this organization are automatically put in this group |
| `external_id` | string | No | A unique external id to associate organizations to an external record |
| `domain_names` | array | No | An array of domain names associated with this organization |
| `shared_tickets` | boolean | No | End users in this organization are able to see each other's tickets |
| `shared_comments` | boolean | No | End users in this organization are able to comment on each other's tickets |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Request

**Slug:** `ZENDESK_CREATE_ZENDESK_REQUEST`

Create a new request in Zendesk. Use when an end user needs to submit a support request through the API. The request will be created with the provided subject, description, priority, and other optional fields. Returns the created request with its ID and URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tags to apply to the request. |
| `type` | string ("problem" | "incident" | "question" | "task") | No | The type of the request. Must be one of: 'question', 'incident', 'problem', 'task'. |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved" | "closed") | No | The state of the request. Must be one of: 'new', 'open', 'pending', 'hold', 'solved', 'closed'. Defaults to 'new'. |
| `subject` | string | Yes | The subject/title of the request. This is a required field. |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | The priority of the request. Must be one of: 'low', 'normal', 'high', 'urgent'. Defaults to 'normal'. |
| `external_id` | string | No | An external ID to link this request to records in another system. |
| `comment_body` | string | Yes | The initial description or comment on the request. Required -- Zendesk's Create Request API documents `comment` as mandatory (confirmed live: omitting it returns a 422). |
| `requester_id` | integer | No | The ID of the user making the request. |
| `custom_fields` | array | No | Custom fields for the request. Each item should include 'id' and 'value' properties. |
| `requester_name` | string | No | Name of the requester. If provided with requester_email, creates a user object for the requester. |
| `ticket_form_id` | integer | No | The numeric ID of the ticket form associated with the request. Only applicable for enterprise accounts. |
| `requester_email` | string | No | Email of the requester. Must be provided together with requester_name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Target

**Slug:** `ZENDESK_CREATE_ZENDESK_TARGET`

Create a target in Zendesk for triggering outbound integrations. Use when you need to set up a notification channel or integration with external services like Campfire, email, URL webhooks, or other supported targets. Targets can be used with triggers and automation rules. Note: URL targets are being discontinued October 28, 2024 in favor of webhooks. Email targets remain unaffected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | string | No | Recipient phone number for clickatell targets. |
| `room` | string | No | Room name or ID for campfire targets. |
| `email` | string | No | Email address for email targets (recipient) and get_satisfaction targets (auth). |
| `title` | string | Yes | A name for the target. Must be unique within the account. |
| `token` | string | No | API token for basecamp, campfire, pivotal, twitter, and yammer targets. |
| `active` | boolean | No | Whether the target is active. Defaults to true. Set to false to create without activating. |
| `api_id` | string | No | API ID for clickatell targets. |
| `subject` | string | No | Email subject for email targets. |
| `group_id` | string | No | Yammer group ID (optional for yammer targets). |
| `password` | string | No | Password for clickatell targets. |
| `resource` | string ("todo" | "message") | No | Resource type for basecamp targets. |
| `username` | string | No | Username for clickatell targets. |
| `api_token` | string | No | API token for flowdock targets. |
| `attribute` | string | No | Attribute name to send for url_target. The ticket field value will be sent as this parameter. |
| `subdomain` | string | No | Subdomain for campfire targets. |
| `from_field` | string | No | Sender phone number for clickatell targets. |
| `project_id` | string | No | Project ID for basecamp and pivotal targets. |
| `story_type` | string ("bug" | "chore" | "feature") | No | Story type for pivotal targets. |
| `target_url` | string | No | URL for basecamp, get_satisfaction, and jira targets. Must be a valid HTTPS URL. |
| `story_title` | string | No | Story title for pivotal targets. |
| `target_type` | string ("basecamp_target" | "campfire_target" | "clickatell_target" | "email_target" | "flowdock_target" | "get_satisfaction_target" | "jira_target" | "pivotal_target" | "twitter_target" | "url_target" | "yammer_target") | Yes | The type of target to create. Each type requires specific parameters. Available types: basecamp_target, campfire_target, clickatell_target, email_target, flowdock_target, get_satisfaction_target, jira_target, pivotal_target, twitter_target, url_target, yammer_target. |
| `account_name` | string | No | Account name for get_satisfaction targets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk Ticket

**Slug:** `ZENDESK_CREATE_ZENDESK_TICKET`

Create a ticket in Zendesk with full support for all ticket fields. Returns `ticket_id` and `ticket_url`; use ZENDESK_GET_ZENDESK_TICKET_BY_ID for the full ticket object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tags to apply to the ticket. |
| `due_at` | string | No | Due date for the ticket in ISO 8601 format. Only applicable for task tickets. |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved" | "closed") | No | The state of the ticket. Allowed values: 'new', 'open', 'pending', 'hold', 'solved', 'closed'. |
| `subject` | string | Yes | Short summary of the issue. Keep it concise (e.g. 'Cannot log in'). |
| `group_id` | integer | No | The ID of the group to assign the ticket to. |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | Zendesk priority. Must be one of: 'urgent', 'high', 'normal', 'low'. Defaults to 'normal'. |
| `email_ccs` | array | No | Array of email CC objects. Write-only field for adding/removing email CCs. |
| `followers` | array | No | Array of follower objects. Write-only field for adding/removing followers. |
| `assignee_id` | integer | No | The ID of the agent to assign to the ticket. |
| `description` | string | Yes | Long-form description / steps to reproduce. This becomes the initial comment on the ticket. |
| `external_id` | string | No | An external ID to link this ticket to records in another system. |
| `ticket_type` | string ("problem" | "incident" | "question" | "task") | No | The type of this ticket. Allowed values: 'problem', 'incident', 'question', 'task'. |
| `requester_id` | integer | No | The ID of the user requesting support. If provided, requester_name and requester_email are ignored. |
| `collaborators` | array | No | Array of collaborators to CC on the ticket. Each element can be: a user ID (integer), an email address (string), or an object with 'email' and optional 'name'. |
| `custom_fields` | array | No | Array of custom field objects with 'id' and 'value' properties. |
| `requester_name` | string | No | Name of the requester. If you supply this, you MUST also supply `requester_email`. Leave both blank to default to the authenticated user. Ignored if requester_id is provided. |
| `ticket_form_id` | integer | No | The ID of the ticket form to render for the ticket. Enterprise only. |
| `requester_email` | string | No | Email of the requester. Must accompany `requester_name`. Ignored if requester_id is provided. |
| `collaborator_ids` | array | No | Array of user IDs to add as collaborators (CCs) on the ticket. |
| `via_followup_source_id` | integer | No | The ID of a closed ticket to create a follow-up from. The new ticket will be linked to the source ticket. |
| `additional_collaborators` | array | No | Array of collaborators to add as CCs without removing existing collaborators. Each element can be: a user ID (integer), an email address (string), or an object with 'email' and optional 'name'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket or Voicemail Ticket

**Slug:** `ZENDESK_CREATE_ZENDESK_TICKET_OR_VOICEMAIL_TICKET`

Create a ticket in Zendesk via the voice/channel API endpoint. Use this action when you need to create tickets from phone calls, voicemails, or other voice channel interactions. Returns `ticket_id` and `ticket_url` for the created ticket. This endpoint is specifically for Zendesk Talk/voice channel ticket creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tags to apply to the ticket. |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved" | "closed") | No | The state of the ticket. Allowed values: 'new', 'open', 'pending', 'hold', 'solved', 'closed'. |
| `via_id` | integer | No | The via ID for the channel through which the ticket was created. |
| `subject` | string | Yes | Short summary of the issue. Keep it concise (e.g. 'Cannot log in' or 'Voicemail from customer'). |
| `group_id` | integer | No | The ID of the group to assign the ticket to. |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | Zendesk priority. Must be one of: 'urgent', 'high', 'normal', 'low'. Defaults to 'normal'. |
| `assignee_id` | integer | No | The ID of the agent to assign to the ticket. |
| `description` | string | Yes | Long-form description / steps to reproduce. This becomes the initial comment on the ticket. |
| `external_id` | string | No | An external ID to link this ticket to records in another system. |
| `ticket_type` | string ("problem" | "incident" | "question" | "task") | No | The type of this ticket. Allowed values: 'problem', 'incident', 'question', 'task'. |
| `requester_id` | integer | No | The ID of the user requesting support. If provided, requester_name and requester_email are ignored. |
| `custom_fields` | array | No | Array of custom field objects with 'id' and 'value' properties. |
| `voice_comment` | object | No | Voice comment details for voicemail tickets. |
| `requester_name` | string | No | Name of the requester. If you supply this, you MUST also supply `requester_email`. Leave both blank to default to the authenticated user. Ignored if requester_id is provided. |
| `requester_email` | string | No | Email of the requester. Must accompany `requester_name`. Ignored if requester_id is provided. |
| `display_to_agent` | integer | No | Optional agent ID who will see the newly created ticket. Use this to route the ticket to a specific agent for immediate attention. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk User

**Slug:** `ZENDESK_CREATE_ZENDESK_USER`

Tool to create a new user in Zendesk. Search for existing users first to avoid duplicate accounts with the same email. Use when you need to onboard a user with specific details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | object | Yes | User object containing all attributes to create `name` is mandatory; omitting it causes a validation error. `role` must be one of: 'end-user', 'agent', or 'admin'. `organization_id` must be a numeric ID of an existing organization — not a name string. Only include fields supported by the Zendesk user schema; unsupported or incorrectly typed fields trigger validation errors. |
| `skip_verify_email` | boolean | No | If true, do not send a verification email upon creation. Passed as a URL query parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zendesk User Field

**Slug:** `ZENDESK_CREATE_ZENDESK_USER_FIELD`

Create a custom user field in Zendesk. Use when you need to define a new custom field to capture additional user data. Supports text, checkbox, dropdown, multiselect, date, integer, decimal, regexp validation, and lookup types. Only administrators can create user fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Unique key that identifies this custom field. Must contain only letters, numbers, and underscores. Cannot be only numbers. |
| `tag` | string | No | Tag value for checkbox fields |
| `type` | string ("checkbox" | "date" | "decimal" | "dropdown" | "integer" | "lookup" | "multiselect" | "regexp" | "text" | "textarea") | Yes | The custom field type. Options: 'checkbox', 'date', 'decimal', 'dropdown', 'integer', 'lookup', 'multiselect', 'regexp', 'text', 'textarea'. |
| `title` | string | Yes | The title (label) displayed for this custom field |
| `active` | boolean | No | If true, this field is available for use. Defaults to true. |
| `position` | integer | No | Ordering of the field relative to other user fields |
| `raw_title` | string | No | Dynamic content placeholder for title (supports i18n placeholders) |
| `description` | string | No | User-defined description of this field's purpose |
| `raw_description` | string | No | Dynamic content placeholder for description (supports i18n placeholders) |
| `relationship_filter` | object | No | Filter definition for autocomplete results in lookup fields. |
| `custom_field_options` | array | No | Required for 'dropdown' and 'multiselect' types. Each option has a name (display) and value (internal tag). |
| `regexp_for_validation` | string | No | Regular expression pattern for validation. Required for 'regexp' type fields. |
| `relationship_target_type` | string | No | Target type for 'lookup' fields. Options: 'zen:user', 'zen:organization', 'zen:ticket', 'zen:custom_object:{key}' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Access Rule

**Slug:** `ZENDESK_DELETE_ACCESS_RULE`

Delete an access rule for a custom object in Zendesk. This action is irreversible — the access rule cannot be recovered once deleted. Use when you need to remove access control rules for custom objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The access rule ID |
| `custom_object_key` | string | Yes | The key of a custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Automation

**Slug:** `ZENDESK_DELETE_AUTOMATION`

Permanently deletes an automation in Zendesk. This action is irreversible — the automation will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete automations or removing test data. **Note**: You might be restricted from deleting automations that are active or referenced by other rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `automation_id` | integer | Yes | The ID of the automation to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Business Hours Schedule

**Slug:** `ZENDESK_DELETE_BUSINESS_HOURS_SCHEDULE`

Permanently deletes a business hours schedule in Zendesk. Use when you need to remove obsolete schedules or clean up test data. This action is irreversible — the schedule cannot be recovered once removed. Admin permissions are required. **Note**: Schedules that are currently in use by active SLA policies or other configurations may not be deletable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schedule_id` | integer | Yes | The ID of the schedule to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Object Record Attachment

**Slug:** `ZENDESK_DELETE_CUSTOM_OBJECT_RECORD_ATTACHMENT`

Permanently deletes an attachment from a custom object record in Zendesk. Use this action when you need to remove a specific file attachment from a custom object record. This action is irreversible — the attachment will be permanently deleted and cannot be recovered once removed. **Note**: Only attachments that are not required and not the primary attachment can be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the custom object record attachment to delete |
| `record_id` | string | Yes | The ID of the custom object record that contains the attachment to delete |
| `custom_object_key` | string | Yes | The key of the custom object that contains the record with the attachment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Object Record

**Slug:** `ZENDESK_DELETE_CUSTOM_OBJECT_RECORD_BY_EXTERNAL_ID_OR_NAME`

Permanently deletes a custom object record in Zendesk by its external ID or name. Use this action when you need to remove a specific record from a custom object. This action is irreversible — the record cannot be recovered once deleted. Requires admin permissions. **Note**: Either external_id or name must be provided to identify the record to delete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the custom object record to delete. Use either external_id or name to identify the record. |
| `external_id` | string | No | The external ID of the custom object record to delete. Use either external_id or name to identify the record. |
| `custom_object_key` | string | Yes | The key of the custom object containing the record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deleted Ticket Permanently

**Slug:** `ZENDESK_DELETE_DELETED_TICKET`

Permanently deletes a soft-deleted ticket from Zendesk. This action is irreversible - once a ticket is permanently deleted, it cannot be recovered. Use this action to remove tickets that were previously soft-deleted using the delete_ticket action. Use this action when you need to permanently remove a ticket that has already been deleted and is no longer accessible through normal operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the deleted ticket to permanently remove |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Deletion Schedule

**Slug:** `ZENDESK_DELETE_DELETION_SCHEDULE`

Permanently deletes a deletion schedule in Zendesk. This action is irreversible — the deletion schedule will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete deletion schedules or removing test data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deletion_schedule_id` | integer | Yes | The ID of the deletion schedule to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Group Membership

**Slug:** `ZENDESK_DELETE_GROUP_MEMBERSHIP`

Permanently deletes a group membership in Zendesk, immediately removing a user from a group. This action is irreversible — the group membership cannot be recovered once deleted. Use when cleaning up obsolete group memberships or removing users from groups. **Note**: Deleting a group membership does not delete the user or the group itself, only the association between them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_membership_id` | integer | Yes | The ID of the group membership to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Group Memberships

**Slug:** `ZENDESK_DELETE_GROUP_MEMBERSHIPS_DESTROY_MANY`

Bulk delete group memberships in Zendesk. Immediately removes users from groups. This action is irreversible — the memberships will be permanently deleted and cannot be recovered once removed. Use when cleaning up test data or removing obsolete group memberships in one call. Returns a job_status payload; deletions complete asynchronously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of Zendesk group membership IDs to delete. Example: 26923118307484,26923118307485,26923118307486 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Macro

**Slug:** `ZENDESK_DELETE_MACRO`

Permanently deletes a macro in Zendesk. This action is irreversible — the macro will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete macros or removing test data. **Note**: You might be restricted from deleting macros that are active or referenced by other rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macro_id` | integer | Yes | The ID of the macro to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Macros

**Slug:** `ZENDESK_DELETE_MACROS_DESTROY_MANY`

Bulk delete macros in Zendesk. This action is irreversible — the macros will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete macros or removing test data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of Zendesk macro IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Automations

**Slug:** `ZENDESK_DELETE_MANY_AUTOMATIONS`

Bulk delete automations in Zendesk. This action is irreversible — the automations will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete automations or removing test data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of Zendesk automation IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Custom Object Triggers

**Slug:** `ZENDESK_DELETE_MANY_OBJECT_TRIGGERS`

Bulk delete triggers for a Zendesk custom object. This action is irreversible — the triggers will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete triggers or removing test data for a specific custom object. Returns a success indicator upon completion. Requires the custom object key and a comma-separated list of trigger IDs to identify which triggers to delete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | A comma separated list of trigger IDs to delete |
| `custom_object_key` | string | Yes | The key of a custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Organization Memberships

**Slug:** `ZENDESK_DELETE_MANY_ORGANIZATION_MEMBERSHIPS`

Bulk delete organization memberships in Zendesk. This action is irreversible — the memberships will be permanently removed and cannot be recovered once deleted. Use when cleaning up obsolete organization memberships or removing users from organizations. Returns a job_status payload (initial status typically 'queued'); deletions complete asynchronously and may require follow-up polling to confirm completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of Zendesk organization membership IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Views

**Slug:** `ZENDESK_DELETE_MANY_VIEWS`

Bulk delete views in Zendesk. This action is irreversible — the views will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete views or removing test data. Returns 204 No Content on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of Zendesk view IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Organization Field

**Slug:** `ZENDESK_DELETE_ORGANIZATION_FIELD`

Permanently deletes an organization field in Zendesk. Use this action when you need to remove a custom organization field from the system. This action is irreversible — the organization field will be permanently deleted and cannot be recovered once removed. Any data stored in this field across all organizations will be lost. **Note**: Ensure no organizations are using this field before deletion, as the deletion cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_field_id` | string | Yes | The ID or key of the organization field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Organization Membership

**Slug:** `ZENDESK_DELETE_ORGANIZATION_MEMBERSHIP`

Permanently removes a user from an organization in Zendesk by deleting the organization membership. This action is irreversible — the membership cannot be recovered once deleted. Use this action when you need to remove a user's association with an organization. This operation requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_membership_id` | integer | Yes | The ID of the organization membership to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Organization Tags

**Slug:** `ZENDESK_DELETE_ORGANIZATIONS_TAGS`

Remove all tags from a Zendesk organization. Use when you need to clear organization tags as part of cleanup or reorganization tasks. This action is irreversible — the tags will be permanently removed from the organization and cannot be recovered once deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | The ID of the organization whose tags will be removed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Organization Subscription

**Slug:** `ZENDESK_DELETE_ORGANIZATION_SUBSCRIPTION`

Permanently deletes an organization subscription in Zendesk. This action is irreversible — the subscription cannot be recovered once removed. Use when you need to remove an organization subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_subscription_id` | integer | Yes | The ID of the organization subscription to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Resource Collection

**Slug:** `ZENDESK_DELETE_RESOURCE_COLLECTIONS`

Delete a resource collection in Zendesk. Use when you need to remove a resource collection that is no longer needed. This action returns a job status that can be polled to track the deletion progress. This operation is irreversible; confirm the correct resource_collection_id before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resource_collection_id` | integer | Yes | The ID of the resource collection to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Suspended Tickets

**Slug:** `ZENDESK_DELETE_SUSPENDED_TICKETS_DESTROY_MANY`

Permanently deletes multiple suspended tickets in Zendesk. This action is irreversible — the suspended tickets will be permanently deleted and cannot be recovered once removed. Use when cleaning up spam or irrelevant suspended tickets. Accepts up to 100 ticket IDs per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | A comma-separated list of suspended ticket IDs to delete (max 100) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Target

**Slug:** `ZENDESK_DELETE_TARGET`

Permanently deletes a target in Zendesk. This action is irreversible — the target will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete targets or removing test data. **Note**: Deleting a target that is actively used by triggers or other automation rules may cause those rules to fail.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target_id` | integer | Yes | The ID of the target to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Ticket Field

**Slug:** `ZENDESK_DELETE_TICKET_FIELD`

Permanently deletes a ticket field in Zendesk. Use this action when you need to remove a custom ticket field that is no longer needed. This action is irreversible — the ticket field and all associated data will be permanently deleted and cannot be recovered once removed. Requires admin permissions. **Note**: System ticket fields cannot be deleted. Only custom ticket fields can be removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creator` | boolean | No | If true, displays the `creator_user_id` and `creator_app_name` properties in the response. If the ticket field is created by an app, `creator_app_name` is the name of the app and `creator_user_id` is -1. If the ticket field is not created by an app, then `creator_app_name` is null |
| `ticket_field_id` | integer | Yes | The ID of the ticket field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Field Option

**Slug:** `ZENDESK_DELETE_TICKET_FIELD_OPTION`

Permanently deletes an option from a ticket field in Zendesk. Use this action when you need to remove a specific selectable option from a dropdown or multiselect ticket field. This action is irreversible — the ticket field option will be permanently deleted and cannot be recovered once removed. **Note**: Only custom options can be deleted. System-defined options cannot be removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The ID of the ticket field containing the option to delete |
| `ticket_field_option_id` | integer | Yes | The ID of the ticket field option to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Tags

**Slug:** `ZENDESK_DELETE_TICKETS_TAGS`

Remove tags from a Zendesk ticket. This action is irreversible; once tags are removed, they cannot be recovered without re-adding them. Use when you need to clean up ticket tags, remove outdated labels, or clear all tags from a ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Comma-separated list of tag names to remove from the ticket. If not provided, all tags will be removed from the ticket. |
| `ticket_id` | integer | Yes | The ID of the ticket to remove tags from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Trigger

**Slug:** `ZENDESK_DELETE_TRIGGER`

Permanently deletes a trigger in Zendesk. This action is irreversible — the trigger will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete triggers or removing test data. **Note**: You might be restricted from deleting triggers that are active or referenced by other rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_id` | integer | Yes | The ID of the trigger to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Trigger Category

**Slug:** `ZENDESK_DELETE_TRIGGER_CATEGORY`

Permanently deletes a trigger category in Zendesk. This action is irreversible — the trigger category will be permanently deleted and cannot be recovered once removed. Use when cleaning up obsolete trigger categories or removing test data. **Note**: You might be restricted from deleting trigger categories that are in use by active triggers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_category_id` | string | Yes | The ID of the ticket trigger category to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk User Field

**Slug:** `ZENDESK_DELETE_USER_FIELD`

Permanently deletes a user field in Zendesk, removing it from all user profiles. This action is irreversible — the field and all its associated data will be permanently lost. Use when cleaning up deprecated custom fields or removing test fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_field_id` | string | Yes | The ID or key of the user field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User Field Option

**Slug:** `ZENDESK_DELETE_USER_FIELD_OPTION`

Permanently deletes an option from a user field in Zendesk. Use this action when you need to remove a specific selectable option from a dropdown or multiselect user field. This action is irreversible — the user field option will be permanently deleted and cannot be recovered once removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_field_id` | string | Yes | The ID or key of the user field containing the option to delete |
| `user_field_option_id` | integer | Yes | The ID of the user field option to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Permanently Delete User

**Slug:** `ZENDESK_DELETE_USER_PERMANENTLY`

Permanently deletes a soft-deleted user from Zendesk. This action is irreversible - once a user is permanently deleted, it cannot be recovered. Use this action to remove users that were previously soft-deleted using the delete_user action. Use this action when you need to permanently remove a user that has already been deleted and is no longer accessible through normal operations. This action requires appropriate admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deleted_user_id` | integer | Yes | The ID of the deleted user to permanently remove |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk User Profile

**Slug:** `ZENDESK_DELETE_USER_PROFILE`

Permanently deletes a user profile in Zendesk by its profile ID. This action is irreversible — the profile and all associated data will be permanently lost. Use when cleaning up duplicate profiles, test profiles, or removing profiles that are no longer needed. Requires agent-level access with appropriate role permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `profile_id` | string | Yes | The Sunshine profile ID of the user profile to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Users

**Slug:** `ZENDESK_DELETE_USERS_DESTROY_MANY`

Bulk delete users from Zendesk by their IDs or external IDs. This action is irreversible — once deleted, users cannot be recovered. Use when cleaning up test data, removing obsolete accounts, or consolidating user records in bulk. The operation returns a job_status payload (initial status typically 'queued'); deletions complete asynchronously and may require follow-up polling via the job_status URL to confirm completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of Zendesk user IDs to delete (max 100). Required if external_ids is not provided. |
| `external_ids` | string | No | Comma-separated list of Zendesk external user IDs to delete (max 100). Required if ids is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk User Session

**Slug:** `ZENDESK_DELETE_USER_SESSION`

Delete a specific user session in Zendesk. Use this action when you need to invalidate and remove a specific user session. This action is irreversible — the session cannot be recovered once deleted. Use when you need to forcibly log out a user or remove a specific session from their account for security or administrative purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user |
| `session_id` | integer | Yes | The ID of the session to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk User's Group Membership

**Slug:** `ZENDESK_DELETE_USERS_GROUP_MEMBERSHIPS`

Permanently deletes a user's group membership in Zendesk, immediately removing a user from a group. This action is irreversible — the group membership cannot be recovered once deleted. Use when cleaning up obsolete group memberships, removing users from groups, or revoking group access. **Note**: Deleting a group membership does not delete the user or the group itself, only the association between them. The user will no longer have access to tickets routed to that group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user whose group membership to delete |
| `group_membership_id` | integer | Yes | The numeric ID of the group membership to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User Identity

**Slug:** `ZENDESK_DELETE_USERS_IDENTITY`

Deletes an identity for a given user in Zendesk. Use when you need to remove a specific identity (e.g., email, phone, social login) from a user's account. This action is irreversible — once the identity is deleted, it cannot be recovered. Ensure you have the correct user_id and user_identity_id before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user |
| `user_identity_id` | integer | Yes | The ID of the user identity to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Authenticated Session

**Slug:** `ZENDESK_DELETE_USERS_ME_LOGOUT`

Delete the current authenticated session in Zendesk. This action invalidates the current API session, requiring re-authentication for future API calls. Use when you need to explicitly log out the current user session or terminate an active authenticated connection. This action is irreversible — the session cannot be recovered once deleted. Note: This action targets the authenticated user's own session only and cannot terminate other user sessions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User's Organization Membership

**Slug:** `ZENDESK_DELETE_USERS_ORGANIZATION_MEMBERSHIPS`

Permanently removes a user from an organization in Zendesk by deleting the organization membership for a specific user. This action is irreversible — the membership cannot be recovered once deleted. Use this action when you need to remove a user's association with an organization for a specific user. This operation requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user |
| `organization_membership_id` | integer | Yes | The ID of the organization membership to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete All User Sessions

**Slug:** `ZENDESK_DELETE_USERS_SESSIONS`

Bulk delete all sessions for a specific user in Zendesk. This action invalidates all active sessions for the specified user, forcing them to re-authenticate on their next API call or login. Use when you need to forcibly log out a user by revoking all their active sessions, such as during security incidents or account deactivation. This action is irreversible — all sessions for the user will be immediately invalidated and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user whose sessions to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User Tags

**Slug:** `ZENDESK_DELETE_USERS_TAGS`

Remove tags from a Zendesk user. Use when you need to clean up user tags, remove outdated labels, or clear all tags from a user account. This action is irreversible — once tags are removed, they cannot be recovered without re-adding them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Comma-separated list of tag names to remove from the user. If not provided, all tags will be removed from the user. |
| `user_id` | integer | Yes | The ID of the user to remove tags from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk View

**Slug:** `ZENDESK_DELETE_VIEW`

Delete a single view in Zendesk. This action is irreversible — the view will be permanently deleted and cannot be recovered once removed. Use when you need to remove a specific obsolete view or test view. Returns 204 No Content on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | integer | Yes | The ID of the view to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk App Installation

**Slug:** `ZENDESK_DELETE_ZENDESK_APP_INSTALLATION`

Permanently removes an installed app from Zendesk. Use when you need to uninstall an app from your Zendesk instance. This action is irreversible — the app installation cannot be recovered once removed. Admin permissions are required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_installation_id` | integer | Yes | The ID of the app installation to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Bookmark

**Slug:** `ZENDESK_DELETE_ZENDESK_BOOKMARK`

Permanently deletes a bookmark in Zendesk. Use when you need to remove a user bookmark. This action is irreversible — the bookmark cannot be recovered once deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bookmark_id` | integer | Yes | The ID of the bookmark to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Custom Object

**Slug:** `ZENDESK_DELETE_ZENDESK_CUSTOM_OBJECT`

Permanently deletes a custom object definition in Zendesk. Use this action when you need to remove a custom object type and all its associated records. This action is irreversible — the custom object and all its data will be permanently deleted and cannot be recovered once removed. Requires admin permissions. **Note**: Deleting a custom object will also delete all records associated with it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of the custom object to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Custom Object Field

**Slug:** `ZENDESK_DELETE_ZENDESK_CUSTOM_OBJECT_FIELD`

Permanently deletes a custom object field in Zendesk. Use this action when you need to remove a specific field from a custom object definition. This action is irreversible — the field and all its data will be permanently deleted and cannot be recovered once removed. Requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of the custom object that contains the field to delete |
| `custom_object_field_key_or_id` | string | Yes | The key or ID of the custom object field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Custom Object Record

**Slug:** `ZENDESK_DELETE_ZENDESK_CUSTOM_OBJECT_RECORD`

Permanently deletes a custom object record in Zendesk. Use this action when you need to remove a specific record from a custom object type. This action is irreversible — the record and its data will be permanently deleted and cannot be recovered once removed. Requires the custom object key and the record ID to identify which specific record to delete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of the custom object containing the record to delete |
| `custom_object_record_id` | string | Yes | The ID of the custom object record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Custom Status

**Slug:** `ZENDESK_DELETE_ZENDESK_CUSTOM_STATUS`

Permanently deletes a custom ticket status in Zendesk. Use this action when you need to remove a custom ticket status from the system. This action is irreversible — the custom status will be permanently deleted and cannot be recovered once removed. **Note**: Ensure no tickets are using this custom status before deletion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_status_id` | integer | Yes | The ID of the custom ticket status to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Dynamic Content Item

**Slug:** `ZENDESK_DELETE_ZENDESK_DYNAMIC_CONTENT_ITEM`

Permanently deletes a dynamic content item in Zendesk. This action is irreversible — the dynamic content item cannot be recovered once deleted. Always confirm the correct dynamic_content_item_id before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Dynamic Content Item Variant

**Slug:** `ZENDESK_DELETE_ZENDESK_DYNAMIC_CONTENT_ITEM_VARIANT`

Permanently deletes a dynamic content item variant in Zendesk. This action is irreversible — the variant cannot be recovered once deleted. Always confirm the correct dynamic_content_item_id and dynamic_content_variant_id before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item containing the variant to delete |
| `dynamic_content_variant_id` | integer | Yes | The ID of the variant to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Custom Object Trigger

**Slug:** `ZENDESK_DELETE_ZENDESK_OBJECT_TRIGGER`

Permanently deletes a custom object trigger in Zendesk. Use this action when you need to remove a specific trigger from a custom object definition. This action is irreversible — the trigger and all its data will be permanently deleted and cannot be recovered once removed. Requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_id` | integer | Yes | The ID of the trigger to delete |
| `custom_object_key` | string | Yes | The key of the custom object that contains the trigger to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Organization

**Slug:** `ZENDESK_DELETE_ZENDESK_ORGANIZATION`

Delete an organization in Zendesk. This operation is irreversible; confirm organization_id and get explicit user confirmation before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | string | Yes | ID of the organization to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Support Address

**Slug:** `ZENDESK_DELETE_ZENDESK_SUPPORT_ADDRESS`

Permanently deletes a support address from Zendesk. This action is irreversible — the support address cannot be recovered once deleted. Use this action when you need to remove a deprecated or unwanted support email address from your Zendesk account. This operation requires admin permissions and the support address must not be set as the default address. Deleting an address that is actively used may impact email routing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `support_address_id` | integer | Yes | The ID of the support address to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk Ticket

**Slug:** `ZENDESK_DELETE_ZENDESK_TICKET`

Permanently deletes a ticket in Zendesk, including its entire conversation history. This action is irreversible; always confirm the correct ticket_id before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | ID of the ticket to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zendesk User

**Slug:** `ZENDESK_DELETE_ZENDESK_USER`

Tool to permanently delete a user from Zendesk. Use when you need to remove a user account. This action cannot be undone and requires appropriate admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Soft-Deleted Zendesk Tickets

**Slug:** `ZENDESK_DESTROY_MANY_DELETED_TICKETS`

Permanently deletes multiple soft-deleted tickets in Zendesk. This action is irreversible — the tickets will be permanently removed and cannot be recovered once executed. Use when cleaning up test tickets or removing obsolete soft-deleted tickets in bulk. The operation returns a job_status payload (initial status typically 'queued'); deletions complete asynchronously and may require follow-up polling to confirm completion. Maximum 100 tickets per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of ticket IDs to permanently delete (max 100). Only soft-deleted tickets can be destroyed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Zendesk Organizations

**Slug:** `ZENDESK_DESTROY_MANY_ORGANIZATIONS`

Bulk delete Zendesk organizations. This action is irreversible - once organizations are deleted, they cannot be recovered. Use when you need to remove multiple organizations in a single operation. Returns a job_status payload (initial status typically 'queued'); deletions complete asynchronously and may require follow-up polling to confirm completion. Maximum 100 organizations per request. Use this action when you need to clean up test data, remove obsolete organizations, or perform bulk organization deletions. You must provide either 'ids' (comma-separated list of Zendesk organization IDs) or 'external_ids' (comma-separated list of external IDs).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of Zendesk organization IDs to delete (max 100). Required if external_ids is not provided. |
| `external_ids` | string | No | Comma-separated list of Zendesk external organization IDs to delete (max 100). Required if ids is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detect Best Locale

**Slug:** `ZENDESK_DETECT_BEST_LOCALE`

Detect the best language/locale for the current user based on their browser settings and account preferences. Use when you need to determine the optimal language to display content in for a user, such as when localizing ticket comments, article content, or Help Center pages. This action reads the user's preferred languages from the Accept-Language header and matches them against supported locales in your Zendesk account. The detected locale is returned with full locale details including ID, name, and API URL.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Attachment

**Slug:** `ZENDESK_DOWNLOAD_ATTACHMENT`

Download the file bytes for one Zendesk ticket attachment ID. Zendesk attachment IDs first resolve to metadata. This action then downloads the provider-issued content URL and returns the file for use by other tools.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | string | Yes | The attachment ID from a Zendesk ticket comment, as a string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Custom Object Record Attachment

**Slug:** `ZENDESK_DOWNLOAD_CUSTOM_OBJECT_RECORD_ATTACHMENT`

Download attachment file from a Zendesk custom object record. Use when you need to retrieve the actual file content of an attachment associated with a custom object record, such as documents, images, or other files. This action returns the raw file content and can display it inline or trigger a file download depending on the inline parameter. Note: The custom object must have attachments enabled for this action to work.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The id of a custom object record attachment. You can find attachment IDs in the custom object record's attachment list. |
| `inline` | boolean | No | If true, the attachment content is displayed inline in the browser (e.g., for viewing images). If false or omitted, the attachment is downloaded as a file. |
| `record_id` | string | Yes | The id of a custom object record. You can find record IDs by listing or searching custom object records. |
| `custom_object_key` | string | Yes | The key of a custom object. You can find custom object keys by listing custom objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk About Me

**Slug:** `ZENDESK_GET_ABOUT_ME`

Get information about the currently authenticated user in Zendesk. Returns only the caller's own account; to look up other users, use ZENDESK_SEARCH_ZENDESK_USERS. Response nests the user object under data.owner_info.user. Useful for verifying the acting user's identity and permissions before performing bulk operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Settings

**Slug:** `ZENDESK_GET_ACCOUNT_SETTINGS`

Retrieve Zendesk account settings. Use this action when you need to view the configuration and feature flags for a Zendesk account, including API settings, branding, ticket preferences, chat configuration, voice settings, and more.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authenticity_token` | string | No | Legacy CSRF token. Ignored by API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Active Triggers

**Slug:** `ZENDESK_GET_ACTIVE_TRIGGERS`

List all active ticket triggers in Zendesk. Use when you need to retrieve the currently active trigger rules that automatically perform actions on tickets when certain conditions are met. This action returns all triggers marked as active, including their conditions, actions, and metadata. Active triggers are business rules that define what happens when ticket conditions are satisfied. This is useful for auditing active automation rules, understanding automated workflows, or finding specific trigger configurations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `sort` | string | No | Cursor-based pagination only. Possible values are 'alphabetical', 'created_at', 'updated_at', or 'position'. |
| `sort_by` | string | No | Offset pagination only. Possible values are 'alphabetical', 'created_at', 'updated_at', 'usage_1h', 'usage_24h', or 'usage_7d'. Defaults to 'position' |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the active-triggers endpoint. |
| `sort_order` | string | No | One of 'asc' or 'desc'. Defaults to 'asc' for alphabetical and position sort, 'desc' for all others |
| `category_id` | string | No | Filter triggers by category ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Activities

**Slug:** `ZENDESK_GET_ACTIVITIES_COUNT`

Count ticket activities in Zendesk. Returns an approximate count of ticket activities. Use when you need to know how many activities exist in the activity stream for reporting or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Organizations

**Slug:** `ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS`

Get all organizations in Zendesk. Returns results nested under an 'organizations' array; an empty list is valid. Accepts no server-side filters — all filtering by name, domain_names (an array field), or organization_fields must be done client-side. Large accounts require pagination; missing pages will undercount results. Multiple organizations may share similar names or domains — always disambiguate using external_id or domain_names and confirm organization_id before acting. Avoid repeated full-list fetches on large accounts; cache or batch client-side instead.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App

**Slug:** `ZENDESK_GET_APP`

Get a single Zendesk app by its numeric ID. Use when you have an app ID and need to retrieve the app's details including name, author information, version, installation count, categories, and description.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | integer | Yes | The numeric ID of the Zendesk app to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Installation Requirements

**Slug:** `ZENDESK_GET_APPS_INSTALLATIONS_REQUIREMENTS`

List all requirements for a Zendesk app installation. Use when you need to check what configuration or parameters are required for a specific installed app to function properly. Requirements may include OAuth settings, parameter configurations, or other setup steps needed by the app. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_installation_id` | integer | Yes | The numeric ID of the app installation to retrieve requirements for. You can find this ID from the app installations list or when working with specific app installations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Location

**Slug:** `ZENDESK_GET_APPS_LOCATION`

Get details for a specific Zendesk app location by its numeric ID. Returns location properties including visibility settings, orderability, and associated product codes. Use when you have an app_location_id from listing locations or creating apps and need to retrieve detailed location information. Only accessible to admin users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_location_id` | integer | Yes | The numeric ID of the app location to retrieve. This is the internal location ID returned by Zendesk when listing or creating app locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Apps Location Installations

**Slug:** `ZENDESK_GET_APPS_LOCATION_INSTALLATIONS`

List all apps location installations from Zendesk. Returns an array of app installation IDs organized by location name. Use when you need to retrieve information about apps installed in specific locations within Zendesk, such as nav_bar or other supported locations. This action is read-only and idempotent. Allowed for: Admins only.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Public Key

**Slug:** `ZENDESK_GET_APPS_PUBLIC_KEY`

Retrieves the public key for a specific Zendesk app. The response is in JSON Web Key (JWK) format containing RSA key components (modulus n, exponent e). Use this action when you need to verify JWTs issued by a Zendesk app or establish trust for app-based authentication. This is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | integer | Yes | The numeric ID of the Zendesk app whose public key you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Public Key PEM

**Slug:** `ZENDESK_GET_APPS_PUBLIC_KEY_PEM`

Retrieves the public key for a specific Zendesk app in PEM format. The PEM format is a standard base64-encoded certificate format that can be used to verify that requests from the app are legitimate. Use this action when you need to verify JWTs issued by a Zendesk app or establish trust for app-based authentication. This is a read-only operation. Note: This endpoint does not require authentication and can be accessed anonymously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | integer | Yes | The numeric ID of the Zendesk app whose public key in PEM format you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment

**Slug:** `ZENDESK_GET_ATTACHMENT`

Retrieve details of a single Zendesk attachment by its ID. Use when you have an attachment_id from ticket comments or an attachments list and need to fetch full attachment metadata including file name, size, content type, URLs, and thumbnails. The action returns the attachment object with all available properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | integer | Yes | The numeric ID of the attachment to retrieve. You can find attachment IDs in ticket comments or via the attachments list endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Autocomplete Tags

**Slug:** `ZENDESK_GET_AUTOCOMPLETE_TAGS`

Search for Zendesk tags using autocomplete. Use when you need to find tag suggestions based on a partial tag name for tagging tickets or organizing content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A substring of a tag name to search for. The API returns registered and recent tags matching this substring. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Automation

**Slug:** `ZENDESK_GET_AUTOMATION`

Show a specific automation by its ID. Use when you need to retrieve details of a single automation rule in your Zendesk account, such as for auditing, modifying, or understanding what actions and conditions are configured for a particular automation. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `automation_id` | integer | Yes | The ID of the automation to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Automations

**Slug:** `ZENDESK_GET_AUTOMATIONS`

List all automations for the current Zendesk account. Use when you need to retrieve, audit, or review the automation rules configured in your Zendesk account. Automations are business rules that automatically perform actions based on trigger conditions. Supports both traditional offset pagination and cursor-based pagination. Filter by active status to show only enabled or disabled automations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. Example: `?sort=name` or `?sort=-created_at` |
| `active` | boolean | No | Filter by active automations if true or inactive automations if false |
| `include` | string | No | A sideload to include in the response. See Zendesk API documentation for available sideloads. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Automations

**Slug:** `ZENDESK_GET_AUTOMATIONS_SEARCH`

Search for Zendesk automations by their title. Use when you need to find automations in your Zendesk account by searching for keywords in their titles. Automations are business rules that automatically perform actions when certain conditions are met. This action supports filtering by active status and sorting results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Query string used to find all automations with matching title. Case-insensitive partial match on automation titles. |
| `active` | boolean | No | Filter automations by active status. Set to true to return only active automations, or false to return only inactive automations. When not specified, returns both active and inactive automations. |
| `include` | string | No | Sideload related data to include in the response. Currently supported: 'usage_24h' returns statistics about how many times each automation was triggered in the last 24 hours. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "position") | No | Field to sort results by. Options: 'alphabetical' (sorts A-Z), 'created_at' (by creation date), 'updated_at' (by last modification), 'position' (by dashboard position). If unspecified, automations are sorted by relevance to the query. |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. Options: 'asc' (ascending) or 'desc' (descending). Defaults to 'asc' for alphabetical and position sorts, 'desc' for created_at and updated_at sorts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Brands

**Slug:** `ZENDESK_GET_BRANDS`

List all brands configured in your Zendesk account. Use when you need to enumerate available brands, check which brand is set as default, or retrieve brand metadata like subdomain and host mappings. This is a read-only, idempotent operation that supports both cursor and offset pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `page_size` | integer | No | Number of brands to return per page (cursor pagination). Sent as the 'page[size]' query parameter. |
| `page_after` | string | No | Cursor for the next page of results (cursor pagination). Use the value from the previous response's 'links.next' URL. Sent as the 'page[after]' query parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Brand

**Slug:** `ZENDESK_GET_BRANDS2`

Show a Brand. Use when you have a brand ID and need to retrieve detailed information about a specific Zendesk brand, including its name, subdomain, active status, Help Center configuration, logo, and associated ticket forms.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `brand_id` | integer | Yes | The numeric ID of the brand to retrieve. This is the brand ID returned from list brands operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Agents by Brand

**Slug:** `ZENDESK_GET_BRANDS_AGENTS`

List agents assigned to a specific brand in Zendesk. Use when you need to enumerate which agents have access to a specific brand, such as auditing brand access permissions or determining which agents can access a brand's help center. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `brand_id` | integer | Yes | The ID of the brand to list agents for. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Object Fields Limit

**Slug:** `ZENDESK_GET_CUSTOM_OBJECT_FIELDS_LIMIT`

Get the current count and maximum limit for custom object fields in Zendesk. Returns the number of fields currently defined for a specific custom object and the maximum allowed limit. Use when you need to check how many fields have been created for a custom object and how much capacity remains before hitting the limit. This is a read-only operation that does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Object Records Limit

**Slug:** `ZENDESK_GET_CUSTOM_OBJECT_RECORDS_LIMIT`

Get the current record limit and usage count for custom objects in Zendesk. Returns the current number of custom object records and the maximum allowed limit. Use when you need to check how many custom object records have been created and how much capacity remains. This is a read-only operation that does not modify any data.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Objects Limit

**Slug:** `ZENDESK_GET_CUSTOM_OBJECTS_LIMIT`

Get the current count and maximum limit for custom objects in Zendesk. Use when you need to check how many custom objects exist in your Zendesk account and what the allowed limit is, to avoid exceeding capacity or to plan for scaling.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Status

**Slug:** `ZENDESK_GET_CUSTOM_STATUS`

Get a specific custom ticket status from Zendesk by its ID. Use when you have a custom status ID from ticket payloads or from listing custom statuses and need to retrieve the full status details including agent/end-user labels, descriptions, and status category. This is a read-only, idempotent operation that retrieves the current state of a custom ticket status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_status_id` | integer | Yes | The numeric ID of the custom status to retrieve. This is the custom status ID found in ticket payloads or from listing custom statuses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Ticket Statuses

**Slug:** `ZENDESK_GET_CUSTOM_STATUSES`

List custom ticket statuses available in a Zendesk account. Use when you need to retrieve all undeleted custom ticket statuses, optionally filtered by status category, active state, or default status. This action is useful for understanding available custom statuses for ticket workflows, automation rules, or displaying status options to users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | If true, show only active custom ticket statuses. If false, show only inactive custom ticket statuses. If the filter is not used, show all custom ticket statuses. |
| `default` | boolean | No | If true, show only default custom ticket statuses. If false, show only non-default custom ticket statuses. If the filter is not used, show all custom ticket statuses. |
| `status_categories` | string | No | Filter the list of custom ticket statuses by a comma-separated list of status categories. Example: 'new,open,pending' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deleted Tickets

**Slug:** `ZENDESK_GET_DELETED_TICKETS`

Lists tickets that have been deleted from Zendesk, showing up to 100 deleted tickets per page with pagination. Use when you need to retrieve information about previously deleted tickets or audit ticket deletions. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: ?page=2 (integer page number). Cursor: ?page[size]=50&page[after]=cursor (deepObject with size, after, before). These are mutually exclusive. |
| `sort_by` | string ("id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name") | No | Sort field options for deleted tickets. |
| `per_page` | integer | No | Number of records to return per page (max 100). Default and maximum values vary by endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options. |
| `support_type_scope` | string ("all" | "agent" | "ai_agent") | No | Support type scope options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deleted User

**Slug:** `ZENDESK_GET_DELETED_USER`

Retrieves a single deleted Zendesk user by their ID. Use when you have a specific deleted user ID and need to fetch details about that deleted user, such as for auditing purposes, account recovery, or compliance records. Deleted users retain their associated tickets and historical data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deleted_user_id` | integer | Yes | The numeric ID of the deleted user to retrieve. You can find this from the deleted users list endpoint or from previous user search results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deletion Schedule

**Slug:** `ZENDESK_GET_DELETION_SCHEDULE`

Retrieve a specific deletion schedule from Zendesk by its ID. Use this action when you need to get the details of a particular deletion schedule, including its title, description, active status, object type, conditions, and creation/update timestamps. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deletion_schedule_id` | integer | Yes | The unique ID of the deletion schedule to retrieve. Must be a non-negative integer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deletion Schedules

**Slug:** `ZENDESK_GET_DELETION_SCHEDULES`

List all deletion schedules for the current Zendesk account. Use when you need to retrieve, audit, or review the deletion schedule rules configured in your Zendesk account. Deletion schedules define automated data retention policies that periodically remove specified entity types based on configured conditions. Only Zendesk admins can access this endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Dynamic Content Items

**Slug:** `ZENDESK_GET_DYNAMIC_CONTENT_ITEMS`

List all dynamic content items configured in your Zendesk account. Use when you need to enumerate available dynamic content items, check variants for localization, or retrieve metadata about placeholder values for dynamic content. This is a read-only, idempotent operation that supports both cursor and offset pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional using `?page=2` (integer page number), or cursor using `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Dynamic Content Item

**Slug:** `ZENDESK_GET_DYNAMIC_CONTENT_ITEM_SHOW`

Show a specific dynamic content item by its ID. Use when you have a dynamic content item ID and need to retrieve its details, including name, default locale, placeholder value, variants, and creation/update timestamps. This is a read-only, idempotent operation that returns a single dynamic content item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Dynamic Content Items

**Slug:** `ZENDESK_GET_DYNAMIC_CONTENT_ITEMS_SHOW_MANY`

Retrieve multiple dynamic content items by their identifiers. Use when you have specific dynamic content item IDs or names and need to fetch their metadata including placeholder, default locale, variants, and outdated status. This is a read-only, idempotent operation. The 'identifiers' parameter accepts comma-separated values; omit it to retrieve all items (use with caution on accounts with many items).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the dynamic-content-items endpoint. |
| `identifiers` | string | No | Comma-separated list of dynamic content item identifiers to retrieve. Each identifier can be an item ID or name. If not provided, returns all items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Dynamic Content Variants

**Slug:** `ZENDESK_GET_DYNAMIC_CONTENT_ITEMS_VARIANTS`

List all variants of a specific Zendesk dynamic content item. Use when you need to retrieve all locale variants for a dynamic content item to view, manage, or update the localized content. Variants represent the same content in different locales/languages. Supports pagination and sorting parameters. This action is read-only and idempotent — calling it multiple times with the same parameters will return the same results without side effects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. Example: `?sort=name` or `?sort=-created_at` |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item whose variants to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Dynamic Content Item Variant

**Slug:** `ZENDESK_GET_DYNAMIC_CONTENT_ITEM_VARIANT`

Show a specific variant of a dynamic content item in Zendesk. Use when you have a dynamic_content_item_id and dynamic_content_variant_id and need to retrieve the variant's details including its content, locale, active status, and timestamps. This is a read-only operation. Dynamic content items allow you to create reusable content that can be localized into multiple variants for different languages or contexts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item |
| `dynamic_content_variant_id` | integer | Yes | The ID of the variant |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Notification

**Slug:** `ZENDESK_GET_EMAIL_NOTIFICATION`

Retrieve details of a single email notification in Zendesk by its notification ID. Use when you have a notification_id from ticket audit logs or email notifications list and need to fetch full notification details including recipients, delivery status, and associated ticket/comment information. This action is useful for tracking email delivery status and troubleshooting email notification issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notification_id` | integer | Yes | The numeric ID of the email notification to retrieve. You can find notification IDs from ticket audit logs or email notification list responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Notifications

**Slug:** `ZENDESK_GET_EMAIL_NOTIFICATIONS`

List email notifications from Zendesk. Use this action when you need to retrieve email notification records filtered by ticket, comment, or notification ID. The filter parameter is required to specify which type of ID to filter by. Returns delivery status information for each recipient including any delivery failures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field to sort by: 'created_at', 'updated_at' (ascending) or '-created_at', '-updated_at' (descending) |
| `per_page` | integer | No | Number of email notifications to return per page (max 100) |
| `filter_ticket_id` | integer | No | Filter email notifications by ticket ID |
| `filter_comment_id` | integer | No | Filter email notifications by comment ID |
| `filter_notification_id` | integer | No | Filter email notifications by notification ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Email Notifications

**Slug:** `ZENDESK_GET_EMAIL_NOTIFICATIONS_SHOW_MANY`

Show details of many email notifications in Zendesk. Use when you need to retrieve multiple email notifications at once by their IDs, associated comment IDs, or associated ticket IDs. At least one of the filter parameters (ids, comment_ids, or ticket_ids) is required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of email notification IDs to retrieve. One of ids, comment_ids, or ticket_ids is required. |
| `ticket_ids` | string | No | Comma-separated list of ticket IDs to filter email notifications by. One of ids, comment_ids, or ticket_ids is required. |
| `comment_ids` | string | No | Comma-separated list of comment IDs to filter email notifications by. One of ids, comment_ids, or ticket_ids is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List End User Identities

**Slug:** `ZENDESK_GET_END_USER_IDENTITIES`

Tool to list all identities associated with a specific end user. Use when you need to retrieve the email addresses and/or phone numbers linked to an end user account. Supports optional filtering by identity type (email, phone_number).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (Zendesk returns up to 100 identities per page). |
| `user_id` | integer | Yes | The numeric ID of the end user whose identities to retrieve |
| `per_page` | integer | No | Number of identities per page (max 100 per Zendesk offset pagination). |
| `page_size` | integer | No | Records per page for cursor pagination (sent as page[size], max 100). |
| `type_list` | array | No | Filter results by one or more identity types. Use to filter for 'email' or 'phone_number' identities. When multiple types are provided, identities matching any of the types are returned. |
| `page_after` | string | No | Cursor for forward cursor pagination (sent as page[after]). |
| `page_before` | string | No | Cursor for backward cursor pagination (sent as page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get End User Identity

**Slug:** `ZENDESK_GET_END_USER_IDENTITY`

Tool to fetch a specific end user identity by user ID and identity ID. Use when you need to retrieve detailed information about a particular user identity in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the end user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Group Membership

**Slug:** `ZENDESK_GET_GROUP_MEMBERSHIP`

Get a group membership by its unique ID. Use when you have a group membership ID and need to retrieve details including the associated group, user, and timestamps. Note: The group_membership_id parameter is the membership ID, not a group ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_membership_id` | integer | Yes | The numeric ID of the group membership to retrieve. Note: This is the group membership ID, not a group ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Group Memberships

**Slug:** `ZENDESK_GET_GROUP_MEMBERSHIPS`

List all group memberships in your Zendesk account. Group memberships link users to groups, determining which agents belong to which support groups. Use when you need to audit group assignments, manage team memberships, or enumerate the relationship between users and groups. This action supports both offset pagination (page, per_page) and cursor pagination (page_size, page_after, page_before). It also supports sideloading related users and groups via the include parameter. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor`. These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `include` | string | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: `users`, `groups`. |
| `per_page` | integer | No | Number of records to return per page. |
| `page_size` | integer | No | Number of records per page for cursor pagination. Use with page_after or page_before. |
| `page_after` | string | No | Cursor for fetching the next page in cursor pagination. Use with page_size. |
| `page_before` | string | No | Cursor for fetching the previous page in cursor pagination. Use with page_size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Memberships By Group

**Slug:** `ZENDESK_GET_GROUP_MEMBERSHIPS_BY_GROUP`

List group memberships for a specific Zendesk group. Use when you need to retrieve all members assigned to a particular group, audit group membership, or understand which users belong to a specific support group. This action is read-only and idempotent. Supports both offset pagination (page, per_page) and cursor pagination (page_size, page_after, page_before). Also supports sideloading users and groups via the include parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=user_id` or `?sort=-created_at` |
| `include` | string | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: `users`, `groups`. |
| `group_id` | integer | Yes | The numeric ID of the group to retrieve memberships for. This is the group ID, not a membership ID. |
| `per_page` | integer | No | Number of records to return per page (max 100). |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use with page_after. Cannot be used with offset pagination. |
| `page_after` | string | No | Cursor for fetching next page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |
| `page_before` | string | No | Cursor for fetching previous page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assignable Groups

**Slug:** `ZENDESK_GET_GROUPS_ASSIGNABLE`

List all groups that can be assigned to tickets or users in your Zendesk account. Use when you need to enumerate available groups for assignment operations, check group availability, or retrieve group metadata. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `per_page` | integer | No | Number of records to return per page (max 100). Default and maximum values vary by endpoint. |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use this for large datasets. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's 'next_page' or cursor. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's 'prev' or cursor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Groups

**Slug:** `ZENDESK_GET_GROUPS_COUNT`

Count groups in Zendesk. Returns an approximate count of groups in the system. Use when you need to know how many groups exist for reporting, organizational management, or operational purposes. This action is read-only and idempotent.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Users by Group

**Slug:** `ZENDESK_GET_GROUPS_USERS_COUNT`

Count users in a specific Zendesk group. Returns an approximate count of users belonging to the specified group, with optional filtering by role or permission set. Use when you need to know how many users are in a particular group for reporting, resource planning, or administrative purposes. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string ("end-user" | "agent" | "admin") | No | User role values for filtering. |
| `group_id` | integer | Yes | The numeric ID of the group whose users will be counted. This is the group ID from the Groups API. |
| `role_list` | array | No | Filter the results by more than one role. Provide a list of roles to include users matching any of them. |
| `permission_set` | integer | No | Filter by custom role ID (Enterprise plan and above). Only one role ID per request is allowed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Group Users

**Slug:** `ZENDESK_GET_GROUP_USERS`

List all users belonging to a specific Zendesk group. Use when you need to retrieve all members of a particular group, with optional filtering by user role, permission set, or external ID. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `role` | string ("end-user" | "agent" | "admin") | No | Filter results by a single role. Use 'end-user', 'agent', or 'admin'. |
| `group_id` | integer | Yes | The numeric ID of the group. Users belonging to this group will be returned. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the group users endpoint. |
| `role_list` | array | No | Filter results by multiple roles. Provide a list of roles to include users matching any of them. |
| `external_id` | string | No | Filter by external ID. Must be unique per user under the same account. |
| `permission_set` | integer | No | Filter by custom role ID (Enterprise plan only). Only one role ID per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Guide Survey Responses

**Slug:** `ZENDESK_GET_GUIDE_SURVEY_RESPONSES`

List survey responses from Zendesk Guide. Use when you need to retrieve CSAT survey responses, analyze customer satisfaction scores, or monitor survey completion rates. Survey responses are available on Support Professional plan and above, and Zendesk Suite Growth plan and above. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("id" | "-id") | No | Sort order for survey responses. Use 'id' for ascending or '-id' for descending order. |
| `page_size` | integer | No | Number of survey responses to return per page (max 100). |
| `page_after` | string | No | Cursor to retrieve the next page of results. Use the 'after_cursor' value from a previous response. |
| `page_before` | string | No | Cursor to retrieve the previous page of results. Use the 'before_cursor' value from a previous response. |
| `filter_subject_zrns` | array | No | Filter survey responses by subject Zendesk Resource Names (ZRNs). Format: 'zen:ticket:123' for tickets. Example: ['zen:ticket:1', 'zen:ticket:2'] |
| `filter_responder_ids` | array | No | Filter survey responses by responder user IDs. Pass a list of user IDs to only include responses from these users. |
| `filter_created_at_end` | string | No | Filter survey responses created on or before this date. Use ISO 8601 format (e.g., '2024-01-15T23:59:59Z'). |
| `filter_created_at_start` | string | No | Filter survey responses created on or after this date. Use ISO 8601 format (e.g., '2024-01-15T00:00:00Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Guide Surveys

**Slug:** `ZENDESK_GET_GUIDE_SURVEYS`

List available CSAT (Customer Satisfaction) surveys in Zendesk Guide. Use when you need to retrieve survey definitions, check which surveys are enabled/disabled, or get survey questions and versions. The response includes survey IDs, states, creation timestamps, and question arrays. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | Yes | The locale used for the display of the corresponding survey questions and options. Example: 'en-us', 'fr-fr', 'de-de' |
| `page_size` | integer | No | Number of surveys to return per page (max 100). Use for paginating through large result sets. |
| `page_after` | string | No | Cursor for pagination to retrieve the next page of results. Obtain from previous response's next_page link. |
| `filter_types` | string | No | A comma-separated list of survey types to filter the results. Common types include 'csat' for customer satisfaction surveys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Organizations

**Slug:** `ZENDESK_GET_INCREMENTAL_ORGANIZATIONS`

Retrieve organizations that have been modified since a specified start time using the Incremental Organization Export API. Use when you need to sync or track changes to Zendesk organizations over time. Provide a start_time (Unix timestamp) from a previous response's end_time to paginate through changes incrementally. This action is read-only and idempotent. Organizations may be created, updated, or appear as deleted; interpret based on your use case. Rate limiting may apply for large accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of records to return per page (max 100). Default varies by API tier. |
| `start_time` | integer | Yes | Unix timestamp (seconds since epoch) to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. Use the end_time from a previous response for subsequent pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Incremental Routing Attributes Export

**Slug:** `ZENDESK_GET_INCREMENTAL_ROUTING_ATTRIBUTES`

Export routing attributes incrementally with optional start_time filtering and cursor-based pagination. Use when you need to retrieve all skill-based routing attributes (attributes, attribute values, and instance values) that have changed in your Zendesk account. This is a read-only operation that returns a stream of changes; it does not include data from the most recent minute. For large datasets, use cursor-based pagination with the after_cursor value from responses. This action is read-only and idempotent — calling it multiple times with the same start_time returns the same results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | The cursor pointer for pagination. Use the after_cursor value from a previous response to fetch subsequent pages of records. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum is 1000. |
| `start_time` | integer | No | The Unix timestamp to start the incremental export from. The result set includes only records created at or after this time. If not specified, returns records from the beginning of time. Note: Data isn't provided for the most recent minute. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Routing Attribute Values

**Slug:** `ZENDESK_GET_INCREMENTAL_ROUTING_ATTRIBUTE_VALUES`

Retrieve routing attribute values that have been modified since a specified start time using the Incremental Skill-Based Routing API. Use when you need to sync or track changes to routing attributes, values, and their associations over time. Provide a start_time (Unix timestamp) and the API returns all attribute values modified since that time. Call repeatedly with the end_time from each response to paginate through all changes. This action is read-only and idempotent. Note: Data isn't available for the most recent minute due to eventual consistency. Attribute values may appear as modified; interpret based on your use case.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | A non-human-readable cursor for pagination. Use the next_page URL from a previous response to move forward through results. The cursor is read-only and only available in API responses. |
| `per_page` | integer | No | Number of records to return per page (max 3000). |
| `start_time` | integer | Yes | Unix timestamp (seconds since epoch) marking the start of the incremental export window. Must be at least one minute in the past. Data isn't provided for the most recent minute. Use the end_time from a previous response for subsequent pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export Incremental Routing Instance Values

**Slug:** `ZENDESK_GET_INCREMENTAL_ROUTING_INSTANCE_VALUES`

Export incremental routing instance values from Zendesk skill-based routing. Returns a stream of changes that occurred on routing attributes, attribute values, and instance values. Use this action when you need to synchronize routing configuration data or monitor changes to skill-based routing assignments. This action is read-only and supports cursor-based pagination with a maximum of 3000 records per page. Stop paging when the count is 0. Note: The cursor parameter is read-only and should only be obtained from API responses, not manually constructed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | A non-human-readable cursor to move forward or backward in time for pagination. Read-only and only available in API responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Sample Export

**Slug:** `ZENDESK_GET_INCREMENTAL_SAMPLE`

Test the incremental export by retrieving a sample of records that have changed since a specified start time. Use this action to verify your incremental export setup before running full exports. Use when you need to test the incremental export functionality for a specific resource type (e.g., tickets, users, organizations). The sample export returns a limited set of records that can help you validate data retrieval before implementing full sync operations. Note that data isn't provided for the most recent minute, and the start_time must be at least one minute in the past.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of records to return per page (max 100). |
| `start_time` | integer | Yes | The Unix timestamp (seconds since epoch) to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. |
| `incremental_resource` | string | Yes | The incremental resource to sample. Supported values include 'tickets', 'users', 'organizations', and other incremental export types available in the Zendesk API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Ticket Events

**Slug:** `ZENDESK_GET_INCREMENTAL_TICKET_EVENTS`

Export incremental ticket events from Zendesk. Use when you need to track changes to tickets over time, monitor agent performance metrics, or sync ticket event data with an external system. This action returns a stream of ticket metric events (like agent work time, reply times) that occurred after the specified start_time. Call repeatedly with the end_time from each response to continue exporting events. Data isn't available for the most recent minute due to eventual consistency. Note: This is a read-only, idempotent operation. The start_time must be at least one minute in the past.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include` | string | No | Sideloads to include in the response. Accepts a comma-separated list of values. Supports 'comment_events' to include full comment data in the response. |
| `start_time` | integer | Yes | The time to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute due to eventual consistency delays. |
| `support_type_scope` | string ("all" | "agent" | "ai_agent") | No | Scope for filtering tickets by support type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Metric Events

**Slug:** `ZENDESK_GET_INCREMENTAL_TICKET_METRIC_EVENTS`

List ticket metric events in Zendesk that occurred on or after a specified time. This action supports incremental data export — use the end_time from one response as the start_time for the next request to retrieve subsequent events. This action is read-only and idempotent — use it to monitor ticket metrics, track SLA compliance, or build analytics dashboards. Note: deleted tickets can create orphan metric events; use exclude_deleted=true to filter these out.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 1000 records per page for incremental exports. |
| `per_page` | integer | No | Number of records per page (max 1000 for incremental exports). |
| `start_time` | integer | Yes | The Unix UTC epoch time of the oldest event you're interested in. Only events that occurred on or after this time are returned. Example: 1332034771. |
| `exclude_deleted` | boolean | No | When true, excludes ticket metric events for deleted tickets. Use this to avoid receiving events for tickets that have been deleted. |
| `include_changes` | boolean | No | This optional parameter enhances incremental data retrieval, delivering a consistent and accurate representation of data changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Tickets

**Slug:** `ZENDESK_GET_INCREMENTAL_TICKETS`

Retrieve tickets that have been modified since a specified start time using the Incremental Ticket Export API. Use when you need to sync or track changes to Zendesk tickets over time, build audit trails, or implement incremental backups. Provide a start_time (Unix timestamp) from a previous response's end_time to paginate through changes incrementally. This action is read-only and idempotent. Tickets may be created, updated, or appear as changed; interpret based on your use case. Rate limiting may apply for large accounts. Note: Data isn't provided for the most recent minute.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of tickets to return per page (max 1000). Default varies by API tier. |
| `start_time` | integer | Yes | Unix timestamp (seconds since epoch) to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. Use the end_time from a previous response for subsequent pagination. |
| `support_type_scope` | string ("all" | "agent" | "ai_agent") | No | Filter tickets by support type. Possible values are 'all', 'agent', or 'ai_agent'. Defaults to 'agent'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Tickets (Cursor)

**Slug:** `ZENDESK_GET_INCREMENTAL_TICKETS_CURSOR`

Export tickets incrementally using cursor-based pagination. Use this action when you need to retrieve all changes to tickets since a specific time, with support for large result sets through cursor-based pagination. The start_time parameter is required for the initial request; subsequent pages use the cursor returned in previous responses. Use when you need to sync ticket data from Zendesk, maintaining a real-time or near-real-time copy of ticket information. This is ideal for data synchronization, backup systems, or analytics pipelines that need to process all ticket changes over time. The action automatically handles pagination by providing cursor tokens in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | The cursor pointer for pagination. Use the after_cursor value from a previous response to fetch subsequent pages of tickets. |
| `start_time` | integer | No | The Unix timestamp (seconds since epoch) to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. Required on the initial export request; not required on subsequent cursor-based pagination requests. |
| `support_type_scope` | string | No | Filter tickets by support type. Possible values are 'all', 'agent', or 'ai_agent'. Defaults to 'agent'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Incremental Users

**Slug:** `ZENDESK_GET_INCREMENTAL_USERS`

Retrieve users that have been modified since a specified start time using the Incremental User Export API. Use when you need to sync or track changes to Zendesk users over time, such as for data warehousing, backup, or external system synchronization. Provide a start_time (Unix timestamp) and the API returns users that have been created, updated, or deleted since that time. Call repeatedly with the end_time from each response to paginate through all changes. This action is read-only and idempotent. Note: Data isn't available for the most recent minute due to eventual consistency. Users may appear as modified or deleted; interpret based on your use case.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | The number of records to return per page (max 100). |
| `start_time` | integer | Yes | The Unix timestamp (seconds since epoch) to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. Use the end_time from a previous response for subsequent pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Incremental User Export (Cursor)

**Slug:** `ZENDESK_GET_INCREMENTAL_USERS_CURSOR`

Export users incrementally using cursor-based pagination. Use when you need to export all users from Zendesk in a reliable, paginated manner. The start_time parameter is required for the initial request to define the time range. Subsequent requests use the cursor returned in previous responses to fetch the next batch of records. This action is ideal for: - Full user data synchronization to external systems - Regular incremental backups of user data - Building user directories with pagination support Note: Data from the most recent minute is not included to ensure consistency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | The cursor pointer to work with for all subsequent exports after the initial request. Use the cursor returned in the previous response to paginate through all records. |
| `per_page` | integer | No | The number of records to return per page (max 100). |
| `start_time` | integer | No | The time to start the incremental export from. Must be at least one minute in the past. Data isn't provided for the most recent minute. Required on the initial export request; not required on subsequent cursor-based pagination requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Job Statuses

**Slug:** `ZENDESK_GET_JOB_STATUSES`

List job statuses from Zendesk. Shows the status of all background jobs that have been initiated, including those created by bulk operations like bulk updates, imports, or exports. Each job status includes progress information, completion status, and any results from individual tasks. Use this action to track the progress of long-running operations or check if background tasks completed successfully. Use this action when you need to check the status of background jobs, monitor bulk operation progress, or verify that asynchronous tasks have finished processing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Default varies by endpoint. |
| `page_after` | string | No | Cursor token to fetch records after this position. Use the 'after_cursor' value from a previous response to get the next page. |
| `page_before` | string | No | Cursor token to fetch records before this position. Use the 'before_cursor' value from a previous response to get the previous page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Job Status

**Slug:** `ZENDESK_GET_JOB_STATUSES2`

Get a single job status by ID from Zendesk. Shows the status of a background job initiated by bulk operations (like bulk updates, imports, or exports). The response includes progress information, completion status, and any results from individual tasks. Use this action when you have a job_status_id from a previously queued bulk operation and need to check if it completed successfully, failed, or is still processing. Check the 'status' field for the current state ('queued', 'working', 'completed', 'failed') and the 'results' array for individual task outcomes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_status_id` | string | Yes | The unique identifier of the job status to retrieve. This is the job ID returned when a bulk operation was queued. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Locale

**Slug:** `ZENDESK_GET_LOCALE`

Get a locale by its ID or BCP-47 code. Use when you need to retrieve details about a specific locale including the locale identifier, language name, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale_id` | string | Yes | The ID or the BCP-47 code of the locale. Examples: es-419, en-us, pr-br, or numeric ID like 1 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Locales

**Slug:** `ZENDESK_GET_LOCALES`

List all translation locales available for your Zendesk account. Use when you need to retrieve the available locales for translation purposes, check which languages are enabled, or get locale metadata including the locale code, display name, and creation timestamps. This is a read-only, idempotent operation that supports pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. |
| `per_page` | integer | No | Number of records to return per page (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Agent Locales

**Slug:** `ZENDESK_GET_LOCALES_AGENT`

List the translation locales that have been localized for agent use. Use when you need to discover which locales are available for agents to work with in multilingual support scenarios. This is a read-only, idempotent operation that requires no parameters.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current Locale

**Slug:** `ZENDESK_GET_LOCALES_CURRENT`

Show the current locale for a Zendesk account. Use when you need to determine what language/locale is currently active for the account, which affects how content is displayed to end users and which translations are available.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Macro

**Slug:** `ZENDESK_GET_MACRO2`

Show a specific macro by its ID. Use when you need to retrieve details of a single macro in your Zendesk account, such as for auditing, modifying, or understanding what actions and conditions are configured for a particular macro. Macros are saved response templates that agents can apply to tickets. Supports optional sideloads for usage statistics and additional metadata via the `include` parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include` | string | No | A sideload to include in the response. See Zendesk API documentation for available sideloads such as 'usage_7d', 'usage_24h', 'usage_30d', 'permissions', or 'categories'. |
| `macro_id` | integer | Yes | The ID of the macro to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Macro Attachments

**Slug:** `ZENDESK_GET_MACRO_ATTACHMENTS`

List all attachments associated with a specific Zendesk macro. Use when you need to retrieve the files attached to a macro, such as images used in macro content or documents included in automated responses. This is a read-only operation that returns the attachment metadata including filename, content type, size, and download URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macro_id` | integer | Yes | The numeric ID of the macro whose attachments to list. You can find macro IDs from the macros list endpoint or the macro URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Macro Categories

**Slug:** `ZENDESK_GET_MACRO_CATEGORIES`

List all macro categories available to the current Zendesk account. Use when you need to retrieve or browse available macro categories for organizing and applying macros to tickets. This action is read-only and idempotent.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Macro Action Definitions

**Slug:** `ZENDESK_GET_MACRO_DEFINITIONS`

Retrieve the definitions of all actions that a macro can perform in Zendesk. Use this action when you need to discover what actions are available for macro creation, understand the available values for each action type, or build a macro configuration interface. The response includes action fields, their display titles, types, and available value options. Common macro actions include: setting ticket status, priority, or type; assigning agents or groups; adding/removing tags; setting custom fields; and adding comments.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Macro Replica

**Slug:** `ZENDESK_GET_MACRO_REPLICA`

Show a macro replica (unpersisted macro representation) based on a macro ID and ticket ID. Use when you need to preview how a macro will look when applied to a specific ticket, allowing you to see the actions and values that will be applied without actually applying the macro. This is useful for testing macro configurations or displaying macro previews in your interface. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macro_id` | integer | Yes | The ID of the macro to replicate |
| `ticket_id` | integer | Yes | The ID of the ticket from which to build a macro replica |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Macros

**Slug:** `ZENDESK_GET_MACROS`

List all shared and personal macros available in your Zendesk account. Use when you need to retrieve, audit, or review the macros configured for automating ticket responses and actions. Macros are saved response templates that agents can apply to tickets. Supports filtering by access level, active status, category, and group. Results can be sorted by name, creation date, update date, or usage statistics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `access` | string | No | Filter macros by access. Possible values are 'personal', 'agents', 'shared', or 'account'. The 'agents' value returns all personal macros for the account's agents and is only available to admins. |
| `active` | boolean | No | Filter by active macros if true or inactive macros if false |
| `include` | string | No | A sideload to include in the response. See Zendesk API documentation for available sideloads. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "usage_1h" | "usage_24h" | "usage_7d" | "usage_30d") | No | Sort order for results. Possible values are 'alphabetical', 'created_at', 'updated_at', 'usage_1h', 'usage_24h', 'usage_7d', or 'usage_30d'. Defaults to alphabetical |
| `category` | integer | No | Filter macros by category ID |
| `group_id` | integer | No | Filter macros by group ID |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort direction. One of 'asc' or 'desc'. Defaults to 'asc' for alphabetical and position sort, 'desc' for all others |
| `only_viewable` | boolean | No | If true, returns only macros that can be applied to tickets. If false, returns all macros the current user can manage. Defaults to false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Macro Actions

**Slug:** `ZENDESK_GET_MACROS_ACTIONS`

List supported actions for macros in Zendesk. Use when you need to discover what field modifications are available when creating or editing macros. This endpoint returns the available action fields that can be set in a macro (e.g., status, priority, assignee, etc.) along with their possible values. This is useful for validating macro configurations or building macro management interfaces. This action is read-only and idempotent.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Active Macros

**Slug:** `ZENDESK_GET_MACROS_ACTIVE`

List all active shared and personal macros in Zendesk. Use when you need to retrieve, audit, or review the macros configured in your Zendesk account. Macros are saved responses that agents can apply to tickets. This action supports filtering by access level, category, group, and sorting options. Note: This action only returns active macros. The sort_by parameter supports sorting by usage metrics (usage_1h, usage_24h, usage_7d, usage_30d) to identify the most frequently used macros.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 100 records per page. |
| `access` | string ("personal" | "agents" | "shared" | "account") | No | Filter macros by access level. |
| `include` | string | No | A sideload to include in the response. See Zendesk API documentation for available sideloads. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "usage_1h" | "usage_24h" | "usage_7d" | "usage_30d") | No | Possible values for sorting macros. |
| `category` | integer | No | Filter macros by category ID |
| `group_id` | integer | No | Filter macros by group ID |
| `per_page` | integer | No | Number of macros per page for offset pagination (max 100). |
| `page_size` | integer | No | Records per page for cursor pagination (sent as page[size], max 100). |
| `page_after` | string | No | Cursor for forward cursor pagination (sent as page[after]). |
| `sort_order` | string ("asc" | "desc") | No | Sort order for macro listing. |
| `page_before` | string | No | Cursor for backward cursor pagination (sent as page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Changes to Ticket

**Slug:** `ZENDESK_GET_MACROS_APPLY`

Show changes to a ticket that would result from applying a macro. Use when you need to preview what changes a macro would make to a ticket before actually applying it. This allows you to review the changes that would be applied, such as assignee changes, group reassignments, comments, or custom field updates. This action is read-only and idempotent — it does not actually modify the ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macro_id` | integer | Yes | The ID of the macro to preview |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Macros

**Slug:** `ZENDESK_GET_MACROS_SEARCH`

Search for Zendesk macros by their title. Use when you need to find macros in your Zendesk account by searching for keywords in their titles. Macros are pre-defined responses or actions that can be applied to tickets to automate repetitive tasks. This action supports filtering by access, active status, category, and group, as well as sorting results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Query string used to find macros with matching titles. Case-insensitive partial match on macro titles. |
| `access` | string ("personal" | "agents" | "shared" | "account") | No | Filter macros by access. Options: 'personal' (user's own macros), 'agents' (all personal macros for account's agents, admin only), 'shared' (macros shared with the user), 'account' (account-level macros). |
| `active` | boolean | No | Filter by active macros if true or inactive macros if false. When not specified, returns both active and inactive macros. |
| `include` | string | No | A sideload to include in the response. See Zendesk docs for available sideloads (e.g., 'usage_7d' returns usage statistics for the last 7 days). |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "position") | No | Field to sort results by. Options: 'alphabetical' (sorts A-Z), 'created_at' (by creation date), 'updated_at' (by last modification), 'position' (by dashboard position). Defaults to alphabetical. |
| `category` | integer | No | Filter macros by category ID. |
| `group_id` | integer | No | Filter macros by group ID. |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. Options: 'asc' (ascending) or 'desc' (descending). Defaults to 'asc' for alphabetical and position sorts, 'desc' for created_at and updated_at sorts. |
| `only_viewable` | boolean | No | If true, returns only macros that can be applied to tickets. If false (default), returns all macros the current user can manage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Object Trigger

**Slug:** `ZENDESK_GET_OBJECT_TRIGGER`

Show a specific trigger for a custom object in Zendesk. Use when you need to retrieve details of a single trigger, such as for auditing, understanding its conditions and actions, or preparing modifications. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_id` | integer | Yes | The ID of the trigger to retrieve |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car', 'order') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Open Requests

**Slug:** `ZENDESK_GET_OPEN_REQUESTS`

List open requests from Zendesk. Use this action when you need to retrieve all requests with "open" status for the authenticated user. Supports sorting by creation date or last update time. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginating through results (starts at 1). |
| `sort_by` | string ("updated_at" | "created_at") | No | Sort field options for listing open requests. |
| `per_page` | integer | No | Number of requests per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing open requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Field

**Slug:** `ZENDESK_GET_ORGANIZATION_FIELD2`

Get details for a specific organization field in Zendesk by its ID or key. Use this action when you need to retrieve detailed information about a single custom organization field, including its type, options, validation rules, and display settings. This is useful for understanding field configuration or before updating/deleting a field. Returns the complete organization field definition with all metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resolve_dc` | boolean | No | If true, resolves dynamic content placeholders in the response |
| `organization_field_id` | string | Yes | The ID or key of the organization field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Fields

**Slug:** `ZENDESK_GET_ORGANIZATION_FIELDS`

List all custom organization fields for the Zendesk account. Use this action when you need to retrieve or audit the custom organization field definitions configured in your Zendesk instance. Organization fields are used to store additional metadata about organizations beyond the standard attributes. Supports cursor-based pagination for retrieving large numbers of fields. Use resolve_dc=true to get resolved dynamic content placeholders instead of raw template strings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Cursor-based pagination parameter. Supports JSON:API style: `page[size]=50&page[after]=cursor` or `page[before]=cursor`. Traditional offset: `page=2` (integer). Cannot mix formats. |
| `resolve_dc` | boolean | No | If true, resolves dynamic content placeholders in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Membership

**Slug:** `ZENDESK_GET_ORGANIZATION_MEMBERSHIP2`

Get details for a specific organization membership by its ID. Use when you have an organization membership ID and need to retrieve the associated user, organization, and membership metadata. This action is read-only and idempotent - calling it multiple times with the same membership ID will return the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_membership_id` | integer | Yes | The numeric ID of the organization membership to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Related Info

**Slug:** `ZENDESK_GET_ORGANIZATION_RELATED`

Get related counts and information for a specific Zendesk organization by ID. Returns metadata about tickets, users, groups, activities, and other related resources associated with the organization. Use when you need to understand the scale and composition of an organization's resources in Zendesk. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | Numeric ID of the organization to retrieve related information for (e.g. 123456). Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if ticket's organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_CREATE_ZENDESK_ORGANIZATION; never derive from organization name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Requests

**Slug:** `ZENDESK_GET_ORGANIZATION_REQUESTS`

List requests for a specific Zendesk organization. Use when you need to retrieve all requests associated with a particular organization. This action returns request details including subject, status, priority, requester, and timestamps. Pagination is available for large result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-100). Limited to first 100 pages or 10,000 records total. For larger datasets, use cursor pagination instead. |
| `sort_by` | string ("updated_at" | "created_at") | No | Field to sort requests by. Options are 'updated_at' or 'created_at'. |
| `per_page` | integer | No | Number of requests per page (max 100). Note: page * per_page cannot exceed 10,000. Set to 100 for large accounts to minimize requests before client-side filtering. |
| `page_size` | integer | No | Number of requests per page for cursor pagination (max 100). Use this for large datasets instead of page/per_page. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's 'after_cursor' or 'next' link. |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. Options are 'asc' (ascending) or 'desc' (descending). Defaults to 'asc' if not specified. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's 'before_cursor' or 'prev' link. |
| `organization_id` | integer | Yes | Numeric ID of the organization whose requests to retrieve. Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_CREATE_ZENDESK_ORGANIZATION; never derive from organization name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Autocomplete Organizations

**Slug:** `ZENDESK_GET_ORGANIZATIONS_AUTOCOMPLETE`

Search for Zendesk organizations using autocomplete. Use when you need to find organization suggestions based on a partial organization name for ticket creation, user assignment, or organization lookup. The `name` parameter is required - provide at least a few characters for meaningful autocomplete results. Returns organizations sorted by relevance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A substring of an organization name to search for. The API returns organizations whose name starts with or contains this substring. Case-insensitive matching is applied. |
| `source` | string | No | If a `field_id` is provided, this specifies the type of the field. For example, if the field is on a 'zen:user', it references a field on a user. |
| `field_id` | string | No | The ID of a lookup relationship field. The type of field is determined by the `source` parameter. Use this to filter results based on custom field values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Merges

**Slug:** `ZENDESK_GET_ORGANIZATIONS_MERGES`

List all organization merge operations for a specific organization in Zendesk. This action retrieves the merge history showing which organizations were merged into or out of the specified organization. Use this action when you need to audit organization merge history or track the consolidation of organizations. Supports pagination to handle large result sets efficiently. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination. Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor`. These are mutually exclusive. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `organization_id` | integer | Yes | The ID of the organization for which to retrieve merge history. Must be a positive integer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Organizations

**Slug:** `ZENDESK_GET_ORGANIZATIONS_SHOW_MANY`

Show many Zendesk organizations by their IDs or external IDs. Use when you need to retrieve multiple organizations in a single API call. Accepts up to 100 organization IDs or external IDs as comma-separated lists. Only one of ids or external_ids should be provided. Returns organization objects with all standard fields including name, domain_names, tags, and organization_fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | A comma-separated list of organization IDs to retrieve (max 100). Either this or external_ids is required. |
| `external_ids` | string | No | A comma-separated list of external organization IDs to retrieve (max 100). Either this or ids is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Organization Tickets

**Slug:** `ZENDESK_GET_ORGANIZATIONS_TICKETS_COUNT`

Count organization tickets in Zendesk. Returns an approximate count of tickets for a specific organization. Use when you need to know how many tickets are associated with an organization for reporting or operational purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | Numeric ID of the organization whose tickets to count (e.g. 123456). Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_CREATE_ZENDESK_ORGANIZATION; never derive from organization name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Subscription

**Slug:** `ZENDESK_GET_ORGANIZATION_SUBSCRIPTION`

Show Organization Subscription - retrieves details of a specific organization subscription by its ID. Use when you need to get information about an organization subscription, including the associated user and organization IDs, and the creation timestamp. This is a read-only operation that does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_subscription_id` | integer | Yes | The ID of the organization subscription to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Subscriptions

**Slug:** `ZENDESK_GET_ORGANIZATION_SUBSCRIPTIONS`

List Organization Subscriptions in Zendesk. Returns organization subscriptions with pagination support (cursor and offset). Use when you need to retrieve all organization subscriptions or need to paginate through results. End users only see their own subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `per_page` | integer | No | Number of organization subscriptions per page (max 100). |
| `page_size` | integer | No | Number of organization subscriptions per page for cursor pagination (max 100). Use this for large datasets. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's 'after_cursor' or 'next' link. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's 'before_cursor' or 'prev' link. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Tags

**Slug:** `ZENDESK_GET_ORGANIZATION_TAGS`

List all tags associated with a specific Zendesk organization. Use when you need to retrieve the tags assigned to a particular organization for ticket categorization, filtering, or reporting purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | The numeric ID of the organization whose tags to retrieve. Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_GET_ZENDESK_ORGANIZATION. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Tickets

**Slug:** `ZENDESK_GET_ORGANIZATION_TICKETS`

Get tickets for a specific organization in Zendesk. Returns tickets where organization_id matches the specified organization. Use when you need to retrieve all tickets associated with a particular organization, such as for reporting or review purposes. Pagination is available for large result sets; follow next_page links until null to retrieve all tickets. Note: This endpoint returns organization tickets that may include tickets from multiple requesters within the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `sort_by` | string ("assignee" | "created_at" | "id" | "priority" | "status" | "updated_at") | No | Field to sort by: 'assignee', 'created_at', 'id', 'priority', 'status', 'updated_at' |
| `per_page` | integer | No | Number of tickets per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc' |
| `organization_id` | integer | Yes | The ID of the organization whose tickets to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Users

**Slug:** `ZENDESK_GET_ORGANIZATION_USERS`

List all users associated with a specific Zendesk organization. Returns a paginated list of users who are members of the organization. Use when you need to see all users belonging to a particular organization, retrieve organization membership information, or audit organization access. Supports filtering by role, permission sets, and external IDs. Supports pagination via page number or cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination (page[size] and page[after]/page[before]). |
| `role` | string ("end-user" | "agent" | "admin") | No | Filter results by a single role. Use 'end-user', 'agent', or 'admin'. |
| `sort_by` | string ("id" | "name" | "created_at" | "updated_at") | No | The field to sort users by. Defaults to natural order if not specified. |
| `per_page` | integer | No | Number of users to return per page. |
| `role_list` | array | No | Filter results by multiple roles. Provide a list of roles to include users matching any of them. |
| `sort_order` | string ("asc" | "desc") | No | The sort order for results. Defaults to 'asc' if not specified. |
| `external_id` | string | No | Filter by external ID. Must be unique per user under the same account. |
| `permission_set` | integer | No | Filter by custom role ID. For Enterprise plan and above. Only one role ID per request. |
| `organization_id` | integer | Yes | The numeric ID of the organization to list users from. Must be a non-null positive integer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Organization Users

**Slug:** `ZENDESK_GET_ORGANIZATION_USERS_COUNT`

Count users in a specific Zendesk organization by ID. Returns an approximate count of users. Use when you need to know how many users belong to a particular organization for reporting or operational purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Filters the results by role. Possible values are "end-user", "agent", "admin", or a custom role name. |
| `permission_set` | integer | No | For custom roles which is available on the Enterprise plan and above. You can only filter by one role ID per request. |
| `organization_id` | integer | Yes | Numeric ID of the organization to count users for (e.g. 16). Must be a non-null integer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Owned Apps

**Slug:** `ZENDESK_GET_OWNED_APPS`

List apps owned by the current Zendesk account. Use when you need to retrieve information about apps installed in your Zendesk instance, such as checking installed apps, reviewing app details (version, status, author), or auditing your app inventory. This endpoint requires admin authentication.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Use this to retrieve subsequent pages of results when there are many owned apps. |
| `exclude` | string | No | Comma-separated list of sideloaded objects to exclude from the response. Use this to reduce payload size. The exclude parameter removes the specified related objects (e.g., 'parameters,categories') from being returned alongside the apps. |
| `per_page` | integer | No | Number of apps to return per page. Defaults to 25 if not specified, maximum is 100. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Problems

**Slug:** `ZENDESK_GET_PROBLEMS`

List Zendesk ticket problems. Use when you need to retrieve all tickets of type 'problem' in your Zendesk account. The response is always ordered by updated_at by default; use sort_by and sort_order parameters to customize. Supports both offset and cursor-based pagination. Note: Problems are tickets with type='problem'. This endpoint specifically returns problem-type tickets which are linked to other incidents that share the same root cause.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `sort_by` | string ("updated_at" | "created_at" | "id") | No | Field to sort results by. Prefix with `-` for descending order. Common values: updated_at, created_at, id. |
| `per_page` | integer | No | Number of problems to return per page (max 100). Cannot be used with cursor pagination. |
| `page_size` | integer | No | Number of problems per page for cursor pagination (max 100). Use with page_after or page_before for large datasets. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's next link or cursor. |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' for ascending or 'desc' for descending. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's prev link or cursor. |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination (page_size, page_after, page_before). |
| `include_boundary_indicators` | boolean | No | When true, includes 'has_more' indicator in the cursor pagination response meta. Only valid with cursor pagination (page_size, page_after, page_before). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Public Locales

**Slug:** `ZENDESK_GET_PUBLIC_LOCALES`

List all available public locales that can be used for translations in Zendesk. Use when you need to enumerate supported languages/locales for your Zendesk account, display language options to users, or determine which locales are available for ticket or article translations. This is a read-only, idempotent operation that returns the complete list of public locales with no pagination parameters.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Recent Tickets

**Slug:** `ZENDESK_GET_RECENT_TICKETS`

List recently viewed tickets in Zendesk. Returns tickets sorted by the time they were last viewed, most recent first. Useful for agents to quickly access tickets they've been working on. The endpoint returns tickets visible to the agent based on their permission restrictions. Pagination is limited to 10,000 records (100 pages * 100 per page). Use this action to retrieve the tickets an agent has recently accessed in the Zendesk interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `per_page` | integer | No | Number of tickets per page (max 100). Note: page * per_page cannot exceed 10,000. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Remote Authentications

**Slug:** `ZENDESK_GET_REMOTE_AUTHENTICATIONS`

List all remote authentication configurations in your Zendesk account. Use this action when you need to enumerate SSO configurations, check which authentication methods are enabled, or retrieve metadata about remote authentication settings for agents and end users. This is a read-only, idempotent operation that returns all configured remote authentication providers including SAML, LDAP, JWT, and OAuth configurations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Request Comments

**Slug:** `ZENDESK_GET_REQUEST_COMMENTS`

List comments on a Zendesk request. Use when you need to retrieve all comments from a specific ticket request to understand the conversation history or gather context for responding. The comments are returned in chronological order. Each comment includes author information, content (both plain text and HTML formats), attachments, and metadata about how and when it was created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `role` | string ("agent" | "end_user") | No | Filter comments by the role of the author. One of 'agent' or 'end_user'. If not specified, all comments are returned regardless of author role. |
| `since` | string | No | Filters comments to include only those from the given datetime and later. Format as ISO 8601 UTC timestamp (e.g., '2024-01-15T00:00:00Z'). |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the request comments endpoint. |
| `request_id` | integer | Yes | The ID of the request to retrieve comments for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List CCD Requests

**Slug:** `ZENDESK_GET_REQUESTS_CCDB`

List CCD Requests. Use when you need to retrieve requests where the authenticated end user is listed as a CC (carbon copy) recipient. These are requests the user is watching but did not create. Supports sorting by creation or update timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages. |
| `sort_by` | string ("updated_at" | "created_at") | No | Field to sort requests by. Possible values are 'updated_at' or 'created_at'. |
| `per_page` | integer | No | Number of requests per page for offset pagination (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. One of 'asc' (ascending) or 'desc' (descending). Defaults to 'asc'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Request Comment

**Slug:** `ZENDESK_GET_REQUESTS_COMMENT`

Get a specific comment from a Zendesk request. Use when you need to retrieve a single comment by its ID for a given request, such as displaying a specific comment detail or checking comment metadata. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | integer | Yes | The ID of the request |
| `ticket_comment_id` | integer | Yes | The ID of the ticket comment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Requests

**Slug:** `ZENDESK_GET_REQUESTS_SEARCH`

Search for requests in Zendesk using query syntax. Use when you need to find customer requests across Zendesk using flexible search criteria such as status, priority, subject, or requester information. Returns paginated results with request details. This action is read-only and idempotent - searching for requests does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1). Increment until results array is empty to retrieve all matching requests. |
| `query` | string | No | The syntax and matching logic for the string is detailed in the Zendesk Support search reference. See Query basics in the Tickets API documentation. Examples: 'status:open', 'type:request', 'priority:high', 'subject:fire' |
| `sort_by` | string | No | Field to sort results by. Options: 'updated_at', 'created_at', 'status', 'priority'. Defaults to sorting by relevance if not specified. |
| `per_page` | integer | No | Number of results per page (max 100). |
| `sort_order` | string | No | Sort order direction. Options: 'asc' (ascending) or 'desc' (descending). Defaults to 'desc' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Solved Requests

**Slug:** `ZENDESK_GET_REQUESTS_SOLVED`

List Zendesk requests with the 'solved' status. Useful for reviewing completed customer requests, generating reports on resolution times, or tracking customer satisfaction. Use this action when you need to retrieve requests that have been marked as solved.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort_by` | string ("updated_at" | "created_at") | No | Sort field options for listing solved requests. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing solved requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Agent Attribute Values

**Slug:** `ZENDESK_GET_ROUTING_AGENTS_INSTANCE_VALUES`

Retrieve attribute values for multiple agents/users using the Skill-Based Routing API. Use when you need to get the routing attribute values (such as skills, languages, or other qualifications) assigned to specific agents. This action is read-only and idempotent. Note: This action returns only the attribute values directly assigned to the agents. It does not include inherited or group-based attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_ids` | array | Yes | A list of agent IDs whose attribute values to retrieve |
| `page_size` | integer | No | The number of items to return per page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Satisfaction Ratings

**Slug:** `ZENDESK_GET_SATISFACTION_RATINGS`

List satisfaction ratings for tickets in Zendesk. Use when you need to retrieve customer satisfaction feedback, analyze CSAT scores, or review ratings with their associated tickets and assignees. Supports both offset and cursor pagination for large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination:  - Traditional: `?page=2` (integer page number) - Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before)  These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order.  When used with cursor pagination, this determines the cursor ordering.  Example: `?sort=name` or `?sort=-created_at` |
| `per_page` | integer | No | Number of records to return per page (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Satisfaction Ratings

**Slug:** `ZENDESK_GET_SATISFACTION_RATINGS_COUNT`

Count satisfaction ratings in Zendesk. Returns an approximate count of satisfaction ratings. Use when you need to know how many satisfaction ratings exist for reporting or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Search Results Count

**Slug:** `ZENDESK_GET_SEARCH_COUNT`

Count the number of items matching a search query in Zendesk. Use when you need to know how many results a search would return without fetching all the actual results. This is useful for displaying result counts before executing a full search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The search query string. Supports Zendesk query syntax for filtering by type, status, priority, etc. Example: 'type:ticket status:open priority:urgent' or 'assignee:me status:pending'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export Search Results

**Slug:** `ZENDESK_GET_SEARCH_EXPORT`

Export search results from Zendesk using cursor-based pagination. Use when you need to export large sets of search results (tickets, users, organizations, groups) and process them in batches using cursor pagination. This action differs from the regular search endpoint by supporting cursor-based pagination instead of offset pagination, making it more efficient for large datasets. The 'page_after' parameter in responses contains the cursor token for fetching subsequent pages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The search query string. Supports Zendesk query syntax for filtering by type, status, priority, etc. Example: 'type:ticket status:open priority:urgent' or 'assignee:me status:pending'. |
| `include` | string | No | Comma-separated list of sideloads to include in the response. Available sideloads depend on the search result types (e.g., 'users', 'organizations'). |
| `page_size` | integer | No | The number of results shown per page (max 100). |
| `page_after` | string | No | Cursor token for fetching the next page of results. |
| `filter_type` | string | No | The object type returned by the export query. Can be 'ticket', 'organization', 'user', or 'group'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Security Settings

**Slug:** `ZENDESK_GET_SECURITY_SETTINGS`

Show Security Settings for a Zendesk account. Use when you need to retrieve the security configuration of a Zendesk account, including session timeouts, password policies, two-factor authentication settings, IP restrictions, and account assumption options. This is a read-only, idempotent operation that does not modify any data. This action is useful for auditing security settings, verifying compliance requirements, or understanding the security posture of a Zendesk account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Side Conversation Events

**Slug:** `ZENDESK_GET_SIDE_CONVERSATIONS_EVENTS`

Retrieve side conversation events for incremental export. Returns events created since the specified start_time in chronological order. Use when you need to export or sync side conversation events for backup, analytics, or integration purposes. This action supports pagination via the next_page URL which contains a next_start_time parameter — pass that timestamp as start_time for subsequent requests. Only available to Admins. Note: This is a read-only, idempotent action suitable for building event pipelines or audit trails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 1000 events per page for incremental exports. |
| `per_page` | integer | No | Number of events per page (max 1000 for incremental exports). |
| `start_time` | integer | Yes | A Unix timestamp for the query start time for incremental exports. Returns events created at or after this time. Use this parameter to paginate through large result sets by using the timestamp from the last event in the previous page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Support Address

**Slug:** `ZENDESK_GET_SUPPORT_ADDRESS`

Get a support address by its unique ID. Use when you have a support_address_id and need to retrieve details including the email address, brand association, and DNS verification statuses. This is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `support_address_id` | integer | Yes | The ID of the support address to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tags

**Slug:** `ZENDESK_GET_TAGS`

List Zendesk tags in order of popularity. Use when you need to view all available tags in your Zendesk account, or when you need to find tags that are most frequently used across tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `per_page` | integer | No | Number of records to return per page (max 100). Note: Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Tags

**Slug:** `ZENDESK_GET_TAGS_COUNT`

Count Tags in Zendesk. Returns an approximate count of tags. Use when you need to know how many tags exist in your Zendesk account for reporting or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Target

**Slug:** `ZENDESK_GET_TARGET`

Show a specific target by its ID. Use when you have a target ID and need to retrieve its details including title, type, active status, and creation timestamp. This is a read-only, idempotent operation that returns a single target object. This action is irreversible for data retrieval - it only reads target information, no destructive changes occur.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target_id` | integer | Yes | The numeric ID of the target to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Target Failure

**Slug:** `ZENDESK_GET_TARGET_FAILURE`

Show a target failure in Zendesk. Use when you have a target_failure_id and need to retrieve details about a failed target execution, including the HTTP status code, raw request/response data, and consecutive failure count. This is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target_failure_id` | integer | Yes | The numeric ID of the target failure to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Target Failures

**Slug:** `ZENDESK_GET_TARGET_FAILURES`

List the 25 most recent target failures in Zendesk. Target failures occur when a target (webhook, callback, or external integration) fails to execute properly. Each failure record includes the request sent, response received, and status code. Use this action to monitor and troubleshoot failing integrations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Targets

**Slug:** `ZENDESK_GET_TARGETS`

List all targets for the current Zendesk account. Use when you need to retrieve, audit, or review the targets configured in your Zendesk account. Targets are endpoints that receive data when triggers or automations fire. This is a read-only, idempotent action with no required parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 100 targets per page. |
| `per_page` | integer | No | Number of targets per page for offset pagination (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Audit

**Slug:** `ZENDESK_GET_TICKET_AUDIT_BY_ID`

Show a specific audit for a ticket from Zendesk. Returns a single audit record containing events that describe changes made to the ticket. Each audit captures a specific action such as comments, status changes, assignments, or field updates. Use this action when you have a specific audit ID and want to retrieve detailed information about that audit event. Use this action when you need to retrieve detailed information about a specific audit record for a ticket, including all events and metadata associated with that audit.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket |
| `ticket_audit_id` | integer | Yes | The ID of the ticket audit |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Collaborators

**Slug:** `ZENDESK_GET_TICKET_COLLABORATORS`

List all collaborators (CC'd users) on a Zendesk ticket. Use when you need to see who is currently CC'd on a ticket, such as when coordinating with multiple stakeholders or before adding/removing collaborators. Each collaborator is a user object with basic profile information. Paginate through results using page and per_page parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1). |
| `per_page` | integer | No | Number of collaborators per page (max 100). |
| `ticket_id` | integer | Yes | The numeric ID of the ticket whose collaborators to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Comments

**Slug:** `ZENDESK_GET_TICKET_COMMENTS`

List comments on a Zendesk ticket. Returns the comments added to the ticket in chronological order (oldest first by default). Each comment has both `html_body` and `plain_body` fields — use `plain_body` for clean text without HTML. Public comments are visible to end users while internal comments are only visible to agents. Use the `include_inline_images` parameter to include inline images as attachments. For bulk operations, honor `Retry-After` headers on HTTP 429 rate limit responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include` | string | No | Accepts 'users'. Use this parameter to list email CCs by side-loading users. Example: `?include=users`. Note: If the comment source is email, a deleted user will be represented as the CC'd email address. If the comment source is anything else, a deleted user will be represented as the user name. |
| `per_page` | integer | No | Number of records to return per page (max 100). |
| `ticket_id` | integer | Yes | The ID of the ticket to retrieve comments for. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for comments. Defaults to 'asc' (oldest first). Use 'desc' for newest first. |
| `include_inline_images` | boolean | No | When true, inline images are also listed as attachments in the response. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Email CCs

**Slug:** `ZENDESK_GET_TICKET_EMAIL_C_CS`

List Email CCs for a Ticket. Use when you need to retrieve a list of users who are CC'd on a specific Zendesk ticket. This endpoint returns all email CC records associated with the ticket, including user details and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to list email CCs for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Ticket Field

**Slug:** `ZENDESK_GET_TICKET_FIELD2`

Show a specific ticket field by its ID. Use when you need to retrieve details of a single ticket field in your Zendesk account, such as for auditing, understanding field configuration, or validating field properties. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creator` | boolean | No | If true, displays the `creator_user_id` and `creator_app_name` properties. If the ticket field is created by an app, `creator_app_name` is the name of the app and `creator_user_id` is `-1`. If the ticket field is not created by an app, then `creator_app_name` is null |
| `ticket_field_id` | integer | Yes | The ID of the ticket field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Fields

**Slug:** `ZENDESK_GET_TICKET_FIELDS`

List all system and custom ticket fields in Zendesk. Use when you need to retrieve field definitions for building forms, validating field values, or understanding available ticket field structure. Supports cursor-based pagination for large datasets. When creator=true is specified, includes creator_user_id and creator_app_name for each field. Locale parameter affects dynamic content variants for title_in_portal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field to sort results by. Prefix with - for descending order. Example: name or -created_at. |
| `locale` | string | No | Forces the title_in_portal property to return a dynamic content variant for the specified locale. Only accepts active locale IDs. |
| `creator` | boolean | No | Displays the creator_user_id and creator_app_name properties. If created by an app, creator_app_name shows the app name and creator_user_id is -1. |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). |
| `page_after` | string | No | Cursor token to fetch records after this position. Obtain from previous response's cursor values. |
| `page_before` | string | No | Cursor token to fetch records before this position. Obtain from previous response's cursor values. |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination. |
| `include_boundary_indicators` | boolean | No | When true, includes has_more indicator in the cursor pagination response meta. Only valid with cursor pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Ticket Fields

**Slug:** `ZENDESK_GET_TICKET_FIELDS_COUNT`

Count ticket fields in Zendesk. Returns an approximate count of system and custom ticket fields. Use when you need to know how many ticket fields exist for reporting or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Ticket Fields

**Slug:** `ZENDESK_GET_TICKET_FIELDS_SHOW_MANY`

Retrieve multiple ticket fields by their IDs or keys in a single request. Use when you have specific ticket field identifiers (numeric IDs like '123' or keys like 'priority', 'status', 'subject') and need to fetch their complete metadata including type, title, required status, custom options, and portal visibility settings. This is a read-only, idempotent operation. Up to 100 fields can be retrieved per request. Either `ids` or `keys` parameter can be used, but not both simultaneously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of ticket field IDs to retrieve. Up to 100 values accepted. Either `ids` or `keys` can be used, but not both. |
| `keys` | string | No | Comma-separated list of ticket field keys to retrieve. Up to 100 values accepted. Use field keys like 'priority', 'status', 'subject' instead of numeric IDs. Either `ids` or `keys` can be used, but not both. |
| `creator` | boolean | No | If true, includes creator information in the response. |
| `exclude_sub_selection_options` | boolean | No | If true, excludes sub-selection options from dropdown fields in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Followers

**Slug:** `ZENDESK_GET_TICKET_FOLLOWERS`

List all followers on a Zendesk ticket. Use when you need to see who is following a ticket, such as when coordinating with stakeholders or managing ticket notifications. Followers receive notifications about the ticket. Each follower is a user object with basic profile information. Paginate through results using page and per_page parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1). |
| `per_page` | integer | No | Number of followers per page (max 100). |
| `ticket_id` | integer | Yes | The numeric ID of the ticket whose followers to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Forms

**Slug:** `ZENDESK_GET_TICKET_FORMS`

List all ticket forms configured in your Zendesk account. Use when you need to enumerate available ticket forms, retrieve form metadata like display names and visibility settings, or audit which ticket forms are active and visible to end users or agents. Supports filtering by active status, end-user visibility, form type (standard or service catalog), and brand association. Also supports both traditional offset pagination and cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. Example: `?sort=name` or `?sort=-created_at` |
| `active` | boolean | No | true returns active ticket forms; false returns inactive ticket forms. If not present, returns both |
| `locale` | string | No | Locale to use for the ticket form names. If not specified, the default locale is used. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `form_type` | string ("standard" | "service_catalog" | "all") | No | Ticket form type filter options. |
| `end_user_visible` | boolean | No | true returns ticket forms where end_user_visible; false returns ticket forms that are not end-user visible. If not present, returns both |
| `associated_to_brand` | boolean | No | true returns the ticket forms of the brand specified by the URL's subdomain |
| `fallback_to_default` | boolean | No | true returns the default ticket form when the criteria results in an empty set without active and end-user visible ticket forms |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination (page[size], page[after], page[before]) |
| `include_boundary_indicators` | boolean | No | When true, includes has_more indicator in the cursor pagination response meta. Only valid with cursor pagination (page[size], page[after], page[before]) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Ticket Forms

**Slug:** `ZENDESK_GET_TICKET_FORMS_SHOW_MANY`

Show multiple ticket forms by their IDs. Use when you need to retrieve specific ticket forms by their IDs to display form details, validate form availability, or bulk fetch form configurations. The `ids` parameter accepts a comma-separated list of ticket form IDs (e.g., '1,2,3'). Returns an empty ticket_forms array for non-existent IDs without error. Supports optional filtering by active status, end-user visibility, brand association, and default form fallback behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of ticket form IDs to retrieve (e.g., '1,2,3' or '1,2,3,4,5'). Maximum 100 IDs per request. |
| `active` | boolean | No | Filter by active status. True returns active ticket forms; false returns inactive ticket forms. If not specified, returns both active and inactive forms. |
| `end_user_visible` | boolean | No | Filter by end-user visibility. True returns ticket forms visible to end users; false returns forms not visible to end users. If not specified, returns both. |
| `associated_to_brand` | boolean | No | Filter ticket forms by brand association. True returns ticket forms belonging to the brand specified in the URL subdomain. |
| `fallback_to_default` | boolean | No | When true, returns the default ticket form when the filter criteria results in no active, end-user-visible ticket forms. |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination (page_size, page[after], page[before]). |
| `include_boundary_indicators` | boolean | No | When true, includes `has_more` indicator in the cursor pagination response meta. Only valid with cursor pagination (page_size, page[after], page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Incidents

**Slug:** `ZENDESK_GET_TICKET_INCIDENTS`

List incidents linked to a problem ticket in Zendesk. Use when you need to retrieve all incident tickets that share the same root cause as a problem ticket. Incidents are tickets of type 'incident' that are related to a problem ticket via the problem_id field. Supports both offset and cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `per_page` | integer | No | Number of incidents to return per page (max 100). Cannot be used with cursor pagination. |
| `page_size` | integer | No | Number of incidents per page for cursor pagination (max 100). Use with page_after or page_before for large datasets. |
| `ticket_id` | integer | Yes | The ID of the problem ticket to list incidents for. Incidents are tickets of type 'incident' that are linked to this problem ticket. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's next link or cursor. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's prev link or cursor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Metric

**Slug:** `ZENDESK_GET_TICKET_METRIC`

Retrieve a specific ticket metric from Zendesk by its ID. Use this action when you have a ticket_metric_id and need to fetch the detailed metrics for that ticket, including resolution times, wait times, reply times, and SLA breaches. This action is read-only and idempotent — fetching the same metric multiple times has no side effects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_metric_id` | integer | Yes | The numeric ID of the ticket metric to retrieve. This is the metric ID associated with a ticket, found in ticket_metric responses or ticket data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Metrics

**Slug:** `ZENDESK_GET_TICKET_METRICS`

List Ticket Metrics from Zendesk. Returns a list of tickets with their associated metrics including response times, resolution times, and assignment statistics. Use when analyzing ticket performance, agent productivity, or customer satisfaction metrics. This action supports cursor-based pagination via page_size, page_after, and page_before parameters for efficient traversal of large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort_by` | string | No | Field to sort results by. Prefix with '-' for descending order. |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use this for large datasets. |
| `page_after` | string | No | Cursor token to fetch records after this position. Obtain from previous response's 'after_cursor'. |
| `page_before` | string | No | Cursor token to fetch records before this position. Obtain from previous response's 'before_cursor'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Audits

**Slug:** `ZENDESK_GET_TICKETS_AUDITS`

List all audits (change history) for a specific Zendesk ticket. Use when you need to track all changes made to a ticket including comments, status changes, assignments, and other modifications. Each audit contains one or more events representing individual changes. This action is read-only and supports both traditional offset pagination and cursor-based pagination for large datasets. Audits are returned in chronological order by default. Note: This action retrieves the complete audit trail which is useful for compliance, troubleshooting, and understanding ticket evolution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Pagination parameter. Supports both traditional offset and cursor-based pagination. Traditional: ?page=2 (integer page number). Cursor: ?page[size]=50&page[after]=cursor (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `include` | string | No | A comma-separated list of sideloads to include in the response (e.g., 'users,groups'). |
| `sort_by` | string | No | Field to sort results by. Prefix with '-' for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `page_size` | integer | No | Number of audits per page for cursor pagination (max 100). Use with page[after] or page[before] for cursor-based pagination. |
| `ticket_id` | integer | Yes | The ID of the ticket to retrieve audits for. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's next_page link. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for the results. Defaults to 'asc' if not specified. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's previous_page link. |
| `filter_events` | array | No | Filter audit events by type. Use the format filter_events[]=Type1&filter_events[]=Type2 to include only specific event types. |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination (page[size], page[after], page[before]). |
| `include_boundary_indicators` | boolean | No | When true, includes 'has_more' indicator in the cursor pagination response meta. Only valid with cursor pagination (page[size], page[after], page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Ticket Audits

**Slug:** `ZENDESK_GET_TICKETS_AUDITS_COUNT`

Count audits for a specific ticket in Zendesk. Returns an approximate count of audits associated with the specified ticket. Use when you need to know how many audit records exist for a ticket for reporting, analytics, or operational purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to count audits for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Ticket Comments

**Slug:** `ZENDESK_GET_TICKETS_COMMENTS_COUNT`

Count comments on a Zendesk ticket. Returns an approximate count of comments added to the specified ticket. Use when you need to know how many comments exist on a ticket without fetching the full comment list, such as for reporting or determining if pagination is needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to count comments for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Conversation Log

**Slug:** `ZENDESK_GET_TICKETS_CONVERSATION_LOG`

List conversation log events for a specific Zendesk ticket. Use this action when you need to retrieve the chronological history of interactions, comments, and activities on a ticket. The conversation log provides a comprehensive view of all events including comments, status changes, and other ticket activities. Supports cursor-based pagination for accessing large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100) |
| `ticket_id` | integer | Yes | The ID of the ticket to retrieve conversation log for |
| `page_after` | string | No | Cursor token to fetch records after this position |
| `page_before` | string | No | Cursor token to fetch records before this position |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Zendesk Tickets

**Slug:** `ZENDESK_GET_TICKETS_COUNT`

Count the number of tickets in Zendesk. Returns an approximate count of tickets with the timestamp of when the count was last calculated. This is a read-only, idempotent operation. Use when you need to know the total number of tickets for reporting, capacity planning, or operational purposes. Note that the count is approximate and may not reflect real-time changes. For detailed per-ticket information, use ZENDESK_LIST_ZENDESK_TICKETS instead.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Skips

**Slug:** `ZENDESK_GET_TICKET_SKIPS`

List ticket skips for a specific ticket from Zendesk. Use when you need to retrieve all skip records associated with a particular ticket, such as when reviewing which agents skipped working on a ticket or analyzing skip patterns. This action is read-only and idempotent. It returns a list of skip records that include the reason for skipping, who skipped it, and when.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to get skips for |
| `sort_order` | string ("asc" | "desc") | No | Sort order for the skips list. Defaults to 'asc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket SLA Policy Metrics

**Slug:** `ZENDESK_GET_TICKET_SLA_POLICY_METRICS`

Return the SLA policy metric targets applied to one Zendesk ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | string | Yes | ID of the Zendesk ticket, as a string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Metrics

**Slug:** `ZENDESK_GET_TICKETS_METRICS`

Get ticket metrics from Zendesk for a specific ticket. Returns performance metrics including resolution times, agent and requester wait times, reply counts, station changes, and timestamps for key events. Use when you need to analyze ticket performance, SLA compliance, or agent productivity metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to get metrics for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Side Conversation Events

**Slug:** `ZENDESK_GET_TICKETS_SIDE_CONVERSATIONS_EVENTS`

List all events for a specific side conversation on a Zendesk ticket. Returns events in chronological order including creation, replies, and state updates. Use this action when you need to view the complete history of a side conversation including all messages and state changes. Side conversations are private agent-to-agent communications that don't appear in the main ticket thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the parent ticket containing the side conversation |
| `side_conversation_id` | string | Yes | The ID of the side conversation to retrieve events for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Trigger

**Slug:** `ZENDESK_GET_TRIGGER`

Show a specific trigger by its ID. Use when you need to retrieve details of a single trigger in your Zendesk account, such as for auditing, modifying, or understanding what actions and conditions are configured for a particular trigger. This is useful for reviewing business rules before making changes or understanding automation behavior. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_id` | integer | Yes | The ID of the trigger to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Trigger Categories

**Slug:** `ZENDESK_GET_TRIGGER_CATEGORIES`

List all ticket trigger categories in your Zendesk account. Use when you need to retrieve, audit, or review the trigger category organization for your business rules and automations. Supports filtering with sort options (position, name, created_at, updated_at) and can include rule counts via the `include` parameter to show how many triggers are in each category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor or page number. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string ("position" | "-position" | "name" | "-name" | "created_at" | "-created_at" | "updated_at" | "-updated_at") | No | Sort options for trigger categories. |
| `include` | string ("rule_counts") | No | Sideload options for trigger categories. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Trigger Category

**Slug:** `ZENDESK_GET_TRIGGER_CATEGORIES2`

Show a specific ticket trigger category by its ID. Use when you need to retrieve details of a single trigger category, such as for auditing or understanding the organization of your ticket triggers. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_category_id` | string | Yes | The ID of the ticket trigger category to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Triggers

**Slug:** `ZENDESK_GET_TRIGGERS`

List all ticket triggers for the current Zendesk account. Use when you need to retrieve, audit, or review the trigger rules configured in your Zendesk account. Triggers are business rules that automatically perform actions based on conditions when tickets are created or updated. Supports filtering by active status and category. Also supports both traditional offset pagination and cursor-based pagination for sorting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string ("alphabetical" | "created_at" | "updated_at" | "position") | No | Sort field for cursor-based pagination. |
| `active` | boolean | No | Filter by active triggers if true or inactive triggers if false |
| `include` | string | No | A sideload to include in the response. See Zendesk API documentation for available sideloads. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "usage_1h" | "usage_24h" | "usage_7d") | No | Sort by field for offset pagination. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for trigger listing. |
| `category_id` | string | No | Filter triggers by category ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Trigger Definitions

**Slug:** `ZENDESK_GET_TRIGGERS_DEFINITIONS`

Get Ticket Trigger Action and Condition Definitions. Use when you need to discover the available actions and conditions that can be used to create or configure ticket triggers. This returns metadata about what types of automations are possible - the action definitions show what a trigger can do (e.g., set status to 'solved'), while the condition definitions show what conditions can trigger it (e.g., when status is 'open'). This is a read-only, idempotent operation that returns the available trigger definitions metadata.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Ticket Triggers

**Slug:** `ZENDESK_GET_TRIGGERS_SEARCH`

Search for Zendesk ticket triggers by their title. Use when you need to find triggers in your Zendesk account by searching for keywords in their titles. Triggers are business rules that automatically perform actions when certain conditions are met on tickets. This action supports filtering by active status, sorting, and sideloading usage statistics. This is a read-only and idempotent action that queries existing triggers without making any changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("alphabetical" | "created_at" | "updated_at" | "position") | No | Sort field for cursor-based pagination. |
| `query` | string | No | Query string used to find all triggers with matching title. Case-insensitive partial match on trigger titles. |
| `active` | boolean | No | Filter by active triggers if true or inactive triggers if false |
| `filter` | string | No | JSON-encoded trigger attribute filters for the search. Example: {"json":{"description":"Close a ticket"}} |
| `include` | string | No | A sideload to include in the response. Currently supported: 'usage_24h' returns statistics about how many times each trigger was triggered in the last 24 hours. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "usage_1h" | "usage_24h" | "usage_7d") | No | Sort by field for offset pagination. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for trigger listing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `ZENDESK_GET_USER`

Tool to fetch a single Zendesk user by numeric user_id. Use when you have a user ID from ticket payloads (requester_id, submitter_id, assignee_id, author_id) and need to enrich with full user details (name, email, role, organization_id, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Full User Entitlements

**Slug:** `ZENDESK_GET_USER_ENTITLEMENTS_FULL`

Tool to retrieve full entitlements for a Zendesk user across all products (Chat, Explore, Talk, Guide). Use when you need to check which Zendesk products a user has access to and their activation status. Returns detailed entitlement information including whether each product is active and its display name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose entitlements to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Events

**Slug:** `ZENDESK_GET_USER_EVENTS`

Retrieve event history for a specific Zendesk user. Use when you need to track user activity such as login history, profile changes, or other interactions with the Zendesk system. Supports filtering by event source, type, and time range. This action is read-only and idempotent. Note: The 'zendesk' source value is protected; attempts to use it when creating events result in an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose events to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id) or from the Users API. |
| `page_size` | integer | No | Number of events to include per page (max 100). |
| `filter_type` | string | No | Include events of the specified type for the given event source. The filter_source parameter must be included when using this parameter. |
| `filter_source` | string | No | Include events from the specified source application. Examples: 'web', 'mobile', 'api', etc. Check your Zendesk configuration for available sources. |
| `filter_end_time` | string | No | Include events equal to or before the specified created_at time. Use ISO 8601 format (e.g., '2023-12-31T23:59:59Z'). |
| `filter_start_time` | string | No | Include events equal to or later than the specified created_at time. Use ISO 8601 format (e.g., '2023-01-01T00:00:00Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Field By ID

**Slug:** `ZENDESK_GET_USER_FIELD_BY_ID`

Retrieve a single Zendesk user field by its numeric ID. Use when you have a user field ID and need to fetch its full definition including title, type, description, custom options, validation patterns, and other settings. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_field_id` | integer | Yes | The numeric ID of the user field to retrieve. This is the field's unique numeric identifier in Zendesk, not the field key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Field Options

**Slug:** `ZENDESK_GET_USER_FIELD_OPTIONS`

List custom user field options for a given user field. Use when you need to retrieve the dropdown or tag options available for a custom user field in Zendesk. This action fetches the configurable options that can be selected for custom user fields of type dropdown, tagger, or similar multi-option field types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). |
| `per_page` | integer | No | Number of options per page (max 100). |
| `user_field_id` | string | Yes | The numeric ID of the user field to get options for (e.g., '26943537108124'). Unlike other user_field endpoints, this /options sub-resource does not accept the field key — passing a key returns a 400 'user_field_id must be an integer' error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Fields

**Slug:** `ZENDESK_GET_USER_FIELDS`

List all custom user fields configured in your Zendesk account. Use when you need to retrieve the schema of user-defined fields (like dropdown options, validation patterns, or field types) to build dynamic forms or validate field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use with page_after to get the next page of results. |
| `page_after` | string | No | Cursor token to fetch records after a specific position. Use the next_page URL from a previous response to get more results. |
| `resolve_dc` | boolean | No | If true, resolves dynamic content placeholders in field titles and descriptions. |
| `page_before` | string | No | Cursor token to fetch records before a specific position. Use to go backwards in the pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Fields Show Many

**Slug:** `ZENDESK_GET_USER_FIELDS_SHOW_MANY`

Retrieve multiple Zendesk user fields by their keys. Use when you have specific user field keys and need to fetch their definitions (title, type, description, options, etc.) in a single request instead of making individual calls. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `keys` | string | No | Comma-separated list of user field keys to retrieve. Each key should match an existing user field's key in your Zendesk instance. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Profile by Profile ID

**Slug:** `ZENDESK_GET_USER_PROFILES2`

Retrieve a single Zendesk user profile by its Sunshine profile ID. Use this action when you have a specific profile_id (obtained from profile listings or search results) and need to fetch the full profile details including attributes, identifiers, and linked user information. Note that this uses the Sunshine Profiles API with string profile IDs, not numeric user IDs from the Users API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `profile_id` | string | Yes | The Sunshine profile ID of the user profile to retrieve. This is a string ID (e.g., '01KPP5TCJBCAP3E4BB1K1BJ1C5'), not a numeric user ID. Obtain from previous profile listing or search results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Profile Events by ID

**Slug:** `ZENDESK_GET_USER_PROFILES_EVENTS2`

Get events for a Sunshine profile by its profile ID. Use when you have a specific Sunshine profile ID (obtained from profile lookup or creation) and need to retrieve all events associated with that profile. This action is read-only and idempotent — use it to track profile activity, audit event history, or monitor user interactions for a specific profile. Note: The profile must exist or the request returns 404 Not Found. Use this action after creating or looking up a Sunshine profile to retrieve its event history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | string | No | Number of events to return per page (as string, e.g., '25', '50', '100'). |
| `profile_id` | string | Yes | The unique Sunshine profile ID (e.g., '01KPP5TCJBCAP3E4BB1K1BJ1C5'). Use the profile ID obtained from profile lookup or creation. The profile must exist or the request returns 404. |
| `filter_type` | string | No | Include events of the specified type. Requires filter_source to also be set. |
| `filter_source` | string | No | Include events from the specified source application. Example: 'shopify', 'my-app' |
| `filter_end_time` | string | No | Include only events with created_at time less than or equal to this value. ISO 8601 format (e.g., '2024-12-31T23:59:59Z'). |
| `filter_start_time` | string | No | Include only events with created_at time greater than or equal to this value. ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Assigned Tickets

**Slug:** `ZENDESK_GET_USERS_ASSIGNED_TICKETS`

List tickets assigned to a specific Zendesk user. Returns all tickets where the specified user is the assignee. Use when you need to retrieve all tickets currently assigned to a particular agent or user, such as for workload analysis, ticket reassignment, or performance reporting. Pagination is available for large result sets; follow next_page links until null to retrieve all assigned tickets. Note: This endpoint only returns tickets assigned to the user, not tickets requested by or submitted by the user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `sort_by` | string ("created_at" | "id" | "priority" | "status" | "updated_at") | No | Field to sort by: 'created_at', 'id', 'priority', 'status', 'updated_at' |
| `user_id` | integer | Yes | The numeric ID of the user whose assigned tickets to retrieve. This is the user ID found in ticket payloads (assignee_id, requester_id, submitter_id, author_id) or from user listings. |
| `per_page` | integer | No | Number of tickets per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Autocomplete Users

**Slug:** `ZENDESK_GET_USERS_AUTOCOMPLETE`

Autocomplete users by name or phone number. Use when you need to find users based on a partial name or phone number for ticket creation or user lookup scenarios. At least one of 'name' or 'phone' must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name to search for the user. You must specify either 'name' or 'phone'. |
| `phone` | string | No | The phone number to search for the user. You must specify either 'name' or 'phone'. |
| `filter` | string ("assignable" | "requester") | No | Filter values for autocomplete results. |
| `source` | string | No | If a 'field_id' is provided, this specifies the type of the field. For example, if the field is on a 'zen:user', it references a field on a user. |
| `include` | string | No | Sideloads to include in the response. Accepts a comma-separated list of values. See Sideloading for available options. |
| `field_id` | string | No | The ID of a lookup relationship field. The type of field is determined by the 'source' parameter. |
| `per_page` | integer | No | Number of results to return (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Brand Agent Memberships By User

**Slug:** `ZENDESK_GET_USERS_BRAND_AGENTS`

List brand agent memberships for a specific user in Zendesk. Use when you have a user ID and need to find all brands that the user is an agent for, such as auditing which brands a specific agent can access. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `user_id` | integer | Yes | The numeric ID of the Zendesk user. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id). |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's CC'd Tickets

**Slug:** `ZENDESK_GET_USERS_CCD_TICKETS`

List tickets where a specific Zendesk user is CC'd (carbon copied). Use when you need to retrieve all tickets where a particular user has been added as a CC recipient, such as for tracking user notifications, compliance monitoring, or ticket visibility analysis. Pagination is available for large result sets; follow next_page links until null to retrieve all CC'd tickets. Note: This endpoint only returns tickets where the user is a CC, not tickets requested by or assigned to the user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `sort_by` | string ("created_at" | "id" | "priority" | "status" | "updated_at") | No | Field to sort by: 'created_at', 'id', 'priority', 'status', 'updated_at' |
| `user_id` | integer | Yes | The numeric ID of the user whose CC'd tickets to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id) or from user listings. |
| `per_page` | integer | No | Number of tickets per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Compliance Deletion Statuses

**Slug:** `ZENDESK_GET_USERS_COMPLIANCE_DELETION_STATUSES`

Tool to fetch GDPR compliance deletion statuses for a specific Zendesk user. Use when you need to check the deletion status for each compliance area (e.g., chat, talk) associated with a user account. Returns status records showing deletion requests and their current state. Use when auditing user data deletion requests, verifying GDPR compliance status, or tracking the progress of data removal across different Zendesk products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: ?page=2 (integer page number). Cursor: ?page[size]=50&page[after]=cursor (deepObject with size, after, before). These are mutually exclusive. |
| `user_id` | integer | Yes | The numeric ID of the user to retrieve compliance deletion statuses for |
| `per_page` | integer | No | Number of records to return per page (max 100). |
| `application` | string | No | Filter by the application or area of compliance (e.g., 'chat'). If not provided, returns statuses for all applications. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Users

**Slug:** `ZENDESK_GET_USERS_COUNT`

Count users in Zendesk. Returns an approximate count of users. If the count is more than 1000, the value is an estimate and the response is refreshed every 24 hours. Use when you need to know how many users exist in the system for reporting or administrative purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Filters the results by role. Possible values are 'end-user', 'agent', 'admin', or a custom role name. |
| `role_list` | array | No | Filters the results by more than one role. Provide a list of role values. |
| `permission_set` | integer | No | For custom roles which is available on the Enterprise plan and above. You can only filter by one role ID per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Sessions

**Slug:** `ZENDESK_GET_USER_SESSIONS`

List all sessions for a specific Zendesk user. Returns details about each active session including authentication time and last seen time. Use this action to monitor session activity for a specific user, investigate security events, or audit login history for account troubleshooting. Use when you need to see all active sessions for a particular user, track their login activity, or investigate potential unauthorized access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=created_at` or `?sort=-created_at` |
| `user_id` | integer | Yes | The numeric ID of the user whose sessions to retrieve |
| `page_size` | integer | No | Number of records to return per page (max 100). |
| `page_after` | string | No | Cursor token to fetch records after this position. |
| `page_before` | string | No | Cursor token to fetch records before this position. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Followed Tickets

**Slug:** `ZENDESK_GET_USERS_FOLLOWED_TICKETS`

List tickets the specified Zendesk user is following. Returns all tickets where the specified user is a follower. Use when you need to retrieve all tickets a particular user is watching or tracking, such as for notification purposes, audit trails, or understanding which tickets a user has interest in. Pagination is available for large result sets; follow next_page links until null to retrieve all followed tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses '?page=2' (integer page number), cursor uses '?page[size]=50&page[after]=cursor' (deepObject with size, after, before). These are mutually exclusive. |
| `sort_by` | string ("id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name") | No | Field to sort by: 'id', 'subject', 'deleted_at', 'created_at', 'updated_at', 'status', 'requester', 'requester.name', 'group', 'assignee', 'assignee.name' |
| `user_id` | integer | Yes | The numeric ID of the user whose followed tickets to retrieve. This is the user ID found in ticket payloads (assignee_id, requester_id, submitter_id, author_id) or from user listings. |
| `per_page` | integer | No | Number of tickets to return per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc'. Defaults to 'asc' |
| `exclude_archived` | boolean | No | If true, excludes archived tickets from the results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Memberships By User

**Slug:** `ZENDESK_GET_USERS_GROUP_MEMBERSHIPS`

List group memberships for a specific Zendesk user. Use when you need to retrieve all groups a user belongs to, audit user group assignments, or understand which support groups a specific user is a member of. This action is read-only and idempotent. Supports both offset pagination (page, per_page) and cursor pagination (page_size, page_after, page_before). Also supports sideloading users and groups via the include parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=group_id` or `?sort=-created_at` |
| `include` | string | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: `users`, `groups`. |
| `user_id` | integer | Yes | The numeric ID of the user to retrieve group memberships for. This is the user ID, not a membership ID. |
| `per_page` | integer | No | Number of records to return per page (max 100). |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use with page_after. Cannot be used with offset pagination. |
| `page_after` | string | No | Cursor for fetching next page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |
| `page_before` | string | No | Cursor for fetching previous page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Group Membership

**Slug:** `ZENDESK_GET_USERS_GROUP_MEMBERSHIPS_BY_ID`

Get a specific group membership for a user by their IDs. Use when you have both a user ID and a group membership ID and need to retrieve details including the associated group, user, and timestamps. This action retrieves a single group membership record scoped to a specific user, unlike GetGroupMembership which retrieves by membership ID alone, and unlike ListUsersGroupMemberships which lists all memberships for a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user. This is the user ID, not a membership ID. |
| `group_membership_id` | integer | Yes | The numeric ID of the group membership to retrieve. This is the group membership ID, not a group ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Groups

**Slug:** `ZENDESK_GET_USERS_GROUPS`

List all groups that a specific Zendesk user belongs to. Use when you need to find which support groups a user is a member of, audit team memberships, or retrieve group membership information for a particular user. This action supports both offset pagination (page as integer, per_page) and cursor pagination (page as object with size/after/before). It also supports excluding deleted groups and sorting results. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor`. These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `user_id` | integer | Yes | The numeric ID of the user. Returns groups that this user belongs to. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `exclude_deleted` | boolean | No | Whether to exclude deleted groups from the response. |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the cursor pagination response. Only valid with cursor pagination (page[size], page[after], page[before]). |
| `include_boundary_indicators` | boolean | No | When true, includes `has_more` indicator in the cursor pagination response meta. Only valid with cursor pagination (page[size], page[after], page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count User Groups

**Slug:** `ZENDESK_GET_USERS_GROUPS_COUNT`

Count user groups in Zendesk. Returns an approximate count of groups that a specific user belongs to. Use when you need to know how many groups a user is assigned to for reporting, organizational management, or operational purposes. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user whose groups to count |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show User Identity

**Slug:** `ZENDESK_GET_USERS_IDENTITIES2`

Tool to show a specific user identity by user ID and identity ID. Use when you need to retrieve detailed information about a particular identity associated with a Zendesk user. This action is read-only and idempotent - it only retrieves data without modifying anything.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current Session

**Slug:** `ZENDESK_GET_USERS_ME_SESSION`

Show the currently authenticated session in Zendesk. Returns details about the active session including authentication time, last seen time, and user ID. Use when you need to verify the current session status or retrieve session metadata for the authenticated user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter for the underlying sessions endpoint. Supports cursor pagination: `?page[size]=50&page[after]=cursor` (deepObject with size/after/before). Most callers don't need this — current users typically have only a handful of sessions. |
| `per_page` | integer | No | Number of session records to return per page. Maximum is 100 records per page for the sessions endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current User Settings

**Slug:** `ZENDESK_GET_USERS_ME_SETTINGS`

Get the settings for the currently authenticated user in Zendesk. Returns user preferences including Admin Center UI settings, Lotus UI settings (onboarding, tooltips, keyboard shortcuts), and shared views order. Use this action to retrieve the current user's personal settings and preferences.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Organization Memberships

**Slug:** `ZENDESK_GET_USERS_ORGANIZATION_MEMBERSHIPS`

List organization memberships for a specific Zendesk user. Use when you have a user_id and need to retrieve all organizations that user belongs to. Returns membership details including default status, view_tickets permission, and organization info. This action is read-only and idempotent - calling it multiple times with the same user_id will return the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include` | string ("users" | "organizations") | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: 'users', 'organizations'. |
| `user_id` | integer | Yes | The numeric ID of the user whose organization memberships to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Organization Membership

**Slug:** `ZENDESK_GET_USERS_ORGANIZATION_MEMBERSHIPS2`

Get details for a specific organization membership by user ID and membership ID. Use when you have both a user ID and an organization membership ID and need to retrieve the associated membership metadata including organization details, default status, and ticket viewing permissions. This action is read-only and idempotent - calling it multiple times with the same parameters will return the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user |
| `organization_membership_id` | integer | Yes | The numeric ID of the organization membership to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Organizations

**Slug:** `ZENDESK_GET_USERS_ORGANIZATIONS`

List organizations associated with a specific Zendesk user. Use when you have a user_id and need to retrieve all organizations that user belongs to. Returns organization details including name, domain names, tags, and custom fields. This action is read-only and idempotent - calling it multiple times with the same user_id will return the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional '?page=2' or cursor '?page[size]=50&page[after]=cursor'. These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with '-' for descending order. Example: ?sort=name or ?sort=-created_at |
| `user_id` | integer | Yes | The numeric ID of the user whose organizations to retrieve |
| `per_page` | integer | No | Number of records to return per page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Organizations Count

**Slug:** `ZENDESK_GET_USERS_ORGANIZATIONS_COUNT`

Returns an approximate count of organizations that a user belongs to. Use when you need to know how many organizations a specific user is associated with in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user whose organizations to count |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User's Organization Subscriptions

**Slug:** `ZENDESK_GET_USERS_ORGANIZATION_SUBSCRIPTIONS`

List User's Organization Subscriptions - retrieves organization subscriptions for a specific user. Use when you need to get all organization subscriptions associated with a particular user, including the organization IDs and creation timestamps. Supports both cursor and offset pagination. End users only see their own subscriptions. This is a read-only operation that does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1) |
| `user_id` | integer | Yes | The numeric ID of the user whose organization subscriptions to list |
| `per_page` | integer | No | Number of organization subscriptions per page (max 100) |
| `page_size` | integer | No | Number of organization subscriptions per page for cursor pagination (max 100) |
| `page_after` | string | No | Cursor value to retrieve the next page of results |
| `page_before` | string | No | Cursor value to retrieve the previous page of results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Password Requirements

**Slug:** `ZENDESK_GET_USERS_PASSWORD_REQUIREMENTS`

Get password requirements for a specific Zendesk user. Use when you need to retrieve the password policy rules that apply to a user's password, such as minimum length, complexity requirements, or expiration policies. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Users Profiles

**Slug:** `ZENDESK_GET_USERS_PROFILES`

Retrieve profiles associated with a specific Zendesk user by user ID. Use when you need to look up user profile information using the Zendesk user ID. This action returns all profiles linked to the specified user account. This action is read-only and idempotent. Note: Access requires agent permissions in Zendesk (Support > People > Roles > People).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose profiles to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id) or from the Users API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Related Info

**Slug:** `ZENDESK_GET_USERS_RELATED`

Get related counts and information for a specific Zendesk user by ID. Returns metadata about assigned tickets, CC'd tickets, organization subscriptions, and requested tickets associated with the user. Use when you need to understand the scale and composition of a user's ticket activity and subscriptions in Zendesk. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user to retrieve related information for. Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if user_id is null). Obtain from ZENDESK_GET_USERS, ZENDESK_LIST_USERS, or other user-related actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User's Requested Tickets

**Slug:** `ZENDESK_GET_USERS_REQUESTED_TICKETS`

List tickets requested by a specific Zendesk user. Use when you need to retrieve all tickets where a particular user is the original requester, such as for tracking user's support history, compliance monitoring, or ticket ownership analysis. Pagination is available for large result sets; follow next_page links until null to retrieve all requested tickets. Note: This endpoint only returns tickets where the user is the requester, not tickets where they are CC'd or assigned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `sort_by` | string ("created_at" | "id" | "priority" | "status" | "updated_at") | No | Field to sort by: 'created_at', 'id', 'priority', 'status', 'updated_at' |
| `user_id` | integer | Yes | The numeric ID of the user whose requested tickets to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id) or from user listings. |
| `per_page` | integer | No | Number of tickets per page (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Requests

**Slug:** `ZENDESK_GET_USERS_REQUESTS`

List ticket requests for a specific Zendesk user. Use when you need to retrieve all requests associated with a particular user ID. This is useful for viewing a user's request history or monitoring their open tickets. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort_by` | string ("updated_at" | "created_at") | No | Sort field options for listing user requests. |
| `user_id` | integer | Yes | The numeric ID of the user whose requests to retrieve. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing user requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Skips

**Slug:** `ZENDESK_GET_USERS_SKIPS`

List ticket skips for a specific user from Zendesk. Use when you need to retrieve all skip records associated with a particular user, such as when analyzing which tickets a user has skipped or reviewing their skip history. This action is read-only and idempotent. Note that archived tickets are not included in the results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Use with per_page to control pagination. Cannot be used with cursor pagination. |
| `user_id` | integer | Yes | The numeric ID of the Zendesk user. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id). |
| `per_page` | integer | No | Number of skips per page for offset pagination (max 100). Cannot be used with cursor pagination. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing skips. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Tags

**Slug:** `ZENDESK_GET_USERS_TAGS`

List all tags assigned to a specific Zendesk user. Use when you need to see what tags are associated with a particular user for organizing, filtering, or categorizing user data. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user whose tags to retrieve. This is the user ID found in ticket payloads (requester_id, submitter_id, assignee_id, author_id). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count User Assigned Tickets

**Slug:** `ZENDESK_GET_USER_TICKETS_ASSIGNED_COUNT`

Count tickets assigned to a specific user in Zendesk. Returns an approximate count of tickets where the user is the assignee. Use when you need to know how many tickets are currently assigned to a particular user for workload analysis, reporting, or capacity planning. Note: The count is approximate and may not reflect real-time changes. The count is refreshed periodically rather than being calculated on every request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user whose assigned tickets to count. This is the user ID found in ticket payloads (assignee_id, requester_id, submitter_id, author_id). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List View Filter Definitions

**Slug:** `ZENDESK_GET_VIEW_DEFINITIONS`

List the definitions of the conditions and actions available for constructing views in Zendesk. Use this action when you need to discover what filter fields, operators, grouping options, and sorting options are available for building or modifying views. This is a read-only action that returns the schema/structure for view definitions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Views

**Slug:** `ZENDESK_GET_VIEWS`

List shared and personal views available to the current user in Zendesk. Use when you need to retrieve, audit, or review the views configured in your Zendesk account. Views are saved ticket filters that help organize and prioritize support work. Supports filtering by access level (personal/shared/account), active status, and group. Supports both traditional offset pagination and cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | The sort parameter used with cursor pagination. Defaults to 'created_at'. Prefix with '-' for descending order. |
| `access` | string ("personal" | "shared" | "account") | No | Only views with given access. May be 'personal', 'shared', or 'account'. |
| `active` | boolean | No | Only active views if true, inactive views if false. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at") | No | The sort_by parameter used with offset pagination. Possible values are 'alphabetical', 'created_at', or 'updated_at'. Defaults to 'position'. |
| `group_id` | integer | No | Only views belonging to given group. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `sort_order` | string ("asc" | "desc") | No | The sort_order parameter used with offset pagination. One of 'asc' or 'desc'. Defaults to 'asc' for alphabetical and position sort, 'desc' for all others. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Active Views

**Slug:** `ZENDESK_GET_VIEWS_ACTIVE`

List all active shared and personal views available in Zendesk. Use when you need to retrieve, audit, or present the view configuration in your Zendesk account. Views define how tickets are filtered, grouped, and displayed to agents. Supports filtering by access type (personal, shared, account), group membership, and sorting preferences.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 100 records per page. |
| `access` | string ("personal" | "shared" | "account") | No | Possible values for view access type. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at") | No | Possible values for sorting views. |
| `group_id` | integer | No | Only views belonging to given group |
| `per_page` | integer | No | Number of views per page for offset pagination (max 100). |
| `sort_order` | string ("asc" | "desc") | No | Possible values for sort order direction. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Views - Compact

**Slug:** `ZENDESK_GET_VIEWS_COMPACT`

Retrieves a compacted list of shared and personal views available to the current user in Zendesk. Use when you need to quickly fetch a lightweight list of views without full details. This endpoint returns essential view information suitable for dropdown menus or quick selection lists. Unlike the standard /views endpoint, this compact version provides a streamlined response with the most commonly needed fields.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Views

**Slug:** `ZENDESK_GET_VIEWS_COUNT`

Count shared and personal views in Zendesk. Returns an approximate count of all views (both shared and personal) available in the account. Use when you need to know the total number of views configured for reporting or operational purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Tickets in Views

**Slug:** `ZENDESK_GET_VIEWS_COUNT_MANY`

Count tickets in multiple Zendesk views. Returns the ticket count for each view ID provided in a single API call. Use when you need to quickly get counts for multiple views at once for reporting or dashboard purposes. Note: This is a read-only, idempotent operation. Counts may be cached on the server side.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of view IDs to get counts for (e.g., '1,2,3'). Each ID must be a positive integer. Maximum number of IDs per request is 100. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute View

**Slug:** `ZENDESK_GET_VIEWS_EXECUTE`

Execute a Zendesk view to retrieve its column titles and matching ticket rows. Use when you need to run a saved view and get its results - useful for checking which tickets match a view's conditions without manually applying filters. Supports pagination, custom sorting, and optional grouping of results. Returns the view's execution metadata alongside the matching rows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `exclude` | string | No | A comma-separated list of sideloads to exclude from the response |
| `include` | string | No | A comma-separated list of sideloads to include in the response |
| `sort_by` | string | No | The ticket field used for sorting. This will either be a title or a custom field id. |
| `view_id` | integer | Yes | The ID of the view to execute |
| `group_by` | string | No | The ticket field used for grouping. This will either be a title or a custom field id. |
| `sort_order` | string | No | The direction the tickets are sorted. May be one of 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export View

**Slug:** `ZENDESK_GET_VIEWS_EXPORT`

Export a Zendesk view as a CSV file. Use when you need to download view data for offline analysis, reporting, or data migration purposes. The export contains all tickets matching the view's filter criteria and columns. Note that if the export is not immediately available, Zendesk may return a status indicating the job is queued - retry after a short delay in such cases. Note: This action downloads file content and may take longer for views with large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | integer | Yes | The numeric ID of the view to export. You can find view IDs in the Zendesk admin panel under Views or by listing views via the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Views

**Slug:** `ZENDESK_GET_VIEWS_SEARCH`

Search for Zendesk views by their title. Use when you need to find views in your Zendesk account by searching for keywords in their titles. Views are saved searches that display tickets matching specific conditions. This action supports filtering by access level, active status, group, and sorting results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `query` | string | Yes | Query string used to find all views with matching title. Case-insensitive partial match on view titles. |
| `access` | string | No | Filter views by access level. Valid values are 'personal', 'shared', or 'account'. When not specified, returns views of all access levels. |
| `active` | boolean | No | Filter views by active status. Set to true to return only active views, or false to return only inactive views. When not specified, returns both active and inactive views. |
| `include` | string | No | Sideload related data to include in the response. See Zendesk documentation for available sideloads. |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "position") | No | Field to sort results by. Options: 'alphabetical' (sorts A-Z), 'created_at' (by creation date), 'updated_at' (by last modification), 'position' (by dashboard position). If unspecified, views are sorted by relevance to the query. |
| `group_id` | integer | No | Filter views by group ID. Only returns views that are assigned to the specified group. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the views search endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. Options: 'asc' (ascending) or 'desc' (descending). Defaults to 'asc' for alphabetical and position sorts, 'desc' for created_at and updated_at sorts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Views By IDs

**Slug:** `ZENDESK_GET_VIEWS_SHOW_MANY`

Get multiple Zendesk views by their IDs. Use when you need to retrieve specific views by their IDs in a single request rather than fetching them one by one. The IDs should be provided as a comma-separated string. This action is read-only and idempotent. Returns only views that exist and for which the user has permission.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | List of view IDs separated by commas. Example: '1,2,3' |
| `active` | boolean | No | Only active views if true, inactive views if false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tickets From View

**Slug:** `ZENDESK_GET_VIEWS_TICKETS`

List tickets from a specific Zendesk view. Use this action when you need to retrieve all tickets that match a view's conditions, such as for reporting, bulk operations, or analyzing tickets filtered by specific criteria. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort_by` | string | No | Sort or group the tickets by a column in the View columns table. The 'subject' and 'submitter' columns are not supported for sorting. |
| `view_id` | integer | Yes | The ID of the view to retrieve tickets from |
| `page_size` | integer | No | Number of tickets per page for cursor pagination (max 100). Use cursor-based pagination for large datasets. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's 'next_page' URL. |
| `sort_order` | string ("asc" | "desc") | No | Sort order direction. One of 'asc' or 'desc'. Defaults to 'asc' for alphabetical and position sort, 'desc' for all others. |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's 'previous_page' URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count Tickets in View

**Slug:** `ZENDESK_GET_VIEW_TICKET_COUNT`

Count tickets in a specific view in Zendesk. Returns the number of tickets matching the view's conditions. Use when you need to know how many tickets are in a particular view for reporting, routing decisions, or workload assessment. The count may be null if the system is still loading and caching new data. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | integer | Yes | The ID of the view to count tickets for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Activities

**Slug:** `ZENDESK_GET_ZENDESK_ACTIVITIES`

List ticket activities in the last 30 days affecting your Zendesk. Activities include actions like ticket assignments, status changes, comments, and more. This action is read-only and idempotent — use it to monitor ticket activity or build activity feeds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `since` | string | No | A UTC time in ISO 8601 format to return ticket activities since said date. |
| `include` | string | No | A comma-separated list of sideloads to include. Supported values: `fields_metadata`. |
| `per_page` | integer | No | Number of records to return per page (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Roles

**Slug:** `ZENDESK_GET_ZENDESK_CUSTOM_ROLES`

List all custom roles configured in your Zendesk account. Use when you need to discover available roles, review role configurations, or understand permission structures for your agents. Returns metadata including role names, descriptions, role types, and permission configurations. This is a read-only, idempotent operation with no required parameters.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Organization

**Slug:** `ZENDESK_GET_ZENDESK_ORGANIZATION`

Get metadata for a specific Zendesk organization by ID. Response fields are available under data.organization_info. Does not return member/user lists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | Numeric ID of the organization to retrieve (e.g. 123456). Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if ticket's organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_CREATE_ZENDESK_ORGANIZATION; never derive from organization name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Organization Merge

**Slug:** `ZENDESK_GET_ZENDESK_ORGANIZATION_MERGE`

Retrieve the details of a specific organization merge operation in Zendesk. This action shows the merge status and the organizations involved. Use when you need to check the status of an organization merge or view details of a past merge operation. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_merge_id` | string | Yes | The ID of the organization merge to retrieve. Must be a non-null string value. This is typically a numeric string ID obtained from a previous organization merge operation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Subscriptions

**Slug:** `ZENDESK_GET_ZENDESK_ORGANIZATIONS_SUBSCRIPTIONS`

List all organization subscriptions for a specific Zendesk organization. Returns subscriptions that link users to organizations. Use when you need to see which users are subscribed to a particular organization or audit organization membership. This action is read-only and idempotent. Paginate by following next_page until null to avoid missing subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-100). Limited to first 100 pages or 10,000 records total. |
| `per_page` | integer | No | Number of subscriptions per page (max 100). |
| `organization_id` | integer | Yes | Numeric ID of the organization to retrieve subscriptions for (e.g. 123456). Must be a non-null integer; cast to int if sourced from tools that return it as a string. Do not pass null (skip the call if organization's organization_id is null). Obtain from ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS or ZENDESK_GET_ZENDESK_ORGANIZATION_BY_ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Requests

**Slug:** `ZENDESK_GET_ZENDESK_REQUESTS`

List ticket requests in Zendesk. This action retrieves a paginated list of requests, supporting sorting by creation or update time. Use when you need to fetch all or filtered ticket requests from your Zendesk account. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort_by` | string ("updated_at" | "created_at") | No | Sort field options for listing requests. |
| `per_page` | integer | No | Number of records to return per page. Note: Default and maximum values vary by endpoint. Check endpoint-specific documentation for limits. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Sessions

**Slug:** `ZENDESK_GET_ZENDESK_SESSIONS`

List all active sessions in your Zendesk account. If authenticated as an admin, returns all the active sessions for all users. Otherwise, returns only the sessions for the authenticated user. Use this action to monitor active user sessions, track login activity, or manage session security. Use when you need to audit active user sessions, investigate security events, or retrieve session information for user activity monitoring.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | object | No | Cursor-based pagination parameters for sessions. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. Example: `?sort=name` or `?sort=-created_at` |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Sharing Agreements

**Slug:** `ZENDESK_GET_ZENDESK_SHARING_AGREEMENTS`

List all sharing agreements for your Zendesk account. Sharing agreements define connections between Zendesk accounts for sharing tickets. This action is read-only and idempotent — use it to view current sharing relationships or check agreement status.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Suspended Tickets

**Slug:** `ZENDESK_GET_ZENDESK_SUSPENDED_TICKETS`

List suspended tickets in Zendesk. Suspended tickets are tickets that were automatically held for review due to spam detection, banned content, or other filtering rules. This action is read-only and idempotent — use it to review suspended tickets and determine if they should be recovered or deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive — use one format or the other, not both. |
| `sort_by` | string | No | The field to sort the suspended tickets by. One of 'author_email', 'cause', 'created_at', or 'subject'. |
| `per_page` | integer | No | Number of records to return per page. |
| `sort_order` | string ("asc" | "desc") | No | The order in which to sort the suspended tickets. Can be 'asc' or 'desc'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Ticket

**Slug:** `ZENDESK_GET_ZENDESK_TICKET_BY_ID`

Get ticket details from Zendesk. Returns the full ticket record (status, requester_id, assignee_id, organization_id, tags, custom_fields, created_at/updated_at, etc.) alongside its comments. Response wraps all data under a top-level `data` key; access `data['comments']` for comments and `data['comments'][i]['attachments']` for attachments (attachments unavailable from list endpoints). Each comment has both `html_body` and plain `body` fields — choose appropriately. Fields like `subject`, `organization_id`, `author_id`, and `body` may be null; handle defensively. First comment in `data.comments` is not necessarily from the requester — compare `author_id` against ticket `requester_id` to identify requester messages. For bulk calls, honor `Retry-After` headers on HTTP 429.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginating through ticket comments (starts at 1). Zendesk returns up to 100 comments per page by default. |
| `per_page` | integer | No | Number of comments to return per page (max 100). Use with 'page' to control pagination of ticket comments. |
| `ticket_id` | integer | Yes | ID of the ticket to get details for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Field Options

**Slug:** `ZENDESK_GET_ZENDESK_TICKET_FIELDS_OPTIONS`

List Ticket Field Options - Returns a list of custom ticket field options for dropdown and multi-select ticket fields. Use this action to retrieve the available choices users can select when filling out a custom ticket field. This action is read-only and idempotent. Note: Only works with dropdown, tagger, and multi-select custom ticket fields; standard fields like text or date do not have options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The ID of the ticket field to retrieve options for. This is the numeric ID of the custom ticket field, not the field name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Ticket Field Option

**Slug:** `ZENDESK_GET_ZENDESK_TICKET_FIELDS_OPTIONS2`

Show Ticket Field Option - Retrieves a specific custom ticket field option for dropdown and multi-select ticket fields. Use this action when you have a ticket_field_id and a ticket_field_option_id and need to retrieve the details of that individual option. This action is read-only and idempotent. Note: Only works with dropdown, tagger, and multi-select custom ticket fields; standard fields like text or date do not have options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The ID of the parent ticket field that contains this option. This is the numeric ID of the custom ticket field. |
| `ticket_field_option_id` | integer | Yes | The ID of the individual ticket field option to retrieve. This is the numeric ID of a specific dropdown/multi-select choice within the ticket field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Ticket Form

**Slug:** `ZENDESK_GET_ZENDESK_TICKET_FORM`

Get details for a specific ticket form in Zendesk by its ID. Returns the complete ticket form object including its name, display settings, visibility conditions, associated ticket fields, and brand restrictions. Use when you need to retrieve detailed information about a particular ticket form configuration. This is a read-only, idempotent operation that does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_form_id` | integer | Yes | The ID of the ticket form to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zendesk Ticket Related

**Slug:** `ZENDESK_GET_ZENDESK_TICKET_RELATED`

Get related information for a specific Zendesk ticket. This endpoint returns data about tickets that are related to the specified ticket, including follow-up sources, associated Jira issues, and incident counts. Use this action when you need to understand the relationships and connections between tickets in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to get related information for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Side Conversation

**Slug:** `ZENDESK_GET_ZENDESK_TICKETS_SIDE_CONVERSATION_ID`

Get a specific side conversation by its ID for a Zendesk ticket. Side conversations are private agent-to-agent communications that don't notify the customer. Use this action when you need to retrieve details about a specific side conversation on a ticket, such as its current state, participants, or message history. If the side conversation is a child ticket, the external_ids object's targetTicketId property contains the child ticket's ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket containing the side conversation |
| `side_conversation_id` | string | Yes | The unique ID of the side conversation to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Tags

**Slug:** `ZENDESK_GET_ZENDESK_TICKETS_TAGS`

List all tags associated with a specific Zendesk ticket. Use when you need to retrieve the tags assigned to a particular ticket for categorization, filtering, or reporting purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The numeric ID of the ticket whose tags to retrieve. Must be a non-null integer. Obtain from ZENDESK_LIST_ZENDESK_TICKETS, ZENDESK_GET_ZENDESK_TICKET_BY_ID, or other ticket-related actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Active Automations

**Slug:** `ZENDESK_LIST_ACTIVE_AUTOMATIONS`

List all active automations in Zendesk. Use when you need to retrieve the currently active automation rules that automatically perform actions based on ticket conditions. This action returns all automations marked as active, including their conditions and actions. Note: This only returns active automations; to see all automations including inactive ones, you would need a different action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. Zendesk returns up to 100 records per page. |
| `per_page` | integer | No | Number of automations per page for offset pagination (max 100). |
| `page_size` | integer | No | Records per page for cursor pagination (sent as page[size], max 100). |
| `page_after` | string | No | Cursor for forward cursor pagination (sent as page[after]). |
| `page_before` | string | No | Cursor for backward cursor pagination (sent as page[before]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Installations

**Slug:** `ZENDESK_LIST_APP_INSTALLATIONS`

List all app installations in the Zendesk account. The 'enabled' property indicates whether each installed app is active in the product. Use the 'include' parameter to sideload app object details for each installation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginating through results (starts at 1). |
| `include` | string | No | Sideload additional related data. Pass 'app' to include the app object for each installation. |
| `per_page` | integer | No | Number of installations to return per page (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Locations

**Slug:** `ZENDESK_LIST_APP_LOCATIONS`

List all available locations where Zendesk apps can be installed. Use when you need to discover valid placement options for installing or configuring Zendesk apps. This endpoint requires admin authentication. All returned locations are read-only.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assignable Group Memberships

**Slug:** `ZENDESK_LIST_ASSIGNABLE_GROUP_MEMBERSHIPS`

List assignable group memberships in Zendesk. Use when you need to retrieve the group memberships that agents can be assigned to, typically for understanding agent-group assignments or building assignment interfaces. This action is read-only and idempotent. Returns a maximum of 100 group memberships per page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `per_page` | integer | No | Number of group memberships to return per page (max 100). |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use with page_after. Cannot be used with offset pagination. |
| `page_after` | string | No | Cursor for fetching next page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assignable Memberships By Group

**Slug:** `ZENDESK_LIST_ASSIGNABLE_GROUP_MEMBERSHIPS_BY_GROUP`

List assignable group memberships for a specific group in Zendesk. Use when you need to retrieve which agents can be assigned to a particular group, typically for building assignment interfaces or auditing group membership capabilities. This action is read-only and idempotent. Returns a maximum of 100 group memberships per page. Note: This action differs from ListAssignableGroupMemberships by filtering to a specific group rather than returning all assignable memberships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `group_id` | integer | Yes | The ID of the group to list assignable memberships for |
| `per_page` | integer | No | Number of group memberships to return per page (max 100). |
| `page_size` | integer | No | Number of records per page for cursor pagination (max 100). Use with page_after. Cannot be used with offset pagination. |
| `page_after` | string | No | Cursor for fetching next page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bookmarks

**Slug:** `ZENDESK_LIST_BOOKMARKS`

List Bookmarks returns all bookmarks created by the user. Use when you need to retrieve all bookmarks to find saved tickets or manage bookmarked items. Archived tickets are not included in the response. _tags = ["readOnlyHint", "idempotentHint"]

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values are determined by the Zendesk Bookmarks API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Brand Agent Memberships

**Slug:** `ZENDESK_LIST_BRAND_AGENTS`

List brand agent memberships to retrieve which agents are associated with which brands in Zendesk. Use this action when you need to enumerate the brand-agent relationships in a Zendesk account, such as determining which agents can access specific brands or auditing brand access permissions. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Object Record Attachments

**Slug:** `ZENDESK_LIST_CUSTOM_OBJECT_RECORD_ATTACHMENTS`

List all file attachments for a specific custom object record in Zendesk. Use this action when you need to retrieve the attachments associated with a particular custom object record, for example to display files, verify uploads, or manage attachments for a record. This is a read-only operation that retrieves attachment metadata without downloading file content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique ID of a custom object record |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Object Records

**Slug:** `ZENDESK_LIST_CUSTOM_OBJECT_RECORDS`

List all records for a specific custom object type in Zendesk. Use this action when you need to retrieve all instances of a custom object (e.g., all car records, all product records) with optional filtering by ID, external ID, sorting, and pagination support. This is a read-only, idempotent operation that returns records with their custom field values. Note: When using pagination (page[size], page[after], page[before]), you cannot mix page[before] and page[after] in the same request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Sort order for results. One of 'id', 'updated_at', '-id', or '-updated_at'. The '-' prefix denotes descending order. |
| `page_size` | integer | No | Number of records to return per page. Maximum 100 records per page. |
| `filter_ids` | string | No | Optional comma-separated list of record IDs to filter by. If specified, only records with matching IDs are returned. The IDs must be unique and are case sensitive. |
| `page_after` | string | No | A pagination cursor for navigating to the next page. Use the 'after_cursor' value from a previous response. Cannot be used with page[before] in the same request. |
| `page_before` | string | No | A pagination cursor for navigating to the previous page. Use the 'before_cursor' value from a previous response. Cannot be used with page[after] in the same request. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car', 'product', 'order'). This is a user-defined unique identifier for the custom object type. |
| `filter_external_ids` | string | No | Optional comma-separated list of external IDs to filter by. If specified, only records with matching external IDs are returned. The IDs must be unique and are case sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deleted Users

**Slug:** `ZENDESK_LIST_DELETED_USERS`

Tool to list deleted users in Zendesk via the Users API. Use when you need to retrieve information about users that have been deleted from the system. This is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Help Center Content

**Slug:** `ZENDESK_LIST_HELP_CENTER_CONTENT`

List one localized level of the Zendesk Help Center hierarchy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Offset page number, starting at 1. |
| `locale` | string | Yes | Enabled Help Center locale, such as 'en-us' or 'es-419'. |
| `sort_by` | string ("position" | "created_at" | "updated_at" | "title" | "edited_at") | No | Field to sort by. 'title' and 'edited_at' are available only for articles. |
| `per_page` | integer | No | Number of records to return per page, from 1 to 100. |
| `sort_order` | string ("asc" | "desc") | No | Sort direction. |
| `content_type` | string ("categories" | "sections" | "articles") | Yes | Hierarchy level to list: categories, sections, or articles. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Incremental Custom Object Records

**Slug:** `ZENDESK_LIST_INCREMENTAL_CUSTOM_OBJECT_RECORDS`

Export custom object records incrementally using cursor-based pagination. Use this action when you need to retrieve all changes to custom object records since a specific time, with support for large result sets through cursor-based pagination. The start_time parameter is required for the initial request; subsequent pages use the cursor returned in previous responses. This is a read-only, idempotent operation that returns records with their custom field values and change timestamps. The action supports filtering to exclude deleted records and configurable page sizes. Rate limited to 10 requests per minute.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | The cursor pointer for pagination. Use the after_cursor value from a previous response to fetch subsequent pages of records. |
| `per_page` | integer | No | Number of records to return per page. Default is 1000, maximum is 1000. |
| `start_time` | integer | No | The Unix timestamp (in seconds) to start the incremental export from. Must be at least one minute in the past. Required on the initial export request; not required on subsequent cursor-based pagination requests. Data isn't available for the most recent minute. |
| `custom_object_key` | string | Yes | The key identifier for the custom object type. This is a user-defined unique identifier for the custom object (e.g., 'apartment', 'test_car', 'product'). |
| `filter_exclude_deleted` | boolean | No | If true, exclude deleted records from the export. When false or not specified, deleted records will be included with field values replaced by '[DELETED]'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Monitored X Handles

**Slug:** `ZENDESK_LIST_MONITORED_TWITTER_HANDLES`

List all monitored X (Twitter) handles configured in your Zendesk account. Use when you need to retrieve all Twitter handles that are being monitored for the X channel integration. This is a read-only, idempotent operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. |
| `per_page` | integer | No | Number of records to return per page (max 100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Object Triggers

**Slug:** `ZENDESK_LIST_OBJECT_TRIGGERS`

List all triggers for a specific custom object in Zendesk. Use when you need to discover, audit, or review the triggers configured for a custom object type. Triggers are business rules that automatically perform actions based on conditions. This action retrieves triggers associated with a custom object defined in your Zendesk instance. Each trigger defines conditions and corresponding actions that run when records meet those conditions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `active` | boolean | No | Filter by active triggers if true or inactive triggers if false |
| `sort_by` | string ("alphabetical" | "created_at" | "updated_at" | "usage_1h" | "usage_24h" | "usage_7d" | "position") | No | Sort options for listing object triggers. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the object-triggers endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for listing object triggers. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car', 'order') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Object Trigger Definitions

**Slug:** `ZENDESK_LIST_OBJECT_TRIGGERS_DEFINITIONS`

List Object Trigger Action and Condition Definitions for a custom object in Zendesk. Use when you need to discover the available trigger actions and conditions that can be used to create or configure triggers on a custom object. This returns metadata about what types of automations are possible for the specified custom object. This is a read-only, idempotent operation that returns the available trigger definitions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car'). This is a user-defined unique identifier for the custom object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Memberships

**Slug:** `ZENDESK_LIST_ORGANIZATION_MEMBERSHIPS`

List organization memberships in Zendesk. Use when you need to retrieve all organization memberships, which link users to organizations. Supports pagination and sorting options to navigate large result sets efficiently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination. Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor`. These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `include` | string ("users" | "organizations") | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: users, organizations. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organization Memberships by Organization

**Slug:** `ZENDESK_LIST_ORGANIZATION_MEMBERSHIPS_BY_ORGANIZATION`

List organization memberships for a specific organization in Zendesk. Use when you need to retrieve all users who are members of a particular organization, including their membership metadata like default status and ticket viewing permissions. Supports pagination and sorting options to navigate large result sets efficiently. This action is read-only and idempotent - calling it multiple times with the same organization ID will return the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination. Traditional: `?page=2` (integer page number). Cursor: `?page[size]=50&page[after]=cursor`. These are mutually exclusive. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. Example: `?sort=name` or `?sort=-created_at` |
| `include` | string ("users" | "organizations") | No | Sideloads to include in the response. Accepts a comma-separated list of values. Valid values: users, organizations. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `organization_id` | integer | Yes | Numeric ID of the organization to list memberships for. Must be a non-null integer; cast to int if sourced from tools that return it as a string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Resource Collections

**Slug:** `ZENDESK_LIST_RESOURCE_COLLECTIONS`

List Resource Collections for the Zendesk account. Use when you need to retrieve, audit, or review the resource collections configured in your Zendesk account. Resource collections are groups of related resources that can be managed together. This is a read-only action that returns paginated results. Use per_page to control page size.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Skips

**Slug:** `ZENDESK_LIST_SKIPS`

Lists all ticket skips in Zendesk. A skip is a ticket that was skipped during routing or assignment. Use this action to retrieve information about all tickets that have been skipped. This action is read-only and idempotent. Note that archived tickets are not included in the results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the skips endpoint. |
| `sort_order` | string ("asc" | "desc") | No | Sort order options for listing skips. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Support Addresses

**Slug:** `ZENDESK_LIST_SUPPORT_ADDRESSES`

List all support addresses (recipient addresses) configured in your Zendesk account. Use when you need to enumerate available support email addresses, check which address is set as default, or retrieve address metadata like verification status and brand associations. This is a read-only, idempotent operation that supports both cursor and offset pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number), cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). These are mutually exclusive - use one format or the other, not both. |
| `sort` | string | No | Field to sort results by. Prefix with `-` for descending order. When used with cursor pagination, this determines the cursor ordering. |
| `include` | string | No | A comma-separated list of sideloads to include in the response. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Audits

**Slug:** `ZENDESK_LIST_TICKET_AUDITS`

List all ticket audits from Zendesk. Returns a paginated list of audit records, each containing events that describe changes made to tickets. Audits capture all changes including comments, status changes, assignments, and field updates. Archived tickets are not included in the results. Use cursor pagination (page_after, page_before, page_size) to navigate through results efficiently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Specifies how many records to return per page. You can specify up to 100 records per page. |
| `page_after` | string | No | A pagination cursor that tells the endpoint which page to start on. It should be a `after_cursor` value from a previous request. Note: page[before] and page[after] cannot be used together. |
| `page_before` | string | No | A pagination cursor that tells the endpoint which page to start on. It should be a `before_cursor` value from a previous request. Note: page[before] and page[after] cannot be used together. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Content Pins

**Slug:** `ZENDESK_LIST_TICKET_CONTENT_PINS`

List Ticket Content Pins returns all content pins for a specified ticket. Use when you need to retrieve all pinned content items on a ticket. ticket_id is required — Zendesk has no account-wide listing mode. _tags = ["readOnlyHint", "idempotentHint"]

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | string | Yes | The id of the ticket for which to list content pins. Required — Zendesk returns a 400 if this is omitted; there is no account-wide listing mode. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Identities

**Slug:** `ZENDESK_LIST_USER_IDENTITIES`

Tool to list all identities for a specific Zendesk user. Use when you need to retrieve all email addresses, phone numbers, or other contact methods associated with a user. Supports filtering by identity type and cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | object | No | Cursor-based pagination parameters for the request. |
| `sort` | string | No | Field to sort results by. Prefix with '-' for descending order. Example: 'name' or '-created_at' |
| `user_id` | integer | Yes | The numeric ID of the user whose identities to retrieve |
| `type_list` | array | No | Filter results by one or more identity types (email, phone, etc.) |
| `include_item_cursors` | boolean | No | When true, includes cursor values for each item in the pagination response |
| `include_boundary_indicators` | boolean | No | When true, includes 'has_more' indicator in the cursor pagination response meta |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Access Rules

**Slug:** `ZENDESK_LIST_ZENDESK_ACCESS_RULES`

List all access rules for a Zendesk custom object. Access rules control which users and roles can perform specific operations on custom object records. Use this action when you need to audit existing permissions or understand what access controls are in place for a custom object type. This is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object to retrieve access rules for. You can find custom object keys by listing custom objects first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Object Fields

**Slug:** `ZENDESK_LIST_ZENDESK_CUSTOM_OBJECT_FIELDS`

List all fields for a custom object in Zendesk. Use this action when you need to discover the structure of a custom object, understand what fields are available, or retrieve metadata about custom object fields for further operations like creating or updating records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination parameter. Supports both traditional offset and cursor-based pagination: traditional uses `?page=2` (integer page number); cursor uses `?page[size]=50&page[after]=cursor` (deepObject with size, after, before). Mutually exclusive. |
| `per_page` | integer | No | Number of records to return per page. Maximum is 100 records per page for the custom-object-fields endpoint. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |
| `include_standard_fields` | boolean | No | Include standard fields if true. Exclude them if false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Objects

**Slug:** `ZENDESK_LIST_ZENDESK_CUSTOM_OBJECTS`

List all custom object definitions in Zendesk. Use this action when you need to discover available custom object types, understand their structure, or retrieve metadata about custom objects for further operations. Returns metadata including keys, titles, and configuration options for each custom object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_ui_path` | boolean | No | Include UI path in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Permission Policies

**Slug:** `ZENDESK_LIST_ZENDESK_PERMISSION_POLICIES`

List all permission policies for a custom object in Zendesk. Use this action when you need to discover the access control configuration for a custom object, understand what roles have permissions, or retrieve permission metadata for access control management. This is a read-only, idempotent operation. This action is useful for reviewing permission policies applied to custom objects in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tickets

**Slug:** `ZENDESK_LIST_ZENDESK_TICKETS`

List Zendesk tickets with pagination and filtering. Only server-side filter available is external_id; status, priority, tags, assignee_id, and date-range filters must be applied client-side. Timestamps (created_at, updated_at) are ISO 8601 UTC. ticket.subject may be null — coerce to string before filtering. Attachments are not included; retrieve via ZENDESK_GET_ZENDESK_TICKET_BY_ID. HTTP 429 rate limit responses include Retry-After header; apply exponential backoff. Paginate by following next_page until null to avoid missing tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (1-100). Limited to first 100 pages or 10,000 records total. For larger datasets, use cursor pagination (page_size) instead. |
| `sort_by` | string | No | Field to sort by: 'assignee', 'assignee.name', 'created_at', 'group', 'id', 'requester', 'requester.name', 'status', 'subject', 'updated_at' Omitting sort_by provides no guaranteed ordering; set explicitly when ticket order matters. |
| `per_page` | integer | No | Number of tickets per page for offset pagination (max 100). Note: page * per_page cannot exceed 10,000. Set to 100 for large accounts to minimize requests before client-side filtering. |
| `page_size` | integer | No | Number of tickets per page for cursor pagination (max 100). Use this for large datasets instead of page/per_page. |
| `page_after` | string | No | Cursor value to retrieve the next page of results. Obtained from previous response's 'after_cursor' or 'next' link. |
| `sort_order` | string ("asc" | "desc") | No | Sort order: 'asc' or 'desc' |
| `external_id` | string | No | Filter tickets by external ID |
| `page_before` | string | No | Cursor value to retrieve the previous page of results. Obtained from previous response's 'before_cursor' or 'prev' link. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `ZENDESK_LIST_ZENDESK_USERS`

Tool to list/enumerate Zendesk users via the Users API. Use when you need to export or iterate through the user directory without a specific name/email filter. Supports both cursor and offset pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination (starts at 1). Cannot be used with cursor pagination. |
| `role` | string ("end-user" | "agent" | "admin") | No | Filter results by a single role. Use 'end-user', 'agent', or 'admin'. |
| `per_page` | integer | No | Number of users per page for offset pagination (max 100). Cannot be used with cursor pagination. |
| `page_size` | integer | No | Number of users per page for cursor pagination (max 100). Use with page_after. Cannot be used with offset pagination. |
| `role_list` | array | No | Filter results by multiple roles. Provide a list of roles to include users matching any of them. |
| `page_after` | string | No | Cursor for fetching next page in cursor pagination. Use with page_size. Cannot be used with offset pagination. |
| `external_id` | string | No | Filter by external ID. Must be unique per user under the same account. |
| `permission_set` | integer | No | Filter by custom role ID (Enterprise plan only). Only one role ID per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make Zendesk Ticket Comment Private

**Slug:** `ZENDESK_MAKE_COMMENT_PRIVATE`

Make a public ticket comment private in Zendesk. This action changes the visibility of a comment from public to internal-only, so only agents can view it. Use this action when you need to convert a customer-facing comment to an internal note after the fact. Note: Only agents can make comments private; end users cannot use this endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | ID of the ticket containing the comment to make private. |
| `ticket_comment_id` | integer | Yes | ID of the ticket comment to make private. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make Organization Membership Default

**Slug:** `ZENDESK_MAKE_DEFAULT_ORGANIZATION_MEMBERSHIP`

Set a specific organization membership as the default for a user in Zendesk. Use when you need to change which organization is the primary/default for a user. Only one organization can be the default at a time. This action is idempotent - setting the same membership as default multiple times will succeed without side effects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose organization membership you want to set as default. Obtain from ZENDESK_LIST_USERS or ZENDESK_SEARCH_USERS; do not guess or fabricate IDs. |
| `organization_membership_id` | integer | Yes | The numeric ID of the organization membership to set as the user's default. Obtain from ZENDESK_GET_USERS_ORGANIZATION_MEMBERSHIPS; do not guess or fabricate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make End User Identity Primary

**Slug:** `ZENDESK_MAKE_END_USER_IDENTITY_PRIMARY`

Set a specified identity as the primary identity for an end user in Zendesk. This is a collection-level operation - after making an identity primary, you should reload the entire identities collection to get the updated state. An end user can only make an email identity primary if the email is verified. Use when a user wants to change their primary email or phone number for notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the end user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity to make primary |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make Ticket Comment Private

**Slug:** `ZENDESK_MAKE_TICKET_COMMENT_PRIVATE`

Change a public comment to private on a Zendesk ticket audit. Use when you need to convert a previously public-facing comment to an internal note that is not visible to the end user. This action makes the comment private by updating the ticket audit. This is useful when information was shared publicly by mistake and needs to be restricted to agents only. Note: This action only works on existing audits and cannot be undone once the comment is made private.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket containing the audit. |
| `ticket_audit_id` | integer | Yes | The ID of the ticket audit containing the comment to make private. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make User Identity Primary

**Slug:** `ZENDESK_MAKE_USER_IDENTITY_PRIMARY`

Tool to set a user identity as the primary identity for a Zendesk user. Use when you need to change which email address or identifier is the primary contact method for a user. This action may affect which email notifications the user receives.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user who owns the identity |
| `user_identity_id` | integer | Yes | The ID of the user identity to make primary |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mark Multiple Tickets as Spam

**Slug:** `ZENDESK_MARK_MANY_TICKETS_AS_SPAM`

Marks multiple tickets as spam in Zendesk. This action is irreversible — the tickets will be marked as spam and moved to the suspended tickets queue. The submitter will also be marked as spam and blocked from submitting further tickets. Use when cleaning up spam or unwanted tickets to protect your support queue. Returns a job_status payload for tracking the bulk operation. Note: Tickets marked as spam are moved to the suspended tickets queue and cannot be recovered through normal means.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of ticket IDs to mark as spam. Maximum 100 IDs allowed per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Users

**Slug:** `ZENDESK_MERGE_USERS`

Merges two Zendesk end users together. The user specified in the path parameter (user_id) is the primary user (target) that will be kept. The user specified in the request body (id) is the source user that will be deleted and its data transferred to the primary user. Use when you need to consolidate duplicate end-user accounts in Zendesk. This action is irreversible — the source user and all their associated data (tickets, comments, etc.) will be merged into the primary user and the source user cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | object | Yes | User object containing the ID of the user to merge from. The 'id' field is mandatory - the source user will be deleted. The 'name' field is optional to rename the primary user. |
| `user_id` | integer | Yes | The numeric ID of the primary user (target) to merge another user into |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Zendesk Tickets

**Slug:** `ZENDESK_MERGE_ZENDESK_TICKETS`

Merges multiple tickets into a target ticket in Zendesk. The source tickets are merged into the target ticket and then deleted. This is an asynchronous operation that returns a job status. Use when you need to consolidate duplicate or related tickets into a single ticket. **Important**: This action is irreversible - source tickets are permanently merged and deleted once the operation completes. Always verify the target_ticket_id and source_ticket_ids before executing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_comment` | string | No | Private comment to add to the source tickets before they are merged. |
| `target_comment` | string | No | Private comment to add to the target ticket after the merge. |
| `target_ticket_id` | integer | Yes | The ID of the target ticket to merge other tickets into. This ticket will be retained after the merge. |
| `source_ticket_ids` | array | Yes | Array of ticket IDs to merge into the target ticket. These tickets will be merged and then deleted. |
| `source_comment_is_public` | boolean | No | Whether the comment added to source tickets is public or private. Defaults to false (private). |
| `target_comment_is_public` | boolean | No | Whether the comment added to the target ticket is public or private. Defaults to false (private). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Open User's Profile in Agent Browser

**Slug:** `ZENDESK_OPEN_USERS_PROFILE_IN_AGENT_BROWSER`

Open a Zendesk user's profile in a specified agent's browser. Use when an agent needs to view a specific user's profile during an active call or session. This action triggers the Zendesk Talk dashboard to display the user's information in the agent's interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose profile should be displayed in the agent's browser. You can find this in the user's profile URL or from user search results. |
| `agent_id` | integer | Yes | The numeric ID of the Zendesk agent whose browser should display the user profile. You can find this in the agent's profile URL or from agent listings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Recover Multiple Suspended Tickets

**Slug:** `ZENDESK_RECOVER_MANY_SUSPENDED_TICKETS`

Recover multiple suspended tickets in Zendesk. Use when you need to restore tickets that have been suspended (e.g., auto-replied emails, bounced messages). Takes up to 100 ticket IDs as input and restores them to normal ticket status. This action is irreversible — recovered tickets return to normal processing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of suspended ticket IDs to recover (max 100). Use the auto-generated numeric IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Renew Session

**Slug:** `ZENDESK_RENEW_SESSION`

Renew the current Zendesk session and obtain a new authenticity token. Use when the current session token is expiring or needs to be refreshed to maintain an active authenticated connection. This action extends the session lifetime without requiring full re-authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder Custom Object Fields

**Slug:** `ZENDESK_REORDER_CUSTOM_OBJECT_FIELDS`

Reorder Custom Fields of an Object. Updates the display order of custom object fields based on the provided field IDs. Use when you need to change the order of fields displayed in a custom object's record layout. This action is idempotent — re-running with the same field IDs in the same order will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |
| `custom_object_field_ids` | array | Yes | An array of custom object field IDs specifying the new order. The order of IDs in the array determines the display order of the fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder App Location Installations

**Slug:** `ZENDESK_REORDER_LOCATION_INSTALLATIONS`

Reorder App Installations For Location. Creates or updates the relevant location installation with a specified installation order. This action requires admin-level access. Use when you need to change the display order of apps in a specific Zendesk location (e.g., nav bar, ticket sidebar).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `installations` | array | Yes | An array of app installation IDs in the desired order. The order of IDs determines the display order in that location. |
| `location_name` | string | Yes | The location name where the installations are located. Common values: 'nav_bar', 'ticket_sidebar', 'user_sidebar', 'organization_sidebar', 'new_ticket_sidebar'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder Organization Fields

**Slug:** `ZENDESK_REORDER_ORGANIZATION_FIELDS`

Reorder Organization Fields. Updates the display order of organization fields based on the provided field IDs. Use when you need to change the order of organization fields displayed in Zendesk. This action is idempotent — re-running with the same field IDs in the same order will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_field_ids` | array | Yes | An array of organization field IDs specifying the new order. The order of IDs in the array determines the display order of the fields in the organization field list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder Ticket Fields

**Slug:** `ZENDESK_REORDER_TICKET_FIELDS`

Reorder Ticket Fields. Updates the display order of ticket fields based on the provided field IDs. Use when you need to change the order of standard ticket fields displayed in the ticket form. This action is idempotent — re-running with the same field IDs in the same order will produce the same result. This action requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_ids` | array | Yes | An array of ticket field IDs specifying the new display order. The order of IDs in the array determines the order of the fields. Only those provided are assigned to first positions; missing IDs get incremental positions automatically. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder Ticket Triggers

**Slug:** `ZENDESK_REORDER_TRIGGERS`

Reorder Ticket Triggers. Updates the firing order of ticket triggers based on the provided trigger IDs. Use when you need to change the priority or execution order of ticket triggers in your Zendesk account. Important constraints: You must include EVERY ticket trigger ID in your account. Omitting any trigger ID returns 404 Forbidden. Additionally, reordering is not permitted if you have more than one ticket trigger category (returns LimitOneCategory error). This action is idempotent - re-running with the same trigger IDs in the same order will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trigger_ids` | array | Yes | An array of ticket trigger IDs in the desired firing order. The order of IDs in the array determines the execution order. You must include every ticket trigger ID in your account - omitting any trigger ID returns 404 Forbidden. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reorder User Fields

**Slug:** `ZENDESK_REORDER_USER_FIELDS`

Reorder User Fields. Updates the display order of custom user fields based on the provided field IDs. Use when you need to change the order of user fields displayed in user profiles or forms. This action requires admin-level access. This action is idempotent — re-running with the same field IDs in the same order will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_field_ids` | array | Yes | An array of user field IDs specifying the new display order. The order of IDs in the array determines the position of each field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reply to Zendesk Ticket

**Slug:** `ZENDESK_REPLY_ZENDESK_TICKET`

Action to reply to a Zendesk ticket by adding a comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Comment content Must contain only the final reply text — do not include draft reasoning or mixed content. |
| `public` | boolean | No | Whether the comment is public or internal Public comments are customer-facing and trigger email notifications to the requester; set to false for internal agent notes to prevent unintended customer visibility. |
| `ticket_id` | integer | Yes | ID of the ticket to reply to. Note: Closed tickets cannot be updated. |
| `assignee_id` | integer | No | The ID of the agent to assign the ticket to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Request End User Verification

**Slug:** `ZENDESK_REQUEST_END_USER_VERIFICATION`

Send a verification email to an end user to verify ownership of their email address identity. The end user receives an email with a link to confirm their identity. Use when you need to verify an end user's email address identity in Zendesk, such as when creating new end users or resolving identity verification issues. Note: This action can only be performed by verified end users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the end user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity to verify |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Request User Create

**Slug:** `ZENDESK_REQUEST_USER_CREATE`

Send a request to create a user in Zendesk. This sends the owner a reminder email to update their user profile information. Use when you want to prompt a user to complete their profile through the request flow rather than creating directly. This action is useful for onboarding flows where you want to collect user information through an email-based request rather than creating the user directly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | object | Yes | User object containing attributes for the user request. The `name` field is mandatory. This action sends the owner a reminder email to complete their user profile. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Request User Verification

**Slug:** `ZENDESK_REQUEST_USER_VERIFICATION`

Send a verification email to a user to verify ownership of their email address identity. The user receives an email with a link to confirm their identity. Use when you need to verify a user's email address identity in Zendesk, such as when creating new users or resolving identity verification issues. Note: This action sends a verification email to the user's identity address.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity to verify |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore Multiple Deleted Tickets

**Slug:** `ZENDESK_RESTORE_MANY_TICKETS`

Restores multiple previously deleted tickets in Zendesk. Use when you need to recover tickets that were deleted and need to be restored in bulk. This action is reversible - tickets can be deleted again after restoration. Note: Only tickets in 'deleted' status can be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of Zendesk ticket IDs to restore. Example: '1,2,3' to restore tickets with IDs 1, 2, and 3. Maximum 100 tickets per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore Zendesk Ticket

**Slug:** `ZENDESK_RESTORE_ZENDESK_TICKET`

Restores a previously deleted ticket in Zendesk. Use when a ticket was accidentally deleted and needs to be recovered. The restored ticket will return to its previous state with all associated data intact. This action is reversible — tickets can be deleted again after restoration if needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | ID of the deleted ticket to restore. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Custom Object Records

**Slug:** `ZENDESK_SEARCH_CUSTOM_OBJECT_RECORDS`

Search and filter custom object records in Zendesk using text queries and field filters. Returns paginated results with cursor-based navigation. Use when you need to find specific records within a custom object type, apply text searches or structured filters, and navigate through large result sets. This is a read-only operation. This action is useful for discovering records, running filtered queries on custom objects, and implementing paginated browsing through custom object data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("name" | "created_at" | "updated_at" | "-name" | "-created_at" | "-updated_at") | No | Sorting order for custom object records search. |
| `query` | string | No | Search text-based fields for records matching specific terms. Supports fuzzy search on Text, Multi Line Text, and RegExp fields. Multiple words or numbers can be searched (e.g., 'Tesla Honda 2020' matches records containing any of these terms). |
| `filter` | object | No | Filter object to narrow down search results based on specific field conditions. Structure depends on the custom object's field definitions. |
| `page_size` | integer | No | Number of records to return per page (max 100). |
| `page_after` | string | No | Pagination cursor for fetching records after a given point. Use 'meta.after_cursor' from a previous response. Cannot be used with page[before]. |
| `page_before` | string | No | Pagination cursor for fetching records before a given point. Use 'meta.before_cursor' from a previous response. Cannot be used with page[after]. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car', 'test_car'). Use ZENDESK_LIST_ZENDESK_CUSTOM_OBJECTS to discover available custom object keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Help Center Articles

**Slug:** `ZENDESK_SEARCH_HELP_CENTER_ARTICLES`

Search localized Zendesk Help Center articles by text and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Offset page number, starting at 1. |
| `query` | string | Yes | Text to match in Help Center articles. |
| `locale` | string | No | Enabled locale to search, such as 'en-us', or '*' for every locale. |
| `section` | string | No | One or more comma-separated section IDs. |
| `sort_by` | string ("created_at" | "updated_at") | No | Sort by creation or update time. Omit to sort by relevance. |
| `brand_id` | string | No | Brand ID to search, as a string. |
| `category` | string | No | One or more comma-separated category IDs. |
| `per_page` | integer | No | Number of results to return per page, from 1 to 100. |
| `multibrand` | boolean | No | Search all brands when true and brand_id is omitted. |
| `sort_order` | string ("asc" | "desc") | No | Sort direction. Zendesk defaults to descending when a sort field is used. |
| `label_names` | string | No | Comma-separated article labels. An article matching any label is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Object Triggers

**Slug:** `ZENDESK_SEARCH_OBJECT_TRIGGERS`

Search for triggers associated with a custom object in Zendesk. Use when you need to find triggers based on their title, description, or active status within a specific custom object. This is useful for auditing, managing, or reviewing automation rules for custom objects. Supports both cursor-based pagination (using 'sort' parameter) and offset pagination (using 'sort_by' parameter). Filter by 'active' to show only enabled or disabled triggers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Cursor-based pagination only. Possible values are 'alphabetical', 'created_at', 'updated_at', or 'position'. |
| `query` | string | No | Query string used to find all triggers with matching title |
| `active` | boolean | No | Filter by active triggers if true or inactive triggers if false |
| `filter` | string | No | JSON-encoded trigger attribute filters for the search. Example: {"json":{"description":"Close a ticket"}} |
| `include` | string | No | A sideload to include in the response |
| `sort_by` | string | No | Offset pagination only. Possible values are 'alphabetical', 'created_at', 'updated_at', 'usage_1h', 'usage_24h', or 'usage_7d'. Defaults to 'position' |
| `sort_order` | string | No | One of 'asc' or 'desc'. Defaults to 'asc' for alphabetical and position sort, 'desc' for all others |
| `custom_object_key` | string | Yes | The key of a custom object to search triggers for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zendesk

**Slug:** `ZENDESK_SEARCH_ZENDESK`

Tool to search for tickets, users, organizations, and groups in Zendesk using query syntax. Use when you need to find resources across Zendesk using flexible search criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset pagination. |
| `query` | string | Yes | The search query string. Supports Zendesk query syntax for filtering by type, status, priority, etc. Example: 'type:ticket status:open priority:urgent' or 'assignee:me status:pending'. |
| `include` | string | No | Sideloads to include in the response, returned as top-level arrays alongside `results`. Zendesk's search endpoint requires nested syntax: `<result_type>(<resource1>,<resource2>)`. Combine multiple result types with commas. Common sideloads: `users`, `groups`, `organizations`. A flat comma list (e.g. 'users,groups') is silently ignored by Zendesk. |
| `sort_by` | string | No | Field to sort results by. Options: 'updated_at', 'created_at', 'priority', 'status', 'ticket_type'. Defaults to sorting by relevance if not specified. |
| `per_page` | integer | No | Number of results per page. Default: 10, max: 100. |
| `sort_order` | string | No | Sort order direction. Options: 'asc' (ascending) or 'desc' (descending). Defaults to 'desc' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Organizations

**Slug:** `ZENDESK_SEARCH_ZENDESK_ORGANIZATIONS`

Search organizations in Zendesk by external ID or name. Returns an array of organizations matching the provided criteria. Use when you need to find specific organizations by their identifier or name. An empty organizations array with count=0 means no matches found. Multiple organizations may share similar names — verify the correct organization via external_id or domain_names before proceeding with operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of an organization to search for. Supports exact and partial matching. |
| `external_id` | integer | No | The external id of an organization to search for. Case-insensitive external identifier for linking to external records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zendesk Users

**Slug:** `ZENDESK_SEARCH_ZENDESK_USERS`

Search for Zendesk users by query or external ID. Use when you need to find users using flexible search criteria with Zendesk search syntax (e.g., partial name matches, email patterns, notes, phone numbers). For exact email lookups, consider using the 'Search Zendesk Users' action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for offset-based pagination (non-negative integer). |
| `query` | string | No | The `query` parameter supports the Zendesk search syntax for more advanced user searches. It can specify a partial or full value of any user property, including name, email address, notes, or phone. Example: `query='jdoe'`. See the [Search API](/api-reference/ticketing/ticket-management/search/). |
| `include` | string | No | A comma-separated list of sideloads to include in the response. |
| `per_page` | integer | No | Number of records to return per page. Default and maximum values vary by endpoint. |
| `external_id` | string | No | The `external_id` parameter does not support the search syntax. It only accepts exact ID values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Default Custom Ticket Status

**Slug:** `ZENDESK_SET_DEFAULT_CUSTOM_STATUS`

Sets one or more custom ticket statuses as the default for their respective categories. Use this action when you need to specify which custom status should be the default (fallback) status for a given category (open, pending, solved, etc.). This operation is idempotent — running it multiple times with the same IDs will produce the same result. **Allowed for**: Admins only. **Note**: The IDs should be valid custom ticket status IDs that exist in your Zendesk account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of custom status IDs to set as default for their respective categories. Each custom status will become the default for its status category (e.g., open, pending, solved). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Group Membership as Default

**Slug:** `ZENDESK_SET_GROUP_MEMBERSHIP_AS_DEFAULT`

Set a group membership as the default for a specific user in Zendesk. Use when you need to mark a user's group membership as the default, meaning tickets assigned directly to the agent will assume this membership's group. Requires both the user ID and the group membership ID. This action is useful for managing default routing preferences for agents in your Zendesk instance. Note that only one group membership can be the default at a time - setting a new default will automatically unset the previous default.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user. This is the user ID, not a membership ID. |
| `group_membership_id` | integer | Yes | The numeric ID of the group membership to set as default. This is the group membership ID, not a group ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Organization as Default for User

**Slug:** `ZENDESK_SET_USERS_ORGANIZATION_AS_DEFAULT`

Set an organization as the default for a user in Zendesk. Use when you need to change which organization is the primary/default for a user by specifying the organization ID directly. Only one organization can be the default at a time. This action is idempotent - setting the same organization as default multiple times will succeed without side effects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the Zendesk user whose default organization to set. Obtain from ZENDESK_LIST_USERS or ZENDESK_SEARCH_USERS; do not guess or fabricate IDs. |
| `organization_id` | integer | Yes | The numeric ID of the organization to set as the user's default. Obtain from ZENDESK_GET_ALL_ORGANISATIONS or ZENDESK_GET_ZENDESK_ORGANIZATION; do not guess or fabricate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Access Rule

**Slug:** `ZENDESK_SHOW_ACCESS_RULE`

Show a custom object access rule by its ID. Use when you have a custom_object_key and access_rule_id and need to retrieve the access rule's details including its conditions, title, description, and timestamps. This is a read-only operation that does not modify any data. This action is useful for reviewing access control rules applied to custom objects in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The access rule ID |
| `custom_object_key` | string | Yes | The key of a custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Custom Object

**Slug:** `ZENDESK_SHOW_CUSTOM_OBJECT`

Get details of a specific Zendesk custom object by its key. Use when you have a custom object key and need to retrieve its metadata including name, description, attachment settings, visibility settings, and creation/update timestamps. This is a read-only, idempotent operation that returns the full custom object definition.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_ui_path` | boolean | No | Include UI path in the response. Set to true to retrieve the direct link to the custom object in the Zendesk UI. |
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |
| `include_permissions_metadata` | boolean | No | Include permission metadata in the response. Set to true to retrieve additional permission information for the custom object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Custom Object Record

**Slug:** `ZENDESK_SHOW_CUSTOM_OBJECT_RECORD`

Get details of a specific Zendesk custom object record by its key and record ID. Use when you have a custom object key and record ID and need to retrieve the record's metadata including name, custom fields, timestamps, and photo. This is a read-only, idempotent operation that returns the full custom object record definition. Photo is only available if `allows_photos` is enabled on the custom object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |
| `custom_object_record_id` | string | Yes | The id of a custom object record. This is the unique identifier for a specific record within the custom object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Job Statuses

**Slug:** `ZENDESK_SHOW_MANY_JOB_STATUSES`

Show many job statuses by their IDs in Zendesk. Use this action when you have multiple job status IDs from bulk operations (like ticket updates, user merges, or ticket merges) and need to check their status in a single request. Each ID in the comma-separated list will return its corresponding job status object if found. Endpoint: GET /api/v2/job_statuses/show_many

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of job status IDs to retrieve. Each id is a 32-char hex token returned by the original async job submission response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Tickets

**Slug:** `ZENDESK_SHOW_MANY_TICKETS`

Show multiple tickets by their IDs. Use when you need to retrieve specific tickets by their IDs to display ticket details, compare tickets, or bulk fetch ticket information. The `ids` parameter accepts a comma-separated list of ticket IDs (e.g., '35436,35437'). Returns tickets for valid IDs only; non-existent IDs result in an empty tickets array without error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of ticket IDs to retrieve (e.g., '35436,35437' or '35436,35437,35438'). Maximum 100 IDs per request. |
| `include` | string | No | A comma-separated list of sideloads to include. Available sideloads depend on the endpoint (e.g., 'users,groups,organizations'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Many Users

**Slug:** `ZENDESK_SHOW_MANY_USERS`

Retrieve multiple Zendesk users by their numeric IDs or external IDs. Use when you have a list of user IDs (from ticket payloads, search results, etc.) and need to fetch full user details for multiple users at once. Accepts up to 100 IDs per request. Provide either `ids` or `external_ids`, not both.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of up to 100 user IDs to retrieve (e.g., '1,2,3'). Provide either ids or external_ids, not both. |
| `include` | string | No | A comma-separated list of sideloads to include. Available sideloads: 'roles', 'organizations', 'fields', 'photo'. See Zendesk docs for sideloading details. |
| `external_ids` | string | No | Comma-separated list of up to 100 external IDs to retrieve users by. Provide either ids or external_ids, not both. |
| `include_deleted` | boolean | No | If true, returns inactive or deleted users in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Permission Policy

**Slug:** `ZENDESK_SHOW_PERMISSION_POLICY`

Get details of a specific permission policy for a Zendesk custom object by its ID. Use when you have a custom_object_key and permission policy ID and need to retrieve the policy's details including the role name and record operation permissions (create, read, update, delete). This is a read-only, idempotent operation that does not modify any data. This action is useful for reviewing permission policies that control access to custom object records in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The permission policy ID. Use format 'custom-role-{custom_role_id}' for custom roles (e.g., 'custom-role-6678128886399') or 'end-user' for the end user system role. |
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Request

**Slug:** `ZENDESK_SHOW_REQUEST`

Show a single request in Zendesk. Use when you need to retrieve details of a specific request by its ID, including subject, description, status, priority, requester information, and other metadata. This action is read-only and idempotent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | integer | Yes | The ID of the request to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unassign User from Organization

**Slug:** `ZENDESK_UNASSIGN_USER_ORGANIZATION`

Immediately removes a user from an organization in Zendesk. Use when you need to unassign a user from an organization membership. This action is irreversible - the user will no longer be associated with the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user |
| `organization_id` | integer | Yes | The ID of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Access Rule

**Slug:** `ZENDESK_UPDATE_ACCESS_RULE`

Update an existing access rule for a custom object in Zendesk. Access rules control which records of a custom object users can access based on conditions. Use this action when you need to: - Change an access rule's title or description - Modify the conditions that determine when the rule applies - Update access permissions for custom object records This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The access rule ID |
| `title` | string | No | The title of the access rule |
| `conditions` | object | No | Conditions object for access rules - defines when the rule applies. |
| `description` | string | No | A description of what this access rule does |
| `custom_object_key` | string | Yes | The key of the custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk App Installation

**Slug:** `ZENDESK_UPDATE_APPS_INSTALLATION`

Update an app installation in Zendesk. Use when you need to modify app installation settings such as enabling/disabling the app, restricting access by groups or roles, or updating app-specific settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `enabled` | boolean | No | If true, the app installation is enabled. Set to false to disable the app for all users. |
| `settings` | object | No | Installation settings for the app, formatted as a flat key-value object. These are app-specific configuration values. |
| `settings_objects` | array | No | Installation settings for the app, formatted as an array of objects. Each object should have a 'key' and 'value' field. |
| `role_restrictions` | array | No | List of role names (as strings) that are allowed to use the app. If empty or null, all roles can use the app. |
| `group_restrictions` | array | No | List of group IDs (as strings) that are allowed to use the app. If empty or null, all groups can use the app. |
| `app_installation_id` | integer | Yes | The ID of the app installation to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Automation

**Slug:** `ZENDESK_UPDATE_AUTOMATION`

Update an existing automation in Zendesk. Automations are business rules that automatically perform actions on tickets when certain conditions are met. Use this action when you need to: - Change an automation's title, active status, or position - Modify the conditions that trigger the automation - Update the actions the automation performs - Deactivate an automation without deleting it This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The new title/name of the automation. Must be unique among all automations. |
| `active` | boolean | No | Whether the automation is active and will execute. Set to false to deactivate the automation. |
| `actions` | array | No | List of actions the automation will perform when triggered. Each action specifies a field to modify and the value to set. |
| `position` | integer | No | The position of the automation which specifies the order it will be executed. Lower numbers execute first. |
| `conditions` | object | No | Conditions object for automation - defines when the automation should execute. |
| `automation_id` | integer | Yes | The ID of the automation to update. You can find automation IDs from the List Automations action or from the automation URL in Zendesk admin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Object

**Slug:** `ZENDESK_UPDATE_CUSTOM_OBJECT`

Update an existing custom object in Zendesk. Custom objects are user-defined data structures that allow you to store and manage custom data types. Use this action when you need to: - Change a custom object's title, description, or pluralized title - Update visibility settings (include_in_list_view) - Enable or disable attachments and photos for the custom object This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | User-defined display name for the object. |
| `description` | string | No | User-defined description of the object. |
| `allows_photos` | boolean | No | If true, photos can be uploaded to the records of the object. If false, new photos cannot be uploaded but existing photos can still be viewed and removed. |
| `title_pluralized` | string | No | User-defined pluralized version of the object's title. |
| `custom_object_key` | string | Yes | The unique key identifier of the custom object. This is a path parameter that identifies which custom object to update. |
| `allows_attachments` | boolean | No | If true, file attachments can be added to the object's records. If false, new attachments can't be added to the object's records, but existing attachments on records can still be viewed and downloaded. |
| `include_in_list_view` | boolean | No | A flag setting the visibility of the object in the agent's list view. If true, all agents and admins have viewing access to the object in the Custom objects record page in the Agent Workspace. If false, only admins have viewing access. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Object Record

**Slug:** `ZENDESK_UPDATE_CUSTOM_OBJECT_RECORD`

Update an existing record for a custom object in Zendesk. Use when you need to modify an existing custom object record. This action updates fields on a custom object record. You can update the name, external_id, and custom_object_fields as needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | User-defined display name for the object. If autonumbering is selected for the custom object's name field, the name isn't allowed because it's automatically generated. If uniqueness is enabled, the name must be unique. |
| `external_id` | string | No | An id you can use to link custom object records to external data. Set to null to remove. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car') |
| `custom_object_fields` | object | No | A dictionary of custom field key-value pairs. The available fields are defined in the custom object's field definitions. Keys must match field keys from the custom object definition. |
| `custom_object_record_id` | string | Yes | The ID of the custom object record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Ticket Status

**Slug:** `ZENDESK_UPDATE_CUSTOM_STATUS`

Update an existing custom ticket status in Zendesk. Custom ticket statuses allow you to define additional statuses beyond the standard statuses (new, open, pending, solved, closed) for your ticket workflow. Use this action when you need to: - Change the labels shown to agents or end users for a custom status - Update the descriptions explaining when to use the status - Activate or deactivate a custom status - Modify how a custom status appears in the ticket interface This action is idempotent — re-running with the same parameters will produce the same result. Requires admin permissions in Zendesk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | If true, the custom status is set to active. If false, the custom status is deactivated. |
| `agent_label` | string | No | The dynamic content placeholder or the label displayed to agents. Maximum length is 48 characters. |
| `description` | string | No | The description of when the user should select this custom ticket status. Shown to agents. |
| `end_user_label` | string | No | The dynamic content placeholder or the label displayed to end users. Maximum length is 48 characters. |
| `custom_status_id` | integer | Yes | The unique ID of the custom ticket status to update. You can find custom status IDs from the List Custom Ticket Statuses action or from the custom status URL in Zendesk admin. |
| `end_user_description` | string | No | The description displayed to end users. Shown to customers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Deletion Schedule

**Slug:** `ZENDESK_UPDATE_DELETION_SCHEDULE`

Update an existing deletion schedule in Zendesk. Deletion schedules define automated rules for deleting tickets, users, attachments, or other records based on specified conditions. Use this action when you need to: - Change a deletion schedule's title, description, or active status - Modify the conditions that determine which records are deleted - Pause or reactivate a deletion schedule This action is idempotent — re-running with the same parameters will produce the same result. Note: The 'object' field cannot be modified after schedule creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The new title/name of the deletion schedule. |
| `active` | boolean | No | Whether the deletion schedule is active. Set to false to pause the schedule. |
| `conditions` | object | No | Conditions object for deletion schedule - defines criteria for matching records. |
| `description` | string | No | The description of the deletion schedule. |
| `deletion_schedule_id` | integer | Yes | The unique ID of the deletion schedule to update. You can find this ID from the deletion schedule URL in Zendesk admin or from listing deletion schedules. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Dynamic Content Variant

**Slug:** `ZENDESK_UPDATE_DYNAMIC_CONTENT_ITEMS_VARIANT`

Update a single variant of a dynamic content item in Zendesk. Use when you need to modify the content, locale, active status, or default status of one specific variant by its ID. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the variant is active and usable |
| `content` | string | Yes | The new content for the variant |
| `default` | boolean | No | Whether the variant is the default for the item it belongs to |
| `locale_id` | integer | Yes | An active locale ID for this variant |
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item containing the variant to update |
| `dynamic_content_variant_id` | integer | Yes | The ID of the variant to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Dynamic Content Variants

**Slug:** `ZENDESK_UPDATE_DYNAMIC_CONTENT_ITEMS_VARIANTS`

Update one or more variants of a dynamic content item in Zendesk. Use when you need to bulk update variant content, active status, or default status for a specific dynamic content item. Each variant can be identified by either its ID or locale ID. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `variants` | array | Yes | List of variants to update. Each variant must include either an 'id' or 'locale_id', and can optionally include 'content', 'active', and 'default'. |
| `dynamic_content_item_id` | integer | Yes | The ID of the dynamic content item whose variants you want to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Macro

**Slug:** `ZENDESK_UPDATE_MACRO`

Update an existing macro in Zendesk. Macros are predefined responses that agents can apply to tickets to quickly perform common actions. Use this action when you need to: - Change a macro's title or description - Modify the actions the macro performs (e.g., change status, priority, or assignee) - Activate or deactivate a macro - Restrict macro access to specific users or groups This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the macro. |
| `active` | boolean | No | Whether the macro should be displayed in the UI. Use false to hide the macro without deleting it. |
| `actions` | array | Yes | List of actions the macro will perform. Each action specifies a field to modify and the value to set. |
| `macro_id` | integer | Yes | The ID of the macro to update. You can find macro IDs from the List Macros action or from the macro URL in Zendesk admin. |
| `description` | string | No | The description of the macro explaining what it does. |
| `restriction` | object | No | Who may access the macro. Null when everyone in the account can access it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Automations

**Slug:** `ZENDESK_UPDATE_MANY_AUTOMATIONS`

Update multiple automations in Zendesk in a single request. Use when you need to bulk update automation settings such as position, active status, or title for multiple automations at once. Note: You might be restricted from updating some default automations. If included in a bulk update, the unrestricted automations will be updated. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `automations` | array | Yes | List of automations to update. Each automation must include an 'id' and can optionally include 'position', 'active', and 'title'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Macros

**Slug:** `ZENDESK_UPDATE_MANY_MACROS`

Update multiple macros in Zendesk in a single request. Use when you need to bulk update macro settings such as position or active status for multiple macros at once. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `macros` | array | Yes | List of macros to update. Each macro must include an 'id' and can optionally include 'position' and 'active'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Object Triggers

**Slug:** `ZENDESK_UPDATE_MANY_OBJECT_TRIGGERS`

Update multiple custom object triggers in Zendesk in a single request. Use when you need to bulk update trigger settings such as position, active status, or title for multiple custom object triggers at once. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `triggers` | array | Yes | List of custom object triggers to update. Each trigger must include an 'id' and can optionally include 'position' and 'active'. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car', 'order'). This is a path parameter that identifies which custom object's triggers to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Zendesk Organizations

**Slug:** `ZENDESK_UPDATE_MANY_ORGANIZATIONS`

Bulk update multiple Zendesk organizations in a single request. Use when you need to update organization details such as name, notes, details, domain names, or tags for multiple organizations at once. The action is queued as a background job - use the job_status URL to poll for completion. Maximum 100 organizations per request. Note: Agents without permission restrictions can only update 'notes' on organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of organization IDs to update (max 100). Required if external_ids is not provided. |
| `external_ids` | string | No | Comma-separated list of external organization IDs to update (max 100). Required if ids is not provided. |
| `organizations` | array | Yes | List of organizations to update. Each organization must include an 'id' and can optionally include 'name', 'notes', 'details', 'external_id', 'domain_names', and 'tags'. Agents without permission restrictions can only update 'notes'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Tickets

**Slug:** `ZENDESK_UPDATE_MANY_TICKETS`

Update multiple tickets in Zendesk in a single request. Use when you need to bulk update ticket fields such as status, priority, tags, assignee, or group for multiple tickets at once. The API accepts up to 100 ticket objects per request. Changes are processed asynchronously and return a job_status object for tracking progress.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of ticket IDs to update. Can be used as an alternative to passing ticket objects in the body. When provided, tickets matching these IDs will be updated with the values from the ticket objects. |
| `tickets` | array | Yes | List of ticket update objects. Each object must include an 'id' field and can optionally include 'status', 'priority', 'tags', 'custom_status_id', 'assignee_id', and 'group_id'. Maximum 100 tickets per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Ticket Triggers

**Slug:** `ZENDESK_UPDATE_MANY_TRIGGERS`

Update multiple ticket triggers in Zendesk in a single request. Use when you need to bulk update trigger settings such as position, active status, or category for multiple triggers at once. This action allows you to update the order (position) or activate/deactivate multiple triggers efficiently. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `triggers` | array | Yes | List of triggers to update. Each trigger must include an 'id' and can optionally include 'active', 'position', and 'category_id'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Users

**Slug:** `ZENDESK_UPDATE_MANY_USERS`

Bulk update multiple Zendesk users in a single request. Use when you need to apply the same or different updates to up to 100 users at once. Provide either a single `user` object to apply identical changes to all specified users, or an array of `users` objects for individual updates per user. The operation is asynchronous and returns a job_status that you can poll to track completion. This action is idempotent — re-running with the same parameters will apply the same updates again.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of Zendesk user IDs to update (max 100). Use this when you have the numeric user IDs. Required if external_ids is not provided. |
| `user` | object | No | Individual user fields to update for bulk operation. |
| `users` | array | No | Array of user objects to update each user individually. Use this when you need to apply different updates to different users. The number of user objects should match the number of IDs provided. |
| `external_ids` | string | No | Comma-separated list of external user IDs to update (max 100). Use this when you have external IDs assigned to users. Required if ids is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Many Views

**Slug:** `ZENDESK_UPDATE_MANY_VIEWS`

Update multiple views in Zendesk in a single request. Use when you need to bulk update view settings such as position, active status, or title for multiple views at once. Note: You might be restricted from updating some default views. If included in a bulk update, the unrestricted views will be updated. This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `views` | array | Yes | List of views to update. Each view must include an 'id' and can optionally include 'position', 'active', and 'title'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Object Trigger

**Slug:** `ZENDESK_UPDATE_OBJECT_TRIGGER`

Update an existing custom object trigger in Zendesk. Triggers define automated actions that execute when specific conditions are met on custom object records. Use this action when you need to: - Change a trigger's title or description - Enable or disable a trigger - Modify the conditions that cause the trigger to fire - Update the actions the trigger performs This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The title of the trigger. Required in the trigger object for updates. |
| `active` | boolean | No | Whether the trigger is active. Active triggers will execute when their conditions are met. |
| `actions` | array | No | An array of actions the trigger performs when its conditions are met. Each action defines what happens when the trigger fires. |
| `conditions` | object | No | An object that describes the circumstances under which the trigger performs its actions. Contains 'all' and/or 'any' arrays of condition objects with 'field', 'operator', and 'value'. |
| `trigger_id` | integer | Yes | The unique identifier of the trigger to update. This is a path parameter. |
| `description` | string | No | A description of what the trigger does. |
| `custom_object_key` | string | Yes | The unique key identifier of the custom object that owns the trigger. This is a path parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Organization Field

**Slug:** `ZENDESK_UPDATE_ORGANIZATION_FIELD`

Update a custom organization field in Zendesk. Use when you need to modify an existing organization field's properties such as title, type, description, options, or other settings. All existing custom_field_options must be included on update — omitted options will be deleted. Returns the updated organization field object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | A unique key that identifies this custom field. Must consist of only letters, numbers, and underscores. Cannot be only numbers. |
| `tag` | string | No | Optional tag for checkbox type fields |
| `type` | string ("checkbox" | "date" | "decimal" | "dropdown" | "integer" | "lookup" | "multiselect" | "regexp" | "text" | "textarea") | Yes | The custom field type. Must be one of: checkbox, date, decimal, dropdown, integer, lookup, multiselect, regexp, text, or textarea |
| `title` | string | Yes | The title of the custom field |
| `active` | boolean | No | If true, this field is available for use. If false, the field is hidden from users. |
| `position` | integer | No | Ordering of the field relative to other fields. Lower values appear first. |
| `description` | string | No | User-defined description of the field's purpose |
| `relationship_filter` | object | No | Filter definition for autocomplete in lookup fields. |
| `custom_field_options` | array | No | Required for dropdown or multiselect types. For updates: all existing options must be included (omitted options will be deleted). Pass null id for new options, include id for existing options. |
| `organization_field_id` | integer | Yes | The ID of the organization field to update |
| `regexp_for_validation` | string | No | Regular expression pattern for validating regexp type fields |
| `relationship_target_type` | string ("zen:user" | "zen:organization" | "zen:ticket") | No | Object type referenced for lookup fields. Can be zen:user, zen:organization, zen:ticket, or zen:custom_object:{key} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Organization Tags

**Slug:** `ZENDESK_UPDATE_ORGANIZATIONS_TAGS`

Add organization tags in Zendesk. Use when you need to tag an organization for categorization, filtering, or automation purposes. Tags are appended to the organization's existing tags. This action is idempotent — adding the same tag multiple times will not create duplicates in the organization's tag list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | An array of tag names to add to the organization. Tags will be appended to the existing tags list. |
| `organization_id` | integer | Yes | The ID of the organization to add tags to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Permission Policy

**Slug:** `ZENDESK_UPDATE_PERMISSION_POLICY`

Update an existing permission policy for a custom object in Zendesk. Permission policies control which records of a custom object users with a specific role can access. Use this action when you need to: - Modify record access permissions (create, read, update, delete) for a custom role - Add or remove exceptions to what records users can access - Configure group-based exclusions for custom object record permissions This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The permission policy ID. Use 'custom-role-{custom_role_id}' for custom roles or 'end-user' for the end user system role. |
| `records` | object | No | Permission settings for different record operations. |
| `custom_object_key` | string | Yes | The key of the custom object |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Resource Collection

**Slug:** `ZENDESK_UPDATE_RESOURCE_COLLECTION`

Update an existing resource collection in Zendesk. Resource collections are groups of related resources (like triggers, automations, or ticket fields) that can be managed together. Use this action when you need to: - Rename a resource collection - Modify the resources included in a collection - Update the configuration of an existing collection This action is idempotent - re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the resource collection. Must be unique among all resource collections. |
| `resources` | array | No | List of resources to include in the collection. Each resource object should include 'type' (e.g., 'triggers', 'ticket_fields') and 'resource_id' or 'identifier'. |
| `resource_collection_id` | integer | Yes | The ID of the resource collection to update. This is a required path parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Side Conversation

**Slug:** `ZENDESK_UPDATE_SIDE_CONVERSATION`

Update a side conversation on a ticket in Zendesk. Use this action to modify the state (open/closed) or subject of an existing side conversation attached to a ticket. Use when you need to: - Close a side conversation that has been resolved - Reopen a closed side conversation - Update the subject line of a side conversation This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | The new state of the side conversation. Allowed values: 'open' or 'closed'. |
| `subject` | string | No | The updated subject of the side conversation. |
| `ticket_id` | integer | Yes | The ticket identifier. Must be a valid ticket ID that exists in your Zendesk account. |
| `side_conversation_id` | string | Yes | The side conversation identifier (UUID format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Support Address

**Slug:** `ZENDESK_UPDATE_SUPPORT_ADDRESS`

Update an existing support address in Zendesk. Support addresses are email addresses that receive customer inquiries and can be configured per brand. Use this action when you need to: - Change the name of a support address - Set or change the default support address for the account - Associate a support address with a different brand Note: You cannot change the email address of an existing support address.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the support address. This is the display name used to identify the address in Zendesk. |
| `default` | boolean | No | Whether to set this address as the account's default support address. Set to true to make it the default, false otherwise. |
| `brand_id` | integer | No | The ID of the brand to associate with this support address. Use this to link the address to a specific brand. |
| `support_address_id` | integer | Yes | The ID of the support address to update. This is a required path parameter that identifies the specific recipient address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Target

**Slug:** `ZENDESK_UPDATE_TARGET`

Update an existing target in Zendesk. Targets are endpoints that receive data when triggers fire (e.g., HTTP targets, email targets, webhook targets). Use this action when you need to: - Change a target's title - Activate or deactivate a target - Update target-specific properties This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | No | Additional target data to update. Provide any target-specific fields to modify. This allows updating target-type-specific properties beyond title and active status. |
| `title` | string | No | The new title of the target |
| `active` | boolean | No | Whether the target is active |
| `target_id` | integer | Yes | The numeric ID of the target to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket Field

**Slug:** `ZENDESK_UPDATE_TICKET_FIELD`

Update an existing ticket field in Zendesk. Ticket fields define the structure and properties of custom fields on tickets. Use this action when you need to: - Rename a ticket field or update its title - Update the description or agent-only description - Change the field's position in the ticket form - Enable or disable a ticket field - Set visibility and editability for portal and agents - Make fields required for solving tickets or creating requests - Configure validation patterns for regexp fields - Set tags for checkbox fields This action is idempotent — re-running with the same parameters will produce the same result. Requires admin permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | For checkbox fields only. A tag added to tickets when the checkbox field is selected |
| `title` | string | No | The title of the ticket field |
| `active` | boolean | No | Whether this field is available |
| `creator` | boolean | No | If true, displays the creator_user_id and creator_app_name properties in the response. If the ticket field is created by an app, creator_app_name is the name of the app and creator_user_id is -1. If the ticket field is not created by an app, then creator_app_name is null. |
| `position` | integer | No | The relative position of the ticket field on a ticket. Note that for accounts with ticket forms, positions are controlled by the different forms |
| `required` | boolean | No | If true, agents must enter a value in the field to change the ticket status to solved |
| `description` | string | No | Describes the purpose of the ticket field to users |
| `sub_type_id` | integer | No | For system ticket fields of type priority and status. Defaults to 0. A priority sub type of 1 removes the Low and Urgent options. A status sub type of 1 adds the On-Hold option |
| `agent_can_edit` | boolean | No | Whether this field is editable by agents |
| `ticket_field_id` | integer | Yes | The ID of the ticket field to update |
| `title_in_portal` | string | No | The title of the ticket field for end users in Help Center |
| `agent_description` | string | No | A description of the ticket field that only agents can see |
| `visible_in_portal` | boolean | No | Whether this field is visible to end users in Help Center |
| `editable_in_portal` | boolean | No | Whether this field is editable by end users in Help Center |
| `required_in_portal` | boolean | No | If true, end users must enter a value in the field to create the request |
| `collapsed_for_agents` | boolean | No | If true, the field is shown to agents by default. If false, the field is hidden alongside infrequently used fields. Classic interface only |
| `regexp_for_validation` | string | No | For regexp fields only. The validation pattern for a field value to be deemed valid |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Ticket Tags

**Slug:** `ZENDESK_UPDATE_TICKETS_TAGS`

Update tags on a Zendesk ticket via PUT request to /api/v2/tickets/{ticket_id}/tags. Use when you need to add, replace, or manage tags on an existing ticket. This operation replaces all existing tags with the provided list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | An array of tag names to set on the ticket. Using this endpoint replaces all existing tags on the ticket with the provided tags. |
| `ticket_id` | integer | Yes | The ID of the ticket to update tags for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket Trigger

**Slug:** `ZENDESK_UPDATE_TICKET_TRIGGER`

Update an existing ticket trigger in Zendesk. Triggers are business rules that automatically perform actions on tickets when certain conditions are met. Use this action when you need to: - Change a trigger's title, active status, position, or description - Modify the conditions that trigger the action - Update the actions the trigger performs - Reassign a trigger to a different category - Deactivate a trigger without deleting it This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The new title/name of the trigger. Must be unique among all triggers. |
| `active` | boolean | No | Whether the trigger is active and will execute. |
| `actions` | array | No | List of actions the trigger will perform when triggered. Each action specifies a field to modify and the value to set. |
| `position` | integer | No | The position of the trigger which specifies the order it will be executed. Lower numbers execute first. |
| `conditions` | object | No | Conditions object for trigger - defines when the trigger should execute. |
| `trigger_id` | integer | Yes | The ID of the trigger to update. You can find trigger IDs from the List Triggers action or from the trigger URL in Zendesk admin. |
| `category_id` | string | No | The ID of the category to assign the trigger to. Categories help organize triggers in the Zendesk admin interface. |
| `description` | string | No | A description of what the trigger does. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Trigger Category

**Slug:** `ZENDESK_UPDATE_TRIGGER_CATEGORY`

Update an existing trigger category in Zendesk. Trigger categories are used to organize ticket triggers in the Zendesk admin interface. Use this action when you need to: - Rename a trigger category - Change the display order of a trigger category - Update both name and position of a trigger category This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name of the trigger category. Must be unique among all trigger categories. |
| `position` | integer | No | The new position of the trigger category which specifies the order it will be displayed. Lower numbers appear first. |
| `trigger_category_id` | string | Yes | The ID of the ticket trigger category to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User

**Slug:** `ZENDESK_UPDATE_USER`

Update selected core fields on one Zendesk user by numeric user ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | object | Yes | Core user fields to update. At least one field is required. |
| `user_id` | string | Yes | ID of the Zendesk user to update, as a string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk User Field

**Slug:** `ZENDESK_UPDATE_USER_FIELD`

Update an existing user field in Zendesk. Use when you need to modify the title, description, options, or other properties of a custom user field. Supports updating text, checkbox, dropdown, multiselect, date, integer, decimal, regexp validation, and lookup types. Only administrators can update user fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | Tag value for checkbox fields |
| `title` | string | No | The new title (label) displayed for this custom field |
| `active` | boolean | No | If true, this field is available for use |
| `position` | integer | No | Ordering of the field relative to other user fields |
| `raw_title` | string | No | Dynamic content placeholder for title (supports i18n placeholders) |
| `description` | string | No | New user-defined description of this field's purpose |
| `user_field_id` | integer | Yes | The numeric ID of the user field to update. This is the field's unique numeric identifier in Zendesk, not the field key. |
| `raw_description` | string | No | Dynamic content placeholder for description (supports i18n placeholders) |
| `relationship_filter` | object | No | Filter configuration for relationship-type user fields. |
| `custom_field_options` | array | No | Updated options for dropdown or multiselect fields. Each option has a name (display) and value (internal tag). |
| `regexp_for_validation` | string | No | Regular expression pattern for validating field values |
| `relationship_target_type` | string | No | Target type for 'lookup' fields. Options: 'zen:user', 'zen:organization', 'zen:ticket', 'zen:custom_object:{key}' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk User Profile

**Slug:** `ZENDESK_UPDATE_USER_PROFILE`

Partially updates a user profile in Zendesk by identifier. Use when you need to modify specific fields of an existing profile without replacing the entire profile. This action uses JSON merge patch semantics — only provided fields are updated. Use this action when you have an existing profile identifier and need to update specific profile attributes, identifiers, or the profile name. The identifier must follow the format source:type:identifier_type:identifier_value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Person's name to set on the profile |
| `type` | string | No | Profile type (e.g., 'contact', 'user', 'account') |
| `source` | string | No | Source application/system for the profile (e.g., 'company'). Cannot be 'zendesk' as it is reserved. |
| `attributes` | object | No | JSON schema compliant object containing profile attributes/details |
| `identifier` | string | Yes | Profile identifier in format source:type:identifier_type:identifier_value (e.g., company:contact:email:john@example.com). All identifiers must belong to a single user and profile. |
| `identifiers` | array | No | List of identifiers for the profile. Each identifier must have a type and value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk User Profile By ID

**Slug:** `ZENDESK_UPDATE_USER_PROFILE_BY_ID`

Partially updates a user profile in Zendesk by profile ID. Use when you need to modify specific fields of an existing profile without replacing the entire profile. This action uses JSON merge patch semantics — only provided fields are updated. Use this action when you have a profile ID and need to update specific profile attributes, identifiers, name, source, or type. This is different from UpdateUserProfile which uses identifier lookup instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Person's name to set on the profile |
| `type` | string | No | Profile type (e.g., 'contact', 'user', 'account') |
| `source` | string | No | Source application/system for the profile (e.g., 'company'). Cannot be 'zendesk' as it is reserved. |
| `attributes` | object | No | JSON schema compliant object containing profile attributes/details |
| `profile_id` | string | Yes | The unique ID of the Sunshine profile to update. This is the profile ID returned when the profile was created. |
| `identifiers` | array | No | List of identifiers for the profile. Each identifier must have a type and value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User Identity

**Slug:** `ZENDESK_UPDATE_USERS_IDENTITY`

Update a user identity in Zendesk. Use when you need to modify an identity's verified status or other updatable fields. Note: the 'primary' field cannot be changed via this endpoint - use the Make Identity Primary endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user who owns the identity |
| `verified` | boolean | No | If true, marks the identity as verified. Deprecated - use verification_method instead for more accurate verification states. |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Current User Settings

**Slug:** `ZENDESK_UPDATE_USERS_ME_SETTINGS`

Update the settings for the currently authenticated Zendesk user. Use when modifying UI preferences like keyboard shortcuts, onboarding tooltips, theme preferences, or shared views order. This action modifies the caller's own settings only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `settings` | object | Yes | User settings to update. Can include lotus, admin_center, and shared_views_order. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Users Profiles

**Slug:** `ZENDESK_UPDATE_USERS_PROFILES`

Create or update a user profile for a specific Zendesk user by user ID and identifier. Use when you need to establish or modify a unified customer view for an existing Zendesk user. The profile is identified by both the user_id (path) and the identifier (query parameter). This endpoint uses PUT semantics - if a profile matching the identifier exists, it will be updated; otherwise, a new profile will be created. Use this action when you have a specific Zendesk user ID and need to create or update a profile using an identifier like email, phone number, or external ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `profile` | object | Yes | Profile object containing the profile data with name, identifiers, and optional attributes |
| `user_id` | string | Yes | The Zendesk user ID (numeric string) of the user to associate with the profile |
| `identifier` | string | Yes | Profile lookup identifier in format 'source:type:identifier_type:identifier_value' (e.g., 'company:contact:email:user@example.com'). This identifies which profile to create or update for the specified user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User Tags

**Slug:** `ZENDESK_UPDATE_USERS_TAGS`

Update (replace) tags for a specific Zendesk user. Use when you need to assign or modify tags on a user account for organizing, filtering, or categorizing user data. This action replaces all existing tags on the user with the provided list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | An array of tag strings to assign to the user. This will replace all existing tags on the user with the provided list. Tags are used to categorize and organize users. |
| `user_id` | integer | Yes | The numeric ID of the user whose tags to update. This is the user ID found in ticket payloads or user search results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update View

**Slug:** `ZENDESK_UPDATE_VIEW`

Update an existing view in Zendesk. Views are saved searches that allow agents to filter and organize tickets. Use this action when you need to: - Change a view's title, description, or active status - Modify a view's position in the list - Update a view's conditions or display settings - Make a view the default view This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The title of the view |
| `active` | boolean | No | Whether the view is active |
| `default` | boolean | No | If true, the view is a default view |
| `view_id` | integer | Yes | The ID of the view to update |
| `position` | integer | No | The position of the view in the list |
| `description` | string | No | The description of the view |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Account Settings

**Slug:** `ZENDESK_UPDATE_ZENDESK_ACCOUNT_SETTINGS`

Update Zendesk account-level settings including tickets, branding, localization, routing, and more. Use when you need to configure or modify account-wide settings that affect all agents and end users. Requires admin privileges to update most settings. Settings changes are persistent and affect all users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `settings` | object | Yes | The account settings to update. Must include at least one setting category. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Attachment

**Slug:** `ZENDESK_UPDATE_ZENDESK_ATTACHMENT`

Updates an attachment's malware access override setting. Use when you need to enable or restrict agent access to attachments that have been flagged for malware.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | integer | Yes | The unique ID of the attachment to update |
| `malware_access_override` | boolean | Yes | If true, allows agents to access attachments with detected malware. If false, restricts access to malware-detected attachments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Object Field

**Slug:** `ZENDESK_UPDATE_ZENDESK_CUSTOM_OBJECT_FIELD`

Update an existing custom object field in Zendesk. Custom object fields define the structure and properties of data within a custom object. Use this action when you need to: - Rename a custom object field - Update the description or display properties - Change the field's position in the UI - Enable or disable a field - Set validation patterns or make fields required This action is idempotent — re-running with the same parameters will produce the same result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | User-defined display name for the field. |
| `active` | boolean | No | If true, the field is active and can be used. If false, the field is inactive and hidden in the UI. |
| `position` | integer | No | Position of the field in the UI. Lower values are displayed first. |
| `required` | boolean | No | If true, the field is required when creating or updating records. If false, the field is optional. |
| `description` | string | No | User-defined description of the field. |
| `custom_object_key` | string | Yes | The key of a custom object (e.g., 'car'). This is a path parameter that identifies the parent custom object. |
| `regexp_for_validation` | string | No | A regular expression pattern used to validate the field value. Only applies to text-type fields. |
| `custom_object_field_key_or_id` | string | Yes | The key or id of a custom object field. This can be either the human-readable key (e.g., 'make') or the numeric ID of the field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Dynamic Content Item

**Slug:** `ZENDESK_UPDATE_ZENDESK_DYNAMIC_CONTENT_ITEM`

Update a dynamic content item in Zendesk. The only attribute that can be changed is the name. Use when you need to rename an existing dynamic content item after confirming its ID. Note: Dynamic content items are used to store multilingual content for use in triggers, automations, and macros. Updating the name affects all references to this item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the dynamic content item. The name must be unique and is used as the identifier when referencing this item in triggers, automations, or dynamic content templates. |
| `dynamic_content_item_id` | integer | Yes | The unique ID of the dynamic content item to update. You can get this ID from the item's URL or by listing dynamic content items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Organization

**Slug:** `ZENDESK_UPDATE_ZENDESK_ORGANIZATION`

Update an organization in Zendesk. After updating, re-fetch via ZENDESK_GET_ZENDESK_ORGANIZATION if downstream logic depends on current data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | New data for the organization Must use valid Zendesk organization field names (e.g., `name`, `notes`, `domain_names`, `external_id`); invalid fields may be silently ignored. `domain_names` must be an array and is treated as a full replacement — always include existing domains alongside new ones to avoid removing them. Zendesk trims whitespace from `name`, so near-identical strings may collide on uniqueness validation. |
| `organization_id` | integer | Yes | ID of the organization to update Verify the exact ID before updating — multiple organizations may share similar names and updates are persistent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Request

**Slug:** `ZENDESK_UPDATE_ZENDESK_REQUESTS`

Update a ticket request in Zendesk with a comment or collaborators. Use when you need to modify request fields like status, priority, or add comments after confirming the request ID. After updating, re-fetch via ZENDESK_GET_REQUESTS if downstream logic depends on current data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Tags to set on the request. Using this replaces all existing tags. |
| `solved` | boolean | No | Whether or not the request is solved. An end user can set this if 'can_be_solved_by_me' is true for that user. |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved" | "closed") | No | The state of the request after the update. Allowed values: 'new', 'open', 'pending', 'hold', 'solved', 'closed'. |
| `comment` | object | No | Comment object for adding a comment to the request. |
| `group_id` | integer | No | The ID of the group to assign the request to. |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | The priority of the request. Allowed values: 'urgent', 'high', 'normal', 'low'. |
| `request_id` | integer | Yes | The ID of the request to update. Find this ID from the request URL or from a list requests action. |
| `assignee_id` | integer | No | The ID of the agent to assign the request to. The agent must be a member of the group the request is assigned to. |
| `custom_fields` | array | No | Custom field values to set on the request. Each item should include 'id' (field ID) and 'value'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zendesk Ticket

**Slug:** `ZENDESK_UPDATE_ZENDESK_TICKET`

Tool to update a ticket in Zendesk. Use when you need to modify ticket fields like status, priority, or subject after confirming the ticket ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | No | Optional raw ticket update object. Provide this to send fields under the 'ticket' wrapper directly. Alternatively, use the un-nested fields above. |
| `tags` | array | No | Tags to set on the ticket. Using tags here replaces all existing tags. |
| `due_at` | string | No | Due date/time for task-type tickets (ISO 8601). |
| `status` | string ("new" | "open" | "pending" | "hold" | "solved") | No | Ticket status category. Allowed values: new, open, pending, hold, solved. Note: If your account has custom statuses enabled, use custom_status_id instead. |
| `subject` | string | No | Ticket subject/title to set during update. |
| `group_id` | integer | No | The numeric ID of the group to assign the ticket to. |
| `metadata` | object | No | Custom metadata to attach to this update's audit (approximately up to 1 KB). |
| `priority` | string ("urgent" | "high" | "normal" | "low") | No | Ticket priority. Allowed values: urgent, high, normal, low. Values are case-sensitive. |
| `email_ccs` | array | No | Email CCs to add/remove. Each object includes user_id or user_email, optional user_name, and action ('put'&#124;'delete'). |
| `followers` | array | No | Followers to add/remove. Each object should include user_id or user_email, with optional action ('put'&#124;'delete'). |
| `ticket_id` | integer | Yes | ID of the ticket to update. |
| `assignee_id` | integer | No | The numeric ID of the agent to assign the ticket to. The agent must be a member of the group the ticket is assigned to. Use this parameter directly rather than passing through data to avoid 400 errors. |
| `safe_update` | boolean | No | Enable optimistic locking to prevent overwrites during collisions. Must be paired with updated_stamp to take effect. |
| `comment_body` | string | No | Text body of the comment to add. |
| `collaborators` | array | No | Collaborators to set (replaces existing). Accepts user IDs, emails, or {name, email} objects. |
| `custom_fields` | array | No | List of custom field values. Each item: {id: number, value: any}. |
| `updated_stamp` | string | No | Last-known updated_at timestamp (ISO 8601) used together with safe_update. |
| `comment_public` | boolean | No | Whether the added comment is public (visible to requester) or internal. Defaults to true (public); set false to create an internal note. |
| `comment_uploads` | array | No | Upload tokens to attach files to the comment. |
| `collaborator_ids` | array | No | Collaborator user IDs to set (replaces existing). |
| `custom_status_id` | integer | No | The ID of a custom ticket status. Required for accounts with custom statuses enabled. Use this instead of 'status' when custom statuses are active. Retrieve available custom status IDs from the Custom Ticket Statuses API. |
| `comment_author_id` | integer | No | Author ID for the comment, if different from the authenticated user. |
| `comment_html_body` | string | No | HTML body of the comment to add. |
| `additional_collaborators` | array | No | Add collaborators without removing existing ones. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert Custom Object Record By External ID or Name

**Slug:** `ZENDESK_UPSERT_CUSTOM_OBJECT_RECORD_BY_EXTERNAL_ID_OR_NAME`

Create or update a custom object record in Zendesk by external_id or name. Use when you need to create a new record or update an existing one based on either its external_id (preferred) or name. If a record matching the external_id or name exists, it will be updated. If no matching record is found, a new one will be created. This action is idempotent and safe to retry. Note: Either external_id or name (or both) must be provided to identify the record. If both are provided, external_id takes precedence for matching.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of a custom object record. If a record with this name exists (and no external_id matches), it will be updated. If no record is found and external_id is provided, a new record will be created. |
| `external_id` | string | No | The external id of a custom object record. If a record with this external_id exists, it will be updated. If not found and name is provided, a new record will be created with this external_id. |
| `record_data` | object | No | Schema for a custom object record. |
| `custom_object_key` | string | Yes | The key of a custom object. This is a user-defined unique identifier for the custom object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify Subdomain Availability

**Slug:** `ZENDESK_VERIFY_SUBDOMAIN_AVAILABILITY`

Verify if a subdomain name is available for use in Zendesk. Returns a success boolean indicating whether the subdomain can be registered. Use when checking if a desired subdomain name is available before creating a new Zendesk account or subdomain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `subdomain` | string | Yes | The subdomain name to verify. The name cannot contain underscores, hyphens, or spaces. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify Support Address

**Slug:** `ZENDESK_VERIFY_SUPPORT_ADDRESS`

Verify a support address forwarding in Zendesk. This action sends a verification request for the specified support address to confirm that the address is properly configured and can receive email forwarding. Use this action when you need to: - Verify a newly created support address is working correctly - Re-verify an existing support address after configuration changes - Confirm email forwarding is properly set up for a support address This action is idempotent — verifying an already-verified address will return success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `support_address_id` | integer | Yes | The ID of the support address to verify. You can find this ID from the support address listing or from the address details in Zendesk admin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify User Identity

**Slug:** `ZENDESK_VERIFY_USER_IDENTITY`

Set a user identity as verified in Zendesk. This action marks an email address or other identity as confirmed, indicating the user has proven ownership. Use when you need to manually verify a user's identity after they have completed an out-of-band verification process or when you want to override the verification status for administrative purposes. Note: This action cannot verify the account owner's email identity due to security restrictions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The numeric ID of the user |
| `user_identity_id` | integer | Yes | The numeric ID of the user identity to verify |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### New User Created

**Slug:** `ZENDESK_NEW_USER_TRIGGER`

**Type:** webhook

Triggered when a new user is created in Zendesk.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `events` | array | Yes | The events to subscribe to. |
| `name` | string | Yes | Name of the webhook. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | integer | Yes | The Zendesk account ID |
| `detail` | object | Yes | Detailed information about the user |
| `event` | object | No | Additional event information |
| `id` | string | Yes | The event UUID |
| `subject` | string | Yes | The subject of the event |
| `time` | string | Yes | The timestamp of the event |
| `type` | string | Yes | The type of the event |
| `zendesk_event_version` | string | Yes | The version of the Zendesk event |

### New Zendesk Ticket

**Slug:** `ZENDESK_NEW_ZENDESK_TICKET_TRIGGER`

**Type:** poll

Triggers when a new ticket is created in a specified Zendesk view.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of Zendesk ticket event |
| `ticket` | object | Yes | Ticket details |
