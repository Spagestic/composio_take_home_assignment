# Firecrawl

Firecrawl automates web crawling and data extraction, enabling organizations to gather content, index sites, and gain insights from online sources at scale

- **Category:** ai web scraping
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 30
- **Triggers:** 0
- **Slug:** `FIRECRAWL`
- **Version:** 20260903_00

## Frequently Asked Questions

### Batch fewer URLs or raise timeout for long Firecrawl scrape jobs

For Firecrawl scrape timeouts, reduce the number of links per request, such as batching 1-2 links at a time for complex pages, or increase the scrape timeout if the tool call supports it. A useful starting timeout is `120000` milliseconds for roughly a 2-minute timeout.

## Tools

### Cancel an agent job

**Slug:** `FIRECRAWL_AGENT_CANCEL`

Tool to cancel an in-progress agent job by its ID. Use when you need to terminate an active agent operation. The API returns a success boolean upon cancellation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID) of the agent job to cancel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch scrape multiple URLs

**Slug:** `FIRECRAWL_BATCH_SCRAPE`

Tool to scrape multiple URLs in batch with concurrent processing. Use when you need to scrape multiple web pages efficiently with customizable formats and content filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | array | Yes | The URLs to be scraped in batch. At least one URL is required. |
| `proxy` | string ("basic" | "stealth" | "auto") | No | Proxy type to use for requests. |
| `maxAge` | integer | No | Cache validity period in milliseconds. Default is 2 days. |
| `mobile` | boolean | No | If true, emulate a mobile device when scraping. Defaults to false. |
| `actions` | array | No | Browser actions to perform on each page before scraping. |
| `formats` | array | No | Desired output formats for the scraped content. Defaults to ['markdown']. |
| `headers` | object | No | Custom HTTP headers to send with each request. |
| `timeout` | integer | No | Request timeout in milliseconds. |
| `waitFor` | integer | No | Delay in milliseconds before content retrieval. Useful for pages with dynamic content. Defaults to 0. |
| `webhook` | object | No | Webhook configuration for batch scrape notifications |
| `blockAds` | boolean | No | If true, block advertisements during scraping. Defaults to true. |
| `location` | object | No | Location settings for the request |
| `excludeTags` | array | No | HTML tags to specifically exclude from the output. |
| `includeTags` | array | No | HTML tags to specifically include in the output. |
| `storeInCache` | boolean | No | If true, store scraped content in cache for future use. Defaults to true. |
| `maxConcurrency` | integer | No | Maximum number of concurrent scrape operations. Controls how many URLs are scraped simultaneously. |
| `onlyMainContent` | boolean | No | If true, extract only the main content, excluding headers, footers, navigation bars, and ads. Defaults to true. |
| `ignoreInvalidURLs` | boolean | No | If true, skip invalid URLs instead of failing the entire batch. Defaults to true. |
| `zeroDataRetention` | boolean | No | If true, do not retain any scraped data. Defaults to false. |
| `removeBase64Images` | boolean | No | If true, remove base64-encoded images from the scraped content. Defaults to true. |
| `skipTlsVerification` | boolean | No | If true, skip TLS certificate verification. Defaults to true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a batch scrape job

**Slug:** `FIRECRAWL_BATCH_SCRAPE_CANCEL`

Tool to cancel a running batch scrape job using its unique identifier. Use when you need to terminate an in-progress batch scrape operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID) of the batch scrape job to cancel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get batch scrape status

**Slug:** `FIRECRAWL_BATCH_SCRAPE_GET`

Retrieves the current status and results of a batch scrape job using the job ID. Use this to check batch scrape progress and retrieve scraped data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the batch scrape job. Must be a valid UUID format obtained when the batch scrape was initiated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get errors from batch scrape job

**Slug:** `FIRECRAWL_BATCH_SCRAPE_GET_ERRORS`

Tool to retrieve error details from a batch scrape job, including failed URLs and URLs blocked by robots.txt. Use when you need to debug or understand why certain pages failed to scrape in a batch operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (UUID) of the batch scrape job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Start a web crawl

**Slug:** `FIRECRAWL_CRAWL`

