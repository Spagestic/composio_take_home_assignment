# Close

Close is a CRM platform designed to help businesses manage and streamline their sales processes, including calling, email automation, and predictive dialers.

- **Category:** crm
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 14
- **Triggers:** 45
- **Slug:** `CLOSE`
- **Version:** 20260915_00

## Tools

### Create Call

**Slug:** `CLOSE_CREATE_CALL`

Creates a new call record in Close.com. This tool allows you to log both inbound and outbound calls associated with a lead, supporting parameters such as lead_id, direction, and optional support for contact_id, phone, duration, note, recording_url, and user_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | A text note about the call |
| `phone` | string | No | The phone number associated with the call |
| `lead_id` | string | Yes | The ID of the lead associated with the call Must reference an existing lead; an incorrect ID silently attaches the call to the wrong lead. |
| `user_id` | string | No | The ID of the user who made/received the call |
| `duration` | integer | No | Duration of the call in seconds |
| `direction` | string ("outbound" | "inbound") | Yes | The direction of the call (outbound or inbound) |
| `contact_id` | string | No | The ID of the contact associated with the call |
| `disposition` | string ("answered" | "no-answer" | "vm-answer" | "vm-left" | "busy" | "blocked" | "error" | "abandoned") | No | The outcome of the call (answered, no-answer, vm-answer, vm-left, busy, blocked, error, abandoned) |
| `recording_url` | string | No | HTTPS URL pointing to the MP3 recording of the call |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Email

**Slug:** `CLOSE_CREATE_EMAIL`

