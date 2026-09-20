# Linkedin Ads

LinkedIn Marketing and Advertising API for managing ad campaigns, analytics, and organization social content

- **Category:** marketing
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 28
- **Triggers:** 0
- **Slug:** `LINKEDIN_ADS`
- **Version:** 20260826_00

## Tools

### Create Ad Account

**Slug:** `LINKEDIN_ADS_CREATE_AD_ACCOUNT`

Tool to create a new LinkedIn ad account for campaign management. Use when setting up advertising infrastructure for an organization or person. The account type must be BUSINESS (ENTERPRISE is reserved for LinkedIn internal use). The Ad Account ID is returned in the response on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A label for the account (required) |
| `test` | boolean | No | Flag showing whether this account is marked as a test account. An account can be marked as test only during creation. This is an immutable field. Test accounts are useful for development and demos - ads are not served and not billed. |
| `type` | string ("BUSINESS" | "ENTERPRISE") | Yes | Account type. BUSINESS is the only value allowed when creating accounts through the API. ENTERPRISE is reserved for accounts created by LinkedIn's internal systems. |
| `currency` | string | No | The 3 character standard currency code such as USD for United States Dollar. Default is USD. |
| `reference` | string | Yes | The entity URN on whose behalf the account is advertised. Must be in the format urn:li:person:{id} or urn:li:organization:{id} |
| `notifiedOnEndOfCampaign` | boolean | No | Indicates if the campaign contact is notified when an associated campaign has been completed |
| `notifiedOnCreativeApproval` | boolean | No | Indicates if the creative contact is notified when a creative has been reviewed and approved |
| `notifiedOnCreativeRejection` | boolean | No | Indicates if the creative contact is notified when a creative has been rejected due to content |
| `notifiedOnNewFeaturesEnabled` | boolean | No | Indicates if the account owner is notified about new Campaign Manager features |
| `notifiedOnCampaignOptimization` | boolean | No | Indicates if the campaign contact is notified about campaign optimization opportunities |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Lead Form

**Slug:** `LINKEDIN_ADS_CREATE_LEAD_FORM`

Tool to create a new LinkedIn lead generation form for ads. Use when you need to create forms to collect leads from LinkedIn ads campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the lead form for internal tracking |
| `owner` | object | Yes | Owner of the form (either sponsoredAccount or organization) |
| `state` | string ("DRAFT" | "PUBLISHED" | "ARCHIVED") | Yes | Initial state of the form |
| `content` | object | Yes | Form content displayed to viewers |
| `hiddenFields` | array | No | Hidden tracking fields (max 20 fields) |
| `creationLocale` | object | Yes | Locale for the form |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ad Account

**Slug:** `LINKEDIN_ADS_GET_AD_ACCOUNT`

