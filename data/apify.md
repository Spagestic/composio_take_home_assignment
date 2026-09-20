# Apify

Apify is a platform for building, deploying, and managing web scraping and automation tools, known as Actors.

- **Category:** ai web scraping
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 113
- **Triggers:** 0
- **Slug:** `APIFY`
- **Version:** 20260902_00

## Tools

### Build Actor

**Slug:** `APIFY_ACT_BUILDS_POST`

Tool to build an Actor with specified configuration. Use when you need to create a new build of an Actor with a specific version. The build process compiles the Actor's source code into a Docker image.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | Optional version tag specification for the build. |
| `actorId` | string | Yes | Actor ID or a tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor'). |
| `useCache` | boolean | No | If true, uses cached layers from previous builds. Default: true. |
| `betaPackages` | boolean | No | If true, uses beta versions of Apify SDK packages. Default: false. |
| `versionNumber` | string | No | Actor version to build (e.g., '0.1'). If not provided, the latest version is used. Can be provided as query parameter or in request body. |
| `waitForFinish` | integer | No | Optional timeout value (in seconds) to wait for build completion before returning response. Max 300 seconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Abort Actor Build

**Slug:** `APIFY_ACTOR_BUILD_ABORT_POST`

Tool to abort an Actor build that is starting or running. Use when you need to cancel a build in progress. Builds in terminal states (FINISHED, FAILED, ABORTING, TIMED-OUT) are not affected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `buildId` | string | Yes | Unique identifier of the Actor build to abort. Only builds in STARTING or RUNNING status will be aborted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor Build

**Slug:** `APIFY_ACTOR_BUILD_DELETE`

Tool to delete an Actor build permanently. Use when you need to remove a specific build by its ID. The default build for an Actor cannot be deleted. Only users with build permissions can delete builds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `buildId` | string | Yes | Unique identifier of the Actor build to delete. The build that is the current default build for the Actor cannot be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Build

**Slug:** `APIFY_ACTOR_BUILD_GET`

Tool to get detailed information about a specific Actor build. Use when you need to retrieve complete build details by build ID. Optionally wait for the build to finish using the waitForFinish parameter to avoid polling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `buildId` | string | Yes | Unique identifier of the Actor build to retrieve. |
| `waitForFinish` | integer | No | Number of seconds to wait synchronously for the build to finish. If omitted or 0, returns immediately with the current build status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Build Log

**Slug:** `APIFY_ACTOR_BUILD_LOG_GET`

Tool to retrieve the log file for a specific Actor build. Use when you need to inspect logs generated during an Actor build process. Only the trailing 5 million characters of the log are stored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `raw` | boolean | No | If true, the log includes formatting such as ANSI coloring sequences. If false (default), formatting is stripped. |
| `stream` | boolean | No | If true, enables streaming of log output progressively. Used by API clients for streaming responses. |
| `buildId` | string | Yes | Unique identifier of the Actor build. The endpoint authenticates using the buildId itself. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user builds list

**Slug:** `APIFY_ACTOR_BUILDS_GET`

Tool to get a paginated list of all builds for a user. Use when you need to retrieve build history across all actors. Supports pagination up to 1000 records.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort builds by startedAt descending. Default is ascending (false). |
| `limit` | integer | No | Maximum number of builds to return (pagination). Maximum and default is 1000. |
| `offset` | integer | No | Number of builds to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Abort Actor Run

**Slug:** `APIFY_ACTOR_RUN_ABORT_POST`

Tool to abort a running or starting Actor run. Use when you need to stop an Actor run that is currently in STARTING or RUNNING status. For runs with status FINISHED, FAILED, ABORTING, and TIMED-OUT this call does nothing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `runId` | string | Yes | The unique identifier of the Actor run to abort. |
| `gracefulAbort` | boolean | No | If true, the Actor run will abort gracefully. It will send 'aborting' and 'persistStates' events into the run and force-stop the run after 30 seconds. This is helpful when you plan to resurrect the run later. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor Run

**Slug:** `APIFY_ACTOR_RUN_DELETE`

Tool to delete a finished Actor run. Use when you need to permanently remove a completed run. Only finished runs can be deleted by the initiating user or organization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `runId` | string | Yes | Unique identifier of the Actor run to delete. Only finished runs can be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Run

**Slug:** `APIFY_ACTOR_RUN_GET`

Tool to get details about a specific Actor run. Use when you need to retrieve comprehensive information about a run including its execution status, resource usage, storage IDs, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `runId` | string | Yes | The unique identifier of the Actor run to retrieve. |
| `waitForFinish` | integer | No | Maximum seconds to wait for run completion before returning response. Range: 0-60. When set, the API endpoint will synchronously wait for the run to finish instead of returning immediately. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Actor Run Status Message

**Slug:** `APIFY_ACTOR_RUN_PUT`

Tool to update the status message of an Actor run. Use when you need to set progress information or status updates that will be displayed in the Apify Console UI during Actor execution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `runId` | string | Yes | Run identifier for the Actor run to update. |
| `statusMessage` | string | Yes | Text displayed in Apify Console UI to communicate Actor progress. |
| `isStatusMessageTerminal` | boolean | No | Indicates whether the status message is the very last one (terminal status). If not provided, defaults to False. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor Task

**Slug:** `APIFY_ACTOR_TASK_DELETE`

Tool to delete an Actor task permanently. Use when you need to remove a task by its ID or username~taskName. Confirm before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorTaskId` | string | Yes | Unique identifier of the Actor task to delete. Can be either the task ID (e.g., 'HG7ML7M8z78YcAPEB') or a tilde-separated username and task name (e.g., 'janedoe~my-task'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Task

**Slug:** `APIFY_ACTOR_TASK_GET`

Tool to get complete details about an Actor task. Use when you need to retrieve task configuration, input settings, or metadata by task ID or username~task-name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorTaskId` | string | Yes | Task ID (e.g., HG7ML7M8z78YcAPEB) or tilde-separated owner username and task name (e.g., janedoe~my-task). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Actor Task

**Slug:** `APIFY_ACTOR_TASK_PUT`

Tool to update Actor task settings using JSON payload. Only specified properties are updated; others remain unchanged. Use when you need to modify task configuration, input, or execution options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `input` | string | No | Input configuration for the task. Can be any JSON object or array with task-specific fields. Only specified fields will be updated. |
| `title` | string | No | Display title for the task. Only specified fields will be updated. |
| `options` | object | No | Task execution options (e.g., build, timeoutSecs, memoryMbytes, restartOnError). Only specified fields will be updated. |
| `actorTaskId` | string | Yes | Task ID (e.g., 'HG7ML7M8z78YcAPEB') or tilde-separated owner's username and task name (e.g., 'janedoe~my-task'). |
| `description` | string | No | Description of the task. Only specified fields will be updated. |
| `actorStandby` | object | No | Actor standby configuration for faster task startup (request model).  When actorStandby is provided in a request, the API requires all 6 core fields: desiredRequestsPerActorRun, maxRequestsPerActorRun, idleTimeoutSecs, build, memoryMbytes, and shouldPassActorInput.  Note: isEnabled and disableStandbyFieldsOverride are response-only fields that cannot be sent in requests. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get last actor task run

**Slug:** `APIFY_ACTOR_TASK_RUNS_LAST_GET`

Tool to get the most recent run of a specific Actor task. Use when you need to retrieve the last execution details. You can filter by status to get only successful runs using status='SUCCEEDED'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter to return only runs matching this status (e.g., 'SUCCEEDED' ensures you get the last successful run). |
| `actorTaskId` | string | Yes | Task ID or '<username>~<taskName>' identifying the actor task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Task Sync (GET)

**Slug:** `APIFY_ACTOR_TASK_RUN_SYNC_GET`

Tool to run a specific task synchronously and return its output. Use when immediate task results are needed with pre-configured settings. The run must finish within 300 seconds otherwise the HTTP request fails with a timeout error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `build` | string | No | Tag or number of the actor build to run (e.g. 'beta' or '1.2.345'). Note: For tasks, this parameter typically has no effect as tasks already reference a specific Actor build. |
| `memory` | integer | No | Allocated memory in megabytes for the actor execution. |
| `timeout` | integer | No | Timeout for the actor run in seconds. Zero value means there is no timeout. |
| `maxItems` | integer | No | Maximum dataset items charged for pay-per-result actors. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook definitions for notifications on actor completion or failure. |
| `actorTaskId` | string | Yes | Unique identifier of the actor task to execute. Can be task ID or username~taskName format. |
| `restartOnError` | boolean | No | Determines whether the run will be restarted if it fails. |
| `maxTotalChargeUsd` | number | No | Specifies the maximum cost of the Actor run for pay-per-event actors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Task Sync & Get Dataset Items

**Slug:** `APIFY_ACTOR_TASK_RUN_SYNC_GET_DATASET_ITEMS_GET`