Initiates a Firecrawl web crawl from a given URL, applying various filtering and content extraction rules, and polls until the job is complete; ensure the URL is accessible and any regex patterns for paths are valid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The base URL to start crawling from. This is the initial entry point for the web crawler. |
| `delay` | integer | No | Delay in milliseconds between requests to avoid overwhelming the server |
| `limit` | integer | No | Maximum number of pages to crawl. The crawl will stop once this limit is reached. Default is 10. |
| `webhook` | string | No | An optional webhook URL to receive real-time updates on the crawl job. Events include crawl start (`crawl.started`), page crawled (`crawl.page`), and crawl completion (`crawl.completed` or `crawl.failed`). The payload structure matches the `/scrape` endpoint response. |
| `maxDepth` | integer | No | Maximum depth of subpages to crawl relative to the entered URL (not the base domain). A depth of 0 crawls only the entered URL, 1 crawls the entered URL plus pages one path segment deeper, 2 adds two segments deeper, etc. For example, if URL is 'https://example.com/docs/api/', maxDepth=1 crawls '/docs/api/' and '/docs/api/something/'. |
| `excludePaths` | array | No | A list of Regular Expression (regex) patterns for URL paths to exclude from the crawl. URLs whose paths match any of these patterns will be ignored. For example, `"blog/archive/.*"` would exclude all paths under `/blog/archive/`. |
| `includePaths` | array | No | A list of Regular Expression (regex) patterns for URL paths to include in the crawl. Only URLs whose paths match one of these patterns will be processed. For example, `"products/featured/.*"` would only include paths under `/products/featured/`. |
| `ignoreSitemap` | boolean | No | If true, the crawler will ignore any sitemap.xml found on the website. |
| `crawlEntireDomain` | boolean | No | If true, allows the crawler to follow internal links to sibling or parent URLs, not just child paths. This is the recommended replacement for 'allowBackwardLinks'. |
| `maxDiscoveryDepth` | integer | No | Maximum depth to crawl based on discovery order. The root site and sitemapped pages have a discovery depth of 0. For example, if you set it to 1 and set ignoreSitemap, you will only crawl the entered URL and all URLs that are linked on that page. |
| `allowBackwardLinks` | boolean | No | DEPRECATED: Use 'crawlEntireDomain' instead. If true, allows the crawler to navigate to pages that were linked from pages already visited (i.e., navigate 'backwards'). |
| `allowExternalLinks` | boolean | No | If true, allows the crawler to follow links that lead to external websites (different domains). |
| `scrapeOptionsProxy` | string | No | Proxy configuration for requests |
| `scrapeOptionsMaxAge` | integer | No | Maximum age in seconds for cached content. If content is older than this, it will be re-scraped |
| `scrapeOptionsMobile` | boolean | No | If true, emulate a mobile device when scraping |
| `scrapeOptionsActions` | array | No | List of actions to perform on each page before scraping (e.g., clicking buttons, waiting) |
| `scrapeOptionsFormats` | array | No | Specifies the desired output formats for the scraped content from each page. Default is `["markdown"]`. IMPORTANT: If "json" format is included, scrapeOptionsJsonOptions must also be provided. |
| `scrapeOptionsHeaders` | object | No | Custom HTTP headers to send with each request |
| `scrapeOptionsTimeout` | integer | No | Timeout in milliseconds for each page request. Default is 30000ms (30 seconds) |
| `scrapeOptionsWaitFor` | integer | No | Additional milliseconds to wait after Firecrawl's smart wait, before scraping the page. Useful for pages with dynamically loaded content or heavy JavaScript. Use sparingly as Firecrawl already waits intelligently. |
| `ignoreQueryParameters` | boolean | No | If true, ignore query parameters when determining if a URL has been visited |
| `scrapeOptionsBlockAds` | boolean | No | If true, block advertisements during scraping |
| `scrapeOptionsLocation` | object | No | Geolocation settings for the scraper |
| `scrapeOptionsParsePDF` | boolean | No | If true, attempt to parse PDF files encountered during crawling |
| `scrapeOptionsExcludeTags` | array | No | A list of HTML tags to exclude from the scraped output. Content within these tags (and their children) will be removed before processing. |
| `scrapeOptionsIncludeTags` | array | No | A list of HTML tags to specifically include in the scraped output. Only content within these tags will be processed. If empty or null, all relevant content is considered based on other options. |
| `scrapeOptionsJsonOptions` | object | No | Options for JSON format extraction including schema and prompts. REQUIRED when 'json' format is specified in scrapeOptionsFormats. Conversely, if this is provided, 'json' must be included in scrapeOptionsFormats. |
| `scrapeOptionsStoreInCache` | boolean | No | If true, store scraped content in cache for future use |
| `scrapeOptionsOnlyMainContent` | boolean | No | If true, attempts to extract only the main content of each page, excluding common elements like headers, navigation bars, and footers. Default is true. |
| `scrapeOptionsRemoveBase64Images` | boolean | No | If true, remove base64-encoded images from the scraped content |
| `scrapeOptionsSkipTlsVerification` | boolean | No | If true, skip TLS certificate verification |
| `scrapeOptionsChangeTrackingOptions` | object | No | Options for tracking changes between crawls |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a crawl job

