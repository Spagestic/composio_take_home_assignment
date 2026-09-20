# Pinterest

Pinterest is a visual discovery platform for finding ideas like recipes, home and style inspiration, and more.

- **Category:** social media accounts
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 26
- **Triggers:** 0
- **Slug:** `PINTEREST`
- **Version:** 20260915_00

## Tools

### Create Board

**Slug:** `PINTEREST_CREATE_BOARD`

Create a public or secret Pinterest board. Secret creation requires boards:write_secret.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Board name (1-50 characters). |
| `privacy` | string ("PUBLIC" | "SECRET") | No | PUBLIC or SECRET. PROTECTED and ad-only boards are outside this Organic toolkit. |
| `description` | string | No | Optional board description. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Board Section

**Slug:** `PINTEREST_CREATE_BOARD_SECTION`

Create a named section within a Pinterest board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Section name (1-180 characters). |
| `board_id` | string | Yes | Numeric Pinterest board ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Pin

**Slug:** `PINTEREST_CREATE_PIN`

Create an image, carousel, or registered-video Pin on a Pinterest board. Production execution requires Pinterest Standard access: Trial apps are explicitly blocked from creating Pins on api.pinterest.com and must use a separately authenticated API Sandbox connection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `link` | string | No | Optional destination URL, up to 2048 characters. |
| `title` | string | No | Optional Pin title, up to 100 characters. |
| `alt_text` | string | No | Optional accessible description, up to 500 characters. |
| `board_id` | string | Yes | Numeric ID of the destination Pinterest board. |
| `description` | string | No | Optional Pin description, up to 800 characters. |
| `media_source` | string | Yes | Official image URL, image Base64, carousel URL, carousel Base64, or registered-video source. The closed-beta pin_url source is not supported. |
| `dominant_color` | string | No | Optional dominant hexadecimal color, for example #6E7874. |
| `board_section_id` | string | No | Optional numeric ID of a section within the destination board. |
| `ai_disclosure_values` | array | No | Optional creator declarations: AI_MODIFIED and/or SYNTHETIC_PERFORMER. Pinterest receives these under ai_disclosures.values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Board

**Slug:** `PINTEREST_DELETE_BOARD`

Permanently delete a Pinterest board by ID, including a secret board when authorized.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | Numeric ID of the board to permanently delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Board Section

**Slug:** `PINTEREST_DELETE_BOARD_SECTION`

Permanently delete a section from a Pinterest board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | Numeric Pinterest board ID. |
| `section_id` | string | Yes | Numeric ID of the section to permanently delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Pin

**Slug:** `PINTEREST_DELETE_PIN`

