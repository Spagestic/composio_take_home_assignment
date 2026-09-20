# Twenty

The #1 Open-Source CRM. Modern, powerful, affordable platform to manage your customer relationships.

- **Category:** crm
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 8
- **Triggers:** 0
- **Slug:** `TWENTY`
- **Version:** 00000000_00

## Tools

### Batch Create CRM Records

**Slug:** `TWENTY_BATCH_CREATE_RECORDS`

Create 1-60 records of one type. Supported standard fields: companies (name, domainName, linkedinLink, annualRevenue, address, accountOwnerId); people (name, emails, linkedinLink, jobTitle, phones, avatarUrl, companyId); opportunities (name, amount, closeDate, stage, companyId, pointOfContactId, ownerId); tasks (title, bodyV2, dueAt, status, assigneeId). Custom fields, workspace-specific enum variants, and upsert are not supported.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `records` | array | Yes | One to 60 records for the selected type. Unknown fields, composite keys, and fields belonging to another record type are rejected. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CRM Record

**Slug:** `TWENTY_CREATE_RECORD`

Create one company, person, opportunity, or task using the supported standard fields in the parameter schema. Custom fields and workspace-specific enum variants are not supported.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `depth` | integer ("0" | "1") | No | Use 0 for the created record only or 1 to include direct relations. |
| `record` | string | Yes | Fields for the selected record type. Unknown fields, composite keys, and fields belonging to another record type are rejected. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete CRM Record

**Slug:** `TWENTY_DELETE_RECORD`

Permanently delete one company, person, opportunity, or task by UUID. Use only for a specifically identified record; this does not delete by filter or in bulk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string | Yes | Exact UUID of the record to permanently delete. Confirm it with Get CRM Record first. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type containing the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get CRM Record

**Slug:** `TWENTY_GET_RECORD`

Get one company, person, opportunity, or task by its Twenty UUID, optionally including direct relations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `depth` | integer ("0" | "1") | No | Use 0 for the primary record only or 1 to include direct relations. |
| `record_id` | string | Yes | Twenty record UUID, usually obtained from List CRM Records or Create CRM Record. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type containing the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List CRM Fields

**Slug:** `TWENTY_LIST_FIELDS`

List field definitions from the connected Twenty workspace to discover exact field names, types, editability, nullability, uniqueness, and relation targets for schema inspection and filters. Record writes accept only fields exposed by the Create or Update CRM Record parameter schema.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum field definitions to return in this page (1-200). |
| `cursor` | string | No | Opaque next cursor from a previous response; omit for the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List CRM Objects

**Slug:** `TWENTY_LIST_OBJECTS`

List standard and custom object definitions in the connected Twenty workspace for schema inspection. Record tools currently support only companies, people, opportunities, and tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum object definitions to return in this page (1-200). |
| `cursor` | string | No | Opaque next cursor from a previous response; omit for the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List CRM Records

**Slug:** `TWENTY_LIST_RECORDS`

List companies, people, opportunities, or tasks with Twenty filter syntax, ordering, relation depth, and forward cursor pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `depth` | integer ("0" | "1") | No | Use 0 for primary records only or 1 to include direct relations. |
| `limit` | integer | No | Maximum records to return in this page (1-60). |
| `cursor` | string | No | Opaque next cursor from a previous response. Omit for the first page and pass a returned cursor back unchanged; never pass the literal string null. |
| `filter` | string | No | Twenty filter expression, for example name[ilike]:"%acme%" or status[eq]:"IN_PROGRESS". Use List CRM Fields to confirm field names and types. |
| `order_by` | string | No | Twenty ordering expression, for example createdAt[DescNullsLast]. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update CRM Record

**Slug:** `TWENTY_UPDATE_RECORD`

Partially update one company, person, opportunity, or task by UUID using the supported standard fields in the parameter schema; only supplied fields change. Custom fields and workspace-specific enum variants are not supported.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `depth` | integer ("0" | "1") | No | Use 0 for the updated record only or 1 to include direct relations. |
| `changes` | string | Yes | Non-empty partial record for the selected type. Unknown fields, nested composite keys, and fields belonging to another record type are rejected. |
| `record_id` | string | Yes | UUID of the record to update. |
| `object_type` | string ("companies" | "people" | "opportunities" | "tasks") | Yes | CRM record type containing the record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
