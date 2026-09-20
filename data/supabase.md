# Supabase

Supabase is an open-source backend-as-a-service providing a Postgres database, authentication, storage, and real-time subscription APIs for building modern applications

- **Category:** developer tools
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 129
- **Triggers:** 0
- **Slug:** `SUPABASE`
- **Version:** 20260917_00

## Frequently Asked Questions

### Limit Supabase scopes in the user's OAuth app, not through Composio's default app

For Supabase permission scoping, configure the desired permissions in the user's own OAuth app and create the Composio auth config with that app. The default Composio OAuth app may be configured with broader permissions.

## Tools

### Create project api key

**Slug:** `SUPABASE_ALPHA_CREATE_API_KEY`

Creates a 'publishable' or 'secret' API key for an existing Supabase project, optionally with a description; 'secret' keys can have customized JWT templates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `name` | string | Yes | Name for the API key. Must start with a lowercase letter or underscore, followed only by lowercase alphanumeric characters or underscores. Example: 'my_api_key_01'. |
| `type` | string ("publishable" | "secret") | Yes | Specifies the type of API key: 'publishable' for client-side use or 'secret' for server-side operations. |
| `description` | string | No | Optional human-readable description for the API key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an API key from the project

**Slug:** `SUPABASE_ALPHA_DELETE_API_KEY`

Permanently deletes a specific API key (identified by `id`) from a Supabase project (identified by `ref`), revoking its access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the API key that needs to be deleted from the project. |
| `ref` | string | Yes | The unique reference ID of the Supabase project from which the API key is to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete third party auth config

**Slug:** `SUPABASE_ALPHA_DELETE_THIRD_PARTY_AUTH_INTEGRATION`

Removes a third-party authentication provider (e.g., Google, GitHub) from a Supabase project's configuration; this immediately prevents users from logging in via that method.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `tpa_id` | string | Yes | The unique identifier (ID) of the third-party authentication provider configuration to be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a third-party integration

**Slug:** `SUPABASE_ALPHA_GET_THIRD_PARTY_INTEGRATION`

Retrieves the detailed configuration for a specific third-party authentication (TPA) provider, identified by `tpa_id`, within an existing Supabase project specified by `ref`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (reference) of the Supabase project. |
| `tpa_id` | string | Yes | The unique identifier of the specific third-party authentication provider configuration to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List third-party auth integrations for project

**Slug:** `SUPABASE_ALPHA_LIST_THIRD_PARTY_AUTH_INTEGRATIONS`

Lists all configured third-party authentication provider integrations for an existing Supabase project (using its `ref`), suitable for read-only auditing or verifying current authentication settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an API key for the project

**Slug:** `SUPABASE_ALPHA_UPDATE_API_KEY`

Updates an existing Supabase project API key's `description` and/or `secret_jwt_template` (which defines its `role`); does not regenerate the key string.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the API key that needs to be updated. |
| `ref` | string | Yes | The unique reference ID of the Supabase project to which the API key belongs. |
| `description` | string | No | Optional new description for the API key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Apply a database migration

**Slug:** `SUPABASE_APPLY_A_MIGRATION`

Tool to apply database migrations to a Supabase project. Use when you need to execute SQL schema changes, create tables, alter columns, or run other DDL/DML operations as part of a tracked migration. This is a Beta feature in the Supabase Management API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project (e.g., 'pamqaklsszmjzugtywow'). Found in Project Settings > General > Reference ID. |
| `name` | string | No | A unique name for the migration to track it in the migration history. If not provided, a default name will be assigned. |
| `query` | string | Yes | The SQL migration query to execute against the project's database. Must be at least 1 character long. |
| `rollback` | string | No | Optional SQL query to rollback/undo this migration if needed. |
| `idempotency_key` | string | No | A unique key to ensure the same migration is tracked only once. If provided, prevents duplicate migrations with the same key from being applied. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Beta activate custom hostname for project

**Slug:** `SUPABASE_BETA_ACTIVATE_CUSTOM_HOSTNAME`

Activates a previously configured custom hostname for a Supabase project, assuming DNS settings are verified externally.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (project ID) of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Activate vanity subdomain for project

**Slug:** `SUPABASE_BETA_ACTIVATE_VANITY_SUBDOMAIN`

Activates a vanity subdomain for the specified Supabase project (e.g., 'my-brand.supabase.co'). Important notes: - Vanity subdomains require a paid plan (Pro/Team/Enterprise) - Usage of vanity subdomains and custom domains is mutually exclusive - After activation, your project's auth services will no longer work on the original {project-ref}.supabase.co hostname - Schedule a downtime window to update client code and OAuth providers before activating

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `vanity_subdomain` | string | Yes | Vanity subdomain to activate (e.g., 'my-example-brand'). Must be 1-63 alphanumeric characters or hyphens; cannot start or end with a hyphen. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Authorize user through OAuth

**Slug:** `SUPABASE_BETA_AUTHORIZE_USER_THROUGH_OAUTH`

Generates a Supabase OAuth 2.0 authorization URL for user redirection. IMPORTANT: This action requires a pre-registered OAuth client_id and a redirect_uri that matches one of the pre-registered URIs for that OAuth application. Without a valid registered OAuth application, this endpoint will return a 400 error. To use this action: 1. Register an OAuth application in the Supabase dashboard 2. Use the client_id from the registered application 3. Ensure redirect_uri matches one of the registered callback URLs

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scope` | string | No | Space-separated list of OAuth scopes for requested permissions on user resources (e.g., 'email profile', 'storage.objects.read'). |
| `state` | string | No | Opaque value to maintain state between request and callback; returned unmodified to aid CSRF prevention. |
| `client_id` | string | Yes | Unique identifier for the OAuth client application, registered with Supabase. Must be a valid client_id from a registered OAuth application. |
| `redirect_uri` | string | Yes | URI where Supabase redirects the user after authorization; must exactly match a registered URI for the client application. |
| `response_mode` | string | No | Specifies how authorization response parameters are returned (e.g., 'query', 'fragment', 'form_post'). Default is determined by `response_type` if not specified. |
| `response_type` | string ("code" | "id_token token" | "token") | Yes | Specifies the authorization flow type: 'code' for Authorization Code Grant; 'token' for Implicit Grant (access token); 'id_token token' for OIDC hybrid flows (ID and access tokens). |
| `code_challenge` | string | No | PKCE code challenge to secure authorization code grants, typically a BASE64URL-encoded SHA256 hash of `code_verifier`. |
| `code_challenge_method` | string ("S256" | "plain" | "sha256") | No | Method to derive `code_challenge` for PKCE: 'S256'/'sha256' for SHA256 hashing; 'plain' sends verifier as is (not for production if hashing possible). Required if `code_challenge` is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check vanity subdomain availability

**Slug:** `SUPABASE_BETA_CHECK_VANITY_SUBDOMAIN_AVAILABILITY`

Checks if a specific vanity subdomain is available for a Supabase project; this action does not reserve or assign the subdomain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `vanity_subdomain` | string | Yes | The desired vanity subdomain to check for availability (e.g., 'my-app'). Must be 1-63 alphanumeric characters or hyphens; cannot start or end with a hyphen. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Setup read replica for project

**Slug:** `SUPABASE_BETA_CREATE_READ_REPLICA`

Provisions a read-only replica for a Supabase project in a specified, Supabase-supported AWS region to enhance read performance and reduce latency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `read_replica_region` | string ("ap-east-1" | "ap-northeast-1" | "ap-northeast-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | "eu-central-1" | "eu-central-2" | "eu-north-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2") | Yes | AWS region for the read replica; selecting one closer to users improves performance and reduces latency. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enable project database webhooks

**Slug:** `SUPABASE_BETA_ENABLE_DATABASE_WEBHOOKS`

Enables database webhooks for the Supabase project `ref`, triggering real-time notifications for INSERT, UPDATE, or DELETE events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier for the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Beta get project's custom hostname config

**Slug:** `SUPABASE_BETA_GET_PROJECT_CUSTOM_HOSTNAME_CONFIG`

Retrieves a Supabase project's custom hostname configuration, including its status, SSL certificate, and ownership verification, noting that availability may depend on the project's plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. This ID can typically be found in your project's dashboard URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve network bans for project

**Slug:** `SUPABASE_BETA_GET_PROJECT_NETWORK_BANS`

Retrieves the list of banned IPv4 addresses for a Supabase project using its unique project reference string; this is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique project reference identifier for the Supabase project. Must be a valid 20-character project ref. You can retrieve valid project refs using the 'List all projects' action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project network restrictions

**Slug:** `SUPABASE_BETA_GET_PROJECT_NETWORK_RESTRICTIONS`

Retrieves the network restriction settings (IP allowlists) for a Supabase project. Use this action to: - Check which IPv4/IPv6 CIDR blocks are allowed to connect to the project's database - Verify if network restrictions are enabled (entitlement: "allowed") or disabled ("disallowed") - Audit current network security configuration - Check if network restrictions have been modified (old_config present) Note: Default values 0.0.0.0/0 (IPv4) and ::/0 (IPv6) mean all IPs are allowed. Network restrictions require a Pro, Team, or Enterprise plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique project reference ID (also called project ID or ref). This is a 20-character alphanumeric string that identifies the Supabase project. Can be found in the project URL or retrieved via SUPABASE_LIST_ALL_PROJECTS. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project pgsodium config

**Slug:** `SUPABASE_BETA_GET_PROJECT_PGSODIUM_CONFIG`

Retrieves the PGSodium configuration, including the root encryption key, for an existing Supabase project identified by its `ref`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project SSL enforcement configuration

**Slug:** `SUPABASE_BETA_GET_PROJECT_SSL_ENFORCEMENT_CONFIG`

Retrieves the SSL enforcement configuration for a specified Supabase project, indicating if SSL connections are mandated for its database.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. This can typically be found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project-ref>`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get current vanity subdomain config