Create or log a Close email activity. Draft creates an unsent activity. Scheduled and outbox are send-capable modes that can deliver email externally; inbox, sent, and error log outcomes. Setting followup_date can also create a follow-up task if no reply is received.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cc` | array | No | CC recipient email addresses. |
| `to` | array | No | Primary recipient email addresses. |
| `bcc` | array | No | BCC recipient email addresses. |
| `sender` | string | No | Sender address, optionally formatted with a display name. Required for inbox, scheduled, outbox, and error; optional for draft and sent. |
| `status` | string ("inbox" | "draft" | "scheduled" | "outbox" | "sent" | "error") | Yes | Email mode. inbox, sent, and error log existing outcomes; draft creates without sending; scheduled sends externally at date_scheduled; outbox sends externally now or after send_in. |
| `lead_id` | string | Yes | ID of the lead to associate with the email. Verify it before creation because a valid but wrong ID silently misassociates the activity. |
| `send_in` | integer | No | Seconds to delay an outbox external send, from 0 through 59. Valid only for outbox. |
| `subject` | string | No | Email subject. |
| `user_id` | string | No | Close user ID associated with the email. |
| `body_html` | string | No | HTML email body. Omit both body fields when template_id should be rendered server-side. |
| `body_text` | string | No | Plain-text email body. Omit both body fields when template_id should be rendered server-side. |
| `contact_id` | string | No | Contact ID to associate with the email. |
| `activity_at` | string | No | ISO 8601 datetime when the email activity occurred. |
| `attachments` | array | No | Files previously uploaded to Close to attach to this email. |
| `template_id` | string | No | Close email template ID. If both body fields are omitted, Close renders this template server-side. |
| `date_created` | string | No | ISO 8601 creation datetime when logging an existing email. |
| `followup_date` | string | No | ISO 8601 datetime for Close to create a follow-up task if no reply is received. Valid only for scheduled, outbox, or sent. |
| `date_scheduled` | string | No | ISO 8601 send datetime. Required only for scheduled, which causes future external delivery. |
| `in_reply_to_id` | string | No | Email activity ID this message replies to. |
| `email_account_id` | string | No | Close email account ID used for the activity or outbound delivery. |
| `followup_sequence_id` | string | No | Sequence ID associated with the email follow-up. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Lead

**Slug:** `CLOSE_CREATE_LEAD`

Creates a new lead in Close CRM. A lead represents a company or organization in your sales pipeline. This tool allows you to create leads with company information (name, description, website), associate contacts with emails/phones/URLs, add addresses, and set the lead status. Contacts and addresses can be nested in the lead creation request. The tool returns comprehensive lead information including the lead ID, direct URL to view in Close CRM, associated contacts with their IDs, addresses, status information, and creation/update timestamps. Note: Activities, tasks, and opportunities must be created separately after lead creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | Website URL of the company |
| `name` | string | Yes | Name of the company/lead |
| `contacts` | array | No | List of contacts associated with the lead |
| `addresses` | array | No | List of addresses associated with the lead |
| `status_id` | string | No | ID of the lead status. If not provided, organization's default status will be used |
| `description` | string | No | Description of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SMS Message

**Slug:** `CLOSE_CREATE_SMS`

This tool creates a new SMS activity in Close CRM. It is primarily used to log SMS communications, including sent messages, received messages, and draft messages. The tool requires an internal phone number (local_phone) which must be an SMS-enabled phone number owned by your Close organization. Note: Actually sending SMS messages (status 'outbox' or 'scheduled') requires A2P 10DLC compliance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The content of the SMS message |
| `status` | string ("inbox" | "draft" | "scheduled" | "outbox" | "sent") | Yes | The status of the SMS. Must be one of: inbox, draft, scheduled, outbox, sent |
| `lead_id` | string | Yes | The ID of the lead associated with the SMS Verify the lead_id before submission — an incorrect ID causes silent misassociation with no error returned. |
| `send_in` | integer | No | Number of seconds to delay sending the SMS when status is outbox. Must be less than 60 |
| `direction` | string ("inbound" | "outbound") | No | The direction of the SMS. Defaults to 'inbound' if status is inbox, otherwise 'outbound' |
| `contact_id` | string | No | The ID of the contact associated with the SMS |
| `local_phone` | string | Yes | The internal phone number used to send the SMS. Must be associated with a Phone Number of type 'internal' |
| `template_id` | string | No | The ID of an SMS Template to render and use as the message content |
| `remote_phone` | string | Yes | The recipient's phone number |
| `date_scheduled` | string | No | The date and time when the SMS should be sent (required if status is 'scheduled') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Task

**Slug:** `CLOSE_CREATE_TASK`

This tool creates a new task in Close.com. Tasks are used to track to-do items and can be associated with leads. The tool will create a task with the specified parameters using the provided text, due_date, and is_complete flags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | Yes | The date when the task is actionable. Can be date-only (YYYY-MM-DD) or date-time (YYYY-MM-DDThh:mm:ss+00:00) |
| `text` | string | Yes | Description of the task |
| `_type` | string | No | Type of task to create. Must be either 'lead' (a to-do item for a sales rep) or 'outgoing_call' (a call task). Defaults to 'lead' |
| `lead_id` | string | Yes | The ID of the lead the task is associated with An incorrect but valid lead_id silently associates the task with the wrong lead. |
| `assigned_to` | string | No | User ID of the person the task is assigned to. If omitted, assigns to the API caller |
| `is_complete` | boolean | No | Whether the task is complete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Call

**Slug:** `CLOSE_DELETE_CALL`

This tool allows you to delete a specific call activity in Close.com. It is useful for removing incorrectly logged calls or cleaning up call records. The action deletes a call activity using its unique call ID and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `call_id` | string | Yes | The unique identifier of the call activity to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contact

**Slug:** `CLOSE_GET_CONTACT`

Retrieve one Close contact by ID, optionally limiting returned fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Response field names to include. Omit to return the provider's default contact fields. |
| `contact_id` | string | Yes | ID of the contact to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Notes

**Slug:** `CLOSE_GET_NOTE`

This tool retrieves a list of note activities from Close. It allows users to fetch notes with optional filtering parameters, including filtering by lead_id, user_id, and date ranges. The tool returns details such as note content, creation and update dates, and any associated attachments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of results to skip for pagination (maps to _skip API parameter). Use together with limit to page through results. |
| `limit` | integer | No | Maximum number of results to return per page (maps to _limit API parameter). Use together with skip to page through results. |
| `lead_id` | string | No | Filter notes by a specific lead ID An incorrect lead_id silently returns notes for the wrong lead rather than raising an error; verify the lead_id before filtering. |
| `user_id` | string | No | Filter notes by a specific user ID |
| `date_created__gt` | string | No | Filter notes created after this date (ISO 8601 format) |
| `date_created__lt` | string | No | Filter notes created before this date (ISO 8601 format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Opportunity

**Slug:** `CLOSE_GET_OPPORTUNITY`

Retrieve one Close opportunity by ID with optional field projection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Response field names to include. |
| `opportunity_id` | string | Yes | ID of the opportunity to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Activities

**Slug:** `CLOSE_LIST_ACTIVITIES`

Lists one page of Close email or call activities using documented filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of matching activities to skip before this page. |
| `limit` | integer | No | Maximum activities to return in this page. Close does not publish a subtype-specific maximum. |
| `fields` | array | No | Response field names to include. Use projection to reduce large activity payloads. |
| `lead_ids` | array | No | Lead IDs whose activities should be returned. |
| `order_by` | string ("date_created" | "-date_created" | "activity_at" | "-activity_at") | No | Sort field, optionally descending with '-'. Activity-at ordering requires exactly one lead ID. |
| `user_ids` | array | No | Close user IDs whose activities should be returned. |
| `contact_ids` | array | No | Contact IDs whose activities should be returned. |
| `activity_ids` | array | No | Activity IDs to include. |
| `activity_type` | string ("email" | "call") | Yes | Activity subtype to return; selects the email or call endpoint. |
| `activity_at_gt` | string | No | Include activities that occurred strictly after this ISO 8601 date or datetime; requires order_by=-activity_at and exactly one lead ID. |
| `activity_at_lt` | string | No | Include activities that occurred strictly before this ISO 8601 date or datetime; requires order_by=-activity_at and exactly one lead ID. |
| `activity_at_gte` | string | No | Include activities that occurred at or after this ISO 8601 date or datetime; requires order_by=-activity_at and exactly one lead ID. |
| `activity_at_lte` | string | No | Include activities that occurred at or before this ISO 8601 date or datetime; requires order_by=-activity_at and exactly one lead ID. |
| `date_created_gt` | string | No | Include activities created strictly after this ISO 8601 date or datetime. |
| `date_created_lt` | string | No | Include activities created strictly before this ISO 8601 date or datetime. |
| `organization_id` | string | No | Organization ID to filter activities by. |
| `date_created_gte` | string | No | Include activities created at or after this ISO 8601 date or datetime. |
| `date_created_lte` | string | No | Include activities created at or before this ISO 8601 date or datetime. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Activity Types

**Slug:** `CLOSE_LIST_CUSTOM_ACTIVITY_TYPES`

This tool lists the custom activity types defined in a Close organization, returning each type's id and name. Use it to find the custom activity type id that filters a custom activity trigger, or before creating a custom activity instance of a given type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of results to skip for pagination (maps to _skip API parameter). Use together with limit to page through results. |
| `limit` | integer | No | Maximum number of results to return per page (maps to _limit API parameter). Use together with skip to page through results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Object Types

**Slug:** `CLOSE_LIST_CUSTOM_OBJECT_TYPES`

This tool lists the custom object types defined in a Close organization, returning each type's id and name. Use it to find the custom object type id that filters a custom activity trigger, or before creating a custom activity instance of a given type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of results to skip for pagination (maps to _skip API parameter). Use together with limit to page through results. |
| `limit` | integer | No | Maximum number of results to return per page (maps to _limit API parameter). Use together with skip to page through results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Opportunities

**Slug:** `CLOSE_LIST_OPPORTUNITIES`

List Close opportunities with aggregate values and offset pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of matching opportunities to skip before this page. |
| `limit` | integer | No | Maximum opportunities to return in this page. Close does not publish a resource-specific maximum. |
| `fields` | array | No | Response field names to include for each opportunity. |
| `status_id` | string | No | Opportunity status ID to filter by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `CLOSE_WHO_AM_I`

Return the identity (email, name) of the connected Close account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Bulk Delete Completed

**Slug:** `CLOSE_BULK_DELETE_COMPLETED`

**Type:** webhook

Triggers when a bulk delete finishes.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk delete, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Delete Created

**Slug:** `CLOSE_BULK_DELETE_CREATED`

**Type:** webhook

Triggers when a bulk delete is started.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk delete, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Delete Updated

**Slug:** `CLOSE_BULK_DELETE_UPDATED`

**Type:** webhook

Triggers when a bulk delete makes progress, carrying how many records it
has handled so far.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The bulk delete as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Edit Completed

**Slug:** `CLOSE_BULK_EDIT_COMPLETED`

**Type:** webhook

Triggers when a bulk edit finishes.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk edit, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Edit Created

**Slug:** `CLOSE_BULK_EDIT_CREATED`

**Type:** webhook

Triggers when a bulk edit is started.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk edit, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Edit Updated

**Slug:** `CLOSE_BULK_EDIT_UPDATED`

**Type:** webhook

Triggers when a bulk edit makes progress, carrying how many records it has
handled so far.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The bulk edit as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Email Created

**Slug:** `CLOSE_BULK_EMAIL_CREATED`

**Type:** webhook

Triggers when a bulk email send is started.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk email send, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Email Paused

**Slug:** `CLOSE_BULK_EMAIL_PAUSED`

**Type:** webhook

Triggers when a bulk email send is paused, either by a person or by Close
itself.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk email send, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Email Updated

**Slug:** `CLOSE_BULK_EMAIL_UPDATED`

**Type:** webhook

Triggers when a bulk email send makes progress, carrying how many
recipients it has handled so far.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The bulk email send as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Sequence Subscription Completed

**Slug:** `CLOSE_BULK_SEQUENCE_SUBSCRIPTION_COMPLETED`

**Type:** webhook

Triggers when a bulk sequence action finishes.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk sequence action, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Sequence Subscription Created

**Slug:** `CLOSE_BULK_SEQUENCE_SUBSCRIPTION_CREATED`

**Type:** webhook

Triggers when a bulk sequence subscribe, pause or resume is started.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The bulk sequence action, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Bulk Sequence Subscription Updated

**Slug:** `CLOSE_BULK_SEQUENCE_SUBSCRIPTION_UPDATED`

**Type:** webhook

Triggers when a bulk sequence action makes progress, carrying how many
contacts it has handled so far.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The bulk sequence action as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Call Deleted

**Slug:** `CLOSE_CALL_DELETED`

**Type:** webhook

Triggers when a call is deleted from a lead's timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The call as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Call Logged

**Slug:** `CLOSE_CALL_LOGGED`

**Type:** webhook

Triggers when a call is recorded on a lead, whether placed through Close or
logged after the fact. Filter on `direction` for inbound only.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The call, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Call Updated

**Slug:** `CLOSE_CALL_UPDATED`

**Type:** webhook

Triggers when a recorded call changes, such as its note, outcome, recording
or transcript.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The call as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Comment Added

**Slug:** `CLOSE_COMMENT_ADDED`

**Type:** webhook

Triggers when a comment is posted on an activity or object. The first
comment on an object also opens a thread, which fires
CLOSE_COMMENT_THREAD_STARTED in the same request.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The comment, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Custom Activity Deleted

**Slug:** `CLOSE_CUSTOM_ACTIVITY_DELETED`

**Type:** webhook

Triggers when a custom activity instance is deleted from a lead.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_activity_type_id` | string | No | Only fire for custom activities of this type, by id, e.g. `actitype_abc123`. Use `CLOSE_LIST_CUSTOM_ACTIVITY_TYPES` to find the id. Leave unset to fire for every custom activity type. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The custom activity as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Custom Activity Logged

