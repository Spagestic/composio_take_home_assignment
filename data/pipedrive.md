# Pipedrive

Pipedrive is a sales management tool built around pipeline visualization, lead tracking, activity reminders, and automation to keep deals progressing

- **Category:** crm
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** No
- **Tools:** 403
- **Triggers:** 3
- **Slug:** `PIPEDRIVE`
- **Version:** 20260915_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Pipedrive?

For a step-by-step guide on creating and configuring your own Pipedrive OAuth credentials with Composio, see [How to create OAuth credentials for Pipedrive](https://composio.dev/auth/pipedrive).

### Why am I seeing "App not found" when connecting Pipedrive?

Pipedrive usually shows "App not found" when the OAuth app used for the connection is not approved or available for that user/workspace.

If you are using managed Pipedrive OAuth, this means the managed OAuth app is still under Pipedrive review/verification. If you are using your own Pipedrive OAuth app, check the app's approval/verification status in Pipedrive and make sure the user is authorizing the same app configured in the auth config. After the app is approved or corrected, start a fresh connection.

### How should I connect with my own Pipedrive OAuth app?

Create the OAuth app in Pipedrive Developer Hub, then use that app's client ID and client secret in a Pipedrive custom OAuth auth config.

Do not start the user connection by clicking **Install and Test** inside Pipedrive's OAuth app settings. That button starts Pipedrive's own test/install flow, not the Composio connection flow, and can send the user to the callback URL without the Composio auth config context.

After saving the custom auth config, start the connection from Composio and enter the Pipedrive subdomain when prompted. If Pipedrive shows "App not found", verify that the client ID and secret match the same Pipedrive OAuth app, that the app is approved/available for the user, and that the redirect URI matches the Pipedrive auth setup guide.

## Tools

### Add new activity type

**Slug:** `PIPEDRIVE_ADD_ACTIVITY_TYPE`

Adds a new activity type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the activity type |
| `color` | string | No | A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)  |
| `icon_key` | string ("task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation") | Yes | Icon graphic to use for representing this activity type |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a deal

**Slug:** `PIPEDRIVE_ADD_A_DEAL`

Add a new deal to Pipedrive with any custom fields, which vary by account and are identified by long hash keys. Check dealFields for existing custom fields. For details, visit the tutorial on adding a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The deal title |
| `value` | number | No | Monetary value of the deal |
| `org_id` | integer | No | ID of the organization |
| `status` | string | No | Status of the deal (open, won, lost). Defaults to open |
| `user_id` | integer | No | ID of the user who will be marked as owner of this deal |
| `currency` | string | No | Currency for the deal value (3-letter ISO code) |
| `stage_id` | integer | No | Stage ID for the deal |
| `person_id` | integer | No | ID of the person this deal is linked to |
| `visible_to` | integer | No | Visibility of the deal (owner, entire company etc) |
| `pipeline_id` | integer | No | Pipeline ID for the deal |
| `probability` | number | No | Success probability percentage (0-100) |
| `expected_close_date` | string | No | Expected close date in format YYYY-MM-DD |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add an activity

**Slug:** `PIPEDRIVE_ADD_AN_ACTIVITY`

New activity added. Response includes `more_activities_scheduled_in_context` to show if more are planned with the same entity. See tutorial on adding activities [here](https://pipedrive.readme.io/docs/adding-an-activity).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `done` | integer | No | Whether the activity is done (0 = not done, 1 = done) |
| `note` | string | No | Note/description of the activity |
| `type` | string | Yes | The type of the activity (matches ActivityTypes.key_string) |
| `org_id` | string | No | ID of the linked organization |
| `deal_id` | string | No | ID of the linked deal (integer or numeric string) |
| `lead_id` | string | No | ID of the linked lead (UUID string) |
| `subject` | string | Yes | The subject/title of the activity |
| `user_id` | integer | No | ID of the user who owns the activity |
| `due_date` | string | No | Due date of the activity (YYYY-MM-DD) |
| `due_time` | string | No | Due time of the activity (HH:MM) |
| `duration` | string | No | Duration of the activity (e.g., 00:30) |
| `location` | string | No | Location/address of the activity |
| `attendees` | array | No | Attendees of the activity (contacts or external emails) |
| `busy_flag` | boolean | No | Whether the activity marks the assignee as busy |
| `person_id` | integer | No | ID of the linked person |
| `project_id` | integer | No | ID of the linked project |
| `participants` | array | No | Participants of the activity |
| `public_description` | string | No | Public description synced to external calendar |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add an organization

**Slug:** `PIPEDRIVE_ADD_AN_ORGANIZATION`

Creates a new organization in Pipedrive. The 'name' parameter is required and represents the organization's name (e.g., 'Acme Corp'). Optionally specify 'owner_id' to assign an owner and 'visible_to' for visibility settings. Custom fields can also be added using field keys from organizationFields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the organization to create (required). This is typically a company or business name such as 'Acme Corp' or 'Tech Solutions Inc.' |
| `owner_id` | integer | No | Owner user ID |
| `visible_to` | integer | No | Visibility (e.g., 1=owner only, 3=entire company) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a note (Deprecated)

**Slug:** `PIPEDRIVE_ADD_A_NOTE`

DEPRECATED: Use PIPEDRIVE_PIPEDRIVE_ADD_NOTE instead. Add a note to a deal, person, organization, lead, or project in Pipedrive. At least one of deal_id, person_id, org_id, lead_id, or project_id must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `org_id` | integer | No | The ID of the organization this note will be attached to. Required unless one of (deal_id/person_id/lead_id/project_id) is specified. |
| `content` | string | Yes | The content of the note in HTML format. Subject to sanitization on the back-end. |
| `deal_id` | integer | No | The ID of the deal the note will be attached to. Required unless one of (lead_id/person_id/org_id/project_id) is specified. |
| `lead_id` | string | No | The ID of the lead the note will be attached to (UUID format). Required unless one of (deal_id/person_id/org_id/project_id) is specified. |
| `add_time` | string | No | The optional creation date & time of the note in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `person_id` | integer | No | The ID of the person this note will be attached to. Required unless one of (deal_id/lead_id/org_id/project_id) is specified. |
| `project_id` | integer | No | The ID of the project the note will be attached to. Required unless one of (deal_id/person_id/org_id/lead_id) is specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a person

**Slug:** `PIPEDRIVE_ADD_A_PERSON`

Add a new contact in Pipedrive with optional custom fields unique to each account found using the `personFields` endpoint. The endpoint also handles `data.marketing_status` for Campaigns product users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the person. REQUIRED by Pipedrive API. |
| `email` | array | No | List of email objects: { value: string, label?: string, primary?: bool } |
| `phone` | array | No | List of phone objects: { value: string, label?: string, primary?: bool } |
| `org_id` | integer | No | ID of the linked organization |
| `add_time` | string | No | Creation time (RFC 3339) |
| `owner_id` | integer | No | ID of the user who will be marked as the owner of this person |
| `label_ids` | array | No | IDs of labels to assign to the person |
| `visible_to` | integer | No | Visibility of the person (e.g., 1=owner only, 3=entire company) |
| `update_time` | string | No | Last update time (RFC 3339) |
| `marketing_status` | string | No | Marketing status (no_consent, unsubscribed, subscribed, archived). Field is available only when Campaigns is enabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a call log

**Slug:** `PIPEDRIVE_ADD_CALL_LOG`

Adds a new call log.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | The note for the call log in HTML format |
| `org_id` | integer | No | The ID of the organization this call is associated with |
| `deal_id` | integer | No | The ID of the deal this call is associated with. A call log can be associated with either a deal or a lead, but not both at once.  |
| `lead_id` | string | No | The ID of the lead in the UUID format this call is associated with. A call log can be associated with either a deal or a lead, but not both at once.  |
| `outcome` | string ("connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy") | Yes | Describes the outcome of the call |
| `subject` | string | No | The name of the activity this call is attached to |
| `user_id` | integer | No | The ID of the owner of the call log. Please note that a user without account settings access cannot create call logs for other users.  |
| `duration` | string | No | The duration of the call in seconds |
| `end_time` | string | Yes | The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.  |
| `person_id` | integer | No | The ID of the person this call is associated with |
| `start_time` | string | Yes | The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.  |
| `activity_id` | integer | No | If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don"t need to specify `deal_id`, `person_id` or `org_id`, as they will be ignored in favor of the values already available in the activity. The `activity_id` must refer to a `call` type activity.  |
| `to_phone_number` | string | Yes | The number called |
| `from_phone_number` | string | No | The number that made the call |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Call Log Audio File

**Slug:** `PIPEDRIVE_ADD_CALL_LOG_AUDIO_FILE`

Tool to attach an audio recording to an existing call log in Pipedrive. Use when you need to add audio evidence to a call log. Only one recording per call log is allowed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the call log to attach the recording to. This is the ID received when you create the call log. |
| `file` | object | Yes | Audio file to upload. FileType object with 'name' (audio filename e.g., 'recording.mp3', 'audio.wav') and 'content' (base64-encoded audio data). Must be an HTML5-compatible audio format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a channel

**Slug:** `PIPEDRIVE_ADD_CHANNEL`

New messaging channel added; registration limited to admins. Utilizes getConversations endpoint for data retrieval. Requires Messengers integration OAuth scope and a prepared Messaging app extension manifest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the channel |
| `avatar_url` | string | No | The URL for an icon that represents your channel |
| `provider_type` | string ("facebook" | "whatsapp" | "other") | No | It controls the icons (like the icon next to the conversation) |
| `template_support` | boolean | No | If true, enables templates logic on UI. Requires getTemplates endpoint implemented. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension).  |
| `provider_channel_id` | string | Yes | The channel ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add discount to deal

**Slug:** `PIPEDRIVE_ADD_DEAL_DISCOUNT`

Tool to add a discount to a deal in Pipedrive. Use when you need to apply a percentage-based or fixed amount discount to an existing deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to add the discount to |
| `type` | string ("percentage" | "amount") | Yes | Determines whether the discount is applied as a percentage or a fixed amount |
| `amount` | number | Yes | The discount amount. Must be a positive number (excluding 0). |
| `description` | string | Yes | The name of the discount |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new deal field

**Slug:** `PIPEDRIVE_ADD_DEAL_FIELD`

Adds a new deal field. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">adding a new custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the field |
| `options` | array | No | When `field_type` is either `set` or `enum`, possible options must be supplied [{"label":"red"}, {"label":"blue"}, {"label":"lilac"}] |
| `field_type` | string ("varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address") | Yes | The type of the field. Supported values: varchar, varchar_auto, text, double, monetary, date, set, enum, user, org, people, phone, time, timerange, daterange, address |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add deal field options

**Slug:** `PIPEDRIVE_ADD_DEALFIELDS_OPTIONS`

Tool to add new options to a deal custom field atomically. Use when you need to add options to enum or set type deal fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to add. At least one option is required. Each option must have a label. This is an atomic operation - either all options are added or none. |
| `field_code` | string | Yes | The unique code identifying the deal field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a follower to a deal

**Slug:** `PIPEDRIVE_ADD_DEAL_FOLLOWER`

Adds a follower to a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `user_id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a participant to a deal

**Slug:** `PIPEDRIVE_ADD_DEAL_PARTICIPANT`

Adds a participant to a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `person_id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add product to deal

**Slug:** `PIPEDRIVE_ADD_DEAL_PRODUCT`

Tool to add a product to a deal in Pipedrive. Use when you need to attach a product to an existing deal with custom pricing, quantity, duration, discount, and tax settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to which the product will be added |
| `tax` | number | No | The product tax percentage |
| `comments` | string | No | Notes or comments about the product |
| `discount` | number | No | The value of the discount (use with discount_type to specify if amount or percentage) |
| `duration` | number | No | Duration value for the product |
| `quantity` | number | Yes | The quantity of the product to add |
| `is_enabled` | boolean | No | Whether this product is enabled for the deal (cannot be disabled if deal has installments and product is the last enabled one) |
| `item_price` | number | Yes | The price value at which this product is added to the deal |
| `product_id` | integer | Yes | The ID of the product to attach to the deal |
| `tax_method` | string | No | Tax application method: 'exclusive' (tax not included in price), 'inclusive' (tax already included in price), or 'none' (no tax). Defaults to user setting. Changing this affects all products attached to the deal |
| `discount_type` | string | No | Specifies whether discount is a 'percentage' or 'amount' |
| `billing_frequency` | string | No | How often the product is billed (Growth+ plans only): 'one-time', 'annually', 'semi-annually', 'quarterly', 'monthly', or 'weekly' |
| `billing_start_date` | string | No | Billing start date in YYYY-MM-DD format (within ±10 years from today) |
| `discount_percentage` | number | No | Discount percentage (legacy parameter, use discount + discount_type instead) |
| `product_variation_id` | integer | No | The ID of the product variation if applicable |
| `billing_frequency_cycles` | integer | No | Number of times the billing frequency repeats (must be positive integer, maximum 208) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk add products to deal

**Slug:** `PIPEDRIVE_ADD_DEAL_PRODUCTS`

Tool to bulk add products to a Pipedrive deal. Use when attaching multiple products simultaneously, with maximum 100 products per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to which products will be attached |
| `data` | array | Yes | Array of product objects to attach to the deal. Maximum 100 products per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add file

**Slug:** `PIPEDRIVE_ADD_FILE`

Upload and link files to deals, people, organizations, activities, products, or leads in Pipedrive. See the "adding a file" tutorial for details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | No | File to upload (base64 content supported) |
| `org_id` | integer | No | Org Id |
| `deal_id` | integer | No | Deal Id |
| `lead_id` | string | No | Lead Id (UUID) |
| `person_id` | integer | No | Person Id |
| `product_id` | integer | No | Product Id |
| `activity_id` | integer | No | Activity Id |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new filter

**Slug:** `PIPEDRIVE_ADD_FILTER`

