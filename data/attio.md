# Attio

Attio is a fully customizable workspace for your team's relationships and workflows.

- **Category:** crm
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 109
- **Triggers:** 0
- **Slug:** `ATTIO`
- **Version:** 20260909_00

## Tools

### Assert Company (Create or Update)

**Slug:** `ATTIO_ASSERT_COMPANY`

Creates or updates a company record in Attio using a unique attribute to search for existing companies. If a company is found with the same value for the matching attribute, that company will be updated. If no company is found, a new one will be created. Use this when you prefer to update records on conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the company. Optional but recommended. |
| `team` | array | No | List of team member email addresses to associate with this company. These should be email addresses of people records in your workspace. |
| `domain` | string | No | Single website domain for the company (automatically converted to list format). Use this for convenience when providing a single domain. Alternatively, use 'domains' to provide multiple domains at once. |
| `domains` | array | No | List of website domains for the company. If matching_attribute is 'domains', either 'domain' or 'domains' is typically required. For multiselect attributes like domains, new values will be added and existing values will not be deleted. Provide as simple strings (e.g., ['example.com', 'example.org']). |
| `description` | string | No | Description or summary of the company |
| `primary_location` | string | No | Physical business address of the company. Use string format: '1 Infinite Loop, Cupertino, CA, 95014, US' (recommended). Alternatively, you can provide an object with all 10 location fields. |
| `matching_attribute` | string | Yes | The ID or slug of the attribute used to check if a company already exists. Must be an attribute with a uniqueness constraint. If a company is found with the same value for this attribute, it will be updated. If no company is found, a new one will be created. Common examples: 'domains' (most common) or any custom unique attribute slug. WARNING: 'name' is NOT a unique attribute and cannot be used as a matching attribute. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assert Person Record

**Slug:** `ATTIO_ASSERT_PERSON`

Tool to create or update person records using a unique attribute to search for existing people. Use when you want to ensure a person exists with specific details without creating duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Dictionary of attribute slugs to values. **CRITICAL**: The matching attribute specified in 'matching_attribute' MUST be included in the values. **ATTRIBUTE FORMATS**: (1) 'email_addresses': Use [{'email_address': 'john@example.com'}] or ['john@example.com']. (2) 'name': Use [{'first_name': 'John', 'last_name': 'Doe', 'full_name': 'John Doe'}] or [{'full_name': 'John Doe'}]. Both first_name and last_name are required by the API (default to empty string if not provided). (3) 'phone_numbers': Use [{'original_phone_number': '+15558675309', 'country_code': 'US'}]. (4) 'primary_location': Use string format like '1 Infinite Loop, Cupertino, CA, 95014, US'. (5) 'company': Use [{'target_object': 'companies', 'target_record_id': '<company_uuid>'}] for record reference. (6) 'linkedin': Use simple string URL. **MULTISELECT BEHAVIOR**: If the matching attribute is a multiselect, new values are added (existing kept). For other multiselect attributes, values are synced to match the supplied list. |
| `matching_attribute` | string | Yes | The ID or slug of the unique attribute to check if a person already exists. For person records, email_addresses is the only unique attribute by default. If a person is found with the same value for this attribute, that person will be updated. If no person with the same value is found, a new person will be created instead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assert User Record (Create or Update)

**Slug:** `ATTIO_ASSERT_USER_RECORD`

Creates or updates a user record in Attio using a unique attribute to search for existing users. If a user is found with the same value for the matching attribute, that user will be updated. If no user is found, a new one will be created. Use this to ensure user records exist without duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | The attribute values for the user record as a dictionary where keys are attribute slugs and values are the attribute data. **CRITICAL - MATCHING ATTRIBUTE BEHAVIOR**: The matching attribute specified in the 'matching_attribute' parameter MUST be included in the values. **ATTRIBUTE FORMATS**: (1) 'primary_email_address': Use [{'email_address': 'user@example.com'}] or ['user@example.com'] format. (2) 'user_id': Use [{'value': 'user_123'}] or simple string value. (3) 'person': Use [{'target_object': 'people', 'target_record_id': '<person_uuid>'}] for record reference. (4) 'workspace': Use [{'target_object': 'workspaces', 'target_record_id': '<workspace_uuid>'}] for record reference. **MULTISELECT BEHAVIOR**: If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values. |
| `matching_attribute` | string | Yes | The ID or slug of the unique attribute to check if a user record already exists. Must be a unique attribute. If a user is found with the same value for this attribute, it will be updated. If no user is found, a new one will be created. Common examples: 'primary_email_address', 'user_id', or any custom unique attribute slug. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assert Workspace (Create or Update)

**Slug:** `ATTIO_ASSERT_WORKSPACE`

Creates or updates a workspace record in Attio using a unique attribute to search for existing workspaces. If a workspace is found with the same value for the matching attribute, that workspace will be updated. If no workspace is found, a new one will be created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the workspace. |
| `users` | array | No | List of user record IDs to associate with this workspace. These should be UUIDs of user records in your Attio workspace. Format: provide as list of record IDs which will be converted to record references. |
| `company` | string | No | Company record ID to associate with this workspace. This should be the UUID of a company record in your Attio workspace. Will be converted to a record reference. |
| `avatar_url` | string | No | URL to the workspace's avatar image. |
| `workspace_id` | string | No | The unique identifier for the workspace. Use this when matching_attribute is 'workspace_id'. |
| `matching_attribute` | string | Yes | The ID or slug of the attribute used to check if a workspace already exists. Must be a unique attribute. If a workspace is found with the same value for this attribute, it will be updated. If no workspace is found, a new one will be created. Common examples: 'workspace_id' (most common), 'name', or any custom unique attribute slug. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Attribute

**Slug:** `ATTIO_CREATE_ATTRIBUTE`

Tool to create a new attribute on an object or list in Attio. Use when you need to add custom fields to track additional information. For record-reference types, you can establish bidirectional relationships by supplying a relationship object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Attribute type: text, number, checkbox, currency, date, timestamp, rating, status, select, record-reference, actor-reference, location, domain, email-address, phone-number, interaction, personal-name |
| `title` | string | Yes | Display name for the attribute |
| `config` | object | Yes | Type-specific configuration settings (required for currency and record-reference types) |
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or list. |
| `api_slug` | string | Yes | Snake-case identifier for API calls (e.g., 'custom_field') |
| `is_unique` | boolean | No | Whether values must be distinct across records. Uniqueness restrictions apply only to new data, not retroactively. Some attribute types (e.g., 'select') do not support unique constraints; the API will return an error if incompatible. |
| `identifier` | string | Yes | A UUID or slug identifying the object or list to create the attribute on |
| `description` | string | No | Explanatory text about the attribute |
| `is_required` | boolean | No | Whether new records must have a value for this attribute. Note: Required attributes (is_required=true) are not permitted on lists; only custom objects support required attributes. |
| `relationship` | object | No | Bidirectional relationship configuration for record-reference attributes |
| `default_value` | object | No | Initial value assignment strategy |
| `is_multiselect` | boolean | No | Whether the attribute permits multiple values |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Comment

**Slug:** `ATTIO_CREATE_COMMENT`

