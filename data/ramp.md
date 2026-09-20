# Ramp

Ramp is a platform that helps you manage your finances, track your income and expenses, and get insights into your business

- **Category:** accounting
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 88
- **Triggers:** 0
- **Slug:** `RAMP`
- **Version:** 20260721_00

## Tools

### Create Department

**Slug:** `RAMP_CREATE_DEPARTMENT`

Tool for creating a new department in your Ramp organization. Perfect for setting up organizational structure and expense categorization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the department |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Inventory Item Accounting Field

**Slug:** `RAMP_CREATE_INVENTORY_ITEM_ACCOUNTING_FIELD`

Tool to create a new inventory item accounting field for tracking inventory categories. Use when setting up inventory tracking for an accounting connection. Note: There can only be one active inventory item accounting field per accounting connection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the inventory item tracking category in the remote ERP system |
| `display_name` | string | No | The name of the inventory item tracking category as shown on Ramp. If not provided, defaults to the name field |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Transaction Memo

**Slug:** `RAMP_CREATE_MEMO`

Tool for uploading a new memo for a transaction in Ramp. Use when you need to add notes or context to existing transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | Yes | Text content of the memo to create. Maximum length is 255 characters. |
| `transaction_id` | string | Yes | Unique identifier for the transaction to attach the memo to |
| `is_memo_recurring` | boolean | No | Whether this memo should automatically apply to similar future transactions. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Mileage Reimbursement

**Slug:** `RAMP_CREATE_MILEAGE_REIMBURSEMENT`

Tool to create a mileage reimbursement in Ramp. Use when a user needs to submit a reimbursement for business-related travel distance. Requires distance, reimbursee_id, and trip_date as mandatory fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | Yes | Memo or note describing the purpose of the mileage reimbursement. This field is required. |
| `distance` | string | Yes | Distance traveled for the reimbursement. Can be specified as a number or string. |
| `trip_date` | string | Yes | Date of the trip in ISO 8601 date format (YYYY-MM-DD). |
| `waypoints` | array | No | List of intermediate stops during the trip. |
| `end_location` | string | No | Ending location of the trip. |
| `reimbursee_id` | string | Yes | Unique identifier (UUID) of the user to be reimbursed. |
| `distance_units` | string ("KILOMETERS" | "MILES") | No | Distance units for mileage reimbursement. |
| `start_location` | string | No | Starting location of the trip. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create New Custom Accounting Field

**Slug:** `RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD`

Tool for creating a new custom accounting field. Note: This operation requires elevated permissions not available in the demo API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Remote/external ID of custom accounting field from ERP system. |
| `name` | string | Yes | Name of the custom accounting field. |
| `input_type` | string ("SINGLE_CHOICE" | "BOOLEAN" | "FREE_FORM_TEXT") | Yes | The input type could be SINGLE_CHOICE, BOOLEAN or FREE_FORM_TEXT. |
| `is_splittable` | boolean | No | If set to True, the accounting field can be used to annotate split line items. |
| `is_required_for` | array | No | Types of objects that require this accounting field to be used for coding before they can be marked as ready to sync. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Code Accounting Field

**Slug:** `RAMP_CREATE_TAX_CODE_ACCOUNTING_FIELD`

Tool to create a new tax code accounting field in Ramp. There can only be one active tax code accounting field per accounting connection. Use when you need to set up tax code tracking for an accounting integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the tax code field in the remote ERP system. |
| `display_name` | string | No | The name of the tax code field as shown on Ramp. If not provided, the name field will be used as the display name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Invite

**Slug:** `RAMP_CREATE_USER_INVITE`

Tool to create a user invite for onboarding new employees to Ramp. Triggers an async task to send an invite email. Users must accept the invite to be onboarded. Assign users to specific entities using location_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string ("AUDITOR" | "BUSINESS_ADMIN" | "BUSINESS_BOOKKEEPER" | "BUSINESS_OWNER" | "BUSINESS_USER" | "GUEST_USER" | "IT_ADMIN") | Yes | The employee's role in the organization. Note that BUSINESS_OWNER is not an invitable role |
| `email` | string | Yes | The employee's email address where the invite will be sent |
| `last_name` | string | Yes | Last name of the employee (max 255 characters) |
| `first_name` | string | Yes | First name of the employee (max 255 characters) |
| `is_manager` | boolean | No | Whether the employee is a manager |
| `location_id` | string | No | Unique identifier of the employee's location. Use this to assign the user to a specific entity (locations are mapped to entities with many-to-one relationship) |
| `department_id` | string | No | Unique identifier of the employee's department (UUID format) |
| `idempotency_key` | string | Yes | A unique value generated by the client which the server uses to recognize subsequent retries of the same request. Use a random generated UUID to avoid collisions |
| `direct_manager_id` | string | No | Unique identifier of the employee's direct manager (UUID format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook Subscription

**Slug:** `RAMP_CREATE_WEBHOOK_SUBSCRIPTION`

