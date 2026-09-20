# QuickBooks

Quickbooks is a cloud-based accounting software that helps you manage your finances, track your income and expenses, and get insights into your business

- **Category:** accounting
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 114
- **Triggers:** 0
- **Slug:** `QUICKBOOKS`
- **Version:** 20260721_00

## Frequently Asked Questions

### Why can QuickBooks OAuth show Cloudflare Error 1016 (Origin DNS error)?

If this appears while connecting QuickBooks and the auth config includes the `com.intuit.quickbooks.payment` scope, check whether the QuickBooks Payments module is enabled for the selected QuickBooks company.

That scope requires payment-module access in QuickBooks. If you do not need payment tools, remove `com.intuit.quickbooks.payment` from the auth config and reconnect. If you do need payment tools, enable QuickBooks Payments for that company/account, then start a fresh connection.

### Why can Claude block QuickBooks in consumer MCP sessions?

This behavior is intentional on Claude's side. QuickBooks has tools that can process payments, so Claude can classify it under Payment Processing and block execution in consumer MCP sessions. Use Claude Code or Claude Cowork with Composio through the CLI/developer path where the agent can still access QuickBooks through Composio.

### When should I use the sandbox QuickBooks API base URL for sandbox connections?

For QuickBooks sandbox accounts, pass `https://sandbox-quickbooks.api.intuit.com` as the URL/base URL when initiating the connection. Production connections should use the production Intuit API base URL.

## Tools

### Capture Charge

**Slug:** `QUICKBOOKS_CAPTURE_CHARGE`

Tool to capture funds for an existing charge that was authorized but not captured. Use when you need to complete a previously authorized payment transaction in QuickBooks Payments API. This action finalizes the charge and transfers the funds from the customer's payment method.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | string | No | The amount to capture. If not provided, captures the full authorized amount. For partial captures, specify the amount as a decimal string (e.g., '10.55', '25.00'). The amount must not exceed the authorized amount. |
| `context` | object | No | Additional context information for the capture. This is an optional field that can contain merchant-specific metadata or transaction context. |
| `charge_id` | string | Yes | The ID of the charge to capture. This is the unique identifier for the authorized charge in QuickBooks Payments (e.g., 'EMU123456789', 'ECH123456789'). Use this to capture funds from a charge that was previously authorized but not captured. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Account

**Slug:** `QUICKBOOKS_CREATE_ACCOUNT`

Create a new account in QuickBooks with the given parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | User recognizable name for the Account. Account.Name attribute must not contain double quotes (") or colon (:). |
| `active` | boolean | No | Whether or not the account is active. Inactive accounts may be hidden from display and cannot be posted to. Default is true if not specified. |
| `parent_ref` | object | No | Reference to another entity. |
| `description` | string | No | User-entered description for the account. May include information to guide bookkeepers in deciding what to post to the account. Maximum length is 100 characters for QuickBooks Online, 200 characters for QuickBooks Desktop. |
| `sub_account` | boolean | No | Specifies whether this is a subaccount. Set to true to create a subaccount. Must also provide parent_ref when true. |
| `account_type` | string ("Bank" | "Other Current Asset" | "Fixed Asset" | "Other Asset" | "Accounts Receivable" | "Equity" | "Expense" | "Other Expense" | "Cost of Goods Sold" | "Accounts Payable" | "Credit Card" | "Long Term Liability" | "Other Current Liability" | "Income" | "Other Income") | Yes | Type of the account to be created. Required field. Valid values: 'Bank', 'Other Current Asset', 'Fixed Asset', 'Other Asset', 'Accounts Receivable', 'Equity', 'Expense', 'Other Expense', 'Cost of Goods Sold', 'Accounts Payable', 'Credit Card', 'Long Term Liability', 'Other Current Liability', 'Income', 'Other Income'. |
| `currency_ref` | object | No | Reference to another entity. |
| `account_number` | string | No | User-defined account number to help the user in identifying the account within the chart-of-accounts and in deciding what should be posted to the account. must not contain colon (:). For France locales: |
| `opening_balance` | number | No | Opening balance amount when creating a new Balance Sheet account. Used only at account creation for accounts like Bank, Credit Card, etc. |
| `account_sub_type` | string | No | Sub-type of the account. Must use exact enum values (no spaces/slashes). Examples: 'AdvertisingPromotional' (NOT 'Advertising/Promotional'), 'Checking', 'Inventory', 'OtherCurrentAssets', 'Vehicles', 'RetainedEarnings', 'Insurance', 'InterestEarned'. See QuickBooks API docs for complete list. |
| `opening_balance_date` | string | No | Date of the opening balance. Format: YYYY-MM-DD. Required if opening_balance is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bank Account

**Slug:** `QUICKBOOKS_CREATE_BANK_ACCOUNT`

Create a new bank account on file for a customer in QuickBooks Payments API. Use this when you need to add ACH/eCheck payment capabilities for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Account holder name (full name of the person or business). |
| `phone` | string | No | Phone number associated with the bank account holder. |
| `customer_id` | string | Yes | The customer ID for whom to create the bank account. |
| `account_type` | string ("PERSONAL_CHECKING" | "PERSONAL_SAVINGS" | "BUSINESS_CHECKING" | "BUSINESS_SAVINGS") | Yes | Type of bank account. Must be one of: PERSONAL_CHECKING, PERSONAL_SAVINGS, BUSINESS_CHECKING, or BUSINESS_SAVINGS. |
| `account_number` | string | Yes | Bank account number. |
| `routing_number` | string | Yes | Bank routing number (must be valid and pass checksum validation). Use a valid 9-digit ABA routing number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bill

**Slug:** `QUICKBOOKS_CREATE_BILL`

Create a new bill in QuickBooks Online. A Bill is an AP transaction representing a request-for-payment from a third party for goods or services. Use this action when recording vendor bills for purchases, expenses, or services received.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of line items for the bill. At least one line item is required. Each line must specify DetailType, Amount, and the appropriate detail object. |
| `DueDate` | string | No | Date when payment for the bill is due in YYYY-MM-DD format. |
| `TxnDate` | string | No | Date of the transaction in YYYY-MM-DD format. Defaults to the current date if not provided. |
| `DocNumber` | string | No | Reference number for the bill (e.g., vendor invoice number). |
| `VendorRef` | object | Yes | Reference to the vendor from whom the bill is received. Required field. |
| `CurrencyRef` | object | No | Reference to the currency. Format: {'value': 'USD'}. |
| `PrivateNote` | string | No | User-entered private note about the bill. |
| `APAccountRef` | object | No | Reference to the Accounts Payable account. Format: {'value': 'account_id'}. If not specified, uses the default AP account. |
| `ExchangeRate` | number | No | Currency exchange rate for multi-currency transactions. |
| `SalesTermRef` | object | No | Reference to the payment terms. Format: {'value': 'term_id'}. Defines when payment is due. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default version. |
| `DepartmentRef` | object | No | Reference to the department. Format: {'value': 'department_id'}. |
| `GlobalTaxCalculation` | string | No | Method in which tax is applied. Valid values: TaxExcluded, TaxInclusive, NotApplicable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bill Payment

**Slug:** `QUICKBOOKS_CREATE_BILL_PAYMENT`

Create a bill payment in QuickBooks to record payment against one or more bills. Use when paying vendor bills via check or credit card.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of line items indicating which bills are being paid and the amounts applied to each. |
| `PayType` | string ("Check" | "CreditCard") | Yes | Payment method type. Must be either 'Check' or 'CreditCard'. |
| `TxnDate` | string | No | Date of the transaction in YYYY-MM-DD format. Defaults to current date if not specified. |
| `TotalAmt` | number | Yes | Total amount of the bill payment. Must be positive and match the sum of all line amounts. |
| `VendorRef` | object | Yes | Reference to the vendor receiving the payment. |
| `PrivateNote` | string | No | Private note for internal use, not visible to the vendor. Maximum 4000 characters. |
| `CheckPayment` | object | No | Check payment details for bill payment. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default from headers. |
| `DepartmentRef` | object | No | Reference to the department for location/department tracking. Must be a dict with 'value' key. |
| `CreditCardPayment` | object | No | Credit card payment details for bill payment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Class

**Slug:** `QUICKBOOKS_CREATE_CLASS`

Create a new class in QuickBooks Online. Use when you need to categorize transactions by department, location, or other business segments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the class. Must be unique and cannot contain a colon (:). |
| `Active` | boolean | No | Whether the class is active. Inactive classes are hidden from most display areas. Default is true. |
| `SubClass` | boolean | No | Whether this is a subclass. If true, ParentRef must be provided. |
| `ParentRef` | object | No | Reference to another entity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Credit Memo

**Slug:** `QUICKBOOKS_CREATE_CREDIT_MEMO`

Tool to create a new credit memo in QuickBooks Online. Use when issuing credit to a customer for returns, refunds, or adjustments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `line` | array | Yes | Array of line items for the credit memo. At least one line item is required. |
| `txn_date` | string | No | Transaction date in YYYY-MM-DD format. Defaults to current date if not provided. |
| `bill_addr` | object | No | Physical address structure. |
| `class_ref` | object | No | Reference to the class for categorization. Format: {'value': 'class_id'}. |
| `ship_addr` | object | No | Physical address structure. |
| `ship_date` | string | No | Shipping date in YYYY-MM-DD format. |
| `bill_email` | string | No | Email address to send the credit memo to. Must be a valid email format. |
| `doc_number` | string | No | Reference number for the credit memo (maximum 21 characters). |
| `currency_ref` | object | No | Reference to currency. |
| `custom_field` | array | No | Array of custom fields for the credit memo. |
| `customer_ref` | object | Yes | Reference to the customer receiving the credit memo. Required field. |
| `email_status` | string | No | Email status of the credit memo. Valid values: 'NotSet', 'NeedToSend', 'EmailSent'. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default version from headers. |
| `print_status` | string | No | Print status of the credit memo. Valid values: 'NotSet', 'NeedToPrint', 'PrintComplete'. |
| `private_note` | string | No | Private note about the credit memo, not visible to the customer. |
| `customer_memo` | string | No | Message to the customer that appears on the credit memo. Maximum 1000 characters. |
| `exchange_rate` | number | No | Exchange rate for currency conversion. |
| `department_ref` | object | No | Reference to the department associated with the credit memo. Format: {'value': 'department_id'}. |
| `sales_term_ref` | object | No | Reference to the sales term. Format: {'value': 'term_id'}. |
| `ship_method_ref` | object | No | Reference to the shipping method. Format: {'value': 'ship_method_id'}. |
| `global_tax_calculation` | string | No | Method in which tax is applied. Valid values: 'TaxExcluded', 'TaxInclusive', 'NotApplicable'. |
| `apply_tax_after_discount` | boolean | No | Whether to apply tax after discount. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer

**Slug:** `QUICKBOOKS_CREATE_CUSTOMER`

Create a new customer in QuickBooks with the given parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Fax` | object | No | Fax number of the customer. |
| `Job` | boolean | No | Whether this customer record represents a job. Default is false. |
| `Notes` | string | No | Free-form notes or comments about the customer. |
| `title` | string | No | Title of the person (max 16 characters - keep it short like 'Mr.', 'Dr.', 'CEO'). This tag supports i18n, all locales. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, Suffix, or FullyQualifiedName attributes are required during create. |
| `Active` | boolean | No | Whether the customer is currently active. Default is true. |
| `Mobile` | object | No | Mobile phone number of the customer. |
| `suffix` | string | No | Suffix of the name. For example, Jr. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `Balance` | number | No | Opening balance amount for this customer at the OpenBalanceDate. |
| `Taxable` | boolean | No | Whether the customer is taxable. Default is true. |
| `WebAddr` | object | No | Website address (URI) of the customer. |
| `BillAddr` | object | No | Billing address of the customer. |
| `ShipAddr` | object | No | Shipping address of the customer. |
| `ParentRef` | object | No | Reference to the immediate parent customer for sub-customers. |
| `ResaleNum` | string | No | Resale number or tax-exempt number for the customer. |
| `given_name` | string | No | Given name or first name of a person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `CompanyName` | string | No | Company name associated with the customer. |
| `CurrencyRef` | object | No | Reference to the currency used for transactions with this customer (e.g., {'value': 'USD'}). |
| `family_name` | string | No | Family name or the last name of the person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `middle_name` | string | No | Middle name of the person. The person can have zero or more middle names. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `PrimaryPhone` | object | No | Primary phone number of the customer. |
| `display_name` | string | No | The name as displayed. Must be unique across all Customer, Vendor, and Employee objects. Cannot be removed with sparse update. If not supplied, the system generates DisplayName by concatenating customer name components supplied in the request from the following list: Title, GivenName, MiddleName, FamilyName, and Suffix. |
| `AlternatePhone` | object | No | Alternate phone number of the customer. |
| `BillWithParent` | boolean | No | Whether this sub-customer should be billed with its parent customer. Default is false. |
| `OpenBalanceDate` | string | No | Date of the opening balance for the customer in YYYY-MM-DD format. |
| `PrimaryEmailAddr` | object | No | Primary email address of the customer. |
| `PrintOnCheckName` | string | No | Name to be printed on checks issued to this customer. If not provided, DisplayName is used. |
| `PreferredDeliveryMethod` | string ("Print" | "Email" | "None") | No | Preferred delivery method for invoices and communications. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deposit

**Slug:** `QUICKBOOKS_CREATE_DEPOSIT`

Creates a new deposit in QuickBooks Online. A deposit represents funds received and deposited to an asset account (typically a bank account). Use this action to record deposits of customer payments, refunds, or other funds into your bank accounts. Each deposit must specify the destination account and at least one line item showing the source and amount of funds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `line` | array | Yes | List of deposit line items. Each line item represents funds being deposited. At least one line is required. Each line must include: (1) 'Amount' as a positive number, (2) 'DetailType' set to 'DepositLineDetail', (3) 'DepositLineDetail' with 'AccountRef' containing the source account ID. Example: [{'Amount': 100.00, 'DetailType': 'DepositLineDetail', 'DepositLineDetail': {'AccountRef': {'value': '87'}}}] |
| `txn_date` | string | No | Transaction date for the deposit in YYYY-MM-DD format (e.g., '2026-02-23'). If not provided, the current date will be used. |
| `currency_ref` | object | No | Reference to a currency. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). If not specified, uses the default API version. |
| `private_note` | string | No | Private note about the deposit (internal use only). |
| `exchange_rate` | string | No | Exchange rate for multi-currency transactions. Default is 1 for home currency. |
| `department_ref` | object | No | Reference to a department. |
| `deposit_to_account_ref` | object | Yes | Reference to the asset account (bank account) where the deposit will be made. Must be a valid bank account ID. Example: {'value': '35'} for account ID 35. Use QUICKBOOKS_QUERY_ACCOUNT or QUICKBOOKS_READ_ACCOUNT to get valid account IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create eCheck Payment

**Slug:** `QUICKBOOKS_CREATE_ECHECK_PAYMENT`

Tool to create an eCheck payment using ACH bank transfer in QuickBooks Payments API. Use when processing payments from customer bank accounts via electronic check. The payment is debited directly from the customer's bank account using the provided routing and account numbers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | string | Yes | Payment amount as a string (e.g., '10.55', '100.00'). Must be a positive number with up to 2 decimal places. |
| `context` | object | No | Transaction context information. |
| `currency` | string | Yes | Currency code for the payment (e.g., 'USD'). Currently only USD is supported by QuickBooks Payments. |
| `bankAccount` | object | Yes | Bank account details from which the eCheck payment will be debited. Includes account number, routing number, account type, name, and phone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Employee

**Slug:** `QUICKBOOKS_CREATE_EMPLOYEE`

Create a new employee in QuickBooks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | object | No | Fax number of the employee. |
| `ssn` | string | No | Social Security Number. Maximum 15 characters for QuickBooks Online, 1024 characters for QuickBooks Desktop. |
| `title` | string | No | Title or honorific of the employee. |
| `active` | boolean | No | Indicates whether the entity is enabled. Default is true. Employees are deactivated (active=false) rather than deleted. |
| `gender` | string | No | Gender of the employee. |
| `mobile` | object | No | Mobile phone number of the employee. |
| `suffix` | string | No | Name suffix of the employee. QuickBooks Online only. Maximum 15 characters. |
| `web_addr` | object | No | Website address or URI associated with the employee. |
| `bill_rate` | number | No | Hourly billing rate for the employee. QuickBooks Online only. |
| `cost_rate` | number | No | Cost rate associated with the employee. |
| `birth_date` | string | No | Birth date of the employee, in YYYY-MM-DD format. |
| `given_name` | string | Yes | Given name (first name) of the employee. Required field. Maximum 100 characters. |
| `hired_date` | string | No | Date the employee was hired, in YYYY-MM-DD format. |
| `other_addr` | object | No | Other physical address(es) of the employee. |
| `family_name` | string | Yes | Family name (last name) of the employee. Required field. Maximum 100 characters. |
| `middle_name` | string | No | Middle name(s) of the employee. Maximum 5-15 characters depending on product. |
| `company_name` | string | No | Company name associated with the employee. |
| `custom_field` | array | No | Array of custom fields associated with the employee. |
| `display_name` | string | No | Display name of the employee. Must be unique across all customer, employee, and vendor objects. Populated from FullName if not provided. Must not contain colon, tab, or newline characters. |
| `organization` | boolean | No | Internal flag for organizational structure. |
| `primary_addr` | object | No | Physical street address for this employee. If QuickBooks Payroll is enabled for the company, the following address fields are required: city, country_sub_division_code, and postal_code. |
| `billable_time` | boolean | No | Indicates whether employee time is billable. QuickBooks Online only. |
| `employee_type` | string | No | Employee type classification. |
| `primary_phone` | object | No | Primary phone number of the employee. |
| `released_date` | string | No | Date the employee left the company, in YYYY-MM-DD format. |
| `use_time_entry` | boolean | No | Indicates whether time sheets create paychecks for this employee. |
| `alternate_phone` | object | No | Alternate phone number of the employee. |
| `employee_number` | string | No | Employee directory number. Maximum 15 for QuickBooks Online, 99 for QuickBooks Desktop. |
| `other_contact_info` | array | No | List of additional contact information entities. |
| `primary_email_addr` | object | No | Primary email address of the employee. |
| `print_on_check_name` | string | No | Name as it should appear on printed checks. |
| `default_tax_code_ref` | object | No | Reference to the default tax code associated with the employee. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Estimate

**Slug:** `QUICKBOOKS_CREATE_ESTIMATE`

Creates a new estimate in QuickBooks Online. An estimate represents a proposal for goods or services that a customer may purchase. Use this to provide pricing quotes to customers before they commit to a purchase. This action requires a valid customer ID and at least one line item with item details and amount. The created estimate can later be converted to an invoice when the customer accepts the proposal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lines` | array | Yes | List of estimate line items. Each line item must include DetailType, Amount, and appropriate detail object (e.g., SalesItemLineDetail for item-based lines). |
| `txn_date` | string | No | Date of the estimate transaction in YYYY-MM-DD format (e.g., '2024-01-15'). If not specified, the current date is used. |
| `bill_addr` | object | No | Physical address structure. |
| `class_ref` | object | No | Reference to a class for categorization. |
| `ship_addr` | object | No | Physical address structure. |
| `ship_date` | string | No | Date for delivery of goods or services in YYYY-MM-DD format (e.g., '2024-03-15'). |
| `bill_email` | string | No | Email address where the estimate should be sent. |
| `doc_number` | string | No | Reference number for the estimate. If not specified, QuickBooks generates one automatically. |
| `customer_id` | string | Yes | ID of the customer for whom the estimate is created. This is the unique identifier for the customer in QuickBooks (e.g., '1', '3'). Use QUICKBOOKS_READ_CUSTOMER or QUICKBOOKS_CREATE_CUSTOMER to get valid customer IDs. |
| `currency_ref` | object | No | Reference to a currency. |
| `custom_field` | array | No | Custom fields for the estimate. QuickBooks Online supports up to 3 custom fields. The custom fields must already exist in QuickBooks. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). If not specified, uses the default API version from headers. |
| `private_note` | string | No | User-entered private note about the estimate, not visible to the customer. Maximum 4000 characters. |
| `tracking_num` | string | No | Shipping provider's tracking number for the delivery of goods. Maximum 31 characters. |
| `customer_memo` | string | No | Message to the customer that appears on the estimate. |
| `exchange_rate` | number | No | The exchange rate for the transaction. Applicable if multi-currency is enabled. Defaults to 1. |
| `department_ref` | object | No | Reference to a department. |
| `sales_term_ref` | object | No | Reference to sales terms. |
| `expiration_date` | string | No | Date by which the estimate must be accepted in YYYY-MM-DD format (e.g., '2024-02-28'). |
| `ship_method_ref` | object | No | Reference to a shipping method. |
| `global_tax_calculation` | string | No | Method in which tax is applied. Valid values: TaxExcluded, TaxInclusive, NotApplicable. Default is TaxExcluded. |
| `apply_tax_after_discount` | boolean | No | If true, tax is applied after discount. If false or null, calculate sales tax first then apply discount. US QuickBooks companies only. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice

