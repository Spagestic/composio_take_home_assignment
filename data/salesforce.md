# Salesforce

Salesforce is a leading CRM platform integrating sales, service, marketing, and analytics to build customer relationships and drive business growth

- **Category:** crm
- **Auth:** OAUTH2, S2S_OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 224
- **Triggers:** 7
- **Slug:** `SALESFORCE`
- **Version:** 20260915_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Salesforce?

For a step-by-step guide on creating and configuring your own Salesforce OAuth credentials with Composio, see [How to create OAuth credentials for Salesforce](https://composio.dev/auth/salesforce).

### `URL_NOT_RESET` usually means Salesforce subdomain was not configured and defaulted to `login`

`URL_NOT_RESET` can happen when the Salesforce org requires a specific My Domain value but the connection is using the generic `login` default or an incomplete subdomain. The default `login` value is fine for most Salesforce flows, but for org-specific failures recheck the Salesforce domain/subdomain values on the connection, pass the correct My Domain subdomain, and retry on the latest toolkit version if the issue was seen on an older pinned version.

### Why do I see `OAUTH_APPROVAL_ERROR_GENERIC` or `app must be installed into org` in Salesforce OAuth?

These errors usually mean Salesforce is blocking OAuth because the connected app has not been installed or approved for the org. The user may see `OAUTH_APPROVAL_ERROR_GENERIC`, or the callback URL may include `error=invalid_client&error_description=app+must+be+installed+into+org`.

Ask a Salesforce org admin to approve or install the connected app. In Salesforce Setup, search for **External Client App Settings** or **OAuth Connected App Usage**, find the app, and use the install/approval action shown by Salesforce. After the admin approves the app, the user should retry the OAuth connection.

![Salesforce OAuth approval error showing OAUTH_APPROVAL_ERROR_GENERIC and app must be installed into org.](/images/kb/toolkits/salesforce/salesforce-oauth-approval-error.png)

![Salesforce Setup search showing External Client App Settings for connected app approval.](/images/kb/toolkits/salesforce/salesforce-external-client-app-settings.png)

### Salesforce allows only five active refresh tokens per user per app

Salesforce allows only five active refresh tokens per user per connected app. When the same Salesforce user connects a sixth time, Salesforce can revoke the oldest refresh token, which makes older Composio connected accounts fail with token errors. Also check whether the user changed their password, revoked the app, changed connected app refresh-token policy away from `valid until revoked`, or has org-level session policies that invalidate tokens.

### How do I query relationships like Pricebooks and Opportunities?

Use SOQL subqueries to traverse relationships. For example, Products → Pricebooks → Opportunities:

```sql
SELECT Id, Name,
  (SELECT Id, Quantity, UnitPrice, TotalPrice, PricebookEntry.Product2.Name FROM OpportunityLineItems)
FROM Opportunity
```

### What fields are required when connecting Salesforce?

You need your subdomain (e.g., `your-company.my`) and instance endpoint `/services/data/v61.0`. If you see `URL_NOT_RESET`, replace the `login` subdomain with your organization's subdomain.

### What happens to deprecated Salesforce tools?

Deprecated tools continue to work until removed. Check tool descriptions for "DEPRECATED:" markers.

### Why can't I find items I created in Salesforce?

Created records may not appear in a given Salesforce view. Use search to confirm they exist.

## Tools

### Create Salesforce Account

**Slug:** `SALESFORCE_ACCOUNT_CREATION_WITH_CONTENT_TYPE_OPTION`

DEPRECATED: Creates a new Salesforce Account using a JSON POST request, requiring 'Name'; specific fields (e.g., custom, DunsNumber) may have org-level prerequisites.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | No | Unique identifier for the account (system-generated and read-only upon creation). |
| `Fax` | string | No | Fax number for the account. |
| `Sic` | string | No | Standard Industrial Classification (SIC) code (max 20 chars). For business accounts only. |
| `Name` | string | Yes | Name of the account (required, max 255 chars). For Person Accounts, this is a concatenated field from the associated contact and not directly modifiable. |
| `Site` | string | No | Name of the account’s specific location or site (max 80 chars). |
| `Type` | string | No | Type of account, influencing categorization and behavior. |
| `Phone` | string | No | Primary phone number for the account (max 40 chars). |
| `Jigsaw` | string | No | Data.com company ID reference (max 20 chars, API v22.0+). For business accounts. Read-only, do not modify. |
| `Rating` | string | No | Prospect rating (picklist). |
| `SLA__c` | string | No | Custom field for Service Level Agreement (SLA) type/details. |
| `OwnerId` | string | No | ID of the Salesforce user owning this account. 'Transfer Record' permission may be needed to update if not the API user (API v16.0+). |
| `SicDesc` | string | No | Description of line of business based on SIC code (max 80 chars). For business accounts only. |
| `Website` | string | No | Website URL of the account (max 255 chars). |
| `Industry` | string | No | Primary industry of the account (picklist, max 40 chars). |
| `ParentId` | string | No | ID of the parent account for subsidiary or hierarchical relationships. |
| `PhotoUrl` | string | No | URL path for the social network profile image (read-only). Blank if Social Accounts and Contacts is not enabled for the user. |
| `Active__c` | string | No | Custom field indicating if the account is active. |
| `IsDeleted` | boolean | No | Indicates if the account is in the Recycle Bin (read-only). |
| `NaicsCode` | string | No | NAICS code (6-digit industry classifier, max 8 chars). For business accounts. Requires Data.com Prospector/Clean. |
| `NaicsDesc` | string | No | Description of line of business based on NAICS code (max 120 chars). For business accounts. Requires Data.com Prospector/Clean. |
| `Ownership` | string | No | Ownership structure (picklist). |
| `DunsNumber` | string | No | D-U-N-S number (9-digit identifier, max 9 chars). For business accounts. Requires Data.com Prospector/Clean. |
| `Tradestyle` | string | No | Organization's 'Doing Business As' (DBA) name (max 255 chars). For business accounts. Requires Data.com Prospector/Clean. |
| `BillingCity` | string | No | City for the billing address (max 40 chars). |
| `CleanStatus` | string | No | Data quality status compared with Data.com. |
| `CreatedById` | string | No | ID of the user who created the account (read-only). |
| `CreatedDate` | string | No | Date and time of account creation (read-only). |
| `Description` | string | No | Text description of the account (max 32,000 chars). |
| `YearStarted` | string | No | Year the organization was established (max 4 chars). For business accounts. Requires Data.com Prospector/Clean. |
| `BillingState` | string | No | State or province for the billing address (max 80 chars). |
| `ShippingCity` | string | No | City for the shipping address (max 40 chars). |
| `TickerSymbol` | string | No | Stock market ticker symbol (max 20 chars). For business accounts only. |
| `AccountNumber` | string | No | Account number assigned to this account (max 40 chars). |
| `AccountSource` | string | No | Origin source of the account record (admin-defined picklist, values max 40 chars). |
| `AnnualRevenue` | integer | No | Estimated annual revenue. |
| `BillingStreet` | string | No | Street address for the billing location. |
| `ShippingState` | string | No | State or province for the shipping address (max 80 chars). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `BillingCountry` | string | No | Country for the billing address (max 80 chars). |
| `DandbCompanyId` | string | No | Associated Dun & Bradstreet company ID for D&B integration (read-only). |
| `LastViewedDate` | string | No | Timestamp of when current user last viewed this account record (read-only). |
| `MasterRecordId` | string | No | ID of the master record if this account was merged (read-only). |
| `ShippingStreet` | string | No | Street address for the shipping location (max 255 chars). |
| `SystemModstamp` | string | No | Timestamp of last modification by user or automated process (read-only). |
| `BillingLatitude` | integer | No | Latitude for the billing address (-90 to 90, up to 15 decimal places). |
| `JigsawCompanyId` | string | No | Associated Data.com company ID (read-only). |
| `ShippingCountry` | string | No | Country for the shipping address (max 80 chars). |
| `attributes__url` | string | No | Internal Salesforce field: Relative API URL for this SObject record. System-set or read-only. |
| `BillingLongitude` | integer | No | Longitude for the billing address (-180 to 180, up to 15 decimal places). |
| `LastActivityDate` | string | No | Most recent due date of an event or closed task associated with the record (read-only). |
| `LastModifiedById` | string | No | ID of the user who last modified the account (read-only). |
| `LastModifiedDate` | string | No | Date and time of last modification (read-only). |
| `OperatingHoursId` | string | No | ID of associated operating hours. Requires Salesforce Field Service. |
| `ShippingLatitude` | integer | No | Latitude for the shipping address (-90 to 90, up to 15 decimal places). |
| `attributes__type` | string | No | Internal Salesforce field: Type of the SObject (e.g., 'Account'). System-set or read-only. |
| `BillingPostalCode` | string | No | Postal code for the billing address (max 20 chars). |
| `NumberOfEmployees` | integer | No | Number of employees (max 8 digits). |
| `ShippingLongitude` | integer | No | Longitude for the shipping address (-180 to 180, up to 15 decimal places). |
| `LastReferencedDate` | string | No | Timestamp of when current user last accessed this record or related items (read-only). |
| `SLASerialNumber__c` | string | No | Custom field for SLA serial number. |
| `ShippingPostalCode` | string | No | Postal code for the shipping address (max 20 chars). |
| `CustomerPriority__c` | string | No | Custom field for customer priority (e.g., High, Medium, Low). |
| `NumberofLocations__c` | integer | No | Custom field for the number of physical locations. |
| `SLAExpirationDate__c` | string | No | Custom field for SLA expiration date. |
| `UpsellOpportunity__c` | string | No | Custom field indicating upsell opportunity potential. |
| `BillingGeocodeAccuracy` | string | No | Accuracy level of the geocode for the billing address. |
| `ShippingGeocodeAccuracy` | string | No | Accuracy level of the geocode for the shipping address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add contact to campaign

**Slug:** `SALESFORCE_ADD_CONTACT_TO_CAMPAIGN`

Adds a contact to a campaign by creating a CampaignMember record to track campaign engagement. Fails if the contact is already a member of the campaign; pre-check membership via SOQL before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | The status of the campaign member. Common values include 'Sent', 'Responded'. The available statuses depend on campaign configuration. Value must exactly match a configured CampaignMember Status for the campaign; arbitrary strings will fail. Query the campaign's CampaignMemberStatus records first if unsure of valid values. |
| `contact_id` | string | Yes | The Salesforce ID of the contact to add to the campaign. |
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to add the contact to. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values for CampaignMember. Custom field names typically end with '__c'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add lead to campaign

**Slug:** `SALESFORCE_ADD_LEAD_TO_CAMPAIGN`

Adds a lead to a campaign by creating a CampaignMember record, allowing you to track campaign engagement. Both `campaign_id` and `lead_id` must be valid Salesforce IDs of active, existing records — names or emails cannot be substituted, and deleted or inactive records will cause the call to fail. This is a persistent CRM write; confirm the correct lead and campaign before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | The status of the campaign member. Common values include 'Sent', 'Responded'. The available statuses depend on campaign configuration. Value must exactly match one of the campaign's configured CampaignMember statuses; a mismatch will cause the call to be rejected. |
| `lead_id` | string | Yes | The Salesforce ID of the lead to add to the campaign. |
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to add the lead to. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values for CampaignMember. Custom field names typically end with '__c'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add product to opportunity

**Slug:** `SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM`

Adds a product (line item) to an opportunity. The product must exist in a pricebook entry that's associated with the opportunity's pricebook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `discount` | number | No | Discount percentage (0-100). Cannot be used with TotalPrice. |
| `quantity` | number | Yes | The quantity of the product to add. |
| `unit_price` | number | No | The sales price per unit. Provide either unit_price or total_price — Salesforce does NOT auto-fill the price from the pricebook entry on insert, and omitting both fails with FIELD_INTEGRITY_EXCEPTION. |
| `description` | string | No | Optional description for this line item. |
| `total_price` | number | No | The total price for this line item. Cannot be used with UnitPrice or Discount. |
| `service_date` | string | No | Service date for the product in YYYY-MM-DD format. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `opportunity_id` | string | Yes | The Salesforce ID of the opportunity to add a product to. |
| `pricebook_entry_id` | string | Yes | The ID of the PricebookEntry that contains the product and price information. This links to a specific product in a specific pricebook. Entry must be active and match the opportunity's pricebook and currency; mismatches cause REQUIRED_FIELD_MISSING or INVALID_CROSS_REFERENCE_KEY errors. Use SALESFORCE_LIST_PRICEBOOK_ENTRIES to find valid entries. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Apply lead assignment rules

**Slug:** `SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES`

Applies configured lead assignment rules to a specific lead, automatically routing it to the appropriate owner based on your organization's rules. Allow a brief propagation delay before querying updated ownership or field values after rule application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lead_id` | string | Yes | The Salesforce ID of the lead to apply assignment rules to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Associate contact to account

**Slug:** `SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT`

Associates a contact with an account by updating the contact's AccountId field. Overwrites any existing AccountId on the contact. For broader contact field updates alongside the account association, use SALESFORCE_UPDATE_CONTACT instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The Salesforce ID of the account to associate the contact with. |
| `contact_id` | string | Yes | The Salesforce ID of the contact to associate with an account. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values to update on the contact. Custom field names typically end with '__c'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Clone opportunity with products

**Slug:** `SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS`

Clones an opportunity and optionally its products (line items). Creates a new opportunity with the same field values and products as the original.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_name` | string | No | Name for the cloned opportunity. If not specified, will append 'Clone of' to original name. |
| `close_date` | string | No | Close date for the cloned opportunity in YYYY-MM-DD format. If not specified, uses original close date. |
| `stage_name` | string | No | Stage for the cloned opportunity. If not specified, uses original stage. |
| `clone_products` | boolean | No | Whether to clone the opportunity's products (line items). Set to false to clone only the opportunity. |
| `opportunity_id` | string | Yes | The ID of the opportunity to clone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Clone record

**Slug:** `SALESFORCE_CLONE_RECORD`

Creates a copy of an existing Salesforce record by reading its data, removing system fields, and creating a new record. Optionally apply field updates to the clone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The ID of the record to clone. |
| `object_type` | string | Yes | The Salesforce object type to clone (e.g., Account, Contact, Lead, Opportunity). |
| `field_updates` | string | No | Optional field updates to apply to the cloned record as a JSON string. Use this to modify specific fields in the clone. Example: '{"Name": "Clone of Original", "Status": "New"}' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Close or abort a job

**Slug:** `SALESFORCE_CLOSE_OR_ABORT_JOB`

Tool to close or abort a Salesforce Bulk API v2 ingest job. Use when you need to finalize job processing by closing (state: UploadComplete) or cancel a job by aborting (state: Aborted). This is required for every ingest job - closing queues data for processing, while aborting cancels the job and deletes uploaded data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string ("UploadComplete" | "Aborted") | Yes | The state to update the job to. 'UploadComplete' closes the job and queues uploaded data for processing. 'Aborted' cancels the job and deletes any uploaded data. This field is required. |
| `job_id` | string | Yes | The unique identifier of the Bulk API v2 ingest job to close or abort. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Complete task

**Slug:** `SALESFORCE_COMPLETE_TASK`

Marks a task as completed with optional completion notes. This is a convenience action that updates the task status to 'Completed'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The Salesforce ID of the task to mark as completed. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Completion_Source__c'). |
| `completion_notes` | string | No | Optional notes to add about the task completion. Will be appended to existing description. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute Composite Graph (Deprecated)

**Slug:** `SALESFORCE_COMPOSITE_GRAPH_ACTION`

DEPRECATED: Use SALESFORCE_POST_COMPOSITE_GRAPH instead. Tool to execute multiple Salesforce REST API requests in a single call using composite graphs. Use when you need to perform a series of related operations that should either all succeed or all fail together. Composite graphs support up to 500 subrequests per graph (compared to 25 for regular composite requests) and allow referencing outputs from previous subrequests using @{referenceId.fieldName} syntax.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `graphs` | array | Yes | Array of graph objects to execute. Each graph is transactional. Multiple graphs can be submitted in one request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create account

**Slug:** `SALESFORCE_CREATE_ACCOUNT`

Creates a new account in Salesforce with the specified information. Returns the created Account's ID at `data.response_data.id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | string | No | Fax number. |
| `name` | string | Yes | Account name (required field in Salesforce). |
| `type` | string | No | Type of account. |
| `phone` | string | No | Main phone number. |
| `website` | string | No | Company website URL. |
| `industry` | string | No | Industry the account belongs to. |
| `sic_desc` | string | No | Standard Industrial Classification (SIC) description. |
| `parent_id` | string | No | ID of the parent account if this is a subsidiary. Must be a valid Salesforce Account Id (15- or 18-character). |
| `description` | string | No | Text description of the account. |
| `billing_city` | string | No | Billing address city. |
| `billing_state` | string | No | Billing address state/province. For US/Canada addresses, use full state/province names (e.g., 'California', 'New York', 'Ontario') or abbreviations ('CA', 'NY') which are auto-converted. For other countries, leave empty unless you know the exact valid picklist value for your Salesforce org. WARNING: If State/Country Picklists are enabled in your org, only pre-configured values are accepted; arbitrary region names will be rejected with FIELD_INTEGRITY_EXCEPTION. |
| `custom_fields` | object | No | Custom fields to set on the account. Use Salesforce API field names (e.g., 'Level__c', 'Languages__c'). Values can be strings, numbers, booleans, or null. |
| `shipping_city` | string | No | Shipping address city. |
| `account_source` | string | No | Source of the account. |
| `annual_revenue` | number | No | Estimated annual revenue. |
| `billing_street` | string | No | Billing address street. |
| `shipping_state` | string | No | Shipping address state/province. For US/Canada addresses, use full state/province names (e.g., 'California', 'New York', 'Ontario') or abbreviations ('CA', 'NY') which are auto-converted. For other countries, leave empty unless you know the exact valid picklist value for your Salesforce org. WARNING: If State/Country Picklists are enabled in your org, only pre-configured values are accepted; arbitrary region names will be rejected with FIELD_INTEGRITY_EXCEPTION. |
| `billing_country` | string | No | Billing address country. |
| `shipping_street` | string | No | Shipping address street. |
| `shipping_country` | string | No | Shipping address country. |
| `billing_postal_code` | string | No | Billing address postal/zip code. |
| `number_of_employees` | integer | No | Number of employees. |
| `shipping_postal_code` | string | No | Shipping address postal/zip code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a record

**Slug:** `SALESFORCE_CREATE_A_RECORD`

Tool to create a Salesforce record using the UI API. Use when you need to create any type of Salesforce record with layout metadata and formatted field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | Dictionary mapping field API names to their values. Keys are field API names (e.g., 'Name', 'FirstName', 'AccountId') and values are the data to set for those fields. Custom fields (ending in '__c') should be passed as direct key-value pairs, not nested under a 'CustomFields' key. |
| `api_name` | string | Yes | The API name of the Salesforce object to create (e.g., 'Account', 'Contact', 'Opportunity', 'ContentNote'). |
| `allow_save_on_duplicate` | boolean | No | Controls whether to allow saving when duplicates are detected. Note: Not currently supported in Lightning Web Components createRecord function. |
| `composio_execution_message` | string | No | Internal message about input processing performed during execution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create bulk ingest job

**Slug:** `SALESFORCE_CREATE_BULK_INGEST_JOB`

Create a Bulk API 2.0 ingest job (POST /jobs/ingest). Returns a job in the 'Open' state with an id and contentUrl. This is the first step of a bulk load: create the job here, upload CSV data to it (upload_job_data), then close it (close_or_abort_a_job with state=UploadComplete) to queue processing. Without this action the rest of the ingest-job family has no obtainable job_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string ("insert" | "delete" | "hardDelete" | "update" | "upsert") | Yes | The processing operation for the job. 'upsert' requires external_id_field_name. 'hardDelete' permanently deletes records (bypassing the Recycle Bin) and requires the 'Bulk API Hard Delete' user permission. |
| `line_ending` | string ("LF" | "CRLF") | No | Line ending used in the CSV data you will upload. Defaults to LF if omitted. |
| `object_type` | string | Yes | The API name of the Salesforce object the job operates on (e.g., 'Account', 'Contact', 'MyObject__c'). Sent to the API as the 'object' field. |
| `content_type` | string | No | Format of the data to be uploaded. Bulk API 2.0 ingest only supports 'CSV'. |
| `column_delimiter` | string ("BACKQUOTE" | "CARET" | "COMMA" | "PIPE" | "SEMICOLON" | "TAB") | No | Column delimiter used in the CSV data you will upload. Defaults to COMMA if omitted. |
| `assignment_rule_id` | string | No | The ID of a specific assignment rule to run for Case or Lead records. Optional. |
| `external_id_field_name` | string | No | The external ID field API name used to match records. REQUIRED when operation is 'upsert'; ignored otherwise. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create bulk query job

**Slug:** `SALESFORCE_CREATE_BULK_QUERY_JOB`

Create a Bulk API 2.0 query job (POST /jobs/query) for a SOQL query over a large result set. Returns a job with an id; poll get_job_info_query until state is 'JobComplete', then retrieve CSV results with get_job_query_result. Without this action the Bulk query family has no obtainable job_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The SOQL query the job will run. For very large result sets, Bulk API 2.0 query jobs stream results as CSV pages. |
| `operation` | string ("query" | "queryAll") | No | 'query' returns current rows; 'queryAll' also returns deleted and archived rows. |
| `line_ending` | string ("LF" | "CRLF") | No | Line ending for the CSV results. Defaults to LF if omitted. |
| `content_type` | string | No | Format of the query results. Bulk API 2.0 query only supports 'CSV'. |
| `column_delimiter` | string ("BACKQUOTE" | "CARET" | "COMMA" | "PIPE" | "SEMICOLON" | "TAB") | No | Column delimiter for the CSV results. Defaults to COMMA if omitted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create campaign

**Slug:** `SALESFORCE_CREATE_CAMPAIGN`

Creates a new campaign in Salesforce. Only `name` is universally required, but org-level validation rules commonly enforce `type`, `status`, `start_date`, and `end_date` as well — omitting them may cause creation to fail.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Campaign name (required field in Salesforce). |
| `type` | string | No | Type of campaign. |
| `status` | string | No | Current status of the campaign. |
| `end_date` | string | No | Campaign end date in YYYY-MM-DD format. |
| `is_active` | boolean | No | Whether the campaign is currently active. Depending on org configuration, setting to `true` may require valid `start_date`/`end_date` ranges; violations raise a non-retriable `CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY` error. |
| `parent_id` | string | No | ID of the parent campaign if this is a child campaign. |
| `start_date` | string | No | Campaign start date in YYYY-MM-DD format. |
| `actual_cost` | number | No | Actual cost spent on the campaign. |
| `description` | string | No | Detailed description of the campaign. |
| `number_sent` | number | No | Number of individuals targeted by the campaign. |
| `budgeted_cost` | number | No | Budgeted cost for the campaign. |
| `custom_fields` | object | No | Dictionary of custom field names and their values. Custom field names should end with '__c' (e.g., 'Priority__c', 'Region__c'). Values can be strings, numbers, booleans, or dates depending on the field type. |
| `expected_revenue` | number | No | Expected revenue from the campaign. |
| `expected_response` | number | No | Expected response rate as a percentage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create campaign record

**Slug:** `SALESFORCE_CREATE_CAMPAIGN_RECORD_VIA_POST`

DEPRECATED: Creates a new campaign record in Salesforce; if 'ParentId' is provided, it must be a valid ID of an existing Campaign record, and if 'OwnerId' is provided, it must be a valid ID of an active User.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | No | Unique identifier for the campaign record, usually system-generated upon creation. |
| `Name` | string | Yes | Required. Name of the campaign (limit 80 characters). |
| `Type` | string | No | Type of campaign (limit 40 characters). |
| `Status` | string | No | Current status of the campaign (limit 40 characters). |
| `EndDate` | string | No | Ending date for the campaign (YYYY-MM-DD); responses received after this date are still counted. |
| `OwnerId` | string | No | ID of the campaign owner. Defaults to the ID of the user making the API call. |
| `IsActive` | boolean | No | Indicates if the campaign is active. Label: Active. |
| `ParentId` | string | No | ID of the parent Campaign record for hierarchical grouping. |
| `IsDeleted` | boolean | No | Indicates if the campaign record has been deleted. |
| `StartDate` | string | No | Starting date for the campaign (YYYY-MM-DD). |
| `ActualCost` | integer | No | Actual cost of the campaign, in the organization's currency. |
| `NumberSent` | integer | No | Total number of individuals targeted (e.g., emails sent). Label: Num Sent. |
| `CreatedById` | string | No | Read-only. ID of the user who created this campaign record. |
| `CreatedDate` | string | No | Read-only. Creation date and time (ISO 8601). |
| `Description` | string | No | Detailed description of the campaign (limit 32KB; first 255 characters displayed in reports). |
| `BudgetedCost` | integer | No | Budgeted cost for this campaign, in the organization's currency. |
| `NumberOfLeads` | integer | No | Read-only. Total leads associated with this campaign. Label: Leads in Campaign. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `LastViewedDate` | string | No | Read-only. Timestamp of current user's last view of this record/list view (ISO 8601). Null if only accessed (see LastReferencedDate) but not viewed. |
| `SystemModstamp` | string | No | Read-only. Last modification date and time by a user or automated process (ISO 8601). |
| `ExpectedRevenue` | integer | No | Expected revenue from this campaign, in the organization's currency. |
| `attributes__url` | string | No | Read-only. Relative URL to the campaign record. |
| `ExpectedResponse` | integer | No | Percentage of responses expected from targeted individuals. |
| `LastActivityDate` | string | No | Read-only. Most recent activity date (event due date or closed task due date, YYYY-MM-DD). |
| `LastModifiedById` | string | No | Read-only. ID of the user who last modified this campaign record. |
| `LastModifiedDate` | string | No | Read-only. Last modification date and time (ISO 8601). |
| `NumberOfContacts` | integer | No | Read-only. Total contacts associated with this campaign. Label: Total Contacts. |
| `attributes__type` | string | No | sObject type, typically 'Campaign'. |
| `NumberOfResponses` | integer | No | Read-only. Contacts and unconverted leads with Member Status “Responded”. Label: Responses in Campaign. |
| `LastReferencedDate` | string | No | Read-only. Timestamp of current user's last access to this record, a related record, or a list view (ISO 8601). |
| `NumberOfOpportunities` | integer | No | Read-only. Total opportunities associated with this campaign. Label: Opportunities in Campaign. |
| `AmountAllOpportunities` | integer | No | Read-only. Total monetary amount of all opportunities (including closed/won) in this campaign, in organization's currency. Label: Value Opportunities in Campaign. |
| `AmountWonOpportunities` | integer | No | Read-only. Total monetary amount of closed/won opportunities in this campaign, in organization's currency. Label: Value Won Opportunities in Campaign. |
| `NumberOfConvertedLeads` | integer | No | Read-only. Leads converted to an account and contact from this campaign. Label: Converted Leads. |
| `NumberOfWonOpportunities` | integer | No | Read-only. Closed or won opportunities from this campaign. Label: Won Opportunities in Campaign. |
| `CampaignMemberRecordTypeId` | string | No | Record type ID for associated CampaignMember records, determining their fields and layout. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create contact

**Slug:** `SALESFORCE_CREATE_CONTACT`

Creates a new contact in Salesforce with the specified information. Writes to live CRM data — obtain explicit user confirmation before executing. Failures may reflect org-specific validation rules, permission restrictions, or duplicate rules rather than invalid inputs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Contact's email address. |
| `phone` | string | No | Contact's primary phone number. |
| `title` | string | No | Contact's job title. |
| `birthdate` | string | No | Contact's birthdate in YYYY-MM-DD format. |
| `last_name` | string | Yes | Contact's last name (required field in Salesforce). |
| `account_id` | string | No | ID of the Account this contact is associated with. |
| `department` | string | No | Contact's department. |
| `first_name` | string | No | Contact's first name. |
| `lead_source` | string | No | Source from which this contact originated. |
| `mailing_city` | string | No | Contact's mailing city. |
| `mobile_phone` | string | No | Contact's mobile phone number. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Level__c', 'Languages__c'). |
| `mailing_state` | string | No | Contact's mailing state/province. |
| `mailing_street` | string | No | Contact's mailing street address. |
| `mailing_country` | string | No | Contact's mailing country. |
| `mailing_postal_code` | string | No | Contact's mailing postal/zip code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create custom field

