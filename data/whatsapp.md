# WhatsApp

Enables interaction with customers through the WhatsApp Business API for messaging and automation. Only supports WhatsApp Business accounts, not WhatsApp Personal accounts.

- **Category:** phone & sms
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 58
- **Triggers:** 1
- **Slug:** `WHATSAPP`
- **Version:** 20260915_00

## Frequently Asked Questions

### Why isn't my WhatsApp message being delivered?

WhatsApp has a 24-hour customer service window. Recipients only receive messages within 24 hours of their last message to you. To message outside this window, use a template message.

### Can I use a personal WhatsApp account with the WhatsApp toolkit?

No. The WhatsApp toolkit is for WhatsApp Business API flows, so the connected account needs to be backed by a WhatsApp Business Account (WABA). Personal WhatsApp accounts are not supported for these API flows.

If you need to send or receive WhatsApp messages through the toolkit, set up or connect the relevant WABA-backed business account in Meta first.

### What is a WABA ID?

The WABA ID, or WhatsApp Business Account ID, is required because the WhatsApp Business API needs it to identify the business account. Users can find it in Meta Developers under the app's WhatsApp API Setup section, or fetch it programmatically by calling `GET /me/businesses` and then `GET /{business_id}/owned_whatsapp_business_accounts` with an access token.

### WhatsApp template messages require an existing template before sending

Sending a WhatsApp template message requires a template to already exist in WhatsApp/Meta. The send-template tool sends an existing template by name/language and parameters; it does not remove the need to create and approve the template first.

### Why is my WhatsApp connection failing with "Missing required fields"?