Tool to create a new webhook subscription for receiving event notifications from Ramp. Use when you need to set up real-time notifications for events like transactions, bills, or reimbursements. The newly registered subscription will be in pending verification state and requires endpoint verification with the provided challenge.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_types` | array | Yes | List of event types to subscribe to. The webhook will receive notifications for these events |
| `endpoint_url` | string | Yes | URL where webhook events will be sent. Must be a valid HTTPS URL that can receive POST requests |
| `additional_headers` | object | No | Optional headers to include with webhook requests. Max 5 headers allowed. Header names max 100 chars, values max 1000 chars |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deactivate User

**Slug:** `RAMP_DEACTIVATE_USER`

Tool to deactivate a user in your Ramp organization. Use when you need to prevent a user from logging in, spending on cards, or receiving notifications. Once deactivated, users cannot access their Ramp account or perform any actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier (UUID) of the user to deactivate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting GL Account

**Slug:** `RAMP_DELETE_ACCOUNTING_ACCOUNT`

Tool to delete a general ledger account from Ramp. Use when you need to remove a GL account from the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gl_account_id` | string | Yes | The unique identifier (UUID) of the general ledger account to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting Connection

**Slug:** `RAMP_DELETE_ACCOUNTING_CONNECTION`

Tool to disconnect the current active API-based accounting connection. Use when you need to disable the accounting integration. This action will clear associated accounting settings including Custom Fields, GL Accounts, and Vendors. Only API-based connections can be disconnected via this endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Accounting Field

**Slug:** `RAMP_DELETE_ACCOUNTING_FIELDS`

Tool to delete a custom accounting field from Ramp. Use when you need to remove a custom accounting field from the system. Note: Fields are read-only and cannot be deleted when a direct accounting connection is enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_id` | string | Yes | The unique identifier (UUID) of the custom accounting field to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting Inventory Item Option

**Slug:** `RAMP_DELETE_ACCOUNTING_INVENTORY_ITEM_OPTIONS`

Tool to delete an accounting inventory item option from Ramp. Use when you need to remove an inventory item option from the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `option_id` | string | Yes | The unique identifier (UUID) of the inventory item option to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Tax Code Accounting Field

**Slug:** `RAMP_DELETE_ACCOUNTING_TAX_CODE`

Tool to delete the tax code accounting field from Ramp. Use when you need to remove the tax code field configuration. Note: The tax code field must exist before deletion.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting Tax Code Option

**Slug:** `RAMP_DELETE_ACCOUNTING_TAX_CODE_OPTIONS`

Tool to delete a tax code option from Ramp. Use when you need to remove a tax code option from the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `option_id` | string | Yes | The unique identifier (UUID) of the tax code option to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting Tax Rate

**Slug:** `RAMP_DELETE_ACCOUNTING_TAX_RATES`

Tool to delete an accounting tax rate from Ramp. Use when you need to remove a tax rate from the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax_rate_id` | string | Yes | The unique identifier (UUID) of the tax rate to delete |
| `connection_id` | string | Yes | The accounting connection ID (UUID) associated with the tax rate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Accounting Vendor

**Slug:** `RAMP_DELETE_ACCOUNTING_VENDORS`

Tool to delete an accounting vendor from Ramp. Use when you need to remove a vendor from the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | The unique identifier (UUID) of the vendor to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Field Option

**Slug:** `RAMP_DELETE_CUSTOM_FIELD_OPTION`

Tool to delete a custom accounting field option from Ramp. Use when you need to remove a specific option from a custom accounting field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_option_id` | string | Yes | The unique identifier (UUID) of the custom accounting field option to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Inventory Item Field

**Slug:** `RAMP_DELETE_INVENTORY_ITEM_FIELD`

Tool to delete the inventory item accounting field from Ramp. Use when you need to remove the inventory item field from the accounting connection. This uses the authenticated connection's context to identify which inventory item field to delete.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Users from Shared Limit

**Slug:** `RAMP_DELETE_SPEND_ALLOCATION_DELETE_USERS`

Tool to remove users from a shared spend limit in Ramp. Use when you need to revoke a user's access to a shared spending allocation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | List of user IDs (UUIDs) to remove from the shared limit |
| `spend_limit_id` | string | Yes | Unique identifier (UUID) of the shared spend limit to remove users from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Webhook Subscription

**Slug:** `RAMP_DELETE_WEBHOOK`

Tool to delete a webhook subscription by ID. Use when you need to remove a webhook subscription from Ramp. The operation is irreversible and returns no content on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | The unique identifier (UUID) of the webhook subscription to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch General Ledger Account

**Slug:** `RAMP_FETCH_ACCOUNTING_ACCOUNT`

Tool to fetch a specific general ledger account by ID from Ramp. Use when you need to retrieve detailed information about a single GL account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gl_account_id` | string | Yes | UUID of the general ledger account to retrieve |
| `accounting_connection_id` | string | No | UUID of the accounting connection to filter the GL account. Required when fetching accounts associated with a specific accounting connection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Accounting Vendor

**Slug:** `RAMP_FETCH_ACCOUNTING_VENDOR`

Tool to fetch a specific accounting vendor by ID from Ramp. Use when you need to retrieve detailed information about a single accounting vendor for coding transactions, reimbursements, bills, or purchase orders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | UUID of the accounting vendor to retrieve |
| `accounting_connection_id` | string | No | UUID of the accounting connection to filter the vendor. Used when fetching vendors associated with a specific accounting connection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Custom Accounting Field

**Slug:** `RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD`