Tool to create a new comment on a thread, record, or list entry in Attio. Use when you need to add a comment to an existing conversation, a record (like a person, company, or deal), or a list entry.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entry` | object | No | Reference to a list entry to attach the comment to. |
| `author` | object | Yes | The workspace member who wrote this comment. Must include type='workspace-member' and the UUID of the workspace member. |
| `format` | string ("plaintext") | No | Format of the comment content. Currently only 'plaintext' is supported. Uses line feed character \n for new lines. |
| `record` | object | No | Reference to a record to attach the comment to. |
| `content` | string | Yes | The plaintext content of the comment. Use \n for line breaks. |
| `thread_id` | string | No | UUID of an existing thread to add the comment to. Mutually exclusive with 'record' and 'entry'. Use this when adding a comment to an existing conversation thread. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Company

**Slug:** `ATTIO_CREATE_COMPANY`

Creates a new company record in Attio. This endpoint will throw an error on conflicts of unique attributes like domains. If you prefer to update company records on conflicts, use the Assert company record endpoint instead. Note: The logo_url attribute cannot currently be set via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the company. Optional but recommended. |
| `team` | array | No | List of team member email addresses to associate with this company. These should be email addresses of people records in your workspace. |
| `domains` | array | No | List of website domains for the company. This field has a uniqueness constraint - the endpoint will throw an error if any domain conflicts with an existing company record. If you prefer to update records on conflicts instead, use the Assert company record endpoint. Provide as simple strings (e.g., ['example.com', 'example.org']). |
| `description` | string | No | Description or summary of the company |
| `primary_location` | string | No | Physical business address of the company. Use string format: '1 Infinite Loop, Cupertino, CA, 95014, US' (recommended). Alternatively, you can provide an object with all 10 location fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deal Record

**Slug:** `ATTIO_CREATE_DEAL_RECORD`

Tool to create a new deal record in Attio. Use when you need to track a new sales opportunity or deal. This endpoint will throw an error on conflicts of unique attributes. Minimal requirement is providing at least one attribute value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the deal. Optional but recommended. |
| `stage` | string | No | The status/stage of the deal. Can be the status UUID or status title (e.g., 'Lead', 'In Progress', 'Won', 'Lost'). |
| `value` | number | No | The monetary value of the deal. Decimal number with max 4 decimal places. |
| `owner_id` | string | No | UUID of the workspace member who owns this deal. Use owner_email instead if you have the email address. |
| `owner_email` | string | No | Email address of the workspace member who owns this deal. This is the preferred way to set the owner. |
| `associated_company_id` | string | No | Company record UUID to associate with this deal. Use this if you have the company record ID. |
| `associated_people_ids` | array | No | List of person record UUIDs to associate with this deal. Use this if you have the person record IDs. |
| `associated_people_emails` | array | No | List of email addresses to associate people with this deal. The system will find matching person records by email address. |
| `associated_company_domain` | string | No | Domain name to associate a company with this deal. The system will find the matching company record by domain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Entry (Deprecated)

**Slug:** `ATTIO_CREATE_ENTRY`

DEPRECATED: Use ATTIO_ATTIO_POST_V2_LISTS_LIST_ENTRIES instead. Tool to add a record to a list as a new list entry in Attio. Use when you need to organize records into specific lists. Throws errors on unique attribute conflicts. Multiple list entries are allowed for the same parent record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | A UUID or slug identifying the list to add the entry to |
| `entry_values` | object | No | Custom attribute values for the list entry. Field values organized by attribute slug or ID. For multiselect attributes, all values must be specified |
| `parent_object` | string | Yes | The UUID or slug of the parent object type (e.g., 'people', 'companies') |
| `parent_record_id` | string | Yes | The UUID of the record being added to the list |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create List

**Slug:** `ATTIO_CREATE_LIST`

Tool to create a new list in Attio. Use when you need to organize records into custom lists. Once created, add attributes using the Create Attribute API and add records using the Create Entry API. New lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The human-readable name of the list |
| `api_slug` | string | Yes | A unique, human-readable slug to access the list through API calls. Should be formatted in snake case |
| `parent_object` | string | Yes | A UUID or slug to identify the allowed object type for records added to this list (e.g., 'people', 'companies') |
| `workspace_access` | string | Yes | The level of access granted to all members of the workspace for this list. Pass null to keep the list private and only grant access to specific workspace members. Note: New lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level |
| `workspace_member_access` | array | Yes | The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members. Note: New lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Note

**Slug:** `ATTIO_CREATE_NOTE`

This tool creates a new note on a given record in Attio. The note can be attached to any record type (like person, company, or deal) and includes a title and content. It requires parameters such as parent_object, parent_record_id, title, and content, with an optional created_at timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the note |
| `content` | string | Yes | The content of the note |
| `created_at` | string | No | Optional timestamp for when the note was created (ISO 8601 format) |
| `parent_object` | string | Yes | The object type the note is associated with. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. |
| `parent_record_id` | string | Yes | **MUST BE A VALID UUID** - The unique identifier of the specific record within the object. Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (32 hexadecimal characters with hyphens). Do NOT use placeholder strings like 'COMPANY_ID' or 'RECORD_ID' - only actual UUIDs are accepted. Obtain this value from previous API responses (e.g., ATTIO_CREATE_RECORD, ATTIO_FIND_RECORD, ATTIO_LIST_RECORDS). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Object

**Slug:** `ATTIO_CREATE_OBJECT`

Tool to create a new custom object in your Attio workspace. Use when you need to add a new object type beyond the standard objects (people, companies, deals, users, workspaces). Requires api_slug (snake_case identifier), singular_noun, and plural_noun.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The object configuration with API slug, singular noun, and plural noun. All three fields are required when creating a new object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Person

**Slug:** `ATTIO_CREATE_PERSON`

Creates a new person record in Attio. This endpoint will throw an error on conflicts of unique attributes like email_addresses. If you prefer to update person records on conflicts instead, use the Assert person record endpoint. Note: The avatar_url attribute cannot currently be set via the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | array | No | Person's name. Provide as array with first_name, last_name, and/or full_name. If only full_name is provided, it will be auto-split into first_name and last_name. If only first_name and/or last_name are provided, full_name will be auto-generated. |
| `company` | array | No | Associated company record IDs (UUIDs) to link this person to companies |
| `linkedin` | string | No | LinkedIn profile URL |
| `job_title` | string | No | Person's job title |
| `description` | string | No | Description of the person |
| `phone_numbers` | array | No | Person's phone numbers in E.164 international format (leading '+' and country code, e.g. '+15558675309', '+442071234567'). 10-digit numeric inputs are auto-prefixed with '+1' (US). Common formatting characters (spaces, dashes, parens, dots) are stripped. Numbers that cannot be normalized are rejected with a helpful error. |
| `email_addresses` | array | No | Person's email addresses. This field has a uniqueness constraint - the endpoint will throw an error if any email conflicts with an existing person record. If you prefer to update records on conflicts instead, use the Assert person record endpoint. |
| `primary_location` | string | No | Person's primary location. Use string format: '1 Infinite Loop, Cupertino, CA, 95014, US' (recommended). Alternatively, you can provide an object with location fields like line_1, line_2, city, state, postal_code, country_code, etc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Record

**Slug:** `ATTIO_CREATE_RECORD`

This tool creates a new record in Attio for a specified object type (people, companies, deals, users, workspaces, etc.). It requires the object type and a values dictionary containing the attributes for the new record. IMPORTANT: Different object types have different attributes. For example: - 'people' object uses: name, email_addresses, phone_numbers, primary_location, job_title, etc. - 'users' object uses: primary_email_address, user_id, person, workspace - 'companies' object uses: name, domains, description, etc. Always verify the correct attribute names for your target object type before creating records. Use the List Attributes API or check your workspace to see available attributes for each object type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Attribute values for the new record. Keys are attribute slugs, values are attribute data. CRITICAL: Call ATTIO_LIST_ATTRIBUTES (target='objects', identifier=<object_type>) to discover valid slugs and required attributes (is_required=true) BEFORE creating records. Do NOT guess attribute names. **OBJECT-SPECIFIC ATTRIBUTES**: (1) 'people': 'name' (personal-name), 'email_addresses', 'phone_numbers', 'primary_location', 'job_title', 'company' (record-reference to companies). (2) 'companies': 'name' (text), 'domains', 'description', 'primary_location', 'team' (record-reference to people). (3) 'deals': 'name' (deal title), 'owner' (actor-reference), 'stage' (status), 'value' (currency), 'associated_company' (record-reference to companies), 'associated_people' (record-reference to people). (4) 'users': 'primary_email_address', 'user_id', 'person', 'workspace'. (5) Custom objects: slugs are workspace-specific, always use List Attributes. **VALUE FORMATS**: Multi-value attributes (email-address, phone-number, personal-name, location, domain) require arrays. Single-value attributes (text, number) accept simple values or single-element arrays. personal-name: requires 'first_name', 'last_name', 'full_name' (full_name auto-generated if omitted). email-address: use 'email_address'. phone-number: use 'original_phone_number'. **ACTOR-REFERENCE** (e.g., 'owner', 'created_by'): Reference workspace members by email address. Formats: email string, array with email, or object with workspace_member_email_address field. **RECORD-REFERENCE** (e.g., 'company', 'associated_company'): Include target_object (API slug, e.g., 'people', 'companies') and target_record_id (UUID). Format: [{"target_object": "<slug>", "target_record_id": "<uuid>"}]. **STATUS** (e.g., 'stage' for deals): Format: [{"status": "<title_or_uuid>"}]. Use ATTIO_LIST_ATTRIBUTE_STATUSES to get available statuses. **LOCATION**: Use string format (recommended) or object with fields: line_1, line_2, line_3, line_4, locality, region, postcode, country_code, latitude, longitude. **DOMAIN**: use ["example.com"] or [{"domain": "example.com"}]. 'root_domain' is output-only. **CURRENCY**: Use [{"currency_value": 1000.00}] or simple number. |
| `object_type` | string | Yes | The type of object to create a record for. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. IMPORTANT: Each object type has different attributes - you must use the correct attribute names for the specific object type you're creating. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Select Option

**Slug:** `ATTIO_CREATE_SELECT_OPTION`

Tool to add a new select option to a select or multiselect attribute in Attio. Use when you need to add a new choice to an existing select field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data for the new select option |
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list |
| `attribute` | string | Yes | A UUID or slug to identify the select or multiselect attribute |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the select attribute belongs to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Status

**Slug:** `ATTIO_CREATE_STATUS`

Tool to add a new status to a status attribute on either an object or a list. Use when you need to create a new status option for status attributes. Company and person objects do not support status attributes at this time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The status data containing the title and optional configuration. |
| `target` | string ("lists" | "objects") | Yes | Whether the attribute is on an object or a list. Note that company and person objects do not support status attributes at this time. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute the status will belong to. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the status attribute belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Task

**Slug:** `ATTIO_CREATE_TASK`

Tool to create a new task in Attio. Use when you need to add a task with content and optional deadline, assignees, or linked records. Note: Tasks can only be created from plaintext without record reference formatting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | Yes | The text content of the task. A maximum length of 2000 characters is enforced. |
| `assignees` | array | No | Workspace members assigned to this task. Provide an array of objects with 'referenced_actor_type' and 'referenced_actor_id' properties. |
| `deadline_at` | string | No | The deadline of the task, in ISO 8601 format. Set to null if no deadline. |
| `is_completed` | boolean | No | Whether the task has been completed. |
| `linked_records` | array | No | Records linked to the task. Provide an array of objects with 'target_object' and 'target_record_id' properties. Creating record links within task content text is not possible via the API at present. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User Record

**Slug:** `ATTIO_CREATE_USER_RECORD`

Creates a new user record in Attio. User records represent workspace members or users in the system. Requires primary_email_address, user_id, and workspace_id. Optionally link to an existing person record. Note: Required attributes may vary based on workspace configuration - check the List Attributes action if you encounter missing_value errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier for the user. This should be a unique string value that identifies the user in your system. |
| `person_id` | string | No | Optional UUID of a person record to link this user to. If provided, this associates the user with an existing person in the workspace. |
| `workspace_id` | string | Yes | UUID of the workspace this user should belong to. Get workspace IDs using the List Workspace Records action. |
| `primary_email_address` | string | Yes | Primary email address for the user. This is the email that will be used for user authentication and notifications. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook

**Slug:** `ATTIO_CREATE_WEBHOOK`

Tool to create a webhook and subscribe to events in Attio. Use when you need to set up a new webhook endpoint to receive real-time event notifications. Returns the webhook configuration including a one-time signing secret for verifying event authenticity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target_url` | string | Yes | URL where the webhook events will be delivered to. Must be an HTTPS URL starting with 'https://'. |
| `subscriptions` | array | Yes | One or more event subscriptions for the webhook. Each subscription specifies an event type and optional filter conditions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Workspace Record