**Slug:** `FIRECRAWL_CRAWL_CANCEL`

Cancels an active or queued web crawl job using its ID; attempting to cancel completed, failed, or previously canceled jobs will not change their state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID) of the crawl job to be canceled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a crawl job

**Slug:** `FIRECRAWL_CRAWL_DELETE`

Tool to cancel a running crawl job by its ID. Use when you need to stop an active crawl operation. The API returns a status of 'cancelled' upon successful cancellation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID) of the crawl job to cancel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get crawl job status

**Slug:** `FIRECRAWL_CRAWL_GET`

Tool to retrieve the status and results of a Firecrawl crawl job. Use when you need to check the progress or get data from an ongoing or completed crawl operation. Returns crawl status, progress metrics, credits used, and the crawled page data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the crawl job to check status for. This is the UUID returned when the crawl was initiated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get errors from a crawl job

**Slug:** `FIRECRAWL_CRAWL_GET_ERRORS`

Tool to retrieve errors from a Firecrawl crawl job. Use when you need to understand why certain pages failed to scrape or which URLs were blocked by robots.txt during a crawl operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID) of the crawl job to retrieve errors from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get all active crawl jobs

**Slug:** `FIRECRAWL_CRAWL_LIST_ACTIVE`

Tool to retrieve all active crawl jobs for the authenticated team. Use when you need to see which crawl operations are currently running.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Preview crawl parameters

**Slug:** `FIRECRAWL_CRAWL_PARAMS_PREVIEW`

Preview crawl parameters before starting a crawl by generating optimal configuration from natural language instructions. Use this tool to understand what crawl settings will be applied based on your requirements before executing a full crawl operation. The endpoint intelligently interprets natural language prompts to configure crawl parameters like include/exclude paths, depth limits, and domain scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The website address to be crawled. This is the target URL for which crawl parameters will be generated. |
| `prompt` | string | Yes | Natural language description of crawling requirements (max 10,000 characters). Describe what pages to crawl, what to include or exclude, and any specific crawl behavior needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Start a web crawl (v2) [NEW]

**Slug:** `FIRECRAWL_CRAWL_V2`

