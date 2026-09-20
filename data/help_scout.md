# Help Scout

Help Scout provides customer support software with shared inbox, knowledge base, and customer management tools

- **Category:** customer support
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 129
- **Triggers:** 0
- **Slug:** `HELP_SCOUT`
- **Version:** 20260721_00

## Tools

### Create Chat Handle

**Slug:** `HELP_SCOUT_CREATE_CHAT_HANDLE`

Tool to create a chat handle for a Help Scout customer. Use when you need to add a chat platform username (like Skype, AIM, Yahoo) to a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("aim" | "gtalk" | "icq" | "msn" | "other" | "qq" | "skype" | "xmpp" | "yahoo") | Yes | Chat platform type. Must be one of: aim, gtalk, icq, msn, other, qq, skype, xmpp, yahoo |
| `value` | string | Yes | The chat handle/username on the specified platform |
| `customerId` | integer | Yes | The customer ID for whom to create the chat handle |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Chat Thread

**Slug:** `HELP_SCOUT_CREATE_CHAT_THREAD`

Tool to create a new chat thread on a Help Scout conversation. Use when adding a chat message to an existing conversation. Note: Conversations can have a maximum of 100 threads. Non-imported threads automatically reopen closed conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The chat message content. |
| `customer` | object | Yes | Customer details. Either customer.id or customer.email must be provided. |
| `imported` | boolean | No | Set to true when importing historical data. Prevents notifications from being sent. Use for bulk imports or historical data migration. |
| `createdAt` | string | No | Custom creation timestamp for imported threads. ISO 8601 format. Only used when imported=true. |
| `attachments` | array | No | List of file attachments to include with the chat thread. |
| `conversationId` | integer | Yes | The ID of the conversation to create the chat thread on. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Conversation

**Slug:** `HELP_SCOUT_CREATE_CONVERSATION`

Tool to create a new conversation in Help Scout. Use when creating email, phone, or chat conversations with customer threads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tag names to apply to the conversation |
| `type` | string ("email" | "phone" | "chat") | Yes | Conversation type: email, phone, or chat |
| `user` | integer | No | User ID of the user who created the conversation. Only valid for imported conversations |
| `fields` | array | No | Array of custom field objects with id and value |
| `status` | string ("active" | "closed" | "pending" | "spam") | No | Conversation status: active, closed, pending, or spam |
| `subject` | string | Yes | Subject line for the conversation |
| `threads` | array | Yes | Array of thread objects. At least one thread is required to create a conversation |
| `assignTo` | integer | No | User ID to assign the conversation to |
| `closedAt` | string | No | Closed date in ISO 8601 format (e.g., 2024-01-15T12:00:00Z). Only valid when status is closed |
| `customer` | object | Yes | Customer object with email or id. At least one must be provided |
| `imported` | boolean | No | Set to true if this is an imported conversation. When true, no notifications are sent and the conversation is marked as imported |
| `createdAt` | string | No | Created date in ISO 8601 format (e.g., 2024-01-15T10:30:00Z). Only valid for imported conversations |
| `mailboxId` | integer | Yes | ID of the mailbox where conversation will be created |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER`

Tool to create a new customer in Help Scout with contact details and profile information. Use when you need to add a new customer with emails, phones, addresses, or other contact data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `age` | string | No | Age or age range |
| `chats` | array | No | Array of chat handle objects with type and value |
| `emails` | array | No | Array of email objects with type and value. At least one email is recommended for customer identification. |
| `gender` | string | No | Gender: male, female, or unknown |
| `phones` | array | No | Array of phone objects with type and value |
| `address` | object | No | Address object with location details. |
| `jobTitle` | string | No | Job title (max 60 characters) |
| `lastName` | string | No | Customer's last name (1-40 characters) |
| `photoUrl` | string | No | URL to profile photo (max 200 characters) |
| `websites` | array | No | Array of website URLs |
| `firstName` | string | No | Customer's first name (1-40 characters) |
| `background` | string | No | Background information or notes (max 200 characters) |
| `organization` | string | No | Organization name |
| `socialProfiles` | array | No | Array of social profile objects with type and value |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Address

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_ADDRESS`

Tool to create an address for a Help Scout customer. Use when you need to add a physical address to a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | Yes | City of the address. |
| `lines` | array | No | Address lines (street address, building number, etc.). |
| `state` | string | Yes | State or province of the address. |
| `country` | string | Yes | Country code of the address (typically 2-letter ISO code). |
| `customer_id` | integer | Yes | The unique identifier for the customer. |
| `postal_code` | string | Yes | Postal code or ZIP code of the address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create customer email

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_EMAIL`

Tool to create an email for a customer in Help Scout. Use when you need to add a new email address to a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("home" | "other" | "work") | Yes | Email category - home, other, or work |
| `value` | string | Yes | Email address to add for the customer |
| `customer_id` | string | Yes | Identifier of the customer to add the email to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Phone

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_PHONE`

Tool to create a phone number for a Help Scout customer. Use when adding contact phone numbers to customer profiles.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("fax" | "home" | "mobile" | "other" | "pager" | "work") | Yes | Phone location type (fax, home, mobile, other, pager, or work) |
| `value` | string | Yes | The telephone number |
| `customer_id` | integer | Yes | The customer ID to add the phone number to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Property

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_PROPERTY`

Tool to create a customer property definition in Help Scout. Use when you need to add custom fields to track additional customer information like subscription plan, tier level, or custom attributes. Maximum 50 customer property definitions per company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Human-readable display name for the property |
| `slug` | string | Yes | Unique identifier for the property (1-100 characters, alphanumeric with hyphens/underscores only). Cannot be 'email', 'name', 'company', or 'jobTitle' as these are reserved |
| `type` | string ("number" | "text" | "url" | "date" | "dropdown") | Yes | Type of the property. Use 'dropdown' for predefined options, 'number' for numeric values, 'text' for free-form text, 'url' for web links, or 'date' for date values |
| `options` | array | No | List of dropdown options (max 100). Required when type is 'dropdown', ignored for other types. Each option must have a unique label |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Thread

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_THREAD`

Tool to create a new customer thread on a Help Scout conversation. Use when a customer needs to add a message to an existing conversation. The conversation will reopen unless imported mode is enabled. Conversations are limited to 100 threads maximum.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cc` | array | No | List of email addresses to CC on the thread |
| `bcc` | array | No | List of email addresses to BCC on the thread |
| `text` | string | Yes | The message text content for the thread |
| `customer` | object | Yes | Customer object. Must include either id or email field |
| `imported` | boolean | No | Enables historical import mode. When true, no notifications are generated and the conversation remains in its current state |
| `createdAt` | string | No | Custom creation date for imports (ISO 8601 format). Only used when imported is true |
| `attachments` | array | No | Optional list of attachments to include with the thread |
| `conversationId` | integer | Yes | The ID of the conversation to add the thread to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Website

**Slug:** `HELP_SCOUT_CREATE_CUSTOMER_WEBSITE`

Tool to create a website entry for a customer in Help Scout. Use when adding a website URL to an existing customer profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The website URL to add to the customer profile |
| `customer_id` | integer | Yes | The ID of the customer to add the website to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Note on Conversation

**Slug:** `HELP_SCOUT_CREATE_NOTE`

Tool to create a new note thread on a Help Scout conversation. Use when you need to add internal notes to conversations. Notes are visible only to team members, not customers. Maximum 100 threads per conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The note text content |
| `user` | integer | No | User ID adding the thread; defaults to resource owner if omitted |
| `status` | string ("active" | "closed" | "inbox_predefined" | "open" | "pending" | "spam") | No | Conversation status options. |
| `imported` | boolean | No | Enables thread creation for historical purposes; prevents outgoing emails/notifications when true |
| `createdAt` | string | No | Historical creation date in ISO 8601 format; only usable when imported is true |
| `attachments` | array | No | Optional list of attachment objects to include with the note |
| `conversationId` | integer | Yes | The ID of the conversation to add the note to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Organization

**Slug:** `HELP_SCOUT_CREATE_ORGANIZATION`

Tool to create a new organization in Help Scout. Use when you need to create a company profile with associated domains, contact information, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Organization name (required) |
| `note` | string | No | Internal notes about the organization (visible only to team members) |
| `phones` | array | No | Array of phone numbers associated with the organization |
| `domains` | array | No | Array of domain strings associated with the organization |
| `website` | string | No | Organization website URL |
| `location` | string | No | Physical location of the organization |
| `brandColor` | string | No | Brand color in hex format (e.g., #FF5733) |
| `description` | string | No | Description of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Organization Property

**Slug:** `HELP_SCOUT_CREATE_ORGANIZATION_PROPERTY`

Tool to create a new custom property definition for organizations in Help Scout. Use when you need to add custom fields to track organization-specific data like industry, account tier, renewal dates, or other metadata. Maximum 50 property definitions allowed per account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Human-readable display name for the property shown in the UI; maximum 100 characters |
| `slug` | string | Yes | Unique logical identifier for the property within the account; must be 1-120 characters in length. Used as the property key in API calls. |
| `type` | string ("text" | "number" | "url" | "date" | "dropdown") | Yes | Property data type. Valid values: text (plain text), number (numeric values), url (web addresses), date (date values), dropdown (selection list) |
| `options` | array | No | Array of dropdown choices; required when type is 'dropdown', ignored otherwise. Maximum 100 options allowed per property. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Phone Thread

**Slug:** `HELP_SCOUT_CREATE_PHONE_THREAD`

Tool to create a new phone thread on a Help Scout conversation. Use when you need to log a phone call interaction with a customer on an existing conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The phone conversation text describing the call details |
| `customer` | object | Yes | Customer object with ID or email (at least one required) |
| `imported` | boolean | No | Set to true to create a historical thread without sending notifications or reopening the conversation |
| `createdAt` | string | No | Optional creation date in ISO 8601 format. Requires imported to be true |
| `attachments` | array | No | List of file attachments to include with the phone thread |
| `conversationId` | integer | Yes | The ID of the conversation to add the phone thread to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Reply Thread

**Slug:** `HELP_SCOUT_CREATE_REPLY_THREAD`

Tool to create a new reply thread on a Help Scout conversation. Use when sending a reply to a customer in an existing conversation. The reply can be published immediately or saved as a draft.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cc` | array | No | Array of CC email addresses |
| `bcc` | array | No | Array of BCC email addresses |
| `text` | string | Yes | Reply text content (HTML supported) |
| `user` | integer | Yes | Help Scout user ID sending the reply |
| `draft` | boolean | No | When true, creates a draft reply instead of publishing immediately. Defaults to false |
| `status` | string ("active" | "closed" | "pending" | "spam" | "open" | "inbox_predefined") | No | Conversation status options. |
| `assignTo` | integer | No | User ID to assign the conversation to after publishing the reply |
| `customer` | object | Yes | Customer object with id field |
| `imported` | boolean | No | Set to true for historical/imported replies. Prevents outgoing emails and notifications |
| `createdAt` | string | No | Historical creation date in ISO 8601 format (e.g., 2024-01-15T10:30:00Z). Only valid when imported is true |
| `attachments` | array | No | Array of attachment objects to include with the reply |
| `conversation_id` | integer | Yes | ID of the conversation to reply to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create saved reply