Tool to retrieve a specific LinkedIn Ad Account by ID. Returns detailed account information including name, status, currency, notification settings, and serving statuses. Use when you need to fetch details about a specific ad account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ad_account_id` | integer | Yes | The unique LinkedIn Ad Account ID to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ad Analytics

**Slug:** `LINKEDIN_ADS_GET_AD_ANALYTICS`

Tool to retrieve LinkedIn ad analytics and reporting metrics for campaigns, creatives, and accounts. Use when you need performance data such as impressions, clicks, costs, conversions, and engagement metrics. Supports filtering by accounts, campaigns, or campaign groups with customizable date ranges and pivot dimensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("analytics" | "statistics") | No | Query type - use 'analytics' for single pivot grouping |
| `pivot` | string ("ACCOUNT" | "CAMPAIGN" | "CAMPAIGN_GROUP" | "CREATIVE" | "COMPANY" | "SHARE" | "CONVERSION" | "SERVING_LOCATION" | "CARD_INDEX" | "MEMBER_COMPANY_SIZE" | "MEMBER_INDUSTRY" | "MEMBER_SENIORITY" | "MEMBER_JOB_TITLE" | "MEMBER_JOB_FUNCTION" | "MEMBER_COUNTRY_V2" | "MEMBER_REGION_V2" | "MEMBER_COMPANY" | "MEMBER_COUNTY" | "PLACEMENT_NAME" | "IMPRESSION_DEVICE_TYPE") | No | Pivot dimension for grouping analytics results. |
| `fields` | string | No | Comma-separated list of metric fields to retrieve. If not specified, only impressions and clicks are returned. Example: 'impressions,clicks,costInLocalCurrency,landingPageClicks' |
| `accounts` | array | No | List of account URNs to filter by (e.g., ['urn:li:sponsoredAccount:525410360']) |
| `campaigns` | array | No | List of campaign URNs to filter by (e.g., ['urn:li:sponsoredCampaign:1234567']) |
| `creatives` | array | No | List of creative URNs to filter by |
| `dateRange` | object | Yes | Date range for analytics data. Start date is required, end date is optional |
| `campaignGroups` | array | No | List of campaign group URNs to filter by |
| `timeGranularity` | string ("ALL" | "DAILY" | "MONTHLY" | "YEARLY") | No | Time granularity for analytics results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Audience Counts

**Slug:** `LINKEDIN_ADS_GET_AUDIENCE_COUNTS`

Get estimated audience size for given targeting criteria on LinkedIn Ads. Use when you need to forecast how many LinkedIn members match your campaign targeting parameters before creating ads. Minimum audience size of 300 required to run campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `targeting_criteria` | string | Yes | Targeting criteria string in LinkedIn's encoded format. Must be a URL-encoded string following the pattern: (include:(and:List((or:(urn%3Ali%3AadTargetingFacet%3A{facet_type}:List({encoded_values}))))))  Example for location and skills targeting: (include:(and:List((or:(urn%3Ali%3AadTargetingFacet%3Alocations:List(urn%3Ali%3Ageo%3A102221843))),(or:(urn%3Ali%3AadTargetingFacet%3Askills:List(urn%3Ali%3Askill%3A17))))))  Common facet types: locations (urn:li:geo:ID), skills (urn:li:skill:ID), industries (urn:li:industry:ID), jobFunctions (urn:li:function:ID), seniorities (urn:li:seniority:ID). URNs must be URL-encoded (colons as %3A). Supports include/exclude logic with and/or operators. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Campaign Group

**Slug:** `LINKEDIN_ADS_GET_CAMPAIGN_GROUP`

Tool to retrieve a specific LinkedIn Ads campaign group by ID. Use when you need detailed information about a campaign group including its budget, schedule, status, and serving conditions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ad_account_id` | string | Yes | The LinkedIn ad account ID |
| `ad_campaign_group_id` | string | Yes | The campaign group ID to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get lead form by ID

**Slug:** `LINKEDIN_ADS_GET_LEAD_FORM`

Tool to retrieve a specific LinkedIn lead form by its ID. Use when you need to fetch details about a lead form including its questions, legal info, and configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_id` | string | Yes | The unique identifier of the LinkedIn lead form to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization follower count

**Slug:** `LINKEDIN_ADS_GET_NETWORK_SIZE`

Tool to retrieve follower count for a LinkedIn organization. Use when you need to get the number of followers for a company or organization page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `edge_type` | string ("COMPANY_FOLLOWED_BY_MEMBER") | No | Edge type for the network size query. Use COMPANY_FOLLOWED_BY_MEMBER to get follower count. |
| `organization_urn` | string | Yes | Organization URN in format 'urn:li:organization:{id}'. Example: 'urn:li:organization:1337' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization access control list

**Slug:** `LINKEDIN_ADS_GET_ORGANIZATION_ACLS`

Tool to retrieve organization access control list showing who has admin or poster rights for organizations. Use when you need to check which members have specific roles (like ADMINISTRATOR or DIRECT_SPONSORED_CONTENT_POSTER) for an organization, or to find all organizations where the authenticated user has access control roles.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("organization" | "roleAssignee") | Yes | Query type for the search. Use 'organization' to find ACLs for a specific organization, or 'roleAssignee' to find all organizations where the authenticated user has access control roles. |
| `role` | string ("ADMINISTRATOR" | "DIRECT_SPONSORED_CONTENT_POSTER" | "RECRUITING_POSTER" | "LEAD_CAPTURE_ADMINISTRATOR" | "LEAD_GEN_FORMS_MANAGER" | "ANALYST" | "CURATOR" | "CONTENT_ADMINISTRATOR") | No | Organization role types that define access privileges. |
| `count` | integer | No | Maximum number of results to return per page. Default is 10. |
| `start` | integer | No | Starting index for pagination. Default is 0. |
| `state` | string ("APPROVED" | "REJECTED" | "REQUESTED" | "REVOKED") | No | Role state values. |
| `organization` | string | No | Organization URN to filter results. Required when q='organization'. Must be in the format 'urn:li:organization:{id}'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization page statistics

**Slug:** `LINKEDIN_ADS_GET_ORGANIZATION_PAGE_STATISTICS`

Tool to retrieve page view and click statistics for a LinkedIn organization page. Use when you need to analyze organization page engagement metrics, either for lifetime or specific time periods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organization` | string | Yes | Organization URN in the format urn:li:organization:{id}. You can get the organization ID from the LinkedIn page URL. |
| `timeIntervals` | object | No | Time intervals configuration for statistics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization follower statistics

