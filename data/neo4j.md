# Neo4J

Graph database platform for connected data and real-time analytics

- **Category:** developer tools
- **Auth:** OAUTH2, BASIC, API_KEY, S2S_OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 21
- **Triggers:** 0
- **Slug:** `NEO4J`
- **Version:** 20260721_00

## Tools

### Aggregate Directors Count

**Slug:** `NEO4J_AGGREGATE_DIRECTORS`

Executes a directorsAggregate GraphQL query to count directors in Neo4j. Use when you need to get the total count of director records in the database. The GraphQL query returns the count of all directors regardless of pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Neo4j Aura Instance

**Slug:** `NEO4J_CREATE_INSTANCE_BETA`

Creates a new Neo4j Aura instance with the specified configuration. Use this action when you need to provision a new Neo4j Aura database instance. The operation is asynchronous - the API returns 202 Accepted while the instance is being created in the background. Use this action when you need to create a new Neo4j Aura database instance for your project. The returned credentials (username and password) should be stored securely as they cannot be retrieved again.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the instance (any UTF-8 characters with no trailing or leading whitespace). Max 30 characters. |
| `type` | string ("enterprise-db" | "enterprise-ds" | "business-critical" | "professional-db" | "professional-ds" | "free-db") | Yes | The type of the instance. Must be one of: enterprise-db, enterprise-ds, business-critical, professional-db, professional-ds, free-db. Please refer to your Aura projects instance configurations for valid types for your project. |
| `memory` | string | Yes | The size of the instance memory in GB (e.g., '1GB', '2GB'). Please refer to your Aura projects instance configurations for valid sizes for your project. |
| `region` | string | Yes | The region where the instance is hosted (e.g., 'europe-west1'). Please refer to your Aura projects instance configurations for valid regions for your project. |
| `storage` | string | No | The size of the instance storage in GB (e.g., '10GB'). Please refer to your Aura projects instance configurations for valid sizes for your project. |
| `version` | string | Yes | The Neo4j version of the instance (e.g., '5'). Please refer to your Aura projects instance configurations for valid versions for your project. |
| `tenant_id` | string | Yes | The ID for the project/tenant. |
| `cloud_provider` | string ("gcp" | "aws" | "azure") | Yes | The cloud provider hosting the instance. Must be one of: gcp, aws, azure. Please refer to your Aura projects instance configurations for valid options for your project. |
| `vector_optimized` | boolean | No | An optional vector optimization configuration to be set during instance creation. |
| `source_instance_id` | string | No | The ID of the source instance when cloning. |
| `source_snapshot_id` | string | No | An optional snapshot ID to create an instance from a specific snapshot. Requires source_instance_id to also be provided. |
| `graph_analytics_plugin` | boolean | No | An optional graph analytics plugin configuration to be set during instance creation. |
| `customer_managed_key_id` | string | No | An optional customer managed key to be used for instance creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Neo4j Aura Snapshot

**Slug:** `NEO4J_CREATE_SNAPSHOT`

Create an on-demand snapshot of a Neo4j Aura instance. Triggers asynchronous backup creation and returns a snapshot ID that can be used to monitor progress. Use this action when you need to manually create a backup point before major changes or to preserve the current state of your database. Use this action when you want to create an on-demand backup snapshot of your Neo4j Aura instance before performing risky operations like data migrations, schema changes, or bulk updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to snapshot. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Estimate GDS Session Size

**Slug:** `NEO4J_ESTIMATE_GDS_SESSION_SIZE`

