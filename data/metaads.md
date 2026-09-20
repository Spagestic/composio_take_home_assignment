# Meta Ads

Create, edit and get insights from ads across Meta technologies, including Facebook, Instagram, Messenger, WhatsApp and more.

- **Category:** ads & conversion
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** No
- **Tools:** 67
- **Triggers:** 0
- **Slug:** `METAADS`
- **Version:** 20260915_00

## Tools

### Create Ad

**Slug:** `METAADS_CREATE_AD`

Create a new ad within an ad set using the Meta Marketing API. Supports various ad formats including image, video, carousel, and collection ads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the ad |
| `status` | string ("ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED") | No | Initial status of the ad |
| `creative` | object | Yes | Creative specifications for the ad |
| `ad_set_id` | string | Yes | ID of the ad set to create the ad in. The referenced ad set and its parent campaign must already exist. |
| `bid_amount` | integer | No | Bid amount in cents (overrides ad set bid) |
| `ad_account_id` | string | Yes | ID of the ad account (e.g. 'act_123456789'). Must start with 'act_'. |
| `tracking_specs` | array | No | Tracking specifications for the ad |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ad Creative

**Slug:** `METAADS_CREATE_AD_CREATIVE`

Create a new ad creative using the Meta Marketing API. Ad creatives are reusable visual and interactive elements that define how your ad looks and behaves: - Can be used in multiple ads - Support various formats (image, video, carousel) - Include text, media, and call-to-action buttons - Must follow Meta's ad policies

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes |          Name of your ad creative. Best practices:         - Include the creative type (e.g., "Summer Sale - Image")         - Add version if iterating (e.g., "v1")         - Include target audience if specific         - Keep it searchable and organized          |
| `creative` | object | Yes |          The creative specifications for your ad.         This defines:         - What type of ad (image, video, carousel)         - What it looks like (images, text)         - How it behaves (links, buttons)         See AdCreative model for details.          Meta enforces strict asset specifications at creation time — image dimensions, aspect ratios, and text length must comply or the request will be rejected. |
| `account_id` | string | Yes |          The ad account ID where you want to create the creative.         Format: act_1234567890         Get this from your Meta Ads account settings.         Must have proper permissions set up.          |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ad Set

**Slug:** `METAADS_CREATE_AD_SET`