**Slug:** `QUICKBOOKS_CREATE_INVOICE`

Creates a new invoice in QuickBooks for a customer. An invoice represents a sales transaction where goods or services are sold to a customer on credit or for immediate payment. This action requires: - A valid customer ID (obtain from QUICKBOOKS_CREATE_CUSTOMER or QUICKBOOKS_READ_CUSTOMER) - At least one line item with a valid item/service ID and amount The created invoice will have a unique ID, document number, due date, total amount, and balance. Use this to bill customers for products or services rendered. To update the invoice later, re-read it first to obtain the current SyncToken; stale tokens cause update rejections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fob` | string | No | Free On Board (FOB) designation for shipping terms. Defines when ownership and liability transfer from seller to buyer. |
| `lines` | array | Yes | List of invoice line items. Each line item must be a dictionary with: (1) 'DetailType' set to 'SalesItemLineDetail', (2) 'Amount' as a number representing the line total, (3) 'SalesItemLineDetail' as a dictionary containing 'ItemRef' with a 'value' key for the item ID (e.g., {'ItemRef': {'value': '1'}}). Optional fields include 'Description' (text), 'Qty' (quantity as number), and 'UnitPrice' (price per unit as number). Example: [{'DetailType': 'SalesItemLineDetail', 'Amount': 100.00, 'SalesItemLineDetail': {'ItemRef': {'value': '1'}, 'Qty': 2, 'UnitPrice': 50.00}}] |
| `due_date` | string | No | Date when payment for the invoice is due in YYYY-MM-DD format (e.g., '2026-03-25'). Calculated from TxnDate and SalesTermRef if not explicitly provided. |
| `txn_date` | string | No | Date when the transaction occurred in YYYY-MM-DD format (e.g., '2026-02-25'). This is the posting date that affects financial statements. If not supplied, the current server date is used. |
| `bill_addr` | object | No | Bill-to address of the invoice. Provide as a dictionary with keys like 'Line1', 'City', 'CountrySubDivisionCode', 'PostalCode'. If not provided, defaults to the customer's billing address. |
| `class_ref` | object | No | Reference to the class associated with the transaction for categorization and reporting. Provide as a dictionary with 'value' key for the class ID (e.g., {'value': '5'}). |
| `po_number` | string | No | Purchase order number provided by the customer. Maximum 25 characters (QuickBooks Windows) or 15 characters (QuickBooks Online). |
| `requestid` | string | No | Optional idempotency key (maximum 50 characters) to prevent duplicate writes on retries. If provided, QuickBooks will not create a duplicate invoice if the same requestid is used again. |
| `ship_addr` | object | No | Shipping address for the invoice. Provide as a dictionary with keys like 'Line1', 'City', 'CountrySubDivisionCode', 'PostalCode'. If not provided, defaults to the customer's shipping address. |
| `ship_date` | string | No | Date when the product was shipped or service was performed in YYYY-MM-DD format (e.g., '2026-02-25'). |
| `bill_email` | object | No | Email address where the invoice should be sent. Provide as a dictionary with 'Address' key (e.g., {'Address': 'customer@example.com'}). |
| `doc_number` | string | No | Reference number for the transaction. Maximum 21 characters for QuickBooks Online. If not provided, QuickBooks auto-generates this by incrementing the last number. |
| `customer_id` | string | Yes | ID of the customer to invoice. This is the unique identifier for the customer in QuickBooks (e.g., '1', '92'). Use QUICKBOOKS_CREATE_CUSTOMER or QUICKBOOKS_READ_CUSTOMER to get valid customer IDs. Customer must be active; inactive customer IDs will cause invoice creation to fail. Similarly, all ItemRef values in `lines` must reference active items/services. |
| `project_ref` | object | No | Reference to the project associated with the invoice. Provide as a dictionary with 'value' key for the project ID (e.g., {'value': '10'}). |
| `currency_ref` | object | No | Reference to the currency in which all amounts on the invoice are expressed. Provide as a dictionary with 'value' key for the currency code (e.g., {'value': 'USD'}). |
| `custom_field` | array | No | Array of custom fields for the invoice. QuickBooks Online supports up to 3 custom fields. Each field should be a dictionary with 'DefinitionId', 'Name', 'Type', and value keys (e.g., [{'DefinitionId': '1', 'Name': 'Field1', 'Type': 'StringType', 'StringValue': 'Value1'}]). |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |
| `private_note` | string | No | User-entered, organization-private note about the transaction that will not appear on customer-facing records. Maximum 4000 characters. |
| `template_ref` | object | No | Reference to the template used for formatting the invoice. Provide as a dictionary with 'value' key for the template ID (e.g., {'value': '5'}). |
| `tracking_num` | string | No | Shipping provider's tracking number for the delivery. Maximum 31 characters. |
| `bill_email_cc` | object | No | CC email address for the invoice. Provide as a dictionary with 'Address' key (e.g., {'Address': 'cc@example.com'}). |
| `customer_memo` | object | No | User-entered message to the customer that appears on the invoice. Provide as a dictionary with 'value' key (e.g., {'value': 'Thank you for your business'}). Maximum 1000 characters. |
| `exchange_rate` | number | No | Currency exchange rate for multi-currency environments. Exchange rates are always recorded as the number of home currency units per one foreign currency unit. |
| `bill_email_bcc` | object | No | BCC email address for the invoice. Provide as a dictionary with 'Address' key (e.g., {'Address': 'bcc@example.com'}). |
| `department_ref` | object | No | Reference to the department for location tracking (QuickBooks Online). Provide as a dictionary with 'value' key for the department ID (e.g., {'value': '1'}). |
| `sales_term_ref` | object | No | Reference to the sales terms (payment terms) that determine the invoice due date. Provide as a dictionary with 'value' key for the term ID (e.g., {'value': '3'}). |
| `ship_from_addr` | object | No | Ship-from address for the invoice. Provide as a dictionary with keys like 'Line1', 'City', 'CountrySubDivisionCode', 'PostalCode'. |
| `txn_tax_detail` | object | No | Details of taxes charged on the transaction as a whole. Provide as a dictionary with 'TxnTaxCodeRef' and/or 'TaxLine' keys. QuickBooks automatically calculates this based on tax codes if not provided. |
| `ship_method_ref` | object | No | Reference to the shipping method. Provide as a dictionary with 'value' key for the shipping method ID (e.g., {'value': '2'}). |
| `allow_ipn_payment` | boolean | No | Specifies whether customer is allowed to use IPN (Instant Payment Notification) to pay the invoice. |
| `allow_online_payment` | boolean | No | Specifies whether customer is allowed to use eInvoicing (online payment) to pay the invoice. |
| `deposit_to_account_ref` | object | No | Reference to the asset account where payment deposits are recorded. Provide as a dictionary with 'value' key for the account ID (e.g., {'value': '35'}). |
| `global_tax_calculation` | string | No | Method used to apply taxes. Valid values: 'TaxExcluded', 'TaxInclusive', 'NotApplicable'. Default is 'TaxExcluded'. |
| `allow_online_ach_payment` | boolean | No | Permits customers to pay via electronic bank transfers (ACH) through eInvoicing. |
| `apply_tax_after_discount` | boolean | No | If false or null, calculate sales tax first then apply discount. If true, apply discount first then calculate tax. US QuickBooks companies only. |
| `allow_online_credit_card_payment` | boolean | No | Permits customers to pay via credit cards through eInvoicing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Item

**Slug:** `QUICKBOOKS_CREATE_ITEM`

Create a new item in QuickBooks Online. Items represent the products or services that a company buys, sells, or resells. Use when adding new inventory items, services, or non-inventory products to the QuickBooks catalog.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | User-recognizable name for the item. This is the name displayed in lists and forms in QuickBooks. |
| `type` | string ("Service" | "Inventory" | "NonInventory" | "Category" | "Bundle") | Yes | Classification specifying the use of this item. Valid values: 'Service' (services offered for sale), 'Inventory' (products bought and sold with quantity tracking - requires QuickBooks Online Plus or Advanced), 'NonInventory' (products bought and sold without quantity tracking), 'Category' (used to group items together), 'Bundle' (combination of products/services sold together). Different types have different required fields. |
| `active` | boolean | No | Whether the item is active and available for use. Default is true. |
| `taxable` | boolean | No | Whether sales of this item are subject to sales tax. Default is false. |
| `parent_ref` | object | No | Reference to another entity. |
| `unit_price` | number | No | Unit price of the item for sales. This is the default selling price per unit. |
| `description` | string | No | Description of the item that appears on sales forms such as invoices. This helps customers understand what they are purchasing. |
| `qty_on_hand` | number | No | Current quantity on hand for this inventory item. REQUIRED if TrackQtyOnHand is true. Must be a non-negative number. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |
| `purchase_cost` | number | No | Cost to purchase this item from vendors. This is the default purchase cost per unit. |
| `purchase_desc` | string | No | Description of the item for purchase forms. This is the description used when purchasing the item from vendors. |
| `inv_start_date` | string | No | Date when inventory tracking begins for this item. Format: YYYY-MM-DD. REQUIRED if TrackQtyOnHand is true. |
| `asset_account_ref` | object | No | Reference to another entity. |
| `track_qty_on_hand` | boolean | No | Whether quantity on hand is tracked for this item. If true, you must provide QtyOnHand and InvStartDate. Applicable for Inventory items. |
| `income_account_ref` | object | No | Reference to another entity. |
| `expense_account_ref` | object | No | Reference to another entity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Journal Entry

**Slug:** `QUICKBOOKS_CREATE_JOURNAL_ENTRY`

Tool to create a new journal entry in QuickBooks Online. Use when you need to make adjusting or correcting entries that directly affect account balances. Journal entries require at least two lines with total debits equaling total credits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of journal entry lines. Each journal entry must have at least two lines, and the total debits must equal the total credits. Typically includes at least one debit line and one credit line with matching amounts. |
| `TxnDate` | string | No | Transaction date for the journal entry in YYYY-MM-DD format. If not provided, the current date is used. |
| `DocNumber` | string | No | Reference number for the journal entry. Maximum 21 characters. |
| `Adjustment` | boolean | No | Indicates if this is an adjustment journal entry. Set to true for adjusting entries. |
| `CurrencyRef` | object | No | Reference to an entity. |
| `PrivateNote` | string | No | Private note about the journal entry. Maximum 4000 characters. |
| `ExchangeRate` | number | No | Exchange rate for multi-currency journal entries. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Payment

**Slug:** `QUICKBOOKS_CREATE_PAYMENT`

Creates a payment record in QuickBooks Online. The Payment entity records payment from customers against single or multiple invoices and credit memos. Use this action when recording customer payments, whether full payment of an invoice or partial payment across multiple invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lines` | array | Yes | List of payment line items specifying which invoices or credit memos the payment is applied to. Each line item must contain Amount and LinkedTxn fields. Example: [{'Amount': 50.0, 'LinkedTxn': [{'TxnId': '11', 'TxnType': 'Invoice'}]}] |
| `txn_date` | string | No | Date of the payment transaction in YYYY-MM-DD format (e.g., '2024-01-15'). If not specified, the current date is used. |
| `total_amt` | number | Yes | Total amount of the payment. This should equal the sum of all Line item amounts. Must be a positive number (e.g., 50.0, 100.0). |
| `customer_id` | string | Yes | ID of the customer making the payment. This is the unique identifier for the customer in QuickBooks (e.g., '3', '58'). Use QUICKBOOKS_CREATE_CUSTOMER or QUICKBOOKS_READ_CUSTOMER to get valid customer IDs. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |
| `private_note` | string | No | Private note about the payment. Not visible to the customer. Maximum 4000 characters. |
| `customer_name` | string | No | Name of the customer. Optional field that helps with readability but not required by the API. |
| `exchange_rate` | number | No | Exchange rate for the transaction when using multi-currency. Applicable only if multi-currency is enabled. Optional field. |
| `payment_ref_num` | string | No | Reference number for the payment, such as a check number or transaction ID. Optional field. |
| `process_payment` | boolean | No | Indicates whether the payment should be processed through QuickBooks Payments. Set to true to process the payment, false otherwise. Optional field. |
| `ar_account_ref_id` | string | No | ID of the accounts receivable account. Optional field. Use QuickBooks query API to get valid AR account IDs. |
| `currency_ref_value` | string | No | Currency code for multi-currency environments (e.g., 'USD', 'CAD', 'EUR'). Required if the company file uses multi-currency. Optional otherwise. |
| `credit_card_payment` | object | No | Credit card payment details when payment method is credit card. |
| `payment_method_ref_id` | string | No | ID of the payment method used (e.g., '1' for Cash, '2' for Check). Optional field. Use QuickBooks query API to get valid payment method IDs. |
| `deposit_to_account_ref_id` | string | No | ID of the asset account where this payment should be deposited. Optional field. If not provided, uses the default Undeposited Funds account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Purchase