Tool for fetching a custom accounting field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_id` | string | Yes | UUID of the custom accounting field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List General Ledger Accounts

**Slug:** `RAMP_GET_ACCOUNTING_ACCOUNTS`

Tool to list general ledger accounts from Ramp. Use when you need to retrieve GL accounts for accounting integration or transaction categorization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Filter by account code (e.g., '6410') |
| `start` | string | No | The ID of the last entity of the previous page, used for pagination to get the next page |
| `is_active` | boolean | No | Filter by active status. If not provided, returns all accounts. If true, returns only active accounts. If false, returns only inactive accounts. |
| `is_synced` | boolean | No | Filter by sync status with the accounting system |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used. |
| `remote_id` | string | No | Filter by Remote/external ID from the ERP system |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch All Accounting Connections

**Slug:** `RAMP_GET_ACCOUNTING_ALL_CONNECTIONS`

Tool to fetch all accounting connections for the current Ramp business. Use when you need to view all accounting integrations, including both active and inactive connections.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Accounting Connection

**Slug:** `RAMP_GET_ACCOUNTING_CONNECTION`

Tool to fetch the current active accounting connection for a Ramp account. Use when you need to check the status, type, or configuration of the active accounting integration with providers like QuickBooks or NetSuite.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Accounting Connection By ID

**Slug:** `RAMP_GET_ACCOUNTING_CONNECTION_BY_ID`

Tool to fetch a specific accounting connection by ID from Ramp. Use when you need to retrieve detailed information about a particular accounting integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `connection_id` | string | Yes | UUID of the accounting connection to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Accounting Fields

**Slug:** `RAMP_GET_ACCOUNTING_FIELDS`

Tool to list custom accounting fields for coding transactions. Use when you need to retrieve custom accounting fields that can be leveraged to code transactions, reimbursements, and bills.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | The ID of the last entity of the previous page, used for pagination to get the next page |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Accounting Vendors

**Slug:** `RAMP_GET_ACCOUNTING_VENDORS`

Tool to list accounting vendors from Ramp. Use when you need to retrieve vendor data for transaction coding, reimbursements, bills, or purchase orders in the accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | The ID of the last entity from the previous page, used for pagination to get the next page of results. Ramp uses cursor-based pagination for consistent results. |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Transactions

**Slug:** `RAMP_GET_ALL_TRANSACTIONS`

Get all the transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `state` | string | No | Filter by transaction state. If set to 'ALL', all transactions including 'DECLINED' will be listed |
| `card_id` | string | No | Filter by physical card UUID |
| `to_date` | string | No | Filter for transactions with user_transaction_time before the given date (ISO 8601 datetime, default: today) |
| `trip_id` | string | No | Filter for trip UUID |
| `user_id` | string | No | Filter by user UUID |
| `limit_id` | string | No | Filter by limit UUID |
| `entity_id` | string | No | Filter transactions by business entity UUID |
| `from_date` | string | No | Filter for transactions with user_transaction_time after the given date (ISO 8601 datetime) |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `max_amount` | string | No | Filter for transactions with amount smaller than given amount (USD) |
| `min_amount` | string | No | Filter for transactions with amount larger than given amount (USD) |
| `sync_ready` | boolean | No | Filter for transactions that are coded with accounting fields and ready to sync to ERP systems |
| `location_id` | string | No | Filter by location UUID |
| `merchant_id` | string | No | Filter by merchant UUID |
| `sync_status` | string | No | Filter for transactions by sync status. Supersedes sync_ready and has_no_sync_commits if set |
| `statement_id` | string | No | Filter by statement UUID |
| `synced_after` | string | No | Filter for transactions synced after the given date (ISO 8601 datetime) |
| `department_id` | string | No | Filter by department UUID |
| `requires_memo` | boolean | No | Filters for transactions which require a memo but do not have one (can only be set to true) |
| `sk_category_id` | string | No | Filter by Ramp category code (integer) |
| `approval_status` | string | No | Filter by transaction approval status |
| `spend_program_id` | string | No | Filter by spend program UUID |
| `order_by_date_asc` | boolean | No | Sort transactions by user_transaction_date in ascending order |
| `order_by_date_desc` | boolean | No | Sort transactions by user_transaction_date in descending order |
| `has_no_sync_commits` | boolean | No | Filter for transactions that have not been synced to ERP systems yet |
| `order_by_amount_asc` | boolean | No | Sort transactions by amount in ascending order |
| `order_by_amount_desc` | boolean | No | Sort transactions by amount in descending order |
| `include_merchant_data` | boolean | No | Include all purchase data provided by the merchant |
| `awaiting_approval_by_user_id` | string | No | Filter for transactions awaiting approval by a specific user UUID |
| `accounting_field_selection_id` | string | No | Filter transactions by accounting field selection UUID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card

**Slug:** `RAMP_GET_CARD`

Tool for retrieving detailed information about a specific card. Returns comprehensive card details including spending limits, cardholder info, and fulfillment status. Use this to get complete card profile for analysis or troubleshooting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | The ID of the card to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Card Vault Resource

**Slug:** `RAMP_GET_CARD_VAULT_RESOURCE`

Tool to fetch a card's sensitive details from the vault. Requires vault API access. Use when you need to retrieve PAN or CVV for a specific card. This endpoint uses a separate vault base URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | The unique identifier of the card to fetch sensitive details for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Field Option

**Slug:** `RAMP_GET_CUSTOM_FIELD_OPTION`

Tool to fetch a custom accounting field option by its ID. Use when you need to retrieve details about a specific custom accounting field option from Ramp's accounting integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_option_id` | string | Yes | UUID of the custom accounting field option to fetch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Department

