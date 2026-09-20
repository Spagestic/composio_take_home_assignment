# Plain

Plain is a collaborative support platform for B2B support teams, offering a modern, AI-powered interface to consolidate support channels and assist customers efficiently.

- **Category:** customer support
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 23
- **Triggers:** 11
- **Slug:** `PLAIN`
- **Version:** 20260819_00

## Tools

### Add Customer To Group

**Slug:** `PLAIN_ADD_CUSTOMER_TO_GROUP`

Tool to add a customer to one or more customer groups. Use when you have a customer and groups ready.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customerId` | string | Yes | ID of the customer to add to groups. |
| `customerGroupIdentifiers` | array | Yes | List of customer group identifiers. Must contain at least one identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Group

**Slug:** `PLAIN_CREATE_CUSTOMER_GROUP`

Creates a new customer group in Plain for organizing and segmenting customers. Customer groups allow you to categorize customers (e.g., by pricing tier, feature access, or support level) and manage them more effectively in your support workflow. Each group has a unique key, display name, and visual color for easy identification. Use this when you need to create a new customer segment for organization or filtering purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Unique identifier key for the customer group. Must be unique across all customer groups in your workspace. Use lowercase with underscores (e.g., 'vip_customers'). |
| `name` | string | Yes | Display name of the customer group (e.g., 'VIP Customers', 'Free Tier'). Used for organization and display purposes. |
| `color` | string | Yes | Hex color code for the group (e.g., #FF5733). Must be a valid 6-digit hex color starting with #. |
| `externalId` | string | No | Optional external ID to link this customer group with an identifier from your system (e.g., Stripe plan ID, internal database ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Thread

**Slug:** `PLAIN_CREATE_THREAD`

Tool to create a new thread. Use after obtaining valid customer identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Title of the new thread |
| `assignedTo` | object | No | Optional user assignment for the thread |
| `components` | array | No | Optional list of content components for the thread |
| `labelTypeIds` | array | No | Optional list of label type IDs to assign |
| `customerIdentifier` | object | Yes | Identifier object for the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer

**Slug:** `PLAIN_DELETE_CUSTOMER`

Tool to delete a customer from the system. Use when you need to remove a customer by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | Unique identifier of the customer to delete, as returned by the Plain API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User

**Slug:** `PLAIN_DELETE_USER`

Tool to delete a user from the system. Use when you need to remove a user by their ID after confirming existence.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the user to delete, as returned by the Plain API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Company

**Slug:** `PLAIN_FETCH_COMPANY`

Tool to fetch company details by ID. Use when you need the full profile of a company, including name, domain, contract value, owner info, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | string | Yes | Plain's internal ID of the company to fetch, e.g., 'cmp_01H1P4TE62AS5KZ4CZFC0578ED'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Issues

**Slug:** `PLAIN_FETCH_ISSUES`

Fetches external issue tracker links (Jira, Linear, GitHub, etc.) associated with a customer's threads. Returns a flattened list of all issue links across the customer's threads, including the thread context for each issue. Useful for getting a complete view of all external issues related to a customer. With defaults, returns up to threadFirst×linkFirst (2,500) total issue links; results are truncated if limits are exceeded, so reduce threadFirst or linkFirst for large datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkFirst` | integer | No | Maximum number of issue links to fetch per thread. Must be between 1-100. Defaults to 50. |
| `customerId` | string | Yes | The unique identifier of the customer whose external issue tracker links (Jira, Linear, etc.) are to be retrieved. |
| `threadFirst` | integer | No | Maximum number of customer threads to fetch. Must be between 1-100. Defaults to 50. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Tier

**Slug:** `PLAIN_FETCH_TIER`

