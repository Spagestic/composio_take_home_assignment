# Plaid MCP

Plaid MCP gives authorized teams read-only Production diagnostics and analytics for Items, Link conversion, usage metrics, API volumes, and team discovery.

- **Category:** model context protocol
- **Auth:** DCR_OAUTH
- **Composio-managed OAuth available?** No
- **Tools:** 5
- **Triggers:** 0
- **Slug:** `PLAID_MCP`
- **Version:** 20260910_00

## Tools

### Plaid debug item

**Slug:** `PLAID_MCP_PLAID_DEBUG_ITEM`

Diagnose a Plaid item by retrieving its state information.
This tool provides comprehensive information about why an item may not be working properly.

<when_to_use>
Use this tool when you need to diagnose why an item is not functioning as expected
</when_to_use>

<description>
In the response, you will see the following information:
1. Item State:
- "Never extracted": no extraction has been attempted for this item yet
- "Successful": The most recent extraction was successful
- "Retrying": The most recent extraction encountered a temporary issue and is being retried
- "Needs user attention": The item requires user input and client access is not permitted
- "Needs user attention (with access)": The item requires user input but client access is permitted

2. Item Consent State:
- Boolean indicating whether the item has active user consent
- If an item is not consented, it cannot perform extractions or updates

3. Item Deleted At:
- If set to a non-zero value, indicates when the item was deleted
- Deleted items cannot retrieve data, and cannot be patched as it is requested by the end users
- If the item is not deleted yet, the response will be "not available"

4. Known Issues:
- Includes description and status of any known issues affecting the item
- May provide insights into ongoing problems with the connection

When diagnosing an item, follow this sequence:
- First, check if the item is deleted. If yes, the item cannot work properly.
- Second, if the item is not deleted but lacks active consent, it cannot function properly.
- Third, if the item is not deleted:
	* Check item state. If it indicates the item needs user attention, the item requires manual intervention.
	* Note any known issues as supplementary information, though these are usually not the primary cause of problems.
	- If all diagnostics look normal but the user still reports issues, advise them to contact Plaid support.
</description>

<important> 
- If an item is deleted, it is not working properly. It is not patchable, you should suggest the user to create a new item. 
- If an item is missing active consent, it is not working properly. You should suggest the user to use Update Mode to reauthorize the item.
- If an item state indicates it needs user attention, the user should use Update Mode to reauthorize the item.
- If running into error "the item does not belong to the team", it means the item is not associated with the team. You must inform the user that the 
  item does not belong to their selected team. You may ask if they would like to try other teams associated with their account, but do not automatically attempt other teams.
- If an item cannot be found, it's possible the item is not in the Production environment. When explaining the error, inform the user that this is a possible reason for the error.
</important>


#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item_id` | string | Yes | Item ID to debug |
| `team_id` | string | Yes | The team ID the user belongs to and wants to query against. If no team ID is available in the conversation context, you MUST use the "plaid_list_teams" tool to fetch all teams associated with the user and prompt them to select one. Use their selected team_id when calling this tool. |

### Plaid get link analytics

**Slug:** `PLAID_MCP_PLAID_GET_LINK_ANALYTICS`

Retrieves Plaid Link analytics data for analyzing user conversion and error rates.

<when_to_use>
Use this tool when you need to:
- Analyze Link conversion funnel metrics
- Track user progression through the Link flow
- Monitor error rates over time
- Evaluate Link performance and user experience

Some common use cases:
- Monitoring Link conversion rates and identifying drop-offs
- Analyzing conversion trends over specific time periods
- Tracking error patterns and frequency (both by type and total via CountEntities)
- Generating comprehensive Link performance reports
- Comparing performance across different stages of the Link flow
</when_to_use>

<description>
The response includes three main components:
1. Funnel Data (funnel):
   Tracks user progression through key Link stages with counts:
   - countAtLinkOpen: Number of users who opened Link
   - countAtSelectInstitution: Number who selected an institution
   - countAtHandoff: Number who completed the handoff process
2. Conversion Over Time (conversionOverTime):
   Time series data showing conversion trends with:
   - start: Timestamp marking the start of the series
   - series: Array of named data series, where each contains:
	 * name: Identifier for the conversion metric
	 * data: Array of counts, can contain null values
3. Errors Over Time (errorsOverTime):
   Time series tracking error occurrences with:
   - start: Timestamp marking the start of the series
   - series: Array of named data series, where each contains:
	 * name: Error type identifier (includes "CountEntities" series for total errors across all types)
	 * data: Array of error counts
</description>

<important>
- If user does not provide a date range, please ask them to provide one. You could ask if they want 
  to see the data for the last 30 days and you could use the current date as the end date. Note that
  the earliest date available for Link analytics data is September 1, 2023 (9/1/2023).
</important>


#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The team ID the user belongs to and wants to query against. If no team ID is available in the conversation context, you MUST use the "plaid_list_teams" tool to fetch all teams associated with the user and prompt them to select one. Use their selected team_id when calling this tool. |
| `to_date` | string | Yes | End date for the analytics period in ISO format (YYYY-MM-DD) |
| `from_date` | string | Yes | Start date for the analytics period in ISO format (YYYY-MM-DD) |

### Plaid get tools introduction

**Slug:** `PLAID_MCP_PLAID_GET_TOOLS_INTRODUCTION`

Returns a list of all available tools with a brief introduction for each.
Use this tool when users ask questions like "What is this Plaid MCP Server?" or "What tools are available?". 

Your response should follow this format:
<quote>
This is an official Plaid MCP Server made by Plaid. It provides the following functionalities:		
  * <tool_name> - <tool_description>
  * <tool_name> - <tool_description>
  ...
</quote>

