# Clay

Clay is a go-to-market data enrichment and workflow automation platform for searching people and companies, running routines, and querying workspace tables.

- **Category:** sales & crm
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 6
- **Triggers:** 0
- **Slug:** `CLAY`
- **Version:** 00000000_00

## Tools

### Continue Search

**Slug:** `CLAY_CONTINUE_SEARCH`

Consume one next page from an existing Clay query-mode search. Each call advances Clay's server-side iterator and consumes search quota; call again only while has_more is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum records requested for this page. Clay may enforce a lower plan-specific maximum. |
| `search_id` | string | Yes | Search identifier returned by Search People or Companies. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current User

**Slug:** `CLAY_GET_CURRENT_USER`

Return the Clay user and workspace associated with the connected Public API key.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Routine Run Results

**Slug:** `CLAY_GET_ROUTINE_RUN_RESULTS`

Check progress or fetch one page of results for an existing inline Clay routine run. Returns progress while processing and an explicit next_cursor when another terminal result page is available.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum completed item results to return in this page (1-100). |
| `cursor` | string | No | Continuation cursor returned as next_cursor by a previous result page. Omit for the first page or a progress check. |
| `routine_run_id` | string | Yes | Routine run identifier returned by Run Routine. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Search Query Reference

**Slug:** `CLAY_GET_SEARCH_QUERY_REFERENCE`

Return Clay's current advanced-search field and grammar reference for composing people or company queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Routine

**Slug:** `CLAY_RUN_ROUTINE`

Start a Clay routine for 1-100 items, poll it for a bounded time, and return completed item results or the current run ID and progress. Execution may consume Clay credits and can notify an existing webhook when webhook_id is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | One to 100 independently identified routine inputs. |
| `routine_id` | string | Yes | Clay-managed or custom-function routine identifier to execute. |
| `webhook_id` | string | No | Existing Clay webhook identifier to notify about the run, if desired. |
| `wait_timeout_seconds` | number | No | Maximum seconds to wait before returning the latest in-progress state. |
| `poll_interval_seconds` | number | No | Seconds between result checks while the run remains in progress. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search People or Companies

**Slug:** `CLAY_SEARCH_PEOPLE_OR_COMPANIES`

Create a Clay query-mode people or company search and consume its first result page. This advances a stateful search iterator and consumes Clay search quota; use Continue Search only while has_more is true.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum records requested for the first page. Clay may enforce a lower plan-specific maximum. |
| `query` | string | Yes | Clay advanced-search query for people or companies. Call Get Search Query Reference first when the grammar or available fields are unknown. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