New filter creation returns an ID. Only one primary condition group with 'AND' and two secondary groups (one 'AND', one 'OR') are supported. Future syntax expansion possible. See tutorial for details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the filter |
| `type` | string | Yes | The type of the filter. One of: deals, leads, org, people, products, activity, projects |
| `conditions` | object | Yes | Filter conditions object. Must follow structure with a top-level 'and' group containing two groups (one 'and' and one 'or'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new goal

**Slug:** `PIPEDRIVE_ADD_GOAL`

Adds a new goal. Along with adding a new goal, a report is created to track the progress of your goal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | object | Yes | The type of the goal and its parameters |
| `title` | string | No | The title of the goal |
| `assignee` | object | Yes | The assignee of the goal |
| `duration` | object | Yes | Goal active duration |
| `interval` | string ("weekly" | "monthly" | "quarterly" | "yearly") | Yes | The interval of the goal |
| `expected_outcome` | object | Yes | Expected outcome configuration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receives an incoming message

**Slug:** `PIPEDRIVE_ADD_INCOMING_MESSAGE`

Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the message |
| `status` | string ("sent" | "delivered" | "read" | "failed") | Yes | The status of the message |
| `message` | string | Yes | The body of the message |
| `reply_by` | string | No | The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM  |
| `sender_id` | string | Yes | The ID of the provider"s user that sent the message |
| `channel_id` | string | Yes | The channel ID as in the provider |
| `created_at` | string | Yes | The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM  |
| `attachments` | array | No | The list of attachments available in the message |
| `conversation_id` | string | Yes | The ID of the conversation |
| `conversation_link` | string | No | A URL that can open the conversation in the provider"s side |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add an installment subscription

**Slug:** `PIPEDRIVE_ADD_INSTALLMENT_SUBSCRIPTION`

Adds a new installment subscription. Note: Subscriptions endpoints may not be available on the company-specific base URL. To avoid 404s, this action overrides the default request behavior and uses the public API host (api.pipedrive.com) explicitly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deal_id` | integer | Yes | The ID of the deal this installment subscription is associated with |
| `currency` | string | Yes | The currency of the installment subscription. Accepts a 3-character currency code.  |
| `payments` | array | Yes | Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).  |
| `update_deal_value` | boolean | No | Indicates that the deal value must be set to the installment subscription"s total value  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a lead

**Slug:** `PIPEDRIVE_ADD_LEAD`

Pipedrive API lets you add leads linked to people or organizations and tags them with 'API' source. Custom fields from deals apply to leads and appear in responses if set. Details are in the tutorials for adding and updating leads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The name of the lead |
| `owner_id` | integer | No | The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.  |
| `was_seen` | boolean | No | A flag indicating whether the lead was seen by someone in the Pipedrive UI  |
| `label_ids` | array | No | The IDs of the lead labels which will be associated with the lead |
| `person_id` | integer | No | REQUIRED if organization_id is not provided. The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. At least one of person_id or organization_id must be set. |
| `value__amount` | integer | No | Amount |
| `organization_id` | integer | No | REQUIRED if person_id is not provided. The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. At least one of person_id or organization_id must be set. |
| `value__currency` | string | No | Currency |
| `expected_close_date` | string | No | The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a lead label

**Slug:** `PIPEDRIVE_ADD_LEAD_LABEL`

Creates a lead label.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the lead label |
| `color` | string ("green" | "blue" | "red" | "yellow" | "purple" | "gray" | "brown" | "dark-gray" | "orange" | "pink") | Yes | The color of the label. Only a subset of colors can be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Note

**Slug:** `PIPEDRIVE_ADD_NOTE`

Tool to add a note to a deal, person, organization, lead, or project in Pipedrive. Use when you need to create a note attached to an entity. At least one entity ID (lead_id, deal_id, person_id, org_id, or project_id) must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `org_id` | integer | No | The ID of the organization to attach the note to. At least one of lead_id, deal_id, person_id, org_id, or project_id must be provided. |
| `content` | string | Yes | The content of the note in HTML format. Subject to sanitization on the back-end. |
| `deal_id` | integer | No | The ID of the deal to attach the note to. At least one of lead_id, deal_id, person_id, org_id, or project_id must be provided. |
| `lead_id` | string | No | The ID of the lead to attach the note to (UUID format). At least one of lead_id, deal_id, person_id, org_id, or project_id must be provided. |
| `user_id` | integer | No | The ID of the user who will be marked as the author of the note. Only admins can change this. |
| `add_time` | string | No | The creation timestamp for the note in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `person_id` | integer | No | The ID of the person to attach the note to. At least one of lead_id, deal_id, person_id, org_id, or project_id must be provided. |
| `project_id` | integer | No | The ID of the project to attach the note to. At least one of lead_id, deal_id, person_id, org_id, or project_id must be provided. |
| `pinned_to_deal_flag` | integer ("0" | "1") | No | If set to 1, the note will be pinned to the deal. 0 or omit to not pin. |
| `pinned_to_lead_flag` | integer ("0" | "1") | No | If set to 1, the note will be pinned to the lead. 0 or omit to not pin. |
| `pinned_to_person_flag` | integer ("0" | "1") | No | If set to 1, the note will be pinned to the person. 0 or omit to not pin. |
| `pinned_to_project_flag` | integer ("0" | "1") | No | If set to 1, the note will be pinned to the project. 0 or omit to not pin. |
| `pinned_to_organization_flag` | integer ("0" | "1") | No | If set to 1, the note will be pinned to the organization. 0 or omit to not pin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add comment to note

**Slug:** `PIPEDRIVE_ADD_NOTE_COMMENT`

Tool to add a comment to an existing note in Pipedrive. Use when you need to add commentary or updates to notes linked to deals, persons, or organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note to add a comment to. |
| `content` | string | Yes | The content of the comment in HTML format. Subject to sanitization on the back-end. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new organization field

**Slug:** `PIPEDRIVE_ADD_ORGANIZATION_FIELD`

Adds a new organization field. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">adding a new custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the field |
| `options` | array | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]`  |
| `field_type` | string ("varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address") | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>  |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Organization Field Options

**Slug:** `PIPEDRIVE_ADD_ORGANIZATION_FIELD_OPTIONS`

Tool to add new options to an organization field in Pipedrive. Use when you need to add new choices to enum or set type organization fields. This is an atomic operation where all options are added or none.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to add to the field. At least one option must be provided. This is an atomic operation - all options are added or none. |
| `field_code` | string | Yes | The unique code identifying the organization field (enum or set type) to add options to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add organization follower

**Slug:** `PIPEDRIVE_ADD_ORGANIZATION_FOLLOWER`

Tool to add a follower to an organization in Pipedrive. Use when you need to create a follower relationship between a user and an organization entity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `user_id` | integer | Yes | The ID of the user to add as a follower to the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add or update role setting

**Slug:** `PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING`

Adds or updates the visibility setting for a role. Notes: - Roles endpoints require the `admin` OAuth scope. - OAuth calls must target the company domain with `/api/v1` path, e.g., https://{COMPANY}.pipedrive.com/api/v1/roles/{id}/settings - This action normalizes the base URL accordingly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `value` | integer | Yes | Possible values for the `default_visibility` setting depending on the subscription plan:<br> <table class="role-setting"> <caption><b>Essential / Advanced plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner & Followers</td></tr> <tr><td>`3`</td><td>Entire company</td></tr> </table> <br> <table class="role-setting"> <caption><b>Professional / Enterprise plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner only</td></tr> <tr><td>`3`</td><td>Owner&#39;s visibility group</td></tr> <tr><td>`5`</td><td>Owner&#39;s visibility group and sub-groups</td></tr> <tr><td>`7`</td><td>Entire company</td></tr> </table> <br> Read more about visibility groups <a href="https://support.pipedrive.com/en/article/visibility-groups">here</a>.  |
| `setting_key` | string ("deal_default_visibility" | "lead_default_visibility" | "org_default_visibility" | "person_default_visibility" | "product_default_visibility") | Yes | Setting Key |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new person field

**Slug:** `PIPEDRIVE_ADD_PERSON_FIELD`

Adds a new person field. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">adding a new custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the field |
| `options` | array | No | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array, for example: [{"label":"red"}, {"label":"blue"}] |
| `api_token` | string | No | Optional API token to use as query parameter when OAuth scope does not permit POST; if provided, overrides Authorization header. |
| `field_type` | string ("address" | "date" | "daterange" | "double" | "enum" | "monetary" | "org" | "people" | "phone" | "set" | "text" | "time" | "timerange" | "user" | "varchar" | "varchar_auto" | "visible_to") | Yes | The type of the field. Allowed: address, date, daterange, double, enum, monetary, org, people, phone, set, text, time, timerange, user, varchar, varchar_auto, visible_to. |
| `add_visible_flag` | boolean | No | Whether the field is available in the add new modal (web and mobile). Default true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add person field options

**Slug:** `PIPEDRIVE_ADD_PERSONFIELDS_OPTIONS`

Tool to bulk add options to enum/set person fields atomically. Use when you need to add new options to a person field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to create. Each object must contain a 'label' field. At least one option is required. The operation is atomic - all options are added or none are added. |
| `field_code` | string | Yes | The unique code identifying the person field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a follower to a person

**Slug:** `PIPEDRIVE_ADD_PERSON_FOLLOWER`

Tool to add a follower to a person in Pipedrive. Use when you need to create a follower relationship between a user and a person entity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person to add a follower to |
| `user_id` | integer | Yes | The ID of the user to add as a follower to the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add person picture

**Slug:** `PIPEDRIVE_ADD_PERSON_PICTURE`

This service allows adding a photo to a person's profile, replacing any existing one. Images must be square with a minimum size of 128 pixels and in GIF, JPG, or PNG formats. They will be resized to 128 and 512 pixels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `file` | object | No | Image file to set as the person's picture (GIF/JPG/PNG) |
| `crop_x` | integer | No | Crop X (pixels) |
| `crop_y` | integer | No | Crop Y (pixels) |
| `crop_width` | integer | No | Crop width (pixels) |
| `crop_height` | integer | No | Crop height (pixels) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new pipeline

**Slug:** `PIPEDRIVE_ADD_PIPELINE`

Adds a new pipeline (v2).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the pipeline |
| `is_deal_probability_enabled` | boolean | No | Whether deal probability is enabled for this pipeline |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a product

**Slug:** `PIPEDRIVE_ADD_PRODUCT`

Adds a new product to the Products inventory. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-product" target="_blank" rel="noopener noreferrer">adding a product</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | Tax percentage |
| `code` | string | No | Product code |
| `name` | string | Yes | Product name; cannot be empty |
| `unit` | string | No | Sales unit of the product |
| `prices` | array | No | Array of prices per currency |
| `category` | integer | No | Product category |
| `owner_id` | integer | No | Owner user ID; if omitted, authorized user ID is used |
| `visible_to` | integer | No | Product visibility setting |
| `description` | string | No | Product description |
| `is_linkable` | boolean | No | Whether the product can be added to a deal |
| `billing_frequency` | string | No | Billing frequency (one-time, annually, semi-annually, quarterly, monthly, weekly) |
| `billing_frequency_cycles` | integer | No | Number of billing repeats (rules depend on billing_frequency) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new product field

**Slug:** `PIPEDRIVE_ADD_PRODUCT_FIELD`

Adds a new product field. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">adding a new custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the field |
| `options` | array | No | When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]`  |
| `field_type` | string ("varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address") | Yes | The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add product field options

**Slug:** `PIPEDRIVE_ADD_PRODUCTFIELDS_OPTIONS`

Tool to add new options to a product custom field that supports options (enum or set field types). Use when you need to expand the available choices for a product field. This operation is atomic - all options are added or none are added.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to add. At least one option is required. Each option must have a label field. |
| `field_code` | string | Yes | The unique code identifying the field to add options to. This field must be of type enum or set. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add follower to product

**Slug:** `PIPEDRIVE_ADD_PRODUCT_FOLLOWER`

Tool to add a follower to a product in Pipedrive. Use when you need to have a user follow a specific product for updates and notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to which the follower will be added |
| `user_id` | integer | Yes | The ID of the user to add as a follower to the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Product Image

**Slug:** `PIPEDRIVE_ADD_PRODUCT_IMAGE`

Tool to upload an image for a product in Pipedrive. Use when you need to add a visual representation to a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to add the image to |
| `data` | object | Yes | The image file to upload (PNG, JPG, GIF). Provide the file content as base64-encoded string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create product variation

**Slug:** `PIPEDRIVE_ADD_PRODUCT_VARIATION`

Tool to create a new product variation for an existing product. Use when you need to add a variation with customizable name and prices in multiple currencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to add the variation to |
| `name` | string | Yes | The name of the product variation (maximum 255 characters) |
| `prices` | array | No | Array of price objects for different currencies. If omitted, system assigns default values: price of 0, cost of 0, direct_cost of 0, and the user's default currency. Only one price per variation per currency is supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a project

**Slug:** `PIPEDRIVE_ADD_PROJECT`

Adds a new project. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the project |
| `labels` | array | No | IDs of labels for this project |
| `org_id` | integer | No | ID of associated organization |
| `status` | string | No | Project status |
| `board_id` | integer | Yes | The ID of a project board |
| `deal_ids` | array | No | IDs of deals associated with this project |
| `end_date` | string | No | Project end date (YYYY-MM-DD) |
| `owner_id` | integer | No | Project owner's ID |
| `phase_id` | integer | Yes | The ID of a phase on the project board |
| `person_id` | integer | No | ID of associated person |
| `start_date` | string | No | Project start date (YYYY-MM-DD) |
| `description` | string | No | Project description |
| `template_id` | integer | No | ID of the template the project will be based on |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a recurring subscription

**Slug:** `PIPEDRIVE_ADD_RECURRING_SUBSCRIPTION`

Adds a new recurring subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deal_id` | integer | Yes | The ID of the deal this recurring subscription is associated with |
| `currency` | string | Yes | The currency of the recurring subscription. Accepts a 3-character currency code.  |
| `infinite` | boolean | No | This indicates that the recurring subscription will last until it"s manually canceled or deleted. Note that only one field must be set: `cycles_count` or `infinite`.  |
| `payments` | array | No | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).  |
| `start_date` | string | Yes | The start date of the recurring subscription. Format: YYYY-MM-DD |
| `description` | string | No | The description of the recurring subscription |
| `cadence_type` | string ("weekly" | "monthly" | "quarterly" | "semi-annually" | "annually" | "yearly" | "custom") | Yes | The interval between payments |
| `cycle_amount` | integer | Yes | The amount of each payment |
| `cycles_count` | integer | No | Shows how many payments the subscription has. Note that one field must be set: `cycles_count` or `infinite`. If `cycles_count` is set, then `cycle_amount` and `start_date` are also required.  |
| `update_deal_value` | boolean | No | Indicates that the deal value must be set to recurring subscription"s MRR value  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a role

**Slug:** `PIPEDRIVE_ADD_ROLE`

Adds a new role. Note: - Roles endpoints require the `admin` scope. - For OAuth tokens, Pipedrive expects the company domain base URL with `/api/v1` path. Example: https://{COMPANY}.pipedrive.com/api/v1/roles - This action normalizes the base_url provided by metadata to ensure `/api/v1` is used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the role |
| `parent_role_id` | integer | No | The ID of the parent role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add role assignment

**Slug:** `PIPEDRIVE_ADD_ROLE_ASSIGNMENT`

Assigns a user to a role. Notes: - Roles endpoints require the `admin` OAuth scope. - OAuth calls must target the company domain with `/api/v1` path, e.g., https://{COMPANY}.pipedrive.com/api/v1/roles/{id}/assignments - This action normalizes the base URL accordingly and ensures JSON body is sent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `user_id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new stage

**Slug:** `PIPEDRIVE_ADD_STAGE`

Adds a new stage, returns the ID upon success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the stage |
| `pipeline_id` | integer | Yes | The ID of the pipeline to add stage to |
| `rotten_days` | integer | No | The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set. (v2: days_to_rotten) |
| `rotten_flag` | boolean | No | Whether deals in this stage can become rotten (v1: rotten_flag; v2: is_deal_rot_enabled) |
| `deal_probability` | integer | No | The success probability percentage of the deal. Used/shown when deal weighted values are used.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a task

**Slug:** `PIPEDRIVE_ADD_TASK`

Adds a new task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `done` | integer | No | 0 = Not done, 1 = Done |
| `title` | string | Yes | The title of the task |
| `due_date` | string | No | The task’s due date (YYYY-MM-DD) |
| `project_id` | integer | Yes | The ID of a project |
| `assignee_id` | integer | No | The assignee user ID |
| `description` | string | No | The description of the task |
| `parent_task_id` | integer | No | The ID of a parent task; cannot be a subtask’s ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new team

**Slug:** `PIPEDRIVE_ADD_TEAM`

Adds a new team to the company and returns the created object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The team name |
| `users` | array | No | The list of user IDs |
| `manager_id` | integer | Yes | The team manager ID |
| `description` | string | No | The team description |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add users to a team

**Slug:** `PIPEDRIVE_ADD_TEAM_USERS`

Adds users to an existing team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the team |
| `users` | array | Yes | The list of user IDs |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a new user

**Slug:** `PIPEDRIVE_ADD_USER`

Adds a new user to the company, returns the ID upon success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email of the user |
| `access` | array | No | The access given to the user. Each item in the array represents access to a specific app. Optionally may include either admin flag or permission set ID to specify which access to give within the app. If both are omitted, the default access for the corresponding app will be used. It requires structure as follows: `[{ app: "sales", permission_set_id: "62cc4d7f-4038-4352-abf3-a8c1c822b631" }, { app: "global", admin: true }, { app: "account_settings" }]`   |
| `active_flag` | boolean | No | Whether the user is active or not. `false` = Not activated, `true` = Activated  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive a project

**Slug:** `PIPEDRIVE_ARCHIVE_PROJECT`

Archives a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a recurring subscription

**Slug:** `PIPEDRIVE_CANCEL_RECURRING_SUBSCRIPTION`

Cancels a recurring subscription. This action attempts to cancel a recurring subscription via Subscriptions API. If Subscriptions endpoints are unavailable (404), it gracefully falls back to disabling all product attachments on the given deal (interpreting `id` as `deal_id`) to mimic cancellation behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription. Fallback: treated as the deal ID when Subscriptions API is unavailable. |
| `end_date` | string | No | The subscription termination date. All payments after the specified date will be deleted. The end_date of the subscription will be set to the due date of the payment to follow the specified date. Default value is the current date.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Convert deal to lead

**Slug:** `PIPEDRIVE_CONVERT_DEAL_TO_LEAD`

Tool to convert a Pipedrive deal to a lead asynchronously. Use when you need to move a deal back to the lead stage, transferring related entities like notes, files, emails, and activities. Requires global admin or 'Convert deals to leads' permission.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to convert to a lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Convert Lead to Deal

**Slug:** `PIPEDRIVE_CONVERT_LEAD_TO_DEAL`

Tool to convert a Pipedrive lead to a deal asynchronously. Use when you need to convert an existing lead into a deal. The conversion transfers all related entities (notes, files, emails, activities) to the new deal. Upon successful conversion, the lead is marked as deleted. Use the returned conversion_id to check the conversion status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead to convert (UUID format) |
| `stage_id` | integer | No | The ID of a stage the created deal will be added to. The pipeline will be assigned automatically based on the stage_id. Do not use both pipeline_id and stage_id together. |
| `pipeline_id` | integer | No | The ID of a pipeline the created deal will be added to. The deal will be added to the first stage of the specified pipeline. Note: pipeline_id will be ignored if both pipeline_id and stage_id are provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an organization relationship

**Slug:** `PIPEDRIVE_CREATE_ORGANIZATION_RELATIONSHIP`

Creates and returns an organization relationship.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("parent" | "related") | Yes | The type of organization relationship |
| `org_id` | integer | No | The ID of the base organization for the returned calculated values |
| `rel_owner_org_id` | integer | Yes | The owner of the relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.  |
| `rel_linked_org_id` | integer | Yes | The linked organization in the relationship. If type is `parent`, then the linked organization is the daughter.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a remote file and link it to an item

**Slug:** `PIPEDRIVE_CREATE_REMOTE_FILE_LINK`

Creates an empty file on Google Drive linked to an item. For details, refer to the Pipedrive remote file adding tutorial.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the file |
| `item_id` | integer | Yes | The ID of the item to associate the file with |
| `file_type` | string ("gdoc" | "gslides" | "gsheet" | "gform" | "gdraw") | Yes | The file type |
| `item_type` | string ("deal" | "organization" | "person") | Yes | The item type |
| `remote_location` | string ("googledrive") | Yes | The location type to send the file to. Only `googledrive` is supported at the moment.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new webhook

**Slug:** `PIPEDRIVE_CREATE_WEBHOOK`

Creates and returns details of a new Webhook. Trigger events combine `event_action` and `event_object`, like `*.*` for all events or `added.deal`, `deleted.persons` for specific actions. More info in the Webhooks guide.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The webhook’s name |
| `user_id` | integer | No | The ID of the user that this webhook will be authorized with. You have the option to use a different user"s `user_id`. If it is not set, the current user"s `user_id` will be used. As each webhook event is checked against a user"s permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user’s `user_id`.  |
| `version` | string ("1.0" | "2.0") | No | The webhook"s version |
| `event_action` | string ("added" | "updated" | "merged" | "deleted" | "create" | "change" | "delete" | "*") | Yes | The type of action to receive notifications about. Wildcard will match all supported actions.  |
| `event_object` | string ("activity" | "activityType" | "deal" | "note" | "organization" | "person" | "pipeline" | "product" | "stage" | "user" | "lead" | "*") | Yes | The type of object to receive notifications about. Wildcard will match all supported objects.  |
| `http_auth_user` | string | No | The HTTP basic auth username of the subscription URL endpoint (if required)  |
| `subscription_url` | string | Yes | A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link.  |
| `http_auth_password` | string | No | The HTTP basic auth password of the subscription URL endpoint (if required)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all ActivityFields

**Slug:** `PIPEDRIVE_CTIVITYIELDS_GET_ALL_ACTIVITYFIELDS`

Tool to retrieve metadata about all activity fields in the company. Use when you need to get information about field structure, types, options, and properties for activities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Pagination limit for number of results to return. Default: 100, Maximum: 500 |
| `cursor` | string | No | Marker for pagination to fetch the next page of results |
| `include_fields` | string | No | Optional comma separated string array of additional data namespaces to include in response (e.g., 'ui_visibility') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deal product

**Slug:** `PIPEDRIVE_DEALS_UPDATE_DEAL`

Tool to update product details attached to a deal in Pipedrive using the v2 API. Use when you need to modify product attributes like price, quantity, discount, or tax for a deal-product attachment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `tax` | number | No | Product tax amount (default: 0) |
| `comments` | string | No | Product notes/comments |
| `discount` | number | No | Discount value - amount or percentage based on discount_type (default: 0) |
| `quantity` | number | No | Quantity of the product |
| `is_enabled` | boolean | No | Whether product is active/enabled for the deal. Note: API v2 uses strict validation - only accepts true/false, not 1/0. |
| `item_price` | number | No | Price value for the product |
| `product_id` | integer | No | The product identifier |
| `tax_method` | string ("exclusive" | "inclusive" | "none") | No | Tax application method - 'exclusive' (tax not included in price), 'inclusive' (tax included in price), or 'none' (no tax) |
| `discount_type` | string ("percentage" | "amount") | No | Discount type - either 'percentage' or 'amount' |
| `billing_frequency` | string ("one-time" | "annually" | "semi-annually" | "quarterly" | "monthly" | "weekly") | No | Billing cycle option for Growth+ plans - 'one-time', 'annually', 'semi-annually', 'quarterly', 'monthly', or 'weekly' |
| `billing_start_date` | string | No | When billing commences (Growth+ plans). Format: YYYY-MM-DD |
| `product_variation_id` | integer | No | Specific product variation identifier |
| `product_attachment_id` | integer | Yes | The ID of the deal-product attachment (correlation ID between deal and product, obtained from GET /deals/{id}/products). This is NOT the same as the product_id. |
| `billing_frequency_cycles` | integer | No | Number of billing frequency repetitions (Growth+ plans) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple activities in bulk

**Slug:** `PIPEDRIVE_DELETE_ACTIVITIES_BULK`

Marks multiple activities as deleted. After 30 days, the activities will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated IDs of activities that will be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Activity

**Slug:** `PIPEDRIVE_DELETE_ACTIVITY`

Tool to delete an activity in Pipedrive. Use when you need to remove an activity. This is a soft delete operation - the activity will be permanently deleted after 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity to be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Activity Type

**Slug:** `PIPEDRIVE_DELETE_ACTIVITY_TYPE`

Tool to delete an activity type in Pipedrive. Use when you need to remove an activity type from the system. The activity type will be marked as deleted (active_flag set to false) rather than permanently removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity type to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple activity types in bulk

**Slug:** `PIPEDRIVE_DELETE_ACTIVITY_TYPES_BULK`

Marks multiple activity types as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated activity type IDs |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an activity

**Slug:** `PIPEDRIVE_DELETE_AN_ACTIVITY`

Marks an activity as deleted. After 30 days, the activity will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a person

**Slug:** `PIPEDRIVE_DELETE_A_PERSON`

Marks a person as deleted. After 30 days, the person will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a person field

**Slug:** `PIPEDRIVE_DELETE_A_PERSON_FIELD`

Marks a field as deleted. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">deleting a custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a stage

**Slug:** `PIPEDRIVE_DELETE_A_STAGE`

Marks a stage as deleted. Uses the company-domain v2 endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a call log

**Slug:** `PIPEDRIVE_DELETE_CALL_LOG`

Deletes a call log. If there is an audio recording attached to it, it will also be deleted. The related activity will not be removed by this request. If you want to remove the related activities, please use the endpoint which is specific for activities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID received when you create the call log |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a channel

**Slug:** `PIPEDRIVE_DELETE_CHANNEL`

The endpoint removes a messenger channel along with conversations and messages. Requires Messengers integration OAuth and Messaging app extension manifest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the channel provided by the integration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete comment from note

**Slug:** `PIPEDRIVE_DELETE_COMMENT`

Tool to delete a comment from a note in Pipedrive. Use when you need to remove a specific comment that was previously added to a note. Users can only delete comments they created or if they have admin privileges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `commentId` | string | Yes | The ID of the comment in UUID format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a conversation