Permanently delete a Pinterest Pin by ID. Production Pin writes require Pinterest Standard access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pin_id` | string | Yes | Numeric ID of the Pin to permanently delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account Analytics

**Slug:** `PINTEREST_GET_ACCOUNT_ANALYTICS`

Get aggregate Pinterest account analytics over a UTC date range, with optional metric, content, platform, source, and split filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string ("ALL" | "YOUR_PINS" | "OTHER_PINS") | No | Include ALL activity, YOUR_PINS, or OTHER_PINS. |
| `app_type` | string ("ALL" | "MOBILE" | "TABLET" | "WEB") | No | App or device filter: ALL, MOBILE, TABLET, or WEB. |
| `end_date` | string | Yes | UTC report end date in YYYY-MM-DD format. It must be on or after start_date and no more than 90 days after it. |
| `pin_format` | string ("ALL" | "ORGANIC_IMAGE" | "ORGANIC_PRODUCT" | "ORGANIC_VIDEO" | "ADS_STANDARD" | "ADS_PRODUCT" | "ADS_VIDEO" | "ADS_IDEA") | No | Pin format to include, or ALL for every supported format. |
| `start_date` | string | Yes | UTC report start date in YYYY-MM-DD format. Pinterest allows dates up to 90 days before today. |
| `split_field` | string ("NO_SPLIT" | "APP_TYPE" | "OWNED_CONTENT" | "SOURCE" | "PIN_FORMAT") | No | Group results by APP_TYPE, OWNED_CONTENT, SOURCE, or PIN_FORMAT. NO_SPLIT returns one aggregate bucket. |
| `content_type` | string ("ALL" | "PAID" | "ORGANIC") | No | Include ALL, PAID, or ORGANIC account activity. |
| `metric_types` | array | No | Metrics to return. Omit to request Pinterest's default metric set; multiple values are sent as one comma-separated query value. |
| `claimed_content` | string ("OTHER" | "CLAIMED" | "BOTH") | No | Filter Pins by claimed-domain relationship: OTHER, CLAIMED, or BOTH. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Board

**Slug:** `PINTEREST_GET_BOARD`

Get one Pinterest board by ID, including secret boards available to the connected account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | Numeric Pinterest board ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inspiration Trends

**Slug:** `PINTEREST_GET_INSPIRATION_TRENDS`

Get Pinterest editorial trend articles or featured trend topics for a supported region.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `region` | string ("US" | "GB+IE" | "CA") | Yes | Pinterest Trends market: US, GB+IE, or CA. |
| `interest` | string ("ALL" | "ANIMALS" | "ARCHITECTURE" | "ART" | "BEAUTY" | "DIY_AND_CRAFTS" | "EDUCATION" | "EVENT_PLANNING" | "FASHION" | "FOOD_AND_DRINKS" | "GARDENING" | "HEALTH" | "HOME_DECOR" | "PARENTING" | "TRAVEL" | "WEDDING") | No | Interest category for featured_topics. Leave as ALL when trend_source is editorial_articles. |
| `trend_source` | string ("editorial_articles" | "featured_topics") | Yes | Inspiration feed to return: editorial_articles for published trend articles or featured_topics for topic groups by interest. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Keyword Trends

**Slug:** `PINTEREST_GET_KEYWORD_TRENDS`

Find Pinterest's top growing, monthly, yearly, or seasonal search keywords for a supported market, optionally filtered to an audience or search terms.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ages` | array | No | Optional audience age ranges used to restrict the trends. |
| `limit` | integer | No | Maximum ranked keyword trends to return (1-50). |
| `region` | string ("US" | "CA" | "DE" | "FR" | "ES" | "IT" | "DE+AT+CH" | "GB+IE" | "IT+ES+PT+GR+MT" | "PL+RO+HU+SK+CZ" | "SE+DK+FI+NO" | "NL+BE+LU" | "AR" | "BR" | "CO" | "MX" | "MX+AR+CO+CL" | "AU+NZ") | Yes | Pinterest Trends market. Supported values include individual country codes such as US and grouped markets such as GB+IE. |
| `genders` | array | No | Optional audience gender groups. Unknown includes unspecified or custom profile settings. |
| `interests` | array | No | Optional Pinterest interest categories used to restrict the audience. |
| `trend_type` | string ("growing" | "monthly" | "yearly" | "seasonal") | Yes | Ranking timeframe: growing uses quarterly growth, monthly uses last-month volume, yearly uses last-year volume, and seasonal uses recurring growth. |
| `include_keywords` | array | No | Optional search terms; returned trends must include at least one term. Each term must contain 1-100 characters, with at most 50 terms. |
| `include_demographics` | boolean | No | Include age and gender search-volume distributions for each keyword. |
| `normalize_against_group` | boolean | No | When true, normalize all time series against the audience group's shared peak so relative search volume can be compared between keywords. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Media

**Slug:** `PINTEREST_GET_MEDIA`

Get a registered Pinterest video's current upload or processing status by media ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `media_id` | string | Yes | Numeric Pinterest media registration ID returned by REGISTER_MEDIA. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pin

**Slug:** `PINTEREST_GET_PIN`

Get one public or secret Pinterest Pin by ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pin_id` | string | Yes | Numeric Pinterest Pin ID. |
| `include_metrics` | boolean | No | Include available 90-day and lifetime Pin metrics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pin Analytics

**Slug:** `PINTEREST_GET_PIN_ANALYTICS`

Get daily, summary, and lifetime analytics for one Pinterest Pin over a date range. Recent daily values may remain in PROCESSING status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pin_id` | string | Yes | Numeric Pinterest Pin ID. |
| `app_type` | string ("ALL" | "MOBILE" | "TABLET" | "WEB") | No | App or device data to include: ALL, MOBILE, TABLET, or WEB. |
| `end_date` | string | Yes | UTC report end date in YYYY-MM-DD format, at most 90 days after start_date. |
| `start_date` | string | Yes | UTC report start date in YYYY-MM-DD format, at most 90 days before today. |
| `metric_types` | array | Yes | Pin metrics to return. Values are sent to Pinterest as one comma-separated query parameter. |
| `split_by_app_type` | boolean | No | Split analytics into app-type buckets instead of one aggregate bucket. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Trends

**Slug:** `PINTEREST_GET_PRODUCT_TRENDS`