Tool to fetch a tier by its ID. Use when you have a tier ID and need its metadata before proceeding. Example: "Fetch tier with ID tier_123".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tier_id` | string | Yes | The unique identifier of the tier to fetch (e.g., 'tier_123') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer By Email

**Slug:** `PLAIN_GET_CUSTOMER_BY_EMAIL`

Fetch customer details by email address. Returns customer information if found, or null if no customer exists with that email.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Email address of the customer to fetch |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer By ID

**Slug:** `PLAIN_GET_CUSTOMER_BY_ID`

Tool to retrieve details of a specific customer by their unique ID. Use after obtaining the customer's ID to fetch their complete record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the customer to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customers

**Slug:** `PLAIN_GET_CUSTOMERS`

Tool to fetch a list of customers. Use when retrieving multiple customer records with pagination, filtering, or sorting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of customers to fetch before the 'before' cursor. Must be ≥ 1. |
| `after` | string | No | Cursor for forward pagination. Use with 'first'. |
| `first` | integer | No | Number of customers to fetch after the 'after' cursor. Must be ≥ 1. |
| `before` | string | No | Cursor for backward pagination. Use with 'last'. |
| `sortBy` | object | No | Sorting instructions for the customers list. |
| `filters` | object | No | Filters to apply when fetching customers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Thread By ID

**Slug:** `PLAIN_GET_THREAD_BY_ID`

Fetches comprehensive details of a specific thread by ID, including customer info, status, priority, labels, and assignments. Returns null if thread not found.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique thread identifier in format: prefix_26chars (e.g., th_01ABC...). Use LIST_THREADS or CREATE_THREAD to obtain valid IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User By ID

**Slug:** `PLAIN_GET_USER_BY_ID`

Fetch workspace user/team member by ID. Returns detailed information about a workspace team member including their name, email, status, and avatar. Note: This fetches workspace users (team members), not customers. Use GET_CUSTOMER_BY_ID for customer data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier of the workspace user/team member to fetch (format: u_XXXXXX) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Groups

**Slug:** `PLAIN_LIST_CUSTOMER_GROUPS`

Tool to list all customer groups. Use when you need to retrieve group metadata with optional pagination or filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of groups to fetch before the 'before' cursor. Must be ≥ 1. |
| `after` | string | No | Cursor for forward pagination. Use with 'first'. |
| `first` | integer | No | Number of groups to fetch after the 'after' cursor. Must be ≥ 1. |
| `before` | string | No | Cursor for backward pagination. Use with 'last'. |
| `filters` | object | No | Filters to apply when fetching customer groups. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Threads (Deprecated)

**Slug:** `PLAIN_LIST_THREADS`

DEPRECATED: Use PLAIN_PLAIN_QUERY_THREADS instead. Lists all threads (support conversations) in Plain. Returns thread summaries including ID, reference, title, status, and priority. Use this action to: - Get an overview of all threads in the system - Fetch threads with pagination for large datasets - Find threads by browsing through the list Pagination: Use 'first' for forward pagination (newest first) or 'last' for backward pagination (oldest last). For paginated results, use the cursors from pageInfo (endCursor/startCursor) with 'after'/'before' parameters. If no pagination parameters are provided, returns all threads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of threads to fetch in backward direction. Use for fetching the last N threads or N threads before 'before' cursor. Cannot be used with 'first'. |
| `after` | string | No | Cursor for forward pagination. Get threads after this cursor. Use with 'first'. Obtain from pageInfo.endCursor of previous response. |
| `first` | integer | No | Number of threads to fetch in forward direction. Use for fetching the first N threads or N threads after 'after' cursor. Cannot be used with 'last'. |
| `before` | string | No | Cursor for backward pagination. Get threads before this cursor. Use with 'last'. Obtain from pageInfo.startCursor of previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tiers

**Slug:** `PLAIN_LIST_TIERS`

Tool to retrieve a list of tiers with pagination. Use when you need to browse available tiers after determining pagination cursors. Example: 'List tiers with first=25'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of items to fetch in backward pagination; must be ≥ 1. |
| `after` | string | No | Cursor for forward pagination, used together with 'first'. |
| `first` | integer | No | Number of items to fetch in forward pagination; must be ≥ 1. |
| `before` | string | No | Cursor for backward pagination, used together with 'last'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Threads

**Slug:** `PLAIN_QUERY_THREADS`

Tool to retrieve a paginated list of threads. Use when you need to list threads with optional status filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Cursor for pagination returned by a previous call. Omit for first page. Use the cursor from each response to fetch the next page; omitting it resets to the first page. |
| `statuses` | array | No | Filter threads by status. Supported values: TODO, SNOOZED, DONE. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Customer From Group

**Slug:** `PLAIN_REMOVE_CUSTOMER_FROM_GROUP`

Removes a customer from one or more customer groups in Plain. Use this action to revoke customer group memberships. The customer must be a member of the specified group(s) - attempting to remove a customer from a group they're not in will result in an error. Groups can be identified by either their Plain internal ID (customerGroupId) or their unique key (customerGroupKey). Common use cases: - Downgrade customer tier (e.g., remove from premium_tier group) - Remove customer from beta access groups - Clean up group memberships after customer status changes

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customerId` | string | Yes | Plain customer ID (format: 'c_01ABC...') of the customer to remove from groups. |
| `customerGroupIdentifiers` | array | Yes | List of customer group identifiers to remove the customer from. Must contain at least one identifier. Each identifier must specify either customerGroupId or customerGroupKey. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run GraphQL Query