Tool to run an actor task synchronously and retrieve its dataset items. Use when immediate access to task run results is needed. The run must finish within 300 seconds otherwise the request times out. For large datasets exceeding the timeout, use `limit`/`offset` pagination to retrieve results in smaller batches or switch to an async run pattern with a separate dataset retrieval call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include UTF-8 Byte Order Mark in response (default varies by format). |
| `desc` | boolean | No | Return results in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from output. |
| `view` | string | No | Name of the dataset view to use. |
| `build` | string | No | Tag or number of the build to run (e.g., 'latest', '1.2.3'). |
| `clean` | boolean | No | Shortcut for skipHidden=true and skipEmpty=true. |
| `limit` | integer | No | Maximum number of items to return (default: 250000). |
| `fields` | string | No | Comma-separated list of fields to include in output. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Output format - json, jsonl, csv, html, xlsx, xml, rss. |
| `memory` | integer | No | Memory allocation in megabytes for the task execution. |
| `offset` | integer | No | Number of items to skip from the start (default: 0). |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | XML element name for each item (default: 'item'). |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `timeout` | integer | No | Timeout for the run in seconds. |
| `xmlRoot` | string | No | Root XML element name (default: 'items'). |
| `delimiter` | string | No | Delimiter character for CSV files (default: ','). |
| `skipEmpty` | boolean | No | Skip empty items from output. |
| `skipHidden` | boolean | No | Exclude fields starting with '#'. |
| `actorTaskId` | string | Yes | Unique identifier of the actor task to execute (e.g., 'pPHi5vTiEhou0Nw5F'). |
| `skipHeaderRow` | boolean | No | Skip header row in CSV format. |
| `waitForFinish` | integer | No | Maximum time to wait for the run to finish in seconds (default: 300, max: 300). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Task Sync with Input Override & Get Dataset Items

**Slug:** `APIFY_ACTOR_TASK_RUN_SYNC_GET_DATASET_ITEMS_POST`

Tool to run an actor task synchronously with input overrides and retrieve its dataset items. Use when you need to override task input configuration and get immediate results. The run must finish within 300 seconds otherwise the request times out.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | Return results in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from output. |
| `build` | string | No | Tag or number of the build to run (e.g., 'latest', '1.2.3'). |
| `clean` | boolean | No | Shortcut for skipHidden=true and skipEmpty=true. |
| `limit` | integer | No | Maximum number of items to return. Recommended for large scrapes to avoid excessive dataset sizes and costs. |
| `fields` | string | No | Comma-separated list of fields to include in output. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Output format - json, jsonl, csv, html, xlsx, xml, rss. |
| `memory` | integer | No | Memory allocation in megabytes for the task execution. |
| `offset` | integer | No | Number of items to skip from the start (default: 0). |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | XML element name for each item (default: 'item'). |
| `timeout` | integer | No | Timeout for the run in seconds. |
| `xmlRoot` | string | No | Root XML element name (default: 'items'). |
| `maxItems` | integer | No | Maximum number of dataset items that will be charged for pay-per-result Actors. Does not limit actual items returned. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook definitions for notifications. |
| `skipEmpty` | boolean | No | Skip empty items from output. |
| `skipHidden` | boolean | No | Exclude fields starting with '#'. |
| `actorTaskId` | string | Yes | Unique identifier of the actor task to execute (e.g., 'pPHi5vTiEhou0Nw5F'). |
| `waitForFinish` | integer | No | Maximum time to wait for the run to finish in seconds (max: 60). |
| `inputOverrides` | object | No | JSON object to override Actor input configuration. Properties not defined here use task defaults. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Task Sync (POST)

**Slug:** `APIFY_ACTOR_TASK_RUN_SYNC_POST`

Tool to run an Actor task synchronously with input override and return its output. Use when immediate task results are needed with custom input parameters. The run must finish within 300 seconds otherwise the HTTP request fails with a timeout error (though the run continues server-side).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `build` | string | No | Specifies the Actor build to run (build tag or build number). By default, uses the build specified in task settings (typically 'latest'). |
| `memory` | integer | No | Allocated memory in megabytes for the actor execution. Overrides the task's default memory setting. |
| `timeout` | integer | No | Timeout for the actor run in seconds. Overrides the task's default timeout setting. |
| `maxItems` | integer | No | Maximum number of results that will be returned. Useful for limiting charges per result. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook definitions for notifications on actor completion or failure. |
| `actorTaskId` | string | Yes | Unique identifier of the actor task to execute. Can be task ID or username~taskName format. |
| `waitForFinish` | integer | No | Maximum number of seconds the server waits for the task run to finish (0-60 seconds; default is 0 for synchronous endpoints). |
| `inputOverrides` | object | No | JSON object containing input field overrides for the Actor task. Properties in this object override the task's default configuration. Any property not defined will use the default value from the task configuration or Actor's input schema. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Actor

**Slug:** `APIFY_ACT_PUT`

Tool to update Actor settings using JSON payload. Only specified fields will be updated. Use when you need to modify Actor configuration, make an Actor public, or update version settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Actor identifier name. Only specified fields will be updated. |
| `title` | string | No | Display title for public actors. Required if isPublic is set to true. |
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name. Examples: 'Sbjr4vDajTluPyKl8' or 'apify~web-scraper'. |
| `isPublic` | boolean | No | Publication status. If set to true, title and categories are required. |
| `seoTitle` | string | No | Search engine optimization title |
| `versions` | array | No | Actor source code versions array |
| `categories` | array | No | Classification tags for Apify Store. Required if isPublic is set to true. |
| `description` | string | No | Human-readable Actor details. Only specified fields will be updated. |
| `taggedBuilds` | object | No | Mapping of tag names to build references. Set to null to remove tag. |
| `seoDescription` | string | No | SEO description text |
| `exampleRunInput` | object | No | Example input for the Actor |
| `defaultRunOptions` | object | No | Default execution settings for an Actor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get last actor run

**Slug:** `APIFY_ACT_RUNS_LAST_GET`

Tool to get the most recent run of a specific Actor. Use when you need to retrieve the last execution details of an Actor and optionally filter by status (e.g., status='SUCCEEDED' to get only the last successful run).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter to return only runs with a specific status (e.g., 'SUCCEEDED' ensures you get the last successful run). |
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Actor Sync without Input (GET)

**Slug:** `APIFY_ACT_RUN_SYNC_GET`

Tool to run a specific Actor synchronously without input and return its output. Use when immediate Actor results are needed without providing input data; the run must finish within 300 seconds otherwise the HTTP request fails with a timeout error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `build` | string | No | Tag or number of the Actor build to run (e.g., 'beta' or '1.2.345'). Default: Latest configured build. |
| `memory` | integer | No | Memory allocation for the Actor run in megabytes (e.g., 8192). Default: Memory limit specified in the default run configuration. |
| `actorId` | string | Yes | Actor ID or tilde-separated username~actorname format (e.g., 'janedoe~my-actor' or 'apify~hello-world'). |
| `timeout` | integer | No | Maximum run time in seconds. Zero value means no timeout. Default: Timeout specified in the default run configuration. |
| `maxItems` | integer | No | Maximum number of dataset items that will be charged for pay-per-result Actors. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook configurations to receive notifications for run events (ad hoc webhooks). |
| `inputOverrides` | object | No | JSON object to override Actor input. Sent as a query parameter encoded as JSON string. |
| `outputRecordKey` | string | No | Specifies which record from the Actor's key-value store to return. Must match a key produced by the Actor. Default: 'OUTPUT'. |
| `maxTotalChargeUsd` | number | No | Maximum spending limit in USD for pay-per-event Actors. Accessible via environment variable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Actor Sync & Get Dataset Items

**Slug:** `APIFY_ACT_RUN_SYNC_GET_DATASET_ITEMS_GET`

Tool to run Actor synchronously and get dataset items. Supports both actors that require input and those that don't. Use when immediate access to Actor results is needed. The run must finish within 300 seconds otherwise the request times out.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include BOM (Byte Order Mark) in CSV output. |
| `desc` | boolean | No | Returns results in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from each item. |
| `view` | string | No | Applies a predefined dataset view. |
| `build` | string | No | Tag or number of the Actor build to run (e.g., 'beta' or '1.2.345'). |
| `clean` | boolean | No | Equivalent to skipHidden=true and skipEmpty=true. |
| `input` | object | No | JSON input object passed to the Actor. Actor-specific schema validation is performed server-side. IMPORTANT: Most Actors expect enum values in lowercase (e.g., 'relevance' not 'RELEVANCE', 'all' not 'ALL'). Check the Actor's documentation for exact input requirements. |
| `limit` | integer | No | Maximum number of items to return. |
| `fields` | string | No | Comma-separated list of fields to include in each item. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Response format. Default: 'json'. |
| `memory` | integer | No | Memory limit for the Actor run in megabytes. |
| `offset` | integer | No | Number of items to skip from the start. |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | Customizes individual item XML element wrapper name. |
| `actorId` | string | Yes | Actor ID or username~actor-name format (e.g., 'apify~hello-world'). |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `timeout` | integer | No | Timeout for the Actor run in seconds. Zero means no timeout. |
| `xmlRoot` | string | No | Customizes root XML element wrapper name. |
| `maxItems` | integer | No | Maximum number of dataset items that will be charged for pay-per-result Actors. |
| `delimiter` | string | No | Delimiter character for CSV format. |
| `skipEmpty` | boolean | No | Excludes empty items from results. |
| `attachment` | boolean | No | Sets Content-Disposition: attachment header to force download. |
| `simplified` | boolean | No | Legacy feature, applies fields=['url','pageFunctionResult','errorInfo'] and unwind='pageFunctionResult'. |
| `skipHidden` | boolean | No | Omits fields beginning with '#' character. |
| `skipHeaderRow` | boolean | No | Skips header row in CSV output. |
| `waitForFinish` | integer | No | Maximum time in seconds the server waits for the run to finish (0-60 seconds). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of Actors

**Slug:** `APIFY_ACTS_GET`

Tool to get the list of all Actors that the user created or used. Use when you need to enumerate or browse Actors. Add my=1 to get only user-created Actors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `my` | boolean | No | If true or 1, returns only Actors owned by the user. Default is false. |
| `desc` | boolean | No | If true or 1, sorts objects by createdAt field in descending order. Default is false (ascending). |
| `limit` | integer | No | Maximum number of records to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of records to skip at the start (pagination). Default is 0. |
| `sortBy` | string ("createdAt" | "stats.lastRunStartedAt") | No | Field to sort by. Values: 'createdAt' (default) or 'stats.lastRunStartedAt' for most recently run Actors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor Version