**Slug:** `RAMP_GET_DEPARTMENT`

Tool for retrieving detailed information about a specific department. Returns comprehensive department details including hierarchy information. Use this to get complete department profile for organizational analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `department_id` | string | Yes | The ID of the department to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Item Field

**Slug:** `RAMP_GET_INVENTORY_ITEM_FIELD`

Tool to fetch inventory item accounting field for the current accounting connection. Use when you need to retrieve the inventory item field configuration from the connected ERP system.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Memo

**Slug:** `RAMP_GET_MEMO`

Tool to fetch a transaction memo. Use when you need to retrieve the memo text associated with a specific transaction.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transaction_id` | string | Yes | Unique identifier of the transaction for which to retrieve the memo (UUID format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Reimbursement Details

**Slug:** `RAMP_GET_REIMBURSEMENT`

Tool for retrieving complete details of a specific reimbursement. Includes amount, status, user information, accounting details, receipts, and sync status. Use this to get comprehensive reimbursement information for approval workflows or detailed analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reimbursement_id` | string | Yes | ID of the reimbursement to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Spend Limit

**Slug:** `RAMP_GET_SPEND_LIMIT`

Tool to fetch detailed information about a specific spend limit. Use when you need to retrieve comprehensive limit details including balance, restrictions, linked cards, and users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `spend_limit_id` | string | Yes | The unique identifier (UUID) of the spend limit to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Statement

**Slug:** `RAMP_GET_STATEMENT`

Tool for retrieving statement details or downloading statements. Supports JSON, PDF, and CSV formats for financial reporting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `format` | string ("json" | "pdf" | "csv") | No | Format of the statement: json, pdf, csv |
| `statement_id` | string | Yes | ID of the statement to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transaction Details

**Slug:** `RAMP_GET_TRANSACTION`