**Slug:** `ATTIO_CREATE_WORKSPACE_RECORD`

Creates a new workspace record in Attio. The workspace_id field is required and must be unique. This endpoint will throw an error on conflicts of unique attributes. Use when you need to create a new workspace entry in your Attio workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the workspace |
| `users` | array | No | User records associated with this Workspace (record-reference type). Format: [{'target_object': 'users', 'target_record_id': '<uuid>'}] |
| `company` | object | No | A related Company record (record-reference type). Format: {'target_object': 'companies', 'target_record_id': '<uuid>'} |
| `avatar_url` | string | No | The URL of an avatar image |
| `workspace_id` | string | Yes | A unique identifier for this Workspace in your system. This is a required and unique attribute. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Comment

**Slug:** `ATTIO_DELETE_COMMENT`

Tool to delete a comment by its comment_id. Use when you need to remove a comment from Attio. If the comment is at the head of a thread, all messages in the thread are also deleted. The operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | The ID of the comment to delete. If deleting a comment at the head of a thread, all messages in the thread are also deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Company

**Slug:** `ATTIO_DELETE_COMPANY`

Tool to delete a company record from Attio by its record_id. Use when you need to permanently remove a company record. The deletion is irreversible and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier (UUID) of the company record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deal

**Slug:** `ATTIO_DELETE_DEAL`

Tool to delete a deal record from Attio by its record_id. Use when you need to permanently remove a deal record. The deletion is irreversible and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier (UUID) of the deal record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete List Entry

**Slug:** `ATTIO_DELETE_ENTRY`

Tool to delete a single list entry by its entry_id in Attio. Use when you need to remove an entry from a specific list. The operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug identifying the list the entry is in |
| `entry_id` | string | Yes | A UUID identifying the entry to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Note

**Slug:** `ATTIO_DELETE_NOTE`

This tool allows users to delete a specific note in Attio by its ID. It is implemented via DELETE https://api.attio.com/v2/notes/{note_id} and handles note deletion by validating the provided note_id. It complements ATTIO_CREATE_NOTE functionality, providing complete note management capabilities within the Attio platform.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | The ID of the note to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Person

**Slug:** `ATTIO_DELETE_PERSON`

Tool to delete a person record from Attio by its record_id. Use when you need to permanently remove a person record. The deletion is irreversible and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier (UUID) of the person record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Record

**Slug:** `ATTIO_DELETE_RECORD`

This tool allows you to delete a record from Attio permanently. The deletion is irreversible, and the data will eventually be removed from the system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier of the record to delete |
| `object_type` | string | Yes | The type of object to delete. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Task

**Slug:** `ATTIO_DELETE_TASK`

Tool to delete a task by its task_id. Use when you need to remove a task from Attio. The operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User

**Slug:** `ATTIO_DELETE_USER`

Tool to delete a user record from Attio by its record_id. Use when you need to permanently remove a user record. The deletion is irreversible and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The unique identifier (UUID) of the user record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Webhook

**Slug:** `ATTIO_DELETE_WEBHOOK`

Tool to delete a webhook by its webhook_id. Use when you need to remove a webhook subscription from Attio. The operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | A UUID identifying the webhook to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Workspace Record

**Slug:** `ATTIO_DELETE_WORKSPACE_RECORD`

Tool to delete a workspace record from Attio by its record_id. Use when you need to permanently remove a workspace record. The deletion is irreversible and cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | The UUID of the workspace record to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Record

**Slug:** `ATTIO_FIND_RECORD`

This tool allows users to find a record in Attio by either its unique ID or by searching using unique attributes. It provides two methods: one for directly retrieving a record by its ID with the GET /v2/objects/{object}/records/{record_id} endpoint, and another for searching by attributes using the POST /v2/objects/{object}/records/query endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return when searching. |
| `offset` | integer | No | Number of records to skip for pagination |
| `object_id` | string | Yes | The UUID or slug identifying the object type to search in. Standard object type slugs include 'people', 'companies', 'deals', 'users', 'workspaces'. Note: 'lists' is NOT a valid object type - use list-specific actions (e.g., ATTIO_LIST_LISTS, ATTIO_LIST_LIST_ENTRIES) to work with lists. Can also use 'object_type' as an alias for this field. |
| `record_id` | string | No | The unique ID of the record to retrieve directly |
| `attributes` | object | No | Dictionary of attributes to search by using attribute slugs. CRITICAL: Validate slugs via ATTIO_LIST_ATTRIBUTES (target='objects', identifier=<object_id>) before filtering. System attributes (e.g., 'email_addresses', 'name') are consistent across workspaces; custom attributes vary and invalid slugs cause 'unknown_filter_attribute_slug' errors.  Filtering syntax: - Simple values use shorthand ($eq implied) - Single-element lists unwrap to shorthand - Multi-element lists convert to $or conditions - Dict values with operators ({'$eq': v}, {'$contains': v}, {'$not_empty': true}) pass through unchanged - Select/multi-select: use Attio option slugs or IDs (not plain text) - Record-reference (e.g., 'team', 'company'): to filter by referenced record attributes, use path filtering: {'path': [['object', 'attribute'], ['target_object', 'target_attribute']], 'constraints': {...}}. Nested field syntax like {'team': {'name': {...}}} is NOT supported. To filter by record_id directly: {'attribute_slug': {'target_object': 'type', 'target_record_id': 'uuid'}}. - Interaction attributes (e.g., 'last_email_interaction'): filter on sub-properties: owner_actor (nested type/id), interacted_at ($eq/$gte/$gt/$lte/$lt, ISO 8601), interaction_type ($eq/$not_empty) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Attribute Details

**Slug:** `ATTIO_GET_ATTRIBUTE`

Tool to get information about a single attribute on either an object or a list. Use when you need detailed information about a specific attribute's configuration, type, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute to retrieve. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the attribute belongs to. For objects, use slugs like 'people', 'companies', 'deals', or a UUID. For lists, use the list slug or UUID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Call Recording

**Slug:** `ATTIO_GET_CALL_RECORDING`