**Slug:** `PLAIN_RUN_GRAPHQL_QUERY`

Execute any GraphQL query or mutation against Plain API. Use when no specific action exists or for complex operations like thread timelines, advanced filtering, and custom data retrieval. Supports queries, mutations, fragments, and variables.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | A valid GraphQL query or mutation string for Plain API. Use this for any operation not covered by specific actions. Supports queries, mutations, inline fragments, and variables. DateTime fields (e.g., createdAt, updatedAt) are objects requiring subfield selection: use createdAt { iso8601 } — omitting subfields causes GRAPHQL_VALIDATION_FAILED. For paginated connections, request pageInfo { hasNextPage endCursor } and pass endCursor as the cursor argument in subsequent queries. |
| `variables` | object | No | Variables for the GraphQL operation. Keys must match variable names in the query (without '$'). Use empty dict {} if no variables needed. Date range filter values must be UTC-normalized; non-UTC timestamps in createdAt or updatedAt filters silently exclude boundary records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Message

**Slug:** `PLAIN_SEND_MESSAGE`

Tool to send a new message within a thread. Use after identifying the thread and preparing message content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `threadId` | string | Yes | Unique identifier of the thread to reply to |
| `textContent` | string | Yes | Plain text content of the message. If you want to send markdown-formatted content, provide the same content here and in markdownContent. |
| `impersonation` | object | No | Impersonate a customer when sending the message |
| `markdownContent` | string | No | Optional markdown-formatted content of the message. If provided, textContent should contain the plain text version of the same content. |
| `channelSpecificOptions` | object | No | Channel-specific options such as email CC/BCC recipients |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Company

**Slug:** `PLAIN_UPDATE_COMPANY`

Upserts (creates or updates) a company in Plain. Provide either companyId (for updating an existing company by ID) or companyDomainName (for upserting by domain). Use this to create new companies, update existing company details (name, domain, contract value), or assign account owners.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the company. |
| `companyId` | string | No | Existing company ID to update (format: 'co_...'). Provide either companyId OR companyDomainName. |
| `domainName` | string | Yes | Domain name for the company (e.g., 'acme.com'). |
| `contractValue` | integer | No | Optional contract value in cents. Must be non-negative. |
| `companyDomainName` | string | No | Company domain name for lookup/upsert (e.g., 'acme.com'). Provide either companyId OR companyDomainName. |
| `accountOwnerUserId` | string | No | ID of the user to assign as account owner. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Thread

