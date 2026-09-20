# Dataforseo

SEO data and analytics platform providing SERP data, backlinks, keywords, and competitive intelligence

- **Category:** developer tools
- **Auth:** BASIC
- **Composio-managed OAuth available?** N/A
- **Tools:** 312
- **Triggers:** 0
- **Slug:** `DATAFORSEO`
- **Version:** 20260615_00

## Tools

### Create App Data Apple App Reviews Task

**Slug:** `DATAFORSEO_CREATE_APP_DATA_APPLE_APP_REVIEWS_TASK`

Tool to create Apple App Store reviews retrieval tasks. Use when you need to fetch user reviews for a specific iOS app from the App Store. Returns task IDs for retrieving results later. Reviews can be sorted by most recent or most helpful.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires app_id and either location/language code or name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Apple App Searches Task

**Slug:** `DATAFORSEO_CREATE_APP_DATA_APPLE_APP_SEARCHES_TASK`

Tool to create Apple App Store search tasks via DataForSEO API. Use when you need to search for apps on the Apple App Store by keyword with specific location and language parameters. Returns task IDs for retrieving results later using the get task advanced endpoint. Supports up to 100 tasks per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires a keyword and either location/language code or name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create App Data Google App List Task

**Slug:** `DATAFORSEO_CREATE_APP_DATA_GOOGLE_APP_LIST_TASK`

Tool to create Google Play Store app list retrieval tasks. Use when you need to fetch lists of mobile apps from Google Play top charts (featured, topselling, topgrossing, etc.). Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires app_collection and either location/language code or name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create App Data Google App Reviews Task

**Slug:** `DATAFORSEO_CREATE_APP_DATA_GOOGLE_APP_REVIEWS_TASK`

Tool to create Google Play app reviews retrieval tasks. Use when you need to fetch user reviews for a specific Android app from Google Play Store. Returns task IDs for retrieving results later. Reviews can be filtered by rating and sorted by newest or most relevant.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires app_id and either location/language code or name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Business Data Trustpilot Search Task

**Slug:** `DATAFORSEO_CREATE_BUSINESS_DATA_TRUSTPILOT_SEARCH_TASK`

Tool to create Trustpilot search tasks for retrieving business profiles. Use when you need to search for businesses on Trustpilot by keyword. Returns task IDs for retrieving results later using the get task endpoint. The results provide business profiles with ratings, reviews count, and URLs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires a keyword. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Keywords Data Google Trends Explore Task

**Slug:** `DATAFORSEO_CREATE_KEYWORDS_DATA_GOOGLE_TRENDS_EXPLORE_TASK`

Tool to create Google Trends Explore tasks for analyzing keyword popularity over time. Use when you need to get trend data from Google Search, YouTube, Google News, Google Images, or Google Shopping. Returns task IDs for retrieving results later using the task_get endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to create. Each task will query Google Trends to analyze keyword popularity over time. Maximum 100 tasks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Keywords Data Bing Audience Estimation Task

**Slug:** `DATAFORSEO_CREATE_KW_BING_AUDIENCE_EST_TASK`

Tool to create a Bing Audience Estimation task for ad campaign planning. Use when you need to estimate audience size, clicks, impressions, and budget recommendations based on targeting criteria like age, gender, location, industry, and job function.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `age` | array | No | Target age groups for the ad campaign. Multiple age ranges can be specified to refine audience targeting |
| `bid` | number | No | Cost per click (CPC) bid amount in USD. Affects estimated reach and budget calculations |
| `gender` | array | No | Target gender(s) for the ad campaign. Can specify multiple genders for broader targeting |
| `industry` | array | No | Industry targeting codes. Array of industry identifiers to target specific business sectors (e.g., 806303407 for Technology) |
| `daily_budget` | number | No | Daily advertising budget in USD. Used to estimate campaign reach and engagement metrics |
| `job_function` | array | No | Job function targeting codes. Array of job role identifiers to target specific professional functions (e.g., 806298607 for IT) |
| `location_code` | integer | No | Unique location identifier for geographic targeting. Use location_code, location_name, or location_coordinate (only one at a time) |
| `location_name` | string | No | Full name of target location (e.g., 'United States', 'New York'). Use location_code, location_name, or location_coordinate (only one at a time) |
| `location_coordinate` | string | No | GPS coordinates with radius for location targeting. Format: 'latitude,longitude,radius_km' (e.g., '29.6821525,-82.4098881,100'). Use location_code, location_name, or location_coordinate (only one at a time) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Keywords Data Google Keywords For Keywords Task

**Slug:** `DATAFORSEO_CREATE_KW_GOOGLE_KW_FOR_KW_TASK`

Tool to create Google Keywords For Keywords tasks for keyword research and analysis. Use when you need to get keyword suggestions, search volumes, CPC data, and competition metrics based on seed keywords. Returns task IDs for retrieving results later using the task_get endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to create. Each task will generate keyword suggestions and metrics based on the provided seed keywords. Maximum 100 tasks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Merchant Amazon Sellers Task

**Slug:** `DATAFORSEO_CREATE_MERCHANT_AMAZON_SELLERS_TASK`

Tool to create Merchant Amazon Sellers tasks. Use when you need to get a list of sellers for a specific product on Amazon, including seller details, pricing, condition, shipment information, and ratings. Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires asin and either location/language code or name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On Page Lighthouse Task

**Slug:** `DATAFORSEO_CREATE_ON_PAGE_LIGHTHOUSE_TASK_POST`