Tool to get a single Attio call recording by its meeting and recording IDs, including transcript segments and the raw transcript when available.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meeting_id` | string | Yes | The UUID of the meeting that the call recording belongs to. |
| `call_recording_id` | string | Yes | The UUID of the call recording to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Comment

**Slug:** `ATTIO_GET_COMMENT`

Tool to get a single comment by its comment_id in Attio. Use when you need to retrieve detailed information about a specific comment, including its content, author, thread, and resolution status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | A UUID which identifies the comment to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company

**Slug:** `ATTIO_GET_COMPANY`

Tool to get a single company record by its record_id in Attio. Use when you need to retrieve detailed information about a specific company. Returns all attribute values for the company with temporal and audit metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | UUID identifying the company record to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deal Record

**Slug:** `ATTIO_GET_DEAL_RECORD`

Tool to get a single deal record by its record_id in Attio. Use when you need to retrieve detailed information about a specific deal. Returns all attribute values for the deal with temporal and audit metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | UUID identifying the deal record to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List

**Slug:** `ATTIO_GET_LIST`

Tool to retrieve details of a single list in your Attio workspace. Use when you need to get information about a specific list by its UUID or slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug to identify the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List Entry

**Slug:** `ATTIO_GET_LIST_ENTRY`

Tool to get a single list entry by its entry_id. Use when you need to retrieve detailed information about a specific entry in an Attio list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug identifying the list the entry is in. |
| `entry_id` | string | Yes | A UUID identifying the entry. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Note

**Slug:** `ATTIO_GET_NOTE`

Tool to get a single note by its note_id in Attio. Use when you need to retrieve detailed information about a specific note, including its title, content (plaintext and markdown), tags, and creator information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | A UUID which identifies the note to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Object

**Slug:** `ATTIO_GET_OBJECT`

Tool to get a single object by its object_id or slug. Use to retrieve detailed schema information about a specific object type in the Attio workspace. Also use as a prerequisite validation step before calling ATTIO_FIND_RECORD, ATTIO_LIST_RECORDS, or ATTIO_CREATE_RECORD — attribute slugs must exactly match what this tool returns. The returned schema defines required attributes for record creation; omitting them causes invalid_request_error with code missing_value (HTTP 400). Custom attributes (e.g., industry, category) vary by object type — verify their presence and data type here before building filters or record values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | A UUID or slug to identify the object. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. Use ATTIO_LIST_OBJECTS alongside this tool to confirm object slugs — some concepts (e.g., tasks) may be modeled as deals or custom objects rather than dedicated types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Record

**Slug:** `ATTIO_GET_RECORD`

DEPRECATED: Use ATTIO_FIND_RECORD instead. Tool to get a single person, company, or other record by its record_id in Attio. Use when you need to retrieve detailed information about a specific record. Returns all attribute values for the record with temporal and audit metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | A UUID identifying the record Must be paired with the correct object_type — using a record_id from one object type with a different object_type will fail. Always use object_type and record_id together as retrieved from prior responses. |
| `object_type` | string | Yes | A UUID or slug identifying the object that the record belongs to. Can also use 'object' as an alias for this field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Record Entries

**Slug:** `ATTIO_GET_RECORD_ENTRIES`

Tool to list all entries, across all lists, for which a record is the parent. Use when you need to find which lists a specific record belongs to. Returns list IDs, slugs, entry IDs, and creation timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to return. The default is 100 and the maximum is 1000. |
| `object` | string | Yes | A UUID or slug identifying the object that the record belongs to. |
| `offset` | integer | No | The number of results to skip over before returning. The default is 0. |
| `record_id` | string | Yes | A UUID identifying the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current Token Info

**Slug:** `ATTIO_GET_SELF`

Tool to identify the current access token, the workspace it is linked to, and any permissions it has. Use when you need to verify token validity or retrieve workspace information associated with the current authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task

**Slug:** `ATTIO_GET_TASK`

Tool to get a single task by its task_id in Attio. Use when you need to retrieve detailed information about a specific task, including its content, deadline, assignees, and linked records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | string | Yes | The ID of the task to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Record by ID

**Slug:** `ATTIO_GET_V2_OBJECTS_OBJECT_RECORDS_RECORD_ID`

DEPRECATED: Use ATTIO_FIND_RECORD instead. Tool to get a single person, company or other record by its record_id. Use when you need to retrieve detailed information about a specific record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | A UUID or slug identifying the object that the record belongs to. |
| `record_id` | string | Yes | A UUID identifying the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tasks

**Slug:** `ATTIO_GET_V2_TASKS`

Tool to list all tasks in the workspace. Use when you need to retrieve tasks, optionally filtering by assignee, completion status, or linked records. Results are sorted by creation date from oldest to newest by default.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("created_at:asc" | "created_at:desc") | No | Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. If unspecified, defaults to "created_at:asc" (oldest results first). |
| `limit` | integer | No | The maximum number of results to return. Defaults to 500. |
| `offset` | integer | No | The number of results to skip over before returning. Defaults to 0. |
| `assignee` | string | No | Filter tasks by workspace member assignees. Workspace members can be referenced by either their email address or ID. Pass an empty value or the string `null` to find tasks with no assignee. |
| `is_completed` | boolean | No | Filter tasks by whether they have been completed. By default, both completed and non-completed tasks are returned. Specify `true` to only return completed tasks, or `false` to only return non-completed tasks. |
| `linked_object` | string | No | Pass a value to this parameter to filter results to only those tasks that contain the specified record in the `linked_records` property of the task. This parameter should identify the object that the linked record belongs to. For example, if filtering to tasks that link to a specific person record, this parameter should be `people`. If provided, `linked_record_id` must also be provided. |
| `linked_record_id` | string | No | Pass a value to this parameter to filter results to only those tasks that contain the specified record in the `linked_records` property of the task. This parameter should contain the record ID of the linked record. If provided, `linked_object` must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get V2 Workspace Members (Deprecated)

**Slug:** `ATTIO_GET_V2_WORKSPACE_MEMBERS`

DEPRECATED: Use ATTIO_LIST_WORKSPACE_MEMBERS instead. Tool to list all workspace members in the workspace. Use when you need to retrieve information about workspace members, their access levels, or their identities.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook

**Slug:** `ATTIO_GET_WEBHOOK`

Tool to get a single webhook by its webhook_id in Attio. Use when you need to retrieve detailed information about a specific webhook configuration. Returns the webhook's target URL, event subscriptions, status, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | A UUID which identifies the webhook. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Member

**Slug:** `ATTIO_GET_WORKSPACE_MEMBER`

Tool to get a single workspace member by their workspace_member_id. Use when you need details about a specific workspace member, including their name, email, access level, and avatar.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspace_member_id` | string | Yes | A UUID to identify the workspace member |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Workspace Record

**Slug:** `ATTIO_GET_WORKSPACE_RECORD`

Tool to get a single workspace record by its record_id. Use when you need to retrieve detailed information about a specific workspace. Returns all attribute values for the workspace record with temporal and audit metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | UUID string identifying the workspace record to fetch |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Attribute Options

**Slug:** `ATTIO_LIST_ATTRIBUTE_OPTIONS`

Tool to list all select options for a particular attribute on either an object or a list. Use when you need to discover available options for select or status type attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to return for pagination purposes. |
| `offset` | integer | No | The number of results to skip before returning results. |
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute you want to list select options on. This must be a select or status type attribute. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the select attribute belongs to. For objects, use slugs like 'companies', 'people', or a UUID. For lists, use the list slug or UUID. |
| `show_archived` | boolean | No | Set to true if you want the results to include archived select options. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Attributes

**Slug:** `ATTIO_LIST_ATTRIBUTES`

Tool to list the attribute schema for an Attio object or list (including slugs, types, select/status config) to enable correct filtering and writes. Use when you need to discover what attributes exist on an object or list, their types, and their configuration (e.g., available options for select/status attributes). Returns attributes in UI sort order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to return for pagination purposes. |
| `offset` | integer | No | The number of results to skip before returning results. |
| `target` | string ("objects" | "lists") | Yes | Whether the attributes are on an object or a list. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the attributes belong to. For objects, use slugs like 'people', 'companies', 'deals', or a UUID. For lists, use the list slug or UUID. |
| `show_archived` | boolean | No | Whether archived attributes should be included in the results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Attribute Statuses

**Slug:** `ATTIO_LIST_ATTRIBUTE_STATUSES`

Tool to list all statuses for a particular status attribute on either an object or a list. Use when you need to discover available statuses for a status attribute, including their IDs, titles, and configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list. Please note that the company and people objects do not support status attributes at this time. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute you want to list statuses on. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the status attribute belongs to. |
| `show_archived` | boolean | No | True if you want the results to include archived statuses. Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Call Recordings

**Slug:** `ATTIO_LIST_CALL_RECORDINGS`

Tool to list all call recordings for a meeting in Attio. Use when you need to retrieve call recordings associated with a specific meeting. This endpoint is in beta.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to return. Defaults to 50 with a maximum of 200. |
| `cursor` | string | No | A cursor for pagination. Use the next_cursor from the previous response to get the next page of results. |
| `meeting_id` | string | Yes | The UUID of the meeting to list call recordings for. Must be in UUID format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Companies

**Slug:** `ATTIO_LIST_COMPANIES`

Tool to list company records in Attio with optional filtering and sorting. Use when you need to retrieve company records based on criteria like domain, name, or description.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return. Defaults to 25. |
| `sorts` | array | No | Array of sort specifications to order results. Each sort object specifies direction ('asc'/'desc'), attribute, and optionally field or path. |
| `filter` | object | No | Attio filter object for server-side filtering. Supports both shorthand and verbose syntax with operators. Filter by attribute slugs (e.g., 'name', 'domains', 'description'). Multi-field attributes must be accessed via nested syntax: {'domains': {'domain': {'$eq': 'attio.com'}}}. Available operators: $eq (equality), $not_empty (presence check), $in (set membership), $contains (substring), $starts_with (prefix), $ends_with (suffix), $lt/$lte/$gt/$gte (numeric/date comparison), $and/$or/$not (logical). Examples: {'name': 'Acme'} for shorthand, {'domains': {'domain': {'$eq': 'example.com'}}} for exact domain match, {'$and': [{'name': {'$contains': 'Inc'}}, {'description': {'value': {'$not_empty': True}}}]} for complex queries. |
| `offset` | integer | No | Number of records to skip for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Company Attribute Values

**Slug:** `ATTIO_LIST_COMPANY_ATTRIBUTE_VALUES`

Tool to get all values for a given attribute on a company record. Historic values can be queried using the show_historic query param. Historic values cannot be queried on COMINT or enriched attributes. Some attributes are subject to billing status and may return an empty array.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return |
| `offset` | integer | No | Number of results to skip |
| `attribute` | string | Yes | A UUID or slug to identify the attribute |
| `record_id` | string | Yes | A UUID of the company record to fetch attribute values for |
| `show_historic` | boolean | No | If true, returns all historic values; defaults to false. Cannot be used with COMINT or enriched attributes |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Company Record Entries

**Slug:** `ATTIO_LIST_COMPANY_RECORD_ENTRIES`

Tool to list all entries across all lists for which a company record is the parent in Attio. Use when you need to see which lists a particular company record belongs to. Returns list information and entry IDs for each list the company appears in.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Default is 100, maximum is 1000 |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0 |
| `record_id` | string | Yes | A UUID identifying the company record |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deal Entries

**Slug:** `ATTIO_LIST_DEAL_ENTRIES`

Tool to list all entries across all lists for which a deal record is the parent in Attio. Use when you need to see which lists a particular deal record belongs to. Returns list information and entry IDs for each list the deal appears in.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Default is 100, maximum is 1000 |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0 |
| `record_id` | string | Yes | A UUID identifying the deal record |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deal Record Attribute Values

**Slug:** `ATTIO_LIST_DEAL_RECORD_ATTRIBUTE_VALUES`

Tool to retrieve all values for a specified attribute on a deal record in Attio. Use when you need to see current or historic values for a specific deal attribute. Historic values can be queried using show_historic param but cannot be queried on COMINT or enriched attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return |
| `offset` | integer | No | Number of results to skip before returning |
| `attribute` | string | Yes | UUID or slug to identify the attribute you want to query values on |
| `record_id` | string | Yes | UUID of the deal record to fetch attribute values for |
| `show_historic` | boolean | No | If true, returns all historic values for the attribute. If false, returns only currently active value(s). Defaults to false. Cannot be set to true for COMINT attributes or enriched attributes |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deal Records

**Slug:** `ATTIO_LIST_DEAL_RECORDS`

Tool to list deal records in Attio with the option to filter and sort results. Use when you need to retrieve deal records based on filter criteria or sorting requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Defaults to 500 |
| `sorts` | array | No | Array of sort objects with direction, attribute, and field properties |
| `filter` | object | No | Filter results to a subset. Supports operators like $and, $or, $not, $eq, $contains. Example: {'name': {'$contains': 'Acme'}} or {'status': {'$eq': 'open'}}. |
| `offset` | integer | No | Number of results to skip. Defaults to 0 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Entries (Deprecated)