[NEW v2 API] Initiates a Firecrawl v2 web crawl with enhanced features over v1: natural language prompts for automatic crawler configuration, crawlEntireDomain for sibling/parent page discovery, better depth control with maxDiscoveryDepth, subdomain support, and full webhook configuration. Polls until crawl is complete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The base URL to start crawling from. This is the initial entry point for the web crawler. |
| `delay` | integer | No | Delay in seconds between scrapes to respect website rate limits. |
| `limit` | integer | No | Maximum number of pages to crawl. The crawl will stop once this limit is reached. Default is 10. |
| `prompt` | string | No | A natural language prompt to automatically generate crawler settings. Example: 'Only crawl blog posts and docs, skip marketing pages'. Explicitly set parameters will override the generated equivalents. |
| `sitemap` | string ("include" | "skip" | "only") | No | Sitemap mode when crawling. 'include' (default) uses sitemap and discovers other pages. 'skip' ignores sitemap entirely and only discovers pages from the start URL. 'only' crawls exclusively URLs from the sitemap, ignoring other discovered links. |
| `webhook` | object | No | Webhook configuration for receiving real-time crawl updates. |
| `excludePaths` | array | No | A list of Regular Expression (regex) patterns for URL paths to exclude from the crawl. URLs whose paths match any of these patterns will be ignored. For example, `"blog/archive/.*"` would exclude all paths under `/blog/archive/`. |
| `includePaths` | array | No | A list of Regular Expression (regex) patterns for URL paths to include in the crawl. Only URLs whose paths match one of these patterns will be processed. For example, `"products/featured/.*"` would only include paths under `/products/featured/`. |
| `maxConcurrency` | integer | No | Maximum number of concurrent scrapes. If not specified, uses your team's concurrency limit. |
| `allowSubdomains` | boolean | No | If true, allows the crawler to follow links to subdomains of the main domain. |
| `crawlEntireDomain` | boolean | No | Allows the crawler to follow internal links to sibling or parent URLs, not just child paths. False: Only crawls deeper (child) URLs (e.g., /features/feature-1 → /features/feature-1/tips). True: Crawls any internal links including siblings and parents (e.g., /features/feature-1 → /pricing, /). |
| `maxDiscoveryDepth` | integer | No | Maximum depth to crawl based on discovery order. The root site and sitemapped pages have a discovery depth of 0. For example, if you set it to 1 and set sitemap='skip', you will only crawl the entered URL and all URLs linked on that page. |
| `zeroDataRetention` | boolean | No | If true, enables zero data retention for this crawl. Contact help@firecrawl.dev to enable this feature. |
| `allowExternalLinks` | boolean | No | If true, allows the crawler to follow links that lead to external websites (different domains). Defaults to false. |
| `scrapeOptions_proxy` | string | No | Proxy configuration for requests |
| `scrapeOptions_maxAge` | integer | No | Maximum age in milliseconds for cached content. If content is older than this, it will be re-scraped. |
| `scrapeOptions_mobile` | boolean | No | If true, emulate a mobile device when scraping |
| `ignoreQueryParameters` | boolean | No | If true, do not re-scrape the same path with different (or no) query parameters |
| `scrapeOptions_actions` | array | No | List of actions to perform on each page before scraping (e.g., clicking buttons, waiting) |
| `scrapeOptions_formats` | array | No | Specifies the desired output formats for the scraped content from each page. Can be a list of format strings (e.g., ["markdown", "html"]) or format objects. For JSON extraction, use a JsonFormatOptions object with type="json", optional schema (JSON Schema), and optional prompt for guidance. Example: [{"type": "json", "schema": {...}, "prompt": "Extract title"}] |
| `scrapeOptions_headers` | object | No | Custom HTTP headers to send with each request |
| `scrapeOptions_parsers` | array | No | List of parsers to use for specific content types (e.g., 'pdf') |
| `scrapeOptions_timeout` | integer | No | Timeout in milliseconds for each page request. Default is 30000ms (30 seconds) |
| `scrapeOptions_waitFor` | integer | No | The duration in milliseconds to wait for page JavaScript to execute and content to load before scraping. |
| `scrapeOptions_blockAds` | boolean | No | If true, block advertisements during scraping |
| `scrapeOptions_location` | object | No | Geolocation settings for the scraper |
| `scrapeOptions_excludeTags` | array | No | A list of HTML tags to exclude from the scraped output. Content within these tags will be removed. |
| `scrapeOptions_includeTags` | array | No | A list of HTML tags to specifically include in the scraped output. Only content within these tags will be processed. |
| `scrapeOptions_storeInCache` | boolean | No | If true, store scraped content in cache for future use |
| `scrapeOptions_onlyMainContent` | boolean | No | If true, attempts to extract only the main content of each page, excluding common elements like headers, navigation bars, and footers. Default is true. |
| `scrapeOptions_removeBase64Images` | boolean | No | If true, remove base64-encoded images from the scraped content |
| `scrapeOptions_skipTlsVerification` | boolean | No | If true, skip TLS certificate verification |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team credit usage