Tool to create an On Page Lighthouse audit task for measuring web page quality based on Google's Lighthouse. Use when you need to audit a web page for SEO, performance, accessibility, best practices, or PWA compliance. Results are retrieved asynchronously using the returned task ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results in callbacks or when retrieving results later. |
| `url` | string | Yes | Target page URL with absolute path including protocol (http:// or https://). Example: 'https://dataforseo.com' |
| `audits` | array | No | Specific audits to run from the available audits list. Use the 'Get On Page Lighthouse Audits' action to retrieve the full list of available audits. If not specified, all relevant audits for the selected categories will be executed. |
| `version` | string | No | Lighthouse version number to use for the audit. Use the 'List On Page Lighthouse Versions' action to get available versions. If not specified, the latest version will be used. |
| `categories` | array | No | Specific audit categories to run. Available options: 'seo', 'pwa', 'performance', 'best_practices', 'accessibility'. If not specified, all categories will be audited. |
| `for_mobile` | boolean | No | Enable mobile device emulation for the audit. Set to true to test mobile version, false for desktop. Defaults to false if not specified. |
| `pingback_url` | string | No | URL for GET notification when task completes. Supports variables: $id (task ID) and $tag (user-defined tag). Example: 'https://your-server.com/pingscript?id=$id&tag=$tag' |
| `postback_url` | string | No | URL for POST notification with gzip-compressed results when task completes. Supports variables: $id (task ID) and $tag (user-defined tag). Example: 'https://your-server.com/postback?id=$id' |
| `language_code` | string | No | Language code for the audit. Defaults to 'en' if not specified. Use the 'List On Page Lighthouse Languages' action to get available language codes. |
| `language_name` | string | No | Language name for the audit. Defaults to 'English' if not specified. Use the 'List On Page Lighthouse Languages' action to get available languages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create On Page Task

**Slug:** `DATAFORSEO_CREATE_ON_PAGE_TASK_POST`

Tool to create an On Page crawl task for analyzing websites. Use when you need to audit a website for SEO, check on-page parameters, find optimization opportunities, or analyze site structure. The crawl checks 60+ parameters including meta tags, duplicate content, images, response codes, and more.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results in callbacks or when retrieving results later. |
| `target` | string | Yes | Website domain or URL to crawl and analyze. Can be a domain (example.com) or full URL (https://example.com). This is the starting point for the website crawl. |
| `custom_js` | string | No | Custom JavaScript code to execute on each page during crawling. Code should return a valid JavaScript object. Example: 'meta = {}; meta.url = document.URL; meta;' |
| `start_url` | string | No | Specific URL to start crawling from. If not specified, crawling will start from the target domain's homepage. Must be within the target domain. |
| `enable_xhr` | boolean | No | Enable capturing of XMLHttpRequest (XHR) data during crawling. Useful for analyzing AJAX requests and dynamic content loading. |
| `check_spell` | boolean | No | Enable spell checking on page content. When enabled, spelling errors will be detected and reported. |
| `crawl_delay` | integer | No | Delay in milliseconds between requests to avoid overloading the target server. Minimum value is 0. |
| `switch_pool` | boolean | No | Switch to a different IP pool for requests. Can help avoid rate limiting or blocks from target websites. |
| `pingback_url` | string | No | URL for GET notification when task completes. Supports variables: $id (task ID) and $tag (user-defined tag). Example: 'https://your-server.com/pingscript?id=$id&tag=$tag' |
| `priority_urls` | array | No | List of URLs to prioritize during crawling. These URLs will be crawled first before other discovered URLs. |
| `browser_preset` | string | No | Browser configuration preset for rendering. Available presets define viewport size, user agent, and other browser settings. |
| `custom_sitemap` | string | No | URL of a custom sitemap to use instead of auto-discovering the sitemap. Must be a valid sitemap URL. |
| `load_resources` | boolean | No | Load external resources (CSS, JS, images) during crawling. Required for accurate page rendering and resource analysis. |
| `store_raw_html` | boolean | No | Store raw HTML of crawled pages for later retrieval. Enabling this will increase storage costs but allows detailed page analysis. |
| `accept_language` | string | No | Accept-Language header value for HTTP requests. Format: language codes with quality values (e.g., 'en-US,en;q=0.9'). |
| `max_crawl_depth` | integer | No | Maximum depth of crawling from the start URL. Depth 0 is the start URL itself, depth 1 includes all pages linked from the start URL, etc. Default is unlimited. |
| `max_crawl_pages` | integer | No | Maximum number of pages to crawl on the website. Limits the scope of the crawl operation. If not specified, the default limit from your account settings will be used. |
| `respect_sitemap` | boolean | No | Whether to respect and use the website's sitemap for crawling. If enabled, pages in the sitemap will be prioritized. |
| `support_cookies` | boolean | No | Enable cookie support during crawling. Useful for sites that require cookies for proper functionality. |
| `allow_subdomains` | boolean | No | Allow crawling of subdomains of the target domain. When enabled, links to subdomains will be followed. |
| `checks_threshold` | object | No | Custom threshold values for various checks. Allows fine-tuning of what constitutes a warning or error for different metrics. Keys are check names, values are threshold integers. |
| `custom_robots_txt` | string | No | Custom robots.txt content to use instead of fetching from the website. Useful for testing crawl behavior with different robots.txt rules. |
| `custom_user_agent` | string | No | Custom User-Agent string for HTTP requests. If not specified, DataForSEO's default user agent will be used. |
| `enable_javascript` | boolean | No | Enable JavaScript rendering during crawling. Required for crawling single-page applications and JavaScript-heavy sites. |
| `allowed_subdomains` | array | No | Specific list of subdomains to allow during crawling. Only these subdomains will be crawled if encountered. Example: ['blog.example.com', 'shop.example.com'] |
| `crawl_sitemap_only` | boolean | No | Only crawl pages listed in the sitemap. When enabled, the crawler will not follow links outside the sitemap. |
| `disable_page_checks` | array | No | List of page-level checks to disable during crawling. Use to skip specific analysis metrics you don't need. |
| `browser_screen_width` | integer | No | Browser viewport width in pixels for rendering. Default is typically 1920. |
| `check_spell_language` | string | No | Language code for spell checking (e.g., 'en', 'es', 'fr'). Required if check_spell is enabled. |
| `disable_cookie_popup` | boolean | No | Attempt to automatically dismiss cookie consent popups during crawling. Improves crawl accuracy by removing overlay elements. |
| `validate_micromarkup` | boolean | No | Validate structured data and micromarkup (Schema.org, JSON-LD, etc.) on crawled pages. Checks for correct implementation of structured data. |
| `browser_screen_height` | integer | No | Browser viewport height in pixels for rendering. Default is typically 1080. |
| `disallowed_subdomains` | array | No | Specific list of subdomains to exclude from crawling. Links to these subdomains will be ignored. |
| `force_sitewide_checks` | boolean | No | Force execution of site-wide checks even if the crawl doesn't complete all pages. Useful for getting partial results from large sites. |
| `robots_txt_merge_mode` | string | No | How to merge custom robots.txt with the site's existing robots.txt. Options may include 'replace', 'merge', etc. |
| `check_spell_exceptions` | array | No | List of words to exclude from spell checking. Useful for brand names, technical terms, etc. that may be flagged as misspelled. |
| `enable_content_parsing` | boolean | No | Enable parsing and extraction of page content (headings, paragraphs, images, etc.). Required for detailed content analysis. |
| `return_despite_timeout` | boolean | No | Return partial results even if the crawl times out before completion. Useful for large sites where complete crawl may take too long. |
| `disable_sitewide_checks` | array | No | List of site-wide checks to disable. Site-wide checks analyze patterns across all crawled pages. |
| `enable_browser_rendering` | boolean | No | Enable full browser rendering (headless browser) for crawling. Provides more accurate rendering of modern web pages but increases processing time. |
| `calculate_keyword_density` | boolean | No | Calculate keyword density metrics for crawled pages. Useful for SEO analysis to understand keyword usage patterns. |
| `enable_www_redirect_check` | boolean | No | Check if www and non-www versions of the site redirect correctly. Important for SEO to avoid duplicate content issues. |
| `browser_screen_scale_factor` | number | No | Browser screen scale factor for high-DPI displays. Default is 1.0. Use 2.0 for retina displays. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Autocomplete Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_AUTOCOMPLETE_TASK`

Tool to create Google Autocomplete SERP tasks. Use when you need to retrieve autocomplete suggestions that Google Search provides as users type their queries. Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires keyword and optionally location/language parameters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Events Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_EVENTS_TASK`

Tool to create Google Events SERP tasks via DataForSEO API. Use when you need to retrieve event listings from Google Search for specific keywords and locations. Note: Google Events SERP API works for English language only. Returns task IDs for retrieving results later using the get task advanced endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires a keyword and either location_code, location_name, or location_coordinate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Finance Explore Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_FINANCE_EXPLORE_TASK`

Tool to create Google Finance Explore SERP tasks. Use when you need to retrieve real-time data from the 'Explore' tab of Google Finance, including market indexes, news, earnings calendars, trending instruments, and market trends. Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires location and language parameters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Local Finder Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_LOCAL_FINDER_TASK`

Tool to create Google Local Finder SERP tasks for retrieving local business search results. Use when you need to get location-based search results for businesses and services from Google's Local Finder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires keyword and either location_code, location_name, or location_coordinate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Maps Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_MAPS_TASK`

Tool to create Google Maps SERP tasks. Use when you need to retrieve Google Maps search results for local businesses, places, or locations. Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires keyword (or url) and optionally location/language parameters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Google Organic Task

**Slug:** `DATAFORSEO_CREATE_SERP_GOOGLE_ORGANIC_TASK_POST`

Tool to create Google Organic SERP tasks for retrieving top search engine results. Use when you need to get organic search results for specific keywords, analyze SERP features, track rankings, or research competitors. Results include organic listings, featured snippets, People Also Ask, and other SERP elements. Tasks are processed asynchronously - use the returned task ID to retrieve results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires either 'keyword' or 'url' parameter along with optional location and language settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP Seznam Organic Task

**Slug:** `DATAFORSEO_CREATE_SERP_SEZNAM_ORGANIC_TASK`

Tool to create a SERP Seznam Organic search task. Use when you need to retrieve Seznam search engine results for a specific keyword and location in the Czech Republic. Results are retrieved asynchronously using the returned task ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `os` | string | No | Operating system for the search. Default depends on the device type selected. |
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results in callbacks or when retrieving results later. |
| `url` | string | No | Direct Seznam search URL with exact language/location parameters. Cannot be used with keyword parameter. |
| `depth` | integer | No | Number of results to return in SERP. Default is 10, maximum is 700. |
| `device` | string | No | Device type for the search: 'desktop', 'mobile', or 'tablet'. Default is 'desktop'. |
| `keyword` | string | No | Search query keyword (up to 700 characters). Use %25 for '%' and %2B for '+' in the query string. Required if url parameter is not specified. |
| `priority` | integer | No | Task execution priority: 1 for normal speed (default), 2 for high priority (higher charges apply). Higher priority tasks are processed faster. |
| `se_domain` | string | No | Search engine domain to use for the search. Default is 'search.seznam.cz'. |
| `pingback_url` | string | No | URL for GET notification when task completes. Supports variables: $id (task ID) and $tag (user-defined tag). |
| `postback_url` | string | No | URL for POST notification with results when task completes. Supports variables: $id (task ID) and $tag (user-defined tag). |
| `search_param` | string | No | Additional Seznam-specific search parameters or query modifiers to customize the search. |
| `language_code` | string | No | Language code (e.g., 'cs'). Required if language_name is not specified. Use 'List SERP Seznam Languages' action to get available language codes. |
| `language_name` | string | No | Full language name (e.g., 'Czech'). Required if language_code is not specified. Use 'List SERP Seznam Languages' action to get available languages. |
| `location_code` | integer | No | Location identifier code. Required if location_name is not specified. Use 'List SERP Seznam Locations' action to get available location codes. |
| `location_name` | string | No | Full name of the search engine location. Required if location_code is not specified. Use 'List SERP Seznam Locations' action to get available locations. |
| `postback_data` | string | No | Data type for postback results: 'regular', 'advanced', or 'html'. Required if postback_url is specified. |
| `max_crawl_pages` | integer | No | Maximum number of pages to crawl. Default is 1, maximum is 100. |
| `stop_crawl_on_match` | array | No | Array of match criteria to stop crawling (maximum 10 objects). When any criterion is met, crawling stops immediately. |
| `calculate_rectangles` | boolean | No | Enable calculation of pixel rectangles for SERP elements. Adds a small additional cost per task. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create YouTube Video Comments Task

**Slug:** `DATAFORSEO_CREATE_SERP_YOUTUBE_VIDEO_COMMENTS_TASK`

Tool to create YouTube Video Comments SERP tasks. Use when you need to retrieve comments data from a specific YouTube video, including author info, timestamps, likes, and reply counts. Returns task IDs for retrieving results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires video_id and optionally location/language parameters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SERP YouTube Video Subtitles Task

**Slug:** `DATAFORSEO_CREATE_SERP_YOUTUBE_VIDEO_SUBTITLES_TASK`

Tool to create YouTube video subtitles extraction tasks. Use when you need to retrieve subtitle data from YouTube videos including text, timing, and translations. Tasks are processed asynchronously - use the returned task ID to retrieve subtitle results later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be created. Maximum 100 tasks per request. Each task requires a 'video_id' parameter along with optional location and language settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Force Stop On Page Crawl

**Slug:** `DATAFORSEO_FORCE_ON_PAGE_CRAWL`

Tool to force stop On Page crawl tasks. Use when you need to immediately terminate ongoing website crawl operations. Data collected before stopping remains available for retrieval.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to force stop. Each task requires the unique task ID of the crawl to terminate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Keyword Data Available Filters

**Slug:** `DATAFORSEO_GET_AI_KEYWORD_DATA_AVAILABLE_FILTERS`

Tool to retrieve available filters for DataForSEO AI Keyword Data API endpoints. Use when you need to discover which fields can be filtered in AI keyword data queries and their data types (string or numeric).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Keyword Data Locations And Languages

**Slug:** `DATAFORSEO_GET_AI_KEYWORD_DATA_LOCATIONS_AND_LANGUAGES`

Tool to retrieve the full list of locations and languages supported in AI Keyword Data API. Use when you need to get available geographic locations and their supported languages for AI keyword optimization. This endpoint is free and incurs no cost.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Optimization Chat GPT LLM Scraper HTML by ID

**Slug:** `DATAFORSEO_GET_AI_OPT_CHAT_GPT_LLM_SCRAPER_HTML_BY_ID`

Tool to retrieve AI Optimization Chat GPT LLM Scraper task results in HTML format. Use when you need to fetch the HTML content from a previously submitted LLM scraper task using its unique task ID. The task ID remains valid for 7 days after task creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier. Unique task identifier in our system in the UUID format. You will be able to use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Optimization ChatGPT LLM Scraper Task (Advanced)

**Slug:** `DATAFORSEO_GET_AI_OPT_CHAT_GPT_LLM_SCRAPER_TASK_ADV_BY_ID`

Tool to retrieve advanced ChatGPT LLM scraper task results by task ID. Use when you need to fetch detailed scraper results including markdown content, search results, sources, brand entities, and various content types (text, tables, images, local businesses, products) for a previously submitted task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - a universally unique identifier (UUID). Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Optimization Gemini LLM Scraper Task Advanced

**Slug:** `DATAFORSEO_GET_AI_OPT_GEMINI_LLM_SCRAPER_TASK_ADV`

Tool to retrieve advanced AI Optimization Gemini LLM scraper task results by task ID. Use when you need to fetch completed task data including LLM-generated content, sources, tables, and images. Results remain accessible for 30 days after task creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier (UUID) obtained from task_post or tasks_ready endpoint. Results accessible for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Live ChatGPT LLM Responses

**Slug:** `DATAFORSEO_GET_AI_OPTIMIZATION_CHAT_GPT_LLM_RESPONSES_LIVE`

Tool to retrieve live structured responses from ChatGPT AI models via DataForSEO. Returns AI-generated content with optional web search augmentation, token usage statistics, and cost information. Use when you need immediate ChatGPT responses with control over model parameters, conversation context, and web search capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined identifier for tracking or organizing this request |
| `top_p` | number | No | Nucleus sampling parameter. Alternative to temperature. Model considers tokens with top_p probability mass |
| `model_name` | string | No | Name of the ChatGPT model to use (e.g., 'gpt-4o', 'gpt-4.1-mini'). If not specified, the default model will be used |
| `web_search` | boolean | No | Enable web search to augment the AI response with current information from the internet |
| `temperature` | number | No | Sampling temperature between 0 and 2. Higher values (e.g., 0.8) make output more random, lower values (e.g., 0.2) make it more focused and deterministic |
| `user_prompt` | string | Yes | The main prompt or question to send to the ChatGPT model |
| `message_chain` | array | No | Prior conversation history to provide context for the current prompt |
| `system_message` | string | No | System-level instruction that sets the behavior or context for the AI model |
| `web_search_city` | string | No | City name to focus web search results for location-specific queries |
| `force_web_search` | boolean | No | Force web search even if the model determines it's not necessary |
| `max_output_tokens` | integer | No | Maximum number of tokens to generate in the response. Controls response length |
| `web_search_country_iso_code` | string | No | ISO country code (e.g., 'FR', 'US') to focus web search results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Gemini LLM Scraper HTML Results

**Slug:** `DATAFORSEO_GET_AI_OPTIMIZATION_GEMINI_LLM_SCRAPER_HTML_BY_ID`

Retrieve HTML results for a completed Gemini LLM Scraper task by its unique ID. Use this action to fetch the scraped HTML content from a previously posted task. Results are available for 7 days after task posting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. Results are available for 7 days after task posting. The task must be created via task_post endpoint first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get AI Optimization LLM Mentions Top Domains Live

**Slug:** `DATAFORSEO_GET_AI_OPTIMIZATION_LLM_MENTIONS_TOP_DOMAINS_LIVE`

Tool to get live aggregated LLM mentions grouped by most frequently mentioned domains. Use when you need to identify which domains are most often cited or mentioned by LLMs (Google AI Overview or ChatGPT) for specific keywords, with metrics like total mentions and AI search volume per domain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined tag for request tracking. Maximum 255 characters. |
| `domain` | string | No | Specific domain to filter results by. |
| `target` | array | Yes | Array of target keywords to search for in LLM responses. Each target can specify search scope and match type. At least one target is required. |
| `keyword` | string | No | Alternative single keyword parameter (deprecated, use target array instead). |
| `platform` | string ("google" | "chat_gpt") | Yes | LLM platform to search: 'google' for Google AI Overview, 'chat_gpt' for ChatGPT responses. |
| `links_scope` | string ("sources" | "related_links" | "all_links") | No | Scope of links to include: 'sources' for source citations only, 'related_links' for related links only, 'all_links' for both sources and related links. |
| `language_code` | string | No | Language code for the search (e.g., 'en' for English). Use either language_code or language_name, not both. See DataForSEO languages list for valid codes. |
| `language_name` | string | No | Language name for the search (e.g., 'English'). Use either language_name or language_code, not both. |
| `location_code` | integer | No | Geographic location code for the search context (e.g., 2840 for United States). Use either location_code or location_name, not both. See DataForSEO locations list for valid codes. |
| `location_name` | string | No | Geographic location name for the search context (e.g., 'United States'). Use either location_name or location_code, not both. |
| `search_filter` | string | No | Advanced search filter expression to apply to results. Uses DataForSEO filter syntax. |
| `items_list_limit` | integer | No | Maximum number of top domains to return. Limits the total number of domains in the result. |
| `include_subdomains` | boolean | No | Whether to include subdomains when filtering by domain. |
| `internal_list_limit` | integer | No | Maximum number of internal items to return per domain. Limits the detail level for each domain's mentions. |
| `initial_dataset_filters` | array | No | Filters to apply to the initial dataset before aggregation. Each filter is an array with [field, operator, value]. Example: [['ai_search_volume', '>', 10]] filters for mentions with AI search volume greater than 10. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Apple App List Task Results

**Slug:** `DATAFORSEO_GET_APP_DATA_APPLE_APP_LIST_TASK_ADVANCED`

Tool to retrieve Apple App Store app list results for a previously created task. Returns detailed app data including titles, ratings, prices, reviews, and icons for apps in the specified collection (e.g., top charts). Use this after creating an app list task to get the results using the task ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Apple App Searches Task Advanced

**Slug:** `DATAFORSEO_GET_APP_DATA_APPLE_APP_SEARCHES_TASK_ADVANCED`

Tool to retrieve Apple App Searches task results from DataForSEO. Use when you need to get app search results for a previously created task. This is the second step in a two-step process: first create a task using task_post, then retrieve results using this action with the task ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task ID returned from POST /v3/app_data/apple/app_searches/task_post endpoint. This is a two-step API where you first create a task and then retrieve results using this ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App Info Task HTML By ID

**Slug:** `DATAFORSEO_GET_APP_DATA_GOOGLE_APP_INFO_TASK_HTML_BY_ID`

Tool to retrieve HTML content for a Google Play app by task ID. Use when you need to get the raw HTML page data from Google Play Store for a previously submitted app info task. Results are available for 7 days after task posting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. Results are available for 7 days after task posting. The task must be created via task_post endpoint first. |
| `use_sandbox` | boolean | No | Whether to use the DataForSEO sandbox environment (sandbox.dataforseo.com) instead of production (api.dataforseo.com). Defaults to True to avoid unintended production charges. Set to False to query live production data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App List Task Advanced By ID

**Slug:** `DATAFORSEO_GET_APP_DATA_GOOGLE_APP_LIST_TASK_ADVANCED_BY_ID`

Tool to retrieve Google Play app list results for a previously created task. Returns detailed app data including titles, ratings, prices, reviews, and icons for apps in the specified collection (e.g., top charts).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App Reviews Task HTML

**Slug:** `DATAFORSEO_GET_APP_DATA_GOOGLE_APP_REVIEWS_TASK_HTML`

Tool to retrieve HTML content for Google Play app reviews by task ID. Use when you need to get the raw HTML page data of app reviews from Google Play Store for a previously submitted task. Results are available for 7 days after task posting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. Results are available for 7 days after task posting. The task must be created via task_post endpoint first. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App Searches HTML By ID

**Slug:** `DATAFORSEO_GET_APP_DATA_GOOGLE_APP_SEARCHES_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Play app searches task by ID. Use when you need to get the unprocessed HTML content of Google Play Store app search results after creating an app searches task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |
| `sandbox` | boolean | No | Enable sandbox mode for testing without charges. When true, uses sandbox.dataforseo.com instead of api.dataforseo.com. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Appendix Errors

**Slug:** `DATAFORSEO_GET_APPENDIX_ERRORS`

Tool to retrieve the complete list of DataForSEO API error codes and HTTP status codes. Use when you need to understand possible API errors, their codes, and messages for error handling or debugging.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Appendix Status

**Slug:** `DATAFORSEO_GET_APPENDIX_STATUS`

Tool to get current operational status of all DataForSEO APIs and endpoints. Use when you need to check if specific APIs or endpoints are experiencing outages or performance issues.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Appendix User Data

**Slug:** `DATAFORSEO_GET_APPENDIX_USER_DATA`

Tool to retrieve current user account data including balance, rate limits, spending statistics, and pricing information. Use when you need to check account status, available balance, API usage limits, or subscription details.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App Reviews Task Advanced By ID

**Slug:** `DATAFORSEO_GET_APP_GOOGLE_APP_REVIEWS_TASK_GET_ADV_BY_ID`

Tool to retrieve Google Play app review results for a previously created task. Returns feedback data including review ratings, content, reviewer profiles, publication dates, and developer responses for the specified app.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App Data Google App Searches Task Advanced By ID

**Slug:** `DATAFORSEO_GET_APP_GOOGLE_APP_SEARCHES_TASK_ADV_BY_ID`

Tool to retrieve Google Play app search results for a previously created task. Returns detailed app data including titles, ratings, prices, reviews, and icons for apps ranking on Google Play for the specified keyword. This is the second step in a two-step process: first create a task, then retrieve results using this action with the task ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system that you will receive from the POST request. You can use it within 30 days to request the results of the task at any time. |
| `sandbox` | boolean | No | Enable sandbox mode for testing without charges. When true, uses sandbox.dataforseo.com instead of api.dataforseo.com. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Apple App Info Task Advanced

**Slug:** `DATAFORSEO_GET_APPLE_APP_INFO_TASK_ADVANCED`

Tool to retrieve advanced results for a previously created Apple App Info task. Use when you need complete app information from the App Store including ratings, reviews, pricing, categories, similar apps, and developer details. Requires a task ID from task_post or tasks_ready endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format obtained from task_post response or tasks_ready endpoint. Accessible for 30 days. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Backlinks Bulk Pages Summary Live

**Slug:** `DATAFORSEO_GET_BACKLINKS_BULK_PAGES_SUMMARY_LIVE`

Tool to get comprehensive backlinks summary data for multiple pages, domains, or subdomains in a single request. Use when you need to retrieve detailed backlink metrics for up to 1000 targets simultaneously, including rank, backlink counts, referring domains/pages/IPs, spam scores, and breakdowns by TLD, link type, platform, semantic location, and country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier to match results. Maximum length is 255 characters. This tag will be returned in the response for identifying the task. |
| `targets` | array | Yes | Array of domains, subdomains or webpages to get summary data for. You can specify up to 1000 targets, but they cannot belong to more than 100 different domains. For domains and subdomains, do not include https:// and www. prefixes. For pages, provide the absolute URL including https:// |
| `rank_scale` | string | No | Scale for rank values. Options: 'one_hundred' (0-100 scale) or 'one_thousand' (0-1000 scale, default). Choose based on your preferred granularity for page rank metrics. |
| `include_subdomains` | boolean | No | Include subdomains in the search. If set to true, subdomains of the target will be included in the results. Default is true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Backlinks Bulk Spam Score Live

**Slug:** `DATAFORSEO_GET_BACKLINKS_BULK_SPAM_SCORE_LIVE`

Tool to get spam scores for multiple domains, subdomains, or pages in a single request. Use when you need to evaluate how 'spammy' target websites are using DataForSEO's proprietary metric (0-100 scale).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results in callbacks or when retrieving results later. |
| `targets` | array | Yes | Array of target domains, subdomains, or page URLs to check spam scores for. You can specify up to 100 targets per request. Examples: ['forbes.com', 'cnn.com', 'https://www.apple.com/iphone/'] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Backlinks Summary Live

**Slug:** `DATAFORSEO_GET_BACKLINKS_SUMMARY_LIVE`

Tool to get a comprehensive overview of backlinks data for a domain, subdomain, or webpage. Use when you need backlinks statistics including referring domains, link types, spam scores, and geographical distribution. Returns metrics like total backlinks count, referring domains/pages, link attributes breakdown, and platform type analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier to match results. Maximum length is 255 characters. This tag will be returned in the response for identifying the task |
| `target` | string | Yes | Domain, subdomain, or webpage to analyze backlinks for. For domains and subdomains, do not include https:// and www. prefixes. For pages, provide the absolute URL including https:// |
| `rank_scale` | string ("one_hundred" | "one_thousand") | No | Ranking metric scale for calculation. |
| `backlinks_filters` | array | No | Filter backlinks by field values. Accepts arrays in format: [field, operator, value]. Example: [['dofollow', '=', true]] to filter only dofollow links. Supports all fields from backlinks endpoint |
| `include_subdomains` | boolean | No | Whether to include subdomains in the search. If set to true, backlinks from subdomains will be included in the results. Default: true |
| `internal_list_limit` | integer | No | Maximum number of elements in internal arrays (e.g., referring_links_tld). Default: 10, Maximum: 1000 |
| `backlinks_status_type` | string ("all" | "live" | "lost") | No | Backlink status filter types. |
| `include_indirect_links` | boolean | No | Whether to include indirect links (redirects, canonicals) in the results. Default: true |
| `exclude_internal_backlinks` | boolean | No | Whether to exclude internal backlinks from subdomains. If true, backlinks from the same domain/subdomain will be excluded. Default: true |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bing Keyword Performance Locations And Languages

**Slug:** `DATAFORSEO_GET_BING_KW_PERFORMANCE_LOCATIONS_AND_LANGUAGES`

Tool to retrieve the full list of locations and languages supported in Bing Keyword Performance API endpoints. Use when you need to get available geographic locations and their supported languages for Bing keyword performance data. This endpoint is free and incurs no cost.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Business Listings Available Filters

**Slug:** `DATAFORSEO_GET_BIZ_BUSINESS_LISTINGS_AVAILABLE_FILTERS`

Tool to retrieve available filters for Business Data Business Listings API endpoints. Use when you need to discover which fields can be filtered in business listings queries and their data types (string, numeric, boolean, array, or time).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google Hotel Info Task Advanced By ID

**Slug:** `DATAFORSEO_GET_BIZ_GOOGLE_HOTEL_INFO_TASK_GET_ADV_BY_ID`

Tool to retrieve Google Hotel Info task results by task ID. Use when you need to get detailed hotel information including ratings, prices, amenities, location details, and reviews.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google Hotel Searches Task By ID

**Slug:** `DATAFORSEO_GET_BIZ_GOOGLE_HOTEL_SEARCHES_TASK_BY_ID`

Tool to retrieve Google Hotel Searches task results by task ID. Use when you need to fetch hotel search results from a previously created task within 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google My Business Updates Task By ID

**Slug:** `DATAFORSEO_GET_BIZ_GOOGLE_MY_BUSINESS_UPDATES_TASK_BY_ID`

Tool to retrieve Google My Business updates and posts by task ID. Use when you need to fetch business updates, posts, and announcements from a Google My Business profile for a previously created task. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. Retrieves results within 30 days of task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google Questions And Answers Task

**Slug:** `DATAFORSEO_GET_BIZ_GOOGLE_QUESTIONS_AND_ANSWERS_TASK`

Tool to retrieve Google Business questions and answers data by task ID. Use when you need to fetch Q&A information for a business including questions asked by users, answers provided, user profiles, and timestamps. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format, obtained from task_post or tasks_ready endpoint. Task ID is usable within 30 days of task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google Extended Reviews Task

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_GOOGLE_EXTENDED_REVIEWS_TASK`

Tool to retrieve Google Business extended reviews data by task ID. Use when you need to fetch detailed review information for a business including review text, ratings, reviewer profiles, images, owner responses, and review highlights. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format, obtained from task_post or tasks_ready endpoint. Task ID is usable within 30 days of task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google My Business Info Task

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_GOOGLE_MY_BUSINESS_INFO_TASK`

Tool to retrieve Google My Business information by task ID. Use when you need to fetch comprehensive business data including name, location, contact details, ratings, operating hours, photos, and popular times. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format, obtained from task_post or tasks_ready endpoint. Task ID is usable within 30 days of task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Google Reviews Task

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_GOOGLE_REVIEWS_TASK`

Tool to retrieve Google Reviews task results by task ID. Use when you need to fetch review data for a specific business establishment including review text, ratings, reviewer information, business owner responses, and review metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data TripAdvisor Reviews Task By ID

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_TRIPADVISOR_REVIEWS_TASK_BY_ID`

Tool to retrieve TripAdvisor Reviews task results by task ID. Use when you need to fetch review data for a specific business establishment including review text, ratings, reviewer information, business owner responses, and review metadata from TripAdvisor. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier valid for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data TripAdvisor Search Task By ID

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_TRIPADVISOR_SEARCH_TASK_BY_ID`

Tool to retrieve TripAdvisor Search task results by task ID. Use when you need to fetch business listings and ratings from TripAdvisor for a previously created search task within 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Data Trustpilot Search Task By ID

**Slug:** `DATAFORSEO_GET_BUSINESS_DATA_TRUSTPILOT_SEARCH_TASK_BY_ID`

Tool to retrieve Trustpilot search task results by task ID. Use when you need to fetch business profiles from Trustpilot for a previously created search task. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get ChatGPT LLM Scraper Locations By Country

**Slug:** `DATAFORSEO_GET_CHAT_GPT_LLM_SCRAPER_LOCATIONS_BY_COUNTRY`

Tool to retrieve available ChatGPT LLM Scraper locations filtered by country ISO code. Use when you need to get the list of valid locations for setting up ChatGPT LLM scraper tasks in a specific country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | Country ISO code to filter the list of locations. Example: 'us' for United States, 'gb' for United Kingdom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get DataForSEO Labs Available Filters

**Slug:** `DATAFORSEO_GET_DATAFORSEO_LABS_AVAILABLE_FILTERS`

Tool to retrieve available filters for DataForSEO Labs API endpoints. Use when you need to discover which fields can be filtered in DataForSEO Labs queries and their data types.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bing Related Keywords Live

**Slug:** `DATAFORSEO_GET_DATAFORSEO_LABS_BING_RELATED_KEYWORDS_LIVE`

Tool to retrieve Bing related keywords appearing in 'searches related to' SERP element. Provides up to 4680 keyword ideas with search volume, cost-per-click, competition, and 12-month trend data. Use when you need to discover related keywords and expand keyword research for SEO or paid search campaigns on Bing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier for tracking purposes. Maximum 255 characters |
| `depth` | integer | No | Search depth for related keywords (0-4). Determines how many levels of related keywords to retrieve. Default: 1. Higher values return more keywords but cost more |
| `limit` | integer | No | Maximum number of results to return. Default: 100, Maximum: 1000. You can get up to 4680 keyword ideas depending on depth |
| `offset` | integer | No | Offset in the results array for pagination. Default: 0 |
| `filters` | array | No | Results filtering parameters using logical operators. Maximum 8 filters. Supports operators like regex, <, >, =, like, ilike, in, etc. Example: ['keyword_data.keyword_info.search_volume', '>', 0] |
| `keyword` | string | Yes | UTF-8 encoded keyword (converted to lowercase, e.g., 'smartphone'). The seed keyword for which to find related keywords appearing in 'searches related to' SERP element |
| `order_by` | array | No | Results sorting rules. Maximum 3 sorting rules. Format: ['field,asc'] or ['field,desc']. Example: ['keyword_data.keyword_info.search_volume,desc'] |
| `language_code` | string | No | Language code (e.g., 'en'). Use language_code OR language_name |
| `language_name` | string | No | Language name for the search (e.g., 'English'). Use language_name OR language_code |
| `location_code` | integer | No | Geographic location code (e.g., 2840 for United States). Use location_code OR location_name |
| `location_name` | string | No | Geographic location name for the search (e.g., 'United States'). Use location_name OR location_code |
| `include_serp_info` | boolean | No | If true, includes additional SERP data for each keyword. Default: false |
| `include_seed_keyword` | boolean | No | If true, includes data for the seed keyword in the response. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get DataForSEO Labs Google Available History

**Slug:** `DATAFORSEO_GET_DATAFORSEO_LABS_GOOGLE_AVAILABLE_HISTORY`

Tool to retrieve available historical dates for DataForSEO Labs domain metrics. Use when you need to discover which dates are available for setting in the first_date and second_date fields of the Domain Metrics by Categories endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get DataForSEO Labs Google Top Searches Live

**Slug:** `DATAFORSEO_GET_DATAFORSEO_LABS_GOOGLE_TOP_SEARCHES_LIVE`

Tool to retrieve top Google search keywords with comprehensive metrics including search volume, competition, CPC, trends, and intent data. Use when you need to discover popular keywords, analyze search trends, or gather keyword research data for SEO and advertising campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results |
| `limit` | integer | No | Maximum number of results to return. Maximum is 1000. Default: 1000 |
| `offset` | integer | No | Pagination offset. Recommended for results under 10,000. Default: 0 |
| `filters` | array | No | Filtering conditions (up to 8 filters). Each filter is an array with [field, operator, value] format. Operators: <, <=, >, >=, =, <>, in, not_in, regex, like, ilike. Example: [['keyword_info.search_volume', '>', 1000]] |
| `order_by` | array | No | Sorting rules (up to 3). Format: 'field,direction'. Example: ['keyword_info.search_volume,desc'] |
| `offset_token` | string | No | Token for pagination beyond 10,000 results. Use instead of offset for large result sets to avoid timeouts |
| `language_code` | string | No | Language code for the search. Either language_name or language_code is required. Example: 'en' |
| `language_name` | string | No | Full language name for the search. Either language_name or language_code is required. Example: 'English' |
| `location_code` | integer | No | Location code for the search. Either location_name or location_code is required. Example: 2840 (United States) |
| `location_name` | string | No | Full location name for the search. Either location_name or location_code is required. Example: 'United States' |
| `ignore_synonyms` | boolean | No | Return only core keywords, excluding synonyms. Default: false |
| `include_serp_info` | boolean | No | Include SERP data for each keyword. Default: false |
| `include_clickstream_data` | boolean | No | Include clickstream metrics (gender/age distribution, search volume). Doubles the cost. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get DataForSEO Labs Status

**Slug:** `DATAFORSEO_GET_DATAFORSEO_LABS_STATUS`

Tool to retrieve last update dates for DataForSEO Labs data sources (Google, Bing, and Amazon). Use when you need to check when Labs data was last refreshed for freshness validation.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get DataForSEO Trends Locations By Country

**Slug:** `DATAFORSEO_GET_DATAFORSEO_TRENDS_LOCATIONS_BY_COUNTRY`

Tool to retrieve DataForSEO Trends locations filtered by country ISO code. Use when you need to get the list of valid locations for setting up DataForSEO Trends tasks. Note that the minimum geographic scope supported is country level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | Country ISO code to filter the list of locations. Example: 'us' for United States, 'gb' for United Kingdom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Domain Analytics Technologies Technology Stats Live

**Slug:** `DATAFORSEO_GET_DOMAIN_ANALYTICS_TECH_TECHNOLOGY_STATS_LIVE`

Tool to retrieve historical technology adoption statistics across domains. Use when you need data on how many domains use a specific technology over time, with breakdowns by country, language, and domain rank. Returns daily statistics showing technology penetration and geographic distribution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be processed. Each task requires a technology name and optional date range. Multiple tasks can be submitted in a single request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Gemini LLM Responses Task Results

**Slug:** `DATAFORSEO_GET_GEMINI_LLM_RESPONSES_TASK_BY_ID`

Tool to retrieve structured Gemini LLM responses from a specific task by ID. Use when you need to fetch the results of a previously created Gemini LLM optimization task. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Google Historical Bulk Traffic Estimation Live

**Slug:** `DATAFORSEO_GET_GOOGLE_HIST_BULK_TRAFFIC_EST_LIVE`

Tool to get historical monthly traffic volumes for up to 1000 domains, subdomains, or webpages on Google over a specified time range. Use when you need to analyze traffic trends from organic search, paid search, featured snippets, and local pack results. Historical data is available through October 2020, and if no date range is specified, data will be returned for the previous 12 months.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results in callbacks or when retrieving results later. |
| `date_to` | string | No | Ending date for historical data in YYYY-MM-DD format. If not specified, data will be returned through the current month. Example: '2024-12-31' |
| `targets` | array | Yes | Array of target domains, subdomains, or webpages to retrieve historical traffic estimations for. You can specify up to 1000 targets per request. Examples: ['dataforseo.com', 'cnn.com', 'https://www.forbes.com/page'] |
| `date_from` | string | No | Starting date for historical data in YYYY-MM-DD format. If not specified, data will be returned for the previous 12 months. Example: '2024-01-01' |
| `item_types` | array | No | Filter results by type. Can include: organic, paid, featured_snippet, local_pack. Default: ['organic', 'paid'] |
| `language_code` | string | No | Language code for the search results. Use language_code OR language_name. Example: 'en' |
| `language_name` | string | No | Language name for the search results. Use language_name OR language_code. Example: 'English' |
| `location_code` | integer | No | Geographic location code for the search. Use location_code OR location_name. Example: 2840 (United States) |
| `location_name` | string | No | Geographic location name for the search. Use location_name OR location_code. Example: 'United States' |
| `ignore_synonyms` | boolean | No | Excludes highly similar keywords from traffic estimation when set to true. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Bing Keywords For Site Task

**Slug:** `DATAFORSEO_GET_KEYWORDS_DATA_BING_KEYWORDS_FOR_SITE_TASK`

Tool to retrieve Bing Keywords For Site task results by task ID. Use when you need to fetch keyword data for a specified website including search volume, CPC, competition metrics, and monthly search trends for keywords associated with the site.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bing Search Volume Task By ID

**Slug:** `DATAFORSEO_GET_KEYWORDS_DATA_BING_SEARCH_VOLUME_TASK_BY_ID`

Tool to retrieve Bing search volume task results by task ID. Use when you need to fetch keyword search volume data with historical monthly trends from a previously created task. Results include average search volume, CPC, competition level, and 12 months of historical data. Task results are available for 30 days after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Ads Status

**Slug:** `DATAFORSEO_GET_KEYWORDS_DATA_GOOGLE_ADS_STATUS`

Tool to get current status of Google Ads keyword data updates. Use when you need to check if Google has updated keyword data for the previous month or find the latest available search volume data.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Search Volume Task

**Slug:** `DATAFORSEO_GET_KEYWORDS_DATA_GOOGLE_SEARCH_VOLUME_TASK_BY_ID`

Tool to retrieve Google Search Volume task results by task ID. Use when you need to fetch search volume metrics for specified keywords, including monthly average search volume, CPC, competition levels, and 12-month historical search trends.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Bing Audience Estimation Industries

**Slug:** `DATAFORSEO_GET_KW_BING_AUDIENCE_EST_INDUSTRIES`

Tool to retrieve the list of industries supported by Bing Ads Audience Estimation endpoint. Use when you need industry IDs for targeting Bing audience estimation campaigns. Returns 147 industries with their unique identifiers.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Bing Keywords For Keywords Task By ID

**Slug:** `DATAFORSEO_GET_KW_BING_KW_FOR_KW_TASK_BY_ID`

Tool to retrieve Bing Keywords For Keywords task results by task ID. Use when you need to fetch keyword suggestions for specified terms, including search volume, CPC, competition metrics, and monthly search trends. Returns up to 3000 keyword suggestions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Bing Keyword Suggestions For URL Live

**Slug:** `DATAFORSEO_GET_KW_BING_KW_SUGGESTIONS_FOR_URL_LIVE`

Tool to get Bing keyword suggestions based on a target URL with search volume, competition, and CPC metrics. Use when you need to discover relevant keywords associated with a specific webpage for SEO optimization or content strategy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | string | Yes | The webpage URL to analyze for keyword suggestions (max 2000 characters) |
| `language_code` | string | No | Language code (e.g., 'en'). Either language_name or language_code is required |
| `language_name` | string | No | Full language name (e.g., 'English'). Either language_name or language_code is required |
| `exclude_brands` | boolean | No | Filters out brand-related keywords from results. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bing Keyword Suggestions for URL Task

**Slug:** `DATAFORSEO_GET_KW_BING_KW_SUGGESTIONS_FOR_URL_TASK`

Tool to retrieve Bing keyword suggestions for a URL from a previously created task. Use when you need to fetch keyword recommendations based on URL content analysis. Results are sorted by confidence score from highest to lowest and are available for 30 days after task creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format returned from task_post endpoint. Results are available for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Ads Ad Traffic By Keywords Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_ADS_AD_TRAFFIC_BY_KW_TASK_BY_ID`

Tool to retrieve Google Ads Ad Traffic By Keywords task results by task ID. Use when you need to fetch ad traffic forecasts for keywords, including projected impressions, CTR, average CPC, cost, and clicks based on specified bids and match types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Ads Keywords For Keywords Live

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_ADS_KW_FOR_KW_LIVE`

Tool to retrieve Google Ads keyword suggestions for specified keywords with comprehensive metrics. Use when you need keyword ideas, search volumes, CPC data, competition levels, and bid estimates for advertising campaigns or keyword research.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters) for matching tasks with results |
| `date_to` | string | No | Ending date for historical data in 'yyyy-mm-dd' format. Cannot exceed yesterday's date. |
| `sort_by` | string | No | Sort results by: relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid. Default: relevance |
| `keywords` | array | Yes | Array of keywords to get suggestions for. Maximum 20 keywords, each up to 80 characters. Keywords will be converted to lowercase automatically. |
| `date_from` | string | No | Starting date for historical data in 'yyyy-mm-dd' format. Minimal value is 4 years prior to current date. |
| `language_code` | string | No | Search engine language code. Example: 'en' for English |
| `language_name` | string | No | Full search engine language name. Example: 'English' |
| `location_code` | integer | No | Search engine location code. Example: 2840 for United States. You can get location codes from the locations endpoint. |
| `location_name` | string | No | Full search engine location name. Example: 'London,England,United Kingdom' or 'United States' |
| `search_partners` | boolean | No | Include Google search partners in results. Default: false |
| `location_coordinate` | string | No | GPS coordinates in 'latitude,longitude' format. Example: '40.7128,-74.0060' for New York City |
| `include_adult_keywords` | boolean | No | Include adult content keywords in results. Default: false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Ads Keywords For Keywords Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_ADS_KW_FOR_KW_TASK_BY_ID`

Tool to retrieve Google Ads Keywords For Keywords task results by task ID. Use when you need to fetch keyword metrics for specified search terms from Google Ads API, including search volume, CPC, competition levels, bid estimates, and historical monthly search trends.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Google Ads Keywords For Site Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_ADS_KW_FOR_SITE_TASK`

Tool to retrieve Google Ads Keywords For Site task results by task ID. Use when you need to fetch keyword data including search volume, competition levels (LOW/MEDIUM/HIGH), bidding metrics, and semantic annotations for a domain from a previously created task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format returned from task_post endpoint. Results are available for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Ads Search Volume Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_ADS_SEARCH_VOL_TASK_BY_ID`

Tool to retrieve Google Ads Search Volume task results by task ID. Use when you need to fetch Google Ads metrics for keywords including search volume, competition levels, CPC, top-of-page bid estimates, and 12-month historical trends. Based on Google Ads API (replacement for legacy AdWords API).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Keywords For Category Live

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_KW_FOR_CATEGORY_LIVE`

Tool to retrieve live Google keywords for a specific product/service category. Returns up to 700 keyword suggestions with search volume, CPC, competition level, and historical monthly trends. Use when analyzing keyword opportunities within a specific category from Google's taxonomy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier for tracking and matching results. Maximum 255 characters |
| `sort_by` | string ("search_volume" | "relevance") | No | Sort results by 'search_volume' or 'relevance' in descending order. Default: 'search_volume' |
| `category_code` | integer | Yes | Category ID from Google's product/service taxonomy. Obtain via /v3/keywords_data/google/categories endpoint |
| `language_code` | string | No | Language code for search results (e.g., 'en'). Alternative to language_name |
| `language_name` | string | No | Full language name for search results (e.g., 'English'). Mutually exclusive with language_code |
| `location_code` | integer | No | Search engine location code for geographic targeting. Alternative to location_name |
| `location_name` | string | No | Full location name for geographic targeting (e.g., 'United States', 'London,England,United Kingdom'). Mutually exclusive with location_code or location_coordinate |
| `search_partners` | boolean | No | Include Google search partners data when true. Default: false |
| `keywords_negative` | array | No | Up to 200 keywords to exclude from results. Terms are converted to lowercase automatically |
| `location_coordinate` | string | No | GPS coordinates in 'latitude,longitude' format for country-level targeting. Mutually exclusive with location_name or location_code |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Keywords For Keywords Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_KW_FOR_KW_TASK_BY_ID`

Tool to retrieve Google Keywords For Keywords task results by task ID. Use when you need to fetch keyword metrics for specified search terms, including search volume, CPC, competition levels, and historical monthly search trends.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keywords Data Google Trends Explore Task

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_TRENDS_EXPLORE_TASK_BY_ID`

Tool to retrieve Google Trends Explore task results by task ID. Use when you need to fetch trend analysis data including time-series popularity graphs, geographic distribution maps, and related topics/queries for previously submitted keywords.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Google Trends Locations By Country

**Slug:** `DATAFORSEO_GET_KW_GOOGLE_TRENDS_LOCATIONS_BY_COUNTRY`

Tool to retrieve available Google Trends locations filtered by country ISO code. Use when you need to get the list of valid locations for setting up Google Trends keyword data tasks in a specific country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | Country ISO code to filter the list of locations. Example: 'us' for United States, 'gb' for United Kingdom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get LLM Mentions Available Filters

**Slug:** `DATAFORSEO_GET_LLM_MENTIONS_AVAILABLE_FILTERS`

Tool to fetch available filters for AI Optimization LLM Mentions API endpoints. Use when you need to discover which filter parameters are available for querying LLM mentions data.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon ASIN Task Advanced By ID

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_ASIN_TASK_ADVANCED_BY_ID`

Tool to retrieve Amazon product information by ASIN task ID. Use when you need to get detailed information about a product and all its modification ASINs listed on Amazon.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon ASIN Task HTML

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_ASIN_TASK_HTML`

Tool to retrieve raw HTML results for an Amazon ASIN merchant task by ID. Use when you need to get the unprocessed HTML content of an Amazon product page after creating an ASIN task. Task results are available within 7 days of creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon Products Task (Advanced)

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_PRODUCTS_TASK_ADVANCED_BY_ID`

Tool to retrieve advanced Amazon Products task results by task ID. Use when you need to fetch detailed product search results including pricing, ratings, delivery info, and product metadata for a previously submitted Amazon merchant task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - a universally unique identifier (UUID). Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon Products Task HTML By ID

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_PRODUCTS_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Merchant Amazon Products task by ID. Use when you need to get the unprocessed HTML content of Amazon product pages after creating a products task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon Sellers Task Advanced

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_SELLERS_TASK_ADVANCED`

Tool to retrieve Amazon sellers task results from DataForSEO. Use when you need to get seller information for a previously created task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format obtained from task_post endpoint. Results accessible for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Amazon Sellers Task HTML By ID

**Slug:** `DATAFORSEO_GET_MERCHANT_AMAZON_SELLERS_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Merchant Amazon Sellers task by ID. Use when you need to get the unprocessed HTML content of an Amazon sellers page after creating a sellers task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Google Products Task (Advanced)

**Slug:** `DATAFORSEO_GET_MERCHANT_GOOGLE_PRODUCTS_TASK_ADVANCED_BY_ID`

Tool to retrieve advanced Google Shopping Products task results by task ID. Use when you need to fetch detailed product search results including pricing, ratings, delivery info, seller details, and product metadata for a previously submitted Google merchant task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - a universally unique identifier (UUID). Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Google Products Task HTML

**Slug:** `DATAFORSEO_GET_MERCHANT_GOOGLE_PRODUCTS_TASK_HTML`

Tool to retrieve raw HTML results for a Merchant Google Products task by ID. Use when you need to get the unprocessed HTML content of Google Shopping product pages after creating a products task. Task results are available within 7 days of creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Google Sellers Task (Advanced)

**Slug:** `DATAFORSEO_GET_MERCHANT_GOOGLE_SELLERS_TASK_ADVANCED_BY_ID`

Tool to retrieve advanced Google Sellers task results by task ID. Use when you need to fetch detailed seller listings for a product on Google Shopping, including pricing, ratings, availability, and seller information for a previously submitted merchant task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - a universally unique identifier (UUID). Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Merchant Google Product Info Task (Advanced)

**Slug:** `DATAFORSEO_GET_MERCHANT_G_PRODUCT_INFO_TASK_ADV_BY_ID`

Tool to retrieve advanced Google Product Info task results by task ID. Use when you need detailed product information from Google Shopping including title, description, images, ratings, specifications, seller details with pricing and delivery info, and product variations for a previously submitted merchant task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Duplicate Content

**Slug:** `DATAFORSEO_GET_ON_PAGE_DUPLICATE_CONTENT`

Tool to retrieve duplicate content analysis for a specific page using the SimHash algorithm. Use when you need to identify pages with content similar to a target page, with similarity scores from 0-10 where higher scores indicate greater similarity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format obtained from the On Page Task POST endpoint. This ID is used to retrieve results for a previously created crawl task |
| `tag` | string | No | User-defined identifier for task tracking. Maximum 255 characters. This tag is returned in the response to help match requests with results |
| `url` | string | Yes | Initial page URL to analyze for duplicate content. Must be a valid URL that was crawled in the task |
| `limit` | integer | No | Maximum number of pages to return in the results. Defaults to 100 if not specified. Maximum allowed value is 1000 |
| `offset` | integer | No | Offset for results pagination. Use this to skip the first N results. Defaults to 0 |
| `similarity` | integer | No | Content similarity threshold on a scale of 0-10, where 0 means completely dissimilar and 10 means identical. Only pages with similarity at or above this threshold are returned. Defaults to 6 if not specified |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Duplicate Tags

**Slug:** `DATAFORSEO_GET_ON_PAGE_DUPLICATE_TAGS`

Tool to retrieve pages with duplicate title or description tags from On Page crawl tasks. Use when you need to identify SEO issues related to duplicate metadata across pages. Returns lists of pages sharing the same title or description tags along with page performance metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items for retrieving duplicate tags. Each task requires an On Page task ID and duplicate type. Maximum 100 tasks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Keyword Density

**Slug:** `DATAFORSEO_GET_ON_PAGE_KEYWORD_DENSITY`

Tool to get keyword density and keyword frequency data from an On Page task. Use when you need to analyze keyword usage patterns on a specific website or web page, filter keywords by frequency or density, or understand which keywords appear most often on a page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier from a previous On Page task in UUID format. You must have a completed On Page task to use this endpoint. |
| `tag` | string | No | Custom identifier for matching results with your tasks. Maximum 255 characters. Useful for tracking and organizing requests. |
| `url` | string | No | Specific page URL to analyze for keyword density. Omit this parameter to analyze the entire website from the original On Page task. |
| `limit` | integer | No | Maximum number of keywords to return in results. Default is 100, maximum is 1000. Use to control response size. |
| `filters` | array | No | Array of filters to apply to results. Format: [[field, operator, value], ...]. Operators include: =, <>, <, <=, >, >=, like, not_like, in, not_in, regex, not_regex. Example: [['frequency', '>', 5]] to get keywords with frequency greater than 5. |
| `order_by` | array | No | Array of sorting rules for results. Format: ['field,direction'] where direction is 'asc' or 'desc'. Supports up to 3 rules. Example: ['frequency,desc'] to sort by frequency in descending order. |
| `keyword_length` | integer | Yes | Number of words per keyword to analyze. Must be 1, 2, 3, 4, or 5. For example, use 1 for single words, 2 for two-word phrases, etc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Lighthouse Audits

**Slug:** `DATAFORSEO_GET_ON_PAGE_LIGHTHOUSE_AUDITS`

Tool to retrieve the complete list of available Lighthouse audits for the OnPage API. Use when you need to understand which Lighthouse audit titles are available for quality analysis of web pages.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Lighthouse Task Get Json

**Slug:** `DATAFORSEO_GET_ON_PAGE_LIGHTHOUSE_TASK_GET_JSON`

Tool to retrieve On Page Lighthouse task results in JSON format. Use when you need to fetch Google Lighthouse audit data for a previously submitted task, including performance metrics, accessibility scores, SEO analysis, and detailed audit findings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Links

**Slug:** `DATAFORSEO_GET_ON_PAGE_LINKS`

Tool to retrieve internal and external links detected on a target website by task ID. Use when you need to analyze link structure, check for broken links, filter links by type (anchor, image, canonical, meta, alternate, redirect), or examine link attributes like dofollow/nofollow status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier obtained from a previously created On-Page task. You will be able to use it within 30 days to request the results of the task at any time. |
| `tag` | string | No | User-defined task identifier for tracking purposes. Maximum 255 characters. |
| `limit` | integer | No | Maximum number of links to return. Default is 100, maximum is 1000. |
| `offset` | integer | No | Results offset for pagination. Default is 0. Use this to skip the first N results. |
| `filters` | array | No | Array of filtering conditions (up to 8 filters). Supports operators: regex, not_regex, =, <>, in, not_in, like, not_like. Example: [['dofollow', '=', true], 'and', ['direction', '=', 'external']] to get external dofollow links. |
| `page_to` | string | No | Relative page URL to filter internal links pointing to a page. Use this to find all internal links that point to a specific page. |
| `page_from` | string | No | Relative page URL to filter links from a specific page (e.g., '/apis/google-trends-api'). Use this to get all links originating from a particular page. |
| `search_after_token` | string | No | Pagination token for fetching results beyond offset 20,000. Use the token returned in previous response to continue pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Non Indexable

**Slug:** `DATAFORSEO_GET_ON_PAGE_NON_INDEXABLE`

Tool to retrieve non-indexable pages from an On-Page crawl task by task ID. Use when you need to identify pages blocked from search engine indexing via robots.txt, meta tags, or HTTP headers. Supports filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to retrieve non-indexable pages. Each task requires a task ID obtained from a previous On-Page crawl. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Pages

**Slug:** `DATAFORSEO_GET_ON_PAGE_PAGES`

Tool to retrieve crawled pages with on-page metrics and optimization data. Use when you need detailed page-level information including SEO scores, performance metrics, content analysis, and technical checks for pages in a crawl task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format obtained from the On Page Task POST endpoint. This ID is used to retrieve results for a previously created crawl task within 30 days |
| `tag` | string | No | User-defined identifier for task tracking. Maximum 255 characters. This tag is returned in the response to help match requests with results |
| `limit` | integer | No | Maximum number of pages to return in the results. Defaults to 100 if not specified. Maximum allowed value is 1000 |
| `offset` | integer | No | Offset for results pagination. Use this to skip the first N results. Defaults to 0 |
| `filters` | array | No | Array of filter conditions to narrow down results. Maximum 8 filters allowed. Supports operators like =, <, >, !=, regex, like, not_like, in, not_in. Example: [['resource_type', '=', 'html'], 'and', ['meta.scripts_count', '>', 40]] |
| `order_by` | array | No | Array of sorting rules. Maximum 3 rules allowed. Format: ['field,asc'] or ['field,desc']. Example: ['meta.content.plain_text_word_count,desc'] |
| `search_after_token` | string | No | Pagination token for fetching results beyond 20,000. Use the token returned from previous response to get the next batch of results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Pages By Resource

**Slug:** `DATAFORSEO_GET_ON_PAGE_PAGES_BY_RESOURCE`

Tool to retrieve pages that use a specific resource from a completed OnPage crawl task. Use when you need to find all pages utilizing a particular JavaScript file, CSS file, image, or other resource. Returns on-page metrics, SEO audit data, and Core Web Vitals for each page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to retrieve pages by resource. Each task requires an id and url. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get On Page Summary

**Slug:** `DATAFORSEO_GET_ON_PAGE_SUMMARY_BY_ID`

Tool to retrieve On Page Summary information for a scanned website by task ID. Use when you need to get overall website statistics and drill down into on-page SEO issues such as broken links, duplicate content, crawl errors, and page status codes. Task ID must be from an On-Page task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier obtained from a previously created On-Page task. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Baidu Locations By Country

**Slug:** `DATAFORSEO_GET_SERP_BAIDU_LOCATIONS_BY_COUNTRY`

Tool to retrieve supported Baidu SERP locations by country. Use when you need to get the list of valid Baidu SERP locations for setting up SERP tasks in a specific country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | Country ISO code to filter the list of Baidu SERP locations. Example: 'us' for United States, 'cn' for China. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Baidu Organic Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_BAIDU_ORGANIC_TASK_ADVANCED_BY_ID`

Tool to retrieve advanced Baidu Organic SERP task results by task ID. Use when you need to fetch detailed search engine results page data from Baidu including organic results, rankings, and metadata for a previously submitted task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Bing Organic Task Regular By ID

**Slug:** `DATAFORSEO_GET_SERP_BING_ORGANIC_TASK_REGULAR_BY_ID`

Tool to retrieve Bing Organic SERP task results by task ID. Use when you need to fetch search engine results page data from a previously created Bing organic search task, including organic rankings, paid results, and related searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Dataset Search Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_G_DATASET_SEARCH_TASK_ADV_BY_ID`

Tool to retrieve Google Dataset Search task results by task ID. Use when you need to fetch dataset search results including dataset names, descriptions, providers, formats, authors, licenses, and citation information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Finance Explore Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_G_FINANCE_EXPLORE_TASK_ADV_BY_ID`

Tool to retrieve Google Finance Explore task results by task ID. Use when you need to fetch real-time Google Finance data including market indexes, news, earnings calendars, trending instruments, and market trends for a previously created task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Finance Ticker Search Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_G_FINANCE_TICKER_SEARCH_TASK_ADV_BY_ID`

Tool to retrieve Google Finance Ticker Search task results by task ID. Use when you need to fetch financial data for stocks, indices, or asset pairs from a previously submitted Google Finance ticker search task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Local Finder Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_G_LOCAL_FINDER_TASK_GET_ADV_BY_ID`

Tool to retrieve Google Local Finder SERP task results by task ID. Use when you need to fetch local business search results from a previously submitted Google Local Finder task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Ads Advertisers Live Advanced

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ADS_ADVERTISERS_LIVE_ADVANCED`

Tool to get live Google Ads Advertisers results via DataForSEO API. Use when you need to retrieve real-time advertiser information from Google Ads Transparency Center, including advertiser names, locations, verification status, and approximate ad counts for specific keywords.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to be executed. Each task searches for advertisers running ads for the specified keyword. Maximum 100 tasks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Ads Advertisers Task Advanced

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ADS_ADVERTISERS_TASK_ADVANCED`

Tool to retrieve Google Ads advertiser transparency data for a previously created task. Returns advertiser accounts, domains, and ad counts from Google's ads transparency database for the specified search query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Ads Search Live Advanced

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ADS_SEARCH_LIVE_ADVANCED`

Tool to get live Google Ads Search advanced results. Use when you need to retrieve advertisement data from Google Ads Transparency Center for a specific advertiser domain or advertiser IDs, including ad creatives, formats, verification status, and time ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier (max 255 characters). This tag will be returned in the response for tracking purposes |
| `depth` | integer | No | Number of results to return (default: 40, max: 120). Billing applies per 40 results |
| `format` | string ("all" | "text" | "image" | "video") | No | Advertisement format types for filtering. |
| `target` | string | No | Domain name associated with an advertiser account. Either target or advertiser_ids must be specified |
| `date_to` | string | No | Ending date of the time range in yyyy-mm-dd format. Required if date_from is specified |
| `platform` | string ("all" | "google_play" | "google_maps" | "google_search" | "google_shopping" | "youtube") | No | Advertising platform types for filtering results. |
| `priority` | string ("normal" | "high") | No | Task priority levels. |
| `date_from` | string | No | Starting date of the time range in yyyy-mm-dd format (minimum: 2018-05-31). Required if date_to is specified |
| `location_code` | integer | No | Search engine location code. Use location_code, location_name, or location_coordinate (only one at a time) |
| `location_name` | string | No | Full name of search engine location (e.g., 'United States'). Use location_code, location_name, or location_coordinate (only one at a time) |
| `advertiser_ids` | array | No | Array of advertiser identifiers (max 25). Either advertiser_ids or target must be specified |
| `location_coordinate` | string | No | GPS coordinates of a location. Format: 'latitude,longitude'. Use location_code, location_name, or location_coordinate (only one at a time) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google AI Mode Task Advanced Results

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_AI_MODE_TASK_ADVANCED_BY_ID`

Tool to retrieve Google AI Mode SERP task results by task ID. Use when you need to fetch AI-generated overview results from Google search, including markdown content, references, nested elements like text, links, images, videos, tables, and shopping results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - universally unique identifier (UUID). Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Autocomplete Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_AUTOCOMPLETE_TASK_ADVANCED_BY_ID`

Tool to retrieve Google Autocomplete task results by task ID. Use when you need to fetch autocomplete suggestions from a previously submitted Google Autocomplete task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Dataset Info Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_DATASET_INFO_TASK_ADVANCED`

Tool to retrieve Google Dataset Info task results by task ID. Use when you need to fetch dataset search results including dataset titles, providers, formats, authors, licenses, citations, and descriptions for a previously submitted dataset search task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Finance Markets Task HTML By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_FINANCE_MARKETS_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Finance Markets SERP task by ID. Use when you need to get the unprocessed HTML content of a Google Finance Markets page after creating a finance markets task. Task results are available within 7 days of creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Finance Quote Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_FINANCE_QUOTE_TASK_ADVANCED_BY_ID`

Tool to retrieve Google Finance Quote task results by task ID. Use when you need real-time financial data from Google Finance Quote tab for a specific ticker symbol, including current price, market data, news, and financial metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Finance Quote HTML By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_FINANCE_QUOTE_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Finance Quote task by ID. Use when you need to fetch the unprocessed HTML content from a previously created finance quote task. Results remain valid for 7 days after task creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format, obtained from task_post endpoint. Valid for 7 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Images Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_IMAGES_TASK_GET_ADVANCED_BY_ID`

Tool to retrieve Google Images SERP task results by task ID. Use when you need to fetch image search results from a previously submitted Google Images task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Images Task HTML By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_IMAGES_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Images SERP task by ID. Use when you need to get the unprocessed HTML content of a Google Images search results page after creating an images task. Task results are available within 7 days of creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Jobs Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_JOBS_TASK_ADVANCED`

Tool to retrieve Google Jobs SERP task results by task ID. Use when you need to fetch job listing data from a previously submitted Google Jobs search task, including employer information, location, salary, contract type, and posting details. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Maps Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_MAPS_TASK_GET_ADVANCED_BY_ID`

Tool to retrieve Google Maps SERP task results by task ID. Use when you need to fetch location-based business search results from a previously submitted Google Maps task, including business details, ratings, addresses, operating hours, and contact information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. A universally unique identifier (UUID) unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google News Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_NEWS_TASK_GET_ADVANCED`

Tool to retrieve Google News SERP task results by task ID. Use when you need to fetch news article data from a previously submitted Google News search task, including headlines, sources, publication dates, and top stories. The task ID must be from a task created within the last 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Organic Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ORGANIC_TASK_ADVANCED_BY_ID`

Tool to retrieve advanced Google Organic SERP task results by task ID. Use when you need to fetch detailed search engine results page data from Google including organic results, rankings, and metadata for a previously submitted task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Organic Task HTML By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ORGANIC_TASK_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Organic SERP task by ID. Use when you need to get the unprocessed HTML content of a Google search results page after creating an organic SERP task. Results are available for 7 days after task completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format to retrieve HTML results from a completed SERP task. Task ID is usable within 7 days of task completion. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Organic Task Regular By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_ORGANIC_TASK_REGULAR_BY_ID`

Tool to retrieve Google Organic SERP task results by task ID. Use when you need to fetch search engine results page data from a previously created Google organic search task, including organic rankings, paid results, and featured snippets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Google Search By Image HTML By ID

**Slug:** `DATAFORSEO_GET_SERP_GOOGLE_SEARCH_BY_IMAGE_HTML_BY_ID`

Tool to retrieve raw HTML results for a Google Search By Image task by ID. Use when you need to get the unprocessed HTML content of Google Search By Image results after creating a search by image task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in the DataForSEO system. You can use it within 7 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Naver Organic Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_NAVER_ORGANIC_TASK_GET_ADVANCED`

Tool to retrieve advanced Naver Organic SERP task results by task ID. Use when you need to fetch detailed search engine results page data from Naver including organic results, rankings, and metadata for a previously submitted task. Results are available for 30 days after task creation at no additional cost.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system that can be used within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Naver Organic Task Regular By ID

**Slug:** `DATAFORSEO_GET_SERP_NAVER_ORGANIC_TASK_REGULAR_BY_ID`

Tool to retrieve Naver Organic SERP task results by task ID. Use when you need to fetch search engine results page data from a previously created Naver organic search task, including organic rankings, paid results, and related searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Seznam Organic Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_SEZNAM_ORGANIC_TASK_GET_ADVANCED_BY_ID`

Tool to retrieve Seznam Organic SERP task results by task ID. Use when you need to fetch organic search results from a previously submitted Seznam search task, including rankings, titles, URLs, descriptions, and other SERP features like related searches, videos, and images.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Serp Seznam Organic Task Get Regular By Id

**Slug:** `DATAFORSEO_GET_SERP_SEZNAM_ORGANIC_TASK_GET_REGULAR_BY_ID`

Tool to retrieve Seznam Organic SERP task results by task ID. Use when you need to fetch completed Seznam search results including organic listings, rankings, and metadata. Results remain accessible for 30 days after task creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique task identifier in UUID format. Results are accessible for 30 days after task creation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Yahoo Organic Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_YAHOO_ORGANIC_TASK_GET_ADVANCED_BY_ID`

Tool to retrieve Yahoo Organic SERP task results by task ID. Use when you need to fetch organic search results from a previously submitted Yahoo search task, including rankings, titles, URLs, descriptions, ratings, and other SERP features like related searches, videos, and images.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP Yahoo Organic Task Regular By ID

**Slug:** `DATAFORSEO_GET_SERP_YAHOO_ORGANIC_TASK_REGULAR_BY_ID`

Tool to retrieve Yahoo Organic SERP task results by task ID. Use when you need to fetch search engine results page data from a previously created Yahoo organic search task, including organic rankings, paid results, and related searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier in UUID format. Unique task identifier in our system. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get YouTube Video Comments Task (Advanced)

**Slug:** `DATAFORSEO_GET_SERP_YT_VIDEO_COMMENTS_TASK_ADV_BY_ID`

Tool to retrieve advanced YouTube Video Comments SERP task results by task ID. Use when you need to fetch detailed comment data including author info, timestamps, likes, and reply counts for a previously submitted YouTube video comments task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - a universally unique identifier (UUID). Unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SERP YouTube Video Subtitles Task Advanced By ID

**Slug:** `DATAFORSEO_GET_SERP_YT_VIDEO_SUBTITLES_TASK_ADV_BY_ID`

Tool to retrieve YouTube video subtitles from a specific task by ID. Use when you need to fetch subtitle data for a YouTube video including text, timing information, and translations from a previously submitted task.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Task identifier - unique task identifier in our system in the UUID format. You will be able to use it within 30 days to request the results of the task at any time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Chat GPT AI Models

**Slug:** `DATAFORSEO_LIST_AI_OPT_CHAT_GPT_LLM_RESPONSES_MODELS`

Retrieve the list of available Chat GPT AI models from DataForSEO. Returns comprehensive information about each model including reasoning capabilities, web search support, and POST-GET retrieval compatibility. Use this action to discover which AI models are available for use with the DataForSEO AI Optimization API.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ready AI Optimization LLM Response Tasks

**Slug:** `DATAFORSEO_LIST_AI_OPT_CHAT_GPT_LLM_RESPONSES_TASKS_READY`

Tool to list completed AI optimization LLM response tasks that are ready for result collection. Use when you need to retrieve task IDs of completed tasks that haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AI Optimization ChatGPT LLM Scraper Languages

**Slug:** `DATAFORSEO_LIST_AI_OPT_CHAT_GPT_LLM_SCRAPER_LANGUAGES`

Tool to list available languages for DataForSEO ChatGPT LLM Scraper. Use when you need to see which languages are supported for AI optimization scraping tasks.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List ChatGPT LLM Scraper Locations

**Slug:** `DATAFORSEO_LIST_AI_OPT_CHAT_GPT_LLM_SCRAPER_LOCATIONS`

Tool to retrieve the list of available locations for DataForSEO ChatGPT LLM Scraper. Use when you need to filter locations by country when setting up a task.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AI Optimization Claude LLM Tasks Ready

**Slug:** `DATAFORSEO_LIST_AI_OPT_CLAUDE_LLM_RESPONSES_TASKS_READY`

Tool to list completed AI Optimization Claude LLM response tasks that are ready for collection. Use when working with DataForSEO AI optimization endpoints to retrieve task IDs of completed jobs that haven't been collected yet.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AI Optimization Gemini LLM Scraper Tasks Ready

**Slug:** `DATAFORSEO_LIST_AI_OPT_GEMINI_LLM_SCRAPER_TASKS_READY`

Tool to retrieve completed Gemini LLM Scraper tasks that haven't been collected yet. Use when checking for ready tasks to process results (up to 1,000 tasks from last 3 days). Rate limit: 20 calls per minute.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Gemini LLM Scraper Languages

**Slug:** `DATAFORSEO_LIST_AI_OPTIMIZATION_GEMINI_LLM_SCRAPER_LANGUAGES`

Tool to retrieve the list of available languages for DataForSEO AI Optimization Gemini LLM Scraper API. Use when you need to check which languages are supported for Gemini-powered LLM scraping operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Gemini LLM Scraper Locations

**Slug:** `DATAFORSEO_LIST_AI_OPTIMIZATION_GEMINI_LLM_SCRAPER_LOCATIONS`

Tool to list available locations for AI Optimization Gemini LLM Scraper. Use when you need to see which geographic locations are supported for Gemini LLM scraping operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | No | Country ISO code to filter the list of locations by country. Example: 'US', 'GB', 'CA'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AI Optimization LLM Mentions Locations and Languages

**Slug:** `DATAFORSEO_LIST_AI_OPT_LLM_MENTIONS_LOCATIONS_AND_LANGUAGES`

Tool to retrieve the full list of locations and languages supported in DataForSEO AI Optimization LLM Mentions API. Use this to discover which geographic locations and languages are available for LLM mention tracking across platforms like Google and ChatGPT. Note: ChatGPT data is only available for the United States and English language.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List AI Optimization Perplexity LLM Response Models

**Slug:** `DATAFORSEO_LIST_AI_OPT_PERPLEXITY_LLM_RESPONSES_MODELS`

Tool to list available Perplexity AI models for LLM responses with their capabilities. Use when you need to see which Perplexity models are available and their supported features (reasoning, web search, POST-GET data retrieval).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Apple App List Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_APPLE_APP_LIST_TASKS_READY`

Tool to retrieve completed Apple App List tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Apple Categories

**Slug:** `DATAFORSEO_LIST_APP_DATA_APPLE_CATEGORIES`

Tool to retrieve the complete list of app categories available on Apple App Store. Use when you need to see which app categories are supported for App Data API requests.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Apple Languages

**Slug:** `DATAFORSEO_LIST_APP_DATA_APPLE_LANGUAGES`

Tool to list available languages for DataForSEO Apple App Data API. Use when you need to see which languages are supported for Apple app data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Apple App Data Locations

**Slug:** `DATAFORSEO_LIST_APP_DATA_APPLE_LOCATIONS`

Tool to retrieve the list of Apple App Store locations supported in DataForSEO App Data API. Use when you need to get available location codes and names for Apple App Store data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Errors

**Slug:** `DATAFORSEO_LIST_APP_DATA_ERRORS`

Tool to retrieve information about App Data API tasks that returned errors within the past 7 days. Use when you need to debug failed tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'app_data/task_get/advanced', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google App Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_APP_INFO_TASKS_READY`

Tool to retrieve completed Google App Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Google App Listings Categories

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_APP_LISTINGS_CATEGORIES`

Tool to list all available Google Play app categories with their listing counts. Use when you need to see the complete list of app categories available on Google Play Store.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google App List Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_APP_LIST_TASKS_READY`

Tool to retrieve completed Google App List tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google App Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_APP_REVIEWS_TASKS_READY`

Tool to retrieve completed Google App Reviews tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google App Searches Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_APP_SEARCHES_TASKS_READY`

Tool to retrieve completed Google App Searches tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Google Categories

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_CATEGORIES`

Tool to list available Google Play app categories. Use when you need to retrieve the complete list of app category identifiers available on Google Play for filtering or classification purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Google Languages

**Slug:** `DATAFORSEO_LIST_APP_DATA_GOOGLE_LANGUAGES`

Tool to list available languages for DataForSEO Google App Data API. Use when you need to see which languages are supported for Google app data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Task IDs

**Slug:** `DATAFORSEO_LIST_APP_DATA_ID_LIST`

Tool to retrieve a list of App Data task IDs within a specified time period. Use when you need to get task IDs and metadata for all App Data tasks (both successful and uncompleted) created between two dates. Limited to 1000 task IDs per call with 10 API calls per minute.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("asc" | "desc") | No | Sort order by task execution time. Allowed values: 'asc' (ascending) or 'desc' (descending). Default: 'asc'. |
| `limit` | integer | No | Maximum number of task IDs to return. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset for the results array. Use for pagination. Default: 0. |
| `datetime_to` | string | Yes | End date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Maximum: current datetime. |
| `datetime_from` | string | Yes | Start date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Maximum: 1 month prior if include_metadata is true, 6 months prior if false. |
| `include_metadata` | boolean | No | Whether to include task metadata in the response. If true, only tasks from the last month can be retrieved. Default: false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List App Data Ready Tasks

**Slug:** `DATAFORSEO_LIST_APP_DATA_TASKS_READY`

Tool to retrieve completed App Data tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Apple App Searches Tasks Ready

**Slug:** `DATAFORSEO_LIST_APPLE_APP_SEARCHES_TASKS_READY`

Tool to retrieve list of completed Apple App Searches tasks that are ready for collection. Use when you need to get task IDs of completed searches from the previous three days that haven't been collected yet.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Backlinks Available Filters

**Slug:** `DATAFORSEO_LIST_BACKLINKS_AVAILABLE_FILTERS`

Tool to retrieve available filters for DataForSEO Backlinks API endpoints. Use when you need to discover which fields can be filtered in backlinks queries and their data types (string, boolean, numeric, time, or array types).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Backlinks Errors

**Slug:** `DATAFORSEO_LIST_BACKLINKS_ERRORS`

Tool to retrieve information about Backlinks API tasks that returned errors within the past 7 days. Use when you need to debug failed backlinks tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'backlinks/content_duplicates', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Search Volume History Locations

**Slug:** `DATAFORSEO_LIST_BING_SEARCH_VOLUME_HISTORY_LOCATIONS`

Tool to retrieve the list of locations and languages supported by Bing Search Volume History endpoint. Use when you need to determine which geographic locations and languages are available for Bing search volume history queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Extended Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_BIZ_GOOGLE_EXTENDED_REVIEWS_TASKS_READY`

Tool to retrieve completed Google Extended Reviews tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Google Hotel Searches Tasks Ready

**Slug:** `DATAFORSEO_LIST_BIZ_GOOGLE_HOTEL_SEARCHES_TASKS_READY`

Tool to retrieve completed Business Data Google Hotel Searches tasks ready for collection. Use when you need to get task IDs for completed hotel search tasks that haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google My Business Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_BIZ_GOOGLE_MY_BUSINESS_INFO_TASKS_READY`

Tool to retrieve completed Google My Business Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google My Business Updates Ready Tasks

**Slug:** `DATAFORSEO_LIST_BIZ_GOOGLE_MY_BUSINESS_UPDATES_TASKS_READY`

Tool to retrieve completed Google My Business Updates tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Questions And Answers Ready Tasks

**Slug:** `DATAFORSEO_LIST_BIZ_GOOGLE_QUESTIONS_ANSWERS_TASKS_READY`

Tool to retrieve completed Google Questions And Answers tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List TripAdvisor Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_BIZ_TRIPADVISOR_REVIEWS_TASKS_READY`

Tool to retrieve completed TripAdvisor Reviews tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Business Listings Categories

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_BUSINESS_LISTINGS_CATEGORIES`

Tool to list Business Data Business Listings categories by business count. Use when you need to retrieve the available business categories for business listings data.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Business Listings Locations

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_BUSINESS_LISTINGS_LOCATIONS`

Tool to list available locations for Business Listings data. Use when you need to retrieve location codes and geographic information for business listing queries. Returns all supported countries with business count statistics.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Errors

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_ERRORS`

Tool to retrieve information about Business Data API tasks that returned errors within the past 7 days. Use when you need to debug failed tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'business_data/task_get/advanced', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Hotel Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_GOOGLE_HOTEL_INFO_TASKS_READY`

Tool to retrieve completed Google Hotel Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Google Languages

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_GOOGLE_LANGUAGES`

Tool to list available languages for DataForSEO Google Business Data API. Use when you need to see which languages are supported for Google business data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_GOOGLE_REVIEWS_TASKS_READY`

Tool to retrieve completed Google Reviews tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_TASKS_READY`

Tool to retrieve completed Business Data tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Data TripAdvisor Languages

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_TRIPADVISOR_LANGUAGES`

Tool to list available TripAdvisor languages supported in Business Data API. Use when you need to retrieve language codes for TripAdvisor Business Data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List TripAdvisor Search Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_TRIPADVISOR_SEARCH_TASKS_READY`

Tool to retrieve completed TripAdvisor Search tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Trustpilot Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_TRUSTPILOT_REVIEWS_TASKS_READY`

Tool to retrieve completed Trustpilot Reviews tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Trustpilot Search Ready Tasks

**Slug:** `DATAFORSEO_LIST_BUSINESS_DATA_TRUSTPILOT_SEARCH_TASKS_READY`

Tool to retrieve completed Trustpilot Search tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Claude LLM Response Models

**Slug:** `DATAFORSEO_LIST_CLAUDE_LLM_RESPONSE_MODELS`

Tool to list available Claude AI models for AI optimization and LLM responses. Use when you need to see which Claude models are available and their capabilities (reasoning, web search, task post support).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Content Analysis Available Filters

**Slug:** `DATAFORSEO_LIST_CONTENT_ANALYSIS_AVAILABLE_FILTERS`

Tool to retrieve available filters for DataForSEO Content Analysis API. Use when you need to discover which fields can be filtered in content analysis queries and their data types (string, numeric, boolean, array, or timestamp).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Content Analysis Categories

**Slug:** `DATAFORSEO_LIST_CONTENT_ANALYSIS_CATEGORIES`

Tool to list all available Content Analysis categories based on Google product and service categories. Use when you need to retrieve the complete hierarchical list of approximately 3,180 category codes and names for content classification purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Content Analysis Languages

**Slug:** `DATAFORSEO_LIST_CONTENT_ANALYSIS_LANGUAGES`

Tool to list available languages supported in Content Analysis API. Use when you need to retrieve language codes for content analysis queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Content Analysis Locations

**Slug:** `DATAFORSEO_LIST_CONTENT_ANALYSIS_LOCATIONS`

Tool to list available locations supported in Content Analysis API. Use when you need to retrieve location codes and geographic information for content analysis queries. This is a free endpoint that returns all supported locations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DataForSEO Labs Categories

**Slug:** `DATAFORSEO_LIST_DATAFORSEO_LABS_CATEGORIES`

Tool to retrieve the complete hierarchical list of Google categories used by DataForSEO Labs. Use when you need to obtain category codes and names for filtering search results or understanding domain categorization.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DataForSEO Labs Errors

**Slug:** `DATAFORSEO_LIST_DATAFORSEO_LABS_ERRORS`

Tool to retrieve information about DataForSEO Labs API tasks that returned errors within the past 7 days. Use when you need to debug failed Labs tasks, monitor error rates, or investigate specific function failures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'dataforseo_labs/google/ranked_keywords/live', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DataForSEO Labs Locations and Languages

**Slug:** `DATAFORSEO_LIST_DATAFORSEO_LABS_LOCATIONS_AND_LANGUAGES`

Tool to list available locations and languages supported in DataForSEO Labs API. Use when you need to retrieve location codes and language codes for DataForSEO Labs queries across Google, Bing, and Amazon data sources.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Errors

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_ERRORS`

Tool to retrieve information about Domain Analytics API tasks that returned errors within the past 7 days. Use when you need to debug failed tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'domain_analytics/technologies/domain_technologies', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Task IDs

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_ID_LIST`

Tool to retrieve a list of Domain Analytics task IDs within a specified time period. Use when you need to get task IDs and metadata for all Domain Analytics tasks (both successful and uncompleted) created between two dates. Limited to 1000 task IDs per call with 10 API calls per minute.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("asc" | "desc") | No | Sort order by task execution time. Allowed values: 'asc' (ascending) or 'desc' (descending). Default: 'asc'. |
| `limit` | integer | No | Maximum number of task IDs to return. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset for the results array. Use for pagination. Default: 0. |
| `datetime_to` | string | Yes | End date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Maximum: current datetime. |
| `datetime_from` | string | Yes | Start date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Maximum: 6 months prior if include_metadata is false, 1 month prior if true. |
| `include_metadata` | boolean | No | Whether to include task metadata in the response. If true, only tasks from the last month can be retrieved. Default: false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Technologies

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_TECHNOLOGIES`

Tool to retrieve the complete list of available technologies in DataForSEO Domain Analytics API, organized by groups and categories. Use when you need to discover which technologies can be tracked or analyzed (e.g., ecommerce platforms, analytics tools, marketing services).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Technologies Filters

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_TECHNOLOGIES_FILTERS`

Tool to retrieve available filters for DataForSEO Domain Analytics Technologies API endpoints. Use when you need to discover which fields can be filtered in domain analytics technology queries and their data types (string, numeric, or timestamp).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Technologies Languages

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_TECHNOLOGIES_LANGUAGES`

Tool to list available languages for Domain Analytics Technologies API. Use when you need to retrieve language codes for domain analytics technology queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Technologies Locations

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_TECHNOLOGIES_LOCATIONS`

Tool to list available locations supported in Domain Analytics Technologies API. Use when you need to retrieve location codes for technology stack analysis queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Domain Analytics Whois Filters

**Slug:** `DATAFORSEO_LIST_DOMAIN_ANALYTICS_WHOIS_FILTERS`

Tool to retrieve available filters for DataForSEO Domain Analytics Whois API endpoint. Use when you need to discover which fields can be filtered in whois queries and their data types (string, numeric, boolean, array, or timestamp).

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Gemini LLM Models

**Slug:** `DATAFORSEO_LIST_GEMINI_LLM_MODELS`

Tool to list available Gemini LLM response models with their capabilities. Use when you need to see which Gemini AI models are available for optimization tasks, including their reasoning and web search support.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Gemini LLM Responses Tasks Ready

**Slug:** `DATAFORSEO_LIST_GEMINI_LLM_RESPONSES_TASKS_READY`

Tool to retrieve a list of completed Gemini LLM response tasks that haven't been collected yet. Use when working with DataForSEO's Standard method without postback_url to get task IDs for result collection via Task GET endpoint. Returns up to 1000 completed tasks from the previous three days. Rate limit: 20 calls per minute.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Bing Languages

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_BING_LANGUAGES`

Tool to list available languages for DataForSEO Bing Keywords Data API. Use when you need to see which languages are supported for Bing keyword data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Search Volume Ready Tasks

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_BING_SEARCH_VOLUME_TASKS_READY`

Tool to retrieve completed Keywords Data Bing Search Volume tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Dataforseo Trends Locations

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_DATAFORSEO_TRENDS_LOCATIONS`

Tool to list available locations supported in DataForSEO Trends API. Use when you need to retrieve location codes and geographic information for DataForSEO Trends queries. Minimum geographic scope is country level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | No | Optional ISO country code to filter locations by country (e.g., 'us', 'gb', 'au'). When provided, returns only locations within that country. If omitted, returns all available locations. Note: minimum geographic scope supported for DataForSEO Trends API is country level. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Endpoints

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_ENDPOINTS`

Tool to retrieve all available Keywords Data API endpoints. Use when you need to discover available Keywords Data endpoints for Bing, Google, Google Ads, Google Trends, Clickstream Data, and DataForSEO Trends.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Errors

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_ERRORS`

Tool to retrieve Keywords Data API tasks that returned errors within the past 7 days. Use when you need to monitor or debug failed Keywords Data API requests, investigate error patterns, or troubleshoot API integration issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of error records to return. Default: 100 |
| `offset` | integer | No | Pagination offset for results. Default: 0 |
| `datetime_to` | string | No | End date/time for filtering errors in UTC format (e.g., '2024-01-31 23:59:59'). Filters errors up to this timestamp |
| `datetime_from` | string | No | Start date/time for filtering errors in UTC format (e.g., '2024-01-01 00:00:00'). Filters errors from this timestamp onwards |
| `filtered_function` | string | No | Filter errors by specific API function name (e.g., 'keywords_for_keywords', 'search_volume'). Returns only errors from this function |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Ads Languages

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_ADS_LANGUAGES`

Tool to list available languages for DataForSEO Keywords Data Google Ads API. Use when you need to see which languages are supported for Google Ads keyword data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Categories

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_CATEGORIES`

Tool to list available Google AdWords product/service categories. Use when you need to retrieve the hierarchical list of ~94,933 Google advertising categories for keyword research or ad targeting purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Languages

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_LANGUAGES`

Tool to list available languages for DataForSEO Google Keywords Data API. Use when you need to see which languages are supported for Google keywords data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Trends Categories

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_TRENDS_CATEGORIES`

Tool to list available Google Trends categories for Keywords Data API. Use when you need category codes for filtering Google Trends data by topic or industry vertical.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Trends Languages

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_TRENDS_LANGUAGES`

Tool to list available languages for DataForSEO Google Trends API. Use when you need to see which languages are supported for Google Trends keyword data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Trends Locations

**Slug:** `DATAFORSEO_LIST_KEYWORDS_DATA_GOOGLE_TRENDS_LOCATIONS`

Tool to list available Google Trends locations for Keywords Data API. Use when you need location codes for geographic targeting in Google Trends queries. Returns 2,383+ supported locations with Google Trends identifiers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | No | Optional country filter to get locations for a specific country (e.g., 'us', 'uk', 'au'). When provided, returns only locations within that country. If omitted, returns all available locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Bing Audience Estimation Job Functions

**Slug:** `DATAFORSEO_LIST_KW_BING_AUDIENCE_EST_JOB_FUNCTIONS`

Tool to retrieve the list of job functions with job_function_id supported by Bing Ads Audience Estimation endpoint. Use when you need to see which job functions are available for audience estimation in Bing Ads.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Audience Estimation Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_BING_AUDIENCE_EST_TASKS_READY`

Tool to retrieve completed Keywords Data Bing Audience Estimation tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Keywords For Keywords Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_BING_KW_FOR_KW_TASKS_READY`

Tool to retrieve completed Bing Keywords For Keywords tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Keywords For Site Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_BING_KW_FOR_SITE_TASKS_READY`

Tool to retrieve completed Bing Keywords For Site tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Keyword Performance Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_BING_KW_PERFORMANCE_TASKS_READY`

Tool to retrieve completed Bing Keyword Performance tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Bing Keyword Suggestions For URL Languages

**Slug:** `DATAFORSEO_LIST_KW_BING_KW_SUGGESTIONS_FOR_URL_LANGUAGES`

Tool to list available languages for DataForSEO Bing Keyword Suggestions API. Use when you need to see which languages are supported for Bing keyword suggestions queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Bing Keyword Suggestions For URL Tasks Ready

**Slug:** `DATAFORSEO_LIST_KW_BING_KW_SUGGESTIONS_FOR_URL_TASKS_READY`

Tool to retrieve completed Bing Keyword Suggestions For URL tasks that haven't been collected yet. Use when working with DataForSEO's Standard method without postback_url to get task IDs for result collection. Results are maintained for 3 days after task completion.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Bing Search Volume History Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_BING_SEARCH_VOL_HISTORY_TASKS_READY`

Tool to retrieve completed Bing Search Volume History tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Clickstream Data Locations And Languages

**Slug:** `DATAFORSEO_LIST_KW_CLICKSTREAM_LOCATIONS_AND_LANGUAGES`

Tool to retrieve the full list of locations and languages supported in DataForSEO Clickstream Data API. Use when you need to get available geographic locations and their supported languages for clickstream keyword data. This endpoint is free and incurs no cost.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Ads Ad Traffic by Keywords Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_ADS_AD_TRAFFIC_BY_KW_TASKS_READY`

Tool to retrieve completed Google Ads Ad Traffic by Keywords tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Ads Keywords For Keywords Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_ADS_KW_FOR_KW_TASKS_READY`

Tool to retrieve completed Google Ads Keywords For Keywords tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Ads Keywords For Site Tasks Ready

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_ADS_KW_FOR_SITE_TASKS_READY`

Tool to retrieve completed Google Ads Keywords For Site tasks that haven't been collected yet. Use when working with DataForSEO's Standard method without postback_url to get task IDs for result collection.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Ads Search Volume Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_ADS_SEARCH_VOL_TASKS_READY`

Tool to retrieve completed Google Ads Search Volume tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords For Keywords Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_KW_FOR_KW_TASKS_READY`

Tool to retrieve completed Google Keywords For Keywords tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Keywords Data Google Keywords For Site Tasks Ready

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_KW_FOR_SITE_TASKS_READY`

Tool to retrieve completed Google Keywords For Site tasks that haven't been collected yet. Use when working with DataForSEO's Standard method without postback_url to get task IDs for result collection. Tasks are kept for 3 days after completion.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Search Volume Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_SEARCH_VOL_TASKS_READY`

Tool to retrieve completed Google Search Volume tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Trends Explore Ready Tasks

**Slug:** `DATAFORSEO_LIST_KW_GOOGLE_TRENDS_EXPLORE_TASKS_READY`

Tool to retrieve completed Google Trends Explore tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DataForSEO Labs Google Categories for Keywords Languages

**Slug:** `DATAFORSEO_LIST_LABS_GOOGLE_CATEGORIES_FOR_KW_LANGUAGES`

Tool to list available languages for DataForSEO Labs Google Categories for Keywords API. Use when you need to see which languages are supported for Google Categories for Keywords queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Amazon Asin Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_AMAZON_ASIN_TASKS_READY`

Tool to retrieve completed Merchant Amazon Asin tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Amazon Languages

**Slug:** `DATAFORSEO_LIST_MERCHANT_AMAZON_LANGUAGES`

Tool to list available languages for DataForSEO Amazon Merchant Data API. Use when you need to see which languages are supported for Amazon merchant data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Amazon Products Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_AMAZON_PRODUCTS_TASKS_READY`

Tool to retrieve completed Merchant Amazon Products tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Amazon Sellers Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_AMAZON_SELLERS_TASKS_READY`

Tool to retrieve completed Merchant Amazon Sellers tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Errors

**Slug:** `DATAFORSEO_LIST_MERCHANT_ERRORS`

Tool to retrieve information about Merchant API tasks that returned errors within the past 7 days. Use when you need to debug failed merchant tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'sellers/ad_url', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Google Languages

**Slug:** `DATAFORSEO_LIST_MERCHANT_GOOGLE_LANGUAGES`

Tool to list available languages for DataForSEO Merchant Google API. Use when you need to see which languages are supported for Google Shopping data queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Google Product Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_GOOGLE_PRODUCT_INFO_TASKS_READY`

Tool to retrieve completed Merchant Google Product Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Google Products Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_GOOGLE_PRODUCTS_TASKS_READY`

Tool to retrieve completed Merchant Google Products tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Google Reviews Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_GOOGLE_REVIEWS_TASKS_READY`

Tool to retrieve completed Merchant Google Reviews tasks that are ready for collection. Use when you need to get task IDs for completed tasks that haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Google Sellers Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_GOOGLE_SELLERS_TASKS_READY`

Tool to retrieve completed Merchant Google Sellers tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Merchant Ready Tasks

**Slug:** `DATAFORSEO_LIST_MERCHANT_TASKS_READY`

Tool to retrieve completed Merchant tasks that are ready for collection. Use when you need to get a list of task IDs for Google Shopping Products tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List OnPage Available Filters

**Slug:** `DATAFORSEO_LIST_ON_PAGE_AVAILABLE_FILTERS`

Tool to retrieve available filters for DataForSEO OnPage API endpoints. Use when you need to discover which fields can be filtered in OnPage queries (resources, pages, non_indexable, links, pages_by_resource, redirect_chains, keyword_density) and their data types.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List OnPage Errors

**Slug:** `DATAFORSEO_LIST_ON_PAGE_ERRORS`

Tool to retrieve information about OnPage API tasks that returned errors within the past 7 days. Use when you need to debug failed OnPage tasks, monitor error rates, or investigate specific function failures. Supports filtering by function name and datetime range.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of returned tasks that responded with an error. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset in the results array of returned tasks. Use for pagination. Default: 0. |
| `datetime_to` | string | No | End datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-20 23:59:59 +00:00' |
| `datetime_from` | string | No | Start datetime for filtering errors in UTC format 'yyyy-mm-dd hh:mm:ss +00:00'. Filters errors within the last 7 days. Example: '2024-01-15 12:00:00 +00:00' |
| `filtered_function` | string | No | Filter results by specific function name (e.g., 'on_page/task_post', 'postback_url', 'pingback_url'). If not specified, returns errors for all functions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On Page Lighthouse Languages

**Slug:** `DATAFORSEO_LIST_ON_PAGE_LIGHTHOUSE_LANGUAGES`

Tool to list available languages for DataForSEO On Page Lighthouse API. Use when you need to see which languages are supported for Lighthouse page quality audits.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On Page Lighthouse Tasks Ready

**Slug:** `DATAFORSEO_LIST_ON_PAGE_LIGHTHOUSE_TASKS_READY`

Tool to retrieve the list of completed On Page Lighthouse tasks that haven't been collected yet. Use when you need to get task IDs for completed Lighthouse audits before fetching their results. Tasks remain available for three days after completion.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List OnPage Lighthouse Versions

**Slug:** `DATAFORSEO_LIST_ON_PAGE_LIGHTHOUSE_VERSIONS`

Tool to list available Lighthouse versions for OnPage API audits. Use when you need to check which Lighthouse versions are supported or identify the default version used for page quality analysis.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On Page Resources

**Slug:** `DATAFORSEO_LIST_ON_PAGE_RESOURCES`

Tool to retrieve resources from a completed OnPage crawl task. Use when you need a detailed list of images, scripts, stylesheets, and broken elements found during the crawl. Returns resource metadata, sizes, loading times, and validation checks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to retrieve resources. Each task requires an id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List On Page Ready Tasks

**Slug:** `DATAFORSEO_LIST_ON_PAGE_TASKS_READY`

Tool to retrieve completed On Page tasks that haven't been collected yet. Use when checking for ready tasks to process results (up to 1,000 tasks from last 3 days). Rate limit: 20 calls per minute.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Serp Baidu Languages

**Slug:** `DATAFORSEO_LIST_SERP_BAIDU_LANGUAGES`

Tool to list available languages for DataForSEO Baidu SERP API. Use when you need to see which languages are supported for Baidu search engine results page queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Baidu Organic Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_BAIDU_ORGANIC_TASKS_FIXED`

Tool to retrieve re-parsed Baidu organic SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Baidu Organic Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_BAIDU_ORGANIC_TASKS_READY`

Tool to retrieve completed SERP Baidu Organic tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Bing Languages

**Slug:** `DATAFORSEO_LIST_SERP_BING_LANGUAGES`

Tool to list available languages for DataForSEO Bing SERP API. Use when you need to see which languages are supported for Bing search engine results page queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Bing Organic Tasks Fixed

**Slug:** `DATAFORSEO_LIST_SERP_BING_ORGANIC_TASKS_FIXED`

Tool to retrieve list of re-parsed Bing Organic SERP tasks that haven't been collected yet. Use when you need to get task IDs for re-parsed results using the Standard method without postback_url, then collect the fixed results using Task GET endpoints.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Bing Organic Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_BING_ORGANIC_TASKS_READY`

Tool to retrieve completed SERP Bing Organic tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Endpoints

**Slug:** `DATAFORSEO_LIST_SERP_ENDPOINTS`

Tool to retrieve the complete list of available SERP API endpoints for task setup. Use when you need to discover which SERP endpoints are available for specific search engines or operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Errors

**Slug:** `DATAFORSEO_LIST_SERP_ERRORS`

Tool to retrieve SERP API tasks that returned errors within the past 7 days. Use when you need to investigate or debug SERP API failures, monitor error patterns, or troubleshoot specific task issues.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of error records to return |
| `offset` | integer | No | Number of records to skip before returning results (for pagination) |
| `datetime_to` | string | No | End date and time for filtering errors in UTC format (e.g., '2024-01-31 23:59:59'). Must be within the past 7 days. |
| `datetime_from` | string | No | Start date and time for filtering errors in UTC format (e.g., '2024-01-01 00:00:00'). Must be within the past 7 days. |
| `filtered_function` | string | No | Filter errors by specific SERP API function name (e.g., 'google/organic/live/advanced', 'pingback_url') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Finance Ticker Search Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_G_FINANCE_TICKER_SEARCH_TASKS_READY`

Tool to retrieve completed SERP Google Finance Ticker Search tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Ads Advertisers Locations

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ADS_ADVERTISERS_LOCATIONS`

Tool to list available Google Ads advertiser locations for SERP API queries. Use when you need to retrieve location codes and geographic information for Google Ads advertiser targeting. Note: locations in Russia and Belarus are no longer supported.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Ads Advertisers Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ADS_ADVERTISERS_TASKS_READY`

Tool to retrieve completed SERP Google Ads Advertisers tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Ads Search Locations

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ADS_SEARCH_LOCATIONS`

Tool to list available Google Ads Search locations for SERP API. Use when you need location codes for geographic targeting in Google Ads Search queries. Returns all supported locations with their codes and geographic hierarchy. Note: locations in Russia and Belarus are not supported.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Ads Search Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ADS_SEARCH_TASKS_READY`

Tool to retrieve completed SERP Google Ads Search tasks that are ready for collection. Use when you need to get a list of task IDs for Google Ads Search tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google AI Mode Languages

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_AI_MODE_LANGUAGES`

Tool to list available languages for DataForSEO Google AI Mode SERP API. Use when you need to see which languages are supported for Google AI Mode search engine results page queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google AI Mode Tasks Fixed

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_AI_MODE_TASKS_FIXED`

Tool to retrieve re-parsed SERP Google AI Mode tasks that haven't been collected yet. Use when you need to get a list of task IDs for tasks that have been automatically re-parsed but haven't been collected yet using the Standard method without postback_url. Returns up to 1,000 re-parsed tasks from the last 24 hours. Rate limit: 20 calls per minute.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google AI Mode Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_AI_MODE_TASKS_READY`

Tool to retrieve completed SERP Google AI Mode tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Autocomplete Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_AUTOCOMPLETE_TASKS_FIXED`

Tool to retrieve re-parsed Google autocomplete SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Autocomplete Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_AUTOCOMPLETE_TASKS_READY`

Tool to retrieve completed SERP Google Autocomplete tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Dataset Info Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_DATASET_INFO_TASKS_FIXED`

Tool to retrieve re-parsed Google Dataset Info tasks that haven't been collected yet. Use when you need to get a list of task IDs for re-parsed tasks completed using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Dataset Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_DATASET_INFO_TASKS_READY`

Tool to retrieve completed SERP Google Dataset Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Dataset Search Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_DATASET_SEARCH_TASKS_FIXED`

Tool to retrieve re-parsed Google Dataset Search SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Dataset Search Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_DATASET_SEARCH_TASKS_READY`

Tool to retrieve completed SERP Google Dataset Search tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Events Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_EVENTS_TASKS_FIXED`

Tool to retrieve re-parsed Google Events SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Events Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_EVENTS_TASKS_READY`

Tool to retrieve completed SERP Google Events tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Finance Explore Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_FINANCE_EXPLORE_TASKS_READY`

Tool to retrieve completed SERP Google Finance Explore tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Finance Markets Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_FINANCE_MARKETS_TASKS_READY`

Tool to retrieve completed SERP Google Finance Markets tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Finance Quote Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_FINANCE_QUOTE_TASKS_READY`

Tool to retrieve completed SERP Google Finance Quote tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Images Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_IMAGES_TASKS_FIXED`

Tool to retrieve re-parsed Google Images SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Images Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_IMAGES_TASKS_READY`

Tool to retrieve completed SERP Google Images tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Jobs Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_JOBS_TASKS_FIXED`

Tool to retrieve re-parsed Google Jobs SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Jobs Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_JOBS_TASKS_READY`

Tool to retrieve completed SERP Google Jobs tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Languages

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_LANGUAGES`

Tool to list available languages for DataForSEO Google SERP API. Use when you need to see which languages are supported for Google SERP queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Local Finder Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_LOCAL_FINDER_TASKS_FIXED`

Tool to retrieve re-parsed Google Local Finder SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Local Finder Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_LOCAL_FINDER_TASKS_READY`

Tool to retrieve completed SERP Google Local Finder tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Maps Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_MAPS_TASKS_FIXED`

Tool to retrieve re-parsed Google Maps SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Maps Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_MAPS_TASKS_READY`

Tool to retrieve completed SERP Google Maps tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google News Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_NEWS_TASKS_FIXED`

Tool to retrieve re-parsed Google News SERP tasks that haven't been collected yet. Use when you need to get a list of task IDs for re-parsed tasks completed using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google News Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_NEWS_TASKS_READY`

Tool to retrieve completed SERP Google News tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Organic Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ORGANIC_TASKS_FIXED`

Tool to retrieve re-parsed Google Organic SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Organic Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_ORGANIC_TASKS_READY`

Tool to retrieve completed SERP Google Organic tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Google Search By Image Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_SEARCH_BY_IMAGE_TASKS_FIXED`

Tool to retrieve re-parsed Google Search by Image SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Google Search By Image Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_GOOGLE_SEARCH_BY_IMAGE_TASKS_READY`

Tool to retrieve completed SERP Google Search By Image tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Task IDs

**Slug:** `DATAFORSEO_LIST_SERP_ID_LIST`

Tool to retrieve a list of SERP task IDs within a specified time period. Use when you need to get task IDs and metadata for all SERP tasks (both successful and uncompleted) created between two dates. Limited to 1000 task IDs per call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | string ("asc" | "desc") | No | Sort order by task execution time. Allowed values: 'asc' (ascending) or 'desc' (descending). Default: 'asc'. |
| `limit` | integer | No | Maximum number of task IDs to return. Default: 1000, Maximum: 1000. |
| `offset` | integer | No | Offset for pagination. Use for retrieving results beyond the limit. Default: 0. |
| `datetime_to` | string | Yes | End date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Must be greater than datetime_from. |
| `datetime_from` | string | Yes | Start date and time for filtering tasks in UTC format (yyyy-mm-dd hh:mm:ss +00:00). Minimum: 6 months ago (without metadata) or 1 month ago (with metadata). |
| `include_metadata` | boolean | No | Whether to include task metadata in the response. If true, only tasks from the last month can be retrieved. Default: false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Naver Organic Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_NAVER_ORGANIC_TASKS_FIXED`

Tool to retrieve re-parsed Naver organic SERP tasks that haven't been collected yet. Use when you need to get a list of task IDs for re-parsed tasks completed using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Naver Organic Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_NAVER_ORGANIC_TASKS_READY`

Tool to retrieve completed SERP Naver Organic tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Serp Seznam Languages

**Slug:** `DATAFORSEO_LIST_SERP_SEZNAM_LANGUAGES`

Tool to list available languages for DataForSEO Seznam SERP API. Use when you need to see which languages are supported for Seznam search engine results page queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Seznam Organic Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_SEZNAM_ORGANIC_TASKS_FIXED`

Tool to retrieve re-parsed Seznam organic SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Seznam Organic SERP Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_SEZNAM_ORGANIC_TASKS_READY`

Tool to retrieve completed Seznam Organic SERP tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_TASKS_READY`

Tool to retrieve completed SERP tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP Yahoo Languages

**Slug:** `DATAFORSEO_LIST_SERP_YAHOO_LANGUAGES`

Tool to list available languages for DataForSEO Yahoo SERP API. Use when you need to see which languages are supported for Yahoo SERP queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Yahoo Organic Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YAHOO_ORGANIC_TASKS_FIXED`

Tool to retrieve re-parsed Yahoo organic SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Yahoo Organic SERP Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YAHOO_ORGANIC_TASKS_READY`

Tool to retrieve completed Yahoo Organic SERP tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP YouTube Languages

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_LANGUAGES`

Tool to list available languages for DataForSEO YouTube SERP API. Use when you need to see which languages are supported for YouTube SERP queries.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List YouTube Organic Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_ORGANIC_TASKS_READY`

Tool to retrieve completed YouTube Organic SERP tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List YouTube Video Comments Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_COMMENTS_TASKS_FIXED`

Tool to retrieve re-parsed YouTube Video Comments SERP tasks that haven't been collected yet. Use when you need to get a list of task IDs for re-parsed tasks completed using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List YouTube Video Comments Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_COMMENTS_TASKS_READY`

Tool to retrieve completed YouTube video comments SERP tasks that are ready for collection. Use when you need to get task IDs for YouTube video comments tasks that have completed but haven't been collected yet using the Standard method without postback_url. Returns up to 1000 completed tasks from the previous three days.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List YouTube Video Info Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_INFO_TASKS_FIXED`

Tool to retrieve re-parsed YouTube Video Info SERP tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP YouTube Video Info Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_INFO_TASKS_READY`

Tool to retrieve completed SERP YouTube Video Info tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP YouTube Video Subtitles Fixed Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_SUBTITLES_TASKS_FIXED`

Tool to retrieve re-parsed SERP YouTube Video Subtitles tasks that haven't been collected yet. Use when you need to get task IDs for completed re-parsed tasks using the Standard method without postback_url, then collect the fixed results using the Task GET endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SERP YouTube Video Subtitles Ready Tasks

**Slug:** `DATAFORSEO_LIST_SERP_YOUTUBE_VIDEO_SUBTITLES_TASKS_READY`

Tool to retrieve completed SERP YouTube Video Subtitles tasks that are ready for collection. Use when you need to get a list of task IDs for tasks that have completed but haven't been collected yet using the Standard method without postback_url.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bulk Keyword Difficulty Live

**Slug:** `DATAFORSEO_POST_DATAFORSEO_LABS_BULK_KEYWORD_DIFFICULTY_LIVE`

Tool to retrieve bulk keyword difficulty scores from DataForSEO Labs. Returns difficulty scores (0-100) for up to 1000 keywords based on top-10 SERP link profile analysis. Use when you need to assess keyword competitiveness at scale for SEO planning.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier for tracking purposes. Maximum 255 characters |
| `keywords` | array | Yes | Array of keywords to get difficulty scores for. Maximum 1000 keywords allowed. Each keyword must be at least 3 characters long and will be converted to lowercase |
| `language_code` | string | No | Language code. Required if language_name is not provided |
| `language_name` | string | No | Full name of the language. Required if language_code is not provided |
| `location_code` | integer | No | Location code for search analysis. Required if location_name is not provided |
| `location_name` | string | No | Full name of the location for search analysis. Required if location_code is not provided |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bing Search Volume Task

**Slug:** `DATAFORSEO_POST_KEYWORDS_DATA_BING_SEARCH_VOLUME_TASK`

Tool to create a Bing Search Volume task for keyword analysis. Provides search volume data for the last month, search volume trends for up to 24 past months, current cost-per-click, and competition values. Use when you need to analyze keyword search volume and metrics for Bing search.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier for tracking purposes. Maximum 255 characters |
| `device` | string ("all" | "mobile" | "desktop" | "tablet") | No | Device type for search volume data. |
| `date_to` | string | No | End date for search volume trend data in yyyy-mm-dd format. Maximum is 1 month ahead of current date |
| `sort_by` | string ("search_volume" | "cpc" | "competition" | "relevance") | No | Sort order for keyword results. |
| `keywords` | array | Yes | Array of keywords to analyze for search volume data. Maximum 1000 keywords, each with max 100 characters |
| `date_from` | string | No | Start date for search volume trend data in yyyy-mm-dd format. Minimum is 24 months back from current date |
| `pingback_url` | string | No | GET endpoint URL to receive completion notification. DataForSEO will send a GET request to this URL when the task is complete |
| `postback_url` | string | No | POST endpoint URL to receive completed task results. DataForSEO will POST the results to this URL when the task is complete |
| `language_code` | string | No | Language code for the search (e.g., 'en', 'fr', 'de'). Use language_code OR language_name |
| `language_name` | string | No | Full name of the language for the search (e.g., 'English', 'French', 'German'). Use language_name OR language_code |
| `location_code` | integer | No | Location code for the search (e.g., 2840 for United States). Use location_code OR location_name OR location_coordinate |
| `location_name` | string | No | Full name of the location for the search (e.g., 'United States'). Use location_name OR location_code OR location_coordinate |
| `search_partners` | boolean | No | Include Bing partner networks in search volume data. Default: false |
| `location_coordinate` | string | No | GPS coordinates in 'latitude,longitude' format (e.g., '40.7128,-74.0060' for New York). Use location_coordinate OR location_name OR location_code |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Post Keywords Data Google Search Volume Task

**Slug:** `DATAFORSEO_POST_KEYWORDS_DATA_GOOGLE_SEARCH_VOLUME_TASK`

Tool to submit a Google search volume task for specified keywords. Use when you need to get search volume data for keywords. Returns a task ID that can be used to retrieve results asynchronously.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | Custom identifier for tracking this task. Maximum 255 characters. |
| `keywords` | array | Yes | Array of keywords to get search volume data for. Maximum 700 keywords, each up to 80 characters with maximum 10 words per keyword phrase. |
| `pingback_url` | string | No | Notification URL to receive a GET request when task completes. Supports $id and $tag variables. |
| `postback_url` | string | No | Callback URL for automatic POST delivery of results when task completes. Supports $id and $tag variables. |
| `language_code` | string | No | Language code in ISO format (e.g., 'en', 'es'). Use this OR language_name. |
| `language_name` | string | No | Full language name (e.g., 'English'). Use this OR language_code. |
| `location_code` | integer | No | Location identifier code. Use this OR location_name OR location_coordinate. Example: 2840 for United States. |
| `location_name` | string | No | Full location name for search engine targeting (e.g., 'United States', 'London,England,United Kingdom'). Use this OR location_code OR location_coordinate. |
| `search_partners` | boolean | No | Include Google search partners in results. Default is false. |
| `location_coordinate` | string | No | GPS coordinates in 'latitude,longitude' format for precise location targeting. Use this OR location_name OR location_code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Google Keywords For Category Task

**Slug:** `DATAFORSEO_POST_KW_GOOGLE_KW_FOR_CATEGORY_TASK`

Tool to create a Google Keywords For Category task to retrieve keyword suggestions for a specific product/service category. Returns a task ID which can be used to fetch up to 700 keywords with search volume, CPC, competition metrics, and historical trends. Use when you need category-based keyword research for SEO or PPC planning.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag` | string | No | User-defined task identifier for tracking purposes. Maximum 255 characters |
| `sort_by` | string | No | Sort order for results. Accepted values: 'search_volume' (default) or 'relevance' |
| `pingback_url` | string | No | URL to receive GET ping notification when task completes. Use for lightweight completion notifications |
| `postback_url` | string | No | URL to receive POST callback with task results when completed. Use for webhook delivery of results |
| `category_code` | integer | Yes | Product or service category identifier from Google Ads. Required to specify which category to retrieve keyword suggestions for |
| `language_code` | string | No | Language code for keyword targeting (e.g., 'en', 'es'). Use language_code or language_name (only one at a time) |
| `language_name` | string | No | Full name of the target language (e.g., 'English', 'Spanish'). Use language_code or language_name (only one at a time) |
| `location_code` | integer | No | Geographic location identifier for targeting. Use location_code, location_name, or location_coordinate (only one at a time) |
| `location_name` | string | No | Full name of target location (e.g., 'United States', 'New York'). Use location_code, location_name, or location_coordinate (only one at a time) |
| `search_partners` | boolean | No | Whether to include data from Google search partner network sites in addition to Google.com. Default is false |
| `keywords_negative` | array | No | Array of negative keywords to exclude from results. Maximum 200 terms allowed. Keywords containing these terms will be filtered out |
| `location_coordinate` | string | No | GPS coordinates with radius for location targeting. Format: 'latitude,longitude,radius_km' (e.g., '29.6821525,-82.4098881,100'). Use location_code, location_name, or location_coordinate (only one at a time) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Post On Page Summary

**Slug:** `DATAFORSEO_POST_ON_PAGE_SUMMARY`

Tool to retrieve On Page Summary information for multiple scanned websites via POST request. Use when you need to get overall website statistics and drill down into on-page SEO issues for one or more task IDs in a single request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task items to retrieve On Page Summary results. Each task requires an id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resend Appendix Webhooks

**Slug:** `DATAFORSEO_RESEND_APPENDIX_WEBHOOKS`

Tool to resend webhooks (pingbacks and postbacks) for completed tasks. Use when you need to re-trigger webhook notifications for up to 100 tasks. Your account will not be double-charged for resending webhooks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tasks` | array | Yes | Array of task identifiers to resend webhooks for. Maximum 100 tasks per request. Your account will not be double-charged for resending webhooks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