**Slug:** `ATTIO_LIST_ENTRIES`

DEPRECATED: Use ATTIO_ATTIO_POST_V2_LISTS_LIST_ENTRIES_QUERY instead. Tool to list entries in a given list with filtering and sorting options. Use when you need to retrieve records added to a specific list in Attio. Entries are returned based on the filters and sorts provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Maximum 500 |
| `sorts` | array | No | Array of sort objects to sort results by attributes |
| `filter` | object | No | Filter entries by attribute values. Keys are attribute slugs (e.g., 'name', 'categories'). For status attributes, values can be either (1) status title strings (case-sensitive, e.g., 'In Progress', 'Lead') or (2) status_id UUIDs for advanced filtering. Status titles must match exactly. Use ATTIO_LIST_ATTRIBUTE_STATUSES to discover valid status options for a list. Example with text field: {'name': 'Acme Corp'}. Example with status field using title: {'deal_stage': 'In Progress'}. Example with status field using UUID: {'deal_stage': '0ebdb78d-3c9f-42b4-9df8-cb9d8b402c00'} |
| `offset` | integer | No | Number of results to skip over before returning |
| `list_id` | string | Yes | A UUID or slug identifying the list to retrieve entries from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List List Entries (Deprecated)

**Slug:** `ATTIO_LIST_LIST_ENTRIES`

DEPRECATED: Use ATTIO_ATTIO_POST_V2_LISTS_LIST_ENTRIES_QUERY instead. Tool to retrieve entries (records) that belong to a specific Attio list. Use when you need to enumerate list membership or access list-specific attribute values. This is distinct from listing all records of an object type - it specifically returns records that are members of a particular list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | UUID or API slug identifying the list to retrieve entries from |
| `limit` | integer | No | Maximum number of entries to return. Defaults to 500. |
| `sorts` | array | No | Optional array of sort descriptors to order results. Each descriptor contains direction ('asc' or 'desc'), attribute name, and optionally a field for nested sorting. |
| `filter` | object | No | Optional filter object to retrieve a subset of entries. Object with attribute names as keys and values to match. Omit or pass empty object to enumerate all entries. |
| `offset` | integer | No | Number of entries to skip for pagination. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List List Entry Attribute Values

**Slug:** `ATTIO_LIST_LIST_ENTRY_ATTRIBUTE_VALUES`

Tool to retrieve all values for a specified attribute on a list entry in Attio. Use when you need to see the history of values for a specific attribute on a list entry. Can return only active values or include all historical values sorted chronologically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug identifying the list the entry is in |
| `limit` | integer | No | Maximum number of results to return for pagination |
| `offset` | integer | No | Number of results to skip before returning |
| `entry_id` | string | Yes | A UUID identifying the entry |
| `attribute` | string | Yes | A UUID or slug to identify the attribute you want to query values on |
| `show_historic` | boolean | No | If true, returns all historic values for the attribute. If false, returns only currently active value(s). Defaults to false. Can only be set to true for attributes which support historic data; will error for non-historic attributes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Lists

**Slug:** `ATTIO_LIST_LISTS`

This tool retrieves all lists available in the Attio workspace, sorted as they appear in the sidebar. Returns list metadata only (names, IDs, configuration) — not the records/entries within those lists. To fetch actual list entries, use ATTIO_FIND_RECORD with appropriate filters. This tool is a prerequisite for many list-related operations. Requires the list_configuration:read permission scope.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Meetings

**Slug:** `ATTIO_LIST_MEETINGS`

Tool to list all meetings in the workspace using a deterministic sort order. Use when you need to retrieve meetings, optionally filtering by participants, linked records, or time ranges. This endpoint is in beta.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("start_asc" | "start_desc") | No | The order in which to sort the meetings. Defaults to start_asc (earliest meetings first). |
| `limit` | integer | No | The maximum number of meetings to return. Must be between 1 and 200. Defaults to 50. |
| `cursor` | string | No | A pagination cursor used to fetch the next page of meetings. Responses with more meetings will include a cursor for you to use here. If not provided, the first page will be returned. |
| `timezone` | string | No | The timezone to use when filtering meetings using ends_from and starts_before (IANA timezone format, e.g., 'America/New_York'). Defaults to UTC. This property has no effect for non-all-day meetings. |
| `ends_from` | string | No | Use ends_from to filter meetings to only those that end after the specified timestamp (ISO 8601 format). ends_from is inclusive, meaning that meetings that end at the exact timestamp will be included in results. When evaluating all-day meetings, we filter results from the perspective of a specific timezone (see timezone parameter). |
| `participants` | string | No | A comma-separated list of emails to filter meetings by. If provided, meetings will be filtered to only include meetings that include at least one of the provided emails as participants. |
| `linked_object` | string | No | The object to filter meetings by. Must be a valid object slug or ID (e.g., 'people', 'companies'). If provided, linked_record_id must also be provided. |
| `starts_before` | string | No | Use starts_before to filter meetings to only those that start before the specified timestamp (ISO 8601 format). starts_before is exclusive, meaning that meetings that start at the exact timestamp will not be included in results. When evaluating all-day meetings, we filter results from the perspective of a specific timezone (see timezone parameter). |
| `linked_record_id` | string | No | Used to filter meetings to only those values that include a specific linked record. Must be a valid record ID (UUID format). If provided, linked_object must also be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Notes

**Slug:** `ATTIO_LIST_NOTES`

Lists notes in Attio. Can list all notes in the workspace, or filter by parent object type and/or specific record. Notes are returned in reverse chronological order (newest first).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of notes to return. Default is 10, maximum is 50. |
| `offset` | integer | No | The number of results to skip over before returning. Default is 0. |
| `parent_object` | string | No | The slug or ID of the parent object the notes belong to (e.g., 'people', 'companies', 'deals'). If provided, parent_record_id must also be specified. If omitted, lists all notes in the workspace. |
| `parent_record_id` | string | No | The UUID of the parent record to filter notes by. Must be in UUID format (e.g., '92446133-64cf-4f83-bca9-594ca2f8da57'). If provided, parent_object must also be specified. If omitted, lists all notes in the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Objects

**Slug:** `ATTIO_LIST_OBJECTS`

This tool retrieves a list of all available objects (both system-defined and user-defined) in the Attio workspace via GET /v2/objects, returning key metadata including slugs and IDs for each object. Call this tool first before ATTIO_LIST_RECORDS, ATTIO_FIND_RECORD, or ATTIO_CREATE_RECORD to discover valid object slugs — hardcoded slugs may not exist across workspaces. Concepts like tasks may be modeled as deals or custom objects rather than dedicated types, so confirm the correct object type before proceeding. Attribute values in responses can be arrays of time-bounded entries rather than simple scalars; downstream code must handle nested structures.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List People Attribute Values

**Slug:** `ATTIO_LIST_PEOPLE_ATTRIBUTE_VALUES`

Tool to get all values for a given attribute on a person record. Use when you need to retrieve current or historic values for a specific person attribute. Historic values can be queried using the show_historic param but cannot be queried on COMINT or enriched attributes (returns 400 error).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return |
| `offset` | integer | No | Number of results to skip |
| `attribute` | string | Yes | UUID or slug to identify the attribute |
| `record_id` | string | Yes | UUID of the person record to fetch attribute values for |
| `show_historic` | boolean | No | If true, returns all historic values; defaults to false. Cannot be used with COMINT or enriched attributes (will return 400 error) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List People Record Entries

**Slug:** `ATTIO_LIST_PEOPLE_RECORD_ENTRIES`

Tool to list all entries across all lists for which a person record is the parent in Attio. Use when you need to see which lists a particular person record belongs to. Returns list information and entry IDs for each list the person appears in.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Default is 100, maximum is 1000 |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0 |
| `record_id` | string | Yes | A UUID identifying the person record |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Record Attribute Values

**Slug:** `ATTIO_LIST_RECORD_ATTRIBUTE_VALUES`

Tool to retrieve all values for a specified attribute on a record in Attio. Use when you need to see the history of values for a specific attribute. Can return only active values or include historical values. Historic values cannot be queried on COMINT or enriched attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum results to return |
| `offset` | integer | No | Number of results to skip before returning |
| `attribute` | string | Yes | Attribute identifier (UUID or slug) |
| `record_id` | string | Yes | Record identifier (UUID) |
| `object_type` | string | Yes | Object identifier (UUID or slug) |
| `show_historic` | boolean | No | Returns all historical values when true; returns only active values when false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Records

**Slug:** `ATTIO_LIST_RECORDS`

This tool lists records from a specific object type in Attio. It provides simple pagination support and returns records in creation order (oldest first). For complex filtering, use the FindRecord action instead. Standard object types include: people, companies, deals, users, workspaces. If you get a 404 error, verify the object type exists using the List Objects action first. Response attribute values are returned as arrays of time-bounded objects under a `values` map (e.g., `values['name']`), not simple scalars — handle arrays, nested objects, and empty arrays accordingly. Select attributes are accessed via `option.title`; currency, stage, and select fields may be null or empty arrays. Access records via `data.data` in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return Maximum is ~500. Check `has_more` in the response to detect additional pages; increment `offset` by `limit` to retrieve subsequent pages. |
| `offset` | integer | No | Number of records to skip for pagination |
| `object_type` | string | Yes | The type/slug of object to list records for (also accepts 'object_id' as an alias). Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. Use the List Objects action to discover all available object types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Threads

**Slug:** `ATTIO_LIST_THREADS`