**Slug:** `QUICKBOOKS_CREATE_PURCHASE`

Tool to create a new purchase transaction in QuickBooks Online. A purchase represents an expense such as a cash payment, check, or credit card purchase. Use when recording business expenses or making payments to vendors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of line items for the purchase. At least one line item is required. Each line must have an Amount and DetailType with corresponding detail object. |
| `TxnDate` | string | No | Date of the transaction in YYYY-MM-DD format (e.g., '2024-08-23'). If not provided, uses the current date. |
| `TotalAmt` | number | No | Total amount of the purchase including all line items. If not provided, QuickBooks will calculate it from the line items. Should match the sum of all line amounts. |
| `DocNumber` | string | No | Reference number for the purchase (e.g., check number). Maximum 21 characters. |
| `EntityRef` | object | No | Reference to an entity (vendor, customer, employee). |
| `AccountRef` | object | Yes | Reference to the account from which the payment is made (e.g., {'value': '19'} for a checking account or {'value': '42'} for a credit card account). |
| `CurrencyRef` | object | No | Reference to a currency. |
| `PaymentType` | string ("Cash" | "Check" | "CreditCard") | Yes | Payment method used for this purchase. Choose 'Cash', 'Check', or 'CreditCard'. |
| `PrivateNote` | string | No | Private note about the purchase, visible only to company users. Maximum 4000 characters. |
| `ExchangeRate` | number | No | Exchange rate for multi-currency transactions. Required if CurrencyRef is different from home currency. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). If not specified, uses the default API version from headers. |
| `DepartmentRef` | object | No | Reference to an account. |
| `PaymentMethodRef` | object | No | Reference to an entity (vendor, customer, employee). |
| `GlobalTaxCalculation` | string | No | Method used to apply tax on the transaction. Valid values: 'TaxExcluded', 'TaxInclusive', 'NotApplicable'. |
| `TransactionLocationType` | string | No | The location type of the transaction. Used for international tax calculations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Purchase Order

**Slug:** `QUICKBOOKS_CREATE_PURCHASE_ORDER`

Create a new purchase order in QuickBooks. Use when you need to send a request to a vendor to deliver goods or services.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fob` | string | No | Free On Board shipping terms indicating point of transfer of ownership. |
| `memo` | string | No | Memo or note about the purchase order visible on reports and to the vendor. |
| `lines` | array | Yes | List of line items for the purchase order. Each line must have an 'amount' (number), 'detail_type' ('ItemBasedExpenseLineDetail' or 'AccountBasedExpenseLineDetail'), and corresponding detail object. For item-based lines, include 'item_based_expense_line_detail' with an 'item_ref'. For account-based lines, include 'account_based_expense_line_detail' with an 'account_ref'. |
| `due_date` | string | No | Date when payment for the purchase order is due in YYYY-MM-DD format. |
| `po_email` | object | No | Email address structure. |
| `txn_date` | string | No | Transaction date of the purchase order in YYYY-MM-DD format. Defaults to the current date if not provided. |
| `class_ref` | object | No | Reference to another entity. |
| `ship_addr` | object | No | Physical address structure. |
| `total_amt` | number | Yes | Total amount of the purchase order. Should equal the sum of all line amounts. |
| `vendor_id` | string | Yes | ID of the vendor for this purchase order. Use QUICKBOOKS_CREATE_VENDOR or QUICKBOOKS_READ_VENDOR to get valid vendor IDs. |
| `doc_number` | string | No | Reference number for the purchase order. If not provided, QuickBooks will auto-generate it. |
| `vendor_addr` | object | No | Physical address structure. |
| `currency_ref` | object | No | Reference to another entity. |
| `custom_field` | array | No | Custom fields for the purchase order. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default API version. |
| `private_note` | string | No | Private note about the purchase order, not visible to the vendor. |
| `template_ref` | object | No | Reference to another entity. |
| `ap_account_id` | string | Yes | ID of the Accounts Payable account to use for this purchase order. This is typically the main AP account in your chart of accounts. |
| `exchange_rate` | number | No | Currency exchange rate for multi-currency transactions. |
| `expected_date` | string | No | Expected delivery date for products in YYYY-MM-DD format. |
| `department_ref` | object | No | Reference to another entity. |
| `sales_term_ref` | object | No | Reference to another entity. |
| `txn_tax_detail` | object | No | Transaction tax detail information including TxnTaxCodeRef and TaxLine. |
| `ship_method_ref` | object | No | Reference to another entity. |
| `global_tax_calculation` | string | No | Method in which tax is applied. Valid values: 'TaxExcluded', 'TaxInclusive', 'NotApplicable'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Refund Receipt

**Slug:** `QUICKBOOKS_CREATE_REFUND_RECEIPT`

Tool to create a new refund receipt in QuickBooks Online. Use when a customer receives a refund for returned goods or services.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of line items for the refund receipt. At least one line item is required. Each line must specify Amount, DetailType, and relevant detail information. |
| `TxnDate` | string | No | Transaction date in YYYY-MM-DD format. If not provided, the current date is used. |
| `DocNumber` | string | No | Reference number for the refund receipt. Maximum 21 characters. |
| `CurrencyRef` | object | No | Reference to the currency. |
| `CustomField` | array | No | List of custom fields for the refund receipt. |
| `CustomerRef` | object | Yes | Reference to the customer receiving the refund. Required. |
| `PrivateNote` | string | No | Internal note about the refund receipt, not visible to customer. |
| `ExchangeRate` | number | No | Exchange rate for multi-currency transactions. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default API version. |
| `PaymentRefNum` | string | No | Reference number for the payment (e.g., check number, transaction ID). |
| `DepositToAccountRef` | object | Yes | Reference to the asset account where the refund is deposited. Required for the refund receipt. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Sales Receipt

**Slug:** `QUICKBOOKS_CREATE_SALES_RECEIPT`

Tool to create a new sales receipt in QuickBooks Online. Use when recording a sale where the customer pays immediately (cash, check, credit card).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `line` | array | Yes | Array of line items for the sales receipt. At least one line item is required. |
| `txn_date` | string | No | Transaction date in YYYY-MM-DD format. Defaults to current date if not provided. |
| `bill_addr` | object | No | Physical address structure. |
| `class_ref` | object | No | Generic reference type for various entities. |
| `ship_addr` | object | No | Physical address structure. |
| `ship_date` | string | No | Date when goods or services are scheduled for delivery in YYYY-MM-DD format. |
| `bill_email` | object | No | Email address structure. |
| `doc_number` | string | No | Reference number for the sales receipt (maximum 21 characters). |
| `currency_ref` | object | No | Reference to currency. |
| `custom_field` | array | No | Array of custom fields for the sales receipt. |
| `customer_ref` | object | Yes | Reference to the customer receiving the sales receipt. Required field. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default API version. |
| `private_note` | string | No | Private note about the sales receipt, not visible to the customer. |
| `tracking_num` | string | No | Shipping tracking number provided by the shipping provider. |
| `bill_email_cc` | object | No | Email address structure. |
| `customer_memo` | object | No | Customer memo for the sales receipt. |
| `exchange_rate` | number | No | Exchange rate for currency conversion. |
| `bill_email_bcc` | object | No | Email address structure. |
| `department_ref` | object | No | Generic reference type for various entities. |
| `sales_term_ref` | object | No | Generic reference type for various entities. |
| `payment_ref_num` | string | No | Reference number for the payment (e.g., check number, transaction ID). |
| `ship_method_ref` | object | No | Generic reference type for various entities. |
| `payment_method_ref` | object | No | Reference to the payment method (e.g., {'value': '1'}). Use to specify how the customer paid. |
| `deposit_to_account_ref` | object | No | Reference to the deposit account. |
| `global_tax_calculation` | string | No | Method in which tax is applied. Allowed values: TaxExcluded, TaxInclusive, NotApplicable. |
| `apply_tax_after_discount` | boolean | No | Whether to apply tax after discount. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Agency

**Slug:** `QUICKBOOKS_CREATE_TAX_AGENCY`

Create a new tax agency in QuickBooks Online. Use when you need to set up a new tax authority or agency for tax reporting purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `DisplayName` | string | Yes | The name of the tax agency as displayed in QuickBooks. Must be unique. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Code via TaxService

**Slug:** `QUICKBOOKS_CREATE_TAXSERVICE_TAXCODE`

Create a new tax code with associated tax rates using the TaxService endpoint. Use when you need to set up new tax codes for sales or purchase transactions with specific tax rates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `TaxCode` | string | Yes | The unique identifier for the tax code being created. Must be unique within the QuickBooks company. |
| `TaxRateDetails` | array | Yes | List of tax rate details to associate with this tax code. At least one tax rate detail is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Time Activity

**Slug:** `QUICKBOOKS_CREATE_TIME_ACTIVITY`

Create a new time activity record in QuickBooks Online. TimeActivity tracks employee or vendor time worked on jobs or projects. Use when recording billable or non-billable hours for employees or vendors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hours` | integer | No | Number of hours worked. Alternative to using start_time and end_time. Use with minutes field to specify duration. |
| `minutes` | integer | No | Number of minutes worked (0-59). Use with hours field to specify duration as an alternative to start_time and end_time. |
| `name_of` | string ("Employee" | "Vendor") | Yes | Specifies the type of entity: 'Employee' for employee time tracking, or 'Vendor' for vendor/contractor time tracking. |
| `taxable` | boolean | No | Whether the time activity is taxable. Set to true if subject to sales tax. |
| `end_time` | string | No | End time of the time activity in ISO 8601 format with timezone (e.g., '2026-02-23T17:00:00+00:00'). Required unless using hours and minutes fields. |
| `item_ref` | object | No | Reference to another entity. |
| `txn_date` | string | No | Transaction date for the time activity in YYYY-MM-DD format (e.g., '2026-02-23'). If not provided, current date is used. |
| `class_ref` | object | No | Reference to another entity. |
| `start_time` | string | No | Start time of the time activity in ISO 8601 format with timezone (e.g., '2026-02-23T09:00:00+00:00'). Required unless using hours and minutes fields. |
| `vendor_ref` | object | No | Reference to another entity. |
| `break_hours` | integer | No | Number of break hours to subtract from the time activity duration. |
| `description` | string | No | Description of work completed during this time activity. |
| `hourly_rate` | number | No | Hourly billing rate for this time activity. If not provided, uses the default rate from the employee/vendor record. |
| `customer_ref` | object | No | Reference to another entity. |
| `employee_ref` | object | No | Reference to another entity. |
| `break_minutes` | integer | No | Number of break minutes (0-59) to subtract from the time activity duration. |
| `department_ref` | object | No | Reference to another entity. |
| `billable_status` | string ("Billable" | "NotBillable" | "HasBeenBilled") | No | Billable status of the time activity. |
| `payroll_item_ref` | object | No | Reference to another entity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Vendor