**Slug:** `FIRECRAWL_CREDIT_USAGE_GET`

Tool to get current team credit usage information. Use when you need to check remaining credits or billing period details.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get historical team credit usage

**Slug:** `FIRECRAWL_CREDIT_USAGE_GET_HISTORICAL`

Tool to retrieve historical team credit usage on a monthly basis. Use when you need to analyze credit consumption patterns over time, optionally segmented by API key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `byApiKey` | boolean | No | When enabled, breaks down usage by individual API key. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Perform deep research

**Slug:** `FIRECRAWL_DEEP_RESEARCH`

Initiates an AI-powered deep research operation that autonomously explores the web to investigate any topic and synthesizes findings from multiple sources. Requires an active Firecrawl connection. The research process iteratively searches, analyzes, and synthesizes information across multiple web sources, providing comprehensive insights with source citations. Results include a final analysis, detailed activity timeline, and curated source list. Billing: 1 credit per URL analyzed. Control costs with the maxUrls parameter. Note: This API is in Alpha and being deprecated after June 30, 2025; prefer FIRECRAWL_SEARCH + FIRECRAWL_EXTRACT or COMPOSIO_SEARCH_WEB for durable workflows. Reserve this tool for cases requiring synthesized multi-source analysis — it is slower and more resource-intensive than FIRECRAWL_SEARCH.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The research question or topic to investigate. Provide a clear, specific question or topic for best results. |
| `formats` | array | No | Output format list. Set to ["json"] to get structured JSON output. When using "json" format, you must also provide jsonOptions. |
| `maxUrls` | integer | No | Maximum number of URLs to analyze during research. Range: 1-1000. Default: 20. Higher values provide more comprehensive results but consume more credits (1 credit per URL). |
| `maxDepth` | integer | No | Controls how many iterations the research process goes through. Range: 1-10. Default: 7 (if not specified). Higher depth means more thorough research but longer processing time. |
| `timeLimit` | integer | No | Time limit for the research job in seconds. Range: 30-300 seconds. Default: 270 (if not specified). Research will stop when this limit is reached. |
| `jsonOptions` | object | No | Configuration for JSON structured output. Must contain either "schema" (a valid JSON Schema dict) or "prompt" (a string). When using schema, provide a complete JSON Schema with "type", "properties", etc., wrapped in a "schema" key. |
| `systemPrompt` | string | No | Custom system-level prompt to guide the agentic research exploration process. Use this to set the context, tone, or specific behaviors for the research agent. |
| `analysisPrompt` | string | No | Custom prompt to guide the final synthesis and analysis generation. Use this to specify how findings should be summarized or what aspects to emphasize in the final analysis. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Extract structured data

**Slug:** `FIRECRAWL_EXTRACT`

Extracts structured data from web pages by initiating an extraction job and polling for completion; requires a natural language `prompt` or a JSON `schema` (one must be provided).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | array | Yes | A list of URLs from which to extract data (maximum 10 URLs while in beta). Wildcards (e.g., `https://example.com/blog/*`) can be used for crawling multiple pages under a specific path. Note: You can also pass a single URL as 'url' (singular) which will be automatically converted to a list. |
| `prompt` | string | No | Natural language query for information to extract from URL content. E.g., 'Extract the company mission, whether it supports SSO, etc.'. At least one of 'prompt' or 'schema' must be provided. |
| `schema` | object | No | JSON object (dictionary) defining the desired structure for extracted data. Must be a valid JSON Schema object with properties and types. At least one of 'prompt' or 'schema' must be provided. |
| `showSources` | boolean | No | When true, the sources used to extract the data will be included in the response as `sources` key. |
| `ignoreSitemap` | boolean | No | Bypasses sitemap.xml during scanning. |
| `scrapeOptions` | object | No | Advanced scraping configuration. |
| `enableWebSearch` | boolean | No | If `True`, allows crawling links outside initial domains in `urls`; if `False`, restricts to same domains. |
| `ignoreInvalidURLs` | boolean | No | Proceeds with valid URLs, returning invalid ones separately. |
| `includeSubdomains` | boolean | No | Extends scanning to subdomains. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get extract job status