Tool to list threads of comments on a record or list entry in Attio. Use when you need to view all comment threads associated with a specific record or list entry. Threads contain one or more comments sorted chronologically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | No | The list (slug or ID) to filter threads by. Must be provided together with 'entry_id'. Use this to view threads on list entries. |
| `limit` | integer | No | Maximum number of threads to return. Default is 10, maximum is 50. |
| `object` | string | No | The object type (slug or ID) to filter threads by. Must be provided together with 'record_id'. Examples: 'people', 'companies', 'deals'. |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0. Used for pagination. |
| `entry_id` | string | No | UUID of the specific list entry to filter threads by. Must be provided together with 'list'. Use this to view threads on a particular list entry. |
| `record_id` | string | No | UUID of the specific record to filter threads by. Must be provided together with 'object'. Use this to view threads on a particular record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Record Entries

**Slug:** `ATTIO_LIST_USER_RECORD_ENTRIES`

Tool to list all entries across all lists for which a user record is the parent in Attio. Use when you need to see which lists a particular user record belongs to. Returns list information and entry IDs for each list the user appears in.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Default is 100, maximum is 1000 |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0 |
| `record_id` | string | Yes | A UUID identifying the user record |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Records

**Slug:** `ATTIO_LIST_USER_RECORDS`

Tool to list user records in Attio with optional filtering and sorting. Use when you need to retrieve workspace members or user records based on specific criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of user records to return. Defaults to 500. |
| `sorts` | array | No | Array of sort specifications to order results. Each sort object specifies direction ('asc'/'desc'), attribute, and optionally field or path. |
| `filter` | object | No | An object used to filter results to a subset of user records. Supports Attio filter syntax with operators like $eq, $not_empty, $in, $contains, etc. |
| `offset` | integer | No | Number of user records to skip for pagination. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Webhooks

**Slug:** `ATTIO_LIST_WEBHOOKS`

Tool to get all webhooks in your Attio workspace. Use when you need to retrieve a list of configured webhooks, their subscriptions, and statuses. Supports pagination via limit and offset parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to return, between 10 and 100, defaults to 10. See the full guide to pagination in Attio documentation. |
| `offset` | integer | No | The number of results to skip over before returning, defaults to 0. See the full guide to pagination in Attio documentation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Workspace Members

**Slug:** `ATTIO_LIST_WORKSPACE_MEMBERS`

Tool to list workspace members (actors) so agents can reliably assign owners and resolve workspace-member IDs even when the optional Users standard object is disabled. Use when writing or assigning actor-reference attributes (e.g., record/list entry owners) that require referenced_actor_type=workspace-member and an actor id.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Workspace Record Attribute Values

**Slug:** `ATTIO_LIST_WORKSPACE_RECORD_ATTRIBUTE_VALUES`

Tool to retrieve all values for a specified attribute on a workspace record in Attio. Use when you need to see the history of values for a specific attribute on a workspace record. Can return only active values or include all historical values sorted chronologically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return for pagination |
| `offset` | integer | No | Number of results to skip before returning |
| `attribute` | string | Yes | The API slug of the attribute (e.g., 'name', 'workspace_id', 'users', 'company', 'avatar_url', 'created_at', 'created_by') |
| `record_id` | string | Yes | A UUID identifying the workspace record |
| `show_historic` | boolean | No | If true, returns all historic values for the attribute. If false, returns only currently active value(s). Defaults to false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Workspace Record Entries

**Slug:** `ATTIO_LIST_WORKSPACE_RECORD_ENTRIES`

Tool to list all entries across all lists for which a workspace record is the parent in Attio. Use when you need to see which lists a particular workspace record belongs to. Returns list information and entry IDs for each list the workspace appears in.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Default is 100, maximum is 1000 |
| `offset` | integer | No | Number of results to skip over before returning. Default is 0 |
| `record_id` | string | Yes | A UUID identifying the workspace record |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Workspace Records

**Slug:** `ATTIO_LIST_WORKSPACE_RECORDS`

Tool to list workspace records with filtering and sorting options. Use when you need to retrieve workspace-level records from Attio. Records are returned based on the filters and sorts provided. Requires record_permission:read and object_configuration:read scopes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Defaults to 500 |
| `sorts` | array | No | Array of sort objects to order results by attributes or paths |
| `filter` | object | No | Filter object to subset records. Supports operators like $and, $or, $eq, $ne, $in, $nin, etc. Example: {'$and': [{'attribute_slug': {'$eq': 'value'}}, {'another_slug': {'$ne': 'other'}}]} Refer to Attio's filter syntax documentation for advanced queries. |
| `offset` | integer | No | Number of results to skip over before returning. Defaults to 0 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch Record

**Slug:** `ATTIO_PATCH_RECORD`

Tool to update people, companies, and other records by record_id using PATCH method. For multiselect attributes, values supplied will be prepended to existing values. Use PUT endpoint to overwrite or remove multiselect values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | A UUID or slug of the object the record belongs to. Standard object types include 'people', 'companies', 'deals'. You can also use custom object slugs from your workspace. |
| `values` | object | Yes | Attribute values keyed by api_slug or attribute_id. Single value for single-select, array for multiselect. PATCH behavior: multiselect values are PREPENDED to existing values. Use PUT endpoint to overwrite/remove. Type formats: text/number (plain string or number), select/status ('Option Title' string), multiselect (['Option 1', 'Option 2']), currency {'currency_value', 'currency_code'}, date 'YYYY-MM-DD', personal-name {'first_name', 'last_name', 'full_name'}, email {'email_address'}, phone {'original_phone_number', 'country_code'}, record-reference {'target_record_id', 'target_object'}, domain ('example.com' or {'domain': '...'}). |
| `record_id` | string | Yes | A UUID of the record to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update List Entry by Entry ID

**Slug:** `ATTIO_PATCH_V2_LISTS_LIST_ENTRIES_ENTRY_ID`

Tool to update list entries by entry_id in Attio. Use when you need to modify attribute values on existing list entries. For multiselect attributes, the values supplied will be created and prepended to existing values. Use the PUT endpoint to overwrite or remove multiselect attribute values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug of the list the list entry belongs to |
| `entry_id` | string | Yes | A UUID of the list entry to update |
| `entry_values` | object | Yes | An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Person

**Slug:** `ATTIO_PEOPLE_GET_PERSON`

Tool to get a single person record by its record_id in Attio. Use when you need to retrieve detailed information about a specific person. Returns all attribute values for the person with temporal and audit metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | UUID identifying the person record to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Person Records

**Slug:** `ATTIO_PEOPLE_LIST_PERSONS`

Tool to list person records from Attio with optional filtering and sorting. Use when you need to retrieve people based on specific criteria or get a paginated list of all people.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return. Defaults to 500. |
| `sorts` | array | No | Array of sort specifications to order results. Each sort object specifies direction ('asc'/'desc'), attribute, and optionally field or path. |
| `filter` | object | No | Attio filter object for server-side filtering. Supports shorthand and verbose syntax. IMPORTANT: Filter by attribute slugs (e.g., 'name', 'email_addresses'), NOT sub-properties directly. Multi-field attributes like 'name' have sub-properties (first_name, last_name, full_name) accessed via nested syntax: {'name': {'first_name': {'$eq': 'John'}}}. Do NOT use {'first_name': 'John'} - first_name is not a top-level attribute.   CRITICAL: All operators must include the '$' prefix (e.g., $eq, NOT 'eq').  OPERATOR SUPPORT BY ATTRIBUTE TYPE: - Text: $eq, $not_empty, $in, $contains, $starts_with, $ends_with, $and, $or, $not - Email-address sub-properties (email_address, email_domain, etc.): $eq, $contains, $starts_with, $ends_with. Note: $not_empty is NOT supported for email-address sub-properties. - Personal-name sub-properties: $eq and string operators on first_name, last_name, full_name - Numeric/Date: $eq, $not_empty, $in, $lt, $lte, $gt, $gte, $and, $or, $not  Examples: {'name': 'John'} for shorthand, {'name': {'last_name': {'$contains': 'Smith'}}} for nested, {'email_addresses': {'email_address': {'$eq': 'user@example.com'}}} for exact email match. |
| `offset` | integer | No | Number of records to skip for pagination. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create List Entry

**Slug:** `ATTIO_POST_V2_LISTS_LIST_ENTRIES`

Tool to add a record to a list as a new list entry in Attio. Use when you need to organize records into specific lists. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | The UUID or slug identifying the list that the created list entry should belong to |
| `entry_values` | object | No | An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see Attio's attribute type docs |
| `parent_object` | string | Yes | A UUID or slug identifying the object that the added parent record belongs to |
| `parent_record_id` | string | Yes | A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List List Entries

**Slug:** `ATTIO_POST_V2_LISTS_LIST_ENTRIES_QUERY`

Tool to list entries in a given list, with the option to filter and sort results. Use when you need to retrieve records that belong to a specific list with optional filtering and sorting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug identifying the list to retrieve entries from |
| `limit` | integer | No | The maximum number of results to return. Defaults to 500. |
| `sorts` | array | No | An array of sort objects used to sort results. Each descriptor must contain direction ('asc' or 'desc') and either attribute or path. |
| `filter` | object | No | Filter object using list-specific attribute slugs (NOT parent object attributes). Use ATTIO_LIST_ATTRIBUTES with target='lists' to discover valid attribute slugs for this list. Supports shorthand syntax (e.g., {'attribute_slug': 'value'}) for simple equality or verbose syntax with operators like $eq, $not_empty, $in, $contains, $lt, $gt. See https://docs.attio.com/rest-api/how-to/filtering-and-sorting for complete syntax. |
| `offset` | integer | No | The number of results to skip over before returning. Defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a record

**Slug:** `ATTIO_POST_V2_OBJECTS_OBJECT_RECORDS`