**Slug:** `CLOSE_CUSTOM_ACTIVITY_LOGGED`

**Type:** webhook

Triggers when an instance of a custom activity type is logged on a lead.
Filter on `custom_activity_type_id` for one type only.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_activity_type_id` | string | No | Only fire for custom activities of this type, by id, e.g. `actitype_abc123`. Use `CLOSE_LIST_CUSTOM_ACTIVITY_TYPES` to find the id. Leave unset to fire for every custom activity type. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The custom activity, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Custom Activity Updated

**Slug:** `CLOSE_CUSTOM_ACTIVITY_UPDATED`

**Type:** webhook

Triggers when an existing custom activity instance changes.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `custom_activity_type_id` | string | No | Only fire for custom activities of this type, by id, e.g. `actitype_abc123`. Use `CLOSE_LIST_CUSTOM_ACTIVITY_TYPES` to find the id. Leave unset to fire for every custom activity type. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The custom activity as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Deleted

**Slug:** `CLOSE_EMAIL_DELETED`

**Type:** webhook

Triggers when an email is deleted from a lead's timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The email as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Logged

**Slug:** `CLOSE_EMAIL_LOGGED`

**Type:** webhook

Triggers when an email is recorded on a lead, whether it arrived, was
drafted, was scheduled, or was logged as already sent. Filter on
`direction` for inbound only.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The email, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Thread Deleted

**Slug:** `CLOSE_EMAIL_THREAD_DELETED`

**Type:** webhook

Triggers when an email thread is deleted from a lead.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The email thread as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Thread Started

**Slug:** `CLOSE_EMAIL_THREAD_STARTED`

**Type:** webhook

Triggers when a new email thread appears on a lead. The individual messages
arrive separately on CLOSE_EMAIL_LOGGED.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The email thread, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Thread Updated

**Slug:** `CLOSE_EMAIL_THREAD_UPDATED`

**Type:** webhook

Triggers when an email thread changes, such as a message being added to it
or its subject changing.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The email thread as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Email Updated

**Slug:** `CLOSE_EMAIL_UPDATED`

**Type:** webhook

Triggers when a recorded email changes, such as a draft being edited, an
open being recorded, or its status moving.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The email as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Creation Activity Added

**Slug:** `CLOSE_LEAD_CREATION_ACTIVITY_ADDED`

**Type:** webhook

Triggers when the 'Lead Created' entry is added to a lead's timeline. This
fires alongside CLOSE_LEAD_CREATED for the same lead and adds the timeline
position and the import that produced it.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The 'Lead Created' timeline entry, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Creation Activity Deleted

**Slug:** `CLOSE_LEAD_CREATION_ACTIVITY_DELETED`

**Type:** webhook

Triggers when a 'Lead Created' timeline entry is removed, which means its
lead was deleted.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The 'Lead Created' timeline entry as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Creation Activity Updated

**Slug:** `CLOSE_LEAD_CREATION_ACTIVITY_UPDATED`

**Type:** webhook

Triggers when a 'Lead Created' timeline entry is moved to a different lead,
which in practice means its lead was merged into another.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The 'Lead Created' timeline entry as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Status Changed

**Slug:** `CLOSE_LEAD_STATUS_CHANGED`

**Type:** webhook

Triggers when a lead moves to a different lead status, carrying both the
old and the new status. This is the status-change event itself;
CLOSE_LEAD_UPDATED also fires for the same move.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_status` | string | No | Only fire when the lead lands in this status, by label, e.g. `Customer`. These are the lead status names shown in the Close sidebar. Leave unset to fire for every status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The lead status change, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Status Change Entry Deleted

