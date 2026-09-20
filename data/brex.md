# Brex

Brex provides corporate credit cards, spend management, and financial tools tailored for startups and tech businesses to optimize cash flow, accounting, and growth

- **Category:** accounting
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** No
- **Tools:** 84
- **Triggers:** 0
- **Slug:** `BREX`
- **Version:** 20260826_00

## Tools

### Add Webhook Group Members

**Slug:** `BREX_ADD_WEBHOOK_GROUP_MEMBERS`

Add webhook subscription members to a webhook group. This action associates one or more webhook subscriptions with an existing webhook group, allowing those subscriptions to receive events targeted at the group. Note: Webhook groups are only available for Brex partner accounts. Requires an existing webhook group ID and valid webhook subscription IDs. Use this when you need to organize webhook subscriptions into groups for easier management of webhook events across multiple subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook group to add members to. This should be a webhook group ID starting with 'wg_'. |
| `members` | array | Yes | List of webhook subscriptions to add to the group. Each member should have a member_id (webhook subscription ID) and member_type ('ACCOUNT'). At least one member is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive Budget

**Slug:** `BREX_ARCHIVE_BUDGET`

Archive a budget to mark it as inactive and prevent future expenses. Archives the specified budget, making it unusable for new transactions and removing it from active budget lists in the UI. This action is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `budget_id` | string | Yes | ID of the budget to archive. Once archived, the budget will be marked as inactive and cannot be used for future expenses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive Spend Limit

**Slug:** `BREX_ARCHIVE_SPEND_LIMIT`

Archive a spend limit in Brex. Archives an existing spend limit to remove it from active use, making it unusable for future expenses and hiding it from the UI. Once archived, the spend limit cannot be used to authorize new transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the spend limit to archive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Budget

**Slug:** `BREX_CREATE_BUDGET`

Create a new budget for departments or projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the budget. |
| `description` | string | Yes | Description of the budget. |
| `budget_amount` | object | Yes | Budget amount and currency. |
| `owner_user_ids` | array | No | List of user IDs who own this budget. |
| `parent_budget_id` | string | Yes | Parent budget ID. All budgets must be sub-budgets of an existing budget. |
| `period_recurrence_type` | string | No | Budget period recurrence type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Spend Limit (Budget V1)

**Slug:** `BREX_CREATE_BUDGET_V1`