**Slug:** `HELP_SCOUT_CREATE_SAVED_REPLY`

Tool to create a saved reply for a mailbox in Help Scout. Use when you need to create reusable message templates for email or chat responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the saved reply. This is used to identify and search for the reply. |
| `text` | string | No | The saved reply's text content for email messages. Supports HTML formatting with tags like <br /> for line breaks. |
| `chatText` | string | No | The saved reply's text content for chat messages. Use plain text with newline characters (\n) for line breaks instead of HTML. |
| `mailboxId` | integer | Yes | The mailbox ID where the saved reply will be created. This identifies which mailbox the saved reply belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Social Profile

**Slug:** `HELP_SCOUT_CREATE_SOCIAL_PROFILE`

Tool to create a social profile for a customer in Help Scout. Use when you need to add social media profile information (LinkedIn, Twitter, Facebook, etc.) to a customer record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("twitter" | "facebook" | "linkedin" | "instagram" | "youtube" | "pinterest" | "github" | "other") | Yes | The type of social profile (e.g., linkedin, twitter, facebook, instagram, youtube, pinterest, github, or other). |
| `value` | string | Yes | The social profile URL or handle. For URLs, provide the full URL (e.g., 'https://linkedin.com/in/testuser123'). For handles, provide the username. |
| `customerId` | integer | Yes | The unique identifier of the customer to add the social profile to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook

**Slug:** `HELP_SCOUT_CREATE_WEBHOOK`

Tool to create a new webhook subscription in Help Scout to receive real-time event notifications. Use when setting up webhook integrations to track conversations, customers, tags, or other events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The callback URL where webhook events will be sent |
| `label` | string | No | Label to identify the webhook |
| `state` | string ("enabled" | "disabled") | No | Webhook state. |
| `events` | array | Yes | Array of event names to subscribe to for webhook notifications |
| `secret` | string | Yes | Secret key for webhook signature verification (max 40 characters) |
| `mailboxIds` | array | No | Array of mailbox IDs to scope webhook to specific mailboxes. If omitted, webhook applies to all mailboxes |
| `notification` | boolean | No | If true, sends only resource URI instead of full payload |
| `payloadVersion` | string ("V2") | No | Webhook payload version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Chat Handle

**Slug:** `HELP_SCOUT_DELETE_CHAT_HANDLE`

Tool to delete a chat handle for a customer. Use when you need to remove a chat handle associated with a customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chat_id` | string | Yes | The unique identifier for the chat handle to be deleted |
| `customer_id` | string | Yes | The unique identifier for the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Conversation

**Slug:** `HELP_SCOUT_DELETE_CONVERSATION`

Tool to move a conversation to the deleted folder. Use when you need to delete a conversation. The conversation can only be restored by a Help Scout administrator.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | string | Yes | The unique identifier of the conversation to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER`

Tool to permanently delete a customer by ID from Help Scout. This hard-deletes the customer including microsurvey responses and conversations (irreversible, GDPR compliant). Returns 403 if user lacks access to all conversations or customer has >100 conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The customer identifier to delete. This will permanently delete the customer including microsurvey responses and conversations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Address

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER_ADDRESS`

Tool to delete a customer's address from Help Scout. Use when you need to remove address information associated with a specific customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The unique identifier for the customer whose address should be removed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Email

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER_EMAIL`

Tool to delete an email for a customer. Use when you need to remove a customer's email address from Help Scout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email_id` | string | Yes | The email identifier to delete |
| `customer_id` | string | Yes | The customer identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Phone

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER_PHONE`

Tool to delete a customer's phone number from Help Scout. Use when you need to remove a phone number associated with a specific customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone_id` | integer | Yes | The unique identifier for the phone number to delete |
| `customer_id` | integer | Yes | The unique identifier for the customer whose phone should be removed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Property

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER_PROPERTY`

Tool to perform a soft delete on a customer property definition. The property is scheduled for permanent deletion, with its slug temporarily reassigned during the grace period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The unique identifier (slug) for the customer property to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Website

**Slug:** `HELP_SCOUT_DELETE_CUSTOMER_WEBSITE`

Tool to delete a website for a customer. Use when you need to remove a website from a customer record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `website_id` | string | Yes | The unique identifier for the website to be deleted |
| `customer_id` | string | Yes | The unique identifier for the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Organization

**Slug:** `HELP_SCOUT_DELETE_ORGANIZATION`

Tool to delete an organization by ID. Use when removing an organization from Help Scout. This operation also removes the reference to this organization from all associated customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | integer | Yes | The organization's unique identifier to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Organization Property Customer Tier

**Slug:** `HELP_SCOUT_DELETE_ORGANIZATION_PROPERTY_CUSTOMER_TIER`

Tool to delete a customer tier property definition from organizations. This performs a soft-delete, and the property will be removed permanently after a grace period. Use when you need to remove a custom organization property definition.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The property definition identifier slug. Use 'customer-tier' to delete the customer tier property. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Saved Reply

**Slug:** `HELP_SCOUT_DELETE_SAVED_REPLY`

Tool to delete a saved reply from a mailbox. Use when you need to permanently remove a saved reply. Returns 204 No Content on successful deletion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailboxId` | string | Yes | The unique identifier for the mailbox containing the saved reply to delete. |
| `savedReplyId` | string | Yes | The unique identifier for the saved reply to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Snooze

**Slug:** `HELP_SCOUT_DELETE_SNOOZE`

Tool to delete a snooze on a conversation. Use when you need to remove a snooze from a conversation, which will place it into its new home folder (Mine, Team or Unassigned, based on assignee).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | string | Yes | The unique identifier of the conversation to remove the snooze from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Social Profile

**Slug:** `HELP_SCOUT_DELETE_SOCIAL_PROFILE`