**Slug:** `CLOSE_LEAD_STATUS_CHANGE_ENTRY_DELETED`

**Type:** webhook

Triggers when a lead-status-change entry is removed from a lead's timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_status` | string | No | Only fire when the lead lands in this status, by label, e.g. `Customer`. These are the lead status names shown in the Close sidebar. Leave unset to fire for every status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The lead status change as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Lead Status Change Entry Updated

**Slug:** `CLOSE_LEAD_STATUS_CHANGE_ENTRY_UPDATED`

**Type:** webhook

Triggers when Close folds a further status change into an existing lead-
status-change timeline entry, which happens when the lead changes status
twice in quick succession.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `new_status` | string | No | Only fire when the lead lands in this status, by label, e.g. `Customer`. These are the lead status names shown in the Close sidebar. Leave unset to fire for every status. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The lead status change as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Note Added

**Slug:** `CLOSE_NOTE_ADDED`

**Type:** webhook

Triggers when a note is written on a lead.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The note, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Note Deleted

**Slug:** `CLOSE_NOTE_DELETED`

**Type:** webhook

Triggers when a note is deleted from a lead.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The note as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Note Updated

**Slug:** `CLOSE_NOTE_UPDATED`

**Type:** webhook

Triggers when an existing note is edited.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The note as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Opportunity Status Changed