Tool for retrieving complete details of a specific transaction. Includes merchant details, receipts, accounting codes, and dispute information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transaction_id` | string | Yes | ID of the transaction to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `RAMP_GET_USER`

Tool to retrieve detailed information about a specific Ramp user by their ID. Use when you need complete user profile information including role, status, department, and custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier (UUID) of the user to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Users Deferred Status

**Slug:** `RAMP_GET_USERS_DEFERRED_STATUS`

Tool for fetching the status of a deferred user task. Use when you need to check the progress or outcome of asynchronous user operations like user creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | Unique identifier of the deferred task to retrieve status for (UUID format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vendor Details

**Slug:** `RAMP_GET_VENDOR`

Tool for retrieving detailed information about a specific vendor. Returns comprehensive vendor details including spending totals, category, and contact information. Use this to get complete vendor profile for analysis or updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | The ID of the vendor to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook

**Slug:** `RAMP_GET_WEBHOOK`

Tool to retrieve detailed information about a specific webhook subscription by ID. Use when you need to check webhook configuration, status, or event types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | The unique identifier of the webhook subscription to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Issue Virtual Card

**Slug:** `RAMP_ISSUE_VIRTUAL_CARD`

Tool for issuing virtual cards to users instantly. Creates cards with customizable spending limits and restrictions. Returns full card details including card number and CVV.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | Memo for the card creation |
| `user_id` | string | Yes | User ID to issue the card to |
| `display_name` | string | No | Display name for the card |
| `card_program_id` | string | No | Card program ID to use for the card |
| `spending_restrictions` | object | No | Spending restrictions for the card |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Accounting Inventory Item Options

**Slug:** `RAMP_LIST_ACCOUNTING_INVENTORY_ITEM_OPTIONS`

Tool to list accounting inventory item options from Ramp. Use when you need to retrieve inventory items for accounting integration or transaction categorization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Filter by code |
| `start` | string | No | The ID of the last entity of the previous page, used for pagination to get the next page |
| `is_active` | boolean | No | Filter by active status. If not provided, returns all objects. If true, returns only active objects. If false, returns only inactive objects. |
| `is_synced` | boolean | No | Filter by sync status with the accounting system |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used. |
| `remote_id` | string | No | Filter by Remote/external ID from the ERP system |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Accounting Tax Rates

**Slug:** `RAMP_LIST_ACCOUNTING_TAX_RATES`

Tool to list tax rates from Ramp's accounting integration. Use when you need to retrieve tax rate information for transaction categorization or tax compliance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | The ID of the last entity of the previous page, used for pagination to get the next page |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Cards

**Slug:** `RAMP_LIST_CARDS`

Tool for listing all cards across the organization with optional filters. Returns card details including spending limits, cardholder info, and state. Use this to analyze card distribution, monitor card states, or find specific cards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `user_id` | string | No | Filter by card owner UUID |
| `entity_id` | string | No | Filter by business entity UUID |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `display_name` | string | No | Filter by display name |
| `is_activated` | boolean | No | Filter only for activated cards. Defaults to True if not specified |
| `is_terminated` | boolean | No | Filter only for terminated cards. Defaults to False if not specified |
| `card_program_id` | string | No | Filter by card program UUID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Departments

**Slug:** `RAMP_LIST_DEPARTMENTS`

Tool for listing all departments in the organization. Returns department details including names, codes, and hierarchy information. Use this to analyze organizational structure and department relationships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Memos

**Slug:** `RAMP_LIST_MEMOS`

Tool for listing memos associated with transactions in your Ramp organization. Returns memo details with support for filtering by card, user, department, location, manager, merchant, and date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `card_id` | string | No | Filter memos by card UUID |
| `to_date` | string | No | Filter memos for transactions before this date (ISO 8601 format) |
| `user_id` | string | No | Filter memos by user UUID |
| `from_date` | string | No | Filter memos for transactions after this date (ISO 8601 format) |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `manager_id` | string | No | Filter memos by manager UUID |
| `location_id` | string | No | Filter memos by location UUID |
| `merchant_id` | string | No | Filter memos by merchant UUID |
| `department_id` | string | No | Filter memos by department UUID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Reimbursements

**Slug:** `RAMP_LIST_REIMBURSEMENTS`

Tool for listing reimbursements with comprehensive filtering options. Returns reimbursement details including amounts, status, sync information, and associated entities. Use this to analyze reimbursement patterns, track approval workflows, and manage expense reimbursements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `to_date` | string | No | Filter reimbursements created before this date (ISO 8601 datetime) |
| `trip_id` | string | No | Filter reimbursements associated with a specific trip UUID |
| `user_id` | string | No | Filter by user UUID |
| `direction` | string | No | Filter by direction (BUSINESS_TO_USER default, USER_TO_BUSINESS for repayments) |
| `entity_id` | string | No | Filter reimbursements by business entity UUID |
| `from_date` | string | No | Filter reimbursements created after this date (ISO 8601 datetime) |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `sync_ready` | boolean | No | Filter reimbursements that are ready to sync to ERP systems |
| `sync_status` | string | No | Filter by sync status. Supersedes has_no_sync_commits and sync_ready |
| `synced_after` | string | No | Filter reimbursements synced after this date (ISO 8601 datetime) |
| `updated_after` | string | No | Filter reimbursements updated after this date (ISO 8601 datetime) |
| `to_submitted_at` | string | No | Filter reimbursements submitted before this date (ISO 8601 datetime) |
| `from_submitted_at` | string | No | Filter reimbursements submitted after this date (ISO 8601 datetime) |
| `has_no_sync_commits` | boolean | No | Filter reimbursements that haven't been synced to ERP systems |
| `to_transaction_date` | string | No | Filter by underlying transaction date (before this date, ISO 8601 datetime) |
| `from_transaction_date` | string | No | Filter by underlying transaction date (after this date, ISO 8601 datetime) |
| `awaiting_approval_by_user_id` | string | No | Filter for reimbursements awaiting approval by a specific user UUID |
| `accounting_field_selection_id` | string | No | Filter reimbursements by accounting field selection UUID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Statements

**Slug:** `RAMP_LIST_STATEMENTS`

Tool for listing all statements with filtering options. Perfect for financial reporting and reconciliation workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `to_date` | string | No | Filter statements with end_date on or before this date (ISO 8601 datetime). Defaults to current time |
| `from_date` | string | No | Filter statements with end_date on or after this date (ISO 8601 datetime) |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `RAMP_LIST_USERS`

Tool for listing users in your Ramp organization with flexible filtering. Perfect for user audits, access management, and organizational analysis. Helps identify inactive users, role distribution, and departmental structures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Filter by user role |
| `email` | string | No | Filter by email address |
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `entity_id` | string | No | Filter by business entity UUID |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `employee_id` | string | No | Filter by user employee_id |
| `location_id` | string | No | Filter by location UUID |
| `department_id` | string | No | Filter by department UUID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vendors

**Slug:** `RAMP_LIST_VENDORS`

Tool for listing vendors with their spending information. Returns vendor details including spending totals, categories, and activity status. Use this to analyze vendor relationships and procurement patterns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter vendors by name |
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `is_active` | boolean | No | Filter by vendor active status |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `from_created_at` | string | No | Show only vendors with created_at after this date (ISO 8601 datetime) |
| `sk_category_ids` | string | No | Show only vendors whose sk_category_id matches a Ramp Category Code in the passed list. Expects a comma-separated list of integers |
| `vendor_owner_id` | string | No | Unique identifier of the user which owns this vendor (UUID) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vendor Bank Accounts

**Slug:** `RAMP_LIST_VENDORS_ACCOUNTS`

Tool for listing bank accounts associated with a specific vendor. Returns account details including currency, payment method, and default status. Use this to retrieve payment account information for vendor transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `vendor_id` | string | Yes | The unique identifier (UUID) of the vendor whose bank accounts to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vendor Contacts

**Slug:** `RAMP_LIST_VENDORS_CONTACTS`

Tool for listing contacts associated with a specific vendor. Returns contact information including names, emails, and phone numbers. Use this to find vendor contact details for communication or relationship management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | ID of the last entity of the previous page for pagination |
| `page_size` | integer | No | Number of results per page (2-100, default: 20) |
| `vendor_id` | string | Yes | Unique identifier (UUID) of the vendor to retrieve contacts for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vendor Credits

**Slug:** `RAMP_LIST_VENDORS_CREDITS`

Tool to list all vendor credits for all vendors of a business. Use when you need to track vendor credits, analyze credit usage across vendors, or reconcile vendor accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | No | The ID of the last entity of the previous page, used for pagination to get the next page |
| `page_size` | integer | No | The number of results to be returned in each page. The value must be between 2 and 100. If not specified, the default value 20 will be used |
| `include_fully_used` | boolean | No | Include vendor credits that are marked as fully used. Defaults to false if not specified |
| `to_accounting_date` | string | No | Filter by vendor credits with an accounting date up to or on the provided date (ISO 8601 date format: YYYY-MM-DD) |
| `from_accounting_date` | string | No | Filter by vendor credits with an accounting date on or after the provided date (ISO 8601 date format: YYYY-MM-DD) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhooks

**Slug:** `RAMP_LIST_WEBHOOKS`

Tool for listing all webhook subscriptions for the organization. Returns webhook details including endpoint URLs, event types, and status. Use this to audit webhook configurations and monitor active subscriptions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Options for Custom Accounting Field

**Slug:** `RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD`

Tool for listing options for a given accounting field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_id` | string | Yes | UUID of the custom accounting field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Connection