**Slug:** `QUICKBOOKS_CREATE_VENDOR`

Create a new vendor in QuickBooks with the given details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | object | No | Phone number input for vendor creation. |
| `gstin` | string | No | GST Identification Number (applicable for Indian vendors). |
| `notes` | string | No | Additional notes or comments about the vendor. |
| `title` | string | No | Title of the person (max 16 characters - keep it short like 'Mr.', 'Dr.', 'CEO'). This tag supports i18n, all locales. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, Suffix, or FullyQualifiedName attributes are required during create. |
| `active` | boolean | No | Indicates whether the vendor is currently active. Set to False to make inactive. |
| `mobile` | object | No | Phone number input for vendor creation. |
| `suffix` | string | No | Suffix of the name. For example, Jr. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `balance` | number | No | Opening balance amount for this vendor. Use with open_balance_date. |
| `acct_num` | string | No | Account number assigned to this vendor for tracking purposes. |
| `term_ref` | object | No | Reference type input for entity references. |
| `web_addr` | object | No | Website address input for vendor creation. |
| `bill_addr` | object | No | Physical address input for vendor creation. |
| `bill_rate` | number | No | Standard billing rate for the vendor (per hour or unit). |
| `ship_addr` | object | No | Physical address input for vendor creation. |
| `given_name` | string | No | Given name or first name of a person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `parent_ref` | object | No | Reference type input for entity references. |
| `family_name` | string | No | Family name or the last name of the person. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `middle_name` | string | No | Middle name of the person. The person can have zero or more middle names. The DisplayName attribute or at least one of Title, GivenName, MiddleName, FamilyName, or Suffix attributes is required for object create. |
| `tax_country` | string | No | Country for tax purposes (e.g., 'US', 'CA', 'IN'). |
| `tds_enabled` | boolean | No | Indicates if Tax Deducted at Source (TDS) is enabled (India). |
| `vendor_1099` | boolean | No | Indicates whether the vendor is eligible for 1099 tax reporting (US tax purposes). |
| `company_name` | string | No | The name of the company associated with the vendor. Useful when creating organizational vendors. |
| `contact_name` | string | No | Primary contact person's name at the vendor. |
| `credit_limit` | number | No | Maximum credit amount extended to the vendor. |
| `currency_ref` | object | No | Reference type input for entity references. |
| `display_name` | string | No | The name as displayed. Must be unique across all Customer, Vendor, and Employee objects. Cannot be removed with sparse update. If not supplied, the system generates DisplayName by concatenating customer name components supplied in the request from the following list: Title, GivenName, MiddleName, FamilyName, and Suffix. |
| `t4a_eligible` | boolean | No | Canadian T4A tax form eligibility status. |
| `primary_phone` | object | No | Phone number input for vendor creation. |
| `ap_account_ref` | object | No | Reference type input for entity references. |
| `t5018_eligible` | boolean | No | Canadian T5018 tax form eligibility status. |
| `tax_identifier` | string | No | Tax identification number for the vendor (EIN or SSN). |
| `alternate_phone` | object | No | Phone number input for vendor creation. |
| `business_number` | string | No | Business registration number or tax identification number. |
| `alt_contact_name` | string | No | Alternate contact person's name at the vendor. |
| `open_balance_date` | string | No | Date of the opening balance in YYYY-MM-DD format. |
| `primary_email_addr` | object | No | Email address input for vendor creation. |
| `tds_entity_type_id` | integer | No | TDS entity type classification identifier (India). |
| `print_on_check_name` | string | No | The name of the vendor as it should be printed on checks. If not provided, uses DisplayName. |
| `tax_reporting_basis` | string | No | Tax reporting methodology (e.g., 'Cash', 'Accrual'). |
| `tds_section_type_id` | integer | No | TDS section type categorization identifier (India). |
| `default_tax_code_ref` | object | No | Reference type input for entity references. |
| `gst_registration_type` | string | No | GST registration type (applicable for Indian vendors, e.g., 'Regular', 'Composition'). |
| `tax_id_effective_date` | string | No | Effective date for the tax identification number in YYYY-MM-DD format. |
| `tds_override_threshold` | boolean | No | Whether to override the standard TDS threshold limits (India). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Vendor Credit

**Slug:** `QUICKBOOKS_CREATE_VENDOR_CREDIT`

Tool to create a new vendor credit in QuickBooks Online. Use when recording a credit from a vendor that reduces what you owe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Line` | array | Yes | List of line items for the vendor credit. At least one line item is required. Each line must specify DetailType, Amount, and AccountBasedExpenseLineDetail. |
| `Memo` | string | No | Memo for the vendor credit that appears on reports. |
| `TxnDate` | string | No | Date of the transaction in YYYY-MM-DD format. Defaults to the current date if not provided. |
| `DocNumber` | string | No | Reference number for the vendor credit (e.g., credit memo number from vendor). |
| `VendorRef` | object | Yes | Reference to the vendor from whom the credit is received. Required field. |
| `CurrencyRef` | object | No | Reference to the currency. Format: {'value': 'USD'}. |
| `PrivateNote` | string | No | User-entered private note about the vendor credit. |
| `APAccountRef` | object | No | Reference to the Accounts Payable account. Format: {'value': 'account_id'}. If not specified, uses the default AP account. |
| `ExchangeRate` | number | No | Currency exchange rate for multi-currency transactions. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default version. |
| `DepartmentRef` | object | No | Reference to the department. Format: {'value': 'department_id'}. |
| `GlobalTaxCalculation` | string | No | Method in which tax is applied. Valid values: TaxExcluded, TaxInclusive, NotApplicable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Customer Balance Detail

**Slug:** `QUICKBOOKS_CUSTOMER_BALANCE_DETAIL`

Generate a balance detail report for a customer in QuickBooks with the given customer ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `arpaid` | string ("All" | "Paid" | "Unpaid") | No | Status of the balance. |
| `columns` | string | No | Column types to be shown in the report. Supported Values: bill_addr, create_by, create_date, cust_bill_email, cust_comp_name, cust_msg, cust_phone_other, cust_tel, cust_name, deliv_addr, doc_num*, due_date*, last_mod_by, last_mod_date, memo*, sale_sent_state, ship_addr, ship_date, ship_via, term_name, tracking_num, tx_date*, txn_type*. Additional columns with custom fields enabled: sales_cust1, sales_cust2, sales_cust3. Additional columns with location tracking enabled: dept_name* |
| `custom1` | string | No | Filter by the specified custom field as defined by the CustomField attribute in transaction entities where supported. Supported Values: Name of custom field. |
| `shipvia` | string | No | Filter by the shipping method as stored in Invoice.ShipMethodRef.Name. |
| `sort_by` | string | No | The column type used in sorting report rows. Specify a column type as defined with the columns query parameter. |
| `term_ids` | array | No | One or more comma separated term IDs. Filters report contents based on term or terms supplied.  |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `end_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `aging_method` | string ("Report_Date" | "Current") | No | The date upon which aging is determined. |
| `customer_ids` | array | No | One or more comma separated customer IDs. Filters report contents to include information for specified customers.  |
| `start_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Customer Balance Report

**Slug:** `QUICKBOOKS_CUSTOMER_BALANCE_REPORT`

Generate a customer balance report in QuickBooks showing outstanding balances for customers. Can filter by specific customers, date ranges, payment status, and accounting method. Returns a hierarchical report with customer names, IDs, and their current balance amounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `qzurl` | string | No | Specifies whether Quick Zoom URL information should be generated for rows in the report. |
| `arpaid` | string ("All" | "Paid" | "Unpaid") | No | Filter by payment status. 'All' includes all balances, 'Paid' shows only paid invoices, 'Unpaid' shows only outstanding balances. If not specified, defaults to showing all. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Bank Account

**Slug:** `QUICKBOOKS_DELETE_BANK_ACCOUNT`

Tool to delete a bank account on file for a customer in QuickBooks Payments API. Use when removing a customer's payment method. Returns 204 No Content on success with an empty response body from the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | string | No | UUID for idempotency to prevent duplicate requests. If not provided, one will be generated automatically. |
| `customer_id` | string | Yes | The customer ID for whom the bank account is being deleted (can be a test ID like 'test-customer-id') |
| `bank_account_id` | string | Yes | The bank account ID to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Item

**Slug:** `QUICKBOOKS_DELETE_ITEM`

Delete an item in QuickBooks Online by marking it as inactive (soft delete). Items cannot be permanently deleted if they have been used in transactions. Use this action when removing items from active catalogs while preserving historical transaction data. The item will be hidden from dropdowns but remain accessible in historical records. This action is irreversible through the API — the item can only be reactivated manually through the QuickBooks UI or by using an update action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | string | Yes | Unique identifier of the item to delete. This is the Id field from the item object. |
| `sync_token` | string | Yes | Version number of the entity for optimistic locking. This is the SyncToken field from the item object. Use QUICKBOOKS_GET_ITEM to retrieve the current SyncToken before deletion. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute Batch Operation

**Slug:** `QUICKBOOKS_EXECUTE_BATCH_OPERATION`

Execute multiple QuickBooks operations in a single request. Operations are performed serially. Supports create, update, delete, and query operations on QuickBooks entities. Use this action to reduce network latency when performing multiple operations. Each operation is executed in order, and each response is correlated to its request via the bId field. Maximum 30 operations per batch. Ideal for bulk data operations or related entity updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version from metadata. |
| `BatchItemRequest` | array | Yes | List of batch item requests to execute. Each item can be a create, update, delete, or query operation. Operations are performed serially in the order provided. Maximum 30 items per batch request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Aged Receivables Report

**Slug:** `QUICKBOOKS_GET_AGED_RECEIVABLES_REPORT`

Generate an aged receivables report showing outstanding customer balances by age. Use when tracking overdue invoices and managing accounts receivable aging.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `arpaid` | string ("All" | "Paid" | "Unpaid") | No | Filters customers by payment status. Use 'All' for all customers, 'Paid' for customers with fully paid balances, or 'Unpaid' for customers with outstanding balances. Default is 'Unpaid'. |
| `date_macro` | string | No | Predefined date macro like 'Today', 'This Month', etc. Alternative to report_date for specifying the report date using a macro. |
| `num_periods` | integer | No | Number of aging periods to display in the report. Must be between 1 and 10. Defaults to 4 if not specified. Each period shows receivables within that age range. |
| `report_date` | string | No | Date for the aged receivables report in YYYY-MM-DD format. Defaults to today if not provided. This is the as-of date for calculating aging. |
| `aging_method` | string ("Report_Date" | "Current") | No | Method for calculating aging. 'Report_Date' calculates aging from the report date, 'Current' calculates aging from the current date. Defaults to 'Report_Date' if not specified. |
| `aging_period` | integer | No | Number of days per aging period. Must be at least 1. Defaults to 30 days if not specified. For example, with 30 days you get periods like 0-30, 31-60, etc. |
| `customer_ids` | array | No | One or more comma-separated customer IDs to filter the report. Filters report contents to include information for specified customers only. Provide customer IDs as returned in the Customer.Id attribute. |
| `minorversion` | string | No | API minor version number. Optional - defaults to x-minor-version header if not provided. Use this to access features from specific minor versions of the QuickBooks API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachable

**Slug:** `QUICKBOOKS_GET_ATTACHABLE`

Tool to read details of a specific attachable by ID in QuickBooks Online. Attachables represent file attachments linked to entities like invoices, customers, or bills.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |
| `attachable_id` | string | Yes | ID of the attachable (file attachment) to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Balance Sheet Report

**Slug:** `QUICKBOOKS_GET_BALANCE_SHEET_REPORT`

Generate a Balance Sheet report showing company assets, liabilities, and equity at a point in time. Use when you need to understand the financial position with what the company owns versus what it owes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bank Account

**Slug:** `QUICKBOOKS_GET_BANK_ACCOUNT`

Tool to retrieve a specific bank account by ID from QuickBooks Payments API. Use when you need to get details about a specific payment method for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The customer ID who owns the bank account |
| `bank_account_id` | string | Yes | The unique identifier of the bank account to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bill

**Slug:** `QUICKBOOKS_GET_BILL`

Tool to fetch a QuickBooks bill by ID. Use when needing to retrieve bill details including vendor reference, line items, amounts, and payment status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bill_id` | string | Yes | ID of the bill to retrieve from QuickBooks |
| `minorversion` | integer | No | API minor version to use for the request (e.g., 65, 70, 75). If not specified, uses the default from headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bill Payment

**Slug:** `QUICKBOOKS_GET_BILL_PAYMENT`

Tool to retrieve details of a specific bill payment by ID in QuickBooks Online. Use when you need to view information about an existing bill payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default from headers. |
| `bill_payment_id` | string | Yes | ID of the bill payment to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Changed Entities

**Slug:** `QUICKBOOKS_GET_CHANGED_ENTITIES`

Tool to retrieve entities that changed since a specified timestamp using QuickBooks Change Data Capture (CDC) API. Use when you need to sync or refresh local data periodically by fetching only entities modified within the last 30 days. Returns full entity payloads (not just changed attributes) grouped by entity type with up to 1000 entities per response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entities` | string | Yes | Comma-separated list of entity types to query for changes. Valid entity types include: Account, Bill, BillPayment, Budget, Class, CreditMemo, Customer, Department, Deposit, Employee, Estimate, Invoice, Item, JournalEntry, Payment, PaymentMethod, Purchase, PurchaseOrder, RefundReceipt, SalesReceipt, TaxCode, TaxRate, Term, TimeActivity, Transfer, Vendor, VendorCredit. Example: 'Customer,Invoice' or 'Bill,Payment,Vendor'. |
| `changedSince` | string | Yes | ISO 8601 timestamp indicating the starting point for change tracking. Returns entities modified after this timestamp. Maximum lookback period is 30 days. Format: YYYY-MM-DDTHH:MM:SSZ (UTC timezone recommended). Example: '2026-02-16T00:00:00Z' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Info

**Slug:** `QUICKBOOKS_GET_COMPANY_INFO`

Tool to read company information from QuickBooks Online. Returns basic company info including name, addresses, fiscal year settings, and subscription status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Credit Memo

**Slug:** `QUICKBOOKS_GET_CREDIT_MEMO`

Tool to fetch a QuickBooks credit memo by ID. Use when needing full credit memo details including metadata, customer info, line items, and remaining credit amount.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request |
| `credit_memo_id` | string | Yes | ID of the credit memo to read |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Credit Memo PDF

**Slug:** `QUICKBOOKS_GET_CREDIT_MEMO_PDF`

Tool to download a QuickBooks credit memo as a PDF file. Use when you need to retrieve the printable PDF version of a credit memo.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |
| `credit_memo_id` | string | Yes | The ID of the credit memo to retrieve as PDF (e.g., '14', '123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Department

**Slug:** `QUICKBOOKS_GET_DEPARTMENT`

Read details of a specific department by ID in QuickBooks Online. Use when you need to retrieve information about a department.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `department_id` | string | Yes | The ID of the department to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deposit

**Slug:** `QUICKBOOKS_GET_DEPOSIT`

Tool to read details of a specific deposit by ID in QuickBooks Online. Use when you need complete deposit information including line items, amounts, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deposit_id` | string | Yes | ID of the deposit to retrieve. Use QUICKBOOKS_QUERY_DEPOSIT to find deposit IDs. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). If not specified, uses the default API version from headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Estimate