**Slug:** `LINKEDIN_ADS_GET_ORG_FOLLOWER_STATISTICS`

Tool to retrieve follower growth statistics for a LinkedIn organization. Use when you need follower demographics (industry, seniority, location, function) or time-bound follower gains. Omit timeIntervals for lifetime demographic statistics; include timeIntervals for time-series follower growth data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `timeIntervals` | object | No | Time intervals configuration for statistics. |
| `organizationalEntity` | string | Yes | The organization identifier in URN format (e.g., urn:li:organization:1234). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get organization share statistics

**Slug:** `LINKEDIN_ADS_GET_ORG_SHARE_STATISTICS`

Tool to retrieve share and engagement statistics for an organization's content on LinkedIn. Use when you need organic metrics like impressions, clicks, likes, comments, and shares for an organization's posts. Returns lifetime statistics by default or time-bound statistics when a time range is specified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `shares` | array | No | Filter results to specific share URNs. When specified, returns statistics for individual shares. Time-bound statistics are not supported when filtering by shares. Each share URN must be of the format 'urn:li:share:{id}'. |
| `ugcPosts` | array | No | Filter results to specific UGC Post URNs. When specified, returns statistics for individual posts. Time-bound statistics are not supported when filtering by UGC posts. Each UGC Post URN must be of the format 'urn:li:ugcPost:{id}'. |
| `timeIntervals` | object | No | Time intervals configuration for time-bound statistics. |
| `organizationalEntity` | string | Yes | The organization identifier URN. Must be of the format 'urn:li:organization:{id}' or 'urn:li:organizationBrand:{id}'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ad Supply Forecasts

**Slug:** `LINKEDIN_ADS_GET_SUPPLY_FORECASTS`

Retrieve supply forecasts for LinkedIn ad inventory based on targeting criteria, budget, and bid settings. Provides forecasts for impressions, clicks, spending, reach, and other metrics with different time granularities (daily, 7-day, 30-day, custom). Use when planning ad campaigns to estimate performance and budget requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | Yes | The sponsored account URN for which the supply forecast is requested |
| `costCap` | string | No | Cost cap as decimal string. Required only for optimization target type of cost cap |
| `campaign` | string | No | The sponsored campaign URN if available, used to provide better forecasts |
| `timeRange` | object | Yes | The time range for the forecast with start and end timestamps |
| `targetCost` | string | No | Target cost as decimal string. Required only for optimization target type of target cost |
| `dailyBudget` | object | No | Represents a monetary amount with currency. |
| `totalBudget` | object | No | Represents a monetary amount with currency. |
| `campaignType` | string ("SPONSORED_UPDATES" | "SPONSORED_INMAILS" | "DYNAMIC") | Yes | The campaign type. For connected television campaigns, must be SPONSORED_UPDATES |
| `competingBid` | object | No | Bid configuration for manual bidding. |
| `creativeType` | string | No | Creative type if available, used to provide better forecasts |
| `objectiveType` | string | No | Campaign objective type if available, used to provide better forecasts. Examples: BRAND_AWARENESS, WEBSITE_VISITS, ENGAGEMENT, VIDEO_VIEWS, LEAD_GENERATION, WEBSITE_CONVERSIONS, JOB_APPLICANTS |
| `targetingCriteria` | string | Yes | URL-encoded targeting criteria string in RestLi format. Specifies boolean expression (AND/OR) for including/excluding targeting facets. Example: (include:(and:List((or:(urn%3Ali%3AadTargetingFacet%3Alocations:List(urn%3Ali%3Ageo%3A103644278)))))) |
| `optimizationTarget` | string ("NONE" | "LEAD_GENERATION" | "LANDING_PAGE_CLICKS" | "VIDEO_VIEW" | "ENGAGEMENT" | "CONVERSIONS") | No | Valid optimization target types for LinkedIn Ads. |
| `enableAudienceNetwork` | boolean | No | Include LinkedIn Audience Network inventory into campaign performance forecast. Must be true for connected television campaigns |
| `connectedTelevisionOnly` | boolean | No | Generate forecasting for connected television campaigns. Applicable only from version 202408 and above |
| `enableAudienceExpansion` | boolean | No | Include Audience Expansion inventory into campaign performance forecast |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Targeting Entities