**Slug:** `RAMP_PATCH_ACCOUNTING_CONNECTION`

Tool to update an accounting connection's settings. Use when you need to modify configuration for API-based accounting connections. This endpoint is restricted to Accounting API based connections only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `settings` | object | No | Settings for API-based accounting connections. |
| `connection_id` | string | Yes | The UUID of the accounting connection to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Card

**Slug:** `RAMP_PATCH_CARD_RESOURCE`

Tool to update a card's properties including owner, display name, and spending restrictions. Use when you need to modify card settings or reassign card ownership.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | UUID of the card to update |
| `entity_id` | string | No | Specify ID to update associated business entity (UUID format) |
| `new_user_id` | string | No | Specify ID for new card owner (UUID format) |
| `display_name` | string | No | Cosmetic display name of the card |
| `spending_restrictions` | object | No | Spending restrictions to update for the card. |
| `has_notifications_enabled` | boolean | No | Flag to enable or disable notifications for this card |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Field Option

**Slug:** `RAMP_PATCH_CUSTOM_FIELD_OPTION`

Tool to update a custom accounting field option. Use when you need to modify display name, code, value, or visibility of an existing field option.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Code of the custom accounting field option. Only available if not using a direct ERP integration. Provide an empty string to reset the code. |
| `value` | string | No | Name of the custom accounting field option. Only available if not using a direct ERP integration. |
| `reactivate` | boolean | No | Reactivate a deleted custom field option. Only available if not using a direct ERP integration. Must be true if provided. |
| `visibility` | string ("HIDDEN" | "VISIBLE") | No | Visibility status for custom field option. |
| `display_name` | string | No | Update the display name of the custom field option. Available to all users. |
| `field_option_id` | string | Yes | UUID of the custom accounting field option to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update General Ledger Account

**Slug:** `RAMP_PATCH_GL_ACCOUNT_RESOURCE`

Tool to update a general ledger account in Ramp. Use when you need to modify the name, code, or reactivate a deleted GL account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Code of the general ledger account (e.g., '1500-UPDATED', '6410'). Provide an empty string to reset the code. |
| `name` | string | No | Name of the general ledger account (e.g., 'Updated Equipment Account', 'Travel : Travel - Lodging') |
| `reactivate` | boolean | No | Reactivate a deleted general ledger account. Set to true to reactivate. |
| `gl_account_id` | string | Yes | UUID of the general ledger account to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Inventory Item Field

**Slug:** `RAMP_PATCH_INVENTORY_ITEM_FIELD`

Tool to update the inventory item accounting field for a Ramp connection. Use when you need to modify the name or display name of the inventory item field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the inventory item field. |
| `display_name` | string | No | Display name of the inventory item field on Ramp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Accounting GL Accounts

**Slug:** `RAMP_POST_ACCOUNTING_ACCOUNTS`

Tool to batch upload general ledger accounts to Ramp. Supports up to 500 accounts per call with all-or-nothing validation. Use when you need to create GL accounts in Ramp's accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gl_accounts` | array | Yes | A list of general ledger accounts to upload. Maximum 500 accounts per API call. All-or-nothing validation: if any account fails validation, the entire batch is rejected. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Accounting Connection

**Slug:** `RAMP_POST_ACCOUNTING_CONNECTION`

Tool to register a new API-based accounting connection between Ramp and an accounting provider. Use when establishing a new connection to accounting systems like QuickBooks, NetSuite, or Xero. If a Universal CSV connection exists, it will be upgraded to an API-based connection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `settings` | object | No | Connection settings for API-based accounting connections. Applies only to API-based connections |
| `reactivate` | boolean | No | Deprecated parameter. Use POST accounting/connection/<connection_id>/reactivate instead |
| `remote_provider_name` | string | Yes | The name of the accounting provider to connect to (e.g., QUICKBOOKS, NETSUITE, XERO, ACCOUNTING_SEED) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Accounting Vendors

**Slug:** `RAMP_POST_ACCOUNTING_VENDORS`

Tool to batch upload vendors to Ramp for coding transactions, bills, and purchase orders. Supports up to 500 vendors per call with all-or-nothing validation. Use when you need to create vendors in Ramp's accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendors` | array | Yes | A list of vendors to upload. Maximum 500 vendors per API call. All-or-nothing validation: if any vendor fails validation, the entire batch is rejected. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Inventory Item Options

**Slug:** `RAMP_POST_INVENTORY_ITEM_OPTIONS`

