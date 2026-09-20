# Cloudflare

Cloudflare is a global network designed to make everything you connect to the Internet secure, private, fast, and reliable.

- **Category:** security & identity tools
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 20
- **Triggers:** 0
- **Slug:** `CLOUDFLARE`
- **Version:** 20260826_00

## Tools

### Create DNS record

**Slug:** `CLOUDFLARE_CREATE_DNS_RECORD`

Tool to create a new DNS record within a specific zone. Requires write privileges and makes live changes to the zone. Use after obtaining the zone ID via CLOUDFLARE_LIST_ZONES to programmatically add DNS entries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ttl` | integer | No | Time to live in seconds; minimum 1. Use 1 for automatic TTL |
| `data` | object | No | Additional data object for record types like SRV, LOC, or CAA |
| `name` | string | Yes | DNS record name (e.g., example.com or www.example.com) |
| `tags` | array | No | List of tags to associate with the record |
| `type` | string ("A" | "AAAA" | "CNAME" | "MX" | "TXT" | "SRV" | "LOC" | "CAA") | Yes | DNS record type |
| `comment` | string | No | Human-readable comment for the DNS record |
| `content` | string | Yes | DNS record content (e.g., IP for A records) |
| `proxied` | boolean | No | Whether the record is receiving Cloudflare performance and security benefits |
| `priority` | integer | No | Priority for MX, SRV, and URI records; required for those types |
| `zone_identifier` | string | Yes | Zone identifier (UUID) where the DNS record will be created |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create WAF List

**Slug:** `CLOUDFLARE_CREATE_LIST`

Create a new empty custom list for use in WAF rules and filters. Lists can contain IP addresses, hostnames, ASNs, or redirects. Once created, use separate actions to add items to the list. Note: List availability depends on plan (Free: 1 list, Pro/Business: 10 lists, Enterprise: 1000 lists). Example: CREATE_LIST(account_id="abc123", kind="ip", name="blocklist", description="Block malicious IPs")

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("ip" | "redirect" | "hostname" | "asn") | Yes | Type of the list (required). One of 'ip', 'redirect', 'hostname', or 'asn'. Cannot be null - omit the field if not providing a value. |
| `name` | string | Yes | Informative name for the list (required, max 50 characters). Use this name in filter and rule expressions. Cannot be null - omit the field if not providing a value. |
| `account_id` | string | Yes | Cloudflare account identifier (required, max 32 characters). Cannot be null - omit the field if not providing a value. |
| `description` | string | No | Optional description of the list (max 500 characters). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Zone

**Slug:** `CLOUDFLARE_CREATE_ZONE`

Creates a new DNS zone (domain) in Cloudflare. A zone represents a domain and its DNS records. Use this when adding a new domain to manage with Cloudflare. Requires account ID (obtainable via LIST_ACCOUNTS). The zone will be in 'pending' status until nameservers are updated at the domain registrar.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The domain name for the new zone |
| `type` | string ("full" | "partial" | "secondary") | No | Zone setup mode: 'full' (DNS hosted by Cloudflare), 'partial' (CNAME setup), or 'secondary' (secondary DNS) |
| `account` | object | No | Container for account ID. If not provided, the zone will be created under the default account associated with the API credentials. Must be structured as `{'id': '<account_id>'}` where `id` is obtained via CLOUDFLARE_LIST_ACCOUNTS. |
| `jump_start` | boolean | No | Auto-import existing DNS records from the domain. Ignored for partial zones. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete DNS Record

**Slug:** `CLOUDFLARE_DELETE_DNS_RECORD`

Tool to delete a DNS record within a specific zone. Deletion is immediate and irreversible. Use only after confirming both zone and record IDs. Requires write privileges on the zone. Example: "Delete DNS record 372e6795... from zone 023e105f4ecef..."

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `identifier` | string | Yes | Identifier of the DNS record to delete (e.g., '372e67954025e0ba6aaa6d586b9e0b59'). |
| `zone_identifier` | string | Yes | Identifier of the DNS zone (e.g., '023e105f4ecef8ad9ca31a8372d0c353'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete WAF List

**Slug:** `CLOUDFLARE_DELETE_LIST`

Tool to delete a WAF list. Use when you need to remove a list after verifying no filters reference it. Example: DELETE_LIST(account_id="<account_id>", list_id="<list_id>")

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Unique identifier of the WAF list to delete |
| `account_id` | string | Yes | Cloudflare account identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Zone

**Slug:** `CLOUDFLARE_DELETE_ZONE`

Tool to delete a zone. Use after confirming the zone identifier to permanently remove a DNS zone and all its DNS records from your Cloudflare account. Example: DELETE_ZONE(zone_identifier="023e105f4ecef8ad9ca31a8372d0c353")

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zone_identifier` | string | Yes | Identifier of the zone to delete (32-character hex string). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bot Management Settings

