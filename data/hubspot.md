# HubSpot

HubSpot is an inbound marketing, sales, and customer service platform integrating CRM, email automation, and analytics to facilitate lead nurturing and seamless customer experiences

- **Category:** crm
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 263
- **Triggers:** 2
- **Slug:** `HUBSPOT`
- **Version:** 20260915_00

## Frequently Asked Questions

### Why do users see a "Connecting an unverified app" warning?

HubSpot shows this warning because the default Composio-managed HubSpot OAuth app is still awaiting HubSpot approval. The connection can still work, but HubSpot asks the user to explicitly accept the warning before continuing.

Composio is working on getting the default HubSpot OAuth app approved, but there is no concrete ETA because the final review timeline depends on HubSpot.

If this warning blocks your rollout, use your own HubSpot OAuth app credentials in a custom Composio auth config. That lets you control the app identity, review status, and consent screen shown to your users.

### Should I use Composio-managed auth or my own HubSpot OAuth app?

Use Composio-managed auth when you want the fastest setup and the default Composio HubSpot app covers the permissions you need.

With Composio-managed HubSpot auth, you can only remove optional scopes that are already available on the Composio-managed HubSpot app.

You cannot add new scopes to the managed app, and you cannot remove scopes that are non-optional for that managed auth config. If you need a different scope set, create a custom HubSpot OAuth app and configure those scopes there.