**Slug:** `PIPEDRIVE_DELETE_CONVERSATION`

Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel__id` | string | Yes | The ID of the channel provided by the integration |
| `conversation__id` | string | Yes | The ID of the conversation provided by the integration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deal

**Slug:** `PIPEDRIVE_DELETE_DEAL`

Tool to delete a deal in Pipedrive. Use when you need to remove a deal. This is a soft delete operation - the deal will be permanently deleted after 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deal Discount

**Slug:** `PIPEDRIVE_DELETE_DEAL_DISCOUNT`

Tool to delete a discount from a deal in Pipedrive. Use when you need to remove a discount that was previously applied to a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `discount_id` | string | Yes | The ID of the discount to be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a deal field

**Slug:** `PIPEDRIVE_DELETE_DEAL_FIELD`

Tool to delete a deal field in Pipedrive by marking it as deleted. Use when you need to remove a custom deal field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete deal field options

**Slug:** `PIPEDRIVE_DELETE_DEAL_FIELD_OPTIONS`

Tool to remove existing options from a deal custom field atomically. Use when you need to delete options from a deal field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to delete. At least one option ID is required. The entire request fails if any option does not exist (atomic operation). |
| `field_code` | string | Yes | The unique code identifying the deal field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple deal fields in bulk

**Slug:** `PIPEDRIVE_DELETE_DEAL_FIELDS_BULK`

Marks multiple deal fields as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated field IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete deal follower

**Slug:** `PIPEDRIVE_DELETE_DEAL_FOLLOWER`

Tool to delete a follower from a deal in Pipedrive. Use when you need to remove a user from a deal's follower list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `follower_id` | integer | Yes | The ID of the follower to be removed from the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a participant from a deal

**Slug:** `PIPEDRIVE_DELETE_DEAL_PARTICIPANT`

Deletes a participant from a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `deal_participant_id` | integer | Yes | The ID of the participant of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deal Product

**Slug:** `PIPEDRIVE_DELETE_DEAL_PRODUCT`

Tool to delete an attached product from a deal in Pipedrive. Use when you need to remove a product that was previously attached to a deal. Note: It is not possible to delete the attached product if the deal has installments associated with it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `product_attachment_id` | integer | Yes | The product attachment ID. This is returned as product_attachment_id after attaching a product to a deal, or as id when listing the products attached to a deal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deals Products

**Slug:** `PIPEDRIVE_DELETE_DEAL_PRODUCTS`

Tool to delete multiple products from a deal in Pipedrive. Use when you need to remove specific products or all products from a deal. Maximum 100 products can be deleted per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `ids` | string | No | Comma-separated list of deal product IDs to delete. If not provided, all deal products will be deleted up to 100 items. Maximum 100 IDs allowed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple deals in bulk

**Slug:** `PIPEDRIVE_DELETE_DEALS_BULK`

Marks multiple deals as deleted. After 30 days, the deals will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated IDs that will be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a file

**Slug:** `PIPEDRIVE_DELETE_FILE`

Tool to delete a file in Pipedrive. Use when you need to remove a file from the system. The file is marked as deleted immediately but will be permanently deleted after 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the file to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Pipedrive Filter

**Slug:** `PIPEDRIVE_DELETE_FILTER`

Tool to delete a filter in Pipedrive. Use when you need to remove a specific filter by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the filter to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple filters in bulk

**Slug:** `PIPEDRIVE_DELETE_FILTERS_BULK`

Marks multiple filters as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated filter IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete existing goal

**Slug:** `PIPEDRIVE_DELETE_GOAL`

Marks a goal as deleted. Notes: - Pipedrive Goals endpoints for OAuth live under `{companydomain}/api/v1`. The default base_url is usually `{companydomain}/v1`, which would yield 404. We therefore normalize the base URL to `/api/v1` before issuing the DELETE.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the goal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a lead

**Slug:** `PIPEDRIVE_DELETE_LEAD`

Deletes a specific lead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete lead label

**Slug:** `PIPEDRIVE_DELETE_LEAD_LABEL`

Tool to delete a specific lead label from Pipedrive. Use when you need to remove a lead label using its UUID identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The UUID identifier of the lead label to be deleted. Must be in UUID format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete mail thread

**Slug:** `PIPEDRIVE_DELETE_MAIL_THREAD`

Marks a mail thread as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the mail thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple product fields in bulk

**Slug:** `PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS`

Marks multiple fields as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated field IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple stages in bulk

**Slug:** `PIPEDRIVE_DELETE_MULTIPLE_STAGES`

Marks multiple stages as deleted (v1). Note: This endpoint may be deprecated; we keep compatibility and avoid raising to surface API errors in response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated stage IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a note

**Slug:** `PIPEDRIVE_DELETE_NOTE`

Deletes a specific note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an organization

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION`

Tool to delete an organization in Pipedrive. Use when you need to mark an organization as deleted. The organization will be permanently deleted after 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an organization field

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION_FIELD`

Marks a field as deleted. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">deleting a custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization field options

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION_FIELD_OPTIONS`

Tool to delete specified options from an organization field in Pipedrive. Use when you need to remove one or more options from an organization field by field code. The operation is atomic: if any option ID does not exist, the entire request fails and no options are deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to delete. At least one option ID must be provided. The operation is atomic: the entire request fails if any specified option ID does not exist. |
| `field_code` | string | Yes | The unique code identifying the organization field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple organization fields in bulk

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION_FIELDS_BULK`

Marks multiple fields as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated field IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete organization follower

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION_FOLLOWER`

Tool to delete a follower from an organization in Pipedrive. Use when you need to remove a user from an organization's follower list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `follower_id` | integer | Yes | The ID of the follower to be removed from the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an organization relationship

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATION_RELATIONSHIP`

Deletes an organization relationship and returns the deleted ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization relationship |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple organizations in bulk

**Slug:** `PIPEDRIVE_DELETE_ORGANIZATIONS_BULK`

Marks multiple organizations as deleted. After 30 days, the organizations will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated IDs that will be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a person

**Slug:** `PIPEDRIVE_DELETE_PERSON`

Tool to delete a person in Pipedrive. Use when you need to mark a person as deleted. The person will be permanently deleted after 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a person field

**Slug:** `PIPEDRIVE_DELETE_PERSON_FIELD`

Tool to delete a person field from Pipedrive. Use when you need to remove a custom person field by its unique identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the person field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete person field options

**Slug:** `PIPEDRIVE_DELETE_PERSON_FIELD_OPTIONS`

Tool to remove existing options from a person custom field atomically. Use when you need to delete options from a person field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to delete. At least one option ID is required. The entire request fails if any option does not exist (atomic operation). |
| `field_code` | string | Yes | The unique code identifying the person field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple person fields in bulk

**Slug:** `PIPEDRIVE_DELETE_PERSON_FIELDS_BULK`

Marks multiple fields as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated field IDs to delete |
| `api_token` | string | No | Optional API token to use as query parameter when OAuth scope does not permit DELETE; if provided, overrides Authorization header. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a follower from a person

**Slug:** `PIPEDRIVE_DELETE_PERSON_FOLLOWER`

Deletes a follower from a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `follower_id` | integer | Yes | The ID of the follower |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete person picture

**Slug:** `PIPEDRIVE_DELETE_PERSON_PICTURE`

Deletes a person’s picture. Note: Pipedrive may return a 400 with error "Item not found" when the person has no picture set. Since delete is idempotent, we treat this specific case as a successful no-op and return a normalized response rather than raising.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple persons in bulk

**Slug:** `PIPEDRIVE_DELETE_PERSONS_BULK`

Marks multiple persons as deleted. After 30 days, the persons will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | The comma-separated IDs that will be deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a pipeline

**Slug:** `PIPEDRIVE_DELETE_PIPELINE`

Marks a pipeline as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a product

**Slug:** `PIPEDRIVE_DELETE_PRODUCT`

Marks a product as deleted. After 30 days, the product will be permanently deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a product field

**Slug:** `PIPEDRIVE_DELETE_PRODUCT_FIELD`

Marks a product field as deleted. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">deleting a custom field</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete product field options

**Slug:** `PIPEDRIVE_DELETE_PRODUCT_FIELD_OPTIONS`

Tool to remove existing options from a product custom field atomically. Use when you need to delete options from a product field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to delete. At least one option ID is required. The entire request fails if any option does not exist (atomic operation). |
| `field_code` | string | Yes | The unique code identifying the product field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a follower from a product

**Slug:** `PIPEDRIVE_DELETE_PRODUCT_FOLLOWER`

Deletes a follower from a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `follower_id` | integer | Yes | The ID of the relationship between the follower and the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Product Image

**Slug:** `PIPEDRIVE_DELETE_PRODUCT_IMAGE`

Tool to delete an image from a product in Pipedrive. Use when you need to remove a product image.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product from which to delete the image |
| `image_id` | integer | Yes | The ID of the image to delete from the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Product Variation

**Slug:** `PIPEDRIVE_DELETE_PRODUCT_VARIATION`

Tool to delete a product variation from a product in Pipedrive. Use when you need to remove a specific variation from a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `product_variation_id` | integer | Yes | The ID of the product variation to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a project

**Slug:** `PIPEDRIVE_DELETE_PROJECT`

Marks a project as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a role

**Slug:** `PIPEDRIVE_DELETE_ROLE`

Marks a role as deleted. Note: This endpoint requires admin permissions. The API token must have the 'admin' scope to delete roles. The default role (ID=1) cannot be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a role assignment

**Slug:** `PIPEDRIVE_DELETE_ROLE_ASSIGNMENT`

Removes the assigned user from a role and adds to the default role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `user_id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a stage

**Slug:** `PIPEDRIVE_DELETE_STAGE`

Tool to delete a stage in Pipedrive. Use when you need to mark a stage as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a subscription

**Slug:** `PIPEDRIVE_DELETE_SUBSCRIPTION`

Marks an installment or a recurring subscription as deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a task

**Slug:** `PIPEDRIVE_DELETE_TASK`

Marks a task as deleted. If the task has subtasks then those will also be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the task |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete users from a team

**Slug:** `PIPEDRIVE_DELETE_TEAM_USERS`

Deletes users from an existing team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the team |
| `users` | array | Yes | The list of user IDs |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete existing webhook

**Slug:** `PIPEDRIVE_DELETE_WEBHOOK`

Deletes the specified Webhook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the Webhook to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download one file

**Slug:** `PIPEDRIVE_DOWNLOAD_FILE`

Initializes a file download.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the file |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate deal

**Slug:** `PIPEDRIVE_DUPLICATE_DEAL`

Duplicates a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate Product

**Slug:** `PIPEDRIVE_DUPLICATE_PRODUCT`

Tool to duplicate a specific product in Pipedrive. Use when you need to create a copy of an existing product with all its properties and pricing information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to duplicate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enumerate accessible users for lead

**Slug:** `PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD`

Lists the users permitted to access a lead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find goals

**Slug:** `PIPEDRIVE_FIND_GOALS`

Query goal data by appending `{searchField}={searchValue}` to the URL with dot-notation fields and values. Include `is_active` to filter by goal status and specify both `period.start` and `period.end` for time-based searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The title of the goal |
| `is_active` | boolean | No | Whether the goal is active or not |
| `type__name` | string ("deals_won" | "deals_progressed" | "activities_completed" | "activities_added" | "deals_started" | "revenue_forecast") | No | The type of the goal. If provided, everyone"s goals will be returned. |
| `period__end` | string | No | The end date of the period for which to find goals. Date in format of YYYY-MM-DD.  |
| `assignee__id` | integer | No | The ID of the user who"s goal to fetch. When omitted, only your goals will be returned.  |
| `period__start` | string | No | The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.  |
| `assignee__type` | string ("person" | "company" | "team") | No | The type of the goal"s assignee. If provided, everyone"s goals will be returned.  |
| `type__params__stage__id` | integer | No | The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone"s goals will be returned.  |
| `expected__outcome__target` | integer | No | The numeric value of the outcome. If provided, everyone"s goals will be returned.  |
| `type__params__pipeline__id` | array | No | An array of pipeline IDs or `null` for all pipelines. If provided, everyone"s goals will be returned.  |
| `expected__outcome__currency__id` | integer | No | The numeric ID of the goal"s currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone"s goals will be returned.  |
| `type__params__activity__type__id` | array | No | An array of IDs or `null` for all activity types. Only applicable for `activities_completed` and/or `activities_added` types of goals. If provided, everyone"s goals will be returned.  |
| `expected__outcome__tracking__metric` | string ("quantity" | "sum") | No | The tracking metric of the expected outcome of the goal. If provided, everyone"s goals will be returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find users by name

**Slug:** `PIPEDRIVE_FIND_USERS_BY_NAME`

Finds users by their name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for |
| `search_by_email` | integer | No | When enabled, the term will only be matched against email addresses of users. Default: `false`.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of an activity

**Slug:** `PIPEDRIVE_GET_ACTIVITY`

Returns the details of a specific activity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one activity field

**Slug:** `PIPEDRIVE_GET_ACTIVITY_FIELD`

Tool to retrieve detailed metadata for a specific activity field by its field code. Use when you need information about field structure, type, options, or properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_code` | string | Yes | The unique code identifying the field (e.g., 'subject', 'due_date', or a 40-character hash for custom fields) |
| `include_fields` | string ("ui_visibility") | No | Enum for additional data namespaces to include in response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all activities assigned to a particular user

**Slug:** `PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER`

Returns all activities assigned to a particular user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `done` | integer | No | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.  |
| `type` | string | No | The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.  |
| `limit` | integer | No | Number of activities to return per page (defaults to 100 if not specified) |
| `start` | integer | No | For pagination, the position that represents the first result for the page  |
| `fields` | string | No | CLIENT-SIDE FILTERING: Comma-separated list of activity fields to include in the final response. Note: The Pipedrive API does not support native field selection - all fields are still fetched from the API, but the response is filtered before returning to reduce token usage in your application. This does not reduce API bandwidth or Pipedrive API costs. Common fields: id, subject, due_date, due_time, done, type, user_id, person_id, deal_id, org_id, note, add_time, update_time.  |
| `user_id` | integer | No | The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.  |
| `end_date` | string | No | Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.  |
| `filter_id` | integer | No | The ID of the filter to use (will narrow down results if used together with `user_id` parameter)  |
| `start_date` | string | No | Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.  |
| `response_detail` | string ("minimal" | "full") | No | Level of detail in the response. 'minimal' (default) excludes related_objects (deals, persons, organizations, users) to reduce token usage. 'full' includes the complete API response with all related_objects. Note: The API always returns related_objects — 'minimal' filters them out client-side. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all activities beta

**Slug:** `PIPEDRIVE_GET_ALL_ACTIVITIES_BETA`

This BETA cursor-paginated endpoint returns all activities, accessible only to global admins, not regular users who get a 403 error. Refer to Pipedrive's documentation for pagination and global permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `done` | boolean | No | Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities.  |
| `type` | string | No | The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.  |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.  |
| `since` | string | No | The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `until` | string | No | The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `user_id` | integer | No | The ID of the user whose activities will be fetched. If omitted, all activities are returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all activity fields

**Slug:** `PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS`

Returns all activity fields.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all activity types

**Slug:** `PIPEDRIVE_GET_ALL_ACTIVITY_TYPES`

Returns all activity types.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all deal fields

**Slug:** `PIPEDRIVE_GET_ALL_DEAL_FIELDS`

Returns data about all deal fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page. Must be > 0 if provided. |
| `start` | integer | No | Pagination start. Must be >= 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all deals

**Slug:** `PIPEDRIVE_GET_ALL_DEALS`

Returns all deals. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/getting-all-deals" target="_blank" rel="noopener noreferrer">getting all deals</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).  |
| `limit` | integer | No | Items shown per page (1-500). If not provided, 100 items will be returned. |
| `start` | integer | No | Pagination start |
| `status` | string ("open" | "won" | "lost" | "deleted" | "all_not_deleted") | No | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.  |
| `user_id` | integer | No | If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied.  |
| `stage_id` | integer | No | If supplied, only deals within the given stage will be returned |
| `filter_id` | integer | No | The ID of the filter to use |
| `owned_by_you` | integer | No | When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all deals beta

**Slug:** `PIPEDRIVE_GET_ALL_DEALS_BETA`

This endpoint returns all deals with cursor pagination (in BETA). Only global admins can access it; others get a 403 error. More info on pagination and permissions is available online.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.  |
| `since` | string | No | The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `until` | string | No | The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `status` | string ("open" | "won" | "lost" | "deleted") | No | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.  |
| `user_id` | integer | No | If supplied, only deals matching the given user will be returned |
| `stage_id` | integer | No | If supplied, only deals within the given stage will be returned |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all files

**Slug:** `PIPEDRIVE_GET_ALL_FILES`

Returns data about all files.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all filter helpers

**Slug:** `PIPEDRIVE_GET_ALL_FILTER_HELPERS`

The text provides links to documentation for adding or updating filters, and information on all supported filter helpers in an API. It encourages consulting a tutorial for more details on adding a filter.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all filters

**Slug:** `PIPEDRIVE_GET_ALL_FILTERS`

Returns data about all filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("deals" | "leads" | "org" | "people" | "products" | "activity" | "projects") | No | The types of filters to fetch |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all lead labels

**Slug:** `PIPEDRIVE_GET_ALL_LEAD_LABELS`

Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all leads

**Slug:** `PIPEDRIVE_GET_ALL_LEADS`

The API returns sorted leads by creation time, supporting pagination via `limit` and `start`. Custom field values are included if set, mimicking the `Deals` endpoint structure; unset fields are omitted. Leads share custom fields with deals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field name and sorting mode. Format: 'field_name ASC' or 'field_name DESC'. Valid field names: id, title, owner_id, creator_id, was_seen, expected_close_date, next_activity_id, add_time (creation timestamp), update_time. Note: Use 'add_time' for creation time (NOT 'creation_date'). Only first-level field keys are supported (no nested keys). |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.  |
| `start` | integer | No | For pagination, the position that represents the first result for the page  |
| `owner_id` | integer | No | If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.  |
| `filter_id` | integer | No | Optional ID of a saved filter to apply. Filter IDs are account-specific and must be obtained from the user's Pipedrive account using the 'Get all filters' endpoint (GET /filters with type='leads'). Do not pass placeholder values like 1. When filter_id is provided, it takes precedence over owner_id, person_id, and organization_id parameters. If omitted, returns all leads without filtering. |
| `person_id` | integer | No | If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.  |
| `archived_status` | string ("archived" | "not_archived" | "all") | No | Filtering based on the archived status of a lead. If not provided, `All` is used.  |
| `organization_id` | integer | No | If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all lead sources

**Slug:** `PIPEDRIVE_GET_ALL_LEAD_SOURCES`

Returns all lead sources. Please note that the list of lead sources is fixed, it cannot be modified. All leads created through the Pipedrive API will have a lead source `API` assigned.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all note fields

**Slug:** `PIPEDRIVE_GET_ALL_NOTE_FIELDS`

Returns data about all note fields.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all notes

**Slug:** `PIPEDRIVE_GET_ALL_NOTES`

Returns all notes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `org_id` | integer | No | The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned.  |
| `deal_id` | integer | No | The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.  |
| `lead_id` | string | No | The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.  |
| `user_id` | integer | No | The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.  |
| `end_date` | string | No | The date in format of YYYY-MM-DD until which notes to fetch to |
| `person_id` | integer | No | The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.  |
| `start_date` | string | No | The date in format of YYYY-MM-DD from which notes to fetch |
| `pinned_to_deal_flag` | integer | No | If set, the results are filtered by note to deal pinning state |
| `pinned_to_lead_flag` | integer | No | If set, the results are filtered by note to lead pinning state |
| `pinned_to_person_flag` | integer | No | If set, the results are filtered by note to person pinning state |
| `pinned_to_organization_flag` | integer | No | If set, the results are filtered by note to organization pinning state |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all organization fields

**Slug:** `PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS`

Returns data about all organization fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all organizations

**Slug:** `PIPEDRIVE_GET_ALL_ORGANIZATIONS`

Returns all organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `user_id` | integer | No | If supplied, only organizations owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.  |
| `filter_id` | integer | No | The ID of the filter to use |
| `first_char` | string | No | If supplied, only organizations whose name starts with the specified letter will be returned (case-insensitive)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all organizations beta

**Slug:** `PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA`

This BETA API endpoint lists all organizations with cursor pagination. Only global admins have access; others get a 403 error. See docs for pagination and global permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.  |
| `since` | string | No | The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `until` | string | No | The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `owner_id` | integer | No | If supplied, only organizations owned by the given user will be returned |
| `first_char` | string | No | If supplied, only organizations whose name starts with the specified letter will be returned (case-insensitive)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all permission sets

**Slug:** `PIPEDRIVE_GET_ALL_PERMISSION_SETS`

Returns data about all permission sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app` | string ("sales" | "projects" | "campaigns" | "global" | "account_settings") | No | The app to filter the permission sets by |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all person fields

**Slug:** `PIPEDRIVE_GET_ALL_PERSON_FIELDS`