**Slug:** `SUPABASE_BETA_GET_VANITY_SUBDOMAIN_CONFIG`

Fetches the current vanity subdomain configuration, including its status and custom domain name, for a Supabase project identified by its reference ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which to fetch the vanity subdomain configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove project network bans

**Slug:** `SUPABASE_BETA_REMOVE_NETWORK_BANS`

Removes specified IPv4 addresses from a Supabase project's network ban list, granting immediate access; IPs not currently banned are ignored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `ipv4_addresses` | array | Yes | A list of IPv4 addresses to be removed from the project's network ban list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove read replica

**Slug:** `SUPABASE_BETA_REMOVE_READ_REPLICA`

Remove a read replica from a Supabase project (Pro plan or higher required). This beta endpoint initiates the removal of a specified read replica database. The operation is irreversible. Before removal, ensure all application traffic is redirected from the replica to the primary database. Requirements: - Project must be on Pro plan or higher - Bearer token with infra_read_replicas_write permission (FGA) - Valid read replica database identifier Note: Returns 201 on success with an empty response body.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique project reference ID (20 lowercase characters, e.g. 'abcdefghijklmnopqrst'). Found in project settings or URL. |
| `database_identifier` | string | Yes | The unique identifier of the read replica database to remove. Obtain from the project's database settings or read replica listing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute project database query

**Slug:** `SUPABASE_BETA_RUN_SQL_QUERY`

Executes a given SQL query against the project's database; use for advanced data operations or when standard API endpoints are insufficient, ensuring queries are valid PostgreSQL and sanitized. Use the get_table_schemas or generate_type_script_types tool to retrieve the table schema, then base your query on it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project (used in the URL path). Must be exactly 20 lowercase letters (a-z). Can be found in Project Settings > General > Reference ID in the Supabase Dashboard, or from the dashboard URL: https://supabase.com/dashboard/project/<project-ref>. Can also be provided as 'project_ref'. |
| `query` | string | Yes | The SQL query to be executed against the project's database. Can also be provided as 'sql'. CRITICAL - Single Quote Handling: Single quotes that delimit SQL string literals (e.g., 'John', '3 days') work normally when transmitted via JSON. However, apostrophes and single quotes WITHIN string content MUST be escaped using PostgreSQL's standard escaping (doubling the quote: ''). Examples: ✓ CORRECT: SELECT 'I''m here' (apostrophe in content is escaped as '') ✓ CORRECT: INSERT INTO users (bio) VALUES ('She said ''hello''') ✓ CORRECT: SELECT '{ "msg": "I''m ready" }'::jsonb (apostrophe inside JSON string is escaped) ✗ WRONG: SELECT 'I'm here' (syntax error - apostrophe breaks the string) ✗ WRONG: SELECT '{ "msg": "I'm ready" }'::jsonb (syntax error in JSON content) IMPORTANT - PostgreSQL Array Syntax: For columns of type text[], integer[], etc., do NOT use JSON array syntax like '["item1", "item2"]' as PostgreSQL will reject it. Use PostgreSQL array syntax instead: (1) ARRAY constructor: ARRAY['item1', 'item2'], or (2) Curly brace literal: '{"item1", "item2"}'. IMPORTANT - PostgreSQL Configuration Parameters: To reference Supabase secrets or config parameters, use current_setting() with the correct parameter name (e.g., current_setting('app.settings.my_secret')). Parameter names must not contain sanitization placeholders like '<URL>', '<IP_ADDRESS>', etc. Note: Complex DDL operations (CREATE TABLE with multiple indexes, CREATE VIEW with joins, large data migrations) may timeout if they exceed the Supabase API's internal timeout limit (~60 seconds). For long-running operations, consider breaking them into smaller queries or using a direct database connection. |
| `read_only` | boolean | No | If true, executes the query in a read-only transaction. Useful for safety when only fetching data without modifying the database. IMPORTANT: This parameter is incompatible with data modification statements. For INSERT, UPDATE, and DELETE statements, if set to true, it will be automatically overridden to false to allow the operation to proceed. For DDL statements (CREATE, ALTER, DROP, etc.), read_only=true will cause an error - you must set it to false or omit it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Beta update project network restrictions

**Slug:** `SUPABASE_BETA_UPDATE_PROJECT_NETWORK_RESTRICTIONS`

Updates and applies network access restrictions (IPv4/IPv6 CIDR lists) for a Supabase project, which may terminate existing connections not matching the new rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `dbAllowedCidrs` | array | No | List of IPv4 addresses or CIDR notations for database access; `[]` removes all IPv4 restrictions, `null`/omitted leaves current IPv4 restrictions unchanged. |
| `dbAllowedCidrsV6` | array | No | List of IPv6 addresses or CIDR notations for database access; `[]` removes all IPv6 restrictions, `null`/omitted leaves current IPv6 restrictions unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upgrade the project's PostgreSQL version

**Slug:** `SUPABASE_BETA_UPGRADE_PROJECT_POSTGRES_VERSION`

Initiates an asynchronous upgrade of a Supabase project's PostgreSQL database to a specified `target_version` from a selected `release_channel`, returning a `tracking_id` to monitor status; the `target_version` must be available in the chosen channel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The project's unique reference ID. |
| `target_version` | string | Yes | Target PostgreSQL version (e.g., '15.1.0.123'); must be available in the specified `release_channel`. |
| `release_channel` | string ("alpha" | "beta" | "ga" | "internal" | "withdrawn") | Yes | Release channel for selecting the PostgreSQL version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count action runs

**Slug:** `SUPABASE_COUNT_ACTION_RUNS`

Counts the number of action runs for a Supabase project using a HEAD request. Use this when you need to retrieve the total count of action runs without fetching the full list of runs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create new project

**Slug:** `SUPABASE_CREATE_A_PROJECT`