Use your own HubSpot OAuth app when you need a different scope set, your own app name and branding on the consent screen, tighter control over app review and rollout, or a production setup owned by your team. For setup steps, see [How to create OAuth credentials for HubSpot](https://composio.dev/auth/hubspot).

### How do scopes work in HubSpot?

The scope category must match between Composio and your HubSpot developer app.

- Scopes in Composio `scopes` must be configured in HubSpot as **Required** or **Conditionally required**.
- Scopes in Composio `optional_scopes` must be configured in HubSpot as **Optional**.
- Do not request a scope from Composio unless that same scope is enabled in the HubSpot developer app.

If you use the API, pass the fields in the auth config credentials:

```json
{
  "credentials": {
    "scopes": "oauth crm.objects.contacts.read",
    "optional_scopes": "crm.objects.companies.read crm.objects.deals.read"
  }
}
```

Use the [Create Auth Config API](/reference/api-reference/auth-configs/postAuthConfigs) to create the auth config, the [Get Auth Config API](/reference/api-reference/auth-configs/getAuthConfigsByNanoid) to inspect what Composio will request, and the [Update Auth Config API](/reference/api-reference/auth-configs/patchAuthConfigsByNanoid) to change the scope fields.

When reading an auth config through the API, check both `credentials.scopes` and `credentials.optional_scopes`. Together, they represent the HubSpot permissions Composio can request for that auth config.

HubSpot's docs may refer to the authorization URL parameter as `optional_scope`; in Composio, the editable auth config field is named `optional_scopes`.

### What is the recommended custom HubSpot OAuth scope setup?

For custom auth, we usually recommend keeping the required list minimal:

```text
oauth
```

Then put tool-specific HubSpot permissions in `optional_scopes`, and mark those same permissions as optional in your HubSpot developer app.

The main reason is flexibility. HubSpot requires the scopes in the OAuth URL to match how those scopes are categorized in the HubSpot developer app. If you add a new permission as required in HubSpot, every Composio auth config that uses that app must also request it through `scopes`; otherwise new installs can fail. Keeping tool-specific permissions optional makes it easier to add permissions over time without forcing every auth config to move in lockstep.

If a permission is mandatory for your product to work, keep it required. Just make sure it is required in HubSpot and sent through Composio `scopes`.

Example A: all selected permissions are required in HubSpot:

```json
{
  "credentials": {
    "scopes": "oauth crm.objects.contacts.read crm.objects.companies.read crm.objects.deals.read",
    "optional_scopes": ""
  }
}
```

Example B: only `oauth` is required in HubSpot and the selected tool permissions are optional:

```json
{
  "credentials": {
    "scopes": "oauth",
    "optional_scopes": "crm.objects.contacts.read crm.objects.contacts.write crm.objects.companies.read crm.objects.companies.write crm.objects.deals.read crm.objects.deals.write tickets timeline"
  }
}
```

Both are valid. What matters is that Composio and HubSpot agree on which scopes are required and which scopes are optional.

After changing scopes, reconnect affected HubSpot accounts. Existing connected accounts keep the scopes granted during the original authorization. Optional scopes can let a connection succeed even when a portal cannot grant every permission, but a tool can still fail later if that tool needs a permission the user did not grant.

### What are common HubSpot troubleshooting checks?

- **Scope mismatch or callback errors:** confirm every requested scope is enabled in HubSpot and is in the same category in both HubSpot and Composio.
- **Missing-scope tool errors:** add the missing scope to the auth config and HubSpot developer app, then reconnect the account.
- **Contact list/search limit errors:** `HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA` and `HUBSPOT_LIST_CONTACTS_PAGE` support a maximum `limit` of 100 results per request.
- **Webhook setup errors:** HubSpot webhooks require a public app with an App ID and Developer API Key. Private or internal apps cannot receive webhooks.
- **Refresh or expiry errors:** Common causes include the user revoking the app in HubSpot, HubSpot app credentials changing, the refresh token being invalidated, or the connected account being reauthorized with a different app configuration. After rotating custom OAuth credentials or changing the HubSpot developer app, reconnect affected HubSpot accounts.

### HubSpot auth loops can be caused by HubSpot-side workspace/login state

If the HubSpot flow loops while Composio works on its side, retry while logged into the correct HubSpot workspace and confirm the OAuth app is public/configured correctly.

### HubSpot triggers require each user’s own app ID and developer API key

HubSpot webhook APIs need the specific HubSpot app that should receive webhook notifications. For user HubSpot triggers, `app_id` and developer API key are required because each user needs their own HubSpot app for webhook delivery.

## Tools

### Add asset association

**Slug:** `HUBSPOT_ADD_ASSET_ASSOCIATION`

Associates an existing asset ('FORM', 'OBJECT_LIST', or 'EXTERNAL_WEB_URL') with a specified HubSpot marketing campaign.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assetId` | string | Yes | The unique identifier of the asset to be associated with the campaign. This ID is specific to the assetType. For FORMs, use the form's numeric ID. For OBJECT_LIST, use the list ID (ILS ID). For EMAIL, use the email's content ID. For LANDING_PAGE or BLOG_POST, use the page/post ID. These IDs can be obtained from HubSpot's UI (in the asset's URL or details panel) or by using the corresponding list/search actions for that asset type. |
| `assetType` | string | Yes | Type of asset to associate with the campaign. Commonly supported types include: 'FORM', 'OBJECT_LIST' (Static/Contact List), 'EXTERNAL_WEB_URL', 'EMAIL', 'LANDING_PAGE', 'BLOG_POST', 'CTA', 'WORKFLOW', 'SOCIAL_POST', 'WEBSITE_PAGE', 'SEQUENCE', 'MEETING_EVENT', 'PLAYBOOK', 'FEEDBACK_SURVEY', 'SALES_DOCUMENT'. HubSpot continues to expand asset type support over time. |
| `campaignGuid` | string | Yes | The unique identifier (UUID) of the HubSpot campaign to which the asset will be associated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add token to event template

**Slug:** `HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE`

Adds a new custom data token to an existing event template for a specified HubSpot application, optionally populating a CRM object property if objectPropertyName is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The internal name of the token, used for referencing it within templates. Must be unique for this event template. Allowed characters: alphanumeric, periods (.), dashes (-), or underscores (_). |
| `type` | string ("date" | "enumeration" | "number" | "string") | Yes | The data type of the token. Determines how the token's value is stored and validated. |
| `appId` | integer | Yes | Numeric identifier of the target application associated with the event template. Provided in the URL path. |
| `label` | string | Yes | The user-facing label for the token. This label is used for list segmentation and in reporting. |
| `options` | array | No | A list of options for the token, required and applicable only if the token `type` is 'enumeration'. Each option must have a 'label' and a 'value'. |
| `eventTemplateId` | string | Yes | Unique identifier of the event template. Provided in the URL path. |
| `objectPropertyName` | string | No | The name of an existing CRM object property (e.g., 'dealstage', 'lifecyclestage'). If provided, this token will populate the specified CRM object property associated with the event. This allows for building or updating CRM objects through the Timeline API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive batch of feedback submissions by id

**Slug:** `HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS`

Asynchronously archives a batch of HubSpot feedback submissions using their unique IDs, which must correspond to valid and existing submissions; the operation is queued, and submissions are moved from active views without being deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, where each object contains the 'id' of a feedback submission to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive batch of line items by id

**Slug:** `HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS`

Archives a batch of existing line items by their unique IDs in HubSpot CRM; this operation is irreversible via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, where each object contains the 'id' of a line item to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive batch of objects by id

**Slug:** `HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS`

Archives a batch of existing, non-archived CRM objects of a specified `objectType` by their IDs, effectively hiding them from active use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of input objects, where each object contains the 'id' of a CRM record to be archived. |
| `objectType` | string | Yes | The type of CRM object to archive (e.g., 'contacts', 'companies', 'deals', 'tickets'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive batch of properties

**Slug:** `HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES`

Archives a batch of properties by their internal names for a specified HubSpot CRM object type; this operation is idempotent and safe to retry.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of properties to archive, each specified by its internal `name`. |
| `objectType` | string | Yes | The HubSpot CRM object type for which properties are being archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive a batch of quotes by id

**Slug:** `HUBSPOT_ARCHIVE_BATCH_OF_QUOTES`

Archives a batch of existing quotes by their IDs, removing them from active views while keeping them accessible in your HubSpot account for viewing, downloading, cloning, or deletion; note that archived quotes cannot be restored to active status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, where each object contains the ID of a quote to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive companies

**Slug:** `HUBSPOT_ARCHIVE_COMPANIES`

Archives multiple HubSpot companies by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of company objects, each specifying the ID of the company to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive company

**Slug:** `HUBSPOT_ARCHIVE_COMPANY`

Archives an existing company in HubSpot CRM by its `companyId`, moving it to a recycling bin from which it can be restored, rather than permanently deleting it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Yes | The numeric identifier for the company to archive. Must contain only digits (e.g., '1234567890'). Do not use email addresses or other non-numeric identifiers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive contact

**Slug:** `HUBSPOT_ARCHIVE_CONTACT`

Archives a HubSpot contact by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | Numeric HubSpot contact ID (e.g., '386009987808'). Note: The archive endpoint does NOT support email addresses or idProperty - use HUBSPOT_GET_CONTACTS or HUBSPOT_SEARCH_CONTACTS to find the numeric ID first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive contacts

**Slug:** `HUBSPOT_ARCHIVE_CONTACTS`

Archives multiple HubSpot contacts by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of contact objects, each specifying the ID of the contact to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive a CRM object by ID

**Slug:** `HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID`

Archives a specific HubSpot CRM object by its type and ID, moving it to the recycling bin; this action is irreversible via the API but objects can often be restored via the HubSpot UI.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The unique identifier for the CRM object to be archived. This ID must correspond to an existing object of the specified `objectType`. The format is typically a string of numbers or a UUID. Ensure the correct ID is provided as this operation is irreversible via the API. |
| `objectType` | string | Yes | The type of CRM object to be archived. This value is case-sensitive, must be a valid HubSpot CRM object type (e.g., contacts, companies, deals, quotes), and should be provided in lowercase plural form (e.g., 'contacts', not 'Contact'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive deals

**Slug:** `HUBSPOT_ARCHIVE_DEALS`

Archives multiple HubSpot deals by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of deal objects to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### ArchiveEmail email

**Slug:** `HUBSPOT_ARCHIVE_EMAIL`

Archives the HubSpot email specified by `emailId` by moving it to the recycling bin, making it inaccessible unless restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | Numeric object ID of the email engagement record in HubSpot. This is NOT an email address - it must be a numeric ID (e.g., '1234567890'). The ID can be retrieved from the HubSpot CRM email activity list or from previous API responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive emails

**Slug:** `HUBSPOT_ARCHIVE_EMAILS`

Archives multiple HubSpot emails by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of email objects to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive feedback submission

**Slug:** `HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION`

Archives an existing, non-archived Feedback Submission in HubSpot CRM by its ID, moving it to the recycling bin (not permanently deleting it).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `feedbackSubmissionId` | string | Yes | The unique identifier of an existing Feedback Submission in HubSpot CRM to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive line item by id

**Slug:** `HUBSPOT_ARCHIVE_LINE_ITEM`

Archives a specific HubSpot line item by its ID, moving it to a recoverable state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lineItemId` | string | Yes | The unique identifier of the existing line item in HubSpot CRM to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive product

**Slug:** `HUBSPOT_ARCHIVE_PRODUCT`

Archives a HubSpot product by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productId` | string | Yes | Unique HubSpot identifier for the product to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive products

**Slug:** `HUBSPOT_ARCHIVE_PRODUCTS`

Archives multiple HubSpot products by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of product objects to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive property by object type and name

**Slug:** `HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME`

Archives a specified CRM property by its object type and name, moving it to the recycling bin; note that some default HubSpot properties cannot be archived.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The case-sensitive type of CRM object (e.g., 'contacts', 'companies') for which the property is being archived; must match an existing object type. |
| `propertyName` | string | Yes | The case-sensitive internal name of the property to archive (e.g., 'custom_field_1', 'annual_revenue'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive property group

**Slug:** `HUBSPOT_ARCHIVE_PROPERTY_GROUP`

Archives a HubSpot property group, making it inactive and hidden (not permanently deleted, allowing potential restoration) with immediate effect on its CRM visibility and usability.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupName` | string | Yes | The unique internal name of the property group you want to archive. This name is case-sensitive and must exactly match an existing property group's name within the specified `objectType`. |
| `objectType` | string | Yes | The specific CRM object type (e.g., 'contacts', 'companies', 'deals', or custom object types) that the property group belongs to. This value must be in lowercase and match an existing object type definition in your HubSpot account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive quote object by id

**Slug:** `HUBSPOT_ARCHIVE_QUOTE`

Archives a HubSpot Quote object by ID, moving it to the recycling bin where it can be restored within 90 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quoteId` | string | Yes | The unique identifier (ID) of an existing Quote object in HubSpot CRM to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive ticket

**Slug:** `HUBSPOT_ARCHIVE_TICKET`

Archives a HubSpot ticket by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticketId` | string | Yes | Unique HubSpot identifier for the ticket to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive tickets

**Slug:** `HUBSPOT_ARCHIVE_TICKETS`

Archives multiple HubSpot tickets by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of ticket objects to be archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Audit pipeline changes by id

**Slug:** `HUBSPOT_AUDIT_PIPELINE_CHANGES`

Retrieves a reverse chronological audit log of all changes for a specific, existing HubSpot CRM pipeline, which is identified by its `pipelineId` and a valid `objectType` that supports pipelines (e.g., 'deals', 'tickets').

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The HubSpot CRM object type that has pipelines (e.g., 'deals', 'tickets'); determines the pipeline's context. Must be a valid, case-sensitive object type. |
| `pipelineId` | string | Yes | The unique identifier of an existing pipeline within the specified `objectType` for which to retrieve the audit history. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch read companies by properties

**Slug:** `HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES`

Batch-retrieves up to 100 HubSpot company records by their IDs in a single request. Supports custom ID properties (e.g., domain), selective property retrieval, and historical property values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of company identifiers to retrieve. Each `id` within an input object corresponds to the value of the property specified in `idProperty`. |
| `archived` | boolean | No | If true, returns only archived company records; otherwise (default), returns active, non-archived companies. |
| `idProperty` | string | No | Property name to use as the unique identifier for companies in `inputs`. Defaults to `hs_object_id` (the HubSpot record ID) if not specified. Can be set to any unique company property configured in your HubSpot account. |
| `properties` | array | No | Optional list of company property names to retrieve. If omitted, a default set of properties (name, domain, hs_object_id, createdate, hs_lastmodifieddate, etc.) is returned. |
| `propertiesWithHistory` | array | No | Optional list of company property names for which to retrieve historical values. If not provided, no historical data is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch update quotes

**Slug:** `HUBSPOT_BATCH_UPDATE_QUOTES`

Updates multiple existing HubSpot quotes in a batch; each quote is identified by its object ID or a custom unique property (via `idProperty`), and only writable properties are modified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of `InputsRequest` objects, each specifying a quote to update and its new property values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel active import

**Slug:** `HUBSPOT_CANCEL_IMPORT`

Cancels an active HubSpot data import job using its `importId`; this action is irreversible, and any data already processed will remain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `importId` | integer | Yes | The unique identifier for the active HubSpot import job to be cancelled; must correspond to an import job currently in progress. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Clone marketing email

**Slug:** `HUBSPOT_CLONE_MARKETING_EMAIL`

Duplicates an existing HubSpot marketing email, identified by its `id`, into a new draft; an optional `cloneName` can be assigned to this new email copy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the existing marketing email to be cloned. |
| `cloneName` | string | No | The name for the newly cloned marketing email. If not provided, HubSpot may assign a default name (e.g., 'Copy of [Original Email Name]'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Configure calling extension settings

**Slug:** `HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS`

Configures or updates settings for a HubSpot app's calling extension, including its name, UI URL, iframe dimensions, `isReady` status, and `supportsCustomObjects` flag, for the specified `appId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | Publicly accessible HTTPS URL for the phone/calling UI, which should be built using the HubSpot Calling SDK. |
| `name` | string | Yes | Display name for the calling service in the HubSpot interface. |
| `appId` | integer | Yes | Unique identifier for the target HubSpot app whose calling extension settings are being configured. |
| `width` | integer | Yes | Target width in pixels for the iframe embedding the calling UI. |
| `height` | integer | Yes | Target height in pixels for the iframe embedding the calling UI. |
| `isReady` | boolean | No | If `true`, the calling service appears as an option under the 'Call' action in contact records; `false` hides it. |
| `supportsCustomObjects` | boolean | No | Specifies if the service is compatible with HubSpot's engagement v2 service and custom objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create A/B test variation

**Slug:** `HUBSPOT_CREATE_AB_TEST_VARIATION`

Creates a new A/B test variation for an existing HubSpot marketing email, using its `contentId`; the new variation is created as a draft that can be edited before publishing. This action only creates the variation—it does not start the A/B test or send emails. Note: If an active variation already exists for the email, a new one will not be created. Requires Marketing Hub Professional or Enterprise subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contentId` | string | Yes | The ID of the original email content to use as a template for the new variation. |
| `variationName` | string | Yes | A unique name for the new A/B test variation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new property group

**Slug:** `HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP`

Creates a new, empty property group for a specified CRM object type in HubSpot, requiring a unique group name for that object type; properties must be added separately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The unique internal programmatic name for the property group within the specified `objectType`, used for API referencing. |
| `label` | string | Yes | Human-readable label for the property group, displayed in the HubSpot UI. |
| `objectType` | string | Yes | The CRM object type for which the property group will be created. |
| `displayOrder` | integer | No | Order in which the group appears in the HubSpot UI. Positive values are sorted ascendingly; -1 places it after groups with positive `displayOrder`. If unspecified, the group is added at the end. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new marketing email

**Slug:** `HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL`

Creates a new marketing email in HubSpot, allowing comprehensive configuration of content, recipients, sender details, A/B testing, scheduling, web version, and other settings; the internal `name` for the email is required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Internal name of the email, as displayed on the HubSpot email dashboard. |
| `state` | string ("AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT") | No | Current state of the email (e.g., DRAFT, SCHEDULED, PUBLISHED). |
| `subject` | string | No | The subject line of the marketing email. |
| `archived` | boolean | No | True if the email is archived (typically hidden from main dashboard view). |
| `campaign` | string | No | ID (GUID) of the associated HubSpot campaign for tracking/reporting. |
| `language` | string ("af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za") | No | Primary language of the email content. |
| `publishDate` | string | No | Scheduled ISO 8601 date-time for email publication or sending. |
| `subcategory` | string | No | Email subcategory for internal organization or specific types (e.g., 'newsletter'). |
| `activeDomain` | string | No | Domain for sending the email; must be a connected and verified HubSpot sending domain. |
| `rssData__url` | string | No | URL of the RSS feed for email content. Must be valid and accessible if using RSS features. |
| `from__replyTo` | string | No | Primary 'From' and reply-to email address, unless `from__customReplyTo` is used. |
| `sendOnPublish` | boolean | No | True to send email immediately on publish; false to publish without sending until triggered/scheduled. |
| `businessUnitId` | string | No | The ID of the business unit this email is associated with, if applicable. |
| `from__fromName` | string | No | Sender name appearing in the 'From' field of the received email. |
| `rssData__timing` | object | No | A dictionary specifying the timing and scheduling details for sending RSS emails. Each key must map to a dictionary/object value, not a simple string. Example: {"dayOfWeek": {"value": "Tuesday"}, "time": {"hour": 9, "minute": 0}}. |
| `testing__testId` | string | No | The unique identifier for the A/B test associated with this email. |
| `content__widgets` | object | No | Dictionary of widgets (e.g., text, images, CTAs) and their configurations for email content. Each key must map to a dictionary/object value, not a simple string. Example: {"widgetId": {"type": "text", "content": "Hello", "style": {...}}}. |
| `feedbackSurveyId` | string | No | The ID of the feedback survey linked to the email. |
| `webversion__slug` | string | No | Custom URL slug for the email's web version (e.g., 'july-newsletter'). |
| `testing__abStatus` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Current A/B test status for this email (e.g., master, variant). |
| `webversion__title` | string | No | Browser tab title for the email's web version. |
| `content__flexAreas` | object | No | Dictionary defining content and layout of flexible, customizable areas in the email template. Each key must map to a dictionary/object value, not a simple string. Example: {"areaName": {"content": {...}, "layout": {...}}}. |
| `webversion__domain` | string | No | Domain for the email's web version; defaults to HubSpot domain if unspecified. |
| `from__customReplyTo` | string | No | Custom reply-to email address, overrides main 'Reply To' if set. |
| `rssData__blogLayout` | string | No | Specifies the layout to be used for the blog RSS email. |
| `rssData__maxEntries` | integer | No | The maximum number of blog posts (RSS entries) to include in a single RSS email. |
| `content__smartFields` | object | No | Dictionary of smart fields for email personalization based on contact properties. Each key must map to a dictionary/object value, not a simple string. Example: {"fieldName": {"value": "defaultValue", "conditions": {...}}}. |
| `testing__hoursToWait` | integer | No | Hours to wait for A/B test results before sending the winning version to remaining recipients. |
| `to__suppressGraymail` | boolean | No | True to not send to contacts identified by HubSpot as 'graymail' (low engagement). |
| `content__templatePath` | string | No | Path to the email template in HubSpot Design Manager. |
| `webversion__expiresAt` | string | No | ISO 8601 date-time when the web version expires and becomes inaccessible. |
| `rssData__blogEmailType` | string | No | The type of blog email, which determines send frequency (e.g., instant, daily, weekly). |
| `rssData__hubspotBlogId` | string | No | The ID of the HubSpot blog to be used for the RSS email. |
| `to__limitSendFrequency` | boolean | No | True to apply HubSpot's send frequency limits, preventing over-mailing. |
| `to__contactIds__exclude` | array | No | List of specific contact IDs to explicitly exclude, even if in included lists. |
| `to__contactIds__include` | array | No | List of specific contact IDs to include as recipients. |
| `testing__abSuccessMetric` | string ("CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED") | No | Metric (e.g., CLICKS_BY_OPENS) to determine the A/B test winning version. |
| `content__plainTextVersion` | string | No | Plain text version of the email, for non-HTML clients or recipient preference. |
| `content__widgetContainers` | object | No | Dictionary of widget containers for grouping and managing widgets in the email template. Each key must map to a dictionary/object value, not a simple string. Example: {"containerId": {"widgets": [...], "layout": {...}}}. |
| `rssData__rssEntryTemplate` | string | No | The HTML template for formatting each individual RSS entry within the email. |
| `testing__abTestPercentage` | integer | No | Percentage of recipients in the A/B test group (e.g., 20 for 20%). |
| `to__contactLists__exclude` | array | No | List of contact list IDs whose members to explicitly exclude. HubSpot contact list IDs are typically numeric strings (e.g., '12345', '67890'). Provide the numeric ID as a string. |
| `to__contactLists__include` | array | No | List of contact list IDs whose members to include as recipients. HubSpot contact list IDs are typically numeric strings (e.g., '12345', '67890'). Provide the numeric ID as a string. |
| `webversion__redirectToUrl` | string | No | Custom URL for redirect if web version link is expired/deactivated. |
| `rssData__blogImageMaxWidth` | integer | No | The maximum width for images included from the blog feed in the RSS email. |
| `testing__abSamplingDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Default email version (master/variant) if A/B test is inconclusive after the test period. |
| `webversion__metaDescription` | string | No | Meta description for the web version, used by search engines. |
| `content__themeSettingsValues` | object | No | Dictionary of theme settings values to customize email appearance. Each key must map to a dictionary/object value, not a simple string. Example: {"brandColor": {"value": "#0055CC"}, "fontFamily": {"name": "Arial"}}. |
| `testing__abSampleSizeDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Default email version (master/variant) if A/B test sample size is too small for significance. |
| `webversion__redirectToPageId` | string | No | ID of a HubSpot page for redirect if web version link is expired/deactivated. |
| `rssData__useHeadlineAsSubject` | boolean | No | If true, the email subject will be automatically populated from the blog post headline for RSS emails. |
| `subscriptionDetails__subscriptionId` | string | No | ID of the specific subscription type (e.g., newsletter, product updates). |
| `subscriptionDetails__officeLocationId` | string | No | ID of the office location for CAN-SPAM compliance and personalization. |
| `subscriptionDetails__preferencesGroupId` | string | No | ID of the subscription preferences group for managing recipient preferences. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create association for object type

**Slug:** `HUBSPOT_CREATE_ASSOCIATION`

Creates a new custom association definition (schema) for a custom object in HubSpot, specifying how this object type can relate to another object type; this defines the association type itself, not actual record-to-record links. Note: This endpoint requires crm.schemas.custom.write scope and only works with custom objects (not standard HubSpot objects like contacts or companies).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Optional, user-defined unique name for the new association type (e.g., 'contact_to_company_custom'). If not supplied, HubSpot may generate a default. |
| `objectType` | string | Yes | Fully qualified name or object type ID (e.g., '2-12345') of the CUSTOM object schema for which the new association type is being defined. Must be a custom object, not a standard HubSpot object. |
| `toObjectTypeId` | string | Yes | Object type ID or fully qualified name for the 'to' side of the association. For standard objects use names ('contacts', 'companies', 'deals', 'tickets') or IDs ('0-1', '0-2', '0-3', '0-5'). For custom objects use their objectTypeId (e.g., '2-12345'). |
| `fromObjectTypeId` | string | Yes | Object type ID or fully qualified name for the 'from' side of the association. For standard objects use names ('contacts', 'companies', 'deals', 'tickets') or IDs ('0-1', '0-2', '0-3', '0-5'). For custom objects use their objectTypeId (e.g., '2-12345'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create batch of feedback submissions

**Slug:** `HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS`

Creates a batch of feedback submissions in HubSpot, ideal for bulk imports; all property names, `associationTypeId`s, and association `to_id`s must reference existing entities in HubSpot.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of feedback submission objects to create. Each object defines the properties and associations for a new feedback submission. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create batch of objects

**Slug:** `HUBSPOT_CREATE_BATCH_OF_OBJECTS`

Creates multiple CRM objects of a specified `objectType` (e.g., contacts, companies, deals) in a single batch operation, where each object can have its own set of properties and associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects to be created in batch. Each item in the list defines the properties and associations for a new object. |
| `objectType` | string | Yes | The type of CRM object to create in batch (e.g., 'contacts', 'companies', 'deals', 'tickets', 'products', 'line_items', or a custom object ID). Must be a valid HubSpot CRM object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create batch of properties

**Slug:** `HUBSPOT_CREATE_BATCH_OF_PROPERTIES`

Efficiently creates multiple CRM properties in a single batch for a specified HubSpot object type (e.g., 'contacts', 'companies', custom object ID), ideal for schema setup or updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of definitions for the new properties to be created. |
| `objectType` | string | Yes | Target HubSpot CRM object type (e.g., 'contacts', 'companies', 'deals', or custom object ID) for property creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create batch of quotes

**Slug:** `HUBSPOT_CREATE_BATCH_OF_QUOTES`

Creates multiple HubSpot CRM quotes in a batch, ideal for bulk operations; provide meaningful quote details in `inputs` as property requirements can vary, and inspect response for individual quote statuses as partial success is possible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of quote objects to be created. Each object in the list defines the properties and associations for a new quote. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create campaign

**Slug:** `HUBSPOT_CREATE_CAMPAIGN`

Creates a new HubSpot campaign.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | Campaign properties including name and optional metadata. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create campaigns

**Slug:** `HUBSPOT_CREATE_CAMPAIGNS`

Creates multiple HubSpot campaigns by calling the single campaign creation endpoint for each campaign. Note: HubSpot does not provide a native batch create endpoint for campaigns. This action creates multiple campaigns by making individual API calls for each campaign in the batch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of campaign objects to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create companies

**Slug:** `HUBSPOT_CREATE_COMPANIES`

Creates multiple new HubSpot companies in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of company objects to create. Each object represents one new company with its properties. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create company

**Slug:** `HUBSPOT_CREATE_COMPANY`

Creates a new HubSpot company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zip` | string | No | Company's postal code. |
| `city` | string | No | City where the company is located. |
| `name` | string | No | Company name. |
| `type` | string | No | Type of company. |
| `phone` | string | No | Company's primary phone number. |
| `state` | string | No | State or region where the company is located. |
| `domain` | string | No | Company's primary domain name. |
| `address` | string | No | Company street address. |
| `country` | string | No | Country where the company is located. |
| `website` | string | No | Company's website URL. |
| `about_us` | string | No | Company description or about us information. |
| `address2` | string | No | Additional address information (suite, floor, etc.). |
| `industry` | string | No | The type of business the company performs. Must be one of HubSpot's predefined industry enum values in SCREAMING_SNAKE_CASE (e.g., COMPUTER_SOFTWARE, FINANCIAL_SERVICES, HOSPITAL_HEALTH_CARE, RETAIL, BIOTECHNOLOGY). See HubSpot's company properties documentation for the full list of ~120 valid values. |
| `timezone` | string | No | Company's timezone. |
| `is_public` | string | No | Whether the company is publicly traded. |
| `description` | string | No | Brief description of the company. |
| `associations` | array | No | List of associations to create with other existing HubSpot objects. |
| `founded_year` | string | No | Year the company was founded. |
| `annualrevenue` | string | No | Company's annual revenue. |
| `lifecyclestage` | string | No | Current lifecycle stage of the company. |
| `custom_properties` | object | No | Custom properties for the company. |
| `numberofemployees` | string | No | Number of employees in the company. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create contact

**Slug:** `HUBSPOT_CREATE_CONTACT`

Creates a new HubSpot contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | string | No | The contact's fax number. |
| `zip` | string | No | The contact's postal code or ZIP code. |
| `city` | string | No | The city where the contact resides. |
| `email` | string | No | The primary email address of the contact. This is a unique identifier for contacts in HubSpot. |
| `phone` | string | No | The contact's primary phone number (often a business phone). |
| `photo` | string | No | URL of the contact's photo or avatar. |
| `state` | string | No | The state or region where the contact resides. |
| `degree` | string | No | The contact's highest completed educational degree. |
| `gender` | string | No | The contact's gender. |
| `school` | string | No | The name of the school, college, or university the contact attended. |
| `address` | string | No | The contact's street address, including apartment or unit number. |
| `company` | string | No | The name of the company the contact works for. If `associatedcompanyid` is set, this field might be auto-populated. |
| `country` | string | No | The country where the contact resides. |
| `ip_city` | string | No | The city associated with the contact's IP address, often captured during their first website visit or form submission. |
| `message` | string | No | A free-text message or note often captured from a form submission's message field. |
| `website` | string | No | The URL of the contact's personal or company website. |
| `industry` | string | No | The primary industry of the company the contact works for. |
| `ip_state` | string | No | The state or region associated with the contact's IP address. |
| `jobtitle` | string | No | The contact's job title. |
| `lastname` | string | No | The contact's last name. |
| `closedate` | string | No | The date when the deal associated with this contact was closed. Expected format is a UTC timestamp in milliseconds. |
| `firstname` | string | No | The contact's first name. |
| `ip_latlon` | string | No | The approximate latitude and longitude associated with the contact's IP address, typically in 'latitude,longitude' format. |
| `num_notes` | string | No | The total number of notes logged on the contact's record. |
| `ownername` | string | No | The full name of the HubSpot user who owns this contact. Read-only. |
| `seniority` | string | No | The contact's seniority level within their organization. |
| `createdate` | string | No | The date and time when the contact record was created in HubSpot. This is a read-only property, typically a UTC timestamp. |
| `ip_country` | string | No | The country associated with the contact's IP address. |
| `ip_zipcode` | string | No | The postal code or ZIP code associated with the contact's IP address. |
| `owneremail` | string | No | The email address of the HubSpot user who owns this contact. Read-only, reflects the owner's primary email. |
| `salutation` | string | No | The salutation for the contact (e.g., 'Mr.', 'Ms.', 'Dr.'). |
| `start_date` | string | No | The contact's start date, typically referring to their employment start date at their current company. Format can vary. |
| `twitterbio` | string | No | The contact's biography from their Twitter profile. |
| `work_email` | string | No | The contact's work email address. This might be different from the primary `email` if that's a personal address. |
| `linkedinbio` | string | No | The contact's biography from their LinkedIn profile. |
| `mobilephone` | string | No | The contact's mobile phone number. |
| `associations` | array | No | List of associations to create with other existing HubSpot objects (e.g., companies, deals). |
| `company_size` | string | No | The size of the company the contact works for, often categorized (e.g., '1-10 employees', '501-1000 employees'). |
| `hubspotscore` | string | No | The contact's HubSpot lead score, calculated based on criteria defined in your HubSpot portal's scoring settings. |
| `job_function` | string | No | The contact's job function or department. |
| `numemployees` | string | No | The number of employees at the company the contact works for. This may differ from 'company_size' if manually entered or from a different source. |
| `annualrevenue` | string | No | The annual revenue of the company the contact works for. |
| `date_of_birth` | string | No | The contact's date of birth. Format can vary, but YYYY-MM-DD is common. |
| `days_to_close` | string | No | The number of days it took to close the deal associated with this contact. This is usually calculated automatically. |
| `followercount` | string | No | The number of followers the contact has on a specified social media platform (e.g., Twitter). |
| `ip_state_code` | string | No | The state or region code associated with the contact's IP address (e.g., US state code). |
| `total_revenue` | string | No | The total revenue generated from all closed-won deals associated with this contact. |
| `twitterhandle` | string | No | The contact's Twitter username (handle), without the '@' symbol. |
| `field_of_study` | string | No | The contact's primary field of study during their education. |
| `hs_legal_basis` | string ("Legitimate interest – prospect/lead" | "Legitimate interest – existing customer" | "Legitimate interest - other" | "Performance of a contract" | "Freely given consent from contact" | "Not applicable") | No | Legal basis for processing contact data under GDPR and privacy regulations. |
| `lifecyclestage` | string | No | The contact's current stage in your sales and marketing funnel (e.g., 'Lead', 'Marketing Qualified Lead', 'Customer'). These stages are customizable in HubSpot. |
| `marital_status` | string | No | The contact's marital status. |
| `graduation_date` | string | No | The contact's graduation date from their educational institution. Format can vary. |
| `hs_all_team_ids` | string | No | A semicolon-separated list of all HubSpot Team IDs this contact is or has been associated with. |
| `hubspot_team_id` | string | No | The ID of the HubSpot team that owns this contact. |
| `ip_country_code` | string | No | The two-letter country code (ISO 3166-1 alpha-2) associated with the contact's IP address. |
| `military_status` | string | No | The contact's military status. |
| `hs_all_owner_ids` | string | No | A semicolon-separated list of all HubSpot Owner IDs who have been assigned to this contact at some point. |
| `hubspot_owner_id` | string | No | The ID of the HubSpot user who is the current owner of this contact. |
| `lastmodifieddate` | string | No | The date and time when the contact record was last modified. This is a read-only property, UTC timestamp. |
| `custom_properties` | object | No | A dictionary of custom properties to set for the contact. Keys are the internal names of your custom contact properties, and values are the data to set. Example: `{'custom_property_internal_name': 'value_for_custom_property'}`. Note: For common properties with enum values like hs_legal_basis, use the dedicated field instead of custom_properties to ensure proper validation. |
| `kloutscoregeneral` | string | No | The contact's general Klout score, if available and integrated. Klout was a service that rated social media influence. |
| `notes_last_updated` | string | No | The date and time when the notes on the contact record were last updated. UTC timestamp in milliseconds. |
| `recent_deal_amount` | string | No | The amount of the most recent closed-won deal associated with this contact. |
| `associatedcompanyid` | string | No | The ID of the primary company associated with this contact. This is a read-only property automatically updated when an association is made. |
| `currentlyinworkflow` | string | No | Indicates whether the contact is currently active in any HubSpot workflow. Boolean value, 'true' or 'false'. |
| `hs_all_contact_vids` | string | No | A semicolon-separated list of all HubSpot Contact VID (Visitor ID) values associated with this contact, typically used for merging contacts. |
| `hs_analytics_source` | string | No | The original source that generated the contact (e.g., 'Organic Search', 'Paid Social', 'Referrals'). |
| `linkedinconnections` | string | No | The number of LinkedIn connections the contact has. |
| `num_contacted_notes` | string | No | The number of notes on the contact record that relate to being contacted (e.g., call logs, meeting notes). |
| `relationship_status` | string | No | The contact's self-reported relationship status. |
| `twitterprofilephoto` | string | No | URL of the contact's Twitter profile photo. |
| `hs_additional_emails` | string | No | A semicolon-separated list of additional email addresses for the contact. |
| `hs_analytics_revenue` | string | No | Revenue attributed to this contact through HubSpot's analytics or e-commerce integrations. This is often a sum of closed-won deal amounts associated with the contact. |
| `notes_last_contacted` | string | No | The date and time the contact was last contacted, based on logged activities like calls, emails, or meetings. UTC timestamp in milliseconds. |
| `num_associated_deals` | string | No | The total number of deals currently associated with this contact. |
| `first_conversion_date` | string | No | The date and time of the contact's first conversion (e.g., form submission). UTC timestamp. |
| `hs_analytics_last_url` | string | No | The last URL on your website that the contact visited. |
| `num_conversion_events` | string | No | The total number of conversion events (e.g., form submissions, CTA clicks) attributed to this contact. |
| `hs_analytics_first_url` | string | No | The first URL on your website that the contact visited. |
| `recent_conversion_date` | string | No | The date and time of the contact's most recent conversion event. UTC timestamp. |
| `recent_deal_close_date` | string | No | The close date of the most recent closed-won deal associated with this contact. UTC timestamp in milliseconds. |
| `first_deal_created_date` | string | No | The date and time when the first deal was created for this contact. UTC timestamp. |
| `hs_analytics_num_visits` | string | No | The total number of sessions (visits) the contact has had on your website. |
| `webinareventlastupdated` | string | No | Timestamp of the last update related to a webinar event (e.g., GoToWebinar) for this contact, if integrated. UTC timestamp. |
| `notes_next_activity_date` | string | No | The date and time of the next scheduled activity (e.g., task, meeting) with the contact. UTC timestamp in milliseconds. |
| `hs_all_accessible_team_ids` | string | No | A semicolon-separated list of HubSpot Team IDs that have access to this contact record. |
| `hs_analytics_last_referrer` | string | No | The last referring URL that brought the contact to your website before their most recent session. |
| `hs_analytics_source_data_1` | string | No | Additional detail for the source. For 'Organic search', this might be the search engine. For 'Paid social', this could be the social media platform. |
| `hs_analytics_source_data_2` | string | No | Further detail for the source. For 'Organic search', this might be the keyword. For 'Paid social', this could be the campaign name. |
| `hubspot_owner_assigneddate` | string | No | The date and time when a HubSpot owner was most recently assigned to this contact. UTC timestamp in milliseconds. |
| `first_conversion_event_name` | string | No | The name or identifier of the event that marked the contact's first conversion. |
| `hs_analytics_first_referrer` | string | No | The first referring URL that brought the contact to your website. |
| `hs_analytics_last_timestamp` | string | No | Timestamp of the contact's last recorded interaction (e.g., last website visit, form submission). UTC timestamp. |
| `hs_analytics_num_page_views` | string | No | The total number of pages viewed by the contact on your website. |
| `associatedcompanylastupdated` | string | No | The timestamp of the last update to the primary associated company. This is a read-only property. |
| `hs_analytics_first_timestamp` | string | No | Timestamp of the contact's first recorded interaction (e.g., first website visit). UTC timestamp. |
| `num_unique_conversion_events` | string | No | The number of unique types of conversion events completed by the contact. |
| `recent_conversion_event_name` | string | No | The name or identifier of the contact's most recent conversion event. |
| `surveymonkeyeventlastupdated` | string | No | Timestamp of the last update related to a SurveyMonkey event for this contact, if integrated. UTC timestamp. |
| `engagements_last_meeting_booked` | string | No | Timestamp of the last meeting booked with the contact through HubSpot's meetings tool. |
| `hs_analytics_average_page_views` | string | No | The average number of pages viewed by the contact per session on your website, tracked by HubSpot analytics. |
| `hs_all_assigned_business_unit_ids` | string | No | A semicolon-separated list of Business Unit IDs assigned to this contact, if using HubSpot's Business Units feature. |
| `hs_analytics_last_visit_timestamp` | string | No | Timestamp of the contact's most recent visit to your website. UTC timestamp. |
| `hs_analytics_first_visit_timestamp` | string | No | Timestamp of the contact's first visit to your website. UTC timestamp. |
| `hs_analytics_num_event_completions` | string | No | The total number of HubSpot custom events completed by the contact. |
| `engagements_last_meeting_booked_medium` | string | No | The medium (e.g., 'Meetings Tool', 'Email') through which the last meeting was booked. |
| `engagements_last_meeting_booked_source` | string | No | The source (e.g., 'SALES', 'MARKETING') of the last meeting booked. |
| `engagements_last_meeting_booked_campaign` | string | No | The HubSpot campaign ID (GUID) associated with the last meeting booked. |
| `hs_analytics_last_touch_converting_campaign` | string | No | The HubSpot campaign ID (GUID) of the campaign that led to the contact's most recent conversion. |
| `hs_analytics_first_touch_converting_campaign` | string | No | The HubSpot campaign ID (GUID) of the campaign that led to the contact's first conversion. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact From Natural Language

**Slug:** `HUBSPOT_CREATE_CONTACT_FROM_NL`

Creates a new contact in HubSpot from a natural language description. Fetches the contact property schema at runtime, uses an LLM to generate the correct property payload, and creates the contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `nl_query` | string | Yes | Natural language description of the contact to create. Example: 'Add Jane Smith, email jane@test.com, phone +1-555-0100, company Acme Corp'. |
| `associations` | array | No | Optional associations to create between the new contact and other CRM objects (e.g., companies, deals). Pass-through field, not LLM-generated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create contacts

**Slug:** `HUBSPOT_CREATE_CONTACTS`

Creates multiple new HubSpot contacts in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of contact objects to create. Each object represents one new contact with its properties and optional associations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CRM Object From Natural Language

**Slug:** `HUBSPOT_CREATE_CRM_OBJECT_FROM_NL`

Creates a new CRM object (contact, deal, company, ticket, or custom object) in HubSpot from a natural language description. Fetches the object's property schema at runtime, uses an LLM to generate the correct property payload, and creates the object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `nl_query` | string | Yes | Natural language description of the record to create. Example: 'Create a contact named John Doe with email john@example.com and phone +1-555-0100'. |
| `objectType` | string | Yes | The type of CRM object to create. Standard types: 'contacts', 'deals', 'companies', 'tickets'. Can also be a custom object type ID. |
| `associations` | array | No | Optional associations to create between the new object and other CRM objects. Pass-through field, not LLM-generated. Each association should include 'to' and 'types'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CRM object with properties

**Slug:** `HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES`

Creates a new HubSpot CRM object (e.g., contact, company, custom object) with specified `properties` (using valid internal names) and `associations` (to existing objects via valid type IDs).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | Type of CRM object to create (e.g., 'contacts', 'companies', 'deals', or custom object schema ID like 'p12345678'). |
| `properties` | object | Yes | Key-value pairs for the object's properties. Keys must be internal HubSpot property names valid for the `objectType`. IMPORTANT: Some properties are enumeration types that only accept specific values. For CONTACTS: 'email' (string), 'firstname' (string), 'lastname' (string), 'phone' (string), 'lifecyclestage' (enum: subscriber, lead, marketingqualifiedlead, salesqualifiedlead, opportunity, customer, evangelist, other). For COMPANIES: 'name' (string, required), 'domain' (string), 'phone' (string), 'city' (string), 'state' (string), 'country' (string), 'industry' (enum - must use UPPERCASE values like: ACCOUNTING, AIRLINES_AVIATION, BANKING, BIOTECHNOLOGY, COMPUTER_SOFTWARE, CONSTRUCTION, CONSUMER_GOODS, EDUCATION_MANAGEMENT, ENTERTAINMENT, FINANCIAL_SERVICES, FOOD_BEVERAGES, GOVERNMENT_ADMINISTRATION, HEALTH_WELLNESS_AND_FITNESS, HOSPITAL_HEALTH_CARE, HOSPITALITY, INFORMATION_TECHNOLOGY_AND_SERVICES, INSURANCE, INTERNET, LEGAL_SERVICES, MANAGEMENT_CONSULTING, MANUFACTURING, MARKETING_AND_ADVERTISING, MEDIA_PRODUCTION, NON_PROFIT_ORGANIZATION_MANAGEMENT, OIL_ENERGY, PHARMACEUTICALS, REAL_ESTATE, RETAIL, TELECOMMUNICATIONS, TRANSPORTATION_TRUCKING_RAILROAD, VENTURE_CAPITAL_PRIVATE_EQUITY, WHOLESALE, and ~115 more). For DEALS: 'dealname' (string, required), 'amount' (string/number), 'dealstage' (enum: pipeline-specific stage IDs), 'closedate' (ISO 8601 date), 'pipeline' (pipeline ID). For TICKETS: 'subject' (string), 'content' (string), 'hs_pipeline' (pipeline ID), 'hs_pipeline_stage' (stage ID), 'hs_ticket_priority' (enum: LOW, MEDIUM, HIGH). Use GET /crm/v3/properties/{objectType} to retrieve all valid properties and their enum options for any object type. |
| `associations` | array | Yes | List of associations to create between the new object and existing CRM objects, using `to_id` and `types`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create deal

**Slug:** `HUBSPOT_CREATE_DEAL`

Creates a new HubSpot deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | string | No | Total monetary value of the deal. |
| `hs_acv` | string | No | Annual Contract Value (ACV) (HubSpot-calculated). |
| `hs_arr` | string | No | Annual Recurring Revenue (ARR) (HubSpot-calculated). |
| `hs_mrr` | string | No | Monthly Recurring Revenue (MRR) (HubSpot-calculated). |
| `hs_tcv` | string | No | Total Contract Value (TCV) (HubSpot-calculated). |
| `dealname` | string | No | Descriptive name or title of the deal. |
| `dealtype` | string | No | Type of deal (e.g., 'newbusiness', 'existingbusiness'). |
| `pipeline` | string | No | ID of the sales pipeline for this deal (required). |
| `closedate` | string | No | Date (YYYY-MM-DD) or datetime (ISO 8601) when the deal closed or is expected to close. |
| `dealstage` | string | No | Valid pipeline stage ID for the deal. IMPORTANT: Stage IDs must be actual values from your HubSpot pipeline configuration - random values, phone numbers, or placeholder text will be rejected by the API with INVALID_OPTION errors. Stage IDs can be either string-based (e.g., 'closedwon', 'closedlost') or numeric strings (e.g., '2317386479') depending on your pipeline setup. You MUST retrieve valid stage IDs using the Pipelines API (GET /crm/v3/pipelines/deals) or from HubSpot Settings > Objects > Deals > Pipelines before setting this field. |
| `createdate` | string | No | Date/time deal was created (read-only, HubSpot-set). |
| `description` | string | No | Detailed text description of the deal. |
| `hs_campaign` | string | No | GUID of the HubSpot campaign that generated this deal. |
| `hs_priority` | string | No | Priority level (e.g., 'high', 'medium', 'low'). |
| `associations` | array | No | Associations to create between the new deal and other CRM objects (e.g., contact, company). |
| `hs_is_closed` | string | No | Indicates if deal is closed ('true'/'false'; read-only, from deal stage properties). |
| `hs_next_step` | string | No | Next planned step for this deal. |
| `hs_object_id` | string | No | Unique ID of the deal object (read-only, HubSpot-assigned). |
| `days_to_close` | string | No | Days between creation and close (read-only, HubSpot-calculated). |
| `hs_createdate` | string | No | Specific date/time deal record created (ISO 8601, read-only, HubSpot-set). |
| `hs_all_team_ids` | string | No | Semicolon-separated list of all associated team IDs (owner's primary, additional teams; typically read-only). |
| `hs_all_owner_ids` | string | No | Semicolon-separated list of all owner IDs (primary, co-owners). |
| `hs_closed_amount` | string | No | Actual amount when deal closed (HubSpot-calculated). |
| `hubspot_owner_id` | string | No | ID of the HubSpot user owning the deal; may be auto-assigned if unspecified. |
| `closed_won_reason` | string | No | Reason why the deal was won. |
| `custom_properties` | object | No | Custom properties for the deal. Keys are internal property names (as defined in your HubSpot account), values are the property values to set. CRITICAL: Enum/dropdown properties have STRICT validation - you MUST use exact values from your HubSpot configuration or the API will reject with INVALID_OPTION error. To find valid values: go to HubSpot Settings > Properties > Deals > [Property Name] > Edit > Field Type Options. Requirements by type: (1) Enum/dropdown: case-sensitive exact match required (check your HubSpot property settings for valid options); (2) Number: numeric strings only, no units (e.g., '12' not '12 months'); (3) Date: ISO 8601 format (e.g., '2024-01-15'); (4) Checkbox: 'true' or 'false'. Properties are account-specific and may not exist in all HubSpot portals. Example: `{'project_type': 'migration', 'priority_level': 'high'}`. |
| `closed_lost_reason` | string | No | Reason why the deal was lost. |
| `deal_currency_code` | string | No | Currency code for deal amount. IMPORTANT: Only currency codes enabled in your HubSpot portal settings are valid. If omitted, defaults to your portal's home currency. To find valid currency codes: go to Settings > Account defaults > Currencies to see your enabled currencies. Common codes include 'USD' and 'EUR', but availability depends on your portal configuration. |
| `hs_forecast_amount` | string | No | Forecasted amount ('Amount' * 'hs_deal_stage_probability'; HubSpot-calculated). |
| `hs_analytics_source` | string | No | Original deal source per HubSpot analytics (e.g., 'Organic Search'; typically read-only). |
| `hs_lastmodifieddate` | string | No | Date/time deal last modified (ISO 8601, read-only, HubSpot-updated). |
| `hs_projected_amount` | string | No | Projected deal amount (manually set or calculated). |
| `amount_in_home_currency` | string | No | Deal's value in company's home currency (read-only, HubSpot-calculated). |
| `hs_forecast_probability` | string | No | Sales forecasting probability; may differ from 'hs_deal_stage_probability'. |
| `hs_deal_stage_probability` | string | No | Win probability (decimal, e.g., 0.5) based on current stage; typically stage-defined. |
| `hs_all_accessible_team_ids` | string | No | Semicolon-separated list of team IDs with access (typically read-only). |
| `engagements_last_meeting_booked` | string | No | Date/time of last booked meeting for this deal (typically read-only). |
| `hs_all_assigned_business_unit_ids` | string | No | Semicolon-separated list of assigned business unit IDs (for Business Units add-on). |
| `hs_closed_amount_in_home_currency` | string | No | Closed amount in home currency (HubSpot-calculated). |
| `hs_projected_amount_in_home_currency` | string | No | Projected amount in home currency (HubSpot-calculated). |
| `engagements_last_meeting_booked_medium` | string | No | Medium (e.g., 'Meetings') of last booked meeting (typically read-only). |
| `engagements_last_meeting_booked_source` | string | No | Source (e.g., 'Calendar') of last booked meeting (typically read-only). |
| `engagements_last_meeting_booked_campaign` | string | No | Campaign ID for the last booked meeting (typically read-only). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deal From Natural Language

**Slug:** `HUBSPOT_CREATE_DEAL_FROM_NL`

Creates a new deal in HubSpot from a natural language description. Fetches the deal property schema and pipeline stages at runtime, uses an LLM to generate the correct property payload, and creates the deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `nl_query` | string | Yes | Natural language description of the deal to create. Example: 'New deal: Enterprise License for Acme Corp, amount $50,000, closing next month'. |
| `pipeline` | string | No | Optional pipeline ID override. If not specified, the LLM will infer from the NL query or default to 'default'. |
| `associations` | array | No | Optional associations to create between the new deal and other CRM objects (e.g., contacts, companies). Pass-through field, not LLM-generated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create deals

**Slug:** `HUBSPOT_CREATE_DEALS`

Creates multiple deals in HubSpot CRM; ensure any associated object IDs, deal stages, and pipeline IDs specified are valid and exist within the HubSpot account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of deal objects to create, each defining its properties and associations with other CRM objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create email

**Slug:** `HUBSPOT_CREATE_EMAIL`

Creates a new HubSpot email engagement record. REQUIRED FIELDS in properties dict: - hs_email_subject: Subject line - hs_email_html: HTML content - hs_timestamp: Unix timestamp in milliseconds - hs_email_direction: One of 'EMAIL', 'INCOMING_EMAIL', 'FORWARDED_EMAIL', 'DRAFT_EMAIL' This creates an email engagement/activity record in HubSpot CRM, not a marketing email.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | Email properties to set. Keys are HubSpot internal property names. REQUIRED fields: 'hs_email_subject' (subject line), 'hs_email_html' (HTML content), 'hs_timestamp' (Unix timestamp in milliseconds), 'hs_email_direction' (one of: 'EMAIL', 'INCOMING_EMAIL', 'FORWARDED_EMAIL', 'DRAFT_EMAIL'). This creates an email engagement/activity record in HubSpot CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create emails

**Slug:** `HUBSPOT_CREATE_EMAILS`

Creates multiple HubSpot emails in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of email objects to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create engagement

**Slug:** `HUBSPOT_CREATE_ENGAGEMENT`

Create a legacy EMAIL, CALL, MEETING, TASK, or NOTE engagement with optional CRM associations, attachments, and type-specific metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Optional active state for the engagement. |
| `deal_ids` | array | No | Deal IDs as digit strings to associate with the engagement. |
| `metadata` | object | No | Type-specific metadata using HubSpot's exact keys for the selected EMAIL, CALL, MEETING, TASK, or NOTE engagement type. For NOTE, body is the note text and is limited to 65,536 characters. |
| `owner_id` | string | No | HubSpot owner ID as a digit string. |
| `ticket_ids` | array | No | Ticket IDs as digit strings to associate with the engagement. |
| `company_ids` | array | No | Company IDs as digit strings to associate with the engagement. |
| `contact_ids` | array | No | Contact IDs as digit strings to associate with the engagement. |
| `timestamp_ms` | integer | No | Engagement occurrence time as Unix milliseconds. |
| `attachment_ids` | array | No | HubSpot file IDs as digit strings; each is sent as an object with an integer id field. |
| `engagement_type` | string ("EMAIL" | "CALL" | "MEETING" | "TASK" | "NOTE") | Yes | Legacy engagement kind; metadata requirements vary by this value. |
| `association_owner_ids` | array | No | Owner IDs as digit strings to include in the associations object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create event template for app

**Slug:** `HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP`

Creates a new event template for a HubSpot app, defining structure, custom properties (tokens), and appearance (Markdown with Handlebars) of custom timeline events for CRM objects; this template must exist before logging corresponding events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the event template, unique for the app and object type. |
| `appId` | integer | Yes | The unique identifier of the target HubSpot app. |
| `tokens` | array | Yes | Defines custom properties (tokens) for the event, which can populate CRM object properties if a token's `objectPropertyName` is set. |
| `objectType` | string | Yes | The CRM object type this event template is associated with (e.g., 'contacts', 'companies'). |
| `detailTemplate` | string | No | Optional Markdown string with Handlebars templating for rendering HTML for expanded event details on the CRM timeline, using tokens for event-specific data. |
| `headerTemplate` | string | No | Optional Markdown string with Handlebars templating for rendering HTML for the event header on the CRM timeline, using tokens for event-specific data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create feedback submission

**Slug:** `HUBSPOT_CREATE_FEEDBACK_SUBMISSION`

Creates a new HubSpot feedback submission to record customer feedback (e.g., survey responses, support interactions), optionally associating it with CRM objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | Properties for the feedback submission. Keys are internal names (e.g., 'hs_feedback_rating'), values must be strings. Property names must be pre-defined in your HubSpot account. |
| `associations` | array | Yes | Associations between this feedback submission and other CRM objects, specifying target object ID and association types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create line item

**Slug:** `HUBSPOT_CREATE_LINE_ITEM`

Creates a new HubSpot line item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | Line item properties to set. Keys are HubSpot internal property names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create line items

**Slug:** `HUBSPOT_CREATE_LINE_ITEMS`

Creates multiple HubSpot line items in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of line item objects to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create list

**Slug:** `HUBSPOT_CREATE_LIST`

Create a HubSpot CRM list with manual, snapshot, or dynamic membership rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Portal-wide unique list name. |
| `filter_branch` | object | No | Recursive HubSpot filter branch for a DYNAMIC list. Use exact provider keys such as filterBranchType, filterBranches, filters, filterType, property, and operation. The full grammar is polymorphic and supports OR, AND, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, and ASSOCIATION branches. |
| `list_folder_id` | integer | No | Folder ID in which to place the list. Must be non-negative. |
| `object_type_id` | string | Yes | CRM object type ID whose records can become members, such as 0-1 for contacts. |
| `processing_type` | string ("SNAPSHOT" | "MANUAL" | "DYNAMIC") | Yes | How HubSpot determines and refreshes list membership. |
| `list_permissions` | object | No | Permissions object using exact teamsWithEditAccess and usersWithEditAccess wire keys. |
| `custom_properties` | object | No | Optional custom list properties keyed by exact HubSpot property name. |
| `membership_settings` | object | No | Membership settings using exact includeUnassigned and membershipTeamId wire keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create meeting

**Slug:** `HUBSPOT_CREATE_MEETING`

Creates a new meeting engagement in HubSpot CRM. Use this action when you need to log a meeting that occurred or schedule a future meeting with contacts, companies, or other CRM records. The meeting will appear on the timeline of associated records and can include details like title, time, location, notes, and outcome.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `associations` | array | No | List of associations to link this meeting with other CRM objects like contacts, companies, or deals. |
| `hs_timestamp` | string | Yes | The date and time when the meeting occurred, in Unix timestamp (milliseconds) or ISO 8601 format. This is the only required field and defaults to hs_meeting_start_time if that is provided. |
| `hs_meeting_body` | string | No | Description or notes about the meeting content and agenda. |
| `hs_activity_type` | string | No | Meeting classification or activity type based on your HubSpot account settings. |
| `hs_meeting_title` | string | No | The title or name of the meeting. |
| `hubspot_owner_id` | string | No | The ID of the HubSpot user who owns or created this meeting. |
| `custom_properties` | object | No | Additional custom properties as key-value pairs using the property's internal name as the key. |
| `hs_attachment_ids` | string | No | Semicolon-separated list of attachment IDs to associate with the meeting. |
| `hs_meeting_outcome` | string ("SCHEDULED" | "COMPLETED" | "RESCHEDULED" | "NO_SHOW" | "CANCELED") | No | Outcome status for a meeting engagement. |
| `hs_meeting_end_time` | string | No | The scheduled end time of the meeting, in Unix timestamp (milliseconds) or ISO 8601 format. |
| `hs_meeting_location` | string | No | The location of the meeting (physical address, conference room, video link, or phone number). |
| `hs_meeting_start_time` | string | No | The scheduled start time of the meeting, in Unix timestamp (milliseconds) or ISO 8601 format. Should match hs_timestamp. |
| `hs_meeting_external_url` | string | No | External URL to the calendar event (Google Calendar, Outlook, etc.). |
| `hs_internal_meeting_notes` | string | No | Internal notes for your team about the meeting, not visible to external attendees. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create note

**Slug:** `HUBSPOT_CREATE_NOTE`

Creates a new HubSpot CRM note. Use when you need to add a timestamped note with optional attachments and associations to contacts, companies, deals, or tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `associations` | array | No | List of associations to link with the note (e.g., contacts, deals, companies). |
| `hs_note_body` | string | No | Text content of the note (up to 65,536 characters). |
| `hs_timestamp` | string | Yes | Creation time of the note. Either an ISO-8601 UTC timestamp (e.g., '2021-11-12T15:48:22Z') or Unix milliseconds since epoch. |
| `hubspot_owner_id` | string | No | HubSpot user ID to assign as the creator/owner of this note. |
| `custom_properties` | object | No | A dictionary of custom properties. Boolean-type fields accept 'Yes'/'No', 'true'/'false', 'on'/'off', 'y'/'n' and Python booleans, which are auto-converted to string values ('true'/'false') for HubSpot API compatibility. Numeric strings ('0', '1', '2', etc.) are preserved as-is for number fields. |
| `hs_attachment_ids` | string | No | Semicolon-separated list of file attachment IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create object association

**Slug:** `HUBSPOT_CREATE_OBJECT_ASSOCIATION`

Tool to create or label an association between two CRM records using HubSpot Associations v4 API. Use when you need to link records (e.g., contact to company, deal to contact) with explicit association labels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `labels` | array | Yes | Array of association label descriptors defining the type(s) of relationship between the two records. Each label includes an associationCategory and associationTypeId. |
| `objectId` | string | Yes | The unique ID of the source CRM record. |
| `objectType` | string | Yes | The type of the source object (e.g., 'contacts', 'companies', 'deals', 'tickets', or a custom object type). |
| `toObjectId` | string | Yes | The unique ID of the target CRM record to associate with. |
| `toObjectType` | string | Yes | The type of the target object to associate with (e.g., 'contacts', 'companies', 'deals', 'tickets', or a custom object type). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create new object schema with custom properties

**Slug:** `HUBSPOT_CREATE_OBJECT_SCHEMA`

Creates a new custom object schema in HubSpot CRM with unique naming for schema and properties, defined display/required/searchable properties within the 'properties' list, provided immutable labels, and correctly configured 'enumeration' type properties (options/referencedObjectType).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique, immutable programmatic name for the schema (used in API calls); must be unique in the account. |
| `properties` | array | Yes | List of property definitions for this custom object schema. |
| `description` | string | No | Optional human-readable description for the custom object schema. |
| `labels__plural` | string | No | Plural display name used in HubSpot UI; immutable after creation. |
| `labels__singular` | string | No | Singular display name used in HubSpot UI; immutable after creation. |
| `associatedObjects` | array | Yes | Object type IDs (e.g., 'CONTACT', 'COMPANY', 'p123456') this schema can be associated with. |
| `requiredProperties` | array | Yes | Internal names of properties required for new records; must be defined in 'properties'. |
| `searchableProperties` | array | No | Internal names of properties indexed for global search; must be defined in 'properties'. |
| `primaryDisplayProperty` | string | No | Internal name of the primary identifier property; must be defined in 'properties'. |
| `secondaryDisplayProperties` | array | No | Internal names of properties for secondary display on record pages; must be defined in 'properties'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or update draft version

**Slug:** `HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION`

Creates or updates the draft version of a marketing email identified by `emailId`; if no draft exists, a new one is created from the current live version to prepare changes or A/B tests before publishing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Internal name of the email for HubSpot dashboard. |
| `state` | string ("AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT") | No | Current state of the email (e.g., 'DRAFT'); typically system-managed. |
| `emailId` | string | Yes | The unique identifier of the marketing email. |
| `subject` | string | No | The subject line of the email. |
| `archived` | boolean | No | Indicates if the marketing email is archived. |
| `campaign` | string | No | Associated HubSpot campaign ID for tracking/reporting. |
| `language` | string ("af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za") | No | Primary language of email content (e.g., 'en', 'en-us'). |
| `publishDate` | string | No | Scheduled send date/time (ISO 8601). Used for scheduled emails. |
| `subcategory` | string | No | Email subcategory for organization/reporting (e.g., 'MARKETING_EMAIL'). |
| `activeDomain` | string | No | Connected and verified sending domain in HubSpot. |
| `rssData__url` | string | No | External RSS feed URL. Required for external blog RSS emails. |
| `from__replyTo` | string | No | 'From' email address; receives replies if `customReplyTo` is not set. |
| `sendOnPublish` | boolean | No | If true, sends email immediately on publishing, overriding `publishDate`. |
| `businessUnitId` | string | No | Associated business unit ID, for accounts with multiple units. |
| `from__fromName` | string | No | 'From' name displayed to recipients. |
| `rssData__timing` | object | No | Send timing for RSS emails. Applies if `rssData` is configured. |
| `testing__testId` | string | No | Unique identifier of the A/B test, if applicable. |
| `content__widgets` | object | No | Configuration for widgets (modules) in email content. |
| `webversion__slug` | string | No | URL slug for the web version (e.g., 'july-newsletter'). |
| `testing__abStatus` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Current status of the A/B test. |
| `webversion__title` | string | No | Browser tab title for the web version. |
| `content__flexAreas` | object | No | Configuration for flexible content areas in the email template. |
| `webversion__domain` | string | No | Domain for the email web version; defaults to HubSpot domain if unspecified. |
| `from__customReplyTo` | string | No | Custom reply-to email address; overrides `replyTo`. |
| `rssData__blogLayout` | string | No | Layout style for blog posts in RSS email. Applies if `rssData` is configured. |
| `rssData__maxEntries` | integer | No | Maximum blog posts per RSS email. Applies if `rssData` is configured. |
| `content__smartFields` | object | No | Smart fields and values for email personalization. |
| `testing__hoursToWait` | integer | No | Hours to wait for A/B test results before sending the winning version. |
| `to__suppressGraymail` | boolean | No | If true, suppresses sending to 'graymail' contacts. |
| `content__templatePath` | string | No | Path to the email template in HubSpot Design Manager. |
| `webversion__expiresAt` | string | No | Expiration date/time (ISO 8601) for the web version link. |
| `rssData__blogEmailType` | string | No | Type of RSS email (e.g., 'instant', 'daily', 'weekly'). Applies if `rssData` is configured. |
| `rssData__hubspotBlogId` | string | No | HubSpot-hosted blog ID for RSS-to-Email. Applies if `rssData` is configured and blog is HubSpot-hosted. |
| `to__limitSendFrequency` | boolean | No | If true, respects contact send frequency limits. |
| `to__contactIds__exclude` | array | No | Specific contact IDs to exclude from recipients. |
| `to__contactIds__include` | array | No | Specific contact IDs to include as recipients. |
| `testing__abSuccessMetric` | string ("CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED") | No | Metric to determine A/B test winning version (e.g., 'CLICKS_BY_OPENS'). |
| `content__plainTextVersion` | string | No | Plain text version of the email. |
| `content__widgetContainers` | object | No | Configuration for widget containers in the email template. |
| `rssData__rssEntryTemplate` | string | No | HTML template for each RSS entry. Applies if `rssData` is configured. |
| `testing__abTestPercentage` | integer | No | Percentage of recipients in the A/B test group (e.g., 20 for 20%). |
| `to__contactLists__exclude` | array | No | Contact list IDs whose members will be excluded. |
| `to__contactLists__include` | array | No | Contact list IDs whose members will be included as recipients. |
| `webversion__redirectToUrl` | string | No | Custom URL to redirect to from web version link if `redirectToPageId` is not set. |
| `rssData__blogImageMaxWidth` | integer | No | Maximum width for images imported from RSS feed blog posts. Applies if `rssData` is configured. |
| `testing__abSamplingDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Default email version ('master' or 'variant') if A/B test results are inconclusive. |
| `webversion__metaDescription` | string | No | Meta description for the web version (for search engines). |
| `content__themeSettingsValues` | object | No | Custom values for theme settings applied to the email template. |
| `testing__abSampleSizeDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Default email version ('master' or 'variant') if A/B test sample size is too small. |
| `webversion__redirectToPageId` | string | No | HubSpot page ID to redirect to from web version link; overrides `redirectToUrl`. |
| `rssData__useHeadlineAsSubject` | boolean | No | If true, email subject is first blog post headline. Applies if `rssData` is configured. |
| `subscriptionDetails__subscriptionId` | string | No | Specific subscription type ID (e.g., newsletter). |
| `subscriptionDetails__officeLocationId` | string | No | Company office location ID for email footer (compliance). |
| `subscriptionDetails__preferencesGroupId` | string | No | Associated subscription preferences group ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create pipeline for object type

**Slug:** `HUBSPOT_CREATE_PIPELINE`

Creates a new HubSpot pipeline for a specified CRM `objectType` (e.g., 'deals', 'tickets'), requiring the pipeline `label` be unique for that `objectType` and each stage `label` be unique within the pipeline.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | A unique label for the pipeline, used for organization in the HubSpot UI for this object type. |
| `stages` | array | Yes | A list of stage definitions for the new pipeline; each stage `label` must be unique within this pipeline. |
| `objectType` | string | Yes | Identifier for the CRM object type (e.g., 'deals', 'tickets', or a custom object type ID) for the new pipeline, determining its context and properties in HubSpot. |
| `displayOrder` | integer | Yes | Display order for this pipeline. Pipelines for the same object type with matching `displayOrder` are sorted alphabetically by label. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create pipeline stage

**Slug:** `HUBSPOT_CREATE_PIPELINE_STAGE`

Creates a new stage in a specified HubSpot CRM pipeline for a given object type, such as 'deals' or 'tickets'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | User-visible name for the pipeline stage, unique within the parent pipeline. |
| `metadata` | object | Yes | Stage-specific properties. For `deals` pipelines, `metadata` must include a `probability` key (value 0.0-1.0 in 0.1 increments). For `tickets` pipelines, an optional `ticketState` key can specify `OPEN` or `CLOSED` status. |
| `objectType` | string | Yes | CRM object type (e.g., 'deals', 'tickets') for the new stage. Must be a valid HubSpot CRM object type supporting pipelines. Typically lowercase and plural. |
| `pipelineId` | string | Yes | Identifier of the existing pipeline (specific to `objectType`) where the new stage will be added. |
| `displayOrder` | integer | Yes | Stage's display order in the pipeline (lower numbers first). Stages with identical `displayOrder` are sorted alphabetically by `label`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create product

**Slug:** `HUBSPOT_CREATE_PRODUCT`

Creates a new HubSpot product. Note: Products are catalog items and cannot be directly associated with deals, contacts, or companies. To connect product information to a deal or quote, create a line item using HUBSPOT_CREATE_LINE_ITEM that references this product's ID via hs_product_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The official name of the product. |
| `price` | number | No | The selling price of the product in the default currency of the HubSpot account. |
| `hs_sku` | string | No | The Stock Keeping Unit (SKU) for the product. This should be unique across all products if used for inventory management. |
| `hs_url` | string | No | A direct URL link to the product's page on an e-commerce website or product information site. |
| `quantity` | integer | No | The current quantity of the product available in inventory. This property might be relevant for physical goods. |
| `hs_active` | boolean | No | Indicates if the product is currently active and available for sale. Set to `true` if active, `false` otherwise. |
| `hs_images` | string | No | A comma-separated string of URLs for product images. The first URL is typically used as the primary image. |
| `description` | string | No | A detailed description of the product, its features, and benefits. |
| `hs_archived` | boolean | No | Indicates if the product has been archived. Archived products are typically hidden from active lists and sales processes. Set to `true` to archive. |
| `hs_featured` | boolean | No | Indicates if the product is marked as a featured item, which can be used to highlight it in product listings. |
| `associations` | array | No | A list of associations to create between this new product and other CRM objects. IMPORTANT: Products CANNOT be directly associated with deals, contacts, or companies. To connect product information to a deal, create a line item using HUBSPOT_CREATE_LINE_ITEM with hs_product_id referencing this product's ID. |
| `tax_category` | string | No | The tax category or code applicable to the product, used for calculating sales tax (e.g., 'Taxable Goods', 'Non-Taxable'). |
| `hs_product_id` | string | No | An external or secondary unique identifier for the product. Useful for mapping to external systems. HubSpot does not auto-generate this. |
| `hs_valid_from` | string | No | The date (YYYY-MM-DD format) from which the product is considered valid or available for sale. |
| `hs_product_type` | string | No | The type of the product. Valid values: 'inventory' (physical goods tracked in inventory), 'non_inventory' (physical goods not tracked), 'service' (services or labor). |
| `hs_valid_through` | string | No | The date (YYYY-MM-DD format) until which the product is considered valid or available. Leave empty if there's no expiration date. |
| `custom_properties` | object | No | A dictionary of custom properties for the product. Keys must be internal names of custom properties that already exist in your HubSpot account. Create custom properties in HubSpot Settings > Objects > Products > Product properties before using them here. Example: `{"material": "Titanium", "warranty_years": "5"}`. |
| `hs_product_status` | string | No | The current sales or lifecycle status of the product (e.g., 'Available', 'Discontinued', 'Pre-order', 'Out of Stock'). |
| `hs_product_category` | string | No | The primary category the product belongs to (e.g., 'Electronics', 'Apparel', 'Consulting Services'). |
| `hs_cost_of_goods_sold` | number | No | The cost of goods sold (COGS) for the product. Used for profit margin calculations. |
| `hs_product_subcategory` | string | No | A more specific subcategory for the product (e.g., 'Laptops' under 'Electronics'). |
| `hs_recurring_billing_period` | string | No | The billing frequency for recurring revenue products, formatted as a PnYnMnDTnHnMnS string (e.g., P1M for 1 month, P1Y for 1 year). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create products

**Slug:** `HUBSPOT_CREATE_PRODUCTS`

Creates multiple HubSpot products in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of product objects to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create property for specified object type

**Slug:** `HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE`

Creates a new custom property for a specified HubSpot CRM object type; ensure `groupName` refers to an existing property group for the `objectType`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Internal programmatic name (snake_case), unique within the `objectType`, used for API referencing. |
| `type` | string ("string" | "number" | "date" | "datetime" | "enumeration" | "bool") | Yes | The data type of the property. |
| `label` | string | Yes | Human-readable label for the property shown in HubSpot UI. |
| `hidden` | boolean | No | If true, hides property in HubSpot UI, lists, and forms. Defaults to false if not set. |
| `options` | array | No | List of predefined options. Required if `type` is 'enumeration'. For `fieldType` of 'booleancheckbox', must include exactly two options with values 'true' and 'false'. Each option defines a possible value. |
| `fieldType` | string ("textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation") | Yes | Controls UI display and interaction method (e.g., text input, dropdown, checkbox). |
| `formField` | boolean | No | If true, property can be used in HubSpot forms. Defaults to false if not set. |
| `groupName` | string | Yes | Name of the property group for organization in HubSpot UI. |
| `objectType` | string | Yes | Target HubSpot CRM object type (e.g., contacts, companies) for the new property. Case-sensitive. |
| `description` | string | No | Optional description for the property, displayed as help text in HubSpot UI. |
| `displayOrder` | integer | No | Controls display order of properties in HubSpot UI, sorted ascending; -1 displays after positive values. |
| `hasUniqueValue` | boolean | No | If true, property's value must be unique across all records for the `objectType`. Cannot be changed to false after being set to true. |
| `externalOptions` | boolean | No | If true, 'enumeration' options are sourced externally, requiring `referencedObjectType` (e.g., 'OWNER' for HubSpot users). Defaults to false. Only for 'enumeration' type. |
| `calculationFormula` | string | No | Formula for calculated property, required if `fieldType` is 'calculation_equation'. Can reference other properties by their internal names. |
| `referencedObjectType` | string | No | For properties referencing other HubSpot objects (e.g., "OWNER" when `externalOptions` is true and `type` is "enumeration" to populate options with users). Applicable for specific property types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create quote object

**Slug:** `HUBSPOT_CREATE_QUOTE_OBJECT`

Creates a new quote object in HubSpot CRM with specified properties and associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | A dictionary of key-value pairs representing the properties of the quote to be created. Property names are HubSpot internal names. |
| `associations` | array | Yes | A list of associations to create for the new quote. Each item specifies the object to associate with and the type of association. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create task

**Slug:** `HUBSPOT_CREATE_TASK`

Creates a new CRM task record. Use when adding a task with properties and optional associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `associations` | array | No | Optional list of associations to link this task with existing CRM records. |
| `hs_task_body` | string | No | Notes or body text of the task. |
| `hs_task_type` | string ("CALL" | "EMAIL" | "TODO") | No | Type of the task. Defaults to TODO if not specified. |
| `hs_timestamp` | string | Yes | Task due date in ISO 8601 format or Unix milliseconds; required. |
| `hs_task_status` | string ("NOT_STARTED" | "COMPLETED") | No | Current status of the task. Defaults to NOT_STARTED if not specified. |
| `hs_task_subject` | string | No | Title or subject line of the task. |
| `hs_task_priority` | string ("LOW" | "MEDIUM" | "HIGH" | "NONE") | No | Priority level of the task. Defaults to NONE if not specified. |
| `hubspot_owner_id` | string | No | ID of the HubSpot owner to assign this task to. This is a numeric string (typically 6-9 digits, e.g., '85424051') that uniquely identifies a user in your HubSpot account. To obtain valid owner IDs, use the HUBSPOT_RETRIEVE_OWNERS action. If omitted, the task will be unassigned. |
| `custom_properties` | object | No | A dictionary of custom properties. Boolean-type fields accept 'Yes'/'No', 'true'/'false', 'on'/'off', 'y'/'n' and Python booleans, which are auto-converted to string values ('true'/'false') for HubSpot API compatibility. Numeric strings ('0', '1', '2', etc.) are preserved as-is for number fields. |
| `hs_task_reminders` | integer | No | Reminder time for the task in Unix milliseconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create ticket

**Slug:** `HUBSPOT_CREATE_TICKET`

Creates a new HubSpot ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | No | Main body or description of the ticket, detailing the issue or request; typically required. |
| `subject` | string | No | Subject line or title of the ticket; typically a required field. |
| `created_by` | string | No | ID of the HubSpot user who created the ticket. |
| `createdate` | string | No | Date and time the ticket was created (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ'); HubSpot typically sets this automatically if not provided. |
| `hs_tag_ids` | array | No | List of tag IDs associated with the ticket for categorization or filtering. |
| `closed_date` | string | No | Date and time the ticket was closed (ISO 8601 format, e.g., 'YYYY-MM-DDTHH:mm:ssZ'). |
| `hs_pipeline` | string | No | ID of the pipeline this ticket belongs to; often a required field. |
| `source_type` | string | No | Source channel through which the ticket was created; must be one of: 'CHAT', 'EMAIL', 'FORM', 'PHONE'. |
| `associations` | array | No | List defining associations between this new ticket and other existing HubSpot objects (e.g., linking to a contact or company). Each item specifies the target object ID (`to`) and the type of association (`types`). |
| `time_to_close` | string | No | Time taken to close the ticket, often in milliseconds or ISO 8601 duration (e.g. 'PT2H30M'). |
| `hs_all_team_ids` | array | No | List of all team IDs associated with this ticket; usually managed by HubSpot. |
| `hubspot_team_id` | string | No | ID of the HubSpot team this ticket is assigned to. |
| `last_reply_date` | string | No | Date and time of the last reply (either from agent or contact) on this ticket (ISO 8601 format). |
| `hs_all_owner_ids` | array | No | List of all HubSpot owner IDs associated with this ticket; usually managed by HubSpot. |
| `hs_lastcontacted` | string | No | Date and time of the last contact associated with this ticket (ISO 8601 format). |
| `hubspot_owner_id` | string | No | ID of the HubSpot user who owns this ticket. |
| `custom_properties` | object | No | Dictionary of custom properties for the ticket: keys are internal names (e.g., `my_custom_field_name`), values are the data. |
| `hs_pipeline_stage` | string | No | ID of the current stage of the ticket within its pipeline; often required and must belong to the specified `hs_pipeline`. |
| `hs_primary_company` | string | No | ID of the primary company associated with this ticket. |
| `hs_ticket_category` | string | No | Category of the ticket; must be one of: 'PRODUCT_ISSUE', 'BILLING_ISSUE', 'FEATURE_REQUEST', 'GENERAL_INQUIRY'. |
| `hs_ticket_priority` | string | No | Priority of the ticket (e.g., 'HIGH', 'MEDIUM', 'LOW'); values might be HubSpot-defined or custom. |
| `notes_last_updated` | string | No | Timestamp of when the notes for this ticket were last updated (ISO 8601 format). |
| `hs_lastmodifieddate` | string | No | Date and time this ticket was last modified (ISO 8601 format); HubSpot typically sets this automatically. |
| `hs_assigned_team_ids` | array | No | List of team IDs specifically assigned to this ticket. |
| `hs_assignment_method` | string | No | Method used for assigning the ticket (e.g., 'MANUAL', 'AUTOMATIC_ROUND_ROBIN'). |
| `last_engagement_date` | string | No | Date and time of the last engagement (e.g., email, call) with this ticket (ISO 8601 format). |
| `notes_last_contacted` | string | No | Timestamp of the last contact logged in notes associated with the ticket (ISO 8601 format). |
| `hs_created_by_user_id` | string | No | HubSpot user ID of the person or system that created this ticket. |
| `first_agent_reply_date` | string | No | Date and time of the first agent reply on this ticket (ISO 8601 format). |
| `notes_next_activity_date` | string | No | Timestamp for the next scheduled activity related to this ticket's notes (ISO 8601 format). |
| `hs_all_accessible_team_ids` | array | No | List of all team IDs with access to this ticket; usually managed by HubSpot. |
| `hs_all_conversation_mentions` | array | No | System-populated list of all mentions in conversations related to this ticket. |
| `hs_all_associated_contact_emails` | array | No | System-populated list of email addresses of contacts associated with this ticket. |
| `hs_all_associated_contact_phones` | array | No | System-populated list of phone numbers of contacts associated with this ticket. |
| `hs_auto_generated_from_thread_id` | string | No | If auto-generated from a conversation, the ID of the originating thread. |
| `hs_all_assigned_business_unit_ids` | array | No | List of all business unit IDs assigned to this ticket; usually managed by HubSpot. |
| `hs_all_associated_contact_companies` | array | No | System-populated list of company names or IDs for contacts linked to this ticket. |
| `hs_all_associated_contact_lastnames` | array | No | System-populated list of last names of contacts associated with this ticket. |
| `hs_all_associated_contact_firstnames` | array | No | System-populated list of first names of contacts associated with this ticket. |
| `hs_all_associated_contact_mobilephones` | array | No | System-populated list of mobile phone numbers of contacts associated with this ticket. |
| `hs_conversations_originating_thread_id` | string | No | ID of the conversation thread from which this ticket originated. |
| `hs_conversations_originating_message_id` | string | No | ID of the first message in the conversation that led to this ticket's creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create tickets

**Slug:** `HUBSPOT_CREATE_TICKETS`

Creates multiple HubSpot tickets in a batch, each with its own properties and associations; `inputs` list must not be empty, each item needs `properties`, and associations/custom properties must be validly defined using internal names for custom fields and ISO 8601 for dates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of ticket creation requests; each item defines one ticket with its properties and associations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create timeline event based on template

**Slug:** `HUBSPOT_CREATE_TIMELINE_EVENT`

Creates an immutable custom timeline event on a CRM object's record using a specified, existing event template (identified by `eventTemplateId`), optionally updating CRM object properties if defined in the template; requires `email`, `utk`, or `objectId` for association.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Optional unique event identifier; HubSpot auto-generates if omitted. Use `{{uuid}}` for uniqueness if providing an ID. |
| `utk` | string | No | HubSpot user token (e.g., from `hubspotutk` cookie) to associate event with a contact; use if contact's email is unknown. |
| `email` | string | No | Email for contact-specific events; identifies existing contact, creates new, or changes email (if `objectId` provided). |
| `domain` | string | No | Domain associated with the event, often paired with `utk` for contact event context. |
| `tokens` | object | Yes | Key-value pairs for populating dynamic content in the event template; keys are token names from the template. |
| `objectId` | string | No | Unique identifier of the CRM object (e.g., company, deal) for event association; required for non-contact objects. |
| `timestamp` | string | No | ISO 8601 UTC timestamp of event occurrence; defaults to current time. Determines timeline placement. |
| `eventTemplateId` | string | Yes | The unique identifier of the event template, which must exist in HubSpot. |
| `timelineIFrame__url` | string | No | URL of content to display in the iframe. |
| `timelineIFrame__width` | integer | No | Width of the iframe modal window (pixels). |
| `timelineIFrame__height` | integer | No | Height of the iframe modal window (pixels). |
| `timelineIFrame__linkLabel` | string | No | Text for the link that opens the iframe modal with more details. |
| `timelineIFrame__headerLabel` | string | No | Title/header for the modal window displaying iframe content. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create multiple timeline events batch

**Slug:** `HUBSPOT_CREATE_TIMELINE_EVENTS_BATCH`

Creates multiple immutable timeline events in a batch, ideal for bulk data imports or real-time synchronizations, using a valid event template; may update CRM properties if the template is so configured.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of event objects to be created. Each object in the list must conform to the InputsRequest schema and define a single timeline event. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create workflow

**Slug:** `HUBSPOT_CREATE_WORKFLOW`

Creates a new HubSpot workflow to automate processes; ensure `enrollmentCriteria` and `actions` use properties relevant to the specified `objectTypeId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The unique name for the workflow. |
| `type` | string ("CONTACT_FLOW" | "PLATFORM_FLOW") | No | 'CONTACT_FLOW' for contact-based workflows, 'PLATFORM_FLOW' for workflows based on other CRM object types (deals, companies, tickets, custom objects). |
| `actions` | array | Yes | Array of workflow action configurations. Each action must include: 'actionId' (unique string ID), 'type' (e.g., 'SINGLE_CONNECTION'), 'actionTypeId' (e.g., '0-1' for delay, '0-4' for email), 'actionTypeVersion' (typically 0), 'connection' (object with 'edgeType' and 'nextActionId'), and 'fields' (action-specific settings). Example: [{'actionId': '1', 'type': 'SINGLE_CONNECTION', 'actionTypeId': '0-1', 'actionTypeVersion': 0, 'connection': {'edgeType': 'STANDARD', 'nextActionId': '2'}, 'fields': {'delayMillis': 3600000}}] |
| `flowType` | string ("WORKFLOW" | "ACTION_SET" | "UNKNOWN") | No | Flow category: 'WORKFLOW' for standard workflows, 'ACTION_SET' for reusable action sets that can be called from other workflows. |
| `isEnabled` | boolean | No | Set to true to activate the workflow immediately upon creation, or false to create it in disabled state for review. |
| `dataSources` | array | No | Data source configurations for conditions or personalization. |
| `description` | string | No | Optional explanation of the workflow's purpose and functionality. |
| `timeWindows` | array | No | Configurations for periods when workflow actions can execute. |
| `blockedDates` | array | No | Configurations for dates when workflow actions should not execute. |
| `objectTypeId` | string | No | HubSpot internal ID for the CRM object type: '0-1' for Contacts, '0-2' for Companies, '0-3' for Deals, '0-5' for Tickets, or custom object type ID. |
| `startActionId` | string | Yes | The unique ID of the first action in the workflow. This must match the actionId of one of the actions in the actions array. |
| `customProperties` | object | No | Custom key-value pairs for organization or tracking. |
| `enrollmentCriteria` | object | Yes | Required configuration defining enrollment triggers for the workflow. Must include: 'type' (either 'EVENT_BASED' or 'LIST_BASED'), 'shouldReEnroll' (boolean for allowing re-enrollment), and either 'eventFilterBranches' (for event-based) or 'listFilterBranch' (for list-based enrollment). Example for event-based: {'type': 'EVENT_BASED', 'shouldReEnroll': false, 'eventFilterBranches': [{'filterBranchType': 'OR', 'filterBranchOperator': 'OR', 'filters': [{'filterType': 'PROPERTY', 'property': 'email', 'operator': 'HAS_PROPERTY'}]}]} |
| `suppressionListIds` | array | No | HubSpot list IDs for contacts to be prevented from enrollment. |
| `unEnrollmentSetting` | object | No | Defines if/how objects unenroll from other workflows upon enrolling in this one. |
| `nextAvailableActionId` | string | Yes | The next available action ID number for sequencing. This should be one higher than the highest action ID number used in the workflow. |
| `canEnrollFromSalesforce` | boolean | No | Allow contacts to be enrolled directly from Salesforce. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete call

**Slug:** `HUBSPOT_DELETE_CALL`

Permanently deletes a HubSpot call record by its ID. This action removes a call engagement from the CRM. Use this action when you need to remove a specific call record that is no longer needed or was created in error. This action is irreversible - the call record cannot be recovered once deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `call_id` | string | Yes | The unique identifier of the HubSpot call record to be deleted. This is a numeric ID that identifies the specific call engagement in the CRM. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete calling extension settings

**Slug:** `HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS`

Permanently deletes the settings for a calling extension app, specified by its `appId`, rendering it unusable for all connected HubSpot accounts; this operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique identifier for the calling extension app to be deleted. This ID is assigned by HubSpot when the extension is created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete campaign

**Slug:** `HUBSPOT_DELETE_CAMPAIGN`

Permanently deletes a marketing campaign from HubSpot using its `campaignGuid`; returns a 204 No Content status even if the campaign does not exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaignGuid` | string | Yes | The unique identifier (UUID) for the marketing campaign to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive a batch of campaigns

**Slug:** `HUBSPOT_DELETE_CAMPAIGNS_BATCH`

Archives a batch of up to 50 marketing campaigns, hiding them from active views rather than permanently deleting them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of marketing campaign identifiers to be archived in batch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Permanently delete company for GDPR compliance

**Slug:** `HUBSPOT_DELETE_COMPANY_GDPR`

Permanently deletes a company (identified by objectId) and its associated data from HubSpot for GDPR compliance; this action is irreversible and requires the company to exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The unique identifier of the company to be permanently deleted. If `idProperty` is specified, this is the value of that custom unique property. Otherwise, this is the company's HubSpot Company ID. |
| `idProperty` | string | No | Optional name of an alternate unique identifier property. If provided, objectId must be the value of this property for the company. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Permanently delete contact for GDPR compliance

**Slug:** `HUBSPOT_DELETE_CONTACT_GDPR`

Irreversibly erases a HubSpot contact and associated data per a GDPR request; if an email is given for a non-existent contact, it's blocklisted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The contact's identifier (email or HubSpot ID, based on `idProperty`) for permanent deletion. |
| `idProperty` | string | No | Identifies how `objectId` should be interpreted: 'email' for email address, or null/omitted for HubSpot contact ID (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive deal (GDPR permanent delete not supported for deals)

**Slug:** `HUBSPOT_DELETE_DEAL_GDPR`

Archives a HubSpot deal by its ID. Note: HubSpot's GDPR permanent deletion API only supports contacts, not deals. This action archives the deal (moves to recycling bin for 90 days) as the closest available functionality.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dealId` | string | Yes | The unique HubSpot Deal ID of the deal to archive. Archived deals are moved to the recycling bin and recoverable for 90 days. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Permanently delete line items for gdpr

**Slug:** `HUBSPOT_DELETE_LINE_ITEMS_GDPR`

Permanently deletes a specified line item and its associated content for GDPR compliance; this action is irreversible and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The value of the unique identifier for the line item to be permanently deleted. This corresponds to the property named in `idProperty`, or the line item's primary HubSpot ID if `idProperty` is not provided. |
| `idProperty` | string | No | The name of the property that uniquely identifies the line item, if `objectId` is not its primary HubSpot ID. For example, 'external_id'. If omitted, `objectId` is assumed to be the line item's primary HubSpot ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a marketing email

**Slug:** `HUBSPOT_DELETE_MARKETING_EMAIL`

Permanently deletes a marketing email from your HubSpot account. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the marketing email to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete meeting

**Slug:** `HUBSPOT_DELETE_MEETING`

Permanently deletes (archives) a HubSpot meeting by its ID, moving it to the recycling bin where it can be restored within 90 days. Use this action when you need to remove a meeting engagement from HubSpot's CRM. This action is irreversible via the API — the meeting cannot be recovered programmatically once deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meeting_id` | string | Yes | The unique HubSpot identifier for the meeting to be archived/deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete note

**Slug:** `HUBSPOT_DELETE_NOTE`

Archives a HubSpot note by its ID, removing it from active view. The note is archived rather than permanently deleted and can be restored within 90 days. Use this action when you need to remove a note from the CRM without permanently deleting it. This action is irreversible through the API - archived notes cannot be restored programmatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | The unique numeric ID of the note to delete/archive. This is the HubSpot note record ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete pipeline by id

**Slug:** `HUBSPOT_DELETE_PIPELINE`

Permanently deletes a HubSpot pipeline and all its stages by `pipelineId` and `objectType`; this is irreversible, so use validation flags to avoid errors if the pipeline is not empty.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | Type of CRM object associated with the pipeline, determining which pipeline category is affected. |
| `pipelineId` | string | Yes | Unique identifier of the pipeline to be deleted. |
| `validateReferencesBeforeDelete` | boolean | No | If true, HubSpot checks for existing references to this pipeline before deletion to prevent data loss or orphaned records. |
| `validateDealStageUsagesBeforeDelete` | boolean | No | If true (for deal pipelines), HubSpot verifies if any deals use stages from this pipeline before deletion to prevent disruption. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete pipeline stage by id

**Slug:** `HUBSPOT_DELETE_PIPELINE_STAGE`

Permanently deletes a specific pipeline stage for an `objectType` (e.g., 'deals', 'tickets') that supports pipelines; this operation is irreversible, so ensure no active CRM records are associated with the stage to prevent data issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `stageId` | string | Yes | Identifier of the pipeline stage to be deleted. |
| `objectType` | string | Yes | The CRM object type for the pipeline (e.g., 'deals', 'tickets'). |
| `pipelineId` | string | Yes | Identifier of the pipeline (specific to the `objectType`) from which the stage will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete schema by object type

**Slug:** `HUBSPOT_DELETE_SCHEMA`

Deletes a HubSpot custom object schema by `objectType`. With `archived=false` (default), it archives the schema (soft delete). With `archived=true`, it permanently deletes an already-archived schema (hard delete). Prerequisites: All object instances, associations, and properties must be deleted first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Controls deletion type: `false` (default) archives the schema (soft delete), `true` permanently deletes an already-archived schema (hard delete). To fully remove a schema, first call with `false` to archive it, then call again with `true` to purge it. |
| `objectType` | string | Yes | The fully qualified name or object type ID of the custom object schema to delete. Must be an exact match to an existing schema. Note: All object instances, associations, and properties must be deleted before the schema can be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete task

**Slug:** `HUBSPOT_DELETE_TASK`

Archives a HubSpot task by its ID, removing it from active task lists. Use this action when you need to delete or remove a task from HubSpot CRM. The task is archived rather than permanently deleted and may be recoverable. This action is irreversible from the API perspective — the task cannot be directly unarchived via this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The unique identifier of the task to delete. Must be a numeric string (e.g., '12345678901'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete timeline event template

**Slug:** `HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE`

Permanently and irreversibly deletes a specific timeline event template, identified by its `eventTemplateId`, from the application `appId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The numeric identifier (positive integer) for the target application within which the event template exists. The template specified by `eventTemplateId` must be part of this application. |
| `eventTemplateId` | string | Yes | The unique identifier for the event template to be deleted. This ID must correspond to an existing template within the specified application. Typically a UUID or a system-generated string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete video conferencing app settings

**Slug:** `HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS`

Irreversibly deletes all settings for a video conferencing application identified by its `appId` in HubSpot, removing its configuration and preventing it from functioning until reconfigured; existing meetings and historical data are unaffected. Note: This API requires developer API key (hapikey) authentication from your HubSpot developer account, not OAuth tokens.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique identifier for the video conferencing application whose settings are to be deleted; assigned when the application is created in your HubSpot developer portal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete workflow

**Slug:** `HUBSPOT_DELETE_WORKFLOW`

Permanently deletes a HubSpot workflow by its ID; deleted workflows cannot be restored via the API and the ID must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workflow_id` | string | Yes | The unique identifier of the HubSpot workflow to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enroll contact in workflow

**Slug:** `HUBSPOT_ENROLL_CONTACT_IN_WORKFLOW`

Enrolls a contact, identified by email, in a HubSpot workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email address of the contact to enroll. |
| `workflow_id` | string | Yes | The positive numeric ID of the HubSpot contact workflow, passed as a string to preserve 64-bit values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch import error details

**Slug:** `HUBSPOT_FETCH_IMPORT_ERROR_DETAILS`

Fetches a paginated list of read-only error details for a specific HubSpot CRM import, requiring a valid `importId` for a processed import.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from a previous response's `paging.next.after` property to fetch the next page of error details. |
| `limit` | integer | No | Maximum number of error records to return per page (e.g., between 1 and a HubSpot-defined maximum of 100). |
| `importId` | integer | Yes | Identifier of the import operation for which to fetch error details; must correspond to an existing import in HubSpot. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch recording settings by app ID

**Slug:** `HUBSPOT_FETCH_RECORDING_SETTINGS`

Fetches call recording settings for a specified, existing HubSpot calling extension app.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique identifier for an existing calling extension app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch revenue

**Slug:** `HUBSPOT_FETCH_REVENUE`

Fetches a revenue attribution report for a specified, existing marketing campaign, optionally using a specific attribution model and date range; if both start and end dates are given, `endDate` must not be earlier than `startDate`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `endDate` | string | No | End date (YYYY-MM-DD) for filtering report data; defaults to the current date if omitted. |
| `startDate` | string | No | Start date (YYYY-MM-DD) for filtering report data; defaults to '2006-01-01' if omitted. |
| `campaignGuid` | string | Yes | The unique identifier (UUID) for the marketing campaign. |
| `attributionModel` | string | No | Attribution model for revenue calculation; defaults to 'LINEAR' if omitted. Allowed values: 'LINEAR', 'FIRST_INTERACTION', 'LAST_INTERACTION', 'FULL_PATH', 'U_SHAPED', 'W_SHAPED', 'TIME_DECAY', 'J_SHAPED', 'INVERSE_J_SHAPED'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the variation of an A/B marketing email

**Slug:** `HUBSPOT_GET_AB_EMAIL_VARIATION`

Retrieves the alternate variation of a specified A/B marketing email; the `emailId` must identify an email currently in an A/B test. Requires Marketing Hub Professional or Enterprise subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the A/B marketing email. If this ID refers to variation A, the details for variation B will be returned, and vice-versa. |
| `archived` | boolean | No | Boolean variable to request archived email. Set to true to retrieve archived A/B test emails. |
| `includeStats` | boolean | No | Boolean variable to request stats to be returned in response. Set to true to include email performance statistics. |
| `workflowNames` | boolean | No | Boolean variable to request name of the associated workflows in response. Set to true to include workflow names. |
| `includedProperties` | array | No | List of properties to be returned in the API response. If not specified, all properties will be returned. |
| `marketingCampaignNames` | boolean | No | Boolean variable to request name of the campaign in response. Set to true to include associated campaign names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Information

**Slug:** `HUBSPOT_GET_ACCOUNT_INFO`

Gets current HubSpot account info (email, hubId, user details) using access-token lookup.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get active imports list

**Slug:** `HUBSPOT_GET_ACTIVE_IMPORTS_LIST`

Retrieves a list of currently active import jobs in HubSpot for monitoring ongoing data operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for the next page of results, from a previous response's `paging.next.after` property. |
| `limit` | integer | No | Maximum number of import results per page. |
| `before` | string | No | Cursor for the previous page of results, obtained from a previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get aggregated statistic intervals

**Slug:** `HUBSPOT_GET_AGGREGATED_STATISTIC_INTERVALS`

Retrieves aggregated statistics for marketing emails (e.g., send counts), grouped by specified time intervals within a defined time range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailIds` | array | No | Optional list of specific email IDs to filter results; if omitted, statistics for all emails in the time range are returned. |
| `interval` | string ("YEAR" | "QUARTER" | "MONTH" | "WEEK" | "DAY" | "HOUR" | "QUARTER_HOUR" | "MINUTE" | "SECOND") | No | Time interval for aggregating email statistics, defining data granularity (e.g., YEAR, MONTH, DAY). |
| `endTimestamp` | string | No | End of the time span for statistics (ISO8601 timestamp); must be on or after `startTimestamp`. |
| `startTimestamp` | string | No | Start of the time span for statistics (ISO8601 timestamp). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get aggregated statistics

**Slug:** `HUBSPOT_GET_AGGREGATED_STATISTICS`

Retrieves aggregated statistics for marketing emails, optionally within an ISO8601 formatted time range, by email IDs, or specific email properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailIds` | array | No | Filter statistics by specific email IDs. |
| `property` | string | No | Specific email property to include (e.g., 'subject', 'campaignGuid'); if omitted, all available properties are returned. See HubSpot docs for available properties. |
| `endTimestamp` | string | No | End of the time range (ISO8601 format); statistics are aggregated for emails sent on or before this time. Required by the API; if not provided, defaults to current time. |
| `startTimestamp` | string | No | Start of the time range (ISO8601 format); statistics are aggregated for emails sent on or after this time. Required by the API; if not provided, defaults to 30 days ago. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all marketing emails for a HubSpot account

**Slug:** `HUBSPOT_GET_ALL_MARKETING_EMAILS_FOR_A_HUBSPOT_ACCOUNT`

Fetches a list of marketing emails from a HubSpot account, with options for filtering, sorting, pagination, and including performance statistics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | A list of fields to sort the results by. Valid fields are `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Prefix with '-' for descending order (e.g., '-createdAt'). `createdAt` is the default sort order if unspecified. |
| `type` | string ("AB_EMAIL" | "BATCH_EMAIL" | "LOCALTIME_EMAIL" | "AUTOMATED_AB_EMAIL" | "BLOG_EMAIL" | "BLOG_EMAIL_CHILD" | "RSS_EMAIL" | "RSS_EMAIL_CHILD" | "RESUBSCRIBE_EMAIL" | "OPTIN_EMAIL" | "OPTIN_FOLLOWUP_EMAIL" | "AUTOMATED_EMAIL" | "FEEDBACK_CES_EMAIL" | "FEEDBACK_CUSTOM_EMAIL" | "FEEDBACK_CUSTOM_SURVEY_EMAIL" | "FEEDBACK_NPS_EMAIL" | "FOLLOWUP_EMAIL" | "LEADFLOW_EMAIL" | "SINGLE_SEND_API" | "MARKETING_SINGLE_SEND_API" | "SMTP_TOKEN" | "TICKET_EMAIL" | "MEMBERSHIP_REGISTRATION_EMAIL" | "MEMBERSHIP_PASSWORD_SAVED_EMAIL" | "MEMBERSHIP_PASSWORD_RESET_EMAIL" | "MEMBERSHIP_EMAIL_VERIFICATION_EMAIL" | "MEMBERSHIP_OTP_LOGIN_EMAIL") | No | Filter emails by type. Multiple types can be specified. If omitted, emails of all types are returned. See TypeEnm for allowed values. |
| `after` | string | No | The cursor token to retrieve the next page of results. This value is obtained from the `paging.next.after` property of a previous paged response. |
| `limit` | integer | No | The maximum number of emails to return per page. Default is 100, max is 100. |
| `archived` | boolean | No | Specifies whether to include archived emails in the results. Defaults to `false` (archived emails are not returned). Set to `true` to retrieve archived emails. |
| `createdAt` | string | No | Filter emails created at this exact ISO 8601 date-time (e.g., '2023-10-26T10:30:00Z'). |
| `updatedAt` | string | No | Filter emails last updated at this exact ISO 8601 date-time (e.g., '2023-10-26T12:45:00Z'). |
| `isPublished` | boolean | No | Filter emails based on their publication status: `true` for published emails, `false` for draft emails. If omitted, both published and draft emails are returned. |
| `createdAfter` | string | No | Filter emails created after this ISO 8601 date-time (e.g., '2023-10-26T00:00:00Z'). |
| `includeStats` | boolean | No | If `true`, includes statistics (e.g., open rates, click rates) with each email. Defaults to `false`. |
| `updatedAfter` | string | No | Filter emails last updated after this ISO 8601 date-time (e.g., '2023-10-26T00:00:00Z'). |
| `createdBefore` | string | No | Filter emails created before this ISO 8601 date-time (e.g., '2023-10-27T00:00:00Z'). |
| `updatedBefore` | string | No | Filter emails last updated before this ISO 8601 date-time (e.g., '2023-10-27T00:00:00Z'). |
| `includedProperties` | array | No | A list of specific property names to include in the response for each email object. If omitted, a default set of properties is returned. Consult the HubSpot API documentation for available email properties. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get blog post

**Slug:** `HUBSPOT_GET_BLOG_POST`

Retrieves one HubSpot CMS blog post by post ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `post_id` | string | Yes | Unique HubSpot ID of the blog post to retrieve. |
| `archived` | boolean | No | Whether to retrieve the archived version of the blog post. |
| `property` | string | No | A blog post property to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get campaign

**Slug:** `HUBSPOT_GET_CAMPAIGN`

Retrieves a HubSpot campaign by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaignId` | string | Yes | Unique HubSpot identifier for the campaign to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get campaign metrics

**Slug:** `HUBSPOT_GET_CAMPAIGN_METRICS`

Retrieves key attribution metrics for an existing marketing campaign, identified by its `campaignGuid`, within an optional date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `endDate` | string | No | The end date (YYYY-MM-DD) for filtering report data. Defaults to the current date if not specified. |
| `startDate` | string | No | The start date (YYYY-MM-DD) for filtering report data. Defaults to 2006-01-01 if not specified. |
| `campaignGuid` | string | Yes | The unique identifier (UUID) for the marketing campaign for which to retrieve metrics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get campaigns

**Slug:** `HUBSPOT_GET_CAMPAIGNS`

Retrieves multiple HubSpot campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response. |
| `limit` | integer | No | Maximum number of campaigns to return. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get company

**Slug:** `HUBSPOT_GET_COMPANY`

Retrieves a HubSpot company by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to true to include only archived companies; defaults to false (active companies). |
| `companyId` | string | Yes | Unique HubSpot identifier for the company to retrieve. |
| `properties` | array | No | Company property names to include in the response; if omitted, only default properties (name, domain, createdate, etc.) are returned. Use "all" to retrieve all properties, or specify individual property names. Accepts a list of strings or a JSON-stringified array (e.g., '["name", "domain"]'). |
| `associations` | array | No | Object types (e.g., 'contacts', 'deals') to include associated object IDs in the response. Accepts a list of strings or a JSON-stringified array (e.g., '["contacts", "deals"]'). |
| `propertiesWithHistory` | array | No | Property names for which to include current and historical values in the response. Accepts a list of strings or a JSON-stringified array. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get contact IDs

**Slug:** `HUBSPOT_GET_CONTACT_IDS`

Fetches a list of contact IDs for a specific HubSpot campaign based on interaction type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | A pagination cursor. Used to fetch the next set of results. Provide the 'after' value from a previous response to get subsequent pages. Example: NTI1Cg%3D%3D |
| `limit` | integer | No | The maximum number of contact IDs to return in a single request. Default is 100. |
| `endDate` | string | No | The end date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to the current date. |
| `startDate` | string | No | The start date for filtering report data, formatted as YYYY-MM-DD. If not provided, defaults to 2006-01-01. |
| `contactType` | string | Yes | The type of contact interaction to filter by. Allowed values: 'contactFirstTouch' (contacts whose first interaction was with this campaign), 'contactLastTouch' (contacts whose last interaction before a key event was with this campaign), 'influencedContacts' (all contacts who interacted with assets of this campaign). |
| `campaignGuid` | string | Yes | The unique identifier (UUID) of the campaign for which to fetch contact IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get CRM list

**Slug:** `HUBSPOT_GET_CRM_LIST`

Retrieves a HubSpot CRM list by its ILS list ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | ILS ID of the CRM list to retrieve. |
| `include_filters` | boolean | No | Whether to include the list's complete filter branch in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deal

**Slug:** `HUBSPOT_GET_DEAL`

Retrieves a HubSpot deal by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dealId` | string | Yes | Unique HubSpot identifier for the deal to retrieve. |
| `archived` | boolean | No | Set to true to include only archived deals; defaults to false (active deals). |
| `properties` | array | No | Deal property names to include in the response; if omitted, all available properties are returned. |
| `associations` | array | No | Object types (e.g., 'contacts', 'companies') for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | Property names for which to include current and historical values in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deals

**Slug:** `HUBSPOT_GET_DEALS`

Retrieves multiple HubSpot deals by their IDs in a single batch request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of deal identifiers to retrieve. |
| `archived` | boolean | No | Filter by archived status. |
| `idProperty` | string | No | Alternate unique identifier property to use for retrieving deals. |
| `properties` | array | No | Deal property names to include in the response. If not specified, only default properties will be returned. Common properties include: dealname, amount, dealstage, pipeline, closedate, hubspot_owner_id. |
| `propertiesWithHistory` | array | No | Deal property names for which to retrieve historical values. Leave empty if historical data is not needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get emails

**Slug:** `HUBSPOT_GET_EMAILS`

Retrieves multiple HubSpot email engagement records by their IDs in a single batch request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of email identifiers to retrieve. |
| `archived` | boolean | No | Filter by archived status. |
| `idProperty` | string | No | Alternate unique identifier property to use. |
| `properties` | array | Yes | Email property names to include in the response. |
| `propertiesWithHistory` | array | No | Email property names for which to retrieve historical values. Leave empty if history is not needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get engagement

**Slug:** `HUBSPOT_GET_ENGAGEMENT`

Retrieve one legacy aggregate engagement by its engagement ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `engagement_id` | string | Yes | The unique legacy aggregate engagement ID to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get specific event template for app

**Slug:** `HUBSPOT_GET_EVENT_TEMPLATE`

Retrieves detailed information about a specific event template for a given application in HubSpot's CRM timeline.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The ID of the target application for which the event template is being retrieved. This parameter is required and ensures the template lookup is specific to an app integration within HubSpot. The appId must be a valid, existing app ID in your HubSpot account. |
| `eventTemplateId` | string | Yes | The unique identifier of the event template. This ID is assigned by HubSpot when the template is created. It is required and must be a valid, existing template ID associated with the specified app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get import record information

**Slug:** `HUBSPOT_GET_IMPORT_RECORD_INFORMATION`

Retrieves a comprehensive summary of a specific HubSpot CRM import record by its `importId`, including status, progress, updates, results, and errors; useful for monitoring and troubleshooting data imports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `importId` | integer | Yes | The unique identifier for the import record to retrieve, typically obtained when an import is initiated or from a list of imports. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get draft version of a marketing email

**Slug:** `HUBSPOT_GET_MARKETING_EMAIL_DRAFT`

Retrieves the draft version of a marketing email by its `emailId`; if no draft exists, returns the published version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the marketing email. Used to fetch its draft version or, if unavailable, its published version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a revision of a marketing email

**Slug:** `HUBSPOT_GET_MARKETING_EMAIL_REVISION`

Retrieves a specific, previously saved revision of a marketing email using its unique email ID and revision ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the marketing email whose revision is to be fetched. |
| `revisionId` | string | Yes | The unique identifier of the specific revision of the marketing email to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get revisions of a marketing email

**Slug:** `HUBSPOT_GET_MARKETING_EMAIL_REVISIONS`

Retrieves a paginated list of all historical versions (including full state like content, settings, metadata) for a specified, existing marketing email; revision ID -1 identifies the current version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for the next page of results, typically from `paging.next.after` in a previous response. |
| `limit` | integer | No | Maximum number of email revisions per page. The API defaults to 100 if this parameter is not provided. |
| `before` | string | No | Cursor for the previous page of results, typically from `paging.prev.before` in a previous response. |
| `emailId` | string | Yes | The unique identifier of the marketing email for which revisions are to be fetched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Return pipeline by id

**Slug:** `HUBSPOT_GET_PIPELINE_BY_ID`

Retrieves a specific pipeline by its ID and CRM object type, detailing its stages and properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The CRM object type for which the pipeline is being retrieved. Must be a valid HubSpot object type that supports pipelines. |
| `pipelineId` | string | Yes | Unique identifier of the pipeline to retrieve for the specified object type, typically a system-generated string or UUID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get pipeline stage audit

**Slug:** `HUBSPOT_GET_PIPELINE_STAGE_AUDIT`

Retrieves a reverse chronological list of all mutations (changes) for a specific pipeline stage, including CREATE and UPDATE events with timestamps and details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `stageId` | string | Yes | The unique identifier of the pipeline stage. |
| `objectType` | string | Yes | The CRM object type (e.g., 'deals', 'tickets') for the pipeline stage. |
| `pipelineId` | string | Yes | The unique identifier of the pipeline containing the stage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product

**Slug:** `HUBSPOT_GET_PRODUCT`

Retrieves a HubSpot product by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter by archived status. |
| `productId` | string | Yes | Unique HubSpot identifier for the product to retrieve. |
| `properties` | array | No | Product property names to include in the response. |
| `associations` | array | No | Object types for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | Property names for which to include historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get products

**Slug:** `HUBSPOT_GET_PRODUCTS`

Retrieves multiple HubSpot products by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of product identifiers to retrieve. |
| `archived` | boolean | No | Whether to include archived products in the results. Set to true to retrieve only archived products, false (default) to retrieve only active products. |
| `idProperty` | string | No | Alternate unique identifier property to use. |
| `properties` | array | Yes | Product property names to include in the response. Common properties include: name, price, description, hs_sku, hs_cost_of_goods_sold, hs_bundle_type, hs_pricing_model, hs_recurring_billing_period, hs_product_classification. |
| `propertiesWithHistory` | array | No | Product property names for which to retrieve historical values. Pass an empty array if historical data is not needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get quote by id

**Slug:** `HUBSPOT_GET_QUOTE`

Retrieves a specific HubSpot quote by its unique identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quoteId` | string | Yes | Unique identifier of the quote; can be the HubSpot object ID or a custom unique property value if `idProperty` is specified. |
| `archived` | boolean | No | Specifies whether the quote to retrieve is archived (`True`) or active (`False`). |
| `idProperty` | string | No | Internal name of a unique custom property to use as the quote identifier instead of the HubSpot object ID; this property must have unique values across all quotes. |
| `properties` | array | No | HubSpot property internal names to include in the response; limits data returned and improves performance. Non-existent properties are ignored. |
| `associations` | array | No | Object type names (e.g., 'deals', 'contacts') for which to retrieve IDs of associated objects; fetches linked CRM object IDs. Non-existent association types are ignored. |
| `propertiesWithHistory` | array | No | HubSpot property internal names for which to include historical values; retrieves change history. Non-existent properties or those without history are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get record list memberships

**Slug:** `HUBSPOT_GET_RECORD_LIST_MEMBERSHIPS`

Return the HubSpot lists that contain one CRM record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | CRM record ID whose list memberships should be returned. |
| `object_type_id` | string | Yes | HubSpot object type ID for the record, such as 0-1 for contacts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get segment members

**Slug:** `HUBSPOT_GET_SEGMENT_MEMBERS`

Tool to retrieve segment (list) members ordered by join timestamp. Use when you need to page through list membership data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor token to fetch records after the last returned record; sorts ascending. Overrides `before` if both provided. |
| `limit` | integer | No | Number of records to return; default 100; maximum 250. |
| `before` | string | No | Cursor token to fetch records before the previously returned records; sorts descending. |
| `listId` | string | Yes | The ID of the list (segment) to retrieve members for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the details of a specified marketing email

**Slug:** `HUBSPOT_GET_THE_DETAILS_OF_A_SPECIFIED_MARKETING_EMAIL`

Retrieves detailed information for a specific marketing email in HubSpot using its unique email ID, optionally including performance statistics and specific properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the marketing email to retrieve. |
| `archived` | boolean | No | Filter by archived status: `true` for archived, `false` for not archived. Omit to retrieve regardless of archived status. |
| `includeStats` | boolean | No | Whether to include performance statistics (e.g., open rates, click-through rates) with the email details. |
| `includedProperties` | array | No | Specific marketing email property names to include in the response (e.g., "name", "subject", "createdById"). If omitted, a default set of properties is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get ticket

**Slug:** `HUBSPOT_GET_TICKET`

Retrieves a HubSpot ticket by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter by archived status. |
| `ticketId` | string | Yes | Unique HubSpot identifier for the ticket to retrieve. |
| `properties` | array | No | Ticket property names to include in the response. |
| `associations` | array | No | Object types for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | Property names for which to include historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tickets

**Slug:** `HUBSPOT_GET_TICKETS`

Retrieves multiple HubSpot tickets by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of ticket identifiers to retrieve. |
| `archived` | boolean | No | Filter by archived status. |
| `idProperty` | string | No | Alternate unique identifier property to use. |
| `properties` | array | Yes | Ticket property names to include in the response. Common properties: subject, content, hs_ticket_priority, hs_ticket_category, hs_pipeline_stage, createdate, hubspot_owner_id. |
| `propertiesWithHistory` | array | No | Ticket property names for which to retrieve historical values. Leave empty if you only need current values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workflow by ID

**Slug:** `HUBSPOT_GET_WORKFLOW_BY_ID`

Retrieves comprehensive details for an existing HubSpot workflow by its unique ID; unsupported actions are designated 'UNSUPPORTED_ACTION' in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workflow_id` | string | Yes | The unique identifier of the HubSpot workflow to retrieve. This ID can be found by using the 'Get all workflows' action or from the URL when viewing a workflow in the HubSpot UI. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get workflow revision

**Slug:** `HUBSPOT_GET_WORKFLOW_REVISION`

Retrieves a specific historical revision of a HubSpot workflow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow_id` | string | Yes | Unique ID of the HubSpot workflow whose revision to retrieve. |
| `revision_id` | string | Yes | Unique ID of the historical workflow revision to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all workflows

**Slug:** `HUBSPOT_GET_WORKFLOWS`

Retrieves a list of workflow summaries (ID, name, type, status) from HubSpot, using the 'limit' parameter for pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of workflows to retrieve per API call, used for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List assets

**Slug:** `HUBSPOT_LIST_ASSETS`

Lists assets of a specific `assetType` for a given HubSpot marketing `campaignGuid`, optionally including performance metrics for a date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination cursor from 'paging.next.after' of a previous response; results will begin after this cursor. |
| `limit` | string | No | Maximum number of assets to return per response (positive integer). |
| `endDate` | string | No | End date (YYYY-MM-DD, inclusive) for asset performance metrics. Metrics are not fetched if `startDate` or `endDate` is missing/invalid. |
| `assetType` | string | Yes | The specific type of asset to retrieve (e.g., BLOG_POST, LANDING_PAGE); only one asset type per request. |
| `startDate` | string | No | Start date (YYYY-MM-DD, inclusive) for asset performance metrics. Metrics are not fetched if `startDate` or `endDate` is missing/invalid. |
| `campaignGuid` | string | Yes | Unique identifier (UUID) of an existing marketing campaign whose assets are to be listed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List association types

**Slug:** `HUBSPOT_LIST_ASSOCIATION_TYPES`

Lists all valid association types between two specified HubSpot CRM object types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `toObjectType` | string | Yes | The type of the second object in the association (e.g., contact, company, deal). |
| `fromObjectType` | string | Yes | The type of the first object in the association (e.g., contact, company, deal). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List audit logs

**Slug:** `HUBSPOT_LIST_AUDIT_LOGS`

Lists Enterprise-only HubSpot account audit logs with optional filters and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | HubSpot sort expressions, sent as repeated `sort` query parameters. |
| `after` | string | No | Paging cursor from a previous response's `paging.next.after` field. |
| `limit` | integer | No | Maximum number of audit log entries to return per page. |
| `actingUserId` | array | No | User IDs whose actions should be returned. Each ID is sent as a repeated `actingUserId` query parameter. |
| `occurredAfter` | string | No | Return actions that occurred after this RFC3339 timestamp. |
| `occurredBefore` | string | No | Return actions that occurred before this RFC3339 timestamp. |
| `fillFinalTimestamp` | boolean | No | Value for HubSpot's `fillFinalTimestamp` query parameter. HubSpot does not document its behavior. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List call dispositions

**Slug:** `HUBSPOT_LIST_CALL_DISPOSITIONS`

Return HubSpot call disposition IDs and labels.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List companies

**Slug:** `HUBSPOT_LIST_COMPANIES`

Retrieves a paginated list of HubSpot companies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page. |
| `limit` | integer | No | Maximum number of companies to return per page, controlling pagination size (default: 10). |
| `archived` | boolean | No | Boolean flag to filter companies by archived status: `true` returns only archived companies; `false` (default) returns only active companies. |
| `properties` | array | No | List of company property internal names to include in the response (e.g., 'name', 'domain'). If omitted, a default set of properties is returned. |
| `associations` | array | No | List of object types (e.g., 'contacts', 'deals') for which to retrieve associated IDs with each company. |
| `propertiesWithHistory` | array | No | List of property internal names for which to retrieve historical values (e.g., 'industry'). If no history exists for a property, only its current value is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List company activities

**Slug:** `HUBSPOT_LIST_COMPANY_ACTIVITIES`

List all activity/engagement associations from a company to a specified activity type (calls, emails, meetings, notes, or tasks). Returns the IDs of associated engagement records. Use this action when you need to retrieve all activities of a specific type for a company to build a timeline or activity history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of activity associations to return per page. Default is 25. |
| `companyId` | string | Yes | The unique ID of the company whose activities you want to retrieve. |
| `activityType` | string | Yes | Type of activity/engagement to retrieve (e.g., 'calls', 'emails', 'meetings', 'notes', 'tasks'). Specify the plural form of the engagement object type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List company calls

**Slug:** `HUBSPOT_LIST_COMPANY_CALLS`

Lists all calls associated with a specific HubSpot company. Returns call IDs and their association types with the company. Use this action when you need to retrieve all call activity records linked to a company without fetching full call details. For full call properties, use the returned call IDs with a call read action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of call associations to return per page. Default is 25. |
| `company_id` | string | Yes | The unique ID of the company whose associated calls you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List company meetings

**Slug:** `HUBSPOT_LIST_COMPANY_MEETINGS`

List all meetings associated with a specific company in HubSpot. Returns meeting IDs and association metadata for meetings linked to the company record. Use this action when you need to retrieve all meetings scheduled with or related to a particular company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of meeting associations to return per page. Default is 25. |
| `company_id` | string | Yes | The unique ID of the company record whose associated meetings you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List contact notes

**Slug:** `HUBSPOT_LIST_CONTACT_NOTES`

List all notes associated with a specific HubSpot contact. Returns note IDs and association metadata. Use this action when you need to retrieve all notes linked to a contact record. To get full note details (body, timestamp, etc.), use the note IDs with a batch read action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of note associations to return per page. Default is 25, maximum is 500. |
| `contact_id` | string | Yes | The unique ID of the contact whose notes you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List contact properties

**Slug:** `HUBSPOT_LIST_CONTACT_PROPERTIES`

Lists all contact properties in your HubSpot account, including custom properties you've created. Use this action to discover: - Available property names for updating contacts - Custom properties specific to your HubSpot account - Property types and valid options for enumeration fields - Which properties are read-only vs writable

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Whether to include archived properties. Set to true to see archived properties, false for active only. |
| `custom_only` | boolean | No | Filter to only return custom properties (excludes HubSpot default properties). Custom properties are ones you created in your HubSpot account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List contacts

**Slug:** `HUBSPOT_LIST_CONTACTS`

Retrieves a paginated list of HubSpot contacts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from `paging.next.after` of a previous response, used to fetch the subsequent page. Omit for the first page. Empty strings will be treated as None. |
| `limit` | integer | No | Maximum number of contacts to return per page, controlling pagination size (default: 10). |
| `archived` | boolean | No | Boolean flag to filter contacts by archived status: `true` returns only archived contacts; `false` (default) returns only active (non-archived) contacts. |
| `properties` | array | No | List of contact property internal names to include in the response (e.g., "email", "firstname"). If omitted, a default set of properties is returned. |
| `associations` | array | No | List of object types (e.g., "companies", "deals") for which to retrieve associated IDs with each contact. |
| `propertiesWithHistory` | array | No | List of property internal names for which to retrieve historical values (e.g., "lifecyclestage"). If no history exists for a property, only its current value is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List contact tasks

**Slug:** `HUBSPOT_LIST_CONTACT_TASKS`

List all tasks associated with a specific contact. Returns task IDs and association metadata for tasks linked to the given contact. Use this action when you need to retrieve all tasks related to a contact, such as viewing pending action items or following up on contact-related to-dos.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of task associations to return per page. Default is 25. |
| `contact_id` | string | Yes | The unique ID of the contact whose associated tasks you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List conversation threads

**Slug:** `HUBSPOT_LIST_CONVERSATION_THREADS`

Lists HubSpot conversation threads with filtering and forward pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | Sort expressions to apply in order; prefix a field with `-` for descending order. |
| `after` | string | No | Cursor from a previous response's `paging.next.after` value. |
| `limit` | integer | No | Maximum number of conversation threads to return on this page. |
| `inboxId` | array | No | Return threads from any of these conversations inbox IDs, represented as strings to preserve 64-bit values. |
| `archived` | boolean | No | Whether to return only archived conversation threads. |
| `property` | string | No | Conversation thread property to include in the response. |
| `association` | array | No | Association types to include. HubSpot currently supports `TICKET`. |
| `threadStatus` | string ("CLOSED" | "OPEN") | No | Return only conversation threads with this status. |
| `associatedTicketId` | string | No | Return threads associated with this HubSpot ticket ID, represented as a string to preserve 64-bit values. |
| `associatedContactId` | string | No | Return threads associated with this HubSpot contact ID, represented as a string to preserve 64-bit values. |
| `latestMessageTimestampAfter` | string | No | Return threads whose latest message is after this ISO 8601 timestamp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List deal activities

**Slug:** `HUBSPOT_LIST_DEAL_ACTIVITIES`

Retrieves activities (notes, calls, emails, meetings, tasks) associated with a specific HubSpot deal. Use this action when you need to view the complete activity timeline for a deal, including all engagement types. This provides a comprehensive view of interactions and communications related to the deal, which is useful for understanding deal history and next steps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of activities to return. Default is 25. |
| `deal_id` | string | Yes | Unique HubSpot identifier for the deal whose activities you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List deal meetings

**Slug:** `HUBSPOT_LIST_DEAL_MEETINGS`

List all meetings associated with a specific deal in HubSpot. Returns meeting IDs and association metadata. Use this action when you need to retrieve meetings linked to a deal without fetching full meeting details. This is useful for understanding deal activity, tracking customer interactions, or building reports of engagement touchpoints.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of meeting associations to return per page. Default is 25. |
| `deal_id` | string | Yes | The unique ID of the deal whose associated meetings you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List deals

**Slug:** `HUBSPOT_LIST_DEALS`

Retrieves a paginated list of HubSpot deals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response to fetch the subsequent page. |
| `limit` | integer | No | Maximum number of deals to return per page (default: 10). Maximum is 100 normally, but when propertiesWithHistory is requested, the maximum is 50. |
| `archived` | boolean | No | Filter by archived status: true for archived deals, false for active deals. |
| `properties` | array | No | List of deal property names to include in the response. |
| `associations` | array | No | List of object types for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | List of property names for which to retrieve historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List email events

**Slug:** `HUBSPOT_LIST_EMAIL_EVENTS`

Lists one page of HubSpot marketing email events; continue with `offset` only while `hasMore` is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | string | No | Return only events generated by this HubSpot application ID. |
| `limit` | integer | No | Maximum number of email events to return, from 1 through 1000. |
| `offset` | string | No | Opaque pagination token returned as `offset` by a previous response; use it only when that response has `hasMore` set to true. |
| `eventType` | string | No | Case-sensitive email event type to return, such as SENT, DELIVERED, OPEN, CLICK, or BOUNCE. |
| `recipient` | string | No | Return only events for this recipient email address. |
| `campaignId` | string | No | Return only events for this HubSpot email campaign ID. |
| `endTimestamp` | integer | No | Return events created at or before this Unix epoch timestamp in milliseconds. |
| `startTimestamp` | integer | No | Return events created at or after this Unix epoch timestamp in milliseconds. |
| `excludeFilteredEvents` | boolean | No | Whether to omit events excluded by the account's customer filtering settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Emails

**Slug:** `HUBSPOT_LIST_EMAILS`

Retrieves a paginated list of HubSpot emails, allowing selection of specific properties (with or without history), associated object IDs, and filtering by archive status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination; use `paging.next.after` from a previous response for the next page. |
| `limit` | integer | No | Maximum number of email records per page. |
| `archived` | boolean | No | Set to `True` to retrieve only archived emails, `False` (default) for non-archived emails. |
| `properties` | array | No | List of valid HubSpot email property names to include. If a requested property doesn't exist on a record, it's omitted from that record's response. |
| `associations` | array | No | List of valid HubSpot CRM object types (e.g., 'contact', 'deal') for which to retrieve associated IDs. If an association type is invalid or doesn't exist for an email, it's ignored for that email. |
| `propertiesWithHistory` | array | No | List of valid HubSpot email property names to retrieve with history. If a requested property doesn't exist, it's ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all event templates for app

**Slug:** `HUBSPOT_LIST_EVENT_TEMPLATES`

Retrieves all event templates associated with a valid `appId` for an existing application in HubSpot's CRM Timeline.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique integer identifier for the target HubSpot application. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List feedback submissions page

**Slug:** `HUBSPOT_LIST_FEEDBACK_SUBMISSIONS`

Retrieves a paginated list of feedback submissions from HubSpot, allowing specification of properties (including history), associated object IDs, and filtering by archive status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | The pagination token to retrieve the next page of results. This value is obtained from the `paging.next.after` field of a previous response. If omitted, the first page is returned. Use with `limit` for iterating through large sets of feedback submissions. |
| `limit` | integer | No | The maximum number of feedback submissions to return per page. Using smaller values can lead to quicker responses, while larger values reduce the total number of API calls for large datasets. |
| `archived` | boolean | No | Specifies whether to include archived feedback submissions. Set to `True` to retrieve only archived submissions. `False` (default) retrieves only active (non-archived) submissions. Useful for accessing historical or managing archived feedback. |
| `properties` | array | No | List of HubSpot internal property names to include for each feedback submission in the response (e.g., `hs_sentiment`, `hs_survey_name`, `hs_content`). If specified, only these properties are returned. If a property doesn't exist for a submission, it's ignored. If omitted, a default set of properties is returned. |
| `associations` | array | No | List of object types (e.g., `contact`, `survey`, `ticket`) for which to retrieve associated IDs. This allows fetching IDs of related objects. If an association doesn't exist for a submission, it's ignored. |
| `propertiesWithHistory` | array | No | List of HubSpot internal property names for which to include historical values. The response includes both current and past values for these properties. Requesting history may affect the number of submissions returned per page due to increased response size. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List granted OAuth scopes

**Slug:** `HUBSPOT_LIST_GRANTED_SCOPES`

Tool to introspect the current OAuth access token and return its granted scopes and metadata. Use when you need to check which permissions are available before calling an endpoint (e.g., workflows, automation) to proactively detect missing scopes and provide clear remediation guidance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_token` | boolean | No | Whether to include the full access token in the response. Default is false to avoid exposing sensitive token values in logs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List object associations

**Slug:** `HUBSPOT_LIST_OBJECT_ASSOCIATIONS`

List all associations from a single CRM record to a specified target object type. Use when you need to expand associations for a single record without fetching the full CRM object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Paging cursor token from a previous response to fetch the next page of results. Leave empty to start from the first page. |
| `limit` | integer | No | Maximum number of associations to return per page. Default is 500. |
| `objectId` | string | Yes | The unique ID of the source CRM record whose associations you want to retrieve. |
| `objectType` | string | Yes | Source object type (e.g., 'deals', 'contacts', 'companies', 'tickets'). The object type of the record you want to list associations from. |
| `toObjectType` | string | Yes | Target object type (e.g., 'contacts', 'companies', 'deals'). The object type you want to see associations to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List products

**Slug:** `HUBSPOT_LIST_PRODUCTS`

Retrieves a paginated list of HubSpot products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response. Must be a valid token or omitted entirely. |
| `limit` | integer | No | Maximum number of products to return per page. |
| `archived` | boolean | No | Filter by archived status. |
| `properties` | array | No | List of product property names to include in the response. |
| `associations` | array | No | List of object types for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | List of property names for which to retrieve historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List quotes page

**Slug:** `HUBSPOT_LIST_QUOTES`

Retrieves a paginated list of quotes, allowing selection of specific properties, property history, associated object IDs, and filtering by archived status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from a previous response's `paging.next.after` property to fetch the subsequent page. Use the exact token provided by the API; do not modify it. |
| `limit` | integer | No | Maximum number of quotes to return per page. |
| `archived` | boolean | No | If true, returns only archived quotes. If false, returns only active (non-archived) quotes. |
| `properties` | array | No | A list of quote property names to include in the response for each quote (e.g., `hs_title`, `hs_quote_amount`). Non-existent properties for a quote are ignored. If omitted, a default set of properties is returned. |
| `associations` | array | No | A list of object types (e.g., `contacts`, `companies`, `deals`) for which to retrieve IDs of associated records. Non-existent association types or associations for a specific quote are ignored. |
| `propertiesWithHistory` | array | No | A list of quote property names for which historical values should be included (e.g., `hs_quote_amount`, `hs_expiration_date`). Using this may reduce the maximum number of quotes returnable per request due to increased data volume. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List recently modified engagements

**Slug:** `HUBSPOT_LIST_RECENTLY_MODIFIED_ENGAGEMENTS`

Lists one page of engagements from HubSpot's last-30-days or 10,000-most-recently-updated feed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `count` | integer | No | Maximum number of recently modified engagements to return, from 1 to 100. |
| `since` | integer | No | Return only engagements modified after this Unix epoch timestamp in milliseconds. |
| `offset` | integer | No | Pagination offset returned by a previous response. Omit for the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List sequences

**Slug:** `HUBSPOT_LIST_SEQUENCES`

Lists automation sequences for a specific HubSpot user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Sequence name used to filter the results. |
| `after` | string | No | Cursor from a previous response's `paging.next.after` value. |
| `limit` | integer | No | Maximum number of sequences to return on this page. |
| `userId` | string | Yes | HubSpot user ID whose sequences should be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List site pages

**Slug:** `HUBSPOT_LIST_SITE_PAGES`

Return one cursor-controlled page of HubSpot website pages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | Sort expressions using name, createdAt, updatedAt, createdBy, or updatedBy; prefix a field with - for descending order. |
| `after` | string | No | Cursor from paging.next.after in the previous response; omit for the first page. |
| `limit` | integer | No | Maximum pages in this response. HubSpot documents a default of 100 and no numeric maximum. |
| `archived` | boolean | No | Return archived (deleted) pages instead of active pages. |
| `property` | string | No | Optional page property selector accepted by HubSpot. |
| `created_at` | string | No | Return pages created at this exact ISO 8601 date-time. |
| `updated_at` | string | No | Return pages updated at this exact ISO 8601 date-time. |
| `created_after` | string | No | Return pages created after this ISO 8601 date-time. |
| `updated_after` | string | No | Return pages updated after this ISO 8601 date-time. |
| `created_before` | string | No | Return pages created before this ISO 8601 date-time. |
| `updated_before` | string | No | Return pages updated before this ISO 8601 date-time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tickets

**Slug:** `HUBSPOT_LIST_TICKETS`

Retrieves a paginated list of HubSpot tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response. |
| `limit` | integer | No | Maximum number of tickets to return per page. |
| `archived` | boolean | No | Filter by archived status. |
| `properties` | array | No | List of ticket property names to include in the response. |
| `associations` | array | No | List of object types for which to retrieve associated IDs. |
| `propertiesWithHistory` | array | No | List of property names for which to retrieve historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two companies of same type

**Slug:** `HUBSPOT_MERGE_COMPANIES`

Merges two existing company records of the same type in HubSpot CRM, where `objectIdToMerge` is absorbed into `primaryObjectId`; this operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the company record that will be merged into the primary company record and subsequently deleted. |
| `primaryObjectId` | string | Yes | The ID of the company record that will remain as the primary record after the merge, absorbing the information from the other company. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge contacts

**Slug:** `HUBSPOT_MERGE_CONTACTS`

Merges two HubSpot contacts into one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the contact record that will be merged into the primary contact record. This contact will be deleted after the merge. |
| `primaryObjectId` | string | Yes | The ID of the contact record that will remain after the merge and will absorb the information from the contact specified by `objectIdToMerge`. The merged contact will retain this ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge deals

**Slug:** `HUBSPOT_MERGE_DEALS`

Merges two HubSpot deals into one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the deal that will be merged into the primary deal. |
| `primaryObjectId` | string | Yes | The ID of the deal that will remain after the merge. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge emails

**Slug:** `HUBSPOT_MERGE_EMAILS`

Merges two HubSpot emails into one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the email that will be merged into the primary email. |
| `primaryObjectId` | string | Yes | The ID of the email that will remain after the merge. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two feedback submissions

**Slug:** `HUBSPOT_MERGE_FEEDBACK_SUBMISSIONS`

Merges two existing feedback submissions by ID, primarily for consolidating duplicates or related feedback; this operation is irreversible, and `primaryObjectId` values take precedence in conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The unique identifier of the feedback submission to be merged into the primary one. This submission will be absorbed and typically archived or deleted after the merge process. |
| `primaryObjectId` | string | Yes | The unique identifier of the feedback submission that will remain as the primary record after the merge. It will contain the combined information from both submissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two line items of same type

**Slug:** `HUBSPOT_MERGE_LINE_ITEMS`

Merges two line items, `objectIdToMerge` into `primaryObjectId`, which must be of the same type; `objectIdToMerge` is absorbed and the operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the line item that will be merged into the primary line item. This line item will be absorbed and will no longer exist as a separate entity after the merge. |
| `primaryObjectId` | string | Yes | The ID of the primary line item that will remain after the merge. Its record will be updated with data from the line item specified by `objectIdToMerge`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two objects of same type

**Slug:** `HUBSPOT_MERGE_OBJECTS`

Merges two distinct HubSpot CRM objects of the same `objectType`, consolidating data into `primaryObjectId` (which is preserved) and deleting `objectIdToMerge`; this operation is permanent and irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The CRM object type (e.g., 'contacts', 'companies') of the two records to merge. Must be a valid object type in your HubSpot account. |
| `objectIdToMerge` | string | Yes | ID of the object to be merged into the primary object and subsequently deleted. |
| `primaryObjectId` | string | Yes | ID of the object that will remain after the merge, into which data from `objectIdToMerge` is consolidated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge products

**Slug:** `HUBSPOT_MERGE_PRODUCTS`

Merges two HubSpot products into one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the product that will be merged into the primary product. |
| `primaryObjectId` | string | Yes | The ID of the product that will remain after the merge. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge two quotes of same type

**Slug:** `HUBSPOT_MERGE_QUOTES`

Merges two distinct quotes of the same type by consolidating `objectIdToMerge` into `primaryObjectId` (e.g., for combining information or updating terms); this operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The unique identifier of the quote to be merged into the primary quote. This quote will be archived after the merge. |
| `primaryObjectId` | string | Yes | The unique identifier of the quote that will remain after the merge and will be updated with information from the other quote. Its properties take precedence in case of conflicts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge tickets

**Slug:** `HUBSPOT_MERGE_TICKETS`

Merges two HubSpot tickets into one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectIdToMerge` | string | Yes | The ID of the ticket that will be merged into the primary ticket. |
| `primaryObjectId` | string | Yes | The ID of the ticket that will remain after the merge. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Partially update CRM object by ID

**Slug:** `HUBSPOT_PARTIALLY_UPDATE_CRM_OBJECT_BY_ID`

Partially updates specified properties of a CRM object (e.g., contact, company, deal) identified by its type and ID, or optionally by a unique property value if `idProperty` is specified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | Unique identifier of the CRM object. Can be provided as a string, integer, or float. If `idProperty` is specified, this is the value of that unique property; otherwise, it's the internal object ID. |
| `idProperty` | string | No | Name of a unique property (e.g., 'email' for contacts) to use for identifying the object instead of its internal ID. If set, `objectId` should be the value of this property. |
| `objectType` | string | Yes | Type of the CRM object to be updated. |
| `properties` | object | Yes | Dictionary of properties to update. Keys are internal property names (e.g., 'firstname', 'dealstage'), and values are their new values. Some properties are enum fields with specific valid values: For 'deals', the 'dealstage' property requires a valid pipeline stage ID from the deal's pipeline (use HUBSPOT_RETRIEVE_PIPELINE_STAGES to get valid stage IDs for a pipeline). For 'tickets', the 'hs_pipeline_stage' property requires a valid ticket pipeline stage ID. For other enum properties, use HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME to discover valid options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Permanently delete contact via GDPR

**Slug:** `HUBSPOT_PERMANENTLY_DELETE_CONTACT_VIA_GDPR`

Permanently deletes a HubSpot contact and all its associated data for GDPR compliance, identifying the contact by its ID or another unique property.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The unique identifier of the contact to be permanently deleted. This could be the contact's HubSpot ID or another unique property value (e.g., email address) if `idProperty` is specified. |
| `idProperty` | string | No | The name of the property that contains the unique identifier of the contact specified in `objectId`. For example, if `objectId` is an email address, set this to 'email'. If `objectId` is the HubSpot contact ID, this field can be omitted (or set to None). |
| `objectType` | string | Yes | The type of HubSpot object to be deleted. Must be 'contacts' for this GDPR deletion endpoint. This parameter is part of the URL path. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Publish or send a marketing email

**Slug:** `HUBSPOT_PUBLISH_MARKETING_EMAIL`

Publishes or sends a specified HubSpot marketing email that is valid and ready for sending; requires Marketing Hub Enterprise or the transactional email add-on.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email_id` | string | Yes | Identifier of the HubSpot marketing email to publish or send. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Purge schema by object type

**Slug:** `HUBSPOT_PURGE_SCHEMA`

Permanently and irreversibly deletes the schema for an existing `objectType` in HubSpot CRM; this deprecated endpoint should be used with extreme caution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The specific object type (e.g., 'contacts', 'companies', or a custom object ID) for which the schema will be permanently deleted. Must be an exact, case-sensitive match to a valid object type defined in HubSpot. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read a CRM property by name

**Slug:** `HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME`

Reads a specific CRM property definition for a given HubSpot object type by its internal name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | If true, retrieves an archived property definition; retrieves active property definitions by default. |
| `objectType` | string | Yes | Specifies the CRM object type (e.g., 'contacts', 'deals') for which the property is retrieved. |
| `properties` | string | No | Optional comma-separated list of additional property attributes to return; consult HubSpot API documentation for available attributes and format. |
| `propertyName` | string | Yes | The internal, unique name of the property to retrieve (e.g., 'firstname', 'dealname'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read all properties for object type

**Slug:** `HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE`

Retrieves definitions and metadata (not actual values) for properties of a specified HubSpot CRM object type (e.g., 'contacts', 'companies', 'deals', or custom objects).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Filter properties by their archived status: `true` for archived, `false` for active (non-archived). |
| `objectType` | string | Yes | Identifier for the CRM object type (e.g., 'contacts', 'companies'). Must be a valid, case-sensitive object type name existing in HubSpot. |
| `properties` | string | No | DEPRECATED/NON-FUNCTIONAL: This parameter appears in the API but does not work as expected. When provided, the API returns empty property objects instead of filtered results. Leave this parameter unset (None) to retrieve all properties. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read a page of objects by type

**Slug:** `HUBSPOT_READ_APAGE_OF_OBJECTS_BY_TYPE`

Retrieves a paginated list of objects for a specified and valid HubSpot CRM object type (e.g., 'contacts', 'companies', 'deals', or custom ID).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from a previous response's `paging.next.after` property, used to fetch the next page of results. |
| `limit` | integer | No | Maximum number of results to return per page (must be an integer between 1 and 100). |
| `archived` | boolean | No | Set to true to retrieve only archived objects. If false or omitted (default), non-archived objects are returned. |
| `objectType` | string | Yes | Identifier for the type of CRM object to retrieve (e.g., 'contacts', 'companies', 'deals', or a custom object type ID). |
| `properties` | array | No | List of property names to include for each object; non-existent properties on an object are ignored. Customizes response and can reduce payload size. |
| `associations` | array | No | List of object types (e.g., 'companies', 'deals') for which to retrieve associated IDs. Only existing associations are returned. |
| `propertiesWithHistory` | array | No | List of property names for which to include historical values. Using this parameter may reduce the maximum number of objects returnable in a single request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch read associations

**Slug:** `HUBSPOT_READ_ASSOCIATIONS_BATCH`

Tool to batch-read CRM associations (e.g., deals→contacts, deals→companies) for up to 1,000 source record IDs in one request. Use when you need to retrieve associated target IDs and association type metadata for multiple records efficiently, avoiding rate-limit issues from per-record GET calls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of source record IDs to retrieve associations for (max 1,000 per request). Each input can include an optional 'after' cursor for per-source pagination. |
| `toObjectType` | string | Yes | Target object type for associations. Use standard names (e.g., 'contacts', 'companies', 'deals') or object type IDs (e.g., '0-1' for contacts). For custom objects, use their objectTypeId. |
| `fromObjectType` | string | Yes | Source object type for associations. Use standard names (e.g., 'deals', 'contacts', 'companies', 'tickets') or object type IDs (e.g., '0-3' for deals). For custom objects, use their objectTypeId (e.g., '2-12345'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read a batch of CRM object properties

**Slug:** `HUBSPOT_READ_BATCH_CRM_OBJECT_PROPERTIES`

Retrieves property definitions (metadata) for a batch of CRM object properties for a specified object type. Returns detailed information about property structure, data types, options, and configuration—not the actual property values of CRM records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of property identifiers, each specifying the 'name' of a property whose definition should be retrieved for the given `objectType`. |
| `archived` | boolean | Yes | If true, retrieves only archived property definitions; otherwise, retrieves non-archived definitions. |
| `objectType` | string | Yes | The case-sensitive CRM object type (e.g., 'contacts', 'companies') for which properties are being read, matching the type in your HubSpot account. |
| `dataSensitivity` | string | No | Optional filter to retrieve only properties with a specific data sensitivity level. Valid values: 'highly_sensitive', 'sensitive', 'non_sensitive'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read batch feedback submissions by id or property

**Slug:** `HUBSPOT_READ_BATCH_FEEDBACK_SUBMISSIONS_BY_ID_OR_PROPERTY`

Retrieves up to 100 feedback submissions in a batch using their IDs or a specified unique `idProperty`, optionally including specified properties and their history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | Identifiers for feedback submissions to retrieve, using primary 'id' or `idProperty`. |
| `archived` | boolean | No | Set to `true` to retrieve only archived submissions; `false` (default) for active submissions. |
| `idProperty` | string | No | Unique identifier property name to use instead of 'id'; `inputs` should contain values for this property if provided. |
| `properties` | array | No | Property names to return for each feedback submission; defaults if not specified. |
| `propertiesWithHistory` | array | No | Property names for which to retrieve historical values; past values are included if updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read batch of crm objects by id or property values

**Slug:** `HUBSPOT_READ_BATCH_OF_CRM_OBJECTS_BY_ID_OR_PROPERTY_VALUES`

Reads a batch of CRM objects of a specified `objectType` using their HubSpot IDs or unique property values from the `inputs` list, allowing retrieval of specific `properties`, their historical values (`propertiesWithHistory`), and filtering by `archived` status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of objects, each with an 'id' identifying a CRM object to retrieve, using the HubSpot object ID or the value of `idProperty`. |
| `archived` | boolean | No | If true, retrieves only archived CRM objects; if false (default), retrieves non-archived objects. |
| `idProperty` | string | No | Alternate unique identifier property name (e.g., 'email' for contacts) to use instead of the default object ID. |
| `objectType` | string | Yes | Type of CRM object to read (e.g., 'contacts', 'companies'). Determines which object collection to query. |
| `properties` | array | Yes | List of property names to return for each CRM object. If omitted, default properties are returned. |
| `propertiesWithHistory` | array | Yes | List of property names for which to retrieve historical values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read batch of line items by id or property values

**Slug:** `HUBSPOT_READ_BATCH_OF_LINE_ITEMS_BY_ID_OR_PROPERTY_VALUES`

Retrieves a batch of HubSpot CRM line items by their IDs, or optionally by values of a custom unique property defined in `idProperty`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, where each object contains the 'id' of a line item to retrieve. The 'id' can be the line item's unique ID or the value of the property specified in `idProperty`. |
| `archived` | boolean | No | Whether to return only archived line items. If true, returns only archived line items; if false (default), returns only non-archived line items. |
| `idProperty` | string | No | The name of a property whose values are unique for that object type. Use this if you want to identify line items by a custom unique property instead of the default 'id'. |
| `properties` | array | Yes | A list of property names to be returned in the response. If not specified, all readable properties will be returned. |
| `propertiesWithHistory` | array | Yes | A list of property names for which to return historical values; if a property has been updated, the response includes its previous values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read batch of quotes by property values

**Slug:** `HUBSPOT_READ_BATCH_OF_QUOTES_BY_PROPERTY_VALUES`

Efficiently retrieves a batch of HubSpot CRM quotes by their IDs (or a specified unique property), optionally including archived quotes, specific properties, and property history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, each specifying a quote to retrieve. Each object must contain an `id` field that holds the identifier of the quote, corresponding to `idProperty` or the primary object ID. |
| `archived` | boolean | No | Specifies whether to include archived quotes in the results. If `true`, only archived quotes are returned. If `false` (default) or omitted, only active (non-archived) quotes are returned. |
| `idProperty` | string | No | The name of the property to use as the unique identifier for the quotes specified in the `inputs` list. If omitted, the quote's primary object ID (e.g., `hs_object_id`) is used. This property must be a unique identifier for quotes. |
| `properties` | array | Yes | A list of internal names of quote properties to be included in the response for each quote. If omitted, a default set of properties is returned by HubSpot. Refer to HubSpot documentation for default properties. |
| `propertiesWithHistory` | array | Yes | A list of internal names of quote properties for which historical values should be retrieved. The response will include the history of changes for these properties. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read budget

**Slug:** `HUBSPOT_READ_BUDGET`

Fetches detailed budget (total, spent, remaining) and spend information for a marketing campaign, including an 'order' field for sequencing budget/spend items (0 is oldest).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaignGuid` | string | Yes | The unique identifier (UUID) of the marketing campaign for which to retrieve budget information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read contact

**Slug:** `HUBSPOT_READ_CONTACT`

Retrieves a HubSpot contact by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to true to include only archived contacts; defaults to false (active contacts). |
| `contactId` | string | Yes | Unique internal HubSpot CRM object ID for the contact, which must be valid and existing. |
| `properties` | array | No | Contact property names to include in the response; if omitted, all available properties are returned. |
| `associations` | array | No | Object types (e.g., 'companies', 'deals') to include associated object IDs in the response. |
| `propertiesWithHistory` | array | No | Property names for which to include current and historical values in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read contacts

**Slug:** `HUBSPOT_READ_CONTACTS`

Batch read multiple HubSpot contacts by their IDs or custom identifier property. This action retrieves up to 100 contacts per request using the HubSpot CRM batch read API. You can specify which contact properties to return and optionally include historical values for properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of contact identifiers to retrieve. Each object in the list should contain an `id` (or the `idProperty` if specified) of a contact. |
| `archived` | boolean | No | Specifies if only archived contacts should be returned (`true`), or only non-archived contacts (`false`). |
| `idProperty` | string | No | The name of an alternate unique identifier property to use for retrieving contacts. If specified, the `inputs` objects should provide values for this property instead of the default `id`. |
| `properties` | array | No | Contact property names to include in the response. Optional - a default set is returned if unspecified. |
| `propertiesWithHistory` | array | No | Contact property names for which to retrieve historical values. Optional - omit if history is not needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read crm object by id

**Slug:** `HUBSPOT_READ_CRM_OBJECT_BY_ID`

Retrieves a specific CRM object (e.g., contact, company, deal, ticket) by its ID or a unique property, optionally including specific properties, history, and associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to `true` to retrieve only archived objects. Defaults to `false` (non-archived objects). |
| `objectId` | string | Yes | The unique identifier of the CRM object, or the value of the unique property if `idProperty` is specified. Accepts both string and numeric values (numeric IDs are converted to strings automatically). |
| `idProperty` | string | No | The name of a unique property (e.g., 'email' for contacts, 'domain' for companies) to use for lookup instead of the internal object ID. If omitted, the internal object ID is used. |
| `objectType` | string | Yes | The type of CRM object to retrieve. Valid standard object types are: 'contacts', 'companies', 'deals', 'tickets', 'line_items', 'products', 'quotes', 'calls', 'emails', 'meetings', 'notes', 'tasks', 'postal_mail', 'communications', 'feedback_submissions', 'goals', 'leads', 'invoices', 'subscriptions', 'orders', 'payments', 'carts', 'appointments', 'courses', 'listings', 'services', 'users'. You can also use numeric object type IDs (e.g., '0-1' for contacts, '0-2' for companies, '0-3' for deals, '0-5' for tickets). For custom objects, use 'p_{internal_name}' format or the objectTypeId (e.g., '2-12345'). Note: 'owners' is NOT a valid object type - use the dedicated Owners API instead. |
| `properties` | array | No | A list of property names to include in the response. Non-existent properties are ignored. If omitted, a default set of properties is returned. |
| `associations` | array | No | A list of object types (e.g., 'contacts', 'companies') for which to retrieve associated IDs (e.g., to get associated companies for a contact). Non-existent associations are ignored. |
| `propertiesWithHistory` | array | No | A list of property names to retrieve value history for, showing changes over time. Non-existent properties or those without history are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### ReadEmail Email

**Slug:** `HUBSPOT_READ_EMAIL`

Call this to retrieve an existing HubSpot email by its `emailId` or an alternative unique `idProperty`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier (HubSpot ID) of the email object to retrieve, or the value of the `idProperty` if specified. |
| `archived` | boolean | No | Set to true to retrieve only archived email objects. |
| `idProperty` | string | No | Name of an alternative unique property to identify the email if not using `emailId`. |
| `properties` | array | No | Specific email properties to include; non-existent properties are ignored. |
| `associations` | array | No | Object types (e.g., 'contact', 'company') for associated IDs; non-existent associations are ignored. |
| `propertiesWithHistory` | array | No | Email properties for which to retrieve historical values; non-existent properties are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read feedback submission by id

**Slug:** `HUBSPOT_READ_FEEDBACK_SUBMISSION_BY_ID`

Reads a HubSpot feedback submission by its ID, optionally using a custom unique 'idProperty', and allows specifying properties to return including history and associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to true to retrieve only archived submissions; false (default) retrieves active ones. |
| `idProperty` | string | No | Name of a unique property (e.g., 'survey_response_id') to use as the identifier instead of the internal object ID. Its values must be unique. |
| `properties` | array | No | Specific feedback submission property names to include in the response; HubSpot ignores non-existent ones. |
| `associations` | array | No | Object types (e.g., 'CONTACT') for which to retrieve associated IDs; HubSpot ignores non-existent associations. |
| `feedbackSubmissionId` | string | Yes | Identifier of the feedback submission to retrieve; use a custom property value if 'idProperty' is set. Must be an existing submission. |
| `propertiesWithHistory` | array | No | Feedback submission property names for which to include a history of values; HubSpot ignores non-existent ones. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read a property group

**Slug:** `HUBSPOT_READ_PROPERTY_GROUP`

Retrieves metadata for a specific property group of a given CRM object type, detailing its structure and attributes, but not the actual property values of CRM objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupName` | string | Yes | Unique identifier (name) of the property group to retrieve. These names are case-sensitive and often use lowercase letters and underscores. |
| `objectType` | string | Yes | The type of CRM object for which to retrieve the property group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read property groups for object type

**Slug:** `HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE`

Retrieves all property groups in a single call for a specified HubSpot CRM object type (e.g., 'contacts', 'companies'), returning only the groups themselves, not the individual properties within them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | Specifies the HubSpot CRM object type for which property groups will be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove asset association

**Slug:** `HUBSPOT_REMOVE_ASSET_ASSOCIATION`

Disassociates an asset from a HubSpot marketing campaign. Supports a wide range of asset types including forms, landing pages, emails, blog posts, workflows, static lists, and more.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `assetId` | string | Yes | The unique identifier of the asset. |
| `assetType` | string | Yes | The category/type of asset to disassociate from the campaign. Supported types include: AD_CAMPAIGN, BLOG_POST, CALL, CASE_STUDY, CTA, CTA_LEGACY, EXTERNAL_WEB_URL, FEEDBACK_SURVEY, FORM, FILE, KNOWLEDGE_BASE_ARTICLE, LANDING_PAGE, MARKETING_EMAIL, MARKETING_EVENT, MEETING_EVENT, PLAYBOOK, PODCAST_EPISODE, SALES_DOCUMENT, SALES_EMAIL, SEQUENCE, MARKETING_SMS, SOCIAL_POST, OBJECT_LIST (static lists), VIDEO, WEBSITE_PAGE, AUTOMATION_PLATFORM_FLOW (workflows), and others. |
| `campaignGuid` | string | Yes | The unique identifier (UUID) of the HubSpot campaign. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove association between CRM records

**Slug:** `HUBSPOT_REMOVE_ASSOCIATION`

Tool to remove all associations between two CRM records using the v4 associations endpoint. Use when unlinking records or cleaning up incorrect associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | ID of the source CRM record. |
| `objectType` | string | Yes | Source object type (e.g., 'contacts', 'deals', 'companies', 'tickets'). |
| `toObjectId` | string | Yes | ID of the target CRM record. |
| `toObjectType` | string | Yes | Target object type (e.g., 'companies', 'contacts', 'deals', 'tickets'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove association from schema

**Slug:** `HUBSPOT_REMOVE_ASSOCIATION_FROM_SCHEMA`

Permanently removes a specified association definition (type) from a HubSpot object's schema, preventing future creations of this association type without affecting existing instances.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The fully qualified name or ID of the HubSpot object schema from which to remove the association definition. |
| `associationIdentifier` | string | Yes | The unique ID of the association definition to remove from the specified object schema. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove deal

**Slug:** `HUBSPOT_REMOVE_DEAL`

Removes a HubSpot deal by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dealId` | string | Yes | Unique HubSpot identifier for the deal to be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove token from event template

**Slug:** `HUBSPOT_REMOVE_TOKEN_FROM_EVENT_TEMPLATE`

Removes a token from a HubSpot event template, preventing its inclusion in new events created from that template.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique identifier of the target application associated with the event template. Must be a valid integer representing the ID of your HubSpot app. |
| `tokenName` | string | Yes | The name of the token to be removed from the event template. Must be a string that exactly matches an existing token's name within the specified template (case-sensitive). |
| `eventTemplateId` | string | Yes | The unique identifier of the event template from which the token will be removed. Must be a valid string representing an existing event template ID in your HubSpot account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Render event detail template

**Slug:** `HUBSPOT_RENDER_EVENT_DETAIL_TEMPLATE`

Renders detailed information for a specific HubSpot CRM timeline event using a predefined event template, ignoring `extraData` references in the template not present in event data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | Yes | The unique ID for a specific HubSpot CRM timeline event to render. |
| `eventTemplateId` | string | Yes | The unique ID for an existing HubSpot event template to use for rendering. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Render event header or detail as html

**Slug:** `HUBSPOT_RENDER_EVENT_HEADER_OR_DETAIL_AS_HTML`

Renders an event's header or detail template as HTML for a specified event on the HubSpot CRM timeline, using a given event template ID and event ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `detail` | boolean | No | If true, renders the detailTemplate; if false or not provided, renders the headerTemplate. |
| `eventId` | string | Yes | The unique identifier for an existing event on the HubSpot timeline whose data will be used in the rendering. |
| `eventTemplateId` | string | Yes | The unique identifier for an existing event template to be used for rendering. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Replace all properties of pipeline

**Slug:** `HUBSPOT_REPLACE_ALL_PROPERTIES_OF_PIPELINE`

Overwrites an entire CRM pipeline (specified by `objectType` and `pipelineId`) and all its stages with a new definition, returning the updated pipeline.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | Unique label for this pipeline, for UI organization. |
| `stages` | array | Yes | A list of stage definitions that will completely replace all existing stages in the pipeline. |
| `objectType` | string | Yes | Identifies the CRM object type (e.g., 'deals', 'tickets') for the pipeline being updated. |
| `pipelineId` | string | Yes | Unique ID of the pipeline to update, specific to its `objectType`. |
| `displayOrder` | integer | Yes | Display order for this pipeline; those with the same order are sorted alphabetically by `label`. |
| `validateReferencesBeforeDelete` | boolean | No | If true, validates existing references to the pipeline before updating to prevent issues from modifying referenced stages. |
| `validateDealStageUsagesBeforeDelete` | boolean | No | If true and `objectType` is 'deals', checks deal stage usage before modification/deletion to prevent data issues. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Replace pipeline stage properties

**Slug:** `HUBSPOT_REPLACE_PIPELINE_STAGE_PROPERTIES`

Replaces all properties of a specified pipeline stage; the new `label` must be unique within the pipeline, and if `objectType` is 'deals', the `metadata` must include a 'probability' key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | Yes | A new label for the pipeline stage. |
| `stageId` | string | Yes | Unique identifier of the specific pipeline stage to be updated, assigned by HubSpot and unique to the stage within its pipeline. |
| `metadata` | object | Yes | Key-value pairs for custom stage properties; all values must be strings. For 'deals' `objectType`, 'probability' (string: number from 0.0-1.0 in 0.1 increments, e.g., '0.5') is required. For 'tickets' `objectType`, 'ticketState' (string: 'OPEN' or 'CLOSED') is optional. |
| `objectType` | string | Yes | The CRM object type associated with the pipeline (e.g., 'deals' for sales pipelines, 'tickets' for support pipelines). |
| `pipelineId` | string | Yes | Unique identifier of the pipeline, assigned by HubSpot when the pipeline is created. |
| `displayOrder` | integer | Yes | The display order for this pipeline stage. Stages with the same `displayOrder` value are sorted alphabetically by their label. Use -1 to place the stage at the end. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reset draft

**Slug:** `HUBSPOT_RESET_DRAFT`

Resets a marketing email's draft to its currently published (live) version, discarding all unpublished changes; the email must have a live version to revert to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | Identifier of the marketing email whose draft will be reset to its currently published (live) version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore a revision of a marketing email to draft state

**Slug:** `HUBSPOT_RESTORE_EMAIL_REVISION`

Restores a specific revision of a marketing email to a DRAFT state, overwriting any existing draft.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | The unique identifier of the marketing email. |
| `revisionId` | integer | Yes | The specific revision ID of the marketing email to restore. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore a revision of a marketing email

**Slug:** `HUBSPOT_RESTORE_MARKETING_EMAIL_REVISION`

Restores a specific, existing, non-active revision of a marketing email to become the new live version for that email.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | Identifier of the marketing email. |
| `revisionId` | string | Yes | Identifier of the specific email revision to restore. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve all object schemas

**Slug:** `HUBSPOT_RETRIEVE_ALL_OBJECT_SCHEMAS`

Retrieves all object schema definitions (not data records) for a HubSpot account, supporting retrieval of either active or archived schemas.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to true to retrieve only archived object schemas, or false for only active, non-archived schemas. Archived schemas are typically inactive but retained for historical/compliance. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve all pipelines for specified object type

**Slug:** `HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE`

Retrieves all pipelines in HubSpot for a specified CRM object type, such as deals or tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The case-sensitive CRM object type (e.g., 'deals', 'tickets') for which to retrieve pipelines; must support pipelines. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve calling settings for app

**Slug:** `HUBSPOT_RETRIEVE_CALLING_SETTINGS_FOR_APP`

Retrieves the read-only calling extension settings for a specific HubSpot app; the app must exist and have calling extensions configured.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique integer identifier for the target HubSpot app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve line item by id

**Slug:** `HUBSPOT_RETRIEVE_LINE_ITEM_BY_ID`

Retrieves a HubSpot CRM line item by its ID or a specified unique property (`idProperty`).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archived` | boolean | No | Set to `True` to retrieve archived Line Items; `False` (default) retrieves non-archived items. |
| `idProperty` | string | No | Name of a unique property (e.g., 'sku') to use as the identifier instead of the HubSpot ID. Must be unique across all Line Items. |
| `lineItemId` | string | Yes | The Line Item's unique identifier. Must be a valid numeric HubSpot object ID of an existing line item, or the value of the property specified in `idProperty`. Use HUBSPOT_RETRIEVE_LINE_ITEMS_LIST or HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA to find valid IDs. |
| `properties` | array | No | Optional list of property names to return for the Line Item. Non-existent properties are ignored. |
| `associations` | array | No | Optional list of object types (e.g., 'deal') for which to retrieve IDs of associated objects. Ignores non-existent association types. |
| `propertiesWithHistory` | array | No | Optional list of property names for which to retrieve historical values. Ignores non-existent properties or those without history. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve line items list

**Slug:** `HUBSPOT_RETRIEVE_LINE_ITEMS`

Fetches a paginated list of HubSpot CRM line items, allowing selection of specific properties (including history), associated object IDs, and filtering by archive status; ensure property and association names are valid HubSpot internal names.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from 'paging.next.after' of a previous response to fetch the subsequent page. Omit for the first request. |
| `limit` | integer | No | Maximum number of line items to return per page; controls response size. An API-defined upper limit may apply. |
| `archived` | boolean | No | Filter by archive status: `true` for archived only, `false` (default) for active only. Manages historical or current items. |
| `properties` | array | No | Property names to include for each line item (e.g., `["name", "price"]`); customizes returned data. Non-existent properties are ignored. If omitted, a default set is returned. |
| `associations` | array | No | Object types (e.g., `["deal", "product"]`) for which to retrieve associated IDs. Invalid types are ignored. Valid types depend on HubSpot data model. |
| `propertiesWithHistory` | array | No | Property names for which to include historical values (e.g., `["status", "amount"]`); tracks changes. May reduce items returned per request due to increased payload. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve existing object schema

**Slug:** `HUBSPOT_RETRIEVE_OBJECT_SCHEMA`

Fetches the detailed schema definition for a specified, existing standard or custom HubSpot CRM object type; this action is read-only and does not create or modify schemas.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | Fully qualified name for standard HubSpot objects (e.g., 'contacts', 'companies') or unique object type ID for custom objects (e.g., 'p123456', '2-xxxxxxx'). Case-sensitive and must match an existing object type as defined in HubSpot. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve owner by ID or user ID

**Slug:** `HUBSPOT_RETRIEVE_OWNER_BY_ID_OR_USER_ID`

Retrieves a specific HubSpot CRM owner by their ID, with options to specify ID type (owner or user) and to include archived records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ownerId` | integer | Yes | Unique identifier of the owner. Its meaning (HubSpot owner ID or user ID) is determined by `idProperty`. |
| `archived` | boolean | No | Set to `true` to retrieve only archived owners; otherwise, active (non-archived) owners are returned. |
| `idProperty` | string ("id" | "userId") | No | Determines if `ownerId` refers to the HubSpot owner ID (`id`) or the user ID (`userId`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve owners

**Slug:** `HUBSPOT_RETRIEVE_OWNERS`

Retrieves a list of all owners in the HubSpot CRM, including their ID, first name, last name, email, and user ID.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve page of crm owners

**Slug:** `HUBSPOT_RETRIEVE_PAGE_OF_CRM_OWNERS`

Retrieves a paginated list of CRM owners from HubSpot, optionally filtering by email or archived status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from a previous response to fetch the next page. |
| `email` | string | No | Filter by a specific email address. |
| `limit` | integer | No | Maximum number of CRM owners per page. Refer to HubSpot's API documentation for current limits. |
| `archived` | boolean | No | Set to `true` for archived owners, or `false` for active owners. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve pipeline stage by id

**Slug:** `HUBSPOT_RETRIEVE_PIPELINE_STAGE_BY_ID`

Fetches detailed properties and metadata (e.g., label, display order, custom properties) for a specific stage within a HubSpot CRM pipeline, identified by its `objectType`, `pipelineId`, and `stageId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `stageId` | string | Yes | The unique identifier (ID) of the specific pipeline stage to retrieve. This ID must be valid and exist within the specified pipeline. |
| `objectType` | string | Yes | The type of CRM object associated with the pipeline (e.g., 'deals', 'tickets'). This is case-sensitive and determines which object-specific pipeline and stages are queried. Must be a valid HubSpot CRM object type. |
| `pipelineId` | string | Yes | The unique identifier (ID) of the pipeline containing the stage. This ID must be valid and correspond to the specified `objectType`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve pipeline stages

**Slug:** `HUBSPOT_RETRIEVE_PIPELINE_STAGES`

Fetches all stages for a specified HubSpot CRM object type and pipeline ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The CRM object type (e.g., deals, tickets) for which to retrieve pipeline stages; must support pipelines. |
| `pipelineId` | string | Yes | The unique ID of the pipeline associated with the specified objectType whose stages are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve timeline event by ids

**Slug:** `HUBSPOT_RETRIEVE_TIMELINE_EVENT_BY_IDS`

Retrieves a specific HubSpot CRM timeline event by its application ID, event template ID, and event ID, returning event details including timestamp, tokens, and associated object information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | Yes | The unique identifier for the specific timeline event. This ID uniquely identifies the event within the context of its template and must correspond to an existing event in your HubSpot CRM timeline. |
| `applicationId` | string | Yes | The HubSpot application ID that created the timeline event. This is the ID of the developer app or integration that generated the timeline events you want to retrieve. |
| `eventTemplateId` | string | Yes | The unique identifier for the event template (also called event type ID). This ID is crucial for locating the specific type of event and must correspond to a pre-defined event template in your HubSpot account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve video conference settings by id

**Slug:** `HUBSPOT_RETRIEVE_VIDEO_CONFERENCE_SETTINGS_BY_ID`

Retrieves video conference application settings, such as webhook URLs and user/account management configurations, for a specified `appId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique integer identifier for the video conference application, corresponding to the ID of the application created in your HubSpot developer portal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search campaigns

**Slug:** `HUBSPOT_SEARCH_CAMPAIGNS`

Searches for HubSpot campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response. |
| `limit` | integer | No | Maximum number of campaigns to return. |
| `query` | string | No | Text search query to find campaigns by name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search companies

**Slug:** `HUBSPOT_SEARCH_COMPANIES`

Searches for HubSpot companies using flexible criteria and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination cursor; use `paging.next.after` from a previous response to fetch the next page. |
| `limit` | integer | No | Maximum number of company records to return. |
| `query` | string | No | String to search across default text properties of company records. |
| `sorts` | array | No | List of sort objects to define the order of results. Maximum 1 sort allowed. |
| `properties` | array | No | HubSpot company property internal names to include in the response. Supports both standard properties and custom properties; a default set is returned if unspecified. |
| `filterGroups` | array | No | Groups of filters to apply to the ticket search. |
| `filter_groups` | array | No | List of filter groups; filters within a group are ANDed, and multiple groups are ORed. |
| `custom_properties` | array | No | Custom company property internal names to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search contacts by criteria

**Slug:** `HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA`

Searches for HubSpot contacts using a text query, specific filter criteria (filters in a group are ANDed, groups are ORed), sorting, and pagination to retrieve selected properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | The cursor token for pagination. Use the `after` value from the `paging.next` object of a previous response to fetch the next set of results. If `None` or an empty string, it fetches the first page. |
| `limit` | integer | No | The maximum number of contacts to return. |
| `query` | string | No | A string to search across HubSpot's default searchable contact properties ONLY: firstname, lastname, email, phone, hs_additional_emails, hs_object_id, hs_searchable_calculated_phone_number, company. IMPORTANT: This does NOT search custom properties. To search/filter by custom properties (e.g., 'icp_segment', 'lead_source'), use filterGroups with specific property filters instead. At least one of 'query' or 'filterGroups' must be provided. |
| `sorts` | array | No | A list of sort criteria to apply. Each criterion specifies a contact `propertyName` and a sort `direction`. Example: `[{'propertyName': 'lastname', 'direction': 'ASCENDING'}]` sorts contacts by last name. |
| `properties` | array | No | A list of contact property internal names to include in the response. Supports both standard properties (firstname, email, etc.) and custom properties. If omitted, a default set is returned. |
| `filterGroups` | array | No | A list of filter groups. HubSpot enforces strict limits: maximum 5 filterGroups and maximum 18 total filters across all groups combined. Filters within a group are ANDed. Multiple groups are ORed. Use filterGroups to search/filter by ANY property (including custom properties) with precise operators. At least one of 'query' or 'filterGroups' must be provided. For custom property filtering (e.g., icp_segment='Construction'), use filterGroups instead of query. Example: `[{'filters': [{'propertyName': 'icp_segment', 'operator': 'EQ', 'value': 'Construction'}]}]`. If you need more filter groups or filters, split your search into multiple requests. |
| `custom_properties` | array | No | A list of internal names for custom contact properties to retrieve (e.g., `custom_lead_score`). This is a convenience alias that gets merged into `properties` before the API call - you can also include custom properties directly in the `properties` field instead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search crm objects by criteria

**Slug:** `HUBSPOT_SEARCH_CRM_OBJECTS_BY_CRITERIA`

Searches HubSpot CRM objects (e.g., 'contacts', 'companies') by `objectType` using complex criteria including filters, sorting, and pagination; property names used in filters, sorts, and returned properties must be valid for the specified `objectType`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional. Cursor for pagination (from previous response). Must be formatted as an integer string (e.g., '100', '200'). HubSpot's search API has a hard limit of 10,000 total results; pagination cannot proceed beyond this point (i.e., after >= 10000 is not allowed). |
| `limit` | integer | No | Optional. Max results per page (default 10, max 100). |
| `query` | string | No | A string for a broad search across multiple fields on the object. Use this for quick text searches. Optional - can be omitted to retrieve all objects. |
| `sorts` | array | No | Optional. List of sort rules. Accepts either simple strings (e.g., 'createdate' for ascending, '-createdate' for descending) or object format [{'propertyName': 'createdate', 'direction': 'ASCENDING'}]. Simple strings are automatically converted to the object format. Only one sorting rule can be applied to any search. |
| `objectType` | string | Yes | The type of CRM object to search. VALID VALUES: 'contacts', 'companies', 'deals', 'tickets', 'tasks', 'line_items', 'products', 'quotes', 'calls', 'emails', 'meetings', 'notes', or custom object IDs like '2-1234567'. Must be lowercase and plural for standard types. IMPORTANT: This is the OBJECT TYPE, not a property name. Do NOT pass property names like 'hs_task_status', 'email', 'dealname', etc. here - those belong in filterGroups.filters.propertyName. Example: To search for tasks with a specific status, use objectType='tasks' and add a filter with propertyName='hs_task_status'. |
| `properties` | array | No | Optional. List of property names to include in the response. Property names must be valid for the objectType. For tasks: use hs_task_subject, hs_task_body, hs_task_status, hs_task_priority, hs_timestamp (due date), hs_task_type, hubspot_owner_id. Do NOT use hs_status, hs_due_date, or hs_priority for tasks. Note: Properties filtered with HAS_PROPERTY or NOT_HAS_PROPERTY operators cannot be included here and will be automatically removed. |
| `filterGroups` | array | No | Optional. List of filter groups (AND within, OR between). Can be omitted to retrieve all objects without filtering. Maximum of 5 filter groups with up to 6 filters each (18 total). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search deals

**Slug:** `HUBSPOT_SEARCH_DEALS`

Searches for HubSpot deals using flexible criteria and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from a previous response's `paging.next.after` to fetch the next page; omit for the first page. Note: HubSpot's search API has a hard limit of 10,000 total results - the 'after' value must be less than 10000. |
| `limit` | integer | No | Maximum number of deal records to return. |
| `query` | string | No | String to search across default text properties in deals for records containing this string. |
| `sorts` | array | No | Sort order for results. If multiple sort objects are provided, they are applied in the given order. |
| `properties` | array | No | HubSpot deal property internal names to include in the response. Supports both standard and custom properties; a default set is returned if omitted. |
| `filterGroups` | array | No | Filter groups to apply to the search. Filters within a group are ANDed; groups are ORed. |
| `custom_properties` | array | No | User-defined custom property internal names (not standard HubSpot properties) to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search emails

**Slug:** `HUBSPOT_SEARCH_EMAILS`

Searches for HubSpot emails using flexible criteria and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination token from previous response. |
| `limit` | integer | No | Maximum number of emails to return. |
| `query` | string | No | Text search query to find emails by subject or content. |
| `properties` | array | No | Email property names to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search feedback submissions

**Slug:** `HUBSPOT_SEARCH_FEEDBACK_SUBMISSIONS`

Searches for feedback submissions in HubSpot CRM using text query, filter groups, sorting, and pagination, returning specified properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | A pagination token from a previous response to retrieve the next page of results. Omit for the first page. |
| `limit` | integer | No | The maximum number of feedback submissions to return in a single response. Defaults to 10. |
| `query` | string | No | A string to search across all searchable properties of feedback submissions. This performs a broad text search. |
| `sorts` | array | No | A list of property names to sort the results by. Properties are sorted in ascending order by default. Prefix a property name with a hyphen (`-`) for descending order. Defaults to creation order (oldest first) if omitted. |
| `properties` | array | No | A list of specific feedback submission property names to be included in the response. If omitted, returns default properties: hs_createdate, hs_lastmodifieddate, and hs_object_id. |
| `filterGroups` | array | No | A list of filter groups to apply to the search. Each group represents a set of AND-ed filters. Multiple filter groups are combined using OR logic. Maximum 5 groups with up to 6 filters each (18 total filters maximum). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search line items by criteria

**Slug:** `HUBSPOT_SEARCH_LINE_ITEMS_BY_CRITERIA`

Searches HubSpot line items using criteria including filters, sorting, and pagination; `after` must be a valid cursor from a previous response, and `sorts`/`properties` must refer to valid line item property names.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination cursor from a prior response to fetch the next page of results. Leave empty for the first page. |
| `limit` | integer | No | Maximum number of line items to retrieve per page (default: 10, max: 200). |
| `query` | string | No | Optional search string applied across all searchable line item properties. |
| `sorts` | array | No | List of property names for sorting results. Prepend '-' for descending order. Defaults to creation date ascending if omitted. |
| `properties` | array | No | Specific line item property names to include in results. If omitted or empty, a default set of properties is returned. |
| `filterGroups` | array | No | List of filter groups. Line items must match all filters in at least one group (filters within a group are ANDed; groups are ORed). Leave empty to return all line items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search products

**Slug:** `HUBSPOT_SEARCH_PRODUCTS`

Searches for HubSpot products using flexible criteria and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | The cursor for pagination. To get the next page of results, use the `after` value from the `paging.next.after` property of a previous response. |
| `limit` | integer | No | The maximum number of products to return in the search results. |
| `query` | string | No | A string to search across all default text properties of products. Finds records where any of these properties contain the specified string. |
| `sorts` | array | No | A list of sort objects to define the order of search results. Each object specifies a `propertyName` and a `direction`. For example, `[{'propertyName': 'name', 'direction': 'ASCENDING'}]` sorts products by name alphabetically. |
| `properties` | array | No | A list of product properties to include in the response. Supports both standard properties and custom properties. If not provided, a default set of properties will be returned. |
| `filterGroups` | array | No | Groups of filters to apply to the ticket search. |
| `filter_groups` | array | No | A list of filter groups to apply to the search. Each filter group contains one or more filters. Filters within a group are combined using AND logic, while multiple filter groups are combined using OR logic. For example: `[{'filters': [{'propertyName': 'price', 'operator': 'GT', 'value': '100'}]}]`. |
| `custom_properties` | array | No | A list of internal names of custom product properties to include in the response. It's important to use the property's internal API name. For example `['custom_field_api_name_1', 'custom_field_api_name_2']`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search quotes by criteria

**Slug:** `HUBSPOT_SEARCH_QUOTES_BY_CRITERIA`

Searches HubSpot CRM quotes using a text query, complex filter criteria, sorting, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | A cursor for pagination. Set this to the 'paging.next.after' value from a previous response to get the next page of results. If not provided, the first page is returned. |
| `limit` | integer | No | The maximum number of quote records to return in the response. Default is 10, maximum is 200. |
| `query` | string | No | A string to search across all searchable properties of quotes. This performs a broad text search. |
| `sorts` | array | No | A list of sort rules to order the results. Only one sort rule can be applied. Each sort contains 'propertyName' and 'direction' ('ASCENDING' or 'DESCENDING'). If omitted, results are ordered by creation date (oldest first). |
| `properties` | array | No | Specific quote property internal names to include in the response. If omitted, a default set of properties is returned. Include custom property names here. |
| `filterGroups` | array | No | A list of filter groups to apply to the search. Multiple filter groups are combined with an OR logic, while filters within a group are combined with AND logic. Maximum 5 filter groups with up to 6 filters each. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search tickets

**Slug:** `HUBSPOT_SEARCH_TICKETS`

Searches for HubSpot tickets using flexible criteria and filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor token for pagination to get the next page of results. |
| `limit` | integer | No | Maximum number of tickets to return in the response. |
| `query` | string | No | Text search query to find tickets by content or subject. |
| `sorts` | array | No | List of sort criteria for ordering the results. |
| `properties` | array | No | Ticket properties to include in the response. Supports both standard and custom properties. |
| `filterGroups` | array | No | Groups of filters to apply to the ticket search. |
| `custom_properties` | array | No | List of custom property names to include in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set call recording settings

**Slug:** `HUBSPOT_SET_CALL_RECORDING_SETTINGS`

Configures the URL (`urlToRetrieveAuthedRecording`) that HubSpot uses to retrieve call recordings for a specified third-party calling app (`appId`). The URL must contain a %s placeholder which HubSpot replaces with the engagement's externalId. The calling app must be an existing calling extension app integrated with the HubSpot account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | Unique identifier for the third-party calling app integration in HubSpot CRM whose recording settings will be modified. |
| `urlToRetrieveAuthedRecording` | string | Yes | Endpoint URL for HubSpot to retrieve call recordings; must contain %s placeholder which HubSpot will replace with the engagement's externalId, and must serve recordings with authentication if required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Initiate data import process

**Slug:** `HUBSPOT_START_IMPORT`

Call this action to start an asynchronous data import into HubSpot CRM using uploaded files and a detailed `importRequest` JSON configuration, ensuring this JSON correctly maps file columns to HubSpot properties and files align with these mappings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | object | No | The binary content of the file(s) to be imported. Supported formats typically include CSV, XLSX, and XLS. Ensure the file structure aligns with the mappings defined in `importRequest`. |
| `importRequest` | string | No | A JSON string specifying the configuration for the import process. This configuration dictates how data from the uploaded file(s) is mapped and imported into HubSpot. Key properties include `name` (a descriptive name for the import, e.g., "Q3 Contact Import"), `dateFormat` (e.g., 'MONTH_DAY_YEAR', 'DAY_MONTH_YEAR'), `importOperations` (defines if the import should create and update, only create, or only update records, e.g., 'CREATE_AND_UPDATE'), and `files` (an array detailing each file, its format, and `columnMappings`). The `columnMappings` are crucial as they map spreadsheet columns to HubSpot CRM object properties (e.g., map 'Email Address' column to 'CONTACT' object's 'email' property). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a marketing email

**Slug:** `HUBSPOT_UPDATE_A_MARKETING_EMAIL`

Updates properties of an existing marketing email identified by its `emailId`; unspecified fields retain their current values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The internal name of the email as it appears in the HubSpot dashboard. |
| `state` | string ("AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT") | No | The desired state of the email after the update. Common states include 'DRAFT', 'SCHEDULED', 'PUBLISHED'. |
| `emailId` | string | Yes | The unique ID of the marketing email to be updated. |
| `subject` | string | No | The subject line of the marketing email. |
| `archived` | boolean | No | Set to `true` to archive the marketing email, or `false` to make it active (unarchive). |
| `campaign` | string | No | The ID of the HubSpot campaign this email is associated with. |
| `language` | string ("af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za") | No | The primary language of the email, using ISO 639-1 language codes (e.g., 'en') or language-locale codes (e.g., 'en-us'). |
| `publishDate` | string | No | The scheduled publication date and time for the email in ISO 8601 format (e.g., '2023-12-31T10:00:00Z'). Used for scheduled emails. |
| `subcategory` | string | No | The subcategory of the email, often used for organization (e.g., 'newsletter', 'promotional'). |
| `activeDomain` | string | No | The domain from which this email will be sent (e.g., 'info.example.com'). Must be a connected sending domain in HubSpot. |
| `rssData__url` | string | No | The URL of the external RSS feed if not using a HubSpot blog. |
| `from__replyTo` | string | No | The email address used as the 'From' address and default 'Reply-To' address. Must be a verified address in HubSpot. |
| `sendOnPublish` | boolean | No | If `true` and the email state is set to 'PUBLISHED', the email will be sent immediately. If `false` for a 'PUBLISHED' state, it implies it was already sent or is a template. |
| `businessUnitId` | string | No | The ID of the business unit this email belongs to. Requires the Business Units add-on for HubSpot. |
| `from__fromName` | string | No | The sender's name as it appears in the recipient's inbox (e.g., 'Marketing Team'). |
| `rssData__timing` | object | No | A dictionary defining the scheduling for RSS emails (e.g., time of day, day of week/month). The structure depends on `blogEmailType`. |
| `testing__testId` | string | No | The unique identifier of the A/B test, if applicable. |
| `content__widgets` | object | No | A dictionary specifying the configuration and content of various widgets (modules) used in the email. |
| `webversion__slug` | string | No | The URL slug for the web version of the email (e.g., 'july-newsletter-2024'). |
| `testing__abStatus` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Status of the AB test (e.g., 'master', 'variant'). |
| `webversion__title` | string | No | The title displayed in the browser tab for the web version of the email. |
| `content__flexAreas` | object | No | A dictionary defining content for flexible column areas within drag-and-drop email templates. |
| `webversion__domain` | string | No | The domain to be used for the web version of this email. If not specified, the default portal domain is used. |
| `from__customReplyTo` | string | No | A custom email address for replies. If set, this overrides the main `replyTo` address for replies. |
| `rssData__blogLayout` | string | No | Defines the layout style for displaying blog posts within an RSS email. |
| `rssData__maxEntries` | integer | No | The maximum number of blog posts to include in a single RSS email. |
| `content__smartFields` | object | No | A dictionary of smart fields and their values/configurations used in the email content. Enables personalization based on contact properties. |
| `testing__hoursToWait` | integer | No | Time limit in hours on gathering test results. After this time is up, the winning version will be sent to the remaining contacts. |
| `to__suppressGraymail` | boolean | No | If `true`, HubSpot will attempt to avoid sending this email to contacts classified as 'graymail' (low engagement). |
| `content__templatePath` | string | No | The path to the email template file within the HubSpot Design Manager (e.g., 'marketplace/some_template_name'). |
| `webversion__expiresAt` | string | No | The date and time when the web version link will expire, in ISO 8601 format. After this time, the link may redirect or show an error. |
| `rssData__blogEmailType` | string | No | Specifies the type of RSS email, such as instant, daily, weekly, or monthly. |
| `rssData__hubspotBlogId` | string | No | The ID of the HubSpot blog used as the source for an RSS-to-email. |
| `to__limitSendFrequency` | boolean | No | If `true`, respects HubSpot's send frequency limits for contacts. If `false`, may override these limits. |
| `to__contactIds__exclude` | array | No | A list of contact IDs to specifically exclude from receiving this email. |
| `to__contactIds__include` | array | No | A list of contact IDs to specifically include as recipients for this email. |
| `testing__abSuccessMetric` | string ("CLICKS_BY_OPENS" | "CLICKS_BY_DELIVERED" | "OPENS_BY_DELIVERED") | No | Metric to determine the winning version that will be sent to the remaining contacts (e.g., 'CLICKS_BY_OPENS'). |
| `content__plainTextVersion` | string | No | The plain text version of the email. If omitted, HubSpot may auto-generate it from the HTML content. |
| `content__widgetContainers` | object | No | A dictionary defining the layout and content of widget containers in the email template. |
| `rssData__rssEntryTemplate` | string | No | The HTML template used to render each individual blog post (entry) in an RSS email. |
| `testing__abTestPercentage` | integer | No | The percentage of recipients who will be part of the A/B test group (e.g., 50 for 50%). |
| `to__contactLists__exclude` | array | No | A list of contact list IDs whose members should be excluded from receiving this email. |
| `to__contactLists__include` | array | No | A list of contact list IDs whose members should receive this email. |
| `webversion__redirectToUrl` | string | No | An external URL to redirect to if the web version link is expired or disabled, used if `redirectToPageId` is not set. |
| `rssData__blogImageMaxWidth` | integer | No | Maximum width in pixels for images included from an RSS feed in the email. |
| `testing__abSamplingDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Version of the email that should be sent if the results are inconclusive after the test period (e.g., 'master', 'variant'). |
| `webversion__metaDescription` | string | No | The meta description for the web version of the email, used by search engines. |
| `content__themeSettingsValues` | object | No | A dictionary of theme settings overrides for the email template. Allows customization of global theme styles. |
| `testing__abSampleSizeDefault` | string ("master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant") | No | Version of the email that should be sent if there are too few recipients to conduct an AB test (e.g., 'master', 'variant'). |
| `webversion__redirectToPageId` | string | No | The ID of a HubSpot-hosted page to redirect to if the web version link is expired or manually disabled. |
| `rssData__useHeadlineAsSubject` | boolean | No | If `true`, the headline of the latest blog post will be used as the email's subject line for RSS emails. |
| `subscriptionDetails__subscriptionId` | string | No | The ID of the specific email subscription type (e.g., marketing, newsletter) this email belongs to. |
| `subscriptionDetails__officeLocationId` | string | No | The ID of the CAN-SPAM office location to be used in the email footer. |
| `subscriptionDetails__preferencesGroupId` | string | No | The ID of the subscription preferences page/group associated with this email. Allows recipients to manage their preferences. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update batch feedback submissions

**Slug:** `HUBSPOT_UPDATE_BATCH_FEEDBACK_SUBMISSIONS`

Updates a batch of HubSpot feedback submissions; property keys must be existing internal HubSpot names and values must be correctly formatted strings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of feedback submissions to update, each specifying its identifier and new property values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a batch of objects by id or property values

**Slug:** `HUBSPOT_UPDATE_BATCH_OF_OBJECTS_BY_IDOR_PROPERTY_VALUES`

Performs a batch update on a valid `objectType` where properties are writeable and any `idProperty` used is designated unique; updates can be partial.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of objects to update, each detailing the object and its property changes. Max 100 objects per batch. |
| `objectType` | string | Yes | Case-sensitive CRM object type to be updated in bulk (e.g., 'contacts', 'p_customobject'), determining the target object set. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update calling app recording settings

**Slug:** `HUBSPOT_UPDATE_CALLING_APP_RECORDING_SETTINGS`

Updates the recording settings, such as the URL for retrieving authenticated recordings, for a specific calling extension app identified by its `appId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | The unique identifier for the calling app. |
| `urlToRetrieveAuthedRecording` | string | No | URL HubSpot uses to retrieve call recordings requiring authentication from the calling app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify calling extension settings

**Slug:** `HUBSPOT_UPDATE_CALLING_EXTENSION_SETTINGS`

Updates settings (e.g., display name, UI URL/dimensions, feature flags) for an existing calling extension app, identified by `appId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | URL to the phone/calling UI, which should be built using the HubSpot Calling SDK. |
| `name` | string | No | User-facing display name of the calling service. |
| `appId` | integer | Yes | The unique ID of the target app whose calling extension settings are being modified. |
| `width` | integer | No | Target width (pixels) of the iframe embedding the phone/calling UI. |
| `height` | integer | No | Target height (pixels) of the iframe embedding the phone/calling UI. |
| `isReady` | boolean | No | If `true`, the calling service appears as an option under the 'Call' action in contact records. |
| `supportsCustomObjects` | boolean | No | Indicates if the calling service is compatible with HubSpot's engagement V2 service and custom objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update campaign

**Slug:** `HUBSPOT_UPDATE_CAMPAIGN`

Partially updates specific, writable properties of an existing HubSpot marketing campaign identified by `campaignGuid`; an empty string value in `properties` clears a property.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `properties` | object | Yes | Dictionary of campaign properties to update. Keys are internal property names (e.g., hs_name, hs_campaign_status, hs_start_date), values are their new string values. Values overwrite existing ones. Attempting to update read-only or non-existent properties will result in an error. To clear a property, set it to an empty string. |
| `campaignGuid` | string | Yes | Unique identifier (UUID) of the HubSpot marketing campaign to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a batch of campaigns

**Slug:** `HUBSPOT_UPDATE_CAMPAIGNS`

Updates properties for up to 50 existing HubSpot marketing campaigns in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of campaign objects to update. Each object must include the campaign 'id' and a 'properties' dictionary. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update companies

**Slug:** `HUBSPOT_UPDATE_COMPANIES`

Updates multiple HubSpot companies in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of company update operations, each specifying company 'id' and 'properties' with new values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update company

**Slug:** `HUBSPOT_UPDATE_COMPANY`

Updates properties for an existing HubSpot company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `companyId` | string | Yes | Unique HubSpot identifier for the company to be updated. Can be provided as a string or number. |
| `properties` | object | Yes | Company properties to update. Keys are internal HubSpot property names; use an empty string to clear a property. Common properties and their expected formats: 'name' (string), 'domain' (string, e.g., 'example.com'), 'phone' (string), 'website' (URL string), 'industry' (enum - must use HubSpot's predefined SCREAMING_SNAKE_CASE values, e.g., COMPUTER_SOFTWARE, FINANCIAL_SERVICES, HOSPITAL_HEALTH_CARE, RETAIL, BIOTECHNOLOGY; see HubSpot docs for the full list), 'annualrevenue' (numeric string only, e.g., '150000000' - do NOT include currency symbols, words, or text), 'numberofemployees' (numeric string, e.g., '500'), 'description' (string), 'city' (string), 'state' (string), 'country' (string), 'zip' (string). Read-only properties are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update contact

**Slug:** `HUBSPOT_UPDATE_CONTACT`

Updates properties for an existing HubSpot contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | Unique HubSpot identifier for the contact to be partially updated. Can also be provided as 'contact_id' (snake_case). |
| `properties` | object | No | Standard HubSpot contact properties. Use these for common contact fields. |
| `custom_properties` | object | No | Custom HubSpot properties to update. Use this for any custom properties you've created in your HubSpot account. Keys must be the internal property names (e.g., 'my_custom_field'). Values must be strings. Use HUBSPOT_LIST_CONTACT_PROPERTIES with custom_only=true to discover available custom property names. These are merged with standard properties before sending to the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update contacts

**Slug:** `HUBSPOT_UPDATE_CONTACTS`

Updates multiple HubSpot contacts in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of contact update operations, each specifying contact 'id' (VID) and 'properties' with new values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update specific CRM property

**Slug:** `HUBSPOT_UPDATE_CRM_PROPERTY`

Updates attributes of an existing HubSpot CRM property, identified by its `objectType` and `propertyName`; only provided fields are modified, and changing a property's `type` can cause data loss if incompatible with existing data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("string" | "number" | "date" | "datetime" | "enumeration" | "bool") | No | New data type for the property. Modifying the `type` of an existing property with data can cause data loss; use with caution. |
| `label` | string | No | New human-readable label for the property, displayed in the HubSpot UI. |
| `hidden` | boolean | No | If true, hides the property in the HubSpot UI, making it not generally visible or usable in standard interfaces. |
| `options` | array | No | List of new option definitions if property `type` is 'enumeration'; supplying a new list overwrites existing options. |
| `fieldType` | string ("textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_equation") | No | New field type controlling how the property is displayed and interacted with in the HubSpot UI. |
| `formField` | boolean | No | If true, allows this property to be included as a field in HubSpot forms and available in the form editor. |
| `groupName` | string | No | New internal name of the property group for this property; groups help organize properties in the HubSpot UI. |
| `objectType` | string | Yes | Type of CRM object for which the property is being updated; this determines its context. |
| `description` | string | No | New description for the property, displayed as help text in the HubSpot UI. |
| `displayOrder` | integer | No | New display order for the property within its group. Lower positive integers appear first; -1 typically places it after positively numbered properties. |
| `propertyName` | string | Yes | Internal name of the property to update (case-sensitive); must correspond to an existing property for the specified `objectType`. |
| `calculationFormula` | string | No | New formula if `fieldType` is 'calculation_equation'; defines how its value is auto-computed. Ensure valid HubSpot calculation syntax. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deal

**Slug:** `HUBSPOT_UPDATE_DEAL`

Updates properties for an existing HubSpot deal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dealId` | string | Yes | Unique HubSpot identifier for the deal to be updated. |
| `properties` | object | Yes | Deal properties to update. Must contain at least one property. Keys are internal HubSpot property names; use empty string to clear a property. IMPORTANT - Some properties require specific internal HubSpot IDs: (1) 'dealstage' and 'pipeline' require internal IDs (not human-readable labels). (2) 'hubspot_owner_id' requires a valid HubSpot user/owner ID. Common text/numeric properties: dealname (string), amount (decimal string), closedate (YYYY-MM-DD or ISO 8601), description (string), deal_currency_code (3-letter currency code like 'USD'). Enum/select properties have case-sensitive values - use exact values as defined in HubSpot. Use HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME to retrieve valid enum options for any property. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update deals

**Slug:** `HUBSPOT_UPDATE_DEALS`

Updates multiple HubSpot deals in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of deal update operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### UpdateEmail Email

**Slug:** `HUBSPOT_UPDATE_EMAIL`

Partially updates properties of an existing HubSpot email object, identified by `emailId` (as internal ID or custom unique property value if `idProperty` is given); the object must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emailId` | string | Yes | Identifier of the email object. This is its internal HubSpot ID, or a custom unique property value if `idProperty` is also provided. |
| `idProperty` | string | No | Name of a unique HubSpot property for emails. If specified, `emailId` must be the value of this unique property, not the internal HubSpot ID. |
| `properties` | object | Yes | Property names and new values for the email. Values overwrite existing ones; an empty string clears a property. Read-only or non-existent properties are ignored. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update emails

**Slug:** `HUBSPOT_UPDATE_EMAILS`

Updates multiple HubSpot emails in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of email update operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update existing event template

**Slug:** `HUBSPOT_UPDATE_EVENT_TEMPLATE`

Updates an existing HubSpot event template's name, display templates, and tokens; providing `tokens` replaces the entire existing list, and the `id` in the request body must match `eventTemplateId` in the path.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the event template; must match `eventTemplateId` in the URL path. |
| `name` | string | Yes | New name for the event template. |
| `appId` | integer | Yes | ID of the application associated with the event template. |
| `tokens` | array | Yes | List of token definitions; replaces all existing tokens for the template. |
| `detailTemplate` | string | No | Markdown for the event's detailed timeline view, using Handlebars for dynamic data (e.g., `{{token_name}}`). |
| `headerTemplate` | string | No | Markdown for the event's header on the timeline, using Handlebars for dynamic data (e.g., `{{token_name}}`). |
| `eventTemplateId` | string | Yes | Unique identifier of the event template to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update feedback submission by id

**Slug:** `HUBSPOT_UPDATE_FEEDBACK_SUBMISSION`

Partially updates writable properties of an existing HubSpot Feedback Submission, identified by its `feedbackSubmissionId` (which can be an internal object ID, or a unique property value if `idProperty` is specified).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idProperty` | string | No | The name of a unique property used to identify the Feedback Submission. If provided, `feedbackSubmissionId` must contain the value of this property, instead of the internal object ID. This property must be a unique identifier for Feedback Submission objects. |
| `properties` | object | Yes | A dictionary of properties to update on the Feedback Submission. Keys are the internal names of the properties, and values are their new string values. Only properties included here will be modified; others will remain unchanged. |
| `feedbackSubmissionId` | string | Yes | The unique identifier of the Feedback Submission to update. This can be its internal object ID or a unique property value if `idProperty` is specified. Must be a non-empty string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update line item object partially

**Slug:** `HUBSPOT_UPDATE_LINE_ITEM`

Partially updates specified properties of an existing HubSpot Line Item, identified by `lineItemId` (as HubSpot object ID or value of `idProperty` if used); new values overwrite existing ones, and an empty string clears a property.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idProperty` | string | No | Name of a unique property on the Line Item used for identification instead of HubSpot object ID. If used, `lineItemId` must contain this property's value. Must be a valid, unique-value property for Line Items. |
| `lineItemId` | string | Yes | Identifier for the Line Item to update: HubSpot object ID by default, or the value of the unique property if `idProperty` is specified. Must be non-empty. |
| `properties` | object | Yes | Properties to update. Keys are internal HubSpot line item property names (e.g., 'quantity', 'price'), values are new string values. Example: `{'quantity': '5', 'name': 'New Product Name'}`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a batch of line items

**Slug:** `HUBSPOT_UPDATE_LINE_ITEMS`

Updates a batch of existing HubSpot CRM line items in a single operation, identifying each by its primary ID or a unique `idProperty` (which must be a unique identifier property in HubSpot), and modifies their specified properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | A list of objects, where each object defines a line item to be updated and its new property values. Each object must conform to the InputsRequest schema. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update existing object schema

**Slug:** `HUBSPOT_UPDATE_OBJECT_SCHEMA`

Updates an existing custom object schema's metadata in HubSpot, such as its description, labels, display properties, required properties, searchable properties, and restorability, for a specified `objectType` that must already exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | string | Yes | The fully qualified name or object type ID that uniquely identifies the custom object schema to be updated. This must correspond to an existing schema in your HubSpot account. |
| `restorable` | boolean | No | A boolean indicating whether records of this object type can be restored from the recycle bin if deleted. Set to `true` to enable restoration, `false` otherwise. |
| `description` | string | No | A human-readable description for the custom object schema itself. |
| `labels__plural` | string | No | The plural display name for the custom object type (e.g., 'Companies', 'Tickets'), used in the HubSpot UI for multiple records of this type. |
| `labels__singular` | string | No | The singular display name for the custom object type (e.g., 'Company', 'Ticket'), used in the HubSpot UI for a single record of this type. |
| `requiredProperties` | array | No | A list of internal names of properties that are mandatory when creating a new record of this object type. |
| `searchableProperties` | array | No | A list of internal names of properties that will be indexed and searchable within HubSpot's product search for this object type. |
| `primaryDisplayProperty` | string | No | The internal name of the property that will serve as the primary display identifier on the HubSpot record page for this object type. This is typically a unique identifier like a name or ID. |
| `secondaryDisplayProperties` | array | No | A list of internal names of properties to be displayed as secondary information on the HubSpot record page for this object type. These properties appear below the primary display property. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Partially update pipeline by id

**Slug:** `HUBSPOT_UPDATE_PIPELINE`

Partially updates a CRM pipeline's label, display order, or restores an archived pipeline by setting `archived` to `false`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Unique label for the pipeline for UI organization. |
| `archived` | boolean | No | To restore an archived pipeline, set to `false`. Other uses (e.g., archiving an active pipeline or setting `false` for an already active one) will result in a `400 Bad Request`. |
| `objectType` | string | Yes | Type of CRM object the pipeline is associated with (e.g., 'deals', 'tickets'). |
| `pipelineId` | string | Yes | Unique identifier of the pipeline to update. |
| `displayOrder` | integer | No | Display order for the pipeline. Pipelines with the same order are sorted alphabetically by label. |
| `validateReferencesBeforeDelete` | boolean | No | If `true`, verify existing references to pipeline stages before updates that could delete or alter them. |
| `validateDealStageUsagesBeforeDelete` | boolean | No | For deal pipelines only: if `true`, check if any deals use stages affected by the update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update pipeline stage by ids

**Slug:** `HUBSPOT_UPDATE_PIPELINE_STAGE`

Partially updates a HubSpot CRM pipeline stage identified by `objectType`, `pipelineId`, and `stageId`, requiring `metadata` in the request; unspecified fields are unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | The display name (label) of the pipeline stage. This label must be unique within the pipeline it belongs to. Omit to leave unchanged. |
| `stageId` | string | Yes | Unique identifier of the pipeline stage to update; must exist within the specified `pipelineId`. |
| `archived` | boolean | No | Set to `true` to archive the pipeline stage, `false` to unarchive. If omitted, its archival status remains unchanged. |
| `metadata` | object | No | Stage-specific metadata (key-value string pairs) based on `objectType`. Omit to leave unchanged. - For 'deals': If provided, MUST include 'probability' (string '0.0'-'1.0', e.g., '0.7', in '0.1' increments). - For 'tickets': Optional 'ticketState' ('OPEN' or 'CLOSED'). - For other object types, an empty `{}` may be used. |
| `objectType` | string | Yes | Type of CRM object (e.g., 'deals', 'tickets') for the pipeline; must be a valid HubSpot object type that supports pipelines. |
| `pipelineId` | string | Yes | Unique identifier of the pipeline (specific to the HubSpot account and `objectType`) containing the stage to update; must refer to an existing pipeline. |
| `displayOrder` | integer | No | The display order for this pipeline stage. If multiple stages share the same `displayOrder`, they are sorted alphabetically by `label`. Lower numbers appear first. Omit to leave unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product

**Slug:** `HUBSPOT_UPDATE_PRODUCT`

Updates properties for an existing HubSpot product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productId` | string | Yes | Unique HubSpot identifier for the product to be updated. |
| `properties` | object | Yes | Product properties to update. Keys are internal HubSpot property names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update products

**Slug:** `HUBSPOT_UPDATE_PRODUCTS`

Updates multiple HubSpot products in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of product update operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Partially update property group

**Slug:** `HUBSPOT_UPDATE_PROPERTY_GROUP`

Partially updates a property group's `displayOrder` or `label` for a specified CRM `objectType` in HubSpot.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Human-readable label for the property group in the UI. If omitted, the current label is unchanged. |
| `groupName` | string | Yes | The unique, case-sensitive internal name of the existing property group to be updated for the specified `objectType`. |
| `objectType` | string | Yes | The CRM object type (e.g., "contacts", "companies") for which the property group is updated; must be a valid HubSpot CRM object type. |
| `displayOrder` | integer | No | Order for displaying the property group: lowest positive integer first, -1 places it after positive values. If omitted, the current order is unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Partial update quote by quote id

**Slug:** `HUBSPOT_UPDATE_QUOTE`

Performs a partial update on an existing HubSpot quote's specified properties, identifying the quote by `quoteId` (either its internal ID or a custom unique property value if `idProperty` is provided).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quoteId` | string | Yes | Unique identifier of the quote. Typically an internal HubSpot object ID, or a unique property value if `idProperty` is specified. |
| `idProperty` | string | No | Optional. Name of a unique quote property. If provided, `quoteId` is interpreted as this property's value, not the internal object ID. |
| `properties` | object | Yes | Properties to update on the quote (internal property names to new values). Only included properties will be updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update ticket

**Slug:** `HUBSPOT_UPDATE_TICKET`

Updates properties for an existing HubSpot ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticketId` | string | Yes | Unique HubSpot identifier for the ticket to be updated. |
| `properties` | object | Yes | Ticket properties to update. Keys are internal HubSpot property names. Values can be strings, numbers, or booleans - they will be automatically converted to strings as required by HubSpot API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update tickets

**Slug:** `HUBSPOT_UPDATE_TICKETS`

Updates multiple HubSpot tickets in a single batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of ticket update operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update token on event template

**Slug:** `HUBSPOT_UPDATE_TOKEN_ON_EVENT_TEMPLATE`

Updates the label or options of an existing token within a specified HubSpot CRM event template; token name and data type remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | Unique identifier (ID) of the application associated with the event template and token. |
| `label` | string | Yes | New human-readable label for the token, displayed in UIs and used for segmentation/reporting. |
| `options` | array | No | List of option objects defining selectable choices, applicable only if the token's type is 'enumeration'. Required to modify options for an enumeration type token. |
| `tokenName` | string | Yes | Name of the token to update within the specified event template; must match an existing token's name. |
| `eventTemplateId` | string | Yes | Unique identifier (ID) of the event template containing the token to update. |
| `objectPropertyName` | string | No | Name of the CRM object property this token populates, linking its value to a CRM object property. If null, no direct mapping. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update video conference app settings

**Slug:** `HUBSPOT_UPDATE_VIDEO_CONFERENCE_APP_SETTINGS`

Updates webhook URLs (for creating/updating/deleting meetings, fetching accounts, verifying users) for a video conference application specified by `appId`. Requires developer API key authentication. All URLs must use HTTPS protocol and be publicly accessible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appId` | integer | Yes | Unique identifier for the video conference application in HubSpot, assigned upon creation in the developer portal. Example: 12345. |
| `userVerifyUrl` | string | No | URL HubSpot uses to verify a user's existence and authentication with the video conference app, confirming identity before certain actions. |
| `createMeetingUrl` | string | Yes | URL HubSpot uses to send requests for creating new video conference meetings. Must use HTTPS protocol. |
| `deleteMeetingUrl` | string | No | URL HubSpot uses to notify the video conference app when an integrated meeting is deleted in HubSpot. |
| `fetchAccountsUri` | string | No | URL HubSpot uses to fetch user accounts from the video conference app, enabling users to select from multiple accounts if available. |
| `updateMeetingUrl` | string | No | URL HubSpot uses to send updates for existing meetings, e.g., when details like topic or schedule are modified within HubSpot. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update workflow

**Slug:** `HUBSPOT_UPDATE_WORKFLOW`

Fully replace an existing Automation v4 workflow at its current revision.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow_id` | string | Yes | ID of the existing HubSpot workflow to replace. |
| `workflow` | object | Yes | Complete ApiFlowPutRequest using exact HubSpot camelCase keys. Both workflow variants require type, actions, blockedDates, customProperties, isEnabled, revisionId, and timeWindows. A CONTACT_FLOW also requires canEnrollFromSalesforce and suppressionListIds. Copy only fields represented by this request schema from a fresh workflow read; response-only fields such as id, createdAt, updatedAt, dataSources, flowType, objectTypeId, and nextAvailableActionId are not accepted by the PUT contract. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert contacts

**Slug:** `HUBSPOT_UPSERT_CONTACTS`

Creates or updates as many as 100 HubSpot contacts by unique property value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | Contacts to upsert. Include between 1 and 100 items. HubSpot does not support partial upserts when an item's idProperty is email. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `HUBSPOT_WHO_AM_I`

Return the connected HubSpot account (portal id, domain). HubSpot identity is account-level, not per-user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Contact Created Trigger

**Slug:** `HUBSPOT_CONTACT_CREATED_TRIGGER`

**Type:** webhook

Contact Created Trigger

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | string | Yes | The ID of the app. |
| `developer_api_key` | string | Yes | HubSpot Developer API Key (hapikey) for webhook management. Get this from developers.hubspot.com |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The ID of the object. |
| `subscriptionType` | string | Yes | The type of the event subscription. |
| `subscription_id` | string | Yes | The ID of the subscription. |

### Deal Stage UpdatedTrigger

**Slug:** `HUBSPOT_DEAL_STAGE_UPDATED_TRIGGER`

**Type:** webhook

Deal Stage UpdatedTrigger

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app_id` | string | Yes | The ID of the app. |
| `developer_api_key` | string | Yes | HubSpot Developer API Key (hapikey) for webhook management. Get this from developers.hubspot.com |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectId` | string | Yes | The ID of the object. |
| `subscriptionType` | string | Yes | The type of the event subscription. |
| `subscription_id` | string | Yes | The ID of the subscription. |