**Slug:** `SALESFORCE_CREATE_CUSTOM_FIELD`

Tool to create a custom field on a Salesforce object using the Tooling API. Use when you need to add a new field (Text, Number, Checkbox, Date, Picklist, Lookup, etc.) to any standard or custom object without deploying metadata packages. The Tooling API provides direct field creation for rapid development and automation tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | The display label for the field shown in the Salesforce UI. |
| `scale` | integer | No | Number of decimal places for Number, Currency, or Percent fields. Must be less than precision. |
| `length` | integer | No | Maximum character length. Required for Text (max 255) and LongTextArea (max 131072) fields. |
| `unique` | boolean | No | If true, enforce that all values in this field are unique across all records (case-insensitive by default). |
| `required` | boolean | No | If true, this field must be populated when creating or editing records. |
| `precision` | integer | No | Total number of digits for Number, Currency, or Percent fields (including decimal places). Maximum is 18. |
| `field_type` | string ("Text" | "LongTextArea" | "Number" | "Checkbox" | "Date" | "DateTime" | "Picklist" | "MultiselectPicklist" | "Lookup" | "Email" | "Phone" | "Url" | "Currency" | "Percent") | Yes | The type of custom field to create. Common types: Text (string up to 255 chars), LongTextArea (larger text), Number (integer or decimal), Checkbox (boolean), Date, DateTime, Picklist (single-select dropdown), MultiselectPicklist (multi-select), Lookup (relationship to another object), Email, Phone, Url, Currency, Percent. |
| `restricted` | boolean | No | For Picklist/MultiselectPicklist fields, if true restricts values to only those defined in the picklist (no custom values allowed). |
| `description` | string | No | Optional description of the field's purpose and usage. |
| `external_id` | boolean | No | If true, marks this field as an external ID for integration purposes (allows upsert operations and improves query performance). |
| `reference_to` | string | No | For Lookup fields, the API name of the object this field references (e.g., 'Account', 'Contact', 'CustomObject__c'). |
| `default_value` | string | No | Default value for the field. Format depends on field type (e.g., 'true'/'false' for Checkbox, date string for Date fields). |
| `visible_lines` | integer | No | Number of visible lines for LongTextArea fields in the UI. Typically 3-10. |
| `check_existing` | boolean | No | If true, checks if the field already exists before attempting creation. Prevents errors when field is already present. |
| `field_api_name` | string | Yes | The API name for the new custom field. Must end with '__c' for custom fields (e.g., 'Customer_Tier__c', 'Priority_Level__c'). |
| `object_api_name` | string | Yes | The API name of the Salesforce object to add the field to (e.g., 'Account', 'Contact', 'Opportunity', or a custom object like 'Invoice__c'). |
| `picklist_values` | array | No | List of picklist values for Picklist or MultiselectPicklist fields. Each value must have at minimum a fullName. |
| `inline_help_text` | string | No | Optional help text shown as a tooltip when users hover over the field in the UI. |
| `relationship_name` | string | No | For Lookup fields, the API name for the relationship (used in queries). If not specified, Salesforce auto-generates one. |
| `visible_lines_picklist` | integer | No | For MultiselectPicklist fields, number of visible lines to display in the UI. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create custom object

**Slug:** `SALESFORCE_CREATE_CUSTOM_OBJECT`

Tool to create a custom object in Salesforce using the Metadata API. Use when you need to dynamically create new object types (tables) in Salesforce with custom fields and configurations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | The display label for the custom object shown in the Salesforce UI (singular form). |
| `full_name` | string | Yes | The API name of the custom object. Must end with '__c' suffix (e.g., 'Invoice__c', 'Student__c'). This is the unique identifier for the object in Salesforce. |
| `name_field` | object | Yes | Configuration for the name field of the custom object. Every custom object requires a name field. |
| `description` | string | No | Optional description of the custom object's purpose and usage. |
| `plural_label` | string | Yes | The plural form of the label shown in the Salesforce UI when referring to multiple records. |
| `sharing_model` | string ("ReadWrite" | "Read" | "Private" | "ControlledByParent") | No | Defines default record-level sharing. 'ReadWrite' allows all users to read and edit, 'Read' allows read-only access, 'Private' restricts to owner only, 'ControlledByParent' inherits from parent object. |
| `enable_reports` | boolean | No | If true, enables reporting on this object. Allows users to create reports and dashboards with this object's data. |
| `deployment_status` | string ("Deployed" | "InDevelopment") | No | Deployment status of the custom object. 'Deployed' makes it available to all users, 'InDevelopment' restricts access to admins and developers only. |
| `enable_activities` | boolean | No | If true, enables tasks and events for this object. Allows users to track activities related to records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create lead

**Slug:** `SALESFORCE_CREATE_LEAD`

Creates a new lead in Salesforce. `LastName` and `Company` are required. Org-level validation rules (e.g., email format, custom required fields) may reject requests beyond these; inspect the error response body for the failing field. The created lead `id` is returned in a response wrapper, not at the top level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `City` | string | No | Lead's city. |
| `Email` | string | No | Lead's email address. |
| `Phone` | string | No | Lead's phone number. |
| `State` | string | No | Lead's state/province. |
| `Title` | string | No | Lead's job title. Maximum length is 128 characters. |
| `Rating` | string | No | Lead rating. |
| `Status` | string | No | Lead status. |
| `Street` | string | No | Lead's street address. |
| `Company` | string | Yes | Lead's company name. Required - must be provided to create a lead. |
| `Country` | string | No | Lead's country. |
| `Website` | string | No | Lead's company website. |
| `Industry` | string | No | Lead's industry. |
| `LastName` | string | Yes | Lead's last name. Required - must be provided to create a lead. |
| `FirstName` | string | No | Lead's first name. |
| `LeadSource` | string | No | Source of the lead. |
| `PostalCode` | string | No | Lead's postal/zip code. |
| `CustomFields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Level__c', 'Languages__c'). Use this to set any custom fields defined in your Salesforce org. |
| `AnnualRevenue` | number | No | Lead's company annual revenue. |
| `allow_duplicates` | boolean | No | When True, allows creating duplicate leads even if Salesforce duplicate detection rules are triggered. When False (default), creation fails if duplicates are detected and returns duplicate information in the response. |
| `NumberOfEmployees` | integer | No | Number of employees at lead's company. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create lead

**Slug:** `SALESFORCE_CREATE_LEAD_WITH_SPECIFIED_CONTENT_TYPE`

DEPRECATED: Creates a new Lead in Salesforce, requiring `LastName` and `Company` unless person accounts are enabled and `Company` is null.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `City` | string | No | City for the address. |
| `Email` | string | No | Email address. |
| `Phone` | string | No | Primary phone number. |
| `State` | string | No | State or province for the address. |
| `Title` | string | No | Title (e.g., CFO, CEO; up to 128 characters). |
| `Jigsaw` | string | No | Data.com contact ID (max 20 chars). Indicates Data.com import. Do not modify; for import troubleshooting. |
| `Rating` | string | No | Rating (e.g., Hot, Warm, Cold). |
| `Status` | string | No | Current status (e.g., Open, Contacted). Defined in LeadStatus object in Salesforce setup. |
| `Street` | string | No | Street address. |
| `Company` | string | Yes | Company name (up to 255 characters). If person accounts are enabled and this is null, lead converts to a person account. |
| `Country` | string | No | Country for the address. |
| `OwnerId` | string | No | ID of the owner (must be a valid 15 or 18-character Salesforce User ID starting with '005', e.g., '005XXXXXXXXXXXXXXX'). Omit or set to null to assign to the current user. The string 'me' is automatically converted to null to use the default. |
| `Website` | string | No | Website URL. |
| `Industry` | string | No | Primary industry of the lead's company. |
| `LastName` | string | Yes | Last name of the lead (up to 80 characters). |
| `PhotoUrl` | string | No | Path for social network profile image URL; used with Salesforce instance URL. Empty if Social Accounts/Contacts disabled. |
| `FirstName` | string | No | First name (up to 40 characters). |
| `IsDeleted` | boolean | No | Indicates if the lead is in the Recycle Bin (true) or not (false). Salesforce defaults to false if this field is omitted. |
| `LeadSource` | string ("Web" | "Other" | "Phone Inquiry" | "Partner Referral" | "Purchased List") | No | Source of the lead. |
| `PostalCode` | string | No | Postal or ZIP code for the address. |
| `Primary__c` | string | No | Custom field, possibly indicates if primary contact/lead. |
| `SICCode__c` | string | No | Custom field for Standard Industrial Classification (SIC) code. |
| `Salutation` | string ("Mr." | "Ms." | "Mrs." | "Dr." | "Prof.") | No | Salutation for the lead. |
| `CleanStatus` | string | No | Record's clean status compared with Data.com (e.g., Matched, Different, Pending). |
| `CreatedById` | string | No | ID of user who created this. System-generated, read-only. |
| `CreatedDate` | string | No | Creation timestamp. System-generated, read-only. |
| `Description` | string | No | Description (up to 32,000 characters). |
| `IsConverted` | boolean | No | True if converted to Account/Contact/Opportunity; false otherwise. Read-only; set upon conversion. |
| `IndividualId` | string | No | Associated data privacy record ID. Available if Data Protection/Privacy enabled. |
| `AnnualRevenue` | integer | No | Annual revenue of the lead’s company. |
| `ConvertedDate` | string | No | Conversion date. Read-only; set upon conversion. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `DandbCompanyId` | string | No | Associated D&B Company record ID. Available if Data.com used. |
| `LastViewedDate` | string | No | Timestamp when current user last viewed. Null if only accessed (LastReferencedDate) but not viewed. Read-only. |
| `MasterRecordId` | string | No | ID of the master record if this lead was deleted due to a merge; null otherwise. |
| `SystemModstamp` | string | No | Timestamp of last modification by user or system. System-generated, read-only. |
| `IsUnreadByOwner` | boolean | No | True if assigned to an owner but not yet viewed by them. Salesforce defaults to true when a lead is created or its owner changes. |
| `JigsawContactId` | string | No | Jigsaw contact ID. Read-only. |
| `attributes__url` | string | No | Relative URL of SObject record. Usually metadata, not set by user on creation. |
| `EmailBouncedDate` | string | No | Date/time of last email bounce (if bounce management active). |
| `IsPriorityRecord` | boolean | No | True if this lead is marked as a priority record. |
| `LastActivityDate` | string | No | Later of most recent event's Due Date or most recently closed task's Due Date. Read-only. |
| `LastModifiedById` | string | No | ID of user who last modified this. System-generated, read-only. |
| `LastModifiedDate` | string | No | Last modification timestamp. System-generated, read-only. |
| `attributes__type` | string | No | SObject type (typically 'Lead'). Usually metadata, not set by user on creation. |
| `NumberOfEmployees` | integer | No | Number of employees at the lead’s company. |
| `ConvertedAccountId` | string | No | ID of the Account object from conversion. Read-only. |
| `ConvertedContactId` | string | No | ID of the Contact object from conversion. Read-only. |
| `EmailBouncedReason` | string | No | Reason for last email bounce (if bounce management active). |
| `LastReferencedDate` | string | No | Timestamp when current user last accessed this or related record. Read-only. |
| `ProductInterest__c` | string | No | Custom field indicating the product(s) the lead is interested in. |
| `CurrentGenerators__c` | string | No | Custom field for information about current generators or similar equipment/services. |
| `NumberofLocations__c` | integer | No | Custom field for the number of locations the lead's company has. |
| `ConvertedOpportunityId` | string | No | ID of the Opportunity from conversion. Read-only. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new contact

**Slug:** `SALESFORCE_CREATE_NEW_CONTACT_WITH_JSON_HEADER`

DEPRECATED: Creates a new Contact in Salesforce; 'LastName' is required, an existing 'AccountId' must be used if provided, and any custom fields (ending with '__c') must be predefined.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | No | Unique contact identifier, system-generated; omit for new contact creation. |
| `Fax` | string | No | Primary business fax. Label: Business Fax. |
| `Name` | string | No | Read-only: Full name, a concatenation of FirstName, MiddleName, LastName, and Suffix (up to 203 characters). |
| `Email` | string | No | Email address. |
| `Phone` | string | No | Primary business phone. Label: Business Phone. |
| `Title` | string | No | Contact's title (e.g., CEO, Vice President). |
| `Jigsaw` | string | No | Read-only: Data.com Company ID (max 20 chars), indicates import from Data.com. Label: Data.com Key. Do not modify. |
| `OwnerId` | string | No | ID of the Salesforce user owning this contact. Defaults to the logged-in user if unspecified. |
| `LastName` | string | Yes | Required: Contact's last name (up to 80 characters). |
| `Level__c` | string | No | Custom field: Contact's level (e.g., Primary, Secondary). '__c' denotes a custom field. |
| `PhotoUrl` | string | No | Read-only: Path for social profile image URL (redirects). Empty if Social Accounts & Contacts disabled. |
| `AccountId` | string | No | Parent Account ID; must exist if specified. Caution advised when changing for portal-enabled contacts. |
| `Birthdate` | string | No | Birthdate (YYYY-MM-DD). SOQL queries ignore year for date comparisons (e.g., `Birthdate > TODAY`). |
| `FirstName` | string | No | Contact's first name (up to 40 characters). |
| `HomePhone` | string | No | Home phone. |
| `IsDeleted` | boolean | No | Read-only: True if contact is in Recycle Bin. Label: Deleted. |
| `OtherCity` | string | No | Alternate address: City. |
| `Department` | string | No | Contact's department. |
| `LeadSource` | string | No | Lead source for this contact (e.g., Web, Phone Inquiry). |
| `OtherPhone` | string | No | Alternate address phone. |
| `OtherState` | string | No | Alternate address: State or province. |
| `Salutation` | string | No | Honorific for the contact's name (e.g., Dr., Mr., Mrs.). |
| `CleanStatus` | string | No | Record's clean status compared to Data.com (e.g., 'Matched' may appear as 'In Sync' in UI). |
| `CreatedById` | string | No | Read-only: ID of user who created contact. |
| `CreatedDate` | string | No | Read-only: Timestamp of contact creation. |
| `Description` | string | No | Description (up to 32KB). Label: Contact Description. |
| `MailingCity` | string | No | Mailing address: City. |
| `MobilePhone` | string | No | Mobile phone. |
| `OtherStreet` | string | No | Alternate address: Street. |
| `ReportsToId` | string | No | ID of manager contact reports to. Not for person accounts (IsPersonAccount true). |
| `IndividualId` | string | No | ID of associated data privacy record. Available if Data Protection & Privacy enabled. |
| `Languages__c` | string | No | Custom field: Languages spoken by the contact (e.g., English;Spanish). '__c' denotes a custom field. |
| `MailingState` | string | No | Mailing address: State or province. |
| `OtherCountry` | string | No | Alternate address: Country. |
| `AssistantName` | string | No | Assistant's name. |
| `ContactSource` | string | No | Source of contact information, for more granular tracking than LeadSource. |
| `MailingStreet` | string | No | Mailing address: Street. |
| `OtherLatitude` | integer | No | Alternate address: Latitude (-90 to 90, 15 decimal places). Use with OtherLongitude. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `AssistantPhone` | string | No | Assistant's phone. |
| `IsEmailBounced` | boolean | No | True if email bounced; bounce management must be active. |
| `LastViewedDate` | string | No | Read-only: Timestamp current user last viewed contact. Null if only referenced. |
| `MailingCountry` | string | No | Mailing address: Country. |
| `MasterRecordId` | string | No | Read-only: ID of the master record post-merge deletion; null otherwise. |
| `OtherLongitude` | integer | No | Alternate address: Longitude (-180 to 180, 15 decimal places). Use with OtherLatitude. |
| `SystemModstamp` | string | No | Read-only: Timestamp of last system modification (user or automated). |
| `JigsawContactId` | string | No | Read-only: Jigsaw (Data.com) ID, links to Data.com contact data. |
| `MailingLatitude` | integer | No | Mailing address: Latitude (-90 to 90, 15 decimal places). Use with MailingLongitude. |
| `OtherPostalCode` | string | No | Alternate address: Postal code. |
| `attributes__url` | string | No | Relative URL for this SObject record, usually system-generated. Part of 'attributes' metadata. |
| `EmailBouncedDate` | string | No | Date and time of email bounce, if bounce management is active and an email bounced. |
| `IsPriorityRecord` | boolean | No | True if contact is a priority record. |
| `LastActivityDate` | string | No | Read-only: Most recent due date of associated event or closed task. |
| `LastCUUpdateDate` | string | No | Read-only: Timestamp of last update from a contact update request. |
| `LastModifiedById` | string | No | Read-only: ID of user who last modified contact. |
| `LastModifiedDate` | string | No | Read-only: Timestamp of last modification. |
| `MailingLongitude` | integer | No | Mailing address: Longitude (-180 to 180, 15 decimal places). Use with MailingLatitude. |
| `attributes__type` | string | No | Salesforce SObject type, typically 'Contact'. Part of 'attributes' metadata. |
| `LastCURequestDate` | string | No | Read-only: Timestamp of last contact update request (e.g., Data.com Clean). |
| `MailingPostalCode` | string | No | Mailing address: Postal code. |
| `EmailBouncedReason` | string | No | Reason for email bounce, if bounce management is active and an email bounced. |
| `LastReferencedDate` | string | No | Read-only: Timestamp current user last accessed contact, related record, or its list view. |
| `OtherGeocodeAccuracy` | string | No | Alternate address: Geocode accuracy. See Salesforce docs for geolocation compound fields. |
| `MailingGeocodeAccuracy` | string | No | Mailing address: Geocode accuracy. See Salesforce docs for geolocation compound fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create note

**Slug:** `SALESFORCE_CREATE_NOTE`

Creates a new note attached to a Salesforce record with the specified title and content. Does not deduplicate — identical calls create duplicate notes. High-volume creation can trigger REQUEST_LIMIT_EXCEEDED; apply exponential backoff on retries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Body/content of the note. Can contain detailed text information. |
| `title` | string | Yes | Title of the note (required field in Salesforce). |
| `owner_id` | string | No | ID of the user who will own the note. Defaults to the current user if not specified. |
| `parent_id` | string | Yes | ID of the record to attach the note to (required field in Salesforce). Can be any record that supports notes like Account, Contact, Lead, Opportunity, etc. |
| `is_private` | boolean | No | Whether the note should be private (only visible to owner and users with Modify All Data permission). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Priority__c', 'Category__c'). Use this to set any custom fields defined on the Note object in your Salesforce org. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a note record

**Slug:** `SALESFORCE_CREATE_NOTE_RECORD_WITH_CONTENT_TYPE_HEADER`

DEPRECATED: Creates a new Note record in Salesforce, associated with an existing Salesforce object via `ParentId`, automatically including a `Content-Type: application/json` header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | No | Unique identifier for the Note object, typically auto-generated and not provided in the request. |
| `Body` | string | Yes | Content or body of the note. |
| `Title` | string | Yes | Title of the note. |
| `OwnerId` | string | No | ID of the Salesforce User who will own the note; defaults to the API user. |
| `ParentId` | string | Yes | ID of the parent Salesforce record (e.g., Account, Contact) to which this note is related; must reference an existing record. |
| `IsDeleted` | boolean | No | Indicates if the object is in the Recycle Bin. Label is Deleted. |
| `IsPrivate` | boolean | No | If true, restricts note visibility to the owner or users with "Modify All Data" permission. Label is Private. |
| `CreatedById` | string | No | ID of the user who created the note (system-generated, read-only on create). |
| `CreatedDate` | string | No | Timestamp of note creation (system-generated, read-only on create). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `SystemModstamp` | string | No | Timestamp of last system change (system-generated). |
| `attributes__url` | string | No | API URL for the SObject. Corresponds to `attributes.url` in the JSON body (typically read-only). |
| `LastModifiedById` | string | No | ID of the user who last modified the note (system-generated). |
| `LastModifiedDate` | string | No | Timestamp of last modification (system-generated). |
| `attributes__type` | string | No | SObject type, should be 'Note' if provided. Corresponds to `attributes.type` in the JSON body. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create opportunity

**Slug:** `SALESFORCE_CREATE_OPPORTUNITY`

Creates a new opportunity in Salesforce with the specified information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Opportunity name (required field in Salesforce). |
| `type` | string | No | Type of opportunity. |
| `amount` | number | No | Estimated total sale amount. |
| `next_step` | string | No | Description of next step in sales process. |
| `account_id` | string | No | ID of the Account this opportunity is associated with. Omitting leaves the opportunity orphaned and excluded from account-based reports. |
| `close_date` | string | Yes | Expected close date in YYYY-MM-DD format (required field in Salesforce). |
| `contact_id` | string | No | Deprecated: Salesforce Opportunity does not have a writable ContactId field. Contact-to-Opportunity associations must be managed through OpportunityContactRole. This parameter is accepted but ignored. |
| `stage_name` | string | Yes | Current stage of the opportunity (required field in Salesforce). |
| `description` | string | No | Text description of the opportunity. |
| `lead_source` | string | No | Source of the opportunity. |
| `probability` | number | No | Percentage probability of closing (0-100). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Custom_Field__c'). Values are subject to org-level validation rules; invalid values raise FIELD_CUSTOM_VALIDATION_EXCEPTION. |
| `pricebook2_id` | string | No | ID of the price book for this opportunity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create opportunity record

**Slug:** `SALESFORCE_CREATE_OPPORTUNITY_RECORD`

DEPRECATED: Creates a new Opportunity record in Salesforce; `Name`, `StageName`, and `CloseDate` are mandatory, and ensure any referenced IDs (e.g., `AccountId`, `CampaignId`) are valid and corresponding Salesforce features are enabled if used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `Id` | string | No | System-generated unique identifier. Typically not provided during creation; providing it may be ignored or cause an error. |
| `Name` | string | Yes | Descriptive name for the opportunity. Required. Limit: 120 characters. |
| `Type` | string | No | Opportunity type (e.g., 'New Business', 'Existing Customer'). Values depend on Salesforce configuration. |
| `IsWon` | boolean | No | Read-only. Indicates if won, lost, or open. Auto-set by Salesforce based on StageName; cannot be set on creation. |
| `Amount` | integer | No | Estimated total sale amount. If products are involved, this may be auto-calculated, and direct updates might be ignored. |
| `Fiscal` | string | No | Fiscal period ('YYYY Q' format, e.g., '2024 1') based on CloseDate. Used if standard fiscal year settings not enabled. Often auto-derived. |
| `OwnerId` | string | No | ID of the User owning this opportunity. Defaults to creating user if unspecified (depending on settings). Ensure User ID is valid and active. |
| `IsClosed` | boolean | No | Read-only. Indicates if closed or open. Auto-set by Salesforce based on StageName; cannot be set on creation. |
| `NextStep` | string | No | Next actionable step towards closing. Limit: 255 characters. |
| `AccountId` | string | No | ID of the linked Account. Often crucial for creating a valid opportunity. |
| `CloseDate` | string | Yes | Expected close date (YYYY-MM-DD). Required. |
| `ContactId` | string | No | ID of the primary Contact. Set only during creation. Use OpportunityContactRole object to modify or add other contacts later. |
| `IsDeleted` | boolean | No | Indicates if the record is in the Recycle Bin. Generally used for querying, not set during creation. |
| `IsPrivate` | boolean | No | If true, this opportunity is private and only visible to the owner and users with appropriate sharing access. |
| `PushCount` | integer | No | Read-only. Used internally by Salesforce for mobile sync updates. Not user-settable. |
| `StageName` | string | Yes | Current stage (e.g., 'Prospecting', 'Closed Won'). Required. May update ForecastCategoryName, IsClosed, IsWon, and Probability. Query OpportunityStage object or refer to Salesforce setup for valid names. |
| `CampaignId` | string | No | ID of the influencing Campaign. Ensure Campaign feature is enabled and ID is valid. |
| `FiscalYear` | integer | No | Fiscal year (e.g., 2024) of CloseDate. Often auto-derived from CloseDate based on org's fiscal year settings. |
| `LeadSource` | string | No | Lead or opportunity source (e.g., 'Web', 'Partner Referral'). Values depend on Salesforce configuration. |
| `CreatedById` | string | No | Read-only. ID of the user who created this record. Auto-set by Salesforce. |
| `CreatedDate` | string | No | Read-only. Creation timestamp. Auto-set by Salesforce. |
| `Description` | string | No | Detailed text description. Limit: 32,000 characters. |
| `Probability` | integer | No | Likelihood (percentage, e.g., 75 for 75%) of closing. Often implied by StageName but can be overridden. |
| `Pricebook2Id` | string | No | ID of the associated Price Book (Pricebook2). Generally required if adding products. Ensure products/price books are enabled and ID is valid. |
| `FiscalQuarter` | integer | No | Fiscal quarter (1-4) of CloseDate. Often auto-derived from CloseDate based on org's fiscal year settings. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `HasOverdueTask` | boolean | No | Read-only. Indicates if overdue Tasks exist. API v35.0+. |
| `LastViewedDate` | string | No | Read-only. Timestamp of when current user last viewed this record. Not settable on creation. |
| `OrderNumber__c` | string | No | Custom field: Associated order number. |
| `SystemModstamp` | string | No | Read-only. Last system modification timestamp. Auto-set by Salesforce. |
| `ExpectedRevenue` | integer | No | Read-only. Calculated as Amount * Probability. Cannot be set during creation. |
| `HasOpenActivity` | boolean | No | Read-only. Indicates if open activities (Events or Tasks) exist. API v35.0+. |
| `attributes__url` | string | No | Relative URL for this Opportunity record. |
| `ForecastCategory` | string | No | Forecast category (e.g., 'Pipeline', 'Best Case'). Often implied by StageName. For API v12.0+, typically set via ForecastCategoryName. Values depend on Salesforce configuration. |
| `LastActivityDate` | string | No | Read-only. Date of the most recent activity (Event or Task). Not settable on creation. |
| `LastModifiedById` | string | No | Read-only. ID of the user who last modified this record. Auto-set by Salesforce. |
| `LastModifiedDate` | string | No | Read-only. Last modification timestamp. Auto-set by Salesforce. |
| `attributes__type` | string | No | SObject type for this record, typically 'Opportunity'. |
| `TrackingNumber__c` | string | No | Custom field: Associated tracking number. |
| `LastReferencedDate` | string | No | Read-only. Timestamp of when current user last accessed this record or a related one. Not settable on creation. |
| `MainCompetitors__c` | string | No | Custom field: Identified main competitors. |
| `LastStageChangeDate` | string | No | Read-only. Timestamp of last StageName change. Auto-set by Salesforce. |
| `CurrentGenerators__c` | string | No | Custom field: Information on current generators. |
| `ForecastCategoryName` | string | No | Name of the forecast category (e.g., 'Pipeline'). API v12.0+. Often implied by StageName but can be overridden. Typically determines ForecastCategory. |
| `HasOpportunityLineItem` | boolean | No | Read-only. Indicates if associated line items (products) exist. System-managed; ignored during creation. |
| `TotalOpportunityQuantity` | integer | No | Total quantity of items (e.g., units, licenses). Used in quantity-based forecasting. |
| `LastAmountChangedHistoryId` | string | No | Read-only. ID of OpportunityHistory record tracking last Amount change (API v50.0+). Not settable on creation. |
| `DeliveryInstallationStatus__c` | string | No | Custom field: Delivery or installation status. |
| `LastCloseDateChangedHistoryId` | string | No | Read-only. ID of OpportunityHistory record tracking last CloseDate change (API v50.0+). Not settable on creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SObject record

**Slug:** `SALESFORCE_CREATE_S_OBJECT_RECORD`

Tool to create a new Salesforce SObject record. Use when you need to create any type of standard or custom Salesforce object record by specifying the object type and field values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | Dictionary of field API names and their values to set on the new record. Keys must be valid field API names for the specified object type. Required fields for the object must be included. Custom field names typically end with '__c'. |
| `sobject_type` | string | Yes | The API name of the Salesforce object type to create (e.g., 'Account', 'Contact', 'Opportunity', 'Lead', 'Case', 'Task'). This is case-sensitive and must match the exact API name in Salesforce. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create sObject tree

**Slug:** `SALESFORCE_CREATE_SOBJECT_TREE`

Tool to create one or more sObject trees with root records of the specified type. Use when creating nested parent-child record hierarchies in a single atomic operation (e.g., Account with Contacts and Opportunities). Supports up to 200 total records across all trees, up to 5 levels deep, with maximum 5 different object types. All records succeed or all fail together.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `records` | array | Yes | Array of sObject record trees to create. Each record must include 'attributes' object with 'type' (matching sobject_api_name) and 'referenceId' fields, plus any standard or custom field values. Can include nested child records using relationship names (e.g., 'Contacts', 'Opportunities'). Constraints: Maximum 200 total records across all trees, maximum 5 levels deep, maximum 5 different object types. |
| `sobject_api_name` | string | Yes | The API name of the sObject type for root records (e.g., Account, Contact, Opportunity). All root records in the request must be of this type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task

**Slug:** `SALESFORCE_CREATE_TASK`

Creates a new task in Salesforce to track activities, to-dos, and follow-ups related to contacts, leads, or other records. Ensure who_id, what_id, and owner_id reference existing records before calling; invalid IDs cause silent linkage failures or validation errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Status of the task. Must be a valid picklist value; arbitrary strings trigger validation errors. |
| `who_id` | string | No | ID of the Contact or Lead this task is associated with. Only accepts Contact IDs (prefix '003') or Lead IDs (prefix '00Q'). Do NOT use Account/Opportunity/Case IDs here; use what_id for those. Swapping who_id and what_id creates orphaned tasks that won't appear on contact/lead timelines. Accepts only a single ID; create separate task records for multiple contacts. |
| `subject` | string | Yes | Subject/title of the task. |
| `what_id` | string | No | ID of the related record (Account, Opportunity, Case, etc.) this task is associated with. Accepts Account IDs (prefix '001'), Opportunity IDs (prefix '006'), Case IDs (prefix '500'), and other business object IDs. |
| `owner_id` | string | No | ID of the user who owns the task. Defaults to current user if not specified. |
| `priority` | string | No | Priority level of the task. |
| `description` | string | No | Detailed description or notes for the task. |
| `activity_date` | string | No | Due date for the task in YYYY-MM-DD format. Do not use full datetimes or natural-language strings like 'yesterday'; only YYYY-MM-DD is accepted. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Priority_Level__c': 'Critical'). |
| `is_reminder_set` | boolean | No | Whether to set a reminder for this task. |
| `reminder_date_time` | string | No | Date and time for the reminder in ISO format (YYYY-MM-DDTHH:MM:SS). Required if is_reminder_set is true. Interpreted according to org/user timezone, not UTC. |
| `composio_execution_message` | string | No | Internal field used to communicate processing details. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete account

**Slug:** `SALESFORCE_DELETE_ACCOUNT`

Permanently deletes an account from Salesforce. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The Salesforce ID of the account to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a lead object by its id

**Slug:** `SALESFORCE_DELETE_A_LEAD_OBJECT_BY_ITS_ID`

DEPRECATED: Permanently deletes an existing Lead object from Salesforce using its unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique 15-character or 18-character ID of the Lead object to be deleted. Lead object IDs typically start with the prefix '00Q'. This is a required path parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete campaign

**Slug:** `SALESFORCE_DELETE_CAMPAIGN`

Permanently deletes a campaign from Salesforce. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete contact

**Slug:** `SALESFORCE_DELETE_CONTACT`

Permanently deletes a contact from Salesforce. This action cannot be undone. Associated records (activities, opportunities) lose the contact reference upon deletion — ensure related data is migrated or acceptable to lose before proceeding. Returns HTTP 204 with empty body on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The Salesforce ID of the contact to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete file

**Slug:** `SALESFORCE_DELETE_FILE`

Tool to permanently delete a file from Salesforce. Use when you need to remove a file and its content. This operation cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The unique identifier (ID) of the file to delete in Salesforce. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete job query

**Slug:** `SALESFORCE_DELETE_JOB_QUERY`

Tool to delete a Salesforce Bulk API v2 query job. Use when you need to permanently remove a job and its associated data. Only the user who created the job can delete it, and the job must be in a completed state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the Bulk API v2 query job to delete. Job must be in one of these states: JobComplete, Aborted, Failed, or UploadComplete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete lead

**Slug:** `SALESFORCE_DELETE_LEAD`

Permanently deletes a lead from Salesforce. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lead_id` | string | Yes | The Salesforce ID of the lead to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete note