Estimate the size of a new GDS (Graph Data Science) session based on node/relationship counts and algorithm categories. Use this action when you need to determine the appropriate GDS session size before creating a new graph analytics session. This helps ensure you provision sufficient memory for your graph workloads, particularly useful when planning memory allocation for large-scale graph operations like community detection, pathfinding, or similarity algorithms. The estimation considers the number of nodes, relationships, properties, and intended algorithm categories to provide accurate memory recommendations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node_count` | integer | Yes | The number of nodes to be stored in the instance. Must be a non-negative integer. |
| `node_label_count` | integer | No | The number of labels per node. If not specified, the API will use a default estimate. |
| `relationship_count` | integer | Yes | The number of relationships to be stored in the instance. Must be a non-negative integer. |
| `node_property_count` | integer | No | The number of properties per node. If not specified, the API will use a default estimate. |
| `algorithm_categories` | array | No | The algorithm categories to be used in the session. Common categories include: 'pathfinding', 'community_detection', 'centrality', 'similarity', 'link_prediction'. If not specified, the API uses a general-purpose estimate. |
| `relationship_property_count` | integer | No | The number of properties per relationship. If not specified, the API will use a default estimate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Neo4j Aura Instance Details

**Slug:** `NEO4J_GET_INSTANCE_BETA`

Retrieves details for a specific Neo4j Aura instance using its unique instance ID. Returns comprehensive information including instance name, status, cloud provider, region, memory allocation, connection URL, and other configuration details. Use this action when you need to check the status, configuration, or connection details of a specific Neo4j Aura instance. This is a read-only operation that does not modify any instance state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Neo4j Aura Organization User

**Slug:** `NEO4J_GET_ORGANIZATION_USER`

Retrieves details of a specific user in a Neo4j Aura organization. Returns user information including email, organization roles, MFA status, last activity, and project-level access permissions. Use this action when you need to inspect user details, verify organization membership, or check user permissions and access levels within an Aura organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier of the user to retrieve |
| `organization_id` | string | Yes | The unique identifier of the Aura organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Neo4j Aura Project Details

**Slug:** `NEO4J_GET_PROJECT`

Retrieve details of a specific Neo4j Aura project (tenant). Returns project information including its ID, name, and available instance configurations with regions, types, memory, storage options, and cloud providers. Use this action when you need to inspect project details or discover available instance configurations before creating a new Aura instance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | Yes | The unique identifier of the Aura project (tenant) to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Neo4j Aura Project Details (v1beta5)

**Slug:** `NEO4J_GET_PROJECT_BETA`

Retrieve details of a specific Neo4j Aura project (tenant) using the v1beta5 API. Returns project information including its ID, name, and available instance configurations with regions, types, memory, storage options, and cloud providers. Use this action when you need to inspect project details or discover available instance configurations before creating a new Aura instance. This uses the v1beta5 API version which may have additional features compared to v1.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | Yes | The unique identifier of the Aura project (tenant) to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Neo4j Aura Snapshot Details

**Slug:** `NEO4J_GET_SNAPSHOT`

Retrieves details of a specific snapshot for a Neo4j Aura instance. Returns the snapshot profile, current status, and creation timestamp. Use this action when you need to check the status or details of a particular backup snapshot.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance |
| `snapshot_id` | string | Yes | The unique identifier of the snapshot |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Neo4j Aura Agents

**Slug:** `NEO4J_LIST_AGENTS`

List all agents belonging to a specific Neo4j Aura project. Returns agent information including ID, name, description, database ID, privacy settings, endpoint links, MCP status, and attached tools. Use this action when you need to retrieve all agents for a specific project to identify available agents or to select a specific agent for subsequent operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | string | Yes | The unique identifier of the Aura project whose agents to list. |
| `organization_id` | string | Yes | The unique identifier of the Aura organization whose agents to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List GDS Sessions

**Slug:** `NEO4J_LIST_GDS_SESSIONS`

List all Graph Data Science (GDS) sessions for the authenticated Neo4j Aura account. Returns a summary of each GDS session including status, memory allocation, host information, and expiry date. Use optional filters (instanceId, tenantId, organizationId) to narrow down the results to specific instances or organizational units. Use this action when you need to: - Monitor active GDS sessions and their resource usage - Check session expiry dates to plan for renewals - View host connectivity information for GDS sessions - Audit GDS session creation and status across the organization This action is read-only and does not modify any resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | Filter GDS sessions by project/tenant ID. Returns sessions belonging to the specified project. |
| `instance_id` | string | No | Filter GDS sessions by instance ID. Returns sessions for the specified Neo4j instance. |
| `organization_id` | string | No | Filter GDS sessions by organization ID. Returns sessions belonging to the specified organization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Neo4j Aura Instances

**Slug:** `NEO4J_LIST_INSTANCES_BETA`

Returns a list of Neo4j Aura instances. Use when you need to retrieve all available Neo4j Aura instances in your account, optionally filtered by tenant.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tenant_id` | string | No | An optional tenant ID to filter instances by tenant. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List IP Filters

**Slug:** `NEO4J_LIST_IP_FILTERS`