Get currently growing shopping categories or detailed trend metrics for specified leaf product categories.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ages` | array | No | Optional trending-mode age buckets. |
| `mode` | string ("trending" | "details") | Yes | Use trending to discover growing shopping categories, or details to inspect specified leaf product categories. For details, reuse the product_category name returned by trending, not its numeric ID. |
| `region` | string ("US" | "GB+IE" | "CA") | Yes | Market to analyze: US, GB+IE, or CA. |
| `genders` | array | No | Optional trending-mode gender filters. |
| `verticals` | array | No | Optional trending-mode vertical filters: FASHION, HOME_DECOR, or BEAUTY. |
| `lookback_days` | integer ("90" | "180" | "365" | "730") | No | Details-mode historical window: 90, 180, 365, or 730 days. |
| `engagement_type` | string ("ENGAGEMENT" | "OUTBOUND_CLICK" | "SAVE") | No | Metric to analyze: ENGAGEMENT, OUTBOUND_CLICK, or SAVE. |
| `product_categories` | array | No | Required when mode is details: 1-20 leaf product categories to inspect. Pass each trending result's product_category string, such as BAGS_AND_LUGGAGE; pinterest_product_category_id numeric values are not accepted. Omit in trending mode. Broad verticals such as BEAUTY are not valid product categories. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Profile

**Slug:** `PINTEREST_GET_PROFILE`

Get the connected Pinterest account's profile and content counts.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Top Pins

**Slug:** `PINTEREST_GET_TOP_PINS`

Return the connected account's top regular or video Pinterest Pins ranked by a route-appropriate analytics metric.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort_by` | string | Yes | Metric used to rank Pins. For pin_kind=all: ENGAGEMENT, SAVE, IMPRESSION, OUTBOUND_CLICK, or PIN_CLICK. For pin_kind=video: SAVE, IMPRESSION, OUTBOUND_CLICK, VIDEO_MRC_VIEW, VIDEO_AVG_WATCH_TIME, VIDEO_V50_WATCH_TIME, QUARTILE_95_PERCENT_VIEW, VIDEO_10S_VIEW, or VIDEO_START. |
| `end_date` | string | Yes | UTC report end date in YYYY-MM-DD format. It must be on or after start_date and no more than 90 days after it. |
| `num_pins` | integer | No | Number of ranked Pins to return (1-50). |
| `pin_kind` | string ("all" | "video") | No | Ranking route to use: all for top Pins or video for top video Pins. The selected route determines the valid sort and metric values. |
| `start_date` | string | Yes | UTC report start date in YYYY-MM-DD format. It cannot be more than 90 days before today. |
| `content_type` | string ("ALL" | "PAID" | "ORGANIC") | No | Filter analytics to ALL, PAID, or ORGANIC content. |
| `metric_types` | array | No | Optional metrics to include for each Pin. pin_kind=all accepts ENGAGEMENT, ENGAGEMENT_RATE, IMPRESSION, OUTBOUND_CLICK, OUTBOUND_CLICK_RATE, PIN_CLICK, PIN_CLICK_RATE, SAVE, and SAVE_RATE. pin_kind=video accepts IMPRESSION, SAVE, OUTBOUND_CLICK, VIDEO_MRC_VIEW, VIDEO_AVG_WATCH_TIME, VIDEO_V50_WATCH_TIME, QUARTILE_95_PERCENT_VIEW, VIDEO_10S_VIEW, and VIDEO_START. Values are sent as one comma-separated query value. |
| `claimed_content` | string ("OTHER" | "CLAIMED" | "BOTH") | No | Filter Pins by claimed-domain ownership: OTHER, CLAIMED, or BOTH. |
| `created_in_last_30_days` | boolean | No | When true, restrict results to Pins created in the last 30 days. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Website Verification

**Slug:** `PINTEREST_GET_WEBSITE_VERIFICATION`

Get the connected account's website-claim verification methods and material. The response contains sensitive verification values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_file_content` | boolean | No | Include the potentially large HTML verification file content; false returns only method metadata and filename. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Boards

**Slug:** `PINTEREST_LIST_BOARDS`

List the connected account's public, protected, or secret Pinterest boards one page at a time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `privacy` | string ("ALL" | "PUBLIC" | "PROTECTED" | "SECRET" | "PUBLIC_AND_SECRET") | No | Board privacy filter: ALL, PUBLIC, PROTECTED, SECRET, or PUBLIC_AND_SECRET. |
| `bookmark` | string | No | Opaque bookmark returned by the previous page. Omit for the first page. |
| `page_size` | integer | No | Maximum boards to return (1-250). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Board Sections

**Slug:** `PINTEREST_LIST_BOARD_SECTIONS`

List sections within a Pinterest board one page at a time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | Yes | Numeric Pinterest board ID. |
| `bookmark` | string | No | Opaque bookmark returned by the previous page. Omit for the first page. |
| `page_size` | integer | No | Maximum sections to return (1-250). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pins

**Slug:** `PINTEREST_LIST_PINS`