**Slug:** `LINKEDIN_ADS_GET_TARGETING_ENTITIES`

Tool to retrieve targeting entities for LinkedIn Ads campaigns. Use when you need to discover available targeting options (industries, locations, job titles, companies, skills, etc.) for ad targeting. Supports multiple query modes: retrieve all entities for a facet, search by text, find similar entities, or get metadata for specific URNs. Returns entity URNs and names that can be used for campaign targeting criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("adTargetingFacet" | "typeahead" | "urns" | "similarEntities") | Yes | Query type to use. 'adTargetingFacet' returns all entities for a facet, 'typeahead' searches entities by query text, 'urns' retrieves entities by URNs, 'similarEntities' finds similar entities. |
| `urns` | array | No | List of URNs to retrieve metadata for. Required when q='urns'. Example: ['urn:li:fieldOfStudy:100990', 'urn:li:organization:1035'] |
| `facet` | string | No | Facet URN to query (e.g., 'urn:li:adTargetingFacet:locations', 'urn:li:adTargetingFacet:industries'). Required for adTargetingFacet, typeahead, and similarEntities query types. |
| `query` | string | No | Search query text for typeahead searches. Required when q='typeahead'. Partial text used for matching targeting entities. |
| `entities` | array | No | List of entity URNs to find similar entities for. Required when q='similarEntities'. Example: ['urn:li:organization:1003'] |
| `queryVersion` | string | No | Query version to use. Use 'QUERY_USES_URNS' for URN-based queries. Defaults to 'QUERY_USES_URNS' when not specified. |
| `locale_country` | string | No | Uppercase two-letter country code as defined by ISO-3166 (e.g., 'US', 'GB', 'CA'). Used for localized entity names. Defaults to 'US' if not provided. |
| `locale_language` | string | No | Lowercase two-letter language code as defined by ISO-639 (e.g., 'en', 'fr', 'es'). Used for localized entity names. Defaults to 'en' if not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Targeting Facets

**Slug:** `LINKEDIN_ADS_GET_TARGETING_FACETS`

Tool to retrieve available ad targeting facets including industries, locations, seniorities, job functions, skills, and more. Use when you need to discover which targeting categories are available for LinkedIn ad campaigns before fetching specific targeting entities.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Conversion Rules

**Slug:** `LINKEDIN_ADS_LIST_CONVERSION_RULES`

Tool to list all conversion rules for a LinkedIn ad account. Use when you need to retrieve conversion tracking rules configured for an ad account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | Yes | Sponsored account URN in the format 'urn:li:sponsoredAccount:{accountId}'. This identifies the ad account whose conversion rules you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DMP Segments

**Slug:** `LINKEDIN_ADS_LIST_DMP_SEGMENTS`

Tool to list DMP (Data Management Platform) segments for LinkedIn ad accounts. Use to retrieve segments by account, fetch multiple segments by IDs, or search segments with pagination. DMP segments contain audience data for ad targeting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Query type for filtering segments. Use "account" to find segments by account. |
| `ids` | array | No | List of segment IDs to retrieve specific segments |
| `count` | integer | No | Number of results per page for pagination when using q=account (max 100) |
| `start` | integer | No | Starting index for pagination when using q=account |
| `account` | string | No | Sponsored account URN to filter segments by. Format: urn:li:sponsoredAccount:{id} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Lead Forms