**Slug:** `FIRECRAWL_EXTRACT_GET`

Tool to retrieve the status and results of a previously submitted extract job. Use when you need to check the progress or get the final results of an extraction operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier (UUID format) of the extract job to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get agent job status

**Slug:** `FIRECRAWL_GET_AGENT_STATUS`

Tool to get the status and results of an agent job. Use when you need to check if an agent job has completed and retrieve the collected data. Agent jobs autonomously search, navigate, and extract data from the web.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (UUID) of the agent job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deep research status

**Slug:** `FIRECRAWL_GET_DEEP_RESEARCH_STATUS`

Retrieves the status and results of a deep research job by its ID. Use when you need to check the progress or retrieve the final analysis of a deep research operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (UUID) of the deep research job. Must be the UUID returned by FIRECRAWL_DEEP_RESEARCH; arbitrary UUIDs are not valid. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the status of a crawl job

**Slug:** `FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB`

Retrieves the current status, progress, and details of a web crawl job, using the job ID obtained when the crawl was initiated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (UUID) of the crawl job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Generate LLMs.txt for a website

**Slug:** `FIRECRAWL_LLMS_TXT_GENERATE`

Initiates an async job to generate an LLMs.txt file for a website, converting web content into LLM-friendly format. Returns a job ID to check status and retrieve results. Use when you need to create a standardized, machine-readable representation of website content for language models.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to generate LLMs.txt from. Must be a valid URI format. |
| `maxUrls` | integer | No | Maximum number of URLs to analyze when generating the LLMs.txt file. Must be between 1 and 100. Default is 10. |
| `showFullText` | boolean | No | Include full text content in the response. When true, generates both llmstxt and llmsfulltxt. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get LLMs.txt generation job status

**Slug:** `FIRECRAWL_LLMS_TXT_GET`

Tool to get the status and results of an LLMs.txt generation job. Use when you need to check if a job has completed and retrieve the generated content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (UUID) of the LLMs.txt generation job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Map multiple URLs

**Slug:** `FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS`

Maps a website by discovering URLs from a starting base URL, with options to customize the crawl via search query, subdomain inclusion, sitemap handling, and result limits; search effectiveness is site-dependent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The starting website URL to map and discover links from. Must be a valid HTTP/HTTPS URL string (e.g., 'https://example.com'). Do NOT pass code snippets, SDK examples, or anything other than a plain URL. |
| `limit` | integer | No | Maximum number of links to return. Defaults to 5000. Maximum allowed is 100000. |
| `search` | string | No | Optional search query to guide URL mapping, prioritizing or finding specific page types. 'Smart' search is limited to 1000 initial results in Alpha, but overall mapping can exceed this. |
| `sitemap` | string | No | Sitemap handling mode: 'skip' to exclude sitemaps, 'include' to use sitemaps with other discovery methods (default behavior), or 'only' to return only sitemap URLs. |
| `timeout` | integer | No | Timeout in milliseconds. No timeout is applied by default. |
| `location` | object | No | Geographic settings for location-based request processing. Object with 'country' (ISO 3166-1 alpha-2 code, e.g., 'US', 'DE', 'JP') and optionally 'languages' (array of language codes, e.g., ['en'], ['de', 'en']). |
| `ignoreCache` | boolean | No | If true, bypasses cached sitemap data. Useful when sitemaps have been recently updated. Sitemap data is cached for up to 7 days. Defaults to false. |
| `includeSubdomains` | boolean | No | If true, includes subdomains of the base URL in the mapping. E.g., if `url` is example.com, blog.example.com is mapped. Defaults to true. |
| `ignoreQueryParameters` | boolean | No | If true, excludes URLs with query parameters from results. Defaults to true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team queue status

**Slug:** `FIRECRAWL_QUEUE_GET`

Tool to retrieve metrics about the team's scrape queue. Use when you need to check queue status, job counts, or concurrency limits.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Scrape URL