**Slug:** `QUICKBOOKS_GET_ESTIMATE`

Tool to fetch a QuickBooks estimate by ID. Use when needing full estimate details including metadata, line items, and sync token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `estimate_id` | string | Yes | ID of the estimate to read from QuickBooks |
| `minorversion` | integer | No | API minor version to use for the request |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Estimate PDF

**Slug:** `QUICKBOOKS_GET_ESTIMATE_PDF`

Tool to download a QuickBooks estimate as a PDF file. Use when you need to retrieve the printable PDF version of an estimate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `estimate_id` | string | Yes | The ID of the estimate to retrieve as PDF (e.g., '19', '123'). |
| `minorversion` | string | No | API minor version to use for the request (e.g., '65', '75'). If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Exchange Rate

**Slug:** `QUICKBOOKS_GET_EXCHANGE_RATE`

Tool to get exchange rate for a specific currency code and date in QuickBooks Online. Use when needing to retrieve the current or historical exchange rate between a foreign currency and the company's home currency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `asofdate` | string | Yes | The date for which to get the exchange rate, in YYYY-MM-DD format (e.g., 2024-01-15). |
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |
| `sourcecurrencycode` | string | Yes | The source currency code for which to get the exchange rate (e.g., EUR, GBP, JPY). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get General Ledger Report

**Slug:** `QUICKBOOKS_GET_GENERAL_LEDGER_REPORT`

Generate a General Ledger report showing all transactions with debits, credits, and running balances. Use when you need a detailed view of all accounting transactions posted to each account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `columns` | string | No | Column types to show in the report. Comma-separated list of column names (e.g., 'tx_date,txn_type,doc_num,name,memo,account,debit,credit,balance'). |
| `sort_by` | string | No | The column type on which to base sorting (e.g., 'tx_date', 'account', 'txn_type'). Default is 'txn_type' if not specified. |
| `end_date` | string | No | End date for the report period in YYYY-MM-DD format. |
| `class_ids` | array | No | List of class IDs to filter the report. If not provided, the report includes all classes. Each ID should be the Class.Id value (e.g., ['1', '2']). |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order for rows (ascending or descending). Default is ascending. |
| `start_date` | string | No | Start date for the report period in YYYY-MM-DD format. |
| `vendor_ids` | array | No | List of vendor IDs to filter the report. If not provided, the report includes all vendors. Each ID should be the Vendor.Id value (e.g., ['1', '3']). |
| `account_ids` | array | No | List of account IDs to filter the report. If not provided, the report includes all accounts. Each ID should be the Account.Id value from the Account object (e.g., ['1', '35', '82']). |
| `account_type` | string | No | Account type from which to include transactions (e.g., 'Bank', 'Expense', 'Income'). |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value (e.g., ['1', '5']). |
| `department_ids` | array | No | List of department IDs to filter the report. If not provided, the report includes all departments. Filters report contents to include information for specified departments if so configured in the company file. |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report (Cash or Accrual). |
| `source_account_ids` | array | No | List of source account IDs to filter the report. Each ID should be the Account.Id value for the source account. |
| `source_account_type` | string | No | Source account type for transaction filtering. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Valuation Summary

**Slug:** `QUICKBOOKS_GET_INVENTORY_VALUATION_SUMMARY`

Generate an Inventory Valuation Summary report showing inventory quantities and their current values. Use when you need to understand inventory asset values, track stock levels, or analyze inventory costs by item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice PDF

**Slug:** `QUICKBOOKS_GET_INVOICE_PDF`

Tool to download a QuickBooks invoice as a PDF file. Use when you need to retrieve the printable PDF version of an invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The ID of the invoice to retrieve as PDF (e.g., '17', '123'). |
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Item

**Slug:** `QUICKBOOKS_GET_ITEM`

Tool to retrieve a specific item by its ID from QuickBooks Online. Use when you need full details of a product or service item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | string | Yes | Unique identifier of the item to retrieve from QuickBooks. |
| `minorversion` | integer | No | QuickBooks API minor version number to use for this request (e.g., 65, 70, 75). Allows access to version-specific features. If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Journal Entry

**Slug:** `QUICKBOOKS_GET_JOURNAL_ENTRY`

Tool to read details of a specific QuickBooks journal entry by ID. Use when you need complete journal entry information including transaction date, line items, posting types, and account references.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version number (e.g., 75) |
| `journal_entry_id` | string | Yes | The ID of the journal entry to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Payment

**Slug:** `QUICKBOOKS_GET_PAYMENT`

Tool to fetch details of a specific payment by ID in QuickBooks Online. Use when needing payment information including customer, amounts, and linked transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_id` | string | Yes | ID of the payment to retrieve |
| `minorversion` | integer | No | API minor version to use for the request |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Payment Method

**Slug:** `QUICKBOOKS_GET_PAYMENT_METHOD`

Read details of a specific payment method by ID in QuickBooks Online. Use when you need to retrieve information about a payment method entity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_method_id` | string | Yes | ID of the payment method to be read |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Payment PDF

**Slug:** `QUICKBOOKS_GET_PAYMENT_PDF`

Tool to download a QuickBooks payment record as a PDF file. Use when you need to retrieve the printable PDF version of a payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_id` | string | Yes | The ID of the payment record to retrieve as PDF (e.g., '18', '123'). |
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Preferences

**Slug:** `QUICKBOOKS_GET_PREFERENCES`

Tool to read company preferences that control application behavior in QuickBooks Online. Use when needing to retrieve accounting settings, sales form configurations, tax preferences, time tracking settings, or other company-wide preference data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Profit and Loss Detail Report

**Slug:** `QUICKBOOKS_GET_PROFIT_AND_LOSS_DETAIL_REPORT`

Generate a detailed Profit and Loss report showing company income and expenses with transaction-level details. Use when you need to analyze profitability with individual transaction details, customer/vendor breakdowns, and account-level activity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | Report end date in YYYY-MM-DD format. If not provided, defaults to today's date. |
| `class_ids` | array | No | List of class IDs to filter the report. If not provided, the report includes all classes. Each ID should be the Class.Id value from the Class object (e.g., ['1', '3']). |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. If not provided, defaults to the start of the current fiscal year. |
| `vendor_ids` | array | No | List of vendor IDs to filter the report. If not provided, the report includes all vendors. Each ID should be the Vendor.Id value from the Vendor object (e.g., ['1', '5', '20']). |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Profit and Loss Report

**Slug:** `QUICKBOOKS_GET_PROFIT_AND_LOSS_REPORT`

Generate a Profit and Loss report showing company income and expenses over a period. Use when you need to analyze profitability, revenue, costs, and net income for a specific date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | Report end date in YYYY-MM-DD format. If not provided, defaults to today's date. |
| `class_ids` | array | No | List of class IDs to filter the report. If not provided, the report includes all classes. Each ID should be the Class.Id value from the Class object (e.g., ['1', '3']). |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. If not provided, defaults to the start of the current fiscal year. |
| `vendor_ids` | array | No | List of vendor IDs to filter the report. If not provided, the report includes all vendors. Each ID should be the Vendor.Id value from the Vendor object (e.g., ['1', '5', '20']). |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Purchase

**Slug:** `QUICKBOOKS_GET_PURCHASE`

Tool to fetch details of a specific purchase by ID in QuickBooks Online. Use when you need to retrieve complete purchase information including line items, payment details, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `purchase_id` | string | Yes | ID of the purchase to retrieve |
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Purchase Order

**Slug:** `QUICKBOOKS_GET_PURCHASE_ORDER`

Tool to fetch a QuickBooks purchase order by ID. Use when needing full purchase order details including line items, vendor information, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request |
| `purchase_order_id` | string | Yes | ID of the purchase order to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Purchase Order PDF

**Slug:** `QUICKBOOKS_GET_PURCHASE_ORDER_PDF`

Tool to download a QuickBooks purchase order as a PDF file. Use when you need to retrieve the printable PDF version of a purchase order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |
| `purchase_order_id` | string | Yes | The ID of the purchase order to retrieve as PDF (e.g., '25', '123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Refund Receipt

**Slug:** `QUICKBOOKS_GET_REFUND_RECEIPT`

Tool to fetch a QuickBooks refund receipt by ID. Use when needing details of a specific refund issued to a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request |
| `refund_receipt_id` | string | Yes | ID of the refund receipt to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Refund Receipt PDF

**Slug:** `QUICKBOOKS_GET_REFUND_RECEIPT_PDF`

Tool to download a QuickBooks refund receipt as a PDF file. Use when you need to retrieve the printable PDF version of a refund receipt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |
| `refund_receipt_id` | string | Yes | The ID of the refund receipt to retrieve as PDF (e.g., '22', '123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Account List

**Slug:** `QUICKBOOKS_GET_REPORT_ACCOUNT_LIST`

Retrieve the AccountList report from QuickBooks showing a list of all accounts. This report displays all account details including name, type, and balance information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `columns` | string | No | Comma-separated list of column names to include in the report. Valid column names: 'account_name', 'account_type', 'detail_acc_type', 'account_desc', 'account_bal'. If not specified, all columns are included. Example: 'account_name,account_type,account_bal' |
| `sort_order` | string | No | The sort order for the accounts. Valid values: 'ascend' (ascending, A-Z) or 'descend' (descending, Z-A). If not specified, accounts are returned in their default order. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Aged Payable Detail

**Slug:** `QUICKBOOKS_GET_REPORT_AGED_PAYABLE_DETAIL`

Generate an aged payable detail report showing aging detail for accounts payable. Use when you need to analyze outstanding vendor bills grouped by aging periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appaid` | string ("All" | "Paid" | "Unpaid") | No | Status of the payable balance. |
| `columns` | string | No | Column types to be shown in the report. Supported Values: bill_addr, create_by, create_date, vend_bill_email, vend_comp_name, vend_phone_other, vend_tel, vend_name, doc_num*, due_date*, last_mod_by, last_mod_date, memo*, term_name, tx_date*, txn_type*. Additional columns with custom fields enabled: purch_vend1, purch_vend2, purch_vend3. Additional columns with location tracking enabled: dept_name* |
| `sort_by` | string | No | The column type used in sorting report rows. Specify a column type as defined with the columns query parameter. |
| `term_ids` | array | No | One or more comma separated term IDs. Filters report contents based on term or terms supplied.  |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range for the report. Examples: 'Today', 'This Month', 'Last Month', 'This Fiscal Quarter', etc. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `vendor_ids` | array | No | One or more comma separated vendor IDs. Filters report contents to include information for specified vendors.  |
| `end_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `num_periods` | integer | No | Number of aging periods to display in the report. Each period represents a time bucket for aging calculations (e.g., 0-30 days, 31-60 days). |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `aging_method` | string ("Report_Date" | "Current") | No | The date upon which aging is determined. |
| `aging_period` | integer | No | Number of days per aging period. Default is typically 30 days. For example, setting this to 30 creates buckets like 0-30, 31-60, 61-90 days. |
| `duedate_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range for filtering by due date. Examples: 'Today', 'This Month', 'Last Month', 'This Fiscal Quarter', etc. |
| `start_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report. Supported values: Cash, Accrual. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Aged Payables

**Slug:** `QUICKBOOKS_GET_REPORT_AGED_PAYABLES`

Retrieve an Aged Payables aging summary report from QuickBooks showing outstanding vendor balances grouped by age. Shows amounts owed to vendors categorized by aging periods (e.g., current, 1-30 days, 31-60 days overdue).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appaid` | string ("All" | "Paid" | "Unpaid") | No | Filters vendors by payment status. Use 'All' for all vendors, 'Paid' for vendors with fully paid balances, or 'Unpaid' for vendors with outstanding balances. Default is 'Unpaid'. |
| `date_macro` | string | No | Predefined date macro like 'Today', 'This Month', etc. Alternative to report_date for specifying the report date using a macro. |
| `vendor_ids` | array | No | Filters report contents to include information for specified vendors. Provide one or more comma-separated vendor IDs as returned in the Vendor.Id attribute. |
| `num_periods` | integer | No | Number of aging periods to display in the report. Must be between 1 and 10. Defaults to 4 if not specified. Each period shows payables within that age range. |
| `report_date` | string | No | Date for the aged payables report in YYYY-MM-DD format. Defaults to today if not provided. This is the as-of date for calculating aging. |
| `aging_method` | string ("Report_Date" | "Current") | No | Method for calculating aging. 'Report_Date' calculates aging from the report date, 'Current' calculates aging from the current date. Defaults to 'Report_Date' if not specified. |
| `aging_period` | integer | No | Number of days per aging period. Must be at least 1. Defaults to 30 days if not specified. For example, with 30 days you get periods like 0-30, 31-60, etc. |
| `minorversion` | string | No | API minor version number. Optional - defaults to x-minor-version header if not provided. Use this to access features from specific minor versions of the QuickBooks API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Aged Receivable Detail

**Slug:** `QUICKBOOKS_GET_REPORT_AGED_RECEIVABLE_DETAIL`

