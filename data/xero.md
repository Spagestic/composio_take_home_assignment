# Xero

Xero is a cloud-based accounting software for small businesses, providing invoicing, bank reconciliation, bookkeeping, and financial reporting in real time

- **Category:** accounting
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 53
- **Triggers:** 0
- **Slug:** `XERO`
- **Version:** 20260721_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Xero?

For a step-by-step guide on creating and configuring your own Xero OAuth credentials with Composio, see [How to create OAuth credentials for Xero](https://composio.dev/auth/xero).

## Tools

### Create Bank Transaction

**Slug:** `XERO_CREATE_BANK_TRANSACTION`

Create a bank transaction in Xero. Use SPEND for payments out or RECEIVE for money received.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Transaction date in YYYY-MM-DD format. |
| `Type` | string | Yes | Transaction type: SPEND (payment out) or RECEIVE (money in). |
| `Status` | string | No | Transaction status: AUTHORISED or DELETED. |
| `ContactID` | string | Yes | Xero Contact ID for the transaction. |
| `LineItems` | array | Yes | List of line items for the bank transaction. |
| `Reference` | string | No | Reference or transaction description. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `CurrencyCode` | string | No | Currency code (e.g., USD, EUR). |
| `BankAccountID` | string | No | Bank account UUID identifier. Either bank_account_code or bank_account_id must be provided. |
| `BankAccountCode` | string | No | Short alphanumeric account code (e.g., '090', '091'), not the account name. Maximum 10 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact

**Slug:** `XERO_CREATE_CONTACT`

Create a new contact in Xero. Contacts can be customers, suppliers, or both.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Name` | string | Yes | Full name of the contact or organization. |
| `Website` | string | No | Website URL of the contact. |
| `LastName` | string | No | Last name of the contact person. |
| `FirstName` | string | No | First name of the contact person. |
| `TaxNumber` | string | No | Tax number (VAT/ABN/GST number). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `IsCustomer` | boolean | No | Mark as customer when true. |
| `IsSupplier` | boolean | No | Mark as supplier when true. |
| `EmailAddress` | string | No | Email address of the contact. |
| `phone_number` | string | No | Primary phone number (will be added as DEFAULT phone type). |
| `AccountNumber` | string | No | Account reference number for the contact. |
| `mobile_number` | string | No | Mobile phone number (will be added as MOBILE phone type). |
| `DefaultCurrency` | string | No | Default currency code (e.g., USD, EUR). |
| `BankAccountDetails` | string | No | Bank account details for the contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Credit Note

**Slug:** `XERO_CREATE_CREDIT_NOTE`

Create a new credit note in Xero. Credit notes are used to reduce amounts owed by customers (ACCRECCREDIT) or to suppliers (ACCPAYCREDIT).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Credit note date in YYYY-MM-DD format. |
| `Type` | string ("ACCRECCREDIT" | "ACCPAYCREDIT") | Yes | Credit note type: ACCRECCREDIT (accounts receivable credit) or ACCPAYCREDIT (accounts payable credit). |
| `Status` | string ("DRAFT" | "SUBMITTED" | "AUTHORISED") | No | Credit note status. |
| `unitdp` | integer | No | Unit decimal places (e.g., 4). You can opt in to use four decimal places for unit amounts. |
| `DueDate` | string | No | Due date in YYYY-MM-DD format. |
| `ContactID` | string | No | Xero Contact ID (UUID). At least one of contact_id or contact_name must be provided. |
| `LineItems` | array | No | List of line items for the credit note. |
| `Reference` | string | No | Reference or additional information. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, pass the same tenant_id consistently across all Xero tool calls. |
| `ContactName` | string | No | Contact name. At least one of contact_id or contact_name must be provided. |
| `CurrencyCode` | string | No | Currency code (e.g., USD, EUR). |
| `SentToContact` | boolean | No | Mark the credit note as sent to contact. Only applicable to AUTHORISED credit notes. |
| `BrandingThemeID` | string | No | Branding theme identifier (UUID). |
| `LineAmountTypes` | string ("Exclusive" | "Inclusive" | "NoTax") | No | Tax calculation method: Exclusive (amounts exclude tax), Inclusive (amounts include tax), or NoTax. |
| `CreditNoteNumber` | string | No | Credit note number. Omit this field to let Xero auto-generate a number from organisation settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice

**Slug:** `XERO_CREATE_INVOICE`

Create a new invoice in Xero. Supports both sales invoices (ACCREC) and bills (ACCPAY).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Invoice date in YYYY-MM-DD format. |
| `Type` | string ("ACCREC" | "ACCPAY") | Yes | Invoice type: ACCREC (accounts receivable/sales) or ACCPAY (accounts payable/bills). |
| `Status` | string ("DRAFT" | "SUBMITTED" | "AUTHORISED") | No | Invoice status. |
| `DueDate` | string | No | Due date in YYYY-MM-DD format. |
| `ContactID` | string | No | Xero Contact ID (UUID). At least one of contact_id or contact_name must be provided. |
| `LineItems` | array | Yes | List of line items for the invoice. |
| `Reference` | string | No | Reference or purchase order number. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, pass the same tenant_id consistently across all Xero tool calls. |
| `ContactName` | string | No | Contact name. At least one of contact_id or contact_name must be provided. |
| `CurrencyCode` | string | No | Currency code (e.g., USD, EUR). |
| `InvoiceNumber` | string | No | Invoice number (auto-generated if not provided). WARNING: If this matches an existing invoice number, Xero will attempt to UPDATE that invoice instead of creating a new one. Omit this field to ensure a new invoice is created, or ensure the number is unique. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Item

**Slug:** `XERO_CREATE_ITEM`

Create an inventory item in Xero. Items can be tracked for sales and/or purchases.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Code` | string | Yes | Unique item code (SKU). |
| `Name` | string | Yes | Item name/description. |
| `IsSold` | boolean | No | Item can be sold when true. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `IsPurchased` | boolean | No | Item can be purchased when true. |
| `SalesDetails.UnitPrice` | number | No | Unit price for sales. |
| `SalesDetails.AccountCode` | string | No | Account code for sales. |
| `PurchaseDetails.UnitPrice` | number | No | Unit price for purchases. |
| `PurchaseDetails.AccountCode` | string | No | Account code for purchases. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Manual Journal

**Slug:** `XERO_CREATE_MANUAL_JOURNAL`

Create one or more manual journals (journal entries) in Xero with journal lines. Manual journals must balance (debits equal credits).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Url` | string | No | URL link to a source document for reference, shown as 'Go to [appName]' in Xero |
| `Date` | string | Yes | Date journal was posted in YYYY-MM-DD format |
| `Status` | string ("DRAFT" | "POSTED") | No | Manual journal status. DRAFT for unposted journals, POSTED to finalize. Defaults to DRAFT if not specified |
| `Narration` | string | Yes | Description of journal being posted. This appears as the journal description in Xero |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant |
| `JournalLines` | array | Yes | Array of journal line items. Manual journals must balance (sum of debits must equal sum of credits) or an error is returned |
| `LineAmountTypes` | string ("Exclusive" | "Inclusive" | "NoTax") | No | Line amount type indicating whether amounts are inclusive or exclusive of tax. Defaults to NoTax if not specified |
| `idempotency_key` | string | No | Idempotency key to prevent duplicate journal creation. Recommended for production use. This is sent as a header, not in the body |
| `summarize_errors` | boolean | No | If true, API will return summarized validation errors. If false, detailed errors are returned. Query parameter only |
| `ShowOnCashBasisReports` | boolean | No | Boolean display indicator; defaults to true if not specified |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Payment

**Slug:** `XERO_CREATE_PAYMENT`

Create a payment in Xero to link an invoice with a bank account transaction.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Payment date in YYYY-MM-DD format. |
| `Amount` | number | Yes | Payment amount. |
| `AccountID` | string | Yes | Xero Account ID (bank account) for the payment. |
| `InvoiceID` | string | Yes | Xero Invoice ID that this payment is for. |
| `Reference` | string | No | Payment reference or description. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `CurrencyRate` | number | No | Exchange rate for foreign currency payments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Purchase Order

**Slug:** `XERO_CREATE_PURCHASE_ORDER`

Create a purchase order in Xero to order goods/services from suppliers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Purchase order date in YYYY-MM-DD format. |
| `Status` | string | No | Purchase order status: DRAFT, SUBMITTED, AUTHORISED, BILLED. |
| `ContactID` | string | Yes | Xero Contact ID for the purchase order. |
| `LineItems` | array | Yes | List of line items for the purchase order. |
| `Reference` | string | No | Reference or purchase order number. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `DeliveryDate` | string | No | Expected delivery date in YYYY-MM-DD format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Quote

**Slug:** `XERO_CREATE_QUOTE`

Create a new sales quote in Xero for a customer or prospect. Quotes can be sent to contacts for approval and later converted to invoices. Use this action when you need to create a formal price proposal or quotation for goods or services before issuing an invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Quote date in YYYY-MM-DD format. Defaults to current date if not specified. |
| `Terms` | string | No | Terms and conditions for the quote. |
| `Title` | string | No | Title of the quote. |
| `Status` | string ("DRAFT" | "SENT" | "ACCEPTED" | "DECLINED" | "INVOICED" | "DELETED") | No | Status values for a quote. |
| `Summary` | string | No | Summary description of the quote. |
| `ContactID` | string | No | Xero Contact ID (UUID). At least one of contact_id or contact_name must be provided. |
| `LineItems` | array | Yes | List of line items for the quote. At least one line item is required. |
| `Reference` | string | No | Additional reference or purchase order number. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, pass the same tenant_id consistently across all Xero tool calls. |
| `ExpiryDate` | string | No | Quote expiry date in YYYY-MM-DD format. |
| `ContactName` | string | No | Contact name. At least one of contact_id or contact_name must be provided. |
| `QuoteNumber` | string | No | Unique quote number (auto-generated if not provided). Max 255 characters. |
| `CurrencyCode` | string | No | Currency code (3-letter ISO 4217 code, e.g., USD, EUR, GBP). |
| `CurrencyRate` | number | No | The currency rate for a multicurrency quote. If not specified, uses XE.com day rate. |
| `BrandingThemeID` | string | No | Branding theme identifier (UUID). |
| `LineAmountTypes` | string ("Exclusive" | "Inclusive" | "NoTax") | No | Line amount types for quotes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account

**Slug:** `XERO_GET_ACCOUNT`

Retrieve a specific account from Xero's chart of accounts by its unique ID. Returns detailed account information including code, name, type (BANK, REVENUE, EXPENSE, etc.), status (ACTIVE/ARCHIVED), tax settings, bank details (for BANK accounts), and classification. Use XERO_LIST_ACCOUNTS to get account IDs if you don't already have one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID (UUID format). If not provided, uses the first connected tenant. |
| `account_id` | string | Yes | Xero Account ID (UUID format, e.g., '562555f2-8cde-4ce9-8203-0363922537a4'). Get account IDs from XERO_LIST_ACCOUNTS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Asset

**Slug:** `XERO_GET_ASSET`

Retrieve a specific asset by ID from Xero. Returns depreciation details and book value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `asset_id` | string | Yes | Xero Asset ID to retrieve. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Balance Sheet Report

**Slug:** `XERO_GET_BALANCE_SHEET_REPORT`

Retrieve Balance Sheet report from Xero. Shows assets, liabilities, and equity at a specific date. Liability and credit balances appear as negative numbers in the response. Response structure is Reports → Rows → Sections; account lines are nested inside group sections and summary totals (e.g., 'Total Current Assets') appear in SummaryRows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | No | Balance sheet as of this date in YYYY-MM-DD format. Should align with the organisation's financial year settings; misaligned dates may produce unexpected figures. |
| `periods` | integer | No | Number of periods to compare. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org connections, omitting this returns the first tenant's data silently — always pass explicitly when multiple orgs are connected. |
| `timeframe` | string | No | Timeframe period: MONTH, QUARTER, or YEAR. |
| `paymentsOnly` | boolean | No | Show only cash transactions when true (cash basis). |
| `standardLayout` | boolean | No | Use standard layout when true. |
| `trackingOptionID` | string | No | Filter by tracking option ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bank Transaction

**Slug:** `XERO_GET_BANK_TRANSACTION`

Retrieve a specific spent or received money transaction from Xero by its unique bank transaction ID. Returns full transaction details including line items, contact, bank account, amounts, and reconciliation status. Use this action when you need to fetch the details of a specific bank transaction that was previously created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `unitdp` | integer | No | Number of decimal places for unit amounts (e.g., 4 for four decimal places). Allows opt-in to use four decimal places for unit amounts. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `bank_transaction_id` | string | Yes | Xero generated unique identifier for a bank transaction (UUID format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Budget

**Slug:** `XERO_GET_BUDGET`

Retrieve a budget from Xero. Budgets track planned vs actual spending by account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `DateTo` | string | No | End date for budget data in YYYY-MM-DD format. |
| `DateFrom` | string | No | Start date for budget data in YYYY-MM-DD format. |
| `budget_id` | string | Yes | Xero Budget ID to retrieve. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Connections

**Slug:** `XERO_GET_CONNECTIONS`

Tool to list active Xero connections. Use to retrieve all current tenant connections for the authenticated user and resolve the correct tenant_id before making data requests. When multiple tenants are returned, never assume the first connection is correct — always explicitly pass the intended tenant_id to every subsequent call. Using a wrong or stale tenant_id can silently return or modify data for a different organisation.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contacts

**Slug:** `XERO_GET_CONTACTS`

Tool to retrieve a list of contacts. Use when you need up-to-date contact information with filtering, paging, or incremental updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `IDs` | array | No | Comma-separated list of ContactIDs to filter by. |
| `page` | integer | No | Page number for paginated results (requires pageSize). Iterate incrementing page until an empty result is returned to exhaust all records. |
| `order` | string | No | Sort by field, e.g. UpdatedDateUTC DESC. |
| `where` | string | No | OData-style filter for querying contacts. Optimized fields: Name, EmailAddress, AccountNumber, TaxNumber, ContactStatus, City, Country, IsCustomer, IsSupplier. Note: On high-volume accounts, some filters (e.g., IsCustomer, IsSupplier) may be rejected by Xero. If a filter fails on high-volume accounts, use searchTerm, page/pageSize pagination, or remove the where filter. |
| `pageSize` | integer | No | Number of contacts per page (requires page). |
| `ContactID` | string | No | Xero ContactID. If provided, fetches a single contact at /Contacts/{ContactID}. |
| `searchTerm` | string | No | Case-insensitive search across Name, FirstName, LastName, ContactNumber, CompanyNumber, EmailAddress. |
| `summaryOnly` | boolean | No | Return a lightweight summary-only response when true. |
| `includeArchived` | boolean | No | Include archived contacts when true. |
| `If-Modified-Since` | string | No | UTC timestamp (YYYY-MM-DDThh:mm:ss) to set as the If-Modified-Since header; returns only contacts created or modified since this timestamp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Credit Note

**Slug:** `XERO_GET_CREDIT_NOTE`

Retrieve a specific credit note by ID from Xero. Returns full credit note details including line items, allocations, and status. Use this action when you need to fetch detailed information about a single credit note by its UUID identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `unitdp` | integer | No | Number of decimal places for unit amounts (default 4). You can opt in to use four decimal places for unit amounts. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, always pass explicitly to avoid querying the wrong organisation's data. |
| `credit_note_id` | string | Yes | Xero Credit Note ID to retrieve. Must be the internal UUID (e.g. `a1b2c3d4-...`), not the human-readable CreditNoteNumber (e.g. `CN-0001`); obtain the UUID via XERO_LIST_CREDIT_NOTES first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice

**Slug:** `XERO_GET_INVOICE`

Retrieve a specific invoice by ID from Xero. Returns full invoice details including line items and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `unitdp` | integer | No | Number of decimal places for unit amounts (default 4). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, always pass explicitly to avoid querying the wrong organisation's data. |
| `invoice_id` | string | Yes | Xero Invoice ID to retrieve. Must be the internal UUID (e.g. `a1b2c3d4-...`), not the human-readable InvoiceNumber (e.g. `INV-0001`); obtain the UUID via XERO_LIST_INVOICES first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Item

**Slug:** `XERO_GET_ITEM`

Retrieve a specific item by ID from Xero. Returns item code, name, pricing, and tax details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | string | Yes | Xero Item ID to retrieve. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Manual Journal

**Slug:** `XERO_GET_MANUAL_JOURNAL`

Retrieve a specific manual journal by ID from Xero. Returns full details including journal lines.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `manual_journal_id` | string | Yes | Xero Manual Journal ID to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Organisation

**Slug:** `XERO_GET_ORGANISATION`

Retrieve organisation details from Xero. Returns company info, base currency, timezone, financial year settings, SalesTaxBasis, SalesTaxPeriod, etc. Response fields are nested under data.data.Organisations[0]. Use Timezone when computing date ranges to avoid boundary errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-tenant setups, omitting this defaults to the first tenant which may be unintended; use XERO_GET_CONNECTIONS to confirm the correct tenant_id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Payment

**Slug:** `XERO_GET_PAYMENT`

Retrieve a specific payment by ID from Xero. Returns full payment details including associated invoice, account, and reconciliation status. Use this action when you need to inspect a particular payment record to verify its status, amount, or linked transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, always pass explicitly to avoid querying the wrong organisation's data. |
| `payment_id` | string | Yes | Unique identifier for the Payment. Must be the internal UUID (e.g., `a1b2c3d4-...`), not a payment reference; obtain the UUID via XERO_LIST_PAYMENTS first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Profit & Loss Report

**Slug:** `XERO_GET_PROFIT_LOSS_REPORT`

Retrieve Profit & Loss report from Xero. Shows income, expenses, and net profit for a specified period. Response rows are labeled (e.g., 'Net Profit', SummaryRow); parse by row label, not array index. Aggregates multiple tax codes — not suitable for tax compliance reporting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `toDate` | string | No | End date for the report in YYYY-MM-DD format. Date range between fromDate and toDate must not exceed 365 days. |
| `periods` | integer | No | Number of periods to compare (e.g., for month-on-month comparison). |
| `fromDate` | string | No | Start date for the report in YYYY-MM-DD format. Date range between fromDate and toDate must not exceed 365 days. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `timeframe` | string | No | Timeframe period: MONTH, QUARTER, or YEAR. |
| `paymentsOnly` | boolean | No | Show only cash transactions when true (cash basis). |
| `standardLayout` | boolean | No | Use standard layout when true. |
| `trackingOptionID` | string | No | Filter by tracking option ID. |
| `trackingOptionID2` | string | No | Filter by second tracking option ID. |
| `trackingCategoryID` | string | No | Filter by tracking category ID. |
| `trackingCategoryID2` | string | No | Filter by second tracking category ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project

**Slug:** `XERO_GET_PROJECT`

Retrieve a specific project by ID from Xero. Returns project details, deadlines, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `project_id` | string | Yes | Xero Project ID to retrieve. Must be a valid GUID format (e.g., '550e8400-e29b-41d4-a716-446655440000'); job numbers or non-GUID strings will fail. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Purchase Order

**Slug:** `XERO_GET_PURCHASE_ORDER`

Retrieve a specific purchase order by ID from Xero. Returns full details including line items and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `purchase_order_id` | string | Yes | Xero Purchase Order ID to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Quotes

**Slug:** `XERO_GET_QUOTES`

Tool to retrieve a list of quotes. Use when you need to list, filter, or page through sales quotes. Use after obtaining the tenant ID via connections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results (1-based). |
| `order` | string | No | Order by any element, e.g., ExpiryDate ASC. |
| `DateTo` | string | No | Filter for quotes on or before this date (YYYY-MM-DD). |
| `Status` | string | No | Filter for quotes of a particular status. |
| `DateFrom` | string | No | Filter for quotes on or after this date (YYYY-MM-DD). |
| `ContactID` | string | No | Filter for quotes belonging to a particular contact by ContactID. |
| `tenant_id` | string | No | Xero Tenant ID. Optional - will auto-fetch from connections if not provided. |
| `QuoteNumber` | string | No | Filter by quote number. |
| `ExpiryDateTo` | string | No | Filter for quotes expiring on or before this date (YYYY-MM-DD). |
| `ExpiryDateFrom` | string | No | Filter for quotes expiring on or after this date (YYYY-MM-DD). |
| `If-Modified-Since` | string | No | Only return quotes modified after this UTC timestamp in RFC3339 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Trial Balance Report

**Slug:** `XERO_GET_TRIAL_BALANCE_REPORT`

Retrieve Trial Balance report from Xero. Shows all account balances (debits and credits) at a specific date. Use to verify that total debits equal total credits and to prepare financial statements. Credit balances appear as negative numbers in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | No | The date for the Trial Balance report in YYYY-MM-DD format (e.g., 2018-03-31). If not specified, defaults to current date. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org connections, omitting this returns the first tenant's data silently — always pass explicitly when multiple orgs are connected. |
| `paymentsOnly` | boolean | No | Return cash only basis for the Trial Balance report when true (cash basis accounting). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Accounts

**Slug:** `XERO_LIST_ACCOUNTS`

Retrieve chart of accounts from Xero. Returns all accounting codes used for categorizing transactions. Use AccountID (not name or code) as the unique identifier for accounts. Results may be paginated; increment the page parameter until empty results are returned to avoid missing accounts in large organisations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order` | string | No | Sort by field, e.g. Code ASC or Name DESC. |
| `where` | string | No | OData-style filter, e.g. Status=="ACTIVE" AND Type=="EXPENSE" Invalid syntax silently returns empty or misleading results rather than an explicit error. Status-based filters (e.g., Status=="ACTIVE") exclude archived accounts; omit to retrieve full historical chart. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. Always specify when multiple organisations exist — omitting it defaults to the first tenant and may return another entity's data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assets

**Slug:** `XERO_LIST_ASSETS`

Retrieve fixed assets from Xero. Assets track depreciation and book value of capital equipment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. Defaults to 1. |
| `status` | string | No | Required. Asset status filter. Valid values: DRAFT, REGISTERED, DISPOSED. Defaults to DRAFT. |
| `orderBy` | string | No | Sort field. Valid values: AssetType, AssetName, AssetNumber, PurchaseDate, PurchasePrice. For DISPOSED status, also allows: DisposalDate, DisposalPrice. |
| `filterBy` | string | No | Filter string to search assets. Matches against AssetName, AssetNumber, Description, and AssetTypeName fields. |
| `pageSize` | integer | No | Number of assets per page. Defaults to 10. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `sortDirection` | string | No | Sort direction. Valid values: asc, desc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Attachments

**Slug:** `XERO_LIST_ATTACHMENTS`

List all attachments for a specific entity in Xero (invoice, contact, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entity_id` | string | Yes | ID of the entity to list attachments for. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `entity_type` | string | Yes | Entity type: Invoices, Contacts, BankTransactions, CreditNotes, PurchaseOrders, etc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bank Transactions

**Slug:** `XERO_LIST_BANK_TRANSACTIONS`

Retrieve bank transactions from Xero. Includes SPEND, RECEIVE, and transfer types; unfiltered results include DELETED transactions that skew totals. Dates returned in /Date(milliseconds_since_epoch)/ format. Rate limit: ~60 requests/minute per org; heavy pagination may trigger 429 errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. Returns max 100 items per page; no total count provided. Iterate by incrementing page until response returns zero results. |
| `order` | string | No | Sort by field, e.g. Date DESC or UpdatedDateUTC ASC. Default ordering is unreliable; always specify explicitly (e.g., Date DESC). |
| `where` | string | No | OData-style filter, e.g. Status=="AUTHORISED" AND Type=="SPEND" String values require double quotes; field names must be exact (e.g., BankAccount.AccountID, IsReconciled, Status, Type). Malformed expressions or wrong field names silently return empty results. Always filter by Status (e.g., Status=="AUTHORISED") to exclude DELETED transactions. Use IsReconciled boolean for reconciliation filtering, not Status alone. |
| `unitdp` | integer | No | Decimal places for unit amounts (default 4). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, always provide explicitly to avoid targeting the wrong organisation. |
| `If-Modified-Since` | string | No | UTC timestamp to return only bank transactions modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Credit Notes

**Slug:** `XERO_LIST_CREDIT_NOTES`

Retrieve list of credit notes from Xero. Credit notes are issued to reduce amounts owed by customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. |
| `order` | string | No | Sort by field, e.g. Date DESC or CreditNoteNumber ASC. |
| `where` | string | No | OData-style filter, e.g. Status=="AUTHORISED" |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `If-Modified-Since` | string | No | UTC timestamp to return only credit notes modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Files

**Slug:** `XERO_LIST_FILES`

Retrieve files from Xero Files. Lists documents stored in Xero's file management system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. |
| `sort` | string | No | Sort field: Name, Size, CreatedDateUTC. |
| `folderId` | string | No | Filter files by folder ID. |
| `pagesize` | integer | No | Number of files per page (max 100). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Folders

**Slug:** `XERO_LIST_FOLDERS`

Retrieve folders from Xero Files. Lists document folders in Xero's file management system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Sort field: Name, CreatedDateUTC. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoices

**Slug:** `XERO_LIST_INVOICES`

Retrieve a list of invoices from Xero. Results include both sales invoices (Type=ACCREC) and bills (Type=ACCPAY) by default; filter by Type in the `where` clause when only one is needed. Supports filtering by status, contact, date range, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. Returns up to 100 invoices per page; increment page and check `pagination.pageCount` in the response to retrieve all records. |
| `order` | string | No | Sort by field, e.g. Date DESC or InvoiceNumber ASC. |
| `where` | string | No | OData-style filter, e.g. Status=="AUTHORISED" AND Total>100 Malformed expressions silently return empty results rather than an error. |
| `Statuses` | string | No | Comma-separated list of invoice statuses to filter by (e.g., DRAFT, SUBMITTED, AUTHORISED, PAID). |
| `tenantId` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. When multiple organisations are connected, always pass this explicitly to avoid querying the wrong organisation's data. |
| `ContactIDs` | string | No | Comma-separated list of Contact IDs to filter invoices by contact. |
| `InvoiceIDs` | string | No | Comma-separated list of Invoice IDs to filter by. |
| `createdByMyApp` | boolean | No | Filter to invoices created by your app when true. |
| `includeArchived` | boolean | No | Include archived invoices when true. |
| `If-Modified-Since` | string | No | UTC timestamp to return only invoices modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Items

**Slug:** `XERO_LIST_ITEMS`

Retrieve items (inventory/products) from Xero. Items can be tracked for sales and/or purchases.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order` | string | No | Sort by field, e.g. Code ASC or Name DESC. |
| `where` | string | No | OData-style filter, e.g. IsSold==true AND IsPurchased==true |
| `unitdp` | integer | No | Number of decimal places for unit amounts (default 4). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Journals

**Slug:** `XERO_LIST_JOURNALS`

Retrieve journals from Xero. Journals show the accounting entries for all transactions. Omitting filters returns the full historical journal ledger and can produce very large responses — use If-Modified-Since and/or paymentsOnly to narrow scope. No date range filter parameter exists. Results are returned inside a Journals array field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | integer | No | Offset for pagination. Increment by 100 (the page size) across successive calls to retrieve all journals. Deduplicate results by JournalNumber to avoid gaps or duplicates. |
| `tenantId` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `paymentsOnly` | boolean | No | Filter to payment journals only when true. |
| `If-Modified-Since` | string | No | UTC timestamp to return only journals modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Manual Journals

**Slug:** `XERO_LIST_MANUAL_JOURNALS`

Retrieve manual journals from Xero. Manual journals are used for period-end adjustments and corrections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. |
| `order` | string | No | Sort by field, e.g. Date DESC. |
| `where` | string | No | OData-style filter, e.g. Status=="POSTED" |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `If-Modified-Since` | string | No | UTC timestamp to return only manual journals modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Payments

**Slug:** `XERO_LIST_PAYMENTS`

Retrieve list of payments from Xero. Payments link invoices to bank transactions; invoices may have multiple partial/split payment records. Response Date fields use Xero's /Date(milliseconds)/ format requiring custom parsing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. Returns max 100 items per page; iterate incrementing page until response returns empty array. Xero enforces ~60 requests/minute per org (HTTP 429 if exceeded). |
| `order` | string | No | Sort by field, e.g. Date DESC or Amount ASC. |
| `where` | string | No | OData-style filter, e.g. Status=="AUTHORISED" Results include both ACCREC and ACCPAY types; filter by Type=="ACCREC" or Type=="ACCPAY" to isolate sales or bill payments. Avoid strict Reference matching as format variations may miss valid records. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. Wrong tenant_id silently returns empty results; verify with XERO_GET_CONNECTIONS before large pulls. |
| `If-Modified-Since` | string | No | UTC timestamp to return only payments modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Projects

**Slug:** `XERO_LIST_PROJECTS`

Retrieve projects from Xero. Projects track time and costs for client work.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. |
| `states` | string | No | Comma-separated project states: INPROGRESS, CLOSED. |
| `pageSize` | integer | No | Number of projects per page (1-500, default 50). |
| `contactID` | string | No | Filter projects by contact ID. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `projectIds` | string | No | Comma-separated list of project IDs to filter by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Purchase Orders

**Slug:** `XERO_LIST_PURCHASE_ORDERS`

Retrieve list of purchase orders from Xero. Purchase orders track goods/services ordered from suppliers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. |
| `order` | string | No | Sort by field, e.g. Date DESC or PurchaseOrderNumber ASC. |
| `DateTo` | string | No | Filter by date to (YYYY-MM-DD). |
| `Status` | string | No | Filter by status: DRAFT, SUBMITTED, AUTHORISED, BILLED, DELETED. |
| `DateFrom` | string | No | Filter by date from (YYYY-MM-DD). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `If-Modified-Since` | string | No | UTC timestamp to return only purchase orders modified since this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Quotes

**Slug:** `XERO_LIST_QUOTES`

Retrieve a list of sales quotes from Xero with optional filtering and pagination. Supports filtering by date ranges, contact, status, and quote number. Returns up to 100 quotes per page with full line item details. Use this action when you need to query, list, or search for quotes in a Xero organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results. Up to 100 quotes will be returned in a single API call with line items shown for each quote. |
| `order` | string | No | Order by any element. Specify field name and optionally ASC or DESC. |
| `DateTo` | string | No | Filter for quotes on or before this date (YYYY-MM-DD). |
| `Status` | string | No | Filter for quotes of a particular status. |
| `DateFrom` | string | No | Filter for quotes on or after this date (YYYY-MM-DD). |
| `ContactID` | string | No | Filter for quotes belonging to a particular contact by ContactID. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. When multiple organisations are connected, always pass this explicitly to avoid querying the wrong organisation's data. |
| `QuoteNumber` | string | No | Filter by quote number. |
| `ExpiryDateTo` | string | No | Filter for quotes expiring on or before this date (YYYY-MM-DD). |
| `ExpiryDateFrom` | string | No | Filter for quotes expiring on or after this date (YYYY-MM-DD). |
| `if_modified_since` | string | No | Only return quotes modified after this timestamp. Use ISO 8601 format (e.g., 2020-02-06T12:17:43.202-08:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tax Rates

**Slug:** `XERO_LIST_TAX_RATES`

Retrieve tax rates from Xero. Shows available tax codes and rates for the organization. Use returned tax codes as valid `TaxType` values in other tools — invalid values cause ValidationException errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order` | string | No | Sort by field, e.g. Name ASC. |
| `where` | string | No | OData-style filter, e.g. Status=="ACTIVE" |
| `TaxType` | string | No | Filter by specific tax type. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org connections, always specify to avoid retrieving tax config from the wrong organisation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tracking Categories

**Slug:** `XERO_LIST_TRACKING_CATEGORIES`

Retrieve tracking categories from Xero. Tracking categories are used to segment data for reporting (e.g., departments, regions).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order` | string | No | Sort by field, e.g. Name ASC. |
| `where` | string | No | OData-style filter, e.g. Status=="ACTIVE" |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `includeArchived` | boolean | No | Include archived tracking categories when true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Invoice

**Slug:** `XERO_POST_INVOICE_UPDATE`

Tool to update an existing invoice. Use when you need to modify the details of an invoice after it's been created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `unitdp` | integer | No | Number of decimal places for unit amounts. |
| `Invoices` | array | Yes | List containing invoice update definitions (one item). |
| `InvoiceID` | string | No | Unique identifier (UUID) of the invoice. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `InvoiceNumber` | string | No | Invoice number identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Bank Transaction

**Slug:** `XERO_UPDATE_BANK_TRANSACTION`

Update an existing bank transaction in Xero. Use this action when you need to modify details of a previously created bank transaction such as line items, reference, date, or status. Note: Reconciled transactions cannot be updated and will return a validation error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Transaction date in YYYY-MM-DD format. |
| `Type` | string ("SPEND" | "RECEIVE") | No | Transaction type: SPEND (payment out) or RECEIVE (money in). |
| `Status` | string ("AUTHORISED" | "DELETED") | No | Transaction status: AUTHORISED or DELETED. |
| `unitdp` | integer | No | Number of decimal places for unit amounts. |
| `ContactID` | string | No | Xero Contact ID for the transaction. |
| `LineItems` | array | No | List of line items for the bank transaction. |
| `Reference` | string | No | Reference or transaction description. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `CurrencyCode` | string | No | Currency code (e.g., USD, EUR). |
| `BankAccountID` | string | No | Bank account UUID identifier. |
| `BankAccountCode` | string | No | Short alphanumeric account code (e.g., '090', '091'), not the account name. Maximum 10 characters. |
| `BankTransactionID` | string | Yes | Xero identifier for the bank transaction to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Contact

**Slug:** `XERO_UPDATE_CONTACT`

Update an existing contact in Xero. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Name` | string | No | Full name of the contact or organization. |
| `LastName` | string | No | Last name of the contact person. |
| `ContactID` | string | Yes | Xero Contact ID to update. |
| `FirstName` | string | No | First name of the contact person. |
| `TaxNumber` | string | No | Tax number (VAT/ABN/GST number). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `EmailAddress` | string | No | Email address of the contact. |
| `phone_number` | string | No | Primary phone number (will update DEFAULT phone type). |
| `AccountNumber` | string | No | Account reference number for the contact. |
| `mobile_number` | string | No | Mobile phone number (will update MOBILE phone type). |
| `DefaultCurrency` | string | No | Default currency code (e.g., USD, EUR). |
| `BankAccountDetails` | string | No | Bank account details for the contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Credit Note

**Slug:** `XERO_UPDATE_CREDIT_NOTE`

Updates a specific credit note in Xero by its unique identifier. This action allows you to modify credit note details such as status, line items, reference numbers, and other fields after the credit note has been created. Use this action when you need to change the status of a credit note (e.g., from DRAFT to AUTHORISED), update line items, modify reference information, or make other changes to an existing credit note. The credit note must already exist in Xero - use the credit_note_id to specify which credit note to update. Not all fields can be updated depending on the current status of the credit note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Status` | string ("DRAFT" | "SUBMITTED" | "DELETED" | "AUTHORISED" | "PAID" | "VOIDED") | No | Status of the credit note. Use this action when you need to change the status, update line items, or modify other credit note details after creation. |
| `unitdp` | integer | No | Unit decimal places. You can opt in to use four decimal places for unit amounts (e.g., unitdp=4). |
| `LineItems` | array | No | List of line items for the credit note. Provide this to update the line items on the credit note. |
| `Reference` | string | No | Additional reference number for ACCRECCREDIT credit notes. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. In multi-org setups, pass the same tenant_id consistently across all Xero tool calls. |
| `CreditNoteID` | string | Yes | Unique identifier for the Credit Note to update. |
| `CurrencyCode` | string | No | Currency code for the credit note (e.g., USD, EUR). 3-letter ISO 4217 code. |
| `CurrencyRate` | number | No | Exchange rate for multi-currency credit notes. Maximum 18 digits with 6 decimal places. |
| `SentToContact` | boolean | No | Boolean to set whether the credit note should be marked as 'sent' to the contact. Only applicable to AUTHORISED credit notes. |
| `BrandingThemeID` | string | No | Identifier for the branding theme to apply to the credit note. |
| `Idempotency-Key` | string | No | Allows you to safely retry requests without the risk of duplicate processing. Maximum 128 characters. |
| `LineAmountTypes` | string ("Exclusive" | "Inclusive" | "NoTax") | No | Line amount type specifying how tax is calculated. Exclusive: line amounts exclude tax, Inclusive: line amounts include tax, NoTax: no tax. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Manual Journal

**Slug:** `XERO_UPDATE_MANUAL_JOURNAL`

Update an existing manual journal (journal entry) in Xero by its ID. Use this action when you need to modify the narration, date, journal lines, status, or other properties of an existing manual journal. Manual journals must balance (debits equal credits) or the update will fail. Only DRAFT manual journals can have their journal lines updated; POSTED journals can have limited fields updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Url` | string | No | URL link to a source document for reference, shown as 'Go to [appName]' in Xero |
| `Date` | string | No | Date journal was posted in YYYY-MM-DD format |
| `Status` | string ("DRAFT" | "POSTED") | No | Manual journal status. DRAFT for unposted journals, POSTED to finalize |
| `Narration` | string | Yes | Description of journal being posted. This appears as the journal description in Xero |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant |
| `JournalLines` | array | No | Array of journal line items. Manual journals must balance (sum of debits must equal sum of credits) or an error is returned |
| `LineAmountTypes` | string ("Exclusive" | "Inclusive" | "NoTax") | No | Line amount type indicating whether amounts are inclusive or exclusive of tax |
| `idempotency_key` | string | No | Idempotency key to prevent duplicate updates. Recommended for production use. This is sent as a header, not in the body |
| `summarize_errors` | boolean | No | If true, API will return summarized validation errors. If false, detailed errors are returned. Query parameter only |
| `manual_journal_id` | string | Yes | Unique identifier for the ManualJournal to update |
| `ShowOnCashBasisReports` | boolean | No | Boolean display indicator; defaults to true if not specified |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Purchase Order

**Slug:** `XERO_UPDATE_PURCHASE_ORDER`

Updates a specific purchase order in Xero by its unique identifier. Use this action when you need to modify an existing purchase order's details such as line items, delivery information, status, or other fields. Only the fields provided in the request will be updated; fields not included will remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Purchase order date in YYYY-MM-DD format. |
| `Status` | string | No | Purchase order status: DRAFT, SUBMITTED, AUTHORISED, BILLED, DELETED. |
| `ContactID` | string | No | Xero Contact ID for the purchase order. |
| `LineItems` | array | No | List of line items for the purchase order. |
| `Reference` | string | No | Reference or purchase order number. |
| `Telephone` | string | No | The phone number for the person accepting the delivery. |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `AttentionTo` | string | No | The person that the delivery is going to. |
| `CurrencyCode` | string | No | The currency that purchase order has been raised in (ISO 4217 currency code). |
| `CurrencyRate` | number | No | The currency rate for a multicurrency purchase order. |
| `DeliveryDate` | string | No | Expected delivery date in YYYY-MM-DD format. |
| `SentToContact` | boolean | No | Boolean to set whether the purchase order should be marked as sent. |
| `BrandingThemeID` | string | No | Branding theme identifier. |
| `DeliveryAddress` | string | No | The address the goods are to be delivered to. |
| `LineAmountTypes` | string | No | Line amounts type: Exclusive, Inclusive, NoTax. |
| `purchase_order_id` | string | Yes | Unique identifier for the purchase order to update. |
| `ExpectedArrivalDate` | string | No | Expected arrival date in YYYY-MM-DD format. |
| `DeliveryInstructions` | string | No | A free text field for instructions (500 characters max). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Quote

**Slug:** `XERO_UPDATE_QUOTE`

Updates a specific quote in Xero by its QuoteID. Use this action when you need to modify an existing sales quote, such as changing its status, updating line items, contact details, dates, or other quote properties. Only the fields provided in the request will be updated - unprovided fields will remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Date` | string | No | Date on which the quote occurred in ISO 8601 format (YYYY-MM-DD). |
| `Terms` | string | No | Payment terms text for the quote. |
| `Title` | string | No | Title of the quote. |
| `Status` | string | No | Status of the quote. Possible values: DRAFT, SENT, ACCEPTED, INVOICED, DECLINED, DELETED. |
| `Contact` | object | No | Contact associated with a quote. |
| `QuoteID` | string | Yes | Unique identifier for the quote to update (UUID format). |
| `Summary` | string | No | Summary description of the quote. |
| `LineItems` | array | No | Array of line items in the quote. Required when creating a quote but optional for updates. |
| `Reference` | string | No | Reference for the quote. |
| `tenant_id` | string | No | Xero Tenant ID. Optional - will auto-fetch from connections if not provided. |
| `DateString` | string | No | Date on which the quote occurred in alternative string format. |
| `ExpiryDate` | string | No | Expiry date of the quote in ISO 8601 format (YYYY-MM-DD). |
| `QuoteNumber` | string | No | The quote number. Read-only - cannot be updated via API. |
| `CurrencyCode` | string | No | Currency code for the quote (ISO 4217 format). |
| `CurrencyRate` | number | No | Exchange rate if using foreign currency. |
| `BrandingThemeID` | string | No | GUID of the branding theme applied to the quote. |
| `Idempotency-Key` | string | No | This allows you to safely retry requests without the risk of duplicate processing. 128 character max. |
| `LineAmountTypes` | string | No | Specifies whether line amounts are tax inclusive or exclusive. Possible values: Exclusive, Inclusive, NoTax. |
| `ExpiryDateString` | string | No | Expiry date of the quote in alternative string format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Attachment

**Slug:** `XERO_UPLOAD_ATTACHMENT`

Upload a file attachment to a Xero entity (invoice, contact, etc.). Supports PDF, images, and documents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filename` | string | Yes | Filename for the attachment as it will appear in Xero (e.g., 'invoice-receipt.pdf'). Must include the file extension. |
| `entity_id` | string | Yes | UUID of the entity to attach the file to (e.g., InvoiceID, ContactID, BankTransactionID). |
| `tenant_id` | string | No | Xero tenant/organization ID. If not provided, uses the first connected tenant. |
| `entity_type` | string | Yes | Entity type to attach to. Valid values: Invoices, Contacts, BankTransactions, CreditNotes, Accounts, ManualJournals, PurchaseOrders, Quotes, Receipts, RepeatingInvoices. |
| `file_to_upload` | object | Yes | File to upload as attachment. |
| `include_online` | boolean | No | Set to true to include the attachment when sending online invoices to customers. Only applicable when entity_type is 'Invoices'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate Credential

**Slug:** `XERO_VALIDATE_CREDENTIAL`

Validate Xero API credentials by testing access to connected organisations. Returns success status and a message indicating whether authentication is working. Use this action when you need to verify that Xero API credentials are valid and properly configured before attempting other operations. This is particularly useful for troubleshooting authentication issues or confirming a new connection is operational.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