**Slug:** `FIRECRAWL_SCRAPE`

Scrapes a publicly accessible URL, optionally performing pre-scrape browser actions or extracting structured JSON using an LLM, to retrieve content in specified formats.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The fully qualified URL of the web page to scrape. Must start with 'http://' or 'https://' and be a valid web URL. |
| `actions` | array | No | An optional list of browser actions (e.g., click, write, wait, press) to perform on the page before scraping. Useful for interacting with dynamic content, filling forms, or navigating through page elements. |
| `formats` | array | No | A list of desired output formats for the scraped content. Defaults to ['markdown']. Cannot include both 'screenshot' and 'screenshot@fullPage'. If 'json' is included, jsonOptions must be provided. |
| `timeout` | integer | No | Maximum time in milliseconds to wait for the scraping request to complete. Defaults to 30000. |
| `waitFor` | integer | No | Time in milliseconds to wait for the page to load or for dynamic content to render before starting the scrape. Defaults to 0. |
| `location` | object | No | Location settings for the request |
| `excludeTags` | array | No | A list of HTML tags to specifically exclude from the output. Content within these tags will be removed. |
| `includeTags` | array | No | A list of HTML tags to specifically include in the output. Content within these tags will be prioritized. |
| `jsonOptions` | object | No | Options for JSON extraction |
| `onlyMainContent` | boolean | No | If true, attempts to extract only the main article content, excluding headers, footers, navigation bars, and ads. Defaults to true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search

**Slug:** `FIRECRAWL_SEARCH`

Performs a web search for a query, scrapes content from the top search results using Firecrawl, and returns details in specified formats.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The search query to execute. Can be provided as 'query' or 'q'. |
| `lang` | string | No | Language code for search results (e.g., 'en' for English, default 'en'). |
| `limit` | integer | No | Maximum number of search results to return (1-100, default 5). |
| `country` | string | No | Country code to tailor search results (e.g., 'us' for United States, default 'us'). |
| `formats` | array | No | Desired output formats for scraped content of each search result. If None, default scraping applies. Available string formats: 'markdown', 'html', 'rawHtml', 'links'. For screenshots, use object format: {'type': 'screenshot', 'fullPage': true/false, 'quality': 1-100}. For other advanced formats, consult Firecrawl API documentation. |
| `timeout` | integer | No | Maximum time in milliseconds for search and scrape operations (1000-300000, default 60000). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Start an agent job

**Slug:** `FIRECRAWL_START_AGENT`

Tool to start an agent job for agentic web extraction with multi-page navigation and interaction capabilities. Use when you need to autonomously gather data from the web with complex navigation requirements. The agent can search, navigate, and extract information across multiple pages based on your natural language prompt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urls` | array | No | Specific URLs to constrain the agent's search. If provided, the agent will start from these URLs. If not provided, the agent will autonomously search the web. |
| `prompt` | string | Yes | Natural language description of what data you want to extract. The agent will autonomously navigate and interact with web pages to gather this information. |
| `schema` | object | No | JSON schema defining the structure of data you want returned. Must be a valid JSON Schema object with properties and types. This ensures the extracted data matches your desired format. |
| `maxCredits` | integer | No | Maximum credits to spend on the request. The agent will stop when this limit is reached, preventing unexpected costs. If not specified, the agent will continue until the task is complete. |
| `strictConstrainToURLs` | boolean | No | Whether to strictly limit the agent to only the provided URLs. If true, the agent will not navigate to external links. If false or not specified, the agent can follow links to gather more information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get team token usage

**Slug:** `FIRECRAWL_TOKEN_USAGE_GET`

Tool to retrieve the current team's token usage and balance information for Firecrawl's Extract feature. Use when you need to check remaining token credits, plan allocation, or billing period details.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get historical team token usage

**Slug:** `FIRECRAWL_TOKEN_USAGE_GET_HISTORICAL`

Tool to retrieve historical team token usage on a monthly basis. Use when you need to analyze token consumption patterns over time, optionally segmented by API key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `byApiKey` | boolean | No | When enabled, breaks down usage by individual API key. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