**Slug:** `SALESFORCE_DELETE_NOTE`

Permanently deletes a note from Salesforce. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | The Salesforce ID of the note to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete opportunity

**Slug:** `SALESFORCE_DELETE_OPPORTUNITY`

Permanently deletes an opportunity from Salesforce. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opportunity_id` | string | Yes | The Salesforce ID of the opportunity to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete sObject record

**Slug:** `SALESFORCE_DELETE_SOBJECT`

Tool to delete a single Salesforce record by its ID. Use when you need to permanently remove a specific record from Salesforce. This operation is idempotent - deleting the same record multiple times returns success. Works with standard and custom objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the record to delete. Must be a valid 15 or 18-character Salesforce ID format. |
| `sobject_name` | string | Yes | The API name of the Salesforce object (sObject) to delete. Examples: Account, Contact, Opportunity, CustomObject__c. Must be a valid sObject type with proper permissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple records (SObject Collections)

**Slug:** `SALESFORCE_DELETE_SOBJECT_COLLECTIONS`

Tool to delete up to 200 records in one request with optional rollback. Use when you need to delete multiple records efficiently, reducing API calls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | List of record IDs to delete. Can specify up to 200 record IDs. Each ID should be a valid 15 or 18-character Salesforce ID. |
| `all_or_none` | boolean | No | Specifies whether the operation should roll back if any record fails. When true, all records must be successfully deleted or the entire operation rolls back (atomic transaction). When false (default), partial success is allowed - successfully deleted records are committed even if some deletions fail. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute global quick action

**Slug:** `SALESFORCE_EXECUTE_GLOBAL_QUICK_ACTION`

Execute a global (non-object-specific) quick action (POST /quickActions/{actionName}). The 'Get quick actions' action lists the available global quick actions, but only object-scoped quick actions could be executed before — this runs the global ones. Distinct from the sObject-scoped execute (POST /sobjects/{type}/quickActions/{name}).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record` | object | Yes | Object containing the field values for the record the quick action creates/updates. Field names depend on the quick action's target and layout. |
| `context_id` | string | No | The ID of the context record for the action, when applicable. |
| `action_name` | string | Yes | The API name of the global (non-object-specific) quick action to execute, as listed by the 'Get quick actions' action (e.g., 'LogACall', 'NewContact'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute invocable action

**Slug:** `SALESFORCE_EXECUTE_INVOCABLE_ACTION`

Invoke any standard or custom invocable action by name (POST /actions/standard/{name} or /actions/custom/{name}). The 'Get standard/custom invocable actions' actions enumerate the available actions (including Flows and Apex invocable methods), but previously only emailSimple and invocableApplyLeadAssignmentRules could actually be run — this executes any of them generically. Returns one result per input.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | Array of input maps, one per invocation. Each map's keys are the action's input parameter names. The action runs once per element and returns one result per element. |
| `action_name` | string | Yes | The API name of the invocable action to run (e.g., 'chatterPost' for a standard action, or the API name of a custom Flow/Apex action). |
| `action_type` | string ("standard" | "custom") | Yes | Whether the invocable action is a Salesforce standard action or a custom action (custom includes Flows and Apex invocable methods). 'Get standard invocable actions' / 'Get custom invocable actions' list the available names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute sObject Quick Action

**Slug:** `SALESFORCE_EXECUTE_SOBJECT_QUICK_ACTION`

Tool to execute a specific quick action on an sObject to create records with pre-configured defaults. Use when you need to leverage Salesforce Quick Actions to streamline record creation with field mappings and default values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record` | object | Yes | Object containing field data for the record to be created. Field names and types depend on the target sObject and quick action configuration. Common fields include: Subject, Description, Status, Priority, etc. |
| `sobject` | string | Yes | The API name of the sObject type (e.g., 'Account', 'Contact', 'Task', 'Lead', 'Case'). |
| `context_id` | string | No | The ID of the context record. For object-specific actions, this provides the parent/related record context for the action execution. |
| `action_name` | string | Yes | The API name of the quick action to execute (e.g., 'LogACall', 'NewTask', 'NewChildCase'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute SOQL query (Deprecated)

**Slug:** `SALESFORCE_EXECUTE_SOQL_QUERY`

DEPRECATED: Use SALESFORCE_RUN_SOQL_QUERY instead. Executes the provided SOQL query against Salesforce; the query must begin with 'SELECT'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `soql_query` | string | Yes | The SOQL (Salesforce Object Query Language) query to execute. Example: 'SELECT Id, Name, Email FROM Contact WHERE Name LIKE '%John%' LIMIT 10'. Make sure to follow SOQL syntax and escape single quotes properly. IMPORTANT - DateTime field filtering: Datetime values MUST be in ISO-8601 format (YYYY-MM-DDTHH:MM:SSZ) and MUST NOT be enclosed in quotes. Examples: CreatedDate >= 2024-01-01T00:00:00Z, LastModifiedDate < 2024-12-31T23:59:59Z. You can also use date literals like TODAY, YESTERDAY, LAST_WEEK, THIS_MONTH, LAST_N_DAYS:30, etc. String values should be in single quotes, but datetime values should NOT be quoted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute SOSL search

**Slug:** `SALESFORCE_EXECUTE_SOSL_SEARCH`

Execute a SOSL search to search across multiple Salesforce objects. Use when you need to search for text across multiple object types simultaneously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | SOSL search query string to execute. Must follow SOSL syntax with FIND clause. Special characters and spaces must be URL-encoded. Example: 'FIND {Acme} IN ALL FIELDS RETURNING Account(Name, Phone), Contact(FirstName, LastName)' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch account by ID with query

**Slug:** `SALESFORCE_FETCH_ACCOUNT_BY_ID_WITH_QUERY`

DEPRECATED: Use this action to retrieve a Salesforce Account by its unique ID, which must be a valid and existing Salesforce Account ID; you can optionally specify a comma-delimited list of fields to return.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (ID) of the Salesforce Account to retrieve. |
| `fields` | string | No | Optional comma-delimited list of Account field names to retrieve (e.g., 'Name,BillingCity,Industry'). If unspecified, null, or empty, all accessible Account fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get batch of UI API records

**Slug:** `SALESFORCE_GET_A_BATCH_OF_RECORDS`

Tool to retrieve multiple Salesforce records in a single request with customizable field selection. Use when you need to fetch data for multiple records at once (up to 200 records).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of qualified field names to retrieve. Format: ObjectApiName.FieldName (e.g., 'Account.Name,Account.Phone'). If the user doesn't have access to a field, an error occurs. Either fields or optionalFields must be provided. |
| `record_ids` | string | Yes | Comma-separated list of record IDs to retrieve. All record IDs must be from supported objects. Maximum 200 records per request. |
| `optional_fields` | string | No | Comma-separated list of qualified optional field names. Format: ObjectApiName.FieldName (e.g., 'Account.AnnualRevenue'). If the user doesn't have access to an optional field, it's excluded from the response without error. Can be used with fields parameter. Either fields or optionalFields must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get account

**Slug:** `SALESFORCE_GET_ACCOUNT`

Retrieves a specific account by ID from Salesforce, returning all available fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | The Salesforce ID of the account to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all objects

**Slug:** `SALESFORCE_GET_ALL_CUSTOM_OBJECTS`

Retrieves Salesforce objects (standard and custom) with detailed metadata. Each object includes a 'custom' field to identify custom objects. Note: the underlying Global Describe (/sobjects) is not paginated — it returns every object in one call — so the page/page_size parameters here are CLIENT-SIDE convenience slicing of that full list, not a server cursor. The full list is fetched on every call, and a page past the end returns an empty slice. Use when you need to discover available objects or their capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (1-indexed). Defaults to 1. Must be at least 1. |
| `page_size` | integer | No | Number of objects to return per page. Defaults to 50. Must be between 1 and 200 (inclusive). |
| `custom_only` | boolean | No | If true, only returns custom objects (objects where custom=true). Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all fields for an object

**Slug:** `SALESFORCE_GET_ALL_FIELDS_FOR_OBJECT`

Retrieves all fields (standard and custom) for a Salesforce object with complete metadata including field types, constraints, picklist values, and relationships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object_name` | string | Yes | API name of the Salesforce object to describe. Use standard object names (Account, Contact, Lead, Opportunity) or custom object API names ending in __c. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all navigation items

**Slug:** `SALESFORCE_GET_ALL_NAVIGATION_ITEMS`

Gets all navigation items (tabs) that the user has access to. Use when you need to retrieve available navigation tabs for display or navigation purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page offset for paginated results. Default is 0. For example, page=2 with pageSize=10 returns items starting at position 21. |
| `pageSize` | integer | No | Maximum number of navigation items to return per page. Default is 25. |
| `formFactor` | string ("Large" | "Medium" | "Small") | No | Specifies the display size. Valid values: 'Large' (desktop, default), 'Medium' (tablet), or 'Small' (phone). Determines which navigation items are returned based on the form factor. |
| `navItemNames` | string | No | Comma-delimited list of TabDefinition name values to include in the response. If omitted, all navigation items for the specified form factor are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get API resources by version

**Slug:** `SALESFORCE_GET_API`

Tool to discover available REST API resources for a specified Salesforce API version. Use when you need to find available endpoints and their URIs for a specific API version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | No | The Salesforce API version to query in format vXX.X (e.g., v62.0, v66.0). If not provided, uses the version from the authenticated connection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get an app

**Slug:** `SALESFORCE_GET_APP`

Tool to get metadata about a specific Salesforce app by ID. Use when you need to retrieve app configuration details and navigation items for a particular application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | string | Yes | The 18-character ID of the app or the API name (developerName) of the app to retrieve. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Specifies the device form factor for which to retrieve app metadata. Required by the UI API; defaults to 'Large'. 'Large' for desktop/web client, 'Medium' for tablet client, 'Small' for phone/mobile client. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get apps

**Slug:** `SALESFORCE_GET_APPS`

Tool to get metadata for all apps a user has access to. Use when you need to list available Salesforce applications or check app navigation items. Metadata for the selected app includes tabs on the app's navigation bar, while other apps don't include tab details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Specifies the form factor of the hardware/device the browser is running on. Determines which navigation items and metadata are returned. 'Large' for desktop/laptop, 'Medium' for tablets, 'Small' for mobile phones. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get campaign

**Slug:** `SALESFORCE_GET_CAMPAIGN`

Retrieves a specific campaign by ID from Salesforce, returning all available fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Chatter resources

**Slug:** `SALESFORCE_GET_CHATTER_RESOURCES`

Tool to access Chatter resources directory. Use when you need to discover available Chatter feeds, groups, users, email digest controls, emojis, extensions, or streams.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get child records

**Slug:** `SALESFORCE_GET_CHILD_RECORDS`

Tool to get child records for a specified parent record and child relationship name. Use when you need to retrieve related records from a parent-child relationship in Salesforce, such as getting all Contacts for an Account or all Opportunities for an Account. Results are paginated with configurable page size.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of API names of the related list's column fields to query. Supports spanning relationships in the format ObjectApiName.ChildRelationshipName.FieldApiName (e.g., Opportunity.Account.BillingAddress). If not specified, default fields are returned. |
| `page_size` | integer | No | The number of list records to return per page. The default value is 5 and the value can be 1-2000. |
| `record_id` | string | Yes | The unique 18-character Salesforce ID of the parent record. This is the record whose child records you want to retrieve. |
| `page_token` | string | No | Token for pagination, used to navigate to a specific page of results. Obtained from the response's nextPageToken or previousPageToken fields. |
| `optional_fields` | string | No | Comma-separated list of additional field API names in the related list to query. These are additional fields queried for the records returned that don't create visible columns. If the field is not available to the user, no error occurs. |
| `relationship_name` | string | Yes | The API name of the child relationship (typically the plural form of the child object name). Common examples include 'Contacts', 'Opportunities', 'Cases', 'Tasks'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Compact Layouts

**Slug:** `SALESFORCE_GET_COMPACT_LAYOUTS`

Tool to retrieve compact layout information for multiple Salesforce objects. Use when you need to display object data in compact form for Lightning Experience, mobile apps, or custom interfaces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object_list` | string | Yes | Comma-separated list of Salesforce object names to retrieve compact layouts for (e.g., 'Account', 'Account,Contact', 'Account,Contact,Lead'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get composite resources

**Slug:** `SALESFORCE_GET_COMPOSITE_RESOURCES`

Tool to retrieve a list of available composite resources in Salesforce. Use when you need to discover which composite API endpoints are available for batch operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple records by IDs

**Slug:** `SALESFORCE_GET_COMPOSITE_SOBJECTS`

Retrieves multiple records of the same object type by IDs with a request body. Use when you need to retrieve more records than URL length limits allow (up to 2000 records vs ~800 via GET).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of record IDs to retrieve. Maximum 2000 IDs per request. |
| `fields` | array | Yes | Array of field names to retrieve for each record. Specifies which fields to return in the response. |
| `sobject_name` | string | Yes | The sObject type name (e.g., 'Account', 'Contact', 'Lead', 'Opportunity'). This specifies which type of records to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get consent preferences

**Slug:** `SALESFORCE_GET_CONSENT_ACTION`

Tool to check consent preferences for a SINGLE action (e.g. email, track, fax, phone, solicit, shouldForget) across one or more records (Contact, Lead, User, Person Account, or Individual). Returns a result per identifier; the 'proceed' object is keyed by the requested action, not a fixed set of actions. To query multiple actions at once, use the /consent/multiaction endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | A comma-separated list of identifiers (email addresses or record IDs) for which consent data is being requested. These can be IDs of Lead, Contact, User, Person Account, or Individual records. |
| `action` | string | Yes | The consent action to check. Common values include 'email', 'track', 'fax', or 'shouldForget'. This determines what type of consent preference is being queried. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get contact

**Slug:** `SALESFORCE_GET_CONTACT`

Retrieves a specific contact by ID from Salesforce, returning all available fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-delimited string of Contact field API names to retrieve. If omitted, all fields are returned. |
| `contact_id` | string | Yes | The Salesforce ID of the contact to retrieve. Must be a valid 18-character Salesforce ID; names or emails are not valid substitutes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve specific contact by id

**Slug:** `SALESFORCE_GET_CONTACT_BY_ID`

Retrieves a Salesforce Contact by its unique ID; the ID must correspond to an existing Contact record in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique Salesforce ID of the Contact record to retrieve. |
| `fields` | string | No | Comma-delimited string of Contact field API names to retrieve. If omitted, a default set of fields is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get dashboard

**Slug:** `SALESFORCE_GET_DASHBOARD`

Gets detailed metadata for a specific dashboard including its components, layout, and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dashboard_id` | string | Yes | The Salesforce ID of the dashboard to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get file content

**Slug:** `SALESFORCE_GET_FILE_CONTENT`

Returns the binary content of a Salesforce file, including references to external files. Use when you need to download or retrieve the actual file data from Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The 18-character Salesforce ID of the ContentDocument or ContentVersion file to retrieve. |
| `version_id` | string | No | Specifies a particular version of the file to retrieve. If not specified, returns the latest version. |
| `rendition_type` | string | No | Specifies the type of file rendition to return. Available values: THUMB120BY90, THUMB240BY180, THUMB720BY480, SVGZ, ORIGINAL_<File_Extension>. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get file information

**Slug:** `SALESFORCE_GET_FILE_INFORMATION`

Tool to retrieve comprehensive metadata and information about a specified file in Salesforce. Use when you need detailed file information including ownership, sharing settings, download URLs, and rendition status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_id` | string | Yes | The unique identifier for the file - 18-character Salesforce ID (ContentDocument ID or ContentVersion ID). Example: 069xx000000001AAAQ |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get file shares

**Slug:** `SALESFORCE_GET_FILE_SHARES`

Returns information about the objects with which the specified file has been shared. Use when you need to understand who has access to a specific file in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve (1-based). Use next_page_url from the response to paginate. |
| `file_id` | string | Yes | The 18-character Salesforce ID of the ContentDocument (file) for which to retrieve share information. |
| `page_size` | integer | No | Number of file-share records to return per page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get global actions

**Slug:** `SALESFORCE_GET_GLOBAL_ACTIONS`

Tool to retrieve actions displayed in the Salesforce Global Actions menu with metadata. Use when you need to discover available global actions, quick actions, or custom buttons in the UI.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `apiNames` | string | No | Comma-separated list of action API names to filter results (e.g., 'NewTask,NewEvent,LogACall'). |
| `formFactor` | string ("Large" | "Medium" | "Small") | No | Device form factor to filter actions. Valid values: 'Large' (Desktop), 'Medium' (Tablet), 'Small' (Mobile). |
| `actionTypes` | string | No | Comma-separated list of action types to filter (e.g., 'StandardButton,QuickAction,CustomButton,ProductivityAction'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get job failed record results

**Slug:** `SALESFORCE_GET_JOB_FAILED_RECORD_RESULTS`

Tool to retrieve failed records from a Salesforce Bulk API 2.0 ingest job. Use when you need to get records that failed during a bulk operation, including error messages and original data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the bulk ingest job. |
| `locator` | string | No | Pagination token from the Sforce-Locator response header of a previous request, used to retrieve the next set of results. |
| `max_records` | integer | No | The maximum number of records to retrieve per page. If omitted, the API returns the maximum number of records it can send in a single page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get job successful record results

**Slug:** `SALESFORCE_GET_JOB_SUCCESSFUL_RECORD_RESULTS`

Tool to retrieve successfully processed records from a Salesforce Bulk API 2.0 ingest job. Use when you need to get records that were successfully created or updated during a bulk operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the bulk ingest job. |
| `locator` | string | No | Pagination token from the Sforce-Locator response header of a previous request, used to retrieve the next set of results. |
| `max_records` | integer | No | The maximum number of records to retrieve per page. If omitted, the API returns the maximum number of records it can send in a single page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get job unprocessed record results

**Slug:** `SALESFORCE_GET_JOB_UNPROCESSED_RECORD_RESULTS`

Tool to retrieve unprocessed records from a Salesforce Bulk API 2.0 ingest job. Use when you need to get records that were not processed during a bulk operation, typically due to job abortion or interruption.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the bulk ingest job. |
| `locator` | string | No | Pagination token from the Sforce-Locator response header of a previous request, used to retrieve the next set of results. |
| `max_records` | integer | No | The maximum number of records to retrieve per page. If omitted, the API returns the maximum number of records it can send in a single page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get last selected app

**Slug:** `SALESFORCE_GET_LAST_SELECTED_APP`

Retrieves the app the current user last selected or the app the user sees by default. Use when you need to determine which application the user is currently working in or should be using.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `formFactor` | string ("Large" | "Medium" | "Small") | No | Specifies the form factor of the hardware the browser is running on. Required by the UI API; defaults to 'Large'. 'Large' for desktop, 'Medium' for tablet, 'Small' for mobile. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lead

**Slug:** `SALESFORCE_GET_LEAD`

Retrieves a specific lead by ID from Salesforce, returning all available fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lead_id` | string | Yes | The Salesforce ID of the lead to retrieve. Must be a Salesforce record ID (18-char format like '00QWd000005V3RmMAK'); names, emails, or external codes are not accepted — resolve to a Salesforce ID first using a search or query tool. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List View Header Actions

**Slug:** `SALESFORCE_GET_LIST_VIEW_ACTIONS`

Tool to retrieve header actions on list views. Use when you need to get available actions, buttons, and quick actions displayed on a specific list view header in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_view_id` | string | Yes | The 18-character ID or API name of the list view for which to retrieve header actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get batch of list view metadata

**Slug:** `SALESFORCE_GET_LIST_VIEW_METADATA_BATCH`

Tool to retrieve metadata for multiple list views in a single batch request. Use when you need to get list view configuration, columns, filters, and sorting for multiple list views at once.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_view_ids` | string | Yes | Comma-separated list of list view IDs to retrieve metadata for. Use the 18-character Salesforce list view IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list view metadata

**Slug:** `SALESFORCE_GET_LIST_VIEW_METADATA_BY_NAME`

Returns list view metadata by object and list view API name. Use when you need to retrieve complete metadata information for a specific list view, including display columns, filters, sort order, permissions, and user preferences.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject_api_name` | string | Yes | The API name of a supported Salesforce object. |
| `list_view_api_name` | string | Yes | The API name of the list view. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list view records by ID

**Slug:** `SALESFORCE_GET_LIST_VIEW_RECORDS_BY_ID`

Returns record data for a list view by its ID. Use when you need to retrieve records from a specific Salesforce list view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Additional fields queried for the records returned. These fields don't create visible columns. If the field is not available to the user, an error occurs. |
| `sort_by` | string | No | The API name of the field the list view is sorted by. If the name is preceded with '-', the sort order is descending. |
| `page_size` | integer | No | The number of list records viewed at one time. Default value is 50. Value can be 1-2000. |
| `page_token` | string | No | A token that represents the page offset used for pagination through result sets. |
| `list_view_id` | string | Yes | The ID of the list view to retrieve records from. |
| `optional_fields` | array | No | Additional fields queried for the records returned. These fields don't create visible columns. If the field is not available to the user, no error occurs and the field isn't included in the records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list view records by API name

**Slug:** `SALESFORCE_GET_LIST_VIEW_RECORDS_BY_NAME`

Retrieves paginated record data for a specified list view using the object and list view API names. Use when you need to fetch records that match a specific list view's filters and sorting criteria. Returns the same data that powers Lightning Experience list views.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `where` | string | No | Filter applied to returned records in GraphQL syntax. |
| `fields` | string | No | Comma-separated list of additional fields to query for the records returned. If a field is not available to the user, an error occurs. Example: 'Industry,AnnualRevenue,Description' |
| `sortBy` | string | No | The API name of the field to sort by. Prefix with '-' for descending order. Examples: 'Name', '-CreatedDate' |
| `pageSize` | integer | No | Number of list records to return per page. Default: 50. Valid range: 1-2000. |
| `pageToken` | string | No | Token representing the page offset for pagination. Obtained from nextPageToken in previous responses. |
| `searchTerm` | string | No | A search term to filter results. Wildcards are supported. |
| `optionalFields` | string | No | Comma-separated list of additional fields queried for the records. If a field is not available to the user, no error occurs and the field is not included. Example: 'CustomField__c,Phone' |
| `sobject_api_name` | string | Yes | The API name of a supported Salesforce object (e.g., 'Account', 'Contact', 'Opportunity', 'Lead', 'Case'). |
| `list_view_api_name` | string | Yes | The API name of a list view (e.g., 'AllAccounts', 'MyAccounts') or the 18-character list view ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list view results

**Slug:** `SALESFORCE_GET_LIST_VIEW_RESULTS`

Retrieves the results of a list view for a specified sObject. Returns column definitions and record data with a 2,000 record limit per response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject` | string | Yes | The API name of the Salesforce object (e.g., 'Account', 'Contact', 'Opportunity'). |
| `list_view_id` | string | Yes | The unique 18-character ID of the list view to retrieve results from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lookup field suggestions

**Slug:** `SALESFORCE_GET_LOOKUP_FIELD_SUGGESTIONS`

Tool to retrieve lookup field suggestions for editing lookup fields with search filtering. Use when searching for records to populate a lookup field, supporting typeahead, recent, and full-text search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Search query string used to filter and find matching records. Use for typeahead search. |
| `page` | integer | No | Page number for pagination of results. |
| `page_size` | integer | No | Number of records to return per page. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Device form factor: 'Large' for desktop, 'Medium' for tablet, 'Small' for mobile. |
| `search_type` | string ("Recent" | "Search" | "TypeAhead") | No | Type of search to perform: 'Recent' for most recently used matches, 'Search' for any match in searchable fields, 'TypeAhead' for matching names. |
| `field_api_name` | string | Yes | API name of the lookup field on the source object (e.g., 'AccountId', 'OwnerId'). |
| `object_api_name` | string | Yes | API name of the object containing the lookup field (e.g., 'Opportunity', 'Account', 'Contact'). |
| `dependent_field_bindings` | string | No | Lookup filter bindings for dependent lookups, specified as JSON string with field-value pairs for filtering. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lookup field suggestions with POST

**Slug:** `SALESFORCE_GET_LOOKUP_SUGGESTIONS_CASE_CONTACT`

Tool to get lookup field suggestions with POST request. Use when editing lookup fields with dependent lookup filtering or when you need to pass source record context in the request body.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | The search term being queried. Used with TypeAhead or Search to find matching records. Leave empty for Recent searches. |
| `page` | integer | No | The page number for paginated results. Use this to navigate through multiple pages of lookup results. |
| `page_size` | integer | No | Number of items to return per page. Controls the size of each page in paginated responses. |
| `search_type` | string | No | The type of search to perform. Valid values: 'Recent' (most recently used), 'TypeAhead' (matching names as user types), 'Search' (full search across searchable fields). |
| `source_record` | object | Yes | The source record context, including the object API name and fields. Required for dependent lookup filtering. |
| `field_api_name` | string | Yes | The API name of the lookup field (e.g., 'ContactId', 'AccountId', 'OwnerId'). |
| `object_api_name` | string | Yes | The API name of the source object containing the lookup field (e.g., 'Case', 'Opportunity', 'Account'). |
| `dependent_field_bindings` | object | No | Bindings for dependent lookup fields to apply contextual filtering based on other field values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get MRU list view metadata

**Slug:** `SALESFORCE_GET_MRU_LIST_VIEW_METADATA`

Tool to retrieve MRU list view metadata for a Salesforce object. Use when you need to understand the structure and configuration of the most recently used list view for an object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject_api_name` | string | Yes | The API name of the Salesforce object to retrieve MRU list view metadata for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get most recently used list view records

**Slug:** `SALESFORCE_GET_MRU_LIST_VIEW_RECORDS`

Tool to retrieve record data for an object's most recently used (MRU) list view. Use when you need to get the records that a user has recently accessed for a specific Salesforce object type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of additional fields to query for returned records. An error occurs if a field is unavailable to the user. |
| `sort_by` | string | No | API name of the field to sort by. Prefix with '-' for descending order (e.g., 'CreatedDate' for ascending, '-CreatedDate' for descending). |
| `page_size` | integer | No | Number of list records to view at one time. Default is 50, minimum is 1, maximum is 2000. |
| `page_token` | string | No | Token representing the page offset for pagination to retrieve subsequent pages of results. |
| `optional_fields` | string | No | Comma-separated list of additional fields to query for returned records. No error occurs if a field is unavailable to the user. |
| `sobject_api_name` | string | Yes | The API name of the Salesforce object to retrieve MRU list view records for (e.g., 'Account', 'Contact', 'Opportunity'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get note

**Slug:** `SALESFORCE_GET_NOTE`

Retrieves a specific note by ID from Salesforce, returning all available fields. Notes with IsPrivate=true require the integration user to have sufficient permissions; inaccessible private notes will not be returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | The Salesforce ID of the note to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Note with conditions

**Slug:** `SALESFORCE_GET_NOTE_BY_ID_WITH_FIELDS`

DEPRECATED: Retrieves a Salesforce Note object by its ID, optionally specifying which fields to return; the Note ID must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (ID) of the Note object to retrieve. |
| `fields` | string | No | Comma-delimited API names of fields for the Note object (e.g., 'Title,Body'). If omitted, all accessible fields are retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list views for an object

**Slug:** `SALESFORCE_GET_OBJECT_LIST_VIEWS`

Returns a collection of list views associated with a Salesforce object. Use when you need to discover available list views for an object like Account, Contact, or Opportunity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject_api_name` | string | Yes | The API name of the Salesforce object to retrieve list views for (e.g., Account, Contact, Opportunity). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get opportunity

**Slug:** `SALESFORCE_GET_OPPORTUNITY`

Retrieves a specific opportunity by ID from Salesforce, returning all available fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-delimited string of Opportunity field API names to retrieve. If omitted, all fields are returned. Custom objects may use non-standard API names for common fields (e.g., primary contact); verify exact field API names and handle null values. |
| `opportunity_id` | string | Yes | The Salesforce ID of the opportunity to retrieve. Must be a valid 15 or 18 character alphanumeric Salesforce ID (e.g., '006Wd000005FG3CIAW'). When multiple similarly named opportunities exist in search results, confirm the correct record by `Id` or other key attributes before passing the ID here. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization limits

**Slug:** `SALESFORCE_GET_ORG_LIMITS`

Tool to retrieve organization limits with max and remaining allocations. Use when you need to check API usage, storage limits, or other resource consumption in Salesforce.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get photo actions

**Slug:** `SALESFORCE_GET_PHOTO_ACTIONS`

Tool to retrieve available photo actions for Salesforce pages. Use when you need to get photo management actions for user or group pages. Currently, only group and user pages support photo actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_ids` | string | Yes | The record ID(s) for which to retrieve photo actions. Can be a single User ID or Group ID, or comma-separated list of IDs. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Specifies the device form factor for which to return actions. Large for Desktop/laptop, Medium for Tablet, Small for Mobile phone screens. If not specified, returns actions for all form factors. |
| `action_types` | string | No | Filters the types of actions to return. Can be a single value or comma-separated list. Valid values: StandardButton, QuickAction, CustomButton, ProductivityAction. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Values for All Picklist Fields

**Slug:** `SALESFORCE_GET_PICKLIST_VALUES_BY_RECORD_TYPE`

Tool to get values for all picklist fields of a record type, including dependent picklists. Use when you need to retrieve available picklist options for a specific object and record type, especially for dependent picklist hierarchies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_type_id` | string | Yes | The 18-character Record Type ID. Use '012000000000000AAA' for objects without record types (default record type). |
| `sobject_api_name` | string | Yes | The API name of the Salesforce object (e.g., 'Account', 'Contact', 'Opportunity', or custom object like 'Car__c'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get job info query

**Slug:** `SALESFORCE_GET_QUERY_JOB_INFO`

Tool to retrieve information about a Salesforce Bulk API v2 query job. Use when you need to check the status and details of a query job.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the Bulk API v2 query job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get job query result

**Slug:** `SALESFORCE_GET_QUERY_JOB_RESULTS`

Retrieves results for a completed Bulk API v2 query job in CSV format. Supports pagination for large datasets via maxRecords and locator parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique 18-character identifier for the query job whose results you want to retrieve. |
| `locator` | string | No | A Base64-encoded string used for pagination to retrieve the next set of records. This value is obtained from the Sforce-Locator response header of the previous request. Use this to traverse through subsequent pages of results. |
| `max_records` | integer | No | Defines the number of records to be downloaded per page. If omitted, the API returns the maximum number of records it can send in a single page. Used to control page size for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get quick actions

**Slug:** `SALESFORCE_GET_QUICK_ACTIONS`

Tool to retrieve global and object-specific quick actions from Salesforce. Use when you need to list all available quick actions in the organization.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get record count for objects

**Slug:** `SALESFORCE_GET_RECORD_COUNTS`

Tool to retrieve total record counts for specified Salesforce objects. Use when you need to check storage usage or understand data volume for specific sObjects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobjects` | string | Yes | Comma-separated list of Salesforce object API names to retrieve record counts for. Examples: 'Account' for a single object or 'Account,Opportunity,Contact' for multiple objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get record edit page actions

**Slug:** `SALESFORCE_GET_RECORD_EDIT_PAGE_ACTIONS`

Tool to get available actions on record edit pages. Use when you need to retrieve metadata about actions (standard actions, custom actions, quick actions, productivity actions) displayed on the record edit page for specific records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_ids` | string | Yes | Comma-separated list of 18-character Salesforce record IDs for which to retrieve record edit actions. Multiple IDs can be provided to retrieve actions for multiple records in a single request. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | The device form factor for which to retrieve actions. Valid values: 'Large' (desktop), 'Medium' (tablet), 'Small' (mobile/phone). This affects which actions are returned based on device type. |
| `action_types` | string | No | Comma-separated list of action types to filter results. Common values include: 'Standard', 'Custom', 'QuickAction', 'ProductivityAction', 'DefaultButton'. |
| `retrieval_mode` | string | No | Specifies how actions should be retrieved to control the retrieval behavior for actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get related list actions

**Slug:** `SALESFORCE_GET_RELATED_LIST_ACTIONS`

Tool to get actions on related lists for record detail pages. Use when you need to retrieve metadata about all available actions (standard buttons, quick actions, custom buttons, and productivity actions) that can be performed on records within a specific related list context.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_ids` | string | Yes | The 18-character Salesforce ID of the parent record for which to retrieve related list actions. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Device form factor to filter actions by device type. 'Large' for desktop, 'Medium' for tablet, 'Small' for mobile. |
| `action_types` | string | No | Comma-separated list of action types to filter results. Valid values: 'StandardButton', 'QuickAction', 'CustomButton', 'ProductivityAction'. |
| `retrieval_mode` | string | No | Controls data retrieval from cache or server. Specifies how actions should be retrieved. |
| `related_list_ids` | string | Yes | The API name of the related list (e.g., 'Contacts', 'Opportunities', 'Cases'). For custom objects, use the plural form with '__r' suffix (e.g., 'Custom_Objects__r'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get batch of related list user preferences

**Slug:** `SALESFORCE_GET_RELATED_LIST_PREFERENCES_BATCH`

Tool to get a batch of related list user preferences from Salesforce. Use when retrieving display preferences, column widths, or sort orders for multiple related lists simultaneously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `related_list_ids` | string | Yes | Comma-separated list of related list IDs. Each ID follows the format 'objectApiName.relatedListId' (e.g., 'Account.Contacts,Account.Opportunities'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get related list records with request body

**Slug:** `SALESFORCE_GET_RELATED_LIST_RECORDS_CONTACTS`

Tool to retrieve related list records with request body parameters for filtering and pagination. Use when you need to get records from a related list associated with a parent record with complex query parameters. Returns up to 1,999 records per related list with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `where` | string | No | Filter to apply to related list records, written in GraphQL syntax (e.g., '{Name: {like: "A%"}}'). Note: Semi-joins and anti-joins filters are currently not supported. |
| `fields` | array | No | The API names of the related list's column fields to query. Supports spanning relationships using dot notation (e.g., 'Opportunity.Account.Name'). |
| `sort_by` | array | No | An array of field API names to sort the related list by. Important: Despite being an array, it accepts only ONE value per request. |
| `page_size` | integer | No | The number of list records to return per page. Default: 50. Range: 1-1999. |
| `page_token` | string | No | Token for pagination to navigate to a specific page of results. Obtained from nextPageToken or previousPageToken in previous responses. |
| `optional_fields` | array | No | API names of additional fields in the related list that don't create visible columns. If a field is not available to the user, no error occurs - it's simply omitted from the response. |
| `related_list_id` | string | Yes | The API name of the related list or child relationship (e.g., 'Contacts', 'Opportunities', 'Cases'). This is typically the plural form of the object name. |
| `parent_record_id` | string | Yes | The 18-character Salesforce ID of the parent record for which to retrieve related lists (e.g., Account ID, Opportunity ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get report metadata

**Slug:** `SALESFORCE_GET_REPORT`

Gets detailed metadata for a specific report including its structure, columns, filters, and groupings. Only fields included in the report layout are returned; use SALESFORCE_RUN_SOQL_QUERY when specific fields outside the report layout are required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `report_id` | string | Yes | The Salesforce ID of the report to retrieve metadata for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get report instance results

**Slug:** `SALESFORCE_GET_REPORT_INSTANCE`

Gets the results of a report instance created by running a report. Poll `attributes.status` until it equals 'Success' before parsing results. Response data is nested under `factMap` and `reportExtendedMetadata`; an empty `factMap` or zero rows is a valid successful result, not an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `report_id` | string | Yes | The Salesforce ID of the report. |
| `instance_id` | string | Yes | The report instance ID returned from running a report. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get search result layouts

**Slug:** `SALESFORCE_GET_SEARCH_LAYOUT`

Retrieves search result layout information for specified sObjects. Use when you need to understand which fields are displayed in search results for objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object_names` | string | Yes | Comma-separated list of sObject API names for which to retrieve search layouts (e.g., 'Account,Contact'). Can include standard objects (Account, Contact, Lead, Opportunity, Case) and custom objects (CustomObject__c). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search suggested queries

**Slug:** `SALESFORCE_GET_SEARCH_SUGGESTIONS`

Returns a list of suggested searches based on the user's query string. Use when you want to help users discover relevant search terms before performing a search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The search query string for which to return suggested queries. This is the partial text input from the user. |
| `channel` | string ("Pkb" | "Csp" | "Prm" | "App") | Yes | The channel context for the search suggestions. Valid values: 'Pkb' (Public Knowledge Base), 'Csp' (Customer Service Portal), 'Prm' (Partner Portal), 'App' (Internal Application). |
| `sobject` | string | No | The Salesforce object type to focus the suggestions on. Limits suggestions to queries relevant to specific object types. |
| `language` | string | Yes | The language for the search suggestions. Required parameter. Use standard locale codes (e.g., 'en_US', 'fr_FR'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject by external ID

**Slug:** `SALESFORCE_GET_SOBJECT_BY_EXTERNAL_ID`

Tool to retrieve a Salesforce record by matching an external ID field value. Use when you need to find a record using a custom external identifier instead of the Salesforce ID. The field specified must be marked as an External ID in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of field names to return. If not specified, returns all fields. |
| `sobject` | string | Yes | The API name of the Salesforce object (e.g., Account, Contact, Custom__c). |
| `field_name` | string | Yes | The API name of the external ID field. Must be marked as an External ID field in the object's field definition. |
| `field_value` | string | Yes | The value of the external ID field to match. Will be URL-encoded automatically. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get multiple sObject records

**Slug:** `SALESFORCE_GET_SOBJECT_COLLECTIONS`

Tool to retrieve multiple records of the same sObject type in a single API call. Use when you need to fetch up to 200 records by their IDs. Returns an array of sObjects with the specified fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of record IDs to retrieve. Maximum 200 IDs for GET requests. Example: '001xx000003DGb2AAG,001xx000003DGb3AAG'. |
| `fields` | string | Yes | Comma-separated list of field names to retrieve for each record. Specifies which fields to return in the response. Example: 'Name,BillingCity,Email'. |
| `all_or_none` | boolean | No | If true, the entire operation rolls back if any record fails. If false (default), partial success is allowed and errors are returned for individual failed records. |
| `sobject_type` | string | Yes | The sObject type name to retrieve records from (e.g., 'Account', 'Contact', 'Lead', 'Opportunity'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject list view information

**Slug:** `SALESFORCE_GET_SOBJECT_LIST_VIEW`

Tool to retrieve basic information about a specific list view for an sObject. Use when you need to get list view metadata including its ID, label, developer name, and URLs for accessing results and detailed descriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_view_id` | string | Yes | The unique identifier (18-character ID) of the specific list view to retrieve. |
| `sobject_name` | string | Yes | The type of sObject to which the list view applies (e.g., Account, Contact, Opportunity). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list views for sObject

**Slug:** `SALESFORCE_GET_SOBJECT_LIST_VIEWS`

Tool to retrieve list views for a specified sObject. Use when you need to discover available filtered views of records for objects like Account, Contact, Lead, or Opportunity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject_name` | string | Yes | The API name of the sObject type (e.g., Account, Contact, Lead, Opportunity, Case). Required to specify which object type's list views to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get PlatformAction SObject metadata

**Slug:** `SALESFORCE_GET_SOBJECT_PLATFORMACTION`

Retrieves metadata description of PlatformAction SObject. Use when you need to understand the structure and fields of PlatformAction for querying UI actions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject Quick Action Default Values by ID

**Slug:** `SALESFORCE_GET_S_OBJECT_QUICK_ACTION_DEFAULT_VALUES`

Retrieves default field values for a quick action in a specific record context. Use when you need to pre-populate fields when creating related records through quick actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject` | string | Yes | The API name of the sObject type (e.g., Account, Contact, Case, Opportunity). |
| `context_id` | string | Yes | The ID of the parent/context record that the action is related to. Used to calculate context-specific default values based on the parent record. |
| `action_name` | string | Yes | The API name of the quick action (e.g., LogACall, NewContact, _LightningRelatedContact). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject Quick Action Default Values

**Slug:** `SALESFORCE_GET_SOBJECT_QUICK_ACTION_DEFAULT_VALUES`

Retrieves default field values for a specific quick action on an sObject. Use when you need to understand what fields will be automatically populated when executing the quick action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject` | string | Yes | The API name of the sObject type (e.g., 'Account', 'Contact', 'Task'). |
| `action_name` | string | Yes | The API name of the quick action (e.g., '_LightningRelatedContact', 'LogACall', 'NewTask'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject record by ID

**Slug:** `SALESFORCE_GET_S_OBJECT_RECORD`

Tool to retrieve a single Salesforce record by ID from any sObject type. Use when you need to get detailed information about a specific record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of field names to retrieve from the record. If omitted, all fields are returned. Example: Name,Id,CreatedDate,Industry |
| `record_id` | string | Yes | The unique Salesforce record ID (15 or 18 characters). The 3-character prefix indicates the object type (e.g., '001' for Account, '003' for Contact, '00Q' for Lead). Ensure the sobject_api_name matches the record ID prefix. |
| `sobject_api_name` | string | Yes | The API name of the Salesforce sObject type (e.g., Account, Contact, Opportunity, Custom__c). Object names are not case-sensitive. Ensure the sObject type matches the record ID prefix (e.g., Account IDs start with '001', Contact with '003', Lead with '00Q'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get records using sObject relationships

**Slug:** `SALESFORCE_GET_SOBJECT_RELATIONSHIP`

Retrieves records by traversing sObject relationships using friendly URLs. Use when you need to get related records through a relationship field (e.g., all Contacts for an Account).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The 15 or 18-character Salesforce ID of the parent record. |
| `fields` | string | No | Comma-separated list of fields to retrieve from the related records. If not specified, returns default fields. |
| `sobject` | string | Yes | The parent sObject type (e.g., 'Account', 'Contact', 'Opportunity'). Must be a valid Salesforce object type. |
| `relationship_field_name` | string | Yes | The name of the relationship field to traverse (e.g., 'Contacts' for Account.Contacts, 'Opportunities' for Account.Opportunities). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get layouts for object with record type

**Slug:** `SALESFORCE_GET_S_OBJECTS_DESCRIBE_LAYOUTS_RECORD_TYPE_ID`

Tool to retrieve layout metadata for a specific record type on an object. Use when you need detailed information about page layouts, field positioning, sections, quick actions, related lists, and buttons for a particular record type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject` | string | Yes | The API name of the Salesforce object to retrieve layout information for. |
| `record_type_id` | string | Yes | The 18-character ID of the record type for which to retrieve layout information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get approval layouts for object

**Slug:** `SALESFORCE_GET_SOBJECTS_SOBJECT_DESCRIBE_APPROVALLAYOUTS`

Retrieves approval layouts for a specified Salesforce object. Use when you need to understand which fields are displayed in approval pages or to dynamically build approval interfaces.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject_name` | string | Yes | The API name of the Salesforce object to retrieve approval layouts for. Use standard object names (Account, Contact, Opportunity, Case) or custom object API names ending in __c. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get updated sObject records

**Slug:** `SALESFORCE_GET_S_OBJECTS_UPDATED`

Tool to retrieve a list of sObject records that have been updated within a given timeframe. Use when you need to synchronize records or track changes to specific sObject types over a time period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end` | string | Yes | End of the timeframe for which to retrieve updated records. Must be in ISO 8601 format (e.g., 2025-12-23T23:59:59Z). The date range between start and end cannot exceed 30 days. |
| `start` | string | Yes | Start of the timeframe for which to retrieve updated records. Must be in ISO 8601 format (e.g., 2025-12-23T10:22:26Z). Cannot be more than 30 days ago from the current date. |
| `sobject` | string | Yes | The API name of the sObject type to query for updated records (e.g., Account, Contact, CustomObject__c). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get support knowledge

**Slug:** `SALESFORCE_GET_SUPPORT`

Retrieves the root of the Support Knowledge REST API. Use when you need to access knowledge articles and data category information.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get directory of supported objects

**Slug:** `SALESFORCE_GET_SUPPORTED_OBJECTS_DIRECTORY`

Tool to get a Salesforce org's active theme and directory of supported objects. Use when you need to discover available objects that are supported by the User Interface API, including their CRUD permissions, labels, and theme information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Comma-separated list of object API names to filter the response. When provided, only returns metadata for the specified objects. If omitted, returns all available objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get support knowledge articles

**Slug:** `SALESFORCE_GET_SUPPORT_KNOWLEDGE_ARTICLES`

Retrieves user's visible knowledge articles and data categories from Salesforce Knowledge. Use when you need to access published, draft, or archived articles based on user permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string | No | Sort order for results (e.g., 'mostViewed'). |
| `topics` | string | No | Filter articles by topics. |
| `channel` | string ("App" | "Pkb" | "Csp" | "Prm") | No | Specifies the visibility channel through which articles are accessed. Valid values: 'App' (internal app), 'Pkb' (public knowledge base), 'Csp' (customer portal), 'Prm' (partner portal). |
| `page_size` | integer | No | Number of articles to return per page for pagination. |
| `categories` | string | No | Filters articles by data category groups and categories. Format varies based on category structure. |
| `page_number` | integer | No | Page number for paginated results. |
| `publish_status` | string ("Draft" | "Online" | "Archived") | No | Filter by publication status. Values: 'Draft', 'Online' (published), 'Archived'. Note: Requires 'Manage Articles' permission for 'Online' status. In API version 47.0+ with Lightning Knowledge, all statuses are returned by default. |
| `accept_language` | string | No | Language for the knowledge articles. Must be specified in HTTP header format (e.g., 'en-US', 'en-US,en;q=0.9'). This field is required by the Salesforce API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get theme

**Slug:** `SALESFORCE_GET_THEME`

Tool to get icons and colors for Salesforce UI themes. Use when you need to retrieve theme information for objects in the organization.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lookup field actions

**Slug:** `SALESFORCE_GET_UI_API_ACTIONS_LOOKUP_ACCOUNT`

Tool to get lookup field actions for a Salesforce object. Use when you need to retrieve available actions for lookup fields on a specific object type (e.g., Account, Contact).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sections` | string | No | Comma-separated list of action sections to include in the response. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | The device form factor for which to retrieve actions. Valid values: 'Large' (desktop), 'Medium' (tablet), 'Small' (mobile). |
| `action_types` | string | No | Comma-separated list of action types to filter (e.g., 'standard,custom'). |
| `object_api_name` | string | No | The API name of the object for which to retrieve lookup field actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get MRU List View Actions

**Slug:** `SALESFORCE_GET_UIAPI_ACTIONS_MRU_LIST_ACCOUNT`

Tool to retrieve header actions available on the MRU (Most Recently Used) list view for a specified Salesforce object. Use when you need to get available actions, buttons, and quick actions for an object's list view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_factor` | string | No | Specifies the device form factor for which to return actions (e.g., 'Large' for desktop, 'Small' for mobile). |
| `action_types` | string | No | Filters the types of actions to return. Can be used to limit the response to specific action categories. |
| `object_api_name` | string | No | The API name of the Salesforce object for which to retrieve MRU list view actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get related list actions

**Slug:** `SALESFORCE_GET_UI_API_ACTIONS_RECORD_RELATED_LIST`

Tool to get available actions on related lists for a record detail page. Use when you need to retrieve metadata about actions (standard actions, custom actions, quick actions, productivity actions) displayed on related lists for a specific parent record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The 18-character ID of the parent record for which to retrieve related list actions. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | The form factor of the device running the browser. Valid values: 'Large' (desktop), 'Medium' (tablet), 'Small' (phone). This affects which actions are returned based on device type. |
| `action_types` | string | No | Comma-separated list of action types to filter results. Common values include: 'Standard', 'Custom', 'QuickAction', 'ProductivityAction', 'DefaultButton'. |
| `retrieval_mode` | string | No | Specifies how actions should be retrieved to control the retrieval behavior for actions. |
| `related_list_ids` | string | No | Comma-separated list of related list API names to filter the actions. For custom objects, use the plural form with '__r' suffix (e.g., 'Custom_Objects__r'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Personalized Navigation Items

**Slug:** `SALESFORCE_GET_UI_API_APPS_USER_NAV_ITEMS`

Tool to get personalized navigation items for a specific Salesforce app. Use when you need to retrieve the navigation tabs that a user has access to within an application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page offset starting position (default: 0). Example: page=2 with pageSize=10 returns items 21-30. |
| `app_id` | string | Yes | The ID of the Salesforce application for which to retrieve navigation items. |
| `page_size` | integer | No | Maximum number of navigation items per page (default: 25). |
| `form_factor` | string | No | Specifies the device form factor for which to retrieve navigation items. Valid values: 'Large' (desktop, default), 'Medium' (tablet), or 'Small' (phone). |
| `nav_item_names` | array | No | List of TabDefinition name values to include. If omitted, returns all navigation items for the specified form factor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account AllAccounts list view metadata

**Slug:** `SALESFORCE_GET_UIAPI_LIST_INFO_ACCOUNT_ALL_ACCOUNTS`

Retrieves list view metadata for the Account AllAccounts view using Salesforce UI API. Use when you need to understand the structure, columns, filters, and sorting of the standard AllAccounts list view.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List View Metadata

**Slug:** `SALESFORCE_GET_UIAPI_LIST_INFO_ACCOUNT_RECENT`

Tool to get list view metadata from Salesforce UI API. Use when you need to retrieve configuration details for a list view including columns, filters, sorting, and permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object_api_name` | string | No | The API name of the Salesforce object. Examples: Account, Contact, Lead, Opportunity, CustomObject__c. |
| `list_view_api_name` | string | No | The API name of the list view. Examples: AllAccounts, MyAccounts, __Recent. Special values like __Recent represent system-defined list views. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account SearchResult list view metadata

**Slug:** `SALESFORCE_GET_UIAPI_LIST_INFO_ACCOUNT_SEARCH_RESULT`

Retrieves list view metadata for the Account __SearchResult view using Salesforce UI API. Use when you need to understand the structure, columns, filters, and sorting of search results for Accounts.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List Views for Object

**Slug:** `SALESFORCE_GET_UI_API_LIST_INFO_RECENT`

Tool to get list views for a Salesforce object. Use when you need to retrieve available list views with options to filter by recent usage and search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Search term to filter list view results. Supports wildcards. |
| `page_size` | integer | No | Number of list view records to return per page. Valid range: 1-2000. Default: 20. |
| `page_token` | integer | No | Page offset for pagination. Maximum offset: 2000. Default: 0. |
| `object_api_name` | string | No | The API name of the Salesforce object to retrieve list views for. Examples: Account, Contact, Lead, Opportunity, CustomObject__c. |
| `recent_lists_only` | boolean | No | When true, returns only recently used list views. When false, returns all list views for the object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get MRU List Info for Account

**Slug:** `SALESFORCE_GET_UIAPIMRU_LIST_INFO_ACCOUNT`

Tool to get Most Recently Used (MRU) list view metadata for Account object. Use when you need to retrieve list view settings, display columns, and preferences. Note: This endpoint is deprecated and no longer updates.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get MRU List Records for Account

**Slug:** `SALESFORCE_GET_UI_API_MRU_LIST_RECORDS_ACCOUNT`

Tool to get Most Recently Used (MRU) list view records for Account object. Use when you need to retrieve recently accessed Account records. Note: This endpoint is deprecated and no longer updates. It is not part of the Services under your Main Services Agreement with Salesforce and is for evaluation purposes only, not for production use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Additional fields queried for the records returned that don't create visible columns. If the field is not available to the user, an error occurs. |
| `sort_by` | string | No | The API name of the field the list view is sorted by. If the name is preceded with '-', the sort order is descending. Example: 'CreatedDate' (ascending) or '-CreatedDate' (descending). |
| `page_size` | integer | No | The number of list records viewed at one time. Default value is 50. Value can be 1-2000. |
| `page_token` | string | No | Token representing the page offset for pagination. Used to retrieve subsequent pages of results. |
| `optional_fields` | array | No | Additional fields queried for the records returned that don't create visible columns. If the field is not available to the user, no error occurs and the field isn't included in the records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get record UI data and metadata

**Slug:** `SALESFORCE_GET_UI_API_RECORD_UI`

Tool to retrieve layout, field metadata, and record data in a single response. Use when you need comprehensive information including UI layout configuration, object metadata, and actual record values with child relationships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `modes` | string | No | Comma-separated access modes for the record. Valid values: 'Create' (for creating records), 'Edit' (for editing records), 'View' (for displaying records). Determines which fields to get from layout. |
| `page_size` | integer | No | Number of child relationship records per page. Default: 5. |
| `record_ids` | string | Yes | Comma-separated list of up to 200 record IDs. All IDs must be from supported objects. |
| `form_factor` | string ("Large" | "Medium" | "Small") | No | Specifies device form factor. Valid values: 'Large' (desktop), 'Medium' (tablet), 'Small' (mobile phone). |
| `layout_types` | string | No | Comma-separated layout types to return. Valid values: 'Compact' (key fields layout), 'Full' (full layout). |
| `optional_fields` | string | No | Comma-separated list of additional field names to include in format ObjectApiName.FieldApiName. If field is accessible to user, it's included in response; otherwise silently omitted without error. |
| `child_relationships` | string | No | Comma-separated list of child relationships to include in format ObjectApiName.ChildRelationshipName (e.g., 'Account.Contacts,Account.Opportunities'). Child records are paginated with default pageSize of 5. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get related list user preferences

**Slug:** `SALESFORCE_GET_UIAPI_RELATED_LIST_PREFERENCES`

Tool to retrieve user preferences for a specific related list on an object. Use when you need to get display settings, column widths, or sort preferences for related lists in Salesforce UI.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object_api_name` | string | Yes | The API name of the parent object whose related list preferences you want to retrieve. |
| `related_list_id` | string | Yes | The API name of the related list for which you want to retrieve user preferences. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user info

**Slug:** `SALESFORCE_GET_USER_INFO`

Retrieves information about the current user or a specific user in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | No | The Salesforce User ID to retrieve information for. If not provided, returns current user info. |
| `include_permissions` | boolean | No | Whether to include user permissions in the response (requires additional API call). Requires elevated access; permission data is returned inside salesforce_user_details and may be partially masked based on the user's profile. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom actions headers

**Slug:** `SALESFORCE_HEAD_ACTIONS_CUSTOM`

Tool to return HTTP headers for custom invocable actions without response body. Use when you need to check resource availability and metadata before executing full requests or to validate resource state conditionally.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `if_unmodified_since` | string | No | Conditional header that returns data only if the resource hasn't been modified since the specified date. Uses HTTP date format (RFC 7231). Example: 'Wed, 21 Oct 2015 07:28:00 GMT'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get standard actions headers

**Slug:** `SALESFORCE_HEAD_ACTIONS_STANDARD`

Tool to return HTTP headers for standard invocable actions metadata without response body. Use when you need to perform efficient cache validation, check for metadata changes, or reduce bandwidth usage before retrieving full action metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `if_modified_since` | string | No | Conditional header that returns data only if the resource has been modified since the specified date. Uses HTTP date format (RFC 2822/7232). Example: 'Thu, 05 Jul 2012 15:31:30 GMT'. If not modified, returns 304 status code. |
| `if_unmodified_since` | string | No | Conditional header that returns data only if the resource hasn't been modified since the specified date. Uses HTTP date format (RFC 2822/7232). Example: 'Tue, 10 Aug 2015 00:00:00 GMT'. If modified, returns 412 status code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AppMenu Salesforce1 headers

**Slug:** `SALESFORCE_HEAD_APPMENU_SALESFORCE1`

Tool to return HTTP headers for AppMenu Salesforce1 mobile navigation items without response body. Use when you need to check resource metadata, validate cache (via ETag or Last-Modified), or test endpoint availability without data transfer overhead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `if_none_match` | string | No | Entity tag (ETag) for conditional request. If the resource matches this ETag, returns 304 Not Modified. |
| `if_modified_since` | string | No | Timestamp for conditional request. Request succeeds only if data changed since specified date/time, otherwise returns 304 Not Modified. Format: RFC 2822 date-time (e.g., 'Mon, 15 Jan 2024 12:00:00 GMT'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get process rules headers

**Slug:** `SALESFORCE_HEAD_PROCESS_RULES_S_OBJECT`

Tool to return HTTP headers for process rules of an sObject without retrieving the response body. Use when you need to check if process rules exist for an sObject or retrieve metadata like ETag and Last-Modified headers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sobject` | string | Yes | The Salesforce object name (sObject) to retrieve process rules headers for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Quick Actions headers

**Slug:** `SALESFORCE_HEAD_QUICK_ACTIONS`

Tool to return HTTP headers for Quick Actions resource without response body. Use when you need to inspect metadata before retrieving full Quick Actions content or to validate resource availability.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get quick action default values headers by ID

**Slug:** `SALESFORCE_HEAD_SOBJECT_QUICK_ACTION_DEFAULT_VALUES`

Tool to return HTTP headers for sObject quick action default values by context ID without response body. Use when you need to check resource availability, verify cache validation headers (ETag, Last-Modified), or optimize API calls by avoiding unnecessary data transfer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `context_id` | string | Yes | The record ID that provides context for retrieving the default values. This is typically the ID of an existing record (Account, Contact, Lead, Opportunity, etc.) that the quick action is being invoked from. |
| `action_name` | string | Yes | The API name of the quick action (e.g., 'LogACall', 'NewTask', 'NewContact', 'SendEmail'). This is the specific action you want to get headers for. |
| `sobject_type` | string | Yes | The sObject type (e.g., 'Account', 'Contact', 'Lead', 'Opportunity'). This specifies which sObject the quick action belongs to. |
| `if_none_match` | string | No | ETag value for conditional requests. Returns 304 Not Modified if content hasn't changed since the specified ETag. |
| `if_modified_since` | string | No | Date format: EEE, dd MMM yyyy HH:mm:ss z. Returns 304 Not Modified if the action metadata has not changed since the specified date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get global publisher layouts headers

**Slug:** `SALESFORCE_HEAD_SOBJECTS_GLOBAL_DESCRIBE_LAYOUTS`

Tool to return HTTP headers for all global publisher layouts without response body. Use when implementing cache validation strategies, efficient resource polling, or checking if layouts have been modified without transferring layout data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `if_none_match` | string | No | ETag value for strong validation. Request succeeds only if the resource's ETag doesn't match the provided value(s). Multiple ETags can be specified as comma-separated values. |
| `if_modified_since` | string | No | Timestamp for weak validation. Request succeeds only if the resource has been modified since the specified date and time. Format: HTTP date (RFC 7231). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sObject quick action headers

**Slug:** `SALESFORCE_HEAD_SOBJECTS_QUICK_ACTION`

Tool to return HTTP headers for a specific sObject quick action without response body. Use when you need to check ETag or Last-Modified headers before fetching full content or to validate quick action availability.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action_name` | string | Yes | The specific quick action name for which to retrieve headers (e.g., NewCase, LogACall, SendEmail). |
| `sobject_type` | string | Yes | The sObject type for which to retrieve quick action headers (e.g., Account, Contact, Case, Lead). |
| `if_none_match` | string | No | ETag value for conditional requests. Returns 304 Not Modified if content hasn't changed since the specified ETag. |
| `if_modified_since` | string | No | Time-based conditional header that returns data only if the resource has been modified since the specified date. Uses HTTP date format (RFC 7231). Example: 'Wed, 21 Oct 2015 07:28:00 GMT'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User password headers

**Slug:** `SALESFORCE_HEAD_SOBJECTS_USER_PASSWORD`

Tool to return HTTP headers for User password resource without response body. Use when you need to check user password metadata and expiration status efficiently without retrieving the full response content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The Salesforce User record identifier (18-character User ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List accounts

**Slug:** `SALESFORCE_LIST_ACCOUNTS`

Lists accounts from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Results paginate via nextRecordsUrl with up to ~2000 rows per page. REQUEST_LIMIT_EXCEEDED requires exponential backoff; INVALID_FIELD or INSUFFICIENT_ACCESS_OR_READONLY errors indicate profile or field-level restrictions — simplify SELECT/WHERE clauses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch accounts. Use standard SOQL syntax to filter, sort, and limit results. Always include WHERE and LIMIT clauses to avoid oversized responses. Avoid FIELDS(ALL) without LIMIT. Website and Phone are frequently null; avoid filtering on them without tolerating null values. To include parent-child relationships, explicitly add ParentId or Parent.Name to the SELECT clause. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Analytics templates

**Slug:** `SALESFORCE_LIST_ANALYTICS_TEMPLATES`

Tool to list CRM Analytics templates available in the org. Use when you need to discover available templates for creating Analytics apps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-based indexing). Specifies which page of results to retrieve. |
| `type` | string ("App" | "Dashboard" | "Data" | "Embedded" | "Lens") | No | Filter templates by type. App returns app templates, Dashboard returns dashboard templates, Data returns data templates, Embedded returns embedded templates, Lens returns lens templates. |
| `options` | string ("CreateApp" | "ManageableOnly" | "ViewOnly") | No | Filter templates by visibility. CreateApp returns templates that can be used to create apps, ManageableOnly returns templates the user can manage, ViewOnly returns templates the user can only view. |
| `pageSize` | integer | No | Number of results per page. Controls how many template records are returned in a single response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List campaigns

**Slug:** `SALESFORCE_LIST_CAMPAIGNS`

Lists campaigns from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Results returned under `response_data.records`; use `Id` (not `Name`) to identify campaigns in downstream operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch campaigns. Use standard SOQL syntax to filter, sort, and limit results. To disambiguate similarly named campaigns, filter on `Type`, `Status`, `StartDate`, or `EndDate`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List contacts

**Slug:** `SALESFORCE_LIST_CONTACTS`

Lists contacts from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Results are returned under `response_data.records`; check `response_data.done` and `response_data.totalSize` for pagination — use OFFSET or `nextRecordsUrl` until `done=true` to retrieve all records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch contacts. Use standard SOQL syntax to filter, sort, and limit results. String literals must be single-quoted. Use correct field API names and relationship traversal (e.g., `Account.Industry`). To filter unassociated contacts use `AccountId = NULL`. Omitting an `AccountId` or `Account.Name` filter returns contacts across all accounts. Nullable fields like `LastActivityDate` require explicit null checks; use `ORDER BY ... NULLS FIRST` for null-safe sorting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom invocable actions

**Slug:** `SALESFORCE_LIST_CUSTOM_INVOCABLE_ACTIONS`

Retrieves the list of custom actions including Flow actions, Apex actions, and invocable processes. Use when you need to discover available custom invocable actions in your Salesforce organization.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List dashboards

**Slug:** `SALESFORCE_LIST_DASHBOARDS`

Lists dashboards with basic metadata including name, ID, and URLs. Note: the Analytics REST API (GET /analytics/dashboards) returns only up to ~200 recently-viewed dashboards, not the org's entire dashboard catalog.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List email templates

**Slug:** `SALESFORCE_LIST_EMAIL_TEMPLATES`

Lists available email templates in Salesforce with filtering and search capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of templates to return. |
| `order_by` | string | No | Field to sort results by. |
| `folder_name` | string | No | Filter by folder name to get templates from a specific folder. |
| `search_term` | string | No | Search term to filter templates by name. Uses LIKE operator for partial matches. |
| `include_body` | boolean | No | Whether to include the template body content in results. Note: This may increase response size significantly. |
| `template_type` | string | No | Filter by template type. Common values: text, custom, html, visualforce. |
| `is_active_only` | boolean | No | Whether to return only active templates. Set to false to include inactive templates. |
| `order_direction` | string | No | Sort direction: ASC for ascending, DESC for descending. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List leads

**Slug:** `SALESFORCE_LIST_LEADS`

Lists leads from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Results are paginated; follow nextRecordsUrl in the response to retrieve subsequent pages — the first page may silently omit matching records beyond the page limit.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch leads. Use standard SOQL syntax to filter, sort, and limit results. Field API names must be exact (e.g., LeadSource, LastModifiedDate) — invalid names cause MALFORMED_QUERY errors. Date literals like TODAY use the org timezone; use explicit ranges (e.g., LastModifiedDate >= TODAY AND LastModifiedDate < TOMORROW) to avoid boundary misses. Filter null Email with WHERE Email != null when downstream steps require it. Narrow LastModifiedDate ranges to avoid row-limit truncation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List notes

**Slug:** `SALESFORCE_LIST_NOTES`

Lists notes from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Designed specifically for Note and ContentNote objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch notes. Use standard SOQL syntax to filter, sort, and limit results. This action is specifically designed for Note and ContentNote objects. For other objects like EmailMessage (which uses 'Subject' instead of 'Title'), use the general SOQL query action instead. Always include a LIMIT clause to avoid over-fetching; the default query has no LIMIT and may return very large payloads. Omit Body or use TextPreview (ContentNote only) when full note content is not needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List opportunities

**Slug:** `SALESFORCE_LIST_OPPORTUNITIES`

Lists opportunities from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Results are paginated up to ~2000 rows per batch; check `done`, `totalSize`, and `nextRecordsUrl` fields to detect and retrieve additional pages, or use a SOQL `LIMIT` clause to cap results. For complex queries rejected by this tool, use `SALESFORCE_RUN_SOQL_QUERY` instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch opportunities. Use standard SOQL syntax to filter, sort, and limit results.  Omitting a `WHERE` clause returns all opportunities including historical ones. Results have no default sort order; include `ORDER BY CloseDate DESC` to retrieve recent opportunities first.IMPORTANT: Only use standard Salesforce fields unless you have confirmed that custom fields exist in the target org. Custom fields (ending with '__c') are org-specific and may not exist in all Salesforce instances. For relationship queries (e.g., Owner.Name), only use standard fields on the related object. To discover available fields, use the SALESFORCE_GET_ALL_FIELDS_FOR_OBJECT action first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pricebook entries

**Slug:** `SALESFORCE_LIST_PRICEBOOK_ENTRIES`

Lists pricebook entries from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Use this to map product names to pricebook entry IDs needed for opportunity line items. When using returned IDs with SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM, always filter with WHERE IsActive = true — inactive entries cause REQUIRED_FIELD_MISSING or INVALID_CROSS_REFERENCE_KEY errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch pricebook entries. Use standard SOQL syntax to filter, sort, and limit results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pricebooks

**Slug:** `SALESFORCE_LIST_PRICEBOOKS`

Lists pricebooks from Salesforce using SOQL query, allowing flexible filtering, sorting, and field selection. Use this to map pricebook names to IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | SOQL query to fetch pricebooks. Use standard SOQL syntax to filter, sort, and limit results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List reports

**Slug:** `SALESFORCE_LIST_REPORTS`

Lists reports with basic metadata including name, ID, and URLs. Note: the Analytics REST API (GET /analytics/reports) returns only up to ~200 recently-viewed reports, not the org's entire report catalog.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get standard invocable actions

**Slug:** `SALESFORCE_LIST_STANDARD_INVOCABLE_ACTIONS`

Retrieves the list of standard actions that can be statically invoked. Use when you need to discover available standard invocable actions like posting to Chatter, sending email, or sending custom notifications.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Log call

**Slug:** `SALESFORCE_LOG_CALL`

Logs a completed phone call as a task in Salesforce with call-specific details like duration, type, and disposition.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `who_id` | string | No | ID of the Contact or Lead associated with the call. Invalid or non-existent IDs create orphaned or mislinked activity records. |
| `subject` | string | No | Subject line for the call log. Defaults to 'Call'. |
| `what_id` | string | No | ID of the related record (Account, Opportunity, Case, etc.) associated with the call. |
| `comments` | string | No | Detailed notes or description of what was discussed during the call. |
| `call_date` | string | No | Date of the call in YYYY-MM-DD format. Defaults to today if not specified. |
| `call_type` | string ("Inbound" | "Outbound" | "Internal") | No | Standard Salesforce Task CallType values. This is a restricted picklist. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Call_Outcome__c'). |
| `call_disposition` | string | No | Outcome or result of the call. Restricted picklist — only org-configured values are accepted; unlisted values cause validation errors. |
| `call_duration_seconds` | integer | No | Duration of the call in seconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Log email activity

**Slug:** `SALESFORCE_LOG_EMAIL_ACTIVITY`

Creates an EmailMessage record to log email activity in Salesforce, associating it with related records. Requires EmailMessage insert permissions enabled at the org level; some orgs block this entirely.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Status of the email. 0=New, 1=Read, 2=Replied, 3=Sent, 4=Forwarded, 5=Draft |
| `subject` | string | Yes | Subject line of the email. |
| `html_body` | string | No | HTML body of the email. If provided, takes precedence over text_body for display. |
| `parent_id` | string | No | ID of the parent record, typically a Case for case-related emails. |
| `text_body` | string | No | Plain text body of the email. |
| `cc_address` | string | No | CC email addresses (comma-separated if multiple). |
| `to_address` | string | Yes | Email addresses of the recipients (comma-separated if multiple). |
| `bcc_address` | string | No | BCC email addresses (comma-separated if multiple). |
| `is_incoming` | boolean | No | Whether this is an incoming email (true) or outgoing email (false). |
| `from_address` | string | Yes | Email address of the sender. |
| `message_date` | string | No | Date/time the email was sent in ISO format. Defaults to current time if not provided. Must be an explicit ISO datetime string; relative expressions like 'yesterday' cause validation errors. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Email_Category__c'). |
| `related_to_id` | string | Yes | ID of the record to associate this email with (Account, Opportunity, Case, etc.). Must reference a supported object type (Account, Opportunity, Case, Contact, Lead, etc.); unsupported object types cause validation errors or create standalone records invisible on timelines. |
| `is_client_managed` | boolean | No | Whether the email is client-managed (not sent through Salesforce). |
| `is_externally_visible` | boolean | No | Whether the email is visible in customer portals/communities. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mass transfer ownership

**Slug:** `SALESFORCE_MASS_TRANSFER_OWNERSHIP`

Transfers ownership of multiple records to a new owner in a single operation using Salesforce's composite API for better performance. Operation has no rollback; all provided records are reassigned immediately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_ids` | array | Yes | List of record IDs to transfer ownership. Maximum 200 records per request (sObject Collections PATCH cap). |
| `object_type` | string | Yes | The Salesforce object type for the records to transfer (e.g., Account, Contact, Lead, Opportunity). |
| `new_owner_id` | string | Yes | The user ID of the new owner to transfer records to. |
| `trigger_assignment_rules` | boolean | No | Whether to trigger Salesforce assignment rules when transferring records. Applies mainly to Leads and Cases where assignment rules may reassign the record or send notifications. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Parameterized Search

**Slug:** `SALESFORCE_PARAMETERIZED_SEARCH`

Tool to execute RESTful search using parameters instead of SOSL clause. Use when you need to search across Salesforce objects with simple GET requests (URL parameters) or complex POST requests (JSON body with advanced filtering). POST method supports DataCategories, networks, orderBy constraints, and per-object filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The search string to search for across Salesforce objects. This is the primary search term. |
| `in` | string | No | Search scope specifying which fields to search. Valid values: ALL, NAME, EMAIL, PHONE, SIDEBAR. Defaults to ALL. |
| `where` | string | No | Global filter conditions for the search results. Use standard SOQL WHERE clause syntax (without the 'WHERE' keyword). |
| `fields` | string | No | For GET: comma-separated string of fields in format 'Object.field1,Object.field2'. For POST: array of field names to return globally across all objects. |
| `method` | string ("GET" | "POST") | No | HTTP method to use. Use GET for simple searches with URL parameters, or POST for complex searches with JSON body including advanced filtering. |
| `sobjects` | string | No | For GET: comma-separated string of object names (e.g., 'Account,Contact'). For POST: array of SObjectFilter objects with name, fields, and where clauses. |
| `overallLimit` | integer | No | Maximum number of results to return across all objects. Helps control result set size. |
| `spellCorrection` | boolean | No | Enable spell correction for search terms to find results even with misspelled queries. |
| `defaultSearchScope` | string | No | Default search scope for the query when not explicitly specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert records using external ID

**Slug:** `SALESFORCE_PATCH_COMPOSITE_SOBJECTS`

Tool to upsert up to 200 records using external ID field matching. Use when you need to create or update multiple records efficiently in a single API call based on an external ID field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `records` | array | Yes | Array of record objects to upsert. Maximum 200 records. Each record must include the 'attributes' object with the 'type' field, and the external ID field value for matching. |
| `all_or_none` | boolean | No | Controls transaction behavior. If true, rolls back all changes if any record fails. If false (default), commits successful records even if others fail. |
| `sobject_name` | string | Yes | The API name of the Salesforce object (e.g., 'Account', 'Contact', 'CustomObject__c'). |
| `external_id_field_name` | string | Yes | The API name of the external ID field to use for matching records (e.g., 'External_Account_ID__c', 'Id'). This field must be defined as an external ID field in Salesforce. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute Composite Graph

**Slug:** `SALESFORCE_POST_COMPOSITE_GRAPH`

Tool to execute multiple related REST API requests in a single transactional call with up to 500 subrequests per graph. Use when you need to perform multiple Salesforce operations atomically where all operations must succeed or fail together. Supports referencing output from one request as input to subsequent requests using @{referenceId.fieldName} syntax.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `graphs` | array | Yes | Array of graph objects. Each graph can contain up to 500 subrequests and reach up to 15 levels of depth. All operations within a graph succeed or fail together. Subrequests in one graph cannot reference subrequests from another graph. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create records using sObject Collections

**Slug:** `SALESFORCE_POST_COMPOSITE_SOBJECTS`

Tool to create up to 200 records in one request using sObject Collections. Use when you need to create multiple records of potentially different sObject types efficiently in a single API call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `records` | array | Yes | Array of sObject records to create. Minimum 1 record, maximum 200 records per request. Each record must include an 'attributes' object with the 'type' field specifying the sObject API name (e.g., Account, Contact), followed by field name-value pairs. Records are created in the order listed. |
| `all_or_none` | boolean | No | Determines whether the request should be processed atomically. When true, all records must succeed or the entire request is rolled back. When false (default), partial success is allowed and each record is processed independently. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Parameterized Search

**Slug:** `SALESFORCE_POST_PARAMETERIZED_SEARCH`

Tool to execute parameterized search across Salesforce objects with advanced filtering. Use when you need to search for records using specific search terms with fine-grained control over which objects to search, which fields to return, and additional filtering criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The search string to search for across Salesforce objects. This is the primary search term used in the SOSL FIND clause. |
| `in` | string ("ALL" | "NAME" | "EMAIL" | "PHONE" | "SIDEBAR") | No | Search scope specifying which fields to search. Valid values: 'ALL' (ALL FIELDS), 'NAME' (NAME FIELDS), 'EMAIL' (EMAIL FIELDS), 'PHONE' (PHONE FIELDS), 'SIDEBAR' (SIDEBAR FIELDS). Defaults to 'ALL'. |
| `where` | string | No | Global WHERE clause applied to all sObjects (without the WHERE keyword). Uses standard SOQL WHERE clause syntax. |
| `fields` | array | No | Default fields to return for all sObjects if not specified per object. Field API names like ['Id', 'Name', 'Email']. |
| `sobjects` | array | No | Array of sObject specifications to limit search scope. Each object specifies which Salesforce object type to search and optional filters. |
| `defaultLimit` | integer | No | Default limit per sObject when not specified in the sobjects array. Default is 25. |
| `overallLimit` | integer | No | Maximum total number of records to return across all sObjects. Default is 2000, maximum is 2000. |
| `spellCorrection` | boolean | No | Enable spell correction for search terms. Default is true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute SOQL Query (Deprecated)

**Slug:** `SALESFORCE_QUERY`

DEPRECATED: Use SALESFORCE_RUN_SOQL_QUERY instead. Tool to execute SOQL queries against Salesforce. Use when you need to retrieve data from Salesforce objects using SOQL syntax. Returns up to 2000 records per request with pagination support via nextRecordsUrl.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The SOQL query string to execute. Must be a valid SOQL statement (e.g., 'SELECT Name FROM Account'). The query will be automatically URL-encoded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query All (including deleted)

**Slug:** `SALESFORCE_QUERY_ALL`

Tool to execute SOQL queries including soft-deleted and archived records. Use when you need to query records that have been deleted via merge or delete operations, or when accessing archived Task and Event records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The SOQL query to execute. Unlike standard queries, QueryAll includes soft-deleted records (from merge or delete operations) and archived Task/Event records. Example: 'SELECT Id, Name FROM Account WHERE IsDeleted = true'. Use standard SOQL syntax. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query contacts by name

**Slug:** `SALESFORCE_QUERY_CONTACTS_BY_NAME`

DEPRECATED: Finds Salesforce Contact records by name using a case-insensitive search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of contact records to return. |
| `fields` | string | No | Comma-separated list of Salesforce Contact object field API names to retrieve. Common field API names include: Id, Name, FirstName, LastName, Email, Phone, MobilePhone, Title, AccountId. |
| `contact_name` | string | Yes | The name or partial name to search for within the 'Name' field of Salesforce Contact records. Supports partial matches (e.g., 'John' will find 'John Smith', 'John Doe', etc.). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query more (next page of SOQL results)

**Slug:** `SALESFORCE_QUERY_MORE`

Retrieve the next page of SOQL results using a query locator (GET /query/{queryLocator}). SOQL queries return at most ~2000 rows per response plus a nextRecordsUrl when more remain; this action follows that locator. Call it repeatedly, passing each response's nextRecordsUrl, until done=true. Without it, run_soql_query / query results beyond the first page are unreachable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `next_records_url` | string | Yes | The nextRecordsUrl from a previous query / queryAll / run_soql_query response where done=false. Pass it exactly as returned — the relative path '/services/data/v<ver>/query/<locator>' (or '/queryAll/<locator>'). Call this action repeatedly, passing each response's nextRecordsUrl, until done=true. (Bare locator tokens and absolute URLs are not accepted — the query vs queryAll resource is only known from the path.) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query report

**Slug:** `SALESFORCE_QUERY_REPORT`

DEPRECATED: Executes a Salesforce report synchronously by its `id` and `reportType`, optionally with dynamic ad-hoc adjustments like filters or groupings, and returns its data without modifying the saved report.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (ID) of the report to query. |
| `name` | string | No | The display name of the report. This is typically used for display purposes and may not be unique. |
| `chart` | array | No | Configuration for the chart to be displayed with the report, if any. |
| `scope` | string | No | Defines the scope of the data on which you run the report. For example, you can run the report against all opportunities, opportunities you own, or opportunities your team owns. Valid values depend on the report type. |
| `sortBy` | array | No | A list of dictionaries specifying the columns and direction for sorting the report data. Each dictionary should define 'column' (API name) and 'sortOrder' ('asc' or 'desc'). |
| `buckets` | array | No | A list of bucket field definitions to apply to the report. |
| `topRows` | object | No | Limits report output to a specified number of top or bottom rows. |
| `currency` | string ("USD" | "EUR" | "GBP" | "CAD" | "AUD" | "JPY" | "CHF" | "CNY" | "INR" | "BRL" | "MXN" | "SGD" | "NZD" | "HKD") | No | Supported currency codes for reports. |
| `division` | string | No | Determines the division of records to include in the report (e.g., West Coast, East Coast). Available only if your organization uses divisions to segment data and you have the 'Affected by Divisions' permission. If you do not have this permission, reports include records in all divisions. |
| `folderId` | string | No | The ID of the folder where the report is stored. Necessary if identifying the report by `developerName` within a specific folder. |
| `aggregates` | array | No | List of aggregate field identifiers to include in the report (e.g., sum of Amount as 's!Amount', average of Amount as 'a!Amount'). |
| `reportType` | object | Yes | Specifies the type of the report, including its unique API name (`type`) and display name (`label`). This defines the objects and fields available for reporting. |
| `crossFilters` | array | No | A list of cross-object filters to apply to the report. |
| `reportFormat` | string ("TABULAR" | "SUMMARY" | "MATRIX" | "MULTI_BLOCK") | Yes | The desired format for the report output. Determines the structure of the data returned. |
| `detailColumns` | array | No | A list of API names of the columns to include in the detail section of the report. |
| `developerName` | string | No | The unique API developer name of the report being queried. This is often used to identify a saved report definition. |
| `groupingsDown` | array | No | A list of field groupings to be applied down rows (for summary or matrix reports). |
| `hasDetailRows` | boolean | No | If true, the report output will include individual record rows (detail rows). If false, only summary data is returned. |
| `reportFilters` | array | No | A list of filter conditions to apply to the report data. Each filter specifies a column, operator, and value. |
| `showSubtotals` | boolean | No | If true, the report output will include subtotals for groupings. |
| `hasRecordCount` | boolean | No | If true, the report will display the total number of records. |
| `showGrandTotal` | boolean | No | If true, the report output will include a grand total summary. |
| `groupingsAcross` | array | No | A list of field groupings to be applied across columns (for matrix reports). |
| `standardFilters` | array | No | A list of standard filters to apply, typically specific to the `reportType`. Each filter is a dictionary with 'name' and 'value' string pairs. |
| `standardDateFilter` | object | No | A filter based on a standard or custom date range for a specific date field. |
| `customDetailFormula` | array | No | A list of row-level (custom detail) formula definitions for the report. |
| `presentationOptions` | object | No | Presentation settings for the report. |
| `reportBooleanFilter` | string | No | A string defining the logical relationship between multiple `reportFilters`. Uses 1-based indexing for filters (e.g., '(1 AND 2) OR 3'). |
| `customSummaryFormula` | array | No | A list of custom summary formula definitions for the report. |
| `historicalSnapshotDates` | array | No | A list of dates for which historical trending data should be retrieved. Dates should be in YYYY-MM-DD format. |
| `userOrHierarchyFilterId` | string | No | The ID of a user or role used to filter the report based on role hierarchy (e.g., 'My Team's Opportunities'). |
| `allowedInCustomDetailFormula` | boolean | No | Indicates if fields used in the report are allowed in custom detail formulas. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove account by unique identifier

**Slug:** `SALESFORCE_REMOVE_ACCOUNT_BY_UNIQUE_IDENTIFIER`

DEPRECATED: Deletes an existing Salesforce Account using its unique ID, returning an empty response on success (HTTP 204).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique Salesforce Account ID (typically 15 or 18 characters). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove a specific contact by id

**Slug:** `SALESFORCE_REMOVE_A_SPECIFIC_CONTACT_BY_ID`

DEPRECATED: Permanently deletes a specific Contact from Salesforce using its unique ID, which must correspond to an existing record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (ID) of the Contact object to be deleted. This is a required path parameter. Salesforce IDs are typically 15-character case-sensitive or 18-character case-insensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove campaign object by id

**Slug:** `SALESFORCE_REMOVE_CAMPAIGN_OBJECT_BY_ID`

DEPRECATED: Permanently deletes a specific Campaign SObject in Salesforce using its unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique Salesforce identifier (typically 18-character) of the Campaign SObject to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove from campaign

**Slug:** `SALESFORCE_REMOVE_FROM_CAMPAIGN`

Removes a lead or contact from a campaign by deleting the CampaignMember record. Provide either the member_id (lead/contact ID) or the specific campaign_member_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `member_id` | string | No | The Salesforce ID of the lead or contact to remove from the campaign. Either member_id or campaign_member_id must be provided. |
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to remove the member from. |
| `campaign_member_id` | string | No | The specific CampaignMember record ID to delete. Either member_id or campaign_member_id must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove note object by id

**Slug:** `SALESFORCE_REMOVE_NOTE_OBJECT_BY_ID`

DEPRECATED: Permanently deletes an existing Salesforce Note object identified by its unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique 15-character or 18-character Salesforce ID of the Note object to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove opportunity by id

**Slug:** `SALESFORCE_REMOVE_OPPORTUNITY_BY_ID`

DEPRECATED: Permanently deletes an existing Salesforce Opportunity by its ID; if the Opportunity does not exist, a 'not found' (404) error occurs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the Salesforce Opportunity to be deleted, e.g., '001R0000005hDFYIA2'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve account data and error responses

**Slug:** `SALESFORCE_RETRIEVE_ACCOUNT_DATA_AND_ERROR_RESPONSES`

DEPRECATED: Retrieves comprehensive metadata for the Salesforce Account sObject, detailing its properties, recent records, and related resource URLs.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve campaign data with error handling

**Slug:** `SALESFORCE_RETRIEVE_CAMPAIGN_DATA_WITH_ERROR_HANDLING`

DEPRECATED: Retrieves comprehensive information and metadata for the Salesforce Campaign sObject, provided it is enabled and accessible in the organization, and features robust error handling.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve contact object metadata

**Slug:** `SALESFORCE_RETRIEVE_CONTACT_INFO_WITH_STANDARD_RESPONSES`

DEPRECATED: Retrieves comprehensive metadata (e.g., fields, data types, picklist values) for the Salesforce Contact SObject; this action does not retrieve individual contact records.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve lead by id

**Slug:** `SALESFORCE_RETRIEVE_LEAD_BY_ID`

Retrieves details for a Salesforce Lead by its ID; the specified Lead ID must exist in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (ID) of the Salesforce Lead to retrieve. |
| `fields` | string | No | Comma-delimited list of Salesforce Lead field API names to return (e.g., Name,Email,Company). Field names must be exact API names (alphanumeric with underscores, no spaces). Custom fields typically end with '__c'. If omitted, all accessible fields are returned. |
| `filtered_fields_message` | string | No | Internal field to store message about filtered fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve lead data with various responses

**Slug:** `SALESFORCE_RETRIEVE_LEAD_DATA_WITH_VARIOUS_RESPONSES`

DEPRECATED: Retrieves Lead sObject data from Salesforce, such as recently viewed leads or general Lead object information.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve note object information

**Slug:** `SALESFORCE_RETRIEVE_NOTE_OBJECT_INFORMATION`

DEPRECATED: Retrieves comprehensive metadata for the Salesforce 'Note' SObject, if it is enabled and accessible, to understand its structure and capabilities.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve opportunities data

**Slug:** `SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA`

Retrieves all available Opportunity records, representing potential revenue-generating deals, from Salesforce.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve opportunity by id with optional fields

**Slug:** `SALESFORCE_RETRIEVE_OPPORTUNITY_BY_ID_WITH_OPTIONAL_FIELDS`

DEPRECATED: Retrieves a Salesforce Opportunity by its ID; the Opportunity ID must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique Salesforce ID of the Opportunity record to retrieve. This is a required path parameter. |
| `fields` | string | No | An optional, comma-delimited list of API names of the Opportunity fields to retrieve. If not specified, all accessible fields for the Opportunity object will be returned. This parameter is used as a query parameter in the GET request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve specific campaign object details

**Slug:** `SALESFORCE_RETRIEVE_SPECIFIC_CAMPAIGN_OBJECT_DETAILS`

DEPRECATED: Retrieves details for a specific Salesforce Campaign object by its ID, optionally limiting to specified fields; the Campaign object must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (ID) of the Salesforce Campaign object to retrieve. Example: '001R0000005hDFYIA2'. |
| `fields` | string | No | Optional comma-delimited list of field API names for the Campaign object whose values you want to retrieve (e.g., 'name,description,numberofemployees,industry'). Field names are case-sensitive and should match Salesforce API names. If unspecified, all accessible fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve specific contact by id

**Slug:** `SALESFORCE_RETRIEVE_SPECIFIC_CONTACT_BY_ID`

(DEPRECATED: use `SALESFORCE_GET_CONTACT_BY_ID`) Retrieves a Salesforce Contact by its unique ID; the ID must correspond to an existing Contact record in Salesforce.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique Salesforce ID of the Contact record to retrieve. |
| `fields` | string | No | Comma-delimited string of Contact field API names to retrieve. If omitted, a default set of fields is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run report

**Slug:** `SALESFORCE_RUN_REPORT`

Runs a report synchronously (GET /analytics/reports/{id}?includeDetails=true) and returns the results in one call. This does NOT create an asynchronous report instance — for that, use the async run resource. Results are returned in a nested structure (factMap, reportExtendedMetadata), not a flat record list; an empty factMap/rows is a valid result. Avoid repeated calls when freshness allows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `report_id` | string | Yes | The Salesforce ID of the report to run. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run report async

**Slug:** `SALESFORCE_RUN_REPORT_ASYNC`

Run a Salesforce report asynchronously (POST /analytics/reports/{id}/instances). Returns an instance id and status; the report runs in the background. Retrieve results later with get_report_instance using the returned instance id. Use this (instead of the synchronous run_report) for large reports or to avoid blocking. Without this action, get_report_instance had no obtainable instance id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `report_id` | string | Yes | The Salesforce ID of the report to run asynchronously. |
| `include_details` | boolean | No | If true, the async run includes detailed (row-level) results in addition to aggregates. Passed as the includeDetails query parameter. |
| `report_metadata` | object | No | Optional reportMetadata object to override the report's filters/settings for this run only (e.g. reportFilters, standardDateFilter). Sent as the request body when provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run SOQL query

**Slug:** `SALESFORCE_RUN_SOQL_QUERY`

Executes a SOQL query against Salesforce data. Returns records matching the query with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | SOQL query to execute. Must start with SELECT. Field names must match object schema exactly — use SALESFORCE_GET_ALL_FIELDS_FOR_OBJECT for unfamiliar objects. ALIASES: No 'AS' keyword (use 'SUM(Amount) TotalSales' NOT 'SUM(Amount) AS TotalSales'). AGGREGATES: Without GROUP BY, ORDER BY/LIMIT not allowed (single-row result). COUNT() SYNTAX: Bare COUNT() only valid alone. With GROUP BY or other fields, must specify field: COUNT(Id) or COUNT(fieldName). Example: 'SELECT COUNT(Id), Status FROM Lead GROUP BY Status' NOT 'SELECT COUNT(), Status FROM Lead GROUP BY Status'. NON-GROUPABLE: Long text, rich text, encrypted text, compound address/location fields. NON-FILTERABLE: Long text area, rich text, encrypted text, multi-select picklists, blob fields CANNOT be in WHERE. FIELDS(ALL)/FIELDS(CUSTOM) require LIMIT ≤200. ID values need single quotes. Apostrophes use backslash: 'O\'Brien'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute SOSL search

**Slug:** `SALESFORCE_SEARCH`

DEPRECATED: Use SALESFORCE_EXECUTE_SOSL_SEARCH instead. Executes a SOSL search query across multiple Salesforce objects. Use when you need to search for text across multiple object types simultaneously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | URL-encoded SOSL search query string to execute. Must follow SOSL syntax with FIND clause. Example: 'FIND {Acme} IN ALL FIELDS RETURNING Account(Name, Phone), Contact(FirstName, LastName)' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search accounts

**Slug:** `SALESFORCE_SEARCH_ACCOUNTS`

Search for Salesforce accounts using criteria like name, industry, type, location, or contact information. Always provide at least one filter parameter; omitting all filters returns a broad, slow listing. Owner/territory filtering is unsupported — use SALESFORCE_RUN_SOQL_QUERY for ownership-based filters. Use SALESFORCE_GET_ACCOUNT to fetch complete field data for a specific record. Unsupported filter fields may be silently ignored — verify results reflect intended criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Search by account name. Supports partial matches. |
| `type` | string | No | Search by account type. Note: The Type field may not exist in all Salesforce orgs. If the query fails with 'No such column Type', either omit this parameter or use a custom Type__c field if available in your org. |
| `limit` | integer | No | Maximum number of accounts to return. Results are hard-capped at approximately 2000 rows; use more selective filters if the full dataset exceeds this. |
| `phone` | string | No | Search by phone number. Supports partial matches. Requires field-level security access to the Phone field. |
| `fields` | string | No | Comma-separated list of valid Salesforce Account field API names to retrieve. Only use actual field names like Id, Name, Industry, etc. Do not include type annotations or placeholders like <string> or <DATE_TIME>. If any field in this list is restricted by field-level security, the entire request will fail — use a minimal set of standard fields (e.g., Id,Name,Website) when access is uncertain. |
| `website` | string | No | Search by website. Supports partial matches. |
| `industry` | string | No | Search by industry. |
| `billing_city` | string | No | Search by billing city. Supports partial matches. |
| `billing_state` | string | No | Search by billing state/province. Supports partial matches. |
| `billing_country` | string | No | Search by billing country. Supports partial matches. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search campaigns

**Slug:** `SALESFORCE_SEARCH_CAMPAIGNS`

Search for Salesforce campaigns using multiple criteria like name, type, status, date range, or active status. Requires access to the Campaign object (Marketing User feature must be enabled in the org). For complex sorting (multi-field ORDER BY), use SALESFORCE_RUN_SOQL_QUERY instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Search by campaign name. Supports partial matches. Combine with type, status, or date range filters to narrow results when names are non-unique. |
| `type` | string | No | Search by campaign type. |
| `limit` | integer | No | Maximum number of campaigns to return. Check totalSize in the response to determine if results are truncated; issue additional queries if needed. |
| `fields` | string | No | Comma-separated list of Campaign fields to retrieve. |
| `status` | string | No | Search by campaign status. |
| `is_active` | boolean | No | Filter by active status. True for active campaigns, False for inactive. |
| `start_date_to` | string | No | Upper bound for StartDate (inclusive). Use YYYY-MM-DD. |
| `start_date_from` | string | No | Lower bound for StartDate (inclusive). Use YYYY-MM-DD. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search contacts

**Slug:** `SALESFORCE_SEARCH_CONTACTS`

Search Salesforce Contact records (not Leads — use SALESFORCE_SEARCH_LEADS for those) using name, email, phone, account, or title. All parameters support partial/fuzzy matching, so results may include unrelated records; post-filter client-side for exact matches. Partial matches and common names can return multiple contacts — always confirm the correct contact by its 18-character Id before passing to write operations like SALESFORCE_LOG_CALL or SALESFORCE_CREATE_TASK. A response with totalSize=0 is a valid 'not found' outcome. Provide at least one search criterion; omitting all returns a broad, slow result set. Returned Ids are 18-character strings and must be used as-is in downstream tools.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Search by contact name (first name, last name, or full name). Supports partial matches. |
| `email` | string | No | Search by email address. Supports partial matches. |
| `limit` | integer | No | Maximum number of contacts to return. Maximum allowed is 2000; when totalSize exceeds limit, paginate to retrieve full results. |
| `phone` | string | No | Search by phone number. Supports partial matches. |
| `title` | string | No | Search by job title. Supports partial matches. |
| `fields` | string | No | Comma-separated list of Contact fields to retrieve. Custom and non-default fields are excluded unless explicitly listed here. |
| `account_name` | string | No | Search by associated account name. Supports partial matches. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search suggested article title matches

**Slug:** `SALESFORCE_SEARCH_KNOWLEDGE_ARTICLES`

Search for Salesforce Knowledge articles with titles matching the search query. Returns auto-suggest results for Knowledge articles based on title matches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The user's search query string to match against article titles. This is the text that will be matched against Knowledge article titles. |
| `limit` | integer | No | Maximum number of suggested articles to return. Default: 5, Maximum: 10. Controls how many article suggestions are included in the response. |
| `topics` | string | No | Knowledge article topic names to filter results. Provide topic names to narrow down the search to articles tagged with specific topics. |
| `channel` | string ("Pkb" | "Csp" | "Prm" | "App") | No | The channel for which the article is visible. Valid values: 'Pkb' (Public Knowledge Base), 'Csp' (Customer Portal), 'Prm' (Partner Portal), 'App' (Application). |
| `language` | string | Yes | The article language API name (e.g., 'en_US', 'fr_FR', 'de_DE'). REQUIRED by the suggestTitleMatches API — omitting it returns HTTP 400. |
| `publishStatus` | string ("Draft" | "Online" | "Archived") | Yes | The article publication status. Valid values: 'Draft', 'Online', 'Archived'. REQUIRED by the suggestTitleMatches API — omitting it returns HTTP 400. |
| `validationStatus` | string ("Draft" | "Validated" | "Published") | No | The article's validation status. Valid values: 'Draft', 'Validated', 'Published'. Filters results by the article's validation state. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search leads

**Slug:** `SALESFORCE_SEARCH_LEADS`

Search for Salesforce leads using criteria like name, email, phone, company, title, status, or lead source. At least one search criterion should be provided — omitting all parameters results in a broad, slow listing of arbitrary records. Partial matches on name, email, and company may return multiple candidates; confirm Email or Company field values before using a lead ID in downstream operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Search by lead name (first name, last name, or full name). Supports partial matches. |
| `email` | string | No | Search by email address. Supports partial matches. |
| `limit` | integer | No | Maximum number of leads to return. Maximum cap is 2000; for result sets beyond 2000, use SALESFORCE_RUN_SOQL_QUERY with pagination via nextRecordsUrl. |
| `phone` | string | No | Search by phone number. Supports partial matches. |
| `title` | string | No | Search by job title. Supports partial matches. |
| `fields` | string | No | Comma-separated list of Lead fields to retrieve. |
| `status` | string | No | Search by lead status. |
| `company` | string | No | Search by company name. Supports partial matches. |
| `lead_source` | string | No | Search by lead source. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search notes

**Slug:** `SALESFORCE_SEARCH_NOTES`

Search for Salesforce notes using multiple criteria like title, body content, parent record, owner, or creation date. Provide at least one filter criterion — omitting all filters returns a broad, slow, noisy listing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Search within note body content using full-text search (SOSL). When provided, body search is combined with any additional filters using AND logic. |
| `limit` | integer | No | Maximum number of notes to return. Maximum allowed value is 2000; apply precise filters or paginate when result sets may exceed the limit. |
| `title` | string | No | Search by note title. Supports partial matches. |
| `fields` | string | No | Comma-separated list of Note fields to retrieve. Parent.Name may be null when the parent record is deleted or inaccessible. |
| `is_private` | boolean | No | Filter by private status. True for private notes, False for public notes. Private notes may be silently omitted if the integration user lacks permission — absence of results does not guarantee no notes exist. |
| `owner_name` | string | No | Search by note owner's user name. Supports partial matches. |
| `parent_name` | string | No | Search by parent record name (Account, Contact, Lead, Opportunity, Case, or custom objects). Supports partial matches. Searches across common parent object types to find matching records. Cannot filter by parent record ID or parent object type; use SALESFORCE_RUN_SOQL_QUERY for ID-scoped note lookups. |
| `created_date_to` | string | No | Filter notes created on or before this date (YYYY-MM-DD). |
| `created_date_from` | string | No | Filter notes created on or after this date (YYYY-MM-DD). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search opportunities

**Slug:** `SALESFORCE_SEARCH_OPPORTUNITIES`

Search for Salesforce opportunities using multiple criteria like name, account, stage, amount, close date, or status. Apply at least one filter to avoid broad result sets. Partial-match searches may return multiple similar records; verify the correct record by Id before downstream use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Search by opportunity name. Supports partial matches. |
| `limit` | integer | No | Maximum number of opportunities to return. Maximum value is 2000. When totalSize in the response exceeds limit, use nextRecordsUrl to paginate through the full dataset. |
| `fields` | string | No | Comma-separated list of Opportunity fields to retrieve. Supports direct Opportunity fields (e.g., Id, Name, Amount) and parent relationship fields (e.g., Account.Name, Owner.Name). Note: Contact.* fields (Contact.Name, Contact.Email, etc.) are NOT valid because Opportunity does not have a direct parent relationship to Contact; use OpportunityContactRole queries to get contact information. Parent relationship fields like Account.Name may be null on returned records; guard against missing nested values when post-processing. |
| `is_won` | boolean | No | Filter by won status. True for won opportunities, False for lost (only applies to closed opportunities). |
| `is_closed` | boolean | No | Filter by closed status. True for closed opportunities, False for open. |
| `amount_max` | number | No | Maximum opportunity amount. |
| `amount_min` | number | No | Minimum opportunity amount. |
| `stage_name` | string | No | Search by opportunity stage. |
| `lead_source` | string | No | Search by lead source. |
| `account_name` | string | No | Search by associated account name. Supports partial matches. |
| `close_date_to` | string | No | Search opportunities with close date before this date (YYYY-MM-DD). |
| `close_date_from` | string | No | Search opportunities with close date from this date (YYYY-MM-DD). When computing relative ranges (e.g., 'this week'), derive dates using the user's local timezone to avoid off-by-one-day errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search tasks

**Slug:** `SALESFORCE_SEARCH_TASKS`

Search for Salesforce tasks using multiple criteria like subject, status, priority, assigned user, related records, or dates. Always provide at least one filter criterion — no filters produces broad, slow results. For complex filtering not supported here, use SALESFORCE_RUN_SOQL_QUERY.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tasks to return. Maximum is 2000. When returned record count equals limit or nextRecordsUrl is present in the response, paginate to retrieve all matching tasks. |
| `fields` | string | No | Comma-separated list of Task fields to retrieve. WhoId/Who.Name, WhatId/What.Name, OwnerId/Owner.Name, and Description can be null on Task records — guard against null before accessing nested .Name fields. Call-specific fields (CallType, CallDurationInSeconds) are frequently null and unreliable as sole filters. |
| `status` | string | No | Search by task status. |
| `subject` | string | No | Search by task subject. Supports partial matches. Many Tasks are system-generated or email-related; combine with activity_date_from/activity_date_to, status, and priority for better precision. |
| `priority` | string | No | Search by task priority. |
| `is_closed` | boolean | No | Filter by closed status. True for completed tasks, False for open tasks. |
| `account_name` | string | No | Search by related account name. Supports partial matches. |
| `contact_name` | string | No | Search by related contact name. Supports partial matches. |
| `activity_date_to` | string | No | Search tasks with activity date before this date (YYYY-MM-DD). |
| `assigned_to_name` | string | No | Search by assigned user name. Supports partial matches. |
| `activity_date_from` | string | No | Search tasks with activity date from this date (YYYY-MM-DD). Date filtering may not strictly bound results; verify ActivityDate in returned records when date accuracy matters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send email

**Slug:** `SALESFORCE_SEND_EMAIL`

Sends an email through Salesforce with options for recipients, attachments, and activity logging. Can partially succeed — check per-recipient success/failure status rather than treating the call as all-or-nothing. For large recipient lists, use SALESFORCE_SEND_MASS_EMAIL instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | Body content of the email. |
| `is_html` | boolean | No | Whether the email body is HTML formatted. |
| `subject` | string | Yes | Subject line of the email. |
| `log_email` | boolean | No | Whether to log the email on the recipient's activity timeline. Requires correct recipient_id and related_record_id values; incorrect IDs silently log the activity against the wrong records. |
| `sender_type` | string ("CurrentUser" | "OrgWideEmailAddress") | No | Type of sender. |
| `cc_addresses` | string | No | CC email addresses. Can be a comma-delimited string or a list. |
| `recipient_id` | string | No | ID of a lead, contact, or person account to send the email to. Used for logging and merge fields. |
| `to_addresses` | string | Yes | Email addresses of recipients. Can be a comma-delimited string or a list. Recipients with null email fields generate per-recipient errors without failing the entire call; filter out null-email records beforehand. |
| `bcc_addresses` | string | No | BCC email addresses. Can be a comma-delimited string or a list. |
| `attachment_ids` | string | No | IDs of files to attach. Provide ContentVersion (068...), Document (015...) Ids, or ContentDocument (069...) IdsCan be a comma-delimited string or a list. |
| `sender_address` | string | No | Organization-wide email address. Required only when sender_type is OrgWideEmailAddress. |
| `related_record_id` | string | No | ID of a related record (e.g., Account, Opportunity, Case) for logging and merge fields. |
| `org_wide_email_address_id` | string | No | Org-Wide Email Address Id to use when sender_type is OrgWideEmailAddress. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send email from template

**Slug:** `SALESFORCE_SEND_EMAIL_FROM_TEMPLATE`

Sends an email using a predefined Salesforce email template with merge field support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `log_email` | boolean | No | Whether to log the email on the recipient's activity timeline. Defaults to true for template emails. |
| `sender_type` | string | No | Type of sender. Valid values: CurrentUser, DefaultWorkflowUser, OrgWideEmailAddress. |
| `template_id` | string | Yes | ID of the email template to use. |
| `cc_addresses` | string | No | CC email addresses. Can be a comma-delimited string or a list. |
| `recipient_id` | string | Yes | ID of the lead, contact, or person account to send the email to. Required when using templates. |
| `bcc_addresses` | string | No | BCC email addresses. Can be a comma-delimited string or a list. |
| `attachment_ids` | string | No | IDs of files to attach. Can be a comma-delimited string or a list. |
| `sender_address` | string | No | Organization-wide email address. Required only when sender_type is OrgWideEmailAddress. |
| `related_record_id` | string | No | ID of a related record (e.g., Case, Opportunity) to populate merge fields from a different object. |
| `add_threading_tokens` | boolean | No | Whether to add threading tokens for email-to-case or custom threading. Useful for case-related emails. |
| `additional_to_addresses` | string | No | Additional email addresses to send to (besides the recipient). Can be a comma-delimited string or a list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send mass email

**Slug:** `SALESFORCE_SEND_MASS_EMAIL`

Sends an email to each recipient immediately and irreversibly, using a template or custom subject/body (requires either a valid template_id or both subject and body). Recipients are processed in batches of up to 150 via the emailSimple action. IMPORTANT: this sends one individual email per recipient, so it consumes the org's daily single-email allocation and can hit send/rate limits on large recipient lists — it is not a true bulk/marketing-email mechanism. The response is a `results` array with one entry per recipient; inspect each entry's `success` and `errors`, since individual recipients can fail even when the overall call succeeds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Body content of the email. Required if template_id is not provided. |
| `is_html` | boolean | No | Whether the email body is HTML formatted. Only applies when not using a template. |
| `subject` | string | No | Subject line of the email. Required if template_id is not provided. |
| `batch_size` | integer | No | Number of recipients to process in each batch. Maximum is 150. |
| `log_emails` | boolean | No | Whether to log the emails on each recipient's activity timeline. |
| `sender_type` | string ("CurrentUser" | "DefaultWorkflowUser" | "OrgWideEmailAddress") | No | Type of sender. |
| `template_id` | string | No | ID of the email template to use. If not specified, subject and body must be provided. |
| `recipient_ids` | array | Yes | List of IDs for leads, contacts, or person accounts to send emails to. Maximum 150 recipients per call. All recipient records must have a non-null Email field; null emails generate per-recipient errors. |
| `sender_address` | string | No | Organization-wide email address. Required only when sender_type is OrgWideEmailAddress. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set user password

**Slug:** `SALESFORCE_SET_USER_PASSWORD`

Set or reset a Salesforce user's password. Provide new_password to set a specific value (silent). Omit new_password to RESET: this is destructive — it invalidates the user's current password and emails them a reset link, and does NOT return a password. This endpoint never returns a generated password.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The Salesforce User ID for which to set the password. Must be a valid 15 or 18-character Salesforce User ID. |
| `new_password` | string | No | The new password to set for the user. Must meet the org's password policies (length/complexity). DESTRUCTIVE if omitted: leaving this blank does NOT generate a password you can read back — it triggers a password RESET (HTTP DELETE) that invalidates the user's current password and emails them a reset link. Only omit it if you intend to reset and notify the user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update sObject record

**Slug:** `SALESFORCE_SOBJECT_ROWS_UPDATE`

Tool to update specific fields in an existing Salesforce sObject record. Use when you need to modify one or more fields in a record without affecting other fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | Dictionary of field name/value pairs to update. Only include fields that need to be updated. Field names must match the API names of the sObject fields (e.g., 'Phone', 'Name', 'CustomField__c'). Field names are case-sensitive. |
| `record_id` | string | Yes | The unique 15 or 18-character Salesforce ID of the record to update. |
| `sobject_api_name` | string | Yes | The API name of the Salesforce object type to update (e.g., Account, Contact, Opportunity, CustomObject__c). Case-sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user password expiration status

**Slug:** `SALESFORCE_SOBJECT_USER_PASSWORD`

Tool to check whether a Salesforce user's password has expired. Use when you need to verify password expiration status for a specific user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The 15 or 18-character Salesforce User ID to check password expiration status for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute Tooling API query

**Slug:** `SALESFORCE_TOOLING_QUERY`

Tool to execute SOQL queries against Salesforce Tooling API metadata objects. Use when you need to query metadata components like ApexClass, ApexTrigger, ValidationRule, WorkflowRule, FieldDefinition, or EntityDefinition. The Tooling API exposes objects that use the external object framework and provides granular access to metadata components for development and deployment tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The SOQL query to execute against Tooling API metadata objects. Example: 'SELECT Id, Name FROM ApexClass LIMIT 10'. Can query metadata objects like ApexClass, ApexTrigger, ValidationRule, WorkflowRule, FieldDefinition, EntityDefinition, etc. Supports standard SOQL syntax including WHERE, ORDER BY, LIMIT, and OFFSET clauses. Maximum OFFSET value is 2000 when using pagination with LIMIT/OFFSET. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update account

**Slug:** `SALESFORCE_UPDATE_ACCOUNT`

Updates an existing account in Salesforce with the specified changes. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | string | No | Updated fax number. Leave empty to keep unchanged. |
| `name` | string | No | Updated account name. Leave empty to keep unchanged. |
| `type` | string | No | Updated account type. Leave empty to keep unchanged. |
| `phone` | string | No | Updated phone number. Leave empty to keep unchanged. |
| `website` | string | No | Updated website URL. Leave empty to keep unchanged. |
| `industry` | string | No | Updated industry. Leave empty to keep unchanged. |
| `sic_desc` | string | No | Updated SIC description. Leave empty to keep unchanged. |
| `parent_id` | string | No | Updated parent account ID. Leave empty to keep unchanged. |
| `account_id` | string | Yes | The Salesforce ID of the account to update. |
| `description` | string | No | Updated description. Leave empty to keep unchanged. |
| `billing_city` | string | No | Updated billing city. Leave empty to keep unchanged. |
| `billing_state` | string | No | Updated billing state. Leave empty to keep unchanged. If your org has State and Country/Territory picklists enabled, provide the exact picklist value (e.g., 'California' instead of 'CA'). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Level__c', 'Languages__c'). Values can be strings, numbers, booleans, or null depending on the field type. |
| `shipping_city` | string | No | Updated shipping city. Leave empty to keep unchanged. |
| `account_source` | string | No | Updated account source. Leave empty to keep unchanged. |
| `annual_revenue` | number | No | Updated annual revenue. Leave empty to keep unchanged. |
| `billing_street` | string | No | Updated billing street. Leave empty to keep unchanged. |
| `shipping_state` | string | No | Updated shipping state. Leave empty to keep unchanged. |
| `billing_country` | string | No | Updated billing country. Leave empty to keep unchanged. If your org has State and Country/Territory picklists enabled, provide the exact picklist value (e.g., 'United States' instead of 'USA'). |
| `shipping_street` | string | No | Updated shipping street. Leave empty to keep unchanged. |
| `shipping_country` | string | No | Updated shipping country. Leave empty to keep unchanged. |
| `billing_postal_code` | string | No | Updated billing postal code. Leave empty to keep unchanged. |
| `number_of_employees` | integer | No | Updated number of employees. Leave empty to keep unchanged. |
| `shipping_postal_code` | string | No | Updated shipping postal code. Leave empty to keep unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update account by id

**Slug:** `SALESFORCE_UPDATE_ACCOUNT_OBJECT_BY_ID`

DEPRECATED: Updates specified fields of an existing Salesforce Account object identified by its unique ID; field names are case-sensitive and read-only fields are ignored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (ID) of the Account object to be updated (e.g., '001R0000005hDFYIA2'). |
| `Fax` | string | No | Fax number (max 40 chars). |
| `Sic` | string | No | SIC code for business accounts (max 20 chars). |
| `Name` | string | No | Name of the account (max 255 chars). For Person Accounts, this is a concatenated field (FirstName, MiddleName, LastName, Suffix) and not directly modifiable here. |
| `Site` | string | No | Account site/location name (e.g., Headquarters, max 80 chars). |
| `Type` | string | No | Type of account (picklist). |
| `Phone` | string | No | Primary phone number (max 40 chars). |
| `Jigsaw` | string | No | Data.com (Jigsaw) company ID reference (max 20 chars). Typically managed by Data.com integration. |
| `Rating` | string | No | Account prospect rating (picklist). |
| `SLA__c` | string | No | Custom field: Service Level Agreement (SLA) information. |
| `OwnerId` | string | No | ID of the user owning this account. Defaults to current user on creation. Requires permission to change. |
| `SicDesc` | string | No | SIC code description for business accounts (max 80 chars). |
| `Website` | string | No | Account website (fully qualified URL, max 255 chars). |
| `Industry` | string | No | Primary industry (picklist, max 40 chars). |
| `ParentId` | string | No | ID of the parent account, if any. |
| `PhotoUrl` | string | No | Path for social network profile image URL. Typically read-only. |
| `Active__c` | string | No | Custom field: Indicates if the account is active. |
| `IsDeleted` | boolean | No | Indicates if the object is in the Recycle Bin. Typically read-only for updates. |
| `NaicsCode` | string | No | NAICS code for business accounts (6 digits, max 8 chars total). Typically requires Data.com. |
| `NaicsDesc` | string | No | NAICS code description for business accounts (max 120 chars). Typically requires Data.com. |
| `Ownership` | string | No | Ownership type (picklist). |
| `DunsNumber` | string | No | D-U-N-S number for business accounts (9 digits). Typically requires Data.com. |
| `Tradestyle` | string | No | Tradestyle or 'DBA' name for business accounts (max 255 chars). Typically requires Data.com. |
| `BillingCity` | string | No | Billing city (max 40 chars). |
| `CleanStatus` | string | No | Data quality status compared with Data.com (e.g., Matched, Pending). Typically managed by Data.com Clean. |
| `CreatedById` | string | No | ID of the user who created the account (read-only). |
| `CreatedDate` | string | No | Creation date and time (read-only). |
| `Description` | string | No | Text description (max 32,000 chars; 255 in reports). |
| `YearStarted` | string | No | Year organization was established for business accounts (4 chars). Typically requires Data.com. |
| `BillingState` | string | No | Billing state/province (max 80 chars). |
| `ShippingCity` | string | No | Shipping city (max 40 chars). |
| `TickerSymbol` | string | No | Stock market symbol for business accounts (max 20 chars). |
| `AccountNumber` | string | No | Account number (not the system ID, max 40 chars). |
| `AccountSource` | string | No | Source of the account record (picklist, max 40 chars). |
| `AnnualRevenue` | integer | No | Estimated annual revenue. |
| `BillingStreet` | string | No | Billing street address. |
| `ShippingState` | string | No | Shipping state/province (max 80 chars). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `BillingCountry` | string | No | Billing country (max 80 chars). |
| `DandbCompanyId` | string | No | D&B Company ID for Dun & Bradstreet integration (typically read-only). |
| `LastViewedDate` | string | No | Timestamp of last view by current user (read-only). |
| `MasterRecordId` | string | No | ID of the master record if this account was merged and deleted; null otherwise. Typically read-only. |
| `ShippingStreet` | string | No | Shipping street address (max 255 chars). |
| `SystemModstamp` | string | No | System modification timestamp (read-only). |
| `BillingLatitude` | integer | No | Latitude for billing address (-90 to 90, up to 15 decimal places). Part of BillingAddress compound field. |
| `JigsawCompanyId` | string | No | Jigsaw company ID (read-only, for Data.com integration). |
| `ShippingCountry` | string | No | Shipping country (max 80 chars). |
| `attributes__url` | string | No | URL for the Salesforce SObject. Read-only, ignored in updates. |
| `BillingLongitude` | integer | No | Longitude for billing address (-180 to 180, up to 15 decimal places). Part of BillingAddress compound field. |
| `LastActivityDate` | string | No | Most recent activity date (read-only). |
| `LastModifiedById` | string | No | ID of the user who last modified the account (read-only). |
| `LastModifiedDate` | string | No | Last modification date and time (read-only). |
| `OperatingHoursId` | string | No | ID of operating hours associated with the account. Requires Field Service to be enabled. |
| `ShippingLatitude` | integer | No | Latitude for shipping address (-90 to 90, up to 15 decimal places). Part of ShippingAddress compound field. |
| `attributes__type` | string | No | Salesforce SObject type (e.g., 'Account'). Read-only, ignored in updates. |
| `BillingPostalCode` | string | No | Billing postal code (max 20 chars). |
| `NumberOfEmployees` | integer | No | Number of employees (max 8 digits). |
| `ShippingLongitude` | integer | No | Longitude for shipping address (-180 to 180, up to 15 decimal places). Part of ShippingAddress compound field. |
| `LastReferencedDate` | string | No | Timestamp of last access by current user (read-only). |
| `SLASerialNumber__c` | string | No | Custom field: SLA serial number. |
| `ShippingPostalCode` | string | No | Shipping postal code (max 20 chars). |
| `CustomerPriority__c` | string | No | Custom field: Customer priority. |
| `NumberofLocations__c` | integer | No | Custom field: Number of locations for the account. |
| `SLAExpirationDate__c` | string | No | Custom field: SLA expiration date. |
| `UpsellOpportunity__c` | string | No | Custom field: Potential upsell opportunities. |
| `BillingGeocodeAccuracy` | string | No | Geocode accuracy for billing address. Part of BillingAddress compound field. |
| `ShippingGeocodeAccuracy` | string | No | Geocode accuracy for shipping address. Part of ShippingAddress compound field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update campaign

**Slug:** `SALESFORCE_UPDATE_CAMPAIGN`

Updates an existing campaign in Salesforce with the specified changes. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Updated campaign name. Leave empty to keep unchanged. |
| `type` | string | No | Updated campaign type. Leave empty to keep unchanged. |
| `status` | string | No | Updated campaign status. Leave empty to keep unchanged. |
| `end_date` | string | No | Updated end date in YYYY-MM-DD format. Leave empty to keep unchanged. |
| `is_active` | boolean | No | Updated active status. Leave as None to keep unchanged. |
| `parent_id` | string | No | Updated parent campaign ID. Leave empty to keep unchanged. |
| `start_date` | string | No | Updated start date in YYYY-MM-DD format. Leave empty to keep unchanged. |
| `actual_cost` | number | No | Updated actual cost. Leave unset to keep unchanged. |
| `campaign_id` | string | Yes | The Salesforce ID of the campaign to update. |
| `description` | string | No | Updated description. Leave empty to keep unchanged. |
| `number_sent` | number | No | Updated number sent. Leave unset to keep unchanged. |
| `budgeted_cost` | number | No | Updated budgeted cost. Leave unset to keep unchanged. |
| `custom_fields` | object | No | Custom fields to update on the campaign. Use API field names (ending in __c). Leave empty if not updating custom fields. |
| `expected_revenue` | number | No | Updated expected revenue. Leave unset to keep unchanged. |
| `expected_response` | number | No | Updated expected response rate. Leave unset to keep unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Campaign By ID

**Slug:** `SALESFORCE_UPDATE_CAMPAIGN_BY_ID_WITH_JSON`

DEPRECATED: Updates specific fields of an existing Campaign in Salesforce, identified by its unique `id`, which must already exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the Campaign to update (e.g., 001R0000005hDFYIA2). |
| `Name` | string | No | Name of the campaign (max 80 characters). |
| `Type` | string | No | Type of campaign (limit 40 characters). |
| `Status` | string | No | Status of the campaign (limit 40 characters). |
| `EndDate` | string | No | Campaign end date (YYYY-MM-DD); responses received after this date are still counted. |
| `OwnerId` | string | No | ID of the campaign owner; defaults to the API caller if not specified. |
| `IsActive` | boolean | No | Indicates if the campaign is active. Label: Active. |
| `ParentId` | string | No | ID of the parent Campaign if part of a hierarchy. |
| `IsDeleted` | boolean | No | Read-only. Indicates if the record has been deleted. |
| `StartDate` | string | No | Campaign start date (YYYY-MM-DD). |
| `ActualCost` | integer | No | Actual cost of the campaign. |
| `NumberSent` | integer | No | Number of individuals targeted (e.g., emails sent). Label: Num Sent. |
| `CreatedById` | string | No | Read-only. ID of the creator. |
| `CreatedDate` | string | No | Read-only. Creation date and time. |
| `Description` | string | No | Campaign description (limit 32KB; first 255 chars displayed in reports). |
| `BudgetedCost` | integer | No | Budgeted cost for the campaign. |
| `NumberOfLeads` | integer | No | Read-only. Total leads in the campaign. Label: Leads in Campaign. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `LastViewedDate` | string | No | Read-only. Timestamp of the current user's last view. |
| `SystemModstamp` | string | No | Read-only. Timestamp of the last system modification. |
| `ExpectedRevenue` | integer | No | Expected revenue from the campaign. |
| `attributes__url` | string | No | Read-only. API URL for this Campaign object. |
| `ExpectedResponse` | integer | No | Expected response rate percentage (e.g., 10 for 10%). |
| `LastActivityDate` | string | No | Read-only. Date of the last activity (event or closed task). |
| `LastModifiedById` | string | No | Read-only. ID of the last modifier. |
| `LastModifiedDate` | string | No | Read-only. Last modification date and time. |
| `NumberOfContacts` | integer | No | Read-only. Total contacts in the campaign. Label: Total Contacts. |
| `attributes__type` | string | No | Read-only. Salesforce object type, typically 'Campaign'. |
| `NumberOfResponses` | integer | No | Read-only. Number of 'Responded' members. Label: Responses in Campaign. |
| `LastReferencedDate` | string | No | Read-only. Timestamp of the current user's last reference. |
| `NumberOfOpportunities` | integer | No | Read-only. Total opportunities in the campaign. Label: Opportunities in Campaign. |
| `AmountAllOpportunities` | integer | No | Read-only. Total value of all opportunities. Label: Value Opportunities in Campaign. |
| `AmountWonOpportunities` | integer | No | Read-only. Total value of won opportunities. Label: Value Won Opportunities in Campaign. |
| `NumberOfConvertedLeads` | integer | No | Read-only. Number of converted leads. Label: Converted Leads. |
| `NumberOfWonOpportunities` | integer | No | Read-only. Number of won opportunities. Label: Won Opportunities in Campaign. |
| `CampaignMemberRecordTypeId` | string | No | Record type ID for CampaignMember records, used to differentiate member types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update contact

**Slug:** `SALESFORCE_UPDATE_CONTACT`

Updates an existing contact in Salesforce with the specified changes. Only provided fields will be updated. Returns HTTP 204 with no body on success; use SALESFORCE_GET_CONTACT to verify applied changes. Org-level validation rules, duplicate rules, or field-level permissions may reject correctly formatted requests with HTTP 400; inspect the error response to identify the constraint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Updated email address. Leave empty to keep unchanged. |
| `phone` | string | No | Updated primary phone number. Leave empty to keep unchanged. |
| `title` | string | No | Updated job title. Leave empty to keep unchanged. |
| `birthdate` | string | No | Updated birthdate in YYYY-MM-DD format. Leave empty to keep unchanged. |
| `last_name` | string | No | Updated last name. Leave empty to keep unchanged. |
| `account_id` | string | No | Updated Account ID association. Leave empty to keep unchanged. Alternatively use SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT, but prefer setting this field when updating multiple fields simultaneously. |
| `contact_id` | string | Yes | The Salesforce ID of the contact to update. Must be a valid 18-character Salesforce ID (retrieve via SALESFORCE_SEARCH_CONTACTS); names or emails cannot substitute. |
| `department` | string | No | Updated department. Leave empty to keep unchanged. |
| `first_name` | string | No | Updated first name. Leave empty to keep unchanged. |
| `mailing_city` | string | No | Updated mailing city. Leave empty to keep unchanged. |
| `mobile_phone` | string | No | Updated mobile phone number. Leave empty to keep unchanged. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom fields in Salesforce end with '__c' (e.g., 'Level__c', 'Languages__c'). |
| `mailing_state` | string | No | Updated mailing state/province. Leave empty to keep unchanged. |
| `mailing_street` | string | No | Updated mailing street address. Leave empty to keep unchanged. |
| `mailing_country` | string | No | Updated mailing country. Leave empty to keep unchanged. |
| `mailing_postal_code` | string | No | Updated mailing postal/zip code. Leave empty to keep unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update contact by id

**Slug:** `SALESFORCE_UPDATE_CONTACT_BY_ID`

DEPRECATED: Updates specified fields of an existing Salesforce Contact by its ID; at least one field must be provided for modification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique Salesforce ID of the Contact to update (e.g., '001R0000005hDFYIA2'). This is a required path parameter. |
| `Fax` | string | No | Business fax number. Label: 'Business Fax'. |
| `Name` | string | No | Full name (read-only). Concatenation of FirstName, MiddleName, LastName, Suffix. |
| `Email` | string | No | Email address. |
| `Phone` | string | No | Primary business phone. Label: 'Business Phone'. |
| `Title` | string | No | Job title (e.g., CEO, Vice President). |
| `Jigsaw` | string | No | Data.com (Salesforce D&B) company ID. Max 20 chars. Do not modify; used for import troubleshooting. |
| `OwnerId` | string | No | Salesforce User ID of the contact owner. |
| `LastName` | string | No | Contact's last name, up to 80 characters. |
| `Level__c` | string | No | Custom field 'Level__c': Categorizes contact importance/engagement (e.g., Primary). |
| `PhotoUrl` | string | No | Relative path to profile photo (read-only). Combine with instance URL for full path. Empty if Social Accounts/Contacts is disabled. |
| `AccountId` | string | No | Parent Account ID. When changing accounts for portal-enabled contacts, update up to 50 contacts at once, preferably after business hours. |
| `Birthdate` | string | No | Birthdate (YYYY-MM-DD). Year is ignored in report/SOQL filters. |
| `FirstName` | string | No | Contact's first name, up to 40 characters. |
| `HomePhone` | string | No | Home telephone number. |
| `IsDeleted` | boolean | No | Indicates if the contact is in the Recycle Bin. Label: 'Deleted'. |
| `OtherCity` | string | No | Alternative address: city. |
| `Department` | string | No | Department. |
| `LeadSource` | string | No | Lead source (e.g., Web, Partner Referral). |
| `OtherPhone` | string | No | Alternative address: phone number. |
| `OtherState` | string | No | Alternative address: state/province. |
| `Salutation` | string | No | Honorific for greetings (e.g., Mr., Ms., Dr.). |
| `CleanStatus` | string | No | Data quality status compared to Data.com (e.g., 'Matched', 'Pending'). |
| `CreatedById` | string | No | ID of the user who created the contact (read-only). |
| `CreatedDate` | string | No | Creation date/time (read-only). |
| `Description` | string | No | Description (up to 32KB). Label: 'Contact Description'. |
| `MailingCity` | string | No | Mailing address: city. |
| `MobilePhone` | string | No | Mobile phone number. |
| `OtherStreet` | string | No | Alternative address: street. |
| `ReportsToId` | string | No | Manager's Contact ID. Not available if IsPersonAccount is true. |
| `IndividualId` | string | No | Associated data privacy record ID. Available if Data Protection and Privacy is enabled. |
| `Languages__c` | string | No | Custom field 'Languages__c': Languages spoken by the contact (e.g., English;Spanish). |
| `MailingState` | string | No | Mailing address: state/province. |
| `OtherCountry` | string | No | Alternative address: country. |
| `AssistantName` | string | No | Assistant's name. |
| `ContactSource` | string | No | Source of contact information (e.g., external system). |
| `MailingStreet` | string | No | Mailing address: street. |
| `OtherLatitude` | integer | No | Alternative address: latitude (–90 to 90, up to 15 decimal places). Use with OtherLongitude. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `AssistantPhone` | string | No | Assistant's telephone number. |
| `IsEmailBounced` | boolean | No | Indicates if an email to the contact has bounced, if bounce management is active. |
| `LastViewedDate` | string | No | Timestamp of when current user last viewed this contact; null if only referenced (read-only). |
| `MailingCountry` | string | No | Mailing address: country. |
| `MasterRecordId` | string | No | ID of the master record if this contact was merged and deleted; null otherwise. |
| `OtherLongitude` | integer | No | Alternative address: longitude (–180 to 180, up to 15 decimal places). Use with OtherLatitude. |
| `SystemModstamp` | string | No | Last system modification date/time (read-only). |
| `JigsawContactId` | string | No | Data.com contact ID (read-only). Used for internal sync; do not modify. |
| `MailingLatitude` | integer | No | Mailing address: latitude (–90 to 90, up to 15 decimal places). Use with MailingLongitude. |
| `OtherPostalCode` | string | No | Alternative address: postal code. |
| `attributes__url` | string | No | Relative API URL for this SObject. Typically read-only, not for update requests. |
| `EmailBouncedDate` | string | No | Date/time of email bounce, if bounce management is active. |
| `IsPriorityRecord` | boolean | No | Indicates if this is a priority contact. |
| `LastActivityDate` | string | No | Date of the most recent activity or closed task (read-only). |
| `LastCUUpdateDate` | string | No | Timestamp of the last contact update for data privacy (read-only). |
| `LastModifiedById` | string | No | ID of the user who last modified the contact (read-only). |
| `LastModifiedDate` | string | No | Last modification date/time (read-only). |
| `MailingLongitude` | integer | No | Mailing address: longitude (–180 to 180, up to 15 decimal places). Use with MailingLatitude. |
| `attributes__type` | string | No | Salesforce SObject type (e.g., 'Contact'). Typically read-only, not for update requests. |
| `LastCURequestDate` | string | No | Timestamp of the last contact update request for data privacy (read-only). |
| `MailingPostalCode` | string | No | Mailing address: postal code. |
| `EmailBouncedReason` | string | No | Reason for email bounce, if bounce management is active. |
| `LastReferencedDate` | string | No | Timestamp of when current user last accessed this contact or related records (read-only). |
| `OtherGeocodeAccuracy` | string | No | Alternative address: geocode accuracy. |
| `MailingGeocodeAccuracy` | string | No | Mailing address: geocode accuracy. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a favorite

**Slug:** `SALESFORCE_UPDATE_FAVORITE`

Tool to update a favorite's properties in Salesforce UI API. Use when you need to reorder favorites or modify their display properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The display name of the favorite. Update this to change how the favorite appears in the list. |
| `sort_order` | integer | No | The display order/position of the favorite in the user's favorites list. Lower numbers appear first. Used to reorder favorites. |
| `favorite_id` | string | Yes | The unique 15 or 18-character Salesforce ID of the favorite to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update lead

**Slug:** `SALESFORCE_UPDATE_LEAD`

Updates an existing lead in Salesforce with the specified changes. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | No | Updated city. Leave empty to keep unchanged. |
| `email` | string | No | Updated email address. Leave empty to keep unchanged. |
| `phone` | string | No | Updated phone number. Leave empty to keep unchanged. |
| `state` | string | No | Updated state/province. Leave empty to keep unchanged. |
| `title` | string | No | Updated job title. Leave empty to keep unchanged. |
| `rating` | string | No | Updated rating. Leave empty to keep unchanged. Must match a valid picklist value configured in the org; invalid values cause a validation error. Represents lead quality (Hot/Warm/Cold), not pipeline stage. |
| `status` | string | No | Updated status. Leave empty to keep unchanged. Must match a valid picklist value configured in the org; invalid values cause a validation error. Represents pipeline stage, not lead quality rating. |
| `street` | string | No | Updated street address. Leave empty to keep unchanged. |
| `company` | string | No | Updated company name. Leave empty to keep unchanged. |
| `country` | string | No | Updated country. Leave empty to keep unchanged. |
| `lead_id` | string | Yes | The Salesforce ID of the lead to update. |
| `website` | string | No | Updated website. Leave empty to keep unchanged. |
| `industry` | string | No | Updated industry. Leave empty to keep unchanged. |
| `last_name` | string | No | Updated last name. Leave empty to keep unchanged. |
| `first_name` | string | No | Updated first name. Leave empty to keep unchanged. |
| `description` | string | No | Updated description. Leave empty to keep unchanged. |
| `lead_source` | string | No | Updated lead source. Leave empty to keep unchanged. |
| `postal_code` | string | No | Updated postal/zip code. Leave empty to keep unchanged. |
| `custom_fields` | object | No | Custom fields to update on the lead. Pass a dictionary where keys are the Salesforce API names of custom fields (e.g., 'Level__c', 'Languages__c') and values are the field values to set. Custom field names typically end with '__c'. |
| `annual_revenue` | number | No | Updated annual revenue. Leave unset to keep unchanged. Negative values are passed through to Salesforce as-is (useful for adjustments/write-offs). |
| `number_of_employees` | integer | No | Updated number of employees. Leave unset to keep unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update lead by ID with JSON payload

**Slug:** `SALESFORCE_UPDATE_LEAD_BY_ID_WITH_JSON_PAYLOAD`

DEPRECATED: Updates specified fields of an existing Lead in Salesforce via its unique ID (path parameter), returning HTTP 204 on success or error details on failure; request body must contain at least one field to update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique Salesforce ID of the Lead to update (e.g., 001R0000005hDFYIA2); this is a required path parameter. |
| `Fax` | string | No | Fax number. |
| `City` | string | No | City for the lead's address. |
| `Name` | string | No | Read-only full name of the lead (concatenation of FirstName, MiddleName, LastName, Suffix; max 203 characters). |
| `Email` | string | No | Email address. |
| `Phone` | string | No | Primary phone number. |
| `State` | string | No | State or province (e.g., CA, California). |
| `Title` | string | No | Lead's job title. |
| `Jigsaw` | string | No | Data.com (Jigsaw) contact ID reference (max 20 chars). Indicates Data.com import. Do not modify. Label: Data.com Key. |
| `Rating` | string | No | Lead rating (e.g., potential or priority). |
| `Status` | string | No | Current status (e.g., Open, Contacted); defined in LeadStatus picklist. |
| `Street` | string | No | Street address (e.g., 123 Main St). |
| `Company` | string | No | Required. Company the lead works for. If person accounts are enabled and Company is null, the lead converts to a person account. |
| `Country` | string | No | Country for the lead's address. |
| `OwnerId` | string | No | Salesforce User ID of the lead owner. |
| `Website` | string | No | Website URL. |
| `Industry` | string | No | Primary industry of the lead's company. |
| `LastName` | string | No | Lead's last name (up to 80 characters). |
| `Latitude` | number | No | WGS84 latitude in decimal degrees (-90.0 to 90.0, up to 15 decimal places). |
| `PhotoUrl` | string | No | Relative URL path to the lead's photo; combine with Salesforce instance URL for full image URL. Empty if Social Accounts and Contacts is disabled. |
| `FirstName` | string | No | Lead's first name (up to 40 characters). |
| `IsDeleted` | boolean | No | Specifies if the Lead is in the Recycle Bin. Label: Deleted. |
| `Longitude` | number | No | WGS84 longitude in decimal degrees (-180.0 to 180.0, up to 15 decimal places). |
| `LeadSource` | string ("Web" | "Other" | "Phone Inquiry" | "Partner Referral" | "Purchased List") | No | Source of the lead. |
| `PostalCode` | string | No | Postal code (e.g., ZIP code). Label: Zip/Postal Code. |
| `Primary__c` | string | No | Custom field, often indicating primary contact status. |
| `SICCode__c` | string | No | Custom field for Standard Industrial Classification (SIC) code. |
| `Salutation` | string ("Mr." | "Ms." | "Mrs." | "Dr." | "Prof.") | No | Lead's salutation. |
| `CleanStatus` | string | No | Data cleanliness status compared with Data.com (e.g., Matched/In Sync, Acknowledged/Reviewed). |
| `CreatedById` | string | No | Read-only ID of the user who created the lead. |
| `CreatedDate` | string | No | Read-only creation timestamp (ISO 8601). |
| `Description` | string | No | Free-text description or notes (up to 32,000 characters). |
| `IsConverted` | boolean | No | Read-only flag indicating if the lead has been converted. Label: Converted. |
| `MobilePhone` | string | No | Mobile phone number. |
| `IndividualId` | string | No | ID of the associated Individual (data privacy) record. Available if Data Protection and Privacy is enabled. |
| `AnnualRevenue` | number | No | Annual revenue of the lead's company. |
| `ConvertedDate` | string | No | Read-only date of lead conversion (YYYY-MM-DD). |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `DandbCompanyId` | string | No | Typically read-only D&B Company ID used by Data.com. |
| `LastViewedDate` | string | No | Read-only timestamp of when the current user last viewed this lead (ISO 8601). |
| `MasterRecordId` | string | No | ID of the master Lead record if this Lead was merged and deleted; `null` otherwise. |
| `SystemModstamp` | string | No | Read-only timestamp of last system modification (ISO 8601). |
| `GeocodeAccuracy` | string | No | Accuracy level of the geocoded address, specific to Salesforce's geocoding service. |
| `IsUnreadByOwner` | boolean | No | Specifies if the lead is unread by its owner. Label: Unread By Owner. |
| `JigsawContactId` | string | No | Typically read-only Data.com (Jigsaw) contact ID for integration. |
| `attributes__url` | string | No | API URL for this Lead record. Generally not set by user for simple updates. |
| `EmailBouncedDate` | string | No | Date and time of email bounce (ISO 8601), if bounce management is active. |
| `IsPriorityRecord` | boolean | No | Indicates if this is a priority record; meaning varies by Salesforce customization. |
| `LastActivityDate` | string | No | Read-only most recent activity date (YYYY-MM-DD). |
| `LastModifiedById` | string | No | Read-only ID of the user who last modified the lead. |
| `LastModifiedDate` | string | No | Read-only last modification timestamp (ISO 8601). |
| `attributes__type` | string | No | Salesforce sObject type (e.g., 'Lead'). Generally not set by user for simple updates. |
| `CompanyDunsNumber` | string | No | Company D-U-N-S number (max 9 chars). Requires Data.com Prospector/Clean. |
| `NumberOfEmployees` | integer | No | Number of employees at the lead's company. Label: Employees. |
| `ConvertedAccountId` | string | No | Read-only Salesforce ID of the Account created from this lead. |
| `ConvertedContactId` | string | No | Read-only Salesforce ID of the Contact created from this lead. |
| `EmailBouncedReason` | string | No | Reason for email bounce, if bounce management is active. |
| `LastReferencedDate` | string | No | Read-only timestamp of when the current user last accessed this lead or related record (ISO 8601). |
| `ProductInterest__c` | string | No | Custom field for lead's product interest. |
| `CurrentGenerators__c` | string | No | Custom field, possibly detailing current solutions or 'generators' used. |
| `NumberofLocations__c` | integer | No | Custom field for the number of locations of the lead's company. |
| `ConvertedOpportunityId` | string | No | Read-only Salesforce ID of the Opportunity created from this lead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update list view preferences

**Slug:** `SALESFORCE_UPDATE_LIST_VIEW_PREFERENCES`

Tool to update user preferences for a Salesforce list view including column widths, text wrapping, and display order. Use when you need to customize how columns appear in a list view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `column_wrap` | object | No | Maps field API names to boolean values indicating whether text should wrap to multiple lines (true) or be truncated (false). |
| `column_order` | array | No | Defines the left-to-right display order of columns using field API names. |
| `column_widths` | object | No | Maps field API names to their desired display widths in pixels. Only include columns you want to resize. |
| `object_api_name` | string | Yes | The API name of the Salesforce object (e.g., 'Account', 'Lead', 'Contact'). |
| `list_view_api_name` | string | Yes | The API name of the specific list view (e.g., 'AllAccounts', 'MyLeads'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update note

**Slug:** `SALESFORCE_UPDATE_NOTE`

Updates an existing note in Salesforce with the specified changes. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Updated body/content of the note. Leave empty to keep unchanged. |
| `title` | string | No | Updated title of the note. Leave empty to keep unchanged. |
| `note_id` | string | Yes | The Salesforce ID of the note to update. |
| `owner_id` | string | No | Updated owner ID. Leave empty to keep unchanged. |
| `is_private` | boolean | No | Updated privacy setting. Leave empty to keep unchanged. |
| `custom_fields` | object | No | Custom fields to update on the note. Keys should be the API names of custom fields (e.g., 'Custom_Field__c'). Values can be strings, numbers, booleans, or null. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update opportunity

**Slug:** `SALESFORCE_UPDATE_OPPORTUNITY`

Updates an existing opportunity in Salesforce with the specified changes. Only provided fields will be updated. Returns HTTP 204 with empty body on success; call SALESFORCE_GET_OPPORTUNITY afterward to read updated values. Updates may fail with FIELD_CUSTOM_VALIDATION_EXCEPTION or REQUIRED_FIELD_MISSING — inspect the error message to identify the offending field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Updated opportunity name. Leave empty to keep unchanged. |
| `type` | string | No | Updated opportunity type. Leave empty to keep unchanged. |
| `amount` | number | No | Updated amount. Leave unset to keep unchanged. Negative values are passed through to Salesforce as-is. |
| `next_step` | string | No | Updated next step. Leave empty to keep unchanged. |
| `account_id` | string | No | Updated Account ID. Leave empty to keep unchanged. |
| `close_date` | string | No | Updated close date in YYYY-MM-DD format. Leave empty to keep unchanged. |
| `stage_name` | string | No | Updated stage. Leave empty to keep unchanged. Must exactly match a stage defined in the org's current sales process; use SALESFORCE_GET_ALL_FIELDS_FOR_OBJECT with object_name='Opportunity' to discover valid values. |
| `description` | string | No | Updated description. Leave empty to keep unchanged. |
| `lead_source` | string | No | Updated lead source. Leave empty to keep unchanged. |
| `probability` | number | No | Updated probability percentage (0-100). Leave unset to keep unchanged. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values to update. Use the exact API name ending with '__c'. IMPORTANT for lookup/reference fields: Fields that reference other records (e.g., Contact__c, User__c, Account__c) require a valid 18-character Salesforce record ID (e.g., '003XXXXXXXXXXXXXXX' for Contact, '005XXXXXXXXXXXXXXX' for User), NOT descriptive names or text. Passing names like 'John Smith' instead of IDs will fail with MALFORMED_ID error. IMPORTANT for picklist fields: Restricted picklists only accept predefined values from the Salesforce org. Use SALESFORCE_GET_ALL_FIELDS_FOR_OBJECT with object_name='Opportunity' to discover field types and valid values. |
| `opportunity_id` | string | Yes | The Salesforce ID of the opportunity to update. Multiple opportunities may share the same name — apply additional filters (stage, owner, account) or confirm with the user before updating to avoid modifying the wrong record. Use IDs from fresh search results; stale or manually constructed IDs may be invalid. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update opportunity by id

**Slug:** `SALESFORCE_UPDATE_OPPORTUNITY_BY_ID`

DEPRECATED: Updates specified fields of an existing Salesforce Opportunity by its ID; the Opportunity must exist, and some fields (like Name, StageName, CloseDate) may have specific Salesforce validation rules if being modified, while read-only fields update indirectly based on other changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique Salesforce ID of the Opportunity to update (e.g., 006P0000004iVBDIA2). |
| `Name` | string | No | Name for this opportunity. Max 120 characters. |
| `Type` | string | No | Type of opportunity (e.g., 'New Business', 'Existing Customer'). Label: Opportunity Type. |
| `IsWon` | boolean | No | Read-only. Indicates if won. Controlled by StageName. Label: Won. |
| `Amount` | integer | No | Estimated total sale amount. If the opportunity has products, this amount is the sum of the related products and direct updates to this field are ignored. |
| `Fiscal` | string | No | If fiscal years are not enabled: name of the fiscal quarter/period for CloseDate (Format: "YYYY Q", e.g., "2023 1"). |
| `OwnerId` | string | No | ID of the User owner. Updating may change previous owner's record access. Requires 'Transfer Record' permission (API v16.0+). |
| `IsClosed` | boolean | No | Read-only. Indicates if closed. Controlled by StageName. Label: Closed. |
| `NextStep` | string | No | Next task in closing the opportunity. Max 255 characters. |
| `AccountId` | string | No | ID of the associated Account, which must exist in Salesforce. |
| `CloseDate` | string | No | Expected close date in YYYY-MM-DD format. |
| `ContactId` | string | No | Read-only. ID of primary Contact, derived from OpportunityContactRole. Set at creation via IsPrimary flag on OpportunityContactRole (API v46.0+). |
| `IsDeleted` | boolean | No | Indicates if the object is in the Recycle Bin. Label: Deleted. |
| `IsPrivate` | boolean | No | If true, the opportunity is private, visible only to the owner and administrators. |
| `PushCount` | integer | No | Number of times this record has been synchronized with a mobile device. Used by Salesforce mobile applications. |
| `StageName` | string | No | Current stage (e.g., 'Prospecting'). Updating automatically updates ForecastCategoryName, IsClosed, IsWon, and Probability. Query OpportunityStage object for available names. |
| `CampaignId` | string | No | ID of a related Campaign. Requires Campaigns feature enabled and read access to the Campaign object. |
| `FiscalYear` | integer | No | Fiscal year of the CloseDate (e.g., 2024), based on organization's fiscal year settings. |
| `LeadSource` | string | No | Source of this opportunity (e.g., 'Advertisement', 'Trade Show'). |
| `CreatedById` | string | No | Read-only. ID of the user who created this record. |
| `CreatedDate` | string | No | Read-only. Creation timestamp (ISO 8601 UTC). |
| `Description` | string | No | Text description of the opportunity. Max 32,000 characters. |
| `Probability` | integer | No | Estimated confidence percentage (0-100) in closing. Usually implied by StageName, but can be overridden. Round decimal probabilities to whole numbers. |
| `Pricebook2Id` | string | No | ID of the associated Pricebook2. Required to add line items if products are enabled. Cannot update if line items exist. |
| `FiscalQuarter` | integer | No | Fiscal quarter (1-4) of the CloseDate, based on organization's fiscal year settings. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `HasOverdueTask` | boolean | No | Read-only. True if opportunity has an overdue task (API v35.0+). |
| `LastViewedDate` | string | No | Read-only. Timestamp current user last viewed this record (ISO 8601 UTC). Null if only referenced (LastReferencedDate). |
| `OrderNumber__c` | string | No | Order number associated with the opportunity. |
| `SystemModstamp` | string | No | Read-only. Last system modification timestamp (ISO 8601 UTC), by user or automation. |
| `ExpectedRevenue` | integer | No | Read-only. Calculated as Amount * Probability. Updated by changes to Amount or Probability. |
| `HasOpenActivity` | boolean | No | Read-only. True if opportunity has an open event or task (API v35.0+). |
| `attributes__url` | string | No | Relative URL of the SObject record in Salesforce. Generally Salesforce-provided. |
| `ForecastCategory` | string | No | Forecast category (e.g., 'Pipeline', 'BestCase'). Implied by StageName but can be overridden. In API v12.0+, value is set via ForecastCategoryName. |
| `LastActivityDate` | string | No | Read-only. Due date of most recent event or last closed task (YYYY-MM-DD). |
| `LastModifiedById` | string | No | Read-only. ID of the user who last modified this record. |
| `LastModifiedDate` | string | No | Read-only. Last modification timestamp (ISO 8601 UTC). |
| `attributes__type` | string | No | Type of the Salesforce SObject (e.g., 'Opportunity'). Generally Salesforce-provided. |
| `TrackingNumber__c` | string | No | Tracking number related to the opportunity. |
| `LastReferencedDate` | string | No | Read-only. Timestamp current user last accessed this record or a related record (ISO 8601 UTC). |
| `MainCompetitors__c` | string | No | Main competitors for this opportunity. |
| `LastStageChangeDate` | string | No | Read-only. Timestamp of last stage change (ISO 8601 UTC). |
| `CurrentGenerators__c` | string | No | Information about current generators related to the opportunity. |
| `ForecastCategoryName` | string | No | API v12.0+. Name of the forecast category (e.g., 'Pipeline'). Implied by StageName but can be overridden. |
| `HasOpportunityLineItem` | boolean | No | Read-only. True if opportunity has line items (Products). Requires assigned Pricebook to add line items. |
| `TotalOpportunityQuantity` | integer | No | Number of items in this opportunity. Used in quantity-based forecasting. |
| `LastAmountChangedHistoryId` | string | No | Read-only. ID of OpportunityHistory record for last Amount update (API v50.0+). |
| `DeliveryInstallationStatus__c` | string | No | Delivery and installation status of the opportunity. |
| `LastCloseDateChangedHistoryId` | string | No | Read-only. ID of OpportunityHistory record for last CloseDate update (API v50.0+). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a record

**Slug:** `SALESFORCE_UPDATE_RECORD`

Tool to update a record's data in Salesforce via UI API. Use when you need to modify field values on an existing record. Salesforce validation rules are enforced. Pass If-Unmodified-Since header to prevent conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | Map of field API names to their new values. Only include fields you want to update. Field names should use API names (e.g., 'FirstName', 'Email', 'CustomField__c'). Unspecified fields remain unchanged. |
| `api_name` | string | No | The API name of the record's object type (e.g., 'Contact', 'Account', 'Lead'). Can be null or omitted for updates. |
| `record_id` | string | Yes | The unique 15 or 18-character Salesforce ID of the record to update. |
| `use_default_rule` | boolean | No | Case, Lead, and Account objects only. If true, applies assignment and auto-response rules. Default is false. |
| `trigger_user_email` | boolean | No | Case and Lead objects only. If true, sends email notifications to users in the organization. Default is false. |
| `if_unmodified_since` | string | No | RFC 7231 date/time format. Makes the request conditional - server will only update if the record hasn't been modified since this timestamp. Returns 412 Precondition Failed if the record was modified after this date. |
| `trigger_other_email` | boolean | No | Case object only. If true, sends email notifications outside the organization. Default is false. |
| `allow_save_on_duplicate` | boolean | No | If true, allows the record to be saved even if duplicate detection rules are triggered. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Related List Preferences

**Slug:** `SALESFORCE_UPDATE_RELATED_LIST_PREFERENCES`

Tool to update user preferences for a specific related list on an object in Salesforce. Use when customizing display settings such as column widths, text wrapping, column ordering, and sorting preferences for related lists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ordered_by` | array | No | Array of sort preference objects defining field sorting order. Each object specifies a field and sort direction. |
| `column_wrap` | object | No | Text wrapping preferences for columns, mapping field API names to boolean wrap settings. Set to true to enable text wrapping for that column, false to disable. |
| `column_widths` | object | No | User-defined column width preferences mapping field API names to pixel widths. Use this to customize how wide each column appears in the related list. |
| `composite_layout_name` | string | Yes | The composite layout name in format {objectApiName}.{relatedListId}. This identifies which related list on which object to update preferences for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update specific note by id

**Slug:** `SALESFORCE_UPDATE_SPECIFIC_NOTE_BY_ID`

DEPRECATED: Use `update_specific_note_by_id` instead. Updates specified fields of an existing Salesforce Note SObject identified by its ID; the Note must already exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The 18-character Salesforce ID of the Note SObject to be updated. This is a required path parameter. (Note: actual Note IDs typically start with `002`). |
| `Body` | string | No | Content or body of the Note. Limited to 32 KB. |
| `Title` | string | No | Title of the Note. |
| `OwnerId` | string | No | The 18-character Salesforce ID of the User who owns the Note. Updating this changes Note ownership. |
| `ParentId` | string | No | ID of the parent SObject (e.g., Account, Contact, Opportunity) to which this Note is related; can be updated. Salesforce Note objects often require a `ParentId`. |
| `IsDeleted` | boolean | No | Indicates whether the Note has been moved to the Recycle Bin (`true`) or not (`false`). Set to `true` to soft-delete. Label: `Deleted`. |
| `IsPrivate` | boolean | No | Controls Note visibility. If `true`, Note is private (accessible only by owner or users with 'Modify All Data'). If `false` (default), visibility based on sharing rules. Note: users without 'Modify All Data' setting this `true` on a non-owned note might lose access. Label: `Private`. |
| `CreatedById` | string | No | Salesforce ID of the User who created the Note (Salesforce field `CreatedById`). System-generated, read-only, and not updatable. |
| `CreatedDate` | string | No | Timestamp of Note creation (Salesforce field `CreatedDate`). System-generated, read-only, and not updatable through this action. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c'. |
| `SystemModstamp` | string | No | Timestamp of Note record's last modification by user or system (Salesforce field `SystemModstamp`). System-generated, read-only, not updatable. |
| `attributes__url` | string | No | Relative URL for the SObject record. System-managed metadata, not part of an update request. |
| `LastModifiedById` | string | No | Salesforce ID of the User who last modified the Note (Salesforce field `LastModifiedById`). System-generated, read-only, and not updatable. |
| `LastModifiedDate` | string | No | Timestamp of Note's last modification (Salesforce field `LastModifiedDate`). System-generated, read-only, and not updatable. |
| `attributes__type` | string | No | Type of the SObject, typically 'Note'. System-managed metadata, not part of an update request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update task

**Slug:** `SALESFORCE_UPDATE_TASK`

Updates an existing task in Salesforce with new information. Only provided fields will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Updated status. Leave empty to keep unchanged. |
| `who_id` | string | No | Updated Contact or Lead ID. Leave empty to keep unchanged. |
| `subject` | string | No | Updated subject/title of the task. Leave empty to keep unchanged. |
| `task_id` | string | Yes | The Salesforce ID of the task to update. |
| `what_id` | string | No | Updated related record ID. Leave empty to keep unchanged. |
| `priority` | string | No | Updated priority level. Leave empty to keep unchanged. |
| `description` | string | No | Updated description or notes. Leave empty to keep unchanged. |
| `activity_date` | string | No | Updated due date in YYYY-MM-DD format. Leave empty to keep unchanged. |
| `custom_fields` | object | No | Dictionary of custom field API names and their values. Custom field names typically end with '__c' (e.g., 'Priority_Level__c': 'High'). |
| `is_reminder_set` | boolean | No | Whether to set/unset a reminder. Leave empty to keep unchanged. |
| `reminder_date_time` | string | No | Updated reminder date/time in ISO format. Leave empty to keep unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload file to Salesforce Files

**Slug:** `SALESFORCE_UPLOAD_FILE`

Upload a file to Salesforce Files home via the Connect REST API. Use when you need to attach files to records or store them in a user's personal library. File size limit: 50 MB per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | string | No | Description of the file to help users understand its content. |
| `file` | object | No | File to upload to Salesforce Files home. Either 'file' or 'filename' + 'content_b64' must be provided. |
| `title` | string | No | The title/name of the file in Salesforce. If not specified, the filename from the uploaded file will be used. |
| `filename` | string | No | the name of the file (e.g., 'document.pdf'). Must be used together with 'content_b64'. |
| `content_b64` | string | No | Base64-encoded file content. Must be used together with 'filename'. |
| `mimetype_override` | string | No | MIME type for the file when using filename/content_b64. Defaults to 'application/octet-stream' if not provided. |
| `first_publish_location_id` | string | No | The ID of the record to associate the file with (typically an 18-character Salesforce ID). If not specified, the file is uploaded to the user's personal library. Can be Account, Contact, Lead, Opportunity, or other record IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload job data

**Slug:** `SALESFORCE_UPLOAD_JOB_DATA`

Tool to upload CSV data to a Salesforce Bulk API v2 ingest job. Use after creating a job and before closing it. Only ONE upload is allowed per job - multiple uploads will fail. After upload, close the job with state 'UploadComplete' to begin processing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier of the Bulk API v2 ingest job to upload data to. This is the job ID returned from job creation. |
| `csv_data` | string | Yes | The CSV-formatted data to upload. First row must contain column headers matching Salesforce object field names. Subsequent rows contain the data records. Line endings must match the lineEnding parameter specified during job creation (LF or CRLF). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert sObject by External ID

**Slug:** `SALESFORCE_UPSERT_SOBJECT_BY_EXTERNAL_ID`

Tool to upsert records using sObject Rows by External ID. Use when you need to create or update a Salesforce record based on an external ID field value - creates a new record if the external ID doesn't exist, or updates the existing record if it does.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | JSON object containing the fields to create or update. Field names should be the Salesforce API names with their corresponding values. |
| `sobject` | string | Yes | The API name of the Salesforce object (e.g., Account, Contact, CustomObject__c). |
| `field_name` | string | Yes | The API name of the external ID field. This field must be marked as 'External ID' in Salesforce. |
| `field_value` | string | Yes | The value of the external ID for the specific record to upsert. |
| `update_only` | boolean | No | Available in API v62.0+. When set to true, only updates existing records without creating new ones. Returns 404 if record doesn't exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `SALESFORCE_WHO_AM_I`

Return the identity (email, name, org) of the connected Salesforce account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Account Created or Updated

**Slug:** `SALESFORCE_ACCOUNT_CREATED_OR_UPDATED_TRIGGER`

**Type:** poll

Triggers when an Account is created or updated in Salesforce.
Uses LastModifiedDate high-watermark to capture both creations and updates.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `additional_filter` | string | No | Optional additional SOQL filter to AND with LastModifiedDate condition. Example: Industry = 'Technology' |
| `fields` | array | No | Optional list of Account fields to include in the payload. If not provided, a set of common key fields is returned. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `max_records` | integer | No | Maximum number of accounts to check in each poll (1-1000) |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | object | Yes | The Account record |
| `event_type` | string | No | Type of Salesforce Account event |

### Contact Updated

**Slug:** `SALESFORCE_CONTACT_UPDATED_TRIGGER`

**Type:** poll

Triggers when an existing Salesforce Contact record is modified.
Emits changed fields alongside relevant timestamps.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields_to_watch` | array | No | List of Contact fields to monitor for changes. Only changes in these fields will be emitted in the payload. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `max_batch_size` | integer | No | Maximum number of updated contacts to fetch per poll (LIMIT). |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | object | Yes | Mapping of field name to {old, new} values |
| `contact_id` | string | Yes | The ID of the updated contact |
| `event_type` | string | No | Type of event |
| `last_modified_date` | string | No | LastModifiedDate timestamp of the record |
| `system_modstamp` | string | No | SystemModstamp timestamp of the record |

### Record Updated (Generic SObject)

**Slug:** `SALESFORCE_GENERIC_S_OBJECT_RECORD_UPDATED_TRIGGER`

**Type:** poll

Triggers when monitored fields change on any Salesforce SObject. You specify the SObject type
and which field values should be returned in the payload. The trigger uses SystemModstamp to
detect changes regardless of which specific field changed.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields_to_monitor` | array | No | List of field API names to include in the payload when a record is updated. If omitted, only metadata like Id, SystemModstamp, and LastModifiedDate will be returned. |
| `filter` | string | No | Optional SOQL filter expression to further restrict which records to monitor. Example: OwnerId = '005XXXXXXXXXXXX' AND IsDeleted = false |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `max_results` | integer | No | Maximum number of records to fetch per poll (1-2000). |
| `sobject_name` | string | Yes | The API name of the Salesforce SObject to monitor (e.g., Account, Contact, Lead) |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of event emitted for the generic SObject update |
| `id` | string | Yes | The record ID |
| `last_modified_date` | string | No | LastModifiedDate value of the record at the time of update |
| `monitored_values` | object | No | A dictionary of monitored field values at the time of the update |
| `sobject` | string | Yes | The SObject type that was updated |
| `system_modstamp` | string | No | SystemModstamp value of the record at the time of update |

### New Contact Trigger

**Slug:** `SALESFORCE_NEW_CONTACT_TRIGGER`

**Type:** poll

Triggers when a new Contact is Created in Salesforce.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact` | object | Yes | The Salesforce contact that was created |
| `event_type` | string | No | Type of Salesforce contact event |

### New Lead Trigger

**Slug:** `SALESFORCE_NEW_LEAD_TRIGGER`

**Type:** poll

Triggers when a new Lead is created in Salesforce.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of Salesforce lead event |
| `lead` | object | Yes | The Salesforce lead that was created |

### New or Updated Opportunity

**Slug:** `SALESFORCE_NEW_OR_UPDATED_OPPORTUNITY_TRIGGER`

**Type:** poll

Triggers when a Salesforce Opportunity is created or updated.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `max_results` | integer | No | Maximum number of records to fetch per poll (1-2000). |
| `stage_name` | string | No | Optional StageName to filter opportunities by. When provided, only opportunities with this StageName will be returned. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of Salesforce opportunity event |
| `opportunity` | object | Yes | The Salesforce Opportunity that was created or updated |

### Task Created or Completed

**Slug:** `SALESFORCE_TASK_CREATED_OR_COMPLETED_TRIGGER`

**Type:** poll

Triggers when a Task is created or when its status changes to Completed in Salesforce.
Supports optional filtering by task Status or Subject.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `limit` | integer | No | Maximum number of tasks to retrieve per poll |
| `status` | string | No | Filter tasks by exact Status (e.g., 'Not Started', 'In Progress', 'Completed') |
| `subject` | string | No | Filter tasks where Subject contains this text (partial match) |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | Yes | Type of event: 'task_created' or 'task_completed' |
| `task` | object | Yes | The Salesforce task involved in the event |