**Slug:** `LINKEDIN_ADS_LIST_LEAD_FORMS`

Tool to list LinkedIn lead forms for an organization or by specific IDs. Use when you need to retrieve lead forms owned by an organization or sponsored account, or fetch specific forms by their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Query type. Set to 'owner' to find forms by owner. Required when using owner parameter. |
| `ids` | array | No | List of lead form IDs to retrieve specific forms |
| `count` | integer | No | Number of results to display per page. Used with q=owner for pagination. |
| `start` | integer | No | Index of the form to begin results at. Indexes start at 0. Used with q=owner for pagination. |
| `owner_organization` | string | No | Organization URN to filter lead forms (e.g., urn:li:organization:123456). Use with q=owner. |
| `owner_sponsored_account` | string | No | Sponsored Account URN to filter lead forms (e.g., urn:li:sponsoredAccount:123456). Use with q=owner. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Organizations

**Slug:** `LINKEDIN_ADS_LIST_ORGANIZATIONS`

Tool to search and list LinkedIn organizations by IDs, vanity name, or parent organization. Use when you need to retrieve organization information, company pages, or school profiles from LinkedIn. Supports batch lookup by IDs or search by vanity name (e.g., 'linkedin') or parent organization URN.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("vanityName" | "parentOrganization") | No | Query type for organization lookup. |
| `ids` | array | No | List of organization IDs to retrieve. Use this to batch lookup multiple organizations by their numeric IDs. |
| `parent` | string | No | Parent organization URN. Required when q=parentOrganization. Format: urn:li:organization:{id} |
| `page_size` | integer | No | Number of results per page. |
| `page_token` | string | No | Token for cursor-based pagination. |
| `vanityName` | string | No | Vanity name to look up. Required when q=vanityName. Example: 'linkedin' for LinkedIn company page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List LinkedIn posts

**Slug:** `LINKEDIN_ADS_LIST_POSTS`

Tool to list LinkedIn posts by author or retrieve multiple posts by IDs. Use when you need to fetch posts for a specific person/organization or retrieve specific posts by their URNs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("author" | "dscAdAccount") | No | Query type for listing posts. |
| `ids` | array | No | List of post URNs to retrieve specific posts. Format: 'urn:li:share:{id}' or 'urn:li:ugcPost:{id}'. Example: ['urn:li:share:6844785523593134080', 'urn:li:ugcPost:7428263313739988992']. Use this to retrieve multiple specific posts by their URNs. |
| `count` | integer | No | Number of results to return per page. Default is 10, maximum is 100. |
| `start` | integer | No | The index of the first item for pagination. Default is 0. |
| `author` | string | No | Person or Organization URN to filter posts by author. Format: 'urn:li:person:{id}' or 'urn:li:organization:{id}'. Example: 'urn:li:organization:2414183'. Required when q='author'. |
| `sort_by` | string ("LAST_MODIFIED" | "CREATED") | No | Sort field for posts. |
| `linkedin_version` | string | No | LinkedIn API version in YYYYMM format. Defaults to 202602. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Lookup organizations

**Slug:** `LINKEDIN_ADS_LOOKUP_ORGANIZATIONS`

Tool to batch lookup organization details by IDs without requiring admin access. Use when you need to retrieve basic information about LinkedIn organizations like name, logo, locations, and website.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | List of organization IDs to retrieve. Each ID should be a numeric organization identifier (e.g., [90966477, 79988552]). Does not require admin access to these organizations. |
| `linkedin_version` | string | No | LinkedIn API version in YYYYMM format. Defaults to 202601. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Register Upload

**Slug:** `LINKEDIN_ADS_REGISTER_UPLOAD`