Tool to delete a social profile for a customer in Help Scout. Use when you need to remove a social media profile link from a customer record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customerId` | integer | Yes | The unique identifier of the customer who owns the social profile. |
| `socialProfileId` | integer | Yes | The unique identifier of the social profile to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Thread Schedule

**Slug:** `HELP_SCOUT_DELETE_THREAD_SCHEDULE`

Tool to unschedule a scheduled thread in a conversation. Use when you need to convert a scheduled thread to a draft thread. The scheduled thread will be converted to a standard draft thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `thread_id` | integer | Yes | The unique identifier of the thread to unschedule |
| `conversation_id` | integer | Yes | The unique identifier of the conversation containing the thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Webhook

**Slug:** `HELP_SCOUT_DELETE_WEBHOOK`

Tool to permanently delete a webhook subscription from Help Scout. Use when you need to remove webhook integrations that are no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | integer | Yes | The unique identifier of the webhook to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Attachment

**Slug:** `HELP_SCOUT_DOWNLOAD_ATTACHMENT`

Tool to download an attachment file from a Help Scout conversation. Use when you need to retrieve the actual file content of an attachment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | integer | Yes | The unique identifier of the attachment file to download |
| `conversation_id` | integer | Yes | The unique identifier of the conversation containing the attachment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment Data

**Slug:** `HELP_SCOUT_GET_ATTACHMENT_DATA`

Tool to retrieve attachment data for a specific attachment. Returns base64-encoded attachment content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `attachment_id` | string | Yes | The unique identifier of the attachment to retrieve |
| `conversation_id` | string | Yes | The unique identifier of the conversation containing the attachment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Busy Times Report

**Slug:** `HELP_SCOUT_GET_BUSY_TIMES_REPORT`

Tool to get busiest time of day report showing conversation volume by day and hour. Use when you need to analyze conversation patterns to identify peak support hours or optimize team scheduling. Requires Plus or Pro plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End date in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter by. Example: '10,20,30' |
| `start` | string | Yes | Start date in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter by. Allowed values: 'email', 'chat', 'phone' |
| `folders` | string | No | Comma-separated list of folder IDs to filter by. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter by. Example: '1,2,3' |
| `previousEnd` | string | No | Previous period end date for comparison in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Previous period start date for comparison in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Chat Report

**Slug:** `HELP_SCOUT_GET_CHAT_REPORT`

Tool to retrieve comprehensive chat report statistics from Help Scout. Use when you need to analyze chat performance metrics including conversation volume, wait times, response times, message counts, and chat durations. Supports period-over-period comparisons and filtering by mailboxes, tags, or folders. Note: Only available to Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required parameter. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Example: '99787' or '5666,99787'. |
| `start` | string | Yes | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required parameter. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Example: '991' or '991,992'. |
| `mailboxes` | string | No | Comma-separated list of mailbox/inbox IDs to filter the report. Example: '123' or '123,567'. |
| `officeHours` | boolean | No | Whether to take office hours into consideration in the report calculations. Defaults to false if not specified. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. If provided, previousStart must also be specified. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. If provided, previousEnd must also be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Customers Helped Report

**Slug:** `HELP_SCOUT_GET_COMPANY_CUSTOMERS_HELPED_REPORT`

Tool to retrieve company customers helped report showing distinct customer count receiving support. Use when you need to analyze how many unique customers were helped during a specific period, compare periods, or track customer engagement trends. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | Conclusion of current time interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs for filtering. Example: '111,222,333' |
| `start` | string | Yes | Beginning of current time interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string ("email" | "chat" | "phone") | No | Types of conversations supported by Help Scout. |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for viewing report data. |
| `folders` | string | No | Comma-separated list of folder IDs for filtering. Example: '10,20,30' |
| `mailboxes` | string | No | Comma-separated list of mailbox/inbox IDs for filtering. Example: '123,456,789' |
| `previousEnd` | string | No | Conclusion of comparison period in ISO 8601 format. If provided, previousStart must also be provided. |
| `previousStart` | string | No | Beginning of comparison period in ISO 8601 format. If provided, previousEnd must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Drilldown Report

**Slug:** `HELP_SCOUT_GET_COMPANY_DRILLDOWN_REPORT`

Tool to retrieve company drilldown report showing underlying conversation data for company statistics. Use when you need to analyze conversations by various dimensions like reply counts, response times, or resolution metrics. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `page` | integer | No | Page number for pagination. Default is 1. |
| `rows` | integer | No | Results per page. Default is 25, maximum is 50. |
| `tags` | string | No | Comma-separated tag IDs to filter results. Example: '100,200' |
| `range` | string ("replies" | "firstReplyResolved" | "resolved" | "responseTime" | "firstResponseTime" | "handleTime") | Yes | Filter dimension for drill-down: replies, firstReplyResolved, resolved, responseTime, firstResponseTime, or handleTime. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string ("email" | "chat" | "phone") | No | Conversation type values. |
| `folders` | string | No | Comma-separated folder IDs to filter results. Example: '10,20' |
| `rangeId` | integer | No | Specific range bucket ID (1-10 depending on range type) |
| `mailboxes` | string | No | Comma-separated inbox IDs to filter results. Example: '123,456' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Report

**Slug:** `HELP_SCOUT_GET_COMPANY_REPORT`

Tool to retrieve overall company performance report from Help Scout. Returns metrics like customers helped, conversations closed, total replies, and per-user statistics for a specified time period. Use when you need to analyze team performance, track support metrics, or generate reports on customer service activity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Optional. |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. Optional. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Optional. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison metrics. Optional. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison metrics. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversation

**Slug:** `HELP_SCOUT_GET_CONVERSATION`

Tool to retrieve a specific conversation by ID from Help Scout. Use when you need detailed information about a conversation including assignee, customer, tags, custom fields, and optionally embedded threads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `embed` | string | No | Allows loading sub-entities. Valid value: 'threads' to include conversation threads in the response |
| `conversation_id` | integer | Yes | Unique identifier for the conversation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversations Drilldown Report

**Slug:** `HELP_SCOUT_GET_CONVERSATIONS_DRILLDOWN`

Tool to get conversations drilldown report from Help Scout. Use when you need detailed conversation data for a specific time period. Available on Plus and Pro plans only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format |
| `page` | integer | No | Page number for pagination (default: 1) |
| `rows` | integer | No | Number of results per page (default: 25, max: 50) |
| `tags` | string | No | Comma-separated list of tag IDs to filter by |
| `start` | string | Yes | Beginning of the reporting interval in ISO 8601 format |
| `types` | string ("email" | "chat" | "phone") | No | Conversation type options. |
| `folders` | string | No | Comma-separated list of folder IDs to filter by |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter by |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversations Field Drilldown Report

**Slug:** `HELP_SCOUT_GET_CONVERSATIONS_FIELD_DRILLDOWN`

Tool to get conversations drilldown by field report from Help Scout. Use when you need to analyze conversations by specific tags, saved replies, workflows, or customers for a time period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format |
| `page` | integer | No | Page number for pagination (default: 1) |
| `rows` | integer | No | Number of results per page (default: 25, maximum: 50) |
| `tags` | string | No | Comma-separated tag IDs to filter results |
| `field` | string ("tagid" | "replyid" | "workflowid" | "customerid") | Yes | Field category to analyze; determines drill-down focus (tagid, replyid, workflowid, or customerid) |
| `start` | string | Yes | Beginning of the reporting interval in ISO 8601 format |
| `types` | string | No | Comma-separated conversation types to filter by. Valid values: email, chat, phone |
| `fieldid` | integer | Yes | Specific identifier for the tag, reply, workflow, or customer to drill down into |
| `folders` | string | No | Comma-separated folder IDs to filter results |
| `mailboxes` | string | No | Comma-separated inbox IDs to filter results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversations Report

**Slug:** `HELP_SCOUT_GET_CONVERSATIONS_REPORT`

Tool to get overall conversations report with statistics on conversation volume, channels, and trends. Use when you need insights on conversation patterns, busiest times, top customers, tags, or custom field analytics. Supports optional previous period comparison for trend analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End date in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter by. Example: '10,20,30' |
| `start` | string | Yes | Start date in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter by. Example: 'email,chat,phone' |
| `folders` | string | No | Comma-separated list of folder IDs to filter by. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter by. Example: '1,2,3' |
| `officeHours` | boolean | No | Filter by office hours. Set to true to include only conversations during office hours, false for outside office hours. |
| `previousEnd` | string | No | Previous period end date for comparison in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Previous period start date for comparison in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer

**Slug:** `HELP_SCOUT_GET_CUSTOMER`

Tool to get a specific customer by ID from Help Scout. Use when you need to retrieve detailed customer information including contact details, profile data, and conversation history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | Unique customer identifier to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer Address

**Slug:** `HELP_SCOUT_GET_CUSTOMER_ADDRESS`

Tool to retrieve a customer's address from Help Scout. Use when you need to fetch the physical address associated with a specific customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The unique identifier for the customer whose address should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Docs Report

**Slug:** `HELP_SCOUT_GET_DOCS_REPORT`

Tool to retrieve overall docs performance report from Help Scout. Returns metrics like unique visitors, browse and search actions, popular searches, top articles, and top categories for a specified time period. Use when you need to analyze documentation usage, track knowledge base effectiveness, or identify popular content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required. |
| `sites` | string | No | Comma-separated list of docs site IDs to filter the report. Optional. |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison metrics. Optional. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison metrics. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Report

**Slug:** `HELP_SCOUT_GET_EMAIL_REPORT`

Tool to retrieve email report with volume, resolution, and response metrics from Help Scout. Returns statistics like email conversations, response times, resolution rates, and time distributions for a specified period. Use when you need detailed email performance analytics or trend comparisons.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Example: '10,20,30' |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Example: '1,2,3' |
| `officeHours` | boolean | No | Incorporates business hours if enabled. Defaults to false. Set to true to include only emails during office hours. |
| `previousEnd` | string | No | Conclusion timeframe for comparison analytics in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Beginning timeframe for comparison analytics in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get First Response Time Report

**Slug:** `HELP_SCOUT_GET_FIRST_RESPONSE_TIME_REPORT`

Tool to retrieve first response time productivity report showing average response duration. Use when you need to analyze team response performance, track response time trends, or compare response times across different periods. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for viewing report data. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `officeHours` | boolean | No | Whether to take office hours into consideration. Set to true to filter by office hours. Office hours must be enabled to use this filter. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Happiness Ratings Report

**Slug:** `HELP_SCOUT_GET_HAPPINESS_RATINGS_REPORT`

Tool to retrieve happiness ratings report with customer satisfaction scores and feedback from Help Scout. Returns paginated list of ratings including conversation details, rating scores (Great/OK/Not Good), customer comments, and associated agent information. Use when you need to analyze customer satisfaction metrics or gather feedback data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `page` | integer | No | Page number for pagination. Use to retrieve subsequent pages of results. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Example: '5666,99787' |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter by. Valid values: email, chat, phone. Example: 'email,chat' |
| `rating` | string ("great" | "ok" | "all" | "not-good") | No | Enumeration for rating filter options. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter the report. Example: '123,567' |
| `sortField` | string ("number" | "modifiedAt" | "rating") | No | Enumeration for sort field options. |
| `sortOrder` | string ("ASC" | "DESC") | No | Enumeration for sort order options. |
| `previousEnd` | string | No | Prior interval end for comparison purposes in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Prior interval start for comparison purposes in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Happiness Report

**Slug:** `HELP_SCOUT_GET_HAPPINESS_REPORT`

Tool to retrieve overall happiness report from Help Scout. Returns customer satisfaction metrics including ratings percentages, counts, and happiness scores for a specified time period. Use when you need to analyze customer satisfaction trends, track happiness scores, or generate reports on customer feedback.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | No | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Optional. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Optional. |
| `start` | string | No | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Optional. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. Optional. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Optional. |
| `previousEnd` | string | No | Conclusion point for prior period comparison in ISO 8601 format. Optional. |
| `previousStart` | string | No | Beginning point for prior period comparison in ISO 8601 format. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inbox

**Slug:** `HELP_SCOUT_GET_INBOX`

Tool to retrieve a specific inbox by ID with details including name, email, and timestamps. Use when you need to get information about a particular mailbox or inbox.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailbox_id` | string | Yes | Unique identifier for the inbox to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get New Conversations Drilldown Report