Returns data about all person fields.<br>If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing_status` field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all persons

**Slug:** `PIPEDRIVE_GET_ALL_PERSONS`

Returns all persons.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `user_id` | integer | No | If supplied, only persons owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.  |
| `filter_id` | integer | No | The ID of the filter to use |
| `first_char` | string | No | If supplied, only persons whose name starts with the specified letter will be returned (case-insensitive)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all persons beta

**Slug:** `PIPEDRIVE_GET_ALL_PERSONS_BETA`

This BETA endpoint returns all persons, using cursor pagination. Only global admins have access; others get a 403 error. Info on pagination and permissions is in the linked docs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.  |
| `since` | string | No | The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `until` | string | No | The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `owner_id` | integer | No | If supplied, only persons owned by the given user will be returned |
| `first_char` | string | No | If supplied, only persons whose name starts with the specified letter will be returned (case-insensitive)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all pipelines

**Slug:** `PIPEDRIVE_GET_ALL_PIPELINES`

Returns data about all pipelines. This action retrieves all pipelines from the user's Pipedrive instance using their instance-specific URL (e.g., https://company.pipedrive.com/api/v2/pipelines).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all product fields

**Slug:** `PIPEDRIVE_GET_ALL_PRODUCT_FIELDS`

Returns data about all product fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all products

**Slug:** `PIPEDRIVE_GET_ALL_PRODUCTS`

Returns data about all products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | An array of integers with the IDs of the products that should be returned in the response  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `user_id` | integer | No | If supplied, only products owned by the given user will be returned |
| `filter_id` | integer | No | The ID of the filter to use |
| `first_char` | string | No | If supplied, only products whose name starts with the specified letter will be returned (case-insensitive)  |
| `get_summary` | boolean | No | If supplied, the response will return the total numbers of products in the `additional_data.summary.total_count` property  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all project boards

**Slug:** `PIPEDRIVE_GET_ALL_PROJECT_BOARDS`

Returns all projects boards that are not deleted. Note: The Projects feature requires the Projects add-on which is available on Power and Enterprise plans, or as a paid add-on for other plans. A 402 Payment Required error indicates the account does not have access to the Projects feature.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all projects

**Slug:** `PIPEDRIVE_GET_ALL_PROJECTS`

Returns all projects. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href="https://pipedrive.readme.io/docs/core-api-concepts-pagination" target="_blank" rel="noopener noreferrer">pagination</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `status` | string | No | If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.  |
| `phase_id` | integer | No | If supplied, only projects in specified phase are returned |
| `filter_id` | integer | No | The ID of the filter to use |
| `include_archived` | boolean | No | If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all project templates

**Slug:** `PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES`

The endpoint retrieves all non-deleted project templates with cursor-based pagination. Refer to the provided documentation link for more details on pagination. Note: This endpoint requires the Pipedrive Projects add-on to be enabled. Projects is included in Power and Enterprise plans, or can be purchased as an add-on for Professional plans or lower.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all relationships for organization

**Slug:** `PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION`

Gets all of the relationships for a supplied organization ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `org_id` | integer | Yes | The ID of the organization to get relationships for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all roles

**Slug:** `PIPEDRIVE_GET_ALL_ROLES`

Returns all the roles within the company. Note: - Roles endpoints require the `admin` scope. - For OAuth tokens, Pipedrive expects the company domain base URL with `/api/v1` path. Example: https://{COMPANY}.pipedrive.com/api/v1/roles - This action normalizes the base_url provided by metadata to ensure `/api/v1` is used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all stages

**Slug:** `PIPEDRIVE_GET_ALL_STAGES`

Returns data about all stages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `pipeline_id` | integer | No | The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all supported currencies

**Slug:** `PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES`

Returns all supported currencies in given account which should be used when saving monetary values with other objects. The `code` parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | No | Optional search term that is searched for from currency"s name and/or code  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all tasks

**Slug:** `PIPEDRIVE_GET_ALL_TASKS`

Returns all tasks. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href="https://pipedrive.readme.io/docs/core-api-concepts-pagination" target="_blank" rel="noopener noreferrer">pagination</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `done` | integer | No | Whether the task is done or not. `0` = Not done, `1` = Done. If not omitted then returns both done and not done tasks.  |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.  |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |
| `project_id` | integer | No | If supplied, only tasks that are assigned to this project are returned |
| `assignee_id` | integer | No | If supplied, only tasks that are assigned to this user are returned |
| `parent_task_id` | integer | No | If `null` is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all teams

**Slug:** `PIPEDRIVE_GET_ALL_TEAMS`

Returns data about teams within the company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_by` | string ("id" | "name" | "manager_id" | "active_flag") | No | The field name to sort returned teams by |
| `skip_users` | integer | No | When enabled, the teams will not include IDs of member users |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all teams of a user

**Slug:** `PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER`

Returns data about all teams which have the specified user as a member.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |
| `order_by` | string ("id" | "name" | "manager_id" | "active_flag") | No | The field name to sort returned teams by |
| `skip_users` | integer | No | When enabled, the teams will not include IDs of member users |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all user connections

**Slug:** `PIPEDRIVE_GET_ALL_USER_CONNECTIONS`

Returns data about all connections for the authorized user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all users

**Slug:** `PIPEDRIVE_GET_ALL_USERS`

Returns data about all users within the company.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all users in a team

**Slug:** `PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM`

Returns a list of all user IDs within a team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the team |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all webhooks

**Slug:** `PIPEDRIVE_GET_ALL_WEBHOOKS`

Returns data about all the Webhooks of a company.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get archived deals

**Slug:** `PIPEDRIVE_GET_ARCHIVED_DEALS`

Tool to get all archived deals from Pipedrive. Use when you need to retrieve deals that have been archived, with support for filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Optional comma separated string array of up to 100 entity ids to fetch |
| `limit` | integer | No | For pagination, the limit of entries to be returned. A maximum value of 500 is allowed (default: 100) |
| `cursor` | string | No | Pagination marker for the next page of results |
| `org_id` | integer | No | Filters to deals linked to the specified organization |
| `status` | string ("open" | "won" | "lost" | "deleted") | No | Deal status filter |
| `sort_by` | string ("id" | "update_time" | "add_time") | No | Supported sort fields for archived deals |
| `owner_id` | integer | No | Filters to deals owned by the specified user |
| `stage_id` | integer | No | Filters to deals in the specified stage |
| `filter_id` | integer | No | When supplied, returns only deals matching the specified filter |
| `person_id` | integer | No | Filters to deals linked to the specified person |
| `pipeline_id` | integer | No | Filters to deals in the specified pipeline |
| `custom_fields` | string | No | Optional comma separated string array of custom fields keys to include. A maximum of 15 keys is allowed |
| `updated_since` | string | No | RFC3339 format; returns deals with update_time >= this value |
| `updated_until` | string | No | RFC3339 format; returns deals with update_time < this value |
| `include_fields` | string | No | Additional optional fields (next_activity_id, last_activity_id, first_won_time, products_count, etc.) |
| `sort_direction` | string ("asc" | "desc") | No | Sort direction for archived deals |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get archived leads

**Slug:** `PIPEDRIVE_GET_ARCHIVED_LEADS`

Tool to get all archived leads from Pipedrive. Use when you need to retrieve leads that have been archived, with support for filtering by owner, person, organization, or custom filter, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("id" | "title" | "owner_id" | "creator_id" | "was_seen" | "expected_close_date" | "next_activity_id" | "add_time" | "update_time") | No | Supported sort fields for archived leads |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. |
| `start` | integer | No | For pagination, the position that represents the first result for the page |
| `owner_id` | integer | No | If supplied, only leads matching the given user will be returned. However, filter_id takes precedence over owner_id when supplied. |
| `filter_id` | integer | No | The ID of the filter to use |
| `person_id` | integer | No | If supplied, only leads matching the given person will be returned. However, filter_id takes precedence over person_id when supplied. |
| `organization_id` | integer | No | If supplied, only leads matching the given organization will be returned. However, filter_id takes precedence over organization_id when supplied. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get call log details

**Slug:** `PIPEDRIVE_GET_CALL_LOG`

Tool to retrieve details of a specific call log by ID. Use when you need to get complete information about a call log including duration, outcome, participants, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the call log to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one comment

**Slug:** `PIPEDRIVE_GET_COMMENT`

Returns the details of a comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `commentId` | string | Yes | The ID of the comment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all add ons for a single company

**Slug:** `PIPEDRIVE_GET_COMPANY_ADD_ONS`

Returns the add-ons for a single company.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get conversations for a channel

**Slug:** `PIPEDRIVE_GET_CONVERSATIONS`

Tool to retrieve messaging conversations. Use after channel registration to sync conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for fetching the next page of conversations |
| `channel_id` | string | Yes | Unique ID of the messaging channel |
| `messages_limit` | integer | No | Maximum number of messages per conversation |
| `conversations_limit` | integer | No | Maximum number of conversations to return |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get current user data

**Slug:** `PIPEDRIVE_GET_CURRENT_USER_DATA`

Returns data about an authorized user within the company with bound company data: company ID, company name, and domain. Note that the `locale` property means 'Date/number format' in the Pipedrive account settings, not the chosen language.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Details

**Slug:** `PIPEDRIVE_GET_DEAL`

Tool to get details of a specific deal in Pipedrive. Use when you need to retrieve comprehensive information about a deal by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to retrieve |
| `custom_fields` | string | No | Comma-separated list of custom field keys to include (maximum 15 keys). Use this parameter for faster results and smaller responses when only specific custom fields are needed. |
| `include_fields` | string | No | Comma-separated list of additional fields to include in the response. Acceptable values: next_activity_id, last_activity_id, first_won_time, products_count, files_count, notes_count, followers_count, email_messages_count, activities_count, done_activities_count, undone_activities_count, participants_count, last_incoming_mail_time, last_outgoing_mail_time, smart_bcc_email |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal activities (Deprecated)

**Slug:** `PIPEDRIVE_GET_DEAL_ACTIVITIES`

DEPRECATED: Use PIPEDRIVE_PIPEDRIVE_ACTIVITIES_UPDATE_ACTIVITY or PIPEDRIVE_LIST_ACTIVITIES instead. Lists activities associated with a deal. Use when you need to retrieve all activities linked to a specific deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `done` | integer | No | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities. |
| `limit` | integer | No | Number of items displayed per page |
| `start` | integer | No | Pagination starting point |
| `exclude` | string | No | Comma-separated activity IDs to exclude from results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Changelog

**Slug:** `PIPEDRIVE_GET_DEAL_CHANGELOG`

Tool to list updates about deal field values. Use when you need to retrieve the changelog history showing all changes made to a specific deal's field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Number of items to display per page. Controls the size of each paginated response. |
| `cursor` | string | No | Pagination cursor for the first item on the next page. Use the cursor returned in the response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one deal field

**Slug:** `PIPEDRIVE_GET_DEAL_FIELD`

Tool to retrieve a specific deal field by ID. Use when you need to get metadata and configuration for a deal field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Files

**Slug:** `PIPEDRIVE_GET_DEAL_FILES`

Tool to list files attached to a deal. Use when you need to retrieve all files associated with a specific deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `sort` | string | No | Supported fields for sorting: `id`, `update_time`. Example: 'id ASC' or 'update_time DESC'. |
| `limit` | integer | No | Items shown per page. Maximum value of 100 is allowed. |
| `start` | integer | No | Pagination start. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal followers

**Slug:** `PIPEDRIVE_GET_DEAL_FOLLOWERS`

Lists users who are following the deal. Use when you need to retrieve all followers of a specific deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | For pagination, the limit of entries to be returned. Maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal followers changelog

**Slug:** `PIPEDRIVE_GET_DEAL_FOLLOWERS_CHANGELOG`

Tool to retrieve changelogs about users who have followed a deal. Use when you need to track follower activity, showing when users were added or removed as followers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Number of items returned per page. Maximum value is 500. |
| `cursor` | string | No | Pagination marker (opaque string) pointing to the first item on the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Mail Messages

**Slug:** `PIPEDRIVE_GET_DEAL_MAIL_MESSAGES`

Tool to list mail messages associated with a deal in Pipedrive. Use when you need to retrieve email communications linked to a specific deal. Note: This returns mail message snippets only; for full email content, use the thread_id and query mail threads separately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to retrieve mail messages for |
| `limit` | integer | No | Number of items shown per page. If not provided, API default will be used. |
| `start` | integer | No | Pagination start position. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Participants

**Slug:** `PIPEDRIVE_GET_DEAL_PARTICIPANTS`

Tool to list participants of a deal. Use when you need to retrieve all participants (persons) associated with a specific deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page. Maximum value of 500 is allowed. Default is 100. |
| `start` | integer | No | Pagination start. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Participants Changelog

**Slug:** `PIPEDRIVE_GET_DEAL_PARTICIPANTS_CHANGELOG`

Tool to list updates about participants of a deal. Use when you need to retrieve the changelog history showing all changes made to a specific deal's participants.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Number of items to display per page. Maximum value is 500. |
| `cursor` | string | No | Pagination cursor for the first item on the next page. Use the cursor returned in the response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Products

**Slug:** `PIPEDRIVE_GET_DEAL_PRODUCTS`

Tool to list products attached to a deal. Use when you need to retrieve all products associated with a specific deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | For pagination, the limit of entries to be returned. Maximum value of 500 is allowed. Default is 100. |
| `cursor` | string | No | For pagination, the marker (opaque string value) representing the first item on the next page |
| `sort_by` | string | No | The field to sort by. Supported values: id, add_time, update_time, order_nr. Default is 'id'. |
| `sort_direction` | string | No | The sorting direction. Supported values: asc, desc. Default is 'asc'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals conversion rates in pipeline

**Slug:** `PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE`

Returns all stage-to-stage conversion and pipeline-to-close rates for the given time period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |
| `user_id` | integer | No | The ID of the user who"s pipeline metrics statistics to fetch. If omitted, the authorized user will be used.  |
| `end_date` | string | Yes | The end of the period. Date in format of YYYY-MM-DD. |
| `start_date` | string | Yes | The start of the period. Date in format of YYYY-MM-DD. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal conversion status

**Slug:** `PIPEDRIVE_GET_DEALS_CONVERT_STATUS`

Tool to retrieve the conversion status for a deal-to-lead conversion operation. Use when you need to check the progress or result of a deal conversion job.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the deal |
| `conversion_id` | string | Yes | The ID of the conversion job. The ID has UUID format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals discounts

**Slug:** `PIPEDRIVE_GET_DEALS_DISCOUNTS`

Tool to retrieve discounts for a specific deal. Use when you need to list all discounts added to a deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals in a pipeline

**Slug:** `PIPEDRIVE_GET_DEALS_IN_A_PIPELINE`

Lists deals in a specific pipeline across all its stages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `user_id` | integer | No | If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.  |
| `everyone` | integer | No | If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned  |
| `stage_id` | integer | No | If supplied, only deals within the given stage will be returned |
| `filter_id` | integer | No | If supplied, only deals matching the given filter will be returned |
| `get_summary` | integer | No | Whether to include a summary of the pipeline in the `additional_data` or not  |
| `totals_convert_currency` | string | No | The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals in a stage

**Slug:** `PIPEDRIVE_GET_DEALS_IN_A_STAGE`

Lists deals in a specific stage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `user_id` | integer | No | If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.  |
| `everyone` | integer | No | If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned  |
| `filter_id` | integer | No | If supplied, only deals matching the given filter will be returned |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deals Products

**Slug:** `PIPEDRIVE_GET_DEALS_PRODUCTS`

Tool to retrieve products attached to specified deals (max 100 deals per request). Use when you need to get all products associated with multiple deals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of entries per request (default: 100, max: 500) |
| `cursor` | string | No | Pagination marker to retrieve the next page of results |
| `sort_by` | string | No | Field to sort by - supports 'id', 'deal_id', 'add_time', 'update_time', or 'order_nr' (default: 'id') |
| `deal_ids` | array | Yes | IDs of the deals for which attached products will be returned. Maximum 100 deal IDs allowed. |
| `sort_direction` | string | No | Sort order - 'asc' or 'desc' (default: 'asc') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals summary

**Slug:** `PIPEDRIVE_GET_DEALS_SUMMARY`

Returns a summary of all the deals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("open" | "won" | "lost") | No | Only fetch deals with a specific status. open = Open, won = Won, lost = Lost.  |
| `user_id` | integer | No | Only deals matching the given user will be returned. `user_id` will not be considered if you use `filter_id`.  |
| `stage_id` | integer | No | Only deals within the given stage will be returned |
| `filter_id` | integer | No | <code>user_id</code> will not be considered. Only deals matching the given filter will be returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get archived deals summary

**Slug:** `PIPEDRIVE_GET_DEALS_SUMMARY_ARCHIVED`

Tool to retrieve summary statistics for archived deals. Use when you need aggregated data about archived deals including total count, values, and weighted values grouped by currency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("open" | "won" | "lost") | No | Deal status filter options |
| `user_id` | integer | No | Only deals matching the given user will be returned. user_id will not be considered if you use filter_id. |
| `stage_id` | integer | No | Only deals within the given stage will be returned |
| `filter_id` | integer | No | user_id will not be considered. Only deals matching the given filter will be returned. |
| `pipeline_id` | integer | No | Only deals within the given pipeline will be returned |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals timeline

**Slug:** `PIPEDRIVE_GET_DEALS_TIMELINE`

Returns opened and won deals in time-based groups according to a specified dealField, with examples of deals grouped by month over a 3-month period starting January 2012.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | The number of given intervals, starting from `start_date`, to fetch. E.g. 3 (months).  |
| `user_id` | integer | No | If supplied, only deals matching the given user will be returned |
| `interval` | string ("day" | "week" | "month" | "quarter") | Yes | The type of the interval<table><tr><th>Value</th><th>Description</th></tr><tr><td>`day`</td><td>Day</td></tr><tr><td>`week`</td><td>A full week (7 days) starting from `start_date`</td></tr><tr><td>`month`</td><td>A full month (depending on the number of days in given month) starting from `start_date`</td></tr><tr><td>`quarter`</td><td>A full quarter (3 months) starting from `start_date`</td></tr></table>  |
| `field_key` | string | Yes | The date field key which deals will be retrieved from |
| `filter_id` | integer | No | If supplied, only deals matching the given filter will be returned |
| `start_date` | string | Yes | The date when the first interval starts. Format: YYYY-MM-DD. |
| `pipeline_id` | integer | No | If supplied, only deals matching the given pipeline will be returned |
| `exclude_deals` | integer | No | Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned.  |
| `totals_convert_currency` | string | No | The 3-letter currency code of any of the supported currencies. When supplied, `totals_converted` is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to `default_currency` in which case the user"s default currency is used.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find subscription by deal

**Slug:** `PIPEDRIVE_GET_DEAL_SUBSCRIPTION`

