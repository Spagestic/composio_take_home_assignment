# MrScraper

MrScraper provides web scraping APIs for structured extraction, search results, marketplace data, travel data, and web unblocking.

- **Category:** ai web scraping
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 11
- **Triggers:** 0
- **Slug:** `MRSCRAPER`
- **Version:** 00000000_00

## Tools

### Bulk Rerun AI Scraper

**Slug:** `MRSCRAPER_BULK_RERUN_AI_SCRAPER`

Run an existing General AI scraper configuration against multiple URLs in one request. Returns the accepted bulk result ID for Get Scrape Result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | array | Yes | One or more HTTP or HTTPS URLs to process with the existing AI scraper. |
| `scraper_id` | string | Yes | UUID of an existing General AI scraper configuration to run against every URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Rerun Manual Scraper

**Slug:** `MRSCRAPER_BULK_RERUN_MANUAL_SCRAPER`

Run an existing saved manual scraper workflow against multiple URLs in one request. Returns the accepted bulk result ID for Get Scrape Result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | array | Yes | Non-empty list of HTTP or HTTPS URLs to process with the saved workflow. |
| `scraper_id` | string | Yes | UUID of the existing manual scraper workflow to rerun. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create AI Scraper

**Slug:** `MRSCRAPER_CREATE_AI_SCRAPER`

Create and run a general, listing, or map AI scraper against a website.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | HTTP or HTTPS website URL to scrape. |
| `agent` | string ("general" | "listing" | "map") | No | AI scraper mode: general extraction, repeated-item listing extraction, or site mapping. |
| `limit` | integer | No | Map-only maximum extracted entries (1-100000); omit for the provider default of 1000. |
| `message` | string | No | Natural-language extraction instructions. Required for general and listing modes; omit for map mode. |
| `max_depth` | integer | No | Map-only maximum link depth (0-5); omit to use the provider default of 2. |
| `max_pages` | integer | No | Map-only maximum pages to crawl (1-1000); omit for the default of 50. |
| `proxy_country` | string | No | Two-letter country code for geo-localized scraping. |
| `exclude_patterns` | array | No | Map-only URL regex patterns to exclude. |
| `include_patterns` | array | No | Map-only URL regex patterns to include. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Usage

**Slug:** `MRSCRAPER_GET_ACCOUNT_USAGE`

Return the connected MrScraper account's plan, token usage, concurrency allowance, and rate limits without exposing user identity or token details.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Scrape Status Analytics

**Slug:** `MRSCRAPER_GET_ANALYTIC_STATUSES`

Return aggregate scrape counts, success rate, request rate, latency, and status totals for a domain and action over a time range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | No | Optional custom-scraper action filter, such as create, rerun, bulk, or fetch HTML; omit to aggregate all actions. |
| `domain` | string | Yes | Domain to aggregate, without a URL path (for example example.com). |
| `end_date` | string | Yes | Range end in yyyy-MM-dd HH:mm:ss format. |
| `start_date` | string | Yes | Range start in yyyy-MM-dd HH:mm:ss format. |
| `api_token_name` | string | No | Optional non-secret dashboard token name used only to filter analytics; not the API token value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Scrape Analytics Timeline

**Slug:** `MRSCRAPER_GET_ANALYTIC_TIMELINE`

Return time-series scrape activity and success metrics for a domain and action over a time range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | No | Optional custom-scraper action filter, such as create, rerun, bulk, or fetch HTML; omit to aggregate all actions. |
| `domain` | string | Yes | Domain to aggregate, without a URL path (for example example.com). |
| `end_date` | string | Yes | Range end in yyyy-MM-dd HH:mm:ss format. |
| `start_date` | string | Yes | Range start in yyyy-MM-dd HH:mm:ss format. |
| `api_token_name` | string | No | Optional non-secret dashboard token name used only to filter analytics; not the API token value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Scrape Result

**Slug:** `MRSCRAPER_GET_RESULT`

Retrieve the current status and output for one accessible scrape result by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result_id` | string | Yes | Result UUID returned by a create or rerun operation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Heal Manual Scraper

**Slug:** `MRSCRAPER_HEAL_MANUAL_SCRAPER`

Ask MrScraper to repair an existing manual scraper workflow that no longer matches its target site.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scraper_id` | string | Yes | UUID of the manual scraper workflow to inspect and repair. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Scrape Results

**Slug:** `MRSCRAPER_LIST_RESULTS`

List scrape results for the connected account with filtering, sorting, and agent-controlled pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `end_at` | string | No | Inclusive end date/time for date_range_column. |
| `search` | string | No | Text to search across result columns. |
| `start_at` | string | No | Inclusive start date/time for date_range_column. |
| `page_size` | integer | No | Maximum results to return in this page (1-100). |
| `sort_field` | string | No | Provider result field to sort by, such as createdAt. |
| `sort_order` | string ("ASC" | "DESC") | No | Ascending or descending sort order. |
| `next_cursor` | string | No | Continuation cursor returned by a previous call; omit for the first page. |
| `date_range_column` | string | No | Result date field constrained by start_at and end_at. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Rerun AI Scraper

**Slug:** `MRSCRAPER_RERUN_AI_SCRAPER`

Run an existing AI scraper configuration against a new URL, with optional map crawl controls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | New HTTP or HTTPS URL to process with the existing scraper. |
| `limit` | integer | No | Optional maximum extracted entries for a map scraper (1-100000); omit to use the provider default of 1000. |
| `max_depth` | integer | No | Optional maximum link depth for a map scraper (0-5); omit to use the provider default of 2. |
| `max_pages` | integer | No | Optional maximum pages for a map scraper (1-1000); omit to use the provider default of 50. |
| `scraper_id` | string | Yes | AI scraper UUID returned by a prior AI scrape. |
| `exclude_patterns` | array | No | URL regex patterns to exclude when rerunning a map scraper. |
| `include_patterns` | array | No | URL regex patterns to include when rerunning a map scraper. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Rerun Manual Scraper

**Slug:** `MRSCRAPER_RERUN_MANUAL_SCRAPER`

Run an existing saved manual scraper workflow against a new URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | New HTTP or HTTPS URL to process with the saved workflow. |
| `scraper_id` | string | Yes | UUID of an existing manual scraper saved in MrScraper. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
