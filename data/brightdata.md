# Bright Data

Bright Data provides the world's #1 web data platform with Web Unlocker for bypassing anti-bot systems, SERP API for search engine data, and pre-made scrapers for popular websites. Collect any web data at scale.

- **Category:** ai web scraping
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 10
- **Triggers:** 0
- **Slug:** `BRIGHTDATA`
- **Version:** 20260826_00

## Tools

### Trigger Site Crawl

**Slug:** `BRIGHTDATA_CRAWL_API`

Tool to trigger an asynchronous site crawl job to extract content across multiple pages or entire domains. Returns a snapshot_id required by BRIGHTDATA_GET_SNAPSHOT_STATUS (poll until complete) and BRIGHTDATA_GET_SNAPSHOT_RESULTS (call only after completion; querying early yields empty or partial data). Use when you need to start a crawl for a given dataset and list of URLs. Large crawls can produce very large payloads — fetch results incrementally.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | List of objects containing URLs or other parameters required by the crawler. Supports scope configuration fields such as depth limits, includePaths, and excludePaths to prevent over-crawling large sites, which increases cost and runtime. |
| `dataset_id` | string | Yes | Your dataset ID. |
| `include_errors` | boolean | No | Whether to include an errors report with the results. |
| `custom_output_fields` | string | No | Pipe-separated list of output fields to include (e.g., 'url&#124;about.updated_on'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Browse Available Scrapers

**Slug:** `BRIGHTDATA_DATASET_LIST`

Tool to list all available pre-made scrapers (datasets) from Bright Data's marketplace. Use when you need to browse available data sources for structured scraping.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Filter Dataset

**Slug:** `BRIGHTDATA_FILTER_DATASET`

Tool to apply custom filter criteria to a marketplace dataset (BETA). Use after selecting a dataset to generate a filtered snapshot.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `files` | array | No | Optional uploaded CSV or JSON files containing filter values. |
| `filter` | object | Yes | Filter criteria object. Basic filter: {"name": "field_name", "operator": "=", "value": "search_term"}. Combine filters: {"operator": "and", "filters": [{...}, {...}]}. Supported operators: '=', '!=', '<', '<=', '>', '>=', 'in', 'not_in', 'includes', 'not_includes', 'array_includes', 'not_array_includes', 'is_null', 'is_not_null'. Max nesting depth: 3. |
| `dataset_id` | string | Yes | ID of the dataset to filter. |
| `records_limit` | integer | No | Optional maximum number of records to include in the snapshot, must be >= 1. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Available Cities

**Slug:** `BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES`

Tool to get available static network cities for a given country. Use when you need to configure static proxy endpoints after selecting a country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | ISO 3166-1 alpha-2 country code to list available cities for. |
| `pool_ip_type` | string ("dc" | "static_res") | No | Type of static proxy pool. 'dc' for datacenter, 'static_res' for residential. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Available Countries

**Slug:** `BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES`

Tool to list available countries and their ISO 3166-1 alpha-2 codes. Use when you need to configure zones with valid country codes before provisioning proxies.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Scraped Data

**Slug:** `BRIGHTDATA_GET_SNAPSHOT_RESULTS`

Tool to retrieve the scraped data from a completed crawl job by snapshot ID. Only call after confirming the job is complete via BRIGHTDATA_GET_SNAPSHOT_STATUS — querying before completion yields empty or partial data. Use after triggering a crawl or filtering a dataset to download the collected data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `part` | integer | No | Which batch part to download (starts from 1). Use with 'batch_size' parameter. |
| `format` | string ("json" | "csv" | "ndjson" | "jsonl") | No | Desired output format. Options: json, csv, ndjson (newline-delimited JSON), or jsonl (JSON Lines). |
| `compress` | boolean | No | Whether to compress the result using gzip. |
| `batch_size` | integer | No | Divide snapshot into batches of this size (minimum 1000 records). Use with 'part' parameter. For large snapshots, always paginate using both `batch_size` and `part` together; skipping pagination can silently drop records or exceed response limits. |
| `snapshot_id` | string | Yes | Identifier of the snapshot to fetch results for. This is the snapshot_id returned by the Trigger Site Crawl (CRAWL_API) action, typically in the format 's_xxxxxxxxxxxxx'. IDs expire after some time; stale or invalid IDs return empty or error responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Crawl Status

**Slug:** `BRIGHTDATA_GET_SNAPSHOT_STATUS`

Tool to check the processing status of a crawl job using snapshot ID. Call before attempting to download results to ensure data collection is complete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `snapshot_id` | string | Yes | Identifier of the snapshot to check. This is the snapshot_id returned by the Trigger Site Crawl (CRAWL_API) action, typically in the format 's_xxxxxxxxxxxxx'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Unlocker Zones

**Slug:** `BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES`

Tool to list your configured Web Unlocker zones and proxy endpoints. Use to view available zones for web scraping and bot protection bypass.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### SERP Search

**Slug:** `BRIGHTDATA_SERP_SEARCH`

Tool to perform SERP (Search Engine Results Page) searches across different search engines using Bright Data's SERP Scrape API. Use when you need to retrieve search results, trending topics, or competitive analysis data. This action submits an asynchronous request and returns a response ID for tracking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zone` | string | Yes | Zone identifier for your SERP API product configuration. This is a required parameter that must be obtained from your Bright Data dashboard under 'Proxies & Scraping Infrastructure'. Each user has their own unique zone name. |
| `format` | string ("json" | "raw") | No | Response format. 'json' returns structured data, 'raw' returns HTML string. |
| `method` | string | No | HTTP method for the request. |
| `country` | string | No | Two-letter ISO country code for proxy location and localized search results. |
| `q_keywords` | string | Yes | The search query keywords to execute. |
| `data_format` | string ("markdown" | "screenshot") | No | Additional data transformation. 'markdown' converts HTML to clean markdown, 'screenshot' captures a PNG image. |
| `search_engine` | string ("google" | "bing" | "yahoo" | "duckduckgo" | "yandex") | No | Search engine to use for the query. Supported values: google, bing, yahoo, duckduckgo, yandex. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Web Unlocker

**Slug:** `BRIGHTDATA_WEB_UNLOCKER`

Tool to bypass bot detection, captcha, and other anti-scraping measures to extract content from websites. Use when you need to scrape websites that block automated access or require JavaScript rendering. Some responses may still contain CAPTCHA challenge pages or incomplete HTML; inspect the response before retrying, and avoid aggressive retry loops.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL of the website to unlock and scrape. |
| `zone` | string | Yes | Web Unlocker zone name (required, non-empty). Call BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES first to get available zones. |
| `format` | string ("json" | "raw") | No | Response format - 'raw' returns HTML content as string, 'json' returns structured data. |
| `country` | string | No | ISO 3166-1 alpha-2 country code for the proxy location (e.g., 'us', 'gb', 'de'). |
| `data_format` | string | No | Set to 'markdown' to convert page content to markdown format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