**Slug:** `HELP_SCOUT_GET_NEW_CONVERSATIONS_DRILLDOWN`

Tool to get new conversations drilldown report showing underlying conversation data for new conversations created within a time period. Use when you need to analyze newly created conversations with detailed information. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `page` | integer | No | Page number for pagination. Default is 1. |
| `rows` | integer | No | Results per page. Default is 25, maximum is 50. |
| `tags` | string | No | Comma-separated tag IDs to filter results. Example: '100,200' |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated conversation types to filter by. Valid values: email, chat, phone |
| `folders` | string | No | Comma-separated folder IDs to filter results. Example: '10,20' |
| `mailboxes` | string | No | Comma-separated inbox IDs to filter results. Example: '123,456' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get New Conversations Report

**Slug:** `HELP_SCOUT_GET_NEW_CONVERSATIONS_REPORT`

Tool to get new conversations report showing conversation counts over time intervals. Use when you need to analyze new conversation trends, compare time periods, or track conversation volume patterns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the time interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated tag IDs to filter results. Example: '10,20,30' |
| `start` | string | Yes | Start of the time interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string ("email" | "chat" | "phone") | No | Types of conversations supported by Help Scout. |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for viewing report data. |
| `folders` | string | No | Comma-separated folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated inbox IDs to filter results. Example: '123,456' |
| `previousEnd` | string | No | Ending of prior comparison period in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Beginning of prior comparison period in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization

**Slug:** `HELP_SCOUT_GET_ORGANIZATION`

Tool to retrieve a specific organization by ID from Help Scout. Use when you need to fetch details about an organization including name, website, domains, and contact information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `includeCounts` | boolean | No | Whether to include customer and conversation counts in the response. |
| `organization_id` | integer | Yes | The unique identifier for the organization to retrieve. |
| `includeProperties` | boolean | No | Whether to include organization property values in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Conversations

**Slug:** `HELP_SCOUT_GET_ORGANIZATION_CONVERSATIONS`

Tool to get conversations associated with an organization in Help Scout. Use when you need to retrieve all conversations linked to a specific organization. Returns paginated results with HAL+JSON format.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1) |
| `organizationId` | integer | Yes | The organization ID for retrieving associated conversations |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Customers

**Slug:** `HELP_SCOUT_GET_ORGANIZATION_CUSTOMERS`

Tool to get customers associated with an organization in Help Scout. Use when you need to retrieve a list of all customers belonging to a specific organization. Returns paginated results with 50 customers per page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-based indexing) |
| `organization_id` | integer | Yes | The organization identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organization Property

**Slug:** `HELP_SCOUT_GET_ORGANIZATION_PROPERTY`

Tool to retrieve a single organization property definition by its slug identifier. Use when you need to get details about a specific custom property configured for organizations, including its type, display name, and available options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | Property definition's unique slug identifier. This is the key used to identify the property in the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Phone Report

**Slug:** `HELP_SCOUT_GET_PHONE_REPORT`

Tool to retrieve phone report statistics from Help Scout. Returns metrics like phone conversations, phone calls created, and customer counts for a specified period. Use when you need to analyze phone support performance or track phone activity trends. Note: Only available to Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required parameter. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Example: '99787' or '5666,99787'. |
| `start` | string | Yes | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required parameter. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Example: '991' or '991,992'. |
| `mailboxes` | string | No | Comma-separated list of mailbox/inbox IDs to filter the report. Example: '123' or '123,567'. |
| `officeHours` | boolean | No | Whether to take office hours into consideration in the report calculations. Defaults to false if not specified. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. If provided, previousStart must also be specified. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. If provided, previousEnd must also be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Productivity Report

**Slug:** `HELP_SCOUT_GET_PRODUCTIVITY_REPORT`

Tool to retrieve productivity overall report showing comprehensive team performance metrics. Use when you need to analyze productivity statistics including response times, resolution times, handle times, and conversation volumes. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `officeHours` | boolean | No | Whether to take office hours into consideration. Set to true to filter by office hours. Office hours must be enabled to use this filter. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Received Messages Report

**Slug:** `HELP_SCOUT_GET_RECEIVED_MESSAGES_REPORT`

Tool to retrieve received messages statistics report from Help Scout. Returns count of customer-originated messages over time, broken down by day, week, or month. Use when you need to analyze incoming message volume trends or compare message counts across different time periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Optional. |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. Optional. |
| `viewBy` | string ("day" | "week" | "month") | No | Enumeration for data resolution view types. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Optional. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison metrics. Optional. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison metrics. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Replies Sent Report

**Slug:** `HELP_SCOUT_GET_REPLIES_SENT_REPORT`

Tool to get replies sent productivity report showing reply volume metrics over time. Use when you need to analyze reply activity trends, compare periods, or track team productivity. Requires Plus or Pro plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End date in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter by. Example: '5666,99787' |
| `start` | string | Yes | Start date in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter by. Allowed values: 'email', 'chat', 'phone' |
| `viewBy` | string | No | Data granularity for the report. Allowed values: 'day' (for periods ≤60 days), 'week' (for periods ≤1 year), 'month' (for periods ≥61 days) |
| `folders` | string | No | Comma-separated list of folder IDs to filter by. Example: '991,992' |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter by. Example: '123,567' |
| `officeHours` | boolean | No | Apply office hours consideration. Set to true to include only replies during office hours, false for outside office hours. |
| `previousEnd` | string | No | Previous period end date for comparison in ISO 8601 format. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Previous period start date for comparison in ISO 8601 format. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Resolution Time Report

**Slug:** `HELP_SCOUT_GET_RESOLUTION_TIME_REPORT`

Tool to retrieve resolution time productivity report showing average time to resolve conversations. Use when you need to analyze team resolution performance, track resolution time trends, or compare resolution times across different periods. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z' |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z' |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for viewing report data. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `officeHours` | boolean | No | Whether to take office hours into consideration. Set to true to filter by office hours. Office hours must be enabled to use this filter. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Resolved Report

**Slug:** `HELP_SCOUT_GET_RESOLVED_REPORT`