**Slug:** `CLOSE_OPPORTUNITY_STATUS_CHANGED`

**Type:** webhook

Triggers when an opportunity moves to a different status, carrying the old
and new status, its type (`active`, `won` or `lost`) and the pipeline.
Filter on `new_status_type` for a deal-won automation.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_status` | string | No | Only fire when the opportunity lands in this status, by label, e.g. `Won`. These are the stage names on the pipeline in Close. Leave unset to fire for every status. |
| `new_status_type` | string | No | Only fire when the opportunity lands in a status of this type: `active`, `won` or `lost`. Set it to `won` for a deal-won automation that survives your team renaming its statuses. Leave unset to fire for all three. |
| `pipeline` | string | No | Only fire for opportunities in this pipeline, by name, e.g. `Sales`. This is the pipeline name shown in Close. Leave unset to fire for every pipeline. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The opportunity status change, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Opportunity Status Change Entry Deleted

**Slug:** `CLOSE_OPPORTUNITY_STATUS_CHANGE_ENTRY_DELETED`

**Type:** webhook

Triggers when an opportunity-status-change entry is removed from a lead's
timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_status` | string | No | Only fire when the opportunity lands in this status, by label, e.g. `Won`. These are the stage names on the pipeline in Close. Leave unset to fire for every status. |
| `new_status_type` | string | No | Only fire when the opportunity lands in a status of this type: `active`, `won` or `lost`. Set it to `won` for a deal-won automation that survives your team renaming its statuses. Leave unset to fire for all three. |
| `pipeline` | string | No | Only fire for opportunities in this pipeline, by name, e.g. `Sales`. This is the pipeline name shown in Close. Leave unset to fire for every pipeline. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The opportunity status change as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Opportunity Status Change Entry Updated

