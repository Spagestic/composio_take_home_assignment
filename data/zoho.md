# Zoho

Zoho is a suite of cloud applications including CRM, email marketing, and collaboration tools, enabling businesses to automate and scale operations

- **Category:** crm
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 57
- **Triggers:** 0
- **Slug:** `ZOHO`
- **Version:** 20260819_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Zoho CRM?

For a step-by-step guide on creating and configuring your own Zoho CRM OAuth credentials with Composio, see [How to create OAuth credentials for Zoho CRM](https://composio.dev/auth/zoho).

## Tools

### Convert Zoho CRM Lead

**Slug:** `ZOHO_CONVERT_ZOHO_LEAD`

Converts a lead into a contact, account, and optionally a deal in Zoho CRM.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lead_id` | string | Yes | The unique ID of the lead to convert. |
| `assign_to` | string | No | User ID to assign as the owner of the new contact/account. |
| `overwrite` | boolean | No | Whether to overwrite the account name in the contact if it already exists and the company names mismatch. |
| `account_id` | string | No | ID of an existing account to associate with the converted lead. |
| `contact_id` | string | No | ID of an existing contact to associate with the converted lead. |
| `notify_lead_owner` | boolean | No | Notify the lead owner about the conversion via email. |
| `notify_new_entity_owner` | boolean | No | Notify the new owner of the contact/account via email. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact in Zoho CRM

**Slug:** `ZOHO_CREATE_CONTACT`

Creates a new contact record in Zoho CRM. Use this action when you need to add a new contact to the CRM system. The Last_Name field is mandatory and must be provided with a non-empty value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | string | No | Fax number of the contact |
| `email` | string | No | Email address of the contact |
| `owner` | object | No | Reference to another contact or user in Zoho CRM. |
| `phone` | string | No | Phone number of the contact |
| `title` | string | No | Job title of the contact |
| `mobile` | string | No | Mobile phone number of the contact |
| `twitter` | string | No | Twitter handle of the contact |
| `skype_id` | string | No | Skype ID of the contact |
| `assistant` | string | No | Name of the contact's assistant |
| `last_name` | string | Yes | Last name of the contact (required field, must be non-empty) |
| `other_zip` | string | No | ZIP code for other address |
| `asst_phone` | string | No | Phone number of the contact's assistant |
| `department` | string | No | Department where the contact works |
| `first_name` | string | No | First name of the contact |
| `home_phone` | string | No | Home phone number of the contact |
| `other_city` | string | No | City for other address |
| `description` | string | No | Description or notes about the contact |
| `lead_source` | string | No | Source from which the contact was acquired |
| `mailing_zip` | string | No | ZIP code for mailing address |
| `other_phone` | string | No | Alternative phone number of the contact |
| `other_state` | string | No | State for other address |
| `vendor_name` | string | No | Name of the vendor associated with this contact |
| `account_name` | string | No | Name of the account associated with this contact |
| `mailing_city` | string | No | City for mailing address |
| `other_street` | string | No | Street address for other address |
| `reporting_to` | object | No | Reference to another contact or user in Zoho CRM. |
| `date_of_birth` | string | No | Date of birth of the contact in YYYY-MM-DD format |
| `mailing_state` | string | No | State for mailing address |
| `other_country` | string | No | Country for other address |
| `mailing_street` | string | No | Street address for mailing |
| `mailing_country` | string | No | Country for mailing address |
| `secondary_email` | string | No | Secondary email address of the contact |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deal in Zoho CRM

**Slug:** `ZOHO_CREATE_DEAL`

Creates a new deal in Zoho CRM representing a sales opportunity with deal name, stage, amount, and closing date. Use this action when you need to create a sales deal or opportunity in Zoho CRM. Required fields are Deal_Name and Stage; all other fields are optional. The deal will be assigned to the authenticated user unless an Owner is explicitly specified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Owner` | object | No | Owner of the deal. |
| `Stage` | string | Yes | The current stage of the deal in the sales pipeline. This is a required field. Common stages include: 'Qualification', 'Needs Analysis', 'Value Proposition', 'Proposal/Price Quote', 'Negotiation/Review', 'Closed Won', 'Closed Lost'. |
| `Amount` | number | No | The monetary value of the deal in the account's currency. Use decimal format for fractional amounts. |
| `Pipeline` | string | No | The sales pipeline this deal belongs to. Required when multiple pipelines are enabled in your Zoho CRM org. Use the exact pipeline name as configured in Zoho CRM. |
| `Deal_Name` | string | Yes | The name of the deal. This is a required field and must be a non-empty string. |
| `Next_Step` | string | No | The next action or step planned for moving this deal forward in the sales process. |
| `Description` | string | No | A detailed description or notes about the deal, including context, requirements, or special considerations. |
| `Lead_Source` | string | No | The source or channel from which this deal originated. |
| `Probability` | integer | No | The probability of closing this deal, expressed as a percentage between 0 and 100. |
| `Account_Name` | object | No | Account associated with the deal. |
| `Closing_Date` | string | No | The expected or actual closing date of the deal in YYYY-MM-DD format (ISO 8601 date format). |
| `Contact_Name` | object | No | Contact associated with the deal. |
| `Campaign_Source` | object | No | Campaign associated with the deal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Email Draft in Zoho CRM

**Slug:** `ZOHO_CREATE_EMAIL_DRAFT`

Creates email drafts for a specific record in Zoho CRM. Email drafts are saved but not sent, allowing for review and editing before sending. Use this action when you need to prepare email communications associated with CRM records (Leads, Contacts, Deals, etc.) that will be reviewed and sent later. The draft will be visible in the record's timeline and can be edited or sent through the Zoho CRM interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | Unique identifier of the record for which to create the email draft |
| `__email_drafts` | array | Yes | List of email drafts to create (maximum 100 drafts per API call). Each draft must include 'from' and 'rich_text' fields. Use this action when you need to create draft emails associated with a CRM record for later review and sending. |
| `module_api_name` | string | Yes | The API name of the module containing the record for which to create the email draft. Standard modules include 'Leads', 'Contacts', 'Accounts', 'Deals', 'Quotes', 'Sales_Orders', 'Purchase_Orders', 'Cases'. Custom modules must use their exact API name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zoho Event

**Slug:** `ZOHO_CREATE_EVENT`

Creates a new Event record in Zoho CRM. Events represent scheduled activities like meetings, calls, or appointments. Use this action when you need to schedule a new event or meeting in the CRM system. All events require an event title, start time, and end time at minimum.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Owner` | object | No | Reference to another record in the CRM. |
| `Venue` | string | No | Location or venue of the event |
| `Who_Id` | object | No | Reference to another record in the CRM. |
| `All_day` | boolean | No | Indicates whether the event spans an entire day or multiple days |
| `What_Id` | object | No | Reference to another record in the CRM. |
| `trigger` | array | No | List of triggers to invoke (e.g., ['workflow', 'blueprint']). Use cautiously as triggers can cause side effects like sending emails |
| `Remind_At` | array | No | List of reminder configurations for the event. Each reminder specifies when to alert before the event starts |
| `Description` | string | No | Detailed description of the event |
| `Event_Title` | string | Yes | Name of the event. Required field that accepts alphanumeric and special characters |
| `End_DateTime` | string | Yes | Event end date and time in ISO8601 format (e.g., '2024-07-03T14:30:00+05:30') |
| `Participants` | array | No | List of event participants (leads, contacts, users, or email addresses) |
| `Start_DateTime` | string | Yes | Event start date and time in ISO8601 format (e.g., '2024-07-03T12:30:00+05:30') |
| `Check_In_Status` | string | No | Check-in status for the event |
| `Recurring_Activity` | object | No | Recurrence rule for the event in RRULE format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Lead in Zoho CRM

**Slug:** `ZOHO_CREATE_LEAD`

Creates a new lead record in Zoho CRM with the specified details. The only mandatory field is Last_Name - all other fields are optional. Use this action when you need to add a new lead to Zoho CRM, typically after capturing lead information from a web form, email, or other lead generation source. The action returns the newly created lead ID and metadata including creation timestamps and user information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Fax` | string | No | Fax number of the lead |
| `City` | string | No | City of the lead's address |
| `Email` | string | No | Email address of the lead |
| `Phone` | string | No | Phone number of the lead (up to 30 characters) |
| `State` | string | No | State or province of the lead's address |
| `Mobile` | string | No | Mobile phone number of the lead |
| `Rating` | string | No | Rating of the lead (e.g., Acquired, Active, Market Failed, Project Cancelled, Shutdown) |
| `Street` | string | No | Street address of the lead |
| `lar_id` | string | No | Lead assignment rule ID to apply when creating the lead. This determines which user the lead will be assigned to based on predefined rules |
| `Company` | string | No | Company name associated with the lead |
| `Country` | string | No | Country of the lead's address |
| `Twitter` | string | No | Twitter handle of the lead |
| `Website` | string | No | Website URL of the lead's company |
| `trigger` | array | No | List of workflow triggers to execute during lead creation (e.g., ['workflow', 'approval', 'blueprint']). Use this only when you explicitly need to trigger workflows, approvals, or blueprints, as enabling triggers can cause side effects like sending emails or modifying other records |
| `Industry` | string | No | Industry sector of the lead's company |
| `Skype_ID` | string | No | Skype ID of the lead |
| `Zip_Code` | string | No | Postal or ZIP code of the lead's address |
| `Last_Name` | string | Yes | Last name of the lead - this is a mandatory field in Zoho CRM |
| `First_Name` | string | No | First name of the lead |
| `Salutation` | string | No | Salutation or title for the lead (e.g., Mr., Ms., Dr., Prof.) |
| `Description` | string | No | Additional notes or description about the lead |
| `Designation` | string | No | Job title or designation of the lead |
| `Lead_Source` | string | No | Source from which the lead was acquired (e.g., Advertisement, Cold Call, Employee Referral, External Referral, Online Store, Partner, Public Relations, Sales Email Alias, Seminar Partner, Internal Seminar, Trade Show, Web Download, Web Research, Chat) |
| `Lead_Status` | string | No | Current status of the lead (e.g., Attempted to Contact, Contact in Future, Contacted, Junk Lead, Lost Lead, Not Contacted, Pre-Qualified, Not Qualified) |
| `Annual_Revenue` | number | No | Annual revenue of the lead's company |
| `No_of_Employees` | integer | No | Number of employees in the lead's company |
| `Secondary_Email` | string | No | Secondary email address of the lead |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Note in Zoho CRM

**Slug:** `ZOHO_CREATE_NOTE`

Creates a new note attached to a specific record in Zoho CRM. Notes are text annotations that can be added to any standard or custom module record. Use this action when you need to add notes, comments, or text-based documentation to a record in Zoho CRM. The note will be visible in the record's Notes related list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier of the parent record to attach the note to. This is the ID of the record in the specified module. |
| `Note_Title` | string | No | Optional title for the note |
| `Note_Content` | string | Yes | The content/text of the note (required) |
| `module_api_name` | string | Yes | The API name of the parent module containing the record. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', etc. This must be a valid module API name in Zoho CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zoho CRM Record

**Slug:** `ZOHO_CREATE_ZOHO_RECORD`

Creates new records in a specified module in Zoho CRM. Bulk operations may partially succeed — inspect each item's status field in the response, as some records may be created while others fail.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of dictionaries representing the records to be created. Each dictionary contains field API names as keys and their values. Required fields depend on the module (e.g., Last_Name is required for Leads and Contacts, and MUST have a non-empty value). For lookup fields, use simplified format: {"id": "<record_id>", "module": "<ModuleName>"} (e.g., {"id": "123456", "module": "Accounts"}) or full API format for Parent_Id: {"id": "<record_id>", "module": {"api_name": "<ModuleName>"}}. IMPORTANT: What_Id is for business objects (Accounts, Deals, Products, Quotes, Sales_Orders, Purchase_Orders, Invoices, Campaigns, Vendors, Cases, Leads). Who_Id is for person modules (Contacts, Leads). Use Who_Id for Contacts, not What_Id. To assign an owner, use the field "Owner" with a valid Zoho user ID dict (e.g., {"id": "<user_id>"}); incorrect field names silently fail to assign ownership. For Tasks, include only minimal required fields — extra layout-dependent fields can cause INVALID_DATA errors. |
| `lar_id` | string | No | The layout ID or lead assignment rule ID (lar_id) to be used if required. |
| `trigger` | array | No | List of triggers to invoke during record creation (e.g., ['workflow', 'blueprint']). Enabling triggers can cause side effects (emails sent, other records modified) — only include when such effects are explicitly desired, especially in bulk operations. |
| `module_api_name` | string | Yes | The API name of the module to create a record in. Standard modules use PascalCase (e.g., 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', 'Campaigns'). Custom modules must use their exact API name as configured in Zoho CRM - this is NOT the display name. To find a custom module's API name: Go to Setup > Developer Hub > APIs and SDKs > API Names, then select the custom module from the dropdown. The API name is typically in the format 'CustomModule1', 'CustomModule2', etc., or a name assigned when the module was created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zoho CRM Tag

**Slug:** `ZOHO_CREATE_ZOHO_TAG`

Creates a new tag in Zoho CRM for a specific module. Tags help organize and categorize CRM records. Each module can have up to 100 tags, and each record can have up to 10 tags assigned. Tags must have unique names within a module and can be assigned custom colors from a predefined palette. Creating a tag does not apply it to any records; use separate update actions to assign the tag to records. Use this action to create standardized tags for lead scoring, deal stages, customer segments, or any custom categorization needs in your CRM workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the tag to create. Maximum 25 characters. Cannot contain '<', '>', commas, or emojis. |
| `color_code` | string | No | Hex color code for the tag. Must be one of the 13 allowed colors: #F17574 (red), #F48435 (orange), #E7A826 (yellow), #A8C026 (lime), #63C57E (green), #1DB9B4 (teal), #57B1FD (blue), #879BFC (indigo), #D297EE (purple), #FD87BD (pink), #969696 (gray), #658BA8 (slate), #B88562 (brown). Defaults to orange (#F48435). |
| `module_api_name` | string | Yes | The API name of the Zoho CRM module to create the tag in. Supported modules: Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and custom modules. Value is case-sensitive and must exactly match the CRM API name (e.g., 'Leads' not 'leads' or 'Lead'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zoho Account

**Slug:** `ZOHO_DELETE_ACCOUNT`

Deletes an existing account record from Zoho CRM. This action permanently removes the account and cannot be undone through the API. Use this action when you need to remove an account record that is no longer needed or was created in error. This action is irreversible — the account cannot be recovered once deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The unique identifier of the account to delete. Must be a valid Zoho CRM account ID. |
| `wf_trigger` | boolean | No | Whether to trigger workflow rules during deletion. Set to true to execute workflows, false to skip them. If not specified, default behavior applies. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zoho CRM Contact

**Slug:** `ZOHO_DELETE_CONTACT`

Deletes a contact from Zoho CRM. This action is irreversible — the contact cannot be recovered once deleted. Use this action when you need to permanently remove a contact record from the CRM. All associated subforms and related data are automatically deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier of the contact to delete |
| `wf_trigger` | boolean | No | Whether to trigger workflows during deletion. If true, all associated workflows execute. Defaults to true if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zoho CRM Deal

**Slug:** `ZOHO_DELETE_DEAL`

Deletes a deal record from Zoho CRM. This action is irreversible — once deleted, the deal cannot be recovered. Use this action when you need to permanently remove a deal from the CRM system. The deal will be moved to the recycle bin initially and can be restored from there within the configured retention period (typically 60 days), after which permanent deletion occurs automatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deal_id` | string | Yes | The unique identifier of the deal to delete. This is the Zoho CRM record ID for the deal |
| `wf_trigger` | boolean | No | Whether to trigger workflow rules after deletion. Set to true to execute workflows, or false to skip them. When workflows execute, side effects like notifications and automations may occur |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Account

**Slug:** `ZOHO_GET_ACCOUNT`

Retrieves a specific Account record from Zoho CRM by its unique identifier. Returns complete account details including all standard and custom fields. Use this action when you need to fetch a single account's information by its ID rather than searching or listing multiple accounts. Unlike bulk record retrieval, this action provides access to subform records, multi-select lookup fields, and multi-user lookup fields that are only available in single-record responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated API names of fields to retrieve (max 50 fields). If not specified, all available fields for the account are returned. Common fields: Account_Name, Website, Phone, Email, Industry, Annual_Revenue, Billing_Street, Billing_City, Billing_State, Billing_Country, Owner. Note: Subform records, multi-select lookup fields, and multi-user lookup fields are only accessible when fetching a specific record (not available in list operations). |
| `account_id` | string | Yes | The unique identifier of the Account record to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Call

**Slug:** `ZOHO_GET_CALL`

Retrieves a specific Call record by its unique identifier from Zoho CRM. Use this action when you need to fetch detailed information about a particular call, including its subject, duration, type, participants, outcome, and associated contacts or deals. This action is read-only and does not modify any data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated API names of specific fields to retrieve (max 50). If not specified, all standard fields are returned. Common fields: Subject, Call_Type, Call_Start_Time, Call_Duration, Call_Purpose, Call_Agenda, Call_Result, Description, Owner, Who_Id, What_Id, Created_Time, Modified_Time. Use field API names exactly as they appear in Zoho CRM. |
| `record_id` | string | Yes | The unique identifier of the Call record to retrieve. Must be a valid Zoho CRM record ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Contact

**Slug:** `ZOHO_GET_CONTACT`

Retrieves a single contact record by ID from Zoho CRM. Returns the complete contact details including owner information, account associations, address fields, and all custom fields. Use this action when you need to fetch detailed information about a specific contact using its record ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique ID of the contact record to retrieve. Must be a valid Zoho CRM contact record ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Drafts for Zoho CRM Record

**Slug:** `ZOHO_GET_EMAIL_DRAFTS`

Retrieves email drafts associated with a specific record in Zoho CRM. Use this action when you need to view unsent email drafts that have been composed for a CRM record. This returns draft metadata including recipients, subject, content, attachments, and scheduling details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `module` | string | Yes | The API name of the CRM module containing the record. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Cases', etc. Must be the exact module API name, not the UI display label. |
| `record` | string | Yes | Entity ID of the record for which to retrieve email drafts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho Event

**Slug:** `ZOHO_GET_EVENT`

Retrieves a specific event record from Zoho CRM by its unique identifier. Returns complete event details including all standard and custom fields. Use this action when you need to fetch detailed information about a specific event/meeting, including participants, location, timing, and related records. The response includes subform data and multi-select lookup values that are not available in list queries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier of the event record to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get From Addresses

**Slug:** `ZOHO_GET_FROM_ADDRESSES`

Retrieves the list of from addresses configured for email operations in Zoho CRM. Use this action when you need to get available email addresses for sending emails or configuring email settings. Returns organization, user, alias, and chat email addresses configured in the CRM.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Module Fields Metadata

**Slug:** `ZOHO_GET_MODULE_FIELDS`

Retrieves field metadata for a Zoho CRM module including API names, data types, permissions, and configuration details. Use this tool to discover correct field names and types before creating or updating records, avoiding INVALID_DATA errors. Returns information about standard fields, custom fields, lookup fields, picklist options, and field-level permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Filter fields by usage type. Values: 'all' (both used and unused fields) or 'unused' (unused fields only). If not specified, returns all used fields. |
| `include` | string | No | Include additional permission details in the response. Use 'allowed_permissions_to_update' to get default field permissions (read-only, read-write, hidden). |
| `field_unique_id` | string | No | The unique ID of a specific field to retrieve. When provided, only that single field's metadata is returned. If not specified, all fields for the module are returned. |
| `module_api_name` | string | Yes | The API name of the module to retrieve field metadata for. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', 'Cases', 'Events', 'Calls', etc. For custom modules, use the exact API name as configured in Zoho CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Note

**Slug:** `ZOHO_GET_NOTE`

Retrieves a single note by its unique identifier from Zoho CRM. Returns the note's title, content, parent record reference, owner details, and timestamps. Use this action when you need to fetch detailed information about a specific note, such as reading meeting notes, viewing customer interaction summaries, or accessing documentation attached to a CRM record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated API names of the fields to retrieve. Common fields: Note_Title, Note_Content, Parent_Id, Owner, Created_Time, Modified_Time, Created_By, Modified_By. This parameter is required by the Zoho API. |
| `note_id` | string | Yes | The unique identifier of the note to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Record Emails

**Slug:** `ZOHO_GET_RECORD_EMAILS`

Retrieves all emails associated with a specific record in Zoho CRM. Use this action when you need to fetch email history for a lead, contact, account, deal, or other CRM record. The response includes email metadata such as subject, sender, recipients, timestamps, and status information. Supports pagination for records with large email volumes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("sent_from_crm" | "scheduled_in_crm" | "drafts" | "user_emails" | "all_contacts_sent_crm_emails" | "all_contacts_scheduled_crm_emails" | "all_contacts_draft_crm_emails") | No | Type of emails to filter. |
| `index` | string | No | Pagination control parameter. Use the 'next_index' value from the previous response's info object to retrieve the next batch of emails. Start without this parameter to get the first page. |
| `owner_id` | string | No | The ID of the user whose emails you want to fetch. IMPORTANT: This parameter can only be used when type='user_emails'. It will be ignored if type is set to any other value. |
| `record_id` | string | Yes | The unique identifier of the record whose emails you want to retrieve. |
| `module_api_name` | string | Yes | The API name of the module containing the record. Common modules: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Quotes', 'Invoices', 'Sales_Orders', 'Purchase_Orders', or custom modules. Must be the exact API name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Related Lists Metadata

**Slug:** `ZOHO_GET_RELATED_LISTS`

Retrieves related list metadata for a Zoho CRM module to discover correct api_name values. Use this before updating related records to avoid INVALID_DATA errors from incorrect related_list_api_name. Returns api_name, display_label, href, and other details for each related list available in the module.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `layout_id` | string | No | Optional layout ID to filter related lists by specific layout. If not specified, returns related lists for all layouts of the module. |
| `module_api_name` | string | Yes | The API name of the module to retrieve related list metadata for. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', etc. This must be a valid module API name in Zoho CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Related Records

**Slug:** `ZOHO_GET_RELATED_RECORDS`

Fetch related-list records (e.g., Notes, Attachments, Emails) for a Zoho CRM parent record using related_list_api_name. Use ZOHO_GET_RELATED_LISTS first to discover the correct api_name for the related list you want to access. Supports pagination for large result sets (up to 2,000 records with page/per_page, unlimited with page_token).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of specific related record IDs to retrieve. Use this to fetch only certain related records instead of all related records. Example: '4876876000000636001,4876876000000636002' |
| `page` | integer | No | Page number to retrieve (default: 1). Without page_token, only the first 2,000 records are accessible using page/per_page pagination. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | Yes | Comma-separated API names of the fields to retrieve (required by Zoho for this API). Specify the field names from the related list module whose details you want to receive. Example: 'Note_Title,Note_Content,Created_Time' for Notes. Field names vary by related list type - check module field definitions to ensure correct names. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting related records. |
| `per_page` | integer | No | Number of records per page (default and maximum: 200). Applies to both page and page_token pagination. |
| `converted` | string ("false" | "true" | "both") | No | Filter for converted status (applicable to certain related lists). |
| `record_id` | string | Yes | The unique identifier of the parent record for which to retrieve related records. This is the ID of the record in the specified module. |
| `page_token` | string | No | Token-based pagination parameter to fetch records beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for related records. |
| `module_api_name` | string | Yes | The API name of the parent module containing the record. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', etc. This must be a valid module API name in Zoho CRM. |
| `related_list_api_name` | string | Yes | The API name of the related list to retrieve (e.g., 'Notes', 'Attachments', 'Emails'). IMPORTANT: Use the ZOHO_GET_RELATED_LISTS action first to discover the correct api_name for the related list you want to access. Using an incorrect api_name will result in INVALID_DATA errors. Example values: 'Notes', 'Attachments', 'Activities', 'Emails', 'Campaigns', 'Products', 'Open_Activities', 'Closed_Activities', 'Invited_Events'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Task

**Slug:** `ZOHO_GET_TASK`

Retrieves a specific task record by its ID from Zoho CRM. Returns complete task data including all standard and custom fields, subforms, and multi-user lookup fields that are only available when fetching individual records. Use this action when you need to fetch detailed information about a single task using its unique record ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated API names of the fields to retrieve (max 50). If not specified, all standard fields are returned. Common task fields: Subject, Description, Due_Date, Status, Priority, Owner, Who_Id, What_Id, Created_Time, Modified_Time. Use field API names, not display labels. |
| `record_id` | string | Yes | The unique identifier of the task to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM User

**Slug:** `ZOHO_GET_USER`

Retrieves a specific user from Zoho CRM by their user ID. Returns detailed user information including name, email, role, profile, status, and preferences. Use this action when you need to fetch information about a specific user by ID, or use 'me' as the user_id to get the currently authenticated user's details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier of the user to retrieve. This can be the user's ID from the Zoho CRM system or the special value 'me' to retrieve the currently authenticated user's information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Records

**Slug:** `ZOHO_GET_ZOHO_RECORDS`

Retrieves records from a specified module in Zoho CRM. Notes: - Discrete (page/per_page) pagination is limited to the first 2,000 records. To retrieve records beyond this, use token-based pagination via page_token from the previous response's info.next_page_token. - Do not use page together with page_token. - You cannot use cvid together with sort_by.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated record IDs to fetch specific records. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the records. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 records are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | No | Comma-separated API names of the fields to retrieve (max 50). At least one field must be specified (empty string not allowed). Field names are module-specific. Common fields: First_Name, Last_Name, Email, Phone, Mobile. For Leads: Company, Lead_Status, Lead_Source. For Accounts: Account_Name, Website, Industry. For Contacts: Account_Name, Mailing_Street. For Deals: Deal_Name, Amount, Stage, Closing_Date. Invalid or cross-module field names silently produce missing columns rather than explicit errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM records. |
| `per_page` | integer | No | Number of records per page (default and max is 200). Applies to both page and page_token pagination. |
| `page_token` | string | No | Token-based pagination parameter to fetch records beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for records. |
| `module_api_name` | string | Yes | The API name of the module to retrieve records from. Common supported modules: Leads, Contacts, Accounts, Deals, Tasks, Events, Calls, Products, Quotes, Sales_Orders, Purchase_Orders, Invoices, Campaigns, Vendors, Price_Books, Cases, Solutions, Notes. IMPORTANT: 'Activities' is NOT a supported module - use 'Tasks', 'Events', or 'Calls' instead. Must be the exact API name, not the UI display label — mismatches silently return empty results instead of an error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Zoho CRM Users

**Slug:** `ZOHO_GET_ZOHO_USERS`

Tool to retrieve users from Zoho CRM. Use when you need to fetch user information such as IDs, names, emails, roles, or status for setting Owner fields or performing user-related operations in CRM workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of user IDs to retrieve specific users. Maximum of 100 user IDs can be specified at once. |
| `page` | integer | No | Page number to retrieve for paginated results. Default is 1. |
| `type` | string | No | The type of users to retrieve. Supported values: 'AllUsers' (all users including inactive), 'ActiveUsers' (only active users), 'DeactiveUsers' (only deactivated users), 'ConfirmedUsers' (users who have confirmed their account), 'NotConfirmedUsers' (users who have not confirmed their account), 'DeletedUsers' (deleted users), 'ActiveConfirmedUsers' (active and confirmed users), 'AdminUsers' (users with admin privileges), 'ActiveConfirmedAdmins' (active confirmed admin users), 'CurrentUser' (the currently authenticated user). If not specified, returns all active confirmed users. |
| `per_page` | integer | No | Number of users to retrieve per page. Maximum is 200. Default is 200. |
| `if_modified_since` | string | No | Retrieve users modified after this timestamp. Use ISO 8601 format (e.g., '2024-01-15T10:00:00+00:00'). This will be sent as the 'If-Modified-Since' header to the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Accounts

**Slug:** `ZOHO_LIST_ACCOUNTS`

Retrieves a list of account records from Zoho CRM with pagination and filtering support. Use this action when you need to fetch multiple account records from the Accounts module, optionally filtered by territory, approval status, or custom views. Supports both discrete pagination (first 2,000 records) and token-based pagination for larger datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cvid` | integer | No | Custom view ID to filter the account records. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 records are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | Yes | Comma-separated API names of the account fields to retrieve (max 50). This parameter is mandatory in Zoho CRM v8 API. Common fields: Account_Name, Phone, Website, Industry, Annual_Revenue, Owner, Rating, Account_Type. Invalid field names silently produce missing columns rather than errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM Accounts records. |
| `approved` | string | No | Filter accounts by approval status: 'true' for approved, 'false' for not approved, 'both' for all. |
| `per_page` | integer | No | Number of account records per page (max is 200). Default is 25 to avoid token bloat. |
| `page_token` | string | No | Token-based pagination parameter to fetch account records beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for Accounts records. |
| `territory_id` | string | No | Territory ID to filter accounts by territory assignment. |
| `include_child` | boolean | No | Whether to include accounts from child territories when territory_id is specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Calls

**Slug:** `ZOHO_LIST_CALLS`

Retrieves Call activity records from Zoho CRM with pagination support. Use this action when you need to list calls logged in the CRM, filter by custom views, or retrieve specific Call records by ID. Call records represent phone call activities associated with Contacts, Leads, or other CRM records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated Call record IDs to fetch specific records. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the Call records. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 Call records are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | Yes | Comma-separated API names of Call fields to retrieve (max 50). Required parameter. Common Call fields: Subject, Call_Type, Call_Start_Time, Call_Duration, Call_Purpose, Call_Agenda, Call_Result, Description, Owner, Who_Id, What_Id, Created_Time, Modified_Time. Use the Get Module Fields action to discover all available fields for the Calls module. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM Call records. |
| `per_page` | integer | No | Number of Call records per page (maximum is 200). Applies to both page and page_token pagination. Defaults to 25 for optimal response size. |
| `page_token` | string | No | Token-based pagination parameter to fetch Call records beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for Call records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Contacts

**Slug:** `ZOHO_LIST_CONTACTS`

Retrieves contact records from Zoho CRM with support for pagination, filtering, and sorting. Use this action when you need to fetch a list of contacts from Zoho CRM. This is a specialized action focused on the Contacts module with contact-specific field defaults and optimizations. For retrieving records from other modules, use the generic get_records action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated contact record IDs to fetch specific contacts. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the contact records. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 records are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | No | Comma-separated API names of the contact fields to retrieve (max 50). At least one field must be specified (empty string not allowed). Common contact fields: First_Name, Last_Name, Email, Phone, Mobile, Account_Name, Mailing_Street, Title, Department, Lead_Source, Created_Time, Modified_Time. Invalid field names silently produce missing columns rather than explicit errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM contact records. |
| `per_page` | integer | No | Number of contact records per page. Maximum is 200. Applies to both page and page_token pagination. |
| `page_token` | string | No | Token-based pagination parameter to fetch contacts beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for contact records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deals

**Slug:** `ZOHO_LIST_DEALS`

Retrieves a list of deals from Zoho CRM with support for filtering, sorting, and pagination. Use this action when you need to fetch deal records from Zoho CRM, whether all deals or filtered by specific criteria. The action supports both discrete pagination (page/per_page) for the first 2,000 deals and token-based pagination for larger datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated deal IDs to fetch specific deals. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the deals. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 deals are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | No | Comma-separated API names of the deal fields to retrieve (max 50). At least one field must be specified (empty string not allowed). Common deal fields: Deal_Name, Amount, Stage, Closing_Date, Account_Name, Contact_Name, Owner, Lead_Source, Probability, Expected_Revenue, Next_Step, Type, Description. Invalid field names silently produce missing columns rather than explicit errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM deals. |
| `per_page` | integer | No | Number of deals per page (default 25, max is 200). Applies to both page and page_token pagination. |
| `converted` | string | No | Filter by conversion status: 'true', 'false', or 'both'. |
| `page_token` | string | No | Token-based pagination parameter to fetch deals beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for deals. |
| `territory_id` | string | No | Territory identifier to filter deals by territory. |
| `include_child` | boolean | No | Include child territory records (default: false). Only applicable when territory_id is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Events

**Slug:** `ZOHO_LIST_EVENTS`

Lists events (meetings) from Zoho CRM with pagination and filtering support. Use this action when you need to retrieve scheduled events, meetings, or appointments from Zoho CRM for calendar management, reporting, or synchronization purposes. Note: In Zoho CRM UI, Events are displayed as 'Meetings'. Discrete pagination (page/per_page) is limited to the first 2,000 records. To retrieve events beyond this limit, use token-based pagination via page_token from the previous response's info.next_page_token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated event record IDs to fetch specific events. This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the events. Cannot be used together with sort_by. This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 events are accessible. Maximum page number is floor(2000/per_page). Cannot be used together with page_token. |
| `fields` | string | Yes | Comma-separated API names of fields to retrieve (max 50). This parameter is required by the Zoho CRM API. Common Events fields: Event_Title, Start_DateTime, End_DateTime, Location, Venue, Description, Participants, Owner, Created_Time, Modified_Time, $event_cancelled. Note: Events module is also displayed as 'Meetings' in Zoho CRM UI. Field names are case-sensitive and must match exact API names. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM Events. |
| `per_page` | integer | No | Number of events per page (max 200). Default: 25. Applies to both page and page_token pagination. |
| `page_token` | string | No | Token-based pagination to fetch events beyond the 2,000-record limit. Use next_page_token from the previous response. Cannot be used with page parameter. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Leads

**Slug:** `ZOHO_LIST_LEADS`

Retrieves lead records from Zoho CRM's Leads module with pagination support. Use this action when you need to list, filter, or paginate through leads in the CRM. Supports both discrete pagination (up to 2,000 leads) and token-based pagination for larger datasets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated lead record IDs to fetch specific leads. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the leads. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 leads are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | No | Comma-separated API names of the fields to retrieve (max 50). At least one field must be specified (empty string not allowed). Common Lead fields: First_Name, Last_Name, Full_Name, Email, Phone, Mobile, Company, Lead_Status, Lead_Source, Industry, Annual_Revenue, Rating, Website, Skype_ID, Twitter, Fax, Street, City, State, Zip_Code, Country, Description, Created_Time, Modified_Time. Invalid field names silently produce missing columns rather than explicit errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM leads. |
| `per_page` | integer | No | Number of leads per page. Maximum is 200. Applies to both page and page_token pagination. |
| `converted` | string ("true" | "false" | "both") | No | Filter leads by conversion status. |
| `page_token` | string | No | Token-based pagination parameter to fetch leads beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for leads. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Modules

**Slug:** `ZOHO_LIST_MODULES`

Lists all available Zoho CRM modules (standard + custom) to reliably select module API names/IDs for operations. Use this tool before calling other module-specific operations to ensure correct module_api_name selection and avoid INVALID_MODULE errors. Particularly useful for discovering custom modules and their exact API names.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Notes

**Slug:** `ZOHO_LIST_NOTES`

Retrieves a list of notes from Zoho CRM across all modules. Notes are returned in chronological order (oldest first by default). Use this action when you need to view all notes in the CRM, regardless of which record they're attached to. Each note includes its title, content, creator, timestamps, and parent record reference.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve. Default is 1. |
| `fields` | string | Yes | Comma-separated API names of the fields to retrieve. This parameter is mandatory. Common fields: Note_Title, Note_Content, Owner, Created_Time, Modified_Time, Parent_Id. Example: 'Note_Title,Note_Content,Created_Time,Owner' |
| `per_page` | integer | No | Number of notes per page. Default is 25, maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Attachments for Zoho CRM Record

**Slug:** `ZOHO_LIST_RECORD_ATTACHMENTS`

Tool to list attachment metadata (id, File_Name, Size, Created_Time, etc.) for a specific Zoho CRM record. Use when you need to identify attachments before downloading them via other means. This returns metadata only, not the actual file content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). |
| `fields` | string | No | Comma-separated API names of attachment fields to retrieve. Common fields: id, File_Name, Size, Created_Time, Modified_Time, Owner, Parent_Id, Created_By, Modified_By, $editable, $file_id, $se_module. |
| `per_page` | integer | No | Number of attachments per page (default and maximum: 200). |
| `record_id` | string | Yes | The unique ID of the record to list attachments for. |
| `module_api_name` | string | Yes | The API name of the module containing the record. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', etc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zoho CRM Tasks

**Slug:** `ZOHO_LIST_TASKS`

Retrieves tasks from the Tasks module in Zoho CRM with support for filtering, pagination, and sorting. Use this action when you need to fetch a list of tasks, either all tasks or specific tasks by IDs. Supports both discrete pagination (up to 2,000 tasks) and token-based pagination for larger datasets. Notes: - Discrete (page/per_page) pagination is limited to the first 2,000 tasks. To retrieve tasks beyond this, use token-based pagination via page_token from the previous response's info.next_page_token. - Do not use page together with page_token. - You cannot use cvid together with sort_by.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated task IDs to fetch specific tasks. Note: This parameter is ignored when page_token is provided. |
| `cvid` | integer | No | Custom view ID to filter the tasks. Cannot be used together with sort_by. Note: This parameter is ignored when page_token is provided. |
| `page` | integer | No | Page number to retrieve. Without page_token, only the first 2,000 tasks are accessible using page/per_page. Maximum page number is floor(2000/per_page). Do not use together with page_token. |
| `fields` | string | No | Comma-separated API names of the fields to retrieve (max 50). At least one field must be specified (empty string not allowed). Common fields: Subject, Status, Priority, Due_Date, Owner, Description, Created_Time, Modified_Time, Reminder, Closed_Time, What_Id (related record). Invalid field names silently produce missing columns rather than explicit errors. |
| `sort_by` | string ("id" | "Created_Time" | "Modified_Time") | No | Valid fields for sorting Zoho CRM tasks. |
| `per_page` | integer | No | Number of tasks per page (default 25, max 200). Applies to both page and page_token pagination. |
| `page_token` | string | No | Token-based pagination parameter to fetch tasks beyond the 2,000-record discrete limit. Use the info.next_page_token from the previous response. Cannot be used together with page. |
| `sort_order` | string ("asc" | "desc") | No | Sort order for tasks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zoho CRM Accounts

**Slug:** `ZOHO_SEARCH_ACCOUNTS`

Search for Account records within Zoho CRM using server-side queries. Returns accounts matching the specified criteria, email, phone, or keyword. Use this action when you need to find specific account records by search parameters instead of listing all accounts. This avoids pagination limits and performs efficient server-side filtering on the Accounts module.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in the Accounts module. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in the Accounts module. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in the Accounts module. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Account fields: Account_Name, Website, Phone, Industry, Annual_Revenue, Number_of_Employees, Billing_Street, Billing_City, Billing_State, Billing_Country. |
| `criteria` | string | No | Search using field conditions in format (Field_API_Name:operator:value). Multiple conditions: ((Field1:op:val)and/or(Field2:op:val)). Operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' NOT supported—use 'equals' for substring matching or 'starts_with' for prefix. Datetime fields require timezone: yyyy-MM-ddTHH:mm:ss+HH:mm. Max 10 criteria. |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zoho CRM Calls

**Slug:** `ZOHO_SEARCH_CALLS`

Search for Call records in Zoho CRM using server-side queries. Returns calls matching the specified criteria, email, phone, or keyword. Use this action when you need to find specific Call records instead of retrieving all calls, as it avoids pagination limits and performs efficient server-side filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in Call records. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in Call records. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in Call records. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Call fields: Subject, Call_Type, Call_Duration, Call_Start_Time, Call_Purpose, Call_Result, Call_Agenda, Description, Who_Id, What_Id, Owner. Example: 'Subject,Call_Type,Call_Duration,Call_Start_Time,Owner'. |
| `criteria` | string | No | Advanced search using field conditions for Call records. Single condition format: (Field_API_Name:operator:value). Multiple conditions format: ((Field1:operator:value)and/or(Field2:operator:value)). Supported operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' operator is NOT supported by Zoho API and will cause INVALID_QUERY errors. For substring matching on text fields, use 'equals' (performs substring search). Common Call fields: Subject, Call_Type, Call_Duration, Call_Start_Time, Call_Purpose, Call_Result, Call_Agenda. Max 10 criteria. Example: ((Subject:equals:Follow Up)and(Call_Type:equals:Outbound)). For datetime fields (e.g., Call_Start_Time, Created_Time), values MUST include timezone offset in format yyyy-MM-ddTHH:mm:ss+HH:mm. Example: (Call_Start_Time:greater_than:2024-01-01T00:00:00+00:00). |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zoho CRM Contacts

**Slug:** `ZOHO_SEARCH_CONTACTS`

Search for contacts in Zoho CRM using server-side queries by criteria, email, phone, or keyword. This action performs efficient server-side filtering in the Contacts module, avoiding pagination limits. Use this action when you need to find specific contacts instead of listing all contacts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in Contacts module. Searches across name, email, phone, and other text fields. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in Contacts. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in Contacts. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Contact fields: First_Name, Last_Name, Email, Phone, Mobile, Account_Name, Mailing_Street, Mailing_City, Title, Department. Example: 'First_Name,Last_Name,Email,Phone,Account_Name'. |
| `criteria` | string | No | Search using field conditions. Format: (Field:operator:value) or ((Field1:op:val)and/or(Field2:op:val)). Operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' NOT supported. Use 'equals' for substring match or 'starts_with' for prefix. Max 10 criteria. Contact fields: First_Name, Last_Name, Email, Phone, Mobile, Account_Name, Mailing_Street, etc. Datetime fields MUST include timezone: yyyy-MM-ddTHH:mm:ss+HH:mm. |
| `per_page` | integer | No | Number of records per page. Default is 25, maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Deals in Zoho CRM

**Slug:** `ZOHO_SEARCH_DEALS`

Search for Deal records in Zoho CRM using server-side queries. Supports searching by criteria (field conditions), email, phone, or keyword. Use this action when you need to find specific deals instead of listing all deals, as it performs efficient server-side filtering and avoids pagination limits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in Deals module. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in Deals module. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in Deals module. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of Deal fields to return in the response. If not specified, all fields are returned. Common Deal fields: Deal_Name, Amount, Stage, Closing_Date, Account_Name, Contact_Name, Owner, Lead_Source, Pipeline, Probability, Description. Example: 'Deal_Name,Amount,Stage,Closing_Date,Account_Name'. |
| `criteria` | string | No | Advanced search using field conditions. Format: (Field:operator:value) or ((Field1:op:val)and/or(Field2:op:val)). Operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. NOTE: 'contains' NOT supported - use 'equals' for substring or 'starts_with' for prefix matching. Common fields: Deal_Name, Amount, Stage, Closing_Date, Account_Name. Datetime fields require timezone: yyyy-MM-ddTHH:mm:ss+HH:mm. Max 10 criteria. |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Events

**Slug:** `ZOHO_SEARCH_EVENTS`

Search for Events in Zoho CRM using server-side queries. Supports searching by field criteria, email, phone, or keyword. Use this action when you need to find specific events (meetings, appointments, calls) based on conditions like date range, title, location, or participants, rather than listing all events. This performs efficient server-side filtering and avoids pagination limits of the list endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in Events module. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in Events. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in Events. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Events fields: Event_Title, Start_DateTime, End_DateTime, Location, Description, Venue, Participants, $event_cancelled. Example: 'Event_Title,Start_DateTime,End_DateTime,Location'. |
| `criteria` | string | No | Advanced search using field conditions. Single condition format: (Field_API_Name:operator:value). Multiple conditions format: ((Field1:operator:value)and/or(Field2:operator:value)). Supported operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' operator is NOT supported by Zoho API and will cause INVALID_QUERY errors. For substring matching on text fields, use 'equals' (performs substring search). For prefix matching, use 'starts_with'. Max 10 criteria. Example: ((Event_Title:equals:Meeting)and(Start_DateTime:greater_than:2026-01-01T00:00:00+00:00)). Common Events fields: Event_Title, Start_DateTime, End_DateTime, Location, Description, Venue, Participants. For datetime fields, values MUST include timezone offset in format yyyy-MM-ddTHH:mm:ss+HH:mm. |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Leads

**Slug:** `ZOHO_SEARCH_LEADS`

Search for lead records in Zoho CRM using server-side queries. Use this action when you need to find specific leads by criteria (field conditions), email address, phone number, or keyword search instead of listing all leads. This performs efficient server-side filtering and avoids pagination limits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in the Leads module. Cannot be used together with criteria, email, or phone parameters. Exactly one of criteria, email, phone, or word must be provided. |
| `email` | string | No | Search for this email address across all email fields in the Leads module. Cannot be used together with criteria, phone, or word parameters. Exactly one of criteria, email, phone, or word must be provided. |
| `phone` | string | No | Search for this phone number across all phone fields in the Leads module. Cannot be used together with criteria, email, or word parameters. Exactly one of criteria, email, phone, or word must be provided. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Lead fields: First_Name, Last_Name, Email, Phone, Mobile, Company, Lead_Status, Lead_Source, Industry, Annual_Revenue, Rating, Website, Created_Time, Modified_Time. |
| `approved` | string ("true" | "false" | "both") | No | Filter for approved record status. |
| `criteria` | string | No | Field conditions in format (Field:operator:value) or ((Field1:op:val)and/or(Field2:op:val)). Operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' not supported - use 'equals' for substring match or 'starts_with' for prefix. Max 10 criteria. Common fields: First_Name, Last_Name, Email, Phone, Company, Lead_Status, Lead_Source. Datetime fields require timezone offset: yyyy-MM-ddTHH:mm:ss+HH:mm. Exactly one of criteria/email/phone/word required. |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |
| `converted` | string ("true" | "false" | "both") | No | Filter for converted lead status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Notes

**Slug:** `ZOHO_SEARCH_NOTES`

Search for notes in Zoho CRM using server-side queries. Allows searching notes by criteria (field conditions), keyword, email, or phone number. Use this action when you need to find specific notes based on title, content, creation date, parent record, or other note attributes, rather than listing all notes. This performs efficient server-side filtering and avoids pagination limits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple note fields including Note_Title and Note_Content. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields associated with the note's parent record. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields associated with the note's parent record. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common note fields: Note_Title, Note_Content, Created_Time, Modified_Time, Owner, Parent_Id, $attachments. Example: 'Note_Title,Note_Content,Created_Time'. |
| `criteria` | string | No | Advanced search using field conditions. Single condition format: (Field_API_Name:operator:value). Multiple conditions format: ((Field1:operator:value)and/or(Field2:operator:value)). Supported operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' operator is NOT supported by Zoho API and will cause INVALID_QUERY errors. For substring matching on text fields, use 'equals' (performs substring search, e.g., 'equals:meeting' matches 'Meeting notes'). For prefix matching, use 'starts_with'. Common Note fields: Note_Title, Note_Content, Created_Time, Modified_Time, Parent_Id. Max 10 criteria. Example: ((Note_Title:equals:Meeting)and(Created_Time:greater_than:2026-01-01T00:00:00+00:00)). For datetime fields (e.g., Created_Time, Modified_Time), values MUST include timezone offset in format yyyy-MM-ddTHH:mm:ss+HH:mm. |
| `per_page` | integer | No | Number of records per page. Maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zoho CRM Tasks

**Slug:** `ZOHO_SEARCH_TASKS`

Search for tasks in Zoho CRM using flexible criteria including subject, status, priority, or due date. Use this action when you need to find specific task records by criteria, email, phone, or keyword instead of listing all tasks. This avoids pagination limits and performs efficient server-side filtering on the Tasks module.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in the Tasks module. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in Tasks. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in Tasks. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Common Task fields: Subject, Status, Priority, Due_Date, Closed_Time, Created_Time, Modified_Time, Owner, What_Id, Who_Id, Description. Example: 'Subject,Status,Priority,Due_Date'. |
| `criteria` | string | No | Search criteria using format: (Field_API_Name:operator:value). Multiple conditions: ((Field1:op:val)and/or(Field2:op:val)). Operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' NOT supported - use 'equals' for substring match or 'starts_with' for prefix. Max 10 criteria. Valid fields: Subject, Status, Priority, Due_Date, Closed_Time, Created_Time, Modified_Time. Datetime fields MUST include timezone: yyyy-MM-ddTHH:mm:ss+HH:mm (e.g., 2024-01-01T00:00:00+00:00). For full-text search, use 'word' parameter instead. |
| `per_page` | integer | No | Number of records per page. Default is 25, maximum is 200. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Zoho CRM Records

**Slug:** `ZOHO_SEARCH_ZOHO_RECORDS`

Search for records within a Zoho CRM module using server-side queries. Use when you need to find specific records by criteria, email, phone, or keyword instead of listing all records. This avoids pagination limits and performs efficient server-side filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (default: 1). Maximum 2,000 records are accessible via search API. Maximum page number is floor(2000/per_page). |
| `word` | string | No | Global search keyword across multiple fields in the module. Cannot be used together with criteria, email, or phone parameters. |
| `email` | string | No | Search for this email address across all email fields in the module. Cannot be used together with criteria, phone, or word parameters. |
| `phone` | string | No | Search for this phone number across all phone fields in the module. Cannot be used together with criteria, email, or word parameters. |
| `fields` | string | No | Comma-separated API names of fields to return in the response. If not specified, all fields are returned. Example: 'First_Name,Last_Name,Email,Phone'. |
| `criteria` | string | No | Advanced search using field conditions. Single condition format: (Field_API_Name:operator:value). Multiple conditions format: ((Field1:operator:value)and/or(Field2:operator:value)). Supported operators: equals, starts_with, in, not_equal, greater_equal, greater_than, less_equal, less_than, between. CRITICAL: 'contains' operator is NOT supported by Zoho API and will cause INVALID_QUERY errors. For substring matching on text fields, use 'equals' (performs substring search, e.g., 'equals:Smith' matches 'John Smith'). For prefix matching, use 'starts_with'. For exact matching on picklists, use 'equals'. For full-text search across multiple fields, use the 'word' parameter instead of criteria. Max 10 criteria. Example: ((Last_Name:equals:Smith)and(Email:starts_with:john)). Field names must be valid API names for the module. For datetime fields (e.g., Created_Time, Modified_Time), values MUST include timezone offset in format yyyy-MM-ddTHH:mm:ss+HH:mm. Example: (Created_Time:greater_than:2026-01-01T00:00:00+00:00). |
| `per_page` | integer | No | Number of records per page. Default and maximum is 200. |
| `module_api_name` | string | Yes | The API name of the module to search in. Standard modules use PascalCase (e.g., 'Leads', 'Contacts', 'Accounts', 'Deals'). Custom modules must use their exact API name as configured in Zoho CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Account

**Slug:** `ZOHO_UPDATE_ACCOUNT`

Updates an existing Account record in Zoho CRM with the specified field values. Only the fields provided in the request will be updated; other fields remain unchanged. Use this action when you need to modify specific details of an existing account, such as contact information, address, ownership, or business details. All field updates use API field names (not display labels), and lookup fields require properly formatted dictionaries with 'id' keys.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Fax` | string | No | Fax number for the account |
| `Owner` | object | No | Owner lookup field, formatted as {'id': 'zoho_user_id'}. Use the Zoho user ID, not email or display name |
| `Phone` | string | No | Primary phone number for the account |
| `Rating` | string | No | Rating of the account (e.g., 'Active', 'Market Failed', 'Project Cancelled', 'Shutdown') |
| `Website` | string | No | Company website URL |
| `Industry` | string | No | Industry sector of the account (e.g., 'ASP', 'Data/Telecom OEM', 'ERP', 'Government/Military', 'Large Enterprise', 'ManagementISV', 'MSP', 'Network Equipment', 'Non-profit', 'Small Business', 'Storage', 'Other') |
| `SIC_Code` | string | No | Standard Industrial Classification Code |
| `Employees` | integer | No | Number of employees at the company |
| `Ownership` | string | No | Ownership type (e.g., 'Public', 'Private', 'Subsidiary', 'Other') |
| `record_id` | string | Yes | Unique identifier of the Account record to update |
| `Description` | string | No | Additional notes or description about the account |
| `Account_Name` | string | No | Name of the account/company |
| `Account_Site` | string | No | Account site or location identifier |
| `Account_Type` | string | No | Type/category of the account (e.g., 'Analyst', 'Competitor', 'Customer', 'Integrator', 'Investor', 'Partner', 'Press', 'Prospect', 'Reseller', 'Other') |
| `Billing_City` | string | No | City for billing address |
| `Billing_Code` | string | No | Postal/ZIP code for billing address |
| `Billing_State` | string | No | State/province for billing address |
| `Shipping_City` | string | No | City for shipping address |
| `Shipping_Code` | string | No | Postal/ZIP code for shipping address |
| `Ticker_Symbol` | string | No | Stock ticker symbol (if publicly traded) |
| `Account_Number` | integer | No | Account number or identifier (numeric value) |
| `Annual_Revenue` | number | No | Annual revenue of the company |
| `Billing_Street` | string | No | Street address for billing |
| `Parent_Account` | object | No | Parent account lookup field, formatted as {'id': 'parent_account_id'} |
| `Shipping_State` | string | No | State/province for shipping address |
| `Billing_Country` | string | No | Country for billing address |
| `Shipping_Street` | string | No | Street address for shipping |
| `Shipping_Country` | string | No | Country for shipping address |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Call

**Slug:** `ZOHO_UPDATE_CALL`

Updates existing call records in the Calls module in Zoho CRM. Supports updating up to 100 call records per API call. Use this action when you need to modify call details such as call duration, call type, subject, or related contacts/leads. Use field API names (not display names) for all field updates. The 'id' field is mandatory for each call record. Note: For Inbound or Outbound calls, the Call_Duration must be non-zero or the API will return a DEPENDENT_MISMATCH error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of dictionaries representing the call records to be updated. Each record MUST include the 'id' field with the call record ID to update. Update up to 100 records per API call. Use field API names as keys (not display names). Common call fields: Subject, Call_Type (Inbound/Outbound/Missed), Call_Start_Time, Call_Duration, Call_Purpose, Call_Agenda, Description, Who_Id (Contact), What_Id (Lead/Account/Deal), Owner. IMPORTANT: For Inbound or Outbound calls, Call_Duration MUST be non-zero. Zero duration triggers DEPENDENT_MISMATCH error. For lookup fields (What_Id, Who_Id), use format: {'id': 'record_id', 'module': {'api_name': 'ModuleName'}}. For owner assignment, use {'id': '<zoho_user_id>'}; using email or display name will fail. Example: [{'id': '123456789', 'Subject': 'Follow-up call', 'Call_Duration': 600, 'Call_Type': 'Outbound'}] |
| `trigger` | array | No | List of automation triggers to execute during update. Valid values: ['workflow', 'approval', 'blueprint', 'pathfinder', 'orchestration']. Pass empty array [] to skip all automation. If not specified, default triggers execute. Example: ['workflow', 'blueprint'] |
| `skip_feature_execution` | array | No | Features to skip during the update. Example: [{'name': 'cadences'}] to skip cadence execution |
| `apply_feature_execution` | array | No | Features to execute during the update. Example: [{'name': 'layout_rules'}] or [{'name': 'criteria_validation_rule'}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Deal

**Slug:** `ZOHO_UPDATE_DEAL`

Updates an existing deal in Zoho CRM. Use this action when you need to modify specific fields of a deal record, such as updating the deal amount, stage, closing date, or associated account. Only the fields included in the data parameter will be modified; other fields remain unchanged. Use when you have a specific deal ID and want to update one or more fields without affecting others.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | Object containing the deal fields to update. Use field API names as keys (not display names). Common fields include: 'Deal_Name', 'Amount', 'Stage', 'Closing_Date', 'Account_Name' (as lookup: {'id': 'account_id'}), 'Contact_Name' (as lookup: {'id': 'contact_id'}), 'Owner' (as lookup: {'id': 'user_id'}). Only include fields you intend to modify — unintended fields will overwrite existing data. For lookup fields, use format: {'id': 'record_id'} or {'id': 'record_id', 'name': 'Display Name'}. Read-only or layout-restricted fields cause INVALID_DATA errors. This model accepts any additional Zoho CRM deal fields via the extra='allow' configuration. |
| `deal_id` | string | Yes | The unique identifier of the deal to update. This is the Zoho CRM record ID. |
| `trigger` | array | No | List of automation triggers to execute during update. Valid values: ['workflow', 'approval', 'blueprint', 'pathfinder', 'orchestration']. Pass empty array [] to skip all automation. If not specified, default triggers execute. Example: ['workflow', 'blueprint'] |
| `skip_feature_execution` | array | No | Features to skip during the update. Example: [{'name': 'cadences'}] to skip cadence execution |
| `apply_feature_execution` | array | No | Features to execute during the update. Example: [{'name': 'layout_rules'}] or [{'name': 'criteria_validation_rule'}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Email Draft

**Slug:** `ZOHO_UPDATE_EMAIL_DRAFT`

Updates an existing email draft associated with a record in Zoho CRM. Requires the draft ID, sender address, and text format. Use this action when you need to modify the recipients, subject, content, scheduling, or attachments of an existing email draft before sending. Supports updating up to 100 email drafts per API call. Schedule times must be in the future.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cc` | array | No | Array of CC recipient objects |
| `id` | string | Yes | Unique identifier of the email draft to update |
| `to` | array | No | Array of recipient objects with user_name and email |
| `bcc` | array | No | Array of BCC recipient objects |
| `from` | string | Yes | Sender's email address |
| `content` | string | No | Email body content (plain text or HTML based on rich_text setting) |
| `subject` | string | No | Email subject line |
| `reply_to` | string | No | Reply-to email address for recipient responses |
| `record_id` | string | Yes | Unique identifier of the record to which the email draft is associated |
| `rich_text` | boolean | Yes | Indicates email format: true for rich text (HTML), false for plain text |
| `attachments` | array | No | Array of attachment objects with id and file_name |
| `module_api_name` | string | Yes | The API name of the module containing the record to which the email draft is associated. Valid modules: Leads, Contacts, Deals, Accounts, Sales_Orders, Purchase_Orders, Invoices, Quotes, Cases, or Custom modules. Must use exact API name (PascalCase for standard modules). |
| `schedule_details` | object | No | Scheduling information for the email draft. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Event

**Slug:** `ZOHO_UPDATE_EVENT`

Updates existing events in Zoho CRM. Supports updating up to 100 events per API call. Use this action when you need to modify event details such as title, start/end times, location, participants, or related records (What_Id/Who_Id). The 'id' field is mandatory for each event, and only specified fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of dictionaries representing the events to be updated. Each event MUST include the 'id' field with the event ID to update. Update up to 100 events per API call. Common event fields: Event_Title (string, title/subject of the event), Start_DateTime (ISO 8601 datetime, event start date and time), End_DateTime (ISO 8601 datetime, event end date and time), Description (string, event description), Location (string, event location), Participants (array of participant objects, max 50 participants), Remind_At (ISO 8601 datetime, reminder time), All_day (boolean, whether event is all-day), Check_In_Status (string, check-in status), What_Id (dict with 'id' and optional 'module' for related business object like Accounts, Deals), Who_Id (dict with 'id' for related person like Contacts, Leads). Only include fields you intend to modify — unintended fields will overwrite existing data. Read-only or layout-restricted fields cause INVALID_DATA errors. |
| `trigger` | array | No | List of automation triggers to execute during update. Valid values: ['workflow', 'approval', 'blueprint', 'pathfinder', 'orchestration']. Pass empty array [] to skip all automation. If not specified, default triggers execute. Example: ['workflow', 'blueprint'] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Lead

**Slug:** `ZOHO_UPDATE_LEAD`

Updates existing lead records in Zoho CRM. Supports updating up to 100 leads per API call. Use this action when you need to modify lead information such as contact details, lead status, lead source, or other lead-specific fields. Use field API names (not display names) for all field updates. The 'id' field is mandatory for each lead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of lead records to be updated. Each lead MUST include the 'id' field with the lead record ID to update. Update up to 100 leads per API call. Use field API names as keys (not display names). Common updatable fields: Last_Name, First_Name, Email, Phone, Mobile, Company, Lead_Source, Lead_Status, Industry, Rating, Street, City, State, Country, Zip_Code. For owner assignment, use the 'Owner' field with value {'id': '<zoho_user_id>'}; using email or display name will fail. Only include fields you intend to modify — unintended fields will overwrite existing data. Read-only or layout-restricted fields cause INVALID_DATA errors. The model supports custom fields via 'extra=allow' configuration. |
| `lar_id` | string | No | Assignment rule ID to trigger during lead update. Use the Get Assignment Rules API to obtain the lar_id. |
| `trigger` | array | No | List of automation triggers to execute during update. Valid values: ['workflow', 'approval', 'blueprint', 'pathfinder', 'orchestration']. Pass empty array [] to skip all automation. If not specified, default triggers execute. Example: ['workflow', 'blueprint'] |
| `skip_feature_execution` | array | No | Features to skip during the update. Example: [{'name': 'cadences'}] to skip cadence execution |
| `apply_feature_execution` | array | No | Features to execute during the update. Example: [{'name': 'layout_rules'}] or [{'name': 'criteria_validation_rule'}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Note

**Slug:** `ZOHO_UPDATE_NOTE`

Updates an existing note in Zoho CRM. Only the Note_Title and Note_Content fields can be modified. Read-only fields (Owner, Modified_Time, Created_Time, Modified_By, Created_By) cannot be updated and will be ignored if provided. Use this action when you need to modify the title or content of an existing note attached to any CRM record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the note to update |
| `Note_Title` | string | No | Updated title of the note. If not provided, the existing title remains unchanged. |
| `Note_Content` | string | No | Updated content/body of the note. If not provided, the existing content remains unchanged. |
| `is_shared_to_client` | boolean | No | Controls portal user visibility. Set to true to share note with portal users, false to keep private. If not provided, the existing setting remains unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Related Records in Zoho CRM

**Slug:** `ZOHO_UPDATE_RELATED_RECORDS`

Associates or updates relationships between records across different modules in Zoho CRM. This action creates or modifies relationships between a parent record and related records. Common use cases: - Associate Leads/Contacts with Campaigns (with member status) - Link Products to Deals/Quotes/Accounts - Connect Contacts to Accounts - Associate Services with Appointments Use ZOHO_GET_RELATED_LISTS to discover valid related_list_api_name values for your module. Maximum 100 related records can be updated per API call. If module_api_name, record_id, related_list_api_name, or child record IDs in data do not match Zoho CRM's related-list configuration exactly, associations may silently succeed (no error returned) but the relationship will not be created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of related records to associate with the parent record. Each dictionary must include: 1) 'id' (string, mandatory): The unique ID of the related record to associate. 2) Optional fields to update (e.g., 'Member_Status' for campaign members). Maximum 100 related records per API call. Example: [{'id': '5725767000000327001', 'Member_Status': 'Active'}] |
| `record_id` | string | Yes | The unique identifier (ID) of the parent record to which related records will be associated. This is the numeric ID from Zoho CRM (e.g., '5725767000000649013'). |
| `module_api_name` | string | Yes | The API name of the parent module where the record resides. Common modules: 'Leads', 'Contacts', 'Accounts', 'Deals', 'Products', 'Quotes'. Use the exact module API name (PascalCase, e.g., 'Contacts' not 'contacts'). |
| `related_list_api_name` | string | Yes | The API name of the related list/module to update relationships with. Common examples: 'Campaigns' (for Lead-Campaign relations), 'Products' (for Deal-Product relations), 'Contacts' (for Account-Contact relations). Use ZOHO_GET_RELATED_LISTS action to discover valid related list API names for a specific module. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zoho CRM Record

**Slug:** `ZOHO_UPDATE_ZOHO_RECORD`

Updates existing records in a specified module in Zoho CRM. Supports updating up to 100 records per API call. Use field API names (not display names) for all field updates. The 'id' field is mandatory for each record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | A list of dictionaries representing the records to be updated. Each record MUST include the 'id' field with the record ID to update. Update up to 100 records per API call. Use field API names as keys (not display names). For multi-module lookup fields (What_Id, Who_Id), use format: {'field_name': {'id': 'record_id', 'module': {'api_name': 'ModuleName'}}}. Example: [{'id': '123456789', 'Last_Name': 'Smith', 'What_Id': {'id': '987654321', 'module': {'api_name': 'Accounts'}}}] For owner assignment, use the owner field API name (e.g., 'Owner') with value {'id': '<zoho_user_id>'}; using email or display name will fail. Only include fields you intend to modify — unintended fields will overwrite existing data. Read-only or layout-restricted fields cause INVALID_DATA errors. |
| `lar_id` | string | No | Assignment rule ID to trigger during record update (for applicable modules like Leads). Use the Get Assignment Rules API to obtain the lar_id. |
| `trigger` | array | No | List of automation triggers to execute during update. Valid values: ['workflow', 'approval', 'blueprint', 'pathfinder', 'orchestration']. Pass empty array [] to skip all automation. If not specified, default triggers execute. Example: ['workflow', 'blueprint'] |
| `module_api_name` | string | Yes | The API name of the module to update records in. Standard modules use PascalCase (e.g., 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks', 'Campaigns'). Custom modules must use their exact API name as configured in Zoho CRM. |
| `skip_feature_execution` | array | No | Features to skip during the update. Example: [{'name': 'cadences'}] to skip cadence execution |
| `apply_feature_execution` | array | No | Features to execute during the update. Example: [{'name': 'layout_rules'}] or [{'name': 'criteria_validation_rule'}] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Attachment to Zoho CRM Record

**Slug:** `ZOHO_UPLOAD_ATTACHMENT`

Tool to upload a file as an Attachment to a specific Zoho CRM record. Use when you need to store files (PDFs, documents, images) in a record's Attachments section.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | No | File to upload as an attachment. |
| `title` | string | No | Deprecated. This field is ignored because remote URL attachments are not supported. |
| `record_id` | string | Yes | The unique ID of the record to attach the file or URL to. |
| `attachmentUrl` | string | No | Deprecated. Remote URL attachments are not supported because Zoho fetches the URL server-side. |
| `module_api_name` | string | Yes | The API name of the module containing the record. Examples: 'Leads', 'Contacts', 'Accounts', 'Deals', etc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate Zoho CRM Credentials

**Slug:** `ZOHO_VALIDATE_CREDENTIAL`

Validates Zoho CRM credentials by retrieving current user information. Returns user details if credentials are valid. Use this action when you need to verify that API credentials are working correctly before performing other operations. This is a read-only operation that confirms authentication without modifying any data.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