Tool to create a new Spend Limit (Budget) in Brex. Use when you need to set up spending controls with specific limits, visibility settings, and period types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the Spend Limit. |
| `limit` | object | Yes | The spending limit amount and currency for this budget. |
| `end_date` | string | No | The UTC date when the Spend Limit should stop counting, in YYYY-MM-DD format. |
| `entity_id` | string | No | Optional entity ID to associate with this budget. |
| `policy_id` | string | No | Optional policy ID to associate with this budget. |
| `limit_type` | string ("HARD" | "SOFT") | Yes | Whether the Spend Limit's limit blocks spend. HARD limits block transactions when exceeded, SOFT limits allow overspending but provide warnings. |
| `spend_type` | string ("BUDGET_PROVISIONED_CARDS_ONLY" | "NON_BUDGET_PROVISIONED_CARDS_ALLOWED") | Yes | Whether this Spend Limit only can be spent from by cards provisioned by this Spend Limit. BUDGET_PROVISIONED_CARDS_ONLY restricts spending to cards created under this budget, while NON_BUDGET_PROVISIONED_CARDS_ALLOWED permits other cards to use this budget. |
| `start_date` | string | No | The UTC date when the Spend Limit should start counting, in YYYY-MM-DD format. |
| `description` | string | Yes | Description of what the Spend Limit is used for. |
| `period_type` | string ("WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "ONE_TIME") | Yes | Period type of the Spend Limit. Options: WEEKLY, MONTHLY, QUARTERLY, YEARLY, ONE_TIME. |
| `owner_user_ids` | array | No | User IDs of the owners of the Spend Limit. Owners have full control over the budget. |
| `idempotency_key` | string | No | Idempotency key for the request. For retry safety, clients should generate, store, and reuse the same key when retrying failed operations. If not provided, a UUID will be auto-generated. Recommended format: V4 UUID. |
| `member_user_ids` | array | No | User IDs of the members of the Spend Limit. Members can spend from the budget but may have restricted visibility/control. |
| `limit_visibility` | string ("SHARED" | "PRIVATE") | Yes | Determines if Spend Limit members are allowed to view the Spend Limit's limit. SHARED makes the limit visible to all members, PRIVATE hides it. |
| `parent_budget_id` | string | Yes | ID of parent Budget. All budgets must have a parent budget. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Card

**Slug:** `BREX_CREATE_CARD`

Create a new card and assign it to a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_name` | string | Yes | Display name for the card. |
| `card_type` | string ("VIRTUAL" | "PHYSICAL") | No | Type of card to create. Note: PHYSICAL cards require limit_type='USER' (card-level limits not allowed for physical cards). |
| `limit_type` | string ("CARD" | "USER") | No | Type of spend limit. 'CARD' sets card-specific limits (requires spend_controls, only valid for VIRTUAL cards). 'USER' inherits the user's spend limit. |
| `owner_user_id` | string | Yes | User ID of the card owner. |
| `spend_controls` | object | No | Spend control settings for card creation. Required when limit_type is 'CARD'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Department

**Slug:** `BREX_CREATE_DEPARTMENT`

Create a new department.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the department |
| `description` | string | No | Description of the department |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Document Upload for Referral

**Slug:** `BREX_CREATE_DOCUMENT`

Create a document upload URL for a referral and return a pre-signed S3 upload URL. Use this tool when you need to upload supporting documents for a business referral application. The tool returns a pre-signed S3 URL that can be used to upload document files (PDF, JPG, PNG, etc.) up to 50 MB. The pre-signed URL expires 30 minutes after creation and can only be used for a PUT operation. Supported document types: - ARTICLES_OF_INCORPORATION: Company incorporation documents - IRS_EIN_CONFIRMATION: IRS CP 575 or 147C form (EIN confirmation letter) - IRS_EIN_APPLICATION: IRS SS4 form (Application for Employer Identification Number) - CERTIFICATE_GOOD_STANDING: Certificate of good standing from the state

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the referral to upload documents for. This must be a valid referral ID from the Brex system. |
| `type` | string ("ARTICLES_OF_INCORPORATION" | "IRS_EIN_CONFIRMATION" | "IRS_EIN_APPLICATION" | "CERTIFICATE_GOOD_STANDING") | Yes | Type of document being submitted. ARTICLES_OF_INCORPORATION for company incorporation documents, IRS_EIN_CONFIRMATION for IRS CP 575 or 147C form, IRS_EIN_APPLICATION for IRS SS4 form, or CERTIFICATE_GOOD_STANDING for certificate of good standing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Expense

**Slug:** `BREX_CREATE_EXPENSE`

Create a new expense.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | Yes | Memo for the expense |
| `amount` | object | Yes | Expense amount and currency |
| `owner_user_id` | string | Yes | User ID of the expense owner |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Field

**Slug:** `BREX_CREATE_FIELD`

Create a new custom field in Brex. Use when you need to add custom metadata fields for accounting or ERP integrations. Fields can be associated with specific integrations and can be enabled or disabled as needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the field |
| `group` | string ("ACCOUNTING" | "ERP") | Yes | Field group category. Must be either ACCOUNTING or ERP. |
| `remote_id` | string | No | Remote/external ID of custom field from external system (e.g. ERP or HRIS system) |
| `is_disabled` | boolean | No | Indicates if the field is disabled. If true, the field will not be available for use. |
| `integration_id` | string | No | Integration ID to associate this field with a specific integration |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Field Values

**Slug:** `BREX_CREATE_FIELD_VALUES`

Create custom field values for a specific Brex field. Use when you need to add new dropdown options or values to a custom field (up to 1000 values per request). This action allows you to bulk-create field values for custom fields in Brex. Custom fields are used throughout Brex for categorizing expenses, cards, budgets, and other entities. Each value can have a custom ID, be marked as disabled, and include an external system reference for integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | List of field values to be created. Must contain at least 1 item and no more than 1000 items |
| `field_id` | string | Yes | The Field Brex identifier. This is the unique ID of the custom field for which you want to create values |
| `idempotency_key` | string | No | Idempotency key for this request. If not provided, a UUID will be auto-generated. Use this to safely retry requests without creating duplicate values |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Location

**Slug:** `BREX_CREATE_LOCATION`

Create a new location.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the location |
| `description` | string | No | Description of the location |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Referral Request

**Slug:** `BREX_CREATE_REFERRAL_REQUEST`

Tool to create a new referral to Brex for onboarding. Use when you want to refer a prospect to Brex and get a personalized application link. The response contains a unique referral ID and a personalized signup URL. Many fields are optional; when provided, they prefill the application form for the prospect. The referral link expires after a certain time period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `business` | object | No | Business details for the referral application. |
| `applicant` | object | Yes | Required information about the referred prospect including email, first name, and last name. |
| `referral_code` | string | Yes | Referral code that attributes credit to you if the prospect signs up for a Brex account. |
| `contact_preference` | string | No | Optional contact preference for the referral. Use 'EMAIL_OUTBOUND' if Brex should email the customer directly, or 'NO_OUTBOUND' if partner will contact (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Spend Limit

**Slug:** `BREX_CREATE_SPEND_LIMIT`

Tool to create a spend limit in Brex. Use when you need to establish spending controls with authorization settings, visibility rules, and policy associations. Requires expense policy ID and authorization settings. Optionally link to parent budget.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the Spend Limit. |
| `end_date` | string | No | The date when the Spend Limit should expire (format: YYYY-MM-DD). |
| `spend_type` | string ("NON_BUDGET_PROVISIONED_CARDS_ALLOWED" | "BUDGET_PROVISIONED_CARDS_ONLY" | "NON_BUDGET_PROVISIONED_CARDS_ONLY") | Yes | Type of spending allowed under this limit. |
| `start_date` | string | No | The date when the Spend Limit should start counting (format: YYYY-MM-DD). |
| `description` | string | No | Description of what the Spend Limit is used for. |
| `department_id` | string | No | The department ID to which Spend Limit expenses will be attributed. |
| `owner_user_ids` | array | No | User IDs of the owners of the Spend Limit. |
| `idempotency_key` | string | No | Optional idempotency key for the request. If not provided, a random UUID will be generated. |
| `legal_entity_id` | string | No | The legal entity ID to which Spend Limit expenses will be attributed. If not set, expenses will be attributed to the spending user's entity. |
| `member_user_ids` | array | No | User IDs of the members of the Spend Limit. |
| `parent_budget_id` | string | No | ID of parent Budget. Required if not creating a root budget. |
| `expense_policy_id` | string | Yes | The ID of the expense policy corresponding to this Spend Limit. |
| `transaction_limit` | object | No | Transaction limit for the spend limit. |
| `expense_visibility` | string ("PRIVATE" | "PUBLIC") | Yes | Expense visibility setting: 'PRIVATE' or 'PUBLIC'. |
| `authorization_settings` | object | Yes | Authorization settings including limit amount and type. |
| `limit_increase_setting` | string ("ENABLED" | "DISABLED") | Yes | Setting to allow or disallow limit increase requests. |
| `period_recurrence_type` | string ("PER_MONTH" | "PER_QUARTER" | "PER_YEAR" | "ONE_TIME") | Yes | Period recurrence type for the spend limit. |
| `authorization_visibility` | string ("PRIVATE" | "PUBLIC") | Yes | Authorization visibility setting: 'PRIVATE' or 'PUBLIC'. |
| `limit_approval_policy_id` | string | No | The ID of the policy for limit increase approval requests. Meant to replace limit_increase_request_policy_id. |
| `auto_transfer_cards_setting` | string ("ENABLED" | "DISABLED") | Yes | Setting to enable or disable automatic card transfers. |
| `auto_create_limit_cards_setting` | string ("ENABLED" | "DISABLED") | Yes | Setting to enable or disable automatic card creation for this limit. |
| `limit_increase_request_policy_id` | string | No | The ID of the policy for limit increase requests for this Spend Limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Job Title

**Slug:** `BREX_CREATE_TITLE`

Create a new job title.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the job title |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User

**Slug:** `BREX_CREATE_USER`

Create a new user in the Brex account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Email address of the user |
| `last_name` | string | Yes | Last name of the user |
| `first_name` | string | Yes | First name of the user |
| `manager_id` | string | No | User ID of the manager (optional). This should be the ID of an existing user in the system. |
| `department_id` | string | No | Department ID to assign the user to (optional). This should be the ID of an existing department in the system. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Vendor

**Slug:** `BREX_CREATE_VENDOR`

Create a new vendor in Brex for payment operations. The vendor company name must be unique within your Brex account - attempting to create a vendor with a duplicate name will result in an error. You can optionally include contact information (email, phone) and payment account details (ACH, wire transfer, or check) at creation time. Returns a vendor ID that can be used in transfer operations and other vendor-related actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Email address for the vendor. |
| `phone` | string | No | Phone number for the vendor. |
| `company_name` | string | Yes | Name for the vendor. The name must be unique. |
| `payment_accounts` | array | No | Payment accounts to associate with the vendor. Each account contains payment details based on the payment type (ACH, wire transfer, or check). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook Group

**Slug:** `BREX_CREATE_WEBHOOK_GROUP`

Tool to create a webhook group for targeting webhook subscriptions. Use when you need to create a webhook group to organize webhook subscriptions for specific members. Webhook groups are only available for partners.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the webhook group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook Subscription

**Slug:** `BREX_CREATE_WEBHOOK_SUBSCRIPTION`

Register a new webhook subscription to receive real-time notifications for Brex events. This allows you to be notified via HTTPS POST requests when events occur, such as USER_UPDATED, EXPENSE_PAYMENT_UPDATED, TRANSFER_PROCESSED, TRANSFER_FAILED, and others. Note: Currently only one webhook endpoint can be registered per customer/client_id, though each endpoint can handle multiple event types. Requires 'openid' and 'offline_access' OAuth scopes, plus event-specific scopes (e.g., 'expenses.card.readonly' for EXPENSE_PAYMENT_UPDATED).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to which webhook events will be sent. Must be a valid, publicly accessible HTTPS URL that can receive POST requests with webhook event payloads. |
| `group_id` | string | No | ID of the webhook group to which this subscription applies. This is only available for partners. Leave empty for subscriptions not tied to a specific group. |
| `event_types` | array | Yes | A list of the webhook event types this subscription will listen to. Must contain at least one event type. Valid event types include: REFERRAL_CREATED, REFERRAL_ACTIVATED, REFERRAL_APPLICATION_STATUS_CHANGED, TRANSFER_PROCESSED, TRANSFER_FAILED, USER_UPDATED, EXPENSE_PAYMENT_UPDATED, and others. Refer to Brex API documentation for the complete list of supported event types and their required scopes. |
| `idempotency_key` | string | Yes | Unique idempotency key to ensure the request is processed only once. Use a unique value for each subscription creation attempt. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Field

**Slug:** `BREX_DELETE_FIELD`

Tool to delete a custom field by Brex ID. Use when you need to permanently remove a custom field from the system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Brex identifier of the field to delete. This is the field ID that was returned when the field was created or listed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Field Values

**Slug:** `BREX_DELETE_FIELD_VALUES`

Delete custom field values for a specific field. You can delete up to 1000 values at once. Each value must be identified by exactly one of: brex_id (Brex-generated ID), value_id (value identifier), or remote_id (external system ID). Use this when you need to bulk delete field values from a custom field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | List of field values to delete. Each item must contain exactly one identifier (brex_id, value_id, or remote_id). Maximum 1000 items allowed. |
| `field_id` | string | Yes | The Field Brex identifier. This is the unique ID of the field whose values you want to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Vendor

**Slug:** `BREX_DELETE_VENDOR`

Delete a vendor by ID. Use this when you need to remove a vendor from the system. The vendor must exist and not have any pending transactions or dependencies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the vendor to delete. This is the vendor ID that was returned when the vendor was created or listed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Statements

**Slug:** `BREX_GET_ACCOUNT_STATEMENTS`

Get finalized statements for the primary cash account. Returns statement history including start and end balances for each statement period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of statements to return. Valid range: 1-1000. |
| `cursor` | string | No | Pagination cursor returned from a previous request. Leave empty for the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Budget Details

**Slug:** `BREX_GET_BUDGET_DETAILS`

Get detailed information about a specific budget. This action retrieves comprehensive budget details including balance, limits, ownership, and period information from the Brex v2 Budgets API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `budget_id` | string | Yes | ID of the budget to get details for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Details

**Slug:** `BREX_GET_CARD_DETAILS`

Get detailed information about a specific card.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | The unique identifier of the card. Use the List Cards action to retrieve available card IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Expense

**Slug:** `BREX_GET_CARD_EXPENSE`

Tool to retrieve detailed information about a specific card expense by its ID. Use when you need to get comprehensive details about a card transaction, including merchant information, amounts, status, and other expense metadata. Supports expanding additional fields like merchant MCC code, location, department, user, budget, and payment details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | List of fields to expand in the response. Available options: 'location', 'department', 'merchant', 'receipts.download_uris', 'user', 'budget', 'payment'. When specified, additional details for these fields will be included in the response. |
| `expense_id` | string | Yes | Unique ID of the card expense to retrieve. |
| `load_custom_fields` | boolean | No | If true, custom fields associated with the expense will be included in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Number

**Slug:** `BREX_GET_CARD_NUMBER`

Get card number, CVV, and expiration date for a specific card.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | ID of the card to get number details for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Transactions

**Slug:** `BREX_GET_CARD_TRANSACTIONS`

Get settled card transactions for the primary card account. Returns purchases, refunds, and chargebacks that have been posted/settled. Use the next_cursor field in the response for pagination to retrieve additional results. No server-side date filtering is supported; filter by posted_at_date client-side after fetching. For large accounts, process pages incrementally rather than accumulating all results in memory.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of transactions to return (1-1000) |
| `cursor` | string | No | Pagination cursor from a previous response's next_cursor field. Pass this to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Cash Accounts

**Slug:** `BREX_GET_COMPANY_CASH_ACCOUNTS`

Retrieve all cash (deposit) accounts for the company. Returns account details including balances, account numbers, routing numbers, and status. Use this to view available cash accounts, check balances, or get account information for transfers. Each Brex account has at least one primary cash account. Requires the 'accounts.cash.readonly' scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of cash accounts to return per page. Must be between 1 and 1000. |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from a previous response to get the next page of results. Leave empty for the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Details

**Slug:** `BREX_GET_COMPANY_DETAILS`

Get company information associated with the OAuth2 access token. Returns details including company ID, legal name, account type, and mailing address.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Department By ID

**Slug:** `BREX_GET_DEPARTMENT_BY_ID`

Get detailed information about a specific department by ID. Use when you need to retrieve department details for a given department identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the department to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Expense

**Slug:** `BREX_GET_EXPENSE`

Tool to get details of a specific expense by ID. Use when you need to retrieve complete information about an expense including merchant details, receipts, budget allocation, and payment status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID of the expense to retrieve |
| `expand` | array | No | Get additional details for the expense by passing in expand fields. Available options: 'location', 'department', 'merchant', 'receipts.download_uris', 'user', 'budget', 'payment' |
| `load_custom_fields` | boolean | No | Load custom fields for the expense |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Field By ID

**Slug:** `BREX_GET_FIELD_BY_ID`

Tool to retrieve a custom field by its Brex ID. Use when you need detailed information about a specific custom field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Brex identifier of the field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Field Value By ID

**Slug:** `BREX_GET_FIELD_VALUE_BY_ID`

Tool to retrieve a specific field value by field ID and field value ID. Use when you need details about a custom field value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `brex_id` | string | Yes | The field value ID (brex_id) to retrieve |
| `field_id` | string | Yes | The Field Brex identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Legal Entity

**Slug:** `BREX_GET_LEGAL_ENTITY`

Tool to retrieve a legal entity by its ID from Brex. Use when you need detailed information about a specific legal entity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the legal entity to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Location By ID

**Slug:** `BREX_GET_LOCATION_BY_ID`

Get detailed information about a specific location by ID. Use when you need to retrieve location details for a given location identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the location to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Referral By ID

**Slug:** `BREX_GET_REFERRAL`

Tool to retrieve a specific referral by its ID from Brex. Use when you need to check the status of a referral or get the signup URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the referral to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Spend Limit By ID

**Slug:** `BREX_GET_SPEND_LIMIT_BY_ID`

Tool to get detailed information about a specific spend limit by its ID. Use when you need to retrieve the configuration, status, balance, or settings of a particular spend limit.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID of the spend limit to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Spend Limits

**Slug:** `BREX_GET_SPEND_LIMITS`

Get spend limits configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of spend limits to return |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Title by ID

**Slug:** `BREX_GET_TITLE_BY_ID`

Get detailed information about a specific job title by ID. Use when you need to retrieve title details for a given title identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the job title to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transaction by ID

**Slug:** `BREX_GET_TRANSACTION_BY_ID`

Get details of a specific transaction by ID. Retrieves detailed information about a card transaction including amount, merchant details, dates, and metadata. This action searches through recent transactions to find the one matching the provided ID. Note: Very old transactions may not be retrievable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transaction_id` | string | Yes | ID of the transaction to retrieve. Transaction IDs can be obtained from the 'Get Transactions' action and follow the format 'pste_...' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Transactions

**Slug:** `BREX_GET_TRANSACTIONS`

Get card transactions from the primary Brex account. Retrieves settled card transactions including purchases, refunds, chargebacks, and collections. Returns transaction details with merchant information, amounts, dates, and associated metadata. Supports pagination for handling large result sets. Note: The Brex API does not support server-side date filtering. Date filtering (posted_at_start/posted_at_end) is performed client-side by filtering the posted_at_date field in the response. When using date filters, paginate through all pages by following next_cursor until exhausted before applying date range filtering locally — stopping early will cause in-range transactions to be missed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of transactions to return (1-1000) |
| `cursor` | string | No | Cursor for pagination to get the next page of results |
| `posted_at_end` | string | No | End date for filtering transactions (client-side). Format: YYYY-MM-DD (e.g., 2024-12-31). |
| `posted_at_start` | string | No | Start date for filtering transactions (client-side). Format: YYYY-MM-DD (e.g., 2024-01-01). Avoid overly long or future date ranges, which can trigger a 400 BAD_REQUEST; omit the parameter and filter posted_at_date locally instead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transactions by Amount Range

**Slug:** `BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE`

Get card transactions filtered by amount range and date period. This action retrieves settled card transactions within a specified amount range (min to max in USD) and date period. Useful for finding transactions of specific values, expense analysis, budget tracking, or identifying large purchases. The action performs client-side filtering to return only transactions matching both the amount and date criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of transactions to return in the response. Default is 100, maximum is 1000. |
| `cursor` | string | No | Pagination cursor from a previous response. Leave empty for the first request. Use the next_cursor value from the response to fetch the next page of results. |
| `max_amount` | number | Yes | Maximum transaction amount in USD (e.g., 1000.00 for $1000.00). Transactions with amounts greater than this will be excluded. |
| `min_amount` | number | Yes | Minimum transaction amount in USD (e.g., 50.00 for $50.00). Transactions with amounts less than this will be excluded. |
| `posted_at_end` | string | Yes | End date for filtering transactions (inclusive) in YYYY-MM-DD format. Only transactions posted on or before this date will be included. |
| `posted_at_start` | string | Yes | Start date for filtering transactions (inclusive) in YYYY-MM-DD format. Only transactions posted on or after this date will be included. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Transactions by Description

**Slug:** `BREX_GET_TRANSACTIONS_BY_DESCRIPTION`

Search and filter card transactions by description text. This action retrieves transactions from the primary card account and filters them by description (case-insensitive partial match) and date range. Useful for finding all transactions from a specific merchant or category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of transactions to return |
| `cursor` | string | No | Cursor for pagination |
| `description` | string | Yes | Description text to search for in transactions. Performs case-insensitive partial matching against transaction descriptions (e.g., 'Amazon' matches 'Amazon.com', 'uber' matches 'Uber Eats') |
| `posted_at_end` | string | Yes | End date for filtering transactions in YYYY-MM-DD format. Only transactions posted on or before this date will be included. |
| `posted_at_start` | string | Yes | Start date for filtering transactions in YYYY-MM-DD format. Only transactions posted on or after this date will be included. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Limit

**Slug:** `BREX_GET_USER_LIMIT`

Retrieves the monthly spending limit and available balance for a specific Brex user. Use this action when you need to check how much a user is allowed to spend per month and how much of that limit remains available. Returns empty if no spending limit has been configured for the user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the user whose spending limit information to retrieve. Must be a valid Brex user ID starting with 'cuuser_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User Profile

**Slug:** `BREX_GET_USER_PROFILE`

Get user profile information from Brex Team API. Returns the user profile associated with the OAuth2 access token when using 'me', or retrieves a specific user's profile when providing a user ID. Requires 'users.readonly' or 'users' OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | No | User ID to get profile for. Use 'me' to get the profile of the currently authenticated user, or provide a specific user ID to get another user's profile. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vendor By ID

**Slug:** `BREX_GET_VENDOR_BY_ID`

Tool to get vendor details by ID. Use when you need to retrieve information about a specific vendor including payment accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique vendor identifier. Can be obtained from the list_vendors endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook Group

**Slug:** `BREX_GET_WEBHOOK_GROUP`

Tool to retrieve details of a specific webhook group by ID. Use when you need to get information about a webhook group including its name and identifier. Webhook groups allow webhook subscriptions to target specific members, providing granular control over webhook delivery. This feature is only available for Brex partners. Returns the webhook group's ID and name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook group to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook Subscription

**Slug:** `BREX_GET_WEBHOOK_SUBSCRIPTION`

Tool to retrieve details of a specific webhook subscription by ID. Use this when you need to: - Get information about an existing webhook subscription - Verify webhook configuration (URL, event types, status) - Check if a webhook subscription is active or inactive - Retrieve the webhook group ID for partner integrations Returns the webhook subscription's ID, URL, event types, status (ACTIVE/INACTIVE), and optionally the webhook group ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the webhook subscription to retrieve. This ID is returned when creating a webhook subscription. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Budget Programs

**Slug:** `BREX_LIST_BUDGET_PROGRAMS`

Tool to list all budget programs in the organization. Use when you need to retrieve budget programs that define spend limits for eligible users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of budget programs to return per page |
| `cursor` | string | No | Cursor for pagination to retrieve the next page of results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Budgets

**Slug:** `BREX_LIST_BUDGETS`

List all budgets and show available amounts across all cards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of budgets to return |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Card Accounts

**Slug:** `BREX_LIST_CARD_ACCOUNTS`

Tool to list all card accounts for the company. Use when you need to retrieve information about card accounts, including balances and statement periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of card accounts to return per request. Must be between 1 and 1000. |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from the previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Cards

**Slug:** `BREX_LIST_CARDS`

List all cards associated with the account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of cards to return |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from a previous response to retrieve the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Card Statements

**Slug:** `BREX_LIST_CARD_STATEMENTS`

Tool to list finalized statements for primary card accounts. Use when you need to retrieve statement history for primary card accounts including balances and statement periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of statements to return per request. Must be between 1 and 1000. |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from the previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Departments

**Slug:** `BREX_LIST_DEPARTMENTS`

List all departments in the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of departments to return |
| `cursor` | string | No | Cursor for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Expenses

**Slug:** `BREX_LIST_EXPENSES`

Tool to list expenses from the Brex platform. Use when you need to retrieve expenses with various filters such as user, budget, date ranges, or status. Supports pagination and expandable fields for additional details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Controls the maximum number of expenses returned in the response. Cannot be greater than 1000. |
| `cursor` | string | No | The cursor to use for pagination. This is the next_cursor value returned from the previous response. |
| `expand` | array | No | Get additional details for the expense by passing in expand options. Available options: 'location', 'department', 'merchant', 'receipts.download_uris', 'user', 'budget', 'payment'. Example: ['merchant', 'location'] |
| `status` | array | No | Filter expenses by status(es). |
| `user_id` | array | No | Get expenses belong to provided user(s). Filter by user IDs. |
| `budget_id` | array | No | Filter expenses by budget ID(s). |
| `expense_type` | array | No | Filter expenses by expense type(s). |
| `payment_status` | array | No | Filter expenses by payment status(es). |
| `updated_at_end` | string | No | Shows only expenses with an updated_at on or before this date-time. Use RFC 3339 date-time format (e.g., 2023-01-10T23:59:59.999). |
| `purchased_at_end` | string | No | Shows only expenses with a purchased_at on or before this date-time. Use RFC 3339 date-time format (e.g., 2023-01-10T23:59:59.999). |
| `updated_at_start` | string | No | Shows only expenses with an updated_at on or after this date-time. Use RFC 3339 date-time format (e.g., 2023-01-01T23:59:59.999). |
| `parent_expense_id` | array | No | Get itemized expenses belong to provided parent expenses ID(s). |
| `load_custom_fields` | boolean | No | Load custom fields for the expenses. |
| `purchased_at_start` | string | No | Shows only expenses with a purchased_at on or after this date-time. Use RFC 3339 date-time format (e.g., 2023-01-01T23:59:59.999). |
| `spending_entity_id` | array | No | Filter expenses by spending entity ID(s). |
| `payment_posted_at_end` | string | No | Shows only expenses with a payment_posted_at on or before this date-time. Use RFC 3339 date-time format (e.g., 2023-01-10T23:59:59.999). |
| `payment_posted_at_start` | string | No | Shows only expenses with a payment_posted_at on or after this date-time. Use RFC 3339 date-time format (e.g., 2023-01-01T23:59:59.999). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Field Values

**Slug:** `BREX_LIST_FIELD_VALUES`

Tool to list values under a custom field. Use when you need to retrieve all values defined for a specific custom field, optionally filtering by Brex ID, value ID, remote ID, or value string.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Controls the maximum number of field values returned in the response. It can't be greater than 1000. |
| `value` | string | No | Field value's value to filter by. Use this to search for field values with a specific value string. |
| `cursor` | string | No | The cursor to use for pagination. This is the `next_cursor` value returned from the previous response. Omit this parameter to fetch the first page of results. |
| `brex_id` | array | No | Field value Brex identifier(s) to filter by. Provide one or more Brex IDs to filter the results to specific field values. |
| `field_id` | string | Yes | The Field Brex identifier. This is the unique identifier for the custom field whose values you want to list. |
| `value_id` | array | No | Field value identifier(s) to filter by. Provide one or more value IDs to filter the results. |
| `remote_id` | array | No | Field value remote identifier(s) to filter by. Provide one or more remote IDs to filter the results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Legal Entities

**Slug:** `BREX_LIST_LEGAL_ENTITIES`

Tool to list all legal entities in the Brex account with pagination support. Use when you need to retrieve all legal entities or browse through them page by page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of legal entities to return per page. If not specified, the API default will be used. |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from a previous response to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Locations

**Slug:** `BREX_LIST_LOCATIONS`

List all locations in the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of locations to return |
| `cursor` | string | No | Cursor for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Referrals

**Slug:** `BREX_LIST_REFERRALS`

Tool to list all referrals created in the Brex account. Use when you need to view or manage customer referrals. Note: This endpoint only returns active referrals and does not include expired ones.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Cursor for pagination to retrieve the next page of results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Job Titles

**Slug:** `BREX_LIST_TITLES`

List all job titles in the organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of titles to return |
| `cursor` | string | No | Cursor for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Transfers

**Slug:** `BREX_LIST_TRANSFERS`

Lists transfers for the account. Use when you need to retrieve transfer history or monitor transfer status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of transfers to return (default: 100, max: 1000) |
| `cursor` | string | No | Cursor for pagination to retrieve the next page of results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Trips

**Slug:** `BREX_LIST_TRIPS`

Lists trips according to the filters passed in the query string. Use when you need to retrieve trip history or monitor trip status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of trips to return (default: 100, max: 1000) |
| `cursor` | string | No | Cursor for pagination to retrieve the next page of results |
| `last_updated_after` | string | No | Filter trips updated after this timestamp in ISO 8601 format (e.g., '2024-01-01T00:00:00Z') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `BREX_LIST_USERS`

List all users in the Brex account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of users to return |
| `cursor` | string | No | Cursor for pagination. Pass the next_cursor value from a previous response to retrieve the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vendors

**Slug:** `BREX_LIST_VENDORS`

List all vendors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of vendors to return |
| `cursor` | string | No | Cursor for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhook Group Members

**Slug:** `BREX_LIST_WEBHOOK_GROUP_MEMBERS`

Tool to list all members of a webhook group. Use when you need to retrieve the webhook subscriptions that are members of a specific webhook group. Supports pagination using cursor and limit parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook group to retrieve members for. |
| `limit` | integer | No | Limit for pagination. If not provided, defaults to 100. Cannot be greater than 1000. |
| `cursor` | string | No | Cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhook Groups

**Slug:** `BREX_LIST_WEBHOOK_GROUPS`

Tool to list all webhook groups. Use when you need to retrieve all webhook groups in the system. Webhook groups allow subscriptions to target specific members and are only available for Brex partners. Supports pagination using cursor and limit parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit for pagination. If not provided, defaults to 100. Cannot be greater than 1000. |
| `cursor` | string | No | Cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhook Secrets

**Slug:** `BREX_LIST_WEBHOOK_SECRETS`

Tool to retrieve webhook signing secrets for validating incoming webhook messages from Brex. Use when you need to verify webhook authenticity. During key rotation, this may return two secrets.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhook Subscriptions

**Slug:** `BREX_LIST_WEBHOOK_SUBSCRIPTIONS`

Tool to list all registered webhook subscriptions. Use when you need to retrieve all webhook subscriptions configured in the Brex account, including their URLs, event types, and status. Supports pagination using cursor and limit parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit for pagination. If not provided, defaults to 100. Cannot be greater than 1000. |
| `cursor` | string | No | Cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Receipt Match

**Slug:** `BREX_RECEIPT_MATCH`

Creates a receipt match request and returns a pre-signed S3 upload URI. Use this when you need to upload a receipt that will be automatically matched to existing Brex card expenses. The returned URI allows secure file upload (max 50 MB) and expires 30 minutes after creation. After upload completes, Brex will automatically attempt to match the receipt with card transactions based on date, amount, and merchant information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `receipt_name` | string | Yes | The name of the receipt file including the extension (e.g., .pdf, .jpg, .png). This name will be used in the matching result email notification. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Receipt Upload for Expense

**Slug:** `BREX_RECEIPT_UPLOAD`

Creates a receipt upload request for a specific card expense and returns a pre-signed S3 upload URL. Use this tool when you need to attach a receipt to an existing Brex card expense. The tool returns a pre-signed S3 URL that can be used to upload receipt files (PDF, JPG, PNG, etc.) up to 50 MB. The pre-signed URL expires 30 minutes after creation and can only be used for a PUT operation. Requirements: - The expense_id must belong to an existing card expense in the Brex system - The expense must be accessible by the authenticated user - Receipt file names should include the file extension (e.g., 'receipt.pdf', 'invoice.jpg') Note: For uploading receipts that should be automatically matched to expenses (without specifying an expense_id), use the BREX_RECEIPT_MATCH action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expense_id` | string | Yes | The unique identifier of the card expense to attach the receipt to. This must be a valid expense ID from the Brex system, typically starting with 'expense_'. You can obtain expense IDs using the list_expenses or list_card_expenses actions. |
| `receipt_name` | string | Yes | The filename for the receipt including the file extension. Common formats include PDF (.pdf), JPEG (.jpg, .jpeg), and PNG (.png). The filename should be descriptive and must include the extension. Maximum file size for upload is 50 MB. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set User Limit

**Slug:** `BREX_SET_USER_LIMIT`

Set or update the monthly spending limit for a Brex user. The limit controls the maximum amount the user can spend per month. Set monthly_limit to null to remove an existing limit. The limit amount must be specified in the smallest currency unit (e.g., cents for USD).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the user to set the limit for. Must be a valid Brex user ID with the 'cuuser_' prefix. |
| `monthly_limit` | object | No | Monetary amount with currency. |
| `idempotency_key` | string | No | Optional idempotency key to ensure the request is processed only once. Use the same key for retries to prevent duplicate limit updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Transfer Card

**Slug:** `BREX_TRANSFER_CARD`

Transfer a card to a different user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | ID of the card to transfer |
| `new_owner_user_id` | string | Yes | User ID of the new card owner |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Budget

**Slug:** `BREX_UPDATE_BUDGET`

Update an existing budget's configuration in Brex. This action allows you to modify budget properties such as name, description, amount limits, ownership, parent budget relationships, and recurrence settings. Only the fields you provide will be updated; all other fields remain unchanged. Common use cases: - Adjust budget amounts (increase or decrease limits) - Change budget ownership or reassign to different users - Update budget names and descriptions for clarity - Modify recurrence periods (e.g., change from MONTHLY to QUARTERLY) - Reorganize budget hierarchy by changing parent budgets

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the budget. If not provided, the current name remains unchanged. |
| `amount` | object | No | Monetary amount allocated for the budget. |
| `budget_id` | string | Yes | ID of the budget to update. This is the unique identifier returned when the budget was created or listed. |
| `description` | string | No | New description for the budget. If not provided, the current description remains unchanged. |
| `owner_user_ids` | array | No | List of user IDs who should own this budget. Replaces the existing owner list. If not provided, current owners remain unchanged. |
| `idempotency_key` | string | No | Idempotency key to ensure request is processed only once. For retry safety, generate once and reuse the same key for retries. Auto-generated if not provided. Recommended format: V4 UUID. |
| `parent_budget_id` | string | No | ID of the parent budget. Used to reorganize budget hierarchy. If not provided, the parent budget relationship remains unchanged. |
| `period_recurrence_type` | string | No | Budget period recurrence type. Common values: MONTHLY, QUARTERLY, YEARLY. If not provided, current recurrence type remains unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Spend Limit (V1)

**Slug:** `BREX_UPDATE_BUDGET_V1`

Tool to update a Spend Limit (budget) using the v1 API. Use when you need to modify budget details such as name, description, owners, members, limits, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID of the Spend Limit to update. |
| `name` | string | No | Name for the Spend Limit. |
| `limit` | object | No | Monetary limit amount with currency. |
| `end_date` | string | No | The UTC date when the Spend Limit should stop counting, in YYYY-MM-DD format. |
| `limit_type` | string | No | Type of limit enforcement. |
| `spend_type` | string | No | Type of spending tracked by this Spend Limit. |
| `start_date` | string | No | The UTC date when the Spend Limit should start counting, in YYYY-MM-DD format. |
| `description` | string | No | Description of what the Spend Limit is used for. |
| `period_type` | string | No | Period type of the Spend Limit. |
| `owner_user_ids` | array | No | User IDs of the owners of the Spend Limit. |
| `idempotency_key` | string | No | Idempotency key for the request. For retry safety, clients should generate, store, and reuse the same key when retrying failed operations. If not provided, a UUID will be auto-generated. Recommended format: V4 UUID. |
| `member_user_ids` | array | No | User IDs of the members of the Spend Limit. |
| `limit_visibility` | string | No | Visibility setting for the Spend Limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Card Limits

**Slug:** `BREX_UPDATE_CARD_LIMITS`

Update spending limits and controls for a Brex card. This action allows you to modify the spending limits, duration, and lock date for cards that have limit_type=CARD. You can update one or more spend control settings while leaving others unchanged. Cards with limit_type=USER inherit limits from the user and cannot be updated with this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | Unique identifier of the card to update limits for. Must be a valid card ID from the Brex system. You can obtain card IDs using the BREX_LIST_CARDS action. |
| `spend_controls` | object | Yes | New spend control settings to apply to the card. At least one field (spend_limit, spend_duration, or lock_after_date) should be provided to make a meaningful update. Only applicable for cards with limit_type=CARD (not USER-level limits). Fields left as None will remain unchanged on the card. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Card Status

**Slug:** `BREX_UPDATE_CARD_STATUS`

Update the status of a Brex card by locking, unlocking, or terminating it. This action provides a unified interface for card status management: - Lock a card to temporarily block transactions (requires lock_reason) - Unlock a locked card to resume normal operation - Terminate a card permanently (cannot be undone) The action uses the appropriate Brex API endpoint based on the target status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("LOCKED" | "ACTIVE" | "TERMINATED") | Yes | The target status for the card. LOCKED: Temporarily disable the card (can be unlocked later). ACTIVE: Unlock a locked card to enable transactions. TERMINATED: Permanently disable the card (cannot be undone). |
| `card_id` | string | Yes | The unique identifier of the card to update (e.g., 'ncard_abc123'). You can obtain card IDs from the List Cards action. |
| `lock_reason` | string ("CARD_DAMAGED" | "CARD_LOST" | "CARD_NOT_RECEIVED" | "DO_NOT_NEED_PHYSICAL_CARD" | "DO_NOT_NEED_VIRTUAL_CARD" | "OTHER") | No | Valid reasons for locking a card. |
| `lock_description` | string | No | Optional description providing additional context when locking a card. Maximum 300 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Expense

**Slug:** `BREX_UPDATE_EXPENSE`

Tool to update an expense by its ID. Use when you need to modify expense details such as memo, location, department, or category. You can update one or multiple fields in a single request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | Expense memo to update. Provide a string to set or update the memo, or explicitly set to empty string to clear it. |
| `category` | string | No | Expense category to classify the expense. Common categories include expense types like ADVERTISING_AND_MARKETING, MEALS_AND_ENTERTAINMENT, etc. |
| `expense_id` | string | Yes | ID of the expense to update |
| `location_id` | string | No | Location ID to associate with the expense. Provide a valid location ID to update. |
| `department_id` | string | No | Department ID to associate with the expense. Provide a valid department ID to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Field

**Slug:** `BREX_UPDATE_FIELD`

Tool to update a custom field in Brex. Use when you need to modify a field's name or disable/enable it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Brex identifier of the field to update |
| `name` | string | No | The name of the field |
| `is_disabled` | boolean | No | Indicates if the field is disabled |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Field Values

**Slug:** `BREX_UPDATE_FIELD_VALUES`

Tool to update custom field values in Brex for a specific field. Use when you need to modify existing field values, supporting batch updates of up to 1000 values at once. Each value can be identified by brex_id (entity identifier), value_id (field value ID), or remote_id (external system ID). The API will update the field values and return the complete updated state including metadata like updated_at timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | List of field values to update. Each item must specify exactly one identifier (brex_id, value_id, or remote_id) and the new value data. Maximum 1000 items per request. |
| `field_id` | string | Yes | The unique identifier of the custom field whose values you want to update. Must be a valid field ID from Brex. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Spend Limit

**Slug:** `BREX_UPDATE_SPEND_LIMIT`

Updates an existing Brex spend limit by its ID. Allows modifying spend limit properties including name, description, status (ACTIVE/INACTIVE), period settings, authorization controls, spending limits, merchant restrictions, member/owner assignments, and policy associations. At least one optional field must be provided to update. Requires the spend limit ID from BREX_GET_SPEND_LIMITS or creation actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique ID of the spend limit to update. |
| `name` | string | No | Name for the Spend Limit. |
| `status` | string | No | Status of the spend limit. Use 'ACTIVE' to enable spending, 'INACTIVE' to temporarily pause/disable spending without archiving the limit. |
| `end_date` | string | No | The date when the Spend Limit should expire, in ISO 8601 date format (YYYY-MM-DD). |
| `spend_type` | string | No | Controls what types of spending are allowed. 'NON_BUDGET_PROVISIONED_CARDS_ALLOWED' allows both budget cards and regular cards, 'BUDGET_PROVISIONED_CARDS_ONLY' restricts to only budget-provisioned cards, 'NON_BUDGET_PROVISIONED_CARDS_ONLY' allows only non-budget cards. |
| `start_date` | string | No | The date when the Spend Limit should start counting, in ISO 8601 date format (YYYY-MM-DD). |
| `description` | string | No | Description of what the Spend Limit is used for. |
| `department_id` | string | No | The department ID to which Spend Limit expenses will be attributed. |
| `owner_user_ids` | array | No | User IDs of the owners of the Spend Limit. |
| `idempotency_key` | string | No | Idempotency key for the request. For retry safety, clients should generate, store, and reuse the same key when retrying failed operations. If not provided, a UUID will be auto-generated. Recommended format: V4 UUID. |
| `legal_entity_id` | string | No | The legal entity ID to which Spend Limit expenses will be attributed. If not set, expenses will be attributed to the spending user's entity. |
| `member_user_ids` | array | No | User IDs of the members of the Spend Limit. |
| `expense_policy_id` | string | No | The ID of the expense policy corresponding to this Spend Limit. |
| `transaction_limit` | object | No | Per-transaction spending limit. |
| `expense_visibility` | string | No | Controls who can view expenses made under this spend limit. 'PRIVATE' = only owners can view, 'PUBLIC' = all members can view expenses. |
| `authorization_settings` | object | No | Authorization settings controlling how the spend limit enforces spending. |
| `limit_increase_setting` | string | No | Whether members can request temporary limit increases. 'ENABLED' allows increase requests, 'DISABLED' prevents them. |
| `period_recurrence_type` | string | No | How often the spend limit resets. Valid values: 'MONTHLY' (resets each month), 'QUARTERLY' (resets every 3 months), 'YEARLY' (resets annually), 'ONE_TIME' (never resets, single-use limit). |
| `authorization_visibility` | string | No | Controls who can view card authorizations made under this spend limit. 'PRIVATE' = only owners can view, 'PUBLIC' = all members can view authorizations. |
| `limit_approval_policy_id` | string | No | The ID of the policy for limit increase approval requests. Meant to replace limit_increase_request_policy_id. |
| `merchant_category_controls` | object | No | Merchant category controls for spend limit. |
| `auto_transfer_cards_setting` | string | No | Whether to automatically transfer cards from parent budget when members are added. 'ENABLED' auto-transfers cards, 'DISABLED' requires manual card transfer. |
| `auto_create_limit_cards_setting` | string | No | Whether to automatically create cards for members when they're added to this spend limit. 'ENABLED' auto-creates cards, 'DISABLED' requires manual card creation. |
| `limit_increase_request_policy_id` | string | No | The ID of the policy for limit increase requests for this Spend Limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User

**Slug:** `BREX_UPDATE_USER`

Update user details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | ID of the user to update |
| `title_id` | string | No | Title ID |
| `manager_id` | string | No | User ID of the manager |
| `location_id` | string | No | Location ID |
| `department_id` | string | No | Department ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Vendor

**Slug:** `BREX_UPDATE_VENDOR`

Tool to update vendor information in Brex. Use when you need to modify vendor details such as company name, email, phone, payment accounts, or beneficiary information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique vendor identifier to update |
| `email` | string | No | Email for vendor |
| `phone` | string | No | Phone number for vendor |
| `company_name` | string | No | Name for vendor |
| `idempotency_key` | string | No | Idempotency key for the request. For retry safety, clients should generate, store, and reuse the same key when retrying failed operations. Recommended format: V4 UUID. |
| `beneficiary_name` | string | No | Name for the Beneficiary |
| `payment_accounts` | array | No | To update payment instruments, provide the payment details without the payment_instrument_id (it's read-only). Include all required fields for the payment type (e.g., routing_number, account_number for ACH). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Webhook Subscription

**Slug:** `BREX_UPDATE_WEBHOOK_SUBSCRIPTION`

Updates an existing Brex webhook subscription's configuration. You can modify the webhook URL endpoint, change which event types trigger notifications, activate/deactivate the subscription, or reassign it to a different webhook group (partners only). This is useful when you need to redirect webhooks to a new URL, add/remove event types from your subscription, or temporarily pause webhook deliveries without deleting the subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the webhook subscription to update. This ID starts with 'wsub_' and can be obtained from listing webhook subscriptions or from the creation response. |
| `url` | string | Yes | The HTTPS URL endpoint where webhook event notifications will be sent via POST requests. Must be a publicly accessible HTTPS URL (HTTP not supported). The endpoint should be able to receive and process JSON payloads containing webhook events. |
| `status` | string ("ACTIVE" | "INACTIVE") | Yes | The operational status of the webhook subscription. Use 'ACTIVE' to enable webhook event delivery or 'INACTIVE' to temporarily pause delivery without deleting the subscription. When INACTIVE, events will not be sent to the webhook URL. |
| `group_id` | string | No | Optional webhook group ID (format: 'wg_*') for partner integrations only. This associates the subscription with a specific group of related webhooks. If not provided or null, the subscription operates independently without group association. Most users should leave this empty. |
| `event_types` | array | Yes | List of Brex event types that will trigger webhook notifications to the specified URL. Must include at least one event type. Available types include: TRANSFER_PROCESSED, TRANSFER_FAILED, USER_UPDATED, EXPENSE_PAYMENT_UPDATED, and various EMBEDDED_* events for embedded banking features. Select only the events relevant to your integration to reduce unnecessary webhook traffic. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