**Slug:** `CLOSE_OPPORTUNITY_STATUS_CHANGE_ENTRY_UPDATED`

**Type:** webhook

Triggers when Close folds a further status change into an existing
opportunity-status-change timeline entry.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `new_status` | string | No | Only fire when the opportunity lands in this status, by label, e.g. `Won`. These are the stage names on the pipeline in Close. Leave unset to fire for every status. |
| `new_status_type` | string | No | Only fire when the opportunity lands in a status of this type: `active`, `won` or `lost`. Set it to `won` for a deal-won automation that survives your team renaming its statuses. Leave unset to fire for all three. |
| `pipeline` | string | No | Only fire for opportunities in this pipeline, by name, e.g. `Sales`. This is the pipeline name shown in Close. Leave unset to fire for every pipeline. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The opportunity status change as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### SMS Deleted

**Slug:** `CLOSE_SMS_DELETED`

**Type:** webhook

Triggers when an SMS is deleted from a lead's timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The SMS as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### SMS Logged

**Slug:** `CLOSE_SMS_LOGGED`

**Type:** webhook

Triggers when an SMS is recorded on a lead. Filter on `direction` for
inbound only.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The SMS, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### SMS Updated

**Slug:** `CLOSE_SMS_UPDATED`

**Type:** webhook

Triggers when a recorded SMS changes, such as its status moving or a
delivery error being recorded.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The SMS as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Task Completion Entry Deleted

**Slug:** `CLOSE_TASK_COMPLETION_ENTRY_DELETED`

**Type:** webhook

Triggers when a 'task completed' entry is removed from a lead's timeline.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The task-completed entry as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### Task Completion Logged

**Slug:** `CLOSE_TASK_COMPLETION_LOGGED`

**Type:** webhook

Triggers when a 'task completed' entry appears on a lead's timeline. The
task itself also fires its own completion trigger, such as
CLOSE_LEAD_TASK_COMPLETED.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The task-completed entry, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### WhatsApp Message Deleted

**Slug:** `CLOSE_WHATSAPP_MESSAGE_DELETED`

**Type:** webhook

Triggers when a WhatsApp message is deleted from a lead's timeline.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The WhatsApp message as it last existed, immediately before it was removed. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### WhatsApp Message Logged

**Slug:** `CLOSE_WHATSAPP_MESSAGE_LOGGED`

**Type:** webhook

Triggers when a WhatsApp message is recorded on a lead. Its `direction` is
`incoming` or `outgoing`, not the `inbound`/`outbound` the other
communication triggers use.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The WhatsApp message, as Close delivered it. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |

### WhatsApp Message Updated

**Slug:** `CLOSE_WHATSAPP_MESSAGE_UPDATED`

**Type:** webhook

Triggers when a recorded WhatsApp message changes.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_field` | string | No | Only fire when this field is one of the fields that changed, e.g. `status_id`. Close batches every field one request touched into a single delivery and names them in `changed_fields`, so this is how you narrow an update trigger. Field names are the ones on the object body below. Leave unset to fire on every change. |
| `direction` | string | No | Only fire for this direction. Call and SMS use `inbound` and `outbound`; email and WhatsApp use `incoming` and `outgoing`. Leave unset to fire for both directions. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | array | Yes | Names of the object fields this delivery changed. Close batches every field touched by one request into a single `updated` delivery and lists them here, so this is what an automation branches on to tell a status change from a typo fix. |
| `data` | object | Yes | The WhatsApp message as it stands after the change. |
| `meta` | object | Yes | What Close recorded about the request that produced this event. |
| `previous_data` | object | Yes | The prior values of exactly the fields named in `changed_fields` -- a partial object over the same keys as `data`, not a full copy. A key absent here did not change. |
| `request_id` | string | No | Id of the Close request that produced this event. Severaldeliveries share one request_id when a single action emits severalevents -- deleting a comment emits comment.updated +comment.deleted + comment_thread.deleted under one request_id, anda lead merge emits lead.merged + lead.deleted under another. It isthe only way to correlate them. |
| `user_id` | string | No | Id of the Close user who performed the action. Null when Closeitself acted (auto-created tasks, consolidations, auto-pauses).Distinct from the body's `user_id`, which is the user the objectis attributed to. |