### Plaid get usages

**Slug:** `PLAID_MCP_PLAID_GET_USAGES`

Retrieves usage metrics for Plaid products and services.
    
<when_to_use>
Use this tool when you need to:
- Get usage data for specific metrics over a time period
- Track product usage and consumption
- Monitor API request volumes
- Generate usage reports for billing purposes
</when_to_use>

<details>
The data shows how many times each Plaid product was used within the specified
date range for certain metrics, with results aggregated by day. Common metrics
include number of API calls, authentication requests, and other product-specific
usage counts.
</details>

<product_mapping>
The key is the product name, and the value is the list of metric types corresponding to that product.

- Auth: ["auth-request", "auth-unverified-request"]
- Balance: "balance-request"
- Identity: ["identity-request", "identity-match-request"]
- Transactions: ["transactions", "transactions-add", "transactions-remove", "transactions-active", "transactions-refresh"]
- Investments: ["investments-h-add", "investments-h", "investments-h-remove", "investments-h-active", "investments-t-add", "investments-t", "investments-t-remove", "investments-t-active"]
- Investments Move: "investments-auth-request"
- Liabilities: ["liabilities-add", "liabilities-remove", "liabilities-active", "liabilities"]
- Assets: ["assets-add", "assets-pdf-request", "assets-refresh", "assets-refresh-monthly", "assets-audit-request", "assets-history-request"]
- Payments: "payment_initiation-initd"
- Enrich: "enriched-transaction"
- Signal: "momo-frs-eval-request"
- Income: ["income-bank-request", "income-bank-refresh", "income-payroll-request", "income-payroll-refresh", "income-document-request", "income-document-parsing", "income-doc-bank-statemnt", "income-document-fraud"]
- Statements: "statements-single-doc"
- Identity Verification: ["idv-base", "idv-lightning-group-1", "idv-lightning-group-2", "idv-lightning-group-3", "idv-document", "idv-selfie-check"]
- Consumer Report: ["cra-bank-income-request", "cra-base-report-create", "cra-base-report-refresh", "cra-network-insights-req", "income-insights-refresh", "partner-prism-attrib", "partner-prism-scores"]
- Monitor: ["monitor-wl-rescan-add", "monitor-wl-rescan-remove", "monitor-wl-base"]
- Hosted Link Delivery: ["hosted-link-delivery-eml", "hosted-link-delivery-sms"]
- Transfer: ["momo-transfer-ach", "momo-transfer-ach-sd", "momo-wire-request", "momo-rtp-request", "momo-transfer-g-ach", "momo-transfer-g-ach-sd", "momo-transfer-authorized", "momo-transfer-manual-req", "momo-transfer-return-unauthorized", "momo-transfer-return-noc", "momo-transfer-return-other"]

<note>
- If a user asks for a product similar to one on this list and you're 99% confident it's the same product, query for the product on this list and inform them which product you're querying for. Otherwise, do not query an unrelated product.
- "momo-frs-eval-request" is the metric type used in the API for Signal. When communicating with users, refer to it as "signal-request" instead.
</note>
</product_mapping>

<example_1>
User: "I want to see the usage data for Transactions"
Reasoning: The metric types for Transactions are ["transactions", "transactions-add", "transactions-remove", "transactions-active", "transactions-refresh"].

Input parameters:
{
  "metric_types": ["transactions", "transactions-add", "transactions-remove", "transactions-active", "transactions-refresh"],
  // other fields ...
}
</example_1>

<example_2>
User: "What metrics are available for Identity Verification?"
Response: We support the following metrics for Identity Verification: idv-base, idv-lightning-group-1, idv-lightning-group-2, idv-lightning-group-3, idv-document, idv-selfie-check.
</example_2>

<important>
- If metric_types aren't provided, use "auth-request" as the default
- If no date range is provided, ask the user for one (suggest last 30 days with current date as end date)
- The maximum look-back period is limited to 1 year from the current date
</important>

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The team ID the user belongs to and wants to query against. If no team ID is available in the conversation context, you MUST use the "plaid_list_teams" tool to fetch all teams associated with the user and prompt them to select one. Use their selected team_id when calling this tool. |
| `period_end` | string | Yes | End date for the usage period in ISO format (YYYY-MM-DD) |
| `metric_types` | array | No | List of metric types to retrieve usage data for. Only the listed values are valid. If not provided, the default is "auth-request". |
| `period_start` | string | Yes | Start date for the usage period in ISO format (YYYY-MM-DD) |

### Plaid list teams

**Slug:** `PLAID_MCP_PLAID_LIST_TEAMS`


Retrieve teams associated with the user and present them as a selectable list. 
After the user selects a team, capture the team_id of the selected team for use 
in subsequent tool requests.

<important>
1. You MUST return a numbered list of teams with their names clearly displayed in a human readable format in the conversation dialog
	- Format each team as: "{number}. {company name} (ID: {team_id})"
	- Example: "1. XXX Corporation (ID: fakeid00000000000000000)"
2. Ask the user explicitly to select a team by providing either:
	- The number from the list (e.g., "Please select team 3")
	- The exact team name (e.g., "I want to use XXX Corporation")
	- The team ID directly (e.g., "Use team fakeid00000000000000000")
3. After user selection, confirm their choice with a clear acknowledgment:
	- "You've selected: {company name} (ID: {team_id})"
4. Store and use this team_id for ALL subsequent tool requests that require a team_id parameter
5. Handle edge cases appropriately:
	- If only one team exists, auto-select it and confirm the selection
	- If no teams exist, clearly communicate this limitation to the user
	- If the response is empty, the user is not a member of any teams. Inform the user that they should 
		visit dashboard.plaid.com to join or create a team.
</important>