DEPRECATED: Use ATTIO_CREATE_RECORD instead. Creates a new person, company or other record. This endpoint will throw on conflicts of unique attributes. If you would prefer to update records on conflicts, please use the Assert record endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | The UUID or slug identifying the object the created record should belong to. |
| `values` | object | Yes | An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see the Attio attribute type documentation. Example: {'name': [{'first_name': 'John', 'last_name': 'Doe', 'full_name': 'John Doe'}], 'email_addresses': [{'email_address': 'john@example.com'}]} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Records with Query

**Slug:** `ATTIO_POST_V2_OBJECTS_OBJECT_RECORDS_QUERY`

Tool to list people, company or other records in Attio with the option to filter and sort results. Use when you need to retrieve records based on complex filter criteria or sorting requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return. Common values up to 500. |
| `sorts` | array | No | Array of sort specifications to order results. Each sort object specifies direction ('asc'/'desc'), attribute, and optionally field or path. IMPORTANT: 'updated_at' is NOT a valid attribute - use 'created_at' or call List Attributes to discover valid sortable attributes. |
| `filter` | object | No | Attio filter object. Supports shorthand, verbose, and path-based filtering. IMPORTANT: Filter by attribute slugs (e.g., 'name', 'email_addresses'), NOT sub-properties directly. Use ATTIO_LIST_ATTRIBUTES to discover correct slugs - names may differ from display titles (e.g., 'company' not 'companies'). Multi-field attributes like 'name' have sub-properties (first_name, last_name, full_name) accessed via nested syntax: {'name': {'first_name': {'$eq': 'John'}}}. Do NOT use {'first_name': 'John'} - first_name is not a top-level attribute. TIMESTAMP/DATE: 'created_at' is the standard timestamp attribute. CRITICAL: 'updated_at' is NOT valid in Attio. Use $eq/$gt/$gte/$lt/$lte on timestamp attributes: {'created_at': {'$gte': '2024-01-01T00:00:00.000Z'}}. INTERACTION ATTRIBUTES (e.g., 'last_email_interaction', 'last_calendar_interaction'): Properties: owner_member_id ($eq/$not_empty), interacted_at ($eq/$gte/$gt/$lte/$lt - requires ISO8601, NOT $not_empty), interaction_type ($eq/$not_empty). RECORD-REFERENCE: Use attribute slug with target_object and target_record_id: {'company': {'target_object': 'companies', 'target_record_id': 'id'}}. Use singular slug (e.g., 'company' not 'companies'). PATH-BASED FILTERING: {'path': [[object_slug, attribute_slug], ...], 'constraints': {property: value}}. Path is an array of [object_slug, attribute_slug] pairs; constraints apply to the final attribute. Operators: $eq, $not_empty, $in, $contains, $starts_with, $ends_with, $lt/$lte/$gt/$gte, $and/$or/$not. CRITICAL: All operators MUST include the $ prefix (use $gte, NOT gte). |
| `object` | string | Yes | The object slug or UUID to query records from (e.g., 'people', 'companies', or custom object UUID). Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. |
| `offset` | integer | No | Number of records to skip for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Records

**Slug:** `ATTIO_POST_V2_OBJECTS_RECORDS_SEARCH`

DEPRECATED: Use ATTIO_SEARCH_RECORDS instead. Tool to fuzzy search for records across one or more objects in Attio. Use when you need to find records by name, domain, email, phone number, or social handle. This endpoint is in beta and returns eventually consistent results. For results guaranteed to be up to date, use the record query endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Defaults to 25. Range: 1-25. |
| `query` | string | Yes | Query string to search for (max 256 characters). An empty string returns a default set of results. Matches names, domains, emails, phone numbers and social handles on people and companies, and labels on all other objects. |
| `objects` | array | Yes | Specifies which objects to filter results by. At least one object must be specified. Accepts object slugs or IDs. |
| `request_as` | string | Yes | Specifies the context in which to perform the search. Use 'workspace' to return all search results or specify a workspace member to limit results to what one specific person in your workspace can see. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assert List Entry by Parent

**Slug:** `ATTIO_PUT_V2_LISTS_LIST_ENTRIES`

Tool to create or update a list entry for a given parent record in Attio. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. For multiselect attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug of the list the list entry belongs to. |
| `entry_values` | object | No | An object with an attribute api_slug or attribute_id as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For multiselect attributes, all values will be either created or deleted as necessary to match the list of values supplied. |
| `parent_object` | string | Yes | A UUID or slug identifying the object that the added parent record belongs to. |
| `parent_record_id` | string | Yes | A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update List Entry by Entry ID (PUT)

**Slug:** `ATTIO_PUT_V2_LISTS_LIST_ENTRIES_ENTRY_ID`

Tool to update list entries by entry_id in Attio using PUT method. Use when you need to completely replace attribute values on existing list entries. For multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the PATCH endpoint to add multiselect attribute values without removing those that already exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug of the list the list entry belongs to |
| `entry_id` | string | Yes | A UUID of the list entry to update |
| `entry_values` | object | Yes | An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the PATCH endpoint to add multiselect attribute values without removing those that already exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assert Record (Create or Update)

**Slug:** `ATTIO_PUT_V2_OBJECTS_OBJECT_RECORDS`

Tool to create or update people, companies and other records in Attio using a matching attribute. Use when you want to avoid duplicate records - if a record with the same value for the matching attribute is found, it will be updated; otherwise a new record is created. If you want to avoid matching and always create new records, use the Create Record endpoint instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | A UUID or slug to identify the object the record should belong to. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. |
| `values` | object | Yes | An object with an attribute api_slug or attribute_id as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see Attio's attribute type docs. Examples of value formats by attribute type: TEXT/NUMBER: 'Text value' or 123, EMAIL: [{'email_address': 'test@example.com'}], PERSONAL-NAME: [{'first_name': 'Test', 'last_name': 'User', 'full_name': 'Test User'}], DOMAIN: [{'domain': 'example.com'}], SELECT: ['Select option 1', 'Select option 2'], RECORD-REFERENCE: [{'target_object': 'people', 'target_record_id': 'uuid'}] |
| `matching_attribute` | string | Yes | The ID or slug of the attribute to use to check if a record already exists. The attribute must be unique. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. IMPORTANT: For multiselect matching attributes, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Put Record (Overwrite)

**Slug:** `ATTIO_PUT_V2_OBJECTS_OBJECT_RECORDS_RECORD_ID`

Tool to update people, companies, and other records by record_id using PUT method. For multiselect attributes, values supplied will overwrite/remove existing values. Use PATCH endpoint to append without removing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `object` | string | Yes | A UUID or slug of the object the record belongs to. Standard object types include 'people', 'companies', 'deals'. You can also use custom object slugs from your workspace. |
| `values` | object | Yes | Attribute values keyed by api_slug or attribute_id. Single value for single-select, array for multiselect. PUT behavior: multiselect values OVERWRITE/REMOVE existing values. Use PATCH endpoint to append without removing. Type formats: text/number (plain string or number), select/status ('Option Title' string), multiselect (['Option 1', 'Option 2']), currency {'currency_value', 'currency_code'}, date 'YYYY-MM-DD', personal-name {'first_name', 'last_name', 'full_name'}, email {'email_address'}, phone {'original_phone_number', 'country_code'}, record-reference {'target_record_id', 'target_object'}, domain ('example.com' or {'domain': '...'}). |
| `record_id` | string | Yes | A UUID of the record to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Records

**Slug:** `ATTIO_QUERY_RECORDS`

Tool to query records for a specific Attio object using server-side filtering operators and sorting. Use when you need to retrieve records based on complex filter criteria (e.g., 'get all agreements where product=X and status in Y') rather than simple listing or ID-based lookup. This avoids downloading large pages and filtering locally, which is slow and costly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of records to return. Common values up to 500. |
| `sorts` | array | No | Array of sort specifications to order results. Each sort object specifies direction ('asc'/'desc'), attribute, and optionally field or path. |
| `filter` | object | No | Attio filter object for server-side filtering. IMPORTANT: Always filter by attribute slugs (e.g., 'name', 'email_addresses'), NEVER by sub-properties directly at the top level. TIMESTAMP FILTERS: All timestamp comparisons MUST use ISO8601 string format (e.g., '2024-01-01T00:00:00.000Z'). Example: {'created_at': {'$gte': '2024-01-01T00:00:00.000Z'}}. PERSONAL-NAME: 'name' sub-properties (first_name, last_name, full_name) MUST be nested under 'name'. Correct: {'name': {'first_name': {'$contains': 'John'}, 'last_name': {'$contains': 'Smith'}}}. WRONG: {'first_name': {...}} - fails with 'unknown_filter_attribute_slug'. Shorthand: {'name': 'John Smith'}. EMAIL: email_addresses supports $eq, $contains, $starts_with, $ends_with (NOT $not_empty). INTERACTION (e.g., 'last_email_interaction'): Properties: owner_member_id ($eq/$not_empty), interacted_at ($eq/$gte/$gt/$lte/$lt with ISO8601), interaction_type ($eq/$not_empty). RECORD-REFERENCE: {'company': {'target_object': 'companies', 'target_record_id': '<uuid>'}}. Multiple: {'company': {'target_object': 'companies', 'target_record_id': {'$in': ['<uuid1>', '<uuid2>']}}}. Path-based: {'path': [['companies', 'team'], ['people', 'name']], 'constraints': {'first_name': {'$eq': 'John'}}}. OPERATORS: $eq, $not_empty (varies by type), $in, $contains, $starts_with, $ends_with, $lt/$lte/$gt/$gte, $and/$or/$not. |
| `object` | string | Yes | The object slug or UUID to query records from (e.g., 'people', 'companies', or custom object UUID). Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. |
| `offset` | integer | No | Number of records to skip for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Records

**Slug:** `ATTIO_SEARCH_RECORDS`