Returns details of an installment or a recurring subscription by the deal ID. Note: Subscriptions endpoints may not be available on company-specific hosts or may be deprecated. This action attempts multiple hosts and gracefully falls back to Installments (v2) or Deal Products (v1) to provide a useful response based on live API data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dealId` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals where a product is attached to

**Slug:** `PIPEDRIVE_GET_DEALS_WITH_PRODUCT`

Returns data about deals that have a product attached to it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `status` | string ("open" | "won" | "lost" | "deleted" | "all_not_deleted") | No | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal updates

**Slug:** `PIPEDRIVE_GET_DEAL_UPDATES`

Lists updates about a deal in chronological order. Use when you need to track deal changes, monitor activity timeline, or audit deal modifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the deal |
| `items` | string | No | Comma-separated filter for specific update types. Supported values: call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change. Note: Use 'change' instead of 'dealChange' for deal change items |
| `limit` | integer | No | Number of items to show per page for pagination |
| `start` | integer | No | Pagination starting point for retrieving results |
| `all_changes` | string | No | Set to "1" to display custom field updates in the response; omit to exclude custom field changes |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Permitted Users

**Slug:** `PIPEDRIVE_GET_DEAL_USERS`

Tool to list users permitted to access a deal. Use when you need to retrieve all users who have permission to access a specific deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of an organization

**Slug:** `PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION`

Provides detailed information about an organization, including additional fields not shown when listing all organizations, and maps custom fields as long hashes to the 'key' value in organizationFields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a person (Deprecated)

**Slug:** `PIPEDRIVE_GET_DETAILS_OF_A_PERSON`

DEPRECATED: Use PIPEDRIVE_PIPEDRIVE_GET_PERSON instead. The text describes an API endpoint that returns detailed person information, including extra fields and custom fields as hashes. It also provides `data.marketing_status` if the Campaigns product is used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one file

**Slug:** `PIPEDRIVE_GET_FILE`

Returns data about a specific file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the file |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one filter

**Slug:** `PIPEDRIVE_GET_FILTER`

Returns data about a specific filter. Note that this also returns the condition lines of the filter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the filter |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get result of a goal

**Slug:** `PIPEDRIVE_GET_GOAL_RESULT`

Gets the progress of a goal for the specified period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the goal that the results are looked for |
| `period__end` | string | Yes | The end date of the period for which to find the goal"s progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date.   |
| `period__start` | string | Yes | The start date of the period for which to find the goal"s progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lead conversion status by ID

**Slug:** `PIPEDRIVE_GET_LEAD_CONVERSION_STATUS`

Tool to retrieve the conversion status for a specific lead conversion job. Use when you need to check the progress of a lead-to-deal conversion including current state and resulting deal ID upon completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The identifier for a specific lead (UUID format) |
| `conversion_id` | string | Yes | The identifier for the conversion job (UUID format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all lead fields

**Slug:** `PIPEDRIVE_GET_LEAD_FIELDS`

Tool to retrieve all lead fields. Use when you need to get the schema for leads in a company's context.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of items shown per page |
| `start` | integer | No | Pagination start position |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Lead Permitted Users

**Slug:** `PIPEDRIVE_GET_LEAD_USERS`

Tool to list users permitted to access a lead. Use when you need to retrieve all user IDs who have permission to access a specific lead in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one mail message

**Slug:** `PIPEDRIVE_GET_MAIL_MESSAGE`

Returns data about a specific mail message.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the mail message to fetch |
| `include_body` | integer | No | Whether to include the full message body or not. `0` = Don"t include, `1` = Include.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one mail thread

**Slug:** `PIPEDRIVE_GET_MAIL_THREAD`

Returns a specific mail thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the mail thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all mail messages of mail thread

**Slug:** `PIPEDRIVE_GET_MAIL_THREAD_MESSAGES`

Returns all the mail messages inside a specified mail thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the mail thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get mail threads

**Slug:** `PIPEDRIVE_GET_MAIL_THREADS`

Returns mail threads in a specified folder ordered by the most recent message within.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `folder` | string ("inbox" | "drafts" | "sent" | "archive") | Yes | The type of folder to fetch |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Marketplace Client ID

**Slug:** `PIPEDRIVE_GET_MARKETPLACE_CLIENT_ID`

Tool to retrieve marketplace_client_id of an installed video integration. Use when you need the client ID for an installed integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string | No | Optional provider name to filter add-ons by code containing this string. |
| `marketplace_client_id_hint` | string | No | Hint for the marketplace client ID. If provided, returned immediately. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one note

**Slug:** `PIPEDRIVE_GET_NOTE`

Returns details about a specific note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all comments for a note

**Slug:** `PIPEDRIVE_GET_NOTE_COMMENTS`

Returns all comments associated with a note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one lead

**Slug:** `PIPEDRIVE_GET_ONE_LEAD`

API returns specific lead details with custom field values in the Deals format. Unset custom fields are omitted. Leads share custom fields with deals, not having a unique set.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Details

**Slug:** `PIPEDRIVE_GET_ORGANIZATION`

Tool to get details of a specific organization in Pipedrive. Use when you need to retrieve comprehensive information about an organization by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization to retrieve |
| `custom_fields` | string | No | Comma-separated list of custom field keys to include (maximum 15 keys). Use this parameter for faster results and smaller responses when only specific custom fields are needed. |
| `include_fields` | string | No | Comma-separated list of additional fields to include in the response. Acceptable values: next_activity_id, last_activity_id, open_deals_count, related_open_deals_count, closed_deals_count, related_closed_deals_count, email_messages_count, people_count, activities_count, done_activities_count, undone_activities_count, files_count, notes_count, followers_count, won_deals_count, related_won_deals_count, lost_deals_count, related_lost_deals_count |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Changelog

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_CHANGELOG`

Tool to list updates about organization field values. Use when you need to retrieve the changelog history showing all changes made to a specific organization's field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | Number of items to display per page. Controls the size of each paginated response. Maximum value is 500. |
| `cursor` | string | No | Pagination cursor for the first item on the next page. Use the cursor returned in the response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization deals

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_DEALS`

Lists deals associated with an organization. Use when you need to retrieve all deals linked to a specific organization with optional filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `sort` | string | No | Field names and sorting mode separated by comma (e.g., 'add_time ASC'). Only first-level field keys are supported (no nested keys). |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Default: 0 |
| `status` | string ("open" | "won" | "lost" | "deleted" | "all_not_deleted") | No | Filter by deal status. Values: open, won, lost, deleted, all_not_deleted. If omitted, all not deleted deals are returned. |
| `only_primary_association` | integer | No | If set to 1, only deals directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Values: 0 or 1 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one organization field

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_FIELD`

Tool to retrieve a specific organization field by ID. Use when you need to get metadata and configuration for an organization field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Files

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_FILES`

Tool to list files attached to an organization. Use when you need to retrieve all files associated with a specific organization in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `sort` | string | No | Supported fields for sorting: `id`, `update_time`. Example: 'id ASC' or 'update_time DESC'. |
| `limit` | integer | No | Items shown per page. Maximum value of 100 is allowed. |
| `start` | integer | No | Pagination start. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Followers

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_FOLLOWERS`

Tool to list followers of an organization. Use when you need to retrieve all users who are following a specific organization in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Followers Changelog

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_FOLLOWERS_CHANGELOG`

Tool to list changelog about organization followers. Use when you need to retrieve the history of users who have followed or unfollowed a specific organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Mail Messages

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_MAIL_MESSAGES`

Tool to list mail messages associated with an organization. Use when you need to retrieve all email correspondence linked to a specific organization in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | Number of items displayed per page (default: 100, max: 500) |
| `start` | integer | No | Pagination start point. Default: 0 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Persons

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_PERSONS`

Tool to list persons associated with an organization. Use when you need to retrieve all persons linked to a specific organization in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | Number of items shown per page. Defines how many records to return in one request. |
| `start` | integer | No | Pagination start position. Indicates from which record number to start returning results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one organization relationship

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_RELATIONSHIP`