Creates a new Supabase project, requiring a unique name (no dots) within the organization; project creation is asynchronous.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the new project; must be unique within the organization and not contain dots. |
| `plan` | string ("free" | "pro") | No | Subscription plans (now set at the organization level). |
| `region` | string ("ap-east-1" | "ap-northeast-1" | "ap-northeast-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | "eu-central-1" | "eu-central-2" | "eu-north-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2") | Yes | Geographical region for the project's server and database. |
| `db_pass` | string | Yes | Password for the new database (required). Must be a secure password. IMPORTANT: Store this password securely as it cannot be retrieved later via the API and is needed for direct database connections. |
| `kps_enabled` | boolean | No | Deprecated and ignored. |
| `template_url` | string | No | Optional URL to a Supabase project template (e.g., from Git) to initialize the project. |
| `organization_id` | string | Yes | The actual organization ID or slug from your Supabase account. IMPORTANT: 'personal' is NOT a valid value - you must use the real organization ID returned by the 'List All Organizations' API endpoint (GET /v1/organizations) or found in your Supabase dashboard settings. |
| `postgres_engine` | string ("15") | No | Supported major versions of the PostgreSQL engine. |
| `release_channel` | string ("alpha" | "beta" | "ga" | "internal" | "withdrawn") | No | Available release channels for Supabase software. |
| `desired_instance_size` | string ("12xlarge" | "16xlarge" | "2xlarge" | "4xlarge" | "8xlarge" | "large" | "medium" | "micro" | "small" | "xlarge") | No | Available compute instance sizes for a Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk create secrets

**Slug:** `SUPABASE_CREATE_BULK_SECRETS`

Tool to bulk create secrets for a Supabase project. Use when you need to create multiple project secrets at once. Each secret name must not start with SUPABASE_.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (ref) of the Supabase project where secrets will be created. |
| `secrets` | array | Yes | List of secrets to create. Each secret must have a unique name that doesn't start with SUPABASE_. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a database branch

**Slug:** `SUPABASE_CREATE_DATABASE_BRANCH`

Creates a new, isolated database branch from an existing Supabase project (identified by `ref`), useful for setting up separate environments like development or testing, which can optionally be linked to a Git branch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the parent Supabase project. |
| `region` | string | No | Geographical region for the new database branch. |
| `git_branch` | string | No | Git branch name to associate with this database branch, linking database states to code branches. |
| `persistent` | boolean | No | Specifies if the branch is persistent (true) or ephemeral (false); ephemeral branches might be auto-deleted. |
| `branch_name` | string | Yes | A unique name for the new database branch. |
| `postgres_engine` | string ("15") | No | Desired PostgreSQL engine version for the new branch. |
| `release_channel` | string ("alpha" | "beta" | "ga" | "internal" | "withdrawn") | No | Release channel for Supabase features on this branch, determining feature stability. |
| `desired_instance_size` | string ("12xlarge" | "16xlarge" | "2xlarge" | "4xlarge" | "8xlarge" | "large" | "medium" | "micro" | "small" | "xlarge") | No | Compute instance size for the new database branch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a function

**Slug:** `SUPABASE_CREATE_FUNCTION`

Creates a new serverless Edge Function for a Supabase project (identified by `ref`), requiring valid JavaScript/TypeScript in `body` and a project-unique `slug` identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project's unique identifier (path parameter). |
| `body` | string | Yes | JavaScript or TypeScript source code for the Edge Function. |
| `name` | string | Yes | Human-readable name for the function. |
| `slug` | string | Yes | URL-friendly identifier for the function's route prefix. Must be unique within the project. |
| `import_map` | boolean | No | If true, enable import map for ES module resolution. |
| `verify_jwt` | boolean | No | If true, verify JWT in Authorization header before invoking the function. Set to false for public endpoints like webhooks. |
| `entrypoint_path` | string | No | Path to main function code, relative to project's functions directory. Defaults to `./index.ts` or `./index.js` in function's slug directory. |
| `import_map_path` | string | No | Path to import map JSON, relative to project's functions directory; used if `import_map` is true. Defaults to `import_map.json` in function's slug directory. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CLI login role

**Slug:** `SUPABASE_CREATE_LOGIN_ROLE`

Creates a temporary CLI login role for database access with specified permissions; use when setting up CLI authentication for development or administrative tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project reference ID (unique identifier for the Supabase project). |
| `read_only` | boolean | Yes | Whether the login role should have read-only permissions. Set to true for read-only access, false for full access. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an organization

**Slug:** `SUPABASE_CREATE_ORGANIZATION`

Creates a new Supabase organization, which serves as a top-level container for projects, billing, and team access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the new organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create project signing key

**Slug:** `SUPABASE_CREATE_PROJECT_SIGNING_KEY`

Create a new signing key for JWT authentication in a Supabase project. The key is created in standby status by default and must be activated separately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Can also be provided as 'project_ref'. |
| `status` | string ("in_use" | "standby") | No | Status of a signing key in request. |
| `algorithm` | string ("EdDSA" | "ES256" | "RS256" | "HS256") | Yes | The cryptographic algorithm to use for the signing key. HS256 is recommended for most use cases. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SSO provider configuration

**Slug:** `SUPABASE_CREATE_SSO_PROVIDER`

Creates a new SAML 2.0 Single Sign-On (SSO) provider for a Supabase project, requiring either `metadata_xml` or `metadata_url` for SAML IdP configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `type` | string ("saml") | Yes | Type of the SSO provider; 'saml' (SAML 2.0) is the only supported value. |
| `domains` | array | No | Email domains to associate with this SSO provider; users from these domains will be directed here for authentication. |
| `metadata_url` | string | No | URL to fetch SAML 2.0 metadata XML. Provide this or `metadata_xml`. |
| `metadata_xml` | string | No | SAML 2.0 metadata XML document as a string. Provide this or `metadata_url`. |
| `attribute__mapping__keys` | object | No | Maps SAML assertion attributes to custom Supabase JWT claims. Keys are JWT claim names; values specify SAML attribute extraction rules (e.g., `name`, `names`, `default`, `array`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new third-party auth integration

**Slug:** `SUPABASE_CREATE_THIRD_PARTY_AUTH_INTEGRATION`

Call this to add a new third-party authentication method (OIDC or JWKS) to a Supabase project for integrating external identity providers (e.g., for SSO); the API may also support `custom_jwks` if sent directly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |
| `jwks_url` | string | No | URL of the JSON Web Key Set (JWKS) for public key verification. Required if `oidc_issuer_url` is not provided. |
| `oidc_issuer_url` | string | No | URL of the OpenID Connect (OIDC) issuer. Required if `jwks_url` is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete all branches

**Slug:** `SUPABASE_DELETE_ALL_BRANCHES`

Disables preview branching for a Supabase project, which deletes all remaining branches. IMPORTANT: Before calling this endpoint, you must manually delete all non-default branches. The API will reject the request with a 422 error if non-default branches exist. Use this action when you need to completely disable the preview branching feature for a project. This action is irreversible - all branches will be permanently removed and preview branching will be disabled. Requirements: - Preview branching must be enabled on the project - All non-default branches must be deleted first - Project must be on Pro plan or above to have preview branching

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which all database branches will be deleted. This ID can be found in your project's dashboard URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete custom hostname config

**Slug:** `SUPABASE_DELETE_CUSTOM_HOSTNAME_CONFIG`

Deletes an active custom hostname configuration for the project identified by `ref`, reverting to the default Supabase-provided hostname; this action immediately makes the project inaccessible via the custom domain and requires subsequent updates to client, OAuth, and DNS settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which the custom hostname configuration will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete branch by id

**Slug:** `SUPABASE_DELETE_DATABASE_BRANCH`

Permanently and irreversibly deletes a specific, non-default database branch by its `branch_id`, without affecting other branches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch_id` | string | Yes | The unique identifier of the database branch to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete edge function

**Slug:** `SUPABASE_DELETE_EDGE_FUNCTION`

Deletes an Edge Function from a Supabase project by its slug. Use this action when you need to permanently remove a deployed Edge Function that is no longer needed or should be replaced. This action is irreversible — the function cannot be recovered once deleted, though you can redeploy it from source if needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project ref - unique identifier for the Supabase project. |
| `function_slug` | string | Yes | Function slug - URL-friendly identifier of the Edge Function to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an edge function by slug

**Slug:** `SUPABASE_DELETE_FUNCTION`

Permanently deletes a specific Edge Function (by `function_slug`) from a Supabase project (by `ref`); this action is irreversible and requires prior existence of both project and function.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project from which the function will be deleted. |
| `function_slug` | string | Yes | The unique identifier (slug) of the Edge Function to be deleted. This is typically the name given to the function upon creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete CLI login roles

**Slug:** `SUPABASE_DELETE_LOGIN_ROLES`

[Beta] Deletes existing login roles used by the Supabase CLI for the specified project. Use when you need to remove CLI authentication roles that were previously created for project access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique project reference identifier for the Supabase project from which CLI login roles will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a project

**Slug:** `SUPABASE_DELETE_PROJECT`

Permanently and irreversibly deletes a Supabase project and all associated resources, including databases, storage, and configurations. This action is irreversible — the project cannot be recovered once deleted. Use when you need to completely remove a project from your organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project reference identifier (unique identifier for the project). This is typically a 20-character alphanumeric string found in your project URL or via the List All Projects endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete vanity subdomain for project

**Slug:** `SUPABASE_DELETE_PROJECT_VANITY_SUBDOMAIN`

Permanently and irreversibly deletes an active vanity subdomain configuration for the specified Supabase project, reverting it to its default Supabase URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk delete secrets

**Slug:** `SUPABASE_DELETE_SECRETS`

Deletes one or more secrets from a Supabase project by their names. This action is irreversible - deleted secrets cannot be recovered. Use this action when you need to remove environment variables or configuration secrets that are no longer needed or should be replaced. Supports both single and bulk deletion operations through the same endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (ref) of the Supabase project whose secrets should be deleted. |
| `secret_names` | array | Yes | List of secret names to delete. Each name must match an existing secret in the project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove an SSO provider

**Slug:** `SUPABASE_DELETE_SSO_PROVIDER`

Deletes a specific SSO provider by its ID (`provider_id`) from a Supabase project (`ref`), which disables it and returns its details; ensure this action will not inadvertently lock out users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier for your Supabase project. |
| `provider_id` | string | Yes | The unique identifier (UUID) of the SSO provider to be removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deploy function

**Slug:** `SUPABASE_DEPLOY_FUNCTION`

Deploys Edge Functions to a Supabase project using multipart upload.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Supabase project reference ID (e.g. `qftqfrxipqlzcmjcatfc`). |
| `file` | object | No | File uploaded to Composio (via SDK/MCP). Supports both single TypeScript/JavaScript files and pre-built .zip archives. Use this for large files, binary content, or complex multi-file functions. NOTE: Provide ONLY ONE of file_content, file_url, or file - not multiple. |
| `slug` | string | No | Slug of the function to deploy. |
| `file_url` | string | No | Public URL to download the function code from. Supports GitHub raw URLs and other publicly accessible file URLs. NOTE: Provide ONLY ONE of file_content, file_url, or file - not multiple. |
| `bundleOnly` | boolean | No | If true, only bundle the function without publishing it. |
| `file_content` | string | No | Raw TypeScript/JavaScript source code as a string. Ideal for simple functions or when code is generated dynamically. NOTE: Provide ONLY ONE of file_content, file_url, or file - not multiple. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable preview branching

**Slug:** `SUPABASE_DISABLE_PREVIEW_BRANCHING`

Disables the preview branching feature for an existing Supabase project, identified by its unique reference ID (`ref`). Note: Preview branching must be enabled on the project for this operation to succeed. If the project does not have preview branching enabled, a 422 error will be returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which preview branching is to be disabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable project readonly mode

**Slug:** `SUPABASE_DISABLE_PROJECT_READONLY`

Temporarily disables a Supabase project's read-only mode for 15 minutes to allow write operations (e.g., for maintenance or critical updates), after which it automatically reverts to read-only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Exchange auth code for access and refresh token

**Slug:** `SUPABASE_EXCHANGE_OAUTH_TOKEN`

(Beta) Implements the OAuth 2.0 token endpoint to exchange an authorization code or refresh token for access/refresh tokens, based on `grant_type`. This is a standard OAuth 2.0 token endpoint that uses application/x-www-form-urlencoded content type as per OAuth 2.0 specification. Requires a valid registered OAuth application client_id and client_secret. For authorization_code grant type: - Requires valid authorization code obtained from the OAuth authorization flow - Optionally requires code_verifier if PKCE was used during authorization For refresh_token grant type: - Requires valid refresh_token from a previous token exchange

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Authorization code from the server; required if `grant_type` is 'authorization_code'. |
| `client_id` | string | Yes | Application's client ID. |
| `grant_type` | string ("authorization_code" | "refresh_token") | Yes | OAuth 2.0 grant type that dictates the token exchange flow. |
| `redirect_uri` | string | No | Redirect URI from the initial authorization; required if `grant_type` is 'authorization_code' and it was part of the original request. |
| `client_secret` | string | Yes | Application's client secret. |
| `code_verifier` | string | No | PKCE code verifier; required if PKCE was used with an 'authorization_code' grant type. |
| `refresh_token` | string | No | Refresh token for acquiring a new access token; required if `grant_type` is 'refresh_token'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Generate TypeScript types

**Slug:** `SUPABASE_GENERATE_TYPESCRIPT_TYPES`

Generates and retrieves TypeScript types from a Supabase project's database; any schemas specified in `included_schemas` must exist in the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which to generate TypeScript types. |
| `included_schemas` | string | No | Comma-separated database schema names to include in the generated TypeScript types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get action run status

**Slug:** `SUPABASE_GET_ACTION_RUN`

Retrieves the status and details of a specific action run, including its steps, timestamps, and configuration. Use this to monitor or check the progress of an action execution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Must be exactly 20 lowercase alphanumeric characters. |
| `run_id` | string | Yes | The unique identifier of the action run to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get action run logs

**Slug:** `SUPABASE_GET_ACTION_RUN_LOGS`

Retrieves the execution logs for a specific action run by its ID. Use this to debug action executions, view output messages, and investigate errors that occurred during action runs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. This is visible in your Supabase project URL (e.g., https://supabase.com/dashboard/project/{ref}). |
| `run_id` | string | Yes | The unique identifier for the action run. This is returned when an action is triggered or can be retrieved from the actions list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project auth config

**Slug:** `SUPABASE_GET_AUTH_CONFIG`

Retrieves the complete authentication configuration for a Supabase project. Use this action when you need to inspect auth settings, OAuth provider configurations, MFA policies, email/SMS templates, security policies, or webhook hooks. Returns all auth configuration fields including enabled providers (Apple, Google, GitHub, etc.), JWT settings, rate limits, password requirements, session policies, and mailer configuration. This is a read-only operation that does not modify any settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Can also be provided as 'project_ref'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Available Regions

**Slug:** `SUPABASE_GET_AVAILABLE_REGIONS`

Tool to get the list of available regions for creating a new Supabase project. Use when you need to determine which regions are available for project deployment, or to get region recommendations based on geographic location and instance size requirements. Note: This is a Beta endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `continent` | string ("NA" | "SA" | "EU" | "AF" | "AS" | "OC" | "AN") | No | Continent codes for regional recommendations. |
| `organization_slug` | string | Yes | Slug of your organization. This is required to retrieve available regions for project creation. |
| `desired_instance_size` | string ("pico" | "nano" | "micro" | "small" | "medium" | "large" | "xlarge" | "2xlarge" | "4xlarge" | "8xlarge" | "12xlarge" | "16xlarge" | "24xlarge" | "24xlarge_optimized_memory" | "24xlarge_optimized_cpu" | "24xlarge_high_memory" | "48xlarge" | "48xlarge_optimized_memory" | "48xlarge_optimized_cpu" | "48xlarge_high_memory") | No | Available instance sizes for Supabase projects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a database branch

**Slug:** `SUPABASE_GET_BRANCH`

Retrieves detailed information about a specific database branch by its name and project reference. Use this to check branch status, configuration, and metadata before performing operations on the branch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference identifier (project ref) of the parent Supabase project. This ID can be found in your project's dashboard URL. |
| `name` | string | Yes | The unique name of the database branch to retrieve (e.g., 'test-branch-fix', 'staging', 'feature-x'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get database branch config

**Slug:** `SUPABASE_GET_DATABASE_BRANCH_CONFIG`

Retrieves the read-only configuration and status for a Supabase database branch, typically for monitoring or verifying its settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch_id` | string | Yes | Project reference (ref) for the database branch. Must be exactly 20 lowercase alphabetic characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Database Metadata

**Slug:** `SUPABASE_GET_DATABASE_METADATA`

Gets database metadata for the given project. Returns information about databases, schemas, and tables structure. Note: This endpoint is deprecated and may be removed in future versions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project ref. The unique reference ID of the Supabase project (visible in your Supabase project URL). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a function

**Slug:** `SUPABASE_GET_FUNCTION`

Retrieves detailed information, metadata, configuration, and status for a specific Edge Function using its project reference ID and function slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Must be exactly 20 lowercase alphanumeric characters (letters a-z and digits 0-9 only, no hyphens, underscores, or special characters). You can find this in your Supabase project URL (e.g., https://supabase.com/dashboard/project/<ref>) or by using the 'List all projects' API. |
| `function_slug` | string | Yes | The unique identifier (slug) for the Edge Function. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a function body

**Slug:** `SUPABASE_GET_FUNCTION_BODY`

Retrieves the source code (body) for a specified serverless Edge Function using its project reference and function slug; this is a read-only operation that does not execute the function or return runtime logs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `function_slug` | string | Yes | The unique identifier (slug) of the serverless Edge Function whose body is to be retrieved. This is typically the function's name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get API Health Status

**Slug:** `SUPABASE_GET_HEALTH`

Tool to check the health status of the Supabase API. Use when you need to verify API availability or troubleshoot connectivity issues.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get JIT access config

**Slug:** `SUPABASE_GET_JIT_ACCESS_CONFIG`

[Beta] Retrieves the project's just-in-time (JIT) access configuration, including user roles and their expiration settings. Use this to check temporary access grants and their validity periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Can also be provided as 'project_ref'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get legacy signing key

**Slug:** `SUPABASE_GET_LEGACY_SIGNING_KEY`

Retrieves the signing key information for the JWT secret imported as signing key for this project. This endpoint is deprecated and will be removed in the future; check for HTTP 404 Not Found which indicates the endpoint is no longer available.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a migration

**Slug:** `SUPABASE_GET_MIGRATION`

Retrieves a specific database migration entry from the migration history using its version identifier. Use when you need to inspect migration details, SQL statements, or rollback commands for a specific migration version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Must be exactly 20 lowercase alphanumeric characters (letters a-z and digits 0-9 only, no hyphens, underscores, or special characters). You can find this in your Supabase project URL (e.g., https://supabase.com/dashboard/project/<ref>) or by using the 'List all projects' API. |
| `version` | string | Yes | The version identifier of the migration to fetch. Typically a timestamp-based identifier (e.g., '20260216042751'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get information about an organization

**Slug:** `SUPABASE_GET_ORGANIZATION`

Fetches comprehensive details for a specific Supabase organization using its unique slug.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The unique, URL-friendly identifier of the organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get performance advisors

**Slug:** `SUPABASE_GET_PERFORMANCE_ADVISORS`

Retrieves project performance advisors for a Supabase project. Returns a list of performance lints that identify potential issues and optimization opportunities. Note: This endpoint is deprecated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. The project must belong to the authenticated user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project

**Slug:** `SUPABASE_GET_PROJECT`

Retrieves detailed information about a specific Supabase project by its unique reference ID. Use when you need to get comprehensive project details including status, database configuration, and metadata. Authentication: - Requires a valid Bearer token in the Authorization header. - Token format: 'Bearer <access_token>' where access_token is either: - A Personal Access Token (PAT) generated from https://supabase.com/dashboard/account/tokens - An OAuth2 access token with the 'project_admin_read' scope Required Scope: - project_admin_read: Allows retrieval of project information. Returns: Project object containing id, ref, name, organization details, region, status, database configuration, and created_at timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project ref - unique identifier (20 lowercase letters) for the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project API key

**Slug:** `SUPABASE_GET_PROJECT_API_KEY`

Retrieves details of a specific API key for a Supabase project by its UUID. Use when you need to inspect a single key's configuration, type, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | UUID of the API key (must be UUID format from publishable/secret type keys, not legacy key names like 'anon' or 'service_role'). You can get this ID from the List Project API Keys action. |
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |
| `reveal` | boolean | No | If true, reveals the full API key value in the response. If false or omitted, secret key values will be partially redacted. Per Supabase's security model, secrets are hidden by default. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project API keys

**Slug:** `SUPABASE_GET_PROJECT_API_KEYS`

Retrieves all API keys for an existing Supabase project, specified by its unique reference ID (`ref`); this is a read-only operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. The project must belong to the authenticated user. |
| `reveal` | boolean | No | If true, reveals the full API key values in the response. If false or omitted, secret key values will be partially redacted. Per Supabase's security model, secrets are hidden by default. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project legacy API keys status

**Slug:** `SUPABASE_GET_PROJECT_LEGACY_API_KEYS`

Checks whether JWT-based legacy API keys (anon, service_role) are enabled for a Supabase project. This API endpoint is deprecated and may be removed in the future (returns HTTP 404 Not Found when unavailable).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. The project must belong to the authenticated user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project logs

**Slug:** `SUPABASE_GET_PROJECT_LOGS`

Retrieves analytics logs for a Supabase project. Use this to fetch and analyze project logs including edge function logs, database logs, and API logs for monitoring and debugging.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |
| `sql` | string | No | Custom SQL query to execute on the logs. Allows filtering, aggregation, and transformation of log data. See Supabase docs for querying logs for more details. |
| `iso_timestamp_end` | string | No | End timestamp for filtering logs in ISO 8601 format (e.g., '2024-01-31T23:59:59Z'). Only logs before or at this timestamp will be included. |
| `iso_timestamp_start` | string | No | Start timestamp for filtering logs in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). Only logs on or after this timestamp will be included. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project PgBouncer config

**Slug:** `SUPABASE_GET_PROJECT_PGBOUNCER_CONFIG`

Retrieves the active PgBouncer configuration (PostgreSQL connection pooler) for a Supabase project, used for performance tuning, auditing, or getting the connection string.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project postgres config

**Slug:** `SUPABASE_GET_PROJECT_POSTGRES_CONFIG`

Retrieves the current read-only PostgreSQL database configuration for a specified Supabase project's `ref`, noting that some advanced or security-sensitive details might be omitted from the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project's PostgREST config

**Slug:** `SUPABASE_GET_PROJECT_POSTGREST_CONFIG`

Retrieves the PostgREST configuration for a specific Supabase project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project's read-only mode status

**Slug:** `SUPABASE_GET_PROJECT_READONLY_MODE_STATUS`

Retrieves the read-only mode status for a specified Supabase project to check its operational state; this action does not change the read-only state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project reference ID, found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project-ref>`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project signing keys

**Slug:** `SUPABASE_GET_PROJECT_SIGNING_KEYS`

Tool to list all signing keys for a Supabase project. Use when you need to retrieve JWT signing keys for authentication verification or rotation management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project Supavisor configuration

**Slug:** `SUPABASE_GET_PROJECT_SUPAVISOR_CONFIG`

Retrieves the Supavisor (connection pooler) configuration for a specified Supabase project, identified by its reference ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Upgrade Eligibility

**Slug:** `SUPABASE_GET_PROJECT_UPGRADE_ELIGIBILITY`

Checks a Supabase project's eligibility for an upgrade, verifying compatibility and identifying potential issues; this action does not perform the actual upgrade.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique identifier of the Supabase project (e.g., 'opntiysxcrktmaarzjhz'). Can be obtained from the Supabase dashboard URL or by listing all projects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project upgrade status

**Slug:** `SUPABASE_GET_PROJECT_UPGRADE_STATUS`

Retrieves the latest status of a Supabase project's database upgrade for monitoring purposes; does not initiate or modify upgrades.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get TUS resumable upload base options

**Slug:** `SUPABASE_GET_RESUMABLE_UPLOAD_BASE_OPTIONS`

Handles OPTIONS request for TUS Resumable uploads to discover server capabilities. Use when preparing resumable upload requests to verify supported TUS protocol versions and extensions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get TUS resumable upload options

**Slug:** `SUPABASE_GET_RESUMABLE_UPLOAD_OPTIONS`

Handles OPTIONS request for TUS Resumable uploads to discover server capabilities. Use when preparing resumable upload requests to verify supported TUS protocol versions and extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `wildcard` | string | Yes | The wildcard path parameter representing the upload ID or file path for the TUS resumable upload. Used to identify the specific upload resource for CORS preflight requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Security Advisors

**Slug:** `SUPABASE_GET_SECURITY_ADVISORS`

Retrieves security advisor findings and recommendations for a Supabase project. Use when you need to audit project security posture, identify SQL-based security issues, or get remediation guidance. Note: This endpoint is deprecated and may be removed in future API versions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |
| `lint_type` | string ("sql") | No | Type of linting to perform for security advisors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project's auth config

**Slug:** `SUPABASE_GETS_PROJECT_S_AUTH_CONFIG`

Retrieves the project's complete read-only authentication configuration, detailing all settings (e.g., providers, MFA, email/SMS, JWT, security policies) but excluding sensitive secrets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Can also be provided as 'project_ref'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get project's service health status

**Slug:** `SUPABASE_GETS_PROJECT_S_SERVICE_HEALTH_STATUS`

Retrieves the current health status for a Supabase project, for specified services or all services if the 'services' list is omitted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (ref) of the Supabase project. |
| `services` | array | No | A list of specific services for which to retrieve health status. If omitted, returns health status for all services. Valid values: auth, db, db_postgres_user, pg_bouncer, pooler, realtime, rest, storage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a specific SQL snippet

**Slug:** `SUPABASE_GET_SQL_SNIPPET`

Retrieves a specific SQL snippet by its unique identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the SQL snippet to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a SSO provider by its UUID

**Slug:** `SUPABASE_GET_SSO_PROVIDER`

Retrieves the configuration details for a specific Single Sign-On (SSO) provider (e.g., SAML, Google, GitHub, Azure AD), identified by its UUID, within a Supabase project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `provider_id` | string | Yes | The unique identifier (UUID) of the SSO provider whose configuration is to be fetched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Table Schemas

**Slug:** `SUPABASE_GET_TABLE_SCHEMAS`

Retrieves column details, types, and constraints for multiple database tables to help debug schema issues and write accurate SQL queries. Use the SUPABASE_LIST_TABLES action first to discover available tables, the fetch their detailed schemas.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_ref` | string | Yes | The unique reference ID of the Supabase project. This is visible in your Supabase project URL (e.g., https://supabase.com/dashboard/project/{project_ref}). |
| `table_names` | array | Yes | List of table names to retrieve schemas for. At least one table name is required (empty lists are not allowed). Tables can be from different schemas (e.g., 'public.users', 'operations.call_queue_items'). Without schema prefix, 'public' is assumed. Maximum 20 tables per request. |
| `include_indexes` | boolean | No | Whether to include index information in the response |
| `exclude_null_values` | boolean | No | Whether to exclude properties with null values from the response for cleaner output |
| `include_relationships` | boolean | No | Whether to include foreign key relationships in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### OPTIONS for resumable upload sign

**Slug:** `SUPABASE_HANDLE_RESUMABLE_UPLOAD_SIGN_OPTIONS`

Handles CORS preflight OPTIONS request for TUS resumable upload signing. Use when preparing cross-origin resumable upload requests to verify allowed methods and headers.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### OPTIONS for resumable upload sign

**Slug:** `SUPABASE_HANDLE_RESUMABLE_UPLOAD_SIGN_OPTIONS_WITH_ID`

Handles CORS preflight OPTIONS request for TUS resumable upload signing endpoints. Use when preparing cross-origin resumable upload requests to verify allowed methods and headers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `wildcard` | string | Yes | The full path to the object for resumable upload signing, typically in format 'bucket-name/path/to/file'. This wildcard path segment is used for CORS preflight OPTIONS requests before the actual upload signing request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invoke Edge Function

**Slug:** `SUPABASE_INVOKE_EDGE_FUNCTION`

Tool to invoke a deployed Supabase Edge Function over HTTPS. Use for testing and debugging Edge Functions with configurable method, headers, body, and authentication.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Request body to send to the function. Can be a JSON object (dict) or a raw string. |
| `method` | string ("GET" | "POST" | "PUT" | "PATCH" | "DELETE") | No | HTTP method to use when invoking the function. |
| `headers` | object | No | Optional additional headers to send with the request (e.g., Content-Type). |
| `auth_mode` | string ("anon" | "service_role" | "custom_bearer") | No | Authorization mode: 'anon' uses the anon key, 'service_role' uses the service role key, 'custom_bearer' requires a custom Authorization header in the headers parameter. |
| `project_ref` | string | Yes | Unique reference ID of the Supabase project (used in the hostname). |
| `function_slug` | string | Yes | Name/slug of the Edge Function to invoke. |
| `response_type` | string ("json" | "text" | "auto") | No | Expected response format: 'json' parses as JSON, 'text' returns raw text, 'auto' attempts JSON first then falls back to text. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all organizations

**Slug:** `SUPABASE_LIST_ALL_ORGANIZATIONS`

Lists all organizations (ID and name only) associated with the Supabase account, excluding project details within these organizations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all projects

**Slug:** `SUPABASE_LIST_ALL_PROJECTS`

Retrieves a list of all Supabase projects, including their ID, name, region, and status, for the authenticated user. Authentication: - Requires a valid Bearer token in the Authorization header. - Token format: 'Bearer <access_token>' where access_token is either: - A Personal Access Token (PAT) generated from https://supabase.com/dashboard/account/tokens - An OAuth2 access token with the 'Projects.Read' scope Required Scope: - Projects.Read: Allows retrieval of project metadata. Returns: List of Project objects containing id, name, organization_id, region, status, database info, and created_at.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List project database backups

**Slug:** `SUPABASE_LIST_BACKUPS`

Lists all database backups for a Supabase project, providing details on existing backups but not creating new ones or performing restores; availability may depend on plan and configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (reference string) of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List database branches

**Slug:** `SUPABASE_LIST_BRANCHES`

Lists all database branches for a specified Supabase project, providing information about each branch's status, configuration, and metadata. Use this action when you need to view all branches in a project, check branch statuses, or identify available branches before performing operations. Database branches are useful for isolated development and testing of schema changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference identifier (project ref) of the Supabase project. This ID can be found in your project's dashboard URL. |
| `limit` | integer | No | Maximum number of branches to return per request. Defaults to 25. |
| `offset` | integer | No | Number of branches to skip before returning results. Use for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all buckets

**Slug:** `SUPABASE_LIST_BUCKETS`

Retrieves a list of all storage buckets for a Supabase project, without returning bucket contents or access policies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all database branches

**Slug:** `SUPABASE_LIST_DATABASE_BRANCHES`

Lists all database branches for a specified Supabase project, used for isolated development and testing of schema changes; ensure the project reference ID is valid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (reference ID) of the Supabase project. This ID can be found in your project's dashboard URL (e.g., `https://supabase.com/dashboard/project/<project_id>`). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all functions

**Slug:** `SUPABASE_LIST_FUNCTIONS`

Lists metadata for all Edge Functions in a Supabase project (specified by 'ref'), excluding function code or logs; the project must exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List migration history

**Slug:** `SUPABASE_LIST_MIGRATION_HISTORY`

Retrieves the list of applied database migration versions for a Supabase project. Use this to track which migrations have been applied to the project's database. This is a read-only operation that requires the project reference ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. The project must belong to the authenticated user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List members of an organization

**Slug:** `SUPABASE_LIST_ORGANIZATION_MEMBERS`

Retrieves all members of a Supabase organization, identified by its unique slug, including their user ID, username, email, role, and MFA status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The unique identifier (slug) of the organization for which to list members. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List project secrets

**Slug:** `SUPABASE_LIST_PROJECT_SECRETS`

Retrieves all secrets (environment variables) for a Supabase project by its reference ID. Use this action when you need to view the secrets configured for a project, such as API keys, database URLs, or other environment variables. Note that secret values in the response may be masked for security reasons.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (ref) of the Supabase project whose secrets you want to list. This is a 20-character alphanumeric identifier visible in your project dashboard URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all secrets

**Slug:** `SUPABASE_LIST_SECRETS`

Retrieves all secrets for a Supabase project using its reference ID; secret values in the response may be masked.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (ref) of the Supabase project whose secrets are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SQL snippets for the logged in user

**Slug:** `SUPABASE_LIST_SQL_SNIPPETS`

Retrieves a list of SQL snippets for the logged-in user, optionally filtered by a specific Supabase project if `project_ref` is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_ref` | string | No | The unique identifier for your Supabase project. It is a 20-digit string used to reference and manage your project in API endpoints. This can be found in Supabase Studio under Settings > General > Project Settings > Reference ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all SSO providers

**Slug:** `SUPABASE_LIST_SSO_PROVIDERS`

Lists all configured Single Sign-On (SSO) providers for a Supabase project, requiring the project reference ID (`ref`) of an existing project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The project's reference ID. Typically found in dashboard settings or the API URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Database Tables

**Slug:** `SUPABASE_LIST_TABLES`

Lists all tables and views in specified database schemas, providing a quick overview of database structure to help identify available tables before fetching detailed schemas.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schemas` | array | No | List of schemas to search for tables (maximum 10). If not provided, lists tables from all non-system schemas. Specify schema names to limit the search to specific schemas. |
| `project_ref` | string | Yes | The unique reference ID of the Supabase project. Must be exactly 20 lowercase letters (a-z only, no numbers or hyphens). This is visible in your Supabase project URL (e.g., https://supabase.com/dashboard/project/{project_ref}). |
| `include_views` | boolean | No | Whether to include views along with tables in the results |
| `include_metadata` | boolean | No | Whether to include basic metadata like estimated row count and table size |
| `include_system_schemas` | boolean | No | Whether to include system schemas (pg_catalog, information_schema, etc.) when listing all schemas. When set to false, temporary and internal schemas such as pg_temp_*, pg_toast_temp_* and pgbouncer are excluded from the results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge a database branch

**Slug:** `SUPABASE_MERGE_BRANCH`

Merges a database branch, applying all schema changes and migrations from the branch to the target database. Use this action when you need to promote changes from a database branch to production or another target environment after testing and validation are complete. This operation is irreversible - once merged, the changes cannot be automatically rolled back.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch_id_or_ref` | string | Yes | The unique identifier (UUID format) or reference of the database branch to merge. |
| `migration_version` | string | No | Optional migration version to merge up to. Format: timestamp like '20260216000000'. If not provided, merges all migrations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch a migration

**Slug:** `SUPABASE_PATCH_MIGRATION`

[Beta] Patches an existing entry in the project's migration history, updating the name or rollback script. Use this to correct migration metadata after the migration has been created.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project (used in the URL path). Must be exactly 20 lowercase letters (a-z). |
| `name` | string | No | New name for the migration entry. Updates the display name in migration history. |
| `version` | string | Yes | The version identifier of the migration to patch (typically a timestamp like '20260216042751'). This is found in the migration history. |
| `rollback` | string | No | SQL rollback script for the migration. Defines how to revert the migration changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch project network restrictions

**Slug:** `SUPABASE_PATCH_NETWORK_RESTRICTIONS`

Updates project's network restrictions by incrementally adding or removing IPv4/IPv6 CIDR blocks. Use when you need to modify existing restrictions without replacing the entire configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `add` | object | No | Modification request for adding or removing network restriction CIDRs. |
| `ref` | string | Yes | Unique reference ID of the Supabase project (visible in project URL). |
| `remove` | object | No | Modification request for adding or removing network restriction CIDRs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Push a database branch

**Slug:** `SUPABASE_PUSH_BRANCH`

Pushes a database branch, applying migrations and changes to the specified branch. Use when you need to deploy schema changes or migrations to a database branch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch_id_or_ref` | string | Yes | The unique identifier or reference of the database branch to push. |
| `migration_version` | string | No | Optional migration version to push to the branch. Format: timestamp like '20260216000000'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reset a database branch

**Slug:** `SUPABASE_RESET_DATABASE_BRANCH`

Resets an existing Supabase database branch, identified by `branch_id`, to its initial clean state, irreversibly deleting all its current data and schema changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch_id` | string | Yes | The unique identifier of the database branch to reset. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore database PITR backup

**Slug:** `SUPABASE_RESTORE_PITR_BACKUP`

Restores a Supabase project's database to a specific Unix timestamp using Point-in-Time Recovery (PITR), overwriting the current state; requires a paid plan with PITR and physical backups enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique identifier of the Supabase project. |
| `recovery_time_target_unix` | integer | Yes | Unix timestamp (seconds) for the desired database restoration point. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute read-only database query

**Slug:** `SUPABASE_RUN_READ_ONLY_QUERY`

[Beta] Run a SQL query as supabase_read_only_user. Use when you need to safely execute SELECT queries without risk of modifying data. Only read operations are allowed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project (used in the URL path). Must be exactly 20 lowercase letters (a-z). Can be found in Project Settings > General > Reference ID in the Supabase Dashboard, or from the dashboard URL: https://supabase.com/dashboard/project/<project-ref>. Can also be provided as 'project_ref'. |
| `query` | string | Yes | The SQL query to be executed as supabase_read_only_user. Only SELECT and other read-only operations are allowed. Write operations (INSERT, UPDATE, DELETE, CREATE, etc.) will be rejected. Can also be provided as 'sql'. IMPORTANT - Single Quote Handling: DO NOT double or escape single quotes in your SQL. The query is transmitted as a JSON string body, so standard SQL single quotes work directly. For example, write WHERE name = 'John' NOT WHERE name = ''John''. |
| `parameters` | array | No | Optional array of parameters for parameterized queries. Use $1, $2, etc. in the query to reference parameters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Select From Table

**Slug:** `SUPABASE_SELECT_FROM_TABLE`

Tool to select rows from a Supabase/PostgREST table. Use for read-only queries with filtering, sorting, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of rows to return (must be >= 1) |
| `order` | string | No | Ordering expression in the form `column.asc` or `column.desc` |
| `table` | string | Yes | Table or view name to select from |
| `offset` | integer | No | Number of rows to skip before returning results (must be >= 0) |
| `select` | string | Yes | Comma-separated list of columns to return. Supports nested/related selections and JSON path selectors (e.g., address->postcode). |
| `filters` | array | No | Optional list of filters. Each filter will be rendered as `<column>_<operator>=<value>` in the query string (e.g., id_eq=123). Can be provided as a list of FilterItem objects. Each FilterItem must have: column (string), operator (one of: eq, neq, gt, gte, lt, lte, like, ilike, is, in, cs, cd, sl, sr, nxl, nxr, adj, ov, fts, plfts, phfts, wfts), and value (the comparison value). |
| `project_ref` | string | Yes | Unique reference ID of the Supabase project (used in the hostname) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a function

**Slug:** `SUPABASE_UPDATE_A_FUNCTION`

Updates an existing Supabase Edge Function's properties (like name, slug, source code, JWT settings, import map) identified by project `ref` and `function_slug`, supporting plain text code or ESZIP for the body. Use RETRIEVE_A_FUNCTION_BODY action first to get the current source code, as this action requires sending the complete function code, not just the changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `body` | string | No | New source code (e.g., Deno/TypeScript) or base64-encoded ESZIP content for the function, sent in the request body. |
| `name` | string | No | Optional new name for the function. This value is sent in the request body as 'name'. |
| `slug` | string | No | Optional new slug for the function. If provided as a query parameter, this changes the function's access URL. |
| `import_map` | boolean | No | Whether to use an import map for the function (query parameter). |
| `verify_jwt` | boolean | No | Specifies whether JWT verification should be enabled. This value is sent in the request body as 'verify_jwt'. |
| `function_slug` | string | Yes | The current slug (unique identifier) of the Edge Function to be updated. |
| `entrypoint_path` | string | No | Path to the main Deno script for the function (query parameter). |
| `import_map_path` | string | No | Path to the import map file (query parameter). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update API key

**Slug:** `SUPABASE_UPDATE_API_KEY`

Updates an existing Supabase project API key's metadata including name, description, and JWT template configuration. This action modifies key properties without regenerating the actual key value. Use this action when you need to change a key's display name, update its description for better organization, or modify the JWT role template for secret-type keys. Note: This does not rotate or regenerate the key string itself - the key value remains unchanged unless explicitly revealed with reveal=true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | UUID of the API key to update (must be UUID format from publishable/secret type keys, not legacy key names like 'anon' or 'service_role'). You can get this ID from the List Project API Keys or Get Project API Key actions. |
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |
| `name` | string | No | New name for the API key. Must be 4-64 characters long and follow the pattern: lowercase letters, numbers, and underscores only, starting with a letter or underscore (e.g., 'my_api_key_2024'). |
| `reveal` | boolean | No | If true, reveals the full API key value in the response. If false or omitted, secret key values will be partially redacted. Per Supabase's security model, secrets are hidden by default. |
| `description` | string | No | Optional new description for the API key to help identify its purpose or usage context. |
| `secret_jwt_template` | object | No | Template for claims/config associated with JWT-style keys. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update branch configuration

**Slug:** `SUPABASE_UPDATE_BRANCH`

Updates the configuration of a Supabase database branch, allowing modification of its name, associated Git branch, notification URL, persistence settings, and status. Use this action when you need to modify branch settings after creation, such as linking to a different Git branch, changing the branch name, or updating persistence behavior. Note: Database branching requires a paid Supabase plan (Pro or higher).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("CREATING_PROJECT" | "RUNNING_MIGRATIONS" | "MIGRATIONS_PASSED" | "MIGRATIONS_FAILED" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED") | No | Status values that can be set when updating a branch. |
| `git_branch` | string | No | Name of the Git branch to associate with this database branch. If not provided, the association remains unchanged. |
| `notify_url` | string | No | HTTP endpoint to receive branch status updates. Must be a valid URI. |
| `persistent` | boolean | No | If true, the database branch is persistent; non-persistent branches may be auto-cleaned. If not provided, this setting remains unchanged. |
| `branch_name` | string | No | New name for the database branch. If not provided, the name remains unchanged. |
| `reset_on_push` | boolean | No | This field is deprecated and will be ignored. Use v1-reset-a-branch endpoint directly instead. |
| `request_review` | boolean | No | If true, requests a review for this branch. If not provided, this setting remains unchanged. |
| `branch_id_or_ref` | string | Yes | Unique identifier or reference of the database branch to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update database branch config

**Slug:** `SUPABASE_UPDATE_DATABASE_BRANCH_CONFIG`

Updates the configuration of a Supabase database branch, allowing modification of its name, associated Git branch, reset-on-push behavior, persistence, and status. Note: Database branching requires a paid Supabase plan (Pro or higher). This action requires a valid branch_id which must be exactly 20 lowercase alphabetic characters. Authentication: - Requires a valid Bearer token in the Authorization header. - Token format: 'Bearer <access_token>' Required Scope: - Environment:Write

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("CREATING_PROJECT" | "FUNCTIONS_DEPLOYED" | "FUNCTIONS_FAILED" | "MIGRATIONS_FAILED" | "MIGRATIONS_PASSED" | "RUNNING_MIGRATIONS") | No | Status values that can be set when updating a branch. |
| `branch_id` | string | Yes | Unique identifier of the database branch to update. Must be exactly 20 lowercase alphabetic characters. |
| `git_branch` | string | No | Name of the Git branch to associate with this database branch. If not provided, the association remains unchanged. |
| `persistent` | boolean | No | If true, the database branch is persistent; non-persistent branches may be auto-cleaned. If not provided, this setting remains unchanged. |
| `branch_name` | string | No | New name for the database branch. If not provided, the name remains unchanged. |
| `reset_on_push` | boolean | No | If true, resets the database branch on new push to the linked Git branch. If not provided, this setting remains unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update database password

**Slug:** `SUPABASE_UPDATE_DATABASE_PASSWORD`

Updates the database password for a Supabase project. Use when needing to rotate credentials or recover database access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `password` | string | Yes | The new database password to set. Must be at least 4 characters long. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk update functions

**Slug:** `SUPABASE_UPDATE_FUNCTIONS`

Tool to bulk update Edge Functions in a Supabase project. Use when you need to update multiple functions at once with new configurations such as status, version, or other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Supabase project reference ID. |
| `functions` | array | Yes | List of functions to update. Each function must have id, slug, name, status, and version. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update JIT access config

**Slug:** `SUPABASE_UPDATE_JIT_ACCESS_CONFIG`

[Beta] Update a Supabase project's just-in-time (JIT) access configuration. Use to enable or disable JIT access features for privileged operations on the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `state` | string ("enabled" | "disabled" | "unavailable") | Yes | Desired just-in-time access state for the project. 'enabled' activates JIT access, 'disabled' deactivates it, 'unavailable' marks the feature as unavailable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update pgsodium root key

**Slug:** `SUPABASE_UPDATE_PGSODIUM_CONFIG`

Critically updates or initializes a Supabase project's pgsodium root encryption key for security setup or key rotation, requiring secure backup of the new key to prevent irreversible data loss.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (ref ID) of the Supabase project. |
| `root_key` | string | Yes | The new root encryption key for pgsodium. Must be a cryptographically strong key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a project

**Slug:** `SUPABASE_UPDATE_PROJECT`

Updates a Supabase project's configuration (currently supports updating the project name). Use when you need to rename an existing project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project reference identifier (unique identifier for the project). This is typically a 20-character alphanumeric string found in your project URL or via the List All Projects endpoint. |
| `name` | string | Yes | New name for the project. Must be between 1 and 256 characters. This is the human-readable display name that will appear in the Supabase dashboard. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project's auth config

**Slug:** `SUPABASE_UPDATE_PROJECT_AUTH_CONFIG`

Update Supabase project Auth configuration via the Management API. Use to fix misconfigured Auth redirects, SMTP settings, or other auth parameters. Only provided fields are updated; others remain unchanged. Before updating, confirm the Auth service status is ACTIVE_HEALTHY by checking project health.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. Can also be provided as 'project_ref'. |
| `jwt_exp` | integer | No | JWT access token expiration time in seconds. |
| `site_url` | string | No | Primary site URL used in email links and redirects. Critical for Auth redirect flows. |
| `smtp_host` | string | No | SMTP server host for sending auth emails. |
| `smtp_pass` | string | No | SMTP password for authentication. |
| `smtp_port` | integer | No | SMTP server port. |
| `smtp_user` | string | No | SMTP username for authentication. |
| `disable_signup` | boolean | No | Disable new signups via email/password and OAuth providers. |
| `mailer_otp_exp` | integer | No | Email OTP expiration time in seconds. |
| `uri_allow_list` | string | No | Comma-separated allowlist of redirect URIs/patterns for OAuth callbacks. |
| `sessions_timebox` | integer | No | Maximum session lifetime in seconds. 0 means disabled. |
| `smtp_admin_email` | string | No | Admin email address used as the sender for SMTP notifications. |
| `smtp_sender_name` | string | No | Display name for the SMTP sender. |
| `mailer_otp_length` | integer | No | Email OTP length (number of digits). |
| `rate_limit_verify` | integer | No | Rate limit for verification attempts (generic). |
| `external_azure_url` | string | No | Azure OAuth issuer or discovery URL. |
| `mailer_autoconfirm` | boolean | No | Automatically confirm new signups (no email confirmation required). |
| `smtp_max_frequency` | integer | No | Rate limit for SMTP sends (emails per minute). |
| `password_min_length` | integer | No | Minimum required password length. |
| `rate_limit_sms_sent` | integer | No | Rate limit for sending SMS (messages per minute). |
| `external_apple_secret` | string | No | Apple OAuth client secret. |
| `external_azure_secret` | string | No | Azure OAuth client secret. |
| `password_hibp_enabled` | boolean | No | Enable HaveIBeenPwned check during password set/change. |
| `rate_limit_email_sent` | integer | No | Rate limit for sending emails (emails per minute). |
| `external_apple_enabled` | boolean | No | Enable Apple as an external OAuth provider. |
| `external_azure_enabled` | boolean | No | Enable Azure as an external OAuth provider. |
| `external_email_enabled` | boolean | No | Enable email sign-in/up. |
| `external_github_secret` | string | No | GitHub OAuth client secret. |
| `external_google_secret` | string | No | Google OAuth client secret. |
| `external_phone_enabled` | boolean | No | Enable phone (SMS) sign-in/up. |
| `external_github_enabled` | boolean | No | Enable GitHub as an external OAuth provider. |
| `external_google_enabled` | boolean | No | Enable Google as an external OAuth provider. |
| `mfa_totp_enroll_enabled` | boolean | No | Enable enrolling TOTP as an MFA factor. |
| `mfa_totp_verify_enabled` | boolean | No | Enable TOTP verification as MFA. |
| `security_captcha_secret` | string | No | CAPTCHA provider secret key. |
| `external_apple_client_id` | string | No | Apple OAuth client ID. |
| `external_azure_client_id` | string | No | Azure OAuth client ID. |
| `mfa_max_enrolled_factors` | integer | No | Maximum number of MFA factors a user can enroll. |
| `security_captcha_enabled` | boolean | No | Enable CAPTCHA verification for risky flows. |
| `sessions_single_per_user` | boolean | No | Restrict to a single active session per user. |
| `external_github_client_id` | string | No | GitHub OAuth client ID. |
| `external_google_client_id` | string | No | Google OAuth client ID. |
| `security_captcha_provider` | string | No | CAPTCHA provider (e.g., hcaptcha, turnstile). |
| `rate_limit_anonymous_users` | integer | No | Rate limit for anonymous users (requests per minute). |
| `sessions_inactivity_timeout` | integer | No | Session inactivity timeout in seconds. 0 means disabled. |
| `password_required_characters` | string | No | Character class requirements for passwords (e.g., regex or flags). |
| `refresh_token_rotation_enabled` | boolean | No | Enable refresh token rotation to reduce token replay risk. |
| `security_manual_linking_enabled` | boolean | No | Enable manual linking of identities to accounts. |
| `external_anonymous_users_enabled` | boolean | No | Enable creation of anonymous users (no credentials). |
| `mailer_secure_email_change_enabled` | boolean | No | Require secure email change flow (confirm both old and new emails). |
| `security_refresh_token_reuse_interval` | integer | No | Allowed reuse interval (seconds) for rotated refresh tokens. |
| `mailer_allow_unverified_email_sign_ins` | boolean | No | Allow sign-ins from users with unverified emails. |
| `mailer_notifications_email_changed_enabled` | boolean | No | Enable notification emails when a user's email is changed. |
| `mailer_notifications_phone_changed_enabled` | boolean | No | Enable notification emails when a phone number is changed. |
| `mailer_notifications_identity_linked_enabled` | boolean | No | Enable notification emails when an identity is linked. |
| `mailer_notifications_password_changed_enabled` | boolean | No | Enable notification emails when a password is changed. |
| `mailer_notifications_identity_unlinked_enabled` | boolean | No | Enable notification emails when an identity is unlinked. |
| `mailer_notifications_mfa_factor_enrolled_enabled` | boolean | No | Enable notification emails when an MFA factor is enrolled. |
| `security_update_password_require_reauthentication` | boolean | No | Require reauthentication before updating password. |
| `mailer_notifications_mfa_factor_unenrolled_enabled` | boolean | No | Enable notification emails when an MFA factor is unenrolled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project's custom hostname configuration

**Slug:** `SUPABASE_UPDATE_PROJECT_CUSTOM_HOSTNAME`

Updates the custom hostname for a Supabase project, requiring subsequent DNS changes to a user-controlled domain for SSL certificate issuance and domain ownership.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |
| `custom_hostname` | string | Yes | Desired custom hostname (e.g., 'api.example.com') to associate with the project's services. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project legacy API keys

**Slug:** `SUPABASE_UPDATE_PROJECT_LEGACY_API_KEYS`

Tool to disable or re-enable JWT-based legacy API keys (anon, service_role) for a Supabase project. Use when you need to toggle legacy API key access for security or migration purposes. Note: This API endpoint may be removed in the future - check for HTTP 404 Not Found if the endpoint is no longer available.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID (20 alphanumeric characters) of your Supabase project. You can find this in your project's dashboard URL or by calling the List All Projects action. |
| `enabled` | boolean | Yes | Enable or disable JWT-based legacy API keys (anon, service_role). Set to true to enable, false to disable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project's postgres config

**Slug:** `SUPABASE_UPDATE_PROJECT_POSTGRES_CONFIG`

Updates specified PostgreSQL configuration parameters for an existing Supabase project (`ref`) to optimize database performance; note that unspecified parameters remain unchanged, and caution is advised as incorrect settings can impact stability or require a restart.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project. |
| `work_mem` | string | No | Memory for internal sorts and hash tables before writing to temp disk files (e.g., '4MB', '64MB'). |
| `max_wal_size` | string | No | WAL size that triggers a checkpoint (e.g., '1GB', '2048MB'). |
| `wal_keep_size` | string | No | Minimum size of past WAL log segments in pg_wal for standby servers (e.g., '128MB', '512MB'); replaces older wal_keep_segments. |
| `shared_buffers` | string | No | Memory for shared memory buffers (e.g., '128MB', '1GB'). |
| `max_connections` | integer | No | Maximum concurrent database connections. Typically between 1 and 262143. |
| `statement_timeout` | string | No | Maximum allowed duration for any SQL statement (e.g., '10000ms', '30s'); '0' typically disables timeout. |
| `effective_cache_size` | string | No | Estimated disk cache size for a single query (e.g., '4GB', '512MB'). |
| `maintenance_work_mem` | string | No | Maximum memory for maintenance operations like VACUUM, CREATE INDEX (e.g., '64MB', '1GB'). |
| `max_parallel_workers` | integer | No | Maximum workers the system can support for parallel queries. Typically between 0 and 1024. |
| `max_worker_processes` | integer | No | Maximum background processes the system can support. Typically between 0 and 262143. |
| `max_slot_wal_keep_size` | string | No | Maximum WAL file size replication slots can retain in pg_wal (e.g., '1GB', '512MB'). '0' might mean unlimited; check PostgreSQL docs. |
| `session_replication_role` | string ("local" | "origin" | "replica") | No | Controls firing of replication-related triggers and rules for the current session. |
| `max_locks_per_transaction` | integer | No | Controls the average number of object locks allocated per transaction. Typically between 10 and 2147483640. |
| `max_standby_archive_delay` | string | No | Maximum delay before canceling queries on a hot standby server processing archived WAL data (e.g., '30s', '0ms' to disable). |
| `max_standby_streaming_delay` | string | No | Maximum delay before canceling queries on a hot standby server processing streamed WAL data (e.g., '30s', '0ms' to disable). |
| `max_parallel_workers_per_gather` | integer | No | Maximum workers for a single Gather or Gather Merge node in a parallel query. Typically between 0 and 1024. |
| `max_parallel_maintenance_workers` | integer | No | Maximum parallel processes for a single maintenance utility command. Typically between 0 and 1024. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update project's PostgREST config

**Slug:** `SUPABASE_UPDATE_PROJECT_POSTGREST_CONFIG`

Updates PostgREST configuration settings (e.g., `max_rows`, `db_pool`, `db_schema`, `db_extra_search_path`) for a Supabase project to fine-tune API performance, data exposure, and database resource usage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier (reference) of the Supabase project. |
| `db_pool` | integer | No | The maximum number of connections in the PostgreSQL connection pool for PostgREST. If `null` or not provided, the pool size may be automatically configured based on compute size. |
| `max_rows` | integer | No | The maximum number of rows PostgREST can return in a single response; this setting helps control payload size and query performance. |
| `db_schema` | string | No | A comma-separated string of PostgreSQL schemas to be exposed through the PostgREST API (e.g., 'public,api'). |
| `db_extra_search_path` | string | No | A comma-separated string of additional PostgreSQL schemas to search for objects if not found in the primary schema(s) defined by `db_schema`. An empty string can be used to clear existing paths. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update database pooler config

**Slug:** `SUPABASE_UPDATE_PROJECT_SUPAVISOR_CONFIG`

Updates the Supavisor (database pooler) configuration, such as `default_pool_size`, for an existing Supabase project identified by `ref`; the `pool_mode` parameter in the request is deprecated and ignored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |
| `pool_mode` | string ("session" | "transaction") | No | This field is deprecated and is ignored in this request. It previously controlled the pooling mode (session or transaction). |
| `default_pool_size` | integer | No | Default number of connections per user for the connection pool; helps manage concurrent database connections and performance. Optimal value depends on project's compute add-on size and workload. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update SSL enforcement config

**Slug:** `SUPABASE_UPDATE_SSL_ENFORCEMENT_CONFIG`

Updates the SSL enforcement configuration (enable/disable) for a specified Supabase project's database.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique identifier of the Supabase project. |
| `requestedConfig__database` | boolean | No | Desired SSL enforcement state for the project's database (`true` to enable, `false` to disable). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an SSO provider by its UUID

**Slug:** `SUPABASE_UPDATE_SSO_PROVIDER`

Updates an existing SSO provider's SAML metadata, associated email domains, or attribute mappings for a Supabase project, identified by `ref` and `provider_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Unique reference ID of the Supabase project. |
| `domains` | array | No | Email domains to associate with this SSO provider for user authentication. |
| `provider_id` | string | Yes | UUID of the SSO provider to update. |
| `metadata_url` | string | No | URL pointing to the SAML metadata XML. Use either this or `metadata_xml`. |
| `metadata_xml` | string | No | SAML metadata XML content from the identity provider. Use either this or `metadata_url`. |
| `attribute__mapping__keys` | object | No | Defines mapping of SAML assertion attributes to Supabase user attributes (e.g., 'email', 'full_name'). Values specify IdP attribute mapping using 'name', 'names' (for concatenation), or 'default'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert migration

**Slug:** `SUPABASE_UPSERT_MIGRATION`

Tool to upsert a database migration without applying it. Use when you need to track migration changes for a project. [Beta] This endpoint stores migration metadata without executing the SQL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | Project's unique reference identifier (20 lowercase letters). |
| `name` | string | No | Optional name for the migration. Used for tracking and identification purposes. |
| `query` | string | Yes | The SQL migration query to be stored. This query will be tracked but not executed. Must be non-empty. |
| `rollback` | string | No | Optional rollback SQL query to undo this migration if needed. |
| `idempotency_key` | string | No | A unique key to ensure the same migration is tracked only once. If provided, prevents duplicate migrations with the same key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reverify custom hostname

**Slug:** `SUPABASE_VERIFY_CUSTOM_HOSTNAME_DNS`

Re-verifies DNS and SSL configurations for an existing custom hostname associated with a Supabase project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ref` | string | Yes | The unique reference ID of the Supabase project for which the custom hostname is being re-verified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