Tool to fuzzy search for records across multiple objects in Attio. Use when you need to find records by name, domain, email, phone number, or social handle. This endpoint is in beta and returns eventually consistent results. Matching strategy follows the in-product search approach.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Range: 1-25 |
| `query` | string | Yes | Query string to search for. An empty string returns a default set of results. Maximum 256 characters |
| `objects` | array | Yes | Specifies which objects to filter results by. At least one object must be specified. Accepts object slugs or IDs |
| `request_as` | string | Yes | Specifies the context for the search request. Can be workspace or workspace-member |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Attribute

**Slug:** `ATTIO_UPDATE_ATTRIBUTE`

Tool to update an existing attribute by its attribute_id or slug. Use when you need to modify attribute properties such as title, description, validation rules, or configuration settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The data object containing the attribute fields to update. At least one field (title, description, api_slug, is_required, is_unique, default_value, config, or is_archived) must be provided. |
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute. |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the attribute belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Company

**Slug:** `ATTIO_UPDATE_COMPANY`

Tool to update a company record in Attio by its record_id. Use when you need to modify company attributes like name, description, domains, or team. For multiselect attributes, values are prepended to existing values. Note: logo_url cannot be updated via API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Attribute values to update on the company record. Keys are attribute slugs; values are arrays of value objects. Type formats: text/number {'value': x}, currency {'currency_value', 'currency_code'}, date {'value': 'YYYY-MM-DD'}, domain {'domain': '...'} (do NOT include 'root_domain'), select/status {'option': 'Title'} (must match workspace options; use List Attributes to discover), email {'email_address': '...'}, phone {'original_phone_number', 'country_code'}, record-reference {'target_record_id', 'target_object'}, location (address string or object). For multiselect, values are prepended (not replaced). logo_url cannot be updated via API. |
| `record_id` | string | Yes | The UUID identifying the company record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Deal Record

**Slug:** `ATTIO_UPDATE_DEAL_RECORD`

Tool to update an existing deal record in Attio by record ID. Uses PATCH to partially update only the provided fields, leaving other fields unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Attribute values to update on the deal record. Keys are attribute slugs; values are arrays. Type formats: text/number use plain strings, currency {'currency_value': N}, select/status use plain string (recommended) or {'option'/'status': 'Title'}, actor-reference use email string or {'workspace_member_email_address': '...'} (use ATTIO_LIST_WORKSPACE_MEMBERS for valid emails), record-reference {'target_object': '...', 'target_record_id': 'uuid'}. Auto-correction: {'value': '...'} is auto-converted to a plain string. |
| `record_id` | string | Yes | A UUID of the deal record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Entry (Deprecated)

**Slug:** `ATTIO_UPDATE_ENTRY`

DEPRECATED: Use ATTIO_ATTIO_PATCH_V2_LISTS_LIST_ENTRIES_ENTRY_ID instead. Tool to update list entries by their ID in Attio. Use when you need to modify attribute values on existing list entries. When multiselect attributes are included, the values supplied will be prepended to existing values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | A UUID or slug identifying the list containing the entry |
| `entry_id` | string | Yes | A UUID identifying the specific list entry to update |
| `entry_values` | object | Yes | Attribute values to update. Field values organized by attribute slug or ID. For multiselect attributes, values will be prepended to existing values |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update List

**Slug:** `ATTIO_UPDATE_LIST`

Tool to update an existing list in Attio. Use when you need to modify list properties like name, api_slug, or permissions. Lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level. Changing the parent object of a list is not possible through the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list` | string | Yes | A UUID or slug to identify the list to update |
| `name` | string | No | The human-readable name of the list |
| `api_slug` | string | No | A unique, human-readable slug to access the list through API calls. Should be formatted in snake case |
| `workspace_access` | string ("full-access" | "read-and-write" | "read-only") | No | The level of access granted to all members of the workspace for this list. Pass null to keep the list private and only grant access to specific workspace members. Note: Lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level |
| `workspace_member_access` | array | No | The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members. Note: Lists must have either workspace_access set to 'full-access' or one or more workspace_member_access with 'full-access' level |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Object

**Slug:** `ATTIO_UPDATE_OBJECT`

Tool to update a single object's configuration in Attio. Use when you need to modify an object's API slug, singular noun, or plural noun. Standard objects (people, companies, deals, users, workspaces) and custom objects can be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The object data to update. Provide at least one of api_slug, singular_noun, or plural_noun. |
| `object_id` | string | Yes | A UUID or slug to identify the object to update. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Person

**Slug:** `ATTIO_UPDATE_PERSON`

Tool to update a person record in Attio by its record_id. Use when you need to modify person attributes like name, email, job title, or phone numbers. For multiselect attributes, values are prepended to existing values. Note: avatar_url cannot be updated via API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Attribute values to update on the person record. Keys are attribute slugs; values are arrays of value objects. Type formats: text/number {'value': x}, personal-name {'first_name', 'last_name', 'full_name'}, email {'email_address': '...'}, phone {'original_phone_number', 'country_code'}, currency {'currency_value', 'currency_code'}, date {'value': 'YYYY-MM-DD'}, select/status {'option': 'Title'} (must match workspace options; use List Attributes to discover), record-reference {'target_record_id', 'target_object'}, location (address string or object). For multiselect, values are prepended (not replaced); use Assert Person to overwrite. avatar_url cannot be updated via API. |
| `record_id` | string | Yes | The UUID identifying the person record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Record

**Slug:** `ATTIO_UPDATE_RECORD`

This tool updates an existing record in Attio for a specified object type (people, companies, deals, users, workspaces, etc.). It uses PATCH to partially update only the provided fields, leaving other fields unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | Attribute values to update on the record. Keys are attribute slugs; values are arrays. Type formats: text/number/date use plain strings, currency {'currency_value': N}, select/status use plain string (recommended) or {'option'/'status': 'Title'}, personal-name {'first_name', 'last_name', 'full_name'}, email {'email_address': '...'}, phone {'original_phone_number', 'country_code'}, actor-reference use email string or {'workspace_member_email_address': '...'} (use ATTIO_LIST_WORKSPACE_MEMBERS for valid emails), record-reference {'target_object': '...', 'target_record_id': 'uuid'}. Auto-correction: {'value': '...'} is auto-converted to a plain string. |
| `record_id` | string | Yes | The unique identifier of the record to update |
| `object_type` | string | Yes | The type of object to update. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Select Option

**Slug:** `ATTIO_UPDATE_SELECT_OPTION`

Tool to update an existing select option for a select or multiselect attribute in Attio. Use when you need to rename an option or archive it. Archived options are hidden from selection but preserve historical data for records that used them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The fields to update on the select option |
| `option` | string | Yes | A UUID or select option title to identify the select option to update |
| `target` | string ("objects" | "lists") | Yes | Whether the attribute is on an object or a list. |
| `attribute` | string | Yes | A UUID or slug to identify the select or multiselect attribute |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the select attribute belongs to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Status

**Slug:** `ATTIO_UPDATE_STATUS`

Tool to update a status on a status attribute on either an object or a list in Attio. Use when you need to modify status properties like title, celebration settings, target time, or archive status. Company and person objects do not support status attributes at this time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The status data to update. At least one field must be provided. |
| `status` | string | Yes | A UUID or status title to identify the status to update |
| `target` | string ("lists" | "objects") | Yes | Whether the attribute is on an object or a list. Note that company and person objects do not support status attributes at this time. |
| `attribute` | string | Yes | A UUID or slug to identify the attribute to update the status on |
| `identifier` | string | Yes | A UUID or slug to identify the object or list the status attribute belongs to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Task

**Slug:** `ATTIO_UPDATE_TASK`

Tool to update an existing task in Attio by its task_id. Use when you need to modify a task's deadline, completion status, linked records, or assignees. Only these four fields can be updated via this endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The fields to update. Only deadline_at, is_completed, linked_records, and assignees can be updated. |
| `task_id` | string | Yes | The ID of the task to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User Record

**Slug:** `ATTIO_UPDATE_USER_RECORD`

Tool to update a user record in Attio by its record_id. Use when you need to modify user attributes like user_id, primary_email_address, person, or workspace references. Attributes not included in the request will remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | The attribute values to update on the user record. Each key is an attribute slug, and values are arrays of attribute value objects. Attributes that are not included in the request body will not be changed. Common user attributes include: user_id, primary_email_address, person, workspace. Different attribute types require different value structures: (1) Text fields (e.g., user_id): use [{'value': 'text'}]. (2) Email fields (e.g., primary_email_address): use [{'email_address': 'user@example.com'}]. (3) Record-reference fields (e.g., person, workspace): use [{'target_record_id': 'uuid', 'target_object': 'people'}]. |
| `record_id` | string | Yes | The ID of the user record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Webhook

**Slug:** `ATTIO_UPDATE_WEBHOOK`

Tool to update a webhook's target URL and/or event subscriptions. Use when you need to modify an existing webhook configuration in Attio.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target_url` | string | No | URL where the webhook events will be delivered to. Must be an HTTPS URL. |
| `webhook_id` | string | Yes | A UUID which identifies the webhook. |
| `subscriptions` | array | No | One or more events the webhook is subscribed to. Each subscription contains an event type and optional filter conditions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Workspace Record

**Slug:** `ATTIO_UPDATE_WORKSPACE_RECORD`

Tool to update a workspace record by ID using PATCH method. Only the attributes provided in the request will be updated; other attributes remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `values` | object | Yes | The attribute values to update on the workspace record. Only the attributes included will be updated; other attributes will remain unchanged. Common workspace attributes include: (1) 'name': workspace name as a text field, e.g., {"name": [{"value": "Updated Workspace Name"}]}. (2) 'workspace_id': workspace identifier. (3) 'users': record references to user records. (4) 'company': record reference to a company record. (5) 'avatar_url': URL to workspace avatar image. Each attribute requires an array of value objects with attribute-type-specific fields. |
| `record_id` | string | Yes | The UUID of the workspace record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