**Slug:** `APIFY_ACT_VERSION_DELETE`

Tool to delete a specific version of an Actor's source code. Use when you need to remove an Actor version by actor ID and version number. Confirm before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor identifier in ID format or username~actorName format. Examples: '5fCDx7kGq9xcRt8FP' or 'john_doe~data-scraper'. |
| `versionNumber` | string | Yes | Actor version number to delete. Examples: '0.1', '1.0', '2.3'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor Version Environment Variable

**Slug:** `APIFY_ACT_VERSION_ENV_VAR_DELETE`

Tool to delete an environment variable from a specific Actor version. Use when removing environment variables from Actor versions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or a tilde-separated owner's username and Actor name. |
| `envVarName` | string | Yes | The name of the environment variable to delete. |
| `versionNumber` | string | Yes | Actor version number (e.g., '0.0', '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Version Environment Variable

**Slug:** `APIFY_ACT_VERSION_ENV_VAR_GET`

Tool to get environment variable details for a specific Actor version. Use when retrieving environment variable information from an Actor version. Returns name, value (if not secret), and secret status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'flDZ3hqh45G99mwJu'). |
| `envVarName` | string | Yes | The name of the environment variable to retrieve. |
| `versionNumber` | string | Yes | Actor version number (e.g., '0.0', '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Actor Version Environment Variable

**Slug:** `APIFY_ACT_VERSION_ENV_VAR_PUT`

Tool to update environment variable for a specific Actor version using JSON payload. Only specified fields will be updated. Use when modifying existing environment variables in Actor versions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The environment variable name (must match envVarName). |
| `value` | string | Yes | The updated environment variable value. |
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'flDZ3hqh45G99mwJu'). |
| `isSecret` | boolean | No | When set to true, the value will not be returned in subsequent requests. Only specified fields will be updated. |
| `envVarName` | string | Yes | The name of the environment variable to update. |
| `versionNumber` | string | Yes | Actor version number (e.g., '0.0', '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of Actor version environment variables

**Slug:** `APIFY_ACT_VERSION_ENV_VARS_GET`

Tool to get the list of environment variables for a specific Actor version. Use when you need to retrieve environment variable configurations for an Actor version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or a tilde-separated owner's username and Actor name. |
| `versionNumber` | string | Yes | Actor version number (e.g., '0.0', '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Actor Version Environment Variable

**Slug:** `APIFY_ACT_VERSION_ENV_VARS_POST`

Tool to create an environment variable for a specific Actor version. Use when adding new environment variables to Actor versions. Requires name and value parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The environment variable name. |
| `value` | string | Yes | The environment variable value. |
| `actorId` | string | Yes | Actor ID or a tilde-separated owner's username and Actor name. |
| `isSecret` | boolean | No | Indicates if the value is a secret. When true, the value will be omitted from responses. Defaults to false. |
| `versionNumber` | string | Yes | Actor version number (e.g., '0.0', '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor version

**Slug:** `APIFY_ACT_VERSION_GET`

Tool to get details about a specific version of an Actor. Use when you need version metadata including source type, build tag, and configuration details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'nwua9Gu5YrADL7ZDj'). |
| `versionNumber` | string | Yes | Actor major and minor version number (e.g., '0.1', '1.0'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Actor Version

**Slug:** `APIFY_ACT_VERSION_PUT`

Tool to update an Actor version's configuration and source code. Use when modifying version properties such as buildTag, sourceType, or environment variables. Only specified properties will be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'nwua9Gu5YrADL7ZDj'). |
| `envVars` | array | No | List of environment variables with name, value, and optional isSecret properties. |
| `buildTag` | string | No | Build tag identifier to associate with this version. |
| `gitRepoUrl` | string | No | Git repository URL. Only used when sourceType is GIT_REPO. |
| `sourceType` | string ("SOURCE_FILES" | "GIT_REPO" | "TARBALL" | "GITHUB_GIST") | No | Type of source code storage. SOURCE_FILES for inline files, GIT_REPO for Git repository, TARBALL for tarball/zip archive, GITHUB_GIST for GitHub Gist. |
| `tarballUrl` | string | No | Tarball or Zip archive URL. Only used when sourceType is TARBALL. |
| `sourceFiles` | array | No | Array of source file objects with name, format (TEXT or BASE64), and content fields. Only used when sourceType is SOURCE_FILES. |
| `gitHubGistUrl` | string | No | GitHub Gist URL. Only used when sourceType is GITHUB_GIST. |
| `versionNumber` | string | Yes | Actor major and minor version number to update (e.g., '0.1', '1.0'). |
| `applyEnvVarsToBuild` | boolean | No | Whether to apply environment variables during the build process. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of Actor versions

**Slug:** `APIFY_ACT_VERSIONS_GET`

Tool to get the list of versions of a specific Actor. Use when you need to retrieve version metadata including source type, version number, and configuration details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'nwua9Gu5YrADL7ZDj'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Actor Version

**Slug:** `APIFY_ACT_VERSIONS_POST`

Tool to create a new version of an Actor. Use when you need to add a new version with specific source code location and configuration. Requires versionNumber and sourceType parameters, plus conditional parameters based on the sourceType.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name. |
| `envVars` | array | No | Array of environment variables for the Actor version. |
| `buildTag` | string | No | Build tag identifier (e.g., 'latest'). |
| `gitRepoUrl` | string | No | URL of Git repository to clone. Required when sourceType is 'GIT_REPO'. |
| `sourceType` | string ("SOURCE_FILES" | "GIT_REPO" | "TARBALL" | "GITHUB_GIST") | Yes | Source code location type. Must be one of: 'SOURCE_FILES', 'GIT_REPO', 'TARBALL', or 'GITHUB_GIST'. |
| `tarballUrl` | string | No | URL of tarball or zip archive. Required when sourceType is 'TARBALL'. |
| `sourceFiles` | array | No | Array of source files. Required when sourceType is 'SOURCE_FILES'. |
| `gitHubGistUrl` | string | No | URL of GitHub Gist. Required when sourceType is 'GITHUB_GIST'. |
| `versionNumber` | string | Yes | Major and minor version identifier (e.g., '0.1', '1.0'). |
| `applyEnvVarsToBuild` | boolean | No | Whether to apply environment variables during build process. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of Actor webhooks

**Slug:** `APIFY_ACT_WEBHOOKS_GET`

Tool to get a list of webhooks for a specific Actor. Use when you need to review or manage webhooks configured for an Actor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by createdAt descending. Default is false (ascending). |
| `limit` | integer | No | Maximum number of webhooks to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of webhooks to skip at the start (pagination). Default is 0. |
| `actorId` | string | Yes | Actor ID or '<username>~<actorName>' format to list webhooks for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Actor

**Slug:** `APIFY_CREATE_ACTOR`

Tool to create a new Actor with specified configuration. Use when you need to initialize a fresh Actor programmatically before publishing or running it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Unique name for the new actor (must be 1–63 characters, lowercase letters, digits, and dashes). |
| `title` | string | No | Human-readable title for the actor. |
| `isPublic` | boolean | No | Whether the actor should be publicly visible on Apify Store. Cannot be true on actor creation - actors must be created as private, then built and published later. Setting isPublic=true will result in a 403 error. |
| `versions` | array | No | Initial actor versions definition. Each item must include versionNumber, sourceType (string value like 'SOURCE_FILES' or 'INLINE', not an object), and buildTag. |
| `categories` | array | No | List of category IDs to which this actor belongs. |
| `description` | string | No | Detailed description of what the actor does. |
| `isDeprecated` | boolean | No | Whether the actor is deprecated (discouraged for new runs). |
| `defaultRunOptions` | object | No | Default execution options for running the Actor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Dataset

**Slug:** `APIFY_CREATE_DATASET`

Tool to create a new dataset. Use when you need to initialize or retrieve a dataset by name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Custom unique name for the dataset (1-63 characters). Must contain only lowercase letters (a-z), digits (0-9), and hyphens (-). Hyphens can only appear in the middle, not at the start or end. If omitted, a random name is generated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Actor Task

**Slug:** `APIFY_CREATE_TASK`

Tool to create a new Actor task with specified settings. Use when you need to configure or schedule recurring Actor runs programmatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the task. Must contain only lowercase letters (a-z), digits (0-9), and hyphens (only in the middle). Names are automatically sanitized: spaces and special characters become hyphens, uppercase letters become lowercase. |
| `actId` | string | Yes | ID or 'username~actorName' of the Actor to attach the task to. |
| `input` | object | No | Input configuration for the task. This is the Actor-specific input data (e.g., keywords, URLs, settings). Keys must exactly match the target Actor's input schema; mismatched or extra keys cause INVALID_INPUT failures even when the API returns HTTP 200. |
| `title` | string | No | Display title for the task. |
| `options` | object | No | Task execution options such as memoryMbytes, timeoutSecs, build, diskMbytes. Note: Do NOT include 'input' here - use the separate 'input' field instead. |
| `actorStandby` | object | No | Actor standby configuration for faster task startup. When actorStandby is used, build, maxRequestsPerActorRun, desiredRequestsPerActorRun, idleTimeoutSecs, memoryMbytes, and shouldPassActorInput must be provided. |
| `original_name` | string | No | Internal field to store original name before sanitization. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Task Webhook

**Slug:** `APIFY_CREATE_TASK_WEBHOOK`

Tool to create a webhook for an Actor task. Use when you need external notifications about task run events (e.g., completion or failure) in downstream systems.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `isAdHoc` | boolean | No | If true, webhook is ad hoc (single dispatch). |
| `condition` | object | Yes | Condition object specifying actor or task IDs. |
| `eventTypes` | array | Yes | List of event types that trigger the webhook, e.g., ['ACTOR.TASK.RUN.SUCCEEDED']. |
| `requestUrl` | string | Yes | Target URL to which Apify will POST the webhook payload. |
| `description` | string | No | Description of the webhook. |
| `idempotencyKey` | string | No | Unique key to prevent duplicate webhook creation. |
| `headersTemplate` | string | No | JSON-like template for request headers. Some headers are managed by Apify. |
| `payloadTemplate` | string | No | JSON-like template for the POST body. Handlebars variables allowed. |
| `shouldInterpolateStrings` | boolean | No | Whether to interpolate variables inside strings in payloadTemplate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Dataset

**Slug:** `APIFY_DATASET_DELETE`

Tool to delete a dataset permanently. Use when you need to remove a dataset by its ID or username~dataset-name. Confirm before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `datasetId` | string | Yes | Unique identifier of the dataset to delete, in ID format or username~dataset-name format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Dataset

**Slug:** `APIFY_DATASET_GET`

Tool to retrieve dataset metadata by dataset ID. Use when you need information about a dataset's structure, item counts, or access URLs. This does not return dataset items themselves.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `datasetId` | string | Yes | Identifier of the dataset to retrieve (e.g., 'username/datasetName' or dataset ID). Empty string returns a paginated list of all datasets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Dataset

**Slug:** `APIFY_DATASET_PUT`

Tool to update a dataset's name via JSON payload. Use when you need to rename an existing dataset.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | New name for the dataset. |
| `datasetId` | string | Yes | Dataset ID or username~dataset-name format to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of datasets

**Slug:** `APIFY_DATASETS_GET`

Tool to get list of datasets for a user. Use when you need to enumerate or browse user's datasets. Supports pagination with up to 1000 items per page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true or 1, sorts datasets by createdAt field in descending order (newest first). Default is false (ascending). |
| `limit` | integer | No | Maximum number of datasets to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of items to skip at the start (pagination). Default is 0. |
| `unnamed` | boolean | No | Whether to include unnamed datasets in the list. Unnamed datasets expire after 7 days unless otherwise specified. Default is false. |
| `ownership` | string ("ownedByMe" | "sharedWithMe") | No | Ownership filter options for dataset listing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Dataset Statistics

**Slug:** `APIFY_DATASET_STATISTICS_GET`

Tool to get dataset field statistics by dataset ID. Use when you need statistical information about dataset fields including min, max, null count, and empty count. Only provides field statistics when dataset schema is configured.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `datasetId` | string | Yes | Identifier of the dataset to retrieve statistics for (e.g., 'username~dataset-name' or dataset ID). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Actor

**Slug:** `APIFY_DELETE_ACTOR`

Tool to delete an Actor permanently. Use when you need to remove an Actor by its ID or username~actorName. Confirm before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Unique identifier of the Actor to delete, in ID format or username~actorName format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Webhook

**Slug:** `APIFY_DELETE_WEBHOOK`

Tool to delete a webhook by its ID. Use when removing a webhook after confirming the webhook ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhookId` | string | Yes | Unique identifier of the webhook to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Details

**Slug:** `APIFY_GET_ACTOR`

Tool to get details of a specific Actor. Use when you need actor metadata by ID or username/actorName. Response includes `isDeprecated` and `notice` fields indicating deprecation status, and `pricingInfos` for per-unit cost details — review both before scheduling runs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID as either: (1) username and actor name separated by tilde (~) or forward slash (/), e.g., 'apify~web-scraper' or 'apify/web-scraper', or (2) 24-character hexadecimal ID. Forward slashes are automatically converted to tildes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Actor Last Run Dataset Items

**Slug:** `APIFY_GET_ACTOR_LAST_RUN_DATASET_ITEMS`

Tool to get dataset items from the last run of an Actor. Use when you need to retrieve output data from the most recent Actor execution, optionally filtered by run status (e.g., status='SUCCEEDED' to get items only from the last successful run).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include UTF-8 Byte Order Mark in response. |
| `desc` | boolean | No | If true, returns items in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from each item. |
| `view` | string | No | Name of the dataset view to use. |
| `clean` | boolean | No | Shortcut for skipHidden=true and skipEmpty=true. When true, removes Apify-specific metadata and empty items. |
| `limit` | integer | No | Maximum number of items to return. API has a limit of 250,000 items per request. |
| `fields` | string | No | Comma-separated list of fields to include in each item. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Output format for the dataset items. Default is JSON. |
| `offset` | integer | No | Number of items to skip from the start (pagination). Default is 0. |
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter to return dataset items only from runs with a specific status (e.g., 'SUCCEEDED' ensures you get items from the last successful run). |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | XML element name for each item (default: 'item'). |
| `actorId` | string | Yes | Actor ID or tilde-separated owner's username and Actor name (e.g., 'janedoe~my-actor' or 'apify/hello-world'). |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `xmlRoot` | string | No | Root XML element name (default: 'items'). |
| `delimiter` | string | No | Delimiter character for CSV format (default: ','). |
| `skipEmpty` | boolean | No | If true, skips empty items from results. |
| `attachment` | boolean | No | If true, forces 'Content-Disposition: attachment' in the response. |
| `skipHidden` | boolean | No | If true, skips fields beginning with '#' character. |
| `skipHeaderRow` | boolean | No | Skip header row in CSV format. |
| `skipFailedPages` | boolean | No | If true, excludes items with errorInfo property. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all webhooks

**Slug:** `APIFY_GET_ALL_WEBHOOKS`

Tool to get a list of all webhooks created by the user. Use when you need to enumerate webhooks before filtering or maintenance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort results in descending order (by creation date). |
| `limit` | integer | No | Maximum number of webhooks to return (pagination). Must be >= 1. |
| `offset` | integer | No | Number of webhooks to skip at the start (pagination). Must be >= 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get dataset items

**Slug:** `APIFY_GET_DATASET_ITEMS`

Tool to retrieve items from a dataset. Use when you need to fetch data from a specified dataset by pagination or filtering. Only JSON format is fully supported. For datasets larger than 1000 items, issue multiple calls incrementing `offset` by `limit` until the response returns fewer items than `limit`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | If true, includes BOM header in CSV output. |
| `desc` | boolean | No | If true, return items in reverse order. Default is ascending. |
| `omit` | string | No | Comma-separated list of fields to exclude from the returned items. |
| `clean` | boolean | No | When true, removes any Apify-specific metadata from items. |
| `limit` | integer | No | Maximum number of items to return (pagination). Default and max is 1000. For full dataset retrieval, paginate with multiple calls using `offset`, stopping when response count is less than `limit`. |
| `fields` | string | No | Comma-separated list of fields to include in the returned items. |
| `format` | string ("json" | "csv" | "xlsx") | No | Output format of dataset items. Only 'json' is fully supported. |
| `offset` | integer | No | Number of items to skip (pagination). Default is 0. |
| `unwind` | string | No | Name of the field to unwind into multiple items. |
| `flatten` | boolean | No | If true, flattens nested JSON into a single level for CSV. |
| `datasetId` | string | Yes | Identifier of the dataset to retrieve items from (e.g., 'username/datasetName' or dataset ID). |
| `delimiter` | string | No | Delimiter to use for CSV format. |
| `offsetKey` | string | No | Key to use for pagination instead of numeric offset. |
| `skipEmpty` | boolean | No | If true, skips empty rows in CSV output. |
| `attachment` | boolean | No | If true, forces 'Content-Disposition: attachment' in the response. |
| `skipHidden` | boolean | No | If true, skips hidden items (include only visible items). |
| `asciiHeaders` | boolean | No | If true, forces ASCII-only headers in CSV format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Default Build

**Slug:** `APIFY_GET_DEFAULT_BUILD`

Tool to get the default build for an Actor. Use after specifying the Actor ID; optionally wait for the build to finish before returning.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `actorId` | string | Yes | Actor ID or owner's username and Actor name separated by tilde or slash (e.g. 'janedoe~my-actor' or 'janedoe/my-actor'). Both formats are accepted. |
| `waitForFinish` | number | No | Maximum number of seconds to wait synchronously for the build to finish. If omitted or 0, returns immediately with the current status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Key-Value Record

**Slug:** `APIFY_GET_KEY_VALUE_RECORD`

Tool to retrieve a record from a key-value store. Use when you need to fetch a specific value by key from an Apify Key-Value Store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `format` | string ("json" | "xml" | "html" | "text") | No | Desired format of the retrieved record. |
| `storeId` | string | Yes | ID of the key-value store. |
| `recordKey` | string | Yes | Key of the record to retrieve. |
| `attachment` | boolean | No | If true, force the response as an attachment (for browser downloads). |
| `disableRedirect` | boolean | No | If true, do not redirect to the raw value; return metadata only. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of builds

**Slug:** `APIFY_GET_LIST_OF_BUILDS`

Tool to get a list of builds for a specific Actor. Use when you need paginated access to an Actor’s build (version) history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort builds by creation date descending. |
| `limit` | integer | No | Maximum number of builds to retrieve (pagination). |
| `offset` | integer | No | Number of builds to skip (pagination). |
| `status` | string ("RUNNING" | "SUCCEEDED" | "FAILED" | "ABORTED") | No | Filter builds by status. |
| `actorId` | string | Yes | Actor ID or '<username>/<actorName>' to list builds for. |
| `unnamed` | boolean | No | If true, return only unnamed builds. |
| `waitForFinish` | integer | No | Seconds to wait for build to finish before returning. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of runs

**Slug:** `APIFY_GET_LIST_OF_RUNS`

Tool to get a list of runs for a specific Actor. Use when you need to paginate through runs and optionally filter by status before processing run data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by startedAt descending. Default is ascending. |
| `limit` | integer | No | Maximum number of runs to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of runs to skip at the start (pagination). Default is 0. |
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter runs by this lifecycle status. |
| `actorId` | string | Yes | Actor ID (e.g., 'HG7ML7M8z78YcAPEB') or a tilde-separated owner username and Actor name (e.g., 'janedoe~my-actor'). If provided in 'username/actorName' format, it will be automatically converted to use tilde separator. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of task runs

**Slug:** `APIFY_GET_LIST_OF_TASK_RUNS`

Tool to get a list of runs for a specific Actor task. Use when you need to paginate through task runs and optionally filter by status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by startedAt descending. Default is ascending. |
| `limit` | integer | No | Maximum number of array elements to return. Default and max is 1000. |
| `offset` | integer | No | Number of array elements to skip. Default is 0. |
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter runs by this lifecycle status. |
| `actorTaskId` | string | Yes | Task ID or '<username>~<taskName>' identifying the task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of tasks

**Slug:** `APIFY_GET_LIST_OF_TASKS`

Tool to fetch a paginated list of tasks belonging to the authenticated user. Use when you need to browse or sort tasks created by the user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by createdAt descending. Default is ascending. |
| `limit` | integer | No | Maximum number of records to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of records to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of task webhooks

**Slug:** `APIFY_GET_LIST_OF_TASK_WEBHOOKS`

Tool to get a list of webhooks for a specific Actor task. Use when you need to review or paginate webhooks after creating or updating a task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by createdAt descending. Default is ascending. |
| `limit` | integer | No | Maximum number of webhooks to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of webhooks to skip at the start (pagination). Default is 0. |
| `actorTaskId` | string | Yes | Actor task ID or '<username>~<taskName>' to list webhooks for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get log

**Slug:** `APIFY_GET_LOG`

Tool to retrieve logs for a specific Actor run or build. Use after a run completes or fails — a run may report success status yet contain only informational messages, making log inspection the only way to confirm actual outcomes. For long runs, log responses can be very large; prioritize error-level entries and recent timestamps to diagnose issues efficiently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `buildOrRunId` | string | Yes | ID of the Actor run or build to retrieve the log for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get OpenAPI Definition

**Slug:** `APIFY_GET_OPEN_API_DEFINITION`

Tool to get the OpenAPI definition for a specific Actor build. Use when you need the API schema for code generation or analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `token` | string | No | API authentication token. Only required for private Actors; public Actors can be queried without one. |
| `actorId` | string | No | Actor ID or tilde-separated owner's username and Actor name. Required when using 'default' as buildId. |
| `buildId` | string | Yes | ID of the build to retrieve, or 'default' for the default Actor build. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Run Dataset Items

**Slug:** `APIFY_GET_RUN_DATASET_ITEMS`

Tool to get dataset items from a specific Actor run. Use when you need to retrieve the output data from a completed or running Actor run.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include BOM (Byte Order Mark) in CSV output. |
| `desc` | boolean | No | If true, returns items in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from each item. |
| `view` | string | No | Applies a predefined dataset view. |
| `clean` | boolean | No | When true, removes any Apify-specific metadata from items. |
| `limit` | integer | No | Maximum number of items to return. Default depends on format. |
| `runId` | string | Yes | The unique identifier of the Actor run to retrieve dataset items from. |
| `fields` | string | No | Comma-separated list of fields to include in each item. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Output format for the dataset items. Default is JSON. |
| `offset` | integer | No | Number of items to skip from the start (pagination). Default is 0. |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | Customizes individual item XML element wrapper name. |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `xmlRoot` | string | No | Customizes root XML element wrapper name. |
| `delimiter` | string | No | Delimiter character for CSV format. |
| `skipEmpty` | boolean | No | If true, skips empty items from results. |
| `attachment` | boolean | No | If true, forces 'Content-Disposition: attachment' in the response. |
| `skipHidden` | boolean | No | If true, skips fields beginning with '#' character. |
| `skipHeaderRow` | boolean | No | Skips header row in CSV output. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Input

**Slug:** `APIFY_GET_TASK_INPUT`

Tool to retrieve the input configuration of a specific task. Use when you need to inspect stored task input before execution or debugging.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `taskId` | string | Yes | Unique identifier of the Actor task to retrieve input for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task Last Run Dataset Items

**Slug:** `APIFY_GET_TASK_LAST_RUN_DATASET_ITEMS`

Tool to get dataset items from the last run of an Actor task. Use when you need to retrieve data from the most recent task execution. Filter by status (e.g., 'SUCCEEDED') to get items from the last successful run only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include UTF-8 Byte Order Mark in response (default varies by format). |
| `desc` | boolean | No | Return results in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from output. |
| `view` | string | No | Name of the dataset view to use. |
| `clean` | boolean | No | Shortcut for skipHidden=true and skipEmpty=true. |
| `limit` | integer | No | Maximum number of items to return (max: 250000). |
| `fields` | string | No | Comma-separated list of fields to include in output. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Output format - json, jsonl, csv, html, xlsx, xml, rss. |
| `offset` | integer | No | Number of items to skip from the start (default: 0). |
| `status` | string ("READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED") | No | Filter to return dataset items only from runs matching this status (e.g., 'SUCCEEDED' for last successful run). |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | XML element name for each item (default: 'item'). |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `xmlRoot` | string | No | Root XML element name (default: 'items'). |
| `delimiter` | string | No | Delimiter character for CSV files (default: ','). |
| `skipEmpty` | boolean | No | Skip empty items from output. |
| `attachment` | boolean | No | Force browser download via Content-Disposition header. |
| `skipHidden` | boolean | No | Exclude fields starting with '#'. |
| `actorTaskId` | string | Yes | Task ID or '<username>~<taskName>' identifying the actor task. |
| `skipHeaderRow` | boolean | No | Skip header row in CSV format. |
| `skipFailedPages` | boolean | No | Exclude items with errorInfo (failed pages). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Key-Value Store

**Slug:** `APIFY_KEY_VALUE_STORE_DELETE`

Tool to delete a key-value store permanently. Use when you need to remove a key-value store by its ID. Confirm before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storeId` | string | Yes | Unique identifier of the key-value store to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Key-Value Store

**Slug:** `APIFY_KEY_VALUE_STORE_GET`

Tool to retrieve key-value store metadata by store ID. Use when you need detailed information about a specific key-value store including stats and access URLs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storeId` | string | Yes | Identifier of the key-value store to retrieve. Can be the store ID or username/store-name format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Key-Value Store Keys

**Slug:** `APIFY_KEY_VALUE_STORE_KEYS_GET`

Tool to retrieve a list of keys from a key-value store. Use when you need to list keys in a store with optional filtering and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of keys to return. Maximum value is 1000. |
| `prefix` | string | No | Limits results to keys starting with the specified prefix. |
| `storeId` | string | Yes | Key-value store ID or 'username~store-name'. |
| `signature` | string | No | Signature used to access the keys. |
| `collection` | string | No | Filters results to keys in a specific collection. Requires the store to have a schema. |
| `exclusiveStartKey` | string | No | All keys up to this one (including) are skipped from the result. Used for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Key-Value Store Record

**Slug:** `APIFY_KEY_VALUE_STORE_RECORD_DELETE`

Tool to delete a record from a key-value store. Use when you need to remove a specific record by its key from an Apify Key-Value Store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storeId` | string | Yes | Identifier of the key-value store. |
| `recordKey` | string | Yes | The record's unique identifier to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Key-Value Store Record Exists

**Slug:** `APIFY_KEY_VALUE_STORE_RECORD_HEAD`

Tool to check if a record exists in a key-value store. Use when you need to verify whether a specific key exists in an Apify Key-Value Store without retrieving its content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storeId` | string | Yes | Identifier of the key-value store. Can be the store ID or username~store-name format. |
| `recordKey` | string | Yes | The key of the record to verify existence. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of key-value stores

**Slug:** `APIFY_KEY_VALUE_STORES_GET`

Tool to get the list of key-value stores owned by the user. Use when you need to enumerate or browse available stores. Supports pagination up to 1000 records per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true or 1, sorts stores by createdAt field in descending order. Default is false (ascending). |
| `limit` | integer | No | Maximum number of records to return (pagination). Maximum is 1000. |
| `offset` | integer | No | Number of records to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Key-Value Store

**Slug:** `APIFY_KEY_VALUE_STORES_POST`

Tool to create a new key-value store or retrieve an existing one by name. Use when you need to initialize a store for saving data records or files. If a store with the given name already exists, returns that store instead of creating a duplicate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Optional name for the key-value store. If provided, creates or retrieves a store with this name. If omitted, a random name is generated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Actor Runs

**Slug:** `APIFY_LIST_USER_RUNS`

Tool to get a paginated list of all Actor runs for the authenticated user. Use when you need to browse all runs across all actors, optionally filtered by status or date range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true or 1 then the objects are sorted by the startedAt field in descending order. By default, they are sorted in ascending order. |
| `limit` | integer | No | Maximum number of array elements to return. The default value (as well as the maximum) is 1000. |
| `offset` | integer | No | Number of array elements that should be skipped at the start. The default value is 0. |
| `status` | string | No | Single status or comma-separated list of statuses to filter runs by. Available statuses: READY, RUNNING, SUCCEEDED, FAILED, TIMING-OUT, TIMED-OUT, ABORTING, ABORTED. |
| `startedAfter` | string | No | Filter runs that started after the specified date and time (inclusive). The value must be a valid ISO 8601 datetime string (UTC). |
| `startedBefore` | string | No | Filter runs that started before the specified date and time (inclusive). The value must be a valid ISO 8601 datetime string (UTC). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Request Queue

**Slug:** `APIFY_REQUEST_QUEUE_DELETE`

Tool to delete a request queue permanently. Use when you need to remove a request queue by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Request Queue

**Slug:** `APIFY_REQUEST_QUEUE_GET`

Tool to retrieve request queue metadata by queue ID. Use when you need information about a specific request queue including its statistics and request counts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue to retrieve. Can be queue ID or 'username~queue-name' format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Request Queue Head

**Slug:** `APIFY_REQUEST_QUEUE_HEAD_GET`

Tool to retrieve first requests from the queue for inspection. Use when you need to examine pending requests without locking them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of requests to return from the queue head. Must be >= 1. |
| `queueId` | string | Yes | Unique identifier of the request queue. Can be queue ID or 'username~queue-name' format. |
| `clientKey` | string | No | A client identifier used for tracking queue access by multiple clients. Used to determine cache consistency. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Head and Lock Queue Requests

**Slug:** `APIFY_REQUEST_QUEUE_HEAD_LOCK_POST`

Tool to get and lock head requests from the queue. Returns the given number of first requests from the queue and locks them for the given time, preventing other clients from accessing them during the lock period. Use when you need to process requests exclusively without concurrent access by other clients.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of requests to retrieve and lock from the queue head. Must be between 1 and 25. If not specified, returns all available unlocked requests. |
| `queueId` | string | Yes | Unique identifier of the request queue. Can be queue ID or 'username~queue-name' format. |
| `lockSecs` | integer | Yes | How long the requests will be locked for, in seconds. Specifies the duration of the lock before it expires and the requests become available again. |
| `clientKey` | string | No | A unique identifier of the client accessing the request queue. Must be a string between 1 and 32 characters in length. Used to determine whether the queue was accessed by multiple clients. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Request Queue

**Slug:** `APIFY_REQUEST_QUEUE_PUT`

Tool to update request queue name using JSON payload. Use when you need to rename an existing request queue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the request queue. |
| `queueId` | string | Yes | Unique identifier of the request queue to update. Can be queue ID or 'username~queue-name' format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Request from Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUEST_DELETE`

Tool to delete a specific request from a request queue. Use when you need to remove a request by its ID from an Apify request queue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue. |
| `requestId` | string | Yes | Unique identifier of the request to delete from the queue. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Request from Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUEST_GET`

Tool to retrieve a specific request from a request queue by its ID. Use when you need to get detailed information about a request in an Apify request queue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue containing the request. |
| `requestId` | string | Yes | Unique identifier of the specific request to retrieve from the queue. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Request Lock

**Slug:** `APIFY_REQUEST_QUEUE_REQUEST_LOCK_DELETE`

Tool to delete a request lock from a request queue. Use when you need to unlock a previously locked request. Only the client that locked the request can delete its lock.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue, or username~queue-name format. |
| `clientKey` | string | Yes | Unique client identifier (1-32 characters) used for lock/unlock operations. Must match the key that created the lock. |
| `forefront` | boolean | No | Determines queue position after lock removal. If true, request moves to head; if false, moves to end. |
| `requestId` | string | Yes | Unique identifier of the request whose lock should be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Prolong Request Lock

**Slug:** `APIFY_REQUEST_QUEUE_REQUEST_LOCK_PUT`

Tool to prolong request lock in a request queue. Use when you need to extend the lock duration on a previously locked request. Only the client that locked the request can prolong its lock.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue, or username~queue-name format. |
| `lockSecs` | number | Yes | Duration in seconds for how long the request lock will be prolonged. |
| `clientKey` | string | Yes | Unique client identifier (1-32 characters) used for lock authorization. Must match the key that created the original lock. |
| `forefront` | string | No | Determines if request should be added to the head of the queue or to the end after lock expires. If not specified, the request stays in its current position. |
| `requestId` | string | Yes | Unique identifier of the request whose lock should be prolonged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Request in Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUEST_PUT`

Tool to update a request in a request queue. Use when you need to modify request properties or mark a request as handled by setting handledAt to the current date/time. If handledAt is set, the request will be removed from the head of the queue and unlocked if applicable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Request identifier. |
| `url` | string | Yes | URL of the web page to crawl. Must be a non-empty string. |
| `method` | string | No | HTTP method (e.g., 'GET', 'POST'). Defaults to 'GET' if not specified. |
| `headers` | object | No | HTTP headers as key-value pairs. Key is header name, value is the value. |
| `noRetry` | boolean | No | The true value indicates that the request will not be automatically retried on error. |
| `payload` | string | No | HTTP request payload, e.g., for POST requests. |
| `queueId` | string | Yes | Unique identifier of the request queue, or username~queue-name format. |
| `userData` | object | No | Custom user data assigned to the request. |
| `clientKey` | string | No | Client identifier string between 1 and 32 characters in length. |
| `forefront` | boolean | No | Boolean determining queue position. If true, places request at the beginning of the queue. Default: false. |
| `handledAt` | string | No | ISO 8601 timestamp when the request has been processed. Set to current date/time (e.g., '2025-12-06T14:42:30.000Z') to mark request as handled and remove from queue head. Is null if the request has not been crawled yet. |
| `loadedUrl` | string | No | The actual URL after any redirects occur. |
| `requestId` | string | Yes | Unique identifier of the request to update in the queue. |
| `uniqueKey` | string | Yes | A unique key identifying the request. Two requests with the same uniqueKey are considered as pointing to the same URL. |
| `retryCount` | integer | No | Indicates the number of times the crawling of the request has been retried on error. |
| `errorMessages` | array | No | An array of error messages from request processing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch Delete Requests from Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUESTS_BATCH_DELETE`

Tool to batch-delete up to 25 requests from a queue. Use when you need to remove multiple requests efficiently. Failed requests due to rate limits should be retried with exponential backoff.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue. |
| `requests` | array | Yes | Array of requests to delete (max 25 items). Each request must contain either id or uniqueKey. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch Add Requests to Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUESTS_BATCH_POST`

Tool to batch-add up to 25 requests to a request queue. Use when you need to add multiple requests efficiently. Failed requests due to rate limits should be retried with exponential backoff.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Request queue ID or username~queue-name format. |
| `requests` | array | Yes | Array of requests to add to the queue (max 25 items). Each request must contain url, uniqueKey, and method fields. |
| `clientKey` | string | No | Unique identifier of the client accessing the request queue. Must be 1-32 characters. |
| `forefront` | boolean | No | Add requests to queue head (true) or end (false). Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Request Queue Requests

**Slug:** `APIFY_REQUEST_QUEUE_REQUESTS_GET`

Tool to list requests in a request queue with pagination support. Use when you need to retrieve multiple requests from an Apify request queue.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of requests to return per page. |
| `queueId` | string | Yes | Unique identifier of the request queue to list requests from. Can be queue ID or 'username~queue-name' format. |
| `exclusiveStartId` | string | No | All requests up to this one (including) are skipped from the result. Used for pagination to specify where to start fetching results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Request to Queue

**Slug:** `APIFY_REQUEST_QUEUE_REQUESTS_POST`

Tool to add a request to the queue. Use when you need to add a web page URL to a request queue for crawling. If a request with the same uniqueKey was already present in the queue, returns the ID of the existing request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Request ID. |
| `url` | string | Yes | URL of the web page to crawl. |
| `method` | string | No | HTTP method for the request. |
| `headers` | object | No | Object with HTTP headers where key is header name and value is the header value. |
| `noRetry` | boolean | No | When true, prevents automatic retry attempts on failure. |
| `payload` | string | No | HTTP request payload, e.g. for POST requests. |
| `queueId` | string | Yes | Unique identifier of the request queue. Can be queue ID or 'username~queue-name' format. |
| `userData` | object | No | Custom user data assigned to the request to save any request-related data to the request's scope, keeping them accessible on retries, failures, etc. |
| `clientKey` | string | No | A client identifier string between 1 and 32 characters. Used to determine whether the queue was accessed by multiple clients. If not provided, the system considers this API call to come from a new client. |
| `forefront` | boolean | No | Whether to add the request to the head (true) or the end (false) of the queue. When true, enables depth-first crawling; when false or omitted, enables breadth-first crawling. |
| `handledAt` | string | No | Timestamp of completion in ISO 8601 format. |
| `loadedUrl` | string | No | Final URL after redirects. |
| `uniqueKey` | string | No | A unique key identifying the request for deduplication. Two requests with the same uniqueKey are considered as pointing to the same URL. If not provided, the URL is used as uniqueKey. |
| `retryCount` | integer | No | Count of retry attempts following errors. |
| `errorMessages` | array | No | Collection of error descriptions from processing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unlock Queue Requests

**Slug:** `APIFY_REQUEST_QUEUE_REQUESTS_UNLOCK_POST`

Tool to unlock requests in a request queue that are currently locked by the client. If the client is within an Actor run, unlocks all requests locked by that specific run plus all requests locked by the same clientKey. If the client is outside of an Actor run, unlocks all requests locked using the same clientKey.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `queueId` | string | Yes | Unique identifier of the request queue containing the locked requests. |
| `clientKey` | string | No | Unique client identifier (1-32 characters) used for lock/unlock operations. If within an Actor run, unlocks all requests locked by that run plus those locked by this clientKey. If outside an Actor run, unlocks all requests locked by this clientKey. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of request queues

**Slug:** `APIFY_REQUEST_QUEUES_GET`

Tool to get list of request queues for a user. Use when you need to enumerate or browse user's request queues. Supports pagination with up to 1000 items per page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true or 1, sorts request queues by createdAt field in descending order (newest first). Default is false (ascending). |
| `limit` | integer | No | Maximum number of request queues to return (pagination). Maximum value is 1000. |
| `offset` | integer | No | Number of request queues to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Request Queue

**Slug:** `APIFY_REQUEST_QUEUES_POST`

Tool to create a new request queue or retrieve an existing one by name. Use when you need to initialize a queue for storing and managing web scraping requests. If a queue with the given name already exists, returns that queue instead of creating a duplicate. Unnamed queues follow data retention period policies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Custom unique name to easily identify the queue in the future. If a queue with this name already exists, the existing queue object will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resurrect Run

**Slug:** `APIFY_RESURRECT_RUN`

Tool to resurrect a finished Actor run. Use when you need to restart a completed or failed run. Deprecated endpoint; may be removed in future.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `runId` | string | Yes | ID of the Actor run to resurrect. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Actor Asynchronously

**Slug:** `APIFY_RUN_ACTOR`

Tool to run a specific Actor asynchronously. Use when you need to trigger an Actor run without waiting for completion and retrieve its run details immediately.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | object | No | JSON input object passed to the Actor. IMPORTANT: Each Actor has its own required input fields - check the Actor's documentation on Apify Store for its input schema. Common examples: (1) apify/web-scraper REQUIRES both 'startUrls' (array of {url: string}) AND 'pageFunction' (JavaScript async function string); (2) Simple actors like apify/hello-world may work with empty {}; (3) Search actors may require 'queries' as a string. Always check the specific Actor's input schema before running. |
| `build` | string | No | Specifies the Actor build to run (tag or build number). Defaults to default run config. |
| `memory` | number | No | Memory limit for the run, in megabytes. Must be power of 2 and at least 128. |
| `actorId` | string | Yes | Actor ID or '<username>~<actorName>' (tilde) or '<username>/<actorName>' (forward slash), e.g. 'john~my-actor' or 'john/my-actor'. |
| `timeout` | number | No | Optional timeout for the run, in seconds. Default uses actor's default timeout. |
| `maxItems` | number | No | Maximum number of items that the Actor run should return. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook definitions. |
| `waitForFinish` | number | No | Max seconds the server waits for the run to finish. Default 0, max 60. |
| `maxTotalChargeUsd` | number | No | Specifies the maximum cost of the Actor run in USD. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Actor Sync

**Slug:** `APIFY_RUN_ACTOR_SYNC`

Tool to run a specific Actor synchronously with input and return its output record. Use when immediate Actor results are needed; runs may timeout after 300 seconds. To avoid timeouts, scope inputs to specific URLs rather than broad crawls and request only necessary fields (e.g., text or markdown).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `build` | string | No | Build tag or number to run (default Actor's default build, usually 'latest'). |
| `input` | object | Yes | JSON object passed as input to the Actor run. |
| `memory` | integer | No | Memory limit in MB; power of two, minimum 128. Uses default if unset. |
| `actorId` | string | Yes | Actor ID or a tilde-separated owner and actor name (e.g., 'user~actor-name'). If provided with a forward slash (e.g., 'user/actor-name'), it will be automatically converted to the tilde format. |
| `timeout` | number | No | Run timeout in seconds. Uses Actor default if unset; HTTP wait max 300s. |
| `maxItems` | integer | No | Maximum number of dataset items to return. |
| `webhooks` | string | No | Base64-encoded JSON array defining webhooks for run notifications. |
| `outputRecordKey` | string | No | Key of the record in the default key-value store to return (default 'OUTPUT'). |
| `maxTotalChargeUsd` | number | No | Maximum total charge in USD for the run. For pay-per-result actors, this parameter is required and must be at least $1.00. Officially documented for pay-per-event actors but also enforced by pay-per-result actors. Set this to control spending limits. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Actor Sync & Get Dataset Items

**Slug:** `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS`

Tool to run an Actor synchronously and retrieve its dataset items. Use when immediate access to run results is needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bom` | boolean | No | Include BOM (Byte Order Mark) in CSV output. |
| `desc` | boolean | No | Returns results in reverse order (newest to oldest). |
| `omit` | string | No | Comma-separated list of fields to exclude from each item. |
| `view` | string | No | Applies a predefined dataset view. |
| `build` | string | No | Tag or number of the Actor build to run (e.g., 'beta' or '1.2.345'). |
| `clean` | boolean | No | Equivalent to skipHidden=true and skipEmpty=true. |
| `input` | object | No | JSON input object passed to the Actor run. CRITICAL: Each Actor has its own unique input schema with specific field names - you MUST use the exact field names defined by that Actor or the run will fail. Check the Actor's input schema at https://apify.com/store before calling. URL FORMATTING: Always include full protocol (https://) in URLs. Actors use different URL formats - some accept plain strings, many require objects with a 'url' property (e.g., {'startUrls': [{'url': 'https://...'}]}). Check the Actor's input schema to determine which format is required. Most Actors expect enum values in lowercase (e.g., 'relevance' not 'RELEVANCE'). |
| `limit` | integer | No | Maximum number of items to return. |
| `fields` | string | No | Comma-separated list of fields to include in each item. |
| `format` | string ("json" | "jsonl" | "csv" | "html" | "xlsx" | "xml" | "rss") | No | Response format. Default: 'json'. |
| `memory` | integer | No | Memory limit for the Actor run in megabytes. |
| `offset` | integer | No | Number of items to skip from the start. |
| `unwind` | string | No | Field name to unwind array elements into separate items. |
| `xmlRow` | string | No | Customizes individual item XML element wrapper name. |
| `actorId` | string | Yes | Actor ID or name in format 'username/actor-name' or 'username~actor-name'. The actor must exist on Apify Store. Find actors at https://apify.com/store - use the exact username and actor name shown (e.g., 'compass/crawler-google-places' for Google Maps Scraper, not 'apify/google-maps-scraper'). |
| `flatten` | string | No | Comma-separated list of fields to flatten. |
| `timeout` | integer | No | Timeout for the Actor run in seconds. Zero means no timeout. |
| `xmlRoot` | string | No | Customizes root XML element wrapper name. |
| `maxItems` | integer | No | Maximum number of dataset items that will be charged for pay-per-result Actors. IMPORTANT: Pay-per-result Actors enforce a minimum cost per run (varies by Actor, commonly $0.02-$0.50). If maxItems results in a cost below the minimum, the API will reject the request. Use a higher maxItems value to meet the Actor's minimum cost requirement. |
| `delimiter` | string | No | Delimiter character for CSV format. |
| `skipEmpty` | boolean | No | Excludes empty items from results. |
| `attachment` | boolean | No | Sets Content-Disposition: attachment header to force download. |
| `simplified` | boolean | No | Legacy feature, applies fields=['url','pageFunctionResult','errorInfo'] and unwind='pageFunctionResult'. |
| `skipHidden` | boolean | No | Omits fields beginning with '#' character. |
| `skipHeaderRow` | boolean | No | Skips header row in CSV output. |
| `waitForFinish` | integer | No | Maximum time in seconds the server waits for the run to finish (0-300 seconds, max 5 minutes). If the run takes longer, the response will have status 408 (Request Timeout). |
| `maxTotalChargeUsd` | number | No | Maximum total cost of the run in USD across all Actor pricing models. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Task Asynchronously

**Slug:** `APIFY_RUN_TASK`

Tool to run a specific Actor task asynchronously. Use when you need to trigger a task run without waiting for completion and immediately retrieve its run details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | object | No | JSON input object passed to the Actor. |
| `build` | string | No | Specifies the Actor build to run (tag or build number). Defaults to default run config. |
| `memory` | number | No | Memory limit for the run, in megabytes. Must be power of 2 and at least 128. |
| `timeout` | number | No | Optional timeout for the run, in seconds. Default uses task's default timeout. |
| `maxItems` | number | No | Maximum number of items that the Actor run should return. |
| `webhooks` | string | No | Base64-encoded JSON array of webhook definitions. |
| `actorTaskId` | string | Yes | Task ID (e.g., 'HG7ML7M8z78YcAPEB') or tilde-separated owner username and task name (e.g., 'janedoe~my-task'). Note: Use tilde (~) as separator, not slash (/). |
| `waitForFinish` | number | No | Max seconds the server waits for the run to finish. Default 0, max 60. |
| `maxTotalChargeUsd` | number | No | Specifies the maximum cost of the Actor run in USD. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Schedule

**Slug:** `APIFY_SCHEDULE_DELETE`

Tool to delete a schedule by its ID. Use when you need to remove a schedule from the Apify system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scheduleId` | string | Yes | Unique identifier of the schedule to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Schedule

**Slug:** `APIFY_SCHEDULE_GET`

Tool to get schedule details by ID. Use when you need to retrieve comprehensive information about a schedule including cron expression, timezone, actions, and execution times.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scheduleId` | string | Yes | Unique identifier of the schedule to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Schedule Log

**Slug:** `APIFY_SCHEDULE_LOG_GET`

Tool to get schedule log by ID. Use when you need to retrieve execution history for a schedule, including invocation timestamps and status messages. Returns up to 1000 invocations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scheduleId` | string | Yes | Unique identifier of the schedule whose log you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Schedule

**Slug:** `APIFY_SCHEDULE_PUT`

Tool to update an existing schedule with new settings. Use when you need to modify schedule properties like cron expression, timezone, enabled status, or actions. Only specified fields are updated; others remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The schedule's name (should be 3-63 characters long). |
| `title` | string | No | A human-friendly display title for the schedule. |
| `actions` | array | No | Actors or tasks that should be run on this schedule. Each action object specifies the type and target to run. |
| `timezone` | string | No | Timezone in which your cron expression runs (TZ database name format, e.g., 'UTC', 'America/New_York'). Defaults to UTC. |
| `isEnabled` | boolean | No | True if the schedule should be enabled. |
| `scheduleId` | string | Yes | Unique identifier of the schedule to update. |
| `description` | string | No | Description of this schedule's purpose. |
| `isExclusive` | boolean | No | When set to true, don't start Actor or Actor task if it's still running from the previous schedule. |
| `notifications` | object | No | Notification settings for the schedule. |
| `cronExpression` | string | No | The cron expression used by this schedule (e.g., '@monthly', '@daily', '0 0 * * *'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of schedules

**Slug:** `APIFY_SCHEDULES_GET`

Tool to get list of schedules created by the user. Use when you need to browse or enumerate user's schedules. Supports pagination with up to 1000 items per page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | integer | No | Set to 1 to sort schedules by createdAt field in descending order (newest first). Default is 0 (ascending). |
| `limit` | integer | No | Maximum number of schedules to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of items to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Schedule

**Slug:** `APIFY_SCHEDULES_POST`

Tool to create a new schedule with specified settings. Use when you need to automate Actor or Actor task execution at specific times using cron expressions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The schedule's name (should be 3-63 characters long). |
| `title` | string | No | A human-friendly display title for the schedule. |
| `actions` | array | No | Actors or tasks that should be run on this schedule. Each action object specifies the type and target to run. |
| `timezone` | string | No | Timezone in which your cron expression runs (TZ database name format, e.g., 'UTC', 'America/New_York'). Defaults to UTC. |
| `isEnabled` | boolean | Yes | True if the schedule should be enabled. |
| `description` | string | No | Description of this schedule's purpose. |
| `isExclusive` | boolean | Yes | When set to true, don't start Actor or Actor task if it's still running from the previous schedule. |
| `notifications` | object | No | Notification settings for the schedule. |
| `cronExpression` | string | Yes | The cron expression used by this schedule (e.g., '@monthly', '@daily', '0 0 * * *'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Store Data in Dataset

**Slug:** `APIFY_STORE_DATA_IN_DATASET`

Tool to store data items in a dataset. Use after collecting data when you want to batch-append or update items in an existing dataset.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | array | Yes | Array of JSON-serializable objects to store in the dataset. |
| `omit` | string | No | Comma-separated list of fields to exclude when storing items. |
| `fields` | string | No | Comma-separated list of fields to include when storing items. |
| `datasetId` | string | Yes | Dataset ID or name (e.g., 'username/datasetName' or dataset ID). |
| `deduplicate` | boolean | No | If true, deduplicate incoming items by their 'foreignId'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Store Data in Key-Value Store

**Slug:** `APIFY_STORE_DATA_IN_KEY_VALUE_STORE`

Tool to create or update a record in a key-value store. Use after you have the store ID and record key to persist JSON data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storeId` | string | Yes | ID of the key-value store where the record will be stored. |
| `recordKey` | string | Yes | Key under which the record will be stored or updated. |
| `recordValue` | object | Yes | The JSON object to store. Must be JSON-serializable. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of Actors in Store

**Slug:** `APIFY_STORE_GET`

Tool to get list of public Actors from Apify Store. Use when you need to browse or search public Actors available in the store. Supports searching by title, name, description, username, and readme.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of Actors to return (pagination). Default is 10, maximum is 1000. |
| `offset` | integer | No | Number of Actors to skip at the start (pagination). Default is 0. |
| `search` | string | No | Search string to filter Actors by title, name, description, username, and readme. Example: 'web scraper' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Key-Value Store

**Slug:** `APIFY_UPDATE_KEY_VALUE_STORE`

Tool to update a key-value store's properties. Use when renaming or changing access of the store after confirming the store ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the key-value store. |
| `access` | string ("PRIVATE" | "SHARED") | No | Access level for the store. PRIVATE (requires authentication) or SHARED (anyone with ID can read). |
| `storeId` | string | Yes | Identifier of the key-value store to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Task Input

**Slug:** `APIFY_UPDATE_TASK_INPUT`

Tool to update the input configuration of a specific Actor task. Use when you need to modify a scheduled tasks input before execution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `input` | object | Yes | The new input configuration object for the task. |
| `taskId` | string | Yes | ID of the Actor task to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Public User Data

**Slug:** `APIFY_USER_GET`

Tool to get public user data. Use when you need to retrieve publicly accessible information about a specific Apify user account, similar to what can be seen on public profile pages. This operation requires no authentication token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | User identifier or username to retrieve public information for (e.g., 'apify', 'HGzIk8z78YcAPEB'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current User Account Data

**Slug:** `APIFY_USERS_ME_GET`

Tool to get private user account information. Use when you need to retrieve comprehensive data about the current user identified by the authentication token, including profile, subscription plan, and proxy settings. Note: 'plan', 'email', and 'profile' fields are omitted when accessed from Actor run.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Limits

**Slug:** `APIFY_USERS_ME_LIMITS_GET`

Tool to get a complete summary of account limits and usage. Use when you need to retrieve information about usage cycles, spending caps, compute resources, data transfer quotas, and other account limits. This shows the same information as the Limits page in Apify console.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Account Limits

**Slug:** `APIFY_USERS_ME_LIMITS_PUT`

Tool to update account limits manageable on the Limits page. Use when you need to set or modify the monthly spending cap (maxMonthlyUsageUsd) or data retention period (dataRetentionDays). At least one limit parameter must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dataRetentionDays` | integer | No | Storage duration for historical data in days. Determines how long data persists before automatic deletion. The platform securely stores your ten most recent Actor runs indefinitely while other storages follow the retention period. Adjustable for subscribed users. |
| `maxMonthlyUsageUsd` | number | No | Monthly spending cap in USD. Controls overage charges by setting a hard limit on monthly platform usage. If your platform usage in the billing period exceeds the prepaid usage, you will be charged extra. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Monthly Usage

**Slug:** `APIFY_USERS_ME_USAGE_MONTHLY_GET`

Tool to get monthly usage summary with daily breakdown. Use when you need detailed usage information including storage, data transfer, and request queue metrics for the current or a specific billing cycle. This shows the same information as the Billing page in Apify console.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | No | ISO date string to query usage for the billing cycle containing that date. If not provided, returns data for the current usage cycle. Format: YYYY-MM-DD or ISO 8601 date string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get list of webhook dispatches

**Slug:** `APIFY_WEBHOOK_DISPATCHES_GET`

Tool to get list of webhook dispatches for the user. Use when you need to retrieve webhook execution history with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by createdAt in descending order. Default is ascending. |
| `limit` | integer | No | Maximum number of records to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of records to skip at the start (pagination). Default is 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook Dispatch

**Slug:** `APIFY_WEBHOOK_DISPATCH_GET`

Tool to get webhook dispatch object with all details. Use when you need to retrieve information about a specific webhook dispatch including its status, event data, and call history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dispatchId` | string | Yes | The unique identifier for the webhook dispatch being queried. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get webhook

**Slug:** `APIFY_WEBHOOK_GET`

Tool to get webhook object with all details. Use when you need to retrieve complete information about a specific webhook by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhookId` | string | Yes | Unique identifier of the webhook to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Webhook

**Slug:** `APIFY_WEBHOOK_PUT`

Tool to update webhook using JSON payload. Only specified properties are updated; others remain unchanged. Use when you need to modify webhook settings like event types, target URL, or other configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `isAdHoc` | boolean | No | Whether the webhook is ad-hoc (temporary, single dispatch). |
| `condition` | object | No | Webhook condition specifying which Actor, task, or run the webhook applies to. |
| `webhookId` | string | Yes | Unique identifier of the webhook to update. |
| `doNotRetry` | boolean | No | Whether to disable automatic retry on webhook delivery failure. |
| `eventTypes` | array | No | List of event types that trigger the webhook (e.g., ['ACTOR.RUN.SUCCEEDED', 'ACTOR.RUN.FAILED']). |
| `requestUrl` | string | No | Target URL to which Apify will POST the webhook payload. |
| `description` | string | No | Human-readable description of the webhook. |
| `headersTemplate` | string | No | JSON-like template for request headers with variable substitution support. |
| `ignoreSslErrors` | boolean | No | Whether to ignore SSL certificate validation errors when delivering the webhook. |
| `payloadTemplate` | string | No | JSON-like template for the POST body with variable substitution support. |
| `shouldInterpolateStrings` | boolean | No | Whether to interpolate variables inside strings in payloadTemplate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Test Webhook

**Slug:** `APIFY_WEBHOOK_TEST_POST`

Tool to test a webhook by creating a test dispatch with a dummy payload. Use when you need to verify webhook configuration before production use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhookId` | string | Yes | The unique identifier of the webhook to test. This webhook will receive a test dispatch with a dummy payload. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get webhook dispatches

**Slug:** `APIFY_WEBHOOK_WEBHOOK_DISPATCHES_GET`

Tool to get list of webhook dispatches for a specific webhook. Use when you need to retrieve dispatch history for a particular webhook with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `desc` | boolean | No | If true, sort by createdAt in descending order. Default is ascending. |
| `limit` | integer | No | Maximum number of records to return (pagination). Default and max is 1000. |
| `offset` | integer | No | Number of records to skip at the start (pagination). Default is 0. |
| `webhookId` | string | Yes | Unique identifier of the webhook to retrieve dispatches for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