Create a new ad set within a campaign using the Meta Marketing API. Supports detailed targeting options, budgets, and optimization goals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the ad set |
| `status` | string ("ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED") | No | Initial status of the ad set |
| `end_time` | string | No | End time in ISO 8601 format |
| `targeting` | object | Yes | Targeting specifications for the ad set |
| `account_id` | string | Yes | ID of the ad account to create the ad set in |
| `bid_amount` | integer | No | Bid amount in cents. Required for LOWEST_COST_WITH_BID_CAP and COST_CAP. Do not use with LOWEST_COST_WITH_MIN_ROAS. |
| `start_time` | string | No | Start time in ISO 8601 format |
| `campaign_id` | string | Yes | ID of the campaign to create the ad set in |
| `bid_strategy` | string ("LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "COST_CAP" | "LOWEST_COST_WITH_MIN_ROAS") | No | Bid strategy for the ad set. LOWEST_COST_WITH_BID_CAP and COST_CAP require bid_amount. LOWEST_COST_WITH_MIN_ROAS requires optimization_goal VALUE and bid_constraints.roas_average_floor. |
| `daily_budget` | number | No | Daily budget limit for this ad set in account currency. Use for ad set-level budgets. |
| `billing_event` | string ("IMPRESSIONS" | "LINK_CLICKS" | "APP_INSTALLS" | "POST_ENGAGEMENT" | "THRUPLAY") | Yes | The billing event for the ad set |
| `bid_constraints` | object | No | Bid constraint values for bid strategies that require them. |
| `lifetime_budget` | number | No | Lifetime budget limit for this ad set in account currency. Use for ad set-level budgets. |
| `promoted_object` | object | No | Object promoted by the ad set. |
| `optimization_goal` | string ("APP_INSTALLS" | "CONVERSATIONS" | "LINK_CLICKS" | "OFFSITE_CONVERSIONS" | "PAGE_LIKES" | "POST_ENGAGEMENT" | "REACH" | "THRUPLAY" | "VALUE") | Yes | The optimization goal for the ad set |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ad Video

**Slug:** `METAADS_CREATE_AD_VIDEO`

Upload an ad video asset; Meta may keep processing it after returning its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Optional internal name for the ad video. |
| `title` | string | No | Optional title for the ad video. |
| `video` | object | No | One local video file to upload directly, up to 100 MiB. Provide exactly one of video or file_url. |
| `file_url` | string | No | Public HTTP(S) URL that Meta can fetch for the video. Provide exactly one of file_url or video. |
| `description` | string | No | Optional description for the ad video. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Campaign

**Slug:** `METAADS_CREATE_CAMPAIGN`

Create a new advertising campaign using the Meta Marketing API. Supports various campaign objectives, budgets, and bidding strategies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the campaign |
| `status` | string ("ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED") | No | Initial status of the campaign |
| `objective` | string ("OUTCOME_LEADS" | "OUTCOME_SALES" | "OUTCOME_ENGAGEMENT" | "OUTCOME_AWARENESS" | "OUTCOME_TRAFFIC" | "OUTCOME_APP_PROMOTION") | Yes | The objective of the campaign |
| `account_id` | string | Yes | The ID of the ad account to create the campaign in |
| `bid_strategy` | string ("LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "COST_CAP") | No | Bidding strategy for the campaign |
| `daily_budget` | number | No | Daily budget limit in account currency. Mutually exclusive with lifetime_budget - provide one or the other, not both. |
| `lifetime_budget` | number | No | Lifetime budget limit in account currency. Mutually exclusive with daily_budget - provide one or the other, not both. |
| `special_ad_categories` | array | No | List of special ad categories that apply to this campaign |
| `is_adset_budget_sharing_enabled` | boolean | No | Ad set budget sharing allows up to 20% of your budget to be shared with other ad sets in the same campaign for improved performance. In v24.0+, this field is required when NO campaign budget is set AND budgets will be set at ad set level. Set to true to enable budget sharing optimization between ad sets (only applicable when budgets are set at ad set level). Should be false when using campaign-level budget (daily_budget or lifetime_budget). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Audience

**Slug:** `METAADS_CREATE_CUSTOM_AUDIENCE`

Create a new custom audience using the Meta Marketing API. Supports various types of custom audiences including customer lists, website visitors, and app users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the custom audience |
| `rule` | object | No | Rule for website/app custom audiences |
| `prefill` | boolean | No | Whether to prefill the audience with available data |
| `subtype` | string ("CUSTOM" | "PRIMARY" | "WEBSITE" | "APP" | "OFFLINE_CONVERSION" | "CLAIM" | "MANAGED" | "PARTNER" | "VIDEO" | "LOOKALIKE" | "ENGAGEMENT" | "BAG_OF_ACCOUNTS" | "STUDY_RULE_AUDIENCE" | "FOX" | "MEASUREMENT" | "REGULATED_CATEGORIES_AUDIENCE" | "BIDDING" | "EXCLUSION" | "MESSENGER_SUBSCRIBER_LIST") | Yes | Type of the custom audience |
| `account_id` | string | Yes | The ID of the ad account to create the custom audience in |
| `description` | string | No | Description of the custom audience |
| `content_type` | string ("AUTOMOTIVE_MODEL" | "DESTINATION" | "FLIGHT" | "GENERIC" | "HOME_LISTING" | "HOTEL" | "LOCAL_SERVICE_BUSINESS" | "MEDIA_TITLE" | "OFFLINE_PRODUCT" | "PRODUCT" | "VEHICLE" | "VEHICLE_OFFER") | No | Content type for dynamic product catalog audiences. |
| `retention_days` | integer | No | Number of days to keep the audience data |
| `customer_file_source` | string ("USER_PROVIDED_ONLY" | "PARTNER_PROVIDED_ONLY" | "BOTH_USER_AND_PARTNER_PROVIDED") | No | Source of the customer file data |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Conversion

**Slug:** `METAADS_CREATE_CUSTOM_CONVERSION`

Create a persistent custom-conversion definition in a Meta ad account and return its ID. This toolkit does not expose a matching archive or delete action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the custom conversion. |
| `rule` | object | No | Matching rule as a JSON object. |
| `description` | string | No | Optional description of the custom conversion. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |
| `advanced_rule` | object | No | Advanced multi-source matching rule as a JSON object. |
| `event_source_id` | string | No | Numeric ID of the Pixel, offline event set, or other event source. |
| `custom_event_type` | string ("ADD_PAYMENT_INFO" | "ADD_TO_CART" | "ADD_TO_WISHLIST" | "COMPLETE_REGISTRATION" | "CONTACT" | "CONTENT_VIEW" | "CUSTOMIZE_PRODUCT" | "DONATE" | "FACEBOOK_SELECTED" | "FIND_LOCATION" | "INITIATED_CHECKOUT" | "LEAD" | "LISTING_INTERACTION" | "OTHER" | "PURCHASE" | "SCHEDULE" | "SEARCH" | "START_TRIAL" | "SUBMIT_APPLICATION" | "SUBSCRIBE") | No | Standard event category assigned to the custom conversion. |
| `action_source_type` | string ("app" | "business_messaging" | "chat" | "email" | "other" | "phone_call" | "physical_store" | "system_generated" | "website") | No | Source from which conversion actions originate. |
| `default_conversion_value` | number | No | Default monetary value assigned to matching conversions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Lead Form

**Slug:** `METAADS_CREATE_LEAD_FORM`

Create a persistent lead-generation form owned by a Facebook Page and return its ID. This toolkit does not expose a matching archive or delete action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Internal name for the lead form. |
| `locale` | string ("AR_AR" | "CS_CZ" | "DA_DK" | "DE_DE" | "EL_GR" | "EN_GB" | "EN_US" | "ES_ES" | "ES_LA" | "FI_FI" | "FR_FR" | "HE_IL" | "HI_IN" | "HU_HU" | "ID_ID" | "IT_IT" | "JA_JP" | "KO_KR" | "NB_NO" | "NL_NL" | "PL_PL" | "PT_BR" | "PT_PT" | "RO_RO" | "RU_RU" | "SV_SE" | "TH_TH" | "TR_TR" | "VI_VN" | "ZH_CN" | "ZH_HK" | "ZH_TW") | No | Locale used to render the form. |
| `page_id` | string | Yes | Numeric Facebook Page ID that will own the lead form. Ad account IDs and act_ prefixes are not accepted. |
| `questions` | array | Yes | Questions shown in the form, in display order. |
| `context_card` | object | No | Introductory context card shown before the questions. |
| `privacy_policy` | object | No | Privacy-policy link displayed by the form. |
| `thank_you_page` | object | No | Page shown after the form is submitted. |
| `custom_disclaimer` | object | No | Additional disclaimer and consent checkboxes. |
| `tracking_parameters` | object | No | String key-value metadata returned with leads for attribution. |
| `follow_up_action_url` | string | No | URL used for the form's follow-up action. |
| `is_optimized_for_quality` | boolean | No | Whether to add a review step that favors higher-intent leads. |
| `should_enforce_work_email` | boolean | No | Whether email questions should require a work email address. |
| `block_display_for_non_targeted_viewer` | boolean | No | Whether people outside the ad's target audience are blocked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Campaign

**Slug:** `METAADS_DELETE_CAMPAIGN`

Delete an advertising campaign using the Meta Marketing API. This marks the campaign as DELETED, which prevents it from delivering ads. Note that deleted campaigns are not permanently removed from Meta's systems and can still be viewed in reports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `campaign_id` | string | Yes | ID of the campaign to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ad Accounts

**Slug:** `METAADS_GET_AD_ACCOUNTS`

Tool to retrieve all ad account IDs accessible to the authenticated user from Meta Ads. Use when you need to get a user's ad account information including account IDs, names, and other account details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of ad accounts to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve. Common fields: id, name, account_id, currency, timezone_name, account_status, business_name, business. The 'id' field returns the ad account ID prefixed with 'act_', while 'account_id' returns the numeric ID without prefix. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ad Creative

**Slug:** `METAADS_GET_AD_CREATIVE`

Get Ad Creative

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | List of fields to include in the response. |
| `creative_id` | string | Yes | The ID of the ad creative to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Insights

**Slug:** `METAADS_GET_INSIGHTS`

Get insights data for a Meta Ads object (ad account, campaign, ad set, or ad) using the Meta Marketing API. Supports various metrics, breakdowns, and filtering options with flexible date ranges. Results are paginated; follow `paging.cursors.after` or `paging.next` to retrieve all rows. Missing metric values in results should not be assumed to be zero.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sort` | array | No | Fields to sort by with direction (_ascending or _descending suffix) |
| `after` | string | No | Cursor for the next page of results, usually taken from paging.cursors.after in the previous response. |
| `level` | string ("account" | "campaign" | "adset" | "ad") | No | Level at which to aggregate the data Must match the type of object referenced by `object_id` (e.g., 'account' for 'act_...' IDs, 'campaign' for campaign IDs, 'adset' for ad set IDs, 'ad' for ad IDs); mismatches return empty or misleading metrics. Allowed values: 'account', 'campaign', 'adset', 'ad'. |
| `limit` | integer | No | Maximum number of insight rows to return for this page. Use paging.cursors.after or paging.cursors.before from the response to request another page. |
| `before` | string | No | Cursor for the previous page of results, usually taken from paging.cursors.before in the previous response. |
| `fields` | array | No | List of metric fields to include in the response. Valid standalone fields include: impressions, clicks, spend, reach, cpc, cpm, ctr, frequency, account_name, account_id, campaign_name, campaign_id, adset_name, adset_id, ad_name, ad_id, objective, buying_type, date_start, date_stop. For conversion/action metrics: 'actions' (returns all action types with counts), 'action_values' (returns monetary values for all actions), 'conversions' (returns conversion-specific actions), 'conversion_values' (returns monetary values for conversions). Breakdown dimensions such as publisher_platform, platform_position, impression_device, age, gender, and country should be supplied through breakdowns; if included here they are moved automatically. Do NOT use 'conversion_value' (singular) as it is not a valid field - use 'action_values' or 'conversion_values' instead. |
| `filtering` | array | No | Filters to apply to the data |
| `object_id` | string | Yes | ID of the object to get insights for (ad account, campaign, ad set, or ad). For ad accounts, the ID must include the act_ prefix (e.g., act_123456789). Campaign, ad set, and ad IDs are numeric only. |
| `breakdowns` | array | No | List of breakdown dimensions to apply to the data, such as publisher_platform, platform_position, impression_device, age, gender, country, region, or device_platform. |
| `time_range` | object | No | Custom date range for the insights. If provided, date_preset should be set to null/None to use this custom range instead. Must be a dict with keys `since` and `until` in YYYY-MM-DD format (e.g., {'since': '2024-01-01', 'until': '2024-01-31'}). Never provide both time_range and date_preset simultaneously. |
| `date_preset` | string ("today" | "yesterday" | "last_7d" | "last_30d" | "this_month" | "last_month" | "this_quarter") | No | Predefined date range for the insights. Defaults to 'last_30d' if neither date_preset nor time_range is specified. Allowed values: 'today', 'yesterday', 'last_7d', 'last_30d', 'this_month', 'last_month', 'this_quarter'. Case-insensitive (e.g., 'LAST_30D' is normalized to 'last_30d'). Set to null/None only if you provide a custom time_range. |
| `time_increment` | string | No | How to divide the selected date range into result periods. Use an integer from 1 to 90 for that many days per period, 'monthly' for calendar-month periods, or 'all_days' for one period covering the full range. Omit this field to use Meta's default aggregation. |
| `date_range_defaulted` | boolean | No | Internal field to track if date_preset was defaulted. Do not set this manually. |
| `field_transformations` | array | No | Internal field to track any field transformations made. Do not set this manually. |
| `breakdown_transformations` | array | No | Internal field to track breakdown fields moved out of fields. Do not set this manually. |
| `action_attribution_windows` | array | No | Attribution windows for conversion metrics. Defaults to `[7d_click]` to match Meta's unified attribution default; add `VIEW_1D`/`CLICK_28D`/etc. explicitly if you need legacy multi-window behavior. Different window values yield significantly different conversion counts; use consistent windows when comparing across campaigns or time periods. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Meta Object

**Slug:** `METAADS_GET_OBJECT`

Tool to retrieve data for any Meta Marketing API object by its ID. Use when you need to get information about a specific ad account, campaign, ad set, ad, ad creative, page, user, or other Meta object. Supports flexible field selection to retrieve only the data you need.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | List of specific fields to retrieve from the object. If not specified, only basic fields (id, name) will be returned. Available fields depend on the object type. Common fields include: id, name, status, account_id, created_time, updated_time. For ads: campaign_id, adset_id, creative. For campaigns: objective, buying_type, daily_budget. For ad creatives: asset_feed_spec, object_story_spec, image_url, video_id, title, body, link_url, call_to_action_type. For users: email, first_name, last_name. Note: For ad account objects, use 'ad_account_promotable_objects' to retrieve promotable objects - the field name 'promotable_objects' (without prefix) is not valid for ad accounts. |
| `object_id` | string | Yes | The numeric ID of the Facebook Graph API object (e.g., '123456789012345'). Must be a numeric Facebook ID, not an image hash or other non-numeric identifier. Can be an ad account ID (with or without 'act_' prefix), campaign ID, ad set ID, ad ID, ad creative ID, page ID, user ID, or any other Meta Marketing API object ID. For user info, use 'me' as the object_id. |
| `time_range` | object | No | Custom date range for aggregating insights metrics. |
| `date_preset` | string ("today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year") | No | Predefined date range options for aggregating insights metrics. |
| `updated_since` | integer | No | Unix timestamp to retrieve only objects updated since this time. Useful for incremental syncs and fetching recent changes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Page Accounts

**Slug:** `METAADS_GET_PAGE_ACCOUNTS`

Retrieve pages managed by the authenticated user, including page access tokens when requested. Results are paginated; use `paging.cursors.after` as the `after` input to retrieve the next page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Opaque cursor from paging.cursors.after in a previous response. Pass it unchanged to retrieve the next page. |
| `limit` | integer | No | Maximum number of managed pages to return in this page of results. |
| `fields` | string | No | Comma-separated list of fields to return for each page. Common fields: access_token (page access token), name (page name), id (page ID), tasks (array of permissions/tasks), category (page category), category_list (array of category objects with id and name). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pixel Event Stats

**Slug:** `METAADS_GET_PIXEL_EVENT_STATS`

Read recent Pixel event-count and processing statistics, optionally restricted to server events and one event name, to verify aggregate ingestion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent` | string | No | Partner-agent identifier used when the events were submitted. |
| `cursor` | string | No | Opaque next_cursor from a previous stats page; omit for the first page. |
| `end_time` | integer | No | Exclusive Unix timestamp in seconds; must be after start_time. |
| `pixel_id` | string | Yes | Numeric Pixel ID whose recent event statistics should be read. |
| `event_name` | string | No | Standard or custom event name to filter, such as Purchase. |
| `start_time` | integer | No | Inclusive Unix timestamp in seconds. Meta exposes up to seven recent days. |
| `aggregation` | string ("event" | "pixel_fire" | "event_total_counts" | "match_keys" | "event_processing_results") | No | Grouping used for the returned statistics. |
| `event_source` | string ("WEB_ONLY" | "SERVER_ONLY") | No | Restrict statistics to browser/web or server-side event delivery. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `METAADS_GET_USER`

Tool to retrieve information about the authenticated user from Meta (Facebook) Graph API. Use when you need to get the current user's profile information such as name, email, or other user details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve about the authenticated user. Common fields: id (user's unique identifier), name (full name), email (requires email permission), first_name, last_name, picture (profile picture object), age_range, birthday, gender, locale. By default returns id, name, and email. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Video

**Slug:** `METAADS_GET_VIDEO`

DEPRECATED: Use METAADS_GET_OBJECT instead. Tool to retrieve video information from Meta's Graph API by video ID. Use when you need to get video details such as the source URL for playback/download, permalink URL to view on Facebook, or other video metadata like title, description, length, and thumbnails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve from the video object. Common fields include: id (video ID), source (direct video URL for playback/download), permalink_url (permanent Facebook URL to view the video), created_time (when video was created), title (video title), description (video description), length (duration in seconds), thumbnails (thumbnail images object), format (list of available video formats). By default returns id, source, and permalink_url. |
| `video_id` | string | Yes | The ID of the video to retrieve from Meta's Graph API |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Activities

**Slug:** `METAADS_LIST_ACTIVITIES`

List activity history for a Meta ad account or ad set.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Opaque after cursor from the previous response's paging.cursors.after value. Omit for the first page. |
| `limit` | integer | No | Maximum number of activities to return in this page. |
| `since` | string | No | Optional lower datetime bound accepted by Meta for activity event times. Pass the provider datetime string without modification. |
| `until` | string | No | Optional upper datetime bound accepted by Meta for activity event times. Pass the provider datetime string without modification. |
| `fields` | array | No | Activity fields to return. Values are sent to Meta as a comma-separated list. Supported fields are actor_id, actor_name, application_id, application_name, date_time_in_timezone, event_time, event_type, extra_data, object_id, object_name, object_type, tool, and translated_event_type. |
| `object_id` | string | Yes | ID of the object whose activity history to list. Use an ad account ID with its act_ prefix (for example, act_123456789) or an ad set ID. Meta exposes this edge only for AdAccount and AdSet objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ad Account Pixels

**Slug:** `METAADS_LIST_AD_ACCOUNT_PIXELS`

List the Pixels and consolidated datasets associated with an ad account so a usable data-source ID can be selected for Conversions API events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum Pixels to return in this page (1-100). |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `sort_by` | string ("LAST_FIRED_TIME" | "NAME") | No | Sort Pixels by name or by their most recent fired event time. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ad Creatives

**Slug:** `METAADS_LIST_AD_CREATIVES`

Tool to list all ad creatives under an ad account. Use when you need to retrieve multiple ad creatives from a Meta Ads account to view, analyze, or manage creative assets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of ad creatives to return per page (default 25). |
| `fields` | string | No | Comma-separated list of fields to return for each ad creative. Supported fields include: id, name, status, account_id, body, title, image_url, image_hash, video_id, thumbnail_url, link_url, call_to_action_type, object_type, object_id, object_story_spec, object_story_id, effective_object_story_id, asset_feed_spec, template_url, url_tags, adlabels, applink_treatment, authorization_category, effective_authorization_category, and others. Note: 'effective_status' is NOT supported for ad creatives (it's only available on Ads, Ad Sets, and Campaigns - use METAADS_LIST_ADS instead). |
| `ad_account_id` | string | Yes | The ad account ID to list ad creatives from. Can be provided with or without the 'act_' prefix (e.g., 'act_123456789' or '123456789'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ad Images

**Slug:** `METAADS_LIST_AD_IMAGES`

List one page of image assets in a Meta ad account, optionally restricted to exact image hashes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum ad images to return in this page. |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `fields` | array | No | Image fields to return. Provide individual Graph API field names, not a comma-separated string. |
| `hashes` | array | No | Optional image hashes to match exactly in this ad account. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ad Network Analytics

**Slug:** `METAADS_LIST_AD_NETWORK_ANALYTICS`

Tool to retrieve ad network analytics for a Meta Business using the Meta Marketing API. Use when you need to get ad network performance metrics such as revenue or impressions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Business ID to query ad network analytics for |
| `limit` | integer | No | Maximum number of results to return per request (default 25, API default 2000) |
| `metrics` | string | Yes | Comma-separated list of metrics to retrieve. Example: fb_ad_network_revenue |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ad Network Analytics Results

**Slug:** `METAADS_LIST_AD_NETWORK_ANALYTICS_RESULTS`

Tool to retrieve ad network analytics results for Facebook Audience Network. Use when you need to get performance data from ads displayed through Facebook Audience Network on third-party apps and websites for a specific business, app, or property.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve in the response. If not specified, returns default fields. |
| `query_id` | string | No | The query ID returned from a previous adnetworkanalytics request. Use this to retrieve the results of an asynchronous report generation. If not provided, returns all available results for the specified object ID. |
| `object_id` | string | Yes | Business ID, App ID, or Property ID that uses Facebook Audience Network. This is the identifier for the entity whose ad network analytics results you want to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ads

**Slug:** `METAADS_LIST_ADS`

Tool to list all ads under an ad account using the Meta Marketing API. Use when you need to retrieve ads from a specific ad account with optional filtering by fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of ads to return per page (default 25, max 100) |
| `fields` | string | No | Comma-separated list of fields to return. Common fields: id, name, adset_id, campaign_id, status, effective_status, created_time, updated_time, creative, tracking_specs, conversion_specs, targeting, bid_amount, source_ad_id, preview_shareable_link. |
| `ad_account_id` | string | Yes | The ad account ID (with or without 'act_' prefix, e.g., 'act_123456789' or '123456789') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Agencies

**Slug:** `METAADS_LIST_AGENCIES`

Tool to retrieve agencies associated with a Meta Business or Ad Account. Use when you need to get the list of agencies that have access to manage a specific business or ad account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the Business or Ad Account to fetch agencies from. This can be a Business ID (numeric) or an Ad Account ID (with or without 'act_' prefix). |
| `limit` | integer | No | Maximum number of agencies to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each agency. Common fields: id, name. The 'id' field returns the agency ID, while 'name' returns the agency name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assigned Pages

**Slug:** `METAADS_LIST_ASSIGNED_PAGES`

Tool to retrieve Facebook Pages assigned to a business user via Meta Marketing API. Use when you need to get the list of pages a business user has access to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `business_user_id` | string | Yes | The ID of the business user. Can be obtained from GET /{business_id}/business_users endpoint |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Assigned Users

**Slug:** `METAADS_LIST_ASSIGNED_USERS`

Tool to list users assigned to a Facebook Page or Ad Account within a specific business context. Use when you need to retrieve the list of users who have access to a Page or Ad Account and their associated task permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the Page or Ad Account to list assigned users for. For Ad Accounts, use the account ID with or without the 'act_' prefix (e.g., 'act_123456789' or '123456789'). For Pages, use the Page ID (e.g., '916958084834651'). |
| `after` | string | No | Cursor for forward pagination. |
| `limit` | integer | No | Maximum number of results to return per page. |
| `before` | string | No | Cursor for backward pagination. |
| `fields` | string | No | Comma-separated list of fields to retrieve for each assigned user. Available fields: id, name, tasks. Defaults to 'id,name,tasks' to retrieve all standard fields. |
| `business` | string | Yes | Business ID to filter assigned users by business context. This parameter is required when calling assigned_users on Page or AdAccount objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Ad Accounts

**Slug:** `METAADS_LIST_BUSINESS_AD_ACCOUNTS`

Tool to retrieve all ad accounts owned by a specific Business Manager. Use when you need to get ad account information for a business including account IDs, names, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of ad accounts to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve. Common fields: id, name, account_id, account_status, currency, timezone_name, business_name, business. The 'id' field returns the ad account ID prefixed with 'act_', while 'account_id' returns the numeric ID without prefix. |
| `business_id` | string | Yes | The ID of the business to retrieve owned ad accounts for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Businesses

**Slug:** `METAADS_LIST_BUSINESSES`

Tool to discover every Business Manager the authenticated Meta principal can access, via `GET /me/businesses`. Use this first when you do not know a `business_id`: it works for both user and system-user tokens and returns the businesses you have a role in, so you can then reach Business-Manager-owned ad accounts (which do NOT appear in `/me/adaccounts`) through the owned/client ad-account tools. Requires the `business_management` permission on the connected token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Pagination cursor. Pass the `paging.cursors.after` value from a previous response to fetch the next page. |
| `limit` | integer | No | Maximum number of businesses to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each business. Common fields: id, name, created_time, verification_status, permitted_roles, primary_page, timezone_id, vertical. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Business Invoices

**Slug:** `METAADS_LIST_BUSINESS_INVOICES`

Tool to retrieve business invoices from Meta Marketing API. Use when you need to fetch invoice data for a business including amounts, due dates, and payment status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | ID of the business to retrieve invoices for |
| `type` | string ("CM" | "DM" | "INV" | "PRO_FORMA") | No | Type of invoice from OmegaCustomerTrx.Type enum. |
| `after` | string | No | Cursor for forward pagination. |
| `limit` | integer | No | Maximum number of results to return per page. |
| `before` | string | No | Cursor for backward pagination. |
| `root_id` | string | No | Root ID for filtering invoices. Use string form — Meta/Business IDs can exceed JavaScript's 2^53 safe integer limit and lose precision when an LLM JSON-parses them as `int`. |
| `end_date` | string | No | End date for filtering invoices (YYYY-MM-DD format) |
| `invoice_id` | string | No | Specific invoice ID to retrieve |
| `start_date` | string | No | Start date for filtering invoices (YYYY-MM-DD format) |
| `issue_end_date` | string | No | Issue end date for filtering invoices (YYYY-MM-DD format) |
| `issue_start_date` | string | No | Issue start date for filtering invoices (YYYY-MM-DD format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Campaigns

**Slug:** `METAADS_LIST_CAMPAIGNS`

List one page of campaigns belonging to a Meta ad account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Opaque cursor from paging.cursors.after in a previous response. Pass it unchanged to retrieve the next page. |
| `limit` | integer | No | Maximum number of campaigns to return on this page. |
| `fields` | array | No | Campaign fields to return. The action sends these to Meta as a comma-separated fields parameter. |
| `ad_account_id` | string | Yes | Ad account ID, with or without the 'act_' prefix. |
| `effective_status` | array | No | Return campaigns matching any supplied effective status. Include ARCHIVED or DELETED explicitly when those records are needed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Ad Accounts

**Slug:** `METAADS_LIST_CLIENT_AD_ACCOUNTS`

Tool to list all client ad accounts accessible to a business from Meta Ads. Use when you need to retrieve ad accounts that have been shared with a Business Manager as clients.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of ad accounts to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve. Common fields: id, name, account_id, currency, timezone_name, account_status, business_name, business. The 'id' field returns the ad account ID prefixed with 'act_', while 'account_id' returns the numeric ID without prefix. |
| `business_id` | string | Yes | The business ID to fetch client ad accounts from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Apps

**Slug:** `METAADS_LIST_CLIENT_APPS`

Tool to retrieve client apps associated with a Meta Business using the Marketing API. Use when you need to get information about apps linked to a specific business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for forward pagination. |
| `limit` | integer | No | Maximum number of results to return per page. |
| `before` | string | No | Cursor for backward pagination. |
| `business_id` | string | Yes | The ID of the Business object. Can be obtained from GET /me/businesses endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Instagram Assets

**Slug:** `METAADS_LIST_CLIENT_INSTAGRAM_ASSETS`

Tool to retrieve Instagram assets that are shared with a business as a client using the Meta Marketing API. Use when you need to fetch Instagram accounts or assets linked to a specific business ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for pagination. Use the 'after' cursor from the previous response to fetch the next page of results. |
| `limit` | integer | No | Maximum number of Instagram assets to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each Instagram asset. If not specified, default fields will be returned. |
| `business_id` | string | Yes | The business ID whose client Instagram assets to retrieve. Can be obtained from /me/businesses endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Offsite Signal Container Business Objects

**Slug:** `METAADS_LIST_CLIENT_OFFSITE_SIGNAL_CONTAINERS`

Tool to retrieve client offsite signal container business objects for a business from Meta Marketing API. Use when you need to list all client offsite signal container business objects associated with a specific business ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business ID - The ID of the business to query for client offsite signal container business objects |
| `limit` | integer | No | Maximum number of client offsite signal container business objects to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve from the client offsite signal container business objects. If not specified, default fields will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Pages

**Slug:** `METAADS_LIST_CLIENT_PAGES`

Tool to retrieve client pages associated with a Meta business. Use when you need to get the list of pages that a business manages on behalf of clients.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the business to retrieve client pages for. Can be obtained via GET /me/businesses endpoint. |
| `limit` | integer | No | Maximum number of client pages to return per request. Use this parameter to control pagination. |
| `fields` | array | No | List of fields to retrieve for each client page. Common fields include: id, name, access_token, category, tasks. If not specified, default fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Clients

**Slug:** `METAADS_LIST_CLIENTS`

Tool to retrieve client businesses associated with a Meta Business Manager. Use when you need to get the list of businesses that are clients of a specific Business Manager.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business Manager ID to fetch client businesses from. Can be obtained from GET /me/businesses endpoint. |
| `limit` | integer | No | Maximum number of client businesses to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each client business. Common fields: id, name. The 'id' field returns the client business ID, while 'name' returns the client business name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Collaborative Ads Collaboration Requests

**Slug:** `METAADS_LIST_COLLABORATIVE_ADS_COLLABORATION_REQUESTS`

Tool to retrieve collaborative ads collaboration requests for a Meta Business using the Marketing API. Use when you need to get collaboration requests related to collaborative advertising partnerships for a specific business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Business ID to retrieve collaborative ads collaboration requests for. This is typically obtained from the /me/businesses endpoint. |
| `limit` | integer | No | Maximum number of collaboration requests to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each collaboration request. If not specified, default fields will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Collaborative Ads Suggested Partners

**Slug:** `METAADS_LIST_COLLABORATIVE_ADS_SUGGESTED_PARTNERS`

Tool to retrieve collaborative ads suggested partners for a business from Meta Marketing API. Use when you need to discover potential partnership opportunities for collaborative advertising campaigns.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of suggested partners to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each suggested partner. If not specified, default fields will be returned. |
| `business_id` | string | Yes | Business ID to retrieve collaborative ads suggested partners for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Comments

**Slug:** `METAADS_LIST_COMMENTS`

Return one page from the comments edge of a Page-owned post, photo, video, comment, or reply. The connected token needs pages_read_engagement and pages_read_user_content for that Page; Meta can require the Page MODERATE task to expose Page-post comment IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum comments to return in this page (1-100). |
| `order` | string ("chronological" | "reverse_chronological") | No | Order in which Meta returns comments. |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `fields` | array | No | Comment fields to return. Field availability depends on the parent type and the connected token's permissions. |
| `filter` | string ("toplevel" | "stream") | No | Comment level filter. `toplevel` returns top-level comments; `stream` returns all levels in chronological order. |
| `object_id` | string | Yes | Graph ID of a Page-owned post, photo, video, comment, or comment reply whose comments edge is readable. Composite Page-post IDs are accepted; the ID is not required to be numeric. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Audiences

**Slug:** `METAADS_LIST_CUSTOM_AUDIENCES`

List one page of custom audiences in a Meta ad account, with field projection and optional business, primary-audience, or Pixel constraints.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum custom audiences to return in this page (1-100). |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `fields` | array | No | Custom-audience fields to return. Provide individual Graph API field names, not a comma-separated string. |
| `pixel_id` | string | No | Return custom audiences associated with this Pixel ID. |
| `business_id` | string | No | Return audiences associated with this Meta business ID. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |
| `fetch_primary_audience` | boolean | No | Whether Meta should include each audience's primary audience data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Custom Conversions

**Slug:** `METAADS_LIST_CUSTOM_CONVERSIONS`

List one page of custom-conversion definitions in a Meta ad account, with field projection and opaque cursor pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum custom conversions to return in this page. Use the returned cursor when Meta has more results. |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `fields` | array | No | Custom-conversion fields to return. Provide individual Graph API field names, not a comma-separated string. |
| `ad_account_id` | string | Yes | Numeric ad account ID, with or without the act_ prefix. The prefix is normalized before the request is sent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Initiated Audience Sharing Requests

**Slug:** `METAADS_LIST_INITIATED_AUDIENCE_SHARING_REQUESTS`

Tool to retrieve initiated audience sharing requests for a business using the Meta Marketing API. Use when you need to get the list of audience sharing requests that have been initiated by a business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business ID to retrieve initiated audience sharing requests for. Can be obtained from the /me/businesses endpoint. |
| `after` | string | No | Cursor for pagination - use the 'after' cursor from the previous response to fetch the next page |
| `limit` | integer | No | Maximum number of sharing requests to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each sharing request. If not specified, default fields will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Leads

**Slug:** `METAADS_LIST_LEADS`

List one page of leads belonging to a Meta Ad or Leadgen Form.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Opaque paging cursor from paging.cursors.after in a previous response. Pass it back unchanged to retrieve the next page. |
| `limit` | integer | No | Maximum number of leads to return in this page. |
| `fields` | array | No | Lead fields to return. Values are sent to Meta as one comma-separated fields parameter. Supported fields are id, created_time, ad_id, ad_name, adset_id, adset_name, campaign_id, campaign_name, form_id, field_data, custom_disclaimer_responses, is_organic, platform, partner_name, post, post_submission_check_result, home_listing, retailer_item_id, and vehicle. |
| `source_object_id` | string | Yes | ID of the Meta Ad or Leadgen Form whose leads should be listed. This must be an Ad ID or Leadgen Form ID, not an ad account, campaign, ad set, Page, or lead ID. The connected user or system user must also have object-level access to the source and its leads. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Managed Partner Ads Funding Source Details

**Slug:** `METAADS_LIST_MANAGED_PARTNER_ADS_FUNDING_SOURCE_DETAILS`

Tool to retrieve managed partner ads funding source details for a Meta Business. Use when you need to get funding source information for managed partner ads associated with a specific business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business ID - The ID of the business to retrieve managed partner ads funding source details for. This should be a Business node ID, not a User ID or Ad Account ID. |
| `limit` | integer | No | Maximum number of results to return per request (default 25) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Owned Apps

**Slug:** `METAADS_LIST_OWNED_APPS`

Tool to retrieve apps owned by a business from Meta Marketing API. Use when you need to get information about apps associated with a business account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of owned apps to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve. Available fields: id, name, link, category |
| `business_id` | string | Yes | The ID of the business to retrieve owned apps for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Owned Businesses

**Slug:** `METAADS_LIST_OWNED_BUSINESSES`

Tool to retrieve businesses owned by a parent Business Manager from Meta Marketing API. Use when you need to list child businesses managed under a Business Manager account in a Tier-2 business hierarchy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of owned businesses to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each owned business. Common fields: id, name, created_time, link, timezone_id, vertical, verification_status |
| `business_id` | string | Yes | The ID of the parent Business Manager to retrieve owned businesses from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Owned Instagram Assets

**Slug:** `METAADS_LIST_OWNED_INSTAGRAM_ASSETS`

Tool to list Instagram accounts/assets owned by a Meta Business. Use when you need to retrieve the Instagram Business Accounts associated with a specific Meta Business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of Instagram assets to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to return for each Instagram asset (e.g., id,username). Common fields include: id, username, name, profile_picture_url, followers_count, follows_count, media_count, ig_id. |
| `business_id` | string | Yes | Business ID - can be obtained from /me/businesses endpoint. This is the Meta Business ID that owns the Instagram assets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Owned Offsite Signal Container Business Objects

**Slug:** `METAADS_LIST_OWNED_OFFSITE_SIGNAL_CONTAINER_BUSINESS_OBJECTS`

Tool to retrieve owned offsite signal container business objects for a business from Meta Marketing API. Use when you need to list all owned offsite signal container business objects associated with a specific business ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business ID - The ID of the business to query for owned offsite signal container business objects |
| `limit` | integer | No | Maximum number of owned offsite signal container business objects to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve from the owned offsite signal container business objects. If not specified, default fields will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Owned Pages

**Slug:** `METAADS_LIST_OWNED_PAGES`

Tool to retrieve Pages owned by a Business Manager from Meta Marketing API. Use when you need to get a list of all Facebook Pages that a business owns or manages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pages to return per request (default 25) |
| `fields` | string | No | Comma-separated list of Page fields to return. Common fields include: id, name, category, access_token, category_list, tasks, fan_count, link, picture, verification_status. If not specified, only basic fields (id, name) are returned. |
| `business_id` | string | Yes | The ID of the Business Manager to list owned pages for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Client Ad Accounts

**Slug:** `METAADS_LIST_PENDING_CLIENT_AD_ACCOUNTS`

Tool to retrieve pending client ad account access requests for a Business Manager from Meta Ads. Use when you need to get ad accounts that are awaiting approval to be added as clients to a business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pending client ad accounts to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve. Available fields: id (ad account ID), name (ad account name), permitted_tasks (list of tasks permitted for this ad account). |
| `business_id` | string | Yes | The ID of the Business Manager to retrieve pending client ad account access requests from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Client Apps

**Slug:** `METAADS_LIST_PENDING_CLIENT_APPS`

Tool to retrieve pending client apps for a Meta Business. Use when you need to list apps that are pending approval or connection to a business account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pending client apps to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each pending client app. If not specified, default fields will be returned. |
| `business_id` | string | Yes | The Business ID to retrieve pending client apps for. Can be retrieved from /me?fields=businesses endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Client Pages

**Slug:** `METAADS_LIST_PENDING_CLIENT_PAGES`

Tool to retrieve pending client pages for a Business Manager using the Meta Marketing API. Use when you need to see which Facebook Pages have pending access requests from the business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pages to return per request (default 25) |
| `business_id` | string | Yes | The Business Manager ID to retrieve pending client pages for. This is the numeric ID of the business. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Shared Offsite Signal Container Business Objects

**Slug:** `METAADS_LIST_PENDING_OFFSITE_SIGNAL_CONTAINERS`

Tool to retrieve pending shared offsite signal container business objects from Meta Marketing API. Use when you need to get information about pending shared offsite signal containers associated with a business account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Business ID to retrieve pending shared offsite signal container business objects for |
| `limit` | integer | No | Maximum number of items to return (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve from the pending shared offsite signal container business objects |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Owned Ad Accounts

**Slug:** `METAADS_LIST_PENDING_OWNED_AD_ACCOUNTS`

Tool to retrieve pending owned ad accounts for a Business Manager account from Meta Marketing API. Use when you need to list ad accounts with pending ownership status for a specific business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pending ad accounts to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each pending ad account. Common fields: id, account_id, name, currency, timezone_name, account_status. |
| `business_id` | string | Yes | The Business ID to retrieve pending owned ad accounts for. This is the ID of the Business Manager account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Owned Pages

**Slug:** `METAADS_LIST_PENDING_OWNED_PAGES`

Tool to retrieve Pages with pending ownership status for a Business Manager from Meta Marketing API. Use when you need to get a list of Facebook Pages that are pending approval or verification for a business to own.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of pages to return per request (default 25) |
| `fields` | string | No | Comma-separated list of Page fields to return. Common fields include: id, name, category, access_token, category_list, tasks, fan_count, link, picture, verification_status. If not specified, only basic fields (id, name) are returned. |
| `business_id` | string | Yes | The ID of the Business Manager to list pending owned pages for. This should be the business ID, not a user ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pending Users

**Slug:** `METAADS_LIST_PENDING_USERS`

Tool to retrieve pending users from a Business Manager in Meta Marketing API. Use when you need to get information about users with pending invitations to a Business Manager.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Business Manager ID to retrieve pending users from |
| `limit` | integer | No | Maximum number of pending users to return per request (default 25) |
| `fields` | string | No | Comma-separated list of fields to return. Common fields include: id, email, name, role. Specify the fields you want to retrieve in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Received Audience Sharing Requests

**Slug:** `METAADS_LIST_RECEIVED_AUDIENCE_SHARING_REQUESTS`

Tool to retrieve all received audience sharing requests for a business using the Meta Marketing API. Use when you need to see which other businesses have requested to share custom audiences with your business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Business ID to retrieve received audience sharing requests for. This is the ID of the business entity that has received sharing requests from other businesses. |
| `limit` | integer | No | Maximum number of audience sharing requests to return (default 25) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List System Users

**Slug:** `METAADS_LIST_SYSTEM_USERS`

Tool to retrieve system users for a Meta Business Manager account. Use when you need to list all system users (non-human accounts used for API access) associated with a business.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of system users to return per page (default 25) |
| `fields` | string | No | Comma-separated list of fields to retrieve for each system user. Common fields include: id, name, role. The 'id' field returns the system user's unique identifier, 'name' returns the display name, and 'role' indicates the permission level. |
| `business_id` | string | Yes | The ID of the business to retrieve system users for. This is the Business Manager ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Targeting Search

**Slug:** `METAADS_LIST_TARGETING_SEARCH`

Tool to search for targeting options in Meta Ads Marketing API. Use when you need to find interests, locations, demographics, schools, or employers for ad targeting purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | The search query string to find targeting options. For example, 'fitness' to find fitness-related interests, or 'New York' to find location-based targeting. |
| `type` | string ("adinterest" | "adgeolocation" | "adTargetingCategory" | "adeducationschool" | "adworkemployer") | Yes | The targeting search type to query. Options: 'adinterest' (interests), 'adgeolocation' (locations), 'adTargetingCategory' (targeting categories), 'adeducationschool' (schools), 'adworkemployer' (employers). |
| `class` | string | No | The demographic class for refined searches. Common values: 'demographics', 'family_statuses', 'income', 'industries', 'life_events'. Use this to narrow down search results to specific demographic categories. |
| `limit` | integer | No | Maximum number of results to return. If not specified, the API will use its default limit. |
| `location_types` | array | No | For geolocation searches (type='adgeolocation'), specify location types to filter results. Common values: 'city', 'country', 'region', 'zip'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Video Tags

**Slug:** `METAADS_LIST_VIDEO_TAGS`

Return one page of TaggableSubject entries from a Video's `/tags` edge. This is video-only: the connected access token must be able to read that Video and its visible tags, so results depend on the video's ownership, privacy, and the token's Page or user permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum video tags to return in this page (1-100). |
| `cursor` | string | No | Opaque next_cursor from a previous call. Omit it for the first page and pass it back unchanged. |
| `fields` | array | No | Video-tag fields to return. The edge returns a TaggableSubject (`id`, `name`) and can return `created_time`. |
| `video_id` | string | Yes | Graph ID of the Video whose tags should be read. Composite and non-numeric Graph IDs are accepted; this action does not read tags from arbitrary object types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Preview Ad Creative

**Slug:** `METAADS_PREVIEW_AD_CREATIVE`

Preview Ad Creative

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creative_id` | string | Yes |          ID of the ad creative to preview.         Get this from:         - CreateAdCreative response         - Existing ad creative lookup         Format: 23842938523454          |
| `thumbnail_width` | integer | No |          Width of the preview thumbnail in pixels.         - Default: 150px         - Min: 50px         - Max: 1200px         Larger sizes give better quality but load slower.          |
| `thumbnail_height` | integer | No |          Height of the preview thumbnail in pixels.         - Default: 120px         - Min: 50px         - Max: 1200px         Choose based on your display needs.          |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Ad Sets

**Slug:** `METAADS_READ_ADSETS`

Retrieve ad sets from a Meta ad account using the Marketing API. Returns information about the ad sets including their status, targeting, and other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of adsets to return |
| `fields` | array | No | Fields to return for each ad set. Select from the AdSetField enum values (e.g., name, id, status, daily_budget, targeting, campaign_id, effective_status). Defaults to name, id, and status if not specified. |
| `date_preset` | string ("today" | "yesterday" | "this_month" | "last_month" | "this_quarter" | "maximum" | "data_maximum" | "last_3d" | "last_7d" | "last_14d" | "last_28d" | "last_30d" | "last_90d" | "last_week_mon_sun" | "last_week_sun_sat" | "last_quarter" | "last_year" | "this_week_mon_today" | "this_week_sun_today" | "this_year") | No | Predefined date range used to aggregate insights metrics. Values are case-insensitive (e.g., 'this_year' or 'THIS_YEAR'). |
| `is_completed` | boolean | No | Filter adsets by completed status |
| `ad_account_id` | string | Yes | ID of the ad account to fetch adsets from |
| `updated_since` | integer | No | Time since the Adset has been updated (in seconds) |
| `effective_status` | array | No | Filter adsets by their effective status. Values are case-insensitive (e.g., 'active' or 'ACTIVE'). |
| `time_range_since` | string | No | Start date in YYYY-MM-DD format for custom date range |
| `time_range_until` | string | No | End date in YYYY-MM-DD format for custom date range |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Conversion Events

**Slug:** `METAADS_SEND_CONVERSION_EVENTS`

Irreversibly submit 1-1,000 validated server conversion events to a Meta Pixel or dataset. A test_event_code routes events to Test Events but does not prevent targeting or measurement side effects; production submission requires explicit confirmation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `events` | array | Yes | Batch of 1-1,000 server events. Local validation rejects the complete call when any event is invalid. |
| `upload_id` | string | No | Caller-defined identifier shared by events in one offline upload. |
| `upload_tag` | string | No | Caller-defined offline upload tag. |
| `namespace_id` | string | No | Namespace ID for applicable offline uploads. |
| `partner_agent` | string | No | Stable lowercase integration or partner identifier sent with the events. |
| `upload_source` | string | No | Source label for an offline upload. |
| `test_event_code` | string | No | Current Events Manager Test Events code. Test Events are not dropped and can still affect targeting and measurement; omit only for an explicitly confirmed production submission. |
| `confirm_production` | boolean | No | Set true only to submit without test_event_code. This local safety confirmation is never sent to Meta; Test Events can still affect targeting and measurement. |
| `pixel_or_dataset_id` | string | Yes | Numeric Pixel ID for website events or dataset ID for offline/multi-source events. Never pass an ad account ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ad Creative

**Slug:** `METAADS_UPDATE_AD_CREATIVE`

Update Ad Creative

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the ad creative. Use descriptive names to organize your creatives. |
| `status` | string ("ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED") | No | New status for the ad creative. ACTIVE enables the creative, PAUSED disables it temporarily, DELETED removes it, ARCHIVED stores it for reference. |
| `creative_id` | string | Yes | The ID of the ad creative to update. You can get this from the create_ad_creative or get_ad_creative actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Campaign

**Slug:** `METAADS_UPDATE_CAMPAIGN`

Update an existing advertising campaign using the Meta Marketing API. Allows modification of campaign properties like name, status, budget, and bidding strategy. Only the fields that need to be updated should be included in the request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the campaign |
| `status` | string ("ACTIVE" | "PAUSED" | "DELETED" | "ARCHIVED") | No | Updated status of the campaign |
| `spend_cap` | number | No | Updated spend cap for the campaign in account currency (minimum value $100 USD) |
| `campaign_id` | string | Yes | ID of the campaign to update |
| `bid_strategy` | string ("LOWEST_COST_WITHOUT_CAP" | "LOWEST_COST_WITH_BID_CAP" | "COST_CAP" | "LOWEST_COST_WITH_MIN_ROAS") | No | Updated bidding strategy for the campaign |
| `daily_budget` | number | No | Updated daily budget limit in account currency Set only one of `daily_budget`, `lifetime_budget`, or `spend_cap` per request — they are mutually exclusive based on the campaign's buying type. |
| `lifetime_budget` | number | No | Updated lifetime budget limit in account currency |
| `special_ad_categories` | array | No | Updated list of special ad categories that apply to this campaign |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Ad Image

**Slug:** `METAADS_UPLOAD_AD_IMAGE`

Upload an image for use in Meta ad creatives using the Marketing API. The image can later be referenced by its hash when creating ad creatives.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | Yes | Image to upload. Provide it through this action's file input; the file's name, media type, and bytes are sent to Meta. |
| `ad_account_id` | string | Yes | ID of the ad account to upload the image to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