Tool to upload inventory item options for an active inventory item accounting field. Use when you need to create inventory items in Ramp's accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | A list of inventory item options to upload. Maximum 500 items per API call. There must be an active inventory item accounting field for the accounting connection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Physical Card

**Slug:** `RAMP_POST_PHYSICAL_CARD`

Tool to create a physical card asynchronously. Returns a task ID which can be used to track the card creation status. Physical cards require fulfillment details with a shipping address. Use when a user needs a physical card for in-person transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier (UUID) of the card owner. This user will be assigned as the cardholder. |
| `entity_id` | string | No | Business entity UUID to associate with the card. If not provided, defaults to entity associated with user's location. |
| `fulfillment` | object | No | Fulfillment details for the physical card. |
| `display_name` | string | Yes | Cosmetic display name for the card (e.g., 'Business Travel Card', 'T&E'). Required by the API. |
| `is_temporary` | boolean | No | Set to true to create a temporary card. Defaults to false. |
| `card_program_id` | string | No | Card program ID to use for the card. One of spending_restrictions or card_program_id must be provided. |
| `idempotency_key` | string | Yes | Unique value to recognize subsequent retries of the same request. Use a random UUID to avoid collisions. |
| `spending_restrictions` | object | No | Spending restrictions for the physical card. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reactivate Accounting Connection

**Slug:** `RAMP_REACTIVATE_ACCOUNTING_CONNECTION`

Tool to reactivate a previously unlinked accounting connection by changing its status back to linked. This preserves all previous accounting field configurations and settings. Use when you need to restore a disconnected accounting integration. The business must not have any other active accounting connections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `connection_id` | string | Yes | The UUID of the accounting connection to reactivate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reactivate User

**Slug:** `RAMP_REACTIVATE_USER`

Tool to reactivate a suspended user in your Ramp organization. Use when you need to restore a user's access. Upon reactivation, users can log in to Ramp again, spend on their previously issued cards, and resume receiving Ramp notifications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier (UUID) of the user to reactivate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit Reimbursement Receipt

**Slug:** `RAMP_SUBMIT_REIMBURSEMENT_RECEIPT`

Tool to upload a receipt for a reimbursement. Use when submitting receipts for out-of-pocket expenses. If reimbursement_id is provided, attaches the receipt to an existing reimbursement; otherwise creates a new draft reimbursement via OCR.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `receipt` | object | Yes | Receipt file to upload. The file name should match the receipt filename (for example, 'receipt.pdf' or 'receipt.jpg'). |
| `reimbursee_id` | string | Yes | UUID of the user to create the reimbursement for |
| `idempotency_key` | string | Yes | Unique value to prevent duplicate uploads. Use a UUID to avoid collisions |
| `reimbursement_id` | string | No | Optional UUID of existing reimbursement to attach receipt to. If not provided, a new draft reimbursement will be created via OCR |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Suspend Card

**Slug:** `RAMP_SUSPEND_CARD`

Tool to suspend a card by creating an async task that locks the card from use. Use when you need to temporarily disable a card. The suspension is revertable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | The unique identifier of the card to suspend |
| `idempotency_key` | string | Yes | An idempotency key is a unique value generated by the client which the server uses to recognize subsequent retries of the same request. To avoid collisions, we encourage clients to use random generated UUIDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Terminate Card

**Slug:** `RAMP_TERMINATE_CARD`