Tool to retrieve productivity resolved report from Help Scout. Returns the number of resolved conversations over time for a specified period. Use when you need to analyze team productivity, track resolution rates, or generate reports on conversation closures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Optional. |
| `start` | string | Yes | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. Optional. |
| `viewBy` | string | No | Data granularity for the report. Valid values: 'day' (for periods up to 60 days), 'week' (for periods up to 1 year), 'month' (for periods of 61 days or more). Optional. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Optional. |
| `officeHours` | boolean | No | Whether to apply office hours calculations. Defaults to false if not provided. Optional. |
| `previousEnd` | string | No | Conclusion point for prior period comparison in ISO 8601 format. Optional. |
| `previousStart` | string | No | Beginning point for prior period comparison in ISO 8601 format. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Resource Owner

**Slug:** `HELP_SCOUT_GET_RESOURCE_OWNER`

Tool to get the authenticated user's profile information. Use when you need to retrieve details about the current user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Routing Configuration

**Slug:** `HELP_SCOUT_GET_ROUTING_CONFIG`

Tool to retrieve routing configuration for a mailbox inbox. Use when you need to check assignment settings, rotation status, or user eligibility for receiving conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailbox_id` | string | Yes | Unique identifier for the mailbox to retrieve routing configuration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Saved Reply

**Slug:** `HELP_SCOUT_GET_SAVED_REPLY`

Tool to retrieve a specific saved reply from a mailbox. Use when you need to get details about a saved reply template including its text content for email and chat.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailbox_id` | string | Yes | The mailbox identifier containing the saved reply. |
| `saved_reply_id` | string | Yes | The unique identifier for the saved reply to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tag

**Slug:** `HELP_SCOUT_GET_TAG`

Tool to retrieve a specific tag by ID from Help Scout. Use when you need to get details about a tag including its name, slug, and color.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | integer | Yes | The unique identifier for the tag to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `HELP_SCOUT_GET_USER`

Tool to retrieve a specific user by ID from Help Scout. Use when you need detailed information about a user including their role, contact details, and profile data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | Unique identifier for the user to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Chat Report

**Slug:** `HELP_SCOUT_GET_USER_CHAT_REPORT`

Tool to retrieve user/team chat report statistics from Help Scout. Returns metrics like new conversations, messages per chat, response time, wait time, and duration for a specified period. Use when you need to analyze chat support performance or track chat activity trends for a specific user or team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required parameter. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Example: '99787' or '5666,99787'. |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required parameter. |
| `mailboxes` | string | No | Comma-separated list of mailbox/inbox IDs to filter the report. Example: '123' or '123,567'. |
| `officeHours` | boolean | No | Whether to take office hours into consideration in the report calculations. Defaults to false if not specified. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. If provided, previousStart must also be specified. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. If provided, previousEnd must also be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Conversation History

**Slug:** `HELP_SCOUT_GET_USER_CONVERSATION_HISTORY`

Tool to retrieve detailed conversation history for a specific user over a designated timeframe. Use when you need to analyze a user's conversation performance, track response times, or review conversation details. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z'. Required. |
| `page` | integer | No | Page number for pagination. Default is 1. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `user` | integer | Yes | Identifier for the user generating the report. Required. |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `status` | string ("active" | "pending" | "closed") | No | Status filter options for conversation history. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `sortField` | string ("number" | "repliesSent" | "responseTime" | "resolveTime") | No | Sort field options for conversation history. |
| `sortOrder` | string ("ASC" | "DESC") | No | Sort order options. |
| `officeHours` | boolean | No | Apply office hours calculation. Set to true to include only conversations during office hours, false for outside office hours. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Customers Helped Report

**Slug:** `HELP_SCOUT_GET_USER_CUSTOMERS_HELPED_REPORT`

Tool to retrieve user customers helped report showing distinct customer count receiving support from a specific user. Use when you need to analyze how many unique customers were helped by an individual team member during a specific period, compare periods, or track user performance. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | Conclusion of the time interval in ISO 8601 format. Example: '2026-03-09T23:59:59Z'. Required. |
| `tags` | string | No | Comma-separated list of tag IDs for filtering. Example: '111,222,333' |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Beginning of the time interval in ISO 8601 format. Example: '2026-02-07T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for viewing report data. |
| `folders` | string | No | Comma-separated list of folder IDs for filtering. Example: '10,20,30' |
| `mailboxes` | string | No | Comma-separated list of mailbox/inbox IDs for filtering. Example: '123,456,789' |
| `previousEnd` | string | No | Conclusion of comparison period in ISO 8601 format. If provided, previousStart must also be provided. |
| `previousStart` | string | No | Beginning of comparison period in ISO 8601 format. If provided, previousEnd must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Drilldown Report

**Slug:** `HELP_SCOUT_GET_USER_DRILLDOWN`

Tool to get user drilldown report from Help Scout. Use when you need detailed conversation data for a specific user within a time period. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format |
| `page` | integer | No | Page number for pagination (default: 1) |
| `rows` | integer | No | Number of results per page (default: 25, max: 50) |
| `tags` | string | No | Comma-separated list of tag IDs to filter results |
| `user` | integer | Yes | User ID for whom the report is generated |
| `start` | string | Yes | Start of the interval in ISO 8601 format |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone |
| `folders` | string | No | Comma-separated list of folder IDs to filter results |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Happiness Report

**Slug:** `HELP_SCOUT_GET_USER_HAPPINESS_REPORT`

Tool to retrieve user happiness report from Help Scout. Returns customer satisfaction metrics for a specific user including ratings percentages, counts, and happiness scores for a specified time period. Use when you need to analyze individual user performance on customer satisfaction.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z'. Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Ratings Report

**Slug:** `HELP_SCOUT_GET_USER_RATINGS_REPORT`

Tool to retrieve user happiness ratings drilldown report showing customer satisfaction ratings for a specific user. Use when you need to analyze customer feedback, track happiness scores, or review rating comments for an individual support team member. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z'. Required. |
| `page` | integer | No | Page number for pagination. Default is 1. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `rating` | string ("great" | "ok" | "all" | "not-good") | No | Rating filter options. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `sortField` | string ("number" | "repliesSent" | "resolveTime" | "responseTime") | No | Sort field options for user ratings report. |
| `sortOrder` | string ("ASC" | "DESC") | No | Sort order options. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Replies Report

**Slug:** `HELP_SCOUT_GET_USER_REPLIES_REPORT`

Tool to retrieve user replies report showing the number of replies sent by a specific user over time. Use when you need to analyze reply volume, track user productivity, or compare reply patterns across different time periods. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z'. Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30'. Optional. |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat'. Optional. |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution options for user replies report. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200'. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789'. Optional. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z'. Optional. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z'. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Report

**Slug:** `HELP_SCOUT_GET_USER_REPORT`

Tool to retrieve overall user/team performance report from Help Scout. Returns detailed metrics including conversations resolved, response time, happiness score, and customer interactions for a specific user. Use when analyzing individual team member performance or generating user-specific reports. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the reporting interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter the report. Optional. |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the reporting interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required. |
| `types` | string | No | Comma-separated list of conversation types to filter the report. Valid values: email, chat, phone. Optional. |
| `folders` | string | No | Comma-separated list of folder IDs to filter the report. Optional. |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter the report. Optional. |
| `officeHours` | boolean | No | Whether to consider office hours in the report. Defaults to false if not provided. Optional. |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison metrics. Optional. |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison metrics. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Resolutions Report

**Slug:** `HELP_SCOUT_GET_USER_RESOLUTIONS_REPORT`

Tool to retrieve user resolutions report showing the number of conversations resolved by a specific user over time. Use when you need to analyze resolution trends, track individual performance, or compare resolution rates across different time periods. Available only for Plus and Pro plans.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format. Example: '2024-01-31T23:59:59Z'. Required. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Example: '10,20,30' |
| `user` | integer | Yes | User ID for whom the report is generated. Required. |
| `start` | string | Yes | Start of the interval in ISO 8601 format. Example: '2024-01-01T00:00:00Z'. Required. |
| `types` | string | No | Comma-separated list of conversation types to filter results. Valid values: email, chat, phone. Example: 'email,chat' |
| `viewBy` | string ("day" | "week" | "month") | No | Granularity options for viewing resolution data. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Example: '100,200' |
| `mailboxes` | string | No | Comma-separated list of inbox IDs to filter results. Example: '123,456,789' |
| `previousEnd` | string | No | End of the previous interval in ISO 8601 format for comparison. Example: '2023-12-31T23:59:59Z' |
| `previousStart` | string | No | Start of the previous interval in ISO 8601 format for comparison. Example: '2023-12-01T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Status

**Slug:** `HELP_SCOUT_GET_USER_STATUS`

Tool to get the status of a user in Help Scout. Use when you need to check a user's email availability (active/away) or chat status across mailboxes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The unique identifier of the user whose status to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Volume by Channel Report