Generate an aged receivable detail report showing aging detail for accounts receivable. Use when you need to analyze outstanding customer invoices grouped by aging periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `arpaid` | string ("All" | "Paid" | "Unpaid") | No | Status of the receivable balance. |
| `columns` | string | No | Column types to be shown in the report. Supported Values: bill_addr, create_by, create_date, cust_bill_email, cust_comp_name, cust_msg, cust_phone_other, cust_tel, cust_name, deliv_addr, doc_num*, due_date*, last_mod_by, last_mod_date, memo*, sale_sent_state, ship_addr, ship_date, ship_via, term_name, tracking_num, tx_date*, txn_type*. Additional columns with custom fields enabled: sales_cust1, sales_cust2, sales_cust3. Additional columns with location tracking enabled: dept_name* |
| `custom1` | string | No | Filter by the specified custom field as defined by the CustomField attribute in transaction entities where supported. Supported Values: Name of custom field. |
| `shipvia` | string | No | Filter by the shipping method as stored in Invoice.ShipMethodRef.Name. |
| `sort_by` | string | No | The column type used in sorting report rows. Specify a column type as defined with the columns query parameter. |
| `term_ids` | array | No | One or more comma separated term IDs. Filters report contents based on term or terms supplied.  |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use report_date to specify an explicit report date. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `end_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `num_periods` | integer | No | Number of aging periods to display in the report. Each period represents a time bucket for aging calculations (e.g., 0-30 days, 31-60 days). |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `aging_method` | string ("Report_Date" | "Current") | No | The date upon which aging is determined. |
| `aging_period` | integer | No | Number of days per aging period. Default is typically 30 days. For example, setting this to 30 creates buckets like 0-30, 31-60, 61-90 days. |
| `customer_ids` | array | No | One or more comma separated customer IDs. Filters report contents to include information for specified customers.  |
| `duedate_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range of due dates for receivables to include in the report; otherwise, use the start_duedate and end_duedate to cover an explicit report date range.  |
| `start_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Cash Flow

**Slug:** `QUICKBOOKS_GET_REPORT_CASH_FLOW`

Generate a cash flow report in QuickBooks showing cash inflows and outflows categorized by operating, investing, and financing activities. Use when you need to analyze cash movement and liquidity over a specified period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Class Sales

**Slug:** `QUICKBOOKS_GET_REPORT_CLASS_SALES`

Generate a ClassSales report in QuickBooks showing sales amounts grouped by class. Use when you need to analyze sales performance by class tracking categories.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `class_ids` | array | No | One or more comma separated class IDs to filter the report. If not provided, the report includes all classes. Each ID should be the Class.Id value from the Class object. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Customer Income

**Slug:** `QUICKBOOKS_GET_REPORT_CUSTOMER_INCOME`

Generate a customer income report in QuickBooks showing revenue by customer. Use when you need to analyze income generated from each customer over a specified period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | Report end date in YYYY-MM-DD format. Use together with start_date to specify a custom date range. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. Use together with end_date to specify a custom date range. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Customer Sales

**Slug:** `QUICKBOOKS_GET_REPORT_CUSTOMER_SALES`

Generate a customer sales report in QuickBooks showing sales transactions and totals for customers. Can filter by specific customers, date ranges, and accounting method. Returns a hierarchical report with customer names, IDs, and their sales amounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | Report end date in YYYY-MM-DD format. Use together with start_date to specify a custom date range. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. Use together with end_date to specify a custom date range. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Department Sales

**Slug:** `QUICKBOOKS_GET_REPORT_DEPARTMENT_SALES`

Generate a department sales report in QuickBooks showing sales data broken down by department. Use when you need to analyze sales performance across different departments within a date range. Note: Department tracking must be enabled in the QuickBooks company file for this report to return data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | End date for the report period in YYYY-MM-DD format. Use this with start_date to specify a custom date range, or use date_macro for predefined ranges. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range for the report (e.g., 'This Month', 'Last Quarter'). Use this as an alternative to specifying start_date and end_date explicitly. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order for the report results (ascend or descend). |
| `start_date` | string | No | Start date for the report period in YYYY-MM-DD format. Use this with end_date to specify a custom date range, or use date_macro for predefined ranges. |
| `department_ids` | array | No | List of department IDs to filter the report. Filters report contents to include information for specified departments if configured in the company file. |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report (Cash or Accrual). |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results (e.g., Total, Month, Quarter). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Item Sales

**Slug:** `QUICKBOOKS_GET_REPORT_ITEM_SALES`

Generate an ItemSales report showing sales data for products and services. Use when you need to analyze sales performance by item including quantity sold, revenue, COGS, and gross margin.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_ids` | array | No | List of item IDs to filter the report. If not provided, the report includes all items. Each ID should be the Item.Id value from the Item object (e.g., ['1', '2', '10']). |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Reports

**Slug:** `QUICKBOOKS_GET_REPORTS`

Retrieve QuickBooks reports such as TransactionList, BalanceSheet, ProfitAndLoss, and others. Use when you need to access standardized financial or transaction reports with flexible filtering options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor` | string | No | Vendor ID or comma-separated list of vendor IDs to filter the report. Only transactions related to these vendors will be included. Use Vendor.Id value from the Vendor object. |
| `cleared` | string | No | Filter for transaction cleared status. Options: 'All', 'Cleared', 'Uncleared', 'Reconciled'. Note that 'cleared' can only be used as a filter parameter, not as a column in the result. |
| `columns` | string | No | Comma-separated list of column types to include in the report. For example: 'tx_date,txn_type,doc_num,name,memo,account,amount'. If not specified, the report uses default columns. |
| `sort_by` | string | No | Column type to use for sorting report rows. Common values include 'tx_date', 'txn_type', 'amount', etc. Must be a column that exists in the report. |
| `customer` | string | No | Customer ID or comma-separated list of customer IDs to filter the report. Only transactions related to these customers will be included. Use Customer.Id value from the Customer object. |
| `end_date` | string | No | Report end date in YYYY-MM-DD format. Used to filter transactions or data up to this date. If not provided, the report uses its default end date or date_macro setting. |
| `group_by` | string | No | Column type to use for grouping report rows. Common values include 'Customer', 'Vendor', 'Account', etc. Groups transactions by the specified entity type. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. Used to filter transactions or data from this date onwards. If not provided, the report uses its default start date or date_macro setting. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `report_name` | string | Yes | The name of the report to retrieve. For example: 'TransactionList', 'BalanceSheet', 'ProfitAndLoss', 'CashFlow', etc. This is the report type identifier used in the QuickBooks API endpoint. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Report - Trial Balance

**Slug:** `QUICKBOOKS_GET_REPORT_TRIAL_BALANCE`

Generate a Trial Balance report showing account debits, credits, and balances for a specified period. Use when you need to verify that total debits equal total credits across all accounts for accounting reconciliation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_date` | string | No | Report end date in YYYY-MM-DD format. If not provided, defaults to today's date. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. If not provided, defaults to the start of the current fiscal year. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Sales Receipt

**Slug:** `QUICKBOOKS_GET_SALES_RECEIPT`

Tool to fetch a QuickBooks sales receipt by ID. Use when needing full sales receipt details including customer info, line items, payment details, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request |
| `sales_receipt_id` | string | Yes | ID of the sales receipt to read from QuickBooks |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Sales Receipt PDF

**Slug:** `QUICKBOOKS_GET_SALESRECEIPT_PDF`