**Slug:** `CLOUDFLARE_GET_BOT_MANAGEMENT_SETTINGS`

Tool to retrieve a zone's Bot Management configuration (Bot Fight Mode / Super Bot Fight Mode / Enterprise Bot Management). Use after identifying the correct zone_id (e.g., via CLOUDFLARE_LIST_ZONES). This tool is the canonical way to audit bot-related configuration; firewall rules are adjacent controls but not equivalent to Bot Management settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zone_id` | string | Yes | Zone identifier (UUID) to retrieve Bot Management settings for. Obtain this from List Zones action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List WAF Lists

**Slug:** `CLOUDFLARE_GET_LISTS`

Tool to fetch all WAF lists (no items) for an account. Results are paginated; iterate using page and per_page parameters until result_info.total_pages is reached to retrieve all lists. Use after confirming account ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account_id` | string | Yes | Cloudflare account identifier (32 hexadecimal characters) Must match the account owning the target zone to avoid cross-account data mixing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Account Members

**Slug:** `CLOUDFLARE_LIST_ACCOUNT_MEMBERS`

Lists all members of a Cloudflare account with their roles, permissions, and status. Returns detailed information about each account member including their user details (name, email, 2FA status), assigned roles with granular permissions, membership status (accepted/pending/rejected), and access policies. Supports filtering by status, sorting by various fields, and pagination for accounts with many members. Use this action when you need to: - View all users with access to a Cloudflare account - Audit account member permissions and roles - Check membership status of invited users - List members with specific roles or statuses Requires the account ID which can be obtained using the List Accounts action. Note: caller's account role may restrict visibility of some members if permissions are insufficient.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (must be >= 1). Defaults to 1 if not specified. |
| `order` | string ("user.first_name" | "user.last_name" | "user.email" | "status") | No | Field to sort results by. Options: 'user.first_name' (user's first name), 'user.last_name' (user's last name), 'user.email' (user's email address), or 'status' (membership status). Combine with 'direction' parameter. |
| `status` | string ("accepted" | "pending" | "rejected") | No | Filter members by their membership status: 'accepted' (active members), 'pending' (invited but not yet accepted), or 'rejected' (declined invitations). Omit to return all members regardless of status. |
| `per_page` | integer | No | Number of results to return per page (must be between 5 and 50). If not specified, API default (typically 20) is used. |
| `direction` | string ("asc" | "desc") | No | Sort direction for results: 'asc' for ascending or 'desc' for descending order. Works with the 'order' parameter. |
| `account_id` | string | Yes | The unique identifier (32-character hex string) of the Cloudflare account whose members you want to list |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Accounts

**Slug:** `CLOUDFLARE_LIST_ACCOUNTS`

List all Cloudflare accounts you have ownership or verified access to. Retrieves a paginated list of accounts with their details including account ID, name, type, settings, and creation date. An empty or partial result may indicate insufficient API token scope or permissions, not the absence of accounts. When multiple accounts are returned, confirm the intended account_id before performing any write operations to avoid acting on unintended environments. Use this when you need to: - Discover available accounts before performing account-specific operations - Find an account ID for other API calls that require an account identifier - Audit account configurations and settings - Filter accounts by name or paginate through large account lists

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter accounts by name Name matching may return multiple results for similar names; always verify the correct account_id from the response. |
| `page` | integer | No | Page number to retrieve, starting from 1 |
| `per_page` | integer | No | Number of results per page, between 5 and 50 |
| `direction` | string ("asc" | "desc") | No | Direction to order results: 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DNS records

**Slug:** `CLOUDFLARE_LIST_DNS_RECORDS`

Tool to list and search DNS records in a Cloudflare zone. Use when you need to find existing DNS record IDs for update or delete operations, especially after a "record already exists" error during creation. Returns matching records with their IDs, names, types, content, and other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter by exact DNS record name (FQDN). Use this to find records matching a specific hostname. |
| `page` | integer | No | Page number for pagination. Start at 1. |
| `type` | string ("A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI") | No | Filter by DNS record type. Specify the exact record type to narrow results. |
| `match` | string ("all" | "any") | No | Filter matching logic: 'all' requires all filters to match (AND logic), 'any' requires at least one filter to match (OR logic). Defaults to 'all'. |
| `content` | string | No | Filter by exact DNS record content/value. Use this to find records pointing to a specific IP or target. |
| `proxied` | boolean | No | Filter by proxy status. Set to true for proxied records, false for DNS-only records. |
| `zone_id` | string | Yes | Zone identifier (UUID) to list DNS records from |
| `per_page` | integer | No | Number of records per page (1-5000000). Defaults to 100. Use lower values for faster responses. |
| `name_contains` | string | No | Filter by DNS record names containing this substring. Useful for partial matching. |
| `comment_contains` | string | No | Filter by comments containing this substring. |
| `content_contains` | string | No | Filter by DNS record content containing this substring. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Firewall Rules

**Slug:** `CLOUDFLARE_LIST_FIREWALL_RULES`

Tool to list firewall rules for a specific DNS zone. Use after confirming the zone ID to retrieve and audit current firewall rules. Does not expose Workers routes or other routing constructs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results, starting from 1 Check result_info.total_pages in the response to determine when all pages have been retrieved. |
| `match` | string ("all" | "any") | No | Match criteria when multiple filters provided: 'all' or 'any' |
| `order` | string | No | Field to order results by (e.g., 'priority', 'created_on') |
| `zone_id` | string | Yes | UUID of the zone to list firewall rules for |
| `per_page` | integer | No | Number of items per page (1-1000) |
| `direction` | string ("asc" | "desc") | No | Sort direction: 'asc' or 'desc' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Monitors

**Slug:** `CLOUDFLARE_LIST_MONITORS`

Tool to list all load-balancer monitors in a Cloudflare account. Use after creating or updating monitors to retrieve a paginated list. Response includes `result_info.total_pages` to determine when all pages have been fetched.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results (1-indexed) |
| `order` | string | No | Field to sort by (e.g., 'created_on', 'description') |
| `per_page` | integer | No | Number of monitors per page (max 100) |
| `direction` | string ("asc" | "desc") | No | Sort direction: 'asc' or 'desc' |
| `account_id` | string | Yes | Cloudflare account identifier |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Pools

**Slug:** `CLOUDFLARE_LIST_POOLS`

Tool to list all load balancer pools in a Cloudflare account. Use after confirming account ID to discover pool IDs. Paginate using `page` and `per_page`; check `result_info.total_pages` in the response to determine if additional pages exist.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (1-based). Use with per_page to control result pagination. |
| `monitor` | string | No | Filter pools by monitor ID. Only returns pools using this specific health check monitor. |
| `per_page` | integer | No | Number of pools to return per page (1-50). Defaults to returning all pools if not specified. |
| `account_id` | string | Yes | Cloudflare account identifier (UUID) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tunnels

**Slug:** `CLOUDFLARE_LIST_TUNNELS`

List Cloudflare Tunnel (cloudflared) tunnels in an account to discover tunnel IDs, names, and statuses. Use when you need to find a tunnel_id before performing tunnel operations like routing, DNS configuration, or debugging.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter tunnels by name. Use to find specific tunnels by their name. |
| `page` | integer | No | Page number for pagination, starting from 1. |
| `per_page` | integer | No | Number of tunnels per page. Use for pagination control. |
| `account_id` | string | Yes | Cloudflare account identifier |
| `is_deleted` | boolean | No | Filter by deletion status. Set to true to include deleted tunnels, false to exclude them. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Zones

**Slug:** `CLOUDFLARE_LIST_ZONES`

Lists, searches, sorts, and filters zones in the authenticated account. Use `page`/`per_page` to paginate; check `result_info.total_pages` in the response to iterate all pages. Does not return DNS records — extract `zone_id` from results before passing to zone-scoped tools (DNS, firewall, etc.). Only zones delegated to Cloudflare nameservers appear; empty results indicate scope or delegation constraints, not errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A domain name. Optional filter operators can be provided to extend and refine the search. |
| `page` | integer | No | Page number of paginated results. |
| `match` | string ("all" | "any") | No | Whether to match all search requirements or at least one (any). |
| `order` | string ("name" | "status" | "account.id" | "account.name" | "plan.id") | No | Field to order zones by. |
| `status` | string ("initializing" | "pending" | "active" | "moved") | No | A zone status |
| `account` | object | No | Filter zones by account ID and/or account name. |
| `per_page` | integer | No | Number of zones per page. |
| `direction` | string ("asc" | "desc") | No | Direction to order zones. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update DNS record

**Slug:** `CLOUDFLARE_UPDATE_DNS_RECORD`

Tool to update an existing DNS record within a specific zone. Use after confirming both zone and record identifiers; only provided fields are modified. Updates to records used by active tunnels take effect immediately and can disrupt live traffic.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ttl` | integer | No | Time to live in seconds; use 1 for 'automatic' TTL |
| `data` | object | No | Additional record-specific data for LOC, SRV, and CAA records |
| `name` | string | No | DNS record name (e.g., 'example.com') |
| `type` | string ("A" | "AAAA" | "CNAME" | "CERT" | "DNSKEY" | "DS" | "LOC" | "MX" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT" | "URI") | No | DNS record type |
| `content` | string | No | DNS record content (e.g., IP address for A records) |
| `proxied` | boolean | No | Whether the record is receiving Cloudflare's benefits |
| `priority` | integer | No | Priority for MX, SRV, and URI records; required for these record types |
| `identifier` | string | Yes | DNS record identifier (UUID) to update |
| `zone_identifier` | string | Yes | Zone identifier (UUID) of the DNS record to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update WAF List

**Slug:** `CLOUDFLARE_UPDATE_LIST`

Tool to update the description of a WAF list (cannot update items). Use after confirming list metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `list_id` | string | Yes | Unique identifier of the WAF list |
| `account_id` | string | Yes | Cloudflare account identifier |
| `description` | string | Yes | New description for the WAF list |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tunnel Configuration

**Slug:** `CLOUDFLARE_UPDATE_TUNNEL_CONFIGURATION`

Tool to update a remotely-managed Cloudflare Tunnel's configuration (ingress rules and routing). Use when you need to programmatically configure hostname-to-origin mappings for a tunnel. WARNING: This operation REPLACES the entire configuration - incorrect configuration can break routing and make services unreachable. Best practice: fetch current configuration first (if patching) to preserve existing rules. At least one ingress rule is required, and the last rule should typically be a catch-all (hostname='*' or omitted) with service='http_status:404'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config` | object | Yes | Complete tunnel configuration object including ingress rules. This REPLACES the entire configuration - fetch current config first if you need to patch rather than replace. |
| `tunnel_id` | string | Yes | UUID of the tunnel to configure. |
| `account_id` | string | Yes | Cloudflare account identifier where the tunnel resides. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Zone

**Slug:** `CLOUDFLARE_UPDATE_ZONE`

Tool to update properties of an existing zone; changes apply immediately to the live zone. Confirm zone ID and intended change with the user before calling. Only one field can be modified per call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("full" | "partial" | "secondary") | No | Zone type: 'full', 'partial', or 'secondary'. Only one of paused, type, or vanity_name_servers can be updated per call. |
| `paused` | boolean | No | Whether to pause the zone (true to pause, false to unpause). Only one of paused, type, or vanity_name_servers can be updated per call. |
| `zone_id` | string | Yes | Zone identifier (UUID) |
| `vanity_name_servers` | array | No | Custom name servers for vanity mode. Only one of paused, type, or vanity_name_servers can be updated per call. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
