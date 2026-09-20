# Snowflake

Snowflake is a cloud-based data warehouse offering elastic scaling, secure data sharing, and SQL analytics across multiple cloud environments

- **Category:** databases
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 17
- **Triggers:** 0
- **Slug:** `SNOWFLAKE`
- **Version:** 20260903_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Snowflake?

For a step-by-step guide on creating and configuring your own Snowflake OAuth credentials with Composio, see [How to create OAuth credentials for Snowflake](https://composio.dev/auth/snowflake).

### How do I create a Snowflake OAuth app?

Example Snowflake SQL to create a security integration for OAuth:

```sql
CREATE SECURITY INTEGRATION oauth_custom_all_roles
  TYPE = oauth
  ENABLED = true
  OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'
  OAUTH_REDIRECT_URI = 'https://your-app.com/oauth/callback'
  OAUTH_REFRESH_TOKEN_VALIDITY = 7776000;
```

### How do I configure roles and permissions for Snowflake?

Ensure the OAuth app and Snowflake roles, databases, and schemas are configured correctly for the integration.

### Does Snowflake require per-user OAuth credentials?

Yes. Snowflake OAuth is tied to the user's Snowflake account and security integration. There is not a single generic Snowflake OAuth app that can safely cover every account, role setup, redirect URI, and security policy.

For a production integration, each Snowflake user should bring the OAuth client credentials from the security integration configured in their own Snowflake account. Create a Composio auth config with those credentials, then let the user connect with the account identifier and permissions for that Snowflake account. This keeps the connection aligned with the user's Snowflake roles, databases, schemas, and refresh-token policy.

## Tools

### Cancel Statement Execution

**Slug:** `SNOWFLAKE_CANCEL_STATEMENT_EXECUTION`

Cancels the execution of a running SQL statement. Use this action to stop a long-running query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | string | No | Unique ID (a UUID) of the API request. This is an optional parameter that can be used to track the request. |
| `statement_handle` | string | Yes | The handle of the statement to be cancelled. This can be obtained from the response of the execute_statement action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Statement Status

**Slug:** `SNOWFLAKE_CHECK_STATEMENT_STATUS`

Retrieves the status and results of a previously submitted SQL statement using its statement handle. Use this to poll async queries submitted via SNOWFLAKE_SUBMIT_SQL_STATEMENT; call repeatedly until status is no longer pending. Use SNOWFLAKE_CANCEL_STATEMENT to abort a hanging query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `partition` | integer | No | The partition number to return. The size of each partition is determined by Snowflake. |
| `requestId` | string | No | Unique ID (UUID) of the API request for idempotency. |
| `statementHandle` | string | Yes | The handle of the statement to be checked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Drop Warehouse

**Slug:** `SNOWFLAKE_DROP_WAREHOUSE`

Drops (permanently deletes) a warehouse in Snowflake. This operation is irreversible — once a warehouse is dropped, it cannot be recovered. Use this action when you need to permanently remove a warehouse that is no longer needed. Requires OWNERSHIP privilege on the warehouse.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Identifier (i.e. name) for the warehouse to drop. The value is case-sensitive and must match the exact warehouse name in Snowflake. |
| `if_exists` | boolean | No | If true, the endpoint does not throw an error if the warehouse does not exist. It returns a 200 success response without taking action. If false, the endpoint throws an error if the warehouse doesn't exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute SQL

**Slug:** `SNOWFLAKE_EXECUTE_SQL`

Execute SQL statements in Snowflake and retrieve results. Supports SELECT queries for data retrieval, DDL statements (CREATE, ALTER, DROP) for schema management, and DML statements (INSERT, UPDATE, DELETE) for data modification. Returns comprehensive result metadata including column types, row counts, and execution status. Unquoted SQL identifiers are auto-uppercased by Snowflake — use matching case in `database`, `schema_name`, `warehouse`, and `role` parameters to avoid 'object not found' errors. Always apply explicit time-range filters and a LIMIT clause to unbounded SELECT queries to prevent large, slow result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role name to use for execution (case-sensitive). If not specified, uses the user's DEFAULT_ROLE setting. |
| `timeout` | integer | No | Execution timeout in seconds. Set to 0 for maximum timeout (604800 seconds). If not specified, uses the default timeout. |
| `bindings` | object | No | Values of bind variables in the SQL statement. Use this for parameterized queries to prevent SQL injection. |
| `database` | string | No | Database name to use for execution (case-sensitive). If not specified, uses the user's DEFAULT_NAMESPACE setting. |
| `statement` | string | Yes | SQL statement(s) to execute. Supports SELECT queries, DDL (CREATE, ALTER, DROP), and DML (INSERT, UPDATE, DELETE). Multiple statements can be separated by semicolons; they will be executed in sequence automatically. When querying INFORMATION_SCHEMA, always filter on both `table_schema` and `table_catalog` and wrap mixed AND/OR conditions in parentheses. For multi-statement batches, test critical sections in isolation first — a single failing statement obscures root cause. |
| `warehouse` | string | No | Warehouse name to use for query execution (case-sensitive). Required for queries that need compute resources. If not specified, uses the user's DEFAULT_WAREHOUSE setting. Suspended or undersized warehouses cause high latency or timeouts; verify the warehouse is active and appropriately sized before execution. |
| `parameters` | object | No | Session parameters to set for the statement execution. These are Snowflake session-level parameters. |
| `schema_name` | string | No | Schema name to use for execution (case-sensitive). If not specified, uses the user's DEFAULT_NAMESPACE setting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Catalog Integration

**Slug:** `SNOWFLAKE_FETCH_CATALOG_INTEGRATION`

Retrieves detailed configuration and metadata for a specific catalog integration. Catalog integrations allow Snowflake to connect to external Apache Iceberg catalogs (AWS Glue, Snowflake Open Catalog/Polaris, or Apache Iceberg REST catalogs) to query Iceberg tables managed by those external systems.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name (identifier) of the catalog integration to fetch details for. This is case-sensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Active Scheduled Maintenances

**Slug:** `SNOWFLAKE_GET_ACTIVE_SCHEDULED_MAINTENANCES`

Retrieves a list of any active scheduled maintenances currently in the In Progress or Verifying state.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Scheduled Maintenances

**Slug:** `SNOWFLAKE_GET_ALL_SCHEDULED_MAINTENANCES`

Retrieves a list of the 50 most recent scheduled maintenances, including those in the Completed state.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Component Status

**Slug:** `SNOWFLAKE_GET_COMPONENT_STATUS`

Retrieves the status of individual components, each listed with its current status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit number of components returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Status Rollup

**Slug:** `SNOWFLAKE_GET_STATUS_ROLLUP`

Retrieves the status rollup for the entire page, including indicators and human-readable descriptions of the blended component status.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Status Summary

**Slug:** `SNOWFLAKE_GET_STATUS_SUMMARY`

Retrieves the current status summary from Snowflake's public status page (status.snowflake.com). Returns overall system status, operational status of all regional components (AWS, Azure, GCP regions), any unresolved incidents, and upcoming or in-progress scheduled maintenances. This is a public endpoint that provides global Snowflake service status, not account-specific information.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Unresolved Incidents

**Slug:** `SNOWFLAKE_GET_UNRESOLVED_INCIDENTS`

Retrieves a list of any unresolved incidents from the Snowflake status page. This endpoint returns incidents currently in the Investigating, Identified, or Monitoring state. Returns an empty list if there are no active incidents. This is a public status page API that does not require authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Upcoming Scheduled Maintenances

**Slug:** `SNOWFLAKE_GET_UPCOMING_SCHEDULED_MAINTENANCES`

Retrieves upcoming scheduled maintenances from Snowflake's public status page. This action queries the Snowflake status API to get a list of any scheduled maintenance events that are still in the 'Scheduled' state (not yet started or completed). The response includes maintenance details such as impact level, scheduled time windows, incident updates, and direct links to the maintenance notices. Note: This uses Snowflake's public status API and does not require authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Databases

**Slug:** `SNOWFLAKE_SHOW_DATABASES`

Lists all databases for which you have access privileges. Shows database metadata including name, creation date, owner, retention time, and more. Can filter results and include dropped databases within Time Travel retention period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role to use when executing the statement. |
| `limit` | integer | No | Maximum number of rows to return. Cannot exceed 10000. |
| `terse` | boolean | No | If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name). |
| `history` | boolean | No | If true, includes dropped databases that are still within Time Travel retention period. |
| `timeout` | integer | No | Timeout in seconds for statement execution. |
| `from_name` | string | No | Used with LIMIT for pagination. Returns results starting from databases whose names match this string. |
| `warehouse` | string | No | Warehouse to use for the query (though SHOW DATABASES doesn't require a running warehouse). |
| `starts_with` | string | No | Filters results by databases whose names start with this string. Case-sensitive. |
| `like_pattern` | string | No | Filters results by database name using SQL wildcard pattern (% and _). Case-insensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Schemas

**Slug:** `SNOWFLAKE_SHOW_SCHEMAS`

Lists all schemas for which you have access privileges. Shows schema metadata including name, creation date, owner, database, retention time, and more. Can filter results and include dropped schemas within Time Travel retention period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role to use when executing the statement. |
| `limit` | integer | No | Maximum number of rows to return. Cannot exceed 10000. |
| `terse` | boolean | No | If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name). |
| `history` | boolean | No | If true, includes dropped schemas that are still within Time Travel retention period. |
| `timeout` | integer | No | Timeout in seconds for statement execution. |
| `database` | string | No | Database context for the query. |
| `in_scope` | string | No | Scope for the command. Options: 'ACCOUNT', 'DATABASE', or a specific database name. |
| `from_name` | string | No | Used with LIMIT for pagination. Returns results starting from schemas whose names match this string. |
| `warehouse` | string | No | Warehouse to use for the query (though SHOW SCHEMAS doesn't require a running warehouse). |
| `starts_with` | string | No | Filters results by schemas whose names start with this string. Case-sensitive. |
| `like_pattern` | string | No | Filters results by schema name using SQL wildcard pattern (% and _). Case-insensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show Tables

**Slug:** `SNOWFLAKE_SHOW_TABLES`

Lists all tables for which you have access privileges. Shows table metadata including name, creation date, owner, database, schema, row count, size in bytes, clustering keys, and more. Can filter results and include dropped tables within Time Travel retention period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role to use when executing the statement. |
| `limit` | integer | No | Maximum number of rows to return. Cannot exceed 10000. |
| `terse` | boolean | No | If true, returns only a subset of output columns (created_on, name, kind, database_name, schema_name). |
| `schema` | string | No | Schema context for the query. |
| `history` | boolean | No | If true, includes dropped tables that are still within Time Travel retention period. |
| `timeout` | integer | No | Timeout in seconds for statement execution. |
| `database` | string | No | Database context for the query. |
| `in_scope` | string | No | Scope for the command. Options: 'ACCOUNT', 'DATABASE', 'SCHEMA', or specific database/schema names. |
| `from_name` | string | No | Used with LIMIT for pagination. Returns results starting from tables whose names match this string. |
| `warehouse` | string | No | Warehouse to use for the query (though SHOW TABLES doesn't require a running warehouse). |
| `starts_with` | string | No | Filters results by tables whose names start with this string. Case-sensitive. |
| `like_pattern` | string | No | Filters results by table name using SQL wildcard pattern (% and _). Case-insensitive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Submit SQL Statement (Deprecated)

**Slug:** `SNOWFLAKE_SUBMIT_SQL_STATEMENT`

DEPRECATED: Use ExecuteSql instead. Submits a SQL statement for execution. Execution is asynchronous; monitor status with SNOWFLAKE_CHECK_STATEMENT_STATUS for long-running queries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string | No | Role to use when executing the statement. The value in this field is case-sensitive. If you omit this field, the SQL API uses the value of the DEFAULT_ROLE property of the user. |
| `schema` | string | No | Schema in which the statement should be executed. The value in this field is case-sensitive. If you omit this field, the SQL API uses the schema from the value of the DEFAULT_NAMESPACE property of the user. |
| `timeout` | integer | No | Timeout in seconds for statement execution. If the execution of a statement takes longer than the specified timeout, the execution is automatically canceled. To set the timeout to the maximum value (604800 seconds), set timeout to 0. If this field is not set, the timeout specified by the STATEMENT_TIMEOUT_IN_SECONDS parameter is used. |
| `bindings` | object | No | Values of bind variables in the SQL statement. When executing the statement, Snowflake replaces placeholders ( ? and :name) in the statement with these specified values. |
| `database` | string | No | Database in which the statement should be executed. The value in this field is case-sensitive. If you omit this field, the SQL API uses the database from the value of the DEFAULT_NAMESPACE property of the user. |
| `statement` | string | Yes | The SQL statement to execute. Unquoted identifiers are automatically uppercased by Snowflake; quote identifiers to preserve case. When querying INFORMATION_SCHEMA views, filter by both table_schema and table_catalog to avoid results from unintended databases or schemas. |
| `warehouse` | string | No | Warehouse to use when executing the statement. The value in this field is case-sensitive. If you omit this field, the SQL API uses the value of the DEFAULT_WAREHOUSE property of the user. |
| `parameters` | object | No | Session parameters that you want to set for this request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate Credential

**Slug:** `SNOWFLAKE_VALIDATE_CREDENTIAL`

Validates Snowflake credentials by executing a lightweight test query. Returns session information if credentials are valid, or error details if authentication fails. Use this action when you need to verify that API credentials are properly configured and have access to the Snowflake account before executing other operations. This check does not require compute resources (warehouse) and completes quickly.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