**Slug:** `PLAIN_UPDATE_THREAD`

Tool to update a thread's title. Use when renaming a thread after confirming its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | New title for the thread |
| `threadId` | string | Yes | Unique identifier of the thread to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert Customer

**Slug:** `PLAIN_UPSERT_CUSTOMER`

Tool to upsert (create or update) a customer. Use when syncing or ensuring a customer record exists before subsequent actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `onCreate` | object | Yes | Details for creation if not found. |
| `onUpdate` | object | Yes | Details for update if found. |
| `identifier` | object | Yes | Selector for existing customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Customer Event

**Slug:** `PLAIN_CUSTOMER_EVENT`

**Type:** webhook

Fires when a customer in Plain is created, updated or deleted.

`event_type` says which it was, `created`, `updated` or `deleted`, in the
same vocabulary the config filters on — so a single subscription to all
three can branch downstream without matching on Plain's raw event names.

Group membership changes are a separate slug,
`customer_group_membership_changed`.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | array | No | Only fire for these kinds of event, e.g. `['created', 'deleted']`. Choose from `created`, `updated` and `deleted`. Leave unset to fire for every kind. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | object | No | A customer record in Plain. |
| `event_type` | string ("created" | "updated" | "deleted") | Yes | What happened to the customer: `created`, `updated` or `deleted`. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_customer` | object | No | A customer record in Plain. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Customer Group Changed

**Slug:** `PLAIN_CUSTOMER_GROUP_CHANGED`

**Type:** webhook

Fires when a customer group is created, edited or deleted in Plain.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_group` | object | No | A group customers can belong to, used for segmentation in Plain. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_customer_group` | object | No | A group customers can belong to, used for segmentation in Plain. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Customer Group Membership Changed

**Slug:** `PLAIN_CUSTOMER_GROUP_MEMBERSHIP_CHANGED`

**Type:** webhook

Fires when a customer is added to or removed from a customer group in Plain.

Use it to re-segment a customer downstream the moment their grouping in
Plain changes — move them onto a different plan's onboarding, change who
gets paged for their threads, sync the new segment into your CRM.

`change` says which direction it was, `added` or `removed`, straight from
Plain. Which group it was is the one that differs between
`customer.customer_group_memberships` and
`previous_customer.customer_group_memberships`, both of which carry the
customer's full membership list.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `change` | string ("added" | "removed") | Yes | Whether the customer joined or left a group: `added` or `removed`. |
| `customer` | object | Yes | The customer with their group memberships as they are now. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_customer` | object | Yes | The same customer with their group memberships as they were before the change. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Created

**Slug:** `PLAIN_THREAD_CREATED`

**Type:** webhook

Fires when a new support thread is opened in Plain.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `thread` | object | Yes | The thread that was created. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Custom Field Updated

**Slug:** `PLAIN_THREAD_CUSTOM_FIELD_UPDATED`

**Type:** webhook

Fires when one of your own thread fields is set, changed or cleared on a Plain thread.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_field` | object | No | One of your own structured fields set on a thread.  Exactly one of the four value fields is populated, decided by `type`. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_custom_field` | object | No | One of your own structured fields set on a thread.  Exactly one of the four value fields is populated, decided by `type`. |
| `thread` | object | Yes | The thread the field is on. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Message Received

**Slug:** `PLAIN_THREAD_MESSAGE_RECEIVED`

**Type:** webhook

Fires when an inbound message arrives on a Plain thread.

Covers email, in-app chat, Slack, Discord and Microsoft Teams, and each
channel ships its own message shape, so read `channel` before reading
`message`. For the replies your own team sends out, use the Thread Message
Sent trigger instead.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channels` | array | No | Only fire for messages that arrived on these channels, e.g. `['email', 'slack']`. Leave unset to fire for every channel. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel` | string ("email" | "chat" | "slack" | "discord" | "ms_teams") | Yes | Channel the message arrived on, and the shape `message` has. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `message` | string | Yes | The message itself. Each channel carries its own fields — read `channel` to know which shape you have. |
| `thread` | object | Yes | The thread the message arrived on. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Message Sent

