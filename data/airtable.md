# Airtable

Airtable merges spreadsheet functionality with database power, enabling teams to organize projects, track tasks, and collaborate through customizable views, automation, and integrations for data management

- **Category:** productivity
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 27
- **Triggers:** 6
- **Slug:** `AIRTABLE`
- **Version:** 20260915_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Airtable?

For a step-by-step guide on creating and configuring your own Airtable OAuth credentials with Composio, see [How to create OAuth credentials for Airtable](https://composio.dev/auth/airtable).

## Tools

### Create base

**Slug:** `AIRTABLE_CREATE_BASE`

Creates a new Airtable base with specified tables and fields within a workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new Airtable base, visible in the UI. |
| `tables` | array | Yes | Configurations for tables to be created in the new base; each table needs 'name' and 'fields'. Must be an array of table objects, not a stringified JSON. The first field in each table cannot be 'singleSelect' as it becomes the primary field. Select field choices must include both 'id' and 'name' for each choice. Field types 'formula', 'rollup', 'count', 'lookup', 'multipleLookupValues', 'autoNumber', 'createdTime', and 'lastModifiedTime' are not supported at base creation. For 'dateTime' fields, options require 'dateFormat' (with name: 'local'&#124;'friendly'&#124;'us'&#124;'european'&#124;'iso') and 'timeFormat' (with name: '12hour'&#124;'24hour'); 'timeZone' defaults to 'utc' if not specified. |
| `workspaceId` | string | Yes | Workspace ID where the base will be created. MUST start with 'wsp' prefix (e.g., 'wspXXXXXXXXXXXXXX'). Common mistake: Do not use user IDs (usr prefix), base IDs (app prefix), or other Airtable IDs - only workspace IDs work here. Get your workspace ID from Airtable workspace settings or via the List Bases API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Comment

**Slug:** `AIRTABLE_CREATE_COMMENT`

Tool to create a comment on a specific Airtable record. Use when adding comments to records, mentioning collaborators using @[userId] syntax, or creating threaded comment replies. Supports optional parentCommentId for threaded conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The content of the comment. To mention a user, use the format @[userId] (e.g., @[usrGISFlfA7l5F7kY6]). |
| `baseId` | string | Yes | The unique identifier of the Airtable base. This typically starts with 'app'. |
| `recordId` | string | Yes | The unique identifier of the record on which the comment will be created. This typically starts with 'rec'. |
| `tableIdOrName` | string | Yes | The unique identifier (typically starting with 'tbl') or the name of the table within the base. |
| `parentCommentId` | string | No | The ID of the parent comment for creating threaded replies. If provided, this comment will be a reply to the specified parent comment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Field

**Slug:** `AIRTABLE_CREATE_FIELD`

Creates a new field within a specified table in an Airtable base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | REQUIRED. The name for the new field. Field names must be unique within a table. |
| `type` | string | No | The type for the new field. If not provided, it defaults to 'singleLineText'. Types that can be created via API: 'singleLineText', 'multilineText', 'richText', 'singleSelect', 'multipleSelects', 'checkbox', 'number', 'percent', 'currency', 'date', 'dateTime', 'duration', 'phoneNumber', 'email', 'url', 'multipleAttachments', 'barcode', 'rating', 'multipleRecordLinks', 'createdBy', 'lastModifiedBy', 'externalSyncSource'. For attachment fields, use 'multipleAttachments' (legacy 'attachment' is auto-converted). Cannot be created via API: 'formula', 'rollup', 'count', 'lookup', 'multipleLookupValues', 'autoNumber', 'createdTime', 'lastModifiedTime', 'button'. |
| `baseId` | string | Yes | REQUIRED. The unique identifier of the base where the field will be created. Format: 'appXXXXXXXXXXXXXXX' (17 characters starting with 'app'). |
| `options` | object | No | Type-specific configuration for the new field. Required for 'multipleRecordLinks' (must include 'linkedTableId' - the ID (format: tblXXXXXXXXXXXXXX) or name (case-sensitive) of the table to link to; if you provide 'isReversed' or 'prefersSingleRecordLink', they will be automatically stripped as the API rejects these fields in create requests and sets its own default values). Also required for: 'number'/'percent' ('precision'), 'currency' ('precision' and 'symbol'), 'checkbox' ('color' and 'icon'), 'date' ('dateFormat'), 'dateTime' ('dateFormat', 'timeFormat', 'timeZone'), 'rating' ('max', 'color' and 'icon') - sensible defaults are auto-applied if omitted. For 'singleSelect' and 'multipleSelects', 'choices' array must include objects with 'name' (required) and optionally 'color'. Do not include 'id' when creating new choices - the API will auto-generate them. |
| `description` | string | No | An optional description for the new field. This can provide context or instructions for the field's usage. |
| `tableIdOrName` | string | Yes | The ID or name of the table within the base where the field will be created. Table IDs start with 'tbl' followed by 14 characters. Table names are case-sensitive and must match exactly as they appear in Airtable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create multiple records (Deprecated)

**Slug:** `AIRTABLE_CREATE_MULTIPLE_RECORDS`

DEPRECATED: Use AIRTABLE_CREATE_RECORDS instead. Creates multiple new records in a specified Airtable table.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Required. The unique identifier of the Airtable base (e.g., 'appXXXXXXXXXXXXXX'). |
| `records` | array | Yes | Required. List of record objects to create. Each record must have a 'fields' key containing a dictionary mapping field names to values. Field names are case-sensitive and can contain any Unicode characters (e.g., 'Тема Reels', '日期'). Field values must match their configured types in Airtable (e.g., number fields require numeric values). Set typecast=true to enable automatic type conversion from strings. Note: Airtable's API limits creation to 10 records per request; if you provide more than 10 records, they will be automatically split into batches and processed in multiple requests. |
| `typecast` | boolean | No | If true, Airtable will perform automatic type conversion. Helps with: converting strings to numbers, creating new options for single/multi-select fields, automatically creating/linking records in linked record fields from text values, and type coercion for compatible types. Does NOT help with: text field length/format constraints or fundamental type incompatibilities. If you get INVALID_VALUE_FOR_COLUMN errors on text fields, check: (1) field type in Airtable (single-line vs long text), (2) any custom character limits, (3) whether the field expects a specific format. Defaults to false. |
| `tableIdOrName` | string | Yes | Required. The table ID (e.g., 'tblXXXXXXXXXXXXXX') or the table name (e.g., 'Tasks'). |
| `returnFieldsByFieldId` | boolean | No | If true, the returned field objects will use field IDs as keys instead of field names. Using field IDs is recommended for integrations that need to be resilient to field name changes. Default is false, which returns field names as keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a record (Deprecated)

**Slug:** `AIRTABLE_CREATE_RECORD`

DEPRECATED: Use CreateRecords instead. Creates a new record in a specified Airtable table; field values must conform to the table's column types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Required. The unique identifier of the Airtable base (e.g., 'appXXXXXXXXXXXXXX'). Use AIRTABLE_LIST_BASES to find available base IDs. |
| `fields` | object | No | A dictionary of field names (or IDs) and their values for the new record. Field names must exactly match those in the table schema (case-sensitive). Field IDs (e.g., 'fldXXXXXXXXXXXXXX') are preferred for stability, but are UNIQUE to each base and table. IMPORTANT: Use AIRTABLE_GET_BASE_SCHEMA with the specific baseId to discover valid field names, IDs, types, and options before creating records. Note: Fields with null, empty string, or boolean false values are automatically omitted from the request. Field type value requirements: - singleSelect: Must be a plain string option name (e.g., 'High'). DO NOT pass dict objects like {'id': 'selXXX'} or {'name': 'High'} - pass only the plain string. - multipleSelects: Must be an array of exact option names (e.g., ['Bug', 'Feature']). - checkbox: Use true to check. Omit or pass false to leave unchecked. - number/currency/percent: Must be a numeric value (int or float). Currency strings with symbols (e.g., '$100', '£689') are auto-converted. Plain numeric strings are NOT auto-converted - pass actual numbers or use typecast=true. - rating: Must be an integer. String numbers like '9' are auto-converted to integers. - date: Must be ISO 8601 format 'YYYY-MM-DD'. - dateTime: Must be ISO 8601 format (e.g., '2024-01-15T14:30:00.000Z', '2024-01-15T14:30:00+00:00'). Common formats like '2024-01-15 14:30:00', 'Jan 15, 2024', '01/15/2024' are auto-converted to ISO 8601. - singleLineText/multilineText/richText: Must be a string. - email/url/phoneNumber: Must be a string in appropriate format. - multipleAttachments: Must be an array of attachment objects with 'url' field. - singleCollaborator: Must be an object with 'id' or 'email' of a valid collaborator. - multipleRecordLinks: Must be an array of record IDs (e.g., ['recXXX', 'recYYY']). - duration: Must be a number representing total seconds (e.g., 278 for 4 minutes 38 seconds). Common conversions: 1 minute = 60, 1 hour = 3600, 1h30m = 5400. Time strings like 'H:MM:SS' or ISO 8601 duration (e.g., 'PT4M38S') are auto-converted to seconds. |
| `typecast` | boolean | No | When set to true, enables automatic data conversion from strings to appropriate field types. For example, if a singleSelect field receives a value that doesn't match an existing option, Airtable will create a new option with that value. Also converts string numbers to numeric types. Default is false, which requires exact type matching. |
| `tableIdOrName` | string | Yes | Required. The table ID (e.g., 'tblXXXXXXXXXXXXXX') or table name (e.g., 'Tasks', 'Meal Plan') where the record will be created. Table names with spaces and special characters are supported. This is separate from baseId and must be provided. Use AIRTABLE_GET_BASE_SCHEMA to find table IDs/names within a base. |
| `returnFieldsByFieldId` | boolean | No | If true, the returned field objects will use field IDs as keys instead of field names. Using field IDs is recommended for integrations that need to be resilient to field name changes. Default is false, which returns field names as keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Record From Natural Language

**Slug:** `AIRTABLE_CREATE_RECORD_FROM_NATURAL_LANGUAGE`

Creates a new record in an Airtable table from a natural language description. Fetches the table schema, uses an LLM to generate the correct field payload, and creates the record with typecast enabled for automatic type conversion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base, typically starting with 'app'. |
| `nl_query` | string | Yes | Natural language description of the record to create. Example: 'Add a task called Fix Login Bug, status In Progress, priority High, due date 2025-03-15'. |
| `typecast` | boolean | No | If True, Airtable will automatically convert string values to their appropriate types (e.g., string to number, date parsing). Enabled by default. |
| `tableIdOrName` | string | Yes | Unique identifier (typically starting with 'tbl') or name of the table within the specified base. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create records

**Slug:** `AIRTABLE_CREATE_RECORDS`

Tool to create multiple records (up to 10) in a specified Airtable table. Use when you need to add new rows to a table with field values. Rate limit: 5 requests per second per base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base. Format: 'app' followed by alphanumeric characters (e.g., 'appHPvgqYXl3LNHXq'). |
| `records` | array | Yes | Array of record objects to create. Each record object must contain a 'fields' property with the cell values. Maximum of 10 records can be created per request. |
| `typecast` | boolean | No | If true, Airtable will perform best-effort automatic data conversion from string values to the appropriate cell type. If false (default), field values must exactly match the expected type. Use with caution as it may produce unexpected results. |
| `tableIdOrName` | string | Yes | The unique identifier or name of the table where records will be created. Table IDs are recommended over names for stability. Format: 'tbl' followed by alphanumeric characters (e.g., 'tblUkxCONS303zkN7'). |
| `returnFieldsByFieldId` | boolean | No | If true, the returned field objects will use field IDs as keys instead of field names. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create table

**Slug:** `AIRTABLE_CREATE_TABLE`

Creates a new table within a specified existing Airtable base, allowing definition of its name, description, and field structure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The desired name for the new table. |
| `fields` | array | Yes | A list of field configurations for the new table. Each must include 'name' (string) and 'type' (string). IMPORTANT: The first field becomes the primary field. Valid primary field types: singleLineText, number, email, url, phoneNumber, date, dateTime, currency, percent, barcode, richText, multilineText, duration. All other field types cannot be primary. Note: formula and autoNumber CAN be primary in the UI but CANNOT be created via the API. If you need a multipleRecordLinks field, place a singleLineText field first as primary. Computed field types (formula, rollup, count, lookup, multipleLookupValues, autoNumber, createdTime, lastModifiedTime) cannot be created via the API. Field types requiring 'options': 'number'/'percent' (precision), 'currency' (precision, symbol), 'checkbox' (color, icon - colors must end in 'Bright', e.g., 'yellowBright'), 'date' (dateFormat), 'dateTime' (dateFormat, timeFormat, timeZone), 'rating' (color, icon, optionally max 1-10 defaults to 5 - colors must end in 'Bright'). For 'singleSelect'/'multipleSelects', provide 'choices' with objects containing 'name' only (no 'id'). For 'multipleRecordLinks', provide 'linkedTableId' (format tblXXXXXXXXXXXXXX). Do NOT include 'isReversed' or 'prefersSingleRecordLink'. |
| `base_id` | string | Yes | The unique identifier of the base where the new table will be created. |
| `if_exists` | string ("error" | "skip" | "return_existing") | No | Options for handling duplicate table name scenarios. |
| `description` | string | No | An optional textual description for the new table. |
| `reorder_message` | string | No | Internal field used to track field reordering messages. This is populated automatically when fields are reordered. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Comment

**Slug:** `AIRTABLE_DELETE_COMMENT`

Tool to delete a comment from a record in an Airtable table. Use when you need to remove an existing comment. Non-admin users can only delete their own comments; Enterprise Admins can delete any comment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base from which the comment will be deleted. |
| `recordId` | string | Yes | The unique identifier of the record within the specified table from which the comment will be deleted. |
| `rowCommentId` | string | Yes | The unique identifier of the comment to be deleted from the specified record. |
| `tableIdOrName` | string | Yes | The unique identifier (ID) or name of the table within the specified base that contains the record and comment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple records

**Slug:** `AIRTABLE_DELETE_MULTIPLE_RECORDS`

Tool to delete up to 10 specified records from a table within an Airtable base. Use when you need to remove multiple records in a single operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the records to be deleted. |
| `recordIds` | array | Yes | A list of unique identifiers for the records to be deleted. |
| `tableIdOrName` | string | Yes | The unique identifier (e.g., 'tbluIzIsxPIM2V3Y4') or the name (e.g., 'Marketing Leads') of the table within the base from which records will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Record

**Slug:** `AIRTABLE_DELETE_RECORD`

Permanently deletes a specific record from an existing table within an existing Airtable base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base, typically starting with 'app'. |
| `recordId` | string | Yes | Unique identifier of the record to be deleted, typically starting with 'rec'. |
| `tableIdOrName` | string | Yes | Unique identifier (typically starting with 'tbl') or name of the table within the specified base. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attachment Info

**Slug:** `AIRTABLE_GET_ATTACHMENT_INFO`

Retrieves attachment information from a specific field in an Airtable record. Returns metadata including file URLs, sizes, types, and thumbnails for all attachments in the specified field. Use this action when you need to access file metadata or download URLs for attachments stored in Airtable. Note that attachment URLs expire 2 hours after being retrieved from the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | ID of the Airtable base containing the record. |
| `recordId` | string | Yes | ID of the record containing the attachment. Must start with 'rec' followed by 14 alphanumeric characters. |
| `tableIdOrName` | string | Yes | ID or name of the table containing the record. |
| `attachmentFieldIdOrName` | string | Yes | Field ID (e.g., 'fldXXXXXXXXXXXXXX') or field name of the attachment field to retrieve information from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Base Schema

**Slug:** `AIRTABLE_GET_BASE_SCHEMA`

Retrieves the detailed schema for a specified Airtable base, including its tables, fields, field types, and configurations, using the `baseId`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier for the Airtable base. This ID typically starts with 'app' and is followed by a string of alphanumeric characters. It can be found in the URL when viewing the base. |
| `include` | array | No | Optional list of additional fields to include in the views object response. Currently only supports the value 'visibleFieldIds' (for views of type 'grid' only). When specified, grid views will include a visibleFieldIds array showing which fields are visible in that view. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Record

**Slug:** `AIRTABLE_GET_RECORD`

Retrieves a specific record from an Airtable table by its record ID. Requires a known, valid record ID obtained from listing records or another API call - this tool cannot search or list records. Use the list records tool to find record IDs. Empty field values are not returned in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | ID of the Airtable base. |
| `recordId` | string | Yes | ID of the record to retrieve. Must be a real record ID obtained from listing records or another API call. Format: starts with 'rec' followed by exactly 14 alphanumeric characters (e.g., 'rec4YsVV8cU6V4EiT'). This tool retrieves a single specific record - to list or search multiple records, use the list records tool instead. |
| `timeZone` | string | No | Time zone for formatting dates when cellFormat='string'. Required when cellFormat='string'. Uses IANA time zone format (e.g., 'America/New_York', 'Europe/London', 'UTC'). |
| `cellFormat` | string ("json" | "string") | No | Controls cell value formatting: 'json' for native types, 'string' for all values as strings. When 'string', timeZone and userLocale are required. |
| `userLocale` | string | No | User locale for formatting dates when cellFormat='string'. Required when cellFormat='string'. Uses BCP 47 language tag format (e.g., 'en-us', 'en-gb', 'de-de'). |
| `tableIdOrName` | string | Yes | ID or name of the table. |
| `returnFieldsByFieldId` | boolean | No | If true, field keys in the response are field IDs; otherwise, field names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user information

**Slug:** `AIRTABLE_GET_USER_INFO`

Retrieves information, such as ID and permission scopes, for the currently authenticated Airtable user from the `/meta/whoami` endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List bases

**Slug:** `AIRTABLE_LIST_BASES`

Retrieves all Airtable bases accessible to the authenticated user, which may include an 'offset' for pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | string | No | Pagination token for retrieving the next page of results. This is an opaque cursor returned in the 'offset' field of a previous list bases response. Pass this exact value to retrieve the next page. Do not construct or modify this value. Only present when there are more than 1,000 bases. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Comments

**Slug:** `AIRTABLE_LIST_COMMENTS`

Tool to list comments on a specific Airtable record. Use when retrieving comments for a record, with optional pagination support for large comment threads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base from which to list comments. |
| `offset` | string | No | Pagination token to retrieve the next page of comments. If specified, the returned comments will begin at the specified offset. Obtained from the previous response. |
| `pageSize` | integer | No | The number of comments to return per page. Must be less than or equal to 100. Defaults to 100 if not specified. |
| `recordId` | string | Yes | The unique identifier of the record for which comments are to be listed. |
| `tableIdOrName` | string | Yes | The unique identifier or name of the table within the specified base containing the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List records

**Slug:** `AIRTABLE_LIST_RECORDS`

Tool to list records from an Airtable table with filtering, sorting, and pagination. Use when you need to retrieve multiple records from a table with optional query parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | Array of sort objects to apply to records. Each object specifies a field and direction. Records are sorted by the first sort object, then by the second, and so on. IMPORTANT: Cannot sort by system metadata fields like 'createdTime' or 'lastModifiedTime' - these are metadata properties returned with records but not sortable fields. To sort by creation/modification time, you must add a 'Created time' or 'Last modified time' field to your table (using those field types in Airtable). |
| `view` | string | No | The name or ID of a view to use for filtering and sorting records. View names are case-sensitive. View IDs (format: 'viwXXXXXXXXXXXXXX') are more reliable than names and not affected by view renames. Use AIRTABLE_GET_BASE_SCHEMA to discover valid views. Note: this parameter is overridden if sort parameter is provided. |
| `baseId` | string | Yes | The ID of the Airtable base. Must start with 'app' followed by 14 characters. |
| `fields` | array | No | Array of field names or IDs to include in the response. If not specified or if ['*'] is passed, all fields are returned. Field names are case-sensitive and must match exactly as they appear in Airtable. The Airtable API accepts both field names and field IDs interchangeably in this parameter, regardless of the returnFieldsByFieldId setting. IMPORTANT: System fields 'id' and 'createdTime' are always returned automatically as part of the record structure - do NOT include them in this parameter. Only specify user-defined table fields here. UNKNOWN_FIELD_NAME errors indicate: (1) a typo or case mismatch, (2) the field was renamed/deleted, or (3) you included a system field name. RECOMMENDED: Use field IDs (format: 'fldXXXXXXXXXXXXXX') for reliable operation. Use AIRTABLE_GET_BASE_SCHEMA to retrieve valid field names and IDs. |
| `offset` | string | No | Opaque pagination cursor token returned in the 'offset' field of a previous list records response. This value must be used exactly as returned by Airtable - do not construct, modify, or decode it. IMPORTANT: Do not pass numeric values like '50' or '100' - these are not valid offsets. Offset tokens are complex opaque strings generated by Airtable. Only pass an offset if you received it from a previous response's 'offset' field. Omit this parameter for the first page of results. |
| `pageSize` | integer | No | Number of records to return per page. Must be between 1 and 100. Defaults to 100. |
| `timeZone` | string ("utc" | "client" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis") | No | The time zone to use for formatting date and time fields. Required when cellFormat is 'string'. If not provided when cellFormat='string', defaults to 'utc'. Examples: 'utc', 'America/New_York', 'Europe/London'. |
| `cellFormat` | string ("json" | "string") | No | Format for cell values. 'json' returns structured JSON values (default), 'string' returns simple string representations. When set to 'string', timeZone and userLocale are required - if not provided, defaults will be auto-populated (timeZone='utc', userLocale='en-US'). |
| `maxRecords` | integer | No | Maximum total number of records to return across all pages. If not specified, all records matching the query will be returned. |
| `userLocale` | string | No | The user locale to use for formatting cell values (e.g., 'en-US', 'fr-FR'). Required when cellFormat is 'string'. If not provided when cellFormat='string', defaults to 'en-US'. |
| `tableIdOrName` | string | Yes | The ID or name of the table within the base. Table IDs start with 'tbl' followed by 14 characters. Table names are case-sensitive and must match exactly as they appear in Airtable. Can also be passed as 'tableId' or 'tableName'. |
| `recordMetadata` | array | No | Array of strings specifying additional metadata to include. Currently supports 'commentCount' to include comment counts on records. |
| `filterByFormula` | string | No | Airtable formula to filter records. SYNTAX REQUIREMENTS: (1) BALANCED PARENTHESES: Every '(' must have a matching ')'. (2) Field names in curly braces: {FieldName} - case-sensitive, must match exactly. (3) String values in quotes: 'value' or "value". (4) Function calls: AND(), OR(), NOT(), FIND(), BLANK(), TODAY(), etc. (5) Escape single quotes by doubling: 'John''s'. DATE/DATETIME FIELD COMPARISONS: Direct string comparison with date fields (e.g., {DateField} >= '2026-04-29') is unreliable. Use date functions instead: IS_AFTER({DateField}, '2026-04-29') checks if date is after the specified date. IS_BEFORE({DateField}, '2026-04-29') checks if date is before the specified date. IS_SAME({DateField}, '2026-04-29', 'day') checks if date matches (with optional unit: 'day', 'month', 'year'). DATESTR({DateField}) converts date to string for text operations. TODAY() returns current date for dynamic comparisons: IS_AFTER({DateField}, TODAY()). For date ranges: AND(IS_AFTER({DateField}, '2026-04-28'), IS_BEFORE({DateField}, '2026-04-30')). FIELD TYPES VS FORMULA FUNCTIONS: ROLLUP, LOOKUP, FORMULA are field types, NOT formula functions usable in filterByFormula. Reference these fields directly by name: {RollupFieldName}. LINKED RECORD FILTERING: Referencing a linked record field directly (e.g., {LinkedFieldName}) returns PRIMARY FIELD VALUES as text, NOT record IDs. To filter by record IDs, create a lookup field for RECORD_ID() from the linked table, then use: FIND('recXXXXXXXXXXXXXX', ARRAYJOIN({RecordIDLookupField})) > 0. DO NOT use array literals like {LinkedField} = ['recXXX'] - Airtable formulas do not support array syntax. DOT NOTATION NOT SUPPORTED: {Assignee}.email, {LinkedRecord}.fieldName are INVALID. Create a lookup field for the property you need, then reference that field: {Assignee Email Lookup}='user@example.com'. COMMON ERRORS: - Field names are CASE-SENSITIVE: '{status}' is NOT '{Status}'. - Missing closing parenthesis. - Unquoted strings: {Status}=Active must be {Status}='Active'. RECOMMENDED: Use AIRTABLE_GET_BASE_SCHEMA to verify exact field names before using them in formulas. |
| `returnFieldsByFieldId` | boolean | No | If true, field keys in the response will be field IDs instead of field names. Recommended when working with field names that contain special characters or when building integrations that need stability across field renames. Note: The 'fields' parameter accepts both field names and field IDs regardless of this setting. filterByFormula always uses field names (enclosed in curly braces like {FieldName}) regardless of this setting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Comment

**Slug:** `AIRTABLE_UPDATE_COMMENT`

Tool to update an existing comment on a specific Airtable record. Use when modifying comment text or updating user mentions using @[userId] syntax. API users can only update comments they have created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The updated comment text. To mention a user, use the format @[userId] (e.g., @[usrGISFlfA7l5F7kY6]). |
| `baseId` | string | Yes | The unique identifier of the Airtable base. This typically starts with 'app'. |
| `recordId` | string | Yes | The unique identifier of the record containing the comment. This typically starts with 'rec'. |
| `rowCommentId` | string | Yes | The unique identifier of the comment to update. This typically starts with 'com'. |
| `tableIdOrName` | string | Yes | The unique identifier (typically starting with 'tbl') or the name of the table within the base. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Field

**Slug:** `AIRTABLE_UPDATE_FIELD`

Updates a field's name or description in an Airtable table. Use this action to modify field metadata without changing the field's type or options. At least one of 'name' or 'description' must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the field. At least one of 'name' or 'description' must be provided. |
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the field. |
| `fieldId` | string | Yes | The ID of the field to update. IMPORTANT: Unlike data API endpoints, the Metadata API requires field IDs - field names are not supported. Field IDs start with 'fld' followed by 14 alphanumeric characters. Use AIRTABLE_GET_BASE_SCHEMA to find field IDs. |
| `tableId` | string | Yes | The ID of the table containing the field to update. IMPORTANT: Unlike data API endpoints, the Metadata API requires table IDs - table names are not supported. Table IDs start with 'tbl' followed by 14 alphanumeric characters. Use AIRTABLE_GET_BASE_SCHEMA to find table IDs. |
| `description` | string | No | The new description for the field. Must not exceed 20,000 characters. At least one of 'name' or 'description' must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update multiple records

**Slug:** `AIRTABLE_UPDATE_MULTIPLE_RECORDS`

Tool to update up to 10 records in an Airtable table with selective field modifications. Use when you need to modify multiple existing records or perform upsert operations. Updates are not performed atomically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The ID of the Airtable base containing the table. |
| `records` | array | Yes | List of records to be updated. Airtable's API limits updates to a maximum of 10 records per request. If you need to update more records, split them into multiple requests of 10 or fewer records each. |
| `typecast` | boolean | No | If true, Airtable attempts automatic data conversion from string values on a best-effort basis (e.g., '123' to 123). |
| `performUpsert` | object | No | Configuration for upsert behavior when updating records. |
| `tableIdOrName` | string | Yes | The ID or name of the table within the base where records will be updated. |
| `returnFieldsByFieldId` | boolean | No | If true, returns field values keyed by field ID instead of field name. Useful for integrations resilient to field name changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update multiple records (PUT)

**Slug:** `AIRTABLE_UPDATE_MULTIPLE_RECORDS_PUT`

Tool to destructively update multiple records in Airtable using PUT, clearing unspecified fields. Use when you need to fully replace record data or perform upsert operations. Supports up to 10 records per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The ID of the Airtable base containing the table. |
| `records` | array | Yes | Array of up to 10 record objects to update. PUT destructively updates records, clearing unspecified fields. |
| `typecast` | boolean | No | If true, Airtable will attempt to convert string values into appropriate cell values. |
| `performUpsert` | object | No | Configuration for upsert behavior. |
| `tableIdOrName` | string | Yes | The ID or name of the table within the base where records will be updated. |
| `returnFieldsByFieldId` | boolean | No | If true, returns fields object keyed by field ID instead of field name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update record

**Slug:** `AIRTABLE_UPDATE_RECORD`

Modifies specified fields of an existing record in an Airtable base and table; the base, table, and record must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the record to be updated. |
| `fields` | object | Yes | Fields to update. Keys are field names (case-sensitive) or IDs (fldXXXX recommended). Only specified fields are modified. Empty strings convert to null. Field names must match Airtable schema exactly (e.g., 'Call Status' not 'call status'). Use AIRTABLE_GET_BASE_SCHEMA for exact names/IDs. Date-only fields require 'YYYY-MM-DD' format. Date-time fields require ISO 8601: 'YYYY-MM-DDTHH:MM:SS.sssZ'. Human-readable dates rejected even with typecast=true. SELECT FIELDS: With typecast=false (default), only existing select options accepted; new values fail with INVALID_MULTIPLE_CHOICE_OPTIONS. Set typecast=true to auto-create new options or verify existing options via AIRTABLE_GET_BASE_SCHEMA first. |
| `recordId` | string | Yes | The unique identifier (ID) of the record to be updated within the specified table. MUST be in Airtable's record ID format: exactly 17 characters starting with 'rec' followed by 14 alphanumeric characters (e.g., 'recABC123def456G'). Simple numeric values or row numbers are NOT valid record IDs. You can obtain valid record IDs from the AIRTABLE_LIST_RECORDS action or the Airtable web interface. |
| `typecast` | boolean | No | Enables automatic data conversion and select option creation. CRITICAL FOR SELECT FIELDS: When false (default), Airtable rejects updates to single-select or multi-select fields if the value is not already an existing option, failing with 'Insufficient permissions to create new select option' error. When true: (1) automatically creates new select options if they don't exist, and (2) converts strings to appropriate types for other fields (e.g., '123' to number 123). RECOMMENDED: Set to true when updating select fields with potentially new values, or use AIRTABLE_GET_BASE_SCHEMA to verify option existence first. Set to false only when you want strict validation against existing options. |
| `tableIdOrName` | string | Yes | The unique identifier (ID) or the name of the table within the base that contains the record to be updated. Also accepts 'tableId' as an alias. |
| `returnFieldsByFieldId` | boolean | No | If `True`, API response keys record fields by field ID instead of name. Using field IDs is recommended for integrations resilient to field name changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update record (PUT)

**Slug:** `AIRTABLE_UPDATE_RECORD_PUT`

Updates an existing record in an Airtable base using PUT method. Use when you want to replace all field values, clearing any unspecified fields. For partial updates that preserve unspecified fields, use the PATCH-based update action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the record to be updated. |
| `fields` | object | Yes | Specifies fields to update. Keys are field names or IDs; values are new content. PUT method clears all unspecified cell values (destructive update). Empty strings are automatically converted to null to clear field values. For Date fields: use 'YYYY-MM-DD' format for date-only fields, or ISO 8601 format (e.g., '2026-01-02T10:30:00.000Z') for date-time fields. Set typecast=true to enable automatic format conversion. |
| `recordId` | string | Yes | The unique identifier (ID) of the record to be updated within the specified table. |
| `typecast` | boolean | No | When set to true, enables automatic data conversion from strings to appropriate field types. For example, converts string '123' to number 123. Default is false. |
| `tableIdOrName` | string | Yes | The unique identifier (ID) or the name of the table within the base that contains the record to be updated. |
| `returnFieldsByFieldId` | boolean | No | If `True`, API response keys record fields by field ID instead of name. Using field IDs is recommended for integrations resilient to field name changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Table

**Slug:** `AIRTABLE_UPDATE_TABLE`

Updates the name, description, and/or date dependency settings of a table in Airtable. Use this action to modify table metadata without changing the table's fields or views. At least one of 'name', 'description', or 'dateDependencySettings' must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the table. Must be non-empty if provided. At least one of 'name', 'description', or 'dateDependencySettings' must be provided. |
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the table to update. |
| `description` | string | No | The new description for the table. Must not exceed 20,000 characters. At least one of 'name', 'description', or 'dateDependencySettings' must be provided. |
| `tableIdOrName` | string | Yes | The unique identifier or name of the table to update. |
| `dateDependencySettings` | object | No | Configuration for date-based task scheduling in Airtable tables. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload attachment

**Slug:** `AIRTABLE_UPLOAD_ATTACHMENT`

Uploads a file attachment to a specified field in an Airtable record. Use when you need to add a file to an attachment field. The file must be provided as a base64-encoded string.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | string | Yes | The file content encoded as a base64 string. This is the base64-encoded binary content of the file to be uploaded. |
| `baseId` | string | Yes | The unique identifier of the Airtable base containing the record. |
| `filename` | string | Yes | The name of the file including its extension (e.g., 'test.txt', 'document.pdf', 'image.jpg'). |
| `recordId` | string | Yes | The unique identifier of the record to which the attachment will be uploaded. |
| `contentType` | string | Yes | MIME type of the file being uploaded (e.g., 'text/plain', 'image/jpeg', 'application/pdf'). |
| `attachmentFieldIdOrName` | string | Yes | The field ID (e.g., 'fldXXXXXXXXXXXXXX') or field name of the attachment field where the file will be uploaded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `AIRTABLE_WHO_AM_I`

Return the identity (email) of the connected Airtable account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Base Metadata Changed

**Slug:** `AIRTABLE_BASE_METADATA_CHANGED_TRIGGER`

**Type:** poll

Triggers when an existing Airtable base changes its name or permission level.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `base_id` | string | Yes | The unique identifier of the base. |
| `change_type` | string | Yes | Type of metadata change: name_changed, permission_changed, or both_changed. |
| `event_type` | string | No | Type of event that occurred. |
| `new_metadata` | object | Yes | Current metadata for the base after the change. |
| `old_metadata` | object | No | Snapshot of the Airtable base metadata we track. |

### Base Schema Changed

**Slug:** `AIRTABLE_BASE_SCHEMA_CHANGED_TRIGGER`

**Type:** poll

Triggers when tables, fields, or views change in an Airtable base.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base to monitor. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `change_type` | string | Yes | Type of schema change: table_added, table_deleted, table_modified, field_added, field_deleted, field_modified, view_added, view_deleted, or view_modified. |
| `details` | object | No | Additional change details, including old and new snapshots. |
| `event_type` | string | No | Type of event that occurred. |
| `item_id` | string | No | Unique identifier of the affected field or view, if applicable. |
| `item_name` | string | No | Display name of the affected field or view, if applicable. |
| `table_id` | string | Yes | Unique identifier of the affected table. |
| `table_name` | string | Yes | Display name of the affected table. |

### User Profile Changed

**Slug:** `AIRTABLE_USER_PROFILE_CHANGED_TRIGGER`

**Type:** poll

Triggers when the connected Airtable user's profile information changes.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `changed_fields` | object | Yes | Dictionary describing the old and new value for each changed field. |
| `event_type` | string | No | Type of event that occurred. |
| `user_id` | string | Yes | Unique identifier of the user. |

### View Created

**Slug:** `AIRTABLE_VIEW_CREATED_TRIGGER`

**Type:** poll

Triggers when a new view is created in an Airtable base.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base to monitor. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `tableId` | string | No | Optional Airtable table ID. If provided, only this table is monitored. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `base_id` | string | Yes | Base ID that owns the table. |
| `event_type` | string | No | Type of event that occurred. |
| `table` | object | Yes | Table that owns the new view. |
| `view` | object | Yes | The newly created Airtable view. |

### View Deleted

**Slug:** `AIRTABLE_VIEW_DELETED_TRIGGER`

**Type:** poll

Triggers when a previously known Airtable view is deleted.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base to monitor. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | No | Type of event that occurred. |
| `view` | object | Yes | Metadata of the deleted view. |

### View Metadata Changed

**Slug:** `AIRTABLE_VIEW_METADATA_CHANGED_TRIGGER`

**Type:** poll

Triggers when an Airtable view changes its name or type.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | Yes | Unique identifier of the Airtable base to monitor. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `tableId` | string | No | Optional Airtable table ID. If provided, only this table is monitored. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `base_id` | string | Yes | Base containing the changed view. |
| `changes` | object | Yes | Dictionary describing the old and new value for each changed field. |
| `event_type` | string | No | Type of event that occurred. |
| `new_metadata` | object | Yes | Current metadata for the changed view. |
| `old_metadata` | object | No | Basic view metadata used for snapshot diffing. |
| `table` | object | Yes | Table containing the changed view. |
| `view_id` | string | Yes | Unique identifier of the changed view. |