**Slug:** `HELP_SCOUT_GET_VOLUME_BY_CHANNEL_REPORT`

Tool to retrieve conversation volume by channel (email, chat, phone) over a specified time period. Use when you need to analyze conversation volume trends across different communication channels. Requires Help Scout Plus or Pro plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the interval in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Required parameter for the report date range. |
| `tags` | string | No | Comma-separated list of tag IDs to filter results. Only includes conversations with specified tags. |
| `start` | string | Yes | Start of the interval in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Required parameter for the report date range. |
| `types` | string | No | Comma-separated list of conversation types to include. Valid values: email, chat, phone. If not specified, all types are included. |
| `viewBy` | string ("day" | "week" | "month") | No | Data resolution period options. |
| `folders` | string | No | Comma-separated list of folder IDs to filter results. Only includes conversations from specified folders. |
| `mailboxes` | string | No | Comma-separated list of mailbox IDs to filter results. Only includes conversations from specified mailboxes. |
| `previousEnd` | string | No | Ending date for comparison period in ISO 8601 format. When provided with previousStart, enables comparison with a previous time period. |
| `previousStart` | string | No | Beginning date for comparison period in ISO 8601 format. When provided with previousEnd, enables comparison with a previous time period. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook

**Slug:** `HELP_SCOUT_GET_WEBHOOK`

Tool to retrieve a specific webhook by ID from Help Scout. Use when you need to view webhook configuration details including URL, events, state, and other settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | integer | Yes | The unique identifier of the webhook to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Chat Handles

**Slug:** `HELP_SCOUT_LIST_CHAT_HANDLES`

Tool to list all chat handles for a specific customer in Help Scout. Use when you need to retrieve chat service accounts (Skype, AIM, ICQ, etc.) associated with a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | Unique identifier for the customer whose chat handles to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Conversations

**Slug:** `HELP_SCOUT_LIST_CONVERSATIONS`

Tool to list and filter conversations from Help Scout. Use when you need to retrieve multiple conversations, search by status/tags/assignee, or access conversations modified since a specific date. Returns paginated results with conversation details including subject, status, customer info, and tags. Use the thread resource link inside each Conversation entity to load conversation threads separately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | Filter by tag name. Returns conversations tagged with the specified tag. |
| `page` | integer | No | Page number for pagination. Use to retrieve subsequent pages of results. |
| `query` | string | No | Search query using Mailbox API query syntax. Allows complex filtering with operators like AND, OR, NOT. |
| `number` | integer | No | Filter by conversation number. Returns the conversation with this specific number. |
| `status` | string ("active" | "all" | "closed" | "open" | "pending" | "spam") | No | Conversation status values. |
| `mailbox` | integer | No | Filter by mailbox ID. Returns conversations from the specified mailbox only. |
| `sortField` | string ("createdAt" | "customerEmail" | "customerName" | "mailboxid" | "modifiedAt" | "number" | "score" | "status" | "subject") | No | Sort field options for conversations. |
| `sortOrder` | string ("asc" | "desc") | No | Sort order options. |
| `assigned_to` | integer | No | Filter by assigned user ID. Returns conversations assigned to the specified user. |
| `modifiedSince` | string | No | Filter by modification date. Returns conversations modified since this ISO 8601 timestamp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Emails

**Slug:** `HELP_SCOUT_LIST_CUSTOMER_EMAILS`

Tool to list all emails for a specific customer in Help Scout. Use when you need to retrieve all email addresses associated with a customer profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | Unique identifier for the customer whose emails to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Phones

**Slug:** `HELP_SCOUT_LIST_CUSTOMER_PHONES`

Tool to list all phone numbers for a specific Help Scout customer. Use when you need to retrieve the phone contact information for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The unique identifier of the customer whose phones to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Properties

**Slug:** `HELP_SCOUT_LIST_CUSTOMER_PROPERTIES`

Tool to list all customer property definitions. Use when you need to view all custom properties configured for customers in the Help Scout account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customers

**Slug:** `HELP_SCOUT_LIST_CUSTOMERS`

Tool to list customers in Help Scout with optional filters for name, email, or modification date. Use when you need to retrieve a list of customers, search for specific customers, or get customers modified since a certain date. Returns paginated results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1) |
| `email` | string | No | Filter customers by email address |
| `lastName` | string | No | Filter customers by last name |
| `firstName` | string | No | Filter customers by first name |
| `modifiedSince` | string | No | Filter customers modified since this date in ISO 8601 format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Websites

**Slug:** `HELP_SCOUT_LIST_CUSTOMER_WEBSITES`

Tool to list all websites associated with a specific customer in Help Scout. Use when you need to retrieve all website URLs linked to a customer profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | Unique customer identifier to retrieve websites for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Inbox Custom Fields

**Slug:** `HELP_SCOUT_LIST_INBOX_CUSTOM_FIELDS`

Tool to list all custom fields configured for a specific inbox. Use when you need to retrieve custom field definitions including field types, options, and display order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailbox_id` | string | Yes | Unique identifier for the mailbox to retrieve custom fields from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Inboxes

**Slug:** `HELP_SCOUT_LIST_INBOXES`

Tool to list all mailboxes (inboxes) the user has access to with pagination support. Use when you need to retrieve a list of all available inboxes or mailboxes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1 if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Inbox Folders

**Slug:** `HELP_SCOUT_LIST_INBOX_FOLDERS`

Tool to retrieve all folders within a specific inbox/mailbox. Use when you need to list folders for organizing conversations or access folder details like ticket counts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve. Default: 1. |
| `mailbox_id` | string | Yes | Unique identifier for the mailbox to retrieve folders from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organizations

**Slug:** `HELP_SCOUT_LIST_ORGANIZATIONS`

Tool to list all organizations (companies) in Help Scout with optional filtering and sorting. Use when you need to retrieve a list of organizations, search for specific organizations by name, or get paginated organization results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter organizations by name. Performs a partial match search. |
| `page` | integer | No | Page number for pagination (starts at 1). Default is 1. |
| `sortField` | string ("name" | "createdAt" | "modifiedAt") | No | Sort field options for organizations. |
| `sortOrder` | string ("asc" | "desc") | No | Sort order options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organizations Properties

**Slug:** `HELP_SCOUT_LIST_ORGANIZATIONS_PROPERTIES`

Tool to list all organization property definitions. Use when you need to view all custom properties configured for organizations in the Help Scout account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Saved Replies

**Slug:** `HELP_SCOUT_LIST_SAVED_REPLIES`

Tool to list saved replies for a mailbox. Use when you need to retrieve all saved reply templates available in a specific mailbox.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mailbox_id` | string | Yes | The mailbox identifier to list saved replies from. |
| `includeChatReplies` | boolean | No | Should all saved replies (also chat-only) be included in response? Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Social Profiles

**Slug:** `HELP_SCOUT_LIST_SOCIAL_PROFILES`

Tool to list all social profiles for a customer in Help Scout. Use when you need to retrieve a customer's social media profile information (LinkedIn, Twitter, Facebook, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customerId` | integer | Yes | The unique identifier of the customer whose social profiles to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tags

**Slug:** `HELP_SCOUT_LIST_TAGS`

Tool to list all tags in Help Scout with pagination support. Use when you need to retrieve all available tags in alphabetical order. Returns tag details including name, color, and ticket count.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1 if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Teams

**Slug:** `HELP_SCOUT_LIST_TEAMS`

Tool to list all teams in Help Scout with pagination support. Use when you need to retrieve a list of all available teams.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1 if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Threads

**Slug:** `HELP_SCOUT_LIST_THREADS`

Tool to list all threads for a specific Help Scout conversation. Use when you need to retrieve the complete message history and interactions within a conversation. Threads are sorted by createdAt from newest to oldest by default.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve. Default: 1. |
| `conversation_id` | integer | Yes | The unique conversation identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `HELP_SCOUT_LIST_USERS`

Tool to list all users in the Help Scout account with optional filters for mailbox or email. Use when you need to retrieve a list of team members, check user roles, or find users by email or mailbox assignment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1) |
| `email` | string | No | Filter users by email address to find a specific user |
| `mailbox` | integer | No | Filter users by mailbox ID to get only users assigned to that mailbox |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users Status

**Slug:** `HELP_SCOUT_LIST_USERS_STATUS`

Tool to list the status of all users including email and chat availability. Use when you need to check which users are currently active, away, or available for different channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1 if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhooks

**Slug:** `HELP_SCOUT_LIST_WEBHOOKS`

Tool to retrieve all webhooks configured in Help Scout. Use when you need to view all webhook subscriptions and their configurations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Workflows

**Slug:** `HELP_SCOUT_LIST_WORKFLOWS`