Tool to register an upload for media assets (images, videos) on LinkedIn. Use when you need to prepare for uploading media content to LinkedIn before creating posts or ads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | string | Yes | URN of the owner entity (e.g., person or organization URN like 'urn:li:person:a4I-u208D9' or 'urn:li:organization:12345') |
| `recipes` | array | Yes | List of recipe URNs that define how the asset will be processed (e.g., 'urn:li:digitalmediaRecipe:feedshare-image' for images, 'urn:li:digitalmediaRecipe:feedshare-video' for videos) |
| `serviceRelationships` | array | Yes | List of service relationships defining ownership and permissions |
| `supportedUploadMechanism` | array | Yes | List of upload mechanisms to use. SYNCHRONOUS_UPLOAD for direct upload, MULTIPART_UPLOAD for large files |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Ad Accounts

**Slug:** `LINKEDIN_ADS_SEARCH_AD_ACCOUNTS`

Tool to search for LinkedIn ad accounts with filtering by status, type, and test mode. Use when you need to find ad accounts based on specific criteria like status, type, or whether they are test accounts. Supports pagination for large result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | array | No | Filter accounts by ID. Can include multiple IDs. |
| `name` | array | No | Filter accounts by name. Can include multiple names. |
| `test` | boolean | No | Filter by test or non-test accounts. Set to true for test accounts, false for non-test accounts. If omitted, returns both. |
| `type` | array | No | Filter accounts by type: BUSINESS or ENTERPRISE. |
| `status` | array | No | Filter accounts by status. Can include multiple values: ACTIVE, DRAFT, CANCELED, PENDING_DELETION, or REMOVED. |
| `page_size` | integer | No | Number of entities to return per page. Maximum is 1000. |
| `reference` | array | No | Filter accounts by reference URN (e.g., 'urn:li:organization:2414183' or 'urn:li:person:12345'). |
| `page_token` | string | No | Token for pagination to fetch the next set of results. Use the nextPageToken from the previous response. |
| `sort_field` | string ("ID") | No | Enum for sort field values. |
| `sort_order` | string ("ASCENDING" | "DESCENDING") | No | Enum for sort order values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Campaigns

**Slug:** `LINKEDIN_ADS_SEARCH_CAMPAIGNS`

Tool to search and list campaigns in a LinkedIn Ads account with filtering options. Use when you need to retrieve campaigns with specific criteria such as status, type, or test flag.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Query type (typically 'search' for campaign searches) |
| `ids` | string | No | Comma-separated list of campaign IDs to retrieve |
| `search` | string | No | Search criteria as JSON string with status, type, or test filters. Example: '(status:(values:List(ACTIVE)))' |
| `pageSize` | integer | No | Number of entities to return (max: 1000, default: 100) |
| `pageToken` | string | No | Pagination token for fetching next page of results |
| `sortOrder` | string | No | Sort order (ASCENDING or DESCENDING) - sorted by campaign ID |
| `adAccountId` | integer | Yes | Ad Account ID to search campaigns in |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search LinkedIn Ads Creatives

**Slug:** `LINKEDIN_ADS_SEARCH_CREATIVES`