Finds and returns an organization relationship from its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization relationship |
| `org_id` | integer | No | The ID of the base organization for the returned calculated values |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Updates

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_UPDATES`

Tool to list updates about an organization including field value changes, activities, notes, files, and other related items. Use when you need to retrieve the activity flow and update history for a specific organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `items` | string | No | A comma-separated string for filtering out item-specific updates. Possible values: activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document |
| `limit` | integer | No | Items shown per page. Maximum value of 500 is allowed. If not provided, 100 items will be returned. |
| `start` | integer | No | Pagination start point. Use to skip initial items and start from a specific position in the results. |
| `all_changes` | string | No | Whether to show custom field updates or not. Set to '1' to include custom field changes. If omitted, returns changes without custom field updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization permitted users

**Slug:** `PIPEDRIVE_GET_ORGANIZATION_USERS`

List users permitted to access an organization. Use when you need to retrieve all users who have been granted permission to view and interact with a specific organization record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one permission set

**Slug:** `PIPEDRIVE_GET_PERMISSION_SET`

Returns data about a specific permission set.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the permission set |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Permission Set Assignments

**Slug:** `PIPEDRIVE_GET_PERMISSION_SET_ASSIGNMENTS`

Tool to list permission set assignments for a given permission set. Use when you need to retrieve all users assigned to a specific permission set.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the permission set |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start (default: 0) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Details

**Slug:** `PIPEDRIVE_GET_PERSON`

Tool to get details of a specific person in Pipedrive. Use when you need to retrieve comprehensive information about a person by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person to retrieve |
| `custom_fields` | string | No | Comma-separated list of custom field keys to include (maximum 15 keys). Use this parameter for faster results and smaller responses when only specific custom fields are needed. |
| `include_fields` | string | No | Comma-separated list of additional fields to include in the response. Allowed values: next_activity_id, last_activity_id, open_deals_count, related_open_deals_count, closed_deals_count, related_closed_deals_count, participant_open_deals_count, participant_closed_deals_count, email_messages_count, activities_count, done_activities_count, undone_activities_count, files_count, notes_count, followers_count, won_deals_count, related_won_deals_count, lost_deals_count, related_lost_deals_count, last_incoming_mail_time, last_outgoing_mail_time, marketing_status, doi_status. Note: marketing_status and doi_status are only available if company has marketing app enabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Changelog

**Slug:** `PIPEDRIVE_GET_PERSON_CHANGELOG`

Tool to list updates about person field values. Use when you need to retrieve the changelog history showing all changes made to a specific person's field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | Number of items to display per page. Controls the size of each paginated response. |
| `cursor` | string | No | Pagination cursor for the first item on the next page. Use the cursor returned in the response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get person deals

**Slug:** `PIPEDRIVE_GET_PERSON_DEALS`

Lists deals associated with a person. Use when you need to retrieve all deals linked to a specific person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `sort` | string | No | Field names and sorting mode separated by comma (e.g., 'field_name_1 ASC', 'field_name_2 DESC'). Only first-level field keys are supported. |
| `limit` | integer | No | Number of items shown per page |
| `start` | integer | No | Pagination start position |
| `status` | string | No | Filter deals by status. Allowed values: 'open', 'won', 'lost', 'deleted', 'all_not_deleted'. Default is 'all_not_deleted'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one person field

**Slug:** `PIPEDRIVE_GET_PERSON_FIELD`

Tool to retrieve metadata for a specific person field by its ID. Use when you need to get field properties like name, type, order, and options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Files

**Slug:** `PIPEDRIVE_GET_PERSON_FILES`

Tool to list files attached to a person. Use when you need to retrieve all files associated with a specific person in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `sort` | string | No | Field to sort by. Supported fields: `id`, `update_time`. |
| `limit` | integer | No | Items shown per page. Maximum value of 100 is allowed. |
| `start` | integer | No | Pagination start. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Followers

**Slug:** `PIPEDRIVE_GET_PERSON_FOLLOWERS`

Tool to list followers of a person in Pipedrive. Use when you need to retrieve all users who are following a specific person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value allowed is 500. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get person followers changelog

**Slug:** `PIPEDRIVE_GET_PERSON_FOLLOWERS_CHANGELOG`

Tool to retrieve changelogs about users who have followed a person. Use when you need to track follower activity, showing when users were added or removed as followers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Mail Messages

**Slug:** `PIPEDRIVE_GET_PERSON_MAIL_MESSAGES`

Tool to list mail messages associated with a person in Pipedrive. Use when you need to retrieve email communications linked to a specific person contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | Number of items shown per page. If not specified, all items are returned. |
| `start` | integer | No | Pagination start position. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Picture

**Slug:** `PIPEDRIVE_GET_PERSON_PICTURE`

Tool to get picture details of a specific person in Pipedrive. Use when you need to retrieve picture information and URLs for a person by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person whose picture to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Products

**Slug:** `PIPEDRIVE_GET_PERSON_PRODUCTS`

Tool to list products associated with a person. Use when you need to retrieve all products linked to a specific person in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | Items shown per page. If not provided, the default limit from API settings will be used. |
| `start` | integer | No | Pagination start position |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get person updates

**Slug:** `PIPEDRIVE_GET_PERSON_UPDATES`

Lists updates and activity history for a specific person in chronological order. Use when you need to track person changes, monitor activity timeline, or audit person modifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person whose updates should be retrieved |
| `items` | string | No | Comma-separated string for filtering specific update types. Possible values: call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change |
| `limit` | integer | No | Items shown per page for pagination |
| `start` | integer | No | Pagination start position. Default is 0. |
| `all_changes` | string | No | Set to "1" to include custom field updates in the response. If omitted, returns changes without custom field updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person Permitted Users

**Slug:** `PIPEDRIVE_GET_PERSON_USERS`

Tool to list users permitted to access a person. Use when you need to retrieve all users who have permission to access a specific person in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one pipeline

**Slug:** `PIPEDRIVE_GET_PIPELINE`

Returns data about a specific pipeline. Also returns the summary of the deals in this pipeline across its stages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |
| `totals_convert_currency` | string | No | The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pipeline Conversion Statistics

**Slug:** `PIPEDRIVE_GET_PIPELINE_CONVERSION_STATISTICS`

Tool to get deals conversion rates in a pipeline for a given time period. Use when you need stage-to-stage conversion statistics, won conversion rates, or lost conversion rates for a specific pipeline.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |
| `user_id` | integer | No | The ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used |
| `end_date` | string | Yes | The end of the period. Date in format of YYYY-MM-DD |
| `start_date` | string | Yes | The start of the period. Date in format of YYYY-MM-DD |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pipeline Movement Statistics

**Slug:** `PIPEDRIVE_GET_PIPELINE_MOVEMENT_STATISTICS`

Tool to retrieve deal movement statistics within a pipeline for a specified time period. Use when you need to analyze pipeline performance metrics including new deals, won/lost deals, deals left open, and average age statistics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The pipeline's identifier |
| `user_id` | integer | No | Specifies which team member's statistics to retrieve; if absent, the authorized user's data is used |
| `end_date` | string | Yes | Period end date in YYYY-MM-DD format |
| `start_date` | string | Yes | Period beginning date in YYYY-MM-DD format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one product

**Slug:** `PIPEDRIVE_GET_PRODUCT`

Returns data about a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Deals

**Slug:** `PIPEDRIVE_GET_PRODUCT_DEALS`

Tool to list deals associated with a product. Use when you need to retrieve deals that have a specific product attached to them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | Items shown per page. Maximum value allowed is 500. |
| `start` | integer | No | Pagination start. Default is 0. |
| `status` | string | No | Filter deals by status. Options: 'open', 'won', 'lost', 'deleted', 'all_not_deleted'. Default is 'all_not_deleted'. If set to 'deleted', deals deleted up to 30 days ago will be included. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one product field

**Slug:** `PIPEDRIVE_GET_PRODUCT_FIELD`

Returns data about a specific product field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Files

**Slug:** `PIPEDRIVE_GET_PRODUCT_FILES`

Tool to list files attached to a product. Use when you need to retrieve all files associated with a specific product in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `sort` | string | No | Field names and sorting mode separated by comma (field_name_1 ASC, field_name_2 DESC). Supported fields: `id`, `update_time`. Only first field is used for sorting. |
| `limit` | integer | No | Number of items per page. Maximum value of 100 is allowed. |
| `start` | integer | No | Pagination start offset. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product followers

**Slug:** `PIPEDRIVE_GET_PRODUCT_FOLLOWERS`

Tool to list all followers of a product in Pipedrive. Use when you need to retrieve users following a specific product. Returns pagination metadata to handle large follower lists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value: 500 |
| `start` | integer | No | Pagination start offset for entries. Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Followers Changelog

**Slug:** `PIPEDRIVE_GET_PRODUCT_FOLLOWERS_CHANGELOG`

Tool to list changelog of followers for a product. Use when you need to retrieve the history of users who have followed or unfollowed a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product images

**Slug:** `PIPEDRIVE_GET_PRODUCT_IMAGES`

Tool to retrieve image data for a specific product. Use when you need to get the public URL and metadata for a product's image. Note that public URLs have a limited lifetime of 7 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List permitted users for product

**Slug:** `PIPEDRIVE_GET_PRODUCT_USERS`

Tool to list users permitted to access a product in Pipedrive. Use when you need to retrieve the list of users who have permission to view or manage a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to get permitted users for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product variations

**Slug:** `PIPEDRIVE_GET_PRODUCT_VARIATIONS`

Tool to retrieve all product variations for a specific product with pagination support. Use when you need to get the complete list of variations available for a product, each with different prices across currencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | For pagination, the maximum entries returned. Default is 100; maximum allowed is 500 |
| `cursor` | string | No | For pagination, an opaque marker representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a project

**Slug:** `PIPEDRIVE_GET_PROJECT`

Returns the details of a specific project. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the `key` value of project fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Returns project activities

**Slug:** `PIPEDRIVE_GET_PROJECT_ACTIVITIES`

Returns activities linked to a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a board

**Slug:** `PIPEDRIVE_GET_PROJECT_BOARD`

Returns the details of a specific project board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project board |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Returns project groups

**Slug:** `PIPEDRIVE_GET_PROJECT_GROUPS`

Returns all active groups under a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a phase

**Slug:** `PIPEDRIVE_GET_PROJECT_PHASE`

Returns the details of a specific project phase.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project phase |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project phases

**Slug:** `PIPEDRIVE_GET_PROJECT_PHASES`

Returns all active project phases under a specific board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | integer | Yes | ID of the board for which phases are requested |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Returns project plan

**Slug:** `PIPEDRIVE_GET_PROJECT_PLAN`

Returns information about items in a project plan. Items consists of tasks and activities and are linked to specific project phase and group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Returns project tasks

**Slug:** `PIPEDRIVE_GET_PROJECT_TASKS`

Returns tasks linked to a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get recents

**Slug:** `PIPEDRIVE_GET_RECENTS`

Returns data about all recent changes occurred after the given timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | string ("activity" | "activityType" | "deal" | "file" | "filter" | "note" | "person" | "organization" | "pipeline" | "product" | "stage" | "user") | No | Multiple selection of item types to include in the query (optional) |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `since_timestamp` | string | Yes | The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one role

**Slug:** `PIPEDRIVE_GET_ROLE`

Tool to retrieve details for a specific role by its ID. Use when you need to get complete role information including name, parent role, active status, assignment count, and default visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get role assignments

**Slug:** `PIPEDRIVE_GET_ROLE_ASSIGNMENTS`

Tool to retrieve all users assigned to a specific role in Pipedrive. Use when you need to list role assignments for a given role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `limit` | integer | No | Number of items shown per page |
| `start` | integer | No | Pagination start position |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get role pipelines

**Slug:** `PIPEDRIVE_GET_ROLE_PIPELINES`

Returns the visibility settings for pipelines associated with a specific role. Use when you need to list which pipelines are visible or hidden for a role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `visible` | boolean | No | Determines whether to retrieve visible or hidden pipelines. Defaults to true (visible pipelines). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get role settings

**Slug:** `PIPEDRIVE_GET_ROLE_SETTINGS`

Tool to retrieve visibility settings of a specific role. Use when you need to get default visibility levels and access levels for deals, leads, organizations, people, and products associated with a role. Note: - Roles endpoints require the `admin` scope. - For OAuth tokens, Pipedrive expects the company domain base URL with `/api/v1` path. Example: https://{COMPANY}.pipedrive.com/api/v1/roles/{id}/settings - This action normalizes the provided base_url to use `/api/v1` to avoid host/path mismatches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one stage

**Slug:** `PIPEDRIVE_GET_STAGE`

Returns data about a specific stage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage |
| `everyone` | integer | No | If `everyone=1` is provided, deals summary will return deals owned by every user  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a subscription

**Slug:** `PIPEDRIVE_GET_SUBSCRIPTION`

Returns details of an installment or a recurring subscription. Note: Subscriptions endpoints may not be available on the company-specific base URL. To avoid 404s, this action tries multiple hosts and gracefully falls back to Installments (v2) and Deal Products (v1).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all payments of a subscription

**Slug:** `PIPEDRIVE_GET_SUBSCRIPTION_PAYMENTS`

Returns all payments of an installment or recurring subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a task

**Slug:** `PIPEDRIVE_GET_TASK`

Returns the details of a specific task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the task |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a single team

**Slug:** `PIPEDRIVE_GET_TEAM`

Returns data about a specific team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the team |
| `skip_users` | integer | No | When enabled, the teams will not include IDs of member users |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get details of a template

**Slug:** `PIPEDRIVE_GET_TEMPLATE`

Returns the details of a specific project template.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project template |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get templates for a channel

**Slug:** `PIPEDRIVE_GET_TEMPLATES`

Tool to retrieve message templates for a channel. Use when template support is enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel_id` | string | Yes | Unique ID of the messaging channel (UUID format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get one user

**Slug:** `PIPEDRIVE_GET_USER`

Returns data about a specific user within the company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all call logs assigned to a particular user

**Slug:** `PIPEDRIVE_GET_USER_CALL_LOGS`

Returns all call logs assigned to a particular user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | For pagination, the limit of entries to be returned. The upper limit is 50.  |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Followers

**Slug:** `PIPEDRIVE_GET_USER_FOLLOWERS`

Tool to list users who are following a specific user. Use when you need to retrieve all followers of a user in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |
| `limit` | integer | No | For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Maximum value of 500 is allowed. |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List user permissions

**Slug:** `PIPEDRIVE_GET_USER_PERMISSIONS`

Tool to list aggregated permissions over all assigned permission sets for a user. Use when you need to check what capabilities and access rights a specific user has across the system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The identifier of the user whose permissions to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Role Assignments

**Slug:** `PIPEDRIVE_GET_USER_ROLE_ASSIGNMENTS`

Tool to list role assignments for a user. Use when you need to retrieve all role assignments associated with a specific user in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start position |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user role settings

**Slug:** `PIPEDRIVE_GET_USER_ROLE_SETTINGS`

Tool to list user role settings. Use when you need to retrieve the role configuration data for a specific user, including default visibility levels and access levels for various entities. Note: This endpoint costs 10 API credits per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Link a remote file to an item

**Slug:** `PIPEDRIVE_LINK_REMOTE_FILE`

Links an existing remote file (`googledrive`) to the item you supply. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-remote-file" target="_blank" rel="noopener noreferrer">adding a remote file</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | integer | Yes | The ID of the item to associate the file with |
| `item_type` | string ("deal" | "organization" | "person") | Yes | The item type |
| `remote_id` | string | Yes | The remote item ID |
| `remote_location` | string ("googledrive") | Yes | The location type to send the file to. Only `googledrive` is supported at the moment.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Link User Video Integration

**Slug:** `PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION`

A video calling provider must call this endpoint after a user has installed the video calling app so that the new user's information is sent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | Pipedrive user ID |
| `company_id` | integer | Yes | Pipedrive company ID |
| `user_provider_id` | string | Yes | Unique identifier linking a user to the installed integration. Generated by the integration.  |
| `marketplace_client_id` | string | Yes | Pipedrive Marketplace client ID of the installed integration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List activities associated with a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_ACTIVITIES`

Lists activities associated with a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `done` | integer | No | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `exclude` | string | No | A comma-separated string of activity IDs to exclude from result |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List files attached to a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_FILES`

Lists files associated with a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List followers of a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_FOLLOWERS`

Lists the followers of a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List mail messages associated with a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_MAIL_MESSAGES`

Lists mail messages associated with a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all persons associated with a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_PERSONS`

The endpoint lists every person linked to a deal, including primary contacts and participants, and provides a `data.marketing_status` field for users of the Campaigns product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List products attached to a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_PRODUCTS`

Lists products attached to a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `include_product_data` | integer | No | Whether to fetch product data along with each attached product (1) or not (0, default)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List updates about a deal

**Slug:** `PIPEDRIVE_LIST_DEAL_UPDATES`

Lists updates about a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `items` | string | No | A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `all_changes` | string | No | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List permitted users

**Slug:** `PIPEDRIVE_LIST_DEAL_USERS`

Lists the users permitted to access a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all files

**Slug:** `PIPEDRIVE_LIST_FILES`

Lists all files uploaded to Pipedrive with optional filtering via pagination and sorting. Use this action when you need to retrieve all files across the entire Pipedrive account, regardless of which entity they're attached to. This differs from entity-specific file actions (like get_deal_files) which only return files for a particular deal, person, or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Field names and sorting mode separated by a comma. Supported fields: `id`, `update_time`. Example: 'id ASC' or 'update_time DESC'. |
| `limit` | integer | No | Number of items shown per page. Maximum value of 100 is allowed. |
| `start` | integer | No | Pagination start position. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List activities associated with an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_ACTIVITIES`

Lists activities associated with an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `done` | integer | No | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `exclude` | string | No | A comma-separated string of activity IDs to exclude from result |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List deals associated with an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_DEALS`

Lists deals associated with an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `status` | string ("open" | "won" | "lost" | "deleted" | "all_not_deleted") | No | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.  |
| `only_primary_association` | integer | No | If set, only deals that are directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List files attached to an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_FILES`

Lists files associated with an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List followers of an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_FOLLOWERS`

Lists the followers of an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List mail messages associated with an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_MAIL_MESSAGES`

Lists mail messages associated with an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List persons of an organization

**Slug:** `PIPEDRIVE_LIST_ORGANIZATION_PERSONS`

Lists persons associated with an organization.<br>If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing_status` field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List participants of a deal

**Slug:** `PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL`

Lists the participants associated with a deal.<br>If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing_status` field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List permission set assignments

**Slug:** `PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS`

Returns the list of assignments for a permission set. Notes: - This endpoint requires the `admin` OAuth scope. - OAuth calls must target the company domain with `/api/v1` path, e.g., https://{COMPANY}.pipedrive.com/api/v1/permissionSets/{id}/assignments - This action normalizes the base URL accordingly and returns the API envelope even on errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the permission set |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List activities associated with a person

**Slug:** `PIPEDRIVE_LIST_PERSON_ACTIVITIES`

Lists activities associated with a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `done` | integer | No | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `exclude` | string | No | A comma-separated string of activity IDs to exclude from result |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List deals associated with a person

**Slug:** `PIPEDRIVE_LIST_PERSON_DEALS`

Lists deals associated with a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `status` | string ("open" | "won" | "lost" | "deleted" | "all_not_deleted") | No | Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List files attached to a person

**Slug:** `PIPEDRIVE_LIST_PERSON_FILES`

Lists files associated with a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `sort` | string | No | The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List followers of a person

**Slug:** `PIPEDRIVE_LIST_PERSON_FOLLOWERS`

Lists the followers of a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List mail messages associated with a person

**Slug:** `PIPEDRIVE_LIST_PERSON_MAIL_MESSAGES`

Lists mail messages associated with a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List products associated with a person

**Slug:** `PIPEDRIVE_LIST_PERSON_PRODUCTS`

Lists products associated with a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Person Access Users

**Slug:** `PIPEDRIVE_LIST_PERSON_USERS`

List users permitted to access a person.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List files attached to a product

**Slug:** `PIPEDRIVE_LIST_PRODUCT_FILES`

Lists files associated with a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `sort` | string | No | The field name and sorting mode (`field_name_1 ASC` or `field_name_1 DESC`). Supported fields: `update_time`, `id`.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List followers of a product

**Slug:** `PIPEDRIVE_LIST_PRODUCT_FOLLOWERS`

Lists the followers of a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Product Permitted Users

**Slug:** `PIPEDRIVE_LIST_PRODUCT_USERS`

Lists users permitted to access a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List role assignments

**Slug:** `PIPEDRIVE_LIST_ROLE_ASSIGNMENTS`

Returns all users assigned to a role. Notes: - Roles endpoints require the `admin` OAuth scope. - OAuth calls must target the company domain with `/api/v1` path, e.g., https://{COMPANY}.pipedrive.com/api/v1/roles/{id}/assignments - This action normalizes the base URL accordingly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pipeline visibility for a role

**Slug:** `PIPEDRIVE_LIST_ROLE_PIPELINE_VISIBILITY`

Returns a list of visible or hidden pipeline IDs by role. See the "Visibility groups article" for details on pipeline visibility.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `visible` | boolean | No | Whether to return the visible or hidden pipelines for the role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List role settings

**Slug:** `PIPEDRIVE_LIST_ROLE_SETTINGS`

Returns the visibility settings of a specific role. Notes: - Roles endpoints require the `admin` OAuth scope. - OAuth calls must target the company domain with `/api/v1` path, e.g., https://{COMPANY}.pipedrive.com/api/v1/roles/{id}/settings - This action normalizes the base URL accordingly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List updates about an organization

**Slug:** `PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION`

Lists updates about an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `items` | string | No | A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `all_changes` | string | No | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted, returns changes without custom field updates.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List updates about a person

**Slug:** `PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON`

Lists updates about a person.<br>If a company uses the [Campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint's response will also include updates for the `marketing_status` field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `items` | string | No | A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change).  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `all_changes` | string | No | Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List updates about participants of a deal

**Slug:** `PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL`

This endpoint provides cursor-paginated updates on deal participants. For pagination details, see the Pipedrive documentation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `limit` | integer | No | Items shown per page |
| `cursor` | string | No | For pagination, the marker (an opaque string value) representing the first item on the next page  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List followers of a user

**Slug:** `PIPEDRIVE_LIST_USER_FOLLOWERS`

Lists the followers of a specific user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List user permissions

**Slug:** `PIPEDRIVE_LIST_USER_PERMISSIONS`

Lists aggregated permissions over all assigned permission sets for a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Role Assignments

**Slug:** `PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS`

Lists role assignments for a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List user role settings

**Slug:** `PIPEDRIVE_LIST_USER_ROLE_SETTINGS`

Lists the settings of user's assigned role.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List settings of an authorized user

**Slug:** `PIPEDRIVE_LIST_USER_SETTINGS`

Lists the settings of an authorized user. Example response contains a shortened list of settings.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Deals

**Slug:** `PIPEDRIVE_MERGE_DEALS`

Tool to merge two deals in Pipedrive. Use when you need to consolidate two deals into one. The deal specified by 'id' will be merged into the deal specified by 'merge_with_id', and the first deal will be removed while the second one will remain with all consolidated data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal that will be merged and removed from the account |
| `merge_with_id` | integer | Yes | The ID of the deal that will remain in the account and receive the merged data. This deal takes priority in conflict scenarios, and all related data (activities, emails, notes, products, followers, participants, filters) will be transferred to it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Organizations

**Slug:** `PIPEDRIVE_MERGE_ORGANIZATIONS`

Tool to merge two organizations in Pipedrive. Use when you need to consolidate two organizations into one. The organization specified by 'id' will be merged into the organization specified by 'merge_with_id', and the first organization will be removed while the second one will remain with all consolidated data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization that will be merged and removed from the account |
| `merge_with_id` | integer | Yes | The ID of the organization that will remain in the account and receive the merged data. This organization takes priority in conflict scenarios. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two persons

**Slug:** `PIPEDRIVE_MERGE_PERSONS`

Tool to merge two persons in Pipedrive. Use when you need to combine two person records into one. The person ID specified in the request will be merged and removed, while the merge_with_id person will remain. When data conflicts exist, the merge_with_id person's field data takes priority.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person that will be merged and removed from Pipedrive |
| `merge_with_id` | integer | Yes | The ID of the person that will remain after the merge. This person's data will be prioritized in case of conflict with the other person. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two deals

**Slug:** `PIPEDRIVE_MERGE_TWO_DEALS`

Merges a deal with another deal. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-deals" target="_blank" rel="noopener noreferrer">merging two deals</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `merge_with_id` | integer | Yes | The ID of the deal that the deal will be merged with |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two organizations

**Slug:** `PIPEDRIVE_MERGE_TWO_ORGANIZATIONS`

Merges an organization with another organization. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-organizations" target="_blank" rel="noopener noreferrer">merging two organizations</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `merge_with_id` | integer | Yes | The ID of the organization that the organization will be merged with |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two persons

**Slug:** `PIPEDRIVE_MERGE_TWO_PERSONS`

Merges a person with another person. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-persons" target="_blank" rel="noopener noreferrer">merging two persons</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `merge_with_id` | integer | Yes | The ID of the person that will not be overwritten. This person’s data will be prioritized in case of conflict with the other person.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Organization accessible user list

**Slug:** `PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST`

List users permitted to access an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch deal fields

**Slug:** `PIPEDRIVE_PATCH_DEAL_FIELDS`

Updates an existing deal custom field using PATCH method. Use when you need to modify field properties like name, visibility, or validation rules. Note that field code and type are immutable and cannot be changed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_code` | string | Yes | The unique code identifying the field (40-character identifier for custom fields) |
| `field_name` | string | No | The name displayed for the field. At least one body parameter must be provided. |
| `description` | string | No | Text describing the field's purpose |
| `ui_visibility` | object | No | Settings controlling where the field appears in the web UI |
| `required_fields` | object | No | Settings for marking as mandatory at certain stages |
| `important_fields` | object | No | Configuration for highlighting at specific stages |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization field (v2)

**Slug:** `PIPEDRIVE_PATCH_ORGANIZATION_FIELDS`

Tool to update an existing organization field in Pipedrive using the v2 API. Use when you need to modify field name, UI visibility, importance settings, required field settings, or description.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_code` | string | Yes | The unique code identifying the organization field to update |
| `field_name` | string | No | The new label/name for the organization field |
| `description` | string | No | Description text for the field (nullable) |
| `ui_visibility` | object | No | Configuration for UI visibility settings |
| `required_fields` | object | No | Configuration for making field required |
| `important_fields` | object | No | Configuration for marking field as important |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Person Field Configuration

**Slug:** `PIPEDRIVE_PATCH_PERSON_FIELDS`

Tool to update person field configuration in Pipedrive. Use when you need to modify field properties like name, description, visibility settings, or requirement status. Only provided properties will be updated; omitted properties retain their existing values. Note: field_code and field_type cannot be changed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_code` | string | Yes | The unique code identifying the field (40-character hash for custom fields) |
| `field_name` | string | No | Field display name (1-255 characters). At least one request body parameter must be provided |
| `description` | string | No | Field description text |
| `ui_visibility` | object | No | Controls field appearance in Pipedrive interface |
| `required_fields` | object | No | Marks field as mandatory |
| `important_fields` | object | No | Configuration for highlighting field at specific deal stages |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product field

**Slug:** `PIPEDRIVE_PRODUCTFIELDS_PATCH_PRODUCTFIELDS`

Tool to update a product custom field. Use when you need to modify field name, UI visibility, or description. The field_code and field_type cannot be changed. At least one field must be provided in the request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_code` | string | Yes | The unique code identifying the field to update (40-character hash) |
| `field_name` | string | No | Field name (1-255 characters). At least one of field_name, ui_visibility, or description must be provided. |
| `description` | string | No | Field description. Can be null to remove the description. |
| `ui_visibility` | object | No | UI visibility settings for the product field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Refreshing the tokens

**Slug:** `PIPEDRIVE_REFRESH_TOKENS`

Access tokens expire after the time specified in `expires_in`. To continue accessing the API, use the `refresh_token` to obtain a new access token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_id` | string | No | The client ID provided to you by the Pipedrive Marketplace when you register your app |
| `grant_type` | string ("authorization_code" | "refresh_token") | No | Since you are to refresh your access_token, you must use the value "refresh_token"  |
| `client_secret` | string | No | The client secret provided to you by the Pipedrive Marketplace when you register your app |
| `refresh_token` | string | No | The refresh token that you received after you exchanged the authorization code |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Requesting authorization

**Slug:** `PIPEDRIVE_REQUEST_AUTHORIZATION`

Authorize a user by redirecting them to the Pipedrive OAuth authorization page and request their permissions to act on their behalf. This step is necessary to implement only when you allow app installation outside of the Marketplace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | You may pass any random string as the state parameter and the same string will be returned to your app after a user authorizes access. It may be used to store the user"s session ID from your app or distinguish different responses. Using state may increase security; see RFC-6749. The state parameter is not automatically available in Marketplace Manager. To enable it for your app, please write to us at marketplace.devs@pipedrive.com.   |
| `client_id` | string | Yes | The client ID provided to you by the Pipedrive Marketplace when you register your app  |
| `redirect_uri` | string | Yes | The callback URL you provided when you registered your app. Authorization code will be sent to that URL (if it matches with the value you entered in the registration form) if a user approves the app install. Or, if a customer declines, the corresponding error will also be sent to this URL.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search deals

**Slug:** `PIPEDRIVE_SEARCH_DEALS`

This API endpoint searches deals by title, notes, and custom fields, filters results by person or organization ID, and is a specific use case of /v1/itemSearch with limited OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters required (or 1 character if exact_match is set to true). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page. Maximum value is 100. |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("custom_fields" | "notes" | "title") | No | A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.  |
| `status` | string ("open" | "won" | "lost") | No | Will filter deals by the provided specific status. open = Open, won = Won, lost = Lost. The upper limit of found deals associated with the status is 2000.  |
| `person_id` | integer | No | Will filter deals by the provided person ID. The upper limit of found deals associated with the person is 2000.  |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |
| `include_fields` | string ("deal.cc_email") | No | Supports including optional fields in the results which are not provided by default  |
| `organization_id` | integer | No | Will filter deals by the provided organization ID. The upper limit of found deals associated with the organization is 2000.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Item By Field

**Slug:** `PIPEDRIVE_SEARCH_ITEM_BY_FIELD`

Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (deals, leads, persons, organizations or products).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start |
| `field_key` | string | Yes | The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields" API GET methods (dealFields, personFields, etc.). Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.  |
| `field_type` | string ("dealField" | "leadField" | "personField" | "organizationField" | "productField" | "projectField") | Yes | The type of the field to perform the search from |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive.  |
| `return_item_ids` | boolean | No | Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search leads

**Slug:** `PIPEDRIVE_SEARCH_LEADS`

Endpoint searches leads by title, notes, custom fields, with options to filter by person and organization IDs, and is a more specific use of the /v1/itemSearch with limited OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("custom_fields" | "notes" | "title") | No | A comma-separated string array. The fields to perform the search from. Defaults to all of them.  |
| `person_id` | integer | No | Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.  |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |
| `include_fields` | string ("lead.was_seen") | No | Supports including optional fields in the results which are not provided by default  |
| `organization_id` | integer | No | Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Perform a search from multiple item types

**Slug:** `PIPEDRIVE_SEARCH_MULTIPLE_ITEM_TYPES`

Performs a search from your choice of item types and fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("address" | "code" | "custom_fields" | "email" | "name" | "notes" | "organization_name" | "person_name" | "phone" | "title" | "description") | No | A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.<br/> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`.  |
| `item_types` | string ("deal" | "person" | "organization" | "product" | "lead" | "file" | "mail_attachment" | "project") | No | A comma-separated string array. The type of items to perform the search from. Defaults to all.  |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |
| `include_fields` | string ("deal.cc_email" | "person.picture" | "product.price") | No | A comma-separated string array. Supports including optional fields in the results which are not provided by default.  |
| `search_for_related_items` | boolean | No | When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search organizations

**Slug:** `PIPEDRIVE_SEARCH_ORGANIZATIONS`

Searches all organizations by name, address, notes and/or custom fields. This endpoint is a wrapper of <a href="https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem">/v1/itemSearch</a> with a narrower OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("address" | "custom_fields" | "notes" | "name") | No | A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.  |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search persons

**Slug:** `PIPEDRIVE_SEARCH_PERSONS`

This endpoint searches for individuals by various identifiers and is a specific use case of /v1/itemSearch with limited OAuth scope, allowing results filtering by organization ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Wildcards like '*' or '@' are NOT supported. To list all persons in an organization, use the GET_ALL_PERSONS or LIST_PERSONS_OF_AN_ORGANIZATION action instead.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("custom_fields" | "email" | "notes" | "phone" | "name") | No | The field to perform the search from. Defaults to all searchable fields. Only the following custom field types are searchable: address, varchar, text, varchar_auto, double, monetary and phone. |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |
| `include_fields` | string ("person.picture") | No | Supports including optional fields in the results which are not provided by default  |
| `organization_id` | integer | No | Will filter persons by the provided organization ID. The upper limit of found persons associated with the organization is 2000.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search products

**Slug:** `PIPEDRIVE_SEARCH_PRODUCTS`

Searches all products by name, code and/or custom fields. This endpoint is a wrapper of <a href="https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem">/v1/itemSearch</a> with a narrower OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.  |
| `limit` | integer | No | Items shown per page |
| `start` | integer | No | Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.  |
| `fields` | string ("code" | "custom_fields" | "name") | No | A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.  |
| `exact_match` | boolean | No | When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.  |
| `include_fields` | string ("product.price") | No | Supports including optional fields in the results which are not provided by default  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update stage

**Slug:** `PIPEDRIVE_TAGES_UPDATE_STAGE`

Tool to update an existing stage in Pipedrive. Use when you need to modify stage properties such as name, deal probability, or rotten deal settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage to update |
| `name` | string | No | The name of the stage |
| `pipeline_id` | integer | No | The ID of the pipeline to add stage to |
| `days_to_rotten` | integer | No | Number of days before deals become rotten; applies only when is_deal_rot_enabled is enabled |
| `deal_probability` | integer | No | Success probability percentage for deals; utilized when deal weighted values are active. Must be between 0 and 100. |
| `is_deal_rot_enabled` | boolean | No | Whether deals in this stage can become rotten |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unlinkuserfromvideocallintegration

**Slug:** `PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION`

A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier linking a user to the installed integration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a comment related to a note

**Slug:** `PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE`

Updates a comment related to a note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `content` | string | Yes | The content of the comment in HTML format. Subject to sanitization on the back-end.  |
| `commentId` | string | Yes | The ID of the comment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an activity

**Slug:** `PIPEDRIVE_UPDATE_ACTIVITY`

Tool to update an existing activity in Pipedrive including scheduling, assignments, descriptions, and participants. Use when you need to modify any properties of an activity such as subject, due date/time, status, or associated entities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the activity to update |
| `busy` | boolean | No | Calendar availability flag (true=busy, false=available) |
| `done` | boolean | No | Completion status indicator (true=completed, false=not completed) |
| `note` | string | No | Internal activity comments/notes |
| `type` | string | No | The activity category/type (e.g., 'call', 'meeting', 'task') |
| `org_id` | integer | No | Associated organization identifier |
| `deal_id` | integer | No | Associated deal identifier |
| `lead_id` | string | No | Associated lead identifier (UUID format) |
| `subject` | string | No | The activity's title/subject |
| `due_date` | string | No | Activity date in YYYY-MM-DD format |
| `due_time` | string | No | Activity time in HH:MM format |
| `duration` | string | No | Activity length in HH:MM format |
| `location` | string | No | Geographic information with address fields or simple string address |
| `owner_id` | integer | No | User ID assigned to the activity |
| `priority` | integer | No | Importance level of the activity |
| `attendees` | array | No | External and internal meeting participants with email, name, and status |
| `person_id` | integer | No | Primary participant identifier |
| `project_id` | integer | No | Associated project identifier |
| `participants` | array | No | Multiple person associations for the activity |
| `public_description` | string | No | Calendar-synced event details visible in external calendars |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update activity in project plan

**Slug:** `PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN`

Updates an activity phase or group in a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |
| `group_id` | integer | No | The ID of a group on a project board |
| `phase_id` | integer | No | The ID of a phase on a project board |
| `activityId` | integer | Yes | The ID of the activity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update activity type

**Slug:** `PIPEDRIVE_UPDATE_ACTIVITY_TYPE`

Tool to update an activity type in Pipedrive. Use when you need to modify the name, icon, color, or order of an existing activity type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The identifier of the activity type to update |
| `name` | string | No | The designation of the activity type |
| `color` | string | No | Six-character hexadecimal color code (e.g., FFFFFF for white, 000000 for black) |
| `icon_key` | string ("task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation") | No | Permitted icon values for activity types. |
| `order_nr` | integer | No | An order number for this activity type. Order numbers should be used to order the types in the activity type selections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a deal

**Slug:** `PIPEDRIVE_UPDATE_A_DEAL`

Updates the properties of a deal. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/updating-a-deal" target="_blank" rel="noopener noreferrer">updating a deal</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `title` | string | No | The deal title |
| `value` | number | No | Monetary value of the deal |
| `org_id` | integer | No | ID of the organization |
| `status` | string | No | Status of the deal (open, won, lost). Defaults to open |
| `user_id` | integer | No | ID of the user who will be marked as owner of this deal |
| `currency` | string | No | Currency for the deal value (3-letter ISO code) |
| `stage_id` | integer | No | Stage ID for the deal |
| `person_id` | integer | No | ID of the person this deal is linked to |
| `visible_to` | integer | No | Visibility of the deal (owner, entire company etc) |
| `lost_reason` | string | No | Reason for losing the deal (only with status=lost) |
| `pipeline_id` | integer | No | Pipeline ID for the deal |
| `probability` | number | No | Success probability percentage (0-100) |
| `expected_close_date` | string | No | Expected close date in format YYYY-MM-DD |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a deal field

**Slug:** `PIPEDRIVE_UPDATE_A_DEAL_FIELD`

Updates a deal field. For more information, see the tutorial for <a href= https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">updating custom fields' values</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the field |
| `name` | string | No | The name of the field |
| `options` | array | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`  |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a filter

**Slug:** `PIPEDRIVE_UPDATE_A_FILTER`

Updates an existing filter in Pipedrive. Use when you need to modify filter name or conditions. Maximum of 16 conditions per filter allowed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the filter to update |
| `name` | string | No | The name assigned to the filter |
| `conditions` | object | No | Filter conditions as JSON object. Maximum of 16 conditions per filter. Date values must use YYYY-MM-DD format. Structure: {"glue":"and","conditions":[{"object":"","field_id":"","operator":"","value":""}]} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a lead

**Slug:** `PIPEDRIVE_UPDATE_A_LEAD`

Updating lead properties modifies only specified fields; use `null` to unset. Custom field data matches `Deals`. Unset fields are omitted. Leads share deals' custom fields. For examples, refer to the tutorial.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead |
| `title` | string | No | The name of the lead |
| `owner_id` | integer | No | The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.  |
| `was_seen` | boolean | No | A flag indicating whether the lead was seen by someone in the Pipedrive UI  |
| `label_ids` | array | No | The IDs of the lead labels which will be associated with the lead |
| `person_id` | integer | No | The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.   |
| `is_archived` | boolean | No | A flag indicating whether the lead is archived or not |
| `value__amount` | integer | No | Amount |
| `organization_id` | integer | No | The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.  |
| `value__currency` | string | No | Currency |
| `expected_close_date` | string | No | The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a lead label

**Slug:** `PIPEDRIVE_UPDATE_A_LEAD_LABEL`

Updates one or more properties of a lead label. Only properties included in the request will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead label |
| `name` | string | No | The name of the lead label |
| `color` | string ("green" | "blue" | "red" | "yellow" | "purple" | "gray" | "brown" | "dark-gray" | "orange" | "pink") | No | The color of the label. Only a subset of colors can be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an activity

**Slug:** `PIPEDRIVE_UPDATE_AN_ACTIVITY`

Updates an activity. Includes `more_activities_scheduled_in_context` property in response's `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity |
| `done` | integer | No | Whether the activity is done (0 = not done, 1 = done) |
| `note` | string | No | The note of the activity (HTML supported) |
| `type` | string | No | The type of the activity (e.g., call, meeting), correlates with ActivityTypes key_string |
| `org_id` | integer | No | ID of the organization linked to the activity |
| `deal_id` | integer | No | ID of the deal linked to the activity |
| `subject` | string | No | The subject of the activity |
| `user_id` | integer | No | ID of the user who will own the activity |
| `due_date` | string | No | The due date of the activity (YYYY-MM-DD) |
| `due_time` | string | No | The due time of the activity (HH:MM) |
| `duration` | string | No | The duration of the activity (e.g., 00:30) |
| `location` | string | No | Location of the activity |
| `person_id` | integer | No | ID of the person linked to the activity |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an activity type

**Slug:** `PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE`

Updates an activity type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the activity type |
| `name` | string | No | The name of the activity type |
| `color` | string | No | A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)  |
| `icon_key` | string ("task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation") | No | Icon graphic to use for representing this activity type |
| `order_nr` | integer | No | An order number for this activity type. Order numbers should be used to order the types in the activity type selections.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an organization