Tool to download a QuickBooks sales receipt as a PDF file. Use when you need to retrieve the printable PDF version of a sales receipt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | string | No | API minor version to use for the request (e.g., '70', '75'). If not specified, uses the default API version. |
| `sales_receipt_id` | string | Yes | The ID of the sales receipt to retrieve as PDF (e.g., '31', '123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tax Rate

**Slug:** `QUICKBOOKS_GET_TAX_RATE`

Tool to read details of a specific tax rate by ID in QuickBooks Online. Use when you need to retrieve information about a tax rate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax_rate_id` | string | Yes | The ID of the tax rate to retrieve. |
| `minorversion` | integer | No | API minor version to use for the request |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Term

**Slug:** `QUICKBOOKS_GET_TERM`

Read details of a specific payment term by ID in QuickBooks Online. Terms define payment conditions like Net 30 or Due on Receipt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term_id` | string | Yes | The ID of the payment term to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Activity

**Slug:** `QUICKBOOKS_GET_TIME_ACTIVITY`

Tool to read details of a specific time activity by ID in QuickBooks Online. Returns complete time tracking information including employee/vendor reference, hours worked, billing rate, and associated customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | Optional API minor version parameter to use for the request |
| `time_activity_id` | string | Yes | The unique identifier of the time activity to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transaction List Report

**Slug:** `QUICKBOOKS_GET_TRANSACTION_LIST_REPORT`

Get the Transaction List report showing all transactions in the company. Use when you need a comprehensive view of all transactions with flexible filtering by date, customer, vendor, account, or other criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cleared` | string | No | Filter for transaction cleared status. Options: 'All', 'Cleared', 'Uncleared', 'Reconciled'. Note that 'cleared' can only be used as a filter parameter, not as a column in the result. |
| `columns` | string | No | Comma-separated list of columns to include in the report. Supports both user-friendly names and QuickBooks API identifiers: date/tx_date (Date), transaction_type/txn_type (Transaction Type), number/num/doc_num (Number), name (Name), memo/description (Memo/Description), account/account_name (Account), amount/subt_nat_amount (Amount), net_amount (Net Amount), split (Split), balance (Balance), customer (Customer), vendor (Vendor), employee (Employee), product_service (Product/Service), quantity (Quantity), rate (Rate), class (Class), department/dept (Department), location (Location). If not specified, report uses default columns. |
| `sort_by` | string | No | Column to sort report rows by. Supports both user-friendly names (date, transaction_type, amount, account, etc.) and QuickBooks API identifiers (tx_date, txn_type, subt_nat_amount, account_name, etc.). Must be a column that exists in the report. |
| `end_date` | string | No | Report end date in YYYY-MM-DD format. Used to filter transactions up to this date. If not provided, the report uses its default end date or date_macro setting. |
| `group_by` | string | No | Column type to use for grouping report rows. Common values include 'Customer', 'Vendor', 'Account', etc. Groups transactions by the specified entity type. |
| `class_ids` | array | No | List of class IDs to filter the report. If not provided, the report includes all classes. Each ID should be the Class.Id value (e.g., ['1', '2']). |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range for the report. Use if you want the report to cover a standard report date range; otherwise, use start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order for rows (ascending or descending). Default is ascending. |
| `start_date` | string | No | Report start date in YYYY-MM-DD format. Used to filter transactions from this date onwards. If not provided, the report uses its default start date or date_macro setting. |
| `vendor_ids` | array | No | List of vendor IDs to filter the report. If not provided, the report includes all vendors. Each ID should be the Vendor.Id value from the Vendor object (e.g., ['5', '8', '12']). |
| `account_ids` | array | No | List of account IDs to filter the report. If not provided, the report includes all accounts. Each ID should be the Account.Id value from the Account object (e.g., ['1', '35', '82']). |
| `customer_ids` | array | No | List of customer IDs to filter the report. If not provided, the report includes all customers. Each ID should be the Customer.Id value from the Customer object (e.g., ['1', '2', '10']). |
| `department_ids` | array | No | List of department IDs to filter the report. If not provided, the report includes all departments. Filters report contents to include information for specified departments if so configured in the company file. |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report (Cash or Accrual). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Transfer

**Slug:** `QUICKBOOKS_GET_TRANSFER`

Tool to fetch a QuickBooks transfer by ID. Use when needing to retrieve transfer details including from/to account references and transfer amount.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transfer_id` | string | Yes | ID of the transfer to retrieve from QuickBooks |
| `minorversion` | integer | No | API minor version to use for the request (e.g., 65, 70, 75). If not specified, uses the default from headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vendor Credit

**Slug:** `QUICKBOOKS_GET_VENDOR_CREDIT`

Tool to fetch a QuickBooks vendor credit by ID. Use when needing to retrieve vendor credit details including vendor reference, line items, amounts, and balance status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `minorversion` | integer | No | API minor version to use for the request (e.g., 65, 70, 75). If not specified, uses the default from headers. |
| `vendor_credit_id` | string | Yes | ID of the vendor credit to retrieve from QuickBooks |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vendor Expenses Report

**Slug:** `QUICKBOOKS_GET_VENDOR_EXPENSES_REPORT`

Retrieve a vendor expenses report from QuickBooks showing expense transactions by vendor. This report displays the total expenses incurred for each vendor, providing a detailed view of vendor-related spending. Filter by specific vendors, date ranges, payment status, and customize with various grouping and sorting options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `qzurl` | string | No | Specifies whether Quick Zoom URL information should be generated for rows in the report. |
| `appaid` | string ("All" | "Paid" | "Unpaid") | No | Filters vendors by payment status. Use 'All' for all vendors, 'Paid' for vendors with fully paid balances, or 'Unpaid' for vendors with outstanding balances. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `vendor_ids` | array | No | Filters report contents to include information for specified vendors. Supported Values: One or more comma separated vendor IDs as returned in the attribute, Vendor.Id, of the Vendor object response code. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Cards

**Slug:** `QUICKBOOKS_LIST_CARDS`

Tool to retrieve all payment cards on file for a customer in QuickBooks Payments API. Use when needing to list saved payment methods for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The QuickBooks Payments V4IDPseudonym identifier for the customer. This is different from the QuickBooks Online customer ID - use the V4IDPseudonym field from the customer object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Departments

**Slug:** `QUICKBOOKS_LIST_DEPARTMENTS`

Query Department entities in QuickBooks using SQL-like syntax. Use when you need to list departments or filter departments by criteria like active status, name patterns, or parent relationships. Supports WHERE clauses, pattern matching (LIKE with %), ORDERBY, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SQL-like query string to filter and retrieve Department entities ONLY. IMPORTANT: This tool queries the Department entity exclusively - do NOT use it to query other entities. For querying other entity types, use their respective query tools.   Query syntax: SELECT [fields] FROM Department [WHERE conditions] [ORDERBY field] [STARTPOSITION n] [MAXRESULTS n]   NOTE: QuickBooks API returns ALL fields with values regardless of SELECT clause - field projections are not supported. You can write 'SELECT Id, Name' but the API will return all available fields anyway.   Commonly queryable Department fields: Id, Name, Active, FullyQualifiedName, SubDepartment, ParentRef, SyncToken.   Supports: - WHERE clauses with operators (=, <, >, <=, >=, IN) - LIKE operator with % wildcard - Boolean operators (AND, OR) - ORDERBY for sorting - Pagination with MAXRESULTS (max 1000, default 100) and STARTPOSITION - Aggregate functions (COUNT) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoices

**Slug:** `QUICKBOOKS_LIST_INVOICES`

Tool to list invoices via QuickBooks Query endpoint. Use when retrieving invoices with optional pagination and custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | List of fields to select in the query. Defaults to ['Id','SyncToken','DocNumber','TotalAmt','Balance','TxnDate']. |
| `max_results` | integer | No | Maximum number of records to return; default 50, max 1000. |
| `start_position` | integer | No | Starting position for pagination within the result set. Default is 1. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Account Entities

**Slug:** `QUICKBOOKS_QUERY_ACCOUNT`

Query Account entities in QuickBooks using SQL-like syntax. IMPORTANT: Queries the Account entity ONLY (chart of accounts). For other entities (Purchase, Invoice, Bill, Payment, etc.), use their respective query actions. NOTE: API returns ALL fields with values regardless of SELECT clause (projections not supported). CRITICAL RESTRICTIONS: Parentheses and OR operator are NOT supported. Use IN operator for multiple values: WHERE AccountType IN ('Bank', 'Credit Card') Supports: WHERE clauses (=, <, >, LIKE, IN), AND operator, pattern matching (%), ORDER BY, pagination (MAXRESULTS up to 1000, STARTPOSITION), COUNT. Common fields: Id, Name, AccountType, AccountSubType, Classification, Active, FullyQualifiedName, CurrentBalance, AcctNum, Description, SubAccount. Examples: - SELECT * FROM Account WHERE AccountType = 'Expense' MAXRESULTS 100 - SELECT * FROM Account WHERE Active = true ORDER BY Name - SELECT * FROM Account WHERE AccountType IN ('Bank', 'Credit Card')

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Account entities ONLY. Do NOT use for other entities (Purchase, Invoice, Bill, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Account [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE Active = true AND AccountType IN ('Bank', 'Credit Card')   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, Name, AccountType, AccountSubType, Classification, Active, FullyQualifiedName, CurrentBalance, AcctNum, Description, SubAccount.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: Name, Id. Non-sortable: AccountType, AccountSubType, Classification, and others. - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Account Entities

**Slug:** `QUICKBOOKS_QUERY_ACCOUNTS`

Query Account entities in QuickBooks using SQL-like syntax. Use this action when you need to retrieve multiple accounts from the chart of accounts with filtering, sorting, or pagination. IMPORTANT: Queries the Account entity ONLY (chart of accounts). For other entities (Purchase, Invoice, Bill, Payment, etc.), use their respective query actions. NOTE: API returns ALL fields with values regardless of SELECT clause (projections not supported). CRITICAL RESTRICTIONS: Parentheses and OR operator are NOT supported. Use IN operator for multiple values: WHERE AccountType IN ('Bank', 'Credit Card'). Supports: WHERE clauses (=, <, >, LIKE, IN), AND operator, pattern matching (%), ORDER BY, pagination (MAXRESULTS up to 1000, STARTPOSITION), COUNT.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Account entities ONLY. Do NOT use for other entities (Purchase, Invoice, Bill, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Account [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE Active = true AND AccountType IN ('Bank', 'Credit Card')   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, Name, AccountType, AccountSubType, Classification, Active, FullyQualifiedName, CurrentBalance, AcctNum, Description, SubAccount.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: Name, Id. Non-sortable: AccountType, AccountSubType, Classification, and others. - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Attachable Entities

**Slug:** `QUICKBOOKS_QUERY_ATTACHABLE`

Query Attachable entities in QuickBooks using SQL-like syntax. Use when you need to retrieve multiple attachables or search for specific file attachments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SQL-like query string to filter and retrieve Attachable entities ONLY. IMPORTANT: This tool queries the Attachable entity exclusively - do NOT use it to query other entities like Purchase, Invoice, Bill, Payment, etc. For querying other entity types, use their respective query tools.   Query syntax: SELECT [fields] FROM Attachable [WHERE conditions] [ORDERBY field] [STARTPOSITION n] [MAXRESULTS n]   NOTE: QuickBooks API returns ALL fields with values regardless of SELECT clause - field projections are not supported. You can write 'SELECT Id, FileName' but the API will return all available fields anyway.   Commonly queryable Attachable fields: Id, FileName, Note, Category, ContentType, Size, FileAccessUri, TempDownloadUri.   Supports: - WHERE clauses with operators (=, <, >, <=, >=, IN) - LIKE operator with % wildcard - Boolean operators (AND, OR) - ORDERBY for sorting - Pagination with MAXRESULTS (max 1000, default 100) and STARTPOSITION - Aggregate functions (COUNT) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Bills

**Slug:** `QUICKBOOKS_QUERY_BILLS`

Query Bill entities in QuickBooks using SQL-like syntax. Returns bills with vendor information, line items, amounts, due dates, and payment status. Use this action when you need to search or filter bills by criteria such as vendor, date range, balance, or total amount. IMPORTANT: Queries the Bill entity ONLY (vendor bills/payables). For other entities (Invoice, Payment, Account, etc.), use their respective query actions. NOTE: API returns ALL fields with values regardless of SELECT clause (projections not supported). CRITICAL RESTRICTIONS: Parentheses and OR operator are NOT supported. Use IN operator for multiple values: WHERE VendorRef IN ('1', '2', '3') Common queryable fields: Id, TxnDate, DueDate, VendorRef, TotalAmt, Balance, DocNumber. NON-QUERYABLE fields: PrivateNote, AccountRef, CurrencyRef, DepartmentRef, ClassRef.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Bill entities ONLY. Do NOT use for other entities (Invoice, Payment, Account, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Bill [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE TxnDate >= '2024-01-01' AND VendorRef = '123'   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, TxnDate, DueDate, VendorRef, TotalAmt, Balance, DocNumber, PaymentType.   NON-QUERYABLE fields (will cause QueryValidationError): PrivateNote, AccountRef, CurrencyRef, DepartmentRef, ClassRef, Line[].ItemRef.   Supports: - WHERE with operators (=, <, >, <=, >=, !=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY') - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Customer Entities

**Slug:** `QUICKBOOKS_QUERY_CUSTOMERS`

Query Customer entities in QuickBooks using SQL-like syntax. Use this action when you need to find customers by name, email, balance, active status, or other criteria with pagination support. IMPORTANT: Queries the Customer entity ONLY. For other entities use their respective query actions. CRITICAL RESTRICTIONS: Parentheses and OR operator are NOT supported. Use IN for multiple values. Supports: WHERE (=, <, >, LIKE, IN), AND, pattern matching (%), ORDER BY, pagination (MAXRESULTS up to 1000), COUNT.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Customer entities ONLY. Do NOT use for other entities (Invoice, Bill, Payment, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Customer [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE Active = true AND DisplayName IN ('Customer A', 'Customer B')   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, DisplayName, CompanyName, FamilyName, GivenName, FullyQualifiedName, Active, Balance, PrimaryEmailAddr.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: DisplayName, FamilyName, GivenName, Id. - MAXRESULTS (max 1000, default 25) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query QuickBooks Entities

**Slug:** `QUICKBOOKS_QUERY_ENTITIES`

Execute SQL-like queries on QuickBooks Online entities. Supports all entity types (Customer, Invoice, Bill, Payment, Purchase, Account, etc.) with WHERE clauses, pattern matching, ordering, and pagination. IMPORTANT: Many fields are NOT queryable in WHERE clauses including PrivateNote, AccountRef, CurrencyRef, DepartmentRef, ClassRef, etc. Use queryable fields like Id, TxnDate, PaymentType, DisplayName instead. For non-queryable field filtering, query by date range and filter client-side. See parameter description for full list of queryable vs non-queryable fields. Use entity-specific query tools when available for typed responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to retrieve data from QuickBooks Online entities. Generic query tool supporting all entity types: Customer, Invoice, Bill, Payment, Purchase, Account, Vendor, Employee, Item, and more.   Query syntax: SELECT [fields] FROM [EntityName] [WHERE conditions] [ORDERBY field] [STARTPOSITION n] [MAXRESULTS n]   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause - field projections are not supported.   Supported operators: = < > <= >= != LIKE (% wildcard) IN AND ORDERBY MAXRESULTS (max 1000, default 100) STARTPOSITION COUNT.   CRITICAL: OR operator is NOT supported for most QuickBooks entities (including Item, Account, and many others). If you attempt to use OR in a query, the API will return a QueryParserError. Use IN operator instead for matching multiple specific values (e.g., 'WHERE Id IN ("1", "2", "3")' instead of 'WHERE Id = "1" OR Id = "2"'). For pattern matching across multiple terms with LIKE (e.g., finding items containing 'Larkspur' in FullyQualifiedName OR Description), query without the WHERE clause or with a broader filter, then filter results client-side.   CRITICAL QUERY FIELD RESTRICTIONS: Top-level entity references like CustomerRef, VendorRef are queryable on transactions (e.g., 'SELECT * FROM Invoice WHERE CustomerRef = "123"'). NON-QUERYABLE fields: PrivateNote, AccountRef, CurrencyRef, DepartmentRef, ClassRef on any entity; nested references like Line[].ItemRef. Using these in WHERE causes QueryValidationError.   WORKAROUND: Query by date range and filter results client-side, or use entity-specific GET actions.   Purchase entity queryable fields: Id, TxnDate, PaymentType, DocNumber, TotalAmt, PrintStatus. NOT queryable: AccountRef, CurrencyRef, DepartmentRef, ClassRef, PrivateNote.   These lists are common examples, not exhaustive. Consult the QuickBooks API documentation or test incrementally to discover all queryable fields. Reference fields are generally NOT queryable unless explicitly documented.   IMPORTANT: Use entity-specific query tools when available (e.g., QueryAccount for Account entities) as they provide typed responses. This generic tool returns untyped data and should be used only when no specific query tool exists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Estimate Entities

**Slug:** `QUICKBOOKS_QUERY_ESTIMATES`

Query Estimate entities in QuickBooks using SQL-like syntax. Returns estimates matching specified criteria such as status, customer, date range, or amount. Use this action when you need to search for, filter, or list QuickBooks estimates based on specific conditions. The query syntax supports WHERE clauses, pattern matching with LIKE, ordering, and pagination. IMPORTANT: Queries the Estimate entity ONLY. For other entities (Invoice, Bill, Payment, Account, etc.), use their respective query actions. NOTE: API returns ALL fields with values regardless of SELECT clause (field projections not supported). CRITICAL RESTRICTIONS: Parentheses and OR operator are NOT supported. Use IN operator for multiple values: WHERE CustomerRef IN ('1', '2') Common queryable fields: Id, TxnDate, TotalAmt, CustomerRef, DocNumber, TxnStatus, ExpirationDate, EmailStatus, PrintStatus. NON-QUERYABLE fields: PrivateNote, DepartmentRef, ClassRef, CurrencyRef cause QueryValidationError.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Estimate entities ONLY. Do NOT use for other entities (Invoice, Bill, Payment, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Estimate [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE TxnStatus = 'Pending' AND CustomerRef IN ('1', '2')   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, TxnDate, TotalAmt, CustomerRef (top-level reference on Estimate is queryable), DocNumber, TxnStatus, ExpirationDate, EmailStatus, PrintStatus.   NON-QUERYABLE fields: PrivateNote, DepartmentRef, ClassRef, CurrencyRef, and most nested reference fields. Using these in WHERE causes QueryValidationError.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY') - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Invoices

**Slug:** `QUICKBOOKS_QUERY_INVOICES`

Query QuickBooks invoices with flexible filtering and pagination support. Use this action when you need to search for invoices based on specific criteria like customer, date range, amount, or payment status. Use when retrieving invoices with custom filters, date ranges, or payment status. Supports SQL-like queries for advanced filtering on queryable fields. For simple listing without filters, consider using ListInvoices instead. IMPORTANT: The query parameter uses QuickBooks Query Language which does NOT support the OR operator. Use IN operator for multiple values or query without WHERE clause and filter client-side.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SQL-like query string to filter invoices. If not provided, returns all invoices. Supports QuickBooks Query Language syntax: WHERE, ORDERBY, operators (=, <, >, <=, >=, !=, LIKE, IN, AND). Common queryable fields: Id, TxnDate, DueDate, DocNumber, TotalAmt, Balance, CustomerRef, PrintStatus, EmailStatus. IMPORTANT: OR operator is NOT supported. Use IN for multiple values. Non-queryable fields include: PrivateNote, AccountRef, CurrencyRef, DepartmentRef, ClassRef. Example: "WHERE TxnDate >= '2024-01-01' AND TotalAmt > '1000' ORDERBY TxnDate DESC" |
| `status` | string | No | Filter by invoice payment status. Common values: 'Paid' (Balance = 0), 'Unpaid' (Balance > 0), 'Overdue' (Balance > 0 AND DueDate < today). This is a convenience filter that will be translated to appropriate query conditions. |
| `end_date` | string | No | Filter invoices created on or before this date in YYYY-MM-DD format. Adds 'TxnDate <= end_date' to query. |
| `start_date` | string | No | Filter invoices created on or after this date in YYYY-MM-DD format. Adds 'TxnDate >= start_date' to query. |
| `customer_id` | string | No | Filter invoices by customer ID. Convenience parameter that adds 'WHERE CustomerRef = customer_id' to the query. |
| `max_results` | integer | No | Maximum number of invoices to return. Default is 25, maximum is 1000. |
| `start_position` | integer | No | Starting position for pagination. Default is 1 (first record). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Item Entities

**Slug:** `QUICKBOOKS_QUERY_ITEMS`

Query Item entities in QuickBooks using SQL-like syntax. Use this action to search, filter, and retrieve products and services from the QuickBooks catalog. IMPORTANT: Queries Item entity ONLY. For other entities use their respective query actions. Parentheses and OR operator NOT supported - use IN instead. Reference fields NOT queryable - filter client-side if needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Item entities ONLY. Do NOT use for other entities (Customer, Invoice, Bill, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Item [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE Active = true AND Type IN ('Service', 'Inventory')   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, Name, Type, Active, Sku, Description, FullyQualifiedName, UnitPrice, PurchaseCost, QtyOnHand.   NON-QUERYABLE fields: IncomeAccountRef, ExpenseAccountRef, AssetAccountRef, ParentRef, ClassRef. Using these in WHERE causes QueryValidationError.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: Name, Id. Non-sortable: Type and most other fields. - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Payment Entities

**Slug:** `QUICKBOOKS_QUERY_PAYMENTS`

Query Payment entities in QuickBooks using SQL-like syntax. Use when searching, filtering, or listing payments by date, customer, amount, or other attributes. For a single payment by ID, use GetPayment instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Payment entities ONLY. Do NOT use for other entities (Invoice, Bill, Customer, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Payment [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE TxnDate >= '2024-01-01' AND CustomerRef = '123'   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, TxnDate, CustomerRef, PaymentMethodRef, PaymentRefNum.  Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard for text fields - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: Id, TxnDate. - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Vendor Entities

**Slug:** `QUICKBOOKS_QUERY_VENDORS`

Query Vendor entities in QuickBooks using SQL-like syntax. Returns vendors matching the specified criteria with full details. Use this action when you need to search, filter, or list vendors based on conditions such as active status, display name, balance, or 1099 eligibility. Supports pagination for large result sets. IMPORTANT: Queries the Vendor entity ONLY. For other entities use their respective query actions. Parentheses and OR operator are NOT supported - use IN operator instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SQL-like query string to filter and retrieve Vendor entities ONLY. Do NOT use for other entities (Purchase, Invoice, Bill, etc.) - use their respective query tools.   Query syntax: SELECT [fields] FROM Vendor [WHERE conditions] [ORDER BY field] [STARTPOSITION n] [MAXRESULTS n]   CRITICAL SYNTAX RESTRICTIONS: - Parentheses for grouping are NOT supported - OR operator is NOT supported - use IN instead - Use: WHERE Active = true AND DisplayName LIKE '%Smith%'   NOTE: QuickBooks API returns ALL fields regardless of SELECT clause.   Commonly queryable fields: Id, DisplayName, CompanyName, GivenName, FamilyName, Active, Balance, PrimaryEmailAddr, PrintOnCheckName, AcctNum, Vendor1099.   Supports: - WHERE with operators (=, <, >, <=, >=, IN) - LIKE with % wildcard - AND only (no OR - use IN for multiple values) - ORDER BY for sorting (MUST be two words, not 'ORDERBY'). Sortable fields: DisplayName, Id, CompanyName, Balance. - MAXRESULTS (max 1000, default 100) and STARTPOSITION - COUNT |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Account

**Slug:** `QUICKBOOKS_READ_ACCOUNT`

Read an account in QuickBooks with the given account ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | ID of the account to be read |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Class

**Slug:** `QUICKBOOKS_READ_CLASS`

Read details of a specific class by ID in QuickBooks Online. Classes allow categorization of transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `class_id` | string | Yes | ID of the class to be read |
| `minorversion` | integer | No | API minor version to use for the request. If not provided, uses the version from metadata headers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Customer

**Slug:** `QUICKBOOKS_READ_CUSTOMER`

Read a customer in QuickBooks with the given customer ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | ID of the customer to be read Must be the QuickBooks-assigned numeric system ID, not a customer display name or free-text identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Employee

**Slug:** `QUICKBOOKS_READ_EMPLOYEE`

Read an employee's details in QuickBooks with the given employee ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `employee_id` | string | Yes | The ID of the employee to be read. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Invoice

**Slug:** `QUICKBOOKS_READ_INVOICE`

Tool to fetch a QuickBooks invoice by ID or the most recent if no ID provided. Use when needing full invoice details including metadata and sync token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | No | ID of the invoice to read; if not provided, fetches the latest invoice |
| `minorversion` | integer | No | API minor version to use for the request |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Vendor

**Slug:** `QUICKBOOKS_READ_VENDOR`

Read a vendor in QuickBooks with the given vendor ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | ID of the vendor to be read |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Credit Memo

**Slug:** `QUICKBOOKS_SEND_CREDIT_MEMO`

Tool to send a credit memo to a specified email address. Use when you need to email a credit memo to a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `send_to` | string | No | Optional email address to send the credit memo to. If not provided, sends to the customer's default email. |
| `minorversion` | integer | No | QuickBooks API minor version number (e.g., 65, 70, 75). If not specified, uses the default version from headers. |
| `credit_memo_id` | string | Yes | The ID of the credit memo to send |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Attachable

**Slug:** `QUICKBOOKS_UPDATE_ATTACHABLE`

Tool to update an existing attachable in QuickBooks Online. Use when you need to modify attachable properties like note text or entity references. Requires the attachable Id and current SyncToken for optimistic locking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | The ID of the attachable to update. |
| `Lat` | string | No | Latitude coordinate where the file was created. |
| `Tag` | string | No | Tag string for the attachable. |
| `Long` | string | No | Longitude coordinate where the file was created. |
| `Note` | string | No | Note text for the attachable. |
| `Category` | string | No | Category of the attachable (e.g., Image, Document, Sound, Receipt, Other, etc.). |
| `PlaceName` | string | No | Name of the place where the file was created. |
| `SyncToken` | string | Yes | The current SyncToken value for optimistic locking. Must match the latest value from QuickBooks. |
| `AttachableRef` | array | No | Array of references to entities this attachable is linked to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Company Info

**Slug:** `QUICKBOOKS_UPDATE_COMPANY_INFO`

Tool to update company information in QuickBooks Online. Use when you need to update company details like name, address, or contact information. Requires Id and SyncToken from a previous read operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | Unique identifier for the company info object. Typically '1' for the company record. |
| `Email` | object | No | Email address structure. |
| `Country` | string | No | Country where the company is registered (e.g., US, CA, UK). |
| `WebAddr` | object | No | Website address structure. |
| `LegalAddr` | object | No | Company address structure for update requests. |
| `LegalName` | string | No | Legal name of the company. |
| `NameValue` | array | No | List of name-value pairs containing additional company attributes. |
| `SyncToken` | string | Yes | Version number for optimistic locking. Must match current value to prevent concurrent update conflicts. |
| `CompanyAddr` | object | Yes | Company address object. Required for updates and must include PostalCode. |
| `CompanyName` | string | No | Name of the company. Optional for partial updates. |
| `PrimaryPhone` | object | No | Telephone number structure. |
| `CompanyStartDate` | string | No | Date when the company started business, in YYYY-MM-DD format. |
| `SupportedLanguages` | string | No | Comma-separated list of languages supported by the company. |
| `FiscalYearStartMonth` | string | No | Starting month of the company's fiscal year (e.g., January, February). |
| `CustomerCommunicationAddr` | object | No | Company address structure for update requests. |
| `CustomerCommunicationEmailAddr` | object | No | Email address structure. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Department

**Slug:** `QUICKBOOKS_UPDATE_DEPARTMENT`

Tool to update an existing department in QuickBooks Online. Use when you need to modify department details. Requires the department Id and current SyncToken to prevent concurrent update conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | The unique identifier of the department to update. Required for update operations. |
| `Name` | string | Yes | Updated name of the department. Maximum length is 100 characters. |
| `Active` | boolean | No | Whether the department is active. Inactive departments may be hidden from most display purposes. |
| `sparse` | boolean | No | Set to true to perform a partial update (only specified fields are updated). Defaults to true for update operations. |
| `ParentRef` | object | No | Reference to the parent department if this is a sub-department. Contains 'value' (ID) and optionally 'name'. |
| `SyncToken` | string | Yes | Version token for optimistic locking, obtained from a prior GET request. Prevents concurrent update conflicts. |
| `SubDepartment` | boolean | No | Whether this department is a sub-department. If true, ParentRef should be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Full Invoice

**Slug:** `QUICKBOOKS_UPDATE_FULL_INVOICE`

Tool to fully replace an Invoice. Use when you need to update all aspects of an existing invoice in a single operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | object | Yes | Full Invoice JSON payload to update; must include Id and SyncToken. Any writable field omitted will be cleared. Do not set sparse=true. |
| `requestid` | string | No | Optional idempotency key (<=50 chars) to prevent duplicate writes on retries. |
| `minorversion` | integer | No | Optional QuickBooks API minorversion to access newer fields (e.g., 63). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Payment Method

**Slug:** `QUICKBOOKS_UPDATE_PAYMENT_METHOD`

Tool to update an existing payment method in QuickBooks Online. Use when you need to modify the name, status, or type of a payment method. Requires the payment method Id and current SyncToken.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | Unique identifier of the payment method to update. Required for updates. |
| `Name` | string | Yes | User-recognizable name for the payment method (e.g., 'Business Check', 'Cash', 'Credit Card'). Maximum length is 31 characters. |
| `Type` | string | No | Type of payment method. Valid values: 'CREDIT_CARD', 'NON_CREDIT_CARD'. If not specified, defaults to 'NON_CREDIT_CARD'. |
| `Active` | boolean | No | Whether the payment method is active. Default is true. |
| `SyncToken` | string | Yes | Version number for optimistic locking. Must match the current version in QuickBooks to prevent conflicts. Required for updates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Preferences

**Slug:** `QUICKBOOKS_UPDATE_PREFERENCES`

Update company preferences in QuickBooks Online. Requires Id and SyncToken from a previous read. Use sparse=true for partial updates (only specified fields are changed) or sparse=false/omitted for full replacement.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | ID of the preferences object, typically '1' for company preferences. |
| `sparse` | boolean | No | Set to true for sparse (partial) update, updating only provided fields. Set to false or omit for full update. |
| `TaxPrefs` | object | No | Tax preferences. |
| `SyncToken` | string | Yes | Version number for optimistic locking. Required to prevent concurrent update conflicts. |
| `OtherPrefs` | object | No | Other miscellaneous preferences. |
| `ReportPrefs` | object | No | Report preferences. |
| `minorversion` | integer | No | QuickBooks API minor version to use (e.g., 65, 70, 75). Uses default if not specified. |
| `CurrencyPrefs` | object | No | Currency preferences. |
| `SalesFormsPrefs` | object | No | Sales forms preferences. |
| `TimeTrackingPrefs` | object | No | Time tracking preferences. |
| `EmailMessagesPrefs` | object | No | Email message preferences for various transaction types. |
| `AccountingInfoPrefs` | object | No | Accounting information preferences. |
| `ProductAndServicesPrefs` | object | No | Product and services preferences. |
| `VendorAndPurchasesPrefs` | object | No | Vendor and purchases preferences. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Sparse Invoice

**Slug:** `QUICKBOOKS_UPDATE_SPARSE_INVOICE`

Tool to perform a sparse update of an existing invoice. Use when you need to update only specific invoice fields without overwriting other data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | object | Yes | Invoice object containing Id, SyncToken, sparse flag, and fields to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Term

**Slug:** `QUICKBOOKS_UPDATE_TERM`

Tool to update an existing payment term in QuickBooks Online. Use when you need to modify the name, status, type, or payment conditions of a payment term. Requires the payment term Id and current SyncToken.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | Unique identifier of the payment term to update. Required for updates. |
| `Name` | string | Yes | User-recognizable name for the payment term (e.g., 'Net 30', 'Due on receipt'). Maximum length 31 characters. |
| `Type` | string | Yes | Type of the sales term. Valid values: 'STANDARD' (if dueDays is not null) or 'DATEDRIVEN' (if dueDays is null). |
| `Active` | boolean | No | Whether the payment term is active. Default is true. |
| `DueDays` | integer | No | Number of days until payment is due. If specified, Type should be 'STANDARD'. Use 0 for 'Due on receipt'. |
| `SyncToken` | string | Yes | Version number for optimistic locking. Must match the current version in QuickBooks to prevent conflicts. Required for updates. |
| `DiscountDays` | integer | No | Number of days within which payment must be made to receive the discount. Used with discount_percent for early payment discounts. |
| `DayOfMonthDue` | integer | No | Specific day of the month when payment is due. Used for DATEDRIVEN type terms. Valid range: 1-31. |
| `DiscountPercent` | number | No | Discount percentage available if paid within the discount days. Valid range: 0 to 100. |
| `DueNextMonthDays` | integer | No | Number of days in the month before the due date shifts to the next month. Used for DATEDRIVEN type terms. |
| `DiscountDayOfMonth` | integer | No | Specific day of the month when discount is available. Used for DATEDRIVEN type terms. Valid range: 1-31. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Transfer

**Slug:** `QUICKBOOKS_UPDATE_TRANSFER`

Tool to update an existing transfer in QuickBooks Online. Use when you need to modify a transfer between accounts. Requires the transfer Id and current SyncToken to prevent concurrent update conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | Yes | The unique identifier of the transfer to update. Required for update operations. |
| `Amount` | string | Yes | The monetary amount to transfer between accounts. Specified as a string (e.g., '35.00'). |
| `TxnDate` | string | No | The date of the transfer transaction in YYYY-MM-DD format. Defaults to current date if not specified. |
| `SyncToken` | string | Yes | Version token for optimistic locking, obtained from a prior GET request. Prevents concurrent update conflicts. |
| `CurrencyRef` | object | No | Reference to a currency for multi-currency transactions. |
| `PrivateNote` | string | No | Internal note about the transfer that is not visible to customers. |
| `ExchangeRate` | string | No | Exchange rate for multi-currency transactions. Default is 1 for home currency. Only applicable when using non-home currency. |
| `ToAccountRef` | object | Yes | Reference to the destination account to which funds are transferred. |
| `DepartmentRef` | object | No | Reference to a department for location tracking. |
| `FromAccountRef` | object | Yes | Reference to the source account from which funds are transferred. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Vendor Balance Detail

**Slug:** `QUICKBOOKS_VENDOR_BALANCE_DETAIL`

Generate a balance detail report for a vendor in QuickBooks with the given vendor ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `arpaid` | string ("All" | "Paid" | "Unpaid") | No | Filter by payment status. Use 'All' for all balances, 'Paid' for fully paid balances, or 'Unpaid' for outstanding balances. |
| `columns` | string | No | Column types to be shown in the report. Supported Values: bill_addr, create_by, create_date, vend_bill_email, vend_comp_name, vend_msg, vend_phone_other, vend_tel, vend_name, deliv_addr, doc_num*, due_date*, last_mod_by, last_mod_date, memo*, vendor_sent_state, ship_addr, ship_date, term_name, tracking_num, tx_date*, txn_type*. Additional columns with custom fields enabled: purchase_vend1, purchase_vend2, purchase_vend3. Additional columns with location tracking enabled: dept_name* |
| `sort_by` | string | No | The column type used in sorting report rows. Specify a column type as defined with the columns query parameter. |
| `term_ids` | array | No | One or more comma separated term IDs. Filters report contents based on term or terms supplied.  |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `vendor_ids` | array | No | One or more comma separated vendor IDs. Filters report contents to include information for specified vendors.  |
| `end_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `num_periods` | integer | No | Number of aging periods to display in the report. Each period represents a time bucket for aging calculations (e.g., 0-30 days, 31-60 days). |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `aging_method` | string ("Report_Date" | "Current") | No | Method for calculating age of payables. 'Report_Date' calculates age based on the report date, while 'Current' calculates age based on the current date. |
| `aging_period` | integer | No | Number of days per aging period. Default is typically 30 days. For example, setting this to 30 creates buckets like 0-30, 31-60, 61-90 days. |
| `duedate_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range of due dates for balances to include in the report; otherwise, use the start_duedate and end_duedate to cover an explicit report date range.  |
| `start_duedate` | string | No | The range of dates over which receivables are due, in the format YYYY-MM-DD. start_duedate must be less than end_duedate. If not specified, all data is returned. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Vendor Balance Report

**Slug:** `QUICKBOOKS_VENDOR_BALANCE_REPORT`

Retrieve a vendor balance report from QuickBooks showing outstanding balances for vendors. This report displays the total amount owed to each vendor, providing a summary of accounts payable. You can filter by specific vendors, date ranges, payment status, and customize the report with various grouping and sorting options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `qzurl` | string | No | Specifies whether Quick Zoom URL information should be generated for rows in the report. |
| `appaid` | string ("All" | "Paid" | "Unpaid") | No | Filters vendors by payment status. Use 'All' for all vendors, 'Paid' for vendors with fully paid balances, or 'Unpaid' for vendors with outstanding balances. |
| `date_macro` | string ("Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-date" | "Last Week-to-date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-date" | "Last Month-to-date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-date" | "Last Fiscal Quarter-to-date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-date" | "Last Fiscal Year-to-date" | "Next Fiscal Year") | No | Predefined date range. Use if you want the report to cover a standard report date range; otherwise, use the start_date and end_date to cover an explicit report date range. |
| `sort_order` | string ("ascend" | "descend") | No | The sort order. |
| `vendor_ids` | array | No | Filters report contents to include information for specified vendors. Supported Values: One or more comma separated vendor IDs as returned in the attribute, Vendor.Id, of the Vendor object response code. |
| `report_date` | string | No | Start date to use for the report, in the format YYYY-MM-DD. |
| `department_ids` | array | No | One or more comma separated department IDs. Filters report contents to include information for specified departments if so configured in the company file.  |
| `accounting_method` | string ("Cash" | "Accrual") | No | The accounting method used in the report.  |
| `summarize_column_by` | string ("Total" | "Month" | "Week" | "Days" | "Quarter" | "Year" | "Customers" | "Vendors" | "Classes" | "Departments" | "Employees" | "ProductsAndServices") | No | The criteria by which to group the report results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