Tool to search and list LinkedIn Ads creatives with filtering options. Use when you need to retrieve creatives from a LinkedIn Ads account with optional filters by campaign, status, content reference, or lead gen form. Supports cursor-based pagination for large result sets. Returns comprehensive creative details including status, review information, serving hold reasons, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaigns` | array | No | Filter creatives by campaign URN(s). Provide a list of sponsored campaign URNs (e.g., 'urn:li:sponsoredCampaign:360035215'). Multiple campaigns are ORed together. |
| `creatives` | array | No | Filter by specific creative URN(s). Provide a list of sponsored creative URNs (e.g., 'urn:li:sponsoredCreative:119962155'). Multiple creatives are ORed together. |
| `page_size` | integer | No | Number of creatives to return per page (default: 100, max: 100). Use for pagination control. |
| `page_token` | string | No | Pagination cursor token from the previous response's nextPageToken field. Use to fetch the next page of results. Omit for the first page. |
| `sort_order` | string ("ASCENDING" | "DESCENDING") | No | Sort order for creative results. |
| `ad_account_id` | string | Yes | LinkedIn Ad Account ID (numeric ID without URN prefix, e.g., '520376796'). Required to identify which ad account to search creatives in. |
| `is_test_account` | boolean | No | Filter by test account status. True returns only creatives under test accounts, False returns only non-test accounts, null/omitted returns all regardless of test status. |
| `intended_statuses` | array | No | Filter creatives by intended status. Multiple statuses are ORed together. Values: ACTIVE (creative available for serving), PAUSED (temporarily not served), DRAFT (incomplete), ARCHIVED (not served, separated from active), CANCELED (hidden from queries), PENDING_DELETION (deletion in progress), REMOVED (deleted but fetchable). |
| `content_references` | array | No | Filter creatives by content reference URN(s). Can be share URN or ugcPost URN (e.g., 'urn:li:share:6778045555198214144', 'urn:li:ugcPost:6778045555198214144'). Multiple references are ORed together. |
| `leadgen_creative_call_to_action_destinations` | array | No | Filter by lead generation form URN(s). Provide a list of ad form URNs (e.g., 'urn:li:adForm:123456'). Multiple forms are ORed together. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Events

**Slug:** `LINKEDIN_ADS_SEARCH_EVENTS`

Tool to search and list LinkedIn events by organizer with filtering options. Use when you need to find events organized by a specific organization or person, with optional filters for lifecycle state, entry criteria, and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string ("eventsByOrganizer" | "organizerLeadGenFormEnabledEvents") | No | Query type - use 'eventsByOrganizer' to search by organizer or 'organizerLeadGenFormEnabledEvents' for lead gen enabled events |
| `count` | integer | No | Number of events to return per page (max 100) |
| `start` | integer | No | Pagination start index (0-based) |
| `organizer` | string | Yes | Organization or person URN of the event organizer (e.g., 'urn:li:organization:7185861') |
| `sortOrder` | string ("START_TIME_ASC" | "END_TIME_DESC") | No | Event sort order. |
| `entryCriteria` | string ("PUBLIC" | "GATED") | No | Event entry criteria. |
| `lifeCycleState` | string ("UPCOMING" | "ONGOING" | "PAST") | No | Event lifecycle state. |
| `excludeCancelled` | boolean | No | If true, exclude cancelled events from results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update lead form

**Slug:** `LINKEDIN_ADS_UPDATE_LEAD_FORM`

Tool to update an existing LinkedIn lead form. Use when you need to modify form details like name, headline, description, or state. Note: For published forms (linked to active campaigns), only specific fields can be updated. Pre-published forms allow updating all fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `patch` | object | Yes | Patch object containing the $set operation with fields to update. For published forms, only specific fields can be updated (headline, description, legalDisclaimer, landingPageUrl, privacyPageUrl, thankYouMessage, thankYouPageCta, state). Pre-published forms (DRAFT or not linked to active campaigns) can have all fields updated. |
| `form_id` | string | Yes | The ID of the lead form to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update organization access control

**Slug:** `LINKEDIN_ADS_UPDATE_ORGANIZATION_ACL`

Tool to update organization access control for a user on LinkedIn. Use when requesting the DIRECT_SPONSORED_CONTENT_POSTER role for an organization. The PUT API works only when the user is requesting the role for themselves, not on behalf of others.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string ("ADMINISTRATOR" | "DIRECT_SPONSORED_CONTENT_POSTER" | "RECRUITING_POSTER" | "LEAD_CAPTURE_ADMINISTRATOR" | "LEAD_GEN_FORMS_MANAGER" | "ANALYST" | "CURATOR" | "CONTENT_ADMINISTRATOR") | Yes | The role to update. For external API calls, only DIRECT_SPONSORED_CONTENT_POSTER is supported. |
| `state` | string ("APPROVED" | "REJECTED" | "REQUESTED" | "REVOKED") | Yes | The role state to set. For external API calls, only REQUESTED is supported. |
| `organization` | string | Yes | The organizational entity URN for which access control information is being updated. Must be in the format 'urn:li:organization:{id}' or 'urn:li:organizationBrand:{id}'. |
| `roleAssignee` | string | Yes | The person URN of the member being assigned the role. Must be in the format 'urn:li:person:{id}'. Note: The PUT API works only when the user is requesting the DIRECT_SPONSORED_CONTENT_POSTER role to an organization for themselves and not on behalf of others. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