**Slug:** `PIPEDRIVE_UPDATE_AN_ORGANIZATION`

Updates the properties of an organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization |
| `name` | string | No | Organization name |
| `address` | string | No | Formatted address string |
| `website` | string | No | Organization website URL |
| `industry` | integer | No | The numeric ID of the industry option. This is an enum field with predefined options specific to your Pipedrive account. Use PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS to retrieve the 'industry' field and its available options (each option has an 'id' and 'label'). Pass the option 'id' here, not the label text. |
| `linkedin` | string | No | LinkedIn URL |
| `owner_id` | integer | No | Owner user ID |
| `label_ids` | array | No | IDs of labels to assign |
| `visible_to` | integer | No | Visibility (e.g., 1=owner only, 3=entire company) |
| `annual_revenue` | integer | No | The numeric ID of the annual revenue option. This is an enum field with predefined options specific to your Pipedrive account. Use PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS to retrieve the 'annual_revenue' field and its available options (each option has an 'id' and 'label'). Pass the option 'id' here, not the label text. |
| `employee_count` | integer | No | Employee count |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an organization field

**Slug:** `PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD`

Updates an organization field. For more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">updating custom fields' values</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the field |
| `name` | string | No | The name of the field |
| `options` | array | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`  |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an organization relationship

**Slug:** `PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP`

Updates and returns an organization relationship.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization relationship |
| `type` | string ("parent" | "related") | No | The type of organization relationship |
| `org_id` | integer | No | The ID of the base organization for the returned calculated values |
| `rel_owner_org_id` | integer | No | The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.  |
| `rel_linked_org_id` | integer | No | The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a note

**Slug:** `PIPEDRIVE_UPDATE_A_NOTE`

Updates a note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `org_id` | integer | No | The ID of the organization the note will be attached to. |
| `content` | string | No | The content of the note in HTML format; subject to sanitization. |
| `deal_id` | integer | No | The ID of the deal the note will be attached to. |
| `lead_id` | string | No | The ID (UUID) of the lead the note will be attached to. |
| `user_id` | integer | No | The ID of the user to mark as the note’s author (admin only). |
| `add_time` | string | No | Optional creation date & time of the note in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `person_id` | integer | No | The ID of the person the note will be attached to. |
| `project_id` | integer | No | The ID of the project the note will be attached to. |
| `pinned_to_deal_flag` | integer | No | If set, updates note-to-deal pinning state (requires deal_id). 0 or 1. |
| `pinned_to_lead_flag` | integer | No | If set, updates note-to-lead pinning state (requires lead_id). 0 or 1. |
| `pinned_to_person_flag` | integer | No | If set, updates note-to-person pinning state (requires person_id). 0 or 1. |
| `pinned_to_project_flag` | integer | No | If set, updates note-to-project pinning state (requires project_id). 0 or 1. |
| `pinned_to_organization_flag` | integer | No | If set, updates note-to-organization pinning state (requires org_id). 0 or 1. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a person

**Slug:** `PIPEDRIVE_UPDATE_A_PERSON`

Modifies a person’s details in Pipedrive. See the linked tutorial for guidance. If utilizing Campaigns, the endpoint also handles `data.marketing_status`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person |
| `name` | string | No | The name of the person |
| `email` | array | No | List of email objects: { value: string, label?: string, primary?: bool } |
| `phone` | array | No | List of phone objects: { value: string, label?: string, primary?: bool } |
| `org_id` | integer | No | ID of the linked organization |
| `add_time` | string | No | Creation time (RFC 3339) |
| `owner_id` | integer | No | ID of the user who will be marked as the owner of this person |
| `label_ids` | array | No | IDs of labels to assign to the person |
| `visible_to` | integer | No | Visibility of the person (e.g., 1=owner only, 3=entire company) |
| `update_time` | string | No | Last update time (RFC 3339) |
| `marketing_status` | string | No | Marketing status (no_consent, unsubscribed, subscribed, archived). Field is available only when Campaigns is enabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a person field

**Slug:** `PIPEDRIVE_UPDATE_A_PERSON_FIELD`

Updates a person field. For more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">updating custom fields' values</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the field |
| `name` | string | No | The name of the field |
| `options` | array | No | When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`  |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a pipeline

**Slug:** `PIPEDRIVE_UPDATE_A_PIPELINE`

Updates the properties of a pipeline (v2).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline |
| `name` | string | No | The name of the pipeline |
| `is_deal_probability_enabled` | boolean | No | Whether deal probability is enabled for this pipeline |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a product

**Slug:** `PIPEDRIVE_UPDATE_A_PRODUCT`

Updates product data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `tax` | number | No | Tax percentage |
| `code` | string | No | Product code |
| `name` | string | No | Product name |
| `unit` | string | No | Sales unit of the product |
| `prices` | array | No | Array of prices per currency |
| `category` | integer | No | Product category |
| `owner_id` | integer | No | Owner user ID; if omitted, authorized user ID is used |
| `visible_to` | integer | No | Product visibility setting |
| `description` | string | No | Product description |
| `is_linkable` | boolean | No | Whether the product can be added to a deal |
| `billing_frequency` | string | No | Billing frequency (one-time, annually, semi-annually, quarterly, monthly, weekly) |
| `billing_frequency_cycles` | integer | No | Number of billing repeats (rules depend on billing_frequency) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a product field

**Slug:** `PIPEDRIVE_UPDATE_A_PRODUCT_FIELD`

Updates a product field. For more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">updating custom fields' values</a>.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product field |
| `name` | string | No | The name of the field |
| `options` | array | No | When `field_type` is either set or enum, possible options on update must be supplied as an array of objects each containing id and label, for example: [{"id":1, "label":"red"},{"id":2, "label":"blue"},{"id":3, "label":"lilac"}]  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update comment for note

**Slug:** `PIPEDRIVE_UPDATE_COMMENT_FOR_NOTE`

Tool to update a comment on a note in Pipedrive. Use when you need to modify the content of an existing comment attached to a note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note |
| `content` | string | Yes | The updated content of the comment in HTML format. Subject to sanitization on the back-end. |
| `commentId` | string | Yes | The ID of the comment in UUID format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a deal

**Slug:** `PIPEDRIVE_UPDATE_DEAL`

Tool to update an existing deal in Pipedrive. Use when you need to modify properties of a deal such as title, value, status, stage, or associated contacts/organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to update |
| `title` | string | No | The title/name of the deal |
| `value` | number | No | The monetary value of the deal |
| `org_id` | integer | No | The ID of the organization associated with the deal |
| `status` | string ("open" | "won" | "lost") | No | The status of the deal. Must be one of: open, won, lost |
| `currency` | string | No | Three-letter ISO currency code for the deal value |
| `owner_id` | integer | No | The ID of the user who owns the deal |
| `stage_id` | integer | No | The ID of the stage within the pipeline |
| `won_time` | string | No | Date and time when status changed to won |
| `label_ids` | array | No | Array of label IDs assigned to the deal |
| `lost_time` | string | No | Date and time when status changed to lost |
| `person_id` | integer | No | The ID of the person/contact associated with the deal |
| `close_time` | string | No | Date and time of closing the deal (for won/lost status) |
| `visible_to` | integer | No | Visibility setting for the deal |
| `is_archived` | boolean | No | Whether the deal is archived. Note: From July 15, 2025, archived deals cannot be edited except for this property. |
| `lost_reason` | string | No | Reason for losing the deal. Required when status is set to 'lost' |
| `pipeline_id` | integer | No | The ID of the pipeline for the deal. When changed, stage_id auto-updates to first stage. |
| `probability` | number | No | The success probability percentage (0-100) |
| `archive_time` | string | No | Date and time of archiving in UTC in YYYY-MM-DD HH:MM:SS format |
| `expected_close_date` | string | No | Expected closing date in YYYY-MM-DD format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deal discount

**Slug:** `PIPEDRIVE_UPDATE_DEAL_DISCOUNT`

Tool to update a discount for a specific deal. Use when you need to modify the amount, description, or type of an existing discount added to a deal in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `type` | string ("percentage" | "amount") | No | Determines whether the discount is applied as a percentage or a fixed amount. |
| `amount` | number | No | The discount amount. Must be a positive number (excluding 0). |
| `description` | string | No | The name of the discount. |
| `discount_id` | string | Yes | The ID of the discount to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a deal field

**Slug:** `PIPEDRIVE_UPDATE_DEAL_FIELD`

Tool to update a deal field in Pipedrive. Use when you need to modify existing deal field properties such as name, visibility, or options. Note that field_code and field_type cannot be changed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal field to update |
| `name` | string | No | The name of the field |
| `options` | array | No | When field_type is either 'set' or 'enum', possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: [{"id":123,"label":"Existing Item"},{"label":"New Item"}] |
| `add_visible_flag` | boolean | No | Whether the field is available in "add new" modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deal field options

**Slug:** `PIPEDRIVE_UPDATE_DEALFIELDS_OPTIONS`

Tool to update existing options for a deal custom field atomically. Use when you need to modify labels of options in a deal field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to update. At least one option is required. The entire request fails if any option ID does not exist (atomic operation). |
| `field_code` | string | Yes | The unique 40-character code identifying the deal field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Deal Product

**Slug:** `PIPEDRIVE_UPDATE_DEAL_PRODUCT`

Updates a product attached to a deal with new values. Use when you need to modify price, quantity, discount, tax, or other properties of a deal product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `tax` | number | No | The tax percentage or amount to apply |
| `comments` | string | No | Comments or notes about this product attachment |
| `discount` | number | No | The discount value. Use discount_type to specify whether this is a percentage or fixed amount |
| `quantity` | number | No | The quantity of the product in the deal |
| `is_enabled` | boolean | No | Whether the product is enabled in the deal. Disabled products are excluded from deal value calculations |
| `item_price` | number | No | The price at which this product will be updated in the deal |
| `tax_method` | string ("exclusive" | "inclusive" | "none") | No | Tax calculation method: 'exclusive' (tax added to price), 'inclusive' (tax included in price), or 'none' |
| `discount_type` | string ("percentage" | "amount") | No | The type of discount: 'percentage' or 'amount' |
| `billing_frequency` | string ("one-time" | "annually" | "semi-annually" | "quarterly" | "monthly" | "weekly") | No | Billing frequency for recurring products |
| `billing_start_date` | string | No | Billing start date in YYYY-MM-DD format |
| `product_attachment_id` | integer | Yes | The ID of the deal-product attachment (returned when adding a product to a deal) |
| `billing_frequency_cycles` | integer | No | Number of billing cycles for recurring products |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update the product attached to a deal

**Slug:** `PIPEDRIVE_UPDATE_DEAL_PRODUCT_ATTACHMENT`

Updates the details of the product that has been attached to a deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal |
| `tax` | number | No | The tax percentage |
| `comments` | string | No | A textual comment associated with this product-deal attachment |
| `discount` | number | No | The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage.  |
| `duration` | number | No | The duration of the product |
| `quantity` | number | No | How many items of this product will be added to the deal |
| `item_price` | number | No | The price at which this product will be added to the deal |
| `product_id` | integer | No | The ID of the product to use |
| `tax_method` | string ("exclusive" | "inclusive" | "none") | No | The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount.  |
| `enabled_flag` | boolean | No | Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default.  |
| `discount_type` | string ("percentage" | "amount") | No | The type of the discount"s value. |
| `product_variation_id` | integer | No | The ID of the product variation to use. When omitted, no variation will be used.  |
| `product_attachment_id` | integer | Yes | The ID of the deal-product (the ID of the product attached to the deal) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deal (v2 API)

**Slug:** `PIPEDRIVE_UPDATE_DEAL_V2`

Tool to update an existing deal using Pipedrive v2 API. Use when you need to modify deal properties including custom fields, archive status, or deletion status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the deal to update |
| `title` | string | No | The title of the deal |
| `value` | number | No | The value of the deal |
| `org_id` | integer | No | The ID of the organization linked to the deal |
| `status` | string | No | The status of the deal |
| `currency` | string | No | The currency associated with the deal |
| `owner_id` | integer | No | The ID of the user who owns the deal |
| `stage_id` | integer | No | The ID of the deal stage |
| `won_time` | string | No | The date and time of changing the deal status as won. Can only be set if deal status is won. |
| `label_ids` | array | No | The IDs of labels assigned to the deal |
| `lost_time` | string | No | The date and time of changing the deal status as lost. Can only be set if deal status is lost. |
| `person_id` | integer | No | The ID of the person linked to the deal |
| `close_time` | string | No | The date and time of closing the deal. Can only be set if deal status is won or lost. |
| `is_deleted` | boolean | No | Whether the deal is deleted or not |
| `visible_to` | integer | No | The visibility of the deal |
| `is_archived` | boolean | No | Whether the deal is archived or not |
| `lost_reason` | string | No | The reason for losing the deal. Can only be set if deal status is lost. |
| `pipeline_id` | integer | No | The ID of the pipeline associated with the deal |
| `probability` | integer | No | The success probability percentage of the deal (must be an integer) |
| `archive_time` | string | No | The optional date and time of archiving the deal in UTC. Format: YYYY-MM-DD HH:MM:SS. If omitted and is_archived is true, it will be set to the current date and time. |
| `custom_fields` | object | No | An object where each key represents a custom field. All custom fields are referenced as randomly generated 40-character hashes |
| `expected_close_date` | string | No | The expected close date of the deal in YYYY-MM-DD format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update file details

**Slug:** `PIPEDRIVE_UPDATE_FILE`

Updates the properties of a file including its visible name and description. Use when you need to modify file metadata in Pipedrive.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the file to update |
| `name` | string | No | The visible name of the file |
| `description` | string | No | The description of the file |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update file details

**Slug:** `PIPEDRIVE_UPDATE_FILE_DETAILS`

Updates the properties of a file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the file |
| `name` | string | No | The visible name of the file |
| `description` | string | No | The description of the file |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update filter

**Slug:** `PIPEDRIVE_UPDATE_FILTER`

Updates an existing filter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the filter |
| `name` | string | No | The name of the filter |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update existing goal

**Slug:** `PIPEDRIVE_UPDATE_GOAL`

Updates an existing goal. Note: For OAuth, Goals API is available under {companydomain}/api/v1. The platform metadata base_url may be {companydomain}/v1, which yields 404 for PUT /goals/{id}. We therefore construct the URL using the company domain and /api/v1 explicitly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the goal |
| `type` | object | No | The type of the goal and its parameters |
| `title` | string | No | The title of the goal |
| `assignee` | object | No | The assignee of the goal |
| `duration` | object | No | Goal active duration |
| `interval` | string ("weekly" | "monthly" | "quarterly" | "yearly") | No | The interval of the goal |
| `expected_outcome` | object | No | Expected outcome configuration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an installment subscription

**Slug:** `PIPEDRIVE_UPDATE_INSTALLMENT_SUBSCRIPTION`

