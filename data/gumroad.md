# Gumroad

Gumroad simplifies selling digital goods, physical products, and memberships by offering a streamlined checkout, marketing tools, and direct payout options

- **Category:** ecommerce
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 7
- **Triggers:** 0
- **Slug:** `GUMROAD`
- **Version:** 20260721_00

## Tools

### Get Resource Subscriptions

**Slug:** `GUMROAD_GET_RESOURCE_SUBSCRIPTIONS`

Tool to show all active subscriptions of the user for the input resource. Use when you need to review existing webhooks before adding a new one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resource_name` | string ("sale" | "refund" | "dispute" | "dispute_won" | "cancellation" | "subscription_updated" | "subscription_ended" | "subscription_restarted") | Yes | Name of the resource to list subscriptions for. One of the eight supported event types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Sales

**Slug:** `GUMROAD_GET_SALES`

Tool to retrieve all successful sales by the authenticated user; excludes failed charges, abandoned carts, and page views — conversion rates cannot be derived from this data. Use when you need to list your Gumroad sales, optionally filtering by email, date range, product, or pagination. For high sales volumes, combine product_id and/or after/before filters with page to avoid large unfiltered result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for paginated results; minimum is 1. |
| `after` | string | No | Only include sales after this ISO8601 date/time (e.g., '2023-01-01T00:00:00Z'). |
| `email` | string | No | Filter sales by customer email address. |
| `before` | string | No | Only include sales before this ISO8601 date/time. |
| `product_id` | string | No | Filter sales by a specific product ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `GUMROAD_GET_USER`

Tool to retrieve the authenticated user's data. Use when you need the current user's profile details after authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Products

**Slug:** `GUMROAD_LIST_PRODUCTS`

Tool to retrieve all products for the authenticated Gumroad account. Use when you need product IDs for downstream operations like license verification, subscriber retrieval, or offer-code management.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Subscribe to Resource

**Slug:** `GUMROAD_SUBSCRIBE_TO_RESOURCE`

Tool to subscribe to a resource. Use when you need to receive real-time event webhooks after creating your webhook endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `post_url` | string | Yes | Your endpoint URL that will receive HTTP POST notifications. |
| `resource_name` | string ("sale" | "refund" | "dispute" | "dispute_won" | "cancellation" | "subscription_updated" | "subscription_ended" | "subscription_restarted") | Yes | One of the eight supported Gumroad resources to subscribe to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unsubscribe From Resource

**Slug:** `GUMROAD_UNSUBSCRIBE_FROM_RESOURCE`

Tool to unsubscribe from a resource. Use after verifying the subscription ID exists to remove webhook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resource_subscription_id` | string | Yes | Unique ID of the resource subscription to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify License

**Slug:** `GUMROAD_VERIFY_LICENSE`

Tool to verify a Gumroad license key against a specific product. Use when you need to check if a license key is valid, check usage count, or verify membership entitlement for software licensing or gated content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The product ID to verify the license against. Required for products created on or after Jan 9, 2023. |
| `license_key` | string | Yes | The license key to verify. |
| `increment_uses_count` | boolean | No | Whether to increment the uses count for the license. Defaults to true if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