Tool to list all workflows (automation rules) in the account with optional filters for mailbox, type, and status. Use when you need to retrieve workflows to view automation rules configured in Help Scout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts at 1) |
| `type` | string ("automatic" | "manual") | No | Workflow type enumeration. |
| `status` | string ("active" | "inactive" | "invalid") | No | Workflow status enumeration. |
| `mailbox` | integer | No | Filter workflows by mailbox ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Overwrite Customer

**Slug:** `HELP_SCOUT_OVERWRITE_CUSTOMER`

Tool to overwrite an existing customer in Help Scout, replacing all customer data. Use when you need to completely replace a customer's profile information. Fields not provided in the request will be set to null, effectively removing them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `age` | string | No | Age or age range descriptor. If not provided, will be set to null. |
| `phone` | string | No | Phone number for the customer. Used when creating new customer. |
| `gender` | string ("male" | "female" | "unknown") | No | Gender enumeration for customer profiles. |
| `jobTitle` | string | No | Job title (max 60 characters). If not provided, will be set to null. |
| `lastName` | string | No | Customer's last name (1-40 characters). If not provided, will be set to null. |
| `location` | string | No | Customer's location (max 60 characters). If not provided, will be set to null. |
| `photoUrl` | string | No | URL to profile photo (max 200 characters). If not provided, will be set to null. |
| `firstName` | string | No | Customer's first name (1-40 characters). If not provided, will be set to null. |
| `photoType` | string ("unknown" | "gravatar" | "twitter" | "facebook" | "googleprofile" | "googleplus" | "linkedin" | "instagram") | No | Photo type enumeration for customer profile photos. |
| `background` | string | No | Background information or notes from the user interface (max 200 characters). If not provided, will be set to null. |
| `customerId` | integer | Yes | Unique customer identifier to overwrite |
| `organization` | string | No | Organization name (max 60 characters). DEPRECATED: use organizationId instead. If not provided, will be set to null. |
| `organizationId` | integer | No | Organization ID reference. If not provided, will be set to null. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Publish Thread Schedule

**Slug:** `HELP_SCOUT_PUBLISH_THREAD_SCHEDULE`

Tool to publish a scheduled thread immediately in a Help Scout conversation. Use when you need to send a scheduled message sooner than originally planned. The draft thread is turned into a reply/forward thread and the message is sent to the customer immediately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `thread_id` | integer | Yes | The unique identifier of the scheduled thread to publish immediately |
| `conversation_id` | integer | Yes | The unique identifier of the conversation containing the scheduled thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Organization Property Value

**Slug:** `HELP_SCOUT_REMOVE_ORGANIZATION_PROPERTY_VALUE`

Tool to remove an organization property value. Use when clearing the value of a custom property for a specific organization. The property definition itself is not deleted, only its value for this organization is cleared.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | Property definition's unique slug identifier. This is the key used to identify the property in the API. |
| `organization_id` | integer | Yes | The organization's unique identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Manual Workflow

**Slug:** `HELP_SCOUT_RUN_MANUAL_WORKFLOW`

Tool to run a manual workflow on one or more conversations in Help Scout. Use when you need to execute workflow actions on specific conversations. Only manual workflows can be executed via this action, and all conversation IDs must be from the same inbox as the workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workflowId` | integer | Yes | The identifier of the manual workflow to execute |
| `conversationIds` | array | Yes | An array of conversation IDs to apply the workflow to. The workflow actions will be applied to each conversation. Maximum of 50 IDs per request. All conversation IDs must belong to existing conversations and be from the same inbox as the workflow. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Organization Property Value

**Slug:** `HELP_SCOUT_SET_ORGANIZATION_PROPERTY_VALUE`

Tool to set or update a property value for a specific organization. Use when you need to assign a value to a custom property field on an organization, such as setting their tier, industry, or other metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | Property definition's unique slug identifier. This is the key used to identify the property in the API. |
| `value` | string | Yes | The property value formatted as a string. Format requirements vary by property type: text/URL (plain string), number ('100'), date ('2024-01-15' in ISO 8601 format), dropdown (option label). If a property already has a value, it will be replaced with this new value. |
| `organization_id` | integer | Yes | Unique identifier of the organization to set the property value for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set User Status

**Slug:** `HELP_SCOUT_SET_USER_STATUS`

Tool to set the status of a user in Help Scout. Use when you need to change a user's availability to 'active' or 'away'. Administrators and Account Owners can edit other users' status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("active" | "away") | Yes | The status to set for the user: 'active' (available) or 'away' (unavailable) |
| `user_id` | integer | Yes | The unique identifier of the user whose status to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Chat Handle

**Slug:** `HELP_SCOUT_UPDATE_CHAT_HANDLE`

Tool to update a chat handle for a Help Scout customer. Use when you need to modify an existing chat platform username (like Skype, AIM, Yahoo) associated with a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("aim" | "gtalk" | "icq" | "msn" | "other" | "qq" | "skype" | "xmpp" | "yahoo") | Yes | Chat platform type. Must be one of: aim, gtalk, icq, msn, other, qq, skype, xmpp, yahoo |
| `value` | string | Yes | The updated chat handle/username on the specified platform |
| `customerId` | integer | Yes | The customer ID whose chat handle to update |
| `chatHandleId` | integer | Yes | The chat handle ID to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation

**Slug:** `HELP_SCOUT_UPDATE_CONVERSATION`

Tool to update specific properties of a Help Scout conversation using JSON Patch format. Use when you need to modify conversation subject, status, assignment, mailbox, primary customer, or draft status. Each request updates one field at a time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `op` | string ("add" | "move" | "remove" | "replace") | Yes | JSON Patch operation: add, move, remove, or replace |
| `path` | string | Yes | Field path to update. Valid paths: /subject (string), /primaryCustomer.id (number), /draft (boolean), /mailboxId (number, use 'move' op), /status (string: active/closed/pending/spam), /assignTo (number, supports 'remove' to unassign) |
| `value` | string | No | New value for the field. Required for add/replace/move operations, omit for remove operation. Type depends on path: string for subject/status, number for primaryCustomer.id/mailboxId/assignTo, boolean for draft |
| `conversation_id` | integer | Yes | The unique identifier of the conversation to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation Tags

**Slug:** `HELP_SCOUT_UPDATE_CONVERSATION_TAGS`

Tool to update tags on a conversation in Help Scout. Use when you need to add, remove, or replace tags on a conversation. This operation replaces the entire tag set - any existing tags not included will be removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | Complete list of tag names to apply to the conversation. This replaces all existing tags - tags not in this list will be removed. Non-existent tags are created automatically. To remove all tags, pass an empty array |
| `conversation_id` | integer | Yes | Unique identifier for the conversation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation Thread Schedule

**Slug:** `HELP_SCOUT_UPDATE_CONVERSATION_THREAD_SCHEDULE`

Tool to update an existing schedule for a conversation thread in Help Scout. Use when you need to change when a reply or forward thread should be sent. Subsequent requests override previous schedules for the same thread.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `thread_id` | integer | Yes | Identifier for the thread to schedule |
| `scheduledFor` | string | Yes | ISO 8601 date string in the future when the thread should be sent. Must not be after year 2100. |
| `sendAsCreator` | boolean | No | Whether the reply should be sent as the draft's original creator. Defaults to false. |
| `conversation_id` | integer | Yes | Identifier for the conversation containing the thread |
| `unscheduleOnCustomerReply` | boolean | Yes | Determines if a new customer reply should unschedule the thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER`