Updates an installment subscription. Note: Subscriptions endpoints may not be available on the company-specific base URL. To avoid 404s, this action overrides the default request behavior and uses multiple hosts along with a practical fallback to Deal Products when Subscriptions/Installments features are not accessible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription |
| `payments` | array | Yes | Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).  |
| `update_deal_value` | boolean | No | Indicates that the deal value must be set to installment subscription"s total value  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a lead

**Slug:** `PIPEDRIVE_UPDATE_LEAD`

Tool to update a lead in Pipedrive. Use when you need to modify properties of an existing lead such as title, value, status, or linked contacts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the lead to update in UUID format |
| `title` | string | No | The name/title of the lead |
| `value` | object | No | Schema for the value object containing amount and currency |
| `channel` | integer | No | Marketing channel identifier |
| `owner_id` | integer | No | The ID of the user who will own the lead |
| `was_seen` | boolean | No | Flag indicating if lead was seen in Pipedrive UI |
| `label_ids` | array | No | Array of lead label identifiers to assign to the lead |
| `person_id` | integer | No | ID of person to link to the lead. Lead requires person OR organization link. Set to null to unset. |
| `channel_id` | string | No | Optional ID to distinguish the marketing channel |
| `visible_to` | string | No | Visibility setting (values: 1, 3, 5, or 7 depending on plan) |
| `is_archived` | boolean | No | Archive status flag. Set to true to archive the lead, false to unarchive. |
| `organization_id` | integer | No | ID of organization to link to the lead. Lead requires person OR organization link. Set to null to unset. |
| `expected_close_date` | string | No | Expected close date in ISO 8601 format (YYYY-MM-DD) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Lead Label

**Slug:** `PIPEDRIVE_UPDATE_LEAD_LABEL`

Tool to update a lead label in Pipedrive. Use when you need to modify the name or color of an existing lead label. Only properties included in the request will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the lead label to update (UUID format) |
| `name` | string | No | The name of the lead label |
| `color` | string ("blue" | "brown" | "dark-gray" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow") | No | The color of the label. Only a subset of colors can be used: blue, brown, dark-gray, gray, green, orange, pink, purple, red, yellow |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update mail thread details

**Slug:** `PIPEDRIVE_UPDATE_MAIL_THREAD`

Updates the properties of a mail thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the mail thread |
| `deal_id` | integer | No | The ID of the deal this thread is associated with |
| `lead_id` | string | No | The ID of the lead this thread is associated with |
| `read_flag` | integer | No | Whether this thread is marked as read (0 or 1) |
| `shared_flag` | integer | No | Whether this thread is shared with other users (0 or 1) |
| `archived_flag` | integer | No | Whether this thread is archived (0 or 1) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Note

**Slug:** `PIPEDRIVE_UPDATE_NOTE`

Tool to update an existing note in Pipedrive. Use when you need to modify the content or properties of a note attached to deals, persons, organizations, leads, or projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the note to update |
| `org_id` | integer | No | The ID of the organization to attach the note to. |
| `content` | string | No | The content of the note in HTML format. Subject to sanitization on the back-end. |
| `deal_id` | integer | No | The ID of the deal to attach the note to. |
| `lead_id` | string | No | The ID of the lead to attach the note to (UUID format). |
| `user_id` | integer | No | The ID of the user to mark as the note's author. Only administrators can change this. |
| `add_time` | string | No | Creation date and time of the note in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `person_id` | integer | No | The ID of the person to attach the note to. |
| `project_id` | integer | No | The ID of the project to attach the note to. |
| `pinned_to_deal_flag` | integer ("0" | "1") | No | If set, updates the note-to-deal pinning state. Requires deal_id to be set. 0 to unpin, 1 to pin. |
| `pinned_to_lead_flag` | integer ("0" | "1") | No | If set, updates the note-to-lead pinning state. Requires lead_id to be set. 0 to unpin, 1 to pin. |
| `pinned_to_person_flag` | integer ("0" | "1") | No | If set, updates the note-to-person pinning state. Requires person_id to be set. 0 to unpin, 1 to pin. |
| `pinned_to_project_flag` | integer ("0" | "1") | No | If set, updates the note-to-project pinning state. Requires project_id to be set. 0 to unpin, 1 to pin. |
| `pinned_to_organization_flag` | integer ("0" | "1") | No | If set, updates the note-to-organization pinning state. Requires org_id to be set. 0 to unpin, 1 to pin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Organization

**Slug:** `PIPEDRIVE_UPDATE_ORGANIZATION`

Tool to update an existing organization in Pipedrive. Use when you need to modify organization properties such as name, owner, visibility, labels, or address.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the organization to update |
| `name` | string | No | The name of the organization |
| `address` | object | No | Address object with structured fields |
| `owner_id` | integer | No | The ID of the user who owns the organization |
| `label_ids` | array | No | The IDs of labels assigned to the organization |
| `visible_to` | integer | No | The visibility of the organization. 1=owner only, 3=owner's visibility group, 7=entire company |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization field

**Slug:** `PIPEDRIVE_UPDATE_ORGANIZATION_FIELD`

Tool to update an organization field in Pipedrive. Use when you need to modify the name, options, or visibility of an existing organization field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization field to update |
| `name` | string | No | The name of the field |
| `options` | array | No | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array. Existing items require an ID and new items only require a label. Example: [{'id': 123, 'label': 'Existing Item'}, {'label': 'New Item'}] |
| `add_visible_flag` | boolean | No | Whether the field is available in 'add new' modal or not (both in web and mobile app) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization field options

**Slug:** `PIPEDRIVE_UPDATE_ORGANIZATION_FIELD_OPTIONS`

Tool to update existing options for an organization custom field atomically. Use when you need to modify option labels for an organization field. All specified option IDs must exist or the entire request fails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to update. At least one option is required. Each option must have an id (existing option identifier) and label (new display text). The operation is atomic: all updates succeed or none are applied. |
| `field_code` | string | Yes | The unique code identifying the organization field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization relationship

**Slug:** `PIPEDRIVE_UPDATE_ORGANIZATION_RELATIONSHIP`

Tool to update an organization relationship in Pipedrive. Use when you need to modify the type or organizations involved in an existing relationship between two organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the organization relationship to update |
| `type` | string ("parent" | "related") | No | Permitted relationship types for organization relationships. |
| `org_id` | integer | No | The ID of the base organization for the returned calculated values |
| `rel_owner_org_id` | integer | No | The owner of this relationship. If type is 'parent', then the owner is the parent and the linked organization is the daughter. |
| `rel_linked_org_id` | integer | No | The linked organization in this relationship. If type is 'parent', then the linked organization is the daughter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a person

**Slug:** `PIPEDRIVE_UPDATE_PERSON`

Tool to update a person's properties in Pipedrive. Use when you need to modify existing person details such as name, contact information, owner, or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person to update |
| `name` | string | No | The person's full name |
| `email` | array | No | Email addresses as an array of objects with properties: value (required), primary (optional), label (optional) |
| `label` | integer | No | Label ID for categorizing the person (deprecated in v2, use label_ids) |
| `phone` | array | No | Phone numbers as an array of objects with properties: value (required), primary (optional), label (optional) |
| `org_id` | integer | No | The ID of the organization this person belongs to |
| `add_time` | string | No | The creation date and time of the person in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `owner_id` | integer | No | The ID of the user who will be the owner of the person. Requires proper permissions; without can_modify_owner_for_people permission, a 403 error will be thrown. |
| `label_ids` | array | No | Array of label IDs to assign to the person |
| `visible_to` | integer | No | Visibility of the person. Values: 1 (Owner & followers), 3 (Entire company), 5 (Owner only), 7 (Owner's visibility group) |
| `update_time` | string | No | The last update date and time of the person in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `marketing_status` | string ("no_consent" | "unsubscribed" | "subscribed" | "archived") | No | Marketing status. Only available if company uses Campaigns product. Must be one of: no_consent, unsubscribed, subscribed, archived |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update person field

**Slug:** `PIPEDRIVE_UPDATE_PERSON_FIELD`

Tool to update a person field in Pipedrive. Use when you need to modify the name, options, or visibility settings of an existing person field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person field to update |
| `name` | string | No | The field's display name |
| `options` | array | No | For enum/set field types, supply all active items. Each item should include 'id' (integer) for existing options to keep, or 'label' (string) for new options to add or to update existing option labels. |
| `add_visible_flag` | boolean | No | Controls whether the field is visible in 'add new' modal for web and mobile apps. Default is true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update person field options

**Slug:** `PIPEDRIVE_UPDATE_PERSONFIELDS_OPTIONS`

Tool to update existing options for a person custom field atomically. Use when you need to modify labels of options in a person field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to update. At least one option is required. The entire request fails if any option ID does not exist (atomic operation). |
| `field_code` | string | Yes | The unique code identifying the person field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update person (v2)

**Slug:** `PIPEDRIVE_UPDATE_PERSON_V2`

Tool to update a person's properties in Pipedrive using the v2 API. Use when you need to modify existing person details such as name, contact information, owner, or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the person to update |
| `name` | string | No | The person's full name |
| `emails` | array | No | Email addresses as objects with properties: value, primary, label |
| `org_id` | integer | No | The ID of the organization this person belongs to |
| `phones` | array | No | Phone numbers as objects with properties: value, primary, label |
| `add_time` | string | No | The creation date and time of the person in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `owner_id` | integer | No | The ID of the user who will be the owner of the person |
| `label_ids` | array | No | Array of label IDs to assign to the person |
| `last_name` | string | No | The person's last name |
| `first_name` | string | No | The person's first name |
| `visible_to` | integer | No | Visibility of the person. Values: 1 (Owner & followers), 3 (Entire company), 5 (Owner only), 7 (Owner's visibility group) |
| `update_time` | string | No | The last update date and time of the person in UTC. Format: YYYY-MM-DD HH:MM:SS |
| `marketing_status` | string | No | Marketing status. Values: 'no_consent', 'unsubscribed', 'subscribed', 'archived'. Only available if company uses Campaigns product. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a pipeline

**Slug:** `PIPEDRIVE_UPDATE_PIPELINE`

Tool to update a pipeline in Pipedrive. Use when you need to modify pipeline properties like name, deal probability, order, or active status. All fields except id are optional - only include the fields you want to update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the pipeline to update |
| `name` | string | No | The name of the pipeline |
| `active` | integer | No | Whether the pipeline is inactive/hidden (0) or active (1) |
| `order_nr` | integer | No | Defines the order of pipelines. The pipeline with order_nr=0 is the default pipeline |
| `deal_probability` | integer | No | Whether deal probability is disabled (0) or enabled (1) for this pipeline |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update pipeline visibility for a role

**Slug:** `PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_ROLE`

Updates pipeline visibility settings for different roles. For details, see the Pipedrive Visibility groups article.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `visible_pipeline_ids` | object | Yes | Object specifying pipelines to add (visible) and/or remove (hidden) for the role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a product

**Slug:** `PIPEDRIVE_UPDATE_PRODUCT`

Tool to update a product in Pipedrive. Use when you need to modify product details like name, code, price, tax, or other attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to update |
| `tax` | number | No | Tax percentage. Default is 0. |
| `code` | string | No | Product code/identifier |
| `name` | string | No | Product name. Cannot be blank if provided. |
| `unit` | string | No | Unit of measurement for the product |
| `prices` | array | No | Array of price objects. There can only be one price per product per currency. |
| `category` | string | No | Product category |
| `owner_id` | integer | No | ID of the user who will be marked as the owner. When omitted, the authorized user ID will be used. |
| `selectable` | boolean | No | Whether the product is selectable. Changed from integer to boolean as of April 3, 2023. |
| `visible_to` | string | No | Visibility setting for the product. If omitted, default visibility will be used. |
| `active_flag` | boolean | No | Whether the product is active. Changed from integer to boolean as of April 3, 2023. |
| `description` | string | No | Product description |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product field

**Slug:** `PIPEDRIVE_UPDATE_PRODUCT_FIELD`

Tool to update a product field definition in Pipedrive. Use when you need to modify the name or options of an existing product custom field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product field to update |
| `name` | string | No | The name of the product field |
| `options` | array | No | When field_type is either 'set' or 'enum', possible options must be supplied as an array of objects, each containing 'id' and 'label' properties. Example: [{"id": 1, "label": "red"}, {"id": 2, "label": "blue"}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product field options

**Slug:** `PIPEDRIVE_UPDATE_PRODUCTFIELDS_OPTIONS`

Tool to update existing options for a product custom field atomically. Use when you need to modify labels of options in a product field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | Array of option objects to update. At least one option is required. The entire request fails if any option ID does not exist (atomic operation). |
| `field_code` | string | Yes | The unique code identifying the product field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product image

**Slug:** `PIPEDRIVE_UPDATE_PRODUCT_IMAGE`

Tool to update an image for a product in Pipedrive. Use when you need to add or replace a product image.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product to update the image for |
| `data` | object | Yes | Image file to upload. FileType object with 'name' (image filename e.g., 'product.png', 'image.jpg') and 'content' (base64-encoded image data). Supported formats: PNG, JPG, JPEG, GIF. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product variation

**Slug:** `PIPEDRIVE_UPDATE_PRODUCT_VARIATION`

Tool to update a product variation in Pipedrive. Use when you need to modify variation details like name or prices across different currencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the product |
| `name` | string | No | The name of the product variation. Maximum length is 255 characters. |
| `prices` | array | No | Array of price objects for different currencies. When omitted, existing prices remain unchanged. Only one price per variation per currency is supported. |
| `product_variation_id` | integer | Yes | The ID of the product variation to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a project

**Slug:** `PIPEDRIVE_UPDATE_PROJECT`

Updates a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |
| `title` | string | No | The title of the project |
| `labels` | array | No | Array of IDs of labels the project has |
| `org_id` | integer | No | The ID of the associated organization |
| `status` | string | No | The status of the project |
| `board_id` | integer | No | The ID of the board this project is associated with |
| `deal_ids` | array | No | Array of IDs of associated deals |
| `end_date` | string | No | The end date (YYYY-MM-DD) |
| `owner_id` | integer | No | The ID of a project owner |
| `phase_id` | integer | No | The ID of the phase this project is associated with |
| `person_id` | integer | No | The ID of the associated person |
| `start_date` | string | No | The start date (YYYY-MM-DD) |
| `description` | string | No | The description of the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a recurring subscription

**Slug:** `PIPEDRIVE_UPDATE_RECURRING_SUBSCRIPTION`

Updates a recurring subscription. Note: Some company hosts may not expose Subscriptions endpoints. This action will attempt multiple hosts and gracefully fall back to updating the product attached to a deal (v1) when applicable. In the fallback path, the request `id` is treated as the `product_attachment_id` and we locate the corresponding deal by scanning deal products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the subscription |
| `payments` | array | No | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).  |
| `description` | string | No | The description of the recurring subscription |
| `cycle_amount` | integer | No | The amount of each payment |
| `effective_date` | string | Yes | All payments after that date will be affected. Format: YYYY-MM-DD |
| `update_deal_value` | boolean | No | Indicates that the deal value must be set to recurring subscription"s MRR value  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update role details

**Slug:** `PIPEDRIVE_UPDATE_ROLE`

Updates the parent role and/or the name of a specific role. Notes: - Roles endpoints require the `admin` scope. - With OAuth (Bearer) tokens, Pipedrive expects the company domain base URL with `/api/v1` path, e.g. https://{COMPANY}.pipedrive.com/api/v1/roles/{id} - This action normalizes the base_url provided by metadata to ensure `/api/v1` is used with the company domain when available. Falls back to the global API host otherwise.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `name` | string | No | The name of the role |
| `parent_role_id` | integer | No | The ID of the parent role |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update role pipelines

**Slug:** `PIPEDRIVE_UPDATE_ROLE_PIPELINES`

Updates pipeline visibility for a role. Use when you need to control which sales pipelines are accessible to users within a particular role group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the role |
| `visible_pipeline_ids` | object | Yes | Structure for managing pipeline visibility. Specify pipeline IDs to add (make visible) or remove (make hidden) for the role. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update stage details

**Slug:** `PIPEDRIVE_UPDATE_STAGE`

Tool to update stage details in Pipedrive. Use when you need to modify properties of an existing stage such as name, pipeline association, deal probability, or rotten deal settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage to update |
| `name` | string | No | The name of the stage. Cannot be null or empty when provided. |
| `order_nr` | integer | No | Numerical ordering position for the stage within its pipeline. |
| `pipeline_id` | integer | No | The pipeline ID the stage belongs to. Must match an existing pipeline. |
| `rotten_days` | integer | No | Number of days before deals become rotten. Only applies when rotten_flag is enabled. |
| `rotten_flag` | boolean | No | Whether deals in this stage can become rotten (deteriorate). |
| `deal_probability` | integer | No | Success probability percentage for deals in this stage. Must be between 0 and 100. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update stage details

**Slug:** `PIPEDRIVE_UPDATE_STAGE_DETAILS`

Updates the properties of a stage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the stage |
| `name` | string | No | The name of the stage |
| `order_nr` | integer | No | Order number of this stage within its pipeline |
| `pipeline_id` | integer | No | The ID of the pipeline to add the stage to |
| `rotten_days` | integer | No | Days until deals become rotten (applies when rotten_flag is true) |
| `rotten_flag` | boolean | No | Whether deals in this stage can become rotten |
| `deal_probability` | integer | No | Success probability percentage (0–100) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a task

**Slug:** `PIPEDRIVE_UPDATE_TASK`

Updates a task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the task |
| `done` | integer | No | 0 = Not done, 1 = Done |
| `title` | string | No | The title of the task |
| `due_date` | string | No | The task’s due date (YYYY-MM-DD) |
| `project_id` | integer | No | The ID of a project |
| `assignee_id` | integer | No | The assignee user ID |
| `description` | string | No | The description of the task |
| `parent_task_id` | integer | No | The ID of a parent task; cannot be a subtask’s ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update task in project plan

**Slug:** `PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN`

Updates a task phase or group in a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the project |
| `taskId` | integer | Yes | The ID of the task |
| `group_id` | integer | No | The ID of a group on a project board |
| `phase_id` | integer | No | The ID of a phase on a project board |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a team

**Slug:** `PIPEDRIVE_UPDATE_TEAM`

Updates an existing team and returns the updated object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the team |
| `name` | string | No | The team name |
| `users` | array | No | The list of user IDs |
| `manager_id` | integer | No | The team manager ID |
| `active_flag` | integer | No | Flag that indicates whether the team is active (0/1) |
| `description` | string | No | The team description |
| `deleted_flag` | integer | No | Flag that indicates whether the team is deleted (0/1) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update user details

**Slug:** `PIPEDRIVE_UPDATE_USER`

Tool to update user details in Pipedrive. Use when you need to activate or deactivate a user account. Requires admin-level permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user to update |
| `active_flag` | boolean | Yes | Indicates user status. false = Not activated, true = Activated |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update user details

**Slug:** `PIPEDRIVE_UPDATE_USER_DETAILS`

Updates the properties of a user. Currently, only `active_flag` can be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the user |
| `active_flag` | boolean | Yes | Whether the user is active or not. `false` = Not activated, `true` = Activated  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `PIPEDRIVE_WHO_AM_I`

Return the identity (name, email) of the connected Pipedrive account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### New Deal Received Trigger

**Slug:** `PIPEDRIVE_NEW_DEAL_TRIGGER`

**Type:** webhook

Triggered when a new deal is created in Pipedrive

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | No | Currency of the deal |
| `id` | string | No | ID of the deal |
| `stage_id` | string | No | ID of the pipeline stage |
| `status` | string | No | Status of the deal |
| `title` | string | No | Title of the deal |
| `user_id` | string | No | ID of the user who created the deal |
| `value` | string | No | Value of the deal |

### New Note Received Trigger

**Slug:** `PIPEDRIVE_NEW_NOTE_TRIGGER`

**Type:** webhook

Triggered when a new note is created in Pipedrive

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `add_time` | string | No | Time when the note was added |
| `content` | string | No | Content of the note |
| `deal_id` | string | No | ID of the associated deal |
| `id` | string | No | ID of the note |
| `org_id` | string | No | ID of the associated organization |
| `person_id` | string | No | ID of the associated person |
| `user_id` | string | No | ID of the user who created the note |

### New Organization Received Trigger

**Slug:** `PIPEDRIVE_NEW_ORGANIZATION_TRIGGER`

**Type:** webhook

Triggered when a new organization is created in Pipedrive

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address` | string | No | Address of the organization |
| `email` | string | No | Email of the organization |
| `id` | string | No | ID of the organization |
| `name` | string | No | Name of the organization |
| `owner_id` | string | No | ID of the organization owner |
| `phone` | string | No | Phone number of the organization |
| `web` | string | No | Website of the organization |