Returns a list of IP filters configured for a Neo4j Aura organization. Use this action when you need to retrieve all IP filters to check which CIDR blocks are allowed or blocked, or to determine which resources are protected by IP filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization_id` | string | Yes | The unique identifier of the organization whose IP filters to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Aura Projects

**Slug:** `NEO4J_LIST_PROJECTS`

List all Aura projects (tenants) available to the authenticated user. Returns a summary of each project including its unique ID and name. Use this action when you need to retrieve all Aura projects to identify which projects are accessible or to select a specific project for subsequent operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Project Users

**Slug:** `NEO4J_LIST_PROJECT_USERS`

List all users in a specific Neo4j Aura project. Returns user information including email, user ID, and project roles for each user. Use this action when you need to retrieve all users associated with a project to identify team members or verify user access levels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | string | Yes | The unique identifier of the project |
| `organization_id` | string | Yes | The unique identifier of the organization |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Neo4j Aura Snapshots

**Slug:** `NEO4J_LIST_SNAPSHOTS`

Lists available snapshots for a Neo4j Aura instance. Returns both scheduled and ad-hoc snapshots with their status and creation timestamps. Use when you need to retrieve information about available database backups or recovery points for a specific Aura instance. The date parameter can filter results to a specific day.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | No | An optional date parameter to list snapshots for a given day, in YYYY-MM-DD format. Defaults to today if not specified. |
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to list snapshots for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pause Neo4j Aura Instance

**Slug:** `NEO4J_PAUSE_INSTANCE_BETA`

Pauses a Neo4j Aura instance. Use when you need to temporarily stop an instance to reduce costs or perform maintenance. The instance can be resumed later using the ResumeInstance action. This action is asynchronous - the instance will be in a 'pausing' state until the operation completes. Note: this action cannot be performed if an ongoing operation (such as cloning) is in progress on the instance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to pause. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore Neo4j Aura Instance from Snapshot

**Slug:** `NEO4J_RESTORE_SNAPSHOT`

Restore a Neo4j Aura instance from a snapshot. Replaces all current data with the snapshot data. This action is irreversible — all data since the snapshot was taken will be permanently lost. Use this action when you need to recover an Aura instance to a previous state from a specific snapshot. This operation cannot be undone once initiated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to restore. |
| `snapshot_id` | string | Yes | The unique identifier of the snapshot to restore from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Neo4j Aura Instance

**Slug:** `NEO4J_UPDATE_INSTANCE`

Updates a Neo4j Aura instance configuration. Allows modifying instance properties such as name, memory allocation, storage size, vector optimization, and graph analytics plugin. Use this action when you need to modify an existing Aura instance's settings or resource allocation. Note: Some operations like memory or storage resizing may trigger an asynchronous update process where the instance status changes to 'updating'. Check the instance status after making changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Edit the instance name in the Aura Console. The name may include any UTF-8 characters with no trailing or leading whitespace. |
| `memory` | string | No | The size of the instance memory in GB. Please refer to your Aura project instance configurations for valid sizes. |
| `storage` | string | No | The size of the instance storage in GB. Please refer to your Aura project instance configurations for valid sizes. This field is NOT returned for Aura DB Free instances. |
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to update. |
| `vector_optimized` | boolean | No | Add or remove the instance vector optimization. |
| `graph_analytics_plugin` | boolean | No | Add or remove the instance graph analytics plugin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Neo4j Aura Instance

**Slug:** `NEO4J_UPDATE_INSTANCE_BETA`

Edits the configuration of a Neo4j Aura instance. Allows updating the instance name, memory allocation, storage size, and plugin configurations. Use this action when you need to modify an existing Neo4j Aura instance's settings such as renaming the instance, adjusting memory/storage resources, or enabling/disabling the graph analytics plugin or vector optimization features. Note: Some operations like resizing memory or storage may result in a 202 Accepted response indicating the resize request was accepted for async processing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Edit the instance name in the Aura Console. The name may include any UTF-8 characters with no trailing or leading whitespace. |
| `memory` | string | No | The size of the instance memory in GB. Please refer to your Aura projects instance configurations for valid sizes. |
| `storage` | string | No | The size of the instance storage in GB. Please refer to your Aura projects instance configurations for valid sizes. |
| `instance_id` | string | Yes | The unique identifier of the Neo4j Aura instance to update. |
| `vector_optimized` | boolean | No | Add or remove the instance vector optimization. |
| `graph_analytics_plugin` | boolean | No | Add or remove the instance graph analytics plugin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update IP Filter

**Slug:** `NEO4J_UPDATE_IP_FILTER`

Updates an existing IP filter for a Neo4j Aura organization. Use this action when you need to modify an existing IP filter's settings, such as updating its name, description, allow list entries, or enabling/disabling the filter. The request body accepts partial updates - only include the fields you want to modify. This is an idempotent operation that updates the specified properties while preserving all other existing values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the IP filter |
| `allow_list` | array | No | A list of CIDR entries to set for the IP filter allow list. Each entry must have an address and prefix_len. Optional description can also be provided. |
| `description` | string | No | The new description for the IP filter |
| `ip_filter_id` | string | Yes | The unique identifier of the IP filter to update |
| `organization_id` | string | Yes | The unique identifier of the organization that owns the IP filter |
| `filtering_disabled` | boolean | No | Whether to disable IP filtering. Set to true to disable filtering or false to enable it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