Tool to update an existing customer in Help Scout using JSON Patch operations. Use when you need to modify specific customer fields without replacing the entire record. Supports updating profile fields, address, and collections (emails, phones, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operations` | array | Yes | Array of JSON Patch operations to apply. Each operation must specify op (add/replace/remove), path (field to modify), and value (for add/replace ops). Supports fields: firstName, lastName, age, gender, jobTitle, location, organization, background, photoUrl, photoType, address fields, and collections (emails, phones, chats, social-profiles, websites). |
| `customer_id` | integer | Yes | Unique customer identifier to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Address

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_ADDRESS`

Tool to update an existing address for a Help Scout customer. Use when you need to modify a customer's physical address.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | Yes | City of the address. |
| `lines` | array | No | Address lines (street address, building number, etc.). |
| `state` | string | Yes | State or province of the address. |
| `country` | string | Yes | Country code of the address (typically 2-letter ISO code). |
| `customer_id` | integer | Yes | The unique identifier for the customer. |
| `postal_code` | string | Yes | Postal code or ZIP code of the address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer email

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_EMAIL`

Tool to update an existing email for a customer in Help Scout. Use when you need to modify a customer's email address or change its type (home/work/other).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("home" | "other" | "work") | Yes | Email category - home, other, or work |
| `value` | string | Yes | Updated email address for the customer |
| `entry_id` | string | Yes | Identifier of the email entry to update |
| `customer_id` | string | Yes | Identifier of the customer whose email to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Phone

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_PHONE`

Tool to update an existing phone number for a Help Scout customer. Use when modifying phone number details or type for a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("fax" | "home" | "mobile" | "other" | "pager" | "work") | Yes | Phone location type. Must be one of: fax, home, mobile, other, pager, work |
| `value` | string | Yes | The updated telephone number |
| `phone_id` | integer | Yes | The unique identifier for the phone number to update |
| `customer_id` | integer | Yes | The unique identifier for the customer whose phone should be updated |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Properties

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_PROPERTIES`

Tool to update custom property values for a Help Scout customer using JSON Patch operations. Use when you need to modify existing property values like subscription plan, tier level, or custom attributes. Properties must be created first before updating values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customerId` | integer | Yes | The unique identifier of the customer whose properties to update |
| `operations` | array | Yes | Array of JSON Patch operations to apply to the customer's properties. Each operation modifies a single property. Properties must be created first via the Create Property endpoint or web UI |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Social Profile

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_SOCIAL_PROFILE`

Tool to update an existing social profile for a customer in Help Scout. Use when you need to modify a customer's social media profile URL or handle, or change its type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("aboutme" | "facebook" | "flickr" | "forsquare" | "google" | "googleplus" | "linkedin" | "other" | "quora" | "tungleme" | "twitter" | "youtube") | Yes | The type of social profile (e.g., twitter, facebook, linkedin, etc.). |
| `value` | string | Yes | The social profile URL or handle. For URLs, provide the full URL (e.g., 'https://twitter.com/testuser'). For handles, provide the username. |
| `customerId` | integer | Yes | The unique identifier of the customer who owns the social profile. |
| `socialProfileId` | integer | Yes | The unique identifier of the social profile to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Website

**Slug:** `HELP_SCOUT_UPDATE_CUSTOMER_WEBSITE`

Tool to update an existing website URL for a customer in Help Scout. Use when modifying a website entry on a customer's profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The updated website URL |
| `website_id` | integer | Yes | The ID of the website entry to update |
| `customer_id` | integer | Yes | The ID of the customer whose website to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Fields

**Slug:** `HELP_SCOUT_UPDATE_CUSTOM_FIELDS`

Tool to update custom fields on a Help Scout conversation. The complete fields list replaces existing data—omitted fields are removed. Use when you need to set or clear custom field values on a conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | Yes | List of custom fields to be applied to the conversation. Complete list replaces existing data—omitted fields are removed. Empty array clears all custom fields. |
| `conversation_id` | integer | Yes | The unique conversation identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Mailbox Routing Configuration

**Slug:** `HELP_SCOUT_UPDATE_MAILBOXES_ROUTING`

Tool to update routing configuration for a mailbox inbox in Help Scout. Use when you need to enable/disable routing, change assignment limits, modify assignment strategy, or update the list of users in rotation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string ("enabled" | "disabled") | Yes | Routing configuration state - 'enabled' or 'disabled' |
| `userIds` | array | Yes | List of user IDs to include in the rotation. Must not be empty when routing state is 'enabled'. Users must be active and have access to the mailbox. |
| `mailboxId` | string | Yes | Unique identifier for the mailbox to update routing configuration |
| `assignmentLimit` | integer | Yes | Maximum number of conversations that can be assigned (range: 1-100) |
| `assignmentMethod` | string ("round_robin" | "balanced") | Yes | Assignment strategy for distributing conversations - 'round_robin' assigns to users in sequence, 'balanced' assigns to users with fewest active conversations |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Organization

**Slug:** `HELP_SCOUT_UPDATE_ORGANIZATION`

Tool to update an organization in Help Scout. Use when you need to modify organization details such as name, website, domains, or contact information. This is a complete update operation - provide all fields to avoid removal of existing data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Organization name (required). This is a complete update - all required fields must be provided. |
| `note` | string | No | Internal notes about the organization (visible only to team members). Omitting this will clear the note. |
| `phones` | array | Yes | Array of phone numbers associated with the organization (required). Provide empty array if no phones. |
| `domains` | array | Yes | Array of domain strings associated with the organization (required). Provide empty array if no domains. |
| `website` | string | Yes | Organization website URL (required). This is a complete update - all required fields must be provided. |
| `location` | string | No | Physical location of the organization. Omitting this will clear the location. |
| `brandColor` | string | No | Brand color in hex format (e.g., #fefefe). Omitting this will clear the brand color. |
| `description` | string | No | Description of the organization. Omitting this will clear the description. |
| `organization_id` | integer | Yes | The unique identifier for the organization to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Organization Property

**Slug:** `HELP_SCOUT_UPDATE_ORGANIZATION_PROPERTY`

Tool to update an organization property definition in Help Scout. Use when you need to modify the name or options of an existing custom property. Note: Property type and slug cannot be changed after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Updated name of the property; maximum 100 characters |
| `slug` | string | Yes | The identifier for the organization property being updated. This is the property's unique slug. |
| `options` | array | No | The updated list of options for a dropdown property. Maximum 100 options. When provided, this completely replaces existing options. Note: Removing options will delete all property values for those options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Organization Property Industry

**Slug:** `HELP_SCOUT_UPDATE_ORGANIZATION_PROPERTY_INDUSTRY`

Tool to update the industry organization property definition in Help Scout. Use when you need to modify the display name or available dropdown options for the industry field. Note: updating options replaces the entire list and removed options cascade delete existing values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Updated display name for the industry property. Maximum 100 characters. |
| `options` | array | No | Updated list of industry options for the dropdown. Maximum 100 options. When provided, the entire options list is replaced - any removed options will cascade delete existing values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update saved reply

**Slug:** `HELP_SCOUT_UPDATE_SAVED_REPLY`

Tool to update an existing saved reply in a Help Scout mailbox. Use when you need to modify the name or content of a saved reply template.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the saved reply. This is used to identify and search for the reply. |
| `text` | string | No | The saved reply's text content for email messages. Supports HTML formatting with tags like <br /> for line breaks. |
| `chatText` | string | No | The saved reply's text content for chat messages. Use plain text with newline characters (\n) for line breaks instead of HTML. |
| `mailboxId` | string | Yes | The mailbox ID where the saved reply exists. This identifies which mailbox the saved reply belongs to. |
| `savedReplyId` | string | Yes | The unique identifier of the saved reply to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation Snooze

**Slug:** `HELP_SCOUT_UPDATE_SNOOZE`

Tool to update or set a snooze on a Help Scout conversation. Use when you need to snooze a conversation until a specific date/time, optionally unsnoozing when the customer replies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `snoozed_until` | string | Yes | ISO 8601 date string in the future when the conversation should be unsnoozed. Must not be after year 2100. |
| `conversation_id` | integer | Yes | Unique identifier for the conversation to snooze |
| `unsnooze_on_customer_reply` | boolean | Yes | Whether a new customer response should automatically unsnooze the conversation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Thread

**Slug:** `HELP_SCOUT_UPDATE_THREAD`

Tool to update a specific thread in a Help Scout conversation using JSON Patch format. Use when you need to modify thread text content or hide/unhide a thread. Requires admin-level access or thread editing enabled for the account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `op` | string ("replace") | Yes | JSON Patch operation type. Only 'replace' is supported for thread updates |
| `path` | string ("/text" | "/hidden") | Yes | Field path to update. Valid paths: /text (modify thread text content), /hidden (hide/unhide thread - applies to non-draft customer or reply threads only) |
| `value` | string | Yes | New value for the field. Use string for /text path (thread content), boolean for /hidden path (true to hide, false to unhide). Note: Original text is saved and viewable on Help Scout website |
| `threadId` | integer | Yes | The unique identifier of the thread to update |
| `conversationId` | integer | Yes | The unique identifier of the conversation containing the thread |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Webhook

**Slug:** `HELP_SCOUT_UPDATE_WEBHOOK`

Tool to update an existing webhook subscription in Help Scout. Use when modifying webhook configuration such as URL, events, secret, or other settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The callback URL where webhook events will be sent |
| `label` | string | No | Label to identify the webhook |
| `events` | array | Yes | Array of event names to subscribe to for webhook notifications |
| `secret` | string | Yes | Secret key for webhook signature verification (max 40 characters) |
| `mailboxIds` | array | No | Array of mailbox IDs to scope webhook to specific mailboxes. If omitted, webhook applies to all mailboxes |
| `webhook_id` | integer | Yes | The unique identifier of the webhook to update |
| `notification` | boolean | No | If true, sends only resource URI instead of full payload |
| `payloadVersion` | string ("V2") | No | Webhook payload version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Workflow Status

**Slug:** `HELP_SCOUT_UPDATE_WORKFLOW_STATUS`

Tool to update the status of a Help Scout workflow (enable/disable automation rule). Use when you need to activate or deactivate a workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("active" | "inactive") | Yes | New status for the workflow: active to enable, inactive to disable |
| `workflow_id` | integer | Yes | The unique identifier of the workflow to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