Tool to permanently terminate a Ramp card. This action creates an async task to terminate the card and is irreversible. Use when you need to permanently deactivate a card. The response contains a task ID that can be used to check the termination status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card_id` | string | Yes | The unique identifier of the card to terminate permanently |
| `idempotency_key` | string | Yes | An idempotency key is a unique value generated by the client which the server uses to recognize subsequent retries of the same request. To avoid collisions, use random generated UUIDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Accounting Field

**Slug:** `RAMP_UPDATE_ACCOUNTING_FIELD`

Tool to update a custom accounting field. Use when you need to modify the display name, name, or splittable setting of an existing custom accounting field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the custom accounting field. |
| `field_id` | string | Yes | UUID of the custom accounting field to update (ramp_id). |
| `display_name` | string | No | Update the name of the custom accounting field on Ramp. |
| `is_splittable` | boolean | No | Update the is_splittable of the custom accounting field on Ramp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Inventory Item Option

**Slug:** `RAMP_UPDATE_ACCOUNTING_INVENTORY_ITEM_OPTIONS`

Tool to update an inventory item option in Ramp's accounting system. Use when you need to modify an existing inventory item option's details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The updated name of the inventory item option |
| `option_id` | string | Yes | The Ramp UUID of the inventory item option to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Tax Code

**Slug:** `RAMP_UPDATE_ACCOUNTING_TAX_CODE`

Tool to update tax code accounting field. Use when you need to modify the name or display name of the tax code field in Ramp's accounting system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the tax code field. |
| `display_name` | string | No | Display name of the tax code field on Ramp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Tax Code Option

**Slug:** `RAMP_UPDATE_ACCOUNTING_TAX_CODE_OPTIONS`

Tool to update a tax code option in Ramp. Use when you need to modify the name or associated tax rates of an existing tax code option.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the tax code option. |
| `option_id` | string | Yes | The unique identifier (UUID) of the tax code option to update |
| `tax_rate_ids` | array | No | A list of external tax rate IDs (remote_id values) to associate with this tax code option. If this value is provided, it will replace all existing tax rate IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Tax Rate

**Slug:** `RAMP_UPDATE_ACCOUNTING_TAX_RATE`

Tool to update an accounting tax rate in Ramp. Use when you need to modify the name, rate percentage, or associated GL account for an existing tax rate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the tax rate |
| `rate` | string | No | The tax rate percentage expressed as a decimal (e.g. 0.10 for 10%, 0.15 for 15%) |
| `tax_rate_id` | string | Yes | The unique Ramp ID (UUID) of the tax rate to update |
| `accounting_gl_account_id` | string | No | The Ramp ID (UUID) of the GL account to associate with this tax rate |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Accounting Vendor

**Slug:** `RAMP_UPDATE_ACCOUNTING_VENDOR`

Tool to update an accounting vendor in Ramp. Use when you need to modify vendor details such as name or code, or reactivate a deleted vendor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Code of the vendor. Provide an empty string to reset the code. |
| `name` | string | No | Name of the vendor to update |
| `vendor_id` | string | Yes | The unique identifier (ramp_id UUID) of the vendor to update. This is the Ramp-internal UUID, not the external ERP system ID. |
| `reactivate` | boolean | No | Set to true to reactivate a deleted vendor. Only the value true is accepted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Card Spending Limit

**Slug:** `RAMP_UPDATE_CARD_LIMIT`

Tool for updating spending limits on a card. Note: This returns the limits associated with the card. The actual update might require using the limit ID directly via PATCH /limits/{limit_id}.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | New spending limit amount in cents |
| `card_id` | string | Yes | The ID of the card to update limits for |
| `interval` | string | Yes | Spending limit interval: DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY, or TOTAL |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Department

**Slug:** `RAMP_UPDATE_DEPARTMENT`

Tool for updating an existing department in your Ramp organization. Useful for reorganizing departmental structure or renaming departments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | New department code/identifier |
| `name` | string | No | New name for the department |
| `department_id` | string | Yes | ID of the department to update |
| `parent_department_id` | string | No | New parent department ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Spending Limit

**Slug:** `RAMP_UPDATE_LIMITS`

Tool to update a spending limit in Ramp. Use when you need to modify limit settings such as display name, spending restrictions, permitted spend types, or user assignments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_user_id` | string | No | Change the user of the limit. Must be a valid UUID. |
| `display_name` | string | No | Change the display name of the limit. |
| `is_shareable` | boolean | No | Dictates whether the spend limit is shareable among multiple users. |
| `spend_limit_id` | string | Yes | Unique identifier of the spending limit to update. |
| `accounting_rules` | array | No | Set accounting rules for all card transactions and reimbursements (if applicable) for the given spend limit. |
| `spend_program_id` | string | No | Specify a spend program to link with. This will override the limit's spending restrictions and permitted spend types with those of the spend program. Pass None to detach the limit's current spend program. If the spend_program_id field is specified, no other fields may be passed. |
| `permitted_spend_types` | object | No | Permitted spend types for the limit. |
| `spending_restrictions` | object | No | Spending restrictions for the limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User

**Slug:** `RAMP_UPDATE_USER`

Tool to update an existing user in your Ramp organization. Use when modifying user information such as name, department, role, or manager assignments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string ("AUDITOR" | "BUSINESS_ADMIN" | "BUSINESS_BOOKKEEPER" | "BUSINESS_OWNER" | "BUSINESS_USER" | "GUEST_USER" | "IT_ADMIN") | No | User role in the Ramp organization. |
| `user_id` | string | Yes | Unique identifier of the user to update (UUID format) |
| `last_name` | string | No | Last name of the user |
| `first_name` | string | No | First name of the user |
| `is_manager` | boolean | No | Whether the employee is a manager |
| `location_id` | string | No | Unique identifier of the employee's location (UUID format) |
| `auto_promote` | boolean | No | Whether to automatically promote the user's manager to manager role |
| `department_id` | string | No | Unique identifier of the employee's department (UUID format) |
| `direct_manager_id` | string | No | Unique identifier of the employee's direct manager (UUID format). Set to null to remove manager assignment. |
| `scheduled_deactivation_date` | string | No | The date when the user is scheduled to be deactivated (YYYY-MM-DD format). Set to null to clear the scheduled deactivation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload New Options for Custom Accounting Field

**Slug:** `RAMP_UPLOAD_NEW_OPTIONS`

Tool for uploading new options for a given accounting field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | A list of field options for a given custom accounting field. |
| `field_id` | string | Yes | UUID of the custom accounting field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Tax Code Options

**Slug:** `RAMP_UPLOAD_TAX_CODE_OPTIONS`

Tool to upload tax code options to Ramp. Use when you need to create or update tax codes in the accounting system. Requires an active tax code accounting field for the accounting connection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | Yes | A list of tax code options to upload. Must contain at least 1 option and at most 500 options per API call. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Accounting Tax Rates

**Slug:** `RAMP_UPLOAD_TAX_RATES`

Tool to batch upload tax rates to Ramp. Supports up to 500 tax rates per call with all-or-nothing validation. Use when you need to create tax rates in Ramp's accounting system. Ensure data is sanitized and tax rates do not already exist before uploading.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax_rates` | array | Yes | A list of tax rates to upload. Maximum 500 tax rates per API call. All-or-nothing validation: if any tax rate fails validation or violates a database constraint, the entire batch is rejected. Ensure tax rates do not already exist on Ramp before uploading. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