List account Pins, Pins on a board, or Pins in a board section using one parameterized read tool. Account-level listing may omit secret-board Pins; provide board_id for reliable secret-board inventory.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `board_id` | string | No | Board ID to list from; omit for the account-level Pin list. |
| `bookmark` | string | No | Opaque bookmark returned by the previous page. Omit for the first page. |
| `page_size` | integer | No | Maximum Pins to return (1-250). |
| `section_id` | string | No | Section ID to list from; requires board_id. |
| `creative_types` | array | No | Optional Pin creative-type filters for account or board listing. Pinterest does not support this filter for section listing. |
| `include_metrics` | boolean | No | Include available 90-day and lifetime Pin metrics for account or board listing. Pinterest does not support metrics for section listing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Profile Resources

**Slug:** `PINTEREST_LIST_PROFILE_RESOURCES`

List followers, followed users, followed boards, followed interests, claimed websites, or linked businesses for the connected Pinterest profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `bookmark` | string | No | Opaque bookmark returned by the previous page. Ignored for linked_businesses. |
| `username` | string | No | Pinterest username required for followed_interests. Use Get Profile to discover the connected account's username. |
| `feed_type` | string ("ALL" | "RANKED" | "CREATOR_ONLY" | "RANKED_CREATOR_ONLY") | No | For following_users, select ALL, RANKED, CREATOR_ONLY, or RANKED_CREATOR_ONLY followees. |
| `page_size` | integer | No | Maximum resources to return (1-250). Ignored for linked_businesses, which is not paginated. |
| `resource_type` | string ("followers" | "following_users" | "following_boards" | "followed_interests" | "websites" | "linked_businesses") | Yes | Profile resource to list: followers, following_users, following_boards, followed_interests, websites, or linked_businesses. |
| `explicit_following` | boolean | No | For following_users or following_boards, return only explicitly followed resources when true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Register Media

**Slug:** `PINTEREST_REGISTER_MEDIA`

Register a Pinterest video upload and return the media ID, upload URL, and all multipart parameters required to upload the video before creating a video Pin. This action registers the upload but does not upload video bytes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `media_type` | string | No | Pinterest currently supports only video media registration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Own Content

**Slug:** `PINTEREST_SEARCH_OWN_CONTENT`

Search the connected account's own boards or Pins, including secret content when authorized. This does not search Pinterest's global partner Pin index.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Text to search in the connected account's content. Required when resource_type is pins; omit when browsing boards without a search term. |
| `bookmark` | string | No | Opaque bookmark returned by the previous page. Omit for the first page. |
| `page_size` | integer | No | Maximum board results to return (1-250). Pinterest exposes no page-size parameter for Pin search, so this value is ignored when resource_type is pins. |
| `resource_type` | string ("boards" | "pins") | Yes | Content type to search: boards or pins. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Board

**Slug:** `PINTEREST_UPDATE_BOARD`

Update a board's name, description, or privacy. Provide at least one update field. Secret-board writes require boards:write_secret.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Replacement board name (1-50 characters). |
| `privacy` | string ("PUBLIC" | "SECRET") | No | Replacement privacy: PUBLIC or SECRET. |
| `board_id` | string | Yes | Numeric Pinterest board ID. |
| `description` | string | No | Replacement board description. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Board Section

**Slug:** `PINTEREST_UPDATE_BOARD_SECTION`

Rename a section within a Pinterest board.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Replacement section name (1-180 characters). |
| `board_id` | string | Yes | Numeric Pinterest board ID. |
| `section_id` | string | Yes | Numeric Pinterest section ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Pin

**Slug:** `PINTEREST_UPDATE_PIN`

Update content on a Pin owned by the connected account or move it to another board or section. Provide at least one update field. Production Pin writes require Pinterest Standard access. This Organic action does not support Business Access ad-account delegation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `link` | string | No | Replacement destination URL, up to 2048 characters. Pass null to clear it. |
| `title` | string | No | Replacement Pin title, up to 100 characters. Pass null to clear it. |
| `pin_id` | string | Yes | Numeric Pinterest Pin ID. |
| `alt_text` | string | No | Replacement accessible text, up to 500 characters. Pass null to clear it. |
| `board_id` | string | No | Numeric destination board ID when moving the Pin. |
| `description` | string | No | Replacement Pin description, up to 800 characters. Pass null to clear it. |
| `board_section_id` | string | No | Numeric destination section ID when moving the Pin. Pass null to remove the Pin from its current section. |
| `ai_disclosure_values` | array | No | Replacement creator AI disclosures. Pass an empty list to clear the declarations; Pinterest receives this as ai_disclosures.values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