**Slug:** `PLAIN_THREAD_MESSAGE_SENT`

**Type:** webhook

Fires when your team sends a message out on a Plain thread.

Covers email, in-app chat, Slack, Discord and Microsoft Teams, and each
channel ships its own message shape, so read `channel` before reading
`message`. Editing a Slack or Discord message afterwards does not fire it
again, and for messages arriving from the customer use the Thread Message
Received trigger instead.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channels` | array | No | Only fire for messages sent on these channels, e.g. `['email', 'slack']`. Leave unset to fire for every channel. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel` | string ("email" | "chat" | "slack" | "discord" | "ms_teams") | Yes | Channel the message went out on, and the shape `message` has. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `message` | string | Yes | The message itself. Each channel carries its own fields — read `channel` to know which shape you have. |
| `thread` | object | Yes | The thread the message was sent on. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Note Created

**Slug:** `PLAIN_THREAD_NOTE_CREATED`

**Type:** webhook

Fires when an internal note is added to a thread in Plain.

Carries no `mentions`: Plain only reports them on its separate mention
event, which is `PLAIN_THREAD_NOTE_MENTIONED`. Subscribing to both slugs
delivers every mentioning note twice, under two different event ids.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `note` | object | Yes | The note that was added. |
| `thread` | object | Yes | The thread the note was added to. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Note Mention Created

**Slug:** `PLAIN_THREAD_NOTE_MENTIONED`

**Type:** webhook

Fires when an internal note mentions a machine user in Plain.

The only event that carries `mentions`. The raw `<@mu_…>` markup is not
guaranteed in either `note.text` or `note.markdown`, so this slug — not
scanning the note body — is how a consumer learns who was mentioned.

Plain publishes such a note twice, here and as `thread.note_created`, so
subscribing to both this and `PLAIN_THREAD_NOTE_CREATED` delivers it
twice, under two different event ids.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `mentions` | array | No | Machine users the note mentions. Plain reports mentions of machine users only, never of human teammates. |
| `note` | object | Yes | The note that was added. |
| `thread` | object | Yes | The thread the note was added to. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Properties Updated

**Slug:** `PLAIN_THREAD_PROPERTIES_UPDATED`

**Type:** webhook

Fires when a thread's status, assignee, priority or labels change in Plain.

Every event carries the thread's new state alongside its state immediately
before the change, and names which of the four properties changed.
Assignment events also cover reassignment, so both sides can be populated.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | array | No | Only fire when one of these properties changed, e.g. `['status', 'priority']`. Choose from `status`, `assignment`, `priority` and `labels`. Leave unset to fire for all four. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed` | string ("status" | "assignment" | "priority" | "labels") | Yes | Which property changed: `status`, `assignment`, `priority` or `labels`. |
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_thread` | object | Yes | The thread as it was immediately before the change. |
| `thread` | object | Yes | The thread after the change. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |

### Thread Tenant Updated

**Slug:** `PLAIN_THREAD_TENANT_UPDATED`

**Type:** webhook

Fires when a thread's tenant is set, changed or cleared in Plain.

Plain also sends this event when a thread's tenant is reapplied without
changing, in which case both sides hold the same tenant or both are null.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique id of this event (e.g. `pEv_…`), stable across Plain's delivery retries. |
| `previous_tenant` | object | No | A tenant — the account or organisation a thread belongs to. |
| `tenant` | object | No | A tenant — the account or organisation a thread belongs to. |
| `thread` | object | Yes | The thread whose tenant changed. |
| `timestamp` | string | Yes | ISO 8601 time the event happened in Plain. |
| `workspace_id` | string | Yes | Id of the Plain workspace the event came from. |