Ensure all required fields are provided when initiating the connection. See the [WhatsApp authentication details](https://docs.composio.dev/toolkits/whatsapp#authentication-details).

## Tools

### Block WhatsApp Users

**Slug:** `WHATSAPP_BLOCK_USERS`

Block one or more WhatsApp users to prevent them from sending messages to your business phone number. Use this action when you need to prevent specific users from contacting your business through WhatsApp. Blocked users will receive an error if they attempt to send messages to your business phone number. This action is irreversible — blocked users cannot unblock themselves and must contact your business directly to be unblocked. Note: You can block a maximum of 100 users per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `block_users` | array | Yes | List of users to block. Each user must be identified by their WhatsApp phone number in international format without the + sign (e.g., '16505551234'). Maximum of 100 users per request. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number to block users from. This is NOT the actual phone number itself - it is a numeric ID (e.g., '712594308615206') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Configure WhatsApp Conversational Automation

**Slug:** `WHATSAPP_CONFIGURE_CONVERSATIONAL_AUTOMATION`

Configure conversational automation settings for a WhatsApp Business phone number. Sets up away messages, greeting messages, custom commands, and ice breaker prompts to automate customer interactions. Use this action to enable automated responses when your business cannot respond in real-time. Use this action when you need to: - Enable welcome messages for new customer conversations - Define custom bot commands for automated assistance - Set up conversation prompts (ice breakers) to guide customer interactions - Configure automated greeting messages for your WhatsApp Business number Note: The phone_number_id parameter refers to the Meta-assigned numeric ID, not the actual phone number. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompts` | array | No | List of conversation prompts (ice breakers) up to 3 items. Each prompt must be 1-80 characters. These guide customers with suggested conversation starters. |
| `commands` | array | No | List of bot commands (up to 30) for automated responses. Each command has a name and description. Use this to define custom commands users can trigger. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number (e.g., '1234567890123456'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |
| `enable_welcome_message` | boolean | No | Whether to enable the welcome message for new conversations. When enabled, the first message from a customer will trigger an automated greeting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create WhatsApp Flow

**Slug:** `WHATSAPP_CREATE_FLOW`

Create a new WhatsApp Flow for the WhatsApp Business Account. Use this action when you want to create an interactive flow that can collect user data, guide users through a process, or provide structured interactions within WhatsApp conversations. The flow starts in DRAFT status and must be configured with Flow JSON before it can be published. Note: The created flow is in DRAFT status and must be published before it can be used. Use the UpdateFlowJson action to add the flow configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the flow. Maximum 80 characters. Must be unique within your WhatsApp Business Account. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to use. If not provided, uses the waba_id from your connection configuration. |
| `categories` | string | Yes | JSON array of category names as a string (e.g., '["OTHER"]'). Each flow must have at least one category. Common categories include: AUTHENTICATION, CONFIRMATION, LEAD_GENERATION, OTHER, etc. |
| `endpoint_uri` | string | Yes | The HTTPS URL where your flow logic is hosted. This endpoint must be accessible by Meta's servers. The URL must start with https:// and should respond to incoming flow data requests. |
| `clone_flow_id` | string | No | Optional: ID of an existing flow to clone. If provided, the new flow will be a copy of the specified flow with the new name and categories. Use this to quickly create variations of existing flows. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create WhatsApp Max Price Agreement

**Slug:** `WHATSAPP_CREATE_MAX_PRICE_AGREEMENTS`

Create a max price agreement for WhatsApp marketing messages pricing. Max price agreements set a ceiling on the per-conversation price you'll pay for WhatsApp messaging across your WhatsApp Business Account. This is useful for controlling costs and ensuring predictable pricing for your messaging campaigns. Use this action when you need to set up pricing agreements for marketing, utility, or authentication message types on your WhatsApp Business Account. Once created, the agreement will be applied to all applicable conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | Yes | The 3-letter ISO currency code for the max price (e.g., 'USD', 'EUR', 'INR'). |
| `business_id` | string | Yes | The WhatsApp Business Account (WABA) ID. This is the numeric ID for your business account, typically starts with a number like '944953772041385'. |
| `signer_name` | string | Yes | The full name of the person signing this price agreement. |
| `message_type` | string ("marketing" | "utility" | "authentication") | Yes | The type of message for this price agreement. Use 'marketing' for promotional messages, 'utility' for transactional updates, or 'authentication' for one-time passwords. |
| `signer_email` | string | Yes | The email address of the person signing this price agreement. This person will receive confirmation of the agreement. |
| `max_price_micros` | integer | Yes | The maximum price in micros (1 million micros = 1 unit of currency). For example, 50000 micros = 0.05 in the specified currency. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create message template

**Slug:** `WHATSAPP_CREATE_MESSAGE_TEMPLATE`

Create a new message template for the WhatsApp Business Account. Templates must be approved by WhatsApp before they can be used. Templates are required for marketing messages and messages sent outside the 24-hour window.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique template name. Must be lowercase, alphanumeric with underscores only. Maximum 512 characters. Example: 'order_confirmation_v1'. |
| `category` | string ("AUTHENTICATION" | "MARKETING" | "UTILITY") | Yes | Template category. AUTHENTICATION: for OTP/verification codes. MARKETING: for promotional content (requires opt-in). UTILITY: for transactional updates like order status, appointments. |
| `language` | string | Yes | Template language code in ISO 639-1 format with country code. Examples: 'en_US' (US English), 'es_ES' (Spanish), 'pt_BR' (Brazilian Portuguese). |
| `components` | array | No | List of template components. Required when creating a template from scratch: must include at least one BODY component, and can optionally include one HEADER and one BUTTONS component. Omit when cloning a Template Library template via library_template_name. |
| `allow_category_change` | boolean | No | Optional. Set to true to allow Meta to automatically assign/reassign the template category. If omitted, the template may be rejected due to miscategorization. |
| `library_template_name` | string | No | Optional. The exact name of a Meta Template Library template to clone (e.g. 'order_confirmation_2'). When set, the template is created from the pre-approved library template instead of from scratch; components should be omitted. |
| `library_template_body_inputs` | object | No | Optional. Used with library_template_name. Object supplying body-level inputs for the library template (e.g. {'add_contact_number': true, 'add_learn_more_link': true, 'add_security_recommendation': true, 'add_track_package_link': true, 'code_expiration_minutes': 10}). |
| `library_template_button_inputs` | array | No | Optional. Used with library_template_name. List of button input objects supplying values for the library template's buttons (e.g. [{'type': 'PHONE_NUMBER', 'phone_number': '+15551234567'}] or [{'type': 'URL', 'url': 'https://example.com'}]). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create QR Code

**Slug:** `WHATSAPP_CREATE_QR_CODE`

Create a new QR code with a prefilled message for a WhatsApp Business phone number. Use this action when you need to generate a shareable QR code that customers can scan to start a conversation with your business. When scanned, the QR code will automatically populate the message input field with the specified prefilled message, making it easy for customers to initiate contact. The QR code can be configured to generate an image (PNG or SVG format) which will be available in the response for download and sharing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone_number_id` | string | Yes | The WhatsApp Business Account phone number ID for which to create the QR code. This ID is provided when you add a phone number to your WhatsApp Business Account. |
| `generate_qr_image` | string | No | Optional. Image format for the generated QR code. When specified, the response will include a qr_image_url field with the QR code image. Supported values: 'PNG' or 'SVG'. |
| `prefilled_message` | string | Yes | The pre-filled message text that will appear when customers use the QR code. This is the message they will send to your business when they scan the code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create upload session for WhatsApp

**Slug:** `WHATSAPP_CREATE_UPLOAD_SESSION`

Create a resumable upload session for large file uploads to WhatsApp. This action initiates an upload session that allows you to upload large files in chunks. First create a session, then use the session ID and URI to upload file data in subsequent requests. This is useful for uploading videos and large images that exceed the size limits of direct uploads. Use this action when you need to upload media files larger than the direct upload limit, or when you want to implement resumable uploads for reliability.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_name` | string | No | Optional file name for the upload session. If not provided, a default name will be used. |
| `file_type` | string ("image/jpeg" | "image/png" | "video/mp4") | Yes | The MIME type of the file being uploaded. Supported types: image/jpeg, image/png, video/mp4. |
| `file_length` | integer | Yes | The size of the file in bytes. Must be a positive integer representing the exact file size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete WhatsApp Media

**Slug:** `WHATSAPP_DELETE_MEDIA`

Delete a WhatsApp media file previously uploaded via the Media API. Use when you need to remove a media object you uploaded earlier (e.g. to free up storage or to retract content). The deletion is permanent — the media_id will no longer be retrievable. Note: media uploaded via Cloud API is normally retained by Meta for 30 days; this operation removes it before the automatic expiry.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `media_id` | string | Yes | The WhatsApp media ID to delete (obtained from a prior upload_media call or a webhook). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete message template

**Slug:** `WHATSAPP_DELETE_MESSAGE_TEMPLATE`

Delete a message template from the WhatsApp Business Account by name. This permanently removes the template and it cannot be recovered. When you delete a template by name, all templates with that name across all languages will be deleted. Names of deleted templates cannot be reused for 30 days. Important: Only delete templates that are no longer needed, as this operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the template to delete. This will delete all templates with this name across all languages. |
| `hsm_id` | string | No | Optional. The template's ID. Include this together with 'name' to delete only the single language variant with this template ID, instead of deleting all language variants sharing the name. |
| `waba_id` | string | No | WhatsApp Business Account ID to target. If not provided, the WhatsApp Business Account ID from the connection metadata is used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete QR Code

**Slug:** `WHATSAPP_DELETE_QR_CODE`

Delete a specific QR code from a WhatsApp Business phone number. Use this action when you need to permanently remove a QR code that is no longer needed. This operation is irreversible — once deleted, the QR code cannot be recovered or recreated with the same identifier. This action permanently deletes the QR code and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `qr_code_id` | string | Yes | The unique 14-character identifier of the QR code to delete. This is the code value returned when the QR code was created. |
| `phone_number_id` | string | Yes | The WhatsApp Business Account phone number ID that owns the QR code to be deleted. This ID is provided when you add a phone number to your WhatsApp Business Account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deregister WhatsApp Business Phone Number

**Slug:** `WHATSAPP_DEREGISTER_PHONE`

Deregister a WhatsApp Business phone number from the Cloud API. Use when you need to stop sending messages from a phone number — for example before migrating it to another WhatsApp Business Account, before re-registering with a new PIN, or when retiring the number. After deregistration, the phone number can be registered again via register_phone. Destructive operation: after deregistration the phone number cannot send messages until it is registered again.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone_number_id` | string | Yes | The ID of the phone number to deregister (the same ID used with register_phone). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Business Account Activities

**Slug:** `WHATSAPP_GET_ACTIVITIES`

Retrieve activity history for a WhatsApp Business Account. This action returns a paginated list of activities such as phone number verifications, user additions, and other administrative actions performed on the WABA. Use this action when you need to audit administrative actions, track changes to your WhatsApp Business Account, or monitor user access and modifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination. Use this to get the next page of results. |
| `limit` | integer | No | Maximum number of activity records to return per page. Default is 25, maximum is 100. |
| `since` | string | No | Unix timestamp or ISO 8601 date string. Only return activities that occurred after this time. |
| `until` | string | No | Unix timestamp or ISO 8601 date string. Only return activities that occurred before this time. |
| `before` | string | No | Cursor for pagination. Use this to get the previous page of results. |
| `fields` | string | No | Comma-separated list of fields to include in the response. Default includes all available fields. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. |
| `activity_type` | string | No | Filter activities by type. Can be a single type or comma-separated list of types (e.g., PHONE_NUMBER_VERIFIED,USER_ADDED). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Business Account Details

**Slug:** `WHATSAPP_GET_BUSINESS_ACCOUNT_DETAILS`

Retrieve comprehensive details about a WhatsApp Business Account (WABA). Returns configuration, status, and settings information including account review status, business verification status, timezone, and ownership details. Use this action when you need to audit your WhatsApp Business Account configuration, verify account status, or retrieve account-level settings and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response. Default includes all available fields. |
| `waba_id` | string | No | WhatsApp Business Account ID to retrieve details for. If not provided, uses the waba_id from your connection configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Business Compliance Info

**Slug:** `WHATSAPP_GET_BUSINESS_COMPLIANCE_INFO`

Retrieve comprehensive business compliance information for a WhatsApp Business phone number. Returns regulatory and compliance details including entity registration status, grievance officer contact information, and customer care details. Use this action to verify business compliance status, review registered business information, and ensure proper contact details are configured for regulatory requirements. Use when you need to check business registration status, review grievance officer details for legal compliance, or verify customer care contact information for your WhatsApp Business account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve. Available fields: messaging_product, entity_name, entity_type, entity_type_custom, is_registered, grievance_officer_details, customer_care_details, whatsapp_business_account_id. If not specified, returns all default fields. |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID (e.g., '1234567890123456'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Encryption

**Slug:** `WHATSAPP_GET_BUSINESS_ENCRYPTION`

Retrieve the WhatsApp Business public key and its signature verification status. Use this action when you need to obtain the end-to-end encryption public key for a WhatsApp Business phone number. This is useful for setting up secure messaging integrations and verifying the authenticity of messages. The response includes the base64-encoded public key and its signature status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: business_public_key, business_public_key_signature_status. Default includes both fields. |
| `phone_number_id` | string | Yes | Your WhatsApp Business phone number ID. This ID represents the phone number entity and can be obtained from your WhatsApp Business Account phone numbers list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get business profile

**Slug:** `WHATSAPP_GET_BUSINESS_PROFILE`

Get the business profile information for a WhatsApp Business phone number. This includes business details like description, address, website, and contact info.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve. Default includes all available fields. |
| `phone_number_id` | string | Yes | The phone number ID to get the business profile for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get client WhatsApp Business Accounts

**Slug:** `WHATSAPP_GET_CLIENT_BUSINESS_ACCOUNTS`

Retrieve WhatsApp Business Accounts shared with or managed by a business portfolio. Use this action when you need to get WhatsApp Business Accounts (WABAs) that are client accounts shared with or managed by a specific business portfolio, as opposed to accounts directly owned by that business. This is useful for agencies managing accounts for multiple clients, or for businesses accessing accounts shared with them. The action supports filtering by business type, pagination with cursors, finding specific accounts by ID, and specifying which fields to return.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `find` | string | No | Find a specific WhatsApp Business Account by ID. |
| `after` | string | No | Cursor for forward pagination. Use the cursor from the previous response to get the next page of results. |
| `limit` | integer | No | Maximum number of WhatsApp Business Accounts to return per page. Default is 25, maximum is 100. |
| `before` | string | No | Cursor for backward pagination. Use the cursor from the previous response to get the previous page of results. |
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: id, name, account_review_status, purchase_order_number, audiences, ownership_type, subscribed_apps, business_verification_status, country, currency, timezone_id, on_behalf_of_business_info, schedules, is_enabled_for_insights, dcc_config, message_templates, phone_numbers. |
| `business_id` | string | Yes | The Business ID representing the business portfolio whose client WhatsApp Business Accounts you want to retrieve. This can be found in your Meta Business Suite URL or through business management APIs. |
| `business_type` | array | No | Filter results by WhatsApp Business Account type (STANDARD or PREMIUM). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Commerce Settings

**Slug:** `WHATSAPP_GET_COMMERCE_SETTINGS`

Get commerce settings for a WhatsApp Business phone number. Retrieves cart and catalog visibility settings for a specific WhatsApp Business phone number. Use this action to check whether shopping cart and product catalog features are enabled for customer interactions. This is useful for managing e-commerce capabilities on your WhatsApp Business account. Use when you need to verify the current commerce configuration of a phone number before enabling shopping features or displaying products to customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID (e.g., '527759822865714'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Flow Assets

**Slug:** `WHATSAPP_GET_FLOW_ASSETS`

List assets associated with a WhatsApp Flow. Use this action when you need to retrieve the assets (such as flow.json) that are associated with a WhatsApp Flow. The response includes download URLs for each asset that can be used to fetch the actual content. Note: The download URLs are typically valid for a limited time period and should be used promptly after retrieval.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow_id` | string | Yes | The unique identifier of the flow. This is the ID assigned by Meta when the flow is created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Join Requests

**Slug:** `WHATSAPP_GET_JOIN_REQUESTS`

Get all pending join requests for a WhatsApp group. Use this action when you need to retrieve pending requests from users who want to join a WhatsApp group. This is useful for group administration, moderation, and managing group membership. Results can be paginated using the 'after' and 'before' cursors from the paging response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor that points to the end of a page of data to retrieve the next page of results. Use the 'after' cursor from the previous response's paging.cursors. |
| `limit` | integer | No | Maximum number of join requests to return per page (1-100). |
| `before` | string | No | Cursor that points to the beginning of a page of data to retrieve the previous page of results. Use the 'before' cursor from the previous response's paging.cursors. |
| `group_id` | string | Yes | The unique ID of the WhatsApp group to retrieve join requests for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get media info

**Slug:** `WHATSAPP_GET_MEDIA_INFO`

Get metadata and download URL for uploaded WhatsApp media. Returns media ID, download URL (valid for 5 minutes), MIME type, SHA256 hash, and file size. The download URL can be used to retrieve the actual media file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `media_id` | string | Yes | The WhatsApp media ID to retrieve information for (obtained from media upload or webhook notifications). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Message History

**Slug:** `WHATSAPP_GET_MESSAGE_HISTORY`

Retrieve message history for a WhatsApp Business phone number. Returns a paginated list of messages with their delivery status information, including events like delivery status updates, timestamps, and webhook information. Use this action when you need to track message delivery status, audit message history, or retrieve detailed information about specific messages. Use when you want to check if messages were delivered, track message status changes, or retrieve delivery receipts for WhatsApp Business messages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination. Use this to get the next page of results. This value comes from the 'paging.cursors.after' field in previous responses. |
| `limit` | integer | No | Maximum number of message history entries to return per page. Default is 25, maximum is 100. |
| `before` | string | No | Cursor for pagination. Use this to get the previous page of results. This value comes from the 'paging.cursors.before' field in previous responses. |
| `fields` | string | No | Comma-separated list of fields to include in the response. If not specified, default fields will be returned (id, message_id). Available fields: id, message_id, events{delivery_status,webhook_update_state,timestamp,application,webhook_uri,error_description} |
| `message_id` | string | No | Filter results by a specific WhatsApp message ID (WAMID). When provided, only message history for this specific message will be returned. |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID. This is the ID associated with your registered phone number in WhatsApp Business Manager. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get message templates

**Slug:** `WHATSAPP_GET_MESSAGE_TEMPLATES`

Get all message templates for the WhatsApp Business Account. Templates are required for sending messages outside the 24-hour window and for marketing/utility messages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination to get templates after this cursor. |
| `limit` | integer | No | The maximum number of templates to retrieve. Default is 25. |
| `fields` | string | No | Optional comma-separated list of template fields to include in the response (e.g. 'name,status,category,language,components'). If omitted, the API returns its default set of fields. |
| `status` | string | No | Filter by template status: APPROVED, PENDING, REJECTED, DISABLED, PAUSED, LIMIT_EXCEEDED. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. Only provide this if you need to override the configured WABA ID. |
| `category` | string | No | Filter by template category: AUTHENTICATION, MARKETING, UTILITY. |
| `language` | string | No | Filter by language code (e.g., 'en_US', 'es_ES'). |
| `name_or_content` | string | No | Filter templates by name or content substring. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get owned WhatsApp Business Accounts

**Slug:** `WHATSAPP_GET_OWNED_BUSINESS_ACCOUNTS`

Retrieve WhatsApp Business Accounts owned by a business portfolio. Use this action when you need to get all WhatsApp Business Accounts (WABAs) that are directly owned by a specific business. This differs from client accounts which are shared with the business. This is useful for managing your own accounts, querying their details, and navigating through paginated results. The action supports filtering by business type, pagination with cursors, finding specific accounts by ID, and specifying which fields to return.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `find` | string | No | Find a specific WhatsApp Business Account by ID within the owned accounts. Use this to quickly locate a specific account. |
| `last` | integer | No | Number of results to return in backward pagination. Maximum value is 100. Use with 'before' cursor for backward pagination. |
| `after` | string | No | Cursor for forward pagination. Use the cursor from the previous response to get the next page of results. |
| `first` | integer | No | Number of results to return in forward pagination. Maximum value is 100. Use with 'after' cursor for forward pagination. |
| `before` | string | No | Cursor for backward pagination. Use the cursor from the previous response to get the previous page of results. |
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: id, name, account_review_status, purchase_order_number, audiences, ownership_type, subscribed_apps, business_verification_status, country, currency, timezone_id, on_behalf_of_business_info, schedules, is_enabled_for_insights, dcc_config, message_templates, phone_numbers. |
| `business_id` | string | Yes | The Business ID representing the business portfolio that owns the WhatsApp Business Accounts. This can be found in your Business Manager settings. |
| `business_type` | array | No | Filter accounts by business type. Can specify multiple types like ENTERPRISE or SMB to filter between enterprise and small-medium business accounts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get phone number

**Slug:** `WHATSAPP_GET_PHONE_NUMBER`

Retrieve detailed information about a specific WhatsApp Business phone number. Returns phone number details including verification status, quality rating, display number, verified business name, throughput limits, and webhook configuration. Use this to check phone number status, settings, and capabilities. To get available phone number IDs, first call WHATSAPP_GET_PHONE_NUMBERS.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve. Available fields: id, display_phone_number, verified_name, code_verification_status, quality_rating, platform_type, throughput, webhook_configuration, last_onboarded_time. Default retrieves all available fields. |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID (e.g., '901139066420489'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get phone numbers

**Slug:** `WHATSAPP_GET_PHONE_NUMBERS`

Retrieve all phone numbers registered to your WhatsApp Business Account. Returns phone number IDs, display numbers, verification status, quality ratings, and messaging throughput limits. Use the phone number ID from the response to send WhatsApp messages via other API actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of phone numbers to return per page (1-100). Use lower values for faster responses or when you only need a few numbers. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. Only provide this if you need to override the configured WABA ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Schedules

**Slug:** `WHATSAPP_GET_SCHEDULES`

Retrieve campaign schedules associated with a WhatsApp Business Account. Use this action when you need to list all scheduled campaigns for a WABA, including their status, timing, and recurrence patterns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("created_time.asc" | "created_time.desc" | "updated_time.asc" | "updated_time.desc") | No | Sort options for schedule results. |
| `after` | string | No | Cursor for pagination - retrieve records after this cursor. |
| `limit` | integer | No | Maximum number of schedules to return per page. |
| `before` | string | No | Cursor for pagination - retrieve records before this cursor. |
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: id, name, status, schedule_type, description, start_time, end_time, timezone, days_of_week, created_time, updated_time, is_active, recurrence_pattern. Defaults to 'id,name,status,schedule_type'. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. |
| `filtering` | string | No | JSON-encoded array of filter conditions. Each filter should specify field, operator, and value. Supported fields: status, schedule_type, is_active. Example: [{"field":"status","operator":"EQUAL","value":"ACTIVE"}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get WhatsApp Cloud API Settings

**Slug:** `WHATSAPP_GET_SETTINGS`

Get Cloud API settings for a WhatsApp Business phone number. Retrieves calling, storage, and payload encryption settings for a specific WhatsApp Business phone number. This includes information about call features, IP addresses for calling, data storage preferences, and encryption settings. Use this action to check the current configuration and capabilities of a phone number's Cloud API integration. Use when you need to verify the current Cloud API settings for a phone number, including calling features, encryption status, and data storage configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID (e.g., '712594308615206'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |
| `include_sip_credentials` | boolean | No | Include SIP credentials in the response. Requires additional permissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Subscribed Apps

**Slug:** `WHATSAPP_GET_SUBSCRIBED_APPS`

Get all applications currently subscribed to webhooks for a WhatsApp Business Account. Use this action when you need to retrieve the list of third-party applications or integrations that are subscribed to receive webhook events for a specific WABA.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: id, name, link. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. Only provide this if you need to override the configured WABA ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get message template library

**Slug:** `WHATSAPP_GET_TEMPLATE_LIBRARY`

Browse the pre-built message template library for WhatsApp Business Account. This retrieves a list of available templates that can be used for messaging. Use when you need to discover available message templates for sending marketing, utility, or authentication messages to WhatsApp users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination to get templates after this cursor. |
| `limit` | integer | No | The maximum number of templates to retrieve. Default is 25. |
| `status` | string | No | Filter by template status: APPROVED, PENDING, REJECTED, DISABLED, PAUSED, LIMIT_EXCEEDED. |
| `country` | string | No | Filter by country code (e.g., 'US', 'GB'). |
| `category` | string | No | Filter by template category: AUTHENTICATION, MARKETING, UTILITY. |
| `language` | string | No | Filter by language code (e.g., 'en_US', 'es_ES'). |
| `name_or_content` | string | No | Filter templates by name or content substring. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get template status

**Slug:** `WHATSAPP_GET_TEMPLATE_STATUS`

Get the status and details of a specific message template. This is useful for checking if a template has been approved, rejected, or is still pending review.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve. Valid fields include: id, name, status, category, language, components, previous_category, parameter_format, quality_score, rejected_reason. If not specified, returns all default fields. |
| `template_id` | string | Yes | The ID of the template to check the status for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List WhatsApp Flows

**Slug:** `WHATSAPP_LIST_FLOWS`

List all WhatsApp Flows associated with the WhatsApp Business Account. Returns flow details including name, status, categories, and any validation errors. Use when you need to retrieve all available flows to select one for messaging or to check the status of existing flows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination to get flows after this cursor. |
| `limit` | integer | No | The maximum number of flows to retrieve per page (1-100). Default is 25. Use lower values for faster responses. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. Only provide this if you need to override the configured WABA ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List WhatsApp Groups

**Slug:** `WHATSAPP_LIST_GROUPS`

List all WhatsApp groups associated with a business phone number. Use this action when you need to retrieve the list of groups that a business phone number is a member of. This is useful for managing group memberships, sending messages to groups, or auditing group participation. Results can be paginated using the 'after' and 'before' cursors from the paging response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor that points to the end of a page of data to retrieve the next page of results. Use the 'after' cursor from the previous response's paging.cursors. |
| `limit` | integer | No | Maximum number of groups to return per page (1-100). Use lower values for faster responses or when you only need a few groups. |
| `before` | string | No | Cursor that points to the beginning of a page of data to retrieve the previous page of results. Use the 'before' cursor from the previous response's paging.cursors. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number. This is NOT the actual phone number itself - it is a numeric ID (e.g., '712594308615206') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List qr codes

**Slug:** `WHATSAPP_LIST_QR_CODES`

Get a list of all QR codes for a WhatsApp Business phone number. Use this action when you need to retrieve all message QR codes associated with a specific WhatsApp Business phone number. This is useful for managing existing QR codes, checking their status, or obtaining their image URLs for display. The action supports pagination through the 'after' and 'before' parameters, and can filter results by a specific QR code ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Filter results to a specific QR code by its unique identifier. |
| `after` | string | No | Cursor for pagination. Use this to get the next page of results. Obtain this value from the paging.cursors.after field in previous responses. |
| `limit` | integer | No | Maximum number of QR codes to return in a single response. Default is 25. |
| `before` | string | No | Cursor for pagination. Use this to get the previous page of results. Obtain this value from the paging.cursors.before field in previous responses. |
| `fields` | string | No | Comma-separated list of fields to include in the response. Available fields: code, prefilled_message, deep_link_url, creation_time (first-party apps only), qr_image_url.format(SVG&#124;PNG). Example: 'code,prefilled_message,deep_link_url,qr_image_url.format(SVG)' |
| `phone_number_id` | string | Yes | The WhatsApp Business Account phone number ID for which to list QR codes. This ID is provided when you add a phone number to your WhatsApp Business Account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List WhatsApp Solutions

**Slug:** `WHATSAPP_LIST_SOLUTIONS`

Retrieve a paginated list of Multi-Partner Solutions for a WhatsApp Business Account. Use when you need to view all multi-partner solutions (such as SMB solutions) associated with a WABA, including their status and owner application information. This action is useful for managing solution partnerships and understanding which applications have access to the WABA.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination. Returns solutions after this cursor position. Use the cursor from the previous response's paging.cursors.after field. |
| `limit` | integer | No | Maximum number of solutions to return per page (1-100). Default is 25. |
| `before` | string | No | Cursor for pagination. Returns solutions before this cursor position. Use the cursor from the previous response's paging.cursors.before field. |
| `fields` | string | No | Comma-separated list of fields to include in the response. If not specified, default fields will be returned (id, name, status, status_for_pending_request). Available fields: id, name, status, status_for_pending_request, owner_app, owner_permissions. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to query. If not provided, uses the waba_id from your connection configuration. Only provide this if you need to override the configured WABA ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Publish WhatsApp Flow

**Slug:** `WHATSAPP_PUBLISH_FLOW`

Publish a WhatsApp Flow to make it available for use. Use this action when you have finished designing and testing a WhatsApp Flow and are ready to make it available for users. The flow must be in DRAFT status and pass all validation checks before it can be published. Note: Once published, the flow cannot be unpublished. To make changes, you will need to create a new version of the flow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow_id` | string | Yes | The unique identifier of the flow to publish. This is the ID assigned by Meta when the flow is created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Register WhatsApp Business Phone Number

**Slug:** `WHATSAPP_REGISTER_PHONE`

Register a WhatsApp Business phone number for use with WhatsApp Cloud API. Use when you need to register a phone number that has been added to your WhatsApp Business Account. This action requires setting up a two-step verification PIN (6 digits) for the phone number. The phone number must be verified and properly configured in WhatsApp Manager before registration. Note: Registration is required before you can send messages from this phone number. Once registered, the phone number will be associated with your WhatsApp Business Account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pin` | string | Yes | 6-digit PIN for two-step verification setup. The PIN must be exactly 6 digits. |
| `backup` | object | No | Backup data for migrating existing WhatsApp Business accounts. |
| `phone_number_id` | string | Yes | The ID of the phone number to register. This ID is provided when the phone number is added to your WhatsApp Business Account and can be found in WhatsApp Manager. |
| `messaging_product` | string | No | Must be 'whatsapp' to indicate WhatsApp Business messaging product. |
| `data_localization_region` | string ("AE" | "AU" | "BH" | "BR" | "CA" | "CH" | "DE" | "GB" | "ID" | "IN" | "JP" | "KR" | "SG" | "ZA") | No | Data localization regions for message storage. |
| `meta_store_retention_minutes` | integer | No | Message retention period in minutes (deprecated in v21+). Only 60 minutes is allowed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Assigned User from WhatsApp Business Account

**Slug:** `WHATSAPP_REMOVE_ASSIGNED_USER`

Remove a user's access from the WhatsApp Business Account. Use this action when you need to revoke a user's access to a WhatsApp Business Account. This action is irreversible — the user will immediately lose access and cannot be recovered without reassigning them to the account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user` | string | Yes | The user ID of the person to remove from the WhatsApp Business Account. This must be a valid Facebook user ID that is currently assigned to the account. |
| `waba_id` | string | No | Optional: WhatsApp Business Account ID to target. If not provided, uses the waba_id from your connection configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send contacts

**Slug:** `WHATSAPP_SEND_CONTACTS`

Send contacts WhatsApp number. Note: The message will be delivered to the recipient only if they have initiated a conversation first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contacts` | array | Yes | List of contacts to send. Each contact requires a name object with formatted_name, first_name, and last_name. Optional fields: addresses, birthday (YYYY-MM-DD), emails, org (company/department/title), and phones. |
| `to_number` | string | Yes | The phone number to send the contacts to, including the country code without the + sign. |
| `recipient_type` | string ("individual" | "group") | No | The type of recipient. 'individual' (default) targets a phone number; 'group' targets a WhatsApp group id supplied in `to_number`. |
| `phone_number_id` | string | Yes | The phone number ID from which to send the contacts. |
| `reply_to_message_id` | string | No | Optional WhatsApp message ID (wamid...) of the message to reply to. When provided, this contact card is sent as a quoted reply (context.message_id) in the conversation thread. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send interactive buttons

**Slug:** `WHATSAPP_SEND_INTERACTIVE_BUTTONS`

Send an interactive button message with up to 3 reply buttons to a WhatsApp user. Interactive button messages allow recipients to quickly respond by tapping predefined buttons. Perfect for yes/no questions, multiple choice selections, quick actions, or call-to-action scenarios. IMPORTANT REQUIREMENTS: - The recipient must be a registered WhatsApp user - The recipient must have messaged your business first within the last 24 hours (WhatsApp's customer service window) - You can include 1-3 buttons per message - Each button can have a title (max 20 chars) and unique ID (max 256 chars) Use cases: Customer service menus, appointment confirmations, feedback collection, product selections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `buttons` | array | Yes | List of 1-3 interactive buttons. Each button must have a unique ID and title. |
| `body_text` | string | Yes | Main message text explaining the purpose or question for the buttons (maximum 1024 characters). |
| `to_number` | string | Yes | Recipient's phone number in international format without the + sign (e.g., '14155552345' for a US number). The recipient must be a registered WhatsApp user and must have messaged your business within the last 24 hours. |
| `footer_text` | string | No | Optional footer text displayed at the bottom of the message, below the buttons (maximum 60 characters). |
| `header_text` | string | No | Optional header text displayed at the top of the message (maximum 60 characters). |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID from which to send the message. Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |
| `reply_to_message_id` | string | No | Optional message ID to reply to. Use this to create a threaded conversation by replying to a specific previous message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send interactive list

**Slug:** `WHATSAPP_SEND_INTERACTIVE_LIST`

Send an interactive list message to a WhatsApp number. List messages display a menu of options organized into sections. Users tap a button to view the list and select one option. Perfect for product catalogs, service menus, or guided workflows. Supports up to 10 sections with up to 10 items per section (100 total options). Note: Recipients must have messaged you first within the last 24 hours to receive this message.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sections` | array | Yes | Sections containing list items (maximum 10 sections, minimum 1 section). |
| `body_text` | string | Yes | Body text for the list message (up to 1024 characters). |
| `to_number` | string | Yes | The recipient's phone number in international format without the + sign (e.g., '15551234567' for a US number). Note: The recipient must have initiated a conversation with your WhatsApp Business account within the last 24 hours to receive this message. |
| `button_text` | string | Yes | Text for the list button (up to 20 characters). |
| `footer_text` | string | No | Footer text for the list message (up to 60 characters). |
| `header_text` | string | No | Header text for the list message (up to 60 characters). |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number to send from. This is NOT the actual phone number itself - it is a numeric ID (e.g., '901139066420489') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |
| `reply_to_message_id` | string | No | The ID of the message to reply to (optional). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send location

**Slug:** `WHATSAPP_SEND_LOCATION`

Send a location message with coordinates, name, and address to a WhatsApp user. This action allows you to share location information through WhatsApp Business API. The location message includes latitude/longitude coordinates, a location name, and address. Important: The recipient must have an active WhatsApp account. Additionally, you can only send free-form messages (like location messages) within the 24-hour customer service window after the recipient has initiated contact with your business. Outside this window, you must use approved message templates. Common error codes: - 133010: Recipient's phone number doesn't have a WhatsApp account - 131026: Message undeliverable (recipient may have blocked your business number) - 131047: Re-engagement message (outside 24-hour window, need to use template)

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name or title of the location (e.g., 'San Francisco City Hall', 'Golden Gate Bridge'). This will be displayed to the recipient. |
| `address` | string | Yes | The full address of the location (e.g., '1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102'). This provides context to the recipient about the location. |
| `latitude` | string | Yes | The latitude coordinate of the location in decimal degrees format (e.g., '37.7749' for San Francisco). Range: -90 to 90. |
| `longitude` | string | Yes | The longitude coordinate of the location in decimal degrees format (e.g., '-122.4194' for San Francisco). Range: -180 to 180. |
| `to_number` | string | Yes | The recipient's WhatsApp phone number in international format without the + sign or spaces (e.g., '14155238886' for US number). The recipient must have a WhatsApp account registered with this number. |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID from which to send the location message. This is the ID of your WhatsApp Business phone number, not the phone number itself. |
| `reply_to_message_id` | string | No | Optional WhatsApp message ID (wamid...) of the message to reply to. When provided, this location is sent as a quoted reply (context.message_id) in the conversation thread. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send media

**Slug:** `WHATSAPP_SEND_MEDIA`

Send a media message to a WhatsApp number. Note: The media will be delivered to the recipient only if they have texted first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `link` | string | Yes | The publicly accessible HTTPS URL of the media file to send. The URL must be accessible by WhatsApp servers and serve the appropriate content-type header. For media uploads, use WHATSAPP_UPLOAD_MEDIA action to get a media ID and use WHATSAPP_SEND_MEDIA_BY_ID instead. |
| `caption` | string | No | Optional caption text to accompany the media (max 1024 characters). Only supported for 'image', 'video', and 'document' media types. Captions are NOT supported for 'audio' and 'sticker' types. |
| `to_number` | string | Yes | The phone number to send the media to, including the country code without the + sign. |
| `media_type` | string ("audio" | "document" | "image" | "sticker" | "video") | Yes | The type of media to send. Options: 'audio' (voice messages), 'document' (PDFs, docs), 'image' (PNG, JPG), 'sticker' (WebP animated stickers), 'video' (MP4 videos). Note: Only 'image', 'video', and 'document' types support captions. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number to send from. This is NOT the actual phone number itself - it is a numeric ID (e.g., '901139066420489') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |
| `reply_to_message_id` | string | No | Optional WhatsApp message ID (wamid...) of the message to reply to. When provided, this media message is sent as a quoted reply (context.message_id) in the conversation thread. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send media by

**Slug:** `WHATSAPP_SEND_MEDIA_BY_ID`

Send media using a media ID from previously uploaded media. This is more efficient than sending media by URL as the media is already on WhatsApp servers. Use upload_media action first to get the media ID. Note: The media will be delivered to the recipient only if they have texted first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `caption` | string | No | Caption for the media (not supported for audio and sticker). |
| `filename` | string | No | Filename for document media. |
| `media_id` | string | Yes | The media ID from uploaded media (use upload_media action to get this ID). |
| `to_number` | string | Yes | The phone number to send the media to, including the country code without the + sign. |
| `media_type` | string ("audio" | "document" | "image" | "sticker" | "video") | Yes | The type of media to send: audio, document, image, sticker, or video. |
| `phone_number_id` | string | Yes | The phone number ID from which to send the media. |
| `reply_to_message_id` | string | No | The ID of the message to reply to (optional). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send message

**Slug:** `WHATSAPP_SEND_MESSAGE`

Send a text message to a WhatsApp user. Important: The recipient phone number must be registered on WhatsApp and must have initiated a conversation with your business within the last 24 hours, OR you must use a template message (see WHATSAPP_SEND_TEMPLATE_MESSAGE) for the first message outside the 24-hour window. For test accounts, recipient numbers must be added to the test recipient list in Meta Business Suite before sending messages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The text content of the message to send. Supports Unicode characters including emojis. Maximum length: 4096 characters. |
| `to_number` | string | Yes | The recipient's WhatsApp phone number in international format without the + sign (e.g., '14155551234' for a US number). The number must be registered on WhatsApp. |
| `message_id` | string | No | Optional: The WhatsApp message ID (wamid) to reply to. When provided, this message will be sent as a reply to the specified message, creating a quoted reply thread. Leave empty to send a regular message. |
| `preview_url` | boolean | No | Set to True to show a preview card for URLs in the message. When enabled, WhatsApp will fetch and display URL metadata (title, description, image) for the first URL in the message. Default: False. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number to send from. This is NOT the actual phone number itself - it is a numeric ID (e.g., '712594308615206') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send template message

**Slug:** `WHATSAPP_SEND_TEMPLATE_MESSAGE`

Send a template message to a WhatsApp number.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to_number` | string | Yes | The phone number to send the template message to, including the country code without the + sign. |
| `components` | array | No | Template components with parameters to fill template variables. Use 'body' type with text parameters for simple variable substitution. |
| `language_code` | string ("af" | "sq" | "ar" | "ar_EG" | "ar_AE" | "ar_LB" | "ar_MA" | "ar_QA" | "az" | "be_BY" | "bn" | "bn_IN" | "bg" | "ca" | "zh_CN" | "zh_HK" | "zh_TW" | "hr" | "cs" | "da" | "prs_AF" | "nl" | "nl_BE" | "en" | "en_GB" | "en_US" | "en_AE" | "en_AU" | "en_CA" | "en_GH" | "en_IE" | "en_IN" | "en_JM" | "en_MY" | "en_NZ" | "en_QA" | "en_SG" | "en_UG" | "en_ZA" | "et" | "fil" | "fi" | "fr" | "fr_BE" | "fr_CA" | "fr_CH" | "fr_CI" | "fr_MA" | "ka" | "de" | "de_AT" | "de_CH" | "el" | "gu" | "ha" | "he" | "hi" | "hu" | "id" | "ga" | "it" | "ja" | "kn" | "kk" | "rw_RW" | "ko" | "ky_KG" | "lo" | "lv" | "lt" | "mk" | "ms" | "ml" | "mr" | "nb" | "ps_AF" | "fa" | "pl" | "pt_BR" | "pt_PT" | "pa" | "ro" | "ru" | "sr" | "si_LK" | "sk" | "sl" | "es" | "es_AR" | "es_CL" | "es_CO" | "es_CR" | "es_DO" | "es_EC" | "es_HN" | "es_MX" | "es_PA" | "es_PE" | "es_ES" | "es_UY" | "sw" | "sv" | "ta" | "te" | "th" | "tr" | "uk" | "ur" | "uz" | "vi" | "zu") | No | The language code for the template. |
| `template_name` | string | Yes | The name of the template to be sent. |
| `phone_number_id` | string | Yes | The phone number ID from which to send the template message. |
| `reply_to_message_id` | string | No | Optional WhatsApp message ID (wamid...) of the message to reply to. When provided, this template message is sent as a quoted reply (context.message_id) in the conversation thread. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set WhatsApp Two-Step Verification PIN

**Slug:** `WHATSAPP_SET_TWO_STEP_VERIFICATION`

Set or reset the two-step verification PIN for a WhatsApp Business phone number. Use when you need to change the 6-digit PIN that protects a registered phone number — for example after onboarding a new number, rotating credentials, or before re-registering. The initial PIN is set via register_phone; this action updates the PIN on an already-registered phone number. Endpoint: `POST /{phone-number-id}` with body `{"pin": "XXXXXX"}`. Meta's two-step-verification reference page is SPA-rendered, so the operation is documented as a property update on the phone-number node itself rather than a dedicated sub-path.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pin` | string | Yes | New 6-digit two-step verification PIN. Must be exactly 6 digits. |
| `phone_number_id` | string | Yes | The ID of the phone number whose two-step verification PIN should be set or reset. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Subscribe to WABA Webhooks

**Slug:** `WHATSAPP_SUBSCRIBE_APP`

Subscribe your application to receive webhook notifications for a WhatsApp Business Account (WABA). This action registers the application to receive webhook events from the specified WABA. Use this action when you need to start receiving webhook notifications for a specific WhatsApp Business Account, such as when setting up a new integration or re-establishing webhook subscriptions after they were removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `waba_id` | string | No | WhatsApp Business Account ID to subscribe to. If not provided, uses the WABA ID from auth headers. |
| `verify_token` | string | No | Verification token for webhook security. This token will be used to verify webhook callbacks. |
| `override_callback_uri` | string | No | Custom webhook callback URL to override app default. Must be a valid HTTPS URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unsubscribe from WABA Webhooks

**Slug:** `WHATSAPP_UNSUBSCRIBE_APP`

Unsubscribe your application from webhook events for a WhatsApp Business Account (WABA). This action removes the application subscription from the specified WABA's webhook configuration. This action is irreversible — once unsubscribed, the application will no longer receive webhook events for this WABA. Re-subscribing would need to be done through a separate action. Use this action when you need to stop receiving webhook notifications for a specific WhatsApp Business Account, such as when cleaning up old integrations or transitioning to a different app configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `waba_id` | string | No | WhatsApp Business Account ID to unsubscribe from. If not provided, uses the WABA ID from auth headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update WhatsApp Flow Metadata

**Slug:** `WHATSAPP_UPDATE_BUSINESS_ACCOUNT`

Update metadata for a WhatsApp Flow including its name, categories, and endpoint URI. Use when you need to modify the configuration or settings of an existing WhatsApp Flow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the Flow. |
| `flow_id` | string | Yes | The unique identifier of the Flow to update. Get this from the WHATSAPP_LIST_FLOWS action which returns the 'id' field for each flow. |
| `categories` | array | No | List of categories to assign to the Flow (e.g., ['OTHER', 'SIGN_UP']). |
| `endpoint_uri` | string | No | The endpoint URI where the Flow will send data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update WhatsApp Business Profile

**Slug:** `WHATSAPP_UPDATE_BUSINESS_PROFILE`

Update WhatsApp Business Profile information including business details, contact information, and profile settings. Use when you need to modify the business profile settings such as the about text, business category, address, description, email, and website URLs associated with a WhatsApp Business phone number. Note: Only fields that are provided will be updated. To clear an optional field, pass an empty string for text fields or an empty array for websites.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `about` | string | No | The text to display in the business profile's About section. Maximum 139 characters. |
| `email` | string | No | The contact email address of the business. Maximum 128 characters. |
| `address` | string | No | The address of the business. Maximum 256 characters. |
| `vertical` | string ("OTHER" | "AUTO" | "BEAUTY" | "APPAREL" | "EDU" | "ENTERTAIN" | "EVENT_PLAN" | "FINANCE" | "GROCERY" | "GOVT" | "HOTEL" | "HEALTH" | "NONPROFIT" | "PROF_SERVICES" | "RETAIL" | "TRAVEL" | "RESTAURANT" | "ALCOHOL" | "ONLINE_GAMBLING" | "PHYSICAL_GAMBLING" | "OTC_DRUGS") | No | The industry/vertical type of the WhatsApp Business account. |
| `websites` | array | No | List of URLs associated with the business. Maximum 2 URLs allowed. |
| `description` | string | No | Description of the business. Maximum 256 characters. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number. This is NOT the actual phone number - it is a numeric ID (e.g., '712594308615206') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |
| `messaging_product` | string | No | The messaging service used for the request. Must be set to 'whatsapp'. |
| `profile_picture_handle` | string | No | The handle of the profile picture generated from the Resumable Upload API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update WhatsApp commerce settings

**Slug:** `WHATSAPP_UPDATE_COMMERCE_SETTINGS`

Set or update commerce settings for a WhatsApp Business phone number. Use this action to enable or disable shopping cart functionality and product catalog visibility for a specific WhatsApp Business phone number. The settings control whether customers can browse products and make purchases directly within WhatsApp. Note: At least one setting (is_cart_enabled or is_catalog_visible) should be provided in the request for meaningful updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `is_cart_enabled` | boolean | No | Enable or disable the shopping cart feature. When enabled, customers can add items to a cart and checkout directly in WhatsApp. |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number (e.g., '712594308615206'). This is NOT the actual phone number - it is a numeric ID assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |
| `is_catalog_visible` | boolean | No | Make the product catalog visible to customers. When enabled, customers can browse your products directly in WhatsApp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Flow JSON

**Slug:** `WHATSAPP_UPDATE_FLOW_JSON`

Update the Flow JSON configuration for a WhatsApp Flow. Use this action when you need to update or upload a new flow.json file for an existing WhatsApp Flow. The Flow JSON defines the structure, screens, and behavior of the flow. This endpoint validates the JSON schema and returns any validation errors if the format is incorrect. Note: The uploaded Flow JSON will be validated against the Meta Flow JSON schema. If validation errors are returned, the update was not applied and you must fix the indicated issues before retrying.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow_id` | string | Yes | The unique identifier of the flow. This is the ID assigned by Meta when the flow is created. |
| `asset_type` | string | No | The asset type being uploaded. Must be 'FLOW_JSON' for Flow JSON updates. |
| `rawContent` | string | No | Inline JSON content to upload as a string. Provide either file_to_upload or raw_content. |
| `file_to_upload` | object | No | The flow.json file to upload. The file name should be 'flow.json'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update WhatsApp Cloud API Settings

**Slug:** `WHATSAPP_UPDATE_SETTINGS`

Update Cloud API settings for a WhatsApp Business phone number. Use this action to modify calling features, user identity verification settings, payload encryption configuration, and data storage preferences for a specific WhatsApp Business phone number. Note: Only one setting type can be updated per request (calling, user_identity_change, payload_encryption, or storage_configuration). The API uses a oneOf schema, so including multiple setting types will result in an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calling` | object | No | Calling feature settings. |
| `phone_number_id` | string | Yes | The WhatsApp Business phone number ID (e.g., '712594308615206'). Get this from the WHATSAPP_GET_PHONE_NUMBERS action. |
| `payload_encryption` | object | No | Payload encryption settings. |
| `user_identity_change` | object | No | User identity change settings. |
| `storage_configuration` | object | No | Storage configuration settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload media

**Slug:** `WHATSAPP_UPLOAD_MEDIA`

Upload media files (images, videos, audio, documents, stickers) to WhatsApp servers. The uploaded media gets a media ID that can be used in send_media or other messaging actions. Supported formats: - Images: JPEG, PNG (max 5MB) - Videos: MP4, 3GPP (max 16MB) - Audio: AAC, M4A, AMR, MP3, OGG (max 16MB) - Documents: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX (max 100MB) - Stickers: WebP (max 500KB, 512x512 pixels)

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `media_type` | string ("image" | "video" | "audio" | "document" | "sticker") | Yes | Type of media being uploaded: image, video, audio, document, or sticker. |
| `file_to_upload` | object | Yes | Media file to upload to WhatsApp (max 16MB for most types, 100MB for videos). |
| `phone_number_id` | string | Yes | The phone number ID to upload media for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert message template

**Slug:** `WHATSAPP_UPSERT_MESSAGE_TEMPLATE`

Create or update a message template for the WhatsApp Business Account. Use this action when you need to create a new message template or update an existing one with the same name. If a template with the same name and language exists, it will be updated. Otherwise, a new template will be created. Templates must be approved by WhatsApp before they can be used. Templates are required for marketing messages and messages sent outside the 24-hour window.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique template name. Must be lowercase, alphanumeric with underscores only. Maximum 512 characters. Example: 'order_confirmation_v1'. |
| `waba_id` | string | No | WhatsApp Business Account ID. If not provided, uses the waba_id from your connection configuration. |
| `category` | string ("AUTHENTICATION" | "MARKETING" | "UTILITY") | Yes | Template category. AUTHENTICATION: for OTP/verification codes. MARKETING: for promotional content (requires opt-in). UTILITY: for transactional updates like order status, appointments. |
| `language` | string | Yes | Template language code in ISO 639-1 format with country code. Examples: 'en_US' (US English), 'es_ES' (Spanish), 'pt_BR' (Brazilian Portuguese). |
| `components` | array | Yes | List of template components. Must include at least one BODY component. Can optionally include one HEADER, one FOOTER, and one BUTTONS component. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify Phone Number OTP Code

**Slug:** `WHATSAPP_VERIFY_CODE`

Verify the OTP code for a pre-verified phone number. Use when you need to complete phone number verification by submitting the received OTP code. The phone number must first be added to your WhatsApp Business Account and a verification code must have been requested through the setup process. This action completes the verification by submitting the 6-digit code received via SMS or voice call. Note: This action verifies a phone number that has been pre-verified and is awaiting OTP confirmation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | 6-digit verification code received via SMS or voice call. The code must be exactly 6 digits. |
| `phone_number_id` | string | Yes | The ID of the phone number to verify. This ID is provided when the phone number is added to your WhatsApp Business Account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `WHATSAPP_WHO_AM_I`

Return the identity (name) of the connected WhatsApp (Meta) account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Message Status Updated

**Slug:** `WHATSAPP_MESSAGE_STATUS_UPDATED_TRIGGER`

**Type:** poll

Triggers when a WhatsApp message status changes.

IMPORTANT LIMITATION:
WhatsApp Cloud API does not provide a native polling endpoint for message status.
Status updates are ONLY delivered via webhooks in real-time. This trigger cannot
directly poll the WhatsApp API for status updates.

This trigger will return empty results as WhatsApp does not support this operation.
To track message status updates, you must:
1. Set up a webhook endpoint to receive status notifications from WhatsApp
2. Store the webhook data in your own database
3. Use a different mechanism to query your stored webhook data

For more information, see:
- https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `max_results` | integer | No | Maximum number of status updates to retrieve in each poll (1-100). |
| `phone_number_id` | string | Yes | The Meta-assigned numeric ID for the WhatsApp Business phone number to monitor. This is NOT the actual phone number itself - it is a numeric ID (e.g., '712594308615206') assigned by Meta. Obtain it using WHATSAPP_GET_PHONE_NUMBERS action which returns the 'id' field for each phone number. |
| `status_filter` | string | No | Optional: Filter by specific status. Valid values: 'sent', 'delivered', 'read', 'failed'. Leave empty to monitor all status changes. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of event that occurred |
| `phone_number_id` | string | Yes | The phone number ID that sent the message |
| `status_update` | object | Yes | The message status update information |
